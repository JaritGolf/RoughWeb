import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import ReactPlugin from "@stagewise-plugins/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find Your Feel - Discover Your Perfect Style",
  description: "Find Your Feel - Where comfort meets style. Discover the perfect balance of design and functionality for your lifestyle.",
  keywords: ["lifestyle", "comfort", "style", "design", "home", "furniture", "wellness"],
  authors: [{ name: "FeelBrand" }],
  creator: "FeelBrand",
  publisher: "FeelBrand",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://findyourfeel.com",
    title: "Find Your Feel - Discover Your Perfect Style",
    description: "Find Your Feel - Where comfort meets style. Discover the perfect balance of design and functionality for your lifestyle.",
    siteName: "Find Your Feel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Feel - Discover Your Perfect Style",
    description: "Find Your Feel - Where comfort meets style. Discover the perfect balance of design and functionality for your lifestyle.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6366f1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen">
          {children}
        </div>
        <StagewiseToolbar 
          config={{
            plugins: [ReactPlugin]
          }}
        />
      </body>
    </html>
  );
}
