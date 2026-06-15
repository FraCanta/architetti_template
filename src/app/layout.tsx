import type { Metadata, Viewport } from "next";
import "@fontsource-variable/cabin";
import "@fontsource-variable/raleway";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://ateliernova.example"),
  title: {
    default: "Studio Forma | Architettura e Interior Design",
    template: "%s | Studio Forma",
  },
  description:
    "Studio di architettura specializzato in progettazione, interior design, ristrutturazioni e direzione lavori.",
  keywords: [
    "studio architettura",
    "interior design",
    "ristrutturazioni",
    "direzione lavori",
    "consulenza architettonica",
    "Milano",
  ],
  authors: [{ name: "Studio Forma" }],
  creator: "Studio Forma",
  publisher: "Studio Forma",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Studio Forma | Architettura e Interior Design",
    description:
      "Spazi essenziali, sensibili e destinati a durare. Scopri progetti, servizi e approccio dello studio.",
    url: "/",
    siteName: "Studio Forma",
    images: [
      {
        url: "/images/villa-hero.png",
        width: 1200,
        height: 630,
        alt: "Architettura contemporanea progettata da Studio Forma",
      },
    ],
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Forma | Architettura e Interior Design",
    description:
      "Architettura contemporanea, interior design e ristrutturazioni su misura.",
    images: ["/images/villa-hero.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F1EA",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
