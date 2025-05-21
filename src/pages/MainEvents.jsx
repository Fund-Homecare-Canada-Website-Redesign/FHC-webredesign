import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeaderSection from "../components/PageHeaderSection.jsx";
import upcomingImage from "../assets/images/PastEvents/SpringGala2022/Photos/MainPicture.jpg";
import pastImage from "../assets/images/MainPage/Ways-to-Give_Hero-Image.png";
import newsletterImage from "../assets/images/MonthlyNewletter/NewsletterImage.png";

const MainEvents = () => {
  useEffect(() => {
    document.title = "Events";
  }, []);
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: "Upcoming Events",
      image: upcomingImage,
      path: "/events/upcoming",
    },
    {
      id: 2,
      title: "Past Events",
      image: pastImage,
      path: "/events/past",
    },
    {
      id: 3,
      title: "Our Newsletters",
      image: newsletterImage,
      path: "/events/newsletter",
    },
  ];

  return (
    <>
      <PageHeaderSection title="Main Events" backgroundImage="/path/to/image.jpg" />
      <div className="bg-[#CFE6EF]">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Stay Connected</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Discover what we're doing year-round! Whether you're planning to attend an upcoming
            fundraiser, explore highlights from past gatherings, or simply stay in the loop with
            our newsletter—we've got something for you.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.id}
              className="relative w-full h-96 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer"
              onClick={() => navigate(section.path)}
            >
              {/* Use img tag instead of background image for better loading */}
              <img 
                src={section.image || "/placeholder.svg"} 
                alt={section.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl text-white font-semibold">
                  {section.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default MainEvents;