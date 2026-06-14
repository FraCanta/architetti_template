import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Photo } from "@/components/Photo";
import { ProjectCard } from "@/components/ProjectCard";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { ServiceCard } from "@/components/ServiceCard";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

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
              className="mt-8 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.13em]"
            >
              Scopri di più
              <Icon
                icon="tabler:arrow-right"
                className="h-4 w-4"
                aria-hidden="true"
              />
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
              className="hidden items-center gap-2 text-[12px] font-bold uppercase tracking-[0.13em] sm:inline-flex"
            >
              Vedi tutti i progetti
              <Icon
                icon="tabler:arrow-right"
                className="h-4 w-4"
                aria-hidden="true"
              />
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

      <section className="border-t border-[#dedbd4] bg-[#f5f3ee]">
        <div className="container-site py-16 sm:py-20">
          <div className="mx-auto ">
            <ReviewCarousel />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ee] ">
        <div
          className="relative min-h-80 overflow-hidden px-8 flex items-center w-full text-white sm:px-12 lg:px-16"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(31,32,29,0.9), rgba(31,32,29,0.62)), url('/images/detail-olive-bench.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-[#2a2b28]/10" />
          <div className="relative z-10 w-full  flex flex-wrap justify-between items-center h-full">
            <div>
              <p className="font-display text-[2.1rem] leading-tight sm:text-[2.6rem]">
                Hai un progetto da realizzare?
              </p>
              <p className="mt-5 text-[14px] leading-6 text-white/70">
                Parliamone insieme. Siamo pronti ad ascoltare le tue idee.
              </p>
            </div>

            <Button href="/contatti" variant="light" className="mt-8">
              Contattaci
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
