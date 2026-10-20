"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { fmtPrice, getProduct, productImage } from "@/lib/products";

export default function CartView() {
  const { items, remove } = useCart();

  const totals = items.reduce(
    (acc, item) => {
      const p = getProduct(item.id);
      if (p) {
        acc.ghs += p.ghs * item.qty;
        acc.usd += p.usd * item.qty;
      }
      return acc;
    },
    { ghs: 0, usd: 0 }
  );

  return (
    <div className="cart-wrap">
      <div>
        {items.length === 0 ? (
          <p className="empty-note">Your bag is empty. That&apos;s a decision too.</p>
        ) : (
          items.map((item) => {
            const p = getProduct(item.id);
            if (!p) return null;
            return (
              <div className="cart-row" key={`${item.id}-${item.size}`}>
                <Image
                  className="cart-shot"
                  src={productImage(p.images[0])}
                  alt={p.name}
                  width={92}
                  height={115}
                />
                <div>
                  <span className="label">{p.name}</span>
                  <div className="price">{fmtPrice(p)}</div>
                  <div className="label" style={{ marginTop: 6, color: "var(--grey)" }}>
                    Size {item.size} · Qty {item.qty}
                  </div>
                  <button
                    className="cart-remove"
                    onClick={() => remove(item.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
                <div className="price">
                  {fmtPrice({ ghs: p.ghs * item.qty, usd: p.usd * item.qty })}
                </div>
              </div>
            );
          })
        )}
      </div>

      <aside className="summary">
        <h2>Summary</h2>
        <div className="summary-row">
          <span>Items</span>
          <span>{fmtPrice(totals)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>{items.length ? "Calculated at checkout" : "—"}</span>
        </div>
        <div className="summary-row">
          <span>Total</span>
          <span>{fmtPrice(totals)}</span>
        </div>
        <Link className="btn" href="/checkout">
          Checkout
        </Link>
        <p className="honesty">
          Prices shown in both currencies, everywhere. No conversion surprises at the end.
          Obviously.
        </p>
      </aside>
    </div>
  );
}
