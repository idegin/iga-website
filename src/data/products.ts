// Hard-coded catalog. In a real app this would come from a database or API —
// here we expose async functions to demonstrate Kallo's server-side data
// fetching: pages 'await' these in their <Server> block.

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  compareAt: number; // 0 = no discount
  currency: string;
  category: string;
  rating: number;
  reviews: number;
  badge: string; // "" = none
  inStock: boolean;
  colors: string[];
  features: string[];
  image: string;
}

export const categories = ["All", "Audio", "Wearables", "Workspace"];

export const products: Product[] = [
  {
    id: "1",
    slug: "aura-wireless-headphones",
    name: "Aura Wireless Headphones",
    tagline: "Studio sound, all-day comfort",
    description:
      "Immersive 40mm drivers with adaptive noise cancellation and a featherlight frame designed for marathon listening sessions.",
    price: 249,
    compareAt: 299,
    currency: "USD",
    category: "Audio",
    rating: 4.8,
    reviews: 1240,
    badge: "Best seller",
    inStock: true,
    colors: ["#18181b", "#6d28d9", "#f4f4f5"],
    features: ["Adaptive noise cancellation", "40-hour battery life", "Multipoint Bluetooth 5.3", "USB-C fast charge"],
    image: "https://picsum.photos/seed/aura-headphones/800/800",
  },
  {
    id: "2",
    slug: "pulse-earbuds-pro",
    name: "Pulse Earbuds Pro",
    tagline: "Tiny buds, massive bass",
    description:
      "Pocketable earbuds with spatial audio, a secure sport fit, and a wireless charging case that tops up in minutes.",
    price: 129,
    compareAt: 0,
    currency: "USD",
    category: "Audio",
    rating: 4.6,
    reviews: 860,
    badge: "New",
    inStock: true,
    colors: ["#ffffff", "#18181b"],
    features: ["Spatial audio", "IPX5 sweat resistant", "Wireless charging case", "Touch controls"],
    image: "https://picsum.photos/seed/pulse-earbuds/800/800",
  },
  {
    id: "3",
    slug: "vela-smartwatch",
    name: "Vela Smartwatch",
    tagline: "Your day, on your wrist",
    description:
      "A crisp always-on AMOLED display, 5-day battery, and health tracking that keeps up with every workout and meeting.",
    price: 199,
    compareAt: 229,
    currency: "USD",
    category: "Wearables",
    rating: 4.7,
    reviews: 540,
    badge: "",
    inStock: true,
    colors: ["#18181b", "#3b82f6", "#f43f5e"],
    features: ["Always-on AMOLED", "5-day battery", "GPS + heart rate", "50m water resistant"],
    image: "https://picsum.photos/seed/vela-watch/800/800",
  },
  {
    id: "4",
    slug: "trek-fitness-band",
    name: "Trek Fitness Band",
    tagline: "Move more, track everything",
    description:
      "A lightweight band with 14-day battery, sleep insights, and 20+ sport modes to keep your goals on track.",
    price: 59,
    compareAt: 79,
    currency: "USD",
    category: "Wearables",
    rating: 4.4,
    reviews: 2110,
    badge: "Deal",
    inStock: false,
    colors: ["#18181b", "#22c55e"],
    features: ["14-day battery", "Sleep + stress tracking", "20+ sport modes", "Slim 11g design"],
    image: "https://picsum.photos/seed/trek-band/800/800",
  },
  {
    id: "5",
    slug: "lumen-desk-lamp",
    name: "Lumen Desk Lamp",
    tagline: "Light that adapts to you",
    description:
      "A minimalist aluminum lamp with tunable color temperature and a smart auto-dim sensor for eye-friendly focus.",
    price: 89,
    compareAt: 0,
    currency: "USD",
    category: "Workspace",
    rating: 4.5,
    reviews: 320,
    badge: "",
    inStock: true,
    colors: ["#f4f4f5", "#18181b"],
    features: ["Tunable white 2700-6500K", "Auto-dim sensor", "USB-C charging port", "Anodized aluminum"],
    image: "https://picsum.photos/seed/lumen-lamp/800/800",
  },
  {
    id: "6",
    slug: "glide-mechanical-keyboard",
    name: "Glide Mechanical Keyboard",
    tagline: "Type like it's butter",
    description:
      "A hot-swappable 75% mechanical keyboard with gasket mounting, PBT keycaps, and a satisfying, quiet thock.",
    price: 149,
    compareAt: 169,
    currency: "USD",
    category: "Workspace",
    rating: 4.9,
    reviews: 980,
    badge: "Best seller",
    inStock: true,
    colors: ["#18181b", "#6d28d9", "#f4f4f5"],
    features: ["Hot-swappable switches", "Gasket-mounted plate", "PBT double-shot keycaps", "Wireless + USB-C"],
    image: "https://picsum.photos/seed/glide-keyboard/800/800",
  },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProducts(): Promise<Product[]> {
  await wait(120); // simulate a network/database round-trip
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await wait(120);
  return products.find((p) => p.id === id || p.slug === id);
}

export async function getRelatedProducts(id: string, category: string): Promise<Product[]> {
  await wait(60);
  return products.filter((p) => p.category === category && p.id !== id).slice(0, 3);
}
