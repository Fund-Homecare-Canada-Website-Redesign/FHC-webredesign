import React, { useEffect } from "react";
import colours from "../assets/styles/BrandColours";

const MainPage = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <h1>Main Page</h1>
            <p>This page is under construction</p>
        </div>
    );
};

export default MainPage;