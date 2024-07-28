"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import ModeSwitch from "../ModeSwitch";
import { navLinks } from "@/constants";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { resolvedTheme } = useTheme();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <HeaderLoader />;

  return (
    <div
      className={`fixed z-10 flex items-center justify-between top-0 left-0 w-full p-3 ${resolvedTheme ==
      "dark"
        ? "bg-black"
        : "bg-slate-100"}`}
    >
      <Logo />
      <div className="hidden md:flex gap-5">
        {navLinks.map((navBarLinks, index) =>
          <Link
            className={`lg:text-2xl text-lg scale-100 hover:scale-110 font-bold hover:border-b-2 border-blue-500 hover:text-blue-500`}
            key={index}
            href={`#${navBarLinks.id}`}
          >
            {navBarLinks.title}
          </Link>
        )}
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div className="hidden md:flex gap-2">
          <Link
            href="/login"
            className={`px-3 py-1 text-[15px] lg:text-[16px] border-2 font-[500] shadow-inner rounded-md scale-95 hover:scale-100 ${resolvedTheme ==
            "dark"
              ? "bg-transparent border-white hover:shadow-slate-500  hover:bg-slate-300 hover:text-black"
              : "border-black hover:bg-slate-300"}`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`bg-gradient-to-r text-[15px] lg:text-[16px] px-3 py-1 border-2 font-[500] rounded-md scale-95 hover:scale-100 ${resolvedTheme ==
            "dark"
              ? "to-violet-700 shadow-md from-blue-700 hover:to-violet-900 hover:from-blue-900 border-slate-300 shadow-slate-400"
              : "to-violet-400 border-slate-200 from-blue-400 shadow-md shadow-slate-500"}`}
          >
            Register
          </Link>
        </div>
        <div className="sm:flex hidden">
          <ModeSwitch ContentSize="w-28" hidden={true} />
        </div>
        <div className="sm:hidden">
          <ModeSwitch hidden={false} ButtonSize="w-fit" />
        </div>
        <SmallHeader />
      </div>
    </div>
  );
};

export default Header;

const SmallHeader = () => {
  const { resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="md:hidden flex">
        {open ? <X height={30} width={30} /> : <Menu height={30} width={30} />}
      </PopoverTrigger>
      <PopoverContent
        className={`px-3 flex gap-3 flex-col md:hidden py-2 mr-3 mt-3 shadow-xl w-[180px] ${resolvedTheme ==
        "dark"
          ? "bg-black"
          : "bg-slate-100"}`}
      >
        <div className="flex flex-col justify-center items-center gap-4">
          {navLinks.map((navBarLinks, index) =>
            <Link
              className={`w-full hover:scale-105 text-center border rounded-md p-1 shadow-inner ${resolvedTheme ==
              "dark"
                ? "bg-slate-800 border-slate-400 hover:bg-slate-900 shadow-black"
                : "bg-slate-200 shadow-slate-400 hover:bg-slate-300"}`}
              key={index}
              href={`#${navBarLinks.id}`}
              onClick={() => {
                setOpen(false);
              }}
            >
              {navBarLinks.title}
            </Link>
          )}
        </div>
        <div className="bg-slate-500 text-center py-[1px] w-full rounded-xl" />
        <div className="flex flex-col gap-2">
          <Link
            href="/login"
            className={`px-3 text-center py-1 text-[16px] border-2 font-[500] shadow-inner rounded-md scale-95 hover:scale-100 ${resolvedTheme ==
            "dark"
              ? "bg-transparent border-white hover:shadow-slate-500  hover:bg-slate-300 hover:text-black"
              : "border-black hover:bg-slate-300"}`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`bg-gradient-to-r text-center text-[16px] px-3 py-1 border-2 font-[500] rounded-md scale-95 hover:scale-100 ${resolvedTheme ==
            "dark"
              ? "to-violet-700 shadow-md from-blue-700 hover:to-violet-900 hover:from-blue-900 border-slate-300 shadow-slate-400"
              : "to-violet-400 border-slate-200 from-blue-400 shadow-md shadow-slate-500"}`}
          >
            Register
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

function HeaderLoader() {
  return (
    <div className="bg-black flex p-5 justify-between items-center">
      <div className="bg-slate-200 w-32 h-12 animate-pulse rounded-lg" />
      <div className="gap-3 hidden md:flex">
        <div className="bg-slate-200 w-28 h-12 animate-pulse rounded-lg" />
        <div className="bg-slate-200 w-28 h-12 animate-pulse rounded-lg" />
        <div className="bg-slate-200 w-28 h-12 animate-pulse rounded-lg" />
        <div className="bg-slate-200 w-28 h-12 animate-pulse rounded-lg" />
      </div>
      <div className="flex gap-2">
        <div className="bg-slate-200 md:flex hidden w-16 h-12 animate-pulse rounded-lg" />
        <div className="bg-slate-200 flex sm:w-16 w-10 rounded-full h-12 animate-pulse sm:rounded-lg" />
        <div className="bg-slate-200 h-12 animate-pulse sm:w-16 w-12 rounded-lg" />
      </div>
    </div>
  );
}
