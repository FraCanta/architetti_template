import { Icon } from "@iconify/react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary: "bg-[#20211f] text-white hover:bg-[#9a725d]",
    secondary:
      "border border-[#20211f] text-[#20211f] hover:bg-[#20211f] hover:text-white",
    light: "bg-white text-[#252622] hover:bg-[#e6ddd1]",
  };

  return (
    <Link
      href={href}
      className={`inline-flex  min-h-12 items-center justify-center gap-3 px-8 text-[11px] font-bold uppercase tracking-[0.13em] transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
      <Icon icon="tabler:arrow-right" className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
