"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  inspirationCategories,
  inspirations,
  type Inspiration,
} from "@/data/inspirations";

export function InspirationGallery() {
  const [activeCategory, setActiveCategory] = useState("Tutte");
  const [selectedInspiration, setSelectedInspiration] =
    useState<Inspiration | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const filteredInspirations =
    activeCategory === "Tutte"
      ? inspirations
      : inspirations.filter(
          (inspiration) => inspiration.category === activeCategory,
        );

  useEffect(() => {
    if (!selectedInspiration) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleDialogKeyboard(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedInspiration(null);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    document.addEventListener("keydown", handleDialogKeyboard);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleDialogKeyboard);
      triggerRef.current?.focus();
    };
  }, [selectedInspiration]);

  function openInspiration(
    inspiration: Inspiration,
    trigger: HTMLButtonElement,
  ) {
    triggerRef.current = trigger;
    setSelectedInspiration(inspiration);
  }

  return (
    <>
      <section className="container-site section-space">
        <div
          className="no-scrollbar flex gap-7 overflow-x-auto border-b border-[#dedbd4]"
          aria-label="Filtra le ispirazioni"
        >
          {inspirationCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`relative shrink-0 pb-4 text-[11px] font-bold uppercase tracking-[0.13em] transition-colors ${
                activeCategory === category
                  ? "text-[#9a725d] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#9a725d]"
                  : "text-[#696a65] hover:text-[#20211f]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          key={activeCategory}
          className="finder-step mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredInspirations.map((inspiration, index) => (
            <article
              key={inspiration.slug}
              className={`group ${index % 5 === 0 ? "lg:col-span-2" : ""}`}
            >
              <div
                className={`relative overflow-hidden bg-[#e9e5dc] ${
                  index % 5 === 0 ? "aspect-[16/9]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={inspiration.image}
                  alt={inspiration.title}
                  fill
                  sizes={
                    index % 5 === 0
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>

              <div className="border-x border-b border-[#dedbd4] p-6 sm:p-7">
                <p className="eyebrow !text-[10px]">{inspiration.category}</p>
                <h2 className="mt-4 text-xl font-medium leading-snug">
                  {inspiration.title}
                </h2>
                <p className="mt-4 text-[13px] leading-6 text-[#696a65]">
                  {inspiration.description}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  {inspiration.palette.map((color) => (
                    <span
                      key={color}
                      className="h-5 w-5 rounded-full border border-black/10"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>

                <p className="mt-5 text-[11px] leading-5 text-[#696a65]">
                  {inspiration.materials.join(" · ")}
                </p>

                <button
                  type="button"
                  onClick={(event) =>
                    openInspiration(inspiration, event.currentTarget)
                  }
                  className="mt-7 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.13em]"
                >
                  Scopri l&apos;ispirazione
                  <Icon
                    icon="tabler:arrow-up-right"
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedInspiration && (
        <div
          className="fixed inset-0 z-[120] flex items-end justify-center bg-[#20211f]/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedInspiration(null);
            }
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inspiration-dialog-title"
            data-lenis-prevent
            className="finder-step relative max-h-[94vh] w-full max-w-5xl overflow-y-auto bg-[#fcfbf8] shadow-2xl"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedInspiration(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-black/15 bg-[#fcfbf8] transition-colors hover:bg-[#20211f] hover:text-white sm:right-6 sm:top-6"
              aria-label="Chiudi dettaglio ispirazione"
            >
              <Icon icon="tabler:x" className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
              <div className="relative min-h-72 sm:min-h-96 lg:min-h-[640px]">
                <Image
                  src={selectedInspiration.image}
                  alt={selectedInspiration.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="eyebrow">{selectedInspiration.category}</p>
                <h2
                  id="inspiration-dialog-title"
                  className="mt-5 font-display text-[2rem] leading-tight sm:text-[2.5rem]"
                >
                  {selectedInspiration.title}
                </h2>
                <p className="mt-5 text-[14px] leading-7 text-[#696a65]">
                  {selectedInspiration.description}
                </p>

                <div className="mt-8 border-t border-[#dedbd4] pt-7">
                  <p className="eyebrow !text-[10px]">Palette</p>
                  <div className="mt-4 flex gap-3">
                    {selectedInspiration.palette.map((color) => (
                      <span
                        key={color}
                        className="h-9 w-9 rounded-full border border-black/10"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <p className="eyebrow !text-[10px]">Materiali</p>
                  <ul className="mt-4 grid gap-2 text-[13px] text-[#565752]">
                    {selectedInspiration.materials.map((material) => (
                      <li key={material} className="flex items-center gap-3">
                        <span className="h-px w-4 bg-[#9a725d]" />
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contatti?ispirazione=${selectedInspiration.slug}`}
                  className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 bg-[#20211f] px-6 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#9a725d]"
                >
                  Porta questa ispirazione nel tuo progetto
                  <Icon
                    icon="tabler:arrow-right"
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
