"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/studio", label: "Studio" },
  { href: "/progetti", label: "Progetti" },
  { href: "/servizi", label: "Servizi" },
  { href: "/ispirazioni", label: "Ispirazioni" },
  { href: "/contatti", label: "Contatti" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fcfbf8]/95 backdrop-blur-md">
      <div className="relative mx-auto flex h-22.5 w-[90%]  items-center justify-between">
        <Link
          href="/"
          className="z-10 text-[22px] font-medium uppercase leading-none tracking-[0.08em]"
        >
          Studio Forma
          <span className="mt-1.5 block text-[9px] font-normal uppercase tracking-[0.24em] text-[#777872]">
            Architettura
          </span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:gap-12 lg:flex"
          aria-label="Navigazione principale"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link-line text-[13px] font-medium uppercase ${
                pathname.startsWith(item.href) ? "text-[#a35f44]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="z-10 hidden lg:block">
          <Link
            href="/consulenza"
            className="inline-flex h-11 items-center bg-[#20211f] px-8 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#9a725d]"
          >
            Richiedi una Consulenza
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="z-10 flex h-11 w-11 items-center justify-center border border-black/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          <span className="text-lg">{open ? "×" : "☰"}</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-black/10 bg-[#fcfbf8] transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[540px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="container-site flex flex-col py-6"
          aria-label="Navigazione mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-black/10 py-4 text-2xl font-normal"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/consulenza"
            onClick={() => setOpen(false)}
            className="mt-6 flex h-12 items-center justify-center bg-[#252622] text-[12px] font-bold uppercase tracking-[0.12em] text-white"
          >
            Richiedi consulenza
          </Link>
        </nav>
      </div>
    </header>
  );
}
