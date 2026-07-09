import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nxtcorex",
  description: "nxtcorex官方网站",
  icons: {
    icon: "/img/logo_c.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="scroll-reveal-ready light">
      <body className={inter.className}>{children}</body>
    </html>
  );
}