export const inspirationCategories = [
  "Tutte",
  "Interni",
  "Materiali",
  "Living",
  "Cucine",
  "Bagni",
  "Outdoor",
  "Dettagli",
] as const;

export type InspirationCategory = Exclude<
  (typeof inspirationCategories)[number],
  "Tutte"
>;

export type Inspiration = {
  slug: string;
  title: string;
  category: InspirationCategory;
  description: string;
  image: string;
  palette: string[];
  materials: string[];
};

export const inspirations: Inspiration[] = [
  {
    slug: "toni-caldi-superfici-materiche",
    title: "Toni caldi e superfici materiche",
    category: "Materiali",
    description:
      "Una composizione tattile in cui pietra, legno e tessuti naturali costruiscono un'atmosfera calda e misurata.",
    image:
      "/images/ispirazioni/composizione_di_materiali_naturali_e_texture.png",
    palette: ["#D8CCBC", "#B59A7D", "#806B58", "#EEE9E1"],
    materials: ["Travertino", "Rovere naturale", "Lino", "Intonaco materico"],
  },
  {
    slug: "bagno-pietra-chiara",
    title: "Bagno in pietra chiara",
    category: "Bagni",
    description:
      "Superfici continue, luce diffusa e dettagli essenziali per uno spazio intimo dalla presenza silenziosa.",
    image:
      "/images/ispirazioni/bagno_moderno_e_luminoso_in_pietra.png",
    palette: ["#E8E2D8", "#CEC3B3", "#A89B89", "#F6F3ED"],
    materials: ["Pietra calcarea", "Vetro satinato", "Acciaio spazzolato"],
  },
  {
    slug: "living-minimale-luce-naturale",
    title: "Living minimale con luce naturale",
    category: "Living",
    description:
      "Volumi morbidi e tonalità neutre lasciano alla luce il compito di definire profondità e ritmo dello spazio.",
    image:
      "/images/ispirazioni/soggiorno_minimalista_in_toni_neutri.png",
    palette: ["#E9E3D9", "#C9BCA8", "#8B8174", "#F8F5EF"],
    materials: ["Lino grezzo", "Legno chiaro", "Calce naturale"],
  },
  {
    slug: "cucina-legno-pietra",
    title: "Cucina in legno e pietra",
    category: "Cucine",
    description:
      "Una cucina luminosa e conviviale, definita dall'equilibrio tra venature naturali e superfici minerali.",
    image:
      "/images/ispirazioni/cucina_minimalista_e_luminosa.png",
    palette: ["#D9C5AA", "#A7835F", "#D8D3C9", "#F3EFE7"],
    materials: ["Rovere", "Pietra naturale", "Metallo brunito"],
  },
  {
    slug: "outdoor-mediterraneo",
    title: "Outdoor mediterraneo",
    category: "Outdoor",
    description:
      "Ombre, vegetazione e materiali chiari compongono uno spazio esterno essenziale, pensato per il tempo lento.",
    image:
      "/images/ispirazioni/terrazza_mediterranea_in_stile_minimalista.png",
    palette: ["#DCCDB7", "#9A9B7A", "#74634E", "#F2EDE4"],
    materials: ["Pietra locale", "Legno termotrattato", "Fibre intrecciate"],
  },
  {
    slug: "dettagli-metallo-brunito",
    title: "Dettagli in metallo brunito",
    category: "Dettagli",
    description:
      "Un accento scuro e raffinato che sottolinea giunti, profili e arredi senza appesantire l'insieme.",
    image:
      "/images/ispirazioni/dettaglio_architettonico_minimalista_e_raffinato.png",
    palette: ["#4D4138", "#8E7765", "#C8B8A7", "#E8E1D8"],
    materials: ["Ottone brunito", "Vetro", "Noce", "Pietra"],
  },
  {
    slug: "palette-naturale-rovere",
    title: "Palette naturale e rovere",
    category: "Materiali",
    description:
      "Tonalità sabbia e legni caldi danno forma a una palette versatile, luminosa e senza tempo.",
    image:
      "/images/ispirazioni/composizione_armoniosa_di_materiali_naturali.png",
    palette: ["#E4DBCD", "#C0A98D", "#94765B", "#F5F1E9"],
    materials: ["Rovere", "Canapa", "Argilla", "Pietra beige"],
  },
  {
    slug: "camera-essenziale-tessuti-naturali",
    title: "Camera essenziale e tessuti naturali",
    category: "Interni",
    description:
      "Una stanza raccolta, costruita attraverso luce morbida, proporzioni calme e materiali piacevoli al tatto.",
    image:
      "/images/ispirazioni/camera_da_letto_minimalista_e_serena.png",
    palette: ["#DDD3C5", "#BCA992", "#887665", "#F5F0E8"],
    materials: ["Lino lavato", "Rovere", "Lana bouclé"],
  },
  {
    slug: "moodboard-naturale",
    title: "Moodboard naturale",
    category: "Materiali",
    description:
      "Una selezione coordinata di texture opache e imperfette per definire un linguaggio materico coerente.",
    image:
      "/images/ispirazioni/composizione_di_materiali_naturali_minimalisti.png",
    palette: ["#D6C8B6", "#AD9274", "#786758", "#EBE5DC"],
    materials: ["Terracotta", "Lino", "Legno", "Intonaco a calce"],
  },
  {
    slug: "geometrie-luce-texture",
    title: "Geometrie, luce e texture",
    category: "Dettagli",
    description:
      "Tagli di luce e geometrie nette mettono in risalto la profondità delle superfici e la precisione dei dettagli.",
    image:
      "/images/ispirazioni/geometrie_e_luce_naturale_in_dettaglio.png",
    palette: ["#E1D7C9", "#BDAA91", "#6D6257", "#F4F0E9"],
    materials: ["Rovere massello", "Microcemento", "Metallo verniciato"],
  },
];
