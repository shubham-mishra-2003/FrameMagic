import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger
} from "./ui/sheet";
import { SideBar } from "@/constants";
import Link from "next/link";
import { AlignCenter } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileSidebar = () => {
  const { resolvedTheme } = useTheme();

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex md:hidden">
        <AlignCenter />
      </SheetTrigger>
      <SheetContent
        className={`flex p-0 max-w-96 flex-col ${resolvedTheme == "dark"
          ? "bg-black"
          : "bg-slate-100"}`}
      >
        <SheetHeader className="px-3 pt-2 flex flex-col gap-2 justify-center items-center">
          <Logo />
          <div className="bg-gray-500 w-full flex h-[1px] rounded-lg" />
        </SheetHeader>
        <SheetDescription className="h-full flex flex-col overflow-y-auto">
          <ul className="gap-4 px-1 pb-2 flex flex-col h-full overflow-y-auto justify-start items-center">
            {SideBar.slice(0, 6).map(link => {
              const isActive = `/${link.href}` === pathname;
              return (
                <li
                  key={link.title}
                  className="flex text-[15px] font-bold w-full justify-center items-center"
                >
                  <Link
                    href={`/${link.href}`}
                    className={`w-full flex justify-between gap-2 items-center rounded-full px-6 p-4 ${isActive
                      ? "bg-gradient-to-tr to-blue-600 text-white from-violet-600"
                      : resolvedTheme === "dark"
                        ? "hover:bg-gray-800 bg-gray-900 text-white"
                        : "bg-slate-200 text-black hover:bg-slate-300"}`}
                    onClick={closeSidebar}
                  >
                    {link.title}
                    <Image
                      src={link.icon}
                      height={20}
                      className={`${isActive ? 'invert' : resolvedTheme == "dark" ? "invert" : ''}`}
                      width={20}
                      alt="sidebar icon"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="gap-2 px-1 py-2 flex flex-col">
            {SideBar.slice(6).map(link => {
              const isActive = `/${link.href}` === pathname;
              return (
                <li
                  key={link.title}
                  className="flex text-[15px] font-bold w-full justify-center items-center"
                >
                  <Link
                    href={`/${link.href}`}
                    className={`w-full flex justify-between gap-2 items-center rounded-full px-6 p-4 ${isActive
                      ? "bg-gradient-to-tr to-blue-600 text-white from-violet-600"
                      : resolvedTheme === "dark"
                        ? "hover:bg-gray-800 bg-gray-900 text-white"
                        : "bg-slate-200 text-black hover:bg-slate-300"}`}
                    onClick={closeSidebar}
                  >
                    {link.title}
                    <Image
                      src={link.icon}
                      height={20}
                      className={`${isActive ? 'invert' : resolvedTheme == "dark" ? "invert" : ''}`}
                      width={20}
                      alt="sidebar icon"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
