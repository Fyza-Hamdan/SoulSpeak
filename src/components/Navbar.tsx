import React, { useState } from 'react';
import { Heart, MessageCircle, Calendar, BookOpen, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle"; // use your existing toggle

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Heart, text: 'Dashboard', href: '#' },
    { icon: MessageCircle, text: 'Journal', href: '#journal' },
    { icon: Calendar, text: 'Therapy Booking', href: '#therapy-booking' },
    { icon: Calendar, text: 'Teams', href: '#teams' },
    { icon: BookOpen, text: 'Resources', href: '#resources' },
    { icon: Heart, text: 'Crisis Support', href: '#crisis-support' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <span className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            SoulSpeak
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.text}</span>
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
              {menuItems.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
