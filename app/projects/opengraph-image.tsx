import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/components/og/og-card";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Built to a standard, not to a deadline — IGA Global Investments";

export default async function Image() {
  return ogImage({
    eyebrow: "Projects",
    title: "Built to a standard, not to a deadline",
    meta: "Development philosophy & standards",
    image: "images/values.webp",
  });
}
