import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images from assets directory
import image1 from "../assets/images/MainPage/Home_Why-Cancer.png";
import image2 from "../assets/images/MainPage/Home_Hero-1.png";
import image3 from "../assets/images/MainPage/Home_Why-Cancer.png";
import image4 from "../assets/images/MainPage/Home_Personal-Stories.png";
import image5 from "../assets/images/MainPage/Home_Why-Cancer.png";

const images = [image1, image2, image3, image4, image5];

const ImageSlider = () => {
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
      <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
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

export default ImageSlider;
