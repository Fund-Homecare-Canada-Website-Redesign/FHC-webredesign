import React from "react";
import { Link } from "react-router-dom";
import UpcomingEventsCardWithFormIntegration from "../components/UpcomingEventsCardWithFormIntegration";

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
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
        <Link 
          to="/events" 
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Back to Events
        </Link>
      </div>
      
      <div className="space-y-6">
        {upcomingEvents.map((event) => (
          <UpcomingEventsCardWithFormIntegration
            key={event.id}
            eventName={event.name}
            eventDate={event.date}
            eventTime={event.time}
            eventLocation={event.location}
            eventDescription={event.description}
            eventImage={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;