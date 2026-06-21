import { $store } from "@kallojs/runtime";
import type { Product } from "../data/products.js";

// Drives the home page filtering. Seeded from server-fetched products so the
// grid is fully server-rendered, then filtered reactively on the client.
export const useCatalog = $store({
  all: [] as Product[],
  visible: [] as Product[],
  activeCategory: "All",
  query: "",

  setProducts(list: Product[]) {
    this.all = [...list];
    this.applyFilters();
  },

  setCategory(category: string) {
    this.activeCategory = category;
    this.applyFilters();
  },

  setQuery(query: string) {
    this.query = query;
    this.applyFilters();
  },

  applyFilters() {
    let list = [...this.all];
    if (this.activeCategory !== "All") {
      list = list.filter((p: Product) => p.category === this.activeCategory);
    }
    const q = this.query.trim().toLowerCase();
    if (q) {
      list = list.filter((p: Product) => (p.name + " " + p.tagline).toLowerCase().includes(q));
    }
    this.visible = list;
  },
});
