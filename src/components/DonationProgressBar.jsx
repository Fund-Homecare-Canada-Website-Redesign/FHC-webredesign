import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 relative overflow-hidden"> {/* 'h-4' controls the height */}
      <div
        className="bg-[#30AFAA] h-4 rounded-full transition-all duration-500 ease-out" // 'h-4' controls the height
        style={{ width: `${progress}%` }}
      >
        {/* You can add text inside if you want */}
      </div>
    </div>
  );
};

export default ProgressBar;