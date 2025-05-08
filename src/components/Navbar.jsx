import React from "react";
import colours from "../assets/styles/BrandColours";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavbarComponent() {
  const navbarStyle = {
    fontFamily: 'Montserrat'
  };

  return (
    <>
    {/* custom css for hover bars to be teal */}
    <style>
      {`
        .nav-link:hover::before {
        background-color: #30AFAA; /* Custom teal color */
        }
      `}
    </style>
    <Navbar bg="light" expand="lg" className="shadow-sm py-2">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={require('../assets/images/Logos/FHC_Title_Logo.jpg')}
            alt="Fund Homecare Canada"
            style={{ height: '40px' }}
          />
        </Navbar.Brand>
          {/* nav is react-bootstrap component for a section containing navigation links */}
          <Nav className="ml-auto"> {/* me = margin end, auto pushes all items following this component to the right, creates visual seperation */}
            <Nav.Link as={Link} to="/" 
            style={{fontFamily: 'Montserrat'}} 
            className="nav-link font-semibold text-black hover:text-blue-600 mr-5 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">
            Home
            </Nav.Link>
            
            <Nav.Link as={Link} to="/about-us" style={{ fontFamily: 'Montserrat' }} className="nav-link font-semibold text-black hover:text-blue-600 mr-5 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">About Us</Nav.Link>
            <Nav.Link as={Link} to="/events"  style={{ fontFamily: 'Montserrat' }}className="nav-link font-semibold text-black hover:text-blue-600 mr-5 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">Events</Nav.Link>
            <Nav.Link as={Link} to="/beneficiaries" style={{ fontFamily: 'Montserrat' }} className="nav-link font-semibold text-black hover:text-blue-600 mr-5 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">Beneficiaries</Nav.Link>
            <Nav.Link as={Link} to="/contact-us"  style={{ fontFamily: 'Montserrat' }} className="nav-link font-semibold text-black hover:text-blue-600 mr-5 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">Contact Us</Nav.Link>
          </Nav>
          <Link to="/donate">
            <Button style={{ fontFamily: 'Montserrat', backgroundColor: '#30AFAA', color: '#000000', border: '#30AFAA' }} className="font-bold py-2 px-2.5 rounded-md ml-3">
              Donate to Us
            </Button>
          </Link>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarComponent;
