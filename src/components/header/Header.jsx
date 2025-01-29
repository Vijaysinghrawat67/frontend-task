import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import { SunIcon, MoonIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import imaage from '../../assets/logotechnova.jpeg';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-gray-100 dark:bg-gray-800 shadow-lg transition-all duration-500 ease-in-out fixed top-0 w-full z-50">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={imaage}
            alt="TechNova Innovations"
            className="h-10 w-10 mr-2 transition-transform duration-300 hover:scale-110"
          />
          <span className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
            TechNova Innovations
          </span>
        </NavLink>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/services"
            activeclassname="text-blue-600 dark:text-blue-400 underline"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            activeclassname="text-blue-600 dark:text-blue-400 underline"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            activeclassname="text-blue-600 dark:text-blue-400 underline"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Theme Toggle Button (Visible on all screens) */}
        <button
          onClick={toggleTheme}
          className="text-gray-800 dark:text-gray-200 focus:outline-none mr-4"
        >
          {theme === 'light' ? (
            <MoonIcon className="h-6 w-6 transition-transform duration-300 hover:scale-125" />
          ) : (
            <SunIcon className="h-6 w-6 transition-transform duration-300 hover:scale-125" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {navOpen ? (
              <XIcon className="h-6 w-6 transition-transform duration-300 hover:rotate-90" />
            ) : (
              <MenuIcon className="h-6 w-6 transition-transform duration-300 hover:rotate-90" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-16 right-0 h-full w-3/4 bg-gray-100 dark:bg-gray-800 shadow-lg transform ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out md:hidden`}
        style={{ zIndex: 40 }}
      >
        <div className="p-6 space-y-4">
          <NavLink
            to="/"
            activeclassname="bg-gray-300 dark:bg-gray-700"
            onClick={() => setNavOpen(false)}
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            activeclassname="bg-gray-300 dark:bg-gray-700"
            onClick={() => setNavOpen(false)}
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            activeclassname="bg-gray-300 dark:bg-gray-700"
            onClick={() => setNavOpen(false)}
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            activeclassname="bg-gray-300 dark:bg-gray-700"
            onClick={() => setNavOpen(false)}
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
