import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Garden",
  description:
    "A field guide, loosely kept: the flowers and plants of Dorothy's Flower Shop, photographed and filed.",
};

const pad = (n: number) => String(n).padStart(3, "0");
const GARDEN = Array.from({ length: 42 }, (_, i) => `/garden/plant-${pad(i + 1)}.webp`);

export default function GardenPage() {
  return (
    <div className="pt-[52px]">
      <div className="gutter border-b border-line py-4">
        <h1 className="label">The garden</h1>
      </div>

      <ul className="gutter mt-3 grid grid-cols-3 gap-2 pb-24 sm:grid-cols-4 lg:grid-cols-6">
        {GARDEN.map((src, i) => (
          <li key={src} className="well aspect-square">
            <Image
              src={src}
              alt=""
              fill
              loading={i < 12 ? "eager" : "lazy"}
              sizes="(min-width:1024px) 16vw, (min-width:640px) 24vw, 32vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
