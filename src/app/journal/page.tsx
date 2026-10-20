import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { editorialImage } from "@/lib/products";

export const metadata: Metadata = {
  title: "Journal",
  description: "Stories, not content. From the house of Zips & Buttons.",
};

const STORIES = [
  {
    image: editorialImage("journal-1.jpg"),
    label: "Journal 01 · Style",
    title: "The case for one good coat",
    paras: [
      "Everything else in the wardrobe can be loud. The coat should be the thing that outlasts the argument — the piece people remember before they remember your name.",
      "That's the whole idea behind Drop 01. Twenty pieces, most of them outerwear, all of them built around hardware you'll still be operating in ten years. Buy less, but make it the thing everyone remembers.",
    ],
    cta: { href: "/shop?cat=coats", label: "Shop coats" },
  },
  {
    image: "/images/products/cargo-detail.jpg",
    label: "Journal 02 · Craft",
    title: "Hardware: an appreciation",
    paras: [
      "A zip is a small machine. A button is a small promise. Both fail quietly and ruin entire garments — which is why ours are over-specified on purpose: two-way brass zips, horn buttons, rivets where the stress lives.",
      "The name people ask about? We chose it because it sounded right. The hardware chose us back.",
    ],
    cta: { href: "/product/track-jacket", label: "See the zip" },
  },
  {
    image: editorialImage("band-3.jpg"),
    label: "Journal 03 · House",
    title: "Cape Coast to everywhere",
    paras: [
      "We're a small house in Cape Coast, Ghana, shipping worldwide. Our prices speak two languages — cedis because that's where we are, dollars because that's where you are. Both numbers are honest; neither is a conversion gimmick.",
      "No origin myths. No invented heritage. Just coats that cost more because they cost more to make.",
    ],
    cta: { href: "/about", label: "About the house" },
  },
];

export default function JournalPage() {
  return (
    <>
      <div className="page-head" style={{ paddingBottom: "clamp(28px,4vw,48px)" }}>
        <span className="label breadcrumb">
          <Link href="/">Home</Link> / Journal
        </span>
        <h1>
          Stories,
          <br />
          not content.
        </h1>
      </div>

      {STORIES.map((s, i) => (
        <article key={s.title} className={`spread ${i % 2 ? "flip" : ""}`}>
          <Image
            src={s.image}
            alt={s.title}
            width={1000}
            height={700}
            sizes="(max-width: 720px) 100vw, 50vw"
          />
          <div className="spread-copy">
            <span className="label">{s.label}</span>
            <h2>{s.title}</h2>
            {s.paras.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
            <Link className="text-link" href={s.cta.href}>
              {s.cta.label}
            </Link>
          </div>
        </article>
      ))}
    </>
  );
}
