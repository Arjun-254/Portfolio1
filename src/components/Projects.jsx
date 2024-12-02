import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import StockWatchLanding from "../assets/StockWatchLanding.jpg";
import StockWatchDashboard from "../assets/StockWatchDashboard.jpg";

import RailwayBuddyLanding from "../assets/RailwayBuddyLanding.jpg";
import RailwayBuddyChat from "../assets/SihChat.jpg";

import AuthenticaLanding from "../assets/AuthenticaLanding.jpeg";

import CorrectifyLanding from "../assets/CorrectifyLanding.jpg";
import CorrectifyChat from "../assets/CorrectifyChat.jpg";

import CurateSage from "../assets/CurateSage.png";
import CurateSageModal from "../assets/CurateSageModal.png";

import MedicalBot from "../assets/MedicalBot.png";

import PortolioLanding from "../assets/PortolioLanding.jpg";
import ReviewAnalytics from "../assets/ReviewAnalytics.jpg";
import AskYourCSV from "../assets/AskYourCSV.jpg";
import NewsIntegrity from "../assets/IPD.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

SwiperCore.use([EffectCoverflow, Autoplay, Navigation]);

const projects = [
  {
    name: "StockWatch",
    imageSrc: StockWatchLanding,
    modalSrc: StockWatchDashboard,
    link: "https://stock-watch-ten.vercel.app/",
    url: "https://github.com/Arjun-254/PS3-Licht_Den_Code/tree/frontend",
    winner: "HackRx 4.0 Winner",
    tagline: "Developed a Stock Recommendation Engine",
    text: `• Created a stock recommendation and stock-price tracking full-stack web application with Google reCAPTCHA-v2 and
            DeepFace face authentication for a secure login process.
            • Utilizes an ensemble of machine learning techniques, including a BERT model for sentiment analysis of financial news,
            a CNN-LSTM for price forecasting, and hybrid recommender systems for stock selection.
            • Features include interactive stock price graphs, personalized watchlists, and real-time financial news updates.`,
  },
  {
    name: "RailwayBuddy",
    imageSrc: RailwayBuddyLanding,
    url: "https://github.com/Arjun-254/SIH1348_LichtDenCode/tree/ML",
    modalSrc: RailwayBuddyChat,
    winner: "SIH '23 Winner",
    tagline: "Multilingual Railway Assistant (SIH1348)",
    text: `• Developed a Natural Language Translation Engine for announcements and distribution of information at stations.
          • Whisper-V2-Large (STT), mBART-50 translator and Coqui-TTS enable swift speech-to-speech translation.
          • A Gemini-based chat-bot handles user queries and IndicNER is used to identify locations in transcribed text and
          integrated with Google Maps to display train routes and timings between detected locations.
          • Implemented IVRS for station authorities, facilitating communication with passengers in their preferred language
          through calls and SMS via Twilio.`,
  },
  {
    name: "CurateSage",
    imageSrc: CurateSage,
    url: "https://github.com/Arjun-254/CurateSage---Techgium",
    modalSrc: CurateSageModal,
    winner: "Techgium Semi-Finalist",
    tagline: "Personalized Course Recommendation System",
    text: `• Built a course recommendation website using heterogeneous Graph Neural Networks with PyTorch Geometric to provide
            context-aware recommendations, modeling relationships between students, courses, and grades.
            • Utilized the open-university-learning-analytics and course-reviews datasets for Graph Neural Network training.
            • Designed a lightweight GNN model with SAGEConv layers, achieving a CPU inference time of 0.03 seconds.
            • Enhanced model explainability using GNNExplainer and CaptumExplainer.`,
  },
  {
    name: "Correctify",
    imageSrc: CorrectifyLanding,
    modalSrc: CorrectifyChat,
    url: "https://github.com/Arjun-254/Correctify-HackX/tree/Frontend",
    winner: "HackX '23 Finalist",
    tagline: " Text Correction Engine",
    text: `• Built using ReactJS, FastAPI, Machine Learning and ThreeJS. \n
    •  Leveraging Generative AI to Transform your writing.\n
    • Made a unified platform that uses machine learning models for Multilingual Input, Auto-Completion(BERT) and
    Auto-Correction (Flan-T5) and OCR creating a versatile toolset capable of addressing a wide array of data entry and data correction scenarios.\n
    `,
  },
  {
    name: "Medical Question-Answering System",
    imageSrc: MedicalBot,
    url: "https://github.com/Arjun-254/SupportivMLE-InternFinetune",
    modalSrc: MedicalBot,
    tagline: "Fine tuned LLM's using LoRA on device.",
    text: `• The goal was to develop a medical chatbot using an open-source model. Initially fine-tuned GPT-2 but switched to
            Gemma-2B due to GPT-2’s excessive hallucinations likely caused by the lack of a dedicated context column in the data.
            • Fine-tuned a quantized Gemma-2B model on a dataset of medical Q&A pairs using MLX-LoRA, enabling efficient
            training with reduced memory requirements, which enhanced performance in handling medical queries.
            • Deployed final model with documentation on Hugging Face and integrated it with Whisper-V2 to transcribe patient
            queries, allowing for more natural interactions.`,
  },
  {
    name: "Authentica",
    imageSrc: AuthenticaLanding,
    url: "https://github.com/Arjun-254/LichtDenCode_LOC5.0",
    winner: "LOC 5.0 Winner",
    tagline: " Digital Identity Website",
    text: `• Developed a captivating 3D scene using the React and Three.js libraries. \n
    • The scene features a lock-shaped object and includes smooth camera controls and environment presets to provide an immersive user experience. \n
    •  Used machine learning algorithms such as PaddleOCR and governmentAPIs to check the authenticity of documents.\n
    `,
  },
  {
    name: "Arjun's Portfolio",
    imageSrc: PortolioLanding,
    url: "https://github.com/Arjun-254/Portfolio1",
    link: "https://portfolio-arjunshah.vercel.app/",
    tagline: " My Latest Portfolio",
    text: `• Developed a captivating 3D portfolio using React and Three.js. \n
    • Gives you a quick peek into my journey, skills, and wins, so you know what I bring to the table!\n
    • Integrates dynamic Three.js models for visually captivating and interactive project displays.\n
    `,
  },

  {
    name: "Ask Your CSV (GPT-3.5)",
    imageSrc: AskYourCSV,
    url: "https://github.com/Arjun-254/ask_your_csv",
    winner: "",
    link: "https://ask-your-csv1.streamlit.app/",
    tagline: " CSVQueryBot",
    text: `• Transformed natural language queries into actionable commands, optimizing data analysis for user-uploaded CSV files.\n
    • Utilized LangChain to enable the transformation of user questions into actionable data queries. \n
    • Integrated OpenAI API's to facilitate this process on user-uploaded CSV files. \n`,
  },
];

