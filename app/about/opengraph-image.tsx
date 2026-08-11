import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/components/og/og-card";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Advisors first, developers second — IGA Global Investment";

export default async function Image() {
  return ogImage({
    eyebrow: "About",
    title: "Advisors first, developers second",
    meta: "IGA Global Investment Ltd",
    image: "images/about.webp",
  });
}
