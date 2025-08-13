# FoodPlanner

 **Backend:** Node.js, Express, MongoDB, JavaScript
 **Frontend:** React, JavaScript

## Tools Used
- **Backend:** Node.js, Express, MongoDB, TypeScript
- **Frontend:** React, TypeScript
- **Authentication:** JWT (JSON Web Token)
- **DevOps:** Docker, GitHub Actions (CI/CD)
- **Testing:** Jest, Supertest (backend); React Testing Library (frontend)

## Backend Folder Structure
└── src
	├── server.js      # Express app entry point
	├── models/        # Mongoose models (User, Food)
	├── routes/        # API routes (auth.js: register, login; food.js: CRUD)
	├── controllers/   # Business logic (authController.js, foodController.js)
	├── middleware/    # JWT auth (auth.js), error handling (errorHandler.js)
├── config/        # DB and environment config
├── tests/         # Unit/integration tests
```

## Frontend Folder Structure
│   ├── App.jsx      # Main app component
│   └── index.jsx    # Entry point
├── src
│   ├── components   # Register, Login, FoodList, FoodForm, DatePicker
│   ├── hooks        # Custom React hooks
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

## Frontend Features
- Register and login pages (JWT auth)
- Add food entry: description, time, date (via datepicker)
- Food list: displays entries instantly after adding
- Update/Delete buttons for each entry
- When viewing foods by date (using datepicker), update/delete buttons are disabled
- Date picker on selecting the day and previewing the food

## DevOps
- CI/CD pipeline with GitHub Actions for linting, testing, building, and deploying
- Docker setup for backend and frontend services
- Automated tests for backend and frontend

---

For more details, see `/docs` and code comments. Contributions and issues are welcome!
