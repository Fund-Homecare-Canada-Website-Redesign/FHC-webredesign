import React from "react";
//import colours from "../assets/styles/BrandColours";
// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const NewsletterCard = ({date, pdfUrl}) => {
  
    return ( 
      <div className="bg-[#ABCCD6] rounded-lg shadow-lg overflow-hidden w-[839px]">
        {/* Month Year Header */}
        <div className="bg-[#54749D] text-white text-center py-3 mr-[145px] ml-[145px] mt-12 rounded-lg">
          <h2 className="text-lg font-[Montserrat] text-[36px]">{date}</h2>
        </div>

        {/* Poster PDF Viewer */}
        <div className="flex flex-col items-center p-4 mb-12">
          <iframe src={pdfUrl} width="600" height="700" style={{ border: 'none' }}></iframe>
        </div>
      </div>
    
    );
};

export default NewsletterCard;