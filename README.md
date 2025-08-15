# FoodPlanner

 **Backend:** Node.js, Express, MongoDB, JavaScript
 **Frontend:** React, JavaScript

## Tools Used
- **Backend:** Node.js, Express, MongoDB, TypeScript
- **Frontend:** React, TypeScript
- **Authentication:** JWT (JSON Web Token)
- **DevOps:** Docker, GitHub Actions (CI/CD)
- **Testing:** Jest, Supertest (backend); React Testing Library (frontend)

## Frontend JWT Authentication

### JWT Usage
- JWT is used for authentication in the frontend.
- Token is stored in `localStorage` under the key `jwt_token`.
- API calls for register and login are handled in `src/services/auth.js`.
- On login/register, the token is saved and used for authenticated requests.
- Session state is restored on refresh by checking for the token in `localStorage`.
- Logout removes the token from `localStorage`.

#### Example Usage
```js
import { login, register, logout, getToken } from './src/services/auth.js';
```
See `src/services/auth.js` for implementation details.

## Frontend Hooks

This project provides two custom React hooks to simplify API usage and auth state:

- `useFoods(date, refreshKey = 0)` - located at `frontend/src/hooks/useFoods.js`.
	- Returns: `{ foods, loading, error }`.
	- Usage: fetches foods for a given date (ISO string or yyyy-mm-dd) and re-fetches when
		`date` or `refreshKey` changes.

- `useAuth()` - located at `frontend/src/hooks/useAuth.js`.
	- Returns: `{ token, loading, error, isAuthenticated, loginUser, registerUser, logoutUser }`.
	- Usage: manages authentication state and exposes helpers to login, register and logout.

Example:
```js
import useAuth from './frontend/src/hooks/useAuth';
import useFoods from './frontend/src/hooks/useFoods';

function MyComponent() {
	const { isAuthenticated, loginUser } = useAuth();
	const { foods, loading } = useFoods('2025-08-15');
	// ...
}
```
│   ├── tests        # Unit/integration tests
│   ├── App.tsx      # Main app component
- `email`: string
- `password`: string (hashed)
- `createdAt`, `updatedAt`: Date

### Food
- `userID`: reference to User
- `time`: string (user input)
- `description`: string
- `date`: string (selected via datepicker)
- `createdAt`, `updatedAt`: Date


## FoodForm Component
- Allows users to add food entries with date, time, and description.
- Controlled form with separate fields for date, time, and description.
- Calls `onAddFood` prop to add food and resets fields after submit.

## FoodList Component
- Displays foods for the selected date.
- Shows date & time, description, edit, and delete columns.
- Supports editing and deleting food entries via props.
- Edit button enables inline editing of description, Save updates backend and UI.
- Delete button removes entry from backend and updates UI.
- Shows loading and empty states.

## DevOps
- CI/CD pipeline with GitHub Actions for linting, testing, building, and deploying
- Docker setup for backend and frontend services
- Automated tests for backend and frontend

## Docker: Frontend

A production-ready Dockerfile and compose file are provided to build and serve the frontend as a static site with nginx.

Files added:
- `frontend/Dockerfile` - multi-stage build using Node to build and nginx to serve
- `frontend/nginx.conf` - nginx config with SPA fallback
- `frontend/.dockerignore`
- `docker-compose.frontend.yml` - easy local compose to build and run the frontend

Quick local steps (from repo root):

```bash
# build image
docker compose -f docker-compose.frontend.yml build

# run
docker compose -f docker-compose.frontend.yml up -d

# open http://localhost:5173
```

If your backend runs on a different host or port, set `VITE_API_URL` when building or running.

## Running Frontend Tests

Frontend tests use Vitest and React Testing Library. Quick commands (from `frontend/`):

```bash
npm install --legacy-peer-deps
npm test
```

Tests live under `frontend/src/__tests__/` and `frontend/src/hooks/__tests__/`.

---

For more details, see `/docs` and code comments. Contributions and issues are welcome!

## Docker: Backend

A production-ready Dockerfile and a Compose snippet are provided for the backend. The container runs the Express server on port 5000 and includes a simple HTTP health endpoint expected at `/health` (the server already exposes routes under `/api/*`).

Files added:
- `backend/Dockerfile` - production-focused image (non-root user, production deps only, healthcheck)
- `backend/.dockerignore` - ignores node_modules, env files, and build artifacts
- `docker-compose.backend.yml` - convenient local compose file for backend + MongoDB

Quick local steps (from repo root):

```bash
# build and start backend + mongo
docker compose -f docker-compose.backend.yml up --build -d

# stop
docker compose -f docker-compose.backend.yml down
```

Environment notes:
- The compose file reads `JWT_SECRET` from the environment (or uses a default). Prefer setting a strong secret in your shell or CI: `export JWT_SECRET=very_secret` before bringing the stack up.
- The backend expects a MongoDB URI in `MONGODB_URI`. The compose file wires a local `mongo` service on the default port and sets `MONGODB_URI=mongodb://mongo:27017/foodplanner`.
- In production, do not mount your source code as a volume into the container; the provided compose file builds the image from the `backend/` directory.

Health & troubleshooting:
- The container declares a healthcheck that probes `http://127.0.0.1:5000/health` inside the container. Ensure your `src/server.js` exposes a lightweight `/health` route that returns 200 when ready.
- Check logs with `docker compose -f docker-compose.backend.yml logs -f backend`.

