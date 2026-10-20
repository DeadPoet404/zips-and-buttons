import type { Metadata } from "next";
import Link from "next/link";
import CartView from "@/components/cart-view";

export const metadata: Metadata = {
  title: "Bag",
};

export default function CartPage() {
  return (
    <>
      <div className="page-head">
        <span className="label breadcrumb">
          <Link href="/">Home</Link> / Bag
        </span>
        <h1>Your bag</h1>
      </div>
      <CartView />
    </>
  );
}
