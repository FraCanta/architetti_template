"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function HomeScrollEffects({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const studio = root.querySelector<HTMLElement>("[data-studio-section]");
        if (studio) {
          const desktopStudio = window.matchMedia("(min-width: 1024px)").matches;
          const words = gsap.utils.toArray<HTMLElement>("[data-studio-word]", studio);
          const photos = gsap.utils.toArray<HTMLElement>("[data-studio-photo]", studio);
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: studio,
              start: desktopStudio ? "top top+=90" : "top 78%",
              end: desktopStudio ? () => `+=${window.innerHeight * 1.25}` : "bottom top+=40",
              pin: desktopStudio ? studio : false,
              anticipatePin: desktopStudio ? 1 : 0,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
          words.forEach((word, index) => {
            timeline.fromTo(word, { yPercent: 65, autoAlpha: 0 }, {
              yPercent: 0,
              autoAlpha: 1,
              color: "#9a725d",
              duration: 0.55,
              ease: "power2.out",
              immediateRender: false,
            }, index * 0.65);
          });
          timeline.to(words, { color: "#20211f", duration: 0.2 }, 2.05);
          timeline.fromTo(photos[0], { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.95, ease: "none", immediateRender: false }, 2.35);
          timeline.fromTo(photos[1], { clipPath: "inset(0 0 0 100%)", xPercent: 7 }, { clipPath: "inset(0 0 0 0%)", xPercent: 0, duration: 1.05, ease: "none", immediateRender: false }, 3.15);
        }

        const testimonials = root.querySelector<HTMLElement>("[data-testimonials-section]");
        if (testimonials) {
          const timeline = gsap.timeline({
            scrollTrigger: { trigger: testimonials, start: "top 82%", end: "top 35%", scrub: true },
          });
          timeline.fromTo("[data-review-heading]", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.6 });
          timeline.fromTo("[data-review-item]", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" }, 0.25);
        }

        const cta = root.querySelector<HTMLElement>("[data-cta-section]");
        if (cta) {
          const timeline = gsap.timeline({
            scrollTrigger: { trigger: cta, start: "top 92%", end: "top 32%", scrub: true },
          });
          timeline.fromTo("[data-cta-photo]", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.9, ease: "none" });
          timeline.fromTo("[data-cta-title]", { yPercent: 105 }, { yPercent: 0, duration: 0.65, ease: "power2.out" }, 0.25);
          timeline.fromTo("[data-cta-copy]", { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 0.5);
          timeline.fromTo("[data-cta-button]", { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45 }, 0.68);
          gsap.to("[data-cta-photo]", {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: cta, start: "top bottom", end: "bottom top", scrub: true },
          });
        }
      });
    }, root);

    ScrollTrigger.refresh();

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
