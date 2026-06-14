# Atelier Nova — template per studio di architettura

Template Next.js con App Router, TypeScript e Tailwind CSS. Include homepage, portfolio filtrabile, pagine progetto statiche, studio, servizi e contatti.

## Avvio

```bash
npm install
npm run dev
```

## Personalizzazione

- Progetti: modifica `src/data/projects.ts`.
- Servizi: modifica `src/data/services.ts`.
- Testi istituzionali: modifica le rispettive pagine in `src/app`.
- Palette e spaziature: modifica le variabili in `src/app/globals.css`.
- Dominio SEO: sostituisci `https://ateliernova.example` in `layout.tsx`, `sitemap.ts` e `robots.ts`.

## Immagini

I blocchi visuali usano `ImagePlaceholder`, un placeholder CSS senza asset esterni. Per inserire foto reali:

1. copia i file in `public/images`;
2. sostituisci `ImagePlaceholder` con `next/image`;
3. mantieni `alt`, dimensioni o `fill`, `sizes` e `priority` sulla hero;
4. aggiungi un campo `image` ai file mock per gestire gli asset dai dati.

## Form

Il form contatti è solo UI. Prima della pubblicazione collegalo a una Server Action o a un provider email e aggiungi validazione server-side, antispam e informativa privacy reale.
"# architetti_template" 
