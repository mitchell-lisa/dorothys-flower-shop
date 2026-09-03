import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { CartDrawer } from "@/components/CartDrawer";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const SITE = "https://dorothys-flower-shop.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Dorothy's Flower Shop, hats made in an old voice",
    template: "%s · Dorothy's Flower Shop",
  },
  description:
    "A family. A storefront. A way of doing things. Hats carrying the mark of Dorothy's Flower Shop: printed, patched and embroidered, made carefully and only if they deserve to exist.",
  keywords: ["Dorothy's Flower Shop", "trucker hat", "vintage flower shop", "snapback", "Glassboro New Jersey"],
  openGraph: {
    title: "Dorothy's Flower Shop",
    description: "A family. A storefront. A way of doing things.",
    url: SITE,
    siteName: "Dorothy's Flower Shop",
    type: "website",
    images: [{ url: "/product/the-marine-front.webp", width: 1000, height: 1250 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/archive/sign.webp" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="bg-paper font-sans text-ink">
        <CartProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CartDrawer />
          <Reveal />
        </CartProvider>
      </body>
    </html>
  );
}
