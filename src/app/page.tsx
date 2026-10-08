import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Photo } from "@/components/Photo";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HomeScrollEffects } from "@/components/HomeScrollEffects";
import { ServicesExperience } from "@/components/ServicesExperience";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <HomeScrollEffects>
      <Hero
        eyebrow="Studio Forma"
        title={
          <>
            <span className="block overflow-hidden"><span data-hero-line className="block">Progettiamo</span></span>
            <span className="block overflow-hidden"><span data-hero-line className="block">spazi che parlano</span></span>
            <span className="block overflow-hidden"><span data-hero-line className="block">di te.</span></span>
          </>
        }
        text="Architettura contemporanea, funzionale e senza tempo. Dall'idea alla realizzazione, con cura e visione."
      />

      <section data-studio-section className="section-space">
        <div className="container-site grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="max-w-md">
            <p className="eyebrow mb-6 flex items-center gap-3 after:h-px after:w-10 after:bg-[#b89a87]">
              Lo studio
            </p>
            <h2 className="studio-title font-display text-[2.15rem] leading-[1.12] sm:text-[2.45rem]">
              <span data-studio-word className="inline-block">Ascoltiamo.</span>{" "}<span data-studio-word className="inline-block">Progettiamo.</span>{" "}<span data-studio-word className="inline-block">Realizziamo.</span>
            </h2>
            <p data-studio-copy className="mt-6 text-[15px] leading-7 text-[#696a65]">
              Ogni progetto nasce dall&apos;ascolto delle esigenze del cliente e
              dalla lettura del contesto. Uniamo estetica, funzionalità e
              sostenibilità per creare spazi autentici e senza tempo.
            </p>
            <Link data-studio-copy
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
          <div className="studio-photo-composition grid gap-5 sm:grid-cols-2 lg:items-start">
            <div data-studio-photo="0" className="studio-photo-frame">
            <Photo
              src="/images/studio-drafting-desk.png"
              alt="Tavolo di lavoro dello studio con disegni e campioni materici"
              className="aspect-[5/4] lg:aspect-[4/3]"
            />
            </div>
            <div data-studio-photo="1" className="studio-photo-frame sm:mt-12">
            <Photo
              src="/images/moodboard-natural-materials.png"
              alt="Disegni tecnici e campioni di materiali naturali"
              className="aspect-[5/4] lg:aspect-square"
            />
            </div>
          </div>
        </div>
      </section>

      <ServicesExperience services={services} />

      <FeaturedProjects projects={projects.slice(0, 5)} />

      <section data-testimonials-section className="border-t border-[#dedbd4] bg-[#f5f3ee]">
        <div className="container-site py-16 sm:py-20">
          <div className="mx-auto ">
            <ReviewCarousel />
          </div>
        </div>
      </section>

      <section data-cta-section className="bg-[#f5f3ee]">
        <div
          className="relative flex min-h-80 w-full items-center overflow-hidden px-8 text-white sm:px-12 lg:px-16"
        >
          <div data-cta-photo aria-hidden="true" className="cta-photo absolute inset-[-5%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f201d]/90 via-[#1f201d]/60 to-[#1f201d]/25" />
          <div className="relative z-10 flex h-full w-full flex-wrap items-center justify-between gap-5">
            <div>
              <p className="overflow-hidden font-display text-[2.1rem] leading-tight sm:text-[2.6rem]">
                <span data-cta-title className="block">Hai un progetto da realizzare?</span>
              </p>
              <p data-cta-copy className="mt-5 text-[14px] leading-6 text-white/70">
                Parliamone insieme. Siamo pronti ad ascoltare le tue idee.
              </p>
            </div>

            <div data-cta-button><Button href="/contatti" variant="light" className="mt-8">
              Contattaci
            </Button></div>
          </div>
        </div>
      </section>
    </HomeScrollEffects>
  );
}
