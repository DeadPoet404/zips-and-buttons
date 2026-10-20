export type Color = { name: string; hex: string };

export type Product = {
  id: string;
  name: string;
  cat: "coats" | "jackets" | "knits" | "trousers" | "bags";
  icon?: boolean;
  usd: number;
  ghs: number;
  line: string;
  detail: string;
  materials: string;
  care: string;
  colors: Color[];
  /** filenames in /public/images/products — [main, alt?, worn?] */
  images: string[];
};

export const SIZES = ["XS", "S", "M", "L", "XL"] as const;
export type Size = (typeof SIZES)[number];

export const PRODUCTS: Product[] = [
  {
    id: "field-coat", name: "THE FIELD COAT", cat: "coats", icon: true,
    usd: 420, ghs: 5900,
    line: "Quilted oversized coat. The one people photograph.",
    detail: "A two-way brass zip you can open from the hem — because sitting down shouldn't be a negotiation.",
    materials: "Recycled poly shell, cotton-nylon fill, brass hardware. Lined in cupro.",
    care: "Dry clean sparingly. It's a coat, not a museum piece.",
    colors: [{ name: "Ink", hex: "#1a1a1a" }, { name: "Olive", hex: "#4a4f3f" }],
    images: ["field-coat.jpg", "field-coat-alt.jpg", "field-coat-worn.jpg"],
  },
  {
    id: "trench", name: "THE TRENCH", cat: "coats",
    usd: 480, ghs: 6700,
    line: "Belted gabardine trench. Weather is not an excuse.",
    detail: "Horn buttons, storm flap, and a belt that stays tied. We tested that.",
    materials: "Cotton gabardine, horn buttons, viscose lining.",
    care: "Dry clean. Sponge the hem — it knows what it's been through.",
    colors: [{ name: "Bone", hex: "#e6e0d3" }, { name: "Ink", hex: "#1a1a1a" }],
    images: ["trench.jpg"],
  },
  {
    id: "moto", name: "THE MOTO", cat: "jackets",
    usd: 380, ghs: 5300,
    line: "Cropped leather jacket. Attitude sold separately. Included free.",
    detail: "A chunky asymmetric zip that sounds expensive when it closes.",
    materials: "Full-grain lamb leather, cotton twill lining, YKK Excella zip.",
    care: "Condition twice a year. Scars are character.",
    colors: [{ name: "Ink", hex: "#1a1a1a" }],
    images: ["moto.jpg", "moto-alt.jpg", "moto-worn.jpg"],
  },
  {
    id: "overcoat", name: "THE OVERCOAT", cat: "coats",
    usd: 520, ghs: 7300,
    line: "Long double-faced wool. No lining, no excuses.",
    detail: "Two layers of wool, bonded not stitched. The inside is as finished as the outside.",
    materials: "80% wool, 20% cashmere. Double-faced, unlined.",
    care: "Air it. Brush it. Respect it.",
    colors: [{ name: "Camel", hex: "#b08968" }, { name: "Charcoal", hex: "#3c3c3c" }],
    images: ["overcoat.jpg", "overcoat-worn.jpg"],
  },
  {
    id: "puffer", name: "THE PUFFER", cat: "coats",
    usd: 340, ghs: 4750,
    line: "Cropped down jacket. Warmth without the marshmallow.",
    detail: "Matte shell with hidden snaps — nothing shiny, nothing loud.",
    materials: "Matte recycled nylon, 700-fill recycled down.",
    care: "Machine wash cold, tumble low. It forgives.",
    colors: [{ name: "Ink", hex: "#1a1a1a" }, { name: "Bone", hex: "#e6e0d3" }],
    images: ["puffer.jpg", "puffer-worn.jpg"],
  },
  {
    id: "parka", name: "THE PARKA", cat: "coats",
    usd: 460, ghs: 6450,
    line: "Long hooded parka. Built for harmattan and January.",
    detail: "A hood with structure — it holds its shape so you don't have to hold yours.",
    materials: "Cotton-nylon shell, recycled fill, storm cuffs.",
    care: "Dry clean at season's end. Not after every dust storm.",
    colors: [{ name: "Charcoal", hex: "#3c3c3c" }],
    images: ["parka.jpg", "parka-worn.jpg"],
  },
  {
    id: "chore", name: "THE CHORE", cat: "jackets",
    usd: 240, ghs: 3350,
    line: "Washed canvas chore jacket. Work that looks like play.",
    detail: "Triple-stitched pockets that hold a phone, a notebook, and a small opinion.",
    materials: "12oz washed cotton canvas, corozo buttons.",
    care: "Wash it. It gets better. That's the point.",
    colors: [{ name: "Indigo", hex: "#2c3548" }, { name: "Olive", hex: "#4a4f3f" }],
    images: ["chore.jpg", "chore-worn.jpg"],
  },
  {
    id: "trucker", name: "THE TRUCKER", cat: "jackets",
    usd: 220, ghs: 3100,
    line: "Rigid raw denim jacket. Fades to yours.",
    detail: "Unwashed, untreated, unbothered. Six months in, it's a biography.",
    materials: "14oz rigid selvedge denim, copper rivets.",
    care: "Wash rarely, cold, inside out. Fades are earned.",
    colors: [{ name: "Indigo", hex: "#2c3548" }],
    images: ["trucker.jpg"],
  },
  {
    id: "waxed-overshirt", name: "THE WAXED OVERSHIRT", cat: "jackets",
    usd: 260, ghs: 3650,
    line: "Waxed cotton overshirt. Re-waxable, forever.",
    detail: "It will crease where you crease. That's a feature with a filing system.",
    materials: "8oz waxed cotton, brushed flannel-lined collar.",
    care: "Re-wax yearly. We'll tell you how. It's a ten-minute ritual.",
    colors: [{ name: "Ink", hex: "#1a1a1a" }, { name: "Olive", hex: "#4a4f3f" }],
    images: ["waxed-overshirt.jpg"],
  },
  {
    id: "bomber", name: "THE BOMBER", cat: "jackets",
    usd: 280, ghs: 3900,
    line: "Heavyweight bomber. The zip is the point.",
    detail: "Two-way zip, ribbed collar that doesn't pill, and a lining worth showing.",
    materials: "Heavyweight nylon, cotton-rib trim, satin lining.",
    care: "Dry clean. Ribs are delicate. So are you.",
    colors: [{ name: "Ink", hex: "#1a1a1a" }],
    images: ["bomber.jpg"],
  },
  {
    id: "blazer", name: "THE SOFT BLAZER", cat: "jackets",
    usd: 320, ghs: 4500,
    line: "Unstructured wool blazer. Tailored like a shirt.",
    detail: "No shoulder pads, no canvassing, no pretending. It moves when you move.",
    materials: "Wool-linen hopsack, patch pockets, unlined.",
    care: "Dry clean, or don't. It's relaxed for a reason.",
    colors: [{ name: "Charcoal", hex: "#3c3c3c" }, { name: "Ink", hex: "#1a1a1a" }],
    images: ["blazer.jpg", "blazer-worn.jpg"],
  },
  {
    id: "track-jacket", name: "THE TRACK JACKET", cat: "jackets",
    usd: 190, ghs: 2650,
    line: "Heavyweight zip track top. Sport, but make it honest.",
    detail: "The zip pull is machined brass. Small thing. Everything is small things.",
    materials: "Cotton-poly fleece, brass hardware, ribbed trims.",
    care: "Wash cold, hang dry. It's not going anywhere.",
    colors: [{ name: "Ink", hex: "#1a1a1a" }],
    images: ["track-jacket.jpg"],
  },
  {
    id: "gilet", name: "THE GILET", cat: "jackets",
    usd: 210, ghs: 2950,
    line: "Padded vest. Layers under everything, over everything.",
    detail: "Armholes cut to fit over a blazer. Yes, really.",
    materials: "Recycled nylon, recycled down fill, two-way zip.",
    care: "Machine wash cold. It's tougher than it looks.",
    colors: [{ name: "Olive", hex: "#4a4f3f" }, { name: "Ink", hex: "#1a1a1a" }],
    images: ["gilet.jpg"],
  },
  {
    id: "zip-hoodie", name: "THE ZIP HOODIE", cat: "knits",
    usd: 140, ghs: 1950,
    line: "Heavyweight zip hoodie. 480gsm. Honest weight.",
    detail: "Heavy enough to be a jacket. That's the whole strategy.",
    materials: "480gsm organic cotton fleece, two-way zip.",
    care: "Wash cold, dry flat. Heavy things need patience.",
    colors: [{ name: "Charcoal", hex: "#3c3c3c" }, { name: "Bone", hex: "#e6e0d3" }],
    images: ["zip-hoodie.jpg", "zip-hoodie-alt.jpg"],
  },
  {
    id: "shirt-jacket", name: "THE SHIRT JACKET", cat: "knits",
    usd: 170, ghs: 2400,
    line: "Brushed flannel overshirt. The winter mid-layer.",
    detail: "Buttons cut from real horn — no two alike. Obviously.",
    materials: "Brushed cotton flannel, horn buttons, chest pockets.",
    care: "Machine wash cool. Flannel likes a little neglect.",
    colors: [{ name: "Charcoal", hex: "#3c3c3c" }],
    images: ["shirt-jacket.jpg"],
  },
  {
    id: "wide-trouser", name: "THE WIDE TROUSER", cat: "trousers",
    usd: 180, ghs: 2500,
    line: "Wide-leg wool trouser. The crease that stays.",
    detail: "Pressed in, not tailored to stay. Wear it hard; it holds.",
    materials: "Wool-poly twill, curtained waistband, horn button.",
    care: "Dry clean, press low. Or wear the crease out. Your call.",
    colors: [{ name: "Ink", hex: "#1a1a1a" }, { name: "Charcoal", hex: "#3c3c3c" }],
    images: ["wide-trouser.jpg", "wide-trouser-alt.jpg"],
  },
  {
    id: "cargo", name: "THE CARGO", cat: "trousers",
    usd: 160, ghs: 2250,
    line: "Utility cargo trouser. Pockets that hold things.",
    detail: "Six pockets, zero dangling straps. Utility without the costume.",
    materials: "Cotton-nylon ripstop, bar-tacked stress points.",
    care: "Machine wash cold. These are working trousers.",
    colors: [{ name: "Olive", hex: "#4a4f3f" }, { name: "Ink", hex: "#1a1a1a" }],
    images: ["cargo.jpg", "cargo-detail.jpg"],
  },
  {
    id: "fisherman", name: "THE FISHERMAN", cat: "knits",
    usd: 150, ghs: 2100,
    line: "Chunky wool knit. Real horn buttons, all of them.",
    detail: "Knitted on old machines slowly, because fast knitting shows.",
    materials: "100% lambswool, horn buttons, ribbed cuffs.",
    care: "Hand wash cold or dry clean. Dry flat. Never hang.",
    colors: [{ name: "Bone", hex: "#e6e0d3" }, { name: "Ink", hex: "#1a1a1a" }],
    images: ["fisherman.jpg", "fisherman-alt.jpg"],
  },
  {
    id: "heavy-tee", name: "THE HEAVY TEE", cat: "knits",
    usd: 60, ghs: 850,
    line: "Heavyweight cotton tee. The entry point.",
    detail: "240gsm. It hangs like a garment, not a flyer.",
    materials: "240gsm organic cotton, tubular knit, no side seams.",
    care: "Wash cold, dry flat. It will outlast the trend cycle.",
    colors: [{ name: "Bone", hex: "#e6e0d3" }, { name: "Ink", hex: "#1a1a1a" }],
    images: ["heavy-tee.jpg", "heavy-tee-alt.jpg"],
  },
  {
    id: "weekender", name: "THE WEEKENDER", cat: "bags",
    usd: 290, ghs: 4050,
    line: "Waxed canvas holdall. Brass hardware, obviously.",
    detail: "The zip runs the full width so nothing gets lost in the corner. Nothing should.",
    materials: "18oz waxed canvas, bridle leather trim, solid brass hardware.",
    care: "Re-wax yearly. The scars travel well.",
    colors: [{ name: "Olive", hex: "#4a4f3f" }, { name: "Ink", hex: "#1a1a1a" }],
    images: ["weekender.jpg", "weekender-alt.jpg", "weekender-worn.jpg"],
  },
];

export function fmtPrice(p: { ghs: number; usd: number }): string {
  return `GH₵ ${p.ghs.toLocaleString()} · $${p.usd}`;
}

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function relatedProducts(p: Product, n = 4): Product[] {
  return PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, n);
}

export const productImage = (file: string) => `/images/products/${file}`;
export const editorialImage = (file: string) => `/images/editorial/${file}`;
