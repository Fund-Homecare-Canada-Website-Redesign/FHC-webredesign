import React from "react";
//import colours from "../assets/styles/BrandColours";

const buttonStyle = {
    padding: "25px 16px",
    backgroundColor: "transparent",
    borderRadius: "8px",
    border: "3px solid #000000",
    width: "163px",
    height: "61px",
};

const CustomizableButton = ({text, onClick}) => {
    return (
        <button 
        class = "flex items-center justify-center px-4 py-6 bg-transparent border-4 border-white w-[163px] h-[61px] rounded-lg hover:bg-white hover:bg-opacity-50"
        //style = {buttonStyle}
        onClick={onClick}
        > 
        {text}
        
        </button>
    )
};

export default CustomizableButton
