import React from "react";
import { Link } from "react-router-dom";
import PastEventsCard from "../components/PastEventsCard";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageHeaderSection from "../components/PageHeaderSection.jsx";


const PastEvents = () => {
  // Sample data - replace with actual data from your backend
  const pastEvents = [
    {
      id: 1,
      name: "Spring Fundraiser 2023",
      date: "April 10, 2023",
      time: "5:30 PM - 9:00 PM",
      location: "City Hall",
      description: "Our successful spring fundraiser raised over $50,000 for local programs.",
      image: "/path/to/image3.jpg"
    },
    {
      id: 2,
      name: "Winter Holiday Party",
      date: "December 15, 2022",
      time: "6:00 PM - 11:00 PM",
      location: "Community Center",
      description: "Annual holiday celebration with food, music, and gift giving for families in need.",
      image: "/path/to/image4.jpg"
    }
  ];

  return (
    <>
      <NavBar />
      <PageHeaderSection/>
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Past Events</h1>
        <Link 
          to="/events" 
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Back to Events
        </Link>
      </div>
      
      <div className="space-y-6">
        {pastEvents.map((event) => (
          <PastEventsCard key={event.id} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PastEvents;