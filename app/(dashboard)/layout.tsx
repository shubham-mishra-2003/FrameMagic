import DashboardHeader from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { auth } from "@clerk/nextjs/server";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Imagica",
  description: "AI tool for images",
  icons: "/logo.png"
};

export default function Dashboardlayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  auth().protect();

  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col">
        <DashboardHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-auto pt-20">
            {children}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
