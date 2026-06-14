import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Progetti",
  description:
    "Portfolio di architettura, interior design, ristrutturazioni e visualizzazioni 3D di Atelier Nova.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="container-site pb-20 pt-10 sm:pt-14">
        <Breadcrumb items={[{ label: "Progetti" }]} />
        <div className="mt-10 max-w-2xl">
          <p className="eyebrow mb-5">Portfolio</p>
          <h1 className="font-display text-[2.7rem] leading-tight sm:text-[3.1rem] 2xl:text-[4rem]">
            Progetti
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#696a65]">
            Ogni progetto nasce dall&apos;ascolto e si sviluppa in equilibrio
            tra estetica, funzionalità e contesto.
          </p>
        </div>
        <ProjectGrid />
      </section>
      <CTASection />
    </>
  );
}
