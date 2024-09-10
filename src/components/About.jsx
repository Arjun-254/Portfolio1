import React, { useEffect,useState } from "react";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
// import img from "../assets/web.png";
// import img1 from "../assets/mobile.png";
// import img2 from "../assets/creator.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "./Carousel";
import Projects from "./Projects";
import Research from "./Research";
import { Timeline } from "./Timeline";

import { FaReact } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbHexagonLetterC } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { SiStreamlit } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { AiFillBoxPlot } from "react-icons/ai";
import { SiLatex } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { RiOpenaiFill } from "react-icons/ri";

const cardData = [
  // High-demand Technologies
  { title: "React", Icon: FaReact },
  { title: "JavaScript", Icon: IoLogoJavascript },
  { title: "Python", Icon: FaPython },
  { title: "MySQL", Icon: SiMysql },
  { title: "MongoDB", Icon: SiMongodb },
  { title: "Pytorch", Icon: SiPytorch },
  { title: "TensorFlow", Icon: SiTensorflow },
  { title: "FastAPI", Icon: SiFastapi },
  { title: "OpenAI", Icon: RiOpenaiFill },
  { title: "Sk-learn", Icon: SiScikitlearn },
  { title: "Numpy", Icon: SiNumpy },
  { title: "Pandas", Icon: SiPandas },
  { title: "HTML5", Icon: FaHtml5 },
  { title: "CSS3", Icon: FaCss3Alt },
  

  // Version Control
  { title: "Github", Icon: FaGithubSquare },

  // Other useful technologies
  { title: "TailwindCSS", Icon: SiTailwindcss },
  { title: "Bootstrap", Icon: FaBootstrap },
  { title: "Threejs", Icon: TbBrandThreejs },
  { title: "Streamlit", Icon: SiStreamlit },
  { title: "Opencv", Icon: SiOpencv },
  { title: "MatplotLib", Icon: AiFillBoxPlot },

  // Lower-demand languages/technologies
  { title: "C", Icon: TbHexagonLetterC },
  { title: "Vercel", Icon: IoLogoVercel },
  { title: "Latex", Icon: SiLatex },
];




const Card = ({ title, Icon }) => {
  return (
    <Tilt className="" tiltReverse={true} tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <div
        className="min-w-fit green-pink-gradient rounded-[20px] shadow-card p-[1px] h-30 w-20"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <div className="bg-gradient-to-r from-violet-950 to-gray-950 rounded-[20px] py-6 px-6 flex justify-evenly items-center flex-col group">
          {Icon && <Icon className="w-16 h-16" />}
          <p className="font-thin text-xs mt-1">{title}</p>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "cubic-bezier(.02,.66,.85,.19)",
      offset: 120,
    });
  }, []);

  const [showMore, setShowMore] = useState(false);
  const cardsToShow = showMore ? cardData : cardData.slice(0, 8);

  return (
    <div className="pb-20 mt-[-100px] md:mt-10 lg:mt-0">
      <div
        className="flex justify-center items-center flex-column "
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
      </div>
      <div
        className="flex justify-center items-center flex-column"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <h1 className={`${styles.sectionHeadText}`}>Overview</h1>
      </div>
      <p
        className="mx-auto my-4 text-gray-400 text-xs md:text-base w-5/6 sm:w-5/6 md:w-4/6 text-center font-mono "
        data-aos="fade-down"
        data-aos-mirror="true"
      >
       I am a <strong className="text-white">full-stack and machine learning developer</strong> currently pursuing a major in Computer Science. 
       I am excited to begin my role as a <strong className="text-white">UIUC+ Summer Research Intern.</strong> 
       {' '}Previously, I gained valuable experience as a Software Development Engineer (SDE) intern at HDFC Securities. 
       My diverse background includes both academic and research experiences, complementing my skills in software development and machine learning.
      </p>

      <div
        className="flex justify-center items-center flex-column"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <h1 className={`${styles.sectionHeadText}`}>Tech Stack</h1>
      </div>
      <div className="mt-5 mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-10 justify-center items w-8/12">
        {cardsToShow.map((card, index) => (
          <Card key={index} title={card.title} Icon={card.Icon} />
        ))}
      </div>
      {!showMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowMore(true)}
            className="px-4 py-2 bg-gradient-to-r from-violet-950 to-gray-950 border-2 border-white text-white rounded-md z-10"
          >
            Show More
          </button>
        </div>
      )}
      <div
        className="flex justify-center items-center flex-column"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <h1 className={`${styles.sectionHeadText} pt-10`}>Achievements</h1>
      </div>
      <div className="my-4" data-aos="fade-down" data-aos-mirror="true">
        <Carousel />
      </div>

      <div
        className="flex justify-center items-center flex-column"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <h1 className={`${styles.sectionHeadText} `}>Experience</h1>
      </div>

      <div
        className="my-4 mx-auto flex-grow overflow-y-auto overflow-x-hidden no-scrollbar rounded-xl w-5/6 sm:w-5/6 md:w-5/6"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <Timeline />
      </div>

      <div
        className="flex justify-center items-center flex-column"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <h1 className={`${styles.sectionHeadText} `}>Research</h1>
      </div>

      <div
        className="my-4 mx-auto flex-grow overflow-y-auto overflow-x-hidden no-scrollbar rounded-xl w-5/6 sm:w-5/6 md:w-5/6"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <Research />
      </div>

      <div
        className="flex justify-center items-center flex-column"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <h1 className={`${styles.sectionHeadText} `}>Projects</h1>
      </div>

      <div
        className="my-4 mx-auto flex-grow overflow-y-auto overflow-x-hidden no-scrollbar rounded-xl w-5/6 sm:w-5/6 md:w-5/6"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <Projects />
      </div>
    </div>
  );
};

export default About;
