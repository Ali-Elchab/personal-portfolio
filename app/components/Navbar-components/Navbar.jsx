import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/favicon.svg";

const navLinks = [
  { href: "/#about", title: "About" },
  { href: "/#visionrise", title: "VisionRise" },
  { href: "/#projects", title: "Projects" },
  { href: "/#contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border-b border-gray-600 bg-[#121212]">
      <div className="mx-auto flex items-center justify-between gap-3 px-4 py-1.5 sm:px-6 sm:py-2.5 lg:px-10 xl:px-16">
        <Link href="/" className="flex h-8 w-16 shrink-0 items-center sm:h-9 sm:w-28">
          <Image src={Logo} alt="Ali Elchab" className="h-full w-full object-cover" />
        </Link>
        <ul className="flex min-w-0 items-center gap-1 overflow-x-auto sm:gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="flex h-10 items-center px-2 text-xs text-[#ADB7BE] hover:text-white sm:h-auto sm:px-0 sm:text-base lg:text-lg"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
