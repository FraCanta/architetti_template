import Link from "next/link";
import type { Service } from "@/data/services";

function ServiceIcon({ index }: { index: string }) {
  const common = "h-8 w-8 stroke-[#20211f] stroke-[1.35] fill-none";
  const icons: Record<string, React.ReactNode> = {
    "01": (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <path d="M16 4 27 11v10l-11 7-11-7V11Z" />
        <path d="M16 4v24M5 11l11 7 11-7" />
      </svg>
    ),
    "02": (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <path d="M9 24c8-1 14-7 14-15 0-2-1-4-3-5-5 2-10 8-11 15Z" />
        <path d="M8 25c5-7 9-10 15-14" />
      </svg>
    ),
    "03": (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <path d="m5 16 11-10 11 10" />
        <path d="M8 14v13h16V14" />
        <path d="M13 27v-8h6v8" />
      </svg>
    ),
    "04": (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <path d="M7 18h18M10 18v-5a6 6 0 0 1 12 0v5M12 13V7M20 13V7" />
        <path d="M9 18l2 8h10l2-8" />
      </svg>
    ),
    "05": (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <path d="m7 25 15-18 3 3-15 18Z" />
        <path d="M5 12h18M15 4l10 10" />
      </svg>
    ),
    "06": (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <path d="M6 9 16 4l10 5v14l-10 5-10-5Z" />
        <path d="m6 9 10 5 10-5M16 14v14" />
      </svg>
    ),
  };

  return icons[index] ?? icons["01"];
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group border border-[#dedbd4] bg-[#fcfbf8]">
      <Link href={`/servizi#${service.slug}`} className="flex min-h-[218px] flex-col p-6">
        <ServiceIcon index={service.number} />
        <div className="mt-auto pt-8">
          <h3 className="text-[17px] font-medium leading-6">{service.title}</h3>
          <p className="mt-4 text-[13px] leading-[1.55] text-[#696a65]">{service.shortDescription}</p>
        </div>
        <span className="mt-5 text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
      </Link>
    </article>
  );
}
