import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { InspirationGallery } from "@/components/InspirationGallery";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Ispirazioni",
  description:
    "Una moodboard editoriale di interni, materiali, palette e atmosfere progettuali selezionate da Studio Forma.",
};

export default function InspirationsPage() {
  return (
    <>
      <section className="border-b border-[#dedbd4]">
        <div className="container-site pb-12 pt-10 sm:pb-16">
          <Breadcrumb items={[{ label: "Ispirazioni" }]} />
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="max-w-xl">
              <p className="eyebrow mb-6">Moodboard editoriale</p>
              <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-[3.5rem] lg:text-[4.4rem]">
                Ispirazioni
              </h1>
              <p className="mt-6 text-[16px] leading-7 text-[#696a65]">
                Materiali, atmosfere e dettagli progettuali per immaginare nuovi
                modi di abitare lo spazio.
              </p>
            </div>
            <Photo
              src="/images/ispirazioni/interno_minimalista_mediterraneo_con_terrazza.png"
              alt="Interno minimalista mediterraneo aperto verso una terrazza"
              className="aspect-[16/9]"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <InspirationGallery />

      <section className="bg-[#9a725d] py-16 text-white sm:py-20">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 !text-white/55">Dall&apos;idea allo spazio</p>
            <h2 className="font-display text-[2rem] leading-tight sm:text-[2.5rem]">
              Vuoi trasformare un&apos;ispirazione in progetto?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
              Partiamo dalle atmosfere che ti rappresentano per costruire uno
              spazio coerente, personale e concreto.
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
