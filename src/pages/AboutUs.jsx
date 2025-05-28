import React, { useEffect } from "react";

import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';

import homeIcon from "../assets/images/AboutUs/OurGoals/homeIcon.png";
import visibilityIcon from "../assets/images/AboutUs/OurGoals/360Degree.png";
import fundingIcon from "../assets/images/AboutUs/OurGoals/fundingIcon.png";
import communicationIcon from "../assets/images/AboutUs/OurGoals/communicationIcon.png";

import OurTeamCard from "../components/OurTeamCard";
import Rohit from "../assets/images/AboutUs/WhoAreWe/Rohit.jpg";
import Denise from "../assets/images/AboutUs/WhoAreWe/Denise.png";
import Nikita from "../assets/images/AboutUs/WhoAreWe/Nikita.jpg";
import Ricky from "../assets/images/AboutUs/WhoAreWe/Ricky.png";
import Sangeeta from "../assets/images/AboutUs/WhoAreWe/Sangeeta.png";


function AboutUs() {
    useEffect(() => {
        document.title = "About Us";
    }, []);
    return (
        <>
            {/* New Header Section for About Us */}
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
                            {/* Title for About Us Page */}
                            <div>
                                <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                                    About Us
                                </h1>
                            </div>
                            <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
                                Our Mission, Vision, and Impact
                            </p>

                            {/* No button here unless you specifically need one for this page */}
                        </div>
                    </div>
                </div>
            </section>

            {/* The rest of your About Us content */}
            <div className="bg-[#CFE6EF] pt-10 pb-10">
                {/* Who We Are Section */}
                <section className="bg-[#54749D] text-white p-6 md:p-10 rounded-[40px] mb-10 max-w-4xl mx-auto">
                    {/* Corrected font class: `font-[Montserrat]` should be `font-['Montserrat']` or just `font-montserrat` if configured in tailwind.config.js */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        Fund Homecare Canada is a Canadian registered charitable, not-for-profit organization dedicated to making in-home care accessible to palliative cancer patients—a critical and prevalent need that is unfortunately out of reach for many.
                        <br /><br />
                        We created Fund Homecare Canada to address this discrepancy by providing financial support to help cancer patients and their families with in-home palliative care needs. Our funding goes towards personal care, housekeeping services, meals, nursing, and shopping assistance.
                    </p>
                </section>

                {/* Our Goals Section */}
                <section className="bg-[#54749D] text-white p-6 md:p-10 rounded-[40px] mb-10 max-w-4xl mx-auto">
                    {/* Corrected font class */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 ml-12">Our Goals</h2>

                    <div className="space-y-6">
                        {/* Goal 1 */}
                        <div className="flex items-start gap-4">
                            <img src={homeIcon} alt="home icon" className="w-10 h-10 mt-1" />
                            <p className="text-base md:text-lg leading-relaxed">
                                Funding <strong>home-based palliative care</strong> for cancer patients residing in Ontario.
                            </p>
                        </div>

                        {/* Goal 2 */}
                        <div className="flex items-start gap-4">
                            <img src={visibilityIcon} alt="360 visibility icon" className="w-12 h-12 mt-1" />
                            <p className="text-base md:text-lg leading-relaxed">
                                Maintain a 360 degree monitoring mechanism to <strong>provide visibility</strong> for our sponsors and clients.
                            </p>
                        </div>

                        {/* Goal 3 */}
                        <div className="flex items-start gap-4">
                            <img src={fundingIcon} alt="funding icon" className="w-12 h-12 mt-1" />
                            <p className="text-base md:text-lg leading-relaxed">
                                Channel funding specifically toward <strong>palliative cancer patients</strong> who do not qualify for government or any other funding for home-based care.
                            </p>
                        </div>

                        {/* Goal 4 */}
                        <div className="flex items-start gap-4">
                            <img src={communicationIcon} alt="communication icon" className="w-10 h-10 mt-1" />
                            <p className="text-base md:text-lg leading-relaxed">
                                Utilize <strong>communication channels</strong> including direct outreach, social media campaigns, and fundraising events to encourage corporate giving, crowdfunding, and personal donations.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Meet Our Team Section */}
            <div className="bg-[#307694] py-20 px-4 sm:px-10 lg:px-20"> {/* Adjusted px for better responsiveness */}
                <h2 className="text-white font-bold text-4xl sm:text-5xl mb-10 text-center">Meet Our Team</h2> {/* Added text-center */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"> {/* Added max-w-7xl mx-auto for grid */}
                    <OurTeamCard
                        name="Rohit Bhalla"
                        role="Co-Founder"
                        image={Rohit}
                        bio="Rohit Bhalla is the Co-Founder of Fund Homecare Canada. Known for his innovative problem solving, Rohit’s passion for a better tomorrow drove him to address one of the most prominent gaps in healthcare: access to home-based palliative care. With guidance from respected connections in the industry, Rohit’s vision to support palliative cancer patients in need of care came to fruition and Fund Homecare was born.

                        Rohit has over 30 years of experience in strategic client engagement and portfolio management roles, and holds a degree in business administration and multiple certifications in leadership and management. Having lived and worked in Canada, India, Dubai, and the US, Rohit brings a wealth of international experience and a vast network of connections to his work at Fund Homecare"
                    />

                    <OurTeamCard
                        name="Denise D'Silva"
                        role="Co-Founder"
                        image={Denise}
                        bio="Helping people in need is in Denise’s blood, especially those that are not able to help themselves for a variety of reasons. Denise’s drive to help start Fund Homecare was accelerated by the discovery that many people in her community are low income and cannot afford external resources to help them care for their loved ones when it matters most.

                        Denise is a licensed Paralegal and has worked in the not-for-profit industry for over 15 years. She has vast experience in dealing with government organizations, the healthcare industry, and community agencies."
                    />

                    <OurTeamCard
                        name="Nikita Sahni"
                        role="Volunteer Board Member"
                        image={Nikita}
                        bio="Nikita is a Director at Fund Homecare. Her heart for volunteering with Habitat for Humanity, Youth Without Shelter, the YMCA Youth Council, and new immigrants encouraged her to work with Fund HomeCare to bring real solutions to real problems experienced by Canadians.

                        As a Queen’s MBA graduate, Nikita was heavily involved in the campus community. She was a director in her Student Executive Council, and was involved with Engineers Without Borders and the Women in Engineering club during her undergraduate degree. Now, Nikita is working as a product owner, working to utilize technology to enhance the industry."
                    />

                    <OurTeamCard
                        name="Ricky Pinto"
                        role="Volunteer Board Member"
                        image={Ricky}
                        bio="In the last 10-15 years, a number of Ricky’s friends and family were diagnosed with cancer, and he witnessed first hand struggles to make palliative care arrangements. He joined the Fund Homecare team in the hopes of contributing his knowledge and expertise to the cause.

                        Ricky is a Canadian CPA, CA and has significant experience serving a range of entities, primarily in the financial services sector, in Canada, England and the Middle East. Prior to his retirement in 2017, he was a Deloitte audit partner. He has been involved in various leadership and governance roles over the years. Most recently, he has served on the board of a Mississauga regional community clinic, an Ontario pension advisory committee, and a Toronto charity bike ride committee."
                    />

                    <OurTeamCard
                        name="Sangeeta Madan"
                        role="Treasurer"
                        image={Sangeeta}
                        bio="Sangeeta is a voluntary board member and the Treasurer of Fund Homecare. Her desire to help anyone in need, makes her a perfect addition to the team at Fund Homecare. Sangeeta moved to Canada in 2022 with an accounting designation from India and the US. She has been working with Royal Bank of Canada for the past 21 years in various roles within finance and technology.

                        During this time she also completed her CPA, CA designation in Canada. Sangeeta is currently a Senior Director, Supplier Management Office for the Technology and Operations within Royal Bank of Canada responsible for the risk and relationship management for ~1000 technology vendors."
                    />
                </div>
            </div>
        </>
    );
}

export default AboutUs;