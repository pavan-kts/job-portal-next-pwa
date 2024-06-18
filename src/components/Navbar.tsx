"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold dark:text-gray-200">Job Portal</div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-white hover:underline dark:text-gray-200">Home</Link>
          <Link href="/about-us" className="text-white hover:underline dark:text-gray-200">About Us</Link>
          <Link href="/contact-us" className="text-white hover:underline dark:text-gray-200">Contact Us</Link>
          {/* <Link href="/login" className="text-white hover:underline dark:text-gray-200">Log in</Link> */}
          <div className="relative flex items-center">
            <button onClick={toggleProfileMenu} className="text-white focus:outline-none">
              <FaUserCircle size={24} />
            </button>
            {isProfileMenuOpen && (
              <div className="absolute top-5 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 dark:bg-gray-800 dark:text-gray-200">
                <Link href="/user-profile" className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">Profile</Link>
                {/* <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">Settings</Link> */}
                <Link href="/login" className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">Logout</Link>
                {/* <button
                  onClick={() => console.log('Logout')}
                  className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Logout
                </button> */}
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link href="/" className="text-white hover:underline dark:text-gray-200">Home</Link>
          <Link href="/about-us" className="text-white hover:underline dark:text-gray-200">About Us</Link>
          <Link href="/contact-us" className="text-white hover:underline dark:text-gray-200">Contact Us</Link>
          {/* <Link href="/login" className="text-white hover:underline dark:text-gray-200">Log in</Link> */}
          <div className="relative">
            <button onClick={toggleProfileMenu} className="text-white focus:outline-none">
              <FaUserCircle size={24} />
            </button>
            {isProfileMenuOpen && (
              <div className="flex flex-col space-y-2 mt-2 bg-white rounded-md shadow-lg py-2 dark:bg-gray-800 dark:text-gray-200">
                <Link href="/user-profile" className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">Profile</Link>
                {/* <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">Settings</Link> */}
                <Link href="/login" className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">Logout</Link>
                {/* <button
                  onClick={() => console.log('Logout')}
                  className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Logout
                </button> */}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
