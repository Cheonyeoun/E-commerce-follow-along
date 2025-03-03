 #ECommerce-Follow-Along



##Milestone 1: Project Overview to summarize what was covered in the session.

##Project Overview

This project will guide you through building a full-stack e-commerce web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). You will learn how to implement key functionalities such as user authentication, product management, and order handling while gaining hands-on experience with REST APIs, database schema design, and frontend development with React.


###Key Features

-  User Authentication: login and registration with JWT.

-  Product Management: CRUD operations for products, with features like filtering and sorting.

-  Order Handling: Users can place and view orders.

-  REST API: Build scalable API endpoints for managing users, products, and orders.

-  Frontend: Responsive UI built with React for a smooth user experience.


###Technologies Used :

-  Frontend: React.js, Tailwind CSS

-  Backend: Node.js, Express.js

-  Database: MongoDB

## Milestone 2 : Project Setup and Login Page
-  Create a structured folder hierarchy for the project.
-  Set up a React app for the frontend.
-  Set up a Node.js server for the backend.
-  Using Tailwind CSS for streamlined styling.
-  Adding optional extensions for improving development efficiency.
-  Built a styled Login Page for the frontend.

## Milestone 3: Backend Setup and Database Integration  
 
-  **Created folders:**  config,controller,db,middleware,model,utils.
-  Created .env in config, which is used to store environmental variables in a node.js application.

- Made an Errorhandler.js in utils

-  Created auth.js, catchAsyncErrors.js, error.js in middlewares

- **MongoDB Connection:** Configure Mongoose, store credentials in `.env`.  

-  Set up server.js and App.js in the backend folder.

- In db made Database.js which is responsible for connecting your backend to MongoDB using Mongoose.

## Milesstone 4: User Management and File Uploads with Multer

- **Created a User Model:** Defined user schema with required fields.  
- **Developed User Controllers:**  
  - `createUser`: Handles user registration and saves user data.  
  - `getUsers`: Retrieves all registered users.  
- **Set Up Multer for File Uploads:** Configured middleware to handle image uploads.  
- **Created Routes for User Management:**  
  - `POST /users`: Register a new user with profile image upload.  
  - `GET /users`: Fetch all users from the database.  
- **Updated Error Handling:** Improved error handling with `ErrorHandler` and `catchAsyncErrors`.  
- **Tested Endpoints:** Verified functionality using Postman.  
