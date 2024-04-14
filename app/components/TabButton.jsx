import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "mr-3 font-semibold hover:text-white text-white border-b border-blue-500"
    : "mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-blue-500";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
