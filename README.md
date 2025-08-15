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

---

For more details, see `/docs` and code comments. Contributions and issues are welcome!
