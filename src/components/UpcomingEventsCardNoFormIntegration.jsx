import React, { useState } from "react";
import image1 from "../assets/images/CommunityEvents/GarageSale2024.jpg"; // import the image
import image2 from "../assets/images/Logos/FHC_Black_Logo.png";
import SponsorSlider from "./SponsorSlider.jsx";
import PastEventsPictureSlider from "./PastEventsPictureSlider.jsx";
import GoogleMapComponent from "./GoogleMap.jsx";
import { FaArrowDown } from "react-icons/fa"; // import the down arrow icon

function UpcomingEventsCard() {
  // state to manage whether the card is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // function to toggle the expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full flex justify-center px-4">
      <div
        className="flex flex-col items-center bg-[#3A92A0] border shadow-lg rounded-lg p-6 w-full max-w-4xl text-center"
      >
        {/* Image */}
        <img
          src={image1}
          alt="Event"
          className="w-24 h-24 border shadow-md rounded-md object-cover mb-4"
        />

        {/* Content */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold text-black mb-1">Event Name</h2>
          <h3 className="text-sm font-semibold text-white-700 mb-2">Date + Time</h3>
          <p className="text-sm text-white-700 mb-3 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Expandable Content */}
          <div className={`overflow-hidden transition-all duration-300 w-full ${isExpanded ? "max-h-[2000px] pt-3" : "max-h-0"}`}>
            <p className="text-sm text-gray-700 mb-3 max-w-2xl mx-auto">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="space-y-4">
              <div className="w-full">
                <PastEventsPictureSlider />
              </div>
              <div className="w-full">
                <GoogleMapComponent />
              </div>
              <div className="w-full">
                <SponsorSlider />
              </div>
            </div>
          </div>

          {/* Expand Button */}
          <div className="mt-2">
            <button
              className="flex flex-row items-center text-white px-3 py-1.5 text-sm rounded-lg shadow-md hover:shadow-xl transform hover:scale-[1.05] transition duration-300 ease-in-out cursor-pointer"
              style={{ backgroundColor: "#54749D" }}
              onClick={toggleExpand}
            >
              {isExpanded ? "View Less Details" : "View More Details"}
              <FaArrowDown
                className={`text-white text-lg ml-2 ${
                isExpanded ? "transform rotate-180" : ""
                } transition-transform duration-300`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEventsCard;