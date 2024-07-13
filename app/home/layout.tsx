import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Wizard",
  description: "AI tool for images",
  icons: "/logo.png"
};

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <div>{children}</div>
  );
}
