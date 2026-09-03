import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, bySlug, money } from "@/lib/products";
import { Gallery } from "@/components/Gallery";
import { ProductBuy } from "@/components/ProductBuy";
import { ProductCard } from "@/components/ProductCard";

const SITE = "https://dorothys-flower-shop.vercel.app";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = bySlug((await params).slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.short} ${[p.blank, p.colour].filter(Boolean).join(", ")}.`,
    openGraph: {
      title: `${p.name} · Dorothy's Flower Shop`,
      description: p.short,
      images: [{ url: p.images.front, width: 1000, height: 1250 }],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const p = bySlug((await params).slug);
  if (!p) notFound();

  const others = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.short,
    image: [p.images.front, p.images.angle].map((s) => SITE + s),
    sku: p.slug,
    color: p.colour,
    brand: { "@type": "Brand", name: "Dorothy's Flower Shop" },
    offers: {
      "@type": "Offer",
      url: `${SITE}/shop/${p.slug}`,
      price: p.price,
      priceCurrency: "USD",
      availability: p.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };

  return (
    <div className="pt-[52px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="gutter grid grid-cols-1 gap-3 pt-3 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
        <Gallery product={p} />

        {/* Buy panel stays in view while the pictures scroll past it. */}
        <div className="lg:sticky lg:top-[68px] lg:h-fit lg:pt-1">
          <div className="flex items-baseline justify-between gap-4">
            <h1 className="label">{p.name}</h1>
            <p className="label tabular-nums text-mute">{money(p.price)}</p>
          </div>

          <p className="mt-5 text-mute">{p.short}</p>

          <ProductBuy product={p} />

          <div className="mt-10 border-t border-line pt-5">
            <p className="label-sm text-mute">Details</p>
            <ul className="mt-3 space-y-1.5 text-mute">
              {p.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>

          <dl className="mt-8 border-t border-line pt-5">
            <p className="label-sm text-mute">Specification</p>
            <div className="mt-3 space-y-1.5">
              {[
                ["Blank", p.blank],
                ["Colour", p.colour],
                ["Fit", p.fit],
                ["Closure", p.closure],
                ["Decoration", p.decoration],
                ["Material", p.material],
              ]
                .filter((row): row is [string, string] => !!row[1])
                .map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3">
                  <dt className="label-sm pt-[3px] text-mute">{k}</dt>
                  <dd className="text-mute">{v}</dd>
                </div>
              ))}
            </div>
          </dl>

          <div className="mt-8 border-t border-line pt-5">
            <p className="label-sm text-mute">The name</p>
            <p className="mt-3 text-mute">{p.story}</p>
          </div>
        </div>
      </div>

      <section className="gutter pt-20 sm:pt-28">
        <div className="flex items-baseline justify-between border-b border-line pb-3">
          <h2 className="label">More</h2>
          <Link href="/shop" className="label link-quiet text-mute hover:text-ink">
            All hats
          </Link>
        </div>
        <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-10 pb-24 lg:grid-cols-4">
          {others.map((o) => (
            <li key={o.slug}>
              <ProductCard product={o} sizes="(min-width:1024px) 25vw, 50vw" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
