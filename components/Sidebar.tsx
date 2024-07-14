"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SideBar } from "../constants/index";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

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
      className={`hidden flex-col font-bold justify-between md:flex h-full ${resolvedTheme ===
      "dark"
        ? "bg-black"
        : "bg-slate-100"}`}
    >
      <ul className="gap-3 p-3 flex flex-col h-full overflow-y-auto justify-start items-center">
        {SideBar.slice(0, 6).map(link => {
          const isActive = `/${link.href}` === pathname;
          return (
            <li
              key={link.title}
              className="flex w-full justify-center items-center"
            >
              <Link
                href={`/${link.href}`}
                className={`text-[13px] w-full flex justify-between gap-10 items-center rounded-full p-5 py-[15px] ${isActive
                  ? "bg-gradient-to-tr text-white to-blue-600 from-violet-600"
                  : resolvedTheme === "dark"
                    ? "hover:bg-gray-800 bg-gray-900 text-white"
                    : "bg-slate-200 text-black hover:bg-slate-300"}`}
              >
                {link.title}
                <link.icon height={20} />
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="gap-3 p-3 flex flex-col justify-start items-center">
        {SideBar.slice(6).map(link => {
          const isActive = `/${link.href}` === pathname;
          return (
            <li
              key={link.title}
              className="flex w-full justify-center items-center"
            >
              <Link
                href={`/${link.href}`}
                className={`text-[14px] w-full flex justify-between gap-10 items-center rounded-full p-5 py-[15px] ${isActive
                  ? "bg-gradient-to-tr text-white to-blue-600 from-violet-600"
                  : resolvedTheme === "dark"
                    ? "hover:bg-gray-800 bg-gray-900 text-white"
                    : "bg-slate-200 text-black hover:bg-slate-300"}`}
              >
                {link.title}
                <link.icon height={20} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

const SidebarLoader = () => {
  return (
    <div className="bg-black items-center p-3 pt-20 gap-3 md:flex hidden flex-col h-full w-72">
      <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
      <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
      <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
      <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
      <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
      <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
      <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
      <div className="bg-slate-200 animate-pulse w-full h-12 rounded-full" />
    </div>
  );
};
