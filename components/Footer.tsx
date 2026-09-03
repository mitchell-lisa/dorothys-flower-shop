import Link from "next/link";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="gutter py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <nav aria-label="Shop">
            <h2 className="label-sm text-mute">Shop</h2>
            <ul className="mt-3 space-y-1.5">
              <li>
                <Link href="/shop" className="link-quiet">Hats</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Explore">
            <h2 className="label-sm text-mute">Explore</h2>
            <ul className="mt-3 space-y-1.5">
              <li><Link href="/about" className="link-quiet">The story</Link></li>
              <li><Link href="/archive" className="link-quiet">The archive</Link></li>
              <li><Link href="/garden" className="link-quiet">The garden</Link></li>
              <li>
                <Link href="/gnocchi" className="link-quiet">
                  Pop&ndash;Pop&rsquo;s gnocchi
                </Link>
              </li>
              <li><Link href="/shipping" className="link-quiet">Shipping &amp; returns</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="label-sm text-mute">The shop</h2>
            <address className="mt-3 not-italic text-mute">
              55 North Main Street
              <br />
              Glassboro, New Jersey
              <br />
              881&ndash;6905
            </address>
          </div>

          <div>
            <h2 className="label-sm text-mute">Newsletter</h2>
            <div className="mt-3">
              <Newsletter />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 label-sm text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Dorothy&rsquo;s Flower Shop</p>
          <p>Glassboro, New Jersey</p>
        </div>
      </div>
    </footer>
  );
}
