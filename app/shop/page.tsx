import type { Metadata } from "next";
import Link from "next/link";
import {
  CATEGORIES,
  PRODUCTS,
  categoryOf,
  type Product,
  type ProductCategory,
} from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Hats, a shop tee, a crew, and a canvas tote carrying the mark of Dorothy's Flower Shop: printed, patched and embroidered, in the same voice as the old storefront.",
};

const FILTERS: { id: ProductCategory | "all"; label: string; href: string }[] = [
  { id: "all", label: "All", href: "/shop" },
  ...CATEGORIES.map((c) => ({ id: c.id, label: c.label, href: `/shop?cat=${c.id}` })),
];

type Search = { searchParams: Promise<{ cat?: string }> };

function parseCategory(raw?: string): ProductCategory | "all" {
  if (raw === "hats" || raw === "apparel" || raw === "bags") return raw;
  return "all";
}

function inCategory(products: Product[], cat: ProductCategory) {
  return products.filter((p) => categoryOf(p) === cat);
}

export default async function ShopPage({ searchParams }: Search) {
  const active = parseCategory((await searchParams).cat);
  const visible =
    active === "all" ? PRODUCTS : inCategory(PRODUCTS, active);
  const sections =
    active === "all"
      ? CATEGORIES.map((c) => ({ ...c, items: inCategory(PRODUCTS, c.id) })).filter(
          (s) => s.items.length > 0,
        )
      : CATEGORIES.filter((c) => c.id === active).map((c) => ({
          ...c,
          items: inCategory(PRODUCTS, c.id),
        }));

  return (
    <div className="pt-[52px]">
      <div className="gutter flex items-baseline justify-between border-b border-line py-4">
        <div>
          <h1 className="sr-only">Shop</h1>
          <nav aria-label="Shop categories" className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            {FILTERS.map((f) => (
              <Link
                key={f.id}
                href={f.href}
                className={
                  active === f.id
                    ? "label link-on"
                    : "label link-quiet text-mute hover:text-ink"
                }
                aria-current={active === f.id ? "page" : undefined}
              >
                {f.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="label text-mute tabular-nums">{visible.length} items</p>
      </div>

      <div className="gutter pb-24">
        {sections.map((section, si) => (
          <section key={section.id} className={si === 0 ? "mt-3" : "mt-14"}>
            <h2 className="label mb-3">{section.label}</h2>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4">
              {section.items.map((p, i) => (
                <li key={p.slug}>
                  <ProductCard
                    product={p}
                    priority={si === 0 && i < 4}
                    sizes="(min-width:1024px) 25vw, 50vw"
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="border-t border-line">
        <ul className="gutter grid gap-8 py-12 sm:grid-cols-3">
          {[
            [
              "Fit",
              "Hats are one size and adjustable. Apparel is sized; the tee and crew run relaxed. The tote is one size.",
            ],
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
