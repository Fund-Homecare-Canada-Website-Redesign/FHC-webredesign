/*
* ==================================================================================================
* EMAILJS INTEGRATION CHECKLIST:
*
* To ensure EmailJS sends information accurately, verify the following:
*
* [ ] 1. EmailJS Service ID: '<ID>'
* - CONFIRM: This matches the 'Service ID' found in the EmailJS Dashboard.
*
* [ ] 2. EmailJS Template ID: '<TEMPLATE-ID>'
* - CONFIRM: This matches the 'Template ID' found in your EmailJS Dashboard.
*
* [ ] 3. EmailJS Public Key: '<PUBLIC-KEY>'
* - CONFIRM: This matches your 'Public Key' found in your EmailJS Dashboard (Account -> API Keys).
*
* [ ] 4. EmailJS Template Variables (CRITICAL!):
* - Go to your EmailJS template ('<TEMPLATE-ID>').
* - Check the exact variable names used in your email content (e.g., {{firstName}}, {{emailAddress}}, {{donationAmount}}).
* - Ensure the keys in the object passed to `emailjs.send` below precisely match these template variable names.
* - Current mapping in handleSubmit:
* - `firstName`   -> Maps to {{firstName}} in template
* - `lastName`    -> Maps to {{lastName}} in template
* - `emailAddress`-> Maps to {{emailAddress}} in template
* - `phoneNumber` -> Maps to {{phoneNumber}} in template
* - `donationAmount`-> Maps to {{donationAmount}} in template (formatted as string)
* - `donationFrequency`-> Maps to {{donationFrequency}} in template
* - `message`     -> Maps to {{message}} in template (optional, for a custom message)
* - ADJUST: If your template uses different names (e.g., `{{donor_first_name}}`), update the keys in the `emailjs.send` object.
* - ADD/REMOVE: If your template expects more/fewer fields, add/remove corresponding key-value pairs here from `formData`.
*
* [ ] 5. Data Availability in `formData`:
* - CONFIRM: The `formData` state actually contains the values for `firstName`, `lastName`, `emailAddress`, etc., when the user submits the form. (This is generally handled by your `handleChange` functions).
*
* [ ] 6. Backend Endpoint for Payment: '/api/process-donation'
* - CONFIRM: This matches the actual URL of your server-side endpoint that handles the Stripe charge.
*
* ==================================================================================================
*/


// import React, { useEffect, useState } from "react";
// import { Form, Button, Row, Col } from 'react-bootstrap';
// // Remove emailjs if it's solely for payment submission; keep if used for other notifications.
// // import emailjs from '@emailjs/browser'; 
// import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';

// import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// // --- IMPORTANT: Replace with actual Stripe Publishable Key ---
// // In a production app, load this from environment variables (e.g., process.env.REACT_APP_STRIPE_PK)
// const stripePromise = loadStripe('<INPUT_KEY_HERE>'); 

// // This is the component that contains form
// const DonateFormContent = () => {
//     // Hooks to interact with Stripe's client-side library
//     const stripe = useStripe();
//     const elements = useElements();

//     // State for form data
//     const [formData, setFormData] = useState({
//         donationAmount: 50.00,
//         customAmount: '', 
//         donationFrequency: 'monthly',
//         firstName: '',
//         lastName: '',
//         emailAddress: '',
//         phoneNumber: '',
//         country: 'Canada', 
//         province: '',
//         address: '',
//         city: '',
//         postalCode: '',
//     });

//     // State for form errors (general validation)
//     const [errors, setErrors] = useState({});
    
//     // State for Stripe payment processing status and errors
//     const [processing, setProcessing] = useState(false); // True when payment is being processed
//     const [paymentError, setPaymentError] = useState(null); // Stores Stripe/backend payment errors
//     const [paymentSuccess, setPaymentSuccess] = useState(false); // Indicates successful payment

//     // Handler for all input changes (text, radio, etc.)
//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//         // Clear specific error when input changes
//         setErrors(prevErrors => ({
//             ...prevErrors,
//             [name]: '', 
//         }));
//         // Clear payment error if user starts typing again
//         setPaymentError(null); 
//     };

//     // Handler for donation amount selection buttons
//     const handleAmountChange = (amount) => {
//         setFormData(prevData => ({
//             ...prevData,
//             donationAmount: amount,
//             customAmount: '', // Clear custom amount if a preset is selected
//         }));
//         setErrors(prevErrors => ({
//             ...prevErrors,
//             donationAmount: '', // Clear potential amount error
//         }));
//     };

//     // Handler for custom amount input
//     const handleCustomAmountChange = (e) => {
//         const value = e.target.value;
//         setFormData(prevData => ({
//             ...prevData,
//             customAmount: value,
//             // Update donationAmount with custom value, default to 0 if invalid number
//             donationAmount: parseFloat(value) || 0, 
//         }));
//         setErrors(prevErrors => ({
//             ...prevErrors,
//             customAmount: '',
//             donationAmount: '', // Clear any donation amount errors
//         }));
//     };

//     const handlePhoneChange = (e) => {
//         const rawValue = e.target.value.replace(/\D/g, '');
//         const digits = rawValue.slice(0, 10);

//         let formatted = '';
//         if (digits.length > 6) {
//             formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
//         } else if (digits.length > 3) {
//             formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
//         } else if (digits.length > 0) {
//             formatted = `(${digits}`;
//         }

//         setFormData(prevData => ({
//             ...prevData,
//             phoneNumber: formatted,
//         }));
//         setErrors(prevErrors => ({
//             ...prevErrors,
//             phoneNumber: '',
//         }));
//     };

//     // Client-side form validation
//     const validateForm = () => {
//         let isValid = true;
//         const newErrors = {};

//         // Donation Amount Validation
//         if (!formData.donationAmount || formData.donationAmount <= 0) {
//             newErrors.donationAmount = 'Please choose or enter a donation amount.';
//             isValid = false;
//         }
//         if (formData.customAmount && isNaN(parseFloat(formData.customAmount))) {
//             newErrors.customAmount = 'Invalid amount.';
//             isValid = false;
//         }

//         // Contact Information Validation
//         if (!formData.firstName) {
//             newErrors.firstName = 'First name is required.';
//             isValid = false;
//         }
//         if (!formData.lastName) {
//             newErrors.lastName = 'Last name is required.';
//             isValid = false;
//         }
//         if (!formData.emailAddress) {
//             newErrors.emailAddress = 'Email address is required.';
//             isValid = false;
//         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.emailAddress)) {
//             newErrors.emailAddress = 'Invalid email address.';
//             isValid = false;
//         }
//         // Phone number is optional, validate format only if provided
//         if (formData.phoneNumber && !/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phoneNumber)) { 
//             newErrors.phoneNumber = 'Phone number must be 10 digits long.';
//             isValid = false;
//         }

//         // Billing Address Validation (all required)
//         if (!formData.country) {
//             newErrors.country = 'Country is required.';
//             isValid = false;
//         }
//         if (!formData.province) {
//             newErrors.province = 'Province is required.';
//             isValid = false;
//         }
//         if (!formData.address) {
//             newErrors.address = 'Address is required.';
//             isValid = false;
//         }
//         if (!formData.city) {
//             newErrors.city = 'City is required.';
//             isValid = false;
//         }
//         if (!formData.postalCode) {
//             newErrors.postalCode = 'Postal Code is required.';
//             isValid = false;
//         } else if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/i.test(formData.postalCode)) { 
//             newErrors.postalCode = 'Invalid Canadian postal code (e.g., A1A 1A1).';
//             isValid = false;
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     // Main form submission handler
//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission
//         setPaymentError(null); // Clear any previous payment errors
//         setPaymentSuccess(false); // Reset success state

//         // Ensure Stripe.js and Elements are loaded
//         if (!stripe || !elements) {
//             console.log("Stripe.js or Elements not yet loaded.");
//             setPaymentError("Payment system not ready. Please try again in a moment.");
//             return;
//         }

//         // Perform client-side form validation
//         if (!validateForm()) {
//             console.log('Form validation failed. Please correct the errors.');
//             setPaymentError("Please fill out all required fields correctly.");
//             return;
//         }

//         setProcessing(true); // Disable the button and show processing state

//         const cardElement = elements.getElement(CardElement);

//         // Securely create a PaymentMethod with Stripe
//         const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//             billing_details: {
//                 name: `${formData.firstName} ${formData.lastName}`,
//                 email: formData.emailAddress,
//                 phone: formData.phoneNumber || undefined, // Only send if not empty
//                 address: {
//                     line1: formData.address,
//                     city: formData.city,
//                     state: formData.province, 
//                     postal_code: formData.postalCode,
//                     country: 'CA', // Use ISO 3166-1 alpha-2 code for Canada
//                 },
//             },
//         });

//         if (stripeError) {
//             setPaymentError(stripeError.message);
//             setProcessing(false);
//             console.error('Stripe error:', stripeError);
//             return; // Stop execution if there's a Stripe error
//         }

//         // --- Send the paymentMethod.id to your backend server ---
//         try {
//             // Replace '/api/process-donation' with your actual backend endpoint.
//             // This backend endpoint will handle the actual charge using Stripe's server-side SDK.
//             const response = await fetch('/api/process-donation', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     paymentMethodId: paymentMethod.id,
//                     // Convert amount to cents for Stripe (e.g., $50.00 -> 5000)
//                     amount: Math.round(formData.donationAmount * 100), 
//                     currency: 'cad', // Specify currency as Canadian Dollars
//                     donationFrequency: formData.donationFrequency,
//                     // Include other relevant donor info for your records or receipts
//                     firstName: formData.firstName,
//                     lastName: formData.lastName,
//                     emailAddress: formData.emailAddress,
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setPaymentSuccess(true);
//                 alert('Thank you for your donation! Your payment was successful.');
//                 // Optional: You can still use emailjs here to send a separate donation receipt/notification
//                 // emailjs.send(...) 

//                 // Reset form data and errors after successful submission
//                 setFormData({
//                     donationAmount: 50.00,
//                     customAmount: '',
//                     donationFrequency: 'monthly',
//                     firstName: '',
//                     lastName: '',
//                     emailAddress: '',
//                     phoneNumber: '',
//                     country: 'Canada',
//                     province: '',
//                     address: '',
//                     city: '',
//                     postalCode: '',
//                 });
//                 setErrors({});
//                 elements.getElement(CardElement).clear(); // Clear the card input fields
//             } else {
//                 // Handle errors returned from your backend server
//                 setPaymentError(data.message || 'Payment failed on server. Please try again.');
//                 console.error('Backend payment error:', data);
//             }
//         } catch (backendError) {
//             setPaymentError('A network error occurred. Please check your internet connection.');
//             console.error('Fetch/backend communication error:', backendError);
//         } finally {
//             setProcessing(false); // Re-enable the button
//         }
//     };

