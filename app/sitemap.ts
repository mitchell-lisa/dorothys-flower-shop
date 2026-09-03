import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

const SITE = "https://dorothys-flower-shop.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/shop", "/about", "/archive", "/garden", "/gnocchi", "/shipping"].map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    priority: p === "" ? 1 : 0.8,
  }));
  const products = PRODUCTS.map((p) => ({
    url: `${SITE}/shop/${p.slug}`,
    lastModified: now,
    priority: 0.9,
  }));
  return [...pages, ...products];
}
