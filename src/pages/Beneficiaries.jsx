import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BeneficiaryCard from "../components/BeneficiaryCard";
import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';


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
  useEffect(() => {
    document.title = "Beneficiaries";
  }, []);
  return (
    <>
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
                            {/* Title for Beneficiaries Page */}
                            <div>
                                <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                                    Our Beneficiaries
                                </h1>
                            </div>
                            <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
                                Those We Serve, Lives We Touch
                            </p>

                            {/* "Apply" Button - adapted to the new header style */}
                            <Link
                                to="/beneficiaries/apply"
                                className="font-roboto font-medium text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17.78px] leading-none tracking-[0.44%] border-2 sm:border-3 border-white rounded-[10px] bg-transparent
                                w-auto px-6 py-3  // Removed fixed widths/heights, added auto-width with padding
                                flex items-center justify-center cursor-pointer relative z-20 text-white
                                transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:bg-opacity-10 active:scale-95 group no-underline whitespace-nowrap" // Added whitespace-nowrap
                            >
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    Apply to be a Beneficiary →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
      <div className="h-full font-[Montserrat]">
        <div className="pt-5 pb-5">
          <BeneficiaryCard beneficiary={beneficiaryObject} />
        </div>
      </div>
    </>
  );
};

export default Beneficiary;