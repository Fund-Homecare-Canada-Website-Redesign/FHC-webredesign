import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PastEventsCard from "../components/PastEventsCard";
import image_section_1 from '../assets/images/MainPage/Home_Hero-2.png';


// Spring Gala 2025
import SpringGala2025 from "../assets/images/PastEvents/SpringGala2025/Invite/MainFlyer.jpg";
// Spring Gala 2025 - Images

// Spring Gala 2025 - Sponsors
import SpringGala2025Sponsor1 from "../assets/images/PastEvents/SpringGala2025/Sponsors/Amica_CRM.jpg";
import SpringGala2025Sponsor2 from "../assets/images/PastEvents/SpringGala2025/Sponsors/Angie_Joe.png";
import SpringGala2025Sponsor3 from "../assets/images/PastEvents/SpringGala2025/Sponsors/Drayton.png";
import SpringGala2025Sponsor4 from "../assets/images/PastEvents/SpringGala2025/Sponsors/Enerta_Digital.jpg";
import SpringGala2025Sponsor5 from "../assets/images/PastEvents/SpringGala2025/Sponsors/Sabor_Dance.jpg";
import SpringGala2025Sponsor6 from "../assets/images/PastEvents/SpringGala2025/Sponsors/Scentsy.jpeg";
import SpringGala2025Sponsor7 from "../assets/images/PastEvents/SpringGala2025/Sponsors/TSOlogo.jpg";
import SpringGala2025Sponsor8 from "../assets/images/PastEvents/SpringGala2025/Sponsors/cc-horizontal-logo-2.webp";
import SpringGala2025Sponsor9 from "../assets/images/PastEvents/SpringGala2025/Sponsors/costco.png";
import SpringGala2025Sponsor10 from "../assets/images/PastEvents/SpringGala2025/Sponsors/Snap_Click.png";

// Silent Disco 2024
import SilentDisco from "../assets/images/PastEvents/SilentDisco/Invite/FHC-Event_Silent-Disco.png";

// Spring Gala 2024
import SpringGala2024 from "../assets/images/PastEvents/SpringGala2024/Invite/InviteSG2024.jpg";

// Spring Gala 2024 - Images
import SpringGala2024Image1 from "../assets/images/PastEvents/SpringGala2024/Photos/image1.jpg";
import SpringGala2024Image2 from "../assets/images/PastEvents/SpringGala2024/Photos/image2.jpg";
import SpringGala2024Image3 from "../assets/images/PastEvents/SpringGala2024/Photos/image3.jpg";
import SpringGala2024Image4 from "../assets/images/PastEvents/SpringGala2024/Photos/image4.jpg";
import SpringGala2024Image5 from "../assets/images/PastEvents/SpringGala2024/Photos/image5.jpg";
import SpringGala2024Image6 from "../assets/images/PastEvents/SpringGala2024/Photos/image6.jpg";
import SpringGala2024Image7 from "../assets/images/PastEvents/SpringGala2024/Photos/image7.jpg";
import SpringGala2024Image8 from "../assets/images/PastEvents/SpringGala2024/Photos/image8.jpg";
import SpringGala2024Image9 from "../assets/images/PastEvents/SpringGala2024/Photos/image9.jpg";
// Spring Gala 2024 - Sponsors
import SpringGala2024Sponsor1 from "../assets/images/PastEvents/SpringGala2024/Sponsors/13thStreetWinery.png";
import SpringGala2024Sponsor2 from "../assets/images/PastEvents/SpringGala2024/Sponsors/ArtGalleryOfOntario.png";
import SpringGala2024Sponsor3 from "../assets/images/PastEvents/SpringGala2024/Sponsors/BramleaCityCenter.png";
import SpringGala2024Sponsor4 from "../assets/images/PastEvents/SpringGala2024/Sponsors/Globex.png";
import SpringGala2024Sponsor5 from "../assets/images/PastEvents/SpringGala2024/Sponsors/JackAstors.png";
import SpringGala2024Sponsor6 from "../assets/images/PastEvents/SpringGala2024/Sponsors/KOC.png";
import SpringGala2024Sponsor7 from "../assets/images/PastEvents/SpringGala2024/Sponsors/KegSteakhouseandBar.png";
import SpringGala2024Sponsor8 from "../assets/images/PastEvents/SpringGala2024/Sponsors/Lionsheart.png";
import SpringGala2024Sponsor9 from "../assets/images/PastEvents/SpringGala2024/Sponsors/SMEG.png";
import SpringGala2024Sponsor10 from "../assets/images/PastEvents/SpringGala2024/Sponsors/SarinaHendriksMiranda.jpeg";
import SpringGala2024Sponsor11 from "../assets/images/PastEvents/SpringGala2024/Sponsors/SplashON.png";
import SpringGala2024Sponsor12 from "../assets/images/PastEvents/SpringGala2024/Sponsors/TTP.png";
import SpringGala2024Sponsor13 from "../assets/images/PastEvents/SpringGala2024/Sponsors/Ticketmaster.png";
import SpringGala2024Sponsor14 from "../assets/images/PastEvents/SpringGala2024/Sponsors/TorontoBlueJays.jpg";
import SpringGala2024Sponsor15 from "../assets/images/PastEvents/SpringGala2024/Sponsors/YipFitness.png";

