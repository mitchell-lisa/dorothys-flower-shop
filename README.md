# Dorothy's Flower Shop

The shop's website and storefront. Next.js 16 (App Router) + Tailwind, deployed on Vercel.

---

## The two things you'll actually want to change

### 1. Prices, stock, and copy — `lib/products.ts`

Everything about the hats lives in one file. Each hat is one object:

```ts
{
  slug: "the-marine",       // the URL: /shop/the-marine
  name: "The Marine",
  price: 38,                // ← whole US dollars. PLACEHOLDER — set your real price.
  inStock: true,            // ← false greys out the buy button and shows "Sold out"
  ...
}
```

Change `price` and it updates the card, the product page, the cart, and the amount
Stripe charges. There is no second place to keep in sync.

Flat shipping and the free-shipping threshold are at the bottom of the same file:

```ts
export const SHIPPING_FLAT = 6;
export const FREE_SHIPPING_OVER = 100;
```

### 2. Turning on real checkout — one environment variable

Checkout is wired to Stripe Checkout and is **off** until you give it a key. Right now
the button returns a polite "not switched on yet" message.

To switch it on:

1. In Stripe, copy your secret key (`sk_live_…`, or `sk_test_…` to trial it).
2. Vercel → the project → **Settings → Environment Variables**.
3. Add `STRIPE_SECRET_KEY` with that value, for Production (and Preview if you like).
4. Redeploy.

That's it. Line items are built from `lib/products.ts` at request time, so you never
have to create products inside Stripe or keep two catalogues matching. Shipping and
US/Canada address collection are already configured in `app/api/checkout/route.ts`.

**Optional — the mailing list.** The signup form validates and thanks people out of the
box but doesn't store anything. Set `BUTTONDOWN_API_KEY` to have it write to Buttondown,
or swap the `fetch` in `app/api/subscribe/route.ts` for whatever list you use.

---

## Adding a hat

1. Drop two images into `public/product/`, named for the slug:
   - `<slug>-front.webp` — straight on
   - `<slug>-angle.webp` — three-quarter

   Both are 1000x1250 on pure white, with the cap 680px wide, its left edge at
   x=160 and its bottom at y=872. Every shot in the catalogue sits on that grid,
   which is what makes the cards line up.
2. Add an entry to `PRODUCTS` in `lib/products.ts`.

The shop grid, the product page, the sitemap, the footer links and the structured data
all read from that array, so nothing else needs editing.

---

## Structure

```
app/
  page.tsx              home
  shop/page.tsx         the grid
  shop/[slug]/page.tsx  product page (statically generated per hat)
  about/page.tsx        the story
  archive/page.tsx      the plates + the garden
  shipping/page.tsx     shipping, returns, sizing, care
  success/page.tsx      post-checkout
  api/checkout/         Stripe Checkout session
  api/subscribe/        mailing list
components/             header, footer, cart, gallery, cards
lib/products.ts         ← the catalogue
public/product/         hat photography
public/archive/         the sign, the card, the patches, family photographs
public/garden/          the botanical plates
```

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # tsc --noEmit
```

---

## Notes on the images

The product photography was built from the flat design mockups: the artwork is warped
onto the crown's curvature, given the cap's own lighting, ink relief at the edges and
fabric grain showing through, then composited into a lit scene with a real contact
shadow. They are good enough to sell from. When the physical samples arrive, real
photographs shot to the same framing will drop straight into `public/product/` with no
code changes.

## Things left open

- **Prices are placeholders** ($38–$42). Set your own in `lib/products.ts`.
- **`RI`** — the name is carried over from the original artwork file. The copy
  deliberately doesn't claim what the initials stand for; say the word and it gets
  rewritten or renamed.
- Stripe is configured for US and Canada shipping addresses only. Widen the
  `allowed_countries` list in `app/api/checkout/route.ts` if you need more.