//     // Provinces for Canada
//     const canadianProvinces = [
//         "", // Default empty option
//         "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
//         "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
//         "Northwest Territories", "Nunavut", "Yukon"
//     ];

//     return (
//         <Form onSubmit={handleSubmit}>
//             {/* Choose a Donation Amount */}
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Choose a Donation Amount</h3>
//             <div className="flex justify-center items-center gap-4 mb-8">
//                 <Button
//                     type="button"
//                     variant={formData.donationAmount === 50.00 ? "primary" : "outline-primary"}
//                     onClick={() => handleAmountChange(50.00)}
//                     className={`px-6 py-3 rounded-md text-lg font-bold transition-all duration-200
//                         ${formData.donationAmount === 50.00 ? 'bg-[#30AFAA] border-[#30AFAA] text-white' : 'bg-transparent border-[#30AFAA] text-[#30AFAA] hover:bg-[#30AFAA] hover:text-white'}`}
//                 >
//                     $50.00
//                 </Button>
//                 <Button
//                     type="button"
//                     variant={formData.donationAmount === 100.00 ? "primary" : "outline-primary"}
//                     onClick={() => handleAmountChange(100.00)}
//                     className={`px-6 py-3 rounded-md text-lg font-bold transition-all duration-200
//                         ${formData.donationAmount === 100.00 ? 'bg-[#30AFAA] border-[#30AFAA] text-white' : 'bg-transparent border-[#30AFAA] text-[#30AFAA] hover:bg-[#30AFAA] hover:text-white'}`}
//                 >
//                     $100.00
//                 </Button>
//                 <Button
//                     type="button"
//                     variant={formData.donationAmount === 200.00 ? "primary" : "outline-primary"}
//                     onClick={() => handleAmountChange(200.00)}
//                     className={`px-6 py-3 rounded-md text-lg font-bold transition-all duration-200
//                         ${formData.donationAmount === 200.00 ? 'bg-[#30AFAA] border-[#30AFAA] text-white' : 'bg-transparent border-[#30AFAA] text-[#30AFAA] hover:bg-[#30AFAA] hover:text-white'}`}
//                 >
//                     $200.00
//                 </Button>
//                 {/* Custom Amount Input */}
//                 <div className="relative flex items-center">
//                     <span className="absolute left-3 text-2xl text-gray-700">$</span>
//                     <Form.Control
//                         type="number"
//                         placeholder="50.00"
//                         value={formData.customAmount || (formData.donationAmount !== 50 && formData.donationAmount !== 100 && formData.donationAmount !== 200 ? formData.donationAmount : '')}
//                         onChange={handleCustomAmountChange}
//                         onFocus={() => setFormData(prev => ({ ...prev, donationAmount: 0, customAmount: '' }))}
//                         className={`pl-8 pr-3 py-3 w-40 border-2 rounded-md text-2xl font-bold text-gray-800 text-center
//                                     focus:border-[#30AFAA] focus:ring-1 focus:ring-[#30AFAA]`}
//                         isInvalid={!!errors.customAmount || !!errors.donationAmount}
//                     />
//                     <span className="absolute right-3 text-lg text-gray-500">CAD</span>
//                     <Form.Control.Feedback type="invalid" className="absolute top-full left-0 mt-1 text-xs text-red-500 w-full text-center">
//                         {errors.customAmount || errors.donationAmount}
//                     </Form.Control.Feedback>
//                 </div>
//             </div>

//             {/* Choose a donation frequency */}
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Choose a Donation Frequency</h3>
//             <div className="flex justify-center gap-6 mb-8">
//                 <Form.Check
//                     type="radio"
//                     id="freq-monthly"
//                     name="donationFrequency"
//                     label="Monthly"
//                     value="monthly"
//                     checked={formData.donationFrequency === 'monthly'}
//                     onChange={handleChange}
//                     className="custom-radio-button"
//                 />
//                 <Form.Check
//                     type="radio"
//                     id="freq-onetime"
//                     name="donationFrequency"
//                     label="One time"
//                     value="onetime"
//                     checked={formData.donationFrequency === 'onetime'}
//                     onChange={handleChange}
//                     className="custom-radio-button"
//                 />
//             </div>

