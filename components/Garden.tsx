import Image from "next/image";
import { SectionEyebrow, FloralRule } from "./SectionEyebrow";

const pad = (n: number) => String(n).padStart(3, "0");
const plant = (n: number) => {
  const ext = n <= 4 ? "jpg" : n >= 60 ? "jpg" : "png";
  return `/garden/plant-${pad(n)}.${ext}`;
};

const grid1 = Array.from({ length: 9 }, (_, i) => plant(i + 1));
const grid2 = Array.from({ length: 16 }, (_, i) => plant(i + 10));
const grid3 = Array.from({ length: 15 }, (_, i) => plant(i + 26));
const grid4 = Array.from({ length: 21 }, (_, i) => plant(i + 41));

function Photo({
  src,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw",
  cover = true,
}: {
  src: string;
  aspect?: string;
  sizes?: string;
  cover?: boolean;
}) {
  return (
    <figure
      className={`plate-frame relative ${aspect} w-full overflow-hidden bg-linen`}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        className={`plate-img ${cover ? "object-cover" : "object-contain"}`}
      />
    </figure>
  );
}

function PlateCaption({ plate, title }: { plate: string; title: string }) {
  return (
    <figcaption className="caption text-ink/70 text-center mt-6">
      {plate} — <span className="font-display italic text-ink/85">{title}</span>
    </figcaption>
  );
}

export function Garden() {
  return (
    <section id="garden" className="bg-cream py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionEyebrow>The Garden</SectionEyebrow>

        <h2 className="font-display text-ink text-4xl md:text-6xl text-center italic font-normal max-w-3xl mx-auto leading-[1.05]">
          A field guide,
          <br />
          loosely kept.
        </h2>

        <p className="font-body text-ink/75 text-lg leading-[1.7] max-w-prose mx-auto text-center mt-10">
          Plates pulled from the back room. Water lilies, vines, the green
          things in the window. We sort them by what they remind us of, not
          alphabetically.
        </p>
      </div>

      {/* Movement I — Lily, plate */}
      <div className="mt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="plate-frame relative aspect-[16/10] w-full overflow-hidden bg-linen">
            <Image
              src="/garden/flower-01.png"
              alt="A water lily, full bloom"
              fill
              priority
              sizes="100vw"
              className="plate-img object-contain"
            />
          </div>
          <PlateCaption plate="Plate I" title="The Lily, Full Bloom." />
        </div>
      </div>

      {/* Three-up */}
      <div className="mt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {grid1.map((src, i) => (
            <Photo
              key={src}
              src={src}
              aspect={i % 4 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"}
            />
          ))}
        </div>
      </div>

      <FloralRule />

      {/* Movement II — Two flowering */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="plate-frame relative aspect-[16/10] w-full overflow-hidden bg-linen">
            <Image
              src="/garden/flower-02.png"
              alt="Two water lilies"
              fill
              sizes="100vw"
              className="plate-img object-contain"
            />
          </div>
          <PlateCaption plate="Plate II" title="A Pair, Floating." />
        </div>
      </div>

      {/* Dense four-up */}
      <div className="mt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {grid2.map((src) => (
            <Photo
              key={src}
              src={src}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 45vw"
            />
          ))}
        </div>
      </div>

      <FloralRule />

      {/* Movement III */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="plate-frame relative aspect-[16/10] w-full overflow-hidden bg-linen">
            <Image
              src="/garden/flower-03.png"
              alt="A lily, in shade"
              fill
              sizes="100vw"
              className="plate-img object-contain"
            />
          </div>
          <PlateCaption plate="Plate III" title="In Shade." />
        </div>
      </div>

      {/* Three-up of 15 */}
      <div className="mt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {grid3.map((src, i) => (
            <Photo
              key={src}
              src={src}
              aspect={i % 5 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"}
            />
          ))}
        </div>
      </div>

      <FloralRule />

      {/* Movement IV */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="plate-frame relative aspect-[16/10] w-full overflow-hidden bg-linen">
            <Image
              src="/garden/flower-04.png"
              alt="A lily, late afternoon"
              fill
              sizes="100vw"
              className="plate-img object-contain"
            />
          </div>
          <PlateCaption plate="Plate IV" title="Late Afternoon." />
        </div>
      </div>

      {/* Tight contact-sheet grid */}
      <div className="mt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
          {grid4.map((src) => (
            <Photo
              key={src}
              src={src}
              aspect="aspect-square"
              sizes="(min-width: 1024px) 15vw, (min-width: 640px) 22vw, 32vw"
            />
          ))}
        </div>

        <p className="caption text-ink/60 text-center mt-12">
          Contact sheet — no particular order.
        </p>
      </div>
    </section>
  );
}
