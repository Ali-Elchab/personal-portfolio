"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Logo from "../../../public/favicon.svg";

const navLinks = [
  { href: "/#about", title: "About" },
  { href: "/#projects", title: "Projects" },
  { href: "/#contact", title: "Contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-gray-600">
      <div className="flex flex-wrap items-center justify-between py-2 px-4 sm:py-2.5 sm:px-6 lg:px-10 xl:px-16">
        <Link href="/" className="w-24 sm:w-28 h-10 sm:h-9 flex items-center justify-start">
          <Image src={Logo} alt="Ali Elchab" className="w-full h-full object-cover" />
        </Link>
        <div className="mobile-menu block md:hidden">
          <button
            className="flex items-center p-3 border rounded border-slate-200 hover:text-white text-slate-200"
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
          >
            {navbarOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-0 md:flex-row md:space-x-5 lg:space-x-6 mt-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-sm md:text-base lg:text-lg rounded md:p-0 hover:text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} closeOverlay={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;
