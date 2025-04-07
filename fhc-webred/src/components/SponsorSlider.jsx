import React from "react";
import colours from "../assets/styles/BrandColours";
import image1 from "../assets/images/Logos/FHC_Black_Logo.png";

import { useEffect, useRef } from 'react';

const SponsorSlider = () => {
  const sponsors = [
    image1,
    image1,
    image1,
    image1
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const firstClone = slider.children[0].cloneNode(true);
      slider.appendChild(firstClone);

      slider.style.animation = 'scroll 12s linear infinite';

      return () => {
        slider.style.animation = '';
        slider.removeChild(firstClone);
      };
    }
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={sliderRef}
        className="flex w-max"
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        {sponsors.map((sponsor, index) => (
          <div key={index} className="w-40 px-4">
            <img
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="h-[120px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SponsorSlider;