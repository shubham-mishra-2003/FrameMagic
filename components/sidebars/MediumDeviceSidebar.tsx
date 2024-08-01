"use client";

import Link from "next/link";
import { SideBar } from "../../constants/index";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModeSwitch from "../ModeSwitch";

const MediumDeviceSidebar = () => {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <Loader />;

  return (
    <div
      className={`hidden pb-2 pt-20 lg:hidden gap-2 flex-col font-bold justify-between md:flex h-full ${resolvedTheme ===
      "dark"
        ? "bg-black"
        : "bg-slate-100"}`}
    >
      <div className="h-full flex justify-between items-center flex-col">
        <ul className="gap-[6px] p-3 flex flex-col h-full overflow-y-auto justify-start items-center">
          {SideBar.map(link => {
            const isActive = `/${link.href}` === pathname;
            return (
              <li
                key={link.href}
                className="flex w-full justify-center items-center"
              >
                <Link
                  title={link.title}
                  href={`/${link.href}`}
                  className={`text-[16px] shadow-inner flex rounded-full p-5 ${isActive
                    ? "bg-gradient-to-tr text-white to-blue-600 from-violet-600"
                    : resolvedTheme === "dark"
                      ? "hover:bg-gray-800 hover:shadow-slate-900 bg-gray-900 text-white"
                      : "bg-slate-200 hover:shadow-slate-400 text-black hover:bg-slate-300"}`}
                >
                  <Image
                    src={link.icon}
                    height={20}
                    className={`${isActive
                      ? "invert"
                      : resolvedTheme == "dark" ? "invert" : ""}`}
                    width={20}
                    alt="sidebar icon"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <ModeSwitch hidden={false} ButtonSize="w-fit" />
      </div>
    </div>
  );
};

export default MediumDeviceSidebar;

const Loader = () => {
  return (
    <div className="h-full lg:hidden pt-20 bg-black hidden md:flex flex-col justify-between items-center p-2">
      <div className="flex pt-2 flex-col items-center justify-center gap-2">
        <div className="bg-slate-300 h-14 w-14 rounded-full animate-pulse" />
        <div className="bg-slate-300 h-14 w-14 rounded-full animate-pulse" />
        <div className="bg-slate-300 h-14 w-14 rounded-full animate-pulse" />
        <div className="bg-slate-300 h-14 w-14 rounded-full animate-pulse" />
        <div className="bg-slate-300 h-14 w-14 rounded-full animate-pulse" />
        <div className="bg-slate-300 h-14 w-14 rounded-full animate-pulse" />
      </div>
      <div>
        <div className="bg-slate-300 h-14 w-14 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

