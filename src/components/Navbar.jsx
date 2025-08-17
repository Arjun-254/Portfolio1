import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/logo.png";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row">
      <header className="absolute inset-x-0 top-0  bg-gradient-to-r from-gray-900 to-black">
        <nav
          className="flex flex-row items-center justify-between p-2  lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1 z-10">
            <a
              href="https://github.com/Arjun-254"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
          <div className="flex lg:hidden z-10">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <a
                href="https://drive.google.com/file/d/1fEj9QtEmjoKKqvLU4DAanK-VpKIwOBH7/view?usp=sharing?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans leading-6 text-white bg-gradient-to-r from-violet-800 to-violet-950 rounded-lg p-2"
                style={{
                  boxShadow: "0 0 5px rgba(108, 103, 249, 0.88)",
                }}
              >
                Resume
              </a>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className=" z-10 text-md font-semibold leading-6 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 rounded-lg "
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </a>

            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 rounded-lg">Find Jobs</a>*/}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end z-10">
            <a
              href="https://drive.google.com/file/d/1B1EI3OK62zamEI860CYb_KHMpf4PYtPJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans leading-6 text-white bg-gradient-to-r from-violet-800 to-violet-950 rounded-lg p-2"
              style={{
                boxShadow: "0 0 5px rgba(108, 103, 249, 0.88)",
              }}
            >
              Resume
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
