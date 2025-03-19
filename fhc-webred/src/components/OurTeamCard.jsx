import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import colours from "../assets/styles/BrandColours";
import 'bootstrap/dist/css/bootstrap.min.css'

function OurTeamCard ({name, role, image, bio}) {
    // modal state
    const [showModal, setShowModal] = useState(false);

    return(
        <>
        <div 
        className="w-full sm:w-96 md:w-80 lg:w-72 h-64 sm:h-80 md:h-96 lg:h-48 card bg-white rounded-lg shadow-lg hover:shadow-2xl
                transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer overflow-hidden"
        onClick={() => setShowModal(true)} // Opens modal on click
        >
            {/* image section*/}
            <div className='w-full h-2/3 flex justify-center'>
            <img
                src={image}
                alt={name + " About Us"}
                
                className= 'w-full h-full object-cover'
            />
            </div>

            {/* Card Content */}
            <div className="p-3 h-1/3 flex flex-col items-left leading-tight">

                <h5 className="mb-0 font-bold text-lg text-gray-900" style={{fontFamily: 'Montserrat'}} >
                    {name}
                </h5>

                <p className="mt-0 mb-0 text-gray-600 italic" style={{fontFamily: 'Montserrat'}}>
                {role}
                </p>
        </div>
    </div>

        {/* Bootstrap Modal that opens on click and closes when close button is clicked*/}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <div style={{backgroundColor: '#CFE6EF'}} className='rounded-lg shadow-lg'>
            <Modal.Header closeButton> </Modal.Header>
            <Modal.Body className = 'rounded-lg grid grid-cols-2'> 
            {/* Image Section (Left Side) */}
            <div className="flex items-center justify-center">
                <img
                    src={image}
                    alt={name + " About Us"}
                    className="w-60 h-auto object-cover rounded-lg"
                />
            </div>

            {/* Text Section (Right Side) */}
            <div className="flex-1 max-h-96 overflow-y-auto p-2">
                <h2 style={{fontFamily: 'Montserrat'}}className="text-4xl font-bold text-gray-900">{name}</h2>
                <p style={{fontFamily: 'Montserrat'}} className="text-gray-600 italic text-lg mb-3">{role}</p>
                <p style={{fontFamily: 'Montserrat'}} className="text-gray-800 text-sm leading-relaxed">
                {bio}
                </p>
            </div>
            </Modal.Body>
        </div>
        </Modal>
    </>

    )

} 

export default OurTeamCard;
