import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Logo = () => {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    isLoading(false);
  }, []);

  const { resolvedTheme } = useTheme();

  if (loading)
    return (
      <div className="flex justify-center items-center gap-2 p-1 bg-black">
        <div className="h-14 w-14 rounded-xl bg-slate-300 animate-pulse" />
        <div className="h-14 w-24 rounded-3xl bg-slate-300 animate-pulse" />
      </div>
    );
  return (
    <div className="flex justify-center gap-2 items-center">
      <div className="flex w-12 md:w-14 lg:w-16">
        <Image src="/logo.png" height={70} width={70} alt="logo" />
      </div>
      <span className="flex flex-col justify-center items-start">
        <h1
          className={`${resolvedTheme == "dark"
            ? "to-violet-300 from-blue-500"
            : "to-violet-600 from-blue-600"} text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-tr bg-clip-text text-transparent font-bold font-serif`}
        >
          Imagica
        </h1>
        <h2
          className={`${resolvedTheme == "dark"
            ? "text-slate-200"
            : "text-slate-500"} text-[10px] sm:text-sm md:text-md ld:text-lg font-semibold`}
        >
          By connect and team
        </h2>
      </span>
    </div>
  );
};

export default Logo;
