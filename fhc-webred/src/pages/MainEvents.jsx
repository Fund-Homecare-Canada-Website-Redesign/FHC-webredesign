import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaHistory, FaEnvelope } from "react-icons/fa";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageHeaderSection from "../components/PageHeaderSection.jsx";
import image from "../assets/images/MainPage/Home_Hero-1.png"

const MainEvents = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: "Upcoming Events",
      image: "../assets/images/MainPage/Home_Hero-1.png",
      path: "/events/upcoming",
    },
    {
      id: 2,
      title: "Past Events",
      image: "../assets/images/MainPage/Home_Hero-1.png",
      path: "/events/past",
    },
    {
      id: 3,
      title: "Newsletter",
      image: "../assets/images/MainPage/Home_Hero-1.png",
      path: "/events/newsletter",
    },
  ];

  return (
    <>
      <NavBar />
      <PageHeaderSection title="Main Events" backgroundImage="/path/to/image.jpg" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Stay Connected</h2>
          <p className="text-gray-700 leading-relaxed">
            Discover what we’re doing year-round! Whether you're planning to attend an upcoming
            fundraiser, explore highlights from past gatherings, or simply stay in the loop with
            our newsletter—we’ve got something for you.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.id}
              className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => navigate(section.path)}
              style={{
                backgroundImage: `url(${section.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl text-white font-semibold">
                  {section.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainEvents;