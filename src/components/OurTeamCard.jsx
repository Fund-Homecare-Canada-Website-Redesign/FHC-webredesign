// src/components/OurTeamCard.js
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const OurTeamCard = ({ image, name, role, bio }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Responsive Card - Now more flexible across screen sizes */}
            <div
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer overflow-hidden
                flex flex-col w-full mx-2 my-4" // Removed minHeight to allow content to dictate height, flex-col ensures stack
                onClick={() => setShowModal(true)}
            >
                {/* Image Section - Increased size, focus on object-center for general portraits */}
                <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                        src={image || "/placeholder.svg"}
                        alt={`${name} Profile`}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                    />
                </div>

                {/* Name/Role Section - Clear and distinct, with proper padding */}
                <div className="p-4 md:p-5 flex-shrink-0 flex flex-col justify-center items-center text-center"> {/* Added flex-shrink-0 to ensure it doesn't compress */}
                    <h5 className="mb-1 font-bold text-xl sm:text-2xl lg:text-3xl text-gray-900 leading-tight" style={{ fontFamily: 'Montserrat' }}>
                        {name}
                    </h5>
                    <p className="text-gray-600 italic text-base sm:text-lg lg:text-xl leading-tight" style={{ fontFamily: 'Montserrat' }}>
                        {role}
                    </p>
                </div>
            </div>

            {/* Enhanced Modal */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                size="xl"
                dialogClassName="my-modal" // For custom styling if needed
            >
                <div style={{ backgroundColor: '#CFE6EF' }} className="rounded-lg shadow-lg">
                    <Modal.Header closeButton className="border-0"></Modal.Header>
                    <Modal.Body className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8 rounded-lg">
                        {/* Left Side Image */}
                        <div className="flex items-center justify-center">
                            <img
                                src={image}
                                alt={`${name} About Us`}
                                className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col max-h-[70vh] overflow-y-auto p-2 md:p-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4" style={{ fontFamily: 'Montserrat' }}>
                                {name}
                            </h2>
                            <p className="text-gray-600 italic text-lg sm:text-xl md:text-2xl mb-3 md:mb-6" style={{ fontFamily: 'Montserrat' }}>
                                {role}
                            </p>
                            <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Montserrat' }}>
                                {bio}
                            </p>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
};

export default OurTeamCard;


