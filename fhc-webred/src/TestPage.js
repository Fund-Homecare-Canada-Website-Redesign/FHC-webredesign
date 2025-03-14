import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarComponent from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
// import colours from "../assets/styles/BrandColours";

// change with your logic import React from "react";
// import MyComponent from "./components/MyComponent";

const TestPage = () => {
    return (
        <Router>
            <NavBarComponent/>
            <Routes>
            </Routes>
        </Router>
      );
};

export default TestPage;