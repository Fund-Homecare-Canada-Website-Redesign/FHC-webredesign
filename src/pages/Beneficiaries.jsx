import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BeneficiaryCard from "../components/BeneficiaryCard";
import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';
import beneficiariesData from '../components/benficiaries'; //centralized data

const Beneficiary = () => {
  useEffect(() => {
    document.title = "Beneficiaries";
  }, []);

  return (
    <>
      {/* Header Section */}
      <section>
        <div
          className="w-full h-[66.7vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image_section_1})` }}
        >
          <div className="absolute inset-0 bg-[#307694] opacity-90 mix-blend-overlay" />
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
            <div className="md:pl-4 flex flex-col items-center md:items-start space-y-2">
              <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                Our Beneficiaries
              </h1>
              <p className="font-roboto font-normal text-[24px] md:text-[25px] lg:text-[26px] leading-[140%] text-white mb-4">
                Those We Serve, Lives We Touch
              </p>
              <Link
                to="/beneficiaries/apply"
                className="font-roboto font-medium text-[16px] md:text-[17px] lg:text-[18px] leading-none tracking-[0.44%] border-2 border-white rounded-[10px] bg-transparent
                           w-auto px-6 py-3 flex items-center justify-center text-white
                           transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:bg-opacity-10 active:scale-95 group no-underline whitespace-nowrap"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  Apply to be a Beneficiary →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiary Cards Section */}
      <div className="py-10 bg-[#CFE6EF] font-[Montserrat] min-h-[50vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4">
          {Array.isArray(beneficiariesData) && beneficiariesData.length > 0 ? (
            <div className="flex flex-col gap-8">
              {beneficiariesData.map(beneficiary => (
                <BeneficiaryCard key={beneficiary.id} beneficiary={beneficiary} />
              ))}
            </div>
          ) : (
            <p className="text-center text-xl sm:text-2xl text-gray-700">
              There are currently no beneficiaries.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Beneficiary;
