import { Button } from "./Button";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Hai un progetto da realizzare?",
  text = "Raccontaci il progetto, le necessità e le ambizioni. Il primo confronto serve a mettere a fuoco le possibilità.",
}: CTASectionProps) {
  return (
    <section className="bg-[#242522] py-16 text-white sm:py-20">
      <div className="container-site grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-4xl">
          <p className="eyebrow mb-4 !text-white/55">Parliamone</p>
          <h2 className="font-display text-[1.8rem] leading-tight sm:text-[2.1rem]">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65">{text}</p>
        </div>
        <Button href="/contatti" variant="light">
          Prenota una consulenza
        </Button>
      </div>
    </section>
  );
}
