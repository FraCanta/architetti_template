"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import { Photo } from "./Photo";

const phases = [
  {
    title: "Ascolto e analisi",
    text: "Partiamo dalle esigenze, dal contesto e dai vincoli per definire obiettivi e priorità reali.",
    image: "/images/studio-client-meeting.png",
    alt: "Incontro di lavoro tra progettista e cliente",
  },
  {
    title: "Concept e progetto",
    text: "Traduciamo le prime indicazioni in una visione spaziale, funzionale e materica condivisa.",
    image: "/images/studio-drafting-desk.png",
    alt: "Disegni architettonici sul tavolo di lavoro",
  },
  {
    title: "Sviluppo tecnico",
    text: "Approfondiamo il progetto con elaborati, dettagli e scelte necessarie alla sua realizzazione.",
    image: "/images/materials-flatlay.png",
    alt: "Campioni di materiali per il progetto",
  },
  {
    title: "Realizzazione",
    text: "Seguiamo persone, lavorazioni e decisioni affinché il risultato resti fedele al progetto.",
    image: "/images/detail-facade-window.png",
    alt: "Dettaglio architettonico di una facciata realizzata",
  },
];

export function MethodSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="border-y border-[#dedbd4] bg-[#f5f3ee] section-space" aria-labelledby="method-title">
      <div className="container-site">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">05 — Il nostro metodo</p>
            <h2 id="method-title" className="font-display text-3xl leading-tight sm:text-4xl">Dall&apos;idea alla realizzazione.</h2>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <p className="max-w-md text-sm leading-6 text-[#696a65]">Un percorso condiviso e personalizzato, per trasformare le tue esigenze in spazi concreti.</p>
            <Link href="/servizi#metodo" className="link-line inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
              Scopri il metodo <Icon icon="tabler:arrow-right" className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <li key={phase.title} className="method-item">
              <button
                type="button"
                onClick={() => setActivePhase(index)}
                aria-pressed={activePhase === index}
                className={`group w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a725d] ${activePhase === index ? "text-[#765341]" : "text-[#20211f]"}`}
              >
                <Photo src={phase.image} alt={phase.alt} className={`aspect-[1.65] transition-[outline-color] ${activePhase === index ? "outline outline-2 outline-[#9a725d] outline-offset-2" : ""}`} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <span className="mt-4 flex items-center justify-between gap-3">
                  <span>
                    <span className="block text-[11px] tracking-[0.12em] text-[#9a725d]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="mt-1 block font-medium">{phase.title}</span>
                  </span>
                  <Icon icon="tabler:arrow-right" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <span className="mt-2 block text-[13px] leading-5 text-[#696a65]">{phase.text}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
