import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun, User } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [user, setUser] = useState(true);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav
      className={`w-full p-4 flex justify-between shadow-lg sticky top-0 z-50  items-center transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Toaster position="top-center" reverseOrder={false} />

      {/* Logo and Brand Name */}
      <div className="flex flex-row items-center space-x-3">
       <Link to="/">
       <img
          src=""
          alt="Hostel Logo"
          className="h-10 w-10"
        />
        <h1 className="text-2xl font-bold">🏠 Hostel Life</h1>
       </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link
          to="/rooms"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Rooms
        </Link>
        <Link
          to="/attendance"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Attendance
        </Link>
        <Link
          to="/hostel-fest-sports"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Hostel Fest & Sports
        </Link>
        <Link
          to="/mess"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Mess Menu
        </Link>
        <Link
          to="/gym"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Gym
        </Link>
        <Link
          to="/complaint"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Complaint 
        </Link>
        <Link
          to="/contact"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>

      {/* Dark Mode Toggle & Authentication */}
      <div className="flex items-center space-x-4 relative">
        <button
          className="p-2 rounded transition-colors duration-200"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <Sun className="text-yellow-500" />
          ) : (
            <Moon className="text-gray-800" />
          )}
        </button>

        {user ? (
          // User Dropdown Menu
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 transition"
            >
              <User className="w-6 h-6" />
              <span>{user.name}</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
                <Link
                  to="/profile"
                  className="block px-4 py-2 transition-colors  hover:bg-gray-100"
                >
                  Edit Profile
                </Link>

                <button
                  className="block ml-10  w-2/3 overflow-hidden rounded-lg px-4 py-2 hover:bg-gray-100 bg-red-400 text-center "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // Login & Signup Buttons
          <>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
