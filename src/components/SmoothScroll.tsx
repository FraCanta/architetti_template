"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let lenis: Lenis | undefined;

    function updateScrollBehavior() {
      lenis?.destroy();
      lenis = undefined;
      lenisRef.current = null;

      if (reducedMotion.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        lerp: 0.085,
        anchors: true,
        stopInertiaOnNavigate: true,
      });
      lenisRef.current = lenis;
    }

    updateScrollBehavior();
    reducedMotion.addEventListener("change", updateScrollBehavior);

    return () => {
      reducedMotion.removeEventListener("change", updateScrollBehavior);
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, {
      immediate: true,
      force: true,
    });
  }, [pathname]);

  return null;
}
