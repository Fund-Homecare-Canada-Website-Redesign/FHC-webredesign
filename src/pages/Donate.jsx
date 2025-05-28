import React, { useEffect } from "react";
import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';

const Donate = () => {
    useEffect(() => {
        document.title = "Donate";
    }, []);
    return (
        <>
        <section>
            <div
                className="w-full h-[66.7vh] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${image_section_1})` }}
            >
                {/* Blue overlay with transparency */}
                <div
                    className="absolute inset-0 bg-[#307694] opacity-90 mix-blend-overlay"
                ></div>

                {/* Content container with max w-7xl that match navbar/footer */}
                <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                    <div className="md:pl-4 flex flex-col items-center md:items-start space-y-2">
                        {/* "Main Events" title */}
                        <div>
                            <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                                Donate To US
                            </h1>
                        </div>
                        <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
                            Your Support Brings Comfort and Care
                        </p>

                        {/* No "Contact Us" Button here unless you want to scroll to a specific section on THIS page */}
                        {/* If you want a button here, you'd need to define its purpose and where it links/scrolls */}
                    </div>
                </div>
            </div>
        </section>
        
        
        
        </>
    );
};

export default Donate;