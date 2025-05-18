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
                className="w-full h-[60vh] bg-cover bg-center flex items-center relative"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                {/* Blue overlay with transparency */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: '#307694',
                        opacity: 0.9,
                        mixBlendMode: 'overlay'
                    }}
                ></div>

                {/* Content container with max width that match navbar/footer */}
                <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
                    <div className="md:pl-4">
                        {/* "Fund Homecare Canada" */}
                        <h1
                            className="font-bold text-white"
                            style={{
                                fontFamily: 'Roboto',
                                fontWeight: 700,
                                fontSize: '60px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                width: '442px',
                                color: '#FFFFFF',
                            }}
                        >
                            Fund Homecare Canada
                        </h1>

                        {/* "Give. Fund. Care" */}
                        <p
                            className="text-white"
                            style={{
                                fontFamily: 'Roboto',
                                fontWeight: 400,
                                fontSize: '25.45px',
                                lineHeight: '140%',
                                letterSpacing: '0%',
                                color: '#FFFFFF',
                            }}
                        >
                            Give. Fund. Care
                        </p>

                        {/* "Our Events" button */}
                        <button
                            onClick={handleNavigateToEvents}
                            className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:bg-opacity-10 active:scale-95"
                            style={{
                                fontFamily: 'Roboto',
                                borderRadius: '10px',
                                border: '3px solid #FFFFFF',
                                backgroundColor: 'transparent',
                                width: '163px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '12px',
                                cursor: 'pointer',
                                padding: 0,
                                position: 'relative',
                                zIndex: 20,
                            }}
                        >
                            <span
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                style={{
                                    fontFamily: 'Roboto',
                                    fontWeight: 500,
                                    fontSize: '17.78px',
                                    lineHeight: '100%',
                                    letterSpacing: '0.44%',
                                    color: '#FFFFFF',
                                    pointerEvents: 'none',
                                }}
                            >
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