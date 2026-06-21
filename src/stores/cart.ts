import { $store } from "@kallojs/runtime";
import type { Product } from "../data/products.js";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
}

// Global, reactive shopping cart shared across every page and component.
export const useCart = $store({
  items: [] as CartItem[],
  count: 0,
  subtotal: 0,
  isOpen: false,

  _recalc() {
    this.count = this.items.reduce((n: number, i: CartItem) => n + i.qty, 0);
    this.subtotal = this.items.reduce((s: number, i: CartItem) => s + i.price * i.qty, 0);
  },

  open() { this.isOpen = true; },
  close() { this.isOpen = false; },
  toggle() { this.isOpen = !this.isOpen; },

  add(product: Product, qty: number) {
    const amount = qty && qty > 0 ? qty : 1;
    const idx = this.items.findIndex((i: CartItem) => i.id === product.id);
    if (idx >= 0) {
      const next = [...this.items];
      next[idx] = { ...next[idx], qty: next[idx].qty + amount };
      this.items = next;
    } else {
      this.items = [
        ...this.items,
        { id: product.id, name: product.name, price: product.price, image: product.image, qty: amount },
      ];
    }
    this._recalc();
    this.isOpen = true;
  },

  setQty(id: string, qty: number) {
    if (qty <= 0) { this.remove(id); return; }
    this.items = this.items.map((i: CartItem) => (i.id === id ? { ...i, qty } : i));
    this._recalc();
  },

  inc(id: string) {
    const it = this.items.find((i: CartItem) => i.id === id);
    if (it) this.setQty(id, it.qty + 1);
  },

  dec(id: string) {
    const it = this.items.find((i: CartItem) => i.id === id);
    if (it) this.setQty(id, it.qty - 1);
  },

  remove(id: string) {
    this.items = this.items.filter((i: CartItem) => i.id !== id);
    this._recalc();
  },

  clear() {
    this.items = [];
    this._recalc();
    this.isOpen = false;
  },
});
