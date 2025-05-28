import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UpcomingEventsCard from "../components/UpcomingEventsCardNoFormIntegration.jsx";
import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';
// example import image to display
// import SpringGala2024Image1 from "../assets/images/PastEvents/SpringGala2024/Photos/image1.jpg";


const UpcomingEvents = () => {
  // Sample data - replace with actual data that you need
  const upcomingEvents = [
    // {
    //   id: 1,
    //   name: "Summer Gala 2023",
    //   date: "July 15, 2023",
    //   time: "6:00 PM - 10:00 PM",
    //   //location will be embedded in google maps
    //   location: "Grand Hotel Ballroom",
    //   description: "Join us for our annual summer gala featuring live music, silent auction, and gourmet dinner.",
    //   //call the image
    //   image: SpringGala2024Image1,
         // your event brite url
    //   eventbriteEmbedUrl: "https://www.eventbrite.com/e/640449565617?embed=true"

    // },

    //comment out or delete if you no longer need a card

    // {
    //   id: 2,
    //   name: "Community Health Fair",
    //   date: "August 5, 2023",
    //   time: "10:00 AM - 4:00 PM",
    //   location: "Community Center",
    //   description: "Free health screenings, wellness workshops, and family activities.",
    //   image: "/path/to/image2.jpg",
    //   eventbriteEmbedUrl: "https://www.eventbrite.com/e/640449565617?embed=true"
    // }
  ];

  useEffect(() => {
    document.title = "Upcoming Events";
  }, []);

  return (
    <>
      {/* New Header Section */}
      <section>
          <div
              className="w-full h-[66.7vh] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${image_section_1})` }}
          >
              {/* Blue overlay with transparency */}
              <div
                  className="absolute inset-0 bg-[#307694] opacity-90 mix-blend-overlay"
              ></div>

              {/* Content container with max w-7xl that match navbar/footer */}
              <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                  <div className="md:pl-4 flex flex-col items-center md:items-start space-y-2">
                      {/* Title for Newsletter Page */}
                      <div>
                          <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                              Upcoming Events
                          </h1>
                      </div>
                      <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
                      Discover Ways to Get Involved
                      </p>

                      {/* No button here unless you specifically need one for this page (e.g., scroll to archive) */}
                  </div>
              </div>
          </div>
      </section>
      <div className="bg-[#CFE6EF]">
        <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-4xl mx-auto mb-16 px-4"> {/* Increased max-w and added horizontal padding */}

          <h2 className="text-3xl font-bold mb-4 text-gray-800">Make an Impact</h2> {/* Slightly larger and bolder font */}
          <div className="h-0.5 bg-gray-400 w-1/5 mx-auto mb-8"></div> {/* Thin line */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"> {/* Adjusted text size and constrained width for readability */}
              All proceeds from the event will go toward supporting palliative cancer patients—
              giving them comfort, dignity, and precious time with their loved ones. Over the years,
              our galas have raised an average of $20,000 per event, enabling us to provide essential
              PSW (Personal Support Worker) services to 15 beneficiaries. This year, we aim to go even
              further—with your support, we can make a greater impact.
          </p>
      </div>
          {/* Show message if no upcoming events, otherwise render event cards */}
          <div className="space-y-6">
            {upcomingEvents.length === 0 ? (
              <div className="text-center text-lg text-gray-700 font-medium py-16">
                There are currently no upcoming events. Stay tuned!
              </div>
            ) : (
              upcomingEvents.map((event) => (
                <UpcomingEventsCard key={event.id} event={event} />
              ))
            )}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/events"
              className="flex items-center text-white px-5 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out no-underline"
              style={{ backgroundColor: "#54749D" }}
            >
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
