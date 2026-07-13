import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/components/og/og-card";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Understand the market before you enter it — IGA Global Investments";

export default async function Image() {
  return ogImage({
    eyebrow: "Insights",
    title: "Understand the market before you enter it",
    meta: "Investment · Finance · Tips",
    image: "images/insight-1.webp",
  });
}
