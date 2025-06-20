import React, { useState, useEffect, useRef } from 'react';
import { Accordion } from 'react-bootstrap';
import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';
import { Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom"

const ContactUsPage = () => {
    const [activeCategory, setActiveCategory] = useState('Donor FAQs'); 

    // Create a ref for the contact form section
    const contactFormRef = useRef(null);

    // Function to handle smooth scroll
    const handleScrollToContactForm = () => {
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({
                behavior: 'smooth', // This makes the scroll smooth
                block: 'start',      // Scrolls to the top of the element
            });
        }
    };

    // Form validation

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        requestDetails: '',
        consent: false,
    });

    // **Errors State (from ApplyToBeBeneficiary)**
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        requestDetails: '',
        consent: '',
    });

    // **useEffect for document title (from ApplyToBeBeneficiary - optional for this page)**
    useEffect(() => {
        document.title = "Contact Us"; // Or "Fund Homecare Canada - Contact"
    }, []);

    // **Updated handleChange (from ApplyToBeBeneficiary)**
    const handleChange = (e) => { // Removed React.ChangeEvent type for simplicity if not using TypeScript
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: '', // Clear error when input changes
        }));
    };

    // **Validation Logic (from ApplyToBeBeneficiary)**
    const validateForm = () => {
        let isValid = true;
        const newErrors = { // Removed typeof errors for simplicity if not using TypeScript
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            requestDetails: '',
            consent: '',
        };

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
        } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
            newErrors.phoneNumber = 'Phone number must be 10 digits long.';
            isValid = false;
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

    // **handlePhoneChange Logic (from ApplyToBeBeneficiary)**
    const handlePhoneChange = (e) => { // Removed React.ChangeEvent type for simplicity
        const rawValue = e.target.value.replace(/\D/g, '');
        const digits = rawValue.slice(0, 10);

        let formatted = digits;
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

    // **Updated handleSubmit (from ApplyToBeBeneficiary)**
    const handleSubmit = (e) => { // Removed React.FormEvent type for simplicity
        e.preventDefault();
        if (validateForm()) {
            emailjs.send(
                'service_bfru9uv', // service ID
                'template_rgp0v8r', // template ID
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    emailAddress: formData.emailAddress,
                    phoneNumber: formData.phoneNumber,
                    requestDetails: formData.requestDetails, // This maps to 'inquiry' field in your previous form
                    consent: formData.consent ? 'Yes' : 'No',
                },
                'DXCnR6_5cvP6qeR0n' // public key
            ).then(
                (result) => {
                    console.log(result.text);
                    alert('Thank you for your inquiry! We will get back to you soon.'); // Keep alert for user feedback
                    setFormData({ // Reset form data
                        firstName: '',
                        lastName: '',
                        emailAddress: '',
                        phoneNumber: '',
                        requestDetails: '',
                        consent: false,
                    });
                    setErrors({ // Also reset errors
                        firstName: '',
                        lastName: '',
                        emailAddress: '',
                        phoneNumber: '',
                        requestDetails: '',
                        consent: '',
                    });
                },
                (error) => {
                    alert('An error occurred while submitting the form. Please try again.');
                    console.error('EmailJS error:', error); // Use console.error for errors
                }
            );
        } else {
            console.log('Form validation failed.');
        }
    };

    // Categorized FAQ data
    const categorizedFaqs = {
        "Donor FAQs": [
            {
                question: "Can I donate through my organization?",
                answer: "Currently Fund Homecare Canada is funded entirely through corporate sponsors and donors. Fund Home Care is open to all kinds of funding support. To donate through your organization, click here to submit an inquiry and a representative from Fund Homecare will guide you through the process."
            },
            {
                question: "What benefits do I get as a Corporate Sponsor?",
                answer: "Fund Homecare Canada is a registered Canadian charity. Tax receipts will be provided for your donations per CRA guidelines. Other sponsor benefits may include promotion on our website and at events. To find out more, please submit a contact inquiry here and our team will be in touch."
            },
            {
                question: "What can your organization provide personal donors in exchange for their donation?",
                answer: "Fund HomeCare Canada is a Canadian Federally registered Charitable, Not for Profit organization.  Tax receipts will be provided as per CRA guidelines."
            },
            {
                question: "How can I donate?",
                answer: (
                    <>
                      To donate, go to our <Link to="/donate" className="text-[#307694] font-semibold underline hover:text-blue-800">Donation Page</Link> page.
                    </>
                  )
            },
            {
                question: "Which support services will my donation go towards?",
                answer: "Your donation will help beneficiaries to pay for Personal Support Worker (PSW) services that may include, but are not limited to, respite, overnight care, bathing, dressing, grooming, appointment accompaniment, and feeding. Other non-Personal Support Worker (PSW) services that can be considered under Fund Homecare Canada funding can include housekeeping and assistance with other day-to-day activities."
            },
            {
                question: "What is the minimum and maximum amount that I can donate?",
                answer: "Currently Fund Homecare Canada does not receive any government funding and is funded entirely through corporate sponsors and donors. Fund Homecare Canada is open to all kinds of funding support, and does not currently have any limits in place."
            },
            {
                question: "Can I direct my donation to a specific beneficiary?",
                answer: "Fund Homecare Canada's purpose is to provide funding for use on at-home palliative care for Cancer patients in Ontario. Our goal is to provide services to as many beneficiaries within that sector, as our resources allow. All funding raised will be put in a pool and used to assist as many beneficiaries as we can based on our Funding Needs Assessment."
            },
            {
                question: "Will I get a tax receipt?",
                answer: "Fund Homecare Canada is a registered Canadian charity. Tax receipts will be provided as per CRA guidelines."
            },
            {
                question: "How much of my money will actually go to a beneficiary?",
                answer: "Fund Homecare Canada is primarily run by volunteers. We strive to keep administrative and overhead costs low in order to allocate the maximum amount of the donations to our beneficiaries."
            },
            {
                question: "What geographical areas does your funding cover?",
                answer: "Currently, Fund Homecare Canada funding is directed to beneficiaries residing in Ontario."
            }
        ],
        "Beneficiary FAQs": [
            {
                question: "What are the minimum eligibility criteria for funding and how do I apply?",
                answer: "Fund Homecare Canada conducts a Funding Needs Assessment based on household income, household net worth and household expenses. To begin an application, please complete our Contact form here and a member of our team will be in touch."
            },
            {
                question: "How does Fund Homecare Canada determine eligibility for funding?",
                answer: (
                    <>
                        Eligibility criteria are outlined in our Funding Needs Assessment, which is based on household income,
                        household net worth, and household expenses. To begin your application, please complete our Contact form
                        {' '}
                        <a href="#contact-form" className="text-[#307694] font-semibold underline hover:text-blue-800">
                            here
                        </a>.
                    </>
                )
            },
            {
                question: "What is the minimum PPS (Palliative Performance Scale) score needed to apply for funding from FundHome Care?",
                answer: "Anyone with a PPS score of 60% or less is eligible to apply for Fund Homecare Canada funding."
            },
            {
                question: "What is PPS and where can I find the score?",
                answer: (
                    <>
                        The Palliative Performance Scale (PPS) can be used to inform decisions about a patient's hospice eligibility by helping clinicians recognize a patient's functional decline.
                        <br /><br />
                        The PPS score document can be found on page 4 of the document{' '}
                        <a href="https://victoriahospice.org/wp-content/uploads/2020/08/PPSv2-QA-Instructions-and-Definitions-updated-July-2020.pdf" target="_blank" rel="noopener noreferrer" className="text-[#307694] font-semibold underline hover:text-blue-800">
                            here
                        </a>.
                        <br /><br />
                        Copyright Victoria Hospice Society, BC, Canada{' '}
                        <a href="https://www.victoriahospice.org" target="_blank" rel="noopener noreferrer" className="text-[#307694] font-semibold underline hover:text-blue-800">
                            www.victoriahospice.org
                        </a>.
                    </>
                )
            },
            {
                question: "Does Fund Homecare Canada support the use of unlicensed child caregivers?",
                answer: "If you are approved for support, Fund Homecare Canada will only cover licensed childcare centres."
            },
            {
                question: "How long am I funded for?",
                answer: (
                    <>
                        Beneficiaries are funded for as long as they meet our eligibility criteria and resources are available. Funding will be reviewed every{' '}
                        <strong className="font-bold">three months</strong>.
                    </>
                )
            },
            {
                question: "Can I hire a family member as a Personal Support Worker (PSW)?",
                answer: "For Personal Support Worker (PSW) related services, Fund Homecare will only provide funding for services provided by certified Personal Support Workers (PSWs). Proper contractual and financial requirements (receipts) should be met, including but not limited to liability and insurance coverage."
            },
            {
                question: "Does your organization receive any government funding?",
                answer: "Currently, Fund Homecare Canada does not receive any government funding and is funded entirely through corporate sponsors and donors. Fund Homecare is open to all kinds of funding support."
            },
            {
                question: "If I currently receive government funding for homecare do I qualify for supplementary support from your organization?",
                answer: (
                    <>
                      You may qualify for supplementary support through Fund Homecare Canada even if you receive government funding, 
                      provided you are approved based on our Funding Needs Assessment. 
                      The Funding Needs Assessment considers factors including household income, 
                      household net worth, and household expenses.{" "}
                      To begin an application, please submit an inquiry through our Contact form{" "}
                      <a href="#contact-form" className="text-[#307694] font-semibold underline hover:text-blue-800">
                        here
                      </a>
                      .
                    </>
                  )
            },
            {
                question: "How long does the application process and review take?",
                answer: "Once the initial intake form is submitted, Fund Homecare Canada will contact you within 48-72 hours. From the time the completed Funding Needs Assessment form is received along with the supporting documents, the processing time is estimated at 3-4 weeks. Processing time will depend on services requested and resource availability."
            }
        ],
        "Personal Support Worker (PSW) FAQs": [
            {
                question: "What experience and qualifications do Personal Support Workers (PSWs) have to qualify for coverage under Fund Homecare Canada funding?",
                answer: "For any Personal Support Worker (PSW) related services, Fund Homecare Canada will only provide funding for services provided by certified PSWs. A certified Personal Support Worker (PSW) is one who has obtained a diploma that is accredited by the Ministry of Training, Colleges and Universities of Ontario, and is covered for Insurance individually or via the agency they work for. Fund Homecare Canada works closely with organizations that provide certified Personal Support Worker (PSW)s."
            },
            {
                question: "Will the same Personal Support Worker (PSW) be attending/caring for me or my loved one at each visit?",
                answer: "The beneficiary will select the Personal Support Worker (PSW) organization and will determine the details of each visit as part of their terms of agreement."
            },
            {
                question: "How long will Fund Homecare Canada pay for Personal Support Worker (PSW) and other services?",
                answer: "Fund Homecare Canada is funded through sponsorship and donations, and the support we are able to give is dependent on resources being available. Funding will be reviewed every quarter."
            },
            {
                question: "What activities/tasks can the Personal Support Worker (PSW) assist with?",
                answer: "Personal Support Worker (PSW) services can include, but are not limited to, respite, overnight care, bathing, dressing, grooming, appointment accompaniment, and feeding. Other non-Personal Support Worker (PSW) services that can be considered under Fund Homecare Canada funding can include housekeeping and assistance with other day-to-day activities."
            }
        ],
        "Volunteers and Service Provision FAQs": [
            {
                question: "How do I volunteer? What volunteer opportunities does Fund Homecare Canada have to offer?",
                answer: (
                    <>
                        To volunteer, submit an inquiry through our Contact form{' '}
                        <a href="#contact-form" className="text-[#307694] font-semibold underline hover:text-blue-800">
                            here
                        </a>{' '}
                        and express that you are interested in volunteer opportunities. A Fund Homecare Canada representative will be in contact with you to discuss available opportunities.
                        <br /><br />
                        Fund Homecare Canada is completely funded by sponsorship and volunteers are required to support marketing, sponsorship fundraising and event management. If you have a specific skill that you feel may contribute towards the cause, we would love to hear from you.
                    </>
                )
            },
            {
                question: "How many hours can a volunteer work?",
                answer: "How many hours are in a day! Fund Homecare Canada touches the lives of many people and is a growing organization. We are happy to support the growth and development of our volunteers, however much they want to work."
            },
            {
                question: "How can I register to provide services to your beneficiaries? (e.g. I am an independent caterer and can prepare meals for your clients.)",
                answer: "Fund Homecare provides support to enable clients to procure the services they require. We do not provide any services directly to our client base, but as a sponsor your details can be profiled on our website."
            }
        ]
    };

    return (
        <div>
            {/* Header Section - Contact Us */}
            <section>
                <div
                    className="w-full h-[66.7vh] bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${image_section_1})` }}
                >
                    {/* Blue overlay with transparency */}
                    {/* <div
                        className="absolute inset-0 bg-[#54749D] opacity-90 mix-blend-overlay"
                    ></div> */}
                    {/* Blue overlay with transparency */}
                    <div
                        className="absolute inset-0 bg-[#307694] opacity-90 mix-blend-overlay"
                    ></div>

                    {/* Content container with max w-7xl that match navbar/footer */}
                    <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                        <div className="md:pl-4 flex flex-col items-center md:items-start space-y-2">
                            {/* "Contact Us" */}
                            <div>
                                <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                                    FAQs/Contact Us
                                </h1>
                            </div>
                            <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4"> {/* Added mb-4 for spacing */}
                                Get in Touch
                            </p>

                            {/* New "Contact Us" Button */}
                            <button
                                onClick={handleScrollToContactForm} // This is where handleScrollToContactForm is used
                                className="font-roboto font-medium text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17.78px] leading-none tracking-[0.44%] border-2 sm:border-3 border-white rounded-[10px] bg-transparent w-[140px] h-[40px] sm:w-[145px] sm:h-[42px] md:w-[155px] md:h-[46px] lg:w-[163px] lg:h-[50px] flex items-center justify-center cursor-pointer p-0 relative z-20 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:bg-opacity-10 active:scale-95 group"
                            >
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    Contact Us →
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="font-roboto font-bold text-[32px] sm:text-[38px] leading-tight text-gray-800">
                            Frequently Asked Questions
                        </h2>
                        <div className="h-1 bg-gray-300 w-1/4 mx-auto mt-4"></div>
                    </div>

                    {/* FAQ Category Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {Object.keys(categorizedFaqs).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`
                                    px-6 py-3 rounded-full font-roboto font-medium text-lg
                                    transition duration-300 ease-in-out transform
                                    ${activeCategory === category
                                        ? 'bg-[#54749D] text-white shadow-md scale-100'
                                        : 'bg-gray-200 text-gray-700 hover:scale-[1.02] hover:shadow-xl hover:bg-[#54749D] hover:text-white'
                                    }
                                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Render Accordion for the active category */}
                    <Accordion
                        className="w-full max-w-4xl mx-auto my-12"
                    >
                        {categorizedFaqs[activeCategory].map((faq, index) => (
                            <div
                                key={index}
                                // Add data-eventkey to the outer div to help observer identify items
                                data-eventkey={index.toString()}
                                className="transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl rounded-lg mb-4"
                            >
                                <Accordion.Item eventKey={index.toString()} style={{ backgroundColor: '#ABCCD6', borderRadius: '8px' }}>
                                    <Accordion.Header>
                                        <span style={{ color: '#54749D', fontWeight: 'bold' }}>{faq.question}</span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p style={{ color: 'black' }}>{faq.answer}</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Contact Form Section Placeholder */}
            <section ref={contactFormRef} className="py-12 bg-[#CFE6EF]">
                <div id="contact-form" className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-roboto font-bold text-[32px] sm:text-[38px] leading-tight text-gray-800 mb-4">
                        Contact Us
                    </h2>
                    {/* The grey line added here */}
                    <div className="h-1 bg-gray-400 w-1/4 mx-auto mt-4 mb-8"></div> {/* Added mb-8 for spacing below the line */}

                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Col md>
                                    <Form.Group controlId="formFirstName">
                                        <Form.Label className="d-flex justify-content-start text-gray-700">First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter first name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            isInvalid={!!errors.firstName} // Apply validation styling
                                            className="border border-gray-300 focus:border-[#54749D] focus:ring-[#547499D] rounded-md"
                                        />
                                        <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">
                                            {errors.firstName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md>
                                    <Form.Group controlId="formLastName">
                                        <Form.Label className="d-flex justify-content-start text-gray-700">Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter last name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            isInvalid={!!errors.lastName}
                                            className="border border-gray-300 focus:border-[#54749D] focus:ring-[#547499D] rounded-md"
                                        />
                                        <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">
                                            {errors.lastName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md>
                                    <Form.Group controlId="formPhone">
                                        <Form.Label className="d-flex justify-content-start text-gray-700">Phone Number</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            placeholder="Enter phone number"
                                            name="phoneNumber" // Changed name to phoneNumber
                                            value={formData.phoneNumber}
                                            onChange={handlePhoneChange} // Use handlePhoneChange
                                            isInvalid={!!errors.phoneNumber}
                                            className="border border-gray-300 focus:border-[#54749D] focus:ring-[#547499D] rounded-md"
                                        />
                                        <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">
                                            {errors.phoneNumber}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label className="d-flex justify-content-start text-gray-700">Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="emailAddress" // Changed name to emailAddress
                                            value={formData.emailAddress}
                                            onChange={handleChange}
                                            isInvalid={!!errors.emailAddress}
                                            className="border border-gray-300 focus:border-[#54749D] focus:ring-[#547499D] rounded-md"
                                        />
                                        <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">
                                            {errors.emailAddress}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-4" controlId="formInquiry">
                                <Form.Label className="d-flex justify-content-start text-gray-700">Inquiry</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Type your inquiry here..."
                                    name="requestDetails" // Changed name to requestDetails
                                    value={formData.requestDetails}
                                    onChange={handleChange}
                                    isInvalid={!!errors.requestDetails}
                                    className="border border-gray-300 focus:border-[#54749D] focus:ring-[#547499D] rounded-md"
                                />
                                <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">
                                    {errors.requestDetails}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Consent Checkbox */}
                            <Form.Group className="mb-4 justify-content-start" controlId="formConsent">
                                <Form.Check
                                    type="checkbox"
                                    label="I consent to be contacted by Fund Homecare Canada regarding my inquiry."
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    isInvalid={!!errors.consent}
                                    className="text-start"
                                />
                                <Form.Control.Feedback type="invalid" className="d-flex justify-content-center"> {/* Also center the feedback */}
                                    {errors.consent}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button
                                type="submit"
                                className="bg-[#54749D] text-white px-6 py-3 rounded-full hover:bg-[#307694] transition-colors duration-300 ease-in-out shadow-md font-semibold"
                            >
                                Send Inquiry
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUsPage;