// frontend/src/components/ComplaintDashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function ComplaintDashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/complaints/pending")
      .then((res) => setComplaints(res.data))
      .catch(console.error);
  }, []);

  const markCompleted = async (id) => {
    await axios.put(`http://localhost:5000/api/complaints/complete/${id}`);
    setComplaints(complaints.filter((c) => c._id !== id));
  };

  return (
    <div>
      {complaints.map((c) => (
        <div key={c._id}>
          <h4>{c.name} - {c.complaintType}</h4>
          <p>{c.description}</p>
          <button onClick={() => markCompleted(c._id)}>Mark as Completed</button>
        </div>
      ))}
    </div>
  );
}
