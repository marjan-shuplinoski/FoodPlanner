# FoodPlanner

## Intro
FoodPlanner is a MERN stack application that allows users to register, log in, and manage their food entries. Users can add foods with a description and time, view their food history, and update or delete entries. The app is designed for simplicity, focusing on quick data entry and instant feedback.

## Tools Used
- **Backend:** Node.js, Express, MongoDB, TypeScript
- **Frontend:** React, TypeScript
- **Authentication:** JWT (JSON Web Token)
- **DevOps:** Docker, GitHub Actions (CI/CD)
- **Testing:** Jest, Supertest (backend); React Testing Library (frontend)

## Backend Folder Structure
```
/backend
├── models        # Mongoose models (User, Food)
├── routes        # API routes (auth, food)
├── controllers   # Route handlers
├── middleware    # JWT auth, error handling
├── config        # DB and environment config
├── tests         # Unit/integration tests
└── server.ts     # Entry point
```

## Frontend Folder Structure
```
/frontend
├── src
│   ├── components   # Register, Login, FoodList, FoodForm, DatePicker
│   ├── hooks        # Custom React hooks
│   ├── pages        # Main pages
│   ├── services     # API calls
│   ├── types        # TypeScript types
│   ├── tests        # Unit/integration tests
│   ├── App.tsx      # Main app component
│   └── index.tsx    # Entry point
```

## Models
### User
- `email`: string
- `password`: string (hashed)
- `createdAt`, `updatedAt`: Date

### Food
- `userID`: reference to User
- `time`: string (user input)
- `description`: string
- `date`: string (selected via datepicker)
- `createdAt`, `updatedAt`: Date

## Frontend Features
- Register and login pages (JWT auth)
- Add food entry: description, time, date (via datepicker)
- Food list: displays entries instantly after adding
- Update/Delete buttons for each entry
- When viewing foods by date (using datepicker), update/delete buttons are disabled

## DevOps
- CI/CD pipeline with GitHub Actions for linting, testing, building, and deploying
- Docker setup for backend and frontend services
- Automated tests for backend and frontend

---

For more details, see `/docs` and code comments. Contributions and issues are welcome!
