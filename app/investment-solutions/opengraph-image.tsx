import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/components/og/og-card";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Choose the route, not the listing — IGA Global Investments";

export default async function Image() {
  return ogImage({
    eyebrow: "Investment Solutions",
    title: "Choose the route, not the listing",
    meta: "Residential · Land · Joint Ventures",
    image: "images/opp-development.webp",
  });
}
