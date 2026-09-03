"use client";

import {
  createContext, useContext, useEffect, useMemo, useState, useCallback,
} from "react";
import { PRODUCTS, type Product } from "@/lib/products";

export type Line = { slug: string; qty: number };
type Ctx = {
  lines: Line[];
  count: number;
  subtotal: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  detailed: { product: Product; qty: number }[];
};

const CartCtx = createContext<Ctx | null>(null);
const KEY = "dfs.cart.v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* storage can be unavailable; the cart just starts empty */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.sessionStorage.setItem(KEY, JSON.stringify(lines));
    } catch {
      /* non-fatal */
    }
  }, [lines, ready]);

  const add = useCallback((slug: string, qty = 1) => {
    setLines((ls) => {
      const hit = ls.find((l) => l.slug === slug);
      if (hit) return ls.map((l) => (l.slug === slug ? { ...l, qty: Math.min(10, l.qty + qty) } : l));
      return [...ls, { slug, qty }];
    });
    setOpen(true);
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setLines((ls) =>
      qty <= 0 ? ls.filter((l) => l.slug !== slug)
               : ls.map((l) => (l.slug === slug ? { ...l, qty: Math.min(10, qty) } : l)),
    );
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((ls) => ls.filter((l) => l.slug !== slug));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const detailed = useMemo(
    () =>
      lines
        .map((l) => {
          const product = PRODUCTS.find((p) => p.slug === l.slug);
          return product ? { product, qty: l.qty } : null;
        })
        .filter(Boolean) as { product: Product; qty: number }[],
    [lines],
  );

  const count = detailed.reduce((n, l) => n + l.qty, 0);
  const subtotal = detailed.reduce((n, l) => n + l.qty * l.product.price, 0);

  const value: Ctx = {
    lines, count, subtotal, add, setQty, remove, clear, open, setOpen, detailed,
  };
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart must be used inside <CartProvider>");
  return c;
}
