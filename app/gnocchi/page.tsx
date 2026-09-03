import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pop–Pop's Gnocchi",
  description:
    "Ricotta cheese gnocchi, in Pop-Pop's handwriting, the family recipe, kept on the site the way the plates are kept.",
};

/* The recipe lives here now, not in a PDF. The scan is the artifact, shown
   large, in his hand, and the transcription underneath is just so it can be
   cooked from a phone propped against a flour bag. */
const INGREDIENTS: [string, string][] = [
  ["3 cups", "ricotta"],
  ["4", "eggs"],
  ["4 Tbs.", "vegetable oil"],
  ["6 cups", "all-purpose flour"],
  ["1 cup", "grated cheese"],
  ["2 tsp.", "salt"],
  ["½ tsp.", "ground black pepper"],
  ["½ tsp.", "garlic powder"],
];

const STEPS = [
  "Combine all dry ingredients.",
  "Combine ricotta, eggs, oil.",
  "Add flour mix a little at a time.",
  "Knead for a couple of minutes.",
  "Cut and roll into ropes about ½ inch thick, and cut into 1 inch pieces.",
  "Roll pieces on the tines of a fork.",
  "Cook in salted boiling water. When they float to the top they are cooked.",
];

export default function GnocchiPage() {
  return (
    <div className="pt-[52px]">
      <div className="gutter flex items-baseline justify-between gap-4 border-b border-line py-4">
        <h1 className="label">Pop&ndash;Pop&rsquo;s gnocchi</h1>
        <p className="label text-mute">Ricotta cheese gnocchi</p>
      </div>

      {/* the recipe card itself, in his hand */}
      <section className="gutter pt-10">
        <figure className="mx-auto max-w-2xl">
          <div className="well">
            <Image
              src="/archive/gnocchi-scan.webp"
              alt="Pop-Pop's handwritten recipe for ricotta cheese gnocchi"
              width={1600}
              height={1600}
              sizes="(min-width:768px) 42rem, 100vw"
              className="h-auto w-full"
              priority
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between gap-4">
            <span className="label">Written out by hand.</span>
            <span className="label text-mute">Kept as found</span>
          </figcaption>
        </figure>
      </section>

      {/* the transcription, for cooking from, not for replacing the card */}
      <section className="gutter pb-24 pt-16 sm:pt-20">
        <div className="mx-auto grid max-w-2xl gap-12 sm:grid-cols-2">
          <div>
            <h2 className="label border-b border-line pb-3">Ingredients</h2>
            <dl className="mt-4 space-y-2.5">
              {INGREDIENTS.map(([amt, item]) => (
                <div key={item} className="flex gap-3 text-mute">
                  <dt className="w-16 shrink-0 tabular-nums">{amt}</dt>
                  <dd>{item}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="label border-b border-line pb-3">The way he wrote it</h2>
            <ol className="prose-quiet mt-4 list-none space-y-2.5 text-mute">
              {STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
