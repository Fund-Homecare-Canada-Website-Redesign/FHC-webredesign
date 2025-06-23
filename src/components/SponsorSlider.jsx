import React from 'react';

const SponsorSlider = ({ sponsors = [] }) => {
  // Duplicate sponsors for infinite loop
  const loopedSponsors = [...sponsors, ...sponsors];

  if (!sponsors.length) return null;

  return (
    <div className="overflow-hidden w-full">
      <div className="sponsor-slider flex w-max animate-scroll">
        {loopedSponsors.map((sponsor, index) => (
          <div key={index} className="flex-shrink-0 w-40">
            <img
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="h-[120px] w-full object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SponsorSlider;


