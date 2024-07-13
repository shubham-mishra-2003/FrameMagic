"use client";


import { useTheme } from "next-themes";

export default function LoginLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`${resolvedTheme == "dark"
        ? "bg-black"
        : "bg-slate-200"} flex justify-center items-center h-screen`}
    >
      {children}
    </div>
  );
}
