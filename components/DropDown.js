import React from "react";

export default function DropDown({ options, option, handleOptionClick }) {
  return (
    <div
      className={`origin-top-right absolute top-0 ${
        option === "lang" ? "mt-[-340px] ml-[-100px]" : "mt-[-90px]"
      } w-44 ${
        option === "lang" ? "h-[320px]" : "h-auto"
      } overflow-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
    >
      <div className="py-1" role="none">
        {options.map((option) => (
          <button
            key={option.label}
            onClick={() => handleOptionClick(option)}
            className="w-full block px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 capitalize"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
