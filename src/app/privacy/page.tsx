import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Informativa privacy dimostrativa per il template Studio Forma.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="container-site max-w-3xl pb-20 pt-10">
      <Breadcrumb items={[{ label: "Privacy" }]} />
      <p className="eyebrow mt-10">Informativa</p>
      <h1 className="mt-5 font-display text-[2.7rem] leading-tight sm:text-[3.1rem]">
        Privacy
      </h1>
      <div className="mt-8 grid gap-5 text-[15px] leading-7 text-[#696a65]">
        <p>
          Questa pagina è un contenuto dimostrativo. Prima della pubblicazione,
          sostituire il testo con un&apos;informativa privacy conforme alla normativa
          applicabile e ai servizi effettivamente collegati al sito.
        </p>
        <p>
          I dati inviati tramite il form contatti dovranno essere trattati solo
          per rispondere alle richieste ricevute e per le finalità indicate
          nell&apos;informativa definitiva.
        </p>
      </div>
    </section>
  );
}
