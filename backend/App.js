const express = require("express");
const app = express();
const ErrorHandler = require("./utils/ErrorHandler");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env"
    });
}

// Database Connection
const connectDatabase = require('./db/Database');
connectDatabase();

app.use(ErrorHandler);

module.exports = app;
