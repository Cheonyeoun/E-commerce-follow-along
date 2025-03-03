const express = require("express");
const { createUser, getUsers } = require("../controller/userController");
const upload = require("../middleware/upload");

const router = express.Router();

// Route to create a new user (with image upload)
router.post("/users", upload.single("profileImage"), createUser);

// Route to get all users
router.get("/users", getUsers);

module.exports = router;
