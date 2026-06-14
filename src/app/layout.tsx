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
