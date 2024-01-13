import React, { useEffect } from "react";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
import img from "../assets/web.png";
import img1 from "../assets/mobile.png";
import img2 from "../assets/creator.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "./Carousel";

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
        className="mx-10 mt-4 text-secondary text-[17px] w-3xl flex justify-center items-cente text-center"
        data-aos="fade-down"
        data-aos-mirror="true"
      >
        I am a highly motivated college student eager to start an internship or
        research opportunity that will allow me to utilize my problem-solving
        skills and attention to detail to further develop my abilities in the
        field of computer science. I'm a quick learner and excited to learn new
        frameworks and languages.
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

      <div data-aos="fade-down" data-aos-mirror="true">
        <Carousel />
      </div>
    </div>
  );
};

export default About;
