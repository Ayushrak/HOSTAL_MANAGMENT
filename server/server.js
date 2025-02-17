import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";  // 👈 Import DB Connection
import authRoutes from "./routes/authRoutes.js";
import bcryptjs from "bcryptjs";
// import festRoutes from "./routes/festRoutes.js";
// import sportsRoutes from "./routes/sportsRoutes.js";

dotenv.config();
connectDB();  // 👈 Connect to MongoDB



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/auth", authRoutes);
// app.use("/api/fests", festRoutes);
// app.use("/api/sports", sportsRoutes);





// app.use("/api/complaints", complaintRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
