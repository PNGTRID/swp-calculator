import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SWP Calculator - Free Systematic Withdrawal Plan Calculator",
  description: "Free online SWP (Systematic Withdrawal Plan) calculator. Calculate your monthly withdrawals, final value, and plan your retirement income.",
  keywords: "swp calculator, systematic withdrawal plan, mutual fund calculator, investment calculator",
  authors: [{ name: "SWP Calculator" }],
  openGraph: {
    title: "SWP Calculator - Free Systematic Withdrawal Plan Calculator",
    description: "Free online SWP (Systematic Withdrawal Plan) calculator. Calculate your monthly withdrawals, final value, and plan your retirement income.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SWP Calculator - Free Systematic Withdrawal Plan Calculator",
    description: "Free online SWP (Systematic Withdrawal Plan) calculator. Calculate your monthly withdrawals, final value, and plan your retirement income.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
