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

// hebrew subset only: this face renders exclusively Hebrew strings, and the
// latin subset was the page's largest preloaded asset (~44 KB) — stray Latin
// would still resolve via next/font's unicode-range fallback rules.
const hebrew = Frank_Ruhl_Libre({
  subsets: ["hebrew"],
  weight: ["300", "400", "500"],
  variable: "--font-hebrew",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moshejs.github.io"),
  title: "Klippot — Four Corruptions",
  description:
    "Four corruptions of fire, water, earth, and air — a kabbalistic inquiry in four movements.",
  // Next does not prepend basePath to hand-written metadata URLs, so the
  // /kelipot prefix is explicit here (metadataBase stays the bare host so
  // file-convention assets like the OG image don't get double-prefixed).
  alternates: { canonical: "/kelipot/" },
  openGraph: {
    title: "Klippot — Four Corruptions",
    description:
      "Four corruptions of fire, water, earth, and air — a kabbalistic inquiry in four movements.",
    url: "/kelipot/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klippot — Four Corruptions",
    description:
      "Four corruptions of fire, water, earth, and air — a kabbalistic inquiry in four movements.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0908",
  colorScheme: "dark",
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
