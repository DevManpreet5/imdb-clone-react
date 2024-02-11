import React, { useEffect, useState } from "react";

const Dropdown = ({ fun, option1, option2, option3, option4 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(option1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    fun(selectedOption);
  }, [selectedOption]);

  return (
    <div className="relative mr-16">
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md focus:outline-none"
        onClick={toggleDropdown}
      >
        {selectedOption && selectedOption.toUpperCase()}
      </button>
      {isOpen && (
        <div className="absolute  top-full left-0 mt-2  w-32 bg-white border border-gray-300 shadow-md rounded-md z-10">
          <ul className="">
            <li
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionSelect(option1)}
            >
              {option1}
            </li>
            <li
              className="px-2 py-2 hover:bg-gray-100  cursor-pointer"
              onClick={() => handleOptionSelect(option2)}
            >
              {option2}
            </li>
            <li
              className="px-2  py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionSelect(option3)}
            >
              {option3}
            </li>
            <li
              className="px-2  py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionSelect(option4)}
            >
              {option4}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
