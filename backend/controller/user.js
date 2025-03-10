const express = require("express");
const path = require("path");
const fs = require("fs");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt = require("bcrypt");
require("dotenv").config();




router.post("/create-user", upload.single("file"), catchAsyncErrors(async (req, res, next) => {
    console.log("Creating user...");
    let { name, email, password } = req.body;

    // Trim the email and password to remove extra spaces
    email = email.trim();
    password = password.trim();

    const userEmail = await User.findOne({ email });
    if (userEmail) {
        if (req.file) {
            const filepath = path.join(__dirname, "../uploads", req.file.filename);
            try {
                fs.unlinkSync(filepath);
            } catch (err) {
                console.log("Error removing file:", err);
                return res.status(500).json({ message: "Error removing file" });
            }
        }
        return next(new ErrorHandler("User already exists", 400));
    }

    let fileUrl = "";
    if (req.file) {
        fileUrl = path.join("uploads", req.file.filename);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("At Create ", "Password: ", password, "Hash: ", hashedPassword);

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: req.file?.filename || "",
            url: fileUrl,
        },
    }); 
    console.log(user);
    res.status(201).json({ success: true, user });
}));

router.post("/login-user", catchAsyncErrors(async (req, res, next) => {
    console.log("Logging in user...");

    let { email, password } = req.body;
    email = email.trim();  // Ensure email is trimmed
    password = password.trim();  // Ensure password is trimmed

    if (!email || !password) {
        return next(new ErrorHandler("Please provide both email and password.", 400));
    }

    const user_authen = await User.findOne({ email }).select("+password");

    if (!user_authen) {
        console.log("No user found with the provided email.");
        return next(new ErrorHandler("No such email found. Please register first.", 401));
    }

    // Compare the plain password with the hashed password from the database
    const isPasswordMatched = await bcrypt.compare(password,user_authen.password);
    console.log("Password Match Result:", isPasswordMatched);
    console.log("At Auth - Password: ", password, "Hash: ", user_authen.password);

    if (!isPasswordMatched) {
        console.log("Password mismatch.");
        return next(new ErrorHandler("Authentication failed. Invalid password.", 401));
    }

    // Successful login
    res.status(200).json({
        success: true,
        message: "Login successful.",
        user: {
            id: user_authen._id,
            email: user_authen.email,
            name: user_authen.name, // Include other relevant user details as needed
        },
    });
}));

router.get("/profile", catchAsyncErrors(async (req, res, next) => {
    const { email } = req.query;
    if (!email) {
        return next(new ErrorHandler("Please provide an email", 400));
    }
    const user = await User.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    res.status(200).json({
        success: true,
        user: {
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            avatarUrl: user.avatar.url
        },
        addresses: user.addresses,
    });
}));

router.post("/add-address", catchAsyncErrors(async (req, res, next) => {
    const { country, city, address1, address2, zipCode, addressType, email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    const newAddress = {
        country,
        city,
        address1,
        address2,
        zipCode,
        addressType,
    };

    user.addresses.push(newAddress);
    await user.save();

    res.status(201).json({
        success: true,
        addresses: user.addresses,
    });
}));

router.get("/addresses", catchAsyncErrors(async (req, res, next) => {
    const { email } = req.query;
    if (!email) {
        return next(new ErrorHandler("Please provide an email", 400));
    }
    const user = await User.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    res.status(200).json({
        success: true,
        addresses: user.addresses,
    });
}
));




module.exports = router;
