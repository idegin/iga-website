import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard } from "@/components/og/og-card";
import { SITE } from "@/lib/site";

export const alt = `${SITE.legalName} — ${SITE.tagline}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Real Estate Investment Advisory"
        title={SITE.tagline}
        meta="Advisory · Development · Nigeria"
      />
    ),
    size,
  );
}
