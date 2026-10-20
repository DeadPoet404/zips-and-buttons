import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  label: string;
  title: React.ReactNode;
  blurb?: string;
  cta: { href: string; label: string };
};

export default function EditorialCut({ image, label, title, blurb, cta }: Props) {
  return (
    <section className="editorial-cut">
      <Image
        className="cut-img"
        src={image}
        alt=""
        width={1200}
        height={800}
        sizes="(max-width: 720px) 100vw, 60vw"
      />
      <div className="cut-copy">
        <span className="label">{label}</span>
        <h3>{title}</h3>
        {blurb && <p style={{ opacity: 0.85, maxWidth: "34ch" }}>{blurb}</p>}
        <Link className="btn" href={cta.href}>
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
