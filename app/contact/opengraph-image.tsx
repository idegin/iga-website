import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/components/og/og-card";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Let's talk about what you are trying to build — IGA Global Investments";

export default async function Image() {
  return ogImage({
    eyebrow: "Contact",
    title: "Let's talk about what you are trying to build",
    meta: "Schedule a consultation",
    image: "images/opp-diaspora.webp",
  });
}
