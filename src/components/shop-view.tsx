"use client";

import { useState } from "react";
import ProductGrid from "@/components/product-grid";
import { PRODUCTS, type Product } from "@/lib/products";

const CATS = [
  { key: "all", label: "All" },
  { key: "icons", label: "The Icons" },
  { key: "coats", label: "Coats" },
  { key: "jackets", label: "Jackets" },
  { key: "knits", label: "Knits & Tees" },
  { key: "trousers", label: "Trousers" },
  { key: "bags", label: "Bags" },
] as const;

function filter(cat: string): Product[] {
  if (cat === "all") return PRODUCTS;
  if (cat === "icons") return PRODUCTS.filter((p) => p.icon);
  return PRODUCTS.filter((p) => p.cat === cat);
}

export default function ShopView() {
  const [cat, setCat] = useState<string>("all");
  const list = filter(cat);
  const note =
    cat === "all"
      ? `${list.length} pieces · Drop 01`
      : `${list.length} ${cat === "icons" ? "icons" : `pieces in ${cat}`} · Drop 01`;

  return (
    <>
      <nav className="chips" aria-label="Shop by type">
        {CATS.map((c) => (
          <button
            key={c.key}
            className={`chip ${cat === c.key ? "active" : ""}`}
            onClick={() => setCat(c.key)}
          >
            {c.label}
          </button>
        ))}
      </nav>
      <p className="price" style={{ padding: "18px var(--pad) 0" }}>
        {note}
      </p>
      <section className="section" style={{ paddingTop: 36 }}>
        <ProductGrid products={list} />
      </section>
    </>
  );
}
