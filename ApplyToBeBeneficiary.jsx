import React, {useState} from "react";
import colours from "../assets/styles/BrandColours";
import { Form, Row, Col, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';

const ApplyToBeBeneficiary = () => {
    const [formData, setFormData] = useState ({
        contactPref: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        requestDetails: '',
        consent: false,
    });
    
    const [errors, setErrors] = useState ({
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
        
        setErrors (prevErrors => ({
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
        
        setErrors (newErrors);
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
    <div className="h-full font-[Montserrat]">
      <div className="bg-[url('assets/images/Beneficiary/beneficiary.png')] bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center">
        <div className="w-1/2 h-25 bg-[#D9D9D9]/80 flex flex-column justify-center items-center rounded-5">
          <h1 className="text-white text-center font-bold m-0">Apply to be a Beneficiary</h1>
        </div>
      </div>
      <div>
        <div className={`beneficiary-card mt-5 font-[Montserrat] w-5/6 mx-auto bg-[#3A92A0]/30 rounded-lg shadow-[10px_10px_0_rgba(0,0,0,0.25)] p-4 flex flex-column gap-4`}>
          <div className="beneficiary-info flex flex-col lg:flex-row p-4 justify-center items-start gap-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formContactPref">
                  <Form.Label>How would you like us to contact you?</Form.Label>
                  <Form.Check type="radio" name="contactPref" label="Email" value="email" checked={formData.contactPref === 'email'} onChange={handleChange}/>
                  <Form.Check type="radio" name="contactPref" label="Phone" value="phone" checked={formData.contactPref === 'phone'} onChange={handleChange}/>
                    {errors.contactPref && <p className="text-red-500 text-sm">{errors.contactPref}</p>}
                </Form.Group>
                  <br></br>
                <Row>
                  <Col>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange}/>
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                      </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange}/>
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </Form.Group>
                  </Col>
                </Row>
                  <br></br>
                <Row>
                  <Form.Group controlId="formEmailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="someone@website.com" name="emailAddress" value={formData.emailAddress} onChange={handleChange}/>
                      {errors.emailAddress && <p className="text-red-500 text-sm">{errors.emailAddress}</p>}
                  </Form.Group>
                </Row>
                  <br></br>
                <Row>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="(123) 456-7890" name="phoneNumber" value={formData.phoneNumber} onChange={handlePhoneChange}/>
                      {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                  </Form.Group>
                </Row>
                  <br></br>
                <Row>
                  <Form.Group controlId="formRequestDetails">
                    <Form.Label>Please provide us with some more details around your request for contact</Form.Label>
                    <Form.Control as="textarea" name="requestDetails" value={formData.requestDetails} onChange={handleChange}/>
                      {errors.requestDetails && <p className="text-red-500 text-sm">{errors.requestDetails}</p>}
                  </Form.Group>
                </Row>
                  <br></br>
                <Form.Group controlId="formConsent">
                  <Form.Check type="radio" name="consent" label="I consent to be contacted by Fund Homecare Canada by phone or email and agree to the Privacy Policy so as to let them collect my name, contact information, and comments."
                    checked={formData.consent}
                    onChange={handleChange}
                      />
                    {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
                </Form.Group>
                  <br></br>
                <div className="text-center">
                    <Button variant="primary" type="submit" className="bg-[#30AFAA]">Submit Application</Button>
                  </div>
              </Form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ApplyToBeBeneficiary;