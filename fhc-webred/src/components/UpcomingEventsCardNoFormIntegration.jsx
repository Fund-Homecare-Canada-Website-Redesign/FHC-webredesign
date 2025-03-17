import React, { useState } from "react";
import image1 from "../assets/images/CommunityEvents/GarageSale2024.jpg"; // import the image
import image2 from "../assets/images/Logos/FHC_Black_Logo.png";
import { FaArrowDown } from "react-icons/fa"; // import the down arrow icon

function UpcomingEventsCard() {
  // state to manage whether the card is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // function to toggle the expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="relative flex flex-row items-start border shadow-lg p-5 m-2 text-left max-w-[66%] inline-block rounded-lg transition-all duration-300"
      style={{ backgroundColor: "#a3cdd7" }} // set background color to #3A92A0
    >
      {/* Main Content */}
      <div className="flex-1">
        <h2
          className="text-lg font-bold mb-1"
          style={{ color: "#000000" }} // Set text color to white for contrast
        >
          Event Name
        </h2>
        <h3
          className="text-lg font-bold"
          style={{ color: "#797979" }} // Set text color to white for contrast
        >
          Date + Time
        </h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-600 text-sm mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        
        {/* Expandable Content */}
        <div
          className={`transition-all duration-300 ${isExpanded ? "max-h-[1000px]" : "max-h-0"} overflow-hidden`}
        >
          
          {/* Centered image in expanded section */}
          <div className="flex justify-center mt-4">
            <img src={image2} alt="Seating" className="w-24 h-auto border rounded-md shadow-md" />
          </div>
        </div>

        {/* Button Container */}
        <div className="flex flex-row gap-2 mt-2">
          {/* Toggle Button */}
          <button
            className="flex flex-row items-center text-white outline-none px-4 py-2 rounded-lg transition-colors hover:bg-blue-700 shadow-md hover:shadow-lg"
            style={{
              backgroundColor: "#54749D", // BLUE_YONDER
            }}
            onClick={toggleExpand}
          >
            {isExpanded ? "View Less Details" : "View More Details"}
            <FaArrowDown
              className={`text-white text-xl ml-2 ${
                isExpanded ? "transform rotate-180" : ""
              } transition-transform duration-300`}
            />
          </button>

          {/* Buy Now Button */}
          <button
            className="flex flex-row items-center text-white outline-none px-4 py-2 rounded-lg transition-colors hover:bg-green-700 shadow-md hover:shadow-lg"
            style={{
              backgroundColor: "#54749D", // Green color for Buy Now
            }}
            onClick={() => alert("Buy Now clicked!")} // Add your Buy Now logic here
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Event Logo Image - Centered in a flex column */}
      <div className="flex flex-col justify-center items-center h-full ml-3">
        <img
          src={image1}
          alt="Event Logo"
          className="max-h-[300px] ml-20 w-auto border rounded-md shadow-lg" // Add shadow-lg
        />
      </div>
    </div>
  );
}

export default UpcomingEventsCard;