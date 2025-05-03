import React from "react";
//import colours from "../assets/styles/BrandColours";

const NewsletterCard = ({poster, date}) => {
    return ( 
      <div className="bg-[#ABCCD6] rounded-lg shadow-lg overflow-hidden w-[839px]">
        {/* Month Year Header */}
        <div className="bg-[#54749D] text-white text-center py-3 mr-[145px] ml-[145px] mt-12 rounded-lg">
          <h2 className="text-lg font-[Montserrat] text-5xl">{date}</h2>
        </div>

        {/* Poster Image */}
        <div className="ml-[130px]">
            {/*Test poster placeholder*/}
            {/*<div className="bg-black w-[535px] h-[831px] m-6"></div>*/}
          <img src={poster} alt="Newsletter Poster" className="w-[60%] object-cover m-6"/>
        </div>
      </div>
    
    );
};

export default NewsletterCard;