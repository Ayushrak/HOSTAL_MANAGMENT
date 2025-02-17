import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const messTimetable = [
  { day: "Monday", breakfast: "Paratha", lunch: "Paneer, Aloo Sabji, Dal, Curd, Rice", snacks: "Sandwich", dinner: "Rajma, Roti, Salad, Rice, Milk" },
  { day: "Tuesday", breakfast: "idli Sambar", lunch: "Mix Veg, Chana Masala, Dal, Curd, Rice", snacks: "Patties", dinner: "Kadhi Pakoda, Roti, Salad, Rice, Milk" },
  { day: "Wednesday", breakfast: "Pav bhaji", lunch: "Bhindi, Chole, Dal, Curd, Rice", snacks: "Kachori", dinner: "Aloo Matar, Roti, Salad, Rice, Milk" },
  { day: "Thursday", breakfast: "Mathi paratha ", lunch: "Kofta, Rajma, Dal, Curd, Rice", snacks: "Samosa", dinner: "Matar Paneer, Roti, Salad, Rice, Milk" },
  { day: "Friday", breakfast: "Poha", lunch: "Aloo Gobi, Dal Makhani, Curd, Rice", snacks: "Pasta", dinner: "Dal Tadka, Roti, Salad, Rice, Milk" },
  { day: "Saturday", breakfast: "aloo puri", lunch: "Baingan Bharta, Dal, Curd, Rice", snacks: "Chowmein", dinner: "Mix Veg, Roti, Salad, Rice, Milk" },
  { day: "Sunday", breakfast: "Aloo Paratha", lunch: "Special Thali", snacks: "Poha", dinner: "Chicken/Paneer, Roti, Salad, Rice, Milk" },
];

const MessPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col gap-6">
      {/* Carousel */}
      <Card>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div><img src="https://www.shutterstock.com/image-photo/cafeteria-canteen-interior-school-factory-chairs-1681547044" alt="Day 1" /></div>
          <div><img src="./assets/" alt="Day 2" /></div>
          <div><img src="/images/food3.jpg" alt="Day 3" /></div>
          <div><img src="./assets/"  alt="Day 4" /></div>
          <div><img src="./assets/"  alt="Day 5" /></div>
          <div><img src="./assets/"  alt="Day 6" /></div>
          <div><img src="./assets/"  alt="Day 7" /></div>
        </Carousel>
      </Card>

      {/* Mess Timetable */}
      <Card>
        <h2 className="text-lg font-semibold mb-2">Mess Timetable</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Day</th>
              <th className="border p-2">Breakfast (7:30 - 8:30 AM)</th>
              <th className="border p-2">Lunch (11:30 - 2:30 PM)</th>
              <th className="border p-2">Snacks (5:00 - 6:00 PM)</th>
              <th className="border p-2">Dinner (7:30 - 9:00 PM)</th>
            </tr>
          </thead>
          <tbody>
            {messTimetable.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{item.day}</td>
                <td className="border p-2">{item.breakfast}</td>
                <td className="border p-2">{item.lunch}</td>
                <td className="border p-2">{item.snacks}</td>
                <td className="border p-2">{item.dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Rules & Regulations */}
      <Card>
        <h2 className="text-lg font-semibold mb-2">Mess Rules & Regulations</h2>
        <ul className="list-disc pl-6">
          <li>Mess timings are strict; latecomers will not be served.</li>
          <li>Day scholars can eat at ₹100 per plate.</li>
          <li>Food wastage is strictly prohibited.</li>
          <li>Complaints can be registered below.</li>
        </ul>
      </Card>

      {/* Complaint Section */}
      <Card>
        <h2 className="text-lg font-semibold mb-2">Mess Review Section</h2>
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Write your review here..."
        />
        <Button className="mt-4" onClick={() => alert("Review Submitted!")}>
          Submit Review
        </Button>
      </Card>
      
    </div>
  );
};

export default MessPage;
