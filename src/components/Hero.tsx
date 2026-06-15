import { Button } from "./Button";
import { Photo } from "./Photo";
import type { ReactNode } from "react";

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  text: string;
};

export function Hero({ eyebrow, title, text }: HeroProps) {
  return (
    <section className="relative border-b border-[#dedbd4]">
      <div className="grid lg:h-140 lg:grid-cols-[46%_54%] xl:h-155 2xl:h-[calc(100vh-80px)] ">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-[5vw] lg:py-20">
          {eyebrow && <h1 className="eyebrow mb-6">{eyebrow}</h1>}
          <h2 className="font-display  text-[2.65rem] leading-[1.04] sm:text-[3.1rem] lg:text-[4rem] 2xl:text-[5rem] 3xl:text-[6rem] ">
            {title}
          </h2>
          <p className="mt-7 max-w-md text-[16px] 2xl:text-[18px] leading-normal tracking-wide text-[#696a65]">
            {text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/progetti">Scopri i progetti</Button>
            <Button href="/contatti" variant="secondary">
              Prenota una consulenza
            </Button>
          </div>
        </div>
        <div className="relative min-h-[420px] lg:h-full">
          <Photo
            src="/images/villa-hero.png"
            alt="Placeholder per una grande fotografia di architettura contemporanea"
            priority
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="h-full min-h-[420px]"
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-[5vw] hidden items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-[#696a65] lg:flex">
        <span>Scroll</span>
        <span className="h-px w-10 bg-[#696a65]" />
      </div>
    </section>
  );
}
