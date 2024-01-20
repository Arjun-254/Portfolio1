import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row  ">
      <header className="absolute inset-x-0 top-0  bg-gradient-to-r from-gray-800 to-black">
        <nav
          className="flex flex-row items-center justify-between p-2  lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={image} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <p className="text-xs font-semibold leading-6 text-purple-400 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2">
                {" "}
                Arjun Shah | WebDev + ML
              </p>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-md font-semibold leading-6 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 rounded-lg "
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </a>

            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 rounded-lg">Find Jobs</a>*/}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <p className="text-md font-semibold leading-6 text-purple-400 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2">
              {" "}
              Arjun Shah | WebDev + ML
            </p>
          </div>
        </nav>
      </header>
    </div>
  );
}
