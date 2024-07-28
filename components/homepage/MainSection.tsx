"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import TypingAnimation from "../magicui/typing-animation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownCircle, MoveDownIcon } from "lucide-react";

const SkeletonLoader = () => {
  return (
    <div className="container mx-auto my-10 px-6 py-14 text-center">
      <div className="animate-pulse">
        <div className="bg-gray-300 h-12 w-3/4 mx-auto mt-4 mb-6 pt-24 rounded-lg " />
        <div className="bg-gray-300 h-6 w-1/2 mx-auto mb-6 rounded-lg" />
        <div className="bg-gray-300 h-12 w-1/4 mx-auto mt-4 rounded-full" />
      </div>
    </div>
  );
};

const MainSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <SkeletonLoader />;

  return (
    <div
      id="home"
      className="min-h-screen pt-24 flex flex-col justify-center items-center md:gap-10 sm:gap-8 gap-6 p-6"
    >
      <TypingAnimation
        duration={100}
        className="text-2xl font-mono sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold"
        text="Get your images transformed with AI tools"
      />
      <h2 className="text-slate-500 text-center font-bold text-sm sm:text-xl md:text-2xl" >
        AI-powered tools to enhance, edit, and transform your photos
        effortlessly.
      </h2>
      <Link
        href="/login"
        className={`text-white font-bold py-3 px-6 rounded-full mx-auto mt-4 text-center ${resolvedTheme ==
        "dark"
          ? "bg-gradient-to-tr from-violet-500 to-blue-500 hover:from-violet-700 hover:to-blue-700"
          : "bg-gradient-to-tr from-violet-700 to-blue-700 hover:from-violet-500 hover:to-blue-500"}`}
      >
        Get Started
      </Link>
      <h3 className="text-sm sm:text-lg md:text-xl text-center font-bold">Don&apos;t have an account ? <Link href="/register" className="font-semibold text-blue-500 hover:text-red-500">Create an account</Link></h3>
      <div className="relative mt-10 flex">
        <Image src="/imagicaHome.png" alt="imagica" height={900} width={900} className="border-2 border-slate-500 rounded-xl w-[700px]" />
        <Image popover="auto" src="/imagicaPhone.png" alt="imagica for phone" height={400} width={250} className="absolute hidden -top-10 left-56 border-2 border-slate-500 rounded-xl sm:flex" />
      </div>
      <div className="h-[2px] bg-slate-500 w-full sm:mt-20 mt-4 rounded-full"></div>
      <Link href="#about" className="flex justify-center gap-3 items-center">
        <h3>See what wee can do</h3>
        <ChevronDownCircle height={30} width={30} />
      </Link>
    </div>
  );
};

export default MainSection;
