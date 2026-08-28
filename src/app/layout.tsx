import type { Metadata } from "next";
import { SITE_URL } from "./shared-metadata";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Required for opengraph-image/twitter-image to resolve to absolute URLs.
  metadataBase: new URL(SITE_URL),
  title: "BirchBuild | Chicago Development & Construction Management",
  description:
    "BirchBuild develops residential and mixed-use projects across Chicago's near-northwest side, and provides construction management for owners and investors.",
  // No `alternates.canonical` here — it would be inherited by every route and
  // point them all at the homepage. Each page sets its own.
  openGraph: {
    title: "BirchBuild | Chicago Development & Construction Management",
    description:
      "Residential and mixed-use development plus construction management across Chicago.",
    url: SITE_URL,
    siteName: "BirchBuild",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BirchBuild | Chicago Development & Construction Management",
    description:
      "Residential and mixed-use development plus construction management across Chicago.",
  },
  // Google Search Console ownership proof for the www property.
  // Removing this un-verifies the property — leave it in place.
  verification: {
    google: "-ZB7_RlafRuSlLqrgj48bOejGv0oHcon2QBb8LbmPYo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
