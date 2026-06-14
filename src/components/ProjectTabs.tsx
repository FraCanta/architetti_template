"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { Photo } from "./Photo";

type TabId = "gallery" | "materials" | "drawings" | "technical";

const tabs: { id: TabId; label: string }[] = [
  { id: "gallery", label: "Galleria" },
  { id: "materials", label: "Materiali" },
  { id: "drawings", label: "Disegni" },
  { id: "technical", label: "Dati tecnici" },
];

export function ProjectTabs({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<TabId>("gallery");

  return (
    <section className="container-site py-10">
      <div
        className="flex gap-8 overflow-x-auto border-b border-[#dedbd4] text-[14px] font-medium uppercase tracking-[0.1em]"
        role="tablist"
        aria-label={`Dettagli del progetto ${project.title}`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 border-b-2 pb-4 transition-colors ${
              activeTab === tab.id
                ? "border-[#20211f] text-[#20211f]"
                : "border-transparent text-[#777872] hover:text-[#20211f]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "gallery" && (
        <ImageGrid
          images={project.gallery}
          altPrefix={`Galleria del progetto ${project.title}`}
        />
      )}

      {activeTab === "materials" && (
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <h2 className="text-[18px] font-medium">Materiali e dettagli</h2>
            <p className="mt-4 text-[13px] leading-6 text-[#696a65]">
              La palette materica definisce atmosfera, durata e coerenza del
              progetto. Ogni scelta viene verificata su campioni, luce naturale
              e relazione con gli spazi.
            </p>
            <ul className="mt-6 grid gap-3 text-[12px] text-[#20211f]">
              {project.materials.map((material) => (
                <li key={material} className="border-b border-[#dedbd4] pb-3">
                  {material}
                </li>
              ))}
            </ul>
          </div>
          <ImageGrid
            images={project.materialImages}
            altPrefix={`Materiali del progetto ${project.title}`}
            compact
          />
        </div>
      )}

      {activeTab === "drawings" && (
        <div className="mt-8">
          <div className="mb-6 max-w-xl">
            <h2 className="text-[18px] font-medium">Disegni di progetto</h2>
            <p className="mt-4 text-[13px] leading-6 text-[#696a65]">
              Elaborati tecnici, viste concettuali e schemi aiutano a leggere il
              progetto prima della realizzazione.
            </p>
          </div>
          <ImageGrid
            images={project.drawingImages}
            altPrefix={`Disegni del progetto ${project.title}`}
            compact
          />
        </div>
      )}

      {activeTab === "technical" && (
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <h2 className="text-[18px] font-medium">Dati tecnici</h2>
            <p className="mt-4 text-[13px] leading-6 text-[#696a65]">
              Una sintesi chiara delle informazioni principali, pensata per
              rendere il portfolio leggibile e facilmente aggiornabile.
            </p>
          </div>
          <dl className="grid gap-px overflow-hidden border border-[#dedbd4] bg-[#dedbd4] sm:grid-cols-2">
            {[
              ["Categoria", project.category],
              ["Luogo", project.location],
              ["Anno", project.year],
              ["Superficie", project.area],
              ["Concept", project.imageType],
              ["Servizi", "Progettazione, interior, direzione lavori"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#fcfbf8] p-6">
                <dt className="text-[10px] uppercase tracking-[0.13em] text-[#777872]">
                  {label}
                </dt>
                <dd className="mt-3 text-[15px] text-[#20211f]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  );
}

function ImageGrid({
  images,
  altPrefix,
  compact = false,
}: {
  images: string[];
  altPrefix: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`mt-6 grid gap-4 sm:grid-cols-2 ${
        compact ? "lg:grid-cols-2" : "lg:grid-cols-4"
      }`}
    >
      {images.map((image, index) => (
        <Photo
          key={image}
          src={image}
          alt={`${altPrefix}, immagine ${index + 1}`}
          className={compact ? "aspect-[16/10]" : "aspect-[4/3]"}
          sizes={
            compact
              ? "(max-width: 1024px) 100vw, 35vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          }
        />
      ))}
    </div>
  );
}
