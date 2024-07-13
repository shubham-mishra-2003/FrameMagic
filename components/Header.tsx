"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";

const DashboardHeader = () => {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const { resolvedTheme } = useTheme();

  if (isloading)
    return (
      <div className="fixed px-10 flex justify-between items-center w-full h-20 top-0 left-0 bg-black">
        <div className="flex gap-3">
          <div className="bg-slate-300 animate-pulse rounded-xl h-12 w-10" />
          <div className="bg-slate-300 animate-pulse rounded-xl h-12 w-24" />
        </div>
        <div className="bg-slate-300 animate-pulse rounded-xl h-12 md:w-32  w-10" />
      </div>
    );

  return (
    <div
      className={`flex justify-between px-6 p-2 w-full items-center ${resolvedTheme ==
      "dark"
        ? "bg-black text-white"
        : "bg-slate-100 text-black"}`}
    >
      <Logo />
      <div className="hidden bg-black rounded-full md:flex">
        <UserButton afterSignOutUrl="/home" showName />
      </div>
      <div className="md:hidden flex justify-center items-center gap-2">
        <UserButton afterSignOutUrl="/home" />
        <MobileSidebar />
      </div>
    </div>
  );
};

export default DashboardHeader;
