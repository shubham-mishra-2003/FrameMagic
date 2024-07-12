"use client";

import { useTheme } from "next-themes";
import React from "react";
import Logo from "./Logo";
import { UserButton } from "@clerk/nextjs";

const DashboardHeader = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`flex justify-between px-6 p-2 fixed top-0 left-0 w-full items-center ${resolvedTheme ==
      "dark"
        ? "bg-black text-white"
        : "bg-gray-200 text-black"}`}
    >
      <Logo />
      <UserButton afterSignOutUrl="/home" showName />
    </div>
  );
};

export default DashboardHeader;
