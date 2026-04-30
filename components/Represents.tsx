import { SectionEyebrow } from "./SectionEyebrow";
import { MedallionMark } from "./MedallionMark";

const values = [
  {
    flower: "rose" as const,
    plate: "Plate III",
    title: "Heritage",
    body: "A name carried forward on purpose. Not preserved behind glass — kept in use.",
  },
  {
    flower: "gladiolus" as const,
    plate: "Plate IV",
    title: "Craft",
    body: "Flowers cut by hand. Bouquets built from instinct. Work done well because the work mattered.",
  },
  {
    flower: "carnation" as const,
    plate: "Plate V",
    title: "Care",
    body: "Care for the customer, the room, the small details. The kind that doesn't ask to be noticed.",
  },
  {
    flower: "lily" as const,
    plate: "Plate VI",
    title: "Memory",
    body: "Old photos. Handwritten receipts. The smell of cut stems and damp paper. The soundtrack of a small shop on a quiet morning.",
  },
  {
    flower: "geranium" as const,
    plate: "Plate VII",
    title: "Home",
    body: "A neighborhood place. A family place. A door that closed gently behind you and meant something.",
  },
];

export function Represents() {
  return (
    <section id="represents" className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow>What it stood for. What it stands for.</SectionEyebrow>

        <h2 className="font-display text-ink text-4xl md:text-5xl text-center italic font-normal max-w-3xl mx-auto leading-tight mb-20">
          Five flowers. Five things kept.
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8">
          {values.map((v) => (
            <li
              key={v.title}
              className="flex flex-col items-center text-center"
            >
              <MedallionMark flower={v.flower} size="plate" />
              <div className="caption mt-6">{v.plate}</div>
              <h3 className="font-display text-2xl italic mt-1 text-ink">
                {v.title}
              </h3>
              <p className="font-body text-ink/80 text-base leading-relaxed mt-3 max-w-[18rem]">
                {v.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
