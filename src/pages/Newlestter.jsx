import React, { useEffect } from "react";
import colours from "../assets/styles/BrandColours";
import NewsletterCard from "../components/NewsletterCard";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
//import ImageSlider from "../components/MainTopSection";

const Newlestter = () => {
    useEffect(() => {
        document.title = "Newsletter";
    }, []);
    return (
        <div className="bg-[#CFE6EF]">
            <div className="flex justify-center">
                <NewsletterCard poster="../assets/images/CommunityEvents/CateringForACause.jpeg" date="August 2024" />
            </div>
        </div>
    );
};

export default Newlestter;
