const User = require('../models/user'); // Check if your file is 'user.js' or 'User.js'

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.getUserProfile = (req, res) => {
    res.json({ message: "Profile working!" });
};