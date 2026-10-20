"use client";

import Image from "next/image";
import { useState } from "react";
import { productImage } from "@/lib/products";

export default function PdpGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="pdp-gallery">
      <div className="main-shot">
        <Image
          key={active}
          src={productImage(active)}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="pdp-thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              className={src === active ? "active" : ""}
              onClick={() => setActive(src)}
              aria-label={`View ${i + 1}`}
            >
              <Image src={productImage(src)} alt={`${name} view ${i + 1}`} fill sizes="84px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
