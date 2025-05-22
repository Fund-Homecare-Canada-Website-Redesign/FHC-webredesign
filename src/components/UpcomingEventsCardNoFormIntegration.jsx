import { useState, useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import GoogleMapComponent from "./GoogleMap.jsx";
import SponsorSlider from "./SponsorSlider";

function UpcomingEventsCard({ event }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const expandedRef = useRef(null);

  useEffect(() => {
    if (!isExpanded || !expandedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsExpanded(false);
        }
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(expandedRef.current);
    return () => {
      if (expandedRef.current) observer.unobserve(expandedRef.current);
    };
  }, [isExpanded]);

  return (
    <div className="flex justify-center w-full">
      <div className="bg-white overflow-hidden border shadow-lg rounded-xl p-8 w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[75%] transition-all duration-300">
        
        {/* Flex container */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Image */}
          <div className="order-1 md:order-2 w-full max-w-[500px] md:max-w-[700px] md:w-[400px] mx-auto md:mx-0 flex-shrink-0">
            <img
              src={event.image || "/placeholder.svg"}
              alt={`${event.name}`}
              loading="lazy"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 md:order-1 flex-1">
            <h2 className="text-2xl font-bold text-black mb-2">{event.name}</h2>
            <h3 className="text-lg font-medium text-gray-700 mb-3">{event.date}</h3>

            <div className="text-gray-600 mb-4 space-y-3 whitespace-pre-line">
              {event.description.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <button
              onClick={toggleExpand}
              className="flex items-center text-white px-5 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out"
              style={{ backgroundColor: "#54749D" }}
            >
              {isExpanded ? "View Less Details" : "View More Details"}
              <FaArrowDown
                className={`text-white ml-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Expandable content */}
        <div
          ref={expandedRef}
          className={`transition-all duration-500 overflow-hidden ${
            isExpanded ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          {/* 📦 Eventbrite Integration instead of photo slider */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Register Now</h4>
            <div className="w-full">
              {/* Example Eventbrite Embed */}
              <iframe
                title="Eventbrite Ticket"
                src={event.eventbriteEmbedUrl}
                frameBorder="0"
                height="450"
                className="w-full rounded-lg border"
                allow="payment *"
              ></iframe>
            </div>
          </div>

          {/* Location */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Event Location</h4>
            <GoogleMapComponent location={event.location} />
          </div>

          {/* Sponsors */}
          {event.sponsors?.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Our Sponsors</h4>
              <SponsorSlider sponsors={event.sponsors} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpcomingEventsCard;
