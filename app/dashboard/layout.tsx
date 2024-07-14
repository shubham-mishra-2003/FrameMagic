import FixedHeader from "@/components/FixedHeader";
import Sidebar from "@/components/Sidebar";
import { auth } from "@clerk/nextjs/server";
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
    <div className="flex h-screen flex-1 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <FixedHeader />
        <div className="md:pt-0 flex h-full w-full overflow-y-auto pt-20">
          {children}
         </div>
      </div>
    </div>
  );
}
