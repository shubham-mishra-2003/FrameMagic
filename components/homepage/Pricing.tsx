"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Pricing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {Array(3).fill("").map((_, index) =>
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div
                  className={`bg-${resolvedTheme === "dark"
                    ? "gray-900"
                    : "white"} rounded-lg shadow-lg p-6 relative overflow-hidden`}
                >
                  <div
                    className={`h-6 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-4 animate-pulse`}
                  />
                  <div
                    className={`h-6 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-4 animate-pulse`}
                  />
                  <div
                    className={`h-4 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-2 animate-pulse`}
                  />
                  <div
                    className={`h-4 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-2 animate-pulse`}
                  />
                  <div
                    className={`h-4 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-2 animate-pulse`}
                  />
                  <div
                    className={`h-4 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-6 animate-pulse`}
                  />
                  <div
                    className={`h-10 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded animate-pulse`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="pricing" className="py-12">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-semibold text-center mb-6 ${resolvedTheme ===
          "dark"
            ? "text-white"
            : "text-black"}`}
        >
          Pricing Plans
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div
              className={`border bg-${resolvedTheme === "dark"
                ? "slate-800"
                : "slate-100"} rounded-xl shadow-2xl p-6 relative overflow-hidden transition-transform transform hover:scale-105`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${resolvedTheme === "dark"
                  ? "text-white"
                  : "text-black"}`}
              >
                Basic
              </h3>
              <p
                className={`text-gray-600 mb-4 ${resolvedTheme === "dark"
                  ? "text-gray-100"
                  : "text-gray-700"}`}
              >
                $10/month
              </p>
              <ul
                className={`text-gray-600 mb-6 ${resolvedTheme === "dark"
                  ? "text-gray-200"
                  : "text-gray-700"}`}
              >
                <li className="mb-2">Feature 1</li>
                <li className="mb-2">Feature 2</li>
                <li className="mb-2">Feature 3</li>
              </ul>
              <a
                href="#"
                className={`block text-center ${resolvedTheme == "dark"
                  ? "bg-gradient-to-tr from-violet-500 to-blue-500 hover:from-violet-700 hover:to-blue-700"
                  : "bg-gradient-to-tr from-violet-700 to-blue-700 hover:from-violet-500 hover:to-blue-500"} text-white py-2 rounded-lg transition-transform transform hover:scale-105`}
              >
                Choose Plan
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div
              className={`border bg-${resolvedTheme === "dark"
                ? "slate-800"
                : "slate-100"} rounded-xl shadow-2xl p-6 relative overflow-hidden transition-transform transform hover:scale-105`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${resolvedTheme ===
                "dark"
                  ? "text-white"
                  : "text-black"}`}
              >
                Standard
              </h3>
              <p
                className={`text-gray-600 mb-4 ${resolvedTheme === "dark"
                  ? "text-gray-100"
                  : "text-gray-700"}`}
              >
                $20/month
              </p>
              <ul
                className={`text-gray-600 mb-6 ${resolvedTheme === "dark"
                  ? "text-gray-200"
                  : "text-gray-700"}`}
              >
                <li className="mb-2">Feature 1</li>
                <li className="mb-2">Feature 2</li>
                <li className="mb-2">Feature 3</li>
                <li className="mb-2">Feature 4</li>
              </ul>
              <a
                href="#"
                className={`block text-center ${resolvedTheme == "dark"
                  ? "bg-gradient-to-tr from-violet-500 to-blue-500 hover:from-violet-700 hover:to-blue-700"
                  : "bg-gradient-to-tr from-violet-700 to-blue-700 hover:from-violet-500 hover:to-blue-500"} text-white py-2 rounded-lg transition-transform transform hover:scale-105`}
              >
                Choose Plan
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <div
              className={`border bg-${resolvedTheme === "dark"
                ? "slate-800"
                : "slate-100"} rounded-xl shadow-2xl p-6 relative overflow-hidden transition-transform transform hover:scale-105`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${resolvedTheme ===
                "dark"
                  ? "text-white"
                  : "text-black"}`}
              >
                Premium
              </h3>
              <p
                className={`text-gray-600 mb-4 ${resolvedTheme === "dark"
                  ? "text-gray-100"
                  : "text-gray-700"}`}
              >
                $30/month
              </p>
              <ul
                className={`text-gray-600 mb-6 ${resolvedTheme === "dark"
                  ? "text-gray-200"
                  : "text-gray-700"}`}
              >
                <li className="mb-2">Feature 1</li>
                <li className="mb-2">Feature 2</li>
                <li className="mb-2">Feature 3</li>
                <li className="mb-2">Feature 4</li>
                <li className="mb-2">Feature 5</li>
              </ul>
              <a
                href="#"
                className={`block text-center ${resolvedTheme == "dark"
                  ? "bg-gradient-to-tr from-violet-500 to-blue-500 hover:from-violet-700 hover:to-blue-700"
                  : "bg-gradient-to-tr from-violet-700 to-blue-700 hover:from-violet-500 hover:to-blue-500"} text-white py-2 rounded-lg transition-transform transform hover:scale-105`}
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
