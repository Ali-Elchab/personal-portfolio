"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRef } from "react";
import MenuOverlay from "./MenuOverlay";
import { XmarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Logo from "../../../public/E.svg";

const Navbar = ({ aboutRef, projectRef, emailRef }) => {
  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };

  const navLinks = [
    { ref: aboutRef, title: "About" },
    { ref: projectRef, title: "Projects" },
    { ref: emailRef, title: "Contact" },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-gray-600">
      <div className="flex flex-wrap items-center justify-between  p-6 lg:px-10 xl:px-16">
        <div class="w-40 h-16 flex items-center justify-start">
          <Image src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white text-slate-200 "
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          ) : (
            <button
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white text-slate-200 "
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToRef(link.ref)}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-2xl rounded md:p-0 hover:text-white"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
