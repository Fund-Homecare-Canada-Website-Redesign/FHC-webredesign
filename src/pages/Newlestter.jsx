import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeaderSection from "../components/PageHeaderSection";
import NewsletterCard from "../components/NewsletterCard";
//import newsletters
import newsletterJune2024 from "../assets/pdfs/June2024.pdf";
import newsletterJuly2024 from "../assets/pdfs/July2024.pdf";
import newsletterAugust2024 from "../assets/pdfs/August2024.pdf";
import newsletterNovemeber2024 from "../assets/pdfs/November2024.pdf";
import newsletterDecember2024 from "../assets/pdfs/December2024.pdf";

const Newlestter = () => {
  useEffect(() => {
    document.title = "Newsletter";
  }, []);

  const newsletters = [
    {
      date: "December 2024",
      pdfUrl: newsletterDecember2024,
    },
    {
      date: "November 2024",
      pdfUrl: newsletterNovemeber2024,
    },
    {
      date: "August 2024",
      pdfUrl: newsletterAugust2024,
    },
    {
      date: "July 2024",
      pdfUrl: newsletterJuly2024,
    },
    {
      date: "June 2024",
      pdfUrl: newsletterJune2024,
    },
  ];

  return (
    <>
      <PageHeaderSection title="Our Newsletters" />
      <div className="bg-[#CFE6EF]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Newsletter Archive</h2>
            <p className="text-gray-700 leading-relaxed">
              Stay up-to-date with our monthly newsletters. Browse the archive below to see what we’ve been up to!
            </p>
          </div>
  
          {/* Newsletter Accordions */}
          <div className="space-y-10 max-w-7xl mx-auto px-4">
            <NewsletterCard newsletters={newsletters} />
          </div>
  
          {/* Back to Events Button */}
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

export default Newlestter;

