import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servizi",
  description: "Progettazione architettonica, interior design, ristrutturazioni, direzione lavori, render 3D e consulenze.",
};

const serviceImages = [
  "/images/studio-architect-working.png",
  "/images/interior-living-garden.png",
  "/images/plan-residenza-aurora.png",
  "/images/studio-team-meeting.png",
  "/images/concept-facade-sketch.png",
  "/images/moodboard-warm-materials.png",
];

export default function ServicesPage() {
  return (
    <>
      <section className="container-site pb-16 pt-10">
        <Breadcrumb items={[{ label: "Servizi" }]} />
        <div className="mt-10 max-w-xl">
          <h1 className="font-display text-[2.7rem] sm:text-[3.1rem]">I nostri servizi</h1>
          <p className="mt-5 text-[15px] leading-7 text-[#696a65]">
            Offriamo un servizio completo, dalla progettazione alla realizzazione, con competenza e passione.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article id={service.slug} key={service.slug} className="grid scroll-mt-24 grid-cols-[120px_1fr] gap-5">
              <Photo src={serviceImages[index]} alt={service.imageType} className="aspect-square" sizes="120px" />
              <div>
                <h2 className="text-[16px] font-medium">{service.title}</h2>
                <p className="mt-3 text-[13px] leading-6 text-[#696a65]">{service.description}</p>
                <Link href="/contatti" className="mt-5 inline-block text-[9px] font-bold uppercase tracking-[0.12em]">
                  Scopri di più&nbsp; →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e9e3da] py-9">
        <div className="container-site flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-medium">Non sai da dove iniziare?</h2>
            <p className="mt-2 text-xs text-[#696a65]">Prenota una consulenza conoscitiva.</p>
          </div>
          <Button href="/contatti">Prenota ora</Button>
        </div>
      </section>
    </>
  );
}
