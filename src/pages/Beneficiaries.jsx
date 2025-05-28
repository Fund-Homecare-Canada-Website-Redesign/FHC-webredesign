// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import BeneficiaryCard from "../components/BeneficiaryCard";
// import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';
// import FhcFullLogoTransparent from '../assets/images/Logos/FHC_Full_Logo_Transparent.png';

// const Beneficiary = () => {
//   useEffect(() => {
//     document.title = "Beneficiaries";
//   }, []);

//   // TEST DATA FOR THE BENEFICIARY CARD
//   const testBeneficiaryObject = {
//     // You can use the imported logo or a specific image for a beneficiary
//     // imageSrc: 'path/to/specific/beneficiary/image.jpg', // if a beneficiary has a unique image
//     imageSrc: FhcFullLogoTransparent, // Using the default logo for testing
//     fundName: "Support Fund for Ms. Brown", //
//     beneficiaryName: "Ms. Brown", //
//     description: "We’re raising funds to support Ms. Brown, an 89-year-old in palliative care with lung cancer, who urgently needs in-home PSW support beyond what her limited government income and family can cover. Your generosity will help provide the critical care she needs during this difficult time.", //
//     raised: 4000, // Test raised amount
//     goal: 10000,  // Test goal amount
//     donations: 15, // Test number of donations
//   };

//   const anotherTestBeneficiaryObject = {
//     imageSrc: FhcFullLogoTransparent, // Or another image
//     fundName: "Elderly Care Initiative",
//     beneficiaryName: "Mr. Johnson",
//     description: "Mr. Johnson requires assistance with daily living due to age-related frailty. Your contribution helps provide essential home care services, ensuring he can live comfortably and with dignity in his own home. Funds will cover PSW visits, medication reminders, and meal preparation.",
//     raised: 7500,
//     goal: 5000, // Example of exceeding the goal
//     donations: 30,
//   };

//   return (
//     <>
//       <section>
//         <div
//           className="w-full h-[66.7vh] bg-cover bg-center relative"
//           style={{ backgroundImage: `url(${image_section_1})` }}
//         >
//           {/* Blue overlay with transparency */}
//           <div
//             className="absolute inset-0 bg-[#307694] opacity-90 mix-blend-overlay"
//           ></div>

//           {/* Content container with max w-7xl that match navbar/footer */}
//           <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
//             <div className="md:pl-4 flex flex-col items-center md:items-start space-y-2">
//               {/* Title for Beneficiaries Page */}
//               <div>
//                 <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
//                   Our Beneficiaries
//                 </h1>
//               </div>
//               <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
//                 Those We Serve, Lives We Touch
//               </p>

//               {/* "Apply" Button - adapted to the new header style */}
//               <Link
//                 to="/beneficiaries/apply"
//                 className="font-roboto font-medium text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17.78px] leading-none tracking-[0.44%] border-2 sm:border-3 border-white rounded-[10px] bg-transparent
//                                 w-auto px-6 py-3  // Removed fixed widths/heights, added auto-width with padding
//                                 flex items-center justify-center cursor-pointer relative z-20 text-white
//                                 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:bg-opacity-10 active:scale-95 group no-underline whitespace-nowrap" // Added whitespace-nowrap
//               >
//                 <span className="transition-transform duration-300 group-hover:translate-x-1">
//                   Apply to be a Beneficiary →
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="h-full font-[Montserrat] py-10 bg-[#CFE6EF]"> 
//         <div className="flex flex-col gap-8"> 
//           <BeneficiaryCard beneficiary={testBeneficiaryObject} />
//           {/* You can add more cards here to see how they stack */}
//           <BeneficiaryCard beneficiary={anotherTestBeneficiaryObject} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Beneficiary;

// src/pages/Beneficiaries.jsx (or wherever your Beneficiaries page is)
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BeneficiaryCard from "../components/BeneficiaryCard";
import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';
import beneficiariesData from '../components/benficiaries'; // IMPORT THE CENTRALIZED DATA

const Beneficiary = () => {
  useEffect(() => {
    document.title = "Beneficiaries";
  }, []);

  return (
    <>
      <section>
        {/* Your existing header section */}
        <div
          className="w-full h-[66.7vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image_section_1})` }}
        >
          <div className="absolute inset-0 bg-[#307694] opacity-90 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10">
            <div className="md:pl-4 flex flex-col items-center md:items-start space-y-2">
              <div>
                <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                  Our Beneficiaries
                </h1>
              </div>
              <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
                Those We Serve, Lives We Touch
              </p>
              <Link
                to="/beneficiaries/apply"
                className="font-roboto font-medium text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17.78px] leading-none tracking-[0.44%] border-2 sm:border-3 border-white rounded-[10px] bg-transparent
                                w-auto px-6 py-3
                                flex items-center justify-center cursor-pointer relative z-20 text-white
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
      <div className="h-full font-[Montserrat] py-10 bg-[#CFE6EF]">
        <div className="flex flex-col gap-8">
          {/* MAP OVER THE CENTRALIZED DATA */}
          {beneficiariesData.map(beneficiary => (
            <BeneficiaryCard key={beneficiary.id} beneficiary={beneficiary} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Beneficiary;