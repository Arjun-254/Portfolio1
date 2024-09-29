import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ModelCanvas from "./canvas/Model";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const Statement = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      once: false,
      easing: "cubic-bezier(.02,.66,.85,.19)",
      offset: 100,
    });
  }, []);

  return (
    <section
      className="relative w-full h-screen mx-auto flex flex-row"
      data-aos="fade-down"
      data-aos-mirror="true"
    >
      <div
        className={`${styles.paddingX} absolute xs:ml-4 md:ml-16 top-[120px] max-w-7xl mx-auto flex flex-row items-start`}
      >
        <div className="">
          <h1
            className={`${styles.heroHeadText} text-white`}
            style={{
              textShadow: "0 0 5px rgba(108, 103, 249, 0.88)",
            }}
          >
            Arjun's Portfolio
          </h1>
          <p
            className={`${styles.heroSubText} text-gray-400 font-sans text-xs sm:text-xs md:text-md `}
          >
            <Typewriter
              words={[
                "I'm a curious and passionate Computer Science major, dedicated to mastering the intricacies of Machine Learning and WebDev.",
              ]}
              cursor
              cursorStyle=""
              loop={1}
              typeSpeed={20}
              deleteSpeed={20}
            />
          </p>
        </div>
      </div>
      <ModelCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a>
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex justify-center items-center"
          >
            <span aria-hidden="true" className=" text-4xl font-extrabold">
              &darr;
            </span>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Statement;
