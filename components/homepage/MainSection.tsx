"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const SkeletonLoader = () => {
  return (
    <div className="container mx-auto my-10 px-6 py-14 text-center">
      <div className="animate-pulse">
        <div className="bg-gray-300 h-12 w-3/4 mx-auto mt-4 mb-6 pt-24 rounded-lg "/>
        <div className="bg-gray-300 h-6 w-1/2 mx-auto mb-6 rounded-lg" />
        <div className="bg-gray-300 h-12 w-1/4 mx-auto mt-4 rounded-full" />
      </div>
    </div>
  );
};

const MainSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setMounted(true);
  }, []);

  if (!mounted) return <SkeletonLoader />;

  return (
    <div id="home" className="min-h-screen overflow-hidden container mx-auto my-8 sm:my-12 md:my-16 lg:my-20 xl:my-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center items-center">
      <div className={resolvedTheme === "dark" ? "text-white" : "text-black"}>
        <h1 className="text-5xl font-bold mb-6 pt-24">
          Transform Your Images with AI Tools
        </h1>
        <p className="text-xl mb-6">
          AI-powered tools to enhance, edit, and transform your photos
          effortlessly.
        </p>
        <a
          href="/register"
          className={`text-white font-bold py-3 px-6 rounded-full mx-auto mt-4 text-center ${resolvedTheme ==
            "dark"
              ? "bg-gradient-to-tr from-violet-500 to-blue-500 hover:from-violet-700 hover:to-blue-700"
              : "bg-gradient-to-tr from-violet-700 to-blue-700 hover:from-violet-500 hover:to-blue-500"}`}
        >
          Get Started Now
        </a>
      </div>
    </div>
  );
};

export default MainSection;
