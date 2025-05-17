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
      <PageHeaderSection />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Make an Impact</h2>
          <p className="text-gray-700 leading-relaxed">
            All proceeds from the event will go toward supporting palliative cancer patients—
            giving them comfort, dignity, and precious time with their loved ones. Over the years,
            our galas have raised an average of $20,000 per event, enabling us to provide essential
            PSW (Personal Support Worker) services to 15 beneficiaries. This year, we aim to go even
            further—with your support, we can make a greater impact.
          </p>
        </div>

        {/* Centered cards container */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {pastEvents.map((event) => (
            <PastEventsCard key={event.id} event={event} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/events"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Back to Events
          </Link>
        </div>
      </div>
    </>
  );
};

export default PastEvents;