// import React, { useState, useEffect } from "react";

// const PastEventsPictureSlider = ({ images = [] }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const nextSlide = () => {
//     setFade(false);
//     setImageLoaded(false);
//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 250);
//   };

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="relative flex items-center justify-center overflow-hidden mb-3">
//       {images.length > 0 ? (
//         <>
//           {/* Image Container */}
//           <div
//             className="w-full relative rounded-lg overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]"
//             style={{
//               boxShadow: "0 4px 8px rgba(0,0,0,0.15)"
//             }}
//           >
//             <img
//               src={images[currentIndex]}
//               alt={`Slide ${currentIndex + 1}`}
//               loading="lazy"
//               onLoad={() => {
//                 setFade(true);
//                 setImageLoaded(true);
//               }}
//               className={`absolute top-0 left-0 w-full h-full object-cover rounded-md transition-opacity duration-700 ease-in-out ${
//                 fade && imageLoaded ? "opacity-100" : "opacity-0"
//               }`}
//             />
//           </div>
//         </>
//       ) : (
//         <div className="text-gray-400 italic">No images to display.</div>
//       )}
//     </div>
//   );
// };

// export default PastEventsPictureSlider;

import React, { useState, useEffect } from "react";

const PastEventsPictureSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const nextSlide = () => {
    setFade(false);
    setImageLoaded(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 250);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative flex items-center justify-center overflow-hidden mb-3">
      {images.length > 0 ? (
        <>
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
              loading="lazy"
              onLoad={() => {
                setFade(true);
                setImageLoaded(true);
              }}
              className={`absolute top-0 left-0 w-full h-full 
                          rounded-md transition-opacity duration-700 ease-in-out
                          ${fade && imageLoaded ? "opacity-100" : "opacity-0"}
                          object-contain md:object-cover`} // 👈 THIS LINE
            />
          </div>
        </>
      ) : (
        <div className="text-gray-400 italic">No images to display.</div>
      )}
    </div>
  );
};

export default PastEventsPictureSlider;





