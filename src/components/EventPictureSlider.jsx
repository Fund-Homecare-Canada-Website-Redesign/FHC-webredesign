import React from "react";
import colours from "../assets/styles/BrandColours";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image1 from "./Home_Hero-1.png";
import image2 from "./Home_Personal-Stories.png";
import image3 from "./Home_Hero-1.png";
import image4 from "./Home_Personal-Stories.png";
import image5 from "./Home_Hero-1.png";

const images = [image1, image2, image3, image4, image5];

const EventPictureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 text-white p-3 rounded-full z-10 hover:bg-gray-300 text-2xl"
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>

      {/* Image Slider */}
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          width: "100%",
          height: "500px",
          margin: "0 auto",
          overflow: "hidden",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out"
        />
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 text-white p-3 rounded-full z-10 hover:bg-gray-300 text-2xl"
        aria-label="Next Slide"
      >
        <FaChevronRight className="text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventPictureSlider;