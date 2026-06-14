import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatta Atelier Nova per una consulenza su progetti di architettura, interni o ristrutturazione.",
};

const inputClass =
  "mt-2 w-full border-b border-[#bdb8ad] bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[#a35f44]";

export default function ContactPage() {
  return (
    <section className="container-site pb-20 pt-12 sm:pt-16">
      <Breadcrumb items={[{ label: "Contatti" }]} />
      <div className="mt-10 grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <h1 className="font-display text-[2.7rem] sm:text-[3.1rem]">Contattaci</h1>
          <p className="mt-4 max-w-sm text-[15px] leading-7 text-[#696a65]">
            Raccontaci il tuo progetto. Ti risponderemo al più presto.
          </p>

          <div className="mt-10 grid gap-8 border-t border-[#d9d5cb] pt-8">
            <div>
              <p className="eyebrow">Studio</p>
              <address className="mt-4 text-sm not-italic leading-7 text-[#73736b]">
                Via della Forma 18<br />20121 Milano, Italia
              </address>
            </div>
            <div>
              <p className="eyebrow">Parliamone</p>
              <p className="mt-4 text-sm leading-7 text-[#73736b]">
                +39 02 0000 0000<br />studio@ateliernova.it
              </p>
            </div>
          </div>

          <ImagePlaceholder label="Mappa dello studio" alt="Placeholder mappa con posizione dello studio a Milano" tone="sage" className="mt-9 aspect-[16/9]" />
        </div>

        <div className="border border-[#dedbd4] p-7 sm:p-10">
          <form className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            <label className="text-xs font-bold uppercase tracking-[0.1em]">
              Nome e cognome *
              <input className={inputClass} type="text" name="name" required autoComplete="name" placeholder="Come possiamo chiamarti?" />
            </label>
            <label className="text-xs font-bold uppercase tracking-[0.1em]">
              Email *
              <input className={inputClass} type="email" name="email" required autoComplete="email" placeholder="nome@email.it" />
            </label>
            <label className="text-xs font-bold uppercase tracking-[0.1em]">
              Telefono
              <input className={inputClass} type="tel" name="phone" autoComplete="tel" placeholder="+39" />
            </label>
            <label className="text-xs font-bold uppercase tracking-[0.1em]">
              Tipo di progetto *
              <select className={inputClass} name="projectType" required defaultValue="">
                <option value="" disabled>Seleziona</option>
                <option>Nuova costruzione</option>
                <option>Ristrutturazione</option>
                <option>Interior design</option>
                <option>Spazio commerciale</option>
                <option>Consulenza</option>
              </select>
            </label>
            <label className="text-xs font-bold uppercase tracking-[0.1em] sm:col-span-2">
              Budget indicativo
              <select className={inputClass} name="budget" defaultValue="">
                <option value="" disabled>Seleziona una fascia</option>
                <option>Fino a € 50.000</option>
                <option>€ 50.000 – 150.000</option>
                <option>€ 150.000 – 300.000</option>
                <option>Oltre € 300.000</option>
                <option>Da definire</option>
              </select>
            </label>
            <label className="text-xs font-bold uppercase tracking-[0.1em] sm:col-span-2">
              Messaggio *
              <textarea className={`${inputClass} min-h-32 resize-y`} name="message" required placeholder="Dove si trova, cosa immagini, quali sono i tempi?" />
            </label>
            <label className="flex items-start gap-3 text-xs leading-5 text-[#73736b] sm:col-span-2">
              <input type="checkbox" name="privacy" required className="mt-1 accent-[#a35f44]" />
              Ho letto l&apos;informativa privacy e acconsento al trattamento dei dati per essere ricontattato.
            </label>
            <button type="submit" className="min-h-14 bg-[#252622] px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#a35f44] sm:col-span-2">
              Invia richiesta ↗
            </button>
          </form>
          <p className="mt-5 text-xs leading-5 text-[#73736b]">
            Template dimostrativo: collegare il form a un servizio email o a una Server Action prima della pubblicazione.
          </p>
        </div>
      </div>
    </section>
  );
}
