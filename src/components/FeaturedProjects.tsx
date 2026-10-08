"use client";

import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import type { Project } from "@/data/projects";
import { Photo } from "./Photo";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.set(viewport, { overflow: "hidden" });
        const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]", track);
        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
        const motion = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: true,
            pin: section,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: () => {
              const center = viewport.getBoundingClientRect().left + viewport.clientWidth / 2;
              let closest: HTMLElement | undefined;
              let closestDistance = Number.POSITIVE_INFINITY;
              cards.forEach((card) => {
                const bounds = card.getBoundingClientRect();
                const cardCenter = bounds.left + bounds.width / 2;
                const nextDistance = Math.abs(center - cardCenter);
                if (nextDistance < closestDistance) {
                  closestDistance = nextDistance;
                  closest = card;
                }
              });
              cards.forEach((card) => {
                const focused = card === closest;
                if (card.classList.contains("is-focused") !== focused) {
                  card.classList.toggle("is-focused", focused);
                }
              });
            },
          },
        });
        motion.to(track, { x: () => -distance(), ease: "none" }, 0);
        cards.forEach((card) => {
          gsap.fromTo(card.querySelector("img"), { scale: 1.025 }, {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: motion,
              start: "left 95%",
              end: "right 5%",
              scrub: true,
            },
          });
        });
        const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
        resizeObserver.observe(track);
        resizeObserver.observe(viewport);
        return () => resizeObserver.disconnect();
      });

      media.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]", track);
        cards.forEach((card, index) => {
          const photo = card.querySelector<HTMLElement>(".featured-project-photo");
          const image = card.querySelector<HTMLElement>(".featured-project-image");
          const metadata = card.querySelector<HTMLElement>("[data-project-meta]");
          if (!photo || !image || !metadata) return;

          const verticalReveal = index % 2 === 0;
          const initialClip = verticalReveal ? "inset(0 0 100% 0)" : "inset(0 100% 0 0)";
          const initialImageOffset = verticalReveal ? { yPercent: 4 } : { xPercent: 4 };
          const finalImageOffset = verticalReveal ? { yPercent: 0 } : { xPercent: 0 };
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top 28%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          timeline.fromTo(photo,
            { clipPath: initialClip },
            { clipPath: "inset(0 0 0 0)", duration: 0.68, ease: "none", immediateRender: false },
          );
          timeline.fromTo(image,
            { ...initialImageOffset, scale: 1.07 },
            { ...finalImageOffset, scale: 1, duration: 1, ease: "none", immediateRender: false },
            0,
          );
          timeline.fromTo(metadata,
            { y: 18, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.34, ease: "power1.out", immediateRender: false },
            0.68,
          );
        });
      });
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, [projects.length]);

  return (
    <>
    <section ref={sectionRef} className="featured-gallery section-space bg-[#fcfbf8]" aria-labelledby="featured-projects-title">
      <div className="container-site mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
        <div>
          <p className="eyebrow mb-3">04 — Progetti in evidenza</p>
          <h2 id="featured-projects-title" className="gallery-title font-display text-3xl sm:text-4xl">Spazi da vivere, progetti da scoprire.</h2>
        </div>
        <Link href="/progetti" className="link-line mt-1 inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] sm:mt-0">
          Tutti i progetti <Icon icon="tabler:arrow-right" className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div ref={viewportRef} className="featured-gallery-viewport">
        <div ref={trackRef} className="featured-gallery-track">
          {projects.map((project, index) => (
            <article key={project.slug} data-project-card data-project-layout={index === 2 ? "portrait" : index === 1 || index === 3 ? "wide" : "standard"} className={`featured-project-card${index === 0 ? " is-focused" : ""}`}>
              <Link data-project-link href={`/progetti/${project.slug}`} className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a725d]" aria-label={`Apri il progetto ${project.title}`}>
                <Photo
                  src={project.image}
                  alt={`${project.imageType} del progetto ${project.title}`}
                  className={`featured-project-photo ${index % 4 === 1 ? "aspect-[4/3]" : index % 4 === 2 ? "aspect-[4/5]" : index % 4 === 3 ? "aspect-[1.38/1]" : "aspect-[1.1/1]"}`}
                  sizes="(max-width: 1023px) 84vw, 62vw"
                  imageClassName="featured-project-image"
                />
                <div data-project-meta className="flex items-start justify-between gap-5 py-4 sm:py-5">
                  <div>
                    <p className="text-xs text-[#696a65]">{project.category} · {project.location} · {project.year}</p>
                    <h3 className="featured-project-title mt-2 font-display text-2xl sm:text-3xl">{project.title}</h3>
                  </div>
                  <span className="featured-project-indicator mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em]">
                    <span className="h-px w-8 bg-current" aria-hidden="true" />
                    <Icon icon="tabler:arrow-up-right" className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
