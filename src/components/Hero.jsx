import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";
import ComputersCanvas2 from "./canvas/Computers2";
import BallCanvas from "./canvas/Ball";
import EarthCanvas from "./canvas/Earth";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  const HeroVariants = {
    initial: { opacity: 0, x: -15, y: 15 },
    animate: { opacity: 1, x: 0, y: 0, transition: { duration: 1.0 } },
  };
  return (
    <section className="relative w-full h-screen mx-auto flex flex-row">
      <div
        className={`${styles.paddingX} absolute xs:ml-4 md:ml-16 top-[120px] max-w-7xl mx-auto flex flex-row items-start`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-purple-400" />
          <div className="w-1 h-72 violet-gradient" />
        </div>
        <div className="">
          <motion.div
            variants={HeroVariants}
            initial="initial"
            animate="animate"
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              {" "}
              Hi, I'm <span className="text-purple-400">Arjun Shah</span>
            </h1>
            <p
              className={`${styles.heroSubText} text-gray-200 font-semibold font-sans text-md mt-2`}
            >
              I'm a curious and passionate Computer Science major,dedicated to
              mastering the intricacies of Machine Learning and WebDev.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="justify-center items-center w-full">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a>
          <div className=" flex justify-center items-center w-4 h-8 rounded-3xl border-4 border-stone-50">
            <motion.div
              animate={{
                y: [-10, 8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-slate-50 flex justify-center items-center"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
