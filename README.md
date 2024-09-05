---

# TaskIt - Task Management Application

**TaskIt** is a comprehensive task management application built using **React** for the frontend and **Node.js** for the backend, with a microservice architecture. This project allows users to create, manage, and track tasks in a user-friendly interface, with features for user authentication, task creation, and notification management. It is designed to demonstrate both frontend and backend skills, leveraging technologies such as JWT for authentication, Docker for containerization, and Sequelize for database management.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [Usage](#usage)
7. [Environment Variables](#environment-variables)
8. [API Endpoints](#api-endpoints)
9. [Docker Support](#docker-support)
10. [Contributing](#contributing)
11. [License](#license)

---

## Features

- **User Registration & Authentication**: 
  - Secure user registration, login, and logout functionality using JWT (JSON Web Tokens).
  - Passwords are securely hashed using bcrypt.
  
- **Task Management**:
  - Create, update, delete, and view tasks.
  - Mark tasks as completed or pending.
  
- **Notification System**:
  - Users receive notifications related to task updates and completion.
  
- **Role-Based Access Control** (Future Feature):
  - Planned feature for differentiating between user roles and their permissions.
  
- **Responsive UI**:
  - Intuitive, mobile-friendly UI built with React.

---

## Technologies Used

### Frontend:
- **React** (Hooks, Context API)
- **React Router v6** (for navigation)
- **Axios** (for API requests)
- **Styled Components** (for component-level styling)

### Backend:
- **Node.js** (Express)
- **Sequelize ORM** (for database interactions)
- **JWT** (for authentication)
- **bcrypt** (for password hashing)
- **MySQL / SQLite** (database management)

### DevOps:
- **Docker** (for containerization of services)
- **Docker Compose** (to manage multi-service architecture)

---

## Project Structure

```bash
TaskIt/
├── backend/
│   ├── auth-service/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── authIndex.js
│   │   ├── authInit.sql
│   ├── notification-service/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── notificationIndex.js
│   │   ├── notificationInit.sql
│   ├── task-service/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── taskIndex.js
│   │   ├── taskInit.sql
│   ├── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.js
│   │   ├── index.js
├── .gitignore
├── docker-compose.yml
└── README.md
```

### Key Directories:
- **backend/auth-service/**: Manages user authentication and authorization services.
- **backend/notification-service/**: Handles notification logic and user notifications.
- **backend/task-service/**: Manages all task-related operations.
- **frontend/**: Contains all the React-based UI components and logic.

---

## Installation

To install and run this project locally, you must have **Node.js**, **Docker**, and **MySQL** (or SQLite) installed.

### 1. Clone the Repository
```bash
git clone https://github.com/YourUsername/TaskIt.git
cd TaskIt
```

### 2. Install Backend Dependencies
```bash
cd backend/auth-service
npm install
cd ../notification-service
npm install
cd ../task-service
npm install
```

### 3. Install Frontend Dependencies
```bash
cd frontend
npm install
```

---

## Running the Application

There are two ways to run the application: locally or with Docker.

### Running Locally

1. Set up your environment variables (see **Environment Variables** section).
2. Start each backend service (auth-service, notification-service, task-service):
   ```bash
   cd backend/auth-service
   npm start
   # In separate terminals, start the other services:
   cd ../notification-service
   npm start
   cd ../task-service
   npm start
   ```
3. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```

### Running with Docker

1. Ensure Docker is installed and running.
2. Build and start the containers using Docker Compose:
   ```bash
   docker-compose up --build
   ```
3. The application should now be accessible via `http://localhost:3000` (frontend) and backend services will run on their respective ports.

---

## Usage

### User Registration & Login

- Access the registration page to create an account.
- Login using your registered credentials.
- Once logged in, manage your tasks via the intuitive UI.

### Task Management

- Create new tasks by providing a title and description.
- Mark tasks as completed or update the task information.
- Delete tasks when no longer needed.

---

## Environment Variables

Each service requires specific environment variables. You can find the `.env` files in the following locations:
- `backend/auth-service/auth.env`
- `backend/notification-service/notification.env`
- `backend/task-service/task.env`

Ensure the following environment variables are defined in each `.env` file:
```bash
# Example for MySQL
DB_NAME=taskit_db
DB_USER=root
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=3306

JWT_SECRET=your_jwt_secret
```

---

## API Endpoints

Here are the key API endpoints:

### Auth Service (Port 3002)
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Authenticate and receive a JWT.

### Task Service (Port 3004)
- `GET /tasks`: Retrieve all tasks for the authenticated user.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update a task.
- `DELETE /tasks/:id`: Delete a task.

### Notification Service (Port 3003)
- `GET /notifications`: Retrieve all notifications for the authenticated user.
- `POST /notifications`: Create a new notification.

---

## Docker Support

The project supports Docker for easy containerization. Each microservice has its own `Dockerfile`, and the entire application can be managed using `docker-compose`.

To build and run the services:
```bash
docker-compose up --build
```

The services will be accessible via:
- **Frontend**: `http://localhost:3000`
- **Auth Service**: `http://localhost:3002`
- **Task Service**: `http://localhost:3004`
- **Notification Service**: `http://localhost:3003`

---

## Contributing

We welcome contributions! Please follow the steps below to contribute to the project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit and push to your branch (`git push origin feature-branch`).
5. Open a pull request and describe the changes made.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

