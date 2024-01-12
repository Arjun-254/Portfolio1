import React, { useState, useEffect } from "react";
import Laptop from "../components/canvas/Laptop";
import { Typewriter } from "react-simple-typewriter";
import { styles } from "../styles";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Aos from "aos";
import "aos/dist/aos.css";

export const Test = () => {
  const [laptopOpen, setLaptopOpen] = useState(false);
  const [next, setNext] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "cubic-bezier(.02,.66,.85,.19)",
      offset: 120,
    });
  }, []);

  return (
    <>
      {!next && (
        <div className="min-h-screen flex flex-row justify-center items-center relative ">
          {!laptopOpen && (
            <div
              className="w-5/6 lg:w-1/2 h-52 bg-gray-800 rounded-md flex flex-col z-10 "
              data-aos="fade-down"
              data-aos-mirror="true"
            >
              <div className="bg-gray-700 flex flex-row items-center justify-end rounded-md p-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="flex-1 flex flex-col p-4 text-gray-200 font-mono ">
                <div className=" mb-2">
                  <p className="text-md font-mono">
                    <strong>Arjuns-Portfolio : </strong>
                    <Typewriter
                      words={[
                        " Greetings and welcome to my portfolio. Delve into the enigma below to unravel the essence of my craft.",
                        " Click on the Laptop to continue",
                      ]}
                      cursor
                      cursorStyle="|"
                      loop={1}
                      typeSpeed={10}
                      deleteSpeed={20}
                      delaySpeed={10000}
                    />
                  </p>
                </div>
              </div>
              <div className="w-full bottom-0 flex justify-center items-center z-10">
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
                    <span
                      aria-hidden="true"
                      className="text-4xl font-extrabold text-gray-200"
                    >
                      &darr;
                    </span>
                  </motion.div>
                </a>
              </div>
            </div>
          )}
          <Laptop
            className={`z-40`}
            onOpenChange={(isOpen) => setLaptopOpen(isOpen)}
            onNextChange={(isNext) => setNext(isNext)}
          />
          {laptopOpen && (
            <div
              className="w-5/6 lg:w-1/2 h-fit bg-gray-800 rounded-md flex flex-col z-10 absolute top-5 "
              data-aos="fade-down"
              data-aos-mirror="true"
            >
              <div className="bg-gray-700 flex flex-row items-center justify-end rounded-md p-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="flex-1 flex flex-col p-4 h-fit text-gray-200 font-mono ">
                <div className=" mb-2">
                  <p className="text-md font-mono">
                    <strong>Arjuns-Portfolio : </strong>
                    <Typewriter
                      words={[" Click on the Screen "]}
                      cursor
                      cursorStyle="|"
                      loop={1}
                      typeSpeed={20}
                      deleteSpeed={20}
                      delaySpeed={10000}
                    />
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {next && (
        <div className="relative z-0 bg-gradient-to-r from-black via-gray-900 to-black">
          <div className="bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
            <About />
          </div>
        </div>
      )}
    </>
  );
};
