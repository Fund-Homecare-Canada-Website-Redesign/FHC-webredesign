import React from "react";
import colours from "../assets/styles/BrandColours";
import { Form, Row, Col, Button } from "react-bootstrap";

const ApplyToBeBeneficiary = () => {
  return (
    <>
    <div className="h-full font-[Montserrat]">
      <div className="bg-[url('assets/images/Beneficiary/beneficiary.png')] bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center">
        <div className="w-1/2 h-25 bg-[#D9D9D9]/80 flex flex-column justify-center items-center rounded-5">
          <h1 className="text-white text-center font-bold m-0">Apply to be a Beneficiary</h1>
        </div>
      </div>
      <div>
        <div className={`beneficiary-card mt-5 font-[Montserrat] w-5/6 mx-auto bg-[#3A92A0]/30 rounded-lg shadow-[10px_10px_0_rgba(0,0,0,0.25)] p-4 flex flex-column gap-4`}>
          <div className="beneficiary-info flex flex-col lg:flex-row p-4 justify-center items-start gap-4">
              <Form>
                <Form.Group controlId="formContactPref">
                  <Form.Label>How would you like us to contact you?</Form.Label>
                  <Form.Check type="radio" name="contactPref" label="Email"/>
                  <Form.Check type="radio" name="contactPref" label="Phone"/>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="First Name"></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name"></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group controlId="formEmailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="someone@website.com"></Form.Control>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="(123) 456-7890"></Form.Control>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Please provide us with some more details around your request for contact</Form.Label>
                    <Form.Control as="textarea"></Form.Control>
                  </Form.Group>
                </Row>
                <Form.Group controlId="formConsent">
                  <Form.Check type="radio" name="consent" label="I consent to be contacted by Fund Homecare Canada by phone or email and agree to the Privacy Policy so as to let them collect my name, contact information, and comments."/>
                </Form.Group>
                <Button variant="primary" type="submit" className="bg-[#30AFAA]">Submit Application</Button>
              </Form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ApplyToBeBeneficiary;