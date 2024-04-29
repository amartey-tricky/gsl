import type { Metadata } from "next";
import { inter } from "@/components/ui/fonts"
import Header from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "GSL",
  description: "Your total logistics solution for importing and exporting goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f4e7e0]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
