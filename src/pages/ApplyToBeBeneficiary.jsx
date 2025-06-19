import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';

import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';

const ApplyToBeBeneficiary = () => {
  useEffect(() => {
    document.title = "Apply to be a Beneficiary";
  }, []);

  const [formData, setFormData] = useState({
    contactPref: '',
    requestType: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    callTimeMorning: false,
    callTimeAfternoon: false,
    callTimeEvening: false,
    requestDetails: '',
    consent: false,
  });

  const [errors, setErrors] = useState({
    contactPref: '',
    requestType: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    callTime: '', 
    requestDetails: '',
    consent: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for the specific field on change
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
      // If changing contactPref, clear callTime error if it was set
      ...(name === 'contactPref' && prevErrors.callTime ? { callTime: '' } : {}),
    }));
  };

  const handlePhoneChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    const digits = rawValue.slice(0, 10);

    let formatted = '';
    if (digits.length > 6) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
        formatted = `(${digits}`;
    }

    setFormData(prevData => ({
      ...prevData,
      phoneNumber: formatted,
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      phoneNumber: '',
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      contactPref: '',
      requestType: '',
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      callTime: '',
      requestDetails: '',
      consent: '',
    };
    
    if (!formData.contactPref) {
      newErrors.contactPref = 'Please select a contact preference.';
      isValid = false;
    }

    if (!formData.requestType) {
        newErrors.requestType = 'Please select the nature of your request.';
        isValid = false;
    }

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required.';
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required.';
      isValid = false;
    }

    if (!formData.emailAddress) {
      newErrors.emailAddress = 'Email address is required.';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Invalid email address.';
      isValid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required.';
      isValid = false;
    } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits long (e.g., (123) 456-7890).';
      isValid = false;
    }

    // Validate call time if phone is selected
    if (formData.contactPref === 'phone') {
        if (!formData.callTimeMorning && !formData.callTimeAfternoon && !formData.callTimeEvening) {
            newErrors.callTime = 'Please select at least one preferred time to call.';
            isValid = false;
        }
    }

    if (!formData.requestDetails) {
      newErrors.requestDetails = 'Please provide details about your request.';
      isValid = false;
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to be contacted.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Construct callTimePreferences string for email
      const callTimes = [];
      if (formData.callTimeMorning) callTimes.push('Morning');
      if (formData.callTimeAfternoon) callTimes.push('Afternoon');
      if (formData.callTimeEvening) callTimes.push('Evening');
      const callTimePreferences = callTimes.length > 0 ? callTimes.join(', ') : 'N/A';


      emailjs.send(
        'service_bfru9uv', // service ID
        'template_kas52fc', // template ID
        {
          contactPref: formData.contactPref,
          requestType: formData.requestType,
          firstName: formData.firstName,
          lastName: formData.lastName,
          emailAddress: formData.emailAddress,
          phoneNumber: formData.phoneNumber,
          callTimePreferences: callTimePreferences, // Send formatted string
          requestDetails: formData.requestDetails,
          consent: formData.consent ? 'Yes' : 'No',
        },
        'DXCnR6_5cvP6qeR0n' // public key
      ).then(
        (result) => {
          console.log(result.text);
          alert('Thank you for your application! We will review it and get back to you soon.');
          setFormData({
            contactPref: '',
            requestType: '',
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            callTimeMorning: false, // Reset new fields
            callTimeAfternoon: false,
            callTimeEvening: false,
            requestDetails: '',
            consent: false,
          });
          setErrors({
            contactPref: '',
            requestType: '',
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            callTime: '', // Reset error field
            requestDetails: '',
            consent: '',
          });
        },
        (error) => {
          alert('An error occurred while submitting the form. Please try again.');
          console.error('EmailJS error:', error);
        }
      );
    } else {
        console.log('Form validation failed.');
    }
  };

  return (
    <>
      <section>
          <div
              className="w-full h-[66.7vh] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${image_section_1})` }}
          >
              <div
                  className="absolute inset-0 bg-[#307694] opacity-90 mix-blend-overlay"
              ></div>
              <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                  <div className="md:pl-4 flex flex-col items-center md:items-start space-y-2">
                      <div>
                          <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                              Beneficiary Application
                          </h1>
                      </div>
                      <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
                          Complete Our Application Form
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <div className="pt-10 pb-10 bg-[#CFE6EF]">
        <div className={`beneficiary-card mt-5 font-[Montserrat] w-5/6 mx-auto bg-white rounded-lg p-4 flex flex-column gap-4 shadow-xl`}>
          <Form onSubmit={handleSubmit}>
            {/* Contact Preference */}
            <Form.Group controlId="formContactPref" className="mb-4" isInvalid={!!errors.contactPref}> {/* MOVED isInvalid HERE */}
              <Form.Label className="d-flex justify-content-start text-gray-700 font-semibold text-lg">How would you like us to contact you? <span className="text-red-500"> *</span></Form.Label>
              <div className="d-flex flex-column gap-2">
                <Form.Check
                    type="radio"
                    name="contactPref"
                    label="Email"
                    value="email"
                    checked={formData.contactPref === 'email'}
                    onChange={handleChange}
                    // REMOVED isInvalid from individual Form.Check
                    className="custom-radio-button"
                />
                <Form.Check
                    type="radio"
                    name="contactPref"
                    label="Phone"
                    value="phone"
                    checked={formData.contactPref === 'phone'}
                    onChange={handleChange}
                    // REMOVED isInvalid from individual Form.Check
                    className="custom-radio-button"
                />
              </div>
              <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.contactPref}</Form.Control.Feedback>
            </Form.Group>

            {/* NEW FIELD: Nature of Request */}
            <Form.Group controlId="formRequestType" className="mb-4" isInvalid={!!errors.requestType}> {/* MOVED isInvalid HERE */}
                <Form.Label className="d-flex justify-content-start text-gray-700 font-semibold text-lg">Please let us know the nature of your request <span className="text-red-500"> *</span></Form.Label>
                <div className="d-flex flex-column gap-2">
                    <Form.Check
                        type="radio"
                        name="requestType"
                        label="Apply to receive funding"
                        value="funding"
                        checked={formData.requestType === 'funding'}
                        onChange={handleChange}
                        // REMOVED isInvalid from individual Form.Check
                        className="custom-radio-button"
                    />
                </div>
                <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.requestType}</Form.Control.Feedback>
            </Form.Group>
            {/* Conditional "Time of Day" Field */}
            {formData.contactPref === 'phone' && (
                <Form.Group controlId="formCallTime" className="mb-4" isInvalid={!!errors.callTime}>
                    <Form.Label className="d-flex justify-content-start text-gray-700 font-semibold text-lg">What time of day is best to call you? (Check all that apply) <span className="text-red-500"> *</span></Form.Label>
                    <div className="d-flex flex-column gap-2">
                        <Form.Check
                            type="checkbox"
                            name="callTimeMorning"
                            label="Morning"
                            checked={formData.callTimeMorning}
                            onChange={handleChange}
                            // No custom-radio-button class here, as it's a checkbox
                        />
                        <Form.Check
                            type="checkbox"
                            name="callTimeAfternoon"
                            label="Afternoon"
                            checked={formData.callTimeAfternoon}
                            onChange={handleChange}
                        />
                        <Form.Check
                            type="checkbox"
                            name="callTimeEvening"
                            label="Evening"
                            checked={formData.callTimeEvening}
                            onChange={handleChange}
                        />
                    </div>
                    <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.callTime}</Form.Control.Feedback>
                </Form.Group>
            )}

            {/* Personal Information (First Name, Last Name, Email, Phone) */}
            <Row className="mb-3">
              <Col md>
                <Form.Group controlId="formFirstName">
                  <Form.Label className="d-flex justify-content-start text-gray-700">First Name <span className="text-red-500"> *</span></Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                      className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
                  />
                  <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formLastName">
                  <Form.Label className="d-flex justify-content-start text-gray-700">Last Name <span className="text-red-500"> *</span></Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                      className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
                  />
                  <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.lastName}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md>
                <Form.Group controlId="formEmailAddress">
                  <Form.Label className="d-flex justify-content-start text-gray-700">Email Address <span className="text-red-500"> *</span></Form.Label>
                  <Form.Control
                      type="email"
                      placeholder="someone@website.com"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      isInvalid={!!errors.emailAddress}
                      className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
                  />
                  <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.emailAddress}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Label className="d-flex justify-content-start text-gray-700">Phone</Form.Label>
                  <Form.Control
                      type="tel"
                      placeholder="(123) 456-7890"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handlePhoneChange}
                      isInvalid={!!errors.phoneNumber}
                      className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
                  />
                  <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.phoneNumber}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formRequestDetails" className="mb-4">
              <Form.Label className="d-flex justify-content-start text-gray-700">Please provide us with some more details around your request for contact</Form.Label>
              <Form.Control
                  as="textarea"
                  name="requestDetails"
                  value={formData.requestDetails}
                  onChange={handleChange}
                  isInvalid={!!errors.requestDetails}
                  className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
                  rows={5}
              />
              <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.requestDetails}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formConsent" className="mb-4">
              <Form.Check
                  type="checkbox"
                  name="consent"
                  label="I consent to be contacted by Fund Homecare Canada by phone or email and agree to the Privacy Policy so as to let them collect my name, contact information, and comments."
                  checked={formData.consent}
                  onChange={handleChange}
                  isInvalid={!!errors.consent}
              />
              <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.consent}</Form.Control.Feedback>
            </Form.Group>

            <div className="text-center">
              <Button
                  variant="primary"
                  type="submit"
                  className="bg-[#30AFAA] hover:bg-[#258C8C] text-white px-8 py-3 rounded-md transition-all duration-300 ease-in-out"
              >
                  Submit Application
              </Button>
            </div>
          </Form>
        </div>
      </div>
      {/* Custom CSS for Radio Buttons */}
      <style jsx>{`
          /* Visually hide default radio input, but keep it accessible and clickable */
          .custom-radio-button .form-check-input {
              position: absolute; /* Take it out of flow */
              opacity: 0;         /* Make it completely transparent */
              width: 24px;        /* Give it a clickable area (same as ::before) */
              height: 24px;       /* Give it a clickable area */
              margin: 0;          /* Remove default margins */
              padding: 0;         /* Remove default padding */
              z-index: 1;         /* Ensure it's above the pseudo-element for clicks */
              cursor: pointer;    /* Show pointer cursor on the hidden input */
          }

          /* Style the custom radio indicator */
          .custom-radio-button .form-check-label::before {
              content: '';
              display: inline-block;
              width: 24px;
              height: 24px;
              border: 2px solid #54749D; /* Border color for unselected */
              border-radius: 50%; /* Make it round */
              margin-right: 8px;
              vertical-align: middle;
              transition: all 0.2s ease-in-out;
              /* Add position: relative to the label for z-indexing to work properly with absolute input */
              position: relative; 
          }

          /* Style the custom radio indicator when checked */
          .custom-radio-button .form-check-input:checked + .form-check-label::before {
              background-color: #30AFAA; /* Filled color when selected */
              border-color: #30AFAA; /* Border color when selected */
              box-shadow: inset 0 0 0 6px white; /* Inner circle */
          }

          /* Style the label text */
          .custom-radio-button .form-check-label {
              cursor: pointer; /* Ensure cursor is pointer over the label */
              color: #4a5568; /* Darker text color */
              font-size: 1.125rem; /* text-lg */
              font-weight: 500; /* font-medium */
              display: flex; /* Use flex to align content */
              align-items: center; /* Vertically center content */
              /* Important: Add padding or min-height to make the entire label easily clickable */
              padding: 4px 0; /* Example padding */
          }

          /* Focus style for accessibility */
          .custom-radio-button .form-check-input:focus + .form-check-label::before {
              
              outline-offset: 2px;
             
          }
      `}</style>
    </>
  );
};

export default ApplyToBeBeneficiary;