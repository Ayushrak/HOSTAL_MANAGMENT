import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HeroSection from './pages/HeroSection';
import RoomsPage from './pages/RoomPage';
import AttendancePage from './pages/AtttendencePage';
import HostelFestSports from './pages/HostelFestSports';
import Complaint from './pages/Complaint';
import Contact from './pages/Contact';
import MessPage from './pages/MessPage';
import RoomBooking from './pages/room-booking';
import GymPage from './pages/GymPage';

const App = () => {
  return (
    <Router>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
        <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mess" element={<MessPage />} />
          <Route path="/gym" element={<GymPage />} />
          <Route path="/room-booking" element={<RoomBooking />} />
          <Route path="/hostel-fest-sports" element={<HostelFestSports />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  )
}

export default App