# FrontEnd Specific Notes

### Example Using a colour from `/assets/styles/BrandColours.js`:

```
import React from "react";
import colours from "../assets/styles/BrandColours";

const CustomButton = ({ text, bgColor }) => {
  return (
    <button
      className={`
        //conditional logic for colour possibilities
        ${
          bgColor === "RAISIN_BLACK" ? "bg-raisin" :
          bgColor === "BLUE_MUNSELL" ? "bg-blueMunsell" :
          bgColor === "REBECCA_PURPLE" ? "bg-rebeccaPurple" :
          bgColor === "BLUE_YONDER" ? "bg-blueYonder" :
          "bg-white text-black"
        }
      `}
      >
      {text}
    </button>
  );
};

export default CustomButton;
```
### Then in a page you can pass the props paramters into a Button:
```
<CustomButton text="Learn More" bgColor="REBECCA_PURPLE" />
```
