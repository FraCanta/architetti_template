import Link from "next/link";
import { MapPlaceholder } from "./MapPlaceholder";

const mapsUrl = "https://maps.app.goo.gl/31nJXLR1YvA6aXvS6";

export function Footer() {
  return (
    <footer className="bg-[#252622] text-[#f5f2eb]">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_0.9fr_0.65fr_1.3fr]">
        <div>
          <p className="text-lg font-medium uppercase tracking-[0.08em]">
            Studio Forma
          </p>
          <p className="mt-4 max-w-xs text-[13px] leading-6 text-white/60">
            Progettiamo spazi unici che uniscono estetica, funzionalita e
            sostenibilita.
          </p>
        </div>
        <div>
          <p className="eyebrow !text-white/45">Navigazione</p>
          <div className="mt-5 flex flex-col gap-3 text-[13px]">
            <Link href="/progetti">Progetti</Link>
            <Link href="/servizi">Servizi</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/contatti">Contatti</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow !text-white/45">Studio</p>
          <address className="mt-5 text-[13px] not-italic leading-6 text-white/70">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Via della Forma 18
              <br />
              20121 Milano, Italia
            </a>
            <br />
            +39 02 0000 0000
            <br />
            studio@ateliernova.it
          </address>
        </div>
        <div>
          <p className="eyebrow !text-white/45">Orari</p>
          <p className="mt-5 text-[13px] leading-6 text-white/70">
            Lun - Ven
            <br />
            09:00 - 18:00
          </p>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Apri la posizione dello studio su Google Maps"
          className="block md:col-span-2 lg:col-span-1"
        >
          <MapPlaceholder
            className="min-h-48 border border-white/10"
          />
        </a>
      </div>
      <div className="container-site flex flex-col gap-3 border-t border-white/10 py-6 text-[10px] uppercase tracking-[0.12em] text-white/45 sm:flex-row sm:justify-between">
        <p>© 2026 Studio Forma. Template dimostrativo.</p>
        <p>Privacy · Cookie · Credits</p>
      </div>
    </footer>
  );
}
