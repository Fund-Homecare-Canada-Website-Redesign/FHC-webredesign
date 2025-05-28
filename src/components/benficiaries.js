import FhcFullLogoTransparent from '../assets/images/Logos/FHC_Full_Logo_Transparent.png';

const beneficiariesData = [
  {
    id: 'th-brown', // Add a unique ID for each beneficiary
    imageSrc: FhcFullLogoTransparent,
    fundName: "Support Fund for Ms. Brown",
    beneficiaryName: "Ms. Brown",
    description: "We’re raising funds to support Ms. Brown, an 89-year-old in palliative care with lung cancer, who urgently needs in-home PSW support beyond what her limited government income and family can cover. Your generosity will help provide the critical care she needs during this difficult time.",
    raised: 4000,
    goal: 10000,
    donations: 15,
  },
  // when you add one of these it adds a card to the page
  {
    id: 'mr-johnson', // Add a unique ID
    imageSrc: FhcFullLogoTransparent,
    fundName: "Elderly Care Initiative",
    beneficiaryName: "Mr. Johnson",
    description: "Mr. Johnson requires assistance with daily living due to age-related frailty. Your contribution helps provide essential home care services, ensuring he can live comfortably and with dignity in his own home. Funds will cover PSW visits, medication reminders, and meal preparation.",
    raised: 7500,
    goal: 15000,
    donations: 30,
  },
  {
    id: 'mr-johnson', // Add a unique ID
    imageSrc: FhcFullLogoTransparent,
    fundName: "Elderly Care Initiative",
    beneficiaryName: "Mr. Black",
    description: "Mr. Johnson requires assistance with daily living due to age-related frailty. Your contribution helps provide essential home care services, ensuring he can live comfortably and with dignity in his own home. Funds will cover PSW visits, medication reminders, and meal preparation.",
    raised: 7500,
    goal: 5000,
    donations: 30,
  }
  // Add more beneficiaries here as needed
];

export default beneficiariesData;