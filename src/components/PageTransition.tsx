"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type TransitionPhase = "idle" | "covering" | "covered" | "revealing";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const phaseRef = useRef<TransitionPhase>("idle");
  const pendingHref = useRef<string | null>(null);
  const isContentVisible = phase === "idle" || phase === "revealing";

  const updatePhase = (nextPhase: TransitionPhase) => {
    phaseRef.current = nextPhase;
    setPhase(nextPhase);
  };

  useEffect(() => {
    if (phaseRef.current !== "covered") return;

    const revealTimer = window.setTimeout(() => {
      updatePhase("revealing");
    }, 120);

    return () => window.clearTimeout(revealTimer);
  }, [pathname]);

  useEffect(() => {
    const handleNavigation = (event: MouseEvent) => {
      if (
        reduceMotion ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        phaseRef.current !== "idle"
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (
        !anchor ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.dataset.noTransition === "true"
      ) {
        return;
      }

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);

      if (
        destination.origin !== current.origin ||
        destination.protocol !== "http:" && destination.protocol !== "https:" ||
        destination.pathname === current.pathname &&
          destination.search === current.search
      ) {
        return;
      }

      event.preventDefault();
      pendingHref.current = `${destination.pathname}${destination.search}${destination.hash}`;
      updatePhase("covering");
    };

    document.addEventListener("click", handleNavigation, true);
    return () => document.removeEventListener("click", handleNavigation, true);
  }, [reduceMotion]);

  const handleCurtainAnimationComplete = () => {
    if (phaseRef.current === "covering" && pendingHref.current) {
      const destination = pendingHref.current;
      pendingHref.current = null;
      updatePhase("covered");
      router.push(destination);
      return;
    }

    if (phaseRef.current === "revealing") {
      updatePhase("idle");
    }
  };

  const curtainY =
    phase === "idle"
      ? "100%"
      : phase === "revealing"
        ? "-100%"
        : "0%";

  return (
    <>
      <motion.main
        key={pathname}
        initial={false}
        animate={{
          opacity: reduceMotion || isContentVisible ? 1 : 0,
          y: reduceMotion || isContentVisible ? 0 : 10,
        }}
        transition={{
          duration: phase === "revealing" ? 0.82 : 0,
          delay: phase === "revealing" ? 0.22 : 0,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.main>

      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#20211f] text-white"
          initial={false}
          animate={{ y: curtainY }}
          transition={{
            duration: phase === "idle" ? 0 : 0.72,
            ease: [0.76, 0, 0.24, 1],
          }}
          onAnimationComplete={handleCurtainAnimationComplete}
        >
          <motion.div
            className="absolute inset-x-0 bottom-0 h-2 bg-[#9a725d]"
            initial={false}
            animate={{
              scaleX: phase === "covering" || phase === "covered" ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
          />
          <motion.p
            className="text-[18px] font-medium uppercase tracking-[0.18em] sm:text-[22px]"
            initial={false}
            animate={{
              opacity: phase === "covering" || phase === "covered" ? 1 : 0,
              y: phase === "covering" || phase === "covered" ? 0 : 12,
            }}
            transition={{ duration: 0.35, delay: phase === "covering" ? 0.2 : 0 }}
          >
            Studio Forma
          </motion.p>
        </motion.div>
      )}
    </>
  );
}
