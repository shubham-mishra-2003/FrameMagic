"use client";

import { useTheme } from "next-themes";
import TypingAnimation from "../ui/typing-animation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownCircle, Medal } from "lucide-react";
import ScrollToTop from "./ScrollToTop";

const MainSection = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      id="home"
      className="min-h-screen relative pt-28 flex flex-col justify-center items-center md:gap-10 sm:gap-8 gap-6 p-6"
    >
      <div className="flex gap-3 bg-gradient-to-tr to-violet-500 from-blue-500 p-3 rounded-xl text-slate-100 font-bold">
        <Medal className="text-yellow-200" /> No.1 app for image edits
      </div>
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
          className={`font-semibold ${resolvedTheme == "dark"
            ? "text-blue-500 hover:text-blue-800"
            : "text-blue-800 hover:text-blue-500"}`}
        >
          Create an account
        </Link>
      </h3>
      {resolvedTheme == "dark"
        ? <Image
            src="/HomeDark.png"
            alt="framemagic"
            height={900}
            width={900}
            className="border-2 sm:flex hidden border-slate-500 rounded-xl w-[800px] hover:scale-105 duration-300"
          />
        : <Image
            src="/HomeLight.png"
            alt="framemagic"
            height={400}
            width={900}
            className="border-2 sm:flex hidden border-slate-500 rounded-xl w-[800px] hover:scale-105 duration-300"
          />}

      {resolvedTheme == "dark"
        ? <Image
            src="/phoneDark.png"
            alt="framemagic"
            height={500}
            width={500}
            className="border-2 flex sm:hidden border-slate-500 rounded-xl w-full hover:scale-105 duration-300"
          />
        : <Image
            src="/phoneLight.png"
            alt="framemagic"
            height={400}
            width={500}
            className="border-2 flex sm:hidden border-slate-500 rounded-xl w-full hover:scale-105 duration-300"
          />}

      <div className="h-[2px] bg-slate-500 w-full sm:mt-20 mt-4 rounded-full" />
      <Link href="#about" className="flex justify-center gap-3 items-center">
        <h3>See what wee can do</h3>
        <ChevronDownCircle height={30} width={30} />
      </Link>
      <ScrollToTop />
    </div>
  );
};

export default MainSection;
