'use client';
import React, { useState } from 'react';
import ArrowIcon from '@/icons/ArrowIcon';

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('Index');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='px-4 py-8 md:p-0'>
      <div className={`relative inline-block ${isOpen ? 'card-shadow' : ''} rounded-2xl h-auto`}>
        <div
          className={`flex items-center justify-between w-[272px] px-4 py-1 rounded-2xl bg-white ${!isOpen && 'card-shadow'}  cursor-pointer`}
          onClick={toggleDropdown}
        >
          <span className=' font-semibold h-10 flex justify-center items-center'>{selectedOption}</span>
          <ArrowIcon classes={`${isOpen ? 'rotate-180' : ''} ml-2`} />
        </div>
        {isOpen && (
          <ul className='max-h-80 overflow-auto w-[272px]'>
            {options.map((option, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer min-h-[40px] text-sm ${option === selectedOption ? 'bg-blue-100 text-blue-500' : ''}`}
                onClick={() => selectOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

  );
};

export default Dropdown;
