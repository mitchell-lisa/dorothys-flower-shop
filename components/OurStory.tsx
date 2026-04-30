import Image from "next/image";
import { SectionEyebrow } from "./SectionEyebrow";

export function OurStory() {
  return (
    <section id="story" className="bg-linen/60 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow plate="Plate I">Our Story</SectionEyebrow>

        <h2 className="font-display text-ink text-4xl md:text-5xl text-center italic font-normal max-w-3xl mx-auto leading-tight">
          Roses, gladiolus, carnations &mdash; and the people who tended them.
        </h2>

        <div className="grid md:grid-cols-[5fr_6fr] gap-12 md:gap-16 mt-20 items-start">
          <figure className="plate-frame overflow-hidden">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/archive/family-photo.jpg"
                alt="A photograph of the family"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="plate-img object-cover"
              />
            </div>
            <figcaption className="caption mt-3 text-center">
              Plate II. — The family.
            </figcaption>
          </figure>

          <div className="font-body text-ink/90 text-lg leading-[1.85] space-y-6 max-w-prose">
            <p>
              Dorothy&rsquo;s Flower Shop began the way most good things
              begin: quietly, and out of necessity. It started as a feed
              store, the kind of place where neighbors came in for the small
              things and stayed for the long ones. Over time, the feed gave
              way to flowers. Buckets in the back. Vases in the window. A
              small gift area up front with dish gardens, plants, and the
              kind of thoughtful objects you only notice when someone has
              chosen them for you.
            </p>
            <p>
              My grandmother &mdash; Mom Mom &mdash; ran it the way she ran
              everything else: with care, with attention, with a kind of
              grace that didn&rsquo;t announce itself. She arranged. She
              remembered names. She wrapped paper around stems with hands
              that had done it ten thousand times.
            </p>
            <p>
              The shop was a business, but it was also a room in the family
              house. When you walked in, you were known.
            </p>
            <p className="font-display italic text-ink">
              We&rsquo;re telling the story now because stories like this one
              disappear if you don&rsquo;t.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
