import { Icon } from "@iconify/react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceFinder } from "@/components/ServiceFinder";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Progettazione architettonica, interior design, ristrutturazioni, direzione lavori, render 3D e consulenza.",
};

const services = [
  {
    slug: "progettazione-architettonica",
    number: "01",
    title: "Progettazione architettonica",
    description:
      "Dall'idea alla definizione esecutiva, sviluppiamo spazi coerenti con il contesto e con il modo in cui saranno vissuti.",
    includes: [
      "Studio di fattibilità e concept",
      "Progetto preliminare ed esecutivo",
      "Coordinamento tecnico e autorizzativo",
    ],
    image: "/images/studio-architect-working.png",
    imageAlt: "Architetto al lavoro su disegni e modelli di progetto",
  },
  {
    slug: "interior-design",
    number: "02",
    title: "Interior design",
    description:
      "Progettiamo interni funzionali e riconoscibili, curando la relazione tra layout, luce, materiali e arredi.",
    includes: [
      "Distribuzione degli spazi",
      "Studio di finiture e illuminazione",
      "Disegno di arredi su misura",
    ],
    image: "/images/interior-living-garden.png",
    imageAlt: "Interno contemporaneo aperto verso il giardino",
  },
  {
    slug: "ristrutturazioni",
    number: "03",
    title: "Ristrutturazioni",
    description:
      "Trasformiamo edifici e ambienti esistenti, migliorandone qualità, comfort e prestazioni nel rispetto della loro identità.",
    includes: [
      "Rilievo e analisi dello stato attuale",
      "Ridefinizione funzionale degli ambienti",
      "Pratiche edilizie e dettagli costruttivi",
    ],
    image: "/images/plan-residenza-aurora.png",
    imageAlt: "Pianta architettonica di un progetto residenziale",
  },
  {
    slug: "direzione-lavori",
    number: "04",
    title: "Direzione lavori",
    description:
      "Seguiamo la fase realizzativa per mantenere coerenza tra progetto e cantiere, coordinando persone, tempi e scelte.",
    includes: [
      "Coordinamento di imprese e fornitori",
      "Verifiche periodiche in cantiere",
      "Controllo della qualità esecutiva",
    ],
    image: "/images/studio-team-meeting.png",
    imageAlt: "Gruppo di progettazione durante una riunione tecnica",
  },
  {
    slug: "render-visualizzazione-3d",
    number: "05",
    title: "Render e visualizzazione 3D",
    description:
      "Rendiamo visibili spazi, materiali e atmosfere prima della realizzazione, facilitando valutazioni e decisioni.",
    includes: [
      "Modellazione tridimensionale",
      "Render fotorealistici",
      "Moodboard e varianti materiche",
    ],
    image: "/images/concept-facade-sketch.png",
    imageAlt: "Concept architettonico e visualizzazione di facciata",
  },
  {
    slug: "consulenza",
    number: "06",
    title: "Consulenza",
    description:
      "Un confronto mirato per chiarire esigenze, potenziale, criticità e priorità prima di avviare un progetto.",
    includes: [
      "Analisi di esigenze e vincoli",
      "Prime indicazioni progettuali",
      "Orientamento su budget e prossimi passi",
    ],
    image: "/images/moodboard-warm-materials.png",
    imageAlt: "Moodboard con materiali e tonalità calde",
  },
];

const method = [
  {
    number: "01",
    title: "Ascolto e analisi",
    text: "Partiamo dalle esigenze, dal contesto e dai vincoli per definire obiettivi e priorità reali.",
  },
  {
    number: "02",
    title: "Concept progettuale",
    text: "Traduciamo le prime indicazioni in una visione spaziale, funzionale e materica condivisa.",
  },
  {
    number: "03",
    title: "Sviluppo tecnico",
    text: "Approfondiamo il progetto con elaborati, dettagli e scelte necessarie alla sua realizzazione.",
  },
  {
    number: "04",
    title: "Realizzazione e coordinamento",
    text: "Seguiamo persone, lavorazioni e decisioni affinché il risultato resti fedele al progetto.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[#dedbd4]">
        <div className="container-site pb-16 pt-10 sm:pb-20">
          <Breadcrumb items={[{ label: "Servizi" }]} />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow mb-6">Competenze integrate</p>
              <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-[3.5rem] lg:text-[4.4rem]">
                Servizi
              </h1>
            </div>
            <p className="max-w-2xl text-[16px] leading-7 text-[#696a65]">
              Dalla progettazione architettonica all&apos;interior design,
              accompagniamo ogni fase del progetto con un approccio attento,
              funzionale e su misura.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-site">
          <SectionTitle
            eyebrow="Cosa facciamo"
            title="Un servizio completo, costruito attorno al progetto"
            text="Ogni incarico può comprendere una o più competenze, coordinate in un percorso chiaro e calibrato sulle esigenze specifiche."
          />

          <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                id={service.slug}
                key={service.slug}
                className="group flex scroll-mt-28 flex-col border border-[#dedbd4] bg-[#fcfbf8]"
              >
                <Photo
                  src={service.image}
                  alt={service.imageAlt}
                  className="aspect-[16/9]"
                  imageClassName="transition-transform duration-700 group-hover:scale-[1.025]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <h2 className="text-xl font-medium leading-snug">
                      {service.title}
                    </h2>
                    <span className="pt-1 text-xs text-[#9a725d]">
                      {service.number}
                    </span>
                  </div>
                  <p className="mt-4 text-[14px] leading-6 text-[#696a65]">
                    {service.description}
                  </p>

                  <div className="mt-7 border-t border-[#dedbd4] pt-6">
                    <p className="eyebrow !text-[10px]">Cosa include</p>
                    <ul className="mt-4 grid gap-3">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[13px] leading-5 text-[#565752]"
                        >
                          <Icon
                            icon="tabler:minus"
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#9a725d]"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`#${service.slug}`}
                    className="mt-8 inline-flex items-center gap-3 self-start text-[11px] font-bold uppercase tracking-[0.13em]"
                    aria-label={`Scopri il servizio ${service.title}`}
                  >
                    Scopri il servizio
                    <Icon
                      icon="tabler:arrow-right"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceFinder />

      <section
        id="metodo"
        className="scroll-mt-24 border-y border-[#dedbd4] bg-[#f5f3ee] section-space"
      >
        <div className="container-site">
          <SectionTitle
            eyebrow="Metodo di lavoro"
            title="Dall'ascolto alla realizzazione"
            text="Un processo ordinato permette di affrontare ogni decisione al momento giusto, mantenendo insieme visione e fattibilità."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {method.map((step) => (
              <article
                key={step.number}
                className="border-t border-[#20211f] pt-5"
              >
                <span className="text-xs text-[#9a725d]">{step.number}</span>
                <h3 className="mt-8 text-lg font-medium">{step.title}</h3>
                <p className="mt-4 text-[13px] leading-6 text-[#696a65]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#9a725d] py-16 text-white sm:py-20">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 !text-white/55">Parliamone</p>
            <h2 className="font-display text-[2rem] leading-tight sm:text-[2.5rem]">
              Non sai da dove partire?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
              Raccontaci il tuo progetto: ti aiuteremo a capire quale percorso è
              più adatto alle tue esigenze.
            </p>
          </div>
          <Button href="/consulenza" variant="light">
            Richiedi una consulenza
          </Button>
        </div>
      </section>
    </>
  );
}
