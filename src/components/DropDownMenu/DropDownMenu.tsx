'use client'
import React, { useState, useEffect, useRef } from 'react';
import ArrowIcon from '@/icons/ArrowIcon';

interface DropdownProps {
  options: { label: string; anchor: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('Index');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const selectOption = (option: string, anchor: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    scrollToAnchor(anchor);
  };

  const scrollToAnchor = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div
      className={`relative inline-block ${isOpen ? 'card-shadow' : ''} rounded-2xl h-auto w-full`}
      ref={dropdownRef}
    >
      <div
        className={`flex items-center justify-between md:w-[272px] px-4 py-1 rounded-2xl bg-white ${!isOpen && 'card-shadow'}  cursor-pointer`}
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
              className={`px-4 py-2 cursor-pointer min-h-[40px] text-sm ${
                option.label === selectedOption ? 'bg-blue-100 text-blue-500' : ''
              }`}
              onClick={() => selectOption(option.label, option.anchor)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
