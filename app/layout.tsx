import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/sidebars/Sidebar";
import MediumDeviceSidebar from "@/components/sidebars/MediumDeviceSidebar";
import FixedHeader from "@/components/FixedHeader";
import { auth } from "@clerk/nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imagica",
  description: "AI tool for images",
  icons: "/logo.png"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
          <Toaster />
          <ThemeProvider>
            {!userId
              ? children
              : <div className="flex h-screen flex-1 overflow-hidden">
                  <Sidebar />
                  <MediumDeviceSidebar />
                  <div className="flex-1 flex flex-col">
                    <FixedHeader />
                    <div className="flex h-full w-full overflow-y-auto pt-20">
                      {children}
                    </div>
                  </div>
                </div>}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