//             {/* Contact Information */}
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Contact Information</h3>
//             <Row className="mb-3">
//                 <Col md>
//                     <Form.Group controlId="formFirstName">
//                         <Form.Label className="d-flex justify-content-start text-gray-700">First Name <span className="text-red-500">*</span></Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="First Name"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             isInvalid={!!errors.firstName}
//                             className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
//                         />
//                         <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.firstName}</Form.Control.Feedback>
//                     </Form.Group>
//                 </Col>
//                 <Col md>
//                     <Form.Group controlId="formLastName">
//                         <Form.Label className="d-flex justify-content-start text-gray-700">Last Name <span className="text-red-500">*</span></Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Last Name"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             isInvalid={!!errors.lastName}
//                             className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
//                         />
//                         <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.lastName}</Form.Control.Feedback>
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row className="mb-3">
//                 <Col>
//                     <Form.Group controlId="formEmailAddress">
//                         <Form.Label className="d-flex justify-content-start text-gray-700">Email Address <span className="text-red-500">*</span></Form.Label>
//                         <Form.Control
//                             type="email"
//                             placeholder="someone@website.com"
//                             name="emailAddress"
//                             value={formData.emailAddress}
//                             onChange={handleChange}
//                             isInvalid={!!errors.emailAddress}
//                             className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
//                         />
//                         <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.emailAddress}</Form.Control.Feedback>
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row className="mb-5">
//                 <Col>
//                     <Form.Group controlId="formPhoneNumber">
//                         <Form.Label className="d-flex justify-content-start text-gray-700">Phone</Form.Label>
//                         <Form.Control
//                             type="tel"
//                             placeholder="(123) 456-7890"
//                             name="phoneNumber"
//                             value={formData.phoneNumber}
//                             onChange={handlePhoneChange}
//                             isInvalid={!!errors.phoneNumber}
//                             className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
//                         />
//                         <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.phoneNumber}</Form.Control.Feedback>
//                     </Form.Group>
//                 </Col>
//             </Row>

//             {/* Billing Address */}
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Billing Address</h3>
//             <Row className="mb-3">
//                 <Col md>
//                     <Form.Group controlId="formCountry">
//                         <Form.Label className="d-flex justify-content-start text-gray-700">Country <span className="text-red-500">*</span></Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="country"
//                             value={formData.country}
//                             onChange={handleChange}
//                             isInvalid={!!errors.country}
//                             className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
//                         >
//                             <option value="">Select a country</option>
//                             <option value="Canada">Canada</option>
//                             {/* Add more countries if needed */}
//                         </Form.Control>
//                         <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.country}</Form.Control.Feedback>
//                     </Form.Group>
//                 </Col>
//                 <Col md>
//                     <Form.Group controlId="formProvince">
//                         <Form.Label className="d-flex justify-content-start text-gray-700">Province <span className="text-red-500">*</span></Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="province"
//                             value={formData.province}
//                             onChange={handleChange}
//                             isInvalid={!!errors.province}
//                             className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
//                         >
//                             {canadianProvinces.map(province => (
//                                 <option key={province} value={province}>{province}</option>
//                             ))}
//                         </Form.Control>
//                         <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.province}</Form.Control.Feedback>
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row className="mb-3">
//                 <Col>
//                     <Form.Group controlId="formAddress">
//                         <Form.Label className="d-flex justify-content-start text-gray-700">Address <span className="text-red-500">*</span></Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="123 Main St"
//                             name="address"
//                             value={formData.address}
//                             onChange={handleChange}
//                             isInvalid={!!errors.address}
//                             className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
//                         />
//                         <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.address}</Form.Control.Feedback>
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row className="mb-5">
//                 <Col md>
//                     <Form.Group controlId="formCity">
//                         <Form.Label className="d-flex justify-content-start text-gray-700">City <span className="text-red-500">*</span></Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="City"
//                             name="city"
//                             value={formData.city}
//                             onChange={handleChange}
//                             isInvalid={!!errors.city}
//                             className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
//                         />
//                         <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.city}</Form.Control.Feedback>
//                     </Form.Group>
//                 </Col>
//                 <Col md>
//                     <Form.Group controlId="formPostalCode">
//                         <Form.Label className="d-flex justify-content-start text-gray-700">Postal Code <span className="text-red-500">*</span></Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="A1A 1A1"
//                             name="postalCode"
//                             value={formData.postalCode}
//                             onChange={handleChange}
//                             isInvalid={!!errors.postalCode}
//                             className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
//                         />
//                         <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.postalCode}</Form.Control.Feedback>
//                     </Form.Group>
//                 </Col>
//             </Row>

//             {/* --- Payment Information Section --- */}
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Payment Information</h3>
//             <div className="mb-5 p-3 border border-gray-300 rounded-md">
//                 <Form.Group controlId="formCardDetails">
//                     <Form.Label className="d-flex justify-content-start text-gray-700">Credit Card Details <span className="text-red-500">*</span></Form.Label>
//                     {/* Stripe's CardElement: Securely collects card number, expiry, CVC */}
//                     <CardElement
//                         options={{
//                             style: {
//                                 base: {
//                                     fontSize: '16px',
//                                     color: '#424770',
//                                     '::placeholder': {
//                                         color: '#aab7c4',
//                                     },
//                                 },
//                                 invalid: {
//                                     color: '#9e2146',
//                                 },
//                             },
//                         }}
//                         className="p-2 border border-gray-300 rounded-md"
//                     />
//                     {paymentError && <div className="text-red-500 mt-2 text-sm">{paymentError}</div>}
//                     {paymentSuccess && <div className="text-green-600 mt-2 text-sm">Payment successful!</div>}
//                 </Form.Group>
//             </div>