const Modal = ({ project, onClose, isOpen }) => {
  const closeModal = () => {
    onClose();
  };

  const renderTextWithLineBreaks = (text) => {
    if (!text) return null;

    const textParts = text.split("\n");
    return textParts.map((part, index) => (
      <p key={index} className="text-gray-400 mb-2">
        {part}
      </p>
    ));
  };

  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        transition-opacity md:w-full md:h-full
      `}
      data-aos="fade-down"
      data-aos-mirror="true"
    >
      <div
        className={`relative bg-gray-900 p-8 rounded-lg w-full h-full overflow-y-auto scrollbar lg:no-scrollbar flex flex-col sm:flex-row`}
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
        >
          <RxCross1 />
        </button>

        <div className="mb-4 text-left sm:w-1/2">
          <h2 className="text-xl md:text-xl lg:text-3xl font-bold mb-4">
            {project.name}
          </h2>
          <p className="text-gray-400 text-sm sm:text-sm md:text-md lg:text-lg font-semibold">
            {project.tagline}
          </p>
          <p className="text-white text-md md:text-xs lg:text-lg font-sans font-thin mt-4">
            {renderTextWithLineBreaks(project.text)}
          </p>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center mb-4 w-full md:w-11/12">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-r from-violet-900 to-violet-950 rounded-lg p-2 flex flex-wrap items-center justify-center sm:mb-0 sm:mr-2 sm:w-5/6"
            >
              Github <FaGithub className="ml-2" />
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-r from-violet-950 to-violet-900 rounded-lg p-2 m-1 flex flex-wrap items-center justify-center sm:w-5/6 "
              >
                Visit Link <FaExternalLinkAlt className="ml-2" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-1 sm:mt-0 sm:w-1/2">
          {project.modalSrc ? (
            <img
              src={project.modalSrc}
              alt={project.name}
              className="w-full h-auto rounded-lg border-2 border-gray-300"
              style={{ aspectRatio: "16/9" }}
            />
          ) : (
            <img
              src={project.imageSrc}
              alt={project.name}
              className="w-full h-auto rounded-lg border-2 border-gray-300"
              style={{ aspectRatio: "16/9" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const placeholderImageUrl = projects.length > 0 ? projects[0].imageSrc : "";
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
      easing: "cubic-bezier(.02,.66,.85,.19)",
      offset: 60,
    });
  }, []);

  const [openedModalProject, setOpenedModalProject] = useState(null);

  const openModal = (project) => {
    setOpenedModalProject(project);
  };

  const closeModal = () => {
    setOpenedModalProject(null);
  };

  return (
    <div className="relative">
      <div className="hidden sm:block">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
          }}
          autoplay={{
            delay: 10000,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Navigation]}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          initialSlide={0}
          className="mySwiper"
        >
          {openedModalProject && (
            <Modal
              project={openedModalProject}
              onClose={closeModal}
              isOpen={true}
            />
          )}
          {projects.map((project) => (
            <SwiperSlide key={project.name} className="">
              <div className="bg-gray-800 p-3 h-full rounded-lg flex flex-col justify-between overflow-y-auto no-scrollbar">
                {project.winner && (
                  <div
                    className="absolute top-1 right-1 p-2 bg-yellow-400 text-black text-md font-sans font-bold text-xs rounded-lg"
                    style={{
                      boxShadow: "0 0 10px rgba(255, 255, 0, 0.5)",
                    }}
                  >
                    {project.winner}
                  </div>
                )}
                <div className="flex-grow">
                  <h2 className="text-white font-sans font-bold mb-4 text-left items-center text-lg sm:text-sm md:text-xl lg:text-2xl">
                    {project.name}
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={project.imageSrc || placeholderImageUrl}
                    alt={project.name}
                    className="w-full h-full rounded-lg"
                    style={{ aspectRatio: "16/9" }}
                    onClick={() => openModal(project)}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Click for more"
                    data-tooltip-place="top"
                  />
                  <Tooltip id="my-tooltip" />
                </div>
                <div className="flex flex-row justify-center mt-1">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gradient-to-r from-violet-900 to-violet-950 rounded-lg p-1 flex flex-wrap items-center justify-center mr-2 w-1/2"
                  >
                    Github <FaGithub className="ml-2" />
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gradient-to-r from-violet-950 to-violet-900 rounded-lg p-1 flex flex-wrap items-center justify-center w-1/2"
                    >
                      Visit Link <FaExternalLinkAlt className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="sm:hidden">
        {/* For smaller screens (phones) */}
        <div
          className="flex flex-col space-y-4 pb-5"
          style={{ overflow: "hidden" }}
        >
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gray-800 p-3 rounded-lg"
              data-aos="slide-up"
              data-aos-mirror="true"
            >
              {openedModalProject === project && (
                <Modal
                  project={openedModalProject}
                  onClose={closeModal}
                  isOpen={true}
                />
              )}
              {project.winner && (
                <div
                  className="absolute top-1 right-1 p-2 bg-yellow-400 text-black text-md font-sans font-bold text-xs rounded-lg"
                  style={{
                    boxShadow: "0 0 10px rgba(255, 255, 0, 0.5)",
                  }}
                >
                  {project.winner}
                </div>
              )}
              <h2 className="text-white font-sans font-bold mb-2 text-left text-lg">
                {project.name}
              </h2>
              <img
                src={project.imageSrc || placeholderImageUrl}
                alt={project.name}
                className="w-full h-full rounded-lg"
                style={{ aspectRatio: "16/9" }}
                onClick={() => openModal(project)}
              />

              <div className="flex flex-row justify-center mt-1">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-r from-violet-900 to-violet-950 rounded-lg p-1 flex flex-wrap items-center justify-center mr-2 w-1/2"
                >
                  Github <FaGithub className="ml-2" />
                </a>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gradient-to-r from-violet-950 to-violet-900 rounded-lg p-1 flex flex-wrap items-center justify-center w-1/2"
                  >
                    Visit Link <FaExternalLinkAlt className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
