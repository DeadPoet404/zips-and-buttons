import Image from "next/image";
import Link from "next/link";
import ProductGrid from "@/components/product-grid";
import EditorialCut from "@/components/editorial-cut";
import Triptych from "@/components/triptych";
import Statement from "@/components/statement";
import { PRODUCTS, editorialImage } from "@/lib/products";

const CHIP_LINKS = [
  { href: "/shop?cat=all", label: "All" },
  { href: "/shop?cat=icons", label: "The Icons" },
  { href: "/shop?cat=coats", label: "Coats" },
  { href: "/shop?cat=jackets", label: "Jackets" },
  { href: "/shop?cat=knits", label: "Knits & Tees" },
  { href: "/shop?cat=trousers", label: "Trousers" },
  { href: "/shop?cat=bags", label: "Bags" },
];

const JOURNAL = [
  {
    image: editorialImage("journal-1.jpg"),
    label: "Journal 01 · Style",
    title: "The case for one good coat",
    blurb: "Buy less, but make it the thing everyone remembers.",
  },
  {
    image: "/images/products/cargo-detail.jpg",
    label: "Journal 02 · Craft",
    title: "Hardware: an appreciation",
    blurb: "On zips, buttons, and the small machines that hold your life together.",
  },
  {
    image: editorialImage("band-3.jpg"),
    label: "Journal 03 · House",
    title: "Cape Coast to everywhere",
    blurb: "Why our prices speak two languages, and why we ship the way we do.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — the cover */}
      <section className="hero">
        <Image
          className="hero-img"
          src={editorialImage("hero.jpg")}
          alt="A coat on the street"
          fill
          sizes="100vw"
          priority
        />
        <div className="hero-veil" />
        <div className="hero-copy">
          <span className="label">Drop 01 — The Capsule</span>
          <h1 className="hero-title">
            Built to outlast
            <br />
            the trend cycle.
            <em>Obviously.</em>
          </h1>
          <p className="hero-sub">
            Twenty pieces. Unisex. Outerwear that earns its hardware. Made honestly,
            priced in cedis and dollars, shipped from Cape Coast to wherever you&apos;re
            standing.
          </p>
          <Link className="btn" href="/shop">
            Shop Drop 01
          </Link>
        </div>
      </section>

      {/* TYPE CHIPS */}
      <nav className="chips" aria-label="Shop by type">
        {CHIP_LINKS.map((c, i) => (
          <Link key={c.label} className={`chip ${i === 0 ? "active" : ""}`} href={c.href}>
            {c.label}
          </Link>
        ))}
      </nav>

      {/* THE CAPSULE */}
      <section className="section">
        <div className="section-head">
          <div>
            <span className="label">The Capsule</span>
            <h2>
              Twenty pieces.
              <br />
              No filler.
            </h2>
          </div>
          <Link className="text-link" href="/shop">
            View all
          </Link>
        </div>
        <ProductGrid products={PRODUCTS.slice(0, 8)} />
      </section>

      {/* EDITORIAL CUT */}
      <section className="section" style={{ paddingTop: 0 }}>
        <EditorialCut
          image={editorialImage("band-1.jpg")}
          label="Journal 01"
          title={
            <>
              The case for
              <br />
              one good coat.
            </>
          }
          blurb="Everything else in the wardrobe can be loud. The coat should be the thing that outlasts the argument."
          cta={{ href: "/journal", label: "Read the story" }}
        />
      </section>

      {/* TRIPTYCH BAND */}
      <Triptych
        panels={[
          {
            image: editorialImage("band-2.jpg"),
            label: "The Coat",
            href: "/shop?cat=coats",
            sub: "Shop coats",
          },
          {
            image: "/images/products/chore-worn.jpg",
            label: "The Jacket",
            href: "/shop?cat=jackets",
            sub: "Shop jackets",
          },
          {
            image: editorialImage("band-3.jpg"),
            label: "The Knit",
            href: "/shop?cat=knits",
            sub: "Shop knits & tees",
          },
        ]}
      />

      {/* MORE PIECES */}
      <section className="section">
        <div className="section-head">
          <div>
            <span className="label">The Rest of It</span>
            <h2>Hardware included.</h2>
          </div>
          <Link className="text-link" href="/shop">
            View all
          </Link>
        </div>
        <ProductGrid products={PRODUCTS.slice(8, 16)} />
      </section>

      {/* STATEMENT */}
      <Statement label="Our entire marketing strategy">
        We don&apos;t do origin myths.
        <br />
        We do coats.
      </Statement>

      {/* JOURNAL */}
      <section className="section">
        <div className="section-head">
          <div>
            <span className="label">From the Journal</span>
            <h2>Stories, not content.</h2>
          </div>
          <Link className="text-link" href="/journal">
            All stories
          </Link>
        </div>
        <div className="journal-grid">
          {JOURNAL.map((j) => (
            <Link key={j.title} className="journal-card" href="/journal">
              <Image
                src={j.image}
                alt={j.title}
                width={800}
                height={533}
                sizes="(max-width: 720px) 50vw, 33vw"
              />
              <span className="label">{j.label}</span>
              <h3>{j.title}</h3>
              <p>{j.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
