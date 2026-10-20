import ProductCard from "@/components/product-card";
import type { Product } from "@/lib/products";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
