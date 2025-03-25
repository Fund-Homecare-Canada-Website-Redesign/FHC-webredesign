import React from "react";
import colours from "../assets/styles/BrandColours";

function PastEventsPage() {



    return (
        <div className="flex flex-col justify-start items-center min-h-screen w-full" style={{backgroundColor: "#cfe6ef"}}> 
            <h1 className="text-4xl font-bold mt-8">Make An Impact</h1>
            <p className="max-w-2xl text-center p-4">
            All proceeds from the event will go toward supporting palliative cancer patients—giving them comfort, dignity, and precious time with their loved ones. Over the years, our galas have raised an average of $20,000 per event, enabling us to provide essential PSW (Personal Support Worker) services to 15 beneficiaries. This year, we aim to go even further—with your support, we can make a greater impact.
            </p>
        </div>
    );
}

export default PastEventsPage;