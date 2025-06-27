import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
  // State variable to control whether the Offcanvas (mobile menu) is visible
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  // Function to close the Offcanvas menu (e.g., when a link is clicked)
  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  // Function to toggle the Offcanvas menu open/closed (e.g., when the hamburger icon is clicked)
  const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <>
      <style>
        {`
        .nav-link:hover::before {
        background-color: #30AFAA; /* Custom teal color */
        }
        
        /* Make offcanvas narrower */
        .offcanvas {
          width: 280px !important;
        }
        
        /* Remove border from hamburger menu button */
        .navbar-toggler {
          border: none !important;
        }
        
        .navbar-toggler:focus {
          box-shadow: none !important;
        }
        
        /* Mobile-specific styling */
        @media (max-width: 991.98px) {
          .offcanvas .nav-link {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          /* Hide desktop hover effect on mobile */
          .offcanvas .nav-link::before {
            display: none !important;
          }
          
          /* Mobile hover effect - apply to text span */
          .offcanvas .mobile-nav-text {
            display: inline-block;
            position: relative;
            font-family: 'Montserrat';
            font-weight: 600;
            color: black;
            padding-bottom: 4px;
          }
          
          .offcanvas .mobile-nav-text::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #30AFAA;
            transition: width 0.3s ease;
          }
          
          .offcanvas .nav-link:hover .mobile-nav-text::after {
            width: 100%;
          }
        }
      `}
      </style>
      <Navbar bg="light" expand="lg" className="shadow-sm py-2">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={require('../assets/images/Logos/FHC_Title_Logo_NoBgrd.png')}
              alt="Fund Homecare Canada"
              style={{ height: '40px' }}
            />
          </Navbar.Brand>

          {/* Hamburger Toggle - controlled by state */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggleOffcanvas} />

          {/* Offcanvas for mobile, regular nav for desktop */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={showOffcanvas}
            onHide={handleCloseOffcanvas} // Hides when clicking outside or close button
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
                <img
                  src={require('../assets/images/Logos/FHC_Title_Logo_NoBgrd.png')}
                  alt="Fund Homecare Canada"
                  style={{ height: '30px' }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="px-lg-3 px-4">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/" onClick={handleCloseOffcanvas}
                  style={{ fontFamily: 'Montserrat' }}
                  className="nav-link font-semibold text-black hover:text-blue-600 mr-5 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">
                  <span className="d-lg-none mobile-nav-text">Home</span>
                  <span className="d-none d-lg-inline">Home</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/about-us" onClick={handleCloseOffcanvas}
                  style={{ fontFamily: 'Montserrat' }} className="nav-link font-semibold text-black hover:text-blue-600 mr-5 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">
                  <span className="d-lg-none mobile-nav-text">About Us</span>
                  <span className="d-none d-lg-inline">About Us</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/events" onClick={handleCloseOffcanvas} 
                  style={{ fontFamily: 'Montserrat' }} className="nav-link font-semibold text-black hover:text-blue-600 mr-5 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">
                  <span className="d-lg-none mobile-nav-text">Events</span>
                  <span className="d-none d-lg-inline">Events</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/beneficiaries" onClick={handleCloseOffcanvas}
                  style={{ fontFamily: 'Montserrat' }} className="nav-link font-semibold text-black hover:text-blue-600 mr-5 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">
                  <span className="d-lg-none mobile-nav-text">Beneficiaries</span>
                  <span className="d-none d-lg-inline">Beneficiaries</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/contact-us" onClick={handleCloseOffcanvas}
                  style={{ fontFamily: 'Montserrat' }} className="nav-link font-semibold text-black hover:text-blue-600 mr-5 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">
                  <span className="d-lg-none mobile-nav-text">FAQs/Contact Us</span>
                  <span className="d-none d-lg-inline">FAQs/Contact Us</span>
                </Nav.Link>
              </Nav>

              <div className="mt-lg-0 mt-4">
                <Link to="/donate" onClick={handleCloseOffcanvas}>
                  <Button style={{ fontFamily: 'Montserrat', backgroundColor: '#30AFAA', color: '#000000', border: '#30AFAA' }} className="font-bold py-2 px-2.5 rounded-md ml-lg-3 ml-0 shadow-md transition hover:!bg-[#2A9B96]">
                    Donate to Us
                  </Button>
                </Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;