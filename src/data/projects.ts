export type ProjectCategory =
  | "Residenziale"
  | "Commerciale"
  | "Interior"
  | "Ristrutturazioni"
  | "Render";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  area: string;
  tone: "sand" | "sage" | "clay" | "stone" | "blue" | "bronze";
  imageType: string;
  image: string;
  gallery: string[];
  summary: string;
  concept: string;
  challenge: string;
  solution: string;
  materials: string[];
  featured?: boolean;
};

export const projectCategories = [
  "Tutti",
  "Residenziale",
  "Commerciale",
  "Interior",
  "Ristrutturazioni",
  "Render",
] as const;

export const projects: Project[] = [
  {
    slug: "casa-delle-corti",
    title: "Casa delle Corti",
    category: "Residenziale",
    location: "Bologna",
    year: "2026",
    area: "280 m²",
    tone: "sand",
    imageType: "Esterno architettonico",
    image: "/images/villa-pool-evening-a.png",
    gallery: [
      "/images/villa-pool-evening-b.png",
      "/images/interior-kitchen-dining.png",
      "/images/interior-living-garden.png",
      "/images/interior-bedroom.png",
    ],
    summary: "Una casa introversa, aperta alla luce e al paesaggio attraverso tre corti private.",
    concept:
      "Il progetto interpreta la corte come stanza a cielo aperto. Volumi pieni e vuoti costruiscono una sequenza domestica intima, luminosa e silenziosa.",
    challenge:
      "Garantire privacy rispetto alla strada mantenendo una relazione continua tra spazi interni, giardino e luce naturale.",
    solution:
      "Una pianta a pettine organizza gli ambienti attorno a tre corti con caratteri differenti, unite da una fascia distributiva centrale.",
    materials: ["Intonaco minerale", "Rovere naturale", "Pietra chiara", "Bronzo brunito"],
    featured: true,
  },
  {
    slug: "attico-luce",
    title: "Attico Luce",
    category: "Interior",
    location: "Milano",
    year: "2025",
    area: "165 m²",
    tone: "stone",
    imageType: "Interno moderno",
    image: "/images/interior-living-garden.png",
    gallery: [
      "/images/interior-kitchen-dining.png",
      "/images/detail-stair-oak.png",
      "/images/interior-entry.png",
      "/images/interior-bathroom.png",
    ],
    summary: "Interni continui e materici disegnati per valorizzare la luce naturale.",
    concept:
      "Una casa essenziale in cui arredi fissi, quinte e superfici definiscono una spazialità fluida senza rinunciare a funzioni precise.",
    challenge:
      "Riorganizzare un attico frammentato e poco luminoso, integrando contenimento e impianti in modo discreto.",
    solution:
      "Un nucleo centrale in legno contiene servizi e armadiature, liberando il perimetro e restituendo continuità alla zona giorno.",
    materials: ["Travertino", "Noce canaletto", "Calce naturale", "Acciaio satinato"],
    featured: true,
  },
  {
    slug: "officina-27",
    title: "Officina 27",
    category: "Commerciale",
    location: "Torino",
    year: "2025",
    area: "420 m²",
    tone: "bronze",
    imageType: "Spazio commerciale",
    image: "/images/office-exterior.png",
    gallery: [
      "/images/studio-office.png",
      "/images/studio-conference.png",
      "/images/studio-material-library.png",
      "/images/studio-drafting-desk.png",
    ],
    summary: "Un ex laboratorio trasformato in spazio ibrido per lavoro, incontri e cultura.",
    concept:
      "Conservare la memoria industriale dell'edificio e sovrapporre un sistema contemporaneo, reversibile e flessibile.",
    challenge:
      "Adeguare un involucro storico a nuovi standard di comfort e a programmi d'uso variabili.",
    solution:
      "Elementi autoportanti organizzano gli ambienti senza toccare la struttura esistente, lasciata leggibile e protagonista.",
    materials: ["Mattone recuperato", "Acciaio brunito", "Sughero", "Tessuto acustico"],
    featured: true,
  },
  {
    slug: "villa-sul-lago",
    title: "Villa sul Lago",
    category: "Ristrutturazioni",
    location: "Como",
    year: "2024",
    area: "340 m²",
    tone: "blue",
    imageType: "Esterno e paesaggio",
    image: "/images/villa-sea-sunset.png",
    gallery: [
      "/images/villa-stone-front.png",
      "/images/interior-kitchen-sea.png",
      "/images/interior-living-warm.png",
      "/images/interior-curved-stair.png",
    ],
    summary: "Recupero rispettoso di una villa anni Sessanta affacciata sul lago.",
    concept:
      "Restituire chiarezza all'impianto originale, aggiornandolo con nuovi affacci, comfort contemporaneo e materiali coerenti.",
    challenge:
      "Integrare prestazioni energetiche e nuovi impianti senza alterare le proporzioni dell'architettura esistente.",
    solution:
      "Interventi puntuali sull'involucro e una nuova sequenza interna rafforzano il rapporto con il paesaggio.",
    materials: ["Ceppo lombardo", "Legno termotrattato", "Ottone", "Vetro extra-chiaro"],
  },
  {
    slug: "casa-nel-borgo",
    title: "Casa nel Borgo",
    category: "Ristrutturazioni",
    location: "Matera",
    year: "2024",
    area: "120 m²",
    tone: "clay",
    imageType: "Dettaglio materico",
    image: "/images/interior-arches.png",
    gallery: [
      "/images/interior-living-warm.png",
      "/images/detail-olive-bench.png",
      "/images/detail-stone-wood.png",
      "/images/detail-travertine-vase.png",
    ],
    summary: "Una casa compatta che rinnova tecniche e atmosfere del costruire mediterraneo.",
    concept:
      "Lavorare per sottrazione, lasciando emergere murature, volte e tracce del tempo.",
    challenge:
      "Ottenere comfort e funzionalità in un organismo storico irregolare e vincolato.",
    solution:
      "Pochi elementi su misura definiscono nuovi usi e mantengono leggibile la struttura originaria.",
    materials: ["Tufo", "Cocciopesto", "Castagno", "Ferro cerato"],
  },
  {
    slug: "padiglione-verde",
    title: "Padiglione Verde",
    category: "Render",
    location: "Firenze",
    year: "2026",
    area: "95 m²",
    tone: "sage",
    imageType: "Render 3D",
    image: "/images/villa-cube-pool.png",
    gallery: [
      "/images/villa-pool-night.png",
      "/images/detail-facade-window.png",
      "/images/detail-glass-wood.png",
      "/images/materials-flatlay.png",
    ],
    summary: "Concept per un padiglione temporaneo immerso in un giardino storico.",
    concept:
      "Una struttura leggera e permeabile che costruisce ombra, sosta e nuove prospettive sul giardino.",
    challenge:
      "Immaginare un'architettura reversibile, accessibile e capace di inserirsi con delicatezza nel contesto.",
    solution:
      "Un telaio modulare in legno accoglie pannelli tessili e superfici riflettenti per dissolvere il volume nel paesaggio.",
    materials: ["Legno lamellare", "Tessuto tecnico", "Alluminio riciclato", "Ghiaia"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
