"use client";

import { useTheme } from "next-themes";


const DashboardHeader = ({ title = "", subtitle = "" }) => {

  const { resolvedTheme } = useTheme();

  return (
    <div className="flex w-full left-0 p-5 justify-between items-center">
      <div className="flex flex-col justify-center md:gap-3 gap-1">
        <h1
          className={`${resolvedTheme == "dark"
            ? "text-gray-50"
            : "text-gray-900"} font-bold text-2xl sm:text-3xl md:text-4xl font-serif`}
        >
          {title}
        </h1>
        <h2
          className={`${resolvedTheme == "dark"
            ? "text-slate-400"
            : "text-slate-500"} font-semibold font-serif text-[12px] md:text-lg sm:text-sm lg:text-xl`}
        >
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default DashboardHeader;
