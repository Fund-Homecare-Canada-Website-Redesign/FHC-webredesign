import React from "react";
import { Link } from "react-router-dom";
import UpcomingEventsCard from "../components/UpcomingEventsCardNoFormIntegration.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageHeaderSection from "../components/PageHeaderSection.jsx";



const UpcomingEvents = () => {
  // Sample data - replace with actual data from your backend
  const upcomingEvents = [
    {
      id: 1,
      name: "Summer Gala 2023",
      date: "July 15, 2023",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Hotel Ballroom",
      description: "Join us for our annual summer gala featuring live music, silent auction, and gourmet dinner.",
      image: "/path/to/image1.jpg"
    },
    {
      id: 2,
      name: "Community Health Fair",
      date: "August 5, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center",
      description: "Free health screenings, wellness workshops, and family activities.",
      image: "/path/to/image2.jpg"
    }
  ];

  return (
    <>
      <PageHeaderSection />
      <div className="container mx-auto px-4 py-8">
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


        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <UpcomingEventsCard key={event.id} event={event} />
          ))}
        </div>

        <div className="flex justify-between items-center mb-8">
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

export default UpcomingEvents;
