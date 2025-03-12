import React from "react";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import colours from "../assets/styles/BrandColours";
import 'bootstrap/dist/css/bootstrap.min.css'

function OurTeamCard () {
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
                src={require('../assets/images/AboutUs/WhoAreWe/Rohit.jpg')}
                alt="Rohit About Us"
                
                className= 'w-full h-full object-cover'
            />
            {/* w-full means that the width will fill 100% of its parent container*/}
            </div>

            {/* Card Content */}
            <div className="p-3 h-1/3 flex flex-col items-left leading-tight">

                <h5 className="mb-0 font-bold text-lg text-gray-900" style={{fontFamily: 'Montserrat'}} >
                    Rohit Bhalla
                </h5>

                <p className="mt-0 mb-0 text-gray-600 italic" style={{fontFamily: 'Montserrat'}}>
                Co-founder
                </p>
        </div>
    </div>

        {/* Bootstrap Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
        <Modal.Title>Rohit Bhalla</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
        {/* Image in Modal */}
        <img
            src={require("../assets/images/AboutUs/WhoAreWe/Rohit.jpg")}
            alt="Rohit About Us"
            className="w-full h-64 object-cover rounded-lg"
        />
        <p className="mt-4 text-gray-700">Co-founder and a key leader in our team.</p>
        </Modal.Body>
    </Modal>
    </>

    )
}

export default OurTeamCard;
