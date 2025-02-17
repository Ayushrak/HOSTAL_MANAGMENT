import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full">
        
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/assets/hostel-bg.jpg"
            alt="Hostel"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
