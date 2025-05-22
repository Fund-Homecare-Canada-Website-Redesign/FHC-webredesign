import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//import Components
import PageHeaderSection from "../components/PageHeaderSection";
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
      <PageHeaderSection title="Our Newsletters" />
      <div className="bg-[#CFE6EF]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Newsletter Archive</h2>
            <p className="text-gray-700 leading-relaxed">
              Stay up-to-date with our monthly newsletters. Browse the archive below to see what we’ve been up to!
            </p>
          </div>

          {/* Infographic Section */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Annual Infographic Overview</h3>
            <p className="text-gray-600 mb-6">
            Learn more about who we are, what we stand for, and the mission driving our organization.
            </p>
            <NewsletterCard newsletters={infographic} />
          </div>

          {/* Monthly Newsletter Section */}
          <div className="text-center max-w-3xl mx-auto mt-16 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Monthly Newsletters</h3>
            <p className="text-gray-600">
              Dive deeper into our monthly updates, stories, and community spotlights.
            </p>
          </div>
          <NewsletterCard newsletters={newsletters} />

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


