type TestimonialCardProps = {
  quote: string;
  name: string;
  project: string;
};

export function TestimonialCard({ quote, name, project }: TestimonialCardProps) {
  return (
    <figure className="border-l border-[#a35f44] pl-6">
      <blockquote className="font-display text-2xl leading-snug sm:text-3xl">“{quote}”</blockquote>
      <figcaption className="mt-6 text-[10px] font-bold uppercase tracking-[0.13em] text-[#73736b]">
        {name} · {project}
      </figcaption>
    </figure>
  );
}
