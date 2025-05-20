import React, { useState } from "react";
import image1 from "../assets/images/PastEvents/Ways-to-Give_Events.png";
import { FaArrowDown } from "react-icons/fa";
import SponsorSlider from "./SponsorSlider.jsx";
import PastEventsPictureSlider from "./PastEventsPictureSlider.jsx";
import GoogleMapComponent from "./GoogleMap.jsx";


function PastEventsCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex justify-center w-full px-4">
      <div
        className="relative flex flex-col md:flex-row items-start border shadow-lg p-3 md:p-5 m-2 text-left w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] rounded-lg transition-all duration-300"
        style={{ backgroundColor: "#3A92A0" }}
      >
        {/* Main content container */}
        <div className="flex-1 flex flex-col w-full">
          <div className="mb-2">
            <h2 className="text-base md:text-lg font-bold mb-1 text-black">
              Event Name
            </h2>
            <h3 className="text-sm md:text-base font-bold text-black">
              Date + Time
            </h3>
            <p className="text-xs md:text-sm text-white-600 max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Expandable content container */}
          <div
            className={`transition-all duration-300 ${
              isExpanded ? "max-h-[2000px]" : "max-h-0"
            } overflow-hidden`}
          >
            <div className="pt-2">
              <p className="text-xs md:text-sm text-white-600 max-w-full mb-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="space-y-3">
                <PastEventsPictureSlider />
                <GoogleMapComponent />
                <SponsorSlider />
              </div>
            </div>
          </div>

          {/* Button container */}
          <div className="mt-2">
            <button
              className="flex flex-row items-center text-white px-3 py-1.5 text-sm rounded-lg shadow-md hover:shadow-xl transform hover:scale-[1.05] transition duration-300 ease-in-out cursor-pointer
 "
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

        {/* Image container (inside the card) */}
        <div className="mt-4 md:mt-0 md:ml-4">
          <img
            src={image1}
            alt="Event Logo"
            className="w-20 h-20 md:w-24 md:h-24 border shadow-md rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default PastEventsCard;