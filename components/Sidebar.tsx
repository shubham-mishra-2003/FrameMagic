"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SideBar } from "../constants/index";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const { resolvedTheme } = useTheme();

  if (isLoading) return <SidebarLoader />;

  return (
    <div
      className={`hidden font-bold md:flex h-full ${resolvedTheme == "dark"
        ? "bg-black"
        : "bg-slate-100"}`}
    >
      <ul className="gap-3 p-3 flex flex-col h-full overflow-y-auto justify-start items-center">
        {SideBar.map(link =>
          <li
            key={link.title}
            className="flex w-full justify-center items-center"
          >
            <Link
              href={`/${link.href}`}
              className={`text-lg w-full flex justify-between gap-10 items-center rounded-full p-5 ${resolvedTheme ==
              "dark"
                ? "hover:bg-gray-800 bg-gray-900 text-white"
                : "bg-slate-200 text-black hover:bg-slate-300"}`}
            >
              {link.title}
              <link.icon />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

const SidebarLoader = () => {
  return (
    <div className="bg-black justify-center items-center p-3 pt-20 gap-3 md:flex hidden flex-col h-full w-72">
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
