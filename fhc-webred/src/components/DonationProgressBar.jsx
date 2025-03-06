import React from "react";
import colours from "../assets/styles/BrandColours";

const ProgressBar = ({fraction}) => {
  return (
    <div className="w-full bg-[#D9D9D9] h-5">
      <div className={`bg-[${colours.BLUE_YONDER}] h-5 w-${fraction}`}></div>
    </div>
  );
};

export default ProgressBar;