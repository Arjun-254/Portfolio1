import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/SIH.jpeg";
import image2 from "../assets/Bajaj.jpeg";
import image3 from "../assets/LOC.jpeg";

const images = [image1, image2, image3];
const data = [
  { name: "SIH2023", position: "Winner", prize: "1 Lakh INR" },
  { name: "Bajaj HackRx 4.0", position: "Winner", prize: "1 Lakh INR" },
  { name: "LOC 5.0", position: "First Runner Up", prize: "30,000 INR" },
];

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
  };

  return (
    <div className="w-5/6 sm:w-5/6 d:w-4/6 mx-auto mt-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-[40vh] lg:h-[60vh] rounded-md overflow-hidden"
          >
            <div className="group relative flex items-center justify-center h-full">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full -z-0 absolute rounded-md transition-all transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-90 rounded-md">
                <div className="text-center ">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans">
                    {data[index].name}
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold font-sans">
                    {data[index].position}
                  </p>
                  <p className="text-xl font-semibold font-sans text-gray-400">
                    Prize : {data[index].prize}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
