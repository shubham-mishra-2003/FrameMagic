import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import { navLinks } from "@/constants";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Menu, X } from "lucide-react";
import ModeSwitch from "../ModeSwitch";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  });

  const { resolvedTheme } = useTheme();

  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full p-4 px-5 flex justify-between items-center transition-transform duration-500 z-50 ${resolvedTheme ==
      "dark"
        ? "bg-black"
        : "bg-slate-100"} ${showHeader
        ? "translate-y-0"
        : "-translate-y-full"}`}
    >
      <Logo />
      <div className="flex gap-5">
        <div className="md:flex hidden gap-8 justify-center items-center">
          {navLinks.map((navlink, index) =>
            <Link
              className="font-bold hover:pb-2 text-2xl hover:border-blue-500 hover:border-b-2 hover:scale-110"
              key={index}
              href={`#${navlink.id}`}
            >
              {navlink.title}
            </Link>
          )}
        </div>
        <div className="hidden lg:flex gap-2 ">
          <Link
            href="/login"
            className={`flex justify-center items-center rounded-lg text-lg p-1 px-3 shadow-inner w-full ${resolvedTheme ==
            "dark"
              ? "hover:bg-slate-100 hover:text-black shadow-slate-500 border-slate-500"
              : "hover:bg-slate-900 shadow-slate-400 hover:text-slate-100 border-slate-500"}`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`flex justify-center items-center rounded-lg text-lg p-1 px-3 shadow-inner w-full ${resolvedTheme ==
            "dark"
              ? "bg-slate-700 hover:bg-slate-800 shadow-black border-slate-500"
              : "bg-slate-200 hover:bg-slate-300 shadow-slate-400 border-slate-500"}`}
          >
            Register
          </Link>
        </div>
        <div className="lg:flex hidden">
          <ModeSwitch hidden={false} />
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="lg:hidden">
            {open
              ? <X height={30} width={30} />
              : <Menu height={30} width={30} />}
          </PopoverTrigger>
          <PopoverContent
            className={`mt-5 lg:hidden mr-3 rounded-xl gap-4 flex border-2 flex-col ${resolvedTheme ==
            "dark"
              ? "bg-black border-slate-500"
              : "bg-slate-100 border-slate-300"}`}
          >
            <div className="flex md:hidden flex-col gap-3 justify-center items-center">
              {navLinks.map((navlink, index) =>
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={`font-bold text-xl shadow-inner border-2 w-full text-center p-2 rounded-full ${resolvedTheme ==
                  "dark"
                    ? "hover:bg-slate-800 border-slate-500"
                    : "hover:bg-slate-200 border-slate-300"}`}
                  key={index}
                  href={`#${navlink.id}`}
                >
                  {navlink.title}
                </Link>
              )}
            </div>
            <div className="h-[1px] md:hidden bg-slate-500 w-full rounded-full" />
            <div className="lg:hidden flex flex-col gap-2">
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                href="/login"
                className={`text-center rounded-full p-2 shadow-inner w-full border-2 ${resolvedTheme ==
                "dark"
                  ? "hover:bg-slate-100 hover:text-black shadow-black border-slate-500"
                  : "hover:bg-slate-900 shadow-slate-400 hover:text-slate-100 border-slate-500"}`}
              >
                Login
              </Link>
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                href="/register"
                className={`text-center rounded-full p-2 shadow-inner w-full border-2 ${resolvedTheme ==
                "dark"
                  ? "bg-slate-700 hover:bg-slate-800 shadow-black border-slate-500"
                  : "bg-slate-200 hover:bg-slate-300 shadow-slate-400 border-slate-500"}`}
              >
                Register
              </Link>
            </div>
            <div className="h-[2px] lg:hidden bg-slate-500 w-full rounded-full" />
            <ModeSwitch
              ButtonSize="w-full h-[45px]"
              ContentSize="w-[200px]"
              hidden={true}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
