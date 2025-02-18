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
### Then in a page you can pass the props paramaters into a Button:
```
<CustomButton text="Learn More" bgColor="REBECCA_PURPLE" />
```

## Using a component from React Bootstrap ()

### Call the component in a component directory file --> customize it --> Apply to pages as necessary

```
import Form from 'react-bootstrap/Form';

function FormControlDisabledExample() {
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Disabled input"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
      <br />
      <Form.Control
        type="text"
        placeholder="Disabled readonly input"
        aria-label="Disabled input example"
        readOnly
      />
    </>
  );
}

export default FormControlDisabledExample;
```
