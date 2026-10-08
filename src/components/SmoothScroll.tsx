"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let lenis: Lenis | undefined;
    let removeScrollListener: (() => void) | undefined;
    let tickLenis: ((time: number) => void) | undefined;

    function destroyLenis() {
      if (tickLenis) gsap.ticker.remove(tickLenis);
      tickLenis = undefined;
      removeScrollListener?.();
      removeScrollListener = undefined;
      lenis?.destroy();
      lenis = undefined;
      lenisRef.current = null;
    }

    function updateScrollBehavior() {
      destroyLenis();

      if (reducedMotion.matches) return;

      lenis = new Lenis({
        autoRaf: false,
        smoothWheel: true,
        lerp: 0.085,
        anchors: true,
        stopInertiaOnNavigate: true,
      });
      lenisRef.current = lenis;
      removeScrollListener = lenis.on("scroll", ScrollTrigger.update);
      tickLenis = (time) => lenis?.raf(time * 1000);
      gsap.ticker.add(tickLenis);
    }

    updateScrollBehavior();
    reducedMotion.addEventListener("change", updateScrollBehavior);

    return () => {
      reducedMotion.removeEventListener("change", updateScrollBehavior);
      destroyLenis();
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
