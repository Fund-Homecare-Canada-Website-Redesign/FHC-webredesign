import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images from assets directory
import image1 from "./Home_Hero-1.png";
import image2 from "./Home_Hero-1.png";
import image3 from "./Home_Hero-1.png";
import image4 from "./Home_Hero-1.png";
import image5 from "./Home_Hero-1.png";

const images = [image1, image2, image3, image4, image5];

const MainTopSection = ({ slider = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slider) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/70 text-2xl"
      >
        ←
      </button>

      {/* Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div 
          className="w-full h-full relative"
          style={{
            maxWidth: '1200px', // Set max width for the slider container
            width: '800px',     // Set specific width for the slider
            height: '500px',   // Set specific height for the slider
            margin: '0 auto'
          }}
        >
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            style={{
              width: '100%',    // Ensure the image fills the container
              height: '100%',   // Ensure the image fills the container
              objectFit: 'cover', // Maintain aspect ratio
              borderRadius: '8px',
              overflow: 'hidden'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/70 text-2xl"
      >
        →
      </button>
    </div>
  );
};

export default MainTopSection;