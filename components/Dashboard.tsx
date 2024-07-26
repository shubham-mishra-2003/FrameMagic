"use client";

import React from "react";
import { SideBar } from "@/constants";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex w-full flex-col gap-12 md:p-8 sm:p-7 p-5">
      <div
        className={`flex relative flex-col justify-center sm:gap-10 md:gap-12 items-center py-10 px-8 rounded-3xl bg-gradient-to-tr ${resolvedTheme ==
        "dark"
          ? "to-violet-500 from-blue-500 shadow-2xl shadow-black"
          : "to-violet-400 from-blue-400 shadow-inner shadow-slate-300"}`}
      >
        <Image
          src="/sparkles.png"
          fill
          alt="logo"
          className="absolute -z-5 left-0 top-0 w-12 sm:w-16 md:w-20"
        />
        <div className="z-10">
          <h3 className="text-xl sm:text-2xl text-center md:text-3xl lg:text-4xl font-extrabold font-serif">
            Unleash your creativity with Imagica AI
          </h3>
          <ul className="hidden sm:flex justify-between items-center w-full">
            {SideBar.slice(1, 6).map((link, index) =>
              <li
                key={index}
                className="flex w-full justify-center items-center"
              >
                <Link
                  href={link.href}
                  className="flex flex-col hover:bg-slate-900 p-3 hover:bg-opacity-25 rounded-lg gap-3 items-center"
                >
                  <Image
                    src={link.icon}
                    alt="links"
                    height={40}
                    width={40}
                    className={`p-2 rounded-full bg-slate-200 ${resolvedTheme ==
                    "dark"
                      ? "invert"
                      : ""}`}
                  />
                  <h3 className="font-bold text-center text-[10px] sm:text-sm md:text-lg">
                    {link.title}
                  </h3>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
