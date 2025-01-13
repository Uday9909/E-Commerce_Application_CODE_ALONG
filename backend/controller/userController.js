const express = require("express");
const path = require("path");
const User = require("../model/user"); // Corrected import path
const router = express.Router();
const { upload } = require("../utils/ErrorHandler");
const ErrorHandler = require("../utils/ErrorHandler"); // Ensure ErrorHandler is imported

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const userEmail = await User.findOne({ email });
        if (userEmail) {
            return next(new ErrorHandler("User already exists", 400));
        }

        // Validate file upload
        if (!req.file) {
            return next(new ErrorHandler("File upload is required", 400));
        }

        const filename = req.file.filename;
        const fileUrl = path.join("/uploads", filename); // Adjust path as needed

        // Create the user object
        const user = new User({
            name: name,
            email: email,
            password: password,
            avatar: {
                public_id: filename,
                url: fileUrl,
            },
        });

        // Save the user to the database
        await user.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
        });
    } catch (error) {
        next(error); // Pass errors to the error handler
    }
});

module.exports = router; // Export the router
