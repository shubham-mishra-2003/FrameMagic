"use client";

import React from "react";
import Logo from "../Logo";
import ModeSwitch from "../ModeSwitch";
import { useTheme } from "next-themes";

const Header = () => {

  const { resolvedTheme } = useTheme();

  return (
    <div>
      <header
        className={`${resolvedTheme == "dark" ? 'text-white' : 'text-black'}`}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(79, 70, 229, 0.8), rgba(67, 56, 202, 0.8))",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto flex justify-between items-center p-3">
          <Logo />
          <nav className="space-x-4">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
            <a href="#about" className="hover:underline">
              About Us
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
          <div className="space-x-4">
            <a href="/login"className="hover:underline">
              Login
            </a>
            <a
              href="/signup"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </a>
          </div>
        </div>
        <ModeSwitch />
      </header>
    </div>
  );
};

export default Header;
