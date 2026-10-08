"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { Button } from "./Button";
import { Photo } from "./Photo";
import type { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  text: string;
};

export function Hero({ eyebrow, title, text }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro.fromTo("[data-hero-eyebrow]", { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 });
        intro.fromTo("[data-hero-line]", { yPercent: 125 }, { yPercent: 0, duration: 0.8, stagger: 0.12 }, "<0.08");
        intro.fromTo("[data-hero-photo]", { clipPath: "inset(0 0 0 100%)" }, { clipPath: "inset(0 0 0 0%)", duration: 1.15, ease: "power2.inOut" }, "<0.12");
        intro.fromTo(".hero-image", { xPercent: 5, scale: 1.08 }, { xPercent: 0, scale: 1, duration: 1.2, ease: "power2.out" }, "<");
        intro.fromTo("[data-hero-detail]", { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.1 }, "<0.48");

        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        })
          .to("[data-hero-copy]", { y: -28, ease: "none" }, 0)
          .to(".hero-image", { yPercent: 7, ease: "none" }, 0);

      });
    }, sectionRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative border-b border-[#dedbd4]">
      <div className="grid lg:h-140 lg:grid-cols-[46%_54%] xl:h-155 2xl:h-[calc(100vh-80px)] ">
        <div data-hero-copy className="flex flex-col justify-center px-5 py-16 sm:px-[5vw] lg:py-20">
          {eyebrow && <p data-hero-eyebrow className="eyebrow mb-6">{eyebrow}</p>}
          <h1 className="font-display  text-[2.65rem] leading-[1.04] sm:text-[3.1rem] lg:text-[4rem] 2xl:text-[5rem] 3xl:text-[6rem] ">
            {title}
          </h1>
          <p data-hero-detail className="mt-7 max-w-md text-[16px] 2xl:text-[18px] leading-normal tracking-wide text-[#696a65]">
            {text}
          </p>
          <div data-hero-detail className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/progetti">Scopri i progetti</Button>
            <Button href="/contatti" variant="secondary">
              Prenota una consulenza
            </Button>
          </div>
        </div>
        <div data-hero-photo className="relative min-h-[420px] overflow-hidden lg:h-full">
          <Photo
            src="/images/villa-hero.png"
            alt="Placeholder per una grande fotografia di architettura contemporanea"
            priority
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="h-full min-h-[420px]"
            imageClassName="hero-image"
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-[5vw] hidden items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-[#696a65] lg:flex">
        <span>Scroll</span>
        <span className="h-px w-10 bg-[#696a65]" />
      </div>
    </section>
  );
}
