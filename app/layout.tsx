import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import {dark} from "@clerk/themes"

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

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
          <div>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
