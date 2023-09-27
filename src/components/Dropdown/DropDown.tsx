'use client';
import { Menu } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import ArrowIcon from '@/icons/ArrowIcon';

const items = [
  { href: '/', label: 'Payments' },
  { href: '/', label: 'Secturity' },
  { href: '/', label: 'Wellness & Productivity' },
  { href: '/', label: 'Cloud-based POS' },
  { href: '/', label: 'On Premise POS' },
  { href: '/', label: 'Zeller Integrated' },
];

const Dropdown = () => {
  return (
    <Menu>
      {({ open }) => (
        <div className='relative'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu.Button className='inline-flex justify-center w-full px-3 py-1 text-sm bg-[#F7FAFD] rounded-full '>
              <div className='flex justify-between items-center'>
                Categories
                <ArrowIcon classes={`ml-1.5 ${open && 'rotate-180'}`} />
              </div>
            </Menu.Button>
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className='absolute left-0 top-10 z-10 w-fit bg-white rounded-2xl shadow-lg min-w-[220px]'
              >
                {items.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={`${active
                          ? 'bg-[#F7FAFD]'
                          : ''} flex items-center px-4 py-2 h-12 text-sm text-gray-700`}
                      >
                        {item.label}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </Menu>
  );
};

export default Dropdown;

