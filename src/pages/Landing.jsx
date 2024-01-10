import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

export const Landing = () => {
  return (
    <div className="relative z-0 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
};
