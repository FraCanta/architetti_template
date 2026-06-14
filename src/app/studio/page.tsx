import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Conosci Studio Forma: approccio, missione, visione, team e valori.",
};

const team = [
  ["Luca Bianchi", "Architetto Senior", "/images/team-luca.png"],
  ["Giulia Rossi", "Interior Designer", "/images/team-giulia.png"],
  ["Marco Ferretti", "Project Manager", "/images/team-marco.png"],
] as const;

export default function StudioPage() {
  return (
    <>
      <section className="container-site py-10">
        <Breadcrumb items={[{ label: "Studio" }]} />
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h1 className="font-display text-[2.7rem] sm:text-[3.1rem] 2xl:text-[4rem]">
              Il nostro studio
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#696a65]">
              Siamo uno studio di architettura e interior design con base a
              Milano. Progettiamo spazi che migliorano la vita delle persone e
              rispettano il contesto.
            </p>
          </div>
          <Photo
            src="/images/studio-office.png"
            alt="Spazio di lavoro dello studio di architettura"
            className="aspect-16/7"
            priority
          />
        </div>
      </section>

      <section
        id="approccio"
        className="border-y border-[#dedbd4] py-14 scroll-mt-24"
      >
        <div className="container-site grid gap-10 md:grid-cols-3 ">
          {[
            [
              "01",
              "Mission",
              "Offrire soluzioni progettuali su misura, curate in ogni dettaglio, unendo estetica, funzionalità e sostenibilità.",
            ],
            [
              "02",
              "Vision",
              "Essere un punto di riferimento per un'architettura consapevole, innovativa e senza tempo.",
            ],
            [
              "03",
              "Approccio",
              "Ascoltiamo, analizziamo e trasformiamo le idee in progetti concreti, accompagnando il cliente in ogni fase.",
            ],
          ].map(([number, title, text]) => (
            <article key={title}>
              <span className="text-md text-[#9a725d]">{number}</span>
              <h2 className="mt-5 text-lg font-medium">{title}</h2>
              <p className="mt-3 text-base leading-6 text-[#696a65]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site py-16">
        <h2 className="text-3xl font-medium">Il nostro team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {team.map(([name, role, image]) => (
            <article key={name}>
              <Photo
                src={image}
                alt={`Ritratto professionale di ${name}`}
                className="aspect-[4/3]"
                imageClassName="object-[center_28%]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <h3 className="mt-4 text-lg font-medium">{name}</h3>
              <p className="mt-1 text-[12px] text-[#696a65]">{role}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
