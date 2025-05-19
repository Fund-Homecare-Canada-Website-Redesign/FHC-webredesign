import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import colours from "../assets/styles/BrandColours";
import image_section_1 from "../assets/images/MainPage/Home_Hero-2.png";
import fhcLogo from "../assets/images/Logos/FHC_NoBgrd_Logo.png";

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
        <div>
            {/* First section */}
            <section>
                <div
                    className="w-full h-[60vh] bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${image_section_1})` }}
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


            {/* Second section - different layouts for mobile/desktop */}
            <section>
                {/* Mobile layout - only visible on small screens */}
                <div className="block md:hidden w-full bg-white">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                        <div className="text-center mb-6">
                            <img src={fhcLogo} alt="Fund Homecare Canada" className="h-24 mx-auto mb-4" />
                            <h2 className="font-roboto font-medium text-[24px] leading-tight text-black">
                                About Fund Homecare Canada
                            </h2>
                            <div className="h-0.5 bg-black w-3/4 mx-auto mt-2 mb-6"></div>
                        </div>
                        <p className="font-roboto font-normal text-[18px] leading-normal text-black">
                            In-home palliative care can have a profound impact on patients' end of life experience, offering a more comfortable and dignified quality of life. Unfortunately, the high cost of homecare puts it out of reach for many in need. We believe that palliative homecare should be accessible for all, which is why we created Fund Homecare Canada: a Canadian registered charitable, non-profit organization that provides financial support to cancer patients with in-home palliative care needs.
                        </p>
                    </div>
                </div>
                {/* Desktop layout - hidden on small screens */}
                <div className="hidden md:block w-full bg-white">
                    <div className="max-w-7xl mx-auto px-4 py-16 h-full flex items-center">

                        <div className="max-w-[40%] my-auto">
                            <div className="grid grid-cols-4 grid-rows-4">
                                <div className="col-span-2 font-roboto font-medium text-[60px] leading-none text-black">About</div>
                                <div className="col-span-2 col-start-1 row-start-2 font-roboto font-medium text-[60px] leading-none text-black">Fund</div>
                                <div className="col-span-2 row-span-2 col-start-3 row-start-1">
                                    <img src={fhcLogo} alt="Fund Homecare Canada" className="max-h-36 h-auto w-auto" />
                                </div>
                                <div className="col-span-4 row-start-3 font-roboto font-medium text-[60px] leading-none text-black">Homecare</div>
                                <div className="col-span-4 row-start-4 font-roboto font-medium text-[60px] leading-none text-black">Canada</div>
                            </div>
                        </div>

                        <div className="flex-1 pl-8 font-roboto font-normal text-[23px] leading-10 text-black text-right">
                            <p>In-home palliative care can have a profound impact on patients' end of life experience, offering a more comfortable and dignified quality of life. Unfortunately, the high cost of homecare puts it out of reach for many in need. We believe that palliative homecare should be accessible for all, which is why we created Fund Homecare Canada: a Canadian registered charitable, non-profit organization that provides financial support to cancer patients with in-home palliative care needs.</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default MainPage;