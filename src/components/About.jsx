import React, { useEffect } from "react";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
import img from "../assets/web.png";
import img1 from "../assets/mobile.png";
import img2 from "../assets/creator.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "./Carousel";
import Projects from "./Projects";

const Card = ({ title, imageSrc }) => {
  return (
    <Tilt className="" tiltReverse={true} tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <div
        className=" min-w-fit green-pink-gradient rounded-[20px] shadow-card p-[1px]"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        <div className="bg-gradient-to-r from-purple-700 to-blue-900 rounded-[20px] py-16 px-6 flex justify-evenly items-center flex-col group">
          <p className="font-bold max-w-m">{title}</p>
          <img src={imageSrc} alt={title} className="w-16 h-16 mt-1" />
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
        className="mx-auto my-4 text-secondary text-[17px] w-5/6 sm:w-5/6 md:w-4/6 text-center"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        I am pursuing a major in Computer Science and have previously served as
        a SDE intern at HDFC Securities. Additionally, I bring valuable research
        experience to complement my academic background.
      </p>
      <div className="mt-5 mx-auto flex flex-wrap gap-10 justify-center items">
        <Card title="Comp-Sci Major" imageSrc={img} />
        <Card title="Web Developer" imageSrc={img1} />
        <Card title="AI/ML Developer" imageSrc={img2} />
      </div>
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
