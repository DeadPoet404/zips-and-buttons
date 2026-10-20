# ZIPS & BUTTONS — Drop 01 (Next.js)

The real thing. Same design system as the static test — rebuilt on Next.js 16,
React 19, TypeScript, and Tailwind CSS v4.

## Run it locally

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

Production build:

```bash
npm run build
npm start
```

## Stack

- **Next.js 16 (App Router)** — routes, SEO metadata, static generation of all 20 product pages
- **TypeScript** — typed product catalog in `src/lib/products.ts`
- **Tailwind CSS v4** — available for layout work; the magazine design system lives as
  authored CSS in `src/app/globals.css` (tokens + component classes)
- **next/font** — Bodoni Moda + Archivo, self-hosted, no external font CDN
- **next/image** — optimized, lazy, correctly-sized photography
- **React Context + localStorage** — cart state (`src/context/cart-context.tsx`)
- **ESLint + Prettier** configs included

## The design system (locked — don't drift)

| Rule | Value |
|---|---|
| Paper & ink | `#f6f3ee` paper · `#141414` ink · greys. **No accent color** |
| Type | Bodoni Moda (statements) + Archivo (machinery) |
| Labels | tiny tracked capitals (`.label`) |
| Shape | cut paper — 0 radius, hairline rules, no shadows |
| Interaction | rules, captions, image swaps. No glowing buttons |
| Currency | GH₵ and $ shown together, everywhere |
| The test | *Would this appear in a good fashion magazine?* |

## Structure

```
src/
  app/                  — pages (/, /shop, /product/[id], /journal, /about, /cart, /checkout)
  components/           — SiteHeader, SiteFooter, ProductCard, ProductGrid,
                          EditorialCut, Triptych, Statement, ShopView,
                          PdpGallery, AddToBag, CartView, CheckoutForm
  context/              — cart context (client)
  lib/products.ts       — the capsule: 20 products, prices, copy
  app/globals.css       — the design system
public/images/          — stand-in imagery (swap for the real shoot;
                          same filenames = zero code changes)
```

## Editing things

- **Copy, prices, products** → `src/lib/products.ts`
- **Design tokens / type / rules** → `src/app/globals.css`
- **Swap imagery** → replace files in `public/images/products` and `public/images/editorial`

Imagery is stand-in. The shoot is coming. Obviously.
