import type { Metadata } from "next";
import "./globals.css";
import { dmSans, roboto } from "./fonts";
import { RootLayoutProps } from "@/types";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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
  openGraph: {
    title: "LinkMint – URL Shortener with Coin System",
    description:
      "Create, track, and manage short URLs using a simple coin-based system.",
    // url: "https://linkmint.yourdomain.com",
    siteName: "LinkMint",
    type: "website",
  },
};
interface iAppProps extends RootLayoutProps {
  params: Promise<{ locale: string }>;
}
export default async function RootLayout({ children, params }: iAppProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={`${roboto.variable} ${dmSans.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
