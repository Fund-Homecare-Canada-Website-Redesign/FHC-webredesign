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
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    requestDetails: '',
    consent: false,
  });

  const [errors, setErrors] = useState({
    contactPref: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    requestDetails: '',
    consent: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: typeof errors = {
      contactPref: '',
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      requestDetails: '',
      consent: '',
    };
    if (!formData.contactPref) {
      newErrors.contactPref = 'Please select a contact preference.';
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
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Invalid email address.';
      isValid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required.';
      isValid = false;
    }
    else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Phone number must be 10 digits long.';
      isValid = false;
    }

    if (!formData.requestDetails) {
      newErrors.requestDetails = 'Please provide details about your request.';
      isValid = false;
    }

    if (!formData.consent) {
      newErrors.consent = 'You must be consented to be contacted.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    const digits = rawValue.slice(0, 10);

    let formatted = digits;
    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }
    else if (digits.length > 0) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.send(
        'service_fs5lb2u', // service ID
        'template_4rou2e5', // template ID
        {
          contactPref: formData.contactPref,
          firstName: formData.firstName,
          lastName: formData.lastName,
          emailAddress: formData.emailAddress,
          phoneNumber: formData.phoneNumber,
          requestDetails: formData.requestDetails,
          consent: formData.consent ? 'Yes' : 'No',
        },
        'x5HHixuKGMchzcE3l' // public key
      ).then(
        (result) => {
          console.log(result.text);
          setFormData({
            contactPref: '',
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            requestDetails: '',
            consent: false,
          });
        },
        (error) => {
          alert('An error occurred while submitting the form.');
          console.log(error.text);
        }
      );
    }
  };
  return (
    <>
        {/* New Hero Header Section for Apply to be a Beneficiary */}
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
                        {/* Title for Apply to be a Beneficiary Page */}
                        <div>
                            <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                                Apply for Support
                            </h1>
                        </div>
                        <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
                            Complete Our Application Form
                        </p>

                        {/* No button here, as the page is the form itself */}
                    </div>
                </div>
            </div>
        </section>

        {/* The rest of your application form content */}
        <div className="pt-10 pb-10 bg-[#CFE6EF]"> {/* Added bg-color for consistency and padding */}
          <div className={`beneficiary-card mt-5 font-[Montserrat] w-5/6 mx-auto bg-white rounded-lg p-4 flex flex-column gap-4 shadow-xl`}>
             {/* Replaced bg-[#3A92A0]/30 with bg-white for a cleaner look consistent with other forms */}
             {/* Removed the `beneficiary-info` div as it seems redundant here or could be styled differently if needed */}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formContactPref">
                <Form.Label className="d-flex justify-content-start text-gray-700">How would you like us to contact you?</Form.Label>
                <Form.Check type="radio" name="contactPref" label="Email" value="email" checked={formData.contactPref === 'email'} onChange={handleChange} />
                <Form.Check type="radio" name="contactPref" label="Phone" value="phone" checked={formData.contactPref === 'phone'} onChange={handleChange} />
                {errors.contactPref && <p className="text-red-500 text-sm d-flex justify-content-start">{errors.contactPref}</p>}
              </Form.Group>
              <br></br>
              <Row className="mb-3"> {/* Added mb-3 for spacing */}
                <Col md> {/* Use md for responsive column sizing */}
                  <Form.Group controlId="formFirstName">
                    <Form.Label className="d-flex justify-content-start text-gray-700">First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        isInvalid={!!errors.firstName} // Apply validation styling
                        className="border border-gray-300 focus:border-[#54749D] focus:ring-[#547499D] rounded-md"
                    />
                    <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.firstName}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md>
                  <Form.Group controlId="formLastName">
                    <Form.Label className="d-flex justify-content-start text-gray-700">Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                        className="border border-gray-300 focus:border-[#54749D] focus:ring-[#547499D] rounded-md"
                    />
                    <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.lastName}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md>
                  <Form.Group controlId="formEmailAddress">
                    <Form.Label className="d-flex justify-content-start text-gray-700">Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="someone@website.com"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        isInvalid={!!errors.emailAddress}
                        className="border border-gray-300 focus:border-[#54749D] focus:ring-[#547499D] rounded-md"
                    />
                    <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.emailAddress}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label className="d-flex justify-content-start text-gray-700">Phone Number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="(123) 456-7890"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handlePhoneChange}
                        isInvalid={!!errors.phoneNumber}
                        className="border border-gray-300 focus:border-[#54749D] focus:ring-[#547499D] rounded-md"
                    />
                    <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.phoneNumber}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formRequestDetails" className="mb-3">
                <Form.Label className="d-flex justify-content-start text-gray-700">Please provide us with some more details around your request for contact</Form.Label>
                <Form.Control
                    as="textarea"
                    name="requestDetails"
                    value={formData.requestDetails}
                    onChange={handleChange}
                    isInvalid={!!errors.requestDetails}
                    className="border border-gray-300 focus:border-[#54749D] focus:ring-[#547499D] rounded-md"
                    rows={5} // Added rows for better textarea appearance
                />
                <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.requestDetails}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formConsent" className="mb-4"> {/* Added mb-4 */}
                <Form.Check
                    type="checkbox" // Changed to checkbox as it's typically a single consent
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
                    className="bg-[#30AFAA] hover:bg-[#258C8C] text-white px-8 py-3 rounded-md transition-all duration-300 ease-in-out" // Added more styling
                >
                    Submit Application
                </Button>
              </div>
            </Form>
          </div>
        </div>
    </>
  );
};

export default ApplyToBeBeneficiary;