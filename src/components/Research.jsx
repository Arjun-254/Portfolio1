import React, { useState, useEffect } from "react";
import { IoMdPaper } from "react-icons/io";

import RP1 from "../assets/RP1.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const reserachPapers = [
  {
    name: "Predicting Solar Energy Generation with Machine Learning based on AQI and Weather Features",
    imageSrc: RP1,
    url: "https://www.researchsquare.com/article/rs-3178713/v1",
    status: "Preprint",
  },
];

const Research = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
      easing: "cubic-bezier(.02,.66,.85,.19)",
      offset: 60,
    });
  }, []);

  return (
    <div className="relative">
      <div
        className="flex flex-col items-center justify-center space-y-4 pb-2"
        style={{ overflow: "hidden" }}
      >
        {reserachPapers.map((project) => (
          <div
            key={project.name}
            className="bg-gray-800 p-3 rounded-lg  md:w-1/2 md:h-1/2"
            data-aos="fade-down"
            data-aos-mirror="true"
          >
            <h2 className="text-white font-sans mb-2 text-left text-sm  sm:text-xs md:text-md lg:text-lg">
              <i>{project.name}</i>
            </h2>
            <img
              src={project.imageSrc}
              alt={project.name}
              className="w-full h-full rounded-lg"
              style={{ aspectRatio: "16/9" }}
            />

            <div className="flex flex-row justify-center mt-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-r from-violet-900 to-violet-950 rounded-lg p-1 flex flex-wrap items-center justify-center w-4/6"
              >
                Read Paper <IoMdPaper className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
