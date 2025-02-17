import express from "express";
import { updateUser, getAllUsers } from "../controllers/userController.js";
import authMiddleware from "../middleware/isAuthenticated.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.put("/update", authMiddleware, upload.single("photo"), updateUser);
router.get("/all", authMiddleware, getAllUsers);

export default router;
