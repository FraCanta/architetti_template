export type Service = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  usefulWhen: string;
  imageType: string;
  tone: "sand" | "sage" | "clay" | "stone" | "blue" | "bronze";
};

export const services: Service[] = [
  {
    slug: "progettazione-architettonica",
    number: "01",
    title: "Progettazione architettonica",
    shortDescription: "Spazi nuovi, coerenti con il luogo e con il modo in cui saranno vissuti.",
    description:
      "Seguiamo il progetto dall'idea preliminare alla definizione esecutiva, coordinando aspetti spaziali, tecnici e autorizzativi.",
    benefits: ["Visione unitaria", "Controllo di tempi e costi", "Soluzioni su misura"],
    usefulWhen: "Per nuove costruzioni, ampliamenti o trasformazioni complesse.",
    imageType: "Disegno tecnico",
    tone: "sand",
  },
  {
    slug: "interior-design",
    number: "02",
    title: "Interior design",
    shortDescription: "Interni funzionali e sensibili, costruiti attorno a gesti quotidiani.",
    description:
      "Progettiamo layout, illuminazione, finiture e arredi su misura per creare ambienti riconoscibili e duraturi.",
    benefits: ["Spazi più fluidi", "Materiali coordinati", "Dettagli personalizzati"],
    usefulWhen: "Per abitazioni, hospitality, retail e luoghi di lavoro.",
    imageType: "Interno moderno",
    tone: "stone",
  },
  {
    slug: "ristrutturazioni",
    number: "03",
    title: "Ristrutturazioni",
    shortDescription: "Nuova vita agli edifici esistenti, con rispetto e precisione.",
    description:
      "Interveniamo sull'esistente integrando qualità architettonica, prestazioni energetiche e nuovi modi d'uso.",
    benefits: ["Valore dell'immobile", "Comfort aggiornato", "Identità preservata"],
    usefulWhen: "Per appartamenti, ville, edifici storici e spazi da riconvertire.",
    imageType: "Cantiere e materiali",
    tone: "clay",
  },
  {
    slug: "direzione-lavori",
    number: "04",
    title: "Direzione lavori",
    shortDescription: "Il progetto prende forma con controllo, qualità e presenza in cantiere.",
    description:
      "Coordiniamo imprese, fornitori e verifiche per tutelare la qualità del progetto durante ogni fase realizzativa.",
    benefits: ["Controllo esecutivo", "Coordinamento operativo", "Riduzione degli imprevisti"],
    usefulWhen: "Quando serve un referente unico tra progetto, committenza e cantiere.",
    imageType: "Studio professionale",
    tone: "bronze",
  },
  {
    slug: "render-3d-concept",
    number: "05",
    title: "Render 3D e concept",
    shortDescription: "Immagini chiare per anticipare atmosfere, scelte e possibilità.",
    description:
      "Sviluppiamo concept, moodboard e visualizzazioni fotorealistiche per comunicare il progetto prima della realizzazione.",
    benefits: ["Decisioni più consapevoli", "Comunicazione immediata", "Varianti comparabili"],
    usefulWhen: "In fase preliminare, commerciale o per presentazioni a investitori.",
    imageType: "Render e moodboard",
    tone: "blue",
  },
  {
    slug: "consulenze",
    number: "06",
    title: "Consulenze",
    shortDescription: "Un confronto mirato per chiarire potenziale, priorità e prossimi passi.",
    description:
      "Offriamo sessioni di orientamento su acquisto immobili, fattibilità, distribuzione, materiali e budget.",
    benefits: ["Valutazione rapida", "Priorità definite", "Rischi più chiari"],
    usefulWhen: "Prima di acquistare, ristrutturare o avviare un progetto.",
    imageType: "Moodboard materiali",
    tone: "sage",
  },
];
