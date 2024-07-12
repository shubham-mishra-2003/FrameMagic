import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger
} from "./ui/sheet";
import navLinks from "@/constants";
import Link from "next/link";
import { AlignCenter } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "./Logo";

const MobileSidebar = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger className="flex md:hidden">
        <AlignCenter />
      </SheetTrigger>
      <SheetContent
        className={`flex p-2 max-w-96 flex-col ${resolvedTheme == "dark"
          ? "bg-black"
          : "bg-slate-200"}`}
      >
        <SheetHeader className="px-3 pt-2 flex flex-col gap-2 justify-center items-center">
          <Logo />
          <div className="bg-gray-500 w-full flex h-[1px] rounded-lg" />
        </SheetHeader>
        <SheetDescription className="h-full overflow-y-auto">
          <ul className="gap-4 pb-2 flex flex-col h-full overflow-y-auto justify-start items-center">
            {navLinks.map(link =>
              <li
                key={link.title}
                className="flex text-[15px] font-bold w-full justify-center items-center"
              >
                <Link
                  href={`/${link.href}`}
                  className="hover:bg-gray-800 bg-gray-900 w-full flex justify-between gap-2 items-center rounded-full px-6 p-4"
                >
                  {link.title}
                  <link.icon />
                </Link>
              </li>
            )}
          </ul>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
