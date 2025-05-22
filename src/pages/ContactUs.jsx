import React, { useEffect } from "react";
import colours from "../assets/styles/BrandColours";

const ContactUs = () => {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);
    return (
        <div>
            <h1>Contact Us</h1>
            <p>This page is under construction</p>
        </div>
    );
};

export default ContactUs;