import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//import Components
import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';
import NewsletterCard from "../components/NewsletterCard";

// Import PDFs
import newsletterJune2024 from "../assets/pdfs/June2024.pdf";
import newsletterJuly2024 from "../assets/pdfs/July2024.pdf";
import newsletterAugust2024 from "../assets/pdfs/August2024.pdf";
import newsletterNovemeber2024 from "../assets/pdfs/November2024.pdf";
import newsletterDecember2024 from "../assets/pdfs/December2024.pdf";
import newsletterInfographic from "../assets/pdfs/Infographic.pdf";

const Newlestter = () => {
  useEffect(() => {
    document.title = "Newsletter";
  }, []);

  const infographic = [
    {
      date: "Fund Homecare Canada Infographic",
      pdfUrl: newsletterInfographic,
    },
  ];

  const newsletters = [
    { date: "December 2024", pdfUrl: newsletterDecember2024 },
    { date: "November 2024", pdfUrl: newsletterNovemeber2024 },
    { date: "August 2024", pdfUrl: newsletterAugust2024 },
    { date: "July 2024", pdfUrl: newsletterJuly2024 },
    { date: "June 2024", pdfUrl: newsletterJune2024 },
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
                      {/* Title for Newsletter Page */}
                      <div>
                          <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                              Our Newsletters
                          </h1>
                      </div>
                      <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
                          Stay Informed and Connected
                      </p>

                      {/* No button here unless you specifically need one for this page (e.g., scroll to archive) */}
                  </div>
              </div>
          </div>
      </section>
      <div className="bg-[#CFE6EF] py-12"> {/* Overall background for the content area */}
    <div className="max-w-7xl mx-auto px-4">

        {/* Newsletter Archive Header (Enhanced) */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Newsletter Archive</h2> {/* Larger and bolder font */}

          {/* The grey line should go here, directly after the h2 */}
          <div className="h-0.5 bg-gray-400 w-1/5 mx-auto mb-8"></div> {/* Subtle line below, adjusted margin-bottom */}

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"> {/* Adjusted text size and constrained width */}
            Stay up-to-date with our monthly newsletters. Browse the archive below to see what we’ve been up to!
          </p>
      </div>

        {/* Infographic Section (Enhanced with a subtle background) */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-lg bg-white shadow-md"> {/* Added bg-white, padding, rounded, shadow */}
            <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Annual Infographic Overview</h3> {/* Slightly larger heading */}
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto"> {/* Adjusted text size and constrained width */}
                Learn more about who we are, what we stand for, and the mission driving our organization.
                </p>
                <NewsletterCard newsletters={infographic} />
            </div>
        </div>

        {/* Monthly Newsletter Section (Enhanced with a subtle background, different shade) */}
        <div className="max-w-4xl mx-auto mt-16 mb-16 p-8 rounded-lg bg-gray-50 shadow-md"> {/* Added bg-gray-50, padding, rounded, shadow */}
            <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Monthly Newsletters</h3> {/* Slightly larger heading */}
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto"> {/* Adjusted text size and constrained width */}
                  Dive deeper into our monthly updates, stories, and community spotlights.
                </p>
            </div>
            <NewsletterCard newsletters={newsletters} />
        </div>

          {/* Back to Events Button */}
          <div className="flex justify-center mt-12 mb-8">
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

export default Newlestter;


