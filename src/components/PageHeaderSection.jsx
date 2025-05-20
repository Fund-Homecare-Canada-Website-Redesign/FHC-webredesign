import image from "../assets/images/MainPage/Home_Hero-1.png";
import React from "react";

const PageHeaderSection = ({ title, backgroundImage }) => {
  return (
    <div
      className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="bg-white/80 px-10 py-8 rounded-2xl shadow-2xl text-center max-w-xl">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeaderSection;
