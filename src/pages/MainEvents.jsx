import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import PageHeaderSection from "../components/PageHeaderSection.jsx";
import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';
import upcomingImage from "../compressed/assets/images/MainPicture.jpg";
import pastImage from "../compressed/assets/images/Ways-to-Give_Hero-Image.png";
import newsletterImage from "../compressed/assets/images/NewsletterImage.png";

const MainEvents = () => {
  useEffect(() => {
    document.title = "Events";
  }, []);
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: "Upcoming Events",
      image: upcomingImage,
      path: "/events/upcoming",
    },
    {
      id: 2,
      title: "Past Events",
      image: pastImage,
      path: "/events/past",
    },
    {
      id: 3,
      title: "Our Newsletters",
      image: newsletterImage,
      path: "/events/newsletter",
    },
  ];

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
                      {/* "Main Events" title */}
                      <div>
                          <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                              Main Events
                          </h1>
                      </div>
                      <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
                          Discover What's Happening
                      </p>

                      {/* No "Contact Us" Button here unless you want to scroll to a specific section on THIS page */}
                      {/* If you want a button here, you'd need to define its purpose and where it links/scrolls */}
                  </div>
              </div>
          </div>
      </section>

      <div className="bg-[#CFE6EF]">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Stay Connected</h2> {/* Slightly larger and bolder font */}
          <div className="h-0.5 bg-gray-400 w-1/5 mx-auto mb-8"></div> {/* Thin line */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Discover what we're doing year-round! Whether you're planning to attend an upcoming
              fundraiser, explore highlights from past gatherings, or simply stay in the loop with
              our newsletter—we've got something for you.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <div
                key={section.id}
                className="relative w-full h-96 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer"
                onClick={() => navigate(section.path)}
              >
                {/* Use img tag instead of background image for better loading */}
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
                  <h3 className="text-3xl md:text-4xl text-white font-semibold">
                    {section.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainEvents;