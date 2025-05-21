import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PastEventsPictureSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 400); // Small delay to trigger fade-out
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 400);
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden mb-3">
      {images.length > 0 ? (
        <>
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 text-white p-2 rounded-full z-10 hover:bg-gray-300 text-xl"
            aria-label="Previous Slide"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>

          {/* Image Container */}
          <div
            className="w-full relative rounded-lg overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]"
            style={{
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)"
            }}
          >

            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />

          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 text-white p-2 rounded-full z-10 hover:bg-gray-300 text-xl"
            aria-label="Next Slide"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setFade(true);
                  }, 100);
                }}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-gray-400 italic">No images to display.</div>
      )}
    </div>
  );
};

export default PastEventsPictureSlider;



