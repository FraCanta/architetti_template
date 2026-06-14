import { Icon } from "@iconify/react";
import Link from "next/link";
import type { Service } from "@/data/services";

function ServiceIcon({ index }: { index: string }) {
  const icons: Record<string, string> = {
    "01": "tabler:building-community",
    "02": "tabler:armchair",
    "03": "tabler:home-cog",
    "04": "fa7-solid:helmet-safety",
    "05": "tabler:cube-3d-sphere",
    "06": "tabler:messages",
  };

  return (
    <Icon
      icon={icons[index] ?? icons["01"]}
      className="h-8 w-8 text-[#20211f]"
      aria-hidden="true"
    />
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group border border-[#dedbd4] bg-[#fcfbf8]">
      <Link
        href={`/servizi#${service.slug}`}
        className="flex min-h-[218px] flex-col p-6"
      >
        <ServiceIcon index={service.number} />
        <div className="mt-auto pt-8">
          <h3 className="text-[17px] font-bold leading-6">{service.title}</h3>
          <p className="mt-4 text-[13px] leading-[1.55] text-[#696a65]">
            {service.shortDescription}
          </p>
        </div>
        <Icon
          icon="tabler:arrow-right"
          className="mt-5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
