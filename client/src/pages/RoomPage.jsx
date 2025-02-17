import { useState } from "react";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    type: "Single Room",
    price: "₹15,000/month",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZrv3G2hvd9kuQ_OqyexAKEMrhfT0Yp8l1exLmm1xhrUwvjnDPPt5-0sxn4QjEwZkDIY&usqp=CAU",
    facilities: ["Wi-Fi", "Attached Bathroom", "Study Table", "Security"],
    status: "Available",
  },
  {
    id: 2,
    type: "Double Room",
    price: "₹12,000/month",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbvEGIVXrwL-pCdILQ7nKATQxWjj8yZ_0aA&s",
    facilities: ["Wi-Fi", "Shared Bathroom", "Laundry", "Canteen Access"],
    status: "Limited",
  },
  {
    id: 3,
    type: "Shared Room",
    price: "₹10,000/month",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbvEGIVXrwL-pCdILQ7nKATQxWjj8yZ_0aA&s",
    facilities: ["Wi-Fi", "Common Study Room", "Mess Food", "Security"],
    status: "Full",
  },
];

export default function RoomsPage() {
  return (
    <section className="py-12 px-6">
      {/* Hero Section */}
      <div className="w-full h-60 bg-blue-500 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">🏠 Hostel Rooms</h1>
        <p className="mt-2">Comfortable and Secure Living Spaces for Students</p>
      </div>

      {/* Room Listings */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white p-5 shadow-md rounded-lg">
            <img src={room.image} alt={room.type} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-2xl font-semibold mt-4">{room.type}</h3>
            <p className="text-lg text-gray-600">{room.price}</p>
            <ul className="mt-3 text-sm text-gray-500">
              {room.facilities.map((facility, index) => (
                <li key={index}>✅ {facility}</li>
              ))}
            </ul>
            <p className={`mt-4 font-bold ${room.status === "Available" ? "text-green-500" : "text-red-500"}`}>
              {room.status}
            </p>
            <Link to="/room-booking">
              <button
                className={`mt-4 w-full py-2 rounded ${
                  room.status === "Full" ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
                disabled={room.status === "Full"}
              >
                {room.status === "Full" ? "Fully Booked" : "Book Now"}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
