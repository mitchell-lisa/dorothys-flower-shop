import Image from "next/image";

export function PlateBand({
  src,
  alt,
  plate,
  caption,
}: {
  src: string;
  alt: string;
  plate?: string;
  caption?: string;
}) {
  return (
    <section className="relative w-full bg-cream">
      <div className="plate-frame relative w-full h-[55vh] min-h-[360px] max-h-[640px] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="plate-img object-cover plate-vignette"
        />
      </div>
      {(plate || caption) && (
        <div className="text-center py-6 px-6">
          {plate && <div className="caption">{plate}</div>}
          {caption && (
            <div className="font-display italic text-ink/80 mt-1">
              {caption}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
