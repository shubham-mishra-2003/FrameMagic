"use client";

import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import ModeSwitch from "../ModeSwitch";
import { useTheme } from "next-themes";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const { resolvedTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isLoading)
    return (
      <div
        className={`fixed top-0 z-50 ${resolvedTheme === "dark" ? "bg-black" : "bg-slate-100"}`}
      >
        <div className="fixed px-10 flex justify-between items-center w-full h-20 top-0 left-0">
          <div className="flex gap-3">
            <div className="bg-slate-300 animate-pulse rounded-xl h-12 w-10" />
            <div className="bg-slate-300 animate-pulse rounded-xl h-12 w-24" />
          </div>
          <div className="bg-slate-300 animate-pulse rounded-xl h-12 md:w-32 w-10" />
        </div>
      </div>
    );

  return (
    <div
      className={`fixed top-0 z-50 flex justify-between px-6 p-2 w-full items-center ${resolvedTheme === "dark" ? "bg-black text-white" : "bg-slate-100 text-black"}`}
    >
      <div className="container mx-auto flex justify-between items-center p-1">
        <Logo />
        <nav className="hidden md:flex space-x-6 lg:space-x-14">
          <a
            href="#home"
            className={`hover:underline ${resolvedTheme === "dark" ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"}`}
          >
            Home
          </a>
          <a
            href="#features"
            className={`hover:underline ${resolvedTheme === "dark" ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"}`}
          >
            Features
          </a>
          <a
            href="#pricing"
            className={`hover:underline ${resolvedTheme === "dark" ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"}`}
          >
            Pricing
          </a>
          <a
            href="#about"
            className={`hover:underline ${resolvedTheme === "dark" ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"}`}
          >
            About Us
          </a>
          <a
            href="#contact"
            className={`hover:underline ${resolvedTheme === "dark" ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"}`}
          >
            Contact
          </a>
        </nav>
        <div className="hidden md:flex space-x-2 items-center">
          <a
            href="/login"
            className={`py-2 px-4 rounded ${resolvedTheme === "dark" ? "text-white hover:bg-gray-500 bg-opacity-50" : "text-black hover:bg-blue-200 bg-opacity-50"}`}
          >
            Login
          </a>
          <a
            href="/register"
            className={`font-bold py-2 px-4 rounded text-white ${resolvedTheme === "dark" ? "bg-gradient-to-tr from-violet-500 to-blue-500 hover:from-violet-700 hover:to-blue-700" : "bg-gradient-to-tr from-violet-700 to-blue-700 hover:from-violet-500 hover:to-blue-500"}`}
          >
            Sign Up
          </a>
          <ModeSwitch />
        </div>
        <div className="md:hidden flex items-center">
          <ModeSwitch />
          <button onClick={toggleMenu} className={ `ml-4 focus:outline-none  ${resolvedTheme === "dark" ? "white" : "black"}`}>
            {isMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden absolute top-20 left-0 w-full ${resolvedTheme === "dark" ? "text-white bg-slate-800" : "text-black bg-slate-200"}`}>
          <nav className="flex flex-col space-y-4 p-4 text-center">
            <a
              href="#home"
              className={`hover:underline ${resolvedTheme === "dark" ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className={`hover:underline ${resolvedTheme === "dark" ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className={`hover:underline ${resolvedTheme === "dark" ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#about"
              className={`hover:underline ${resolvedTheme === "dark" ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className={`hover:underline ${resolvedTheme === "dark" ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/login"
              className={`py-2 px-4 rounded ${resolvedTheme === "dark" ? "text-white hover:bg-gray-500 bg-opacity-50" : "text-black hover:bg-blue-200 bg-opacity-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="/register"
              className={`font-bold py-2 px-4 rounded text-white ${resolvedTheme === "dark" ? "bg-gradient-to-tr from-violet-500 to-blue-500 hover:from-violet-700 hover:to-blue-700" : "bg-gradient-to-tr from-violet-700 to-blue-700 hover:from-violet-500 hover:to-blue-500"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
