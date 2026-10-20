import type { Metadata } from "next";
import Statement from "@/components/statement";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zips & Buttons is a small unisex outerwear house in Cape Coast, Ghana. Honest quality, priced in GH₵ and $.",
};

const PRINCIPLES = [
  {
    label: "01 — What we make",
    title: (
      <>
        Twenty pieces,
        <br />
        no filler.
      </>
    ),
    body: "Drop 01 is a capsule because attention doesn't scale. Every piece is outerwear-led and hardware-obsessed: two-way brass zips, horn buttons, rivets where the stress lives.",
  },
  {
    label: "02 — How we price",
    title: (
      <>
        Honestly,
        <br />
        in two currencies.
      </>
    ),
    body: "GH₵ and $, everywhere, always. The price is the cost of making it well plus a fair margin. No invented heritage, no \"accessible luxury\" math.",
  },
  {
    label: "03 — How we make it",
    title: (
      <>
        Fairly.
        <br />
        Quietly.
      </>
    ),
    body: "Fair pay, small runs, repairable construction. It's a principle, not a marketing page — so it lives here in one paragraph instead of a campaign.",
  },
];

const POLICIES = [
  {
    label: "Sizing",
    title: (
      <>
        Unisex.
        <br />
        Measured flat.
      </>
    ),
    body: "Our sizes run XS–XL and are cut for people, not genders. Every product page lists measurements. When between sizes, size down for a trim fit, up for the Field Coat's intended volume.",
  },
  {
    label: "Shipping & returns",
    title: (
      <>
        Worldwide.
        <br />
        Both directions.
      </>
    ),
    body: "Dispatched from Accra within 48 hours. Duties calculated at checkout where we can. Returns within 30 days, unworn, because coats deserve a second owner, not a landfill.",
  },
  {
    label: "Care & repair",
    title: (
      <>
        Maintain it.
        <br />
        We&apos;ll help.
      </>
    ),
    body: "Rewaxing guides, button replacement, zip servicing — write to the house and we'll walk you through it. A coat that can't be repaired isn't a coat. It's a subscription.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <span className="label">About the house</span>
        <h1>
          We don&apos;t do
          <br />
          origin myths.
          <br />
          <em>We do coats.</em>
        </h1>
        <p style={{ maxWidth: "52ch", fontSize: 16, color: "var(--ink-soft)" }}>
          Zips &amp; Buttons is a small unisex outerwear house in Cape Coast, Ghana. We
          make a short list of things — coats, jackets, trousers, the odd bag — priced in
          cedis and dollars, shipped worldwide. The quality is the story. We&apos;re not
          inventing a better one.
        </p>
      </section>

      <section className="about-cols">
        {PRINCIPLES.map((c) => (
          <div key={c.label}>
            <span className="label">{c.label}</span>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </section>

      <section className="about-cols" style={{ borderTop: "1px solid var(--rule)" }}>
        {POLICIES.map((c) => (
          <div key={c.label}>
            <span className="label">{c.label}</span>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </section>

      <Statement label="Cape Coast, Ghana — shipping everywhere">
        Built to outlast the trend cycle. <em>Obviously.</em>
      </Statement>
    </>
  );
}
