"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DashboardHeader = ({ title = "", subtitle = "" }) => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  const { resolvedTheme } = useTheme();

  if (Loading) return <HeadLoader />;

  return (
    <div className="flex w-full left-0 p-5 justify-between items-center">
      <div className="flex flex-col justify-center md:gap-3 gap-1">
        <h1
          className={`${resolvedTheme == "dark"
            ? "text-gray-50"
            : "text-gray-900"} font-extrabold text-2xl sm:text-3xl md:text-4xl font-serif`}
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

const HeadLoader = () => {
  return (
    <div className="pt-5 md:pt-20 pb-3 bg-black gap-3 flex flex-col">
      <div className="bg-slate-200 animate-pulse rounded-full h-14 w-60" />
      <div className="bg-slate-200 animate-pulse rounded-full h-14 w-96" />
    </div>
  );
};
