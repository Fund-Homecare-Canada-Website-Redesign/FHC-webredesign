import React, { useEffect } from "react";
import colours from "../assets/styles/BrandColours";

const Admin = () => {
    useEffect(() => {
        document.title = "Admin";
    }, []);
    return (
        <div>
            <h1>Admin</h1>
            <p>This page is under construction</p>
        </div>
    );
};

export default Admin;