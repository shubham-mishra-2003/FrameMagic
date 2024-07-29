"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Logo from "../Logo";
import Link from "next/link";
import { navLinks } from "@/constants";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const { resolvedTheme } = useTheme();

  if (isLoading) return "Loading...";

  return (
    <div
      className={`flex p-3 justify-between items-center ${resolvedTheme ==
      "dark"
        ? "bg-black"
        : "bg-slate-100"}`}
    >
      <Logo />
      <div>
        {navLinks.map((footerLinks, index) =>
          <Link key={index} href={footerLinks.id}>
            {footerLinks.title}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Footer;
