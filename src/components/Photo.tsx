import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  imageClassName?: string;
};

export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  imageClassName = "",
}: PhotoProps) {
  return (
    <div className={`group relative overflow-hidden bg-[#e9e5dc] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] ${imageClassName}`}
      />
    </div>
  );
}
