import React, { useEffect } from "react";
import { IoMdPaper } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

import RP1 from "../assets/RP1.png";
import Veritas from "../assets/Veritas-nli.png";

import Aos from "aos";
import "aos/dist/aos.css";

const researchPapers = [
  {
    name: "VERITAS-NLI : Validation and Extraction of Reliable Information Through Automated Scraping and Natural Language Inference",
    imageSrc: Veritas,
    url: "https://authors.elsevier.com/a/1kgih3OWJ9CRjQ",
    status: "EAAI - Engineering Applications of Artificial Intelligence",
    statusColor: "text-green-500"
  },
  {
    name: "Predicting Solar Energy Generation with Machine Learning based on AQI and Weather Features",
    imageSrc: RP1,
    url: "https://arxiv.org/abs/2408.12476",
    status: "Accepted and Presented at AISD2024 -> 2nd Best Paper Award",
    statusColor: "text-green-500"
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
        className="flex flex-col md:flex-row items-stretch justify-center space-y-4 md:space-y-0 md:space-x-4 pb-2"
        style={{ overflow: "hidden" }}
      >
        {researchPapers.map((project) => (
          <div
            key={project.name}
            className="bg-gray-800 p-3 rounded-lg w-full md:w-1/2 lg:w-1/3 flex flex-col" 
            data-aos="fade-down"
            data-aos-mirror="true"
          >
            <h2 className="text-white font-sans mb-2 text-left text-sm sm:text-xs md:text-md lg:text-lg">
              <i>{project.name}</i>
            </h2>
            <div className="flex justify-center items-center bg-gray-700 rounded-lg overflow-hidden flex-grow">
              <img
                src={project.imageSrc}
                alt={project.name}
                className="max-w-full max-h-[40vh] object-contain"
              />
            </div>
            <div className="flex flex-col items-center mt-2 space-y-2">
              <div className="flex items-center justify-center w-full">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-r from-violet-900 to-violet-950 rounded-lg p-1 flex flex-wrap items-center justify-center w-4/6"
                >
                  Read Paper <IoMdPaper className="ml-2" />
                </a>
              </div>
              <div className="flex items-center justify-center w-full">
                <FaCircle className={`mr-2 ${project.statusColor}`} size={10} />
                <span className="text-white text-xs lg:text-base text-center">
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
