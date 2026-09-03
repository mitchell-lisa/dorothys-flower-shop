import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "The sign, the shop card from 55 North Main Street, the patches, the family photograph, a Sicilian crossing written out by hand in 1906, and Pop-Pop's gnocchi recipe. What the shop left behind.",
};

const PLATES = [
  {
    src: "/archive/sign.webp", plate: "Plate I", title: "The Sign.",
    alt: "The original hand-painted Dorothy's Flower Shop sign",
    note: "Hand-painted, cream and sage, with the phone number underneath. Every hat in the shop comes from this board.",
    contain: true,
  },
  {
    src: "/archive/newspaper-ad.webp", plate: "Plate II", title: "The Card.",
    alt: "The shop's printed card: Dorothy's Flower Shop, 55 North Main Street, Glassboro, N.J.",
    note: "55 North Main Street, Glassboro, N.J. 881-6905. The whole business, on one piece of card.",
    contain: true,
  },
  {
    src: "/archive/photo-1.webp", plate: "Plate III", title: "The Crossing.",
    alt: "A handwritten record of Pasquale Lisa's passage from Sicily to America in 1906",
    note: "Pasquale Lisa. Born 7 July 1888, Torre Grotta, Messina. Left Naples aboard the steamship Italia, 14 June 1906. New York, the 28th. Barnesboro, Pennsylvania, the 29th, at 10.55 in the morning.",
    contain: false,
  },
  {
    src: "/archive/family-photo.webp", plate: "Plate IV", title: "The Family.",
    alt: "A photograph of the family around a table",
    note: "Everyone at one table, which is how most of the decisions got made.",
    contain: false,
  },
];

export default function ArchivePage() {
  return (
    <div className="pt-[52px]">
      {/* A row of small type, then straight into the pictures. */}
      <div className="gutter border-b border-line py-4">
        <h1 className="label">The archive</h1>
      </div>

      <section className="gutter pt-10">
        <p className="max-w-text text-mute">
          What the shop left behind. The original sign. The card with the street address on it.
          The patches we still wear. A photograph of the family. A crossing from Sicily, written
          out by hand in 1906.
        </p>
      </section>

      {/* Plates run large, two up, with the caption reduced to small type. */}
      <section className="gutter pt-12 sm:pt-16">
        <ul className="grid grid-cols-1 gap-x-3 gap-y-12 md:grid-cols-2">
          {PLATES.map((p) => (
            <li key={p.src}>
              <figure>
                <div className="well aspect-[4/3]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className={p.contain ? "object-contain p-10" : "object-cover"}
                  />
                </div>
                <figcaption className="mt-3">
                  <span className="label">{p.title}</span>
                  <p className="mt-2 max-w-text text-mute">{p.note}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <div className="pb-24" />
    </div>
  );
}
