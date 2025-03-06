import React from "react";
import { useState } from "react";
import colours from "../assets/styles/BrandColours";
import ProgressBar from "./DonationProgressBar";
import StripeIntegration from "./StripeIntegration";

const BeneficiaryCard = ({ beneficiary }) => {
    const [expand, setExpand] = useState(false);

    const expandOnClick = () => {
      setExpand((prev) => !prev);
    }

    return (
      <div className="beneficiary-card w-5/6 mx-auto bg-[#3A92A0]/30 rounded-xl shadow-[10px_10px_0_rgba(0,0,0,0.25)] p-4 flex flex-column gap-4">
        <div className="beneficiary-info flex flex-col lg:flex-row bg-[#D9D9D9]/50 p-4 justify-center items-start gap-4">
          <div className="beneficiary-info-left w-full lg:w-1/2">
            <img src={beneficiary.imageSrc} className="min-w-full min-h-full object-cover"></img>
          </div>
          <div className="beneficiary-info-right w-full lg:w-1/2">
            <h1>{beneficiary.fundName}</h1> 
            <h2 className="text-[#757575]">{beneficiary.beneficiaryName}</h2>
            <p>{beneficiary.description}</p>
          </div>
        </div>
        <ProgressBar fraction={`${beneficiary.progress}`}/>
        <div className="beneficiary-donate-div flex flex-column gap-2">
          <div className="benefiary-donate-info">
            <h1>${beneficiary.raised} Raised</h1>
            <h2 className="text-[#757575]">${beneficiary.goal} Goal · {beneficiary.donations} Donations</h2>
          </div>
          <div className="beneficiary-donate-buttons flex gap-4">
            <button onClick={expandOnClick} className="bg-[#54749D] text-white p-2 w-20 rounded-full hover:opacity-75">Donate</button>
            <button className="bg-[#54749D] text-white p-2 w-20 rounded-full hover:opacity-75">Share</button>
          </div>
        </div>
        {expand && (
            <div className="donation-form-div mt-4">
              <form>
                <label for="card-number">Card Number</label>
                <input id="card-number"></input>
              </form>
            </div>
          )
        }
      </div>
    );
};

export default BeneficiaryCard;