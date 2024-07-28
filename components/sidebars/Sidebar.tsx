"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SideBar } from "../../constants/index";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ModeSwitch from "../ModeSwitch";

const Sidebar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <SidebarLoader />;

  return (
    <div
      className={`hidden p-3 pb-2 pt-24 md:hidden gap-2 flex-col font-bold justify-between lg:flex h-full ${resolvedTheme ===
      "dark"
        ? "bg-black"
        : "bg-slate-100"}`}
    >
      <ul className="gap-[6px] flex flex-col h-full overflow-y-auto justify-start items-center">
        {SideBar.map(link => {
          const isActive = `/${link.href}` === pathname;
          return (
            <li
              key={link.title}
              className="flex w-full justify-center items-center"
            >
              <Link
                href={`/${link.href}`}
                className={`text-[16px] shadow-inner w-full flex justify-between gap-7 items-center rounded-full p-5 py-[15px] ${isActive
                  ? "bg-gradient-to-tr text-white shadown-md to-blue-600 from-violet-600"
                  : resolvedTheme === "dark"
                    ? "hover:bg-gray-800 hover:shadow-slate-900 bg-gray-900 text-white"
                    : "bg-slate-200 hover:shadow-slate-400 text-black hover:bg-slate-300"}`}
              >
                {link.title}
                <Image
                  src={link.icon}
                  height={20}
                  className={`${isActive
                    ? "invert"
                    : resolvedTheme == "dark" ? "invert" : ""}`}
                  width={20}
                  alt="sidebar icon"
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <ModeSwitch ButtonSize="w-full" ContentSize="w-44" hidden={true} />
    </div>
  );
};

export default Sidebar;

const SidebarLoader = () => {
  return (
    <div className="bg-black p-4 pt-24 justify-between lg:flex hidden flex-col h-full w-[280px]">
      <div className="flex justify-center items-center flex-col gap-2">
        <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
        <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
        <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
        <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
        <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
        <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
      </div>
      <div className="flex justify-center items-center flex-col gap-2">
        <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
      </div>
    </div>
  );
};
