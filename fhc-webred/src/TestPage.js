import React from "react";
// import colours from "../assets/styles/BrandColours"
//change with your logic import React from "react";
import { MotionConfig } from "framer-motion";
import MainTopSection from "./components/MainTopSection.jsx";
import PastEventsCard from "./components/PastEventsCard.jsx"

export const MyContext = React.createContext();

const TestPage = () => {
  const contextValue = "Hello from Context"; // Example value

  return (
    <div>
      {/* <h1>Testing Components</h1> */}

      
     {/* <MotionConfig>
      <MainTopSection slider={true}/> 
      </MotionConfig> */}

      <PastEventsCard/>
    </div>
  );
};

export default TestPage;
