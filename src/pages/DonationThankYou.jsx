import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';
import { extractUTMParams } from '../services/utmUtils';

const DonationThankYou = () => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        document.title = "Thank You for Your Donation";

        const utm = extractUTMParams();

        // Track donation completion
        if (typeof window.gtag !== 'undefined') {
            const conversionData = {
                event_category: 'donation',
                event_label: 'donation_completed'
            };

            // Add UTM data if available
            if (Object.keys(utm).length > 0) {
                conversionData.campaign_source = utm.utm_source;
                conversionData.campaign_medium = utm.utm_medium;
                conversionData.campaign_name = utm.utm_campaign;
                conversionData.campaign_term = utm.utm_term;
                conversionData.campaign_content = utm.utm_content;
            }

            window.gtag('event', 'donation_completed', conversionData);
        }
    }, [searchParams]);

    return (
        <>
            <section>
                <div
                    className="w-full h-[66.7vh] bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${image_section_1})` }}
                >
                    <div className="absolute inset-0 bg-[#307694] opacity-90 mix-blend-overlay"></div>
                    <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                        <div className="text-center">
                            <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white mb-4">
                                Thank You!
                            </h1>
                            <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white">
                                Your generous donation makes a difference
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-[#CFE6EF] py-16">
                <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg text-center">
                    <div className="mb-8">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Your Donation Was Successful!
                        </h2>

                        <p className="text-lg text-gray-600 mb-6">
                            Thank you for supporting Fund Homecare Canada. Your generosity helps us provide essential homecare services to those who need them most.
                        </p>

                        <div className="space-y-4">
                            <p className="text-gray-600">
                                <strong>What happens next?</strong>
                            </p>
                            <ul className="text-left text-gray-600 space-y-3 max-w-2xl mx-auto">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <span><strong>Email Receipt:</strong> You will receive an email receipt from Stripe within a few minutes confirming your donation details</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <span><strong>Secure Processing:</strong> Your donation is being processed securely through Stripe's encrypted payment system</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <span><strong>Impact Updates:</strong> We'll keep you informed about how your donation is making a difference in our community through occasional updates</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <span><strong>Questions?</strong> If you have any questions or concerns about your donation, feel free to contact us anytime</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/"
                            className="bg-[#307694] hover:bg-[#246079] text-white font-bold px-8 py-3 rounded-md transition-all duration-300 ease-in-out"
                        >
                            Return Home
                        </a>
                        <a
                            href="/contact-us"
                            className="bg-transparent border-2 border-[#307694] text-[#307694] hover:bg-[#246079] hover:text-[#246079] font-bold px-8 py-3 rounded-md transition-all duration-300 ease-in-out"
                        >
                            Contact Us
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DonationThankYou;