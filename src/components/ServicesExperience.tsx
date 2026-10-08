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
  const manualActiveRef = useRef(false);
  const transitionVersionRef = useRef(0);
  const touchFocusRef = useRef(false);
  const syncAutoSelectionRef = useRef<() => void>(() => {});
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const activeService = services[activeIndex];
  const previousService = previousIndex === null ? null : services[previousIndex];
  const activePhoto = activeService ? servicePhotos[activeService.slug] : undefined;
  const previousPhoto = previousService ? servicePhotos[previousService.slug] : undefined;

  const selectService = useCallback((index: number, manual = false) => {
    if (manual) manualActiveRef.current = true;
    else if (manualActiveRef.current) return;
    if (index === activeIndexRef.current) return;
    const previous = activeIndexRef.current;
    activeIndexRef.current = index;
    transitionVersionRef.current += 1;
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
        let scrollProgress = 0;
        const updateNearestRow = () => {
          if (manualActiveRef.current || rows.length === 0) return;
          const center = window.innerHeight * 0.52;
          let activeRow = 0;
          let shortestDistance = Number.POSITIVE_INFINITY;
          rows.forEach((row, index) => {
            const bounds = row.getBoundingClientRect();
            const distance = center < bounds.top
              ? bounds.top - center
              : center > bounds.bottom
                ? center - bounds.bottom
                : 0;
            if (distance < shortestDistance) {
              shortestDistance = distance;
              activeRow = index;
            }
          });
          selectService(activeRow);
        };
        const updatePinnedProgress = (progress: number) => {
          scrollProgress = progress;
          if (!manualActiveRef.current && services.length > 0) {
            const index = Math.min(services.length - 1, Math.floor(progress * services.length));
            selectService(index);
          }
        };
        syncAutoSelectionRef.current = () => {
          if (window.matchMedia("(min-width: 1280px) and (min-height: 800px)").matches) {
            updatePinnedProgress(scrollProgress);
          } else {
            updateNearestRow();
          }
        };

        const scrollMedia = gsap.matchMedia();
        scrollMedia.add("(min-width: 1280px) and (min-height: 800px)", () => {
          const trigger = ScrollTrigger.create({
            trigger: root,
            start: "top top+=90",
            end: () => `+=${Math.round(window.innerHeight * services.length * 0.68)}`,
            pin: root,
            pinSpacing: true,
            invalidateOnRefresh: true,
            onEnter: (self) => updatePinnedProgress(self.progress),
            onEnterBack: (self) => updatePinnedProgress(self.progress),
            onUpdate: (self) => updatePinnedProgress(self.progress),
            onLeaveBack: () => updatePinnedProgress(0),
          });
          return () => trigger.kill();
        });
        scrollMedia.add("(max-width: 1279px), (max-height: 799px)", () => {
          const trigger = ScrollTrigger.create({
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            onEnter: updateNearestRow,
            onEnterBack: updateNearestRow,
            onUpdate: updateNearestRow,
          });
          return () => trigger.kill();
        });
        return () => {
          syncAutoSelectionRef.current = () => {};
          scrollMedia.revert();
        };
      });
    }, root);

    return () => {
      media.revert();
      context.revert();
    };
  }, [selectService, services.length]);

  useLayoutEffect(() => {
    const incoming = incomingRef.current;
    const root = rootRef.current;
    if (previousIndex === null || !incoming || !root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const transitionVersion = transitionVersionRef.current;

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
            onComplete: () => {
              if (transitionVersionRef.current === transitionVersion) {
                setPreviousIndex(null);
              }
            },
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
            <ol
              className="service-list divide-y divide-[#d7d3cb] border-y border-[#d7d3cb]"
              onPointerLeave={(event) => {
                if (!event.currentTarget.contains(document.activeElement)) {
                  manualActiveRef.current = false;
                  syncAutoSelectionRef.current();
                }
              }}
              onPointerUp={(event) => {
                if (event.pointerType === "touch") {
                  manualActiveRef.current = false;
                  syncAutoSelectionRef.current();
                }
              }}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  manualActiveRef.current = false;
                  syncAutoSelectionRef.current();
                }
              }}
            >
              {services.map((service, index) => {
                const photo = servicePhotos[service.slug];
                const isActive = activeIndex === index;
                return (
                  <li key={service.slug} data-service-row>
                    <Link
                      href={`/servizi#${service.slug}`}
                      onMouseEnter={() => selectService(index, true)}
                      onPointerDown={(event) => { touchFocusRef.current = event.pointerType === "touch"; }}
                      onFocus={() => {
                        selectService(index, !touchFocusRef.current);
                        touchFocusRef.current = false;
                      }}
                      onClick={() => selectService(index)}
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
            <div className={`absolute inset-0 ${previousPhoto ? "opacity-100" : "opacity-0"}`}>
              <Image
                src={previousPhoto?.src ?? activePhoto?.src ?? "/images/materials-flatlay.png"}
                alt=""
                fill
                sizes="(max-width: 1279px) 50vw, 52vw"
                className="object-cover"
              />
            </div>
            <div ref={incomingRef} className={`absolute inset-0${previousPhoto ? "" : " service-preview-current"}`}>
              <Image
                src={activePhoto?.src ?? "/images/materials-flatlay.png"}
                alt=""
                fill
                sizes="(max-width: 1279px) 50vw, 52vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20211f]/65 to-transparent px-7 pb-6 pt-20 text-white">
              <p className="text-xs uppercase tracking-[0.14em] text-white/80">{activeService?.number} — {activeService?.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