//             <div className="text-center mt-6">
//                 <Button
//                     variant="primary"
//                     type="submit"
//                     className="bg-[#30AFAA] hover:bg-[#258C8C] text-white font-bold px-8 py-3 rounded-md transition-all duration-300 ease-in-out"
//                     // Disable button while processing or if Stripe/Elements aren't loaded
//                     disabled={processing || !stripe || !elements} 
//                 >
//                     {processing ? 'Processing...' : 'Donate'}
//                 </Button>
//             </div>
//         </Form>
//     );
// };

// // Main Donate component that wraps the form with Stripe's Elements
// const Donate = () => {
//     useEffect(() => {
//         document.title = "Donate";
//     }, []);

//     return (
//         <>
//             {/* Hero Header Section for Donate Page */}
//             <section>
//                 <div
//                     className="w-full h-[66.7vh] bg-cover bg-center relative"
//                     style={{ backgroundImage: `url(${image_section_1})` }}
//                 >
//                     {/* Blue overlay with transparency */}
//                     <div
//                         className="absolute inset-0 bg-[#307694] opacity-90 mix-blend-overlay"
//                     ></div>

//                     {/* Content container with max w-7xl that match navbar/footer */}
//                     <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
//                         <div className="md:pl-4 flex flex-col items-center md:items-start space-y-2">
//                             {/* Title for Donate Page */}
//                             <div>
//                                 <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
//                                 Donate
//                                 </h1>
//                             </div>
//                             <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
//                                 Your Support Brings Comfort and Care
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Donation Form Section */}
//             <div className="bg-[#CFE6EF] py-10">
//                 <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg">
//                     {/* Wrap your form component with <Elements> */}
//                     <Elements stripe={stripePromise}>
//                         <DonateFormContent />
//                     </Elements>
//                 </div>
//             </div>

//             {/* Custom CSS for Radio Buttons */}
//             <style jsx>{`
//                 /* Hide default radio input */
//                 .custom-radio-button .form-check-input {
//                     display: none;
//                 }

//                 /* Style the custom radio indicator */
//                 .custom-radio-button .form-check-label::before {
//                     content: '';
//                     display: inline-block;
//                     width: 24px;
//                     height: 24px;
//                     border: 2px solid #54749D; /* Border color for unselected */
//                     border-radius: 50%; /* Make it round */
//                     margin-right: 8px;
//                     vertical-align: middle;
//                     transition: all 0.2s ease-in-out;
//                 }

//                 /* Style the custom radio indicator when checked */
//                 .custom-radio-button .form-check-input:checked + .form-check-label::before {
//                     background-color: #30AFAA; /* Filled color when selected */
//                     border-color: #30AFAA; /* Border color when selected */
//                     box-shadow: inset 0 0 0 6px white; /* Inner circle */
//                 }

//                 /* Style the label text */
//                 .custom-radio-button .form-check-label {
//                     cursor: pointer;
//                     color: #4a5568; /* Darker text color */
//                     font-size: 1.125rem; /* text-lg */
//                     font-weight: 500; /* font-medium */
//                     display: flex;
//                     align-items: center;
//                 }

//                 /* Focus style for accessibility */
//                 .custom-radio-button .form-check-input:focus + .form-check-label::before {
//                     outline: 2px solid #30AFAA;
//                     outline-offset: 2px;
//                     box-shadow: 0 0 0 0.25rem rgba(48, 175, 170, 0.25); /* Lighter shadow */
//                 }
//             `}</style>
//         </>
//     );
// };

// export default Donate;

// src/pages/Donate.jsx
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
// Remove emailjs if it's solely for payment submission; keep if used for other notifications.
// import emailjs from '@emailjs/browser';

import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';

import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom'; // IMPORT useLocation

import beneficiariesData from '../components/benficiaries'; // IMPORT THE CENTRALIZED BENEFICIARY DATA

// --- IMPORTANT: Replace with actual Stripe Publishable Key ---
// In a production app, load this from environment variables (e.g., process.env.REACT_APP_STRIPE_PK)
const stripePromise = loadStripe('pk_test_51PK1xXGj2y2q8g9h3m31D45T9e03d6d0W3c9f8072175m5Jb173V7b1v90O3q1w3c1b1Q2q8g9h3m31D45T9e03d6d0W3c9f8072175m5Jb173V7b1v90O3q1');

