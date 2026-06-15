"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

type ServiceKey =
  | "consulenza-architettonica"
  | "progettazione-architettonica"
  | "interior-design"
  | "ristrutturazioni"
  | "direzione-lavori"
  | "render-3d";

type Option = {
  label: string;
  service: ServiceKey;
};

const questions: Array<{ title: string; options: Option[] }> = [
  {
    title: "Che tipo di progetto hai in mente?",
    options: [
      { label: "Ristrutturare casa", service: "ristrutturazioni" },
      { label: "Ripensare gli interni", service: "interior-design" },
      {
        label: "Valutare un immobile da acquistare",
        service: "consulenza-architettonica",
      },
      {
        label: "Avviare un progetto completo",
        service: "progettazione-architettonica",
      },
      {
        label: "Realizzare render o immagini 3D",
        service: "render-3d",
      },
      { label: "Non lo so ancora", service: "consulenza-architettonica" },
    ],
  },
  {
    title: "In che fase ti trovi?",
    options: [
      {
        label: "Ho solo un'idea iniziale",
        service: "consulenza-architettonica",
      },
      {
        label: "Ho già un immobile",
        service: "ristrutturazioni",
      },
      {
        label: "Voglio capire fattibilità e priorità",
        service: "consulenza-architettonica",
      },
      {
        label: "Cerco un professionista che segua tutto",
        service: "progettazione-architettonica",
      },
      {
        label: "Mi serve un supporto specifico",
        service: "consulenza-architettonica",
      },
    ],
  },
  {
    title: "Di cosa hai più bisogno ora?",
    options: [
      {
        label: "Chiarezza e orientamento",
        service: "consulenza-architettonica",
      },
      {
        label: "Distribuzione degli spazi",
        service: "interior-design",
      },
      {
        label: "Scelta di materiali, colori e arredi",
        service: "interior-design",
      },
      {
        label: "Gestione del progetto",
        service: "progettazione-architettonica",
      },
      {
        label: "Coordinamento dei lavori",
        service: "direzione-lavori",
      },
      {
        label: "Presentazione visiva del progetto",
        service: "render-3d",
      },
    ],
  },
];

const services: Record<
  ServiceKey,
  { title: string; description: string; anchor: string }
> = {
  "consulenza-architettonica": {
    title: "Consulenza architettonica",
    description:
      "Un primo confronto per chiarire esigenze, vincoli e priorità, definendo con maggiore consapevolezza il percorso da intraprendere.",
    anchor: "consulenza",
  },
  "progettazione-architettonica": {
    title: "Progettazione architettonica",
    description:
      "Un percorso completo per trasformare esigenze e obiettivi in un progetto coordinato, dall'idea iniziale allo sviluppo tecnico.",
    anchor: "progettazione-architettonica",
  },
  "interior-design": {
    title: "Interior design",
    description:
      "Il servizio adatto per ripensare distribuzione, materiali, luce e arredi, costruendo ambienti coerenti con il tuo modo di vivere.",
    anchor: "interior-design",
  },
  ristrutturazioni: {
    title: "Ristrutturazioni",
    description:
      "Un progetto dedicato alla trasformazione dell'esistente, dalla lettura dello spazio alla definizione degli interventi necessari.",
    anchor: "ristrutturazioni",
  },
  "direzione-lavori": {
    title: "Direzione lavori",
    description:
      "Il supporto per coordinare imprese, fornitori e verifiche, mantenendo qualità e coerenza durante la realizzazione.",
    anchor: "direzione-lavori",
  },
  "render-3d": {
    title: "Render e visualizzazione 3D",
    description:
      "Immagini e visualizzazioni per anticipare spazi, materiali e atmosfere e presentare il progetto in modo chiaro.",
    anchor: "render-visualizzazione-3d",
  },
};

const resultPriority: ServiceKey[] = [
  "consulenza-architettonica",
  "ristrutturazioni",
  "interior-design",
  "progettazione-architettonica",
  "direzione-lavori",
  "render-3d",
];

function getRecommendedService(answers: Array<Option | undefined>) {
  const scores = answers.reduce<Partial<Record<ServiceKey, number>>>(
    (currentScores, answer, index) => {
      if (answer) {
        const weight = index === questions.length - 1 ? 3 : 1;
        currentScores[answer.service] =
          (currentScores[answer.service] ?? 0) + weight;
      }
      return currentScores;
    },
    {},
  );

  return resultPriority.reduce((best, service) => {
    return (scores[service] ?? 0) > (scores[best] ?? 0) ? service : best;
  }, resultPriority[0]);
}

