"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import TypingAnimation from "../magicui/typing-animation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownCircle, Medal } from "lucide-react";

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

  const [color, setColor] = useState("#000");

  useEffect(() => {
    setIsLoading(false);
    if (resolvedTheme == "dark") {
      setColor("#ffffff");
    }
  }, []);

  if (isLoading) return <SkeletonLoader />;

  return (
    <div
      id="home"
      className="min-h-screen pt-28 flex flex-col justify-center items-center md:gap-10 sm:gap-8 gap-6 p-6"
    >
      <div className="flex gap-3 bg-gradient-to-tr to-violet-500 from-blue-500 p-3 rounded-xl"><Medal className="text-yellow-200"/> No.1 app for image edits</div>
      <TypingAnimation
        duration={100}
        className="text-2xl font-mono sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold"
        text="Get your images transformed with AI tools"
      />
      <h2 className="text-slate-500 text-center font-bold text-sm sm:text-xl md:text-2xl">
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
      <h3 className="text-sm sm:text-lg md:text-xl text-center font-bold">
        Don&apos;t have an account ?{" "}
        <Link
          href="/register"
          className="font-semibold text-blue-500 hover:text-red-500"
        >
          Create an account
        </Link>
      </h3>
      {resolvedTheme == "dark"
        ? <Image
            src="/HomeDark.png"
            alt="imagica"
            height={900}
            width={900}
            className="border-2 sm:flex hidden border-slate-500 rounded-xl w-[800px]"
          />
        : <Image
            src="/imagicaHome.png"
            alt="imagica"
            height={900}
            width={900}
            className="border-2 sm:flex hidden border-slate-500 rounded-xl w-[800px]"
          />}

      {resolvedTheme == "dark"
        ? <Image
            src="/phoneDark.png"
            alt="imagica"
            height={500}
            width={500}
            className="border-2 flex sm:hidden border-slate-500 rounded-xl w-[900px]"
          />
        : <Image
            src="/phoneLight.png"
            alt="imagica"
            height={400}
            width={500}
            className="border-2 flex sm:hidden border-slate-500 rounded-xl w-[400px]"
          />}

      <div className="h-[2px] bg-slate-500 w-full sm:mt-20 mt-4 rounded-full" />
      <Link href="#about" className="flex justify-center gap-3 items-center">
        <h3>See what wee can do</h3>
        <ChevronDownCircle height={30} width={30} />
      </Link>
    </div>
  );
};

export default MainSection;
