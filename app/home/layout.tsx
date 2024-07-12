import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Imagica",
  description: "AI tool for images",
  icons: "/logo.png"
};

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <ThemeProvider>{children}</ThemeProvider>
  );
}