// This is the component that contains form
const DonateFormContent = () => {
    // Hooks to interact with Stripe's client-side library
    const stripe = useStripe();
    const elements = useElements();
    const location = useLocation(); // Initialize useLocation

    // State for form data
    const [formData, setFormData] = useState({
        donationAmount: 50.00,
        customAmount: '',
        donationFrequency: 'onetime', // Changed default to 'onetime' as monthly donations often have specific Stripe setup
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        country: 'Canada',
        province: '',
        address: '',
        city: '',
        postalCode: '',
        selectedBeneficiary: '', // NEW: State for selected beneficiary
    });

    // Effect to pre-fill beneficiary if navigated from a card
    useEffect(() => {
        if (location.state && location.state.selectedBeneficiaryName) {
            setFormData(prev => ({
                ...prev,
                selectedBeneficiary: location.state.selectedBeneficiaryName
            }));
        }
    }, [location.state]); // Re-run if location.state changes

    // State for form errors (general validation)
    const [errors, setErrors] = useState({});

    // State for Stripe payment processing status and errors
    const [processing, setProcessing] = useState(false); // True when payment is being processed
    const [paymentError, setPaymentError] = useState(null); // Stores Stripe/backend payment errors
    const [paymentSuccess, setPaymentSuccess] = useState(false); // Indicates successful payment

    // Handler for all input changes (text, radio, select, etc.)
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
        // Clear specific error when input changes
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: '',
        }));
        // Clear payment error if user starts typing again
        setPaymentError(null);
    };

    // Handler for donation amount selection buttons
    const handleAmountChange = (amount) => {
        setFormData(prevData => ({
            ...prevData,
            donationAmount: amount,
            customAmount: '', // Clear custom amount if a preset is selected
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            donationAmount: '', // Clear potential amount error
        }));
    };

    // Handler for custom amount input
    const handleCustomAmountChange = (e) => {
        const value = e.target.value;
        setFormData(prevData => ({
            ...prevData,
            customAmount: value,
            // Update donationAmount with custom value, default to 0 if invalid number
            donationAmount: parseFloat(value) || 0,
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            customAmount: '',
            donationAmount: '', // Clear any donation amount errors
        }));
    };

    const handlePhoneChange = (e) => {
        const rawValue = e.target.value.replace(/\D/g, ''); // Remove non-digits
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

    // Client-side form validation
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Donation Amount Validation
        if (!formData.donationAmount || formData.donationAmount <= 0) {
            newErrors.donationAmount = 'Please choose or enter a donation amount.';
            isValid = false;
        }
        if (formData.customAmount && isNaN(parseFloat(formData.customAmount))) {
            newErrors.customAmount = 'Invalid amount.';
            isValid = false;
        }

        // Contact Information Validation
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
        // Phone number is optional, validate format only if provided
        if (formData.phoneNumber && !/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must be 10 digits long.';
            isValid = false;
        }

        // Billing Address Validation (all required)
        if (!formData.country) {
            newErrors.country = 'Country is required.';
            isValid = false;
        }
        if (!formData.province) {
            newErrors.province = 'Province is required.';
            isValid = false;
        }
        if (!formData.address) {
            newErrors.address = 'Address is required.';
            isValid = false;
        }
        if (!formData.city) {
            newErrors.city = 'City is required.';
            isValid = false;
        }
        if (!formData.postalCode) {
            newErrors.postalCode = 'Postal Code is required.';
            isValid = false;
        } else if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/i.test(formData.postalCode)) {
            newErrors.postalCode = 'Invalid Canadian postal code (e.g., A1A 1A1).';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Main form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setPaymentError(null); // Clear any previous payment errors
        setPaymentSuccess(false); // Reset success state

        // Ensure Stripe.js and Elements are loaded
        if (!stripe || !elements) {
            console.log("Stripe.js or Elements not yet loaded.");
            setPaymentError("Payment system not ready. Please try again in a moment.");
            return;
        }

        // Perform client-side form validation
        if (!validateForm()) {
            console.log('Form validation failed. Please correct the errors.');
            setPaymentError("Please fill out all required fields correctly.");
            return;
        }

        setProcessing(true); // Disable the button and show processing state

        const cardElement = elements.getElement(CardElement);

        // Securely create a PaymentMethod with Stripe
        const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.emailAddress,
                phone: formData.phoneNumber || undefined, // Only send if not empty
                address: {
                    line1: formData.address,
                    city: formData.city,
                    state: formData.province,
                    postal_code: formData.postalCode,
                    country: 'CA', // Use ISO 3166-1 alpha-2 code for Canada
                },
            },
        });

        if (stripeError) {
            setPaymentError(stripeError.message);
            setProcessing(false);
            console.error('Stripe error:', stripeError);
            return; // Stop execution if there's a Stripe error
        }

        // --- Send the paymentMethod.id to your backend server ---
        try {
            // Replace '/api/process-donation' with your actual backend endpoint.
            // This backend endpoint will handle the actual charge using Stripe's server-side SDK.
            const response = await fetch('/api/process-donation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentMethodId: paymentMethod.id,
                    // Convert amount to cents for Stripe (e.g., $50.00 -> 5000)
                    amount: Math.round(formData.donationAmount * 100),
                    currency: 'cad', // Specify currency as Canadian Dollars
                    donationFrequency: formData.donationFrequency,
                    selectedBeneficiary: formData.selectedBeneficiary, // NEW: Include selected beneficiary
                    // Include other relevant donor info for your records or receipts
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    emailAddress: formData.emailAddress,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setPaymentSuccess(true);
                alert('Thank you for your donation! Your payment was successful.');
                // Optional: You can still use emailjs here to send a separate donation receipt/notification
                // emailjs.send(...)

                // Reset form data and errors after successful submission
                setFormData({
                    donationAmount: 50.00,
                    customAmount: '',
                    donationFrequency: 'onetime', // Reset to default
                    firstName: '',
                    lastName: '',
                    emailAddress: '',
                    phoneNumber: '',
                    country: 'Canada',
                    province: '',
                    address: '',
                    city: '',
                    postalCode: '',
                    selectedBeneficiary: '', // Reset beneficiary selection
                });
                setErrors({});
                elements.getElement(CardElement).clear(); // Clear the card input fields
            } else {
                // Handle errors returned from your backend server
                setPaymentError(data.message || 'Payment failed on server. Please try again.');
                console.error('Backend payment error:', data);
            }
        } catch (backendError) {
            setPaymentError('A network error occurred. Please check your internet connection.');
            console.error('Fetch/backend communication error:', backendError);
        } finally {
            setProcessing(false); // Re-enable the button
        }
    };

    // Provinces for Canada
    const canadianProvinces = [
        "", // Default empty option for initial selection
        "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
        "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
        "Northwest Territories", "Nunavut", "Yukon"
    ];

    return (
        <Form onSubmit={handleSubmit}>
            {/* Choose a Donation Amount */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Choose a Donation Amount</h3>
            <div className="flex justify-center items-center gap-4 mb-8">
                <Button
                    type="button"
                    variant={formData.donationAmount === 50.00 ? "primary" : "outline-primary"}
                    onClick={() => handleAmountChange(50.00)}
                    className={`px-6 py-3 rounded-md text-lg font-bold transition-all duration-200
                        ${formData.donationAmount === 50.00 ? 'bg-[#30AFAA] border-[#30AFAA] text-white' : 'bg-transparent border-[#30AFAA] text-[#30AFAA] hover:bg-[#30AFAA] hover:text-white'}`}
                >
                    $50.00
                </Button>
                <Button
                    type="button"
                    variant={formData.donationAmount === 100.00 ? "primary" : "outline-primary"}
                    onClick={() => handleAmountChange(100.00)}
                    className={`px-6 py-3 rounded-md text-lg font-bold transition-all duration-200
                        ${formData.donationAmount === 100.00 ? 'bg-[#30AFAA] border-[#30AFAA] text-white' : 'bg-transparent border-[#30AFAA] text-[#30AFAA] hover:bg-[#30AFAA] hover:text-white'}`}
                >
                    $100.00
                </Button>
                <Button
                    type="button"
                    variant={formData.donationAmount === 200.00 ? "primary" : "outline-primary"}
                    onClick={() => handleAmountChange(200.00)}
                    className={`px-6 py-3 rounded-md text-lg font-bold transition-all duration-200
                        ${formData.donationAmount === 200.00 ? 'bg-[#30AFAA] border-[#30AFAA] text-white' : 'bg-transparent border-[#30AFAA] text-[#30AFAA] hover:bg-[#30AFAA] hover:text-white'}`}
                >
                    $200.00
                </Button>
                {/* Custom Amount Input */}
                <div className="relative flex items-center">
                    <span className="absolute left-3 text-2xl text-gray-700">$</span>
                    <Form.Control
                        type="number"
                        placeholder="50.00"
                        value={formData.customAmount || (formData.donationAmount !== 50 && formData.donationAmount !== 100 && formData.donationAmount !== 200 ? formData.donationAmount : '')}
                        onChange={handleCustomAmountChange}
                        onFocus={() => setFormData(prev => ({ ...prev, donationAmount: 0, customAmount: '' }))}
                        className={`pl-8 pr-3 py-3 w-40 border-2 rounded-md text-2xl font-bold text-gray-800 text-center
                                    focus:border-[#30AFAA] focus:ring-1 focus:ring-[#30AFAA]`}
                        isInvalid={!!errors.customAmount || !!errors.donationAmount}
                    />
                    <span className="absolute right-3 text-lg text-gray-500">CAD</span>
                    <Form.Control.Feedback type="invalid" className="absolute top-full left-0 mt-1 text-xs text-red-500 w-full text-center">
                        {errors.customAmount || errors.donationAmount}
                    </Form.Control.Feedback>
                </div>
            </div>

            {/* --- NEW SECTION: Choose a Beneficiary --- */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">If Applicable, choose a beneficiary you want to donate to:</h3>
            <Row className="mb-5 justify-content-center"> {/* Added justify-content-center for centering on larger screens */}
                <Col md={6}> {/* Constrain width for the select box */}
                    <Form.Group controlId="formBeneficiary">
                        <Form.Label className="d-flex justify-content-start text-gray-700">Beneficiary</Form.Label>
                        <Form.Select
                            name="selectedBeneficiary"
                            value={formData.selectedBeneficiary}
                            onChange={handleChange}
                            className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
                        >
                            <option value="">General Donation</option> {/* Default option */}
                            {beneficiariesData.map((b) => (
                                <option key={b.id} value={b.beneficiaryName}>
                                    {b.beneficiaryName}
                                </option>
                            ))}
                        </Form.Select>
                        {/* No specific error feedback for this optional field, but you could add if needed */}
                        <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.selectedBeneficiary}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            {/* Choose a donation frequency */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Choose a Donation Frequency</h3>
            <div className="flex justify-center gap-6 mb-8">
                <Form.Check
                    type="radio"
                    id="freq-monthly"
                    name="donationFrequency"
                    label="Monthly"
                    value="monthly"
                    checked={formData.donationFrequency === 'monthly'}
                    onChange={handleChange}
                    className="custom-radio-button"
                />
                <Form.Check
                    type="radio"
                    id="freq-onetime"
                    name="donationFrequency"
                    label="One time"
                    value="onetime"
                    checked={formData.donationFrequency === 'onetime'}
                    onChange={handleChange}
                    className="custom-radio-button"
                />
            </div>

            {/* Contact Information */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Contact Information</h3>
            <Row className="mb-3">
                <Col md>
                    <Form.Group controlId="formFirstName">
                        <Form.Label className="d-flex justify-content-start text-gray-700">First Name <span className="text-red-500">*</span></Form.Label>
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
                        <Form.Label className="d-flex justify-content-start text-gray-700">Last Name <span className="text-red-500">*</span></Form.Label>
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
                <Col>
                    <Form.Group controlId="formEmailAddress">
                        <Form.Label className="d-flex justify-content-start text-gray-700">Email Address <span className="text-red-500">*</span></Form.Label>
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
            </Row>

            <Row className="mb-5">
                <Col>
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

            {/* Billing Address */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Billing Address</h3>
            <Row className="mb-3">
                <Col md>
                    <Form.Group controlId="formCountry">
                        <Form.Label className="d-flex justify-content-start text-gray-700">Country <span className="text-red-500">*</span></Form.Label>
                        <Form.Control
                            as="select"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            isInvalid={!!errors.country}
                            className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
                        >
                            <option value="">Select a country</option>
                            <option value="Canada">Canada</option>
                            {/* Add more countries if needed */}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.country}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group controlId="formProvince">
                        <Form.Label className="d-flex justify-content-start text-gray-700">Province <span className="text-red-500">*</span></Form.Label>
                        <Form.Control
                            as="select"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            isInvalid={!!errors.province}
                            className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
                        >
                            {canadianProvinces.map(province => (
                                <option key={province} value={province}>{province}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.province}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="formAddress">
                        <Form.Label className="d-flex justify-content-start text-gray-700">Address <span className="text-red-500">*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="123 Main St"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            isInvalid={!!errors.address}
                            className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
                        />
                        <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.address}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md>
                    <Form.Group controlId="formCity">
                        <Form.Label className="d-flex justify-content-start text-gray-700">City <span className="text-red-500">*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            isInvalid={!!errors.city}
                            className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
                        />
                        <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.city}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group controlId="formPostalCode">
                        <Form.Label className="d-flex justify-content-start text-gray-700">Postal Code <span className="text-red-500">*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="A1A 1A1"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            isInvalid={!!errors.postalCode}
                            className="border border-gray-300 focus:border-[#54749D] focus:ring-1 focus:ring-[#54749D] rounded-md"
                        />
                        <Form.Control.Feedback type="invalid" className="d-flex justify-content-start">{errors.postalCode}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            {/* --- Payment Information Section --- */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Payment Information</h3>
            <div className="mb-5 p-3 border border-gray-300 rounded-md">
                <Form.Group controlId="formCardDetails">
                    <Form.Label className="d-flex justify-content-start text-gray-700">Credit Card Details <span className="text-red-500">*</span></Form.Label>
                    {/* Stripe's CardElement: Securely collects card number, expiry, CVC */}
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                        className="p-2 border border-gray-300 rounded-md"
                    />
                    {paymentError && <div className="text-red-500 mt-2 text-sm">{paymentError}</div>}
                    {paymentSuccess && <div className="text-green-600 mt-2 text-sm">Payment successful!</div>}
                </Form.Group>
            </div>

            <div className="text-center mt-6">
                <Button
                    variant="primary"
                    type="submit"
                    className="bg-[#30AFAA] hover:bg-[#258C8C] text-white font-bold px-8 py-3 rounded-md transition-all duration-300 ease-in-out"
                    // Disable button while processing or if Stripe/Elements aren't loaded
                    disabled={processing || !stripe || !elements}
                >
                    {processing ? 'Processing...' : 'Donate'}
                </Button>
            </div>
        </Form>
    );
};

// Main Donate component that wraps the form with Stripe's Elements
const Donate = () => {
    useEffect(() => {
        document.title = "Donate";
    }, []);

    return (
        <>
            {/* Hero Header Section for Donate Page */}
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
                            {/* Title for Donate Page */}
                            <div>
                                <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                                Donate
                                </h1>
                            </div>
                            <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
                                Your Support Brings Comfort and Care
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Form Section */}
            <div className="bg-[#CFE6EF] py-10">
                <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg">
                    {/* Wrap your form component with <Elements> */}
                    <Elements stripe={stripePromise}>
                        <DonateFormContent />
                    </Elements>
                </div>
            </div>

            {/* Custom CSS for Radio Buttons */}
            <style jsx>{`
                /* Hide default radio input */
                .custom-radio-button .form-check-input {
                    display: none;
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
                }

                /* Style the custom radio indicator when checked */
                .custom-radio-button .form-check-input:checked + .form-check-label::before {
                    background-color: #30AFAA; /* Filled color when selected */
                    border-color: #30AFAA; /* Border color when selected */
                    box-shadow: inset 0 0 0 6px white; /* Inner circle */
                }

                /* Style the label text */
                .custom-radio-button .form-check-label {
                    cursor: pointer;
                    color: #4a5568; /* Darker text color */
                    font-size: 1.125rem; /* text-lg */
                    font-weight: 500; /* font-medium */
                    display: flex;
                    align-items: center;
                }

                /* Focus style for accessibility */
                .custom-radio-button .form-check-input:focus + .form-check-label::before {
                    outline: 2px solid #30AFAA;
                    outline-offset: 2px;
                    box-shadow: 0 0 0 0.25rem rgba(48, 175, 170, 0.25); /* Lighter shadow */
                }
            `}</style>
        </>
    );
};

export default Donate;