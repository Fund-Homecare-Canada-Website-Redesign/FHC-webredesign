import React, { useState } from "react";
import colours from "../assets/styles/BrandColours";
import { FaArrowDown } from "react-icons/fa";

const UpcomingEventsCardWithFormIntegration = ({
  eventName = "Event Name",
  eventDate = "Date",
  eventTime = "Time",
  eventLocation = "Location",
  eventDescription = "Description",
  eventImage = "/path/to/default-image.jpg"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="relative flex flex-col md:flex-row items-start border shadow-lg p-3 md:p-5 m-2 text-left w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] rounded-lg transition-all duration-300"
      style={{ backgroundColor: "#a3cdd7" }}
    >
      {/* Main content container */}
      <div className="flex-1 flex flex-col w-full">
        <div className="mb-2">
          <h2 className="text-base md:text-lg font-bold mb-1 text-black">
            {eventName}
          </h2>
          <h3 className="text-sm md:text-base font-bold text-gray-600">
            {eventDate} | {eventTime}
          </h3>
          <p className="text-xs md:text-sm text-gray-600 max-w-full">
            {eventDescription}
          </p>
        </div>

        {/* Expandable content container */}
        <div
          className={`transition-all duration-300 ${isExpanded ? "max-h-[2000px]" : "max-h-0"} overflow-hidden`}
        >
          <div className="pt-2">
            <p className="text-xs md:text-sm text-gray-600 max-w-full mb-2">
              Location: {eventLocation}
            </p>
            <div className="mt-4">
              <form className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Register for this event</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Attendees</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6+">6+</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Any dietary restrictions or accessibility needs"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Button container */}
        <div className="mt-2">
          <button
            className="flex flex-row items-center text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            style={{ backgroundColor: "#54749D" }}
            onClick={toggleExpand}
          >
            {isExpanded ? "Hide Registration Form" : "Register for Event"}
            <FaArrowDown
              className={`text-white text-lg ml-2 ${
                isExpanded ? "transform rotate-180" : ""
              } transition-transform duration-300`}
            />
          </button>
        </div>
      </div>

      {/* Image container */}
      <div className="mt-3 md:mt-0 md:ml-3 flex-shrink-0 self-center md:self-start">
        <img
          src={eventImage}
          alt="Event Logo"
          className="w-20 h-20 md:w-24 md:h-24 border shadow-md rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default UpcomingEventsCardWithFormIntegration;
