"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { XmarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const navLinks = [
  { href: "#about", title: "About" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          Home
        </Link>
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
                <NavLink href={link.href} title={link.title} />
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
