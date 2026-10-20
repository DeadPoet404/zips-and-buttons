"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { SIZES, type Product, type Size } from "@/lib/products";

export default function AddToBag({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState<Size>("M");
  const [added, setAdded] = useState(false);

  return (
    <>
      <div className="pdp-block">
        <span className="label">Size — unisex</span>
        <div className="size-row">
          {SIZES.map((s) => (
            <button
              key={s}
              className={`size-chip ${s === size ? "active" : ""}`}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <span className="label" style={{ color: "var(--grey)" }}>
          Measured flat · size guide on the About page
        </span>
      </div>

      <div className="pdp-actions">
        <button
          className="btn"
          onClick={() => {
            add(product.id, size);
            setAdded(true);
            setTimeout(() => setAdded(false), 1600);
          }}
        >
          {added ? "Added to bag — Obviously." : "Add to bag"}
        </button>
      </div>
    </>
  );
}
