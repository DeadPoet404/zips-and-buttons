import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ShopView from "@/components/shop-view";
import { editorialImage } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Drop 01 — twenty pieces of unisex outerwear. Prices in GH₵ and $.",
};

export default function ShopPage() {
  return (
    <>
      <div className="page-head">
        <span className="label breadcrumb">
          <Link href="/">Home</Link> / Shop
        </span>
        <h1>Drop 01</h1>
        <p className="price" style={{ padding: "0 0 28px" }}>
          20 pieces · Drop 01
        </p>
      </div>

      <ShopView />

      {/* editorial cut mid-catalogue */}
      <section
        className="editorial-cut"
        style={{ margin: "0 var(--pad) clamp(48px,7vw,96px)" }}
      >
        <Image
          className="cut-img"
          src={editorialImage("worn-jacket.jpg")}
          alt="Editorial cut"
          width={800}
          height={1000}
          sizes="(max-width: 720px) 100vw, 60vw"
        />
        <div className="cut-copy">
          <span className="label">Worn In</span>
          <h3>
            Objects are
            <br />
            quiet. People
            <br />
            aren&apos;t.
          </h3>
          <p style={{ opacity: 0.85, maxWidth: "34ch" }}>
            Hover anything in the catalogue — the pieces were made to be worn, not
            admired on hangers.
          </p>
          <Link className="btn" href="/product/field-coat">
            Meet the Field Coat
          </Link>
        </div>
      </section>
    </>
  );
}
