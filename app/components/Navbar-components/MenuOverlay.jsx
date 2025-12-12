import React from "react";

const MenuOverlay = ({ links, closeOverlay }) => {
  const scrollToRef = (ref) => {
    if (!ref?.current) return;
    const scrollPosition = ref.current.offsetTop - 140;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
    closeOverlay();
  };

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <button
            onClick={() => scrollToRef(link.ref)}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
          >
            {link.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
