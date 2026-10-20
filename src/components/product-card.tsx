import Image from "next/image";
import Link from "next/link";
import { fmtPrice, productImage, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const main = product.images[0];
  const worn = product.images.length > 1 ? product.images[product.images.length - 1] : null;
  const wornIsLast = product.images.length > 2 || product.images.length === 2;

  return (
    <Link className="card" href={`/product/${product.id}`}>
      <div className="card-media">
        {product.icon && <span className="card-badge label">The Icon</span>}
        <Image
          className="shot main"
          src={productImage(main)}
          alt={product.name}
          fill
          sizes="(max-width: 480px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {worn && wornIsLast && (
          <Image
            className="shot worn"
            src={productImage(worn)}
            alt={`${product.name} worn`}
            fill
            sizes="(max-width: 480px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}
      </div>
      <div className="card-info">
        <div>
          <div className="card-name">{product.name}</div>
          <div className="card-line">{product.line.split(".")[0]}.</div>
          <div className="swatches">
            {product.colors.map((c) => (
              <span key={c.name} className="swatch" style={{ background: c.hex }} title={c.name} />
            ))}
          </div>
        </div>
        <div className="price">{fmtPrice(product)}</div>
      </div>
    </Link>
  );
}
