import Link from "next/link";
import { MapPlaceholder } from "./MapPlaceholder";

const mapsUrl = "https://maps.app.goo.gl/31nJXLR1YvA6aXvS6";
const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-[#252622] text-[#f5f2eb]">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.15fr_0.72fr_0.9fr_0.85fr_0.95fr_1.25fr]">
        <div>
          <p className="text-lg font-medium uppercase tracking-[0.08em]">
            Studio Forma
          </p>
          <p className="mt-4 max-w-xs text-[13px] leading-6 text-white/60">
            Architettura, interni e ristrutturazioni con un approccio misurato,
            funzionale e su misura.
          </p>
          <div className="mt-6 grid gap-2 text-[11px] uppercase tracking-[0.12em] text-white/45">
            <p>Primo confronto conoscitivo</p>
            <p>Risposta entro 48 ore lavorative</p>
          </div>
        </div>

        <div>
          <p className="eyebrow !text-white/45">Navigazione</p>
          <div className="mt-5 flex flex-col gap-3 text-[13px]">
            <Link href="/progetti">Progetti</Link>
            <Link href="/servizi">Servizi</Link>
            <Link href="/ispirazioni">Ispirazioni</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/consulenza">Consulenza</Link>
            <Link href="/contatti">Contatti</Link>
          </div>
        </div>

        <div>
          <p className="eyebrow !text-white/45">Servizi</p>
          <div className="mt-5 flex flex-col gap-3 text-[13px] text-white/70">
            <Link href="/servizi#progettazione-architettonica">
              Progettazione
            </Link>
            <Link href="/servizi#interior-design">Interior design</Link>
            <Link href="/servizi#ristrutturazioni">Ristrutturazioni</Link>
            <Link href="/servizi#direzione-lavori">Direzione lavori</Link>
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
              Via Roma
              <br />
              Citta metropolitana di Milano
            </a>
            <br />
            +39 02 0000 0000
            <br />
            studio@ateliernova.it
            <br />
            P.IVA 00000000000
          </address>
        </div>

        <div>
          <p className="eyebrow !text-white/45">Aree</p>
          <p className="mt-5 text-[13px] leading-6 text-white/70">
            Milano e Lombardia
            <br />
            Progetti in tutta Italia
            <br />
            Lun - Ven, 09:00 - 18:00
          </p>
          <div className="mt-5 flex flex-col gap-3 text-[13px]">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
              Pinterest
            </a>
          </div>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Apri la posizione dello studio su Google Maps"
          className="block md:col-span-2 lg:col-span-1"
        >
          <MapPlaceholder className="min-h-48 border border-white/10" />
        </a>
      </div>

      <div className="container-site flex flex-col gap-3 border-t border-white/10 py-6 text-[10px] uppercase tracking-[0.12em] text-white/45 sm:flex-row sm:justify-between">
        <p>© {year} Studio Forma. Template dimostrativo.</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookie">Cookie</Link>
          <span>Credits</span>
        </div>
      </div>
    </footer>
  );
}
