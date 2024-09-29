import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { Footer } from "../components/Footer";
import StarsCanvas from "../components/StarsCanvas";
import Statement from "../components/Statement";

export const Landing = () => {
  return (
    <div className="relative no-scrollbar">
      <div className="bg-cover bg-no-repeat bg-gradient-to-r from-black via-gray-900 to-black bg-center">
        <StarsCanvas/>
        <Navbar />
        <Statement/>
        <About />
        <Footer />
      </div>
    </div>
  );
};
