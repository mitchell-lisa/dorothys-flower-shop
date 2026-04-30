import Image from "next/image";
import { SectionEyebrow } from "./SectionEyebrow";

const items = [
  {
    src: "/archive/sign.png",
    alt: "The original sign",
    plate: "Plate VIII",
    title: "The Sign.",
  },
  {
    src: "/archive/newspaper-ad.png",
    alt: "Newspaper advertisement",
    plate: "Plate IX",
    title: "The Newspaper Ad.",
  },
  {
    src: "/archive/drive-through.png",
    alt: "The drive-through window",
    plate: "Plate X",
    title: "The Drive-Through.",
  },
  {
    src: "/archive/patch-classic.png",
    alt: "The classic sign patch",
    plate: "Plate XI",
    title: "The Patch.",
  },
  {
    src: "/archive/patch-red-frame.png",
    alt: "The patch — red frame, blue sign",
    plate: "Plate XII",
    title: "Red Frame.",
  },
  {
    src: "/archive/photo-1.jpg",
    alt: "A family photograph",
    plate: "Plate XIII",
    title: "A Photograph.",
  },
];

export function Archive() {
  return (
    <section id="archive" className="bg-linen/40 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow>The Archive</SectionEyebrow>

        <h2 className="font-display text-ink text-4xl md:text-5xl text-center italic font-normal max-w-3xl mx-auto leading-tight">
          Photographs, signs, paper.
        </h2>

        <p className="font-body text-ink/80 text-lg leading-[1.7] max-w-prose mx-auto text-center mt-8">
          What the shop left behind. The original sign. A newspaper ad from a
          long time ago. The patches we still wear. The drive-through window.
          A photograph of the family. Pop-Pop&rsquo;s gnocchi recipe, pressed
          between the rest of it because that&rsquo;s how families actually
          keep their history &mdash; all of it together, in one drawer.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {items.map((item) => (
            <li key={item.src} className="flex flex-col">
              <figure className="plate-frame relative aspect-[4/3] w-full overflow-hidden bg-linen">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className="plate-img object-contain"
                />
              </figure>
              <figcaption className="mt-3 text-center">
                <span className="caption">{item.plate} — </span>
                <span className="font-display italic text-ink/85">
                  {item.title}
                </span>
              </figcaption>
            </li>
          ))}
        </ul>

        <div className="text-center mt-16">
          <a
            href="/archive/pop-pop-gnocchi.pdf"
            target="_blank"
            rel="noreferrer"
            className="caption text-ink/70 underline underline-offset-[6px] decoration-ink/30 hover:text-ink"
          >
            Read Pop-Pop&rsquo;s gnocchi recipe →
          </a>
        </div>
      </div>
    </section>
  );
}