export function ServiceFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Array<Option | undefined>>([
    undefined,
    undefined,
    undefined,
  ]);
  const [showResult, setShowResult] = useState(false);

  const selectedAnswer = answers[step];
  const resultKey = getRecommendedService(answers);
  const result = services[resultKey];

  function selectAnswer(option: Option) {
    setAnswers((current) =>
      current.map((answer, index) => (index === step ? option : answer)),
    );
  }

  function goForward() {
    if (!selectedAnswer) return;

    if (step === questions.length - 1) {
      setShowResult(true);
      return;
    }

    setStep((current) => current + 1);
  }

  function goBack() {
    if (showResult) {
      setShowResult(false);
      return;
    }

    setStep((current) => Math.max(0, current - 1));
  }

  function restart() {
    setAnswers([undefined, undefined, undefined]);
    setStep(0);
    setShowResult(false);
  }

  return (
    <section
      id="trova-servizio"
      className="scroll-mt-24 border-b border-[#dedbd4] section-space"
    >
      <div className="container-site grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="max-w-md">
          <p className="eyebrow mb-5 flex items-center gap-3 after:h-px after:w-10 after:bg-[#b89a87]">
            Orientamento
          </p>
          <h2 className="font-display text-[2.2rem] leading-[1.1] sm:text-[2.55rem]">
            Trova il servizio giusto
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-[#696a65]">
            Non sai da dove partire? Rispondi a poche domande e scopri quale
            percorso può essere più adatto al tuo progetto.
          </p>
        </div>

        <div className="border border-[#dedbd4] bg-[#f5f3ee] p-6 sm:p-9 lg:p-10">
          {!showResult ? (
            <div key={step} className="finder-step">
              <div className="flex items-center justify-between gap-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#696a65]">
                  Domanda {step + 1} di {questions.length}
                </p>
                <div
                  className="flex gap-1.5"
                  aria-label={`Avanzamento: domanda ${step + 1} di ${questions.length}`}
                >
                  {questions.map((question, index) => (
                    <span
                      key={question.title}
                      className={`h-1.5 w-8 transition-colors ${
                        index <= step ? "bg-[#9a725d]" : "bg-[#d7d2c8]"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <fieldset className="mt-8">
                <legend className="font-display text-[1.75rem] leading-tight sm:text-[2rem]">
                  {questions[step].title}
                </legend>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {questions[step].options.map((option) => {
                    const isSelected = selectedAnswer?.label === option.label;

                    return (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => selectAnswer(option)}
                        aria-pressed={isSelected}
                        className={`flex min-h-16 items-center justify-between gap-4 border px-5 py-4 text-left text-[14px] leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a725d] ${
                          isSelected
                            ? "border-[#9a725d] bg-[#9a725d] text-white"
                            : "border-[#d5d0c6] bg-[#fcfbf8] hover:border-[#9a725d] hover:bg-white"
                        }`}
                      >
                        <span>{option.label}</span>
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            isSelected
                              ? "border-white bg-white text-[#9a725d]"
                              : "border-[#aaa59b]"
                          }`}
                          aria-hidden="true"
                        >
                          {isSelected && (
                            <Icon icon="tabler:check" className="h-3.5 w-3.5" />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#d5d0c6] pt-6 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#20211f] px-6 text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-[#20211f] hover:text-white disabled:cursor-not-allowed disabled:border-[#c9c5bc] disabled:text-[#aaa69d] disabled:hover:bg-transparent"
                >
                  <Icon icon="tabler:arrow-left" className="h-4 w-4" />
                  Indietro
                </button>
                <button
                  type="button"
                  onClick={goForward}
                  disabled={!selectedAnswer}
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#20211f] px-7 text-[11px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#9a725d] disabled:cursor-not-allowed disabled:bg-[#c9c5bc]"
                >
                  {step === questions.length - 1
                    ? "Scopri il risultato"
                    : "Avanti"}
                  <Icon icon="tabler:arrow-right" className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="finder-step" aria-live="polite">
              <p className="eyebrow">Il percorso consigliato</p>
              <div className="mt-7 border-t border-[#20211f] pt-7">
                <span className="text-xs text-[#9a725d]">Risultato</span>
                <h3 className="mt-4 font-display text-[2rem] leading-tight sm:text-[2.4rem]">
                  {result.title}
                </h3>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#696a65]">
                  {result.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/contatti?servizio=${resultKey}`}
                    className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#20211f] px-8 text-[11px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#9a725d]"
                  >
                    Richiedi informazioni
                    <Icon
                      icon="tabler:arrow-right"
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href={`#${result.anchor}`}
                    className="inline-flex min-h-12 items-center justify-center border border-[#20211f] px-8 text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-[#20211f] hover:text-white"
                  >
                    Vedi il servizio
                  </Link>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-5 border-t border-[#d5d0c6] pt-6">
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.13em]"
                >
                  <Icon icon="tabler:arrow-left" className="h-4 w-4" />
                  Modifica risposte
                </button>
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.13em] text-[#696a65]"
                >
                  <Icon icon="tabler:refresh" className="h-4 w-4" />
                  Ricomincia
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
