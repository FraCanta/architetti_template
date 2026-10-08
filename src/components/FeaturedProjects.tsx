"use client";

import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useLayoutEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { Photo } from "./Photo";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorReady, setCursorReady] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("Scorri");

  useLayoutEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setCursorReady(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();
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
    }, section);

    return () => context.revert();
  }, [projects.length]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const cursor = cursorRef.current;
    if (!viewport || !cursor || !cursorReady) return;

    const context = gsap.context(() => {
      gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 0.82, autoAlpha: 0 });
    }, viewport);
    const moveX = gsap.quickTo(cursor, "x", { duration: 0.28, ease: "power3.out" });
    const moveY = gsap.quickTo(cursor, "y", { duration: 0.28, ease: "power3.out" });
    const showCursor = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      moveX(event.clientX);
      moveY(event.clientY);
      viewport.classList.add("has-context-cursor");
      const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
      setCursorLabel(hoveredElement?.closest("[data-project-link]") ? "Apri progetto" : "Scorri");
      gsap.killTweensOf(cursor);
      gsap.to(cursor, { autoAlpha: 1, scale: 1, duration: 0.24, ease: "power2.out" });
    };
    const moveCursor = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      moveX(event.clientX);
      moveY(event.clientY);
    };
    const hideCursor = () => {
      viewport.classList.remove("has-context-cursor");
      gsap.killTweensOf(cursor);
      gsap.to(cursor, { autoAlpha: 0, scale: 0.82, duration: 0.2, ease: "power2.out" });
    };
    const updateLabel = (event: PointerEvent) => {
      const from = (event.target as Element | null)?.closest("[data-project-link]");
      const to = (event.relatedTarget as Element | null)?.closest("[data-project-link]");
      if (event.type === "pointerover" && from) setCursorLabel("Apri progetto");
      if (event.type === "pointerout" && from && from !== to) setCursorLabel(to ? "Apri progetto" : "Scorri");
    };

    viewport.addEventListener("pointerenter", showCursor);
    viewport.addEventListener("pointermove", moveCursor);
    viewport.addEventListener("pointerleave", hideCursor);
    viewport.addEventListener("pointerover", updateLabel);
    viewport.addEventListener("pointerout", updateLabel);

    return () => {
      viewport.removeEventListener("pointerenter", showCursor);
      viewport.removeEventListener("pointermove", moveCursor);
      viewport.removeEventListener("pointerleave", hideCursor);
      viewport.removeEventListener("pointerover", updateLabel);
      viewport.removeEventListener("pointerout", updateLabel);
      viewport.classList.remove("has-context-cursor");
      gsap.killTweensOf(cursor);
      moveX.tween.kill();
      moveY.tween.kill();
      context.revert();
    };
  }, [cursorReady]);

  return (
    <>
    {cursorReady && typeof document !== "undefined" && createPortal(
      <div ref={cursorRef} className="featured-gallery-cursor" aria-hidden="true">
        <span>{cursorLabel}</span>
        <Icon icon={cursorLabel === "Scorri" ? "tabler:arrow-right" : "tabler:arrow-up-right"} className="h-4 w-4" />
      </div>,
      document.body,
    )}
    <section ref={sectionRef} className="featured-gallery section-space bg-[#fcfbf8]" aria-labelledby="featured-projects-title">
      <div className="container-site mb-8 flex items-end justify-between gap-5">
        <div>
          <p className="eyebrow mb-3">04 — Progetti in evidenza</p>
          <h2 id="featured-projects-title" className="gallery-title font-display text-3xl sm:text-4xl">Spazi da vivere, progetti da scoprire.</h2>
        </div>
        <Link href="/progetti" className="link-line hidden shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] sm:inline-flex">
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
                <div className="flex items-start justify-between gap-5 py-4 sm:py-5">
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
      <Link href="/progetti" className="link-line container-site mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] sm:hidden">
        Tutti i progetti <Icon icon="tabler:arrow-right" className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
    </>
  );
}
