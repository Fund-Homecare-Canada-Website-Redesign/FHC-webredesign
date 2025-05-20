import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import colours from "../assets/styles/BrandColours";
import image_section_1 from "../assets/images/MainPage/Home_Hero-2.png";
import image_section_3 from "../assets/images/MainPage/img_sec3.png";
import image_section_6 from "../assets/images/MainPage/img_sec6.png";
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

    // Handler for Donate Today button click
    const handleNavigateToDonate = () => {
        navigate("/donate");
    };

    return (
        <div>
            {/* First section */}
            <section>
                <div
                    className="w-full h-[66.7vh] bg-cover bg-center relative"
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
                <div className="hidden md:block w-full bg-white min-h-[40vh]">
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

            {/* Third section - different layouts for mobile/desktop */}
            <section>
                {/* Mobile layout - only visible on small screens */}
                <div className="block md:hidden w-full bg-[#3A92A0] py-8 px-5">
                    <div className="flex flex-col items-center">
                        {/* Title: We need your help */}
                        <h2 className="font-montserrat font-medium text-[36px] leading-[150%] text-white text-center">
                            We Need Your Help
                        </h2>

                        {/* Divider line */}
                        <div className="h-[1px] w-3/4 bg-white my-4"></div>

                        {/* Subtitle: Supporting Those In Need */}
                        <h3 className="font-montserrat font-normal text-[20px] leading-[150%] text-white text-center mb-6">
                            Supporting Those In Need
                        </h3>

                        {/* Description text */}
                        <p className="font-roboto font-normal text-[14px] leading-[150%] text-white text-center mb-6">
                            Many of the individuals we serve are elderly, facing serious health challenges while living alone, with limited income from government assistance (such as Old Age Security or CPP) covering only basic needs. Your donation helps provide crucial Personal Support Worker (PSW) care, offering comfort and dignity in their final days.
                        </p>

                        {/* Image */}
                        <div className="mb-3 w-full px-6">
                            <div className="max-w-[300px] mx-auto">
                                <img
                                    src={image_section_3}
                                    alt="Beneficiary"
                                    className="w-full aspect-[399/343] object-cover rounded-[25px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]"
                                />
                            </div>
                        </div>

                        {/* Beneficiary details withheld for privacy reasons */}
                        <p className="font-roboto font-normal text-[13px] text-white mb-8 text-center">
                            Beneficiary details withheld for privacy reasons
                        </p>

                        {/* Donate Today button */}
                        <button
                            onClick={handleNavigateToDonate}
                            className="font-roboto font-medium text-[17px] leading-none tracking-[0.44%] border-2 border-white rounded-[10px] bg-transparent w-[180px] h-[50px] flex items-center justify-center cursor-pointer text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:bg-opacity-10 active:scale-95 group"
                        >
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                Donate Today →
                            </span>
                        </button>
                    </div>
                </div>
                {/* Desktop layout - hidden on small screens */}
                <div className="hidden md:block w-full bg-[#3A92A0] min-h-[61.3vh]">
                    {/* Title: We need your help */}
                    <div className="max-w-7xl mx-auto px-4 py-8 h-full flex flex-col">
                        <h2 className="font-roboto font-medium text-[50px] leading-[150%] tracking-[0%] text-center text-white mb-4">We need your help</h2>
                        <div className="flex-1 flex justify-center">
                            <div className="w-1/3">
                                {/* Image */}
                                <div className="mb-3">
                                    <img src={image_section_3} alt="Beneficiary" className="w-full max-w-[399px] aspect-[399/343] object-cover rounded-[25px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]" />
                                </div>
                                {/* Beneficiary details withheld for privacy reasons */}
                                <div>
                                    <p className="font-roboto font-normal text-[15px] leading-[150%] tracking-[0%] text-white mb-4 text-left">Beneficiary details withheld for privacy reasons</p>
                                </div>
                            </div>
                            <div className="w-2/3 pl-8">
                                <div>
                                    <p className="font-roboto font-normal text-[20px] leading-[150%] tracking-[0%] text-white mb-4 text-left">Many of the individuals we serve are elderly and facing serious health challenges, often while living alone. For those in palliative care, access to Personal Support Worker (PSW) services can be crucial—yet financial constraints sometimes make this care difficult to obtain.</p>
                                </div>
                                <div>
                                    <p className="font-roboto font-normal text-[20px] leading-[150%] tracking-[0%] text-white mb-4 text-left">Some rely solely on government assistance (such as Old Age Security or CPP), which may cover only basic living expenses, leaving little for essential care. Your donation helps bridge this gap, providing comfort and dignity in their final days.</p>
                                </div>
                                {/* Donate Today button */}
                                <div className="flex justify-end mt-6">
                                    <button
                                        onClick={handleNavigateToDonate}
                                        className="font-roboto font-medium text-[10px] md:text-[17.78px] leading-none tracking-[0.44%] border-3 border-white rounded-[10px] bg-transparent w-[100px] h-[30px] md:w-[187px] md:h-[61px] flex items-center justify-center cursor-pointer p-0 relative z-20 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:bg-opacity-10 active:scale-95 group"
                                    >
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            Donate Today →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fourth section */}

            {/* Fifth section - Why Palliative? */}
            <section>
                {/* Mobile layout - only visible on small screens */}
                <div className="block md:hidden w-full bg-[#307694] py-8 px-5">
                    <div className="flex flex-col items-center">
                        {/* Title */}
                        <h2
                            className="font-roboto font-medium text-[60px] leading-[150%] text-white text-center"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                        >
                            Why Palliative?
                        </h2>

                        {/* Divider line */}
                        <div className="h-[1px] w-3/4 bg-white my-4"></div>

                        {/* Content */}
                        <div className="w-full max-w-[500px] mx-auto">
                            <p className="font-roboto font-normal text-[23px] leading-[150%] text-white text-left mb-4">
                                Palliative care can significantly enhance the quality of life of patients with progressive, life-altering illness, offering them comfort and dignity in a place of their choosing. Furthermore, research shows that assistance with palliative care not only gives respite to the patient, but alleviates the degree of emotional, social and financial stress for loved ones who may care for a patient. Unfortunately, Canada's patchwork of palliative care services is costly and inconsistent, which harms patients and the sustainability of our healthcare system.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop layout - hidden on small screens */}
                <div className="hidden md:block w-full bg-[#307694] min-h-[40.2vh]">
                    <div className="max-w-7xl mx-auto px-4 py-8 h-full flex flex-col">
                        <h2
                            className="font-roboto font-medium text-[50px] leading-[150%] tracking-[0%] text-left text-white mb-4"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                        >
                            Why Palliative?
                        </h2>
                        <div>
                            <p className="font-roboto font-normal text-[20px] leading-[150%] tracking-[0%] text-white mb-4 text-left">
                                Palliative care can significantly enhance the quality of life of patients with progressive, life-altering illness, offering them comfort and dignity in a place of their choosing. Furthermore, research shows that assistance with palliative care not only gives respite to the patient, but alleviates the degree of emotional, social and financial stress for loved ones who may care for a patient. Unfortunately, Canada's patchwork of palliative care services is costly and inconsistent, which harms patients and the sustainability of our healthcare system.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sixth section */}
            <section>
                {/* Mobile layout */}
                <div className="block md:hidden w-full bg-white py-8 px-5">
                    <div className="flex flex-col items-center">
                        {/* Title */}
                        <h2
                            className="font-roboto font-medium text-[60px] leading-[150%] text-[#307694] text-center"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                        >
                            Why Homecare?
                        </h2>

                        {/* Divider line */}
                        <div className="h-[1px] w-3/4 bg-[#307694] my-4"></div>

                        {/* Content */}
                        <div className="w-full max-w-[500px] mx-auto">
                            <p className="font-roboto font-normal text-[23px] leading-[150%] text-[#307694] text-left mb-4">
                                Homecare provides patients with a level of comfort and privacy that are hard to come by in an external care environment. However, about 80% of care is typically provided by informal caregivers like family, friends and neighbors<sup>1</sup>, and they simply don't have the time or financial resources to make prolonged homecare a reality. While 75% of Canadians state that they would prefer to die at home, 42% ultimately die in acute care hospitals<sup>2</sup>.
                            </p>
                        </div>

                        {/* Mobile layout - image and citations */}
                        <div className="mt-8 w-full px-4 flex flex-col">
                            <img
                                src={image_section_6}
                                alt="Homecare illustration"
                                className="w-full h-auto"
                            />
                            <div className="mt-2 text-center">
                                <p className="font-roboto font-normal text-[16px] text-[#307694] inline-block text-left">
                                    <sup>1</sup> Fast, 2009<br />
                                    <sup>2</sup> Canadian Home Care Association, 2018
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop layout - hidden on small screens */}
                <div className="hidden md:block w-full bg-white min-h-[40.2vh]">
                    <div className="max-w-7xl mx-auto px-4 py-8 h-full flex flex-col items-center">
                        <h2
                            className="font-roboto font-medium text-[50px] leading-[150%] tracking-[0%] text-center text-[#307694] mb-4"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                        >
                            Why Homecare?
                        </h2>
                        <div className="w-full max-w-[75%]">
                            <p className="font-roboto font-normal text-[20px] leading-[150%] tracking-[0%] text-[#307694] mb-4 text-left">
                                Homecare provides patients with a level of comfort and privacy that are hard to come by in an external care environment. However, about 80% of care is typically provided by informal caregivers like family, friends and neighbors<sup>1</sup>, and they simply don't have the time or financial resources to make prolonged homecare a reality. While 75% of Canadians state that they would prefer to die at home, 42% ultimately die in acute care hospitals<sup>2</sup>.
                            </p>
                        </div>

                        {/* Desktop layout - image and citations */}
                        <div className="mt-8 flex flex-col items-center w-full">
                            <img
                                src={image_section_6}
                                alt="Homecare illustration"
                                className="max-w-[95%] h-auto"
                            />
                            <div className="w-full max-w-[75%] mt-2">
                                <p className="font-roboto font-normal text-[16px] text-[#307694] text-left">
                                    <sup>1</sup> Fast, 2009<br />
                                    <sup>2</sup> Canadian Home Care Association, 2018
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainPage;