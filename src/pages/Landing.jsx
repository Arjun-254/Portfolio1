import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import { Footer } from "../components/Footer";
import StarsCanvas from "../components/StarsCanvas";

export const Landing = () => {
  return (
    <div className="relative no-scrollbar">
      <div className="bg-cover bg-no-repeat bg-gradient-to-r from-black via-gray-900 to-black bg-center">
        <StarsCanvas/>
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div>
    </div>
  );
};
