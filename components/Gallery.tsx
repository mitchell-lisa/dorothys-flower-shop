import Image from "next/image";
import type { Product } from "@/lib/products";

/* Stacked, not a lightbox. Every shot at full column width, scrolled past;
   the buy panel stays put beside it. Deliberately dumb so more photography
   can be added to the array later without touching behaviour. */
export function Gallery({ product }: { product: Product }) {
  const shots = [
    { src: product.images.front, alt: `${product.name}, front` },
    { src: product.images.angle, alt: `${product.name}, three-quarter view` },
  ];

  return (
    <div className="grid grid-cols-1 gap-3">
      {shots.map((s, i) => (
        <div key={s.src} className="well aspect-[4/5] !bg-paper">
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="(min-width:1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
