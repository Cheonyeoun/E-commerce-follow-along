const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./Routes/userRoutes");
const errorMiddleware = require("./middleware/error");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", userRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

module.exports = app;
