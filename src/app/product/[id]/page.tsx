import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PdpGallery from "@/components/pdp-gallery";
import AddToBag from "@/components/add-to-bag";
import ProductGrid from "@/components/product-grid";
import {
  PRODUCTS,
  editorialImage,
  fmtPrice,
  getProduct,
  productImage,
  relatedProducts,
} from "@/lib/products";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = getProduct(id);
  return {
    title: p ? p.name.replace("THE ", "The ") : "Product",
    description: p?.line,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();

  const worn = p.images.length > 2 ? p.images[p.images.length - 1] : null;

  return (
    <>
      <div className="page-head" style={{ paddingBottom: 0 }}>
        <span className="label breadcrumb">
          <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / {p.cat}
        </span>
      </div>

      <div className="pdp">
        <PdpGallery images={p.images} name={p.name} />

        <div className="pdp-info">
          <span className="label">Drop 01 · Unisex</span>
          <h1>{p.name}</h1>
          <div className="price pdp-price">{fmtPrice(p)}</div>
          <p className="pdp-line">{p.line}</p>

          <div className="pdp-block">
            <span className="label">Colour</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
              {p.colors.map((c) => (
                <span key={c.name} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span className="swatch" style={{ background: c.hex }} />
                  <span className="label">{c.name}</span>
                </span>
              ))}
            </div>
          </div>

          <AddToBag product={p} />

          <div className="pdp-block">
            <span className="label spec-label">The detail</span>
            <p>{p.detail}</p>
            <span className="label spec-label">Materials</span>
            <p>{p.materials}</p>
            <span className="label spec-label">Care</span>
            <p>{p.care}</p>
          </div>

          <p className="honesty">
            Fairly made. Honestly priced. The quality is the story — we don&apos;t need a
            better one.
          </p>
        </div>
      </div>

      <figure className="worn-strip">
        <Image
          src={worn ? productImage(worn) : editorialImage("hero.jpg")}
          alt={p.name}
          width={1600}
          height={1000}
          sizes="100vw"
          style={{ width: "100%", height: "auto", maxHeight: "82vh", objectFit: "cover" }}
        />
        <figcaption className="label">
          {worn ? `${p.name} — worn in` : "Drop 01 — editorial"}
        </figcaption>
      </figure>

      <section className="section">
        <div className="section-head">
          <div>
            <span className="label">The Pairing</span>
            <h2>Goes with.</h2>
          </div>
          <Link className="text-link" href="/shop">
            All pieces
          </Link>
        </div>
        <ProductGrid products={relatedProducts(p)} />
      </section>
    </>
  );
}
