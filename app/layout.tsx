import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Delta Prime Global | Vietnam To Middle East Export House",
    template: "%s | Delta Prime Global",
  },
  description: site.description,
  keywords: [
    "Delta Prime Global",
    "Vietnam exporter to Dubai",
    "Vietnam artichoke tea exporter",
    "Vietnam agarwood exporter",
    "Vietnam bird nest exporter",
    "OEM private label Vietnam",
    "Middle East importers",
    "UAE distributors",
  ],
  openGraph: {
    title: "Delta Prime Global",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: site.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
