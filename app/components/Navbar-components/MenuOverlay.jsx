import React from "react";
import Link from "next/link";

const MenuOverlay = ({ links, closeOverlay }) => {
  return (
    <ul className="flex flex-col py-2 items-center">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={closeOverlay}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
