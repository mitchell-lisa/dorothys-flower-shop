import Image from "next/image";
import { SectionEyebrow } from "./SectionEyebrow";

const pieces = [
  {
    src: "/world/working-mans.png",
    alt: "Working Mans piece",
    plate: "No. 01",
    title: "Working Mans.",
  },
  {
    src: "/world/water-your-flowers.png",
    alt: "Water Your Flowers piece",
    plate: "No. 02",
    title: "Water Your Flowers.",
  },
  {
    src: "/world/marine-hat.png",
    alt: "The Marine hat",
    plate: "No. 03",
    title: "The Marine.",
  },
  {
    src: "/world/retro-green.png",
    alt: "Retro green piece",
    plate: "No. 04",
    title: "Retro Green.",
  },
  {
    src: "/world/ri.png",
    alt: "RI piece",
    plate: "No. 05",
    title: "RI.",
  },
  {
    src: "/world/881-6905.png",
    alt: "881-6905 cream",
    plate: "No. 06",
    title: "881–6905.",
  },
];

export function World() {
  return (
    <section id="world" className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow>Made in the spirit of the shop</SectionEyebrow>

        <h2 className="font-display text-ink text-4xl md:text-5xl text-center italic font-normal max-w-3xl mx-auto leading-tight">
          New things, in an old voice.
        </h2>

        <p className="font-body text-ink/80 text-lg leading-[1.7] max-w-prose mx-auto text-center mt-8">
          Dorothy&rsquo;s isn&rsquo;t only a memory. It&rsquo;s a way of
          making things. Going forward, the shop becomes a small world of
          its own &mdash; flowers, objects, clothing, and writing, each one
          made the way Mom Mom would have made it: carefully, honestly, and
          only if it deserved to exist.
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14 mt-20">
          {pieces.map((p) => (
            <li key={p.src} className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-square bg-linen/50">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 45vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="caption mt-4">{p.plate}</div>
              <div className="font-display italic text-ink/90 text-lg mt-1">
                {p.title}
              </div>
            </li>
          ))}
        </ul>

        <p className="font-display italic text-ink/70 text-center text-lg mt-20">
          More to come, slowly, on purpose.
        </p>
      </div>
    </section>
  );
}
