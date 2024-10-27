# FullStack-SpringBoot-React-Project

# Employee Management System

This is a Full Stack Employee Management System built with Spring Boot for the backend and React for the frontend.

## Features

- List all employees
- Add a new employee
- Update an existing employee
- Delete an employee

## Technologies Used

### Backend
- Java
- Spring Boot
- Spring Data JPA
- MySQL

### Frontend
- React
- React Router
- Axios for API calls
- Bootstrap for styling

## Setup and Installation

1. Clone the repository
2. Set up the backend:
   - Navigate to the backend directory
   - Configure your MySQL database settings in `application.properties`
   - Run the Spring Boot application
3. Set up the frontend:
   - Navigate to the frontend directory
   - Run `npm install` to install dependencies
   - Run `npm start` to start the React application

## Usage

Access the application by navigating to `http://localhost:3000` in your web browser.

## API Endpoints

- GET `/api/employees`: Fetch all employees
- POST `/api/employees`: Create a new employee
- GET `/api/employees/{id}`: Fetch an employee by ID
- PUT `/api/employees/{id}`: Update an employee
- DELETE `/api/employees/{id}`: Delete an employee
