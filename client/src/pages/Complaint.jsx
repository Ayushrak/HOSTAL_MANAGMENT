import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

export default function Complaint() {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    roomNo: "",
    complaintCategory: "",
    complaintType: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => formDataToSend.append(key, formData[key]));

    try {
      await axios.post("http://localhost:5000/api/complaints/submit", formDataToSend);
      toast.success("Complaint Submitted Successfully!");
    } catch (error) {
      toast.error("Failed to submit complaint");
    }
  };

  return (
    <div>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}
