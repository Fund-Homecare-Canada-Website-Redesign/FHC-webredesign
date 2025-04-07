import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaHistory, FaEnvelope } from "react-icons/fa";

const MainEvents = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Upcoming Events Card */}
        <div 
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => handleCardClick("/events/upcoming")}
        >
          <div className="bg-blue-600 h-2"></div>
          <div className="p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FaCalendarAlt className="text-blue-600 text-3xl" />
            </div>
            <h2 className="text-xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-gray-600 mb-4">View our upcoming events and register to participate.</p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Events
            </button>
          </div>
        </div>

        {/* Past Events Card */}
        <div 
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => handleCardClick("/events/past")}
        >
          <div className="bg-green-600 h-2"></div>
          <div className="p-6 flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <FaHistory className="text-green-600 text-3xl" />
            </div>
            <h2 className="text-xl font-bold mb-2">Past Events</h2>
            <p className="text-gray-600 mb-4">Explore our past events and see the impact we've made.</p>
            <button className="mt-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              View Events
            </button>
          </div>
        </div>

        {/* Newsletter Card */}
        <div 
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => handleCardClick("/events/newsletter")}
        >
          <div className="bg-purple-600 h-2"></div>
          <div className="p-6 flex flex-col items-center text-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <FaEnvelope className="text-purple-600 text-3xl" />
            </div>
            <h2 className="text-xl font-bold mb-2">Newsletter</h2>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for updates and announcements.</p>
            <button className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainEvents;