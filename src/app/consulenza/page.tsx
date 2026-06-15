import { Icon } from "@iconify/react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Consulenza architettonica",
  description:
    "Un confronto mirato per chiarire esigenze, vincoli, budget e possibilità prima di acquistare, ristrutturare o ripensare uno spazio.",
  alternates: {
    canonical: "/consulenza",
  },
  openGraph: {
    title: "Consulenza architettonica | Studio Forma",
    description:
      "Un primo confronto per orientare acquisti, ristrutturazioni e trasformazioni dello spazio.",
    url: "/consulenza",
    images: ["/images/studio-client-meeting.png"],
  },
};

const audiences = [
  {
    icon: "tabler:home-edit",
    title: "Ristrutturazione casa",
    text: "Per mettere a fuoco obiettivi, potenziale e priorità prima di iniziare i lavori.",
  },
  {
    icon: "tabler:key",
    title: "Acquisto immobile",
    text: "Per valutare con maggiore consapevolezza uno spazio prima di prendere una decisione.",
  },
  {
    icon: "tabler:layout-grid",
    title: "Ripensare gli spazi",
    text: "Per capire come migliorare distribuzione, funzioni e qualità degli ambienti.",
  },
  {
    icon: "tabler:timeline-event",
    title: "Budget, tempi e priorità",
    text: "Per costruire una prima visione realistica delle risorse e delle fasi necessarie.",
  },
];

const included = [
  "Analisi delle esigenze",
  "Valutazione dello stato attuale",
  "Individuazione di criticità e opportunità",
  "Prime indicazioni progettuali",
  "Confronto su materiali, stile e atmosfera",
  "Definizione dei prossimi step",
];

const steps = [
  ["01", "Racconti il progetto", "Condividi esigenze, dubbi, immagini e informazioni sullo spazio."],
  ["02", "Fissiamo un incontro", "Organizziamo un confronto dedicato, online oppure in studio."],
  ["03", "Analizziamo possibilità e priorità", "Mettiamo a fuoco vincoli, opportunità e scelte da affrontare."],
  ["04", "Definiamo i prossimi passi", "Costruiamo una direzione chiara per procedere con maggiore consapevolezza."],
];

export default function ConsultationPage() {
  return (
    <>
      <section className="border-b border-[#dedbd4]">
        <div className="container-site pb-16 pt-10 sm:pb-20">
          <Breadcrumb items={[{ label: "Consulenza" }]} />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow mb-6">Un primo confronto</p>
              <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-[3.5rem] lg:text-[4.4rem]">
                Consulenza architettonica
              </h1>
            </div>
            <div className="max-w-xl lg:pb-1">
              <p className="text-[16px] leading-7 text-[#696a65]">
                Un primo confronto per analizzare esigenze, vincoli e possibilità
                dello spazio, trasformando idee iniziali in una direzione
                progettuale chiara.
              </p>
              <Button
                href="/contatti?servizio=consulenza"
                className="mt-8"
              >
                Richiedi una consulenza
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-site grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <p className="eyebrow pt-2">Per iniziare</p>
          <div className="max-w-3xl">
            <h2 className="font-display text-[2.2rem] leading-[1.12] sm:text-[2.8rem]">
              Il primo passo per dare forma al progetto
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-[#696a65]">
              La consulenza aiuta a orientarsi prima di ristrutturare, acquistare
              un immobile o ripensare gli spazi. È un momento di ascolto e analisi
              per distinguere le priorità, riconoscere il potenziale e capire
              quali decisioni affrontare per prime.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dedbd4] bg-[#f5f3ee] section-space">
        <div className="container-site">
          <SectionTitle
            eyebrow="A chi è rivolta"
            title="Un confronto utile in momenti diversi"
            text="Quando serve chiarezza prima di investire tempo e risorse, una lettura progettuale aiuta a scegliere con maggiore consapevolezza."
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-[#dedbd4] bg-[#dedbd4] sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <article
                key={item.title}
                className="min-h-64 bg-[#fcfbf8] p-7 transition-colors duration-300 hover:bg-white sm:p-8"
              >
                <Icon
                  icon={item.icon}
                  className="h-7 w-7 text-[#9a725d]"
                  aria-hidden="true"
                />
                <h3 className="mt-10 text-lg font-medium">{item.title}</h3>
                <p className="mt-4 text-[13px] leading-6 text-[#696a65]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionTitle
            eyebrow="Cosa include"
            title="Una prima lettura, concreta e su misura"
            text="Il contenuto dell'incontro si adatta al progetto e alle decisioni che hai bisogno di affrontare."
          />
          <div className="border-t border-[#dedbd4]">
            {included.map((item, index) => (
              <div
                key={item}
                className="grid grid-cols-[2.5rem_1fr] items-center gap-4 border-b border-[#dedbd4] py-5 sm:grid-cols-[3.5rem_1fr]"
              >
                <span className="text-xs text-[#9a725d]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#dedbd4] section-space">
        <div className="container-site">
          <SectionTitle
            eyebrow="Come funziona"
            title="Quattro passaggi, una direzione chiara"
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <article key={number} className="border-t border-[#20211f] pt-5">
                <span className="text-xs text-[#9a725d]">{number}</span>
                <h3 className="mt-8 text-lg font-medium">{title}</h3>
                <p className="mt-4 text-[13px] leading-6 text-[#696a65]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#9a725d] py-16 text-white sm:py-20">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 !text-white/55">Parliamone</p>
            <h2 className="font-display text-[2rem] leading-tight sm:text-[2.5rem]">
              Vuoi capire da dove partire?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
              Raccontaci lo spazio e le domande che stai affrontando. Il primo
              confronto servirà a mettere ordine nelle idee e definire una
              direzione possibile.
            </p>
          </div>
          <Button href="/contatti?servizio=consulenza" variant="light">
            Richiedi una consulenza
          </Button>
        </div>
      </section>
    </>
  );
}