// Malabar Food Fest 2023
import InviteMalabar from "../assets/images/PastEvents/MalabarFoodFest2023/Invite/InviteMalabar2023.png";
// Malabar Food Fest 2023 - Images
import Malabar2023Image1 from "../assets/images/PastEvents/MalabarFoodFest2023/Photos/image1mala.jpg";
import Malabar2023Image2 from "../assets/images/PastEvents/MalabarFoodFest2023/Photos/image2mala.jpg";
import Malabar2023Image3 from "../assets/images/PastEvents/MalabarFoodFest2023/Photos/image3mala.jpg";
import Malabar2023Image4 from "../assets/images/PastEvents/MalabarFoodFest2023/Photos/image4mala.jpg";
import Malabar2023Image5 from "../assets/images/PastEvents/MalabarFoodFest2023/Photos/image5mala.jpg";
import Malabar2023Image6 from "../assets/images/PastEvents/MalabarFoodFest2023/Photos/image6mala.jpg";
import Malabar2023Image7 from "../assets/images/PastEvents/MalabarFoodFest2023/Photos/image7mala.jpeg";
import Malabar2023Image8 from "../assets/images/PastEvents/MalabarFoodFest2023/Photos/image8mala.jpg";

// Spring Gala 2023
import SpringGala2023 from "../assets/images/PastEvents/SpringGala2023/Invite/InviteSG2023.jpg";
// Speing Gala 2023 - Images
import SpringGala2023Image1 from "../assets/images/PastEvents/SpringGala2023/Photos/image1sg2023.jpg";
import SpringGala2023Image2 from "../assets/images/PastEvents/SpringGala2023/Photos/image2sg2023.jpg";
import SpringGala2023Image3 from "../assets/images/PastEvents/SpringGala2023/Photos/image3sg2023.jpg";
import SpringGala2023Image4 from "../assets/images/PastEvents/SpringGala2023/Photos/image4sg2023.jpg";
import SpringGala2023Image5 from "../assets/images/PastEvents/SpringGala2023/Photos/image5sg2023.jpg";
import SpringGala2023Image6 from "../assets/images/PastEvents/SpringGala2023/Photos/image6sg2023.jpg";
import SpringGala2023Image7 from "../assets/images/PastEvents/SpringGala2023/Photos/image7sg2023.jpg";
import SpringGala2023Image8 from "../assets/images/PastEvents/SpringGala2023/Photos/image8sg2023.jpg";
import SpringGala2023Image9 from "../assets/images/PastEvents/SpringGala2023/Photos/image9sg2023.jpg";
// Spring Gala 2023 - Sponsors
import SpringGala2023Sponsor1 from "../assets/images/PastEvents/SpringGala2023/Sponsors/BarNation.png";
import SpringGala2023Sponsor2 from "../assets/images/PastEvents/SpringGala2023/Sponsors/BhawanaKaushikCPA.png";
import SpringGala2023Sponsor3 from "../assets/images/PastEvents/SpringGala2023/Sponsors/Cineplex.png";
import SpringGala2023Sponsor4 from "../assets/images/PastEvents/SpringGala2023/Sponsors/GavonTransport.png";
import SpringGala2023Sponsor5 from "../assets/images/PastEvents/SpringGala2023/Sponsors/HockeyHoF.png";
import SpringGala2023Sponsor6 from "../assets/images/PastEvents/SpringGala2023/Sponsors/KOC.png";
import SpringGala2023Sponsor7 from "../assets/images/PastEvents/SpringGala2023/Sponsors/ROM.png";
import SpringGala2023Sponsor8 from "../assets/images/PastEvents/SpringGala2023/Sponsors/RahulAroraRealEstate.png";
import SpringGala2023Sponsor9 from "../assets/images/PastEvents/SpringGala2023/Sponsors/TCA.png";

