import React, { useState } from "react";
// Remove motion and AnimatePresence if you're not using them elsewhere in this component
// If you still use them for the description collapse, keep them.
// For simplicity, I'll assume you only need them for the description now.
import { motion, AnimatePresence } from "framer-motion";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// import colours from "../assets/styles/BrandColours";
import ProgressBar from "./DonationProgressBar";
import FhcFullLogoTransparent from '../assets/images/Logos/FHC_Full_Logo_Transparent.png';

const BeneficiaryCard = ({ beneficiary }) => {
    // const [expandDonation, setExpandDonation] = useState(false); // REMOVE THIS STATE
    const [showFullDescription, setShowFullDescription] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    // REMOVE toggleDonationExpand function
    // const toggleDonationExpand = () => {
    //     setExpandDonation((prev) => !prev);
    // };

    const toggleDescription = () => {
        setShowFullDescription((prev) => !prev);
    };

    // New handler for the Donate button
    const handleDonateClick = () => {
      // Pass the beneficiary's ID and/or name as state to the /donate route
      navigate('/donate', { state: { selectedBeneficiaryId: beneficiary.id, selectedBeneficiaryName: beneficiary.beneficiaryName } });
  };

    // Calculate progress percentage
    const progressPercentage = beneficiary.goal > 0
        ? Math.min(100, (beneficiary.raised / beneficiary.goal) * 100)
        : 0;

    // Check if description is too long for collapse (adjust threshold as needed)
    const DESCRIPTION_MAX_LENGTH = 200; // Example: show "read more" if > 200 chars
    const isDescriptionTooLong = beneficiary.description.length > DESCRIPTION_MAX_LENGTH;

    return (
        <div className="beneficiary-card font-[Montserrat] w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg flex flex-col">
            {/* Top Section: Image and Basic Info */}
            <div className="relative p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Image / Logo Container */}
                <div className="flex-shrink-0 w-36 h-36 sm:w-48 sm:h-48 bg-gray-100 flex items-center justify-center p-2 rounded-md shadow-inner">
                    <img
                        src={beneficiary.imageUrl || FhcFullLogoTransparent}
                        alt={beneficiary.fundName || "Fund Homecare Logo"}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Text Info */}
                <div className="flex-grow text-center sm:text-left">
                    <h2 className="font-roboto font-bold text-2xl text-gray-800">{beneficiary.fundName}</h2>
                    <p className="text-xl text-[#757575] mb-4">{beneficiary.beneficiaryName}</p>
                    <div className="text-gray-700 leading-relaxed text-base">
                        {isDescriptionTooLong && !showFullDescription ? (
                            <>
                                {beneficiary.description.substring(0, DESCRIPTION_MAX_LENGTH)}...
                                <button
                                    onClick={toggleDescription}
                                    className="text-[#54749D] hover:underline ml-1 font-medium"
                                >
                                    Read More
                                </button>
                            </>
                        ) : (
                            <>
                                {beneficiary.description}
                                {isDescriptionTooLong && (
                                    <button
                                        onClick={toggleDescription}
                                        className="text-[#54749D] hover:underline ml-1 font-medium"
                                    >
                                        Read Less
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Progress Bar and Donation Info */}
            <div className="px-6 pb-6 pt-2">
                <div className="mb-4">
                    <ProgressBar progress={progressPercentage} />
                </div>
                <div className="flex justify-between items-center text-gray-700 mb-4">
                    <h3 className="font-bold text-2xl text-[#30AFAA]">${beneficiary.raised.toLocaleString()} Raised</h3>
                    <p className="text-lg text-gray-600">${beneficiary.goal.toLocaleString()} Goal • {beneficiary.donations.toLocaleString()} Donations</p>
                </div>

                {/* Donate Button */}
                <div className="text-center">
                    <button
                        onClick={handleDonateClick} // Now sends to donate page with state
                        className="bg-[#54749D] text-white px-8 py-3 rounded-full hover:bg-[#435e7d] transform hover:scale-[1.02] transition duration-300 ease-in-out"
                    >
                        Donate Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BeneficiaryCard;