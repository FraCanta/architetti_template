type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow mb-4 flex items-center gap-3 after:h-px after:w-10 after:bg-[#b89a87]">{eyebrow}</p>
      <h2 className="font-display text-[2.2rem] leading-[1.1] sm:text-[2.55rem] lg:text-[2.8rem]">
        {title}
      </h2>
      {text && (
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#696a65]">
          {text}
        </p>
      )}
    </div>
  );
}
