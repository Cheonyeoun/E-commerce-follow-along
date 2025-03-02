const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Handle Mongoose invalid ID error
  if (err.name === "CastError") {
    const message = `Resource not found with this ID: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Handle duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  // Handle JWT errors
  if (err.name === "JsonWebTokenError") {
    const message = "Invalid token, please try again later";
    err = new ErrorHandler(message, 400);
  }

  // Handle expired JWT token
  if (err.name === "TokenExpiredError") {
    const message = "Token expired, please login again";
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