// Spring Gala 2022
import SpringGala2022 from "../assets/images/PastEvents/SpringGala2022/Invite/InviteSG2022.jpg";

// Spring Gala 2022 - Images
import SpringGala2022Image1 from "../assets/images/PastEvents/SpringGala2022/Photos/image1sg2022.jpg";
import SpringGala2022Image3 from "../assets/images/PastEvents/SpringGala2022/Photos/image3sg2022.jpg";
import SpringGala2022Image4 from "../assets/images/PastEvents/SpringGala2022/Photos/image4sg2022.jpg";
import SpringGala2022Image5 from "../assets/images/PastEvents/SpringGala2022/Photos/image5sg2022.jpg";
import SpringGala2022Image6 from "../assets/images/PastEvents/SpringGala2022/Photos/image6sg2022.jpg";

// Spring Gala 2022 - Sponsors
import SpringGala2022Sponsor1 from "../assets/images/PastEvents/SpringGala2022/Sponsors/EverestHHC.jpg";
import SpringGala2022Sponsor2 from "../assets/images/PastEvents/SpringGala2022/Sponsors/FalcoGroup.png";
import SpringGala2022Sponsor3 from "../assets/images/PastEvents/SpringGala2022/Sponsors/GavonTransport.png";
import SpringGala2022Sponsor4 from "../assets/images/PastEvents/SpringGala2022/Sponsors/IdliStreet.jpg";
import SpringGala2022Sponsor5 from "../assets/images/PastEvents/SpringGala2022/Sponsors/KOC.png";
import SpringGala2022Sponsor6 from "../assets/images/PastEvents/SpringGala2022/Sponsors/SunilSainiRealEstate.png";

// Community Events -> Now Past Events
import CateringForACause from "../assets/images/CommunityEvents/CateringForACause.jpeg";
import FashionBazaar from "../assets/images/CommunityEvents/FashionBazzaar.jpeg";
import GargageSale2024 from "../assets/images/CommunityEvents/GarageSale2024.jpg";
import KaraokeThursdays from "../assets/images/CommunityEvents/KaraokeThursdays.jpeg";


