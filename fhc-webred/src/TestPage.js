import React from "react";
//import colours from "../assets/styles/BrandColours";

//chnage with your logic import React from "react";
import NewsletterCard from "./components/NewsletterCard";

const TestPage = () => {
  return (
    <div>
      <h1>Testing Components</h1>
      <NewsletterCard date="August 2024" pdfUrl="../../newsletters/FHCNewsletterAug24.pdf"/>
    </div>
  );
};

export default TestPage;
