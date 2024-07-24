"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const { resolvedTheme } = useTheme();

  if (isLoading) {
    return (
      <div className="w-full p-2 flex flex-col justify-center items-center">
        <div className="flex space-x-4">
          <div className="bg-gray-200 dark:bg-gray-700 h-4 w-24 rounded animate-pulse"></div>
          <div className="bg-gray-200 dark:bg-gray-700 h-4 w-24 rounded animate-pulse"></div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 h-4 w-40 mb-2 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <div>
      <footer
        className={
          resolvedTheme == "dark"
            ? "bg-black text-white"
            : "bg-slate-300 text-black"
        }
      >
        <div className="w-full p-2 flex flex-col justify-center items-center">
          <nav className="space-x-4">
            <a
              href="#privacy"
              className={
                resolvedTheme == "dark"
                  ? "hover:text-blue-400 hover:underline text-white"
                  : "text-black hover:text-blue-600 hover:underline"
              }
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className={
                resolvedTheme == "dark"
                  ? "hover:text-blue-400 hover:underline text-white"
                  : "text-black hover:text-blue-600 hover:underline"
              }
            >
              Terms of Service
            </a>
          </nav>
          <p
            className={
              resolvedTheme == "dark"
                ? "hover:text-blue-400 text-white"
                : "text-black hover:text-blue-600"
            }
          >
            &copy; 2024 Imagica. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
