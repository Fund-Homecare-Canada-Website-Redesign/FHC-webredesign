import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import MainTopSection from "./components/MainTopSection.jsx";
import PastEventsCard from "./components/PastEventsCard.jsx";
import UpcomingEventsCard from "./components/UpcomingEventsCardNoFormIntegration.jsx";
import MainEvents from "./pages/MainEvents.jsx";
import UpcomingEventsPage from "./pages/UpcomingEvents.jsx";
import PastEventsPage from "./pages/PastEvents.jsx";

export const MyContext = React.createContext();

const TestPage = () => {
  const contextValue = "Hello from Context";

  return (
    <Router>
      <div>
        <UpcomingEventsPage/>
        {/* <MainEvents/> */}
        
        {/* <PastEventsPage/> */}
        
      </div>
    </Router>
  );
};

export default TestPage;