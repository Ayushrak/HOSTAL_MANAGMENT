import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
      username: { 
        type: String,
        required: true
      },
     college: { 
      type: String, 
      required: true 
      },
   regNo: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
   mobile: { type: String, required: true },
   photo: { type: String },
   year: { type: String, required: true },
   city: { type: String, required: true },
   password: { type: String, required: true },
 });



 const User = mongoose.model("User", userSchema);
 export default User;









