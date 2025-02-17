import express from "express";
import { signup, login } from "../controllers/authController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.route("/signup").post(singleUpload,signup);
router.route("/login").post(login);

export default router;




