import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger
} from "../ui/sheet";
import { SideBar } from "@/constants";
import Link from "next/link";
import { AlignCenter } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "../Logo";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ModeSwitch from "../ModeSwitch";

const MobileSidebar = () => {
  const { resolvedTheme } = useTheme();

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex lg:hidden md:px-4 px-1">
        <AlignCenter />
      </SheetTrigger>
      <SheetContent
        className={`flex p-0 w-[290px] flex-col ${resolvedTheme == "dark"
          ? "bg-black"
          : "bg-slate-100"}`}
      >
        <SheetHeader className="px-3 pt-2 flex flex-col gap-2 justify-center items-center">
          <Logo />
          <div className="bg-gray-500 w-full flex h-[1px] rounded-lg" />
        </SheetHeader>
        <SheetDescription className="h-full p-3 font-bold flex flex-col overflow-y-auto">
          <ul className="gap-[6px] flex flex-col h-full overflow-y-auto justify-start items-center">
            {SideBar.slice(0, 6).map(link => {
              const isActive = `/${link.href}` === pathname;
              return (
                <li
                  key={link.title}
                  className="flex w-full justify-center items-center"
                >
                  <Link
                    onClick={closeSidebar}
                    href={`/${link.href}`}
                    className={`text-[16px] shadow-inner w-full flex justify-between gap-7 items-center rounded-full p-5 py-[15px] ${isActive
                      ? "bg-gradient-to-tr text-white to-blue-600 from-violet-600"
                      : resolvedTheme === "dark"
                        ? "hover:bg-gray-800 hover:shadow-slate-900 bg-gray-900 text-white"
                        : "bg-slate-200 hover:shadow-slate-400 text-black hover:bg-slate-300"}`}
                  >
                    {link.title}
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
          <ModeSwitch hidden={true} ButtonSize="w-full" ContentSize="w-44" />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
