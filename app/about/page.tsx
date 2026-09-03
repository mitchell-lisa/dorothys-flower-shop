import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Story",
  description:
    "Before it was a flower shop, it was a feed store. Before it was a brand, it was a family. The story of Dorothy's Flower Shop, kept.",
};

/* The prose survives. It is the reason the brand exists. What changes is that
   it no longer performs: no italic serif, no centred pull quotes. Small type in
   a narrow column, with the pictures running full width around it. */
export default function AboutPage() {
  return (
    <div className="pt-[52px]">
      {/* full-bleed opener */}
      <section className="relative h-[70vh] min-h-[420px] w-full bg-bone">
        <Image
          src="/archive/family-photo.webp"
          alt="A photograph of the family"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>
      <div className="gutter flex items-baseline justify-between gap-4 py-3">
        <p className="label">The story</p>
        <p className="label text-mute">55 North Main Street, Glassboro</p>
      </div>

      {/* the text */}
      <section className="gutter pt-14 sm:pt-20">
        <div className="max-w-text">
          <p className="label">Before it was a flower shop, it was a feed store</p>
          <div className="prose-quiet mt-6 text-mute">
            <p>
              Long before any of this, it was just a small place on a small street, where my
              grandmother &mdash; we called her Mom&nbsp;Mom &mdash; arranged roses, gladiolus
              and carnations into something worth taking home.
            </p>
            <p>
              It started as a feed store, the kind of place where neighbours came in for the
              small things and stayed for the long ones. Over time the feed gave way to
              flowers. Buckets in the back. Vases in the window. A small gift area up front
              with dish gardens, plants, and the kind of thoughtful objects you only notice
              when someone has chosen them for you.
            </p>
            <p>
              Mom&nbsp;Mom ran it the way she ran everything else: with care, with attention,
              with a kind of grace that didn&rsquo;t announce itself. She arranged. She
              remembered names. She wrapped paper around stems with hands that had done it ten
              thousand times.
            </p>
            <p>
              The shop was a business, but it was also a room in the family house. When you
              walked in, you were known.
            </p>
            <p>
              We&rsquo;re telling the story now because stories like this one disappear if you
              don&rsquo;t.
            </p>
          </div>
        </div>
      </section>

      {/* the old country, as it looks now, no towns named, same rule as the plates */}
      <section className="pt-16 sm:pt-24">
        <div className="relative h-[60vh] min-h-[360px] w-full bg-bone">
          <Image
            src="/editorial/steps-wide.webp"
            alt="Café tables and chairs set out on a wide stone staircase"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="gutter py-3 label text-mute">The old country, as it looks now</p>
      </section>

      {/* the sign, at size, with a caption and nothing else */}
      <section className="pt-16 sm:pt-24">
        <div className="well flex h-[60vh] min-h-[360px] w-full items-center justify-center">
          <div className="relative h-[70%] w-[min(30rem,80vw)]">
            <Image
              src="/archive/sign.webp"
              alt="The original hand-painted shop sign"
              fill
              sizes="(min-width:640px) 30rem, 80vw"
              className="object-contain"
            />
          </div>
        </div>
        <p className="gutter py-3 label text-mute">
          Plate I &mdash; the sign, 55 North Main Street
        </p>
      </section>

      {/* five things, a plain row of small type */}
      <section className="gutter pt-16 sm:pt-24">
        <h2 className="label border-b border-line pb-3">Five things kept</h2>
        <dl className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Heritage", "A name carried forward on purpose. Not preserved behind glass, kept in use."],
            ["Craft", "Flowers cut by hand. Bouquets built from instinct. Work done well because the work mattered."],
            ["Care", "Care for the customer, the room, the small details. The kind that doesn't ask to be noticed."],
            ["Memory", "Old photographs. Handwritten receipts. The smell of cut stems and damp paper."],
            ["Home", "A neighbourhood place. A family place. A door that closed gently behind you and meant something."],
          ].map(([t, d]) => (
            <div key={t}>
              <dt className="label">{t}</dt>
              <dd className="mt-2 text-mute">{d}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* summer, kept */}
      <section className="pt-16 sm:pt-24">
        <div className="relative h-[52vh] min-h-[320px] w-full bg-bone">
          <Image
            src="/editorial/umbrellas-wide.webp"
            alt="Rows of yellow beach umbrellas under a deep blue sky"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="gutter py-3 label text-mute">Summer, kept</p>
      </section>

      {/* now */}
      <section className="gutter py-20 sm:py-28">
        <div className="max-w-text">
          <p className="label">And now</p>
          <p className="mt-5 text-mute">
            Dorothy&rsquo;s isn&rsquo;t only a memory. It&rsquo;s a way of making things. Going
            forward, the shop becomes a small world of its own &mdash; flowers, objects,
            clothing and writing, each one made the way Mom&nbsp;Mom would have made it:
            carefully, honestly, and only if it deserved to exist.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <Link href="/shop" className="btn btn-solid">Shop the hats</Link>
            <Link href="/archive" className="btn btn-ghost">The archive</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
