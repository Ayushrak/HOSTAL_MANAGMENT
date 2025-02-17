export default function Footer() {
  const teamMembers = [
    {
      id: 1,
      name: "Ayush Sharma",
      role: "Frontend Developer ",
      image: "/images/ayush.jpg",
      socialLinks: {
        github: "https://github.com/ayushsharma",
        linkedin: "https://linkedin.com/in/ayushsharma"
      }
    },
    {
      id: 2,
      name: "Aman Singhal",
      role: "Backend Developer",
      image: "/images/Aman.png",
      socialLinks: {
        github: "https://github.com/amansinghal",
        linkedin: "https://linkedin.com/in/amansinghal"
      }
    },
    {
      id: 3,
      name: "Rahul Singh",
      role: "Full Stack Developer",
      image: "/images/rahul.jpg",
      socialLinks: {
        github: "https://github.com/rahulsingh",
        linkedin: "https://linkedin.com/in/rahulsingh"
      }
    },
    {
      id: 4,
      name: "Mohammed Iqbal",
      role: "UI/UX Designer",
      image: "/images/iqbal.jpg",
      socialLinks: {
        github: "https://github.com/mohammediqbal",
        linkedin: "https://linkedin.com/in/mohammediqbal"
      }
    }
  ];

  const getRoleIcon = (role) => {
    if (role.includes("Frontend")) return "👨‍💻";
    if (role.includes("Backend")) return "🖥️";
    if (role.includes("Full Stack")) return "💻";
    if (role.includes("UI/UX")) return "🎨";
    return "👤";
  };

  return (
    <>
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white text-gray-800 p-6 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition duration-500">
                <img src={member.image} alt={member.name} className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-indigo-500 shadow-lg" />
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-indigo-600 mb-3 flex items-center justify-center">{getRoleIcon(member.role)} <span className="ml-2">{member.role}</span></p>
                <div className="flex justify-center space-x-5">
                  <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 text-2xl transition-transform transform hover:scale-110">🐙</a>
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 text-2xl transition-transform transform hover:scale-110">🔗</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/rooms" className="hover:text-gray-400 transition-colors">Rooms</a></li>
              <li><a href="/attendance" className="hover:text-gray-400 transition-colors">Attendance</a></li>
              <li><a href="/fest-events" className="hover:text-gray-400 transition-colors">Fest & Sports</a></li>
              <li><a href="/contact" className="hover:text-gray-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Follow Us</h3>
            <div className="flex space-x-6 text-2xl">
              <a href="#" className="hover:text-gray-400 transition-transform transform hover:scale-110">📘</a>
              <a href="#" className="hover:text-gray-400 transition-transform transform hover:scale-110">📸</a>
              <a href="#" className="hover:text-gray-400 transition-transform transform hover:scale-110">🐦</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8">
          &copy; 2024 XYZ Hostel. All rights reserved.
        </div>
      </footer>
    </>
  );
} 
