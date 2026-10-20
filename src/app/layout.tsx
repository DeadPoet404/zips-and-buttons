import type { Metadata } from "next";
import { Archivo, Bodoni_Moda } from "next/font/google";
import { CartProvider } from "@/context/cart-context";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zips & Buttons — Drop 01",
    template: "%s — Zips & Buttons",
  },
  description:
    "Unisex outerwear. Honest quality. Prices in GH₵ and $. Built to outlast the trend cycle. Obviously.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${archivo.variable}`}>
      <body>
        <CartProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
