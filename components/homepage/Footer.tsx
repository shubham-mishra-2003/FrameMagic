"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Logo from "../Logo";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger
} from "../ui/alert-dialog";
import { X } from "lucide-react";
import { AboutUs, privacyPolicy } from "@/constants";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const { resolvedTheme } = useTheme();

  const aboutMessage = AboutUs.map((about, index) =>
    <p
      key={index}
      className="text-sm font-semibold sm:text-[16px] md:text-lg lg:text-xl"
    >
      {about}
    </p>
  );

  const privacyMessage = privacyPolicy.map((privacy, index) =>
    <p
      key={index}
      className="text-sm font-semibold sm:text-[16px] md:text-lg lg:text-xl"
    >
      {privacy}
    </p>
  );

  if (isLoading) return "Loading...";

  return (
    <div
      className={`flex gap-2 py-4 justify-center items-center ${resolvedTheme ==
      "dark"
        ? "bg-black"
        : "bg-slate-100"}`}
    >
      <Logo />
      <div className="flex flex-col p-3 justify-center gap-2 items-center">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-3">
          <Dialog
            openButton="About Us"
            title="About Us"
            message={aboutMessage}
          />
          <div className="w-[2px] sm:flex hidden rounded-full bg-slate-500 py-3" />
          <div className="h-[2px] sm:hidden rounded-full bg-slate-500 mt-1 px-3" />
          <Dialog
            openButton="Privacy Policy"
            title="Privacy Policy"
            message={privacyMessage}
          />
        </div>
        <div className="flex justify-between items-center text-sm sm:text-[16px] md:text-lg font-bold">
          &copy; All rights reserved, By Connect and Team
        </div>
      </div>
    </div>
  );
};

export default Footer;

interface DialogProps {
  openButton: String;
  title: String;
  message: React.ReactNode[];
}

const Dialog = ({ openButton, title, message }: DialogProps) => {
  const { resolvedTheme } = useTheme();
  return (
    <AlertDialog>
      <AlertDialogTrigger className="hover:underline cursor-pointer font-semibold">
        {openButton}
      </AlertDialogTrigger>
      <AlertDialogContent
        className={`rounded-xl max-w-2xl flex flex-col p-1 max-h-screen border-2 ${resolvedTheme ==
        "dark"
          ? "border-slate-300 bg-slate-900 bg-opacity-85"
          : "border-slate-500 bg-slate-100 bg-opacity-85"}`}
      >
        <AlertDialogHeader className="flex flex-row px-5 py-2 justify-between items-center">
          <p className="text-3xl font-bold">
            {title}
          </p>
          <AlertDialogCancel className="p-0 border-0 w-fit">
            <X height={28} width={28} />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <AlertDialogDescription className="flex overflow-y-auto">
          <div className="px-7 flex flex-col gap-3">
            {message}
          </div>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};
