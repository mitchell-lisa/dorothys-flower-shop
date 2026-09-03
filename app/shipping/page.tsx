import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "How Dorothy's Flower Shop packs, posts, and puts things right.",
};

const BLOCKS: [string, string[]][] = [
  ["Shipping", [
    "Flat $6 anywhere in the United States. Free on orders over $100.",
    "Orders are packed and posted from Glassboro, New Jersey, usually within two working days. You'll get a tracking note when yours goes out.",
    "Canada is $6 flat as well, and takes longer than either of us would like.",
  ]],
  ["Returns", [
    "Thirty days. Unworn, with the sticker still on the bill, and we'll refund it in full.",
    "Write to us first so we know it's coming. Return postage is on you unless we sent the wrong thing, in which case it isn't.",
  ]],
  ["Sizing", [
    "Every hat here is one size and adjustable, and fits most adult heads without argument.",
    "The Marine and RI sit high with a flat bill. Working Mans, Water Your Flowers, Drive Through, Camo and Retro Green sit lower with a pre-curved or slightly curved visor.",
  ]],
  ["Care", [
    "Spot clean with cool water and a soft brush. Air dry, right side up, away from a radiator.",
    "Not the dishwasher. People do this. Please don't.",
  ]],
];

export default function ShippingPage() {
  return (
    <div className="pt-[52px]">
      <div className="gutter border-b border-line py-4">
        <h1 className="label">Shipping &amp; returns</h1>
      </div>

      {/* the rescue boat, a page about getting things to you, and putting
          things right when they go wrong, opens on a boat marked salvataggio */}
      <div className="relative h-[42vh] min-h-[280px] w-full bg-bone">
        <Image
          src="/editorial/rowboat-wide.webp"
          alt="A red rescue rowboat on an empty pebble beach"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="gutter grid gap-x-10 gap-y-12 pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {BLOCKS.map(([title, paras]) => (
          <section key={title}>
            <h2 className="label border-b border-line pb-3">{title}</h2>
            <div className="prose-quiet mt-4 text-mute">
              {paras.map((t) => <p key={t}>{t}</p>)}
            </div>
          </section>
        ))}
      </div>

      <p className="gutter max-w-text py-20 text-mute">
        Anything else, call the number on the sign &mdash; or just{" "}
        <Link href="/shop" className="link-on">go look at the hats</Link>.
      </p>
    </div>
  );
}
