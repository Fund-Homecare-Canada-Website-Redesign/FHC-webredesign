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

import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';

// Import UTM utilities
import { addUTMParamsToUrl } from '../services/utmUtils';

const DonateFormContent = () => {
    const [formData, setFormData] = useState({
        donationAmount: 50.00,
        donationFrequency: 'onetime',
        isCustomAmount: false, // Track if custom amount is selected
    });

    // Pre-created Payment Links from Stripe Dashboard
    const paymentLinks = {
        onetime: {
            50: 'https://donate.stripe.com/test_28EaEZ5Hx2Kf3lK7mJcEw02',
            100: 'https://donate.stripe.com/test_eVq9AV9XN3Oj5tSgXjcEw04',
            200: 'https://donate.stripe.com/test_28EaEZ5Hx2Kf3lK7mJcEw02',
            custom: 'https://donate.stripe.com/test_aFa6oJee32Kf2hGbCZcEw03',
        },
        weekly: {
            50: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
            100: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
            200: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
        },
        monthly: {
            50: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
            100: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
            200: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
        },
        quarterly: {
            50: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
            100: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
            200: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
        },
        yearly: {
            50: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
            100: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
            200: 'https://donate.stripe.com/test_5kQ6oJ4Dt5Wrg8w36tcEw01',
        }
    };

    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    // Check if custom amount should be available (only for one-time donations, stripe payment links only support one-time donations for custom amounts)
    const showCustomAmount = formData.donationFrequency === 'onetime';

    // Handler for preset donation amount selection buttons
    const handleAmountChange = (amount) => {
        setFormData(prevData => ({
            ...prevData,
            donationAmount: amount,
            isCustomAmount: false,
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            donationAmount: '',
        }));
    };

    // Handler for custom amount button
    const handleCustomAmountClick = () => {
        setFormData(prevData => ({
            ...prevData,
            donationAmount: 0,
            isCustomAmount: true,
            donationFrequency: 'onetime',
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            donationAmount: '',
        }));
    };

    // Handler for frequency change
    const handleFrequencyChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            donationFrequency: e.target.value,
            ...(e.target.value !== 'onetime' && prevData.isCustomAmount && {
                isCustomAmount: false,
                donationAmount: 50.00
            })
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            donationFrequency: '',
        }));
    };

    // Validation
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Check if no amount is selected
        if (!formData.donationAmount && !formData.isCustomAmount) {
            newErrors.donationAmount = 'Please choose a donation amount.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Switch payment link based on frequency and amount, with UTM parameters
    const getPaymentLink = () => {
        const frequency = formData.donationFrequency;
        const amount = formData.donationAmount;

        let basePaymentLink;

        // For custom amounts, only one-time is supported
        if (formData.isCustomAmount) {
            basePaymentLink = paymentLinks.onetime.custom;
        }
        // Check if it's a standard amount
        else if ([50, 100, 200].includes(amount)) {
            basePaymentLink = paymentLinks[frequency][amount];
        }
        // Fallback to custom one-time
        else {
            basePaymentLink = paymentLinks.onetime.custom;
        }

        // Add UTM parameters to the payment link
        return addUTMParamsToUrl(basePaymentLink);
    };

    // Main form submission handler - ONLY GA4 tracking here
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Track donation redirect event - ONLY GA4 event in donate page
        if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'donation_redirect', {
                event_category: 'donation',
                event_label: 'proceed_to_payment',
                donation_type: formData.donationFrequency,
                is_custom_amount: formData.isCustomAmount
            });
        }

        setProcessing(true);

        // Get the payment link with UTM parameters already included
        const paymentLinkWithUTM = getPaymentLink();

        // Add metadata as URL parameters to the existing URL (which may already have UTM params)
        const url = new URL(paymentLinkWithUTM);

        if (formData.isCustomAmount) {
            url.searchParams.set('metadata[amount_type]', 'custom');
        } else {
            url.searchParams.set('metadata[amount]', formData.donationAmount);
        }
        url.searchParams.set('metadata[frequency]', formData.donationFrequency);

        const finalPaymentLink = url.toString();

        console.log('Redirecting to payment with UTM parameters:', finalPaymentLink);

        // Small delay for better UX
        setTimeout(() => {
            window.location.href = finalPaymentLink;
        }, 500);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {/* Choose a Donation Frequency */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Choose a Donation Frequency</h3>
            <div className="flex justify-center flex-wrap gap-4 mb-8">
                <Form.Check
                    type="radio"
                    id="freq-onetime"
                    name="donationFrequency"
                    label="One Time"
                    value="onetime"
                    checked={formData.donationFrequency === 'onetime'}
                    onChange={handleFrequencyChange}
                    className="custom-radio-button"
                />
                <Form.Check
                    type="radio"
                    id="freq-weekly"
                    name="donationFrequency"
                    label="Weekly"
                    value="weekly"
                    checked={formData.donationFrequency === 'weekly'}
                    onChange={handleFrequencyChange}
                    className="custom-radio-button"
                />
                <Form.Check
                    type="radio"
                    id="freq-monthly"
                    name="donationFrequency"
                    label="Monthly"
                    value="monthly"
                    checked={formData.donationFrequency === 'monthly'}
                    onChange={handleFrequencyChange}
                    className="custom-radio-button"
                />
                <Form.Check
                    type="radio"
                    id="freq-quarterly"
                    name="donationFrequency"
                    label="Quarterly"
                    value="quarterly"
                    checked={formData.donationFrequency === 'quarterly'}
                    onChange={handleFrequencyChange}
                    className="custom-radio-button"
                />
                <Form.Check
                    type="radio"
                    id="freq-yearly"
                    name="donationFrequency"
                    label="Yearly"
                    value="yearly"
                    checked={formData.donationFrequency === 'yearly'}
                    onChange={handleFrequencyChange}
                    className="custom-radio-button"
                />
            </div>

            {/* Choose a Donation Amount */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Choose a Donation Amount</h3>
            <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
                <Button
                    type="button"
                    variant={formData.donationAmount === 50.00 && !formData.isCustomAmount ? "primary" : "outline-primary"}
                    onClick={() => handleAmountChange(50.00)}
                    className={`px-6 py-3 rounded-md text-lg font-bold transition-all duration-200
                        ${formData.donationAmount === 50.00 && !formData.isCustomAmount ? 'bg-[#30AFAA] border-[#30AFAA] text-white' : 'bg-transparent border-[#30AFAA] text-[#30AFAA] hover:bg-[#30AFAA] hover:text-white'}`}
                >
                    $50.00
                </Button>
                <Button
                    type="button"
                    variant={formData.donationAmount === 100.00 && !formData.isCustomAmount ? "primary" : "outline-primary"}
                    onClick={() => handleAmountChange(100.00)}
                    className={`px-6 py-3 rounded-md text-lg font-bold transition-all duration-200
                        ${formData.donationAmount === 100.00 && !formData.isCustomAmount ? 'bg-[#30AFAA] border-[#30AFAA] text-white' : 'bg-transparent border-[#30AFAA] text-[#30AFAA] hover:bg-[#30AFAA] hover:text-white'}`}
                >
                    $100.00
                </Button>
                <Button
                    type="button"
                    variant={formData.donationAmount === 200.00 && !formData.isCustomAmount ? "primary" : "outline-primary"}
                    onClick={() => handleAmountChange(200.00)}
                    className={`px-6 py-3 rounded-md text-lg font-bold transition-all duration-200
                        ${formData.donationAmount === 200.00 && !formData.isCustomAmount ? 'bg-[#30AFAA] border-[#30AFAA] text-white' : 'bg-transparent border-[#30AFAA] text-[#30AFAA] hover:bg-[#30AFAA] hover:text-white'}`}
                >
                    $200.00
                </Button>

                {/* Custom Amount Button - Only show for one-time donations */}
                {showCustomAmount && (
                    <Button
                        type="button"
                        variant={formData.isCustomAmount ? "primary" : "outline-primary"}
                        onClick={handleCustomAmountClick}
                        className={`px-6 py-3 rounded-md text-lg font-bold transition-all duration-200
                            ${formData.isCustomAmount ? 'bg-[#30AFAA] border-[#30AFAA] text-white' : 'bg-transparent border-[#30AFAA] text-[#30AFAA] hover:bg-[#30AFAA] hover:text-white'}`}
                    >
                        Custom Amount
                    </Button>
                )}
            </div>

            {/* Show custom amount info - only when custom amount is selected */}
            {formData.isCustomAmount && (
                <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-md p-3">
                        You'll be able to enter your custom donation amount on the secure Stripe payment page.
                    </p>
                </div>
            )}

            {/* Error Display */}
            {errors.donationAmount && (
                <div className="text-red-500 mb-4 text-center text-sm">{errors.donationAmount}</div>
            )}

            {/* Submit Button */}
            <div className="text-center mt-6">
                <Button
                    variant="primary"
                    type="submit"
                    className="bg-[#30AFAA] hover:bg-[#258C8C] text-white font-bold px-8 py-3 rounded-md transition-all duration-300 ease-in-out"
                    disabled={processing}
                >
                    {processing ? 'Redirecting to Payment...' : 'Proceed to Secure Payment'}
                </Button>
                <p className="text-sm text-gray-600 mt-6">
                    You'll be redirected to Stripe's secure payment page to complete your donation and provide your information.
                </p>
            </div>
        </Form>
    );
};

// Main Donate component
const Donate = () => {
    useEffect(() => {
        document.title = "Donate";
    }, []);

    return (
        <>
            <section>
                <div
                    className="w-full h-[66.7vh] bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${image_section_1})` }}
                >
                    <div className="absolute inset-0 bg-[#307694] opacity-90 mix-blend-overlay"></div>
                    <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                        <div className="md:pl-4 flex flex-col items-center md:items-start space-y-2">
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

            <div className="bg-[#CFE6EF] py-10">
                <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg">
                    <DonateFormContent />
                </div>
            </div>

            {/* CSS for radio buttons */}
            <style jsx>{`
                .custom-radio-button .form-check-input {
                    display: none;
                }
                .custom-radio-button .form-check-label::before {
                    content: '';
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    border: 2px solid #54749D;
                    border-radius: 50%;
                    margin-right: 8px;
                    vertical-align: middle;
                    transition: all 0.2s ease-in-out;
                }
                .custom-radio-button .form-check-input:checked + .form-check-label::before {
                    background-color: #30AFAA;
                    border-color: #30AFAA;
                    box-shadow: inset 0 0 0 6px white;
                }
                .custom-radio-button .form-check-label {
                    cursor: pointer;
                    color: #4a5568;
                    font-size: 1.125rem;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                }
                .custom-radio-button .form-check-input:focus + .form-check-label::before {
                    outline: 2px solid #30AFAA;
                    outline-offset: 2px;
                    box-shadow: 0 0 0 0.25rem rgba(48, 175, 170, 0.25);
                }
            `}</style>
        </>
    );
};

export default Donate;