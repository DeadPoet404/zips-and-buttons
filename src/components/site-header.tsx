"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cart-context";

const LINKS = [
  { href: "/shop", label: "New" },
  { href: "/shop?cat=all", label: "Shop" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export function BagCount() {
  const { count } = useCart();
  return <span className="bag-count">{count}</span>;
}

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <>
      <div className="announce">
        <span className="label">
          Drop 01 is live · Prices in GH₵ &amp; $ · Shipped worldwide from Accra
        </span>
      </div>
      <header className="nav">
        <nav className="nav-links label">
          {LINKS.map((l) => {
            const active =
              l.href.startsWith("/shop") && pathname.startsWith("/shop")
                ? "page"
                : l.href === pathname
                  ? "page"
                  : undefined;
            return (
              <Link key={l.label} href={l.href} aria-current={active}>
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/" className="wordmark">
          Zips <em>&amp;</em> Buttons
        </Link>
        <div className="nav-utils label">
          <Link href="/shop">Search</Link>
          <Link href="/about">Account</Link>
          <Link href="/cart">
            Bag <BagCount />
          </Link>
        </div>
      </header>
    </>
  );
}
