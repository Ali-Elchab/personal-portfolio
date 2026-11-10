import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const stateClasses = active ? "border-blue-500 text-white" : "border-transparent text-[#ADB7BE] hover:text-white";
  return (
    <button
      onClick={selectTab}
      className={`flex-1 border-b-2 px-2 py-2.5 text-sm font-semibold transition-colors ${stateClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
