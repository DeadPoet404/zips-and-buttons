import Image from "next/image";
import Link from "next/link";

type Panel = { image: string; label: string; href: string; sub: string };

export default function Triptych({ panels }: { panels: Panel[] }) {
  return (
    <section className="triptych" aria-label="Shop the wardrobe">
      {panels.map((p) => (
        <Link key={p.label} href={p.href}>
          <Image src={p.image} alt={p.label} fill sizes="(max-width: 720px) 100vw, 33vw" />
          <div className="veil" />
          <div className="tri-label">
            {p.label}
            <span className="tri-sub label">{p.sub}</span>
          </div>
        </Link>
      ))}
    </section>
  );
}
