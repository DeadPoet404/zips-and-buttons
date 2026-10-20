"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { fmtPrice, getProduct } from "@/lib/products";

export default function CheckoutForm() {
  const { items } = useCart();
  const [done, setDone] = useState(false);

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
    <div className="form-grid">
      <form
        className="form-fields"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        <div>
          <span className="label" style={{ color: "var(--grey)" }}>
            Contact
          </span>
          <label>
            <input type="email" placeholder="EMAIL" required />
          </label>
        </div>
        <div>
          <span className="label" style={{ color: "var(--grey)" }}>
            Shipping
          </span>
          <label>
            <input type="text" placeholder="FULL NAME" required />
          </label>
          <label>
            <input type="text" placeholder="ADDRESS" required />
          </label>
          <div className="form-pair">
            <label>
              <input type="text" placeholder="CITY" required />
            </label>
            <label>
              <input type="text" placeholder="COUNTRY" required />
            </label>
          </div>
        </div>
        <div>
          <span className="label" style={{ color: "var(--grey)" }}>
            Payment
          </span>
          <label>
            <input type="text" placeholder="CARD NUMBER" />
          </label>
          <div className="form-pair">
            <label>
              <input type="text" placeholder="MM / YY" />
            </label>
            <label>
              <input type="text" placeholder="CVC" />
            </label>
          </div>
        </div>
        <button className="btn" type="submit" style={{ width: "100%" }}>
          Place order
        </button>
        {done && (
          <p className="honesty">
            This is a design test — no payment was taken and no coat is coming. You can
            close the tab with a clear conscience.
          </p>
        )}
      </form>

      <aside className="summary">
        <h2>Your order</h2>
        <div className="summary-row">
          <span>Items</span>
          <span>{fmtPrice(totals)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>Calculated live</span>
        </div>
        <div className="summary-row">
          <span>Total</span>
          <span>{fmtPrice(totals)}</span>
        </div>
        <p className="honesty">
          This checkout is a design test. Nothing is charged, nothing ships. The coats,
          however, are real in spirit.
        </p>
      </aside>
    </div>
  );
}
