/**
 * The shop.
 *
 * EDIT PRICES AND NAMES HERE.
 * `price` is in whole US dollars and is a PLACEHOLDER until you set your own.
 * Change a number here and it updates the product card, the product page, the
 * cart and the Stripe charge. Nothing else needs touching.
 *
 * Names for the four newest hats (Closing Time, Wine, Evergreen, Tobacco) are
 * working titles. Rename them here and they change everywhere.
 *
 * Anything set to null is a fact nobody has confirmed yet. A null field
 * renders nothing on the product page, which is honest. Fill it in when the
 * blank, material or closure is known for that hat.
 *
 * `inStock: false` shows the hat but disables the buy button. Use it for the
 * ones still waiting on samples.
 */

export type Product = {
  slug: string;
  name: string;
  no: string;
  price: number;
  blank: string | null;
  colour: string;
  fit: string;
  closure: string | null;
  decoration: string;
  material: string | null;
  short: string;
  story: string;
  details: string[];
  images: { front: string; angle: string };
  inStock: boolean;
};

const shot = (slug: string) => ({
  front: `/product/${slug}-front.webp`,
  angle: `/product/${slug}-angle.webp`,
});

export const PRODUCTS: Product[] = [
  {
    slug: "the-marine",
    name: "The Marine",
    no: "No. 01",
    price: 38,
    blank: "YP Classics 6006, five-panel classic trucker",
    colour: "Red / Red",
    fit: "Structured, high profile, flat bill",
    closure: "Snapback, one size, adjustable",
    decoration: "Screen print, front panel",
    material: "74/26 polyester/cotton front, 100% polyester mesh back",
    short: "The loud one. The shop sign, printed the way it was painted.",
    story:
      "This is the sign itself: the letters that hung over the door on North Main Street, gold with a white keyline, laid straight across a red five-panel. Nothing softened, nothing modernised. If you knew the shop, you will recognise it from across a parking lot, which is the entire point.",
    details: [
      "Mesh back, flat bill, sits high on the head.",
      "The print is placed the way the sign was hung: centred, a little large, unapologetic.",
      "Runs true. One size fits most adults.",
    ],
    images: shot("the-marine"),
    inStock: true,
  },
  {
    slug: "drive-through",
    name: "Drive Through",
    no: "No. 02",
    price: 42,
    blank: "LEGACY HTA, heritage twill cap",
    colour: "Stone / Dark Green",
    fit: "Structured, mid profile, slight curved visor",
    closure: "Snapback, one size, adjustable",
    decoration: "Embroidered badge, red border, blue lettering",
    material: "7.5 oz. 100% cotton twill",
    short: "Stone and dark green, named for the window nobody else had.",
    story:
      "There was a drive-through window at the flower shop. People still bring it up. Heavy cotton twill in stone with a dark green visor, and the badge stitched in red and blue. The calmest hat here, and the one that looks the most like it was always around.",
    details: [
      "7.5 oz cotton twill. Substantial, and it softens well.",
      "Two-tone, with contrast eyelets and button.",
      "Dart detail on the front panel. Sits flat, no bulge.",
    ],
    images: shot("drive-through"),
    inStock: true,
  },
  {
    slug: "retro-green",
    name: "Retro Green",
    no: "No. 03",
    price: 38,
    blank: "Valucap VC400, twill cap",
    colour: "Kelly",
    fit: "Structured, mid profile, pre-curved bill",
    closure: "Snapback, one size, adjustable",
    decoration: "Embroidered badge, light blue border and lettering",
    material: "65/35 polyester/cotton",
    short: "Kelly green and a white badge. The one that looks borrowed.",
    story:
      "Cut from the same cloth as every ballfield sponsor hat handed out in the seventies. Kelly green, a white badge, blue lettering. It is meant to look like it came out of a box in a basement, and mostly it does.",
    details: [
      "Embroidered badge with a stitched border.",
      "Six-panel, mid profile. Sits lower than The Marine.",
      "The quietest of the greens, and the easiest to wear.",
    ],
    images: shot("retro-green"),
    inStock: true,
  },
  {
    slug: "ri",
    name: "RI",
    no: "No. 04",
    price: 40,
    blank: "YP Classics 6502, lightly structured five-panel snapback",
    colour: "Navy / Orange",
    fit: "Lightly structured, high profile, flat bill",
    closure: "Snapback, one size, adjustable",
    decoration: "Screen print, front panel",
    material: "60/40 cotton/polyester",
    short: "Orange on navy, soft enough to fold into a jacket pocket.",
    story:
      "The mark on its own: no keyline, no badge, no frame. Printed in a single orange on a lightly structured navy five-panel that gives up its shape after a week and never quite gets it back. That is a feature.",
    details: [
      "Lightly structured. Softens fast, keeps enough shape.",
      "Flat bill, no buckram stiffness.",
      "Orange on navy. Reads from a distance.",
    ],
    images: shot("ri"),
    inStock: true,
  },
  {
    slug: "working-mans",
    name: "Working Mans",
    no: "No. 05",
    price: 42,
    blank: "Richardson 112FP, five-panel trucker",
    colour: "Brown / Khaki",
    fit: "Structured, mid profile, pre-curved bill",
    closure: "Snapback, one size, adjustable",
    decoration: "Embroidered patch, stitched to the front panel",
    material: "60/40 cotton/polyester twill, 100% polyester mesh back",
    short: "Brown twill, khaki mesh, and a patch that has been through something.",
    story:
      "The one you actually wear. Brown and khaki, the colours of a delivery van and a paper sleeve, with the old shop mark stitched on as a patch rather than printed, because a patch survives being sat on, rained on, and left on the dash of a truck for a week.",
    details: [
      "Embroidered patch with a merrowed edge, stitched down on all four sides.",
      "Pre-curved bill. Break it however you like.",
      "The most forgiving hat here. Goes with everything.",
    ],
    images: shot("working-mans"),
    inStock: true,
  },
  {
    slug: "water-your-flowers",
    name: "Water Your Flowers",
    no: "No. 06",
    price: 42,
    blank: "Richardson 112FP, five-panel trucker",
    colour: "Blue Teal / Birch / Navy",
    fit: "Structured, mid profile, pre-curved bill",
    closure: "Snapback, one size, adjustable",
    decoration: "Screen print, front panel",
    material: "60/40 cotton/polyester twill, 100% polyester mesh back",
    short: "Three colours, one instruction. Take it literally.",
    story:
      "Teal, birch and navy: the closest thing the shop ever had to a uniform. The mark is printed in the same yellow that outlined the phone number on the sign, sized to sit inside the front panel like a decal on a shop window.",
    details: [
      "Yellow print on blue teal twill. Holds its colour.",
      "Navy bill, contrast stitching throughout.",
      "The one people ask about.",
    ],
    images: shot("water-your-flowers"),
    inStock: true,
  },
  {
    slug: "closing-time",
    name: "Closing Time",
    no: "No. 07",
    price: 40,
    blank: null,
    colour: "Black / Black, contrast stitch",
    fit: "Structured, high profile, flat bill",
    closure: null,
    decoration: "Embroidery, front panel",
    material: null,
    short: "Black on black, with the mark stitched in the colour of the stitching.",
    story:
      "The last hour of the day, when the lights went off in the front window and the work moved to the back. Black twill, black mesh, and the mark embroidered in the same pale thread as the seams, so it only reads when you are close enough to be in the shop.",
    details: [
      "Tonal embroidery. The mark is thread, not ink.",
      "Contrast stitching on the bill and the crown.",
      "Mesh back, flat bill.",
    ],
    images: shot("closing-time"),
    inStock: true,
  },
  {
    slug: "thornhill",
    name: "Thornhill",
    no: "No. 08",
    price: 42,
    blank: "Camo twill, six-panel",
    colour: "Woodland camo / White",
    fit: "Structured, mid profile, pre-curved bill",
    closure: "Snapback, one size, adjustable",
    decoration: "Embroidery, front panel",
    material: "Cotton/polyester camo twill",
    short: "White on woodland. For people who are not trying to be seen.",
    story:
      "A flower shop hat in hunting camo should not work, and it does. The mark is stitched in a single white so it reads clean against the pattern instead of fighting it. This is the one that leaves the house at five in the morning.",
    details: [
      "Single-colour white embroidery. No outline, no shadow.",
      "Pre-curved bill, mid profile.",
      "Every one is slightly different. That is how camo is cut.",
    ],
    images: shot("thornhill"),
    inStock: true,
  },
  {
    slug: "wine",
    name: "Wine",
    no: "No. 09",
    price: 38,
    blank: null,
    colour: "Washed burgundy / Gold, cream and green",
    fit: "Unstructured, low profile, curved bill",
    closure: null,
    decoration: "Embroidery, front panel, four colours",
    material: null,
    short: "Washed burgundy, and the sign stitched out in full colour.",
    story:
      "The whole sign this time, thread for thread: gold letters with a cream keyline, the flowers in two greens, the phone number underneath. Stitched onto a washed burgundy six-panel the colour of a bucket of carnations at the end of a long Saturday.",
    details: [
      "Four-colour embroidery. The flowers are stitched, not printed.",
      "Unstructured six-panel, washed cotton. No buckram, no shape to lose.",
      "Curved bill, low profile. Sits close to the head.",
    ],
    images: shot("wine"),
    inStock: true,
  },
  {
    slug: "evergreen",
    name: "Evergreen",
    no: "No. 10",
    price: 38,
    blank: null,
    colour: "Washed dark green / Gold and cream",
    fit: "Unstructured, low profile, curved bill",
    closure: null,
    decoration: "Embroidery, front panel, two colours",
    material: null,
    short: "Washed dark green, the sign in gold and cream. The shop colour.",
    story:
      "Dark green was the shop colour before it was anyone else's: the awning, the vans, the paper the stems went into. The sign is stitched in gold with the flowers in cream, which is how it looked in the window at four in the afternoon.",
    details: [
      "Gold and cream embroidery on washed green.",
      "Unstructured six-panel, washed cotton. Already broken in.",
      "Curved bill, low profile.",
    ],
    images: shot("evergreen"),
    inStock: true,
  },
  {
    slug: "tobacco",
    name: "Tobacco",
    no: "No. 11",
    price: 38,
    blank: null,
    colour: "Waxed brown / Cream",
    fit: "Unstructured, low profile, flat curved bill",
    closure: null,
    decoration: "Embroidery, front panel, single colour",
    material: null,
    short: "Waxed brown canvas, the sign in cream. Sheds a light rain.",
    story:
      "The heaviest cloth of the three: a waxed brown canvas that darkens where it creases and goes lighter where it wears, the way a coat does. The sign is stitched in one cream thread, no keyline, so nothing competes with the fabric.",
    details: [
      "Waxed canvas. It marks, and the marks are the point.",
      "Single-colour cream embroidery. No outline, no shadow.",
      "Unstructured, low profile. The bill sits flatter than the others.",
    ],
    images: shot("tobacco"),
    inStock: true,
  },
];

export const bySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

export const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 });

export const SHIPPING_FLAT = 6;
export const FREE_SHIPPING_OVER = 100;

export const SHOP = {
  street: "55 North Main Street",
  town: "Glassboro, New Jersey",
  phone: "881-6905",
};
