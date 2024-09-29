import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SIH from "../assets/SIH.jpeg";
import Bajaj from "../assets/Bajaj.jpeg";
import LOC from "../assets/LOC.jpeg";
import Unstop from "../assets/Unstop.png";
import Amazon from "../assets/Amazon.png";

const data = [
  { name: "Smart India Hackathon", position: "Winner", prize: "1 Lakh INR", image: SIH },
  { name: "Bajaj HackRx 4.0", position: "Winner", prize: "1 Lakh INR", image: Bajaj },
  { name: "Amazon ML Challenge", position: "All India Rank 4", prize: "", image: Amazon },
  { name: "Unstop Awards", position: "Unstoppable Leaders 2024", prize: "", image: Unstop },
  { name: "LOC 5.0", position: "First Runner Up", prize: "30,000 INR", image: LOC },
];

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    arrows: false,
  };

  return (
    <div className="w-5/6 sm:w-5/6 md:w-4/6 mx-auto rounded-md">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="bg-gray-800 p-3 h-full rounded-lg flex flex-col justify-between overflow-y-auto no-scrollbar relative">
            <div className="flex-grow flex items-center justify-between mb-2">
              <h2 className="text-white font-sans font-bold text-left text-sm md:text-xl lg:text-2xl">
                {item.name}
              </h2>
              {item.position && (
                <div className="p-2 bg-yellow-400 text-black font-semibold rounded-lg text-xs sm:text-xs md:text-md lg:text-lg" style={{ boxShadow: "0 0 10px rgba(255, 255, 0, 0.5)" }}>
                {item.position}
                {item.prize && <span> - {item.prize}</span>}
              </div>
              )}
            </div>
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full rounded-lg"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
            {/* {item.prize && (
              <p className="text-xl font-semibold font-sans text-gray-400 mt-2">
                Prize: {item.prize}
              </p>
            )} */}
          </div>
        ))}
      </Slider>
    </div>
  );
};
