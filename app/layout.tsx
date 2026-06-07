import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Frank_Ruhl_Libre, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const hebrew = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-hebrew",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moshejs.github.io"),
  title: "Klippot — Four Corruptions",
  description: "An inquiry in four movements.",
  openGraph: {
    title: "Klippot — Four Corruptions",
    description: "An inquiry in four movements.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klippot — Four Corruptions",
    description: "An inquiry in four movements.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${hebrew.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
