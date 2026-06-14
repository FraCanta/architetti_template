"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Giulia e Marco",
    project: "Ristrutturazione appartamento",
    text: "Professionalità, creatività e grande attenzione alle nostre esigenze. Il risultato ha superato le aspettative.",
  },
  {
    name: "Elena R.",
    project: "Interior design residenziale",
    text: "Ci siamo sentiti accompagnati in ogni scelta, dai materiali alla luce. La casa ora è elegante, funzionale e molto nostra.",
  },
  {
    name: "Studio Medico L.",
    project: "Spazio commerciale",
    text: "Metodo chiaro, tempi rispettati e un progetto capace di unire accoglienza, privacy e immagine professionale.",
  },
  {
    name: "Andrea e Sofia",
    project: "Nuova costruzione",
    text: "Un percorso preciso e sereno, dall'idea iniziale al cantiere. Ogni ambiente rispecchia davvero il nostro modo di vivere.",
  },
  {
    name: "Casa B.",
    project: "Interior design",
    text: "La selezione dei materiali e lo studio della luce hanno trasformato gli spazi con equilibrio, calore e grande coerenza.",
  },
  {
    name: "Officina 27",
    project: "Ristrutturazione commerciale",
    text: "Lo studio ha interpretato la nostra identità con una soluzione elegante e concreta, rispettando tempi e budget concordati.",
  },
];

export function ReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateLayout = () => {
      setIsDesktop(mediaQuery.matches);
      setActiveIndex(0);
    };

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) =>
        isDesktop ? (index + 3) % reviews.length : (index + 1) % reviews.length,
      );
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isDesktop]);

  const visibleReviews = isDesktop
    ? reviews.slice(activeIndex, activeIndex + 3)
    : [reviews[activeIndex]];
  const pageCount = isDesktop ? reviews.length / 3 : reviews.length;
  const activePage = isDesktop ? activeIndex / 3 : activeIndex;

  return (
    <section aria-labelledby="reviews-title">
      <p className="eyebrow">Dicono di noi</p>
      <h2 className="sr-only" id="reviews-title">
        Recensioni dei clienti
      </h2>

      <div
        key={`${isDesktop}-${activeIndex}`}
        className="mt-8 grid min-h-72 animate-[fadeIn_600ms_ease-out] gap-10 lg:grid-cols-3 lg:gap-0"
      >
        {visibleReviews.map((review, index) => (
          <figure
            key={review.name}
            className={`flex h-full flex-col ${
              index > 0 ? "lg:border-l lg:border-[#dedbd4] lg:pl-10" : ""
            } ${index < visibleReviews.length - 1 ? "lg:pr-10" : ""}`}
          >
            <div className="flex gap-1 text-[#9a725d]">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Icon
                  key={starIndex}
                  icon="tabler:star-filled"
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              ))}
              <span className="sr-only">5 stelle su 5</span>
            </div>
            <blockquote className="mt-7 text-[18px] leading-8 text-[#555650]">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-auto pt-8 text-[13px] font-medium">
              {review.name}
              <span className="mt-1 block text-[11px] font-normal text-[#696a65]">
                {review.project}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div
        className="mt-6 flex gap-2"
        aria-label="Seleziona gruppo di recensioni"
      >
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(isDesktop ? index * 3 : index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activePage === index
                ? "w-8 bg-[#9a725d]"
                : "w-2 bg-[#9a725d]/35 hover:bg-[#9a725d]/70"
            }`}
            aria-label={`Mostra ${isDesktop ? "il gruppo" : "la recensione"} ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
