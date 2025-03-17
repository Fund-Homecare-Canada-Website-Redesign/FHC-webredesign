import React, { useState } from "react";
import image1 from "../assets/images/PastEvents/Ways-to-Give_Events.png"; // import the image
import { FaArrowDown } from "react-icons/fa"; // import the down arrow icon

function PastEventsCard() {
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
      <div className="flex-1">
        <h2
          className="text-lg font-bold mb-1"
          style={{ color: "#000000" }} // Set text color to white for contrast
        >
          Event Name
        </h2>
        <h3
          className="text-lg font-bold"
          style={{ color: "#797979" }} // set text color to white for contrast
        >
          Date + Time
        </h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {/* this will hold the additional content to be toggled */}
        <div
          className={`transition-all duration-300 ${isExpanded ? "max-h-[1000px]" : "max-h-0"} overflow-hidden`}
        >
          <p className="text-gray-600 text-sm mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* button with flex-row layout and rounded corners */}
        <div className="rounded-e-2xl mt-2">
          <button
            className="flex flex-row items-center text-white outline-none px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
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
        </div>
      </div>
      {/* use the imported image in the src attribute */}
      <img
        src={image1}
        alt="Event Logo"
        className="w-24 h-24 border ml-3 shadow-md rounded-md" // Add shadow-md and rounded-md
      />
    </div>
  );
}

export default PastEventsCard;