// backend/controllers/complaintController.js
import Complaint from "../models/Complaint.js";

// Submit a complaint
export const submitComplaint = async (req, res) => {
  try {
    const newComplaint = new Complaint({ ...req.body, file: req.file?.path });
    await newComplaint.save();
    res.status(201).json({ message: "Complaint Submitted Successfully!", newComplaint });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit complaint" });
  }
};

// Fetch all pending complaints
export const getPendingComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ status: "Pending" });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch complaints" });
  }
};

// Mark complaint as completed
export const markComplaintCompleted = async (req, res) => {
  try {
    await Complaint.findByIdAndUpdate(req.params.id, { status: "Completed" });
    res.json({ message: "Complaint marked as completed" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update complaint" });
  }
};
