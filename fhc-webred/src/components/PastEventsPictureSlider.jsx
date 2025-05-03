import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images from assets directory
import image1 from "../assets/images/PastEvents/Ways-to-Give_Events.png";
import image2 from "../assets/images/PastEvents/Ways-to-Give_Events.png";
import image3 from "../assets/images/PastEvents/Ways-to-Give_Events.png";
import image4 from "../assets/images/PastEvents/Ways-to-Give_Events.png";
import image5 from "../assets/images/PastEvents/Ways-to-Give_Events.png";

const images = [image1, image2, image3, image4, image5];

const PastEventsPictureSlider = () => {
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
    <div className="relative flex items-center justify-center overflow-hidden mb-3">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-1 md:left-2 text-white p-1.5 md:p-2 rounded-full z-10 hover:bg-gray-300 text-lg md:text-xl"
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>

      {/* Image Slider */}
      <div
        className="w-full flex items-center justify-center"
        style={{
          width: "100%",
          height: "200px",
          margin: "0 auto",
          overflow: "hidden",
          borderRadius: "8px",
          position: "relative",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
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
        className="absolute right-1 md:right-2 text-white p-1.5 md:p-2 rounded-full z-10 hover:bg-gray-300 text-lg md:text-xl"
        aria-label="Next Slide"
      >
        <FaChevronRight className="text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-1 md:bottom-2 flex space-x-1.5 md:space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PastEventsPictureSlider;
