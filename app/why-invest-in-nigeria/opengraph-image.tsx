import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/components/og/og-card";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "The demand is structural, not seasonal — IGA Global Investments";

export default async function Image() {
  return ogImage({
    eyebrow: "Why Invest in Nigeria",
    title: "The demand is structural, not seasonal",
    meta: "Market overview & the honest risks",
    image: "images/nigeria.webp",
  });
}
