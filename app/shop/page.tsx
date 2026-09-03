import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Ten hats carrying the mark of Dorothy's Flower Shop: printed, patched and embroidered on trucker, twill and washed six-panel blanks.",
};

export default function ShopPage() {
  return (
    <div className="pt-[52px]">
      {/* A row of small type, not a headline. The grid starts almost at once. */}
      <div className="gutter flex items-baseline justify-between border-b border-line py-4">
        <h1 className="label">All hats</h1>
        <p className="label text-mute tabular-nums">{PRODUCTS.length} items</p>
      </div>

      <ul className="gutter mt-3 grid grid-cols-2 gap-x-3 gap-y-10 pb-24 lg:grid-cols-4">
        {PRODUCTS.map((p, i) => (
          <li key={p.slug}>
            <ProductCard
              product={p}
              priority={i < 4}
              sizes="(min-width:1024px) 25vw, 50vw"
            />
          </li>
        ))}
      </ul>

      <section className="border-t border-line">
        <ul className="gutter grid gap-8 py-12 sm:grid-cols-3">
          {[
            ["One size", "Every hat is one size and adjustable. Fits most adult heads without argument."],
            ["Shipping", "Flat $6 in the US, free over $100. Posted from Glassboro, New Jersey."],
            ["Returns", "30 days, unworn, and we'll make it square."],
          ].map(([t, d]) => (
            <li key={t}>
              <h2 className="label">{t}</h2>
              <p className="mt-2 text-mute">{d}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
