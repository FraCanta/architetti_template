import { Icon } from "@iconify/react";

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
  return (
    <section aria-labelledby="reviews-title">
      <p data-review-heading className="eyebrow">Dicono di noi</p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl" id="reviews-title">
        Recensioni dei clienti
      </h2>

      <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
        {reviews.map((review, index) => (
          <figure
            data-review-item
            key={review.name}
            className={`flex min-h-64 flex-col ${index % 3 > 0 ? "lg:border-l lg:border-[#dedbd4] lg:pl-8" : ""} ${index % 3 < 2 ? "lg:pr-8" : ""} ${index > 2 ? "lg:border-t lg:border-[#dedbd4] lg:pt-8" : ""}`}
          >
            <div className="flex gap-1 text-[#9a725d]">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Icon key={starIndex} icon="tabler:star-filled" className="h-4 w-4" aria-hidden="true" />
              ))}
              <span className="sr-only">5 stelle su 5</span>
            </div>
            <blockquote className="mt-6 text-[16px] leading-7 text-[#555650]">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-auto pt-7 text-[13px] font-medium">
              {review.name}
              <span className="mt-1 block text-[11px] font-normal text-[#696a65]">
                {review.project}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
