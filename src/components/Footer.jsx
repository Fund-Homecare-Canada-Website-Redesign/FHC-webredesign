import React, { useState } from "react";
import fhcLogo from "../assets/images/Logos/FHC_Full_Logo_Transparent.png";
import tsiLogo from "../assets/images/Logos/TSI.png";
import fb from "../assets/images/Logos/facebook.png";
import insta from "../assets/images/Logos/instagram.png";
import linkedin from "../assets/images/Logos/linkedin.png";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('email_address_check', '');
      formData.append('locale', 'en');

      await fetch('https://2b96cb07.sibforms.com/serve/MUIFAPO37WK7qybTMNpBzrx8xXhlkRaErsHKwxzE9XEL6TX13yycJN90PNjcJ3_NgZtdpOWI8npbn3P8udKQyzjsvI640nVaOIiCOoHUAnT3_3tQMbADcPsusf9Nw6weMy5t5ozcj9qtmTWYWp5B5b9h0u4fsShdyWdj37_qSkMIzjzp2-zvY4v8AMx20d91BlXur8tEpIuT-57B', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Required for Brevo forms
      });

      // Since we're using no-cors, we can't read the response
      // but if no error is thrown, assume success
      setMessage("Thank you for subscribing to our newsletter!");
      setMessageType("success");
      setEmail("");

    } catch (error) {
      setMessage("There was an error subscribing. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
      // Clear message after 5 seconds
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <footer className="bg-[#54749D] text-white py-6 font-[Montserrat]">
      <div className="max-w-7xl mx-auto px-4 space-y-10">

        {/* Row 1: Logo + Email */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <img src={fhcLogo} alt="Fund Homecare Canada" className="h-14" />

          <form onSubmit={handleSubmit} className="flex w-full max-w-md">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdOutlineEmail className="text-gray-400 w-5 h-5" />
              </span>

              {/* mobile-only */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email to subscribe"
                className="w-full pl-10 pr-4 py-2 rounded-l-md border border-gray-300 text-black text-sm focus:outline-none md:hidden"
                required
                disabled={isLoading}
              />

              {/* md+ */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for our latest news"
                className="hidden md:block w-full pl-10 pr-4 py-2 rounded-l-md border border-gray-300 text-black text-sm focus:outline-none"
                required
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !email}
              className="flex-none bg-[#c1c7cd] hover:bg-blue-700 active:bg-gray-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-r-md text-sm transition-all duration-300 ease-in-out"
            >
              {isLoading ? "..." : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Success/Error Message */}
        {message && (
          <div className={`text-center text-sm p-2 rounded-md ${messageType === 'success'
            ? 'bg-green-100 text-green-800 border border-green-300'
            : 'bg-red-100 text-red-800 border border-red-300'
            }`}>
            {message}
          </div>
        )}

        {/* Row 2: Social Media + TSI */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 border-t border-gray-400 pt-6">
          <div className="flex flex-col items-center md:items-start md:w-2/3 space-y-2">
            <h3 className="font-semibold mb-2">Follow Us on Social Media</h3>
            <a href="https://www.instagram.com/fundhomecareca/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 no-underline text-white hover:text-blue-300 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#30AFAA] before:transition-all before:duration-300 hover:before:w-full">
              <img src={insta} alt="Instagram" className="w-5 h-5" /> Instagram
            </a>
            <a href="https://www.facebook.com/FundHomecareCanada/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 no-underline text-white hover:text-blue-300 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#30AFAA] before:transition-all before:duration-300 hover:before:w-full">
              <img src={fb} alt="Facebook" className="w-5 h-5" /> Facebook
            </a>
            <a href="https://www.linkedin.com/company/fund-homecare-canada/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 no-underline text-white hover:text-blue-300 relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#30AFAA] before:transition-all before:duration-300 hover:before:w-full">
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5" /> LinkedIn
            </a>
          </div>
          <div className="md:w-1/3 flex flex-col items-center justify-center">
            <img src={tsiLogo} alt="Tech for Social Impact" className="h-28 mb-2" />
            <p className="text-xs text-center">Developed and Built by Tech for Social Impact®</p>
          </div>
        </div>

        {/* Row 3: Notice */}
        <div className="text-center border-t border-gray-400 mt-10 pt-4 text-xs text-white">
          Fund Homecare Canada is a Canadian Registered Charity (BN#779061142RR0001)
        </div>
      </div>
    </footer>
  );
};

export default Footer;