import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import colours from "../assets/styles/BrandColours";
import image from "../assets/images/MainPage/Home_Hero-2.png";

const MainPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Home";
    }, []);

    // Handler for Events button click
    const handleNavigateToEvents = () => {
        navigate("/events");
    };

    return (
        <section>
            {/* First section */}
            <div
                className="w-full h-[60vh] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* Blue overlay with transparency */}
                <div
                    className="absolute inset-0 bg-[#307694] opacity-90 mix-blend-overlay"
                ></div>

                {/* Content container with max width that match navbar/footer */}
                <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                    <div className="md:pl-4 flex flex-col items-center md:items-start space-y-2">
                        {/* "Fund Homecare Canada" */}
                        <div>
                            <h1 className="font-roboto font-bold text-[28px] md:text-[60px] leading-none text-white">
                                Fund Homecare
                            </h1>
                        </div>
                        <div>
                            <h1 className="font-roboto font-bold text-[28px] md:text-[60px] leading-none text-white">
                                Canada
                            </h1>
                        </div>

                        {/* "Give. Fund. Care" */}
                        <p className="font-roboto font-normal text-[15px] md:text-[25.45px] leading-[140%] text-white">
                            Give. Fund. Care
                        </p>

                        {/* "Our Events" button */}
                        <button
                            onClick={handleNavigateToEvents}
                            className="font-roboto font-medium text-[10px] md:text-[17.78px] leading-none tracking-[0.44%] border-3 border-white rounded-[10px] bg-transparent w-[87px] h-[25px] md:w-[163px] md:h-[50px] flex items-center justify-center mt-4 cursor-pointer p-0 relative z-20 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:bg-opacity-10 active:scale-95 group"
                        >
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                Our Events →
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPage;