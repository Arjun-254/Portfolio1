import React, { Component } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import img from "../assets/web.png";
import img1 from "../assets/mobile.png";
import img2 from "../assets/creator.png";

const About = () => {
  return (
    <div className="pb-20">
      <motion.div
        variants={textVariant()}
        className="flex justify-center items-center flex-column"
      >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
      </motion.div>
      <motion.div
        variants={textVariant()}
        className="flex justify-center items-center flex-column"
      >
        <h1 className={`${styles.sectionHeadText}`}>Overview</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" mx-10 mt-4 text-secondary text-[17px] w-3xl flex justify-center items-center"
      >
        I am a highly motivated college student eager to start an internship or
        research opportunity that will allow me to utilize my problem solving
        skills and attention to detail to further develop my abilities in the
        field of computer science. I'm a quick learner and excited to learn new
        frameworks and languages.
      </motion.p>
      <div className="mt-5 mx-auto flex flex-wrap gap-10 justify-center items">
        <Tilt className="">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-auto green-pink-gradient rounded-[20px] shadow-card p-[1px]"
          >
            <div className="bg-gradient-to-r from-purple-700 to-blue-900 rounded-[20px] py-16 px-6 flex justify-evenly items-center flex-col group">
              <p className="font-bold max-w-m"> Comp-Sci Major </p>
              <img src={img} className="w-16 h-16 mt-1" />
            </div>
          </motion.div>
        </Tilt>
        <Tilt className="">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-auto green-pink-gradient rounded-[20px] shadow-card p-[1px]"
          >
            <div className="bg-gradient-to-r from-purple-700 to-blue-900 rounded-[20px] py-16 px-6 flex justify-evenly items-center flex-col group">
              <p className="font-bold "> Web Developer </p>
              <img src={img1} className="w-16 h-16 mt-1" />
            </div>
          </motion.div>
        </Tilt>
        <Tilt className="">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-auto green-pink-gradient rounded-[20px] shadow-card p-[1px]"
          >
            <div className="bg-gradient-to-r from-purple-700 to-blue-900 rounded-[20px] py-16 px-6 flex justify-evenly items-center flex-col group">
              <p className="font-bold ">AI/ML Developer</p>
              <img src={img2} className="w-16 h-16 mt-1" />
            </div>
          </motion.div>
        </Tilt>
      </div>
    </div>
  );
};

export default About;
