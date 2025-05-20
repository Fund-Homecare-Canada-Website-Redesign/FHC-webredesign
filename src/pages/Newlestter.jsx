import React, { useEffect } from "react";
// import colours from "../assets/styles/BrandColours";
import NewsletterCard from "../components/NewsletterCard";
import PageHeaderSection from "../components/PageHeaderSection";
//import ImageSlider from "../components/MainTopSection";

const Newlestter = () => {
    useEffect(() => {
      document.title = "Newsletter";
    }, []);
  
    return (
      <>
        <PageHeaderSection title="Our Newsletters" />
        <div className="bg-[#CFE6EF] py-12">
            <div className="container mx-auto px-4">
                {/* Your content here */}
                <h2 className="text-2xl font-bold text-center mb-6">Newsletter Archive</h2>
                {/* etc. */}
            </div>
        </div>
      </>
    );
  };

export default Newlestter;
