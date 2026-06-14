type ImagePlaceholderProps = {
  label: string;
  alt: string;
  tone?: "sand" | "sage" | "clay" | "stone" | "blue" | "bronze";
  className?: string;
  priority?: boolean;
};

export function ImagePlaceholder({
  label,
  alt,
  tone = "sand",
  className = "",
  priority = false,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      data-priority={priority ? "true" : undefined}
      className={`image-placeholder tone-${tone} ${className}`}
    >
      <div className="absolute inset-0 bg-black/5" />
      <span className="absolute bottom-5 left-5 z-10 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90">
        Placeholder · {label}
      </span>
    </div>
  );
}
