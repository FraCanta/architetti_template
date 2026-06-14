import Link from "next/link";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Photo } from "@/components/Photo";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const method = [
  ["01", "Ascolto e analisi", "Conosciamo esigenze, abitudini e contesto."],
  ["02", "Concept progettuale", "Sviluppiamo idee e soluzioni coerenti."],
  ["03", "Sviluppo tecnico", "Definiamo ogni scelta con precisione."],
  ["04", "Materiali e dettagli", "Costruiamo atmosfera, qualità e durata."],
  ["05", "Direzione lavori", "Seguiamo il cantiere fino alla consegna."],
];

const values = [
  ["Funzionalità", "Spazi chiari che migliorano la vita."],
  ["Estetica", "Bellezza, armonia e proporzioni."],
  ["Sostenibilità", "Scelte responsabili per il futuro."],
  ["Cura del dettaglio", "Ogni elemento fa la differenza."],
];

export default function HomePage() {
  return (
    <>
      <Hero
        title={
          <>
            <span className="block">Progettiamo</span>
            <span className="block">spazi che parlano</span>
            <span className="block">di te.</span>
          </>
        }
        text="Architettura contemporanea, funzionale e senza tempo. Dall'idea alla realizzazione, con cura e visione."
      />

      <section className="section-space">
        <div className="container-site grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="max-w-md">
            <p className="eyebrow mb-6 flex items-center gap-3 after:h-px after:w-10 after:bg-[#b89a87]">
              Lo studio
            </p>
            <h2 className="font-display text-[2.15rem] leading-[1.12] sm:text-[2.45rem]">
              Ascoltiamo. Progettiamo. Realizziamo.
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-[#696a65]">
              Ogni progetto nasce dall&apos;ascolto delle esigenze del cliente e
              dalla lettura del contesto. Uniamo estetica, funzionalità e
              sostenibilità per creare spazi autentici e senza tempo.
            </p>
            <Link
              href="/studio"
              className="mt-8 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.13em]"
            >
              Scopri di più <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Photo
              src="/images/studio-drafting-desk.png"
              alt="Tavolo di lavoro dello studio con disegni e campioni materici"
              className="aspect-[5/4]"
            />
            <Photo
              src="/images/moodboard-natural-materials.png"
              alt="Disegni tecnici e campioni di materiali naturali"
              className="aspect-[5/4]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#dedbd4] bg-[#f5f3ee] section-space">
        <div className="container-site">
          <p className="eyebrow mb-8 flex items-center gap-3 after:h-px after:w-10 after:bg-[#b89a87]">
            I nostri servizi
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-site">
          <div className="flex items-end justify-between gap-6">
            <p className="eyebrow flex items-center gap-3 after:h-px after:w-10 after:bg-[#b89a87]">
              Progetti in evidenza
            </p>
            <Link
              href="/progetti"
              className="hidden text-[9px] font-bold uppercase tracking-[0.13em] sm:block"
            >
              Vedi tutti i progetti&nbsp; →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {projects.slice(0, 5).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <Button
            href="/progetti"
            variant="secondary"
            className="mt-8 sm:hidden"
          >
            Tutti i progetti
          </Button>
        </div>
      </section>

      <section className="border-t border-[#dedbd4] section-space">
        <div className="container-site">
          <SectionTitle
            eyebrow="Il nostro approccio"
            title="Un percorso chiaro, dal primo incontro al cantiere."
          />
          <div className="relative mt-14 grid gap-8 md:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-12 hidden h-px bg-[#dedbd4] md:block" />
            {method.map(([number, title, text]) => (
              <article
                key={number}
                className="relative bg-[#fcfbf8] text-center"
              >
                <p className="text-xl font-light text-[#9a725d]">{number}</p>
                <span className="mx-auto mt-5 block h-3 w-3 rounded-full border border-[#9a725d] bg-[#fcfbf8]" />
                <h3 className="mt-6 text-[14px] font-medium">{title}</h3>
                <p className="mx-auto mt-3 max-w-48 text-[12px] leading-[1.55] text-[#696a65]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#dedbd4] bg-[#f5f3ee]">
        <div className="grid lg:grid-cols-3">
          <div className="py-14 lg:px-20">
            <p className="eyebrow">I nostri valori</p>
            <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {values.map(([title, text], index) => (
                <article
                  key={title}
                  className="grid grid-cols-[28px_1fr] gap-3"
                >
                  <span className="text-sm text-[#9a725d]">0{index + 1}</span>
                  <div>
                    <h3 className="text-xs font-medium">{title}</h3>
                    <p className="mt-1 text-[10px] leading-4 text-[#696a65]">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <figure className="border-y border-[#dedbd4] py-14 lg:border-x lg:border-y-0 lg:px-10">
            <p className="eyebrow">Dicono di noi</p>
            <blockquote className="mt-8 text-sm leading-7 text-[#555650]">
              “Professionalità, creatività e grande attenzione alle nostre
              esigenze. Il risultato ha superato le aspettative.”
            </blockquote>
            <figcaption className="mt-8 text-xs font-medium">
              Giulia e Marco
              <span className="mt-1 block text-[10px] font-normal text-[#696a65]">
                Ristrutturazione appartamento
              </span>
            </figcaption>
          </figure>
          <div className="relative min-h-80  overflow-hidden bg-[#2a2b28] px-8 py-14 text-white lg:px-12">
            <div className="absolute -bottom-16 -right-12 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute bottom-12 right-16 h-36 w-24 border border-white/15" />
            <div className="relative z-10 max-w-sm">
              <p className="font-display text-[2.1rem] leading-tight">
                Hai un progetto da realizzare?
              </p>
              <p className="mt-5 text-[14px] leading-6 text-white/60">
                Parliamone insieme. Siamo pronti ad ascoltare le tue idee.
              </p>
              <Button href="/contatti" variant="light" className="mt-8">
                Contattaci
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
