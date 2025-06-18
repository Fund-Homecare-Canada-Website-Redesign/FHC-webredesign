import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import navbar
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
// Import pages
import AboutUs from './pages/AboutUs';
import MainEvents from './pages/MainEvents';
import Beneficiaries from './pages/Beneficiaries';
import UpcomingEvents from './pages/UpcomingEvents';
import PastEvents from './pages/PastEvents';
import Newlestter from './pages/Newlestter';
import ApplyToBeBeneficiary from './pages/ApplyToBeBeneficiary';
import ContactUs from './pages/ContactUs';
import Donate from './pages/Donate';
import MainPage from './pages/MainPage';
import DonationThankYou from './pages/DonationThankYou';
import { extractUTMParams, storeUTMParams } from './services/utmUtils';

function App() {
  // Capture UTM parameters on app initialization
  useEffect(() => {
    const utmParams = extractUTMParams();
    if (Object.keys(utmParams).length > 0) {
      storeUTMParams(utmParams);
      console.log('UTM parameters captured:', utmParams);
    }
  }, []);

  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<MainEvents />} />
        <Route path="/events/upcoming" element={<UpcomingEvents />} />
        <Route path="/events/past" element={<PastEvents />} />
        <Route path="/events/newsletter" element={<Newlestter />} />
        <Route path="/beneficiaries" element={<Beneficiaries />} />
        <Route path="/beneficiaries/apply" element={<ApplyToBeBeneficiary />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donation-thank-you" element={<DonationThankYou />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;