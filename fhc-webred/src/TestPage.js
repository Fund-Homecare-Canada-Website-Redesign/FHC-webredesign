import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurTeamCard from "./components/OurTeamCard"
import 'bootstrap/dist/css/bootstrap.min.css';
// import colours from "../assets/styles/BrandColours";

// change with your logic import React from "react";
// import MyComponent from "./components/MyComponent";

const TestPage = () => {
    return (
        <div>  
            <OurTeamCard/> 
        </div>
    );
};

export default TestPage;