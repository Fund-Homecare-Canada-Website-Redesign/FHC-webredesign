import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./pages/AboutUs"
import 'bootstrap/dist/css/bootstrap.min.css';


// change with your logic import React from "react";
// import MyComponent from "./components/MyComponent";

const TestPage = () => {
    return (
        <div>
            <AboutUs/>
        </div>
      );
};
export default TestPage;
