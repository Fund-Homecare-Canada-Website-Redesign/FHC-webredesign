import React from "react";
import { Link } from "react-router-dom";
import BeneficiaryCard from "../components/BeneficiaryCard";
import CustomizableButton from "../components/CustomizableButton";

const beneficiaryObject = {
  imageSrc: "",
  fundName: "",
  beneficiaryName: "TH",
  description: "We need your help!! Our current beneficiary TH is 89 years old (name and other details withheld for privacy reasons) and lives on their own. The beneficiary has had lung cancer for the last 2+ years and is now palliative. There is a dire need for Personal Support Worker (PSW) care during this time for TH. TH’s health conditions have deteriorated, and the only income they receive is from government sources (Old Age, CPP etc.) that covers the minimum shelter and basic needs.Their adult children have used up all their available resources including ones from the government (Employment Insurance benefits etc.) and have had to return to work to sustain their livelihood. They are providing as much support as they can, but also need some respite and be able to spend time with TH during this tough time. The typical cost for in-home care PSW is $6k-8k per month, which is out of the beneficiary’s reach. Fund Homecare will be providing PSW support for TH during this time, as needed. Support is only expected to increase as TH’s needs change. We are reaching out to you, our patrons to help us raise funds to enable us to help TH and family. Your support and generosity will help us help this family get the much-needed support and help, when they need it most.",
  progress: 0,
  raised: 0,
  goal: 0,
  donations: 0
}

const Beneficiary = () => {
  return (
    <>
      <div className="h-full font-[Montserrat]">
        <div className="bg-[url('assets/images/Beneficiary/beneficiary.png')] bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center">
          <div className="w-1/2 h-25 bg-[#D9D9D9]/80 flex flex-column justify-center items-center rounded-5">
            <h1 className="text-white text-center font-bold">Our Beneficiaries</h1>
            <Link to="/beneficiaries/apply" className="bg-[#54749D] text-white p-2.5 w-42 rounded-5 hover:opacity-75">Apply to be a Beneficiary</Link>
          </div>
        </div>
        <div className="pt-5 pb-5">
          <BeneficiaryCard beneficiary={beneficiaryObject} />
        </div>
      </div>
    </>
  );
};

export default Beneficiary;