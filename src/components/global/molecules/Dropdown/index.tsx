"use client";
import React from "react";

import ArrowIcon from "@/components/icons/arrow";

import { Menu } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const items = [
  { href: `/blogs/${encodeURIComponent("payments")}`, label: "Payments" },
  { href: `/blogs/${encodeURIComponent("security")}`, label: "Security" },
  {
    href: `/blogs/${encodeURIComponent("wellness & productivity")}`,
    label: "Wellness & Productivity",
  },
  {
    href: `/blogs/${encodeURIComponent("cloud-based pos")}`,
    label: "Cloud-based POS",
  },
  {
    href: `/blogs/${encodeURIComponent("on Premise pos")}`,
    label: "On Premise POS",
  },
  {
    href: `/blogs/${encodeURIComponent("zeller integrated")}`,
    label: "Zeller Integrated",
  },
];

const Dropdown = () => {
  return (
    <Menu>
      {({ open }) => (
        <div className="relative">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Menu.Button className="inline-flex justify-center w-full px-3 py-1 text-sm bg-blue-50 rounded-full ">
              <div className="flex justify-between items-center">
                Categories
                <ArrowIcon className={`ml-1.5 ${open && "rotate-180"}`} />
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
                className="absolute left-0 top-10 z-10 w-fit bg-white rounded-2xl shadow-lg min-w-[220px]"
              >
                {items.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <div role="none">
                        <Link
                          href={item.href}
                          className={`z-20 ${
                            active ? "bg-blue-50" : ""
                          } flex items-center px-4 py-2 h-12 text-sm text-gray-700`}
                        >
                          {item.label}
                        </Link>
                      </div>
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
