"use client";

import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Service } from "@/data/services";
import { Photo } from "./Photo";

gsap.registerPlugin(ScrollTrigger);

const servicePhotos: Record<string, { src: string; alt: string }> = {
  "progettazione-architettonica": {
    src: "/images/studio-architect-working.png",
    alt: "Architetta al lavoro su un progetto",
  },
  "interior-design": {
    src: "/images/interior-living-warm.png",
    alt: "Interno residenziale con arredi e materiali naturali",
  },
  ristrutturazioni: {
    src: "/images/detail-stair-oak.png",
    alt: "Dettaglio di una scala in legno in un interno ristrutturato",
  },
  "direzione-lavori": {
    src: "/images/studio-client-meeting.png",
    alt: "Confronto di lavoro tra professionisti e committenti",
  },
  "render-3d-concept": {
    src: "/images/villa-cube-pool.png",
    alt: "Render architettonico di una villa contemporanea",
  },
  consulenze: {
    src: "/images/materials-flatlay.png",
    alt: "Campioni materici e disegni per una consulenza progettuale",
  },
};

export function ServicesExperience({ services }: { services: Service[] }) {
  const rootRef = useRef<HTMLElement>(null);
  const incomingRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const activeService = services[activeIndex];
  const previousService = previousIndex === null ? null : services[previousIndex];
  const activePhoto = activeService ? servicePhotos[activeService.slug] : undefined;
  const previousPhoto = previousService ? servicePhotos[previousService.slug] : undefined;

  const selectService = useCallback((index: number) => {
    if (index === activeIndexRef.current) return;
    const previous = activeIndexRef.current;
    activeIndexRef.current = index;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveIndex(index);
      setPreviousIndex(null);
      return;
    }
    setPreviousIndex(previous);
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const clearTransition = (event: MediaQueryListEvent) => {
      if (event.matches) setPreviousIndex(null);
    };
    reducedMotion.addEventListener("change", clearTransition);
    return () => reducedMotion.removeEventListener("change", clearTransition);
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            end: "top 55%",
            scrub: true,
          },
        });
        timeline.fromTo("[data-services-heading]", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.55 });
        gsap.set("[data-service-row]", { clearProps: "transform,opacity,visibility" });
        const rows = gsap.utils.toArray<HTMLElement>("[data-service-row]", root);
        if (window.matchMedia("(min-width: 1024px)").matches && rows.length > 1) {
          ScrollTrigger.create({
            trigger: root,
            start: "top top+=90",
            end: () => `+=${window.innerHeight * 1.25}`,
            pin: root,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const nextIndex = Math.min(rows.length - 1, Math.floor(self.progress * rows.length));
              selectService(nextIndex);
            },
          });
        } else {
          rows.forEach((row, index) => {
            ScrollTrigger.create({
              trigger: row,
              start: "top 58%",
              end: "bottom 42%",
              onEnter: () => selectService(index),
              onEnterBack: () => selectService(index),
            });
          });
        }
      });
    }, root);

    return () => {
      media.revert();
      context.revert();
    };
  }, [selectService]);

  useLayoutEffect(() => {
    const incoming = incomingRef.current;
    const root = rootRef.current;
    if (previousIndex === null || !incoming || !root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          incoming,
          { clipPath: "inset(0 0 0 100%)", xPercent: 3 },
          {
            clipPath: "inset(0 0 0 0%)",
            xPercent: 0,
            duration: 0.72,
            ease: "power2.inOut",
            onComplete: () => setPreviousIndex(null),
          },
        );
      });
    }, root);

    return () => {
      media.revert();
      context.revert();
    };
  }, [activeIndex, previousIndex]);

  return (
    <section ref={rootRef} data-services-section className="border-y border-[#dedbd4] bg-[#f5f3ee] section-space" aria-labelledby="services-title">
      <div className="container-site">
        <h2 id="services-title" data-services-heading className="eyebrow mb-8 flex items-center gap-3 after:h-px after:w-10 after:bg-[#b89a87]">
          I nostri servizi
        </h2>

        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:gap-14">
          <div>
            <ol className="service-list divide-y divide-[#d7d3cb] border-y border-[#d7d3cb]">
              {services.map((service, index) => {
                const photo = servicePhotos[service.slug];
                const isActive = activeIndex === index;
                return (
                  <li key={service.slug} data-service-row>
                    <Link
                      href={`/servizi#${service.slug}`}
                      onMouseEnter={() => selectService(index)}
                      onFocus={() => selectService(index)}
                      className={`service-list-link group flex min-h-24 items-center gap-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a725d] ${isActive ? "is-active" : ""}`}
                    >
                      <span className="w-8 shrink-0 text-[11px] tracking-[0.12em] text-[#9a725d]">{service.number}</span>
                      <span className="min-w-0 flex-1">
                        <span className="service-list-title block font-display text-lg sm:text-xl">{service.title}</span>
                        <span className="mt-1 block text-[13px] leading-5 text-[#696a65]">{service.shortDescription}</span>
                      </span>
                      <Photo
                        src={photo?.src ?? "/images/materials-flatlay.png"}
                        alt=""
                        className="service-mobile-thumb relative aspect-[4/3] w-20 shrink-0 sm:w-24 lg:hidden"
                        sizes="96px"
                      />
                      <Icon icon="tabler:arrow-up-right" className="service-list-arrow h-4 w-4 shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ol>
            <p id="services-active-preview" className="sr-only" aria-live="polite">
              Anteprima: {activeService?.title}
            </p>
          </div>

          <div data-service-preview className="service-preview relative hidden aspect-[4/3] overflow-hidden bg-[#e9e5dc] lg:block" aria-hidden="true">
            {previousPhoto && (
              <div className="absolute inset-0">
                <Image src={previousPhoto.src} alt="" fill sizes="(max-width: 1279px) 50vw, 52vw" className="object-cover" />
              </div>
            )}
            {activePhoto && (
              <div ref={incomingRef} className={`absolute inset-0${previousPhoto ? "" : " service-preview-current"}`}>
                <Image src={activePhoto.src} alt="" fill sizes="(max-width: 1279px) 50vw, 52vw" className="object-cover" />
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20211f]/65 to-transparent px-7 pb-6 pt-20 text-white">
              <p className="text-xs uppercase tracking-[0.14em] text-white/80">{activeService?.number} — {activeService?.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
