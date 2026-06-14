import type { Metadata } from "next";
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
  themeColor: "#F5F1EA",
  openGraph: {
    title: "Studio Forma | Architettura e Interior Design",
    description:
      "Spazi essenziali, sensibili e destinati a durare. Scopri progetti, servizi e approccio dello studio.",
    type: "website",
    locale: "it_IT",
  },
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
