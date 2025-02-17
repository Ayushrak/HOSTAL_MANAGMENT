// backend/models/Complaint.js
import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roomNo: { type: String, required: true },
  complaintCategory: { type: String, required: true },
  complaintType: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
}, { timestamps: true });

export default mongoose.model("Complaint", complaintSchema);
