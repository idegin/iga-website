import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/components/og/og-card";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Building Wealth Through Smart Real Estate Investments — IGA Global Investments";

export default async function Image() {
  return ogImage({
    eyebrow: "Real Estate Investment Advisory",
    title: "Building Wealth Through Smart Real Estate Investments",
    meta: "Advisory · Development · Nigeria",
    image: "images/nigeria.webp",
  });
}
