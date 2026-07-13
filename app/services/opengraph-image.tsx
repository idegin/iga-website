import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/components/og/og-card";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "What we actually do for you — IGA Global Investments";

export default async function Image() {
  return ogImage({
    eyebrow: "Services",
    title: "What we actually do for you",
    meta: "Six advisory & development services",
    image: "images/opp-residential.webp",
  });
}
