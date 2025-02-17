// backend/routes/complaintRoutes.js
import express from "express";
import multer from "multer";
import { submitComplaint, getPendingComplaints, markComplaintCompleted } from "../controllers/complaintController.js";

const router = express.Router();

// File Upload Setup
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.post("/submit", upload.single("file"), submitComplaint);
router.get("/pending", getPendingComplaints);
router.put("/complete/:id", markComplaintCompleted);

export default router;
