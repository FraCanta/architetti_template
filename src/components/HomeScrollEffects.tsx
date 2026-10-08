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
    let media = gsap.matchMedia();
    let context: gsap.Context | undefined;
    let resizeTimer: number | undefined;
    const setup = () => {
      context?.revert();
      media.revert();
      media = gsap.matchMedia();
      context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const studio = root.querySelector<HTMLElement>("[data-studio-section]");
        if (studio) {
          const words = gsap.utils.toArray<HTMLElement>("[data-studio-fill]", studio);
          const windowElement = studio.querySelector<HTMLElement>("[data-studio-window]");
          const track = studio.querySelector<HTMLElement>("[data-studio-track]");
          const desktop = window.matchMedia("(min-width: 1280px) and (min-height: 800px)").matches;
          const photoDistance = () => Math.max(0, (track?.scrollHeight ?? 0) - (windowElement?.clientHeight ?? 0));
          const wordScrollDistance = window.innerHeight * 0.78;
          const scrollPerWord = wordScrollDistance / Math.max(words.length, 1);
          const measuredPhotoDistance = desktop ? photoDistance() : 0;
          const photoDuration = measuredPhotoDistance / scrollPerWord;
          const holdScrollDistance = desktop ? window.innerHeight * 0.16 : 0;
          const holdDuration = holdScrollDistance / scrollPerWord;
          if (desktop && track) gsap.set(track, { y: 0 });
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: studio,
              start: desktop ? "top top+=90" : "top 68%",
              end: desktop
                ? () => `+=${Math.ceil(wordScrollDistance + photoDistance() + holdScrollDistance)}`
                : "bottom 42%",
              pin: desktop,
              pinSpacing: desktop,
              anticipatePin: desktop ? 1 : 0,
              refreshPriority: desktop ? 1 : 0,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
          words.forEach((word, index) => {
            timeline.fromTo(word,
              { clipPath: "inset(0 100% 0 0)" },
              { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "none", immediateRender: false },
              index,
            );
          });
          if (desktop && track && measuredPhotoDistance > 0) {
            timeline.to(track, { y: () => -photoDistance(), duration: photoDuration, ease: "none" }, words.length);
            const hold = { progress: 0 };
            timeline.to(hold, { progress: 1, duration: holdDuration, ease: "none" }, words.length + photoDuration);
          }
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
    };

    let refreshAfterFonts = true;
    setup();
    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(setup, 180);
    };
    window.addEventListener("resize", handleResize);
    document.fonts?.ready.then(() => {
      if (refreshAfterFonts) setup();
    });

    return () => {
      refreshAfterFonts = false;
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(resizeTimer);
      media.revert();
      context?.revert();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
