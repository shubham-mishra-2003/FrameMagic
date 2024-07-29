"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Logo from "../Logo";
import Link from "next/link";
import { navLinks } from "@/constants";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from "../ui/alert-dialog";
import { X } from "lucide-react";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, []);

  const { resolvedTheme } = useTheme();

  if (isLoading) return "Loading...";

  return (
    <div
      className={`flex p-3 justify-between items-center ${resolvedTheme ==
      "dark"
        ? "bg-black"
        : "bg-slate-300"}`}
    >
      <Logo />
      <AlertDialog>
        <AlertDialogTrigger>
          open
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogCancel>
            <X />
          </AlertDialogCancel>
          Shadoo bkl hai
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Footer;
