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
  alternates: {
    canonical: "https://swpcalculator.online/",
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3B82F6' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "SWP Calculator - Free Systematic Withdrawal Plan Calculator",
    description: "Free online SWP (Systematic Withdrawal Plan) calculator. Calculate your monthly withdrawals, final value, and plan your retirement income.",
    type: "website",
    locale: "en_US",
    url: "https://swpcalculator.online/",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SWP Calculator - Free Online Tool',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SWP Calculator - Free Systematic Withdrawal Plan Calculator",
    description: "Free online SWP (Systematic Withdrawal Plan) calculator. Calculate your monthly withdrawals, final value, and plan your retirement income.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#3B82F6',
};

// JSON-LD for WebApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "SWP Calculator",
  "description": "Free online SWP (Systematic Withdrawal Plan) calculator for mutual fund investors. Calculate your monthly withdrawals, final value, and plan your retirement income.",
  "url": "https://swpcalculator.online",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
