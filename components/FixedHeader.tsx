"use client";

import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import MobileSidebar from "./MobileSidebar";
import Logo from "./Logo";
import { useTheme } from "next-themes";

const FixedHeader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading)
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
      className={`p-4 md:static fixed left-0 top-0 w-full flex justify-between items-center z-10 ${resolvedTheme ==
      "dark"
        ? "bg-black"
        : "bg-slate-100"}`}
    >
      <div className="md:hidden flex">
        <Logo />
      </div>
      <div className="flex justify-center md:justify-end items-center md:w-full gap-3">
        <div className="bg-slate-100 p-1 items-end hidden md:block rounded-full">
          <UserButton showName afterSignOutUrl="/"/>
        </div>
        <div className="flex justify-center items-center md:hidden">
          <UserButton afterSignOutUrl="/"/>
        </div>
        <MobileSidebar />
      </div>
    </div>
  );
};

export default FixedHeader;
