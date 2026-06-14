type MapPlaceholderProps = {
  className?: string;
};

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.3556087932334!2d9.095246699999999!3d45.442489699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c26df92c2cab%3A0x1968cbf4252435a2!2sVia%20Roma%2C%20Citt%C3%A0%20metropolitana%20di%20Milano!5e0!3m2!1sit!2sit!4v1781450920332!5m2!1sit!2sit";

export function MapPlaceholder({ className = "" }: MapPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#efede8] ${className}`}
      aria-label="Mappa Google in bianco e nero con posizione dello studio"
    >
      <iframe
        src={mapEmbedUrl}
        title="Mappa dello studio"
        className="absolute inset-0 h-full w-full grayscale contrast-[0.92] saturate-0"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
