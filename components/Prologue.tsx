import { FloralRule } from "./SectionEyebrow";

export function Prologue() {
  return (
    <section className="bg-cream py-32 px-6">
      <div className="max-w-prose mx-auto text-center">
        <p className="font-display text-ink text-2xl md:text-3xl leading-[1.45] italic">
          Before it was a flower shop, it was a feed store.
          <br />
          Before it was a brand, it was a family.
        </p>
        <p className="font-body text-ink/85 text-lg md:text-xl leading-[1.7] mt-10">
          Long before any of this, it was just a small place on a small
          street, where my grandmother &mdash; we called her Mom Mom &mdash;
          arranged roses, gladiolus, and carnations into something worth
          taking home.
        </p>
        <p className="font-display italic text-ink text-xl md:text-2xl mt-10">
          This is that place, kept.
        </p>
        <FloralRule />
      </div>
    </section>
  );
}
