import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PageTransition } from "./PageTransition";
import { SmoothScroll } from "./SmoothScroll";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <Header />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </>
  );
}
