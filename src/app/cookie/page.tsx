import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cookie",
  description: "Informativa cookie dimostrativa per il template Studio Forma.",
  alternates: {
    canonical: "/cookie",
  },
};

export default function CookiePage() {
  return (
    <section className="container-site max-w-3xl pb-20 pt-10">
      <Breadcrumb items={[{ label: "Cookie" }]} />
      <p className="eyebrow mt-10">Informativa</p>
      <h1 className="mt-5 font-display text-[2.7rem] leading-tight sm:text-[3.1rem]">
        Cookie
      </h1>
      <div className="mt-8 grid gap-5 text-[15px] leading-7 text-[#696a65]">
        <p>
          Questa pagina è un placeholder editoriale. Il template non configura
          strumenti di tracciamento avanzati, ma eventuali analytics, mappe o
          integrazioni esterne dovranno essere descritti prima della messa online.
        </p>
        <p>
          Aggiornare questa sezione con categorie di cookie, durata, finalità e
          strumenti di gestione del consenso effettivamente presenti.
        </p>
      </div>
    </section>
  );
}
