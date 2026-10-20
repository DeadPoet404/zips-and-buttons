import type { Metadata } from "next";
import Link from "next/link";
import CheckoutForm from "@/components/checkout-form";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <>
      <div className="page-head">
        <span className="label breadcrumb">
          <Link href="/cart">Bag</Link> / Checkout
        </span>
        <h1>Checkout</h1>
      </div>
      <CheckoutForm />
    </>
  );
}
