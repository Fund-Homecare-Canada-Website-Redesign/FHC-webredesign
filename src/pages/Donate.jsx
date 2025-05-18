import React, { useEffect } from "react";
import colours from "../assets/styles/BrandColours";

const Donate = () => {
    useEffect(() => {
        document.title = "Donate";
    }, []);
    return (
        <div>
            <h1>Donate</h1>
            <p>This page is under construction</p>
        </div>
    );
};

export default Donate;