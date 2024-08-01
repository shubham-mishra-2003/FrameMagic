import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/sidebars/Sidebar";
import MediumDeviceSidebar from "@/components/sidebars/MediumDeviceSidebar";
import FixedHeader from "@/components/FixedHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FrameMagic | Connect and team",
  description: "AI tool for images restore, Remove background, image resize, object remove from image and change color of the objects",
  icons: "/logo.png"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
          <Toaster />
          <ThemeProvider>
            <SignedOut>
              {children}
            </SignedOut>
            <SignedIn>
              <div className="flex h-screen flex-1 overflow-hidden">
                <Sidebar />
                <MediumDeviceSidebar />
                <div className="flex-1 flex flex-col">
                  <FixedHeader />
                  <div className="flex h-full w-full overflow-y-auto pt-20">
                    {children}
                  </div>
                </div>
              </div>
            </SignedIn>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
