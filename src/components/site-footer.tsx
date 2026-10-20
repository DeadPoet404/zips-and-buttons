import Link from "next/link";
import Year from "@/components/year";

const shopLinks = [
  { href: "/shop?cat=icons", label: "The Icons" },
  { href: "/shop?cat=coats", label: "Coats" },
  { href: "/shop?cat=jackets", label: "Jackets" },
  { href: "/shop?cat=knits", label: "Knits & Tees" },
  { href: "/shop?cat=trousers", label: "Trousers" },
  { href: "/shop?cat=bags", label: "Bags" },
];

const infoLinks = [
  { href: "/about", label: "About the house" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "Sizing — unisex, measured flat" },
  { href: "/about", label: "Care & repair" },
  { href: "/about", label: "Shipping & returns" },
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div>
          <span className="label">Shop</span>
          {shopLinks.map((l) => (
            <Link key={l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div>
          <span className="label">Information</span>
          {infoLinks.map((l) => (
            <Link key={l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div>
          <span className="label">The House</span>
          <p className="footer-note">
            Cape Coast, Ghana.
            <br />
            Shipping worldwide.
            <br />
            <br />
            Prices in GH₵ and $ — because that&apos;s where we are and where you are.
          </p>
        </div>
        <div>
          <span className="label">One Letter, When It Matters</span>
          <p className="footer-note">
            No newsletter spam. We write when there&apos;s something to say.
          </p>
          <div className="footer-mail">
            <input type="email" placeholder="YOUR EMAIL" aria-label="Email" />
            <button type="button">Join</button>
          </div>
        </div>
      </div>
      <div className="footer-mark">
        Zips <em>&amp;</em> Buttons
      </div>
      <div className="footer-fine">
        <span>© <Year /> Zips &amp; Buttons</span>
        <span>Drop 01 · A design test</span>
        <span>Imagery is stand-in. The shoot is coming. Obviously.</span>
      </div>
    </footer>
  );
}
