import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import cloudinary from "../config/cloudinary.js";

// 🔹 User Signup
export const signup = async (req, res) => {
  try {
    const { username, college, regNo, email, mobile, year, city, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // 🔹 Hash the password before saving
    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    // 🔹 Upload Photo to Cloudinary
    let photoUrl = "";
    if (req.file) {
      const uploadResponse = await cloudinary.uploader.upload(req.file.path, { folder: "user_photos" });
      photoUrl = uploadResponse.secure_url;
    }

    // Create new user
    const newUser = new User({
      username,
      college,
      regNo,
      email,
      mobile,
      photo: photoUrl,
      year,
      city,
      password: hashpassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// 🔹 User Login
// 🔹 User Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (!password) return res.status(400).json({ message: "Password is required" });

    // 🔹 Compare hashed password
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      console.log("Login Failed: Incorrect password");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ message: "Login successful", token, user });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
