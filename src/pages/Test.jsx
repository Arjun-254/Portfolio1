import React, { useState } from "react";
import Laptop from "../components/canvas/Laptop";
import { Typewriter } from "react-simple-typewriter";
import { styles } from "../styles";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

export const Test = () => {
  const [laptopOpen, setLaptopOpen] = useState(false);
  const [next, setNext] = useState(false);

  return (
    <>
      {!next && (
        <div className="min-h-screen flex flex-row justify-center items-center relative">
          {!laptopOpen && (
            <div className="flex flex-col justify-center items-center w-5/6 text-center mt-[-100px]">
              <p className="font-sans text-gray-200 text-lg z-10">
                <Typewriter
                  words={[
                    "Greetings and welcome to my portfolio. Delve into the enigma below to unravel the essence of my craft.",
                    "Click on the Laptop",
                  ]}
                  cursor
                  cursorStyle=""
                  loop={1}
                />
              </p>
              <div className="w-full mt-10 flex justify-center items-center z-10">
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
            className={`z-20`}
            onOpenChange={(isOpen) => setLaptopOpen(isOpen)}
            onNextChange={(isNext) => setNext(isNext)}
          />
          {laptopOpen && (
            <div className="absolute bottom-10 flex justify-center items-center">
              <p className="font-sans text-gray-200 text-lg">
                <Typewriter
                  words={["(Click on the Screen)"]}
                  cursor
                  cursorStyle=""
                  loop={1}
                />
              </p>
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
