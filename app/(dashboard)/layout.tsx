import DashboardHeader from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { auth } from "@clerk/nextjs/server";

export default function Dashboardlayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  auth().protect();

  return (
    <div>
      <DashboardHeader />
      <div className="flex">
        <Sidebar />
        <div className="pt-20">
          {children}
        </div>
      </div>
    </div>
  );
}
