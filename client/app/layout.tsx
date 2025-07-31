import type { Metadata } from "next";
import "./globals.css";
import { dmSans, roboto } from "./fonts";
import { RootLayoutProps } from "@/types";

export const metadata: Metadata = {
  title: "LinkMint – Modern URL Shortener with Credits",
  description:
    "LinkMint is a modern, coin-based URL shortener with built-in analytics, payments, and multilingual support.",
  keywords: [
    "LinkMint",
    "URL shortener",
    "modern link shortener",
    "Ethiopia",
    "Next.js",
    "coin system",
  ],
  authors: [{ name: "Ubeyidah", url: "https://github.com/ubeyidah" }],
  creator: "Ubeyidah",
  themeColor: "#695BF8",
  openGraph: {
    title: "LinkMint – URL Shortener with Coin System",
    description:
      "Create, track, and manage short URLs using a simple coin-based system.",
    // url: "https://linkmint.yourdomain.com",
    siteName: "LinkMint",
    type: "website",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
