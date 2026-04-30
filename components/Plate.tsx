import Image from "next/image";

type PlateSize = "stamp" | "seal" | "plate" | "specimen" | "full";

const sizeClass: Record<PlateSize, string> = {
  stamp: "w-12 h-12",
  seal: "w-28 h-28",
  plate: "w-64 h-64",
  specimen: "w-[28rem] h-[28rem] max-w-full",
  full: "w-full h-full",
};

type PlateProps = {
  src: string;
  alt: string;
  variant?: "landscape" | "medallion";
  size?: PlateSize;
  caption?: { plate?: string; title: string; subtitle?: string };
  priority?: boolean;
  className?: string;
};

export function Plate({
  src,
  alt,
  variant = "landscape",
  size = "plate",
  caption,
  priority = false,
  className = "",
}: PlateProps) {
  const isMedallion = variant === "medallion";

  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <div
        className={[
          "plate-frame",
          isMedallion ? "medallion rounded-full overflow-hidden" : "overflow-hidden",
          sizeClass[size],
          isMedallion
            ? "ring-1 ring-ink/40 shadow-[0_2px_0_rgba(43,29,20,0.12)]"
            : "",
        ].join(" ")}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            size === "full"
              ? "100vw"
              : size === "specimen"
              ? "(min-width: 768px) 28rem, 90vw"
              : size === "plate"
              ? "16rem"
              : size === "seal"
              ? "7rem"
              : "3rem"
          }
          className="plate-img object-cover"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-center max-w-xs">
          {caption.plate && (
            <div className="caption mb-1">{caption.plate}</div>
          )}
          <div className="font-display italic text-ink/90 text-base">
            {caption.title}
          </div>
          {caption.subtitle && (
            <div className="font-body text-sm text-halftone mt-1 italic">
              {caption.subtitle}
            </div>
          )}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Full-bleed landscape plate. Used as section dividers.
 */
export function PlateBand({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: { plate?: string; title: string };
}) {
  return (
    <section className="relative w-full">
      <div className="plate-frame relative w-full h-[60vh] min-h-[420px] max-h-[720px] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="plate-img object-cover plate-vignette"
        />
      </div>
      {caption && (
        <div className="text-center py-6">
          {caption.plate && <div className="caption">{caption.plate}</div>}
          <div className="font-display italic text-ink/80 mt-1">
            {caption.title}
          </div>
        </div>
      )}
    </section>
  );
}
