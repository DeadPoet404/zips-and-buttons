"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Size } from "@/lib/products";

export type CartItem = { id: string; size: Size; qty: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  add: (id: string, size: Size) => void;
  remove: (id: string, size: Size) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "zb_cart";
const CART_EVENT = "zb-cart-change";
const EMPTY: CartItem[] = [];

/* --- external store: localStorage, cached so getSnapshot is stable --- */
let cacheRaw: string | null = null;
let cacheItems: CartItem[] = EMPTY;

function readRaw(): string {
  if (typeof window === "undefined") return "[]";
  return localStorage.getItem(STORAGE_KEY) || "[]";
}

function getSnapshot(): CartItem[] {
  const raw = readRaw();
  if (raw !== cacheRaw) {
    cacheRaw = raw;
    try {
      cacheItems = JSON.parse(raw) as CartItem[];
    } catch {
      cacheItems = EMPTY;
    }
  }
  return cacheItems;
}

function getServerSnapshot(): CartItem[] {
  return EMPTY;
}

function subscribe(onStoreChange: () => void): () => void {
  window.addEventListener(CART_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(CART_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function writeItems(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CART_EVENT));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const add = useCallback((id: string, size: Size) => {
    const found = getSnapshot().find((i) => i.id === id && i.size === size);
    const next = found
      ? getSnapshot().map((i) => (i === found ? { ...i, qty: i.qty + 1 } : i))
      : [...getSnapshot(), { id, size, qty: 1 }];
    writeItems(next);
  }, []);

  const remove = useCallback((id: string, size: Size) => {
    writeItems(getSnapshot().filter((i) => !(i.id === id && i.size === size)));
  }, []);

  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  return (
    <CartContext.Provider value={{ items, count, add, remove }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
