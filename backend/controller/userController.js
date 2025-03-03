
// To import User Model
const User = require('../model/user'); 

// Create a new user
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const profileImage = req.file ? req.file.filename : null; // Save file name if uploaded
        const newUser = new User({ name, email, password, profileImage });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
};


// Get all users

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};

module.exports = { createUser, getUsers };