const PastEvents = () => {
  useEffect(() => {
    document.title = "Past Events";
  }, []);

  const pastEvents = [
    {
      id: 1,
      name: "Spring Gala 2025",
      date: "May 3, 2025",
      location: "Pearl Banquet Hall, Mississauga",
      description:
  "As spring awakens, vibrant colors and fresh energy fill our lives with joy. Join Fund Homecare Canada for our Spring Gala 2025, an evening dedicated to celebrating life and supporting quality of life with fun and purpose.\n\n" +
  "This year, we embrace the Cinco de Mayo spirit—expect an explosion of color, festivity, and joy! Dress in lively reds, blues, whites, or florals and help us brighten spirits for everyone around.\n\n" +
  "Sincerely,\nThe Fund Homecare Canada team.",
      image: SpringGala2025,
      sponsors:
      [
        SpringGala2024Sponsor15,
        SpringGala2024Sponsor9,
        SpringGala2024Sponsor5,
        SpringGala2025Sponsor1,
        SpringGala2025Sponsor2,
        SpringGala2025Sponsor3,
        SpringGala2025Sponsor4,
        SpringGala2025Sponsor5,
        SpringGala2025Sponsor6,
        SpringGala2025Sponsor7,
        SpringGala2025Sponsor8,
        SpringGala2025Sponsor9,
        SpringGala2025Sponsor10
      ],
    },
    {
      id: 2,
      name: "Silent Disco",
      date: "October 12, 2024",
      location: "Pearl Banquet Hall, Mississauga",
      description: "Fund Homecare Canada is extremely excited to present our first fundraising event towards a great cause. Fund Homecare Canada provides funding for families needing homecare based services for Palliative Cancer patients in Ontario.\n\n" +
  "Please join us for a night of music, dancing, dinner and games. Together, we’ll make it a night you won’t forget while supporting a great cause.\n\n" +
  "Sincerely,\nThe Fund Homecare Canada team.",
      image: SilentDisco,
    },
    {
      id: 3,
      name: "Fund Homecare Fashion Bazaar",
      date: "August 3rd, 2024",
      description: "Get ready for an exciting Fashion Bazaar on August 3, 2024, from 2 to 6 PM! Join us for an afternoon of style and fun, featuring a stunning collection of clothing, accessories, and more, all at unbeatable prices.\n\nEvery dollar raised will go directly to Fund Homecare Canada, helping to provide funding for families needing homecare-based services for Palliative Cancer patients in Ontario.",
      image: FashionBazaar,
    },
    {
      id: 4,
      name: "Catering For A Cause",
      date: "July 28th, 2024",
      description: "Indulge in the flavors of Jamaica with our Delivered Jamaican Dishes! Treat yourself to a mouthwatering meal delivered right to your door, featuring two delicious options.\n\nOur Non-Vegetarian dish includes Jerk Chicken, Rice & Peas, and Coleslaw, while our Vegetarian option offers Cabbage Vegetable, Rice & Peas, and Sweet Potato.\n\nEach meal is only $20 and supports Fund Homecare Canada, helping to provide funding for families needing homecare-based services for Palliative Cancer patients in Ontario.",
      image: CateringForACause,
    },
    {
      id: 5,
      name: "Fund Homecare Garage Sale",
      date: "July 27th, 2024",
      description: "Join us this Saturday for a fantastic garage sale to support Fund Homecare Canada! From 8 AM to 2 PM, we’ll have a wide array of items, including furniture, clothing, electronics, books, and more, all generously donated by our community. Every dollar raised will go directly to Fund Homecare Canada, helping to provide funding for families needing homecare-based services for Palliative Cancer patients in Ontario.",
      image: GargageSale2024,
    },   
    {
      id: 6,
      name: "Spring Gala 2024",
      date: "May 04, 2024",
      location: "Speranza Banquet Hall, Brampton",
      description:
      "Fund Homecare Canada is extremely excited to present our first fundraising event towards a great cause. Fund Homecare Canada provides funding for families needing homecare-based services for Palliative Cancer patients in Ontario.\n\n" +
  "Please join us for an afternoon of games, music, and great food.\n\n" +
  "Sincerely,\nThe Fund Homecare Canada team.",
      image: SpringGala2024,
      gallery: [
        SpringGala2024Image1, 
        SpringGala2024Image2,
        SpringGala2024Image3,
        SpringGala2024Image4,
        SpringGala2024Image5,
        SpringGala2024Image6,
        SpringGala2024Image7,
        SpringGala2024Image8,
        SpringGala2024Image9

      ],
      sponsors: [
        SpringGala2024Sponsor1,
        SpringGala2024Sponsor2,
        SpringGala2024Sponsor3,
        SpringGala2024Sponsor4,
        SpringGala2024Sponsor5,
        SpringGala2024Sponsor6,
        SpringGala2024Sponsor7,
        SpringGala2024Sponsor8,
        SpringGala2024Sponsor9,
        SpringGala2024Sponsor10,
        SpringGala2024Sponsor11,
        SpringGala2024Sponsor12,
        SpringGala2024Sponsor13,
        SpringGala2024Sponsor14,
        SpringGala2024Sponsor15
      ]
    },
    {
      id: 7,
      name: "Karaoke 4th Thursdays",
      date: "March 14, 2024",
      description: "Get ready to unleash your inner rock star at Karaoke Night at Lionheart Pub! Join us every 4th Thursday starting at 8 PM for an evening of fun, music, and camaraderie, all while supporting Fund Homecare Canada. Whether you’re a seasoned performer or just looking to have a good time, this is your chance to shine on stage.\n\nEnjoy delicious drinks, great company, and a lively atmosphere as you belt out your favorite tunes. Don’t miss out on the best karaoke experience in town—grab your friends and head to Lionheart Pub for a night to remember and to make a positive impact in our community!",
      image: KaraokeThursdays,
    }, 
    {
      id: 8,
      name: "Malabar Food Fest",
      date: "July 22, 2023",
      location: "Lawns, 2548 Embleton Rd, Brampton",
      description: 
  "Fund Homecare Canada is extremely excited to present our fundraising event towards a great cause. Fund Homecare Canada provides funding for families needing homecare-based services for Palliative Cancer patients in Ontario.\n\n" +
  "Please join us for an evening of games, music, and great food.\n\n" +
  "For some fun videos!\n\n" +
  "Sincerely,\nThe Fund Homecare Canada team.",
      image: InviteMalabar,
      gallery: [
        Malabar2023Image1,
        Malabar2023Image2,
        Malabar2023Image3,
        Malabar2023Image4,
        Malabar2023Image5,
        Malabar2023Image6,
        Malabar2023Image7,
        Malabar2023Image8
      ],
    },
    {
      id: 9,
      name: "Spring Gala 2023",
      date: "May 6, 2023",
      location: "Swagat Banquet Hall, Missisauga",
      description:
      "Fund Homecare Canada is extremely excited to present our first fundraising event towards a great cause. Fund Homecare Canada provides funding for families needing homecare-based services for Palliative Cancer patients in Ontario.\n\n" +
  "Please join us for a night of pageant, dancing, dinner, and games. Together, we’ll make it a night you won’t forget while supporting a great cause.\n\n" +
  "Sincerely,\nThe Fund Homecare Canada team.",
      image: SpringGala2023,
      sponsors: [
        SpringGala2023Sponsor1,
        SpringGala2023Sponsor2,
        SpringGala2023Sponsor3,
        SpringGala2023Sponsor4,
        SpringGala2023Sponsor5,
        SpringGala2023Sponsor6,
        SpringGala2023Sponsor7,
        SpringGala2023Sponsor8,
        SpringGala2023Sponsor9
      ],
      gallery: [
        SpringGala2023Image1, 
        SpringGala2023Image2,
        SpringGala2023Image3,
        SpringGala2023Image4,
        SpringGala2023Image5,
        SpringGala2023Image6,
        SpringGala2023Image7,
        SpringGala2023Image8,
        SpringGala2023Image9
      ],
    },
    {
      id: 10,
      name: "Spring Gala 2022",
      date: "June 18, 2022",
      location: "Pearl Banquet Hall, Mississauga",
      description: "Fund Homecare Canada is extremely excited to present our first fundraising event towards a great cause. Fund Homecare Canada provides funding for families needing homecare based services for Palliative Cancer patients in Ontario.\n\n" +
  "Please join us for a night of music, dancing, dinner and games. Together, we’ll make it a night you won’t forget while supporting a great cause.\n\n" +
  "Sincerely,\nThe Fund Homecare Canada team.",
      image: SpringGala2022,
      sponsors: [
        SpringGala2022Sponsor1,
        SpringGala2022Sponsor2,
        SpringGala2022Sponsor3,
        SpringGala2022Sponsor4,
        SpringGala2022Sponsor5,
        SpringGala2022Sponsor6
      ],
      gallery: [
        SpringGala2022Image1, 
        SpringGala2022Image3,
        SpringGala2022Image4,
        SpringGala2022Image5,
        SpringGala2022Image6,
      ],

    },
  ];

  return (
    <>
      {/* New Header Section */}
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
                      {/* Title for Newsletter Page */}
                      <div>
                          <h1 className="font-roboto font-bold text-[42px] sm:text-[45px] md:text-[52px] lg:text-[60px] leading-none text-white">
                              Past Events
                          </h1>
                      </div>
                      <p className="font-roboto font-normal text-[24px] sm:text-[24px] md:text-[25px] lg:text-[25.45px] leading-[140%] text-white mb-4">
                      A Look Back at Our Impactful Gatherings
                      </p>

                      {/* No button here unless you specifically need one for this page (e.g., scroll to archive) */}
                  </div>
              </div>
          </div>
      </section>
      <div className="bg-[#CFE6EF]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Make an Impact</h2> {/* Slightly larger and bolder font */}
          <div className="h-0.5 bg-gray-400 w-1/5 mx-auto mb-8"></div> {/* Thin line */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"> {/* Adjusted text size and constrained width for readability */}
              All proceeds from the event will go toward supporting palliative cancer patients—
              giving them comfort, dignity, and precious time with their loved ones. Over the years,
              our galas have raised an average of $20,000 per event, enabling us to provide essential
              PSW (Personal Support Worker) services to 15 beneficiaries. This year, we aim to go even
              further—with your support, we can make a greater impact.
          </p>
          </div>

          <div className="space-y-10 max-w-7xl mx-auto px-4">
            {pastEvents.map((event) => (
              <PastEventsCard key={event.id} event={event} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/events"
              className="flex items-center text-white px-5 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out no-underline"
              style={{ backgroundColor: "#54749D" }}
            >
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastEvents;