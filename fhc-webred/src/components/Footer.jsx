//needs mandatory line at bottom: Fund Homecare Canada is a Canadian Registered Charity (BN#779061142RR0001).
import React from "react";
import colours from "../assets/styles/BrandColours";
import logo from "../assets/images/Logos/FHC_Full_Logo_Transparent.png";
import fb from "../assets/images/Logos/facebook.png";
import insta from "../assets/images/Logos/instagram.png";
import linkedin from "../assets/images/Logos/linkedin.png";

const Footer = () => {
    return (
      <footer className="bg-[#54749D] text-white py-4 mt-8">
        <div className="container mx-auto text-center font-[Montserrat]">
          {/* Logo and email area */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <img src={logo} alt="Fund Homecare Canada" className="h-14" />
            <div className="flex mt-4 md:mt-0">
              <input
                type="email"
                placeholder="Enter your email to get the latest news..."
                className="px-4 py-2 w-72 rounded-l-md border border-gray-300 text-black text-sm"
              />
              <button className="bg-black hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
  
          {/* Navigate column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-400 pt-6 text-left">
            <div>
              <h3 className="font-[Montserrat] text-left text-base mb-6">Navigate</h3>
              <div className="mt-2 space-y-2 text-left text-sm">
                <a href="#" className="text-white no-underline hover:underline block">Home</a>
                <a href="#" className="text-white no-underline hover:underline block">About Us</a>
                <a href="#" className="text-white no-underline hover:underline block">Events</a>
                <a href="#" className="text-white no-underline hover:underline block">Beneficiaries</a>
                <a href="#" className="text-white no-underline hover:underline block">Contact Us</a>
              </div>
            </div>
  
            <div className="text-right">
              <h3 className="font-[Montserrat] text-lg text-base mb-6">Join Us</h3>
              <div className="flex justify-end space-x-4 mt-2">
                <a href="https://www.facebook.com/FundHomecareCanada/" target="_blank"><img src={fb} alt="Facebook logo" title="Facebook" className="w-[21.33px] h-[21.33px]"/></a>
                <a href="https://www.instagram.com/fundhomecareca/" target="_blank"><img src={insta} alt="Instagram logo" title="Instagram" className="w-[21.33px] h-[21.33px]"/></a>
                <a href="https://www.linkedin.com/company/fund-homecare-canada/?originalSubdomain=ca" target="_blank"><img src={linkedin} alt="Linkedin logo" title="Linkedin" className="w-[21.33px] h-[21.33px]"/></a>
              </div>
            </div>
          </div>
  
          {/* Bottom bit */}
          <div className="text-left text-xs mt-6 border-t border-gray-400 pt-4">
            Fund Homecare Canada is a Canadian Registered Charity (BN#779061142RR0001)
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;