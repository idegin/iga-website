import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

const ROYAL_950 = "#121e4d";
const ROYAL_900 = "#1c316f";
const GOLD_400 = "#e3af64";
const ROYAL_100 = "#e1ebfc";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

async function asset(relativePath: string, width?: number) {
  try {
    const file = await readFile(
      path.join(process.cwd(), "public", relativePath),
    );
    const ext = path.extname(relativePath).slice(1).toLowerCase();

    if (ext === "png" && !width) {
      return `data:image/png;base64,${file.toString("base64")}`;
    }

    const sharp = (await import("sharp")).default;
    const pipeline = sharp(file);
    const resized = width
      ? pipeline
          .resize(width, undefined, { withoutEnlargement: true })
          .blur(20)
          .modulate({ brightness: 0.62, saturation: 0.8 })
      : pipeline;

    if (ext === "png") {
      const png = await resized.png().toBuffer();
      return `data:image/png;base64,${png.toString("base64")}`;
    }

    const jpeg = await resized.jpeg({ quality: 72 }).toBuffer();
    return `data:image/jpeg;base64,${jpeg.toString("base64")}`;
  } catch {
    return null;
  }
}

export async function ogImage({
  eyebrow,
  title,
  meta,
  image,
}: {
  eyebrow: string;
  title: string;
  meta?: string;
  image?: string;
}) {
  const [background, mark] = await Promise.all([
    image ? asset(image, OG_SIZE.width) : Promise.resolve(null),
    asset("brand/IGA Icon white.png"),
  ]);

  const fontSize = title.length > 78 ? 52 : title.length > 52 ? 60 : 70;

  return new ImageResponse(
    (
      <div
        style={{
          width: OG_SIZE.width,
          height: OG_SIZE.height,
          display: "flex",
          position: "relative",
          background: ROYAL_950,
          fontFamily: "sans-serif",
        }}
      >
        {background ? (
          <img
            src={background}
            width={OG_SIZE.width}
            height={OG_SIZE.height}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: OG_SIZE.width,
              height: OG_SIZE.height,
              objectFit: "cover",
            }}
          />
        ) : null}

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: OG_SIZE.width,
            height: OG_SIZE.height,
            display: "flex",
            background: background
              ? `linear-gradient(105deg, ${ROYAL_950} 22%, rgba(18,30,77,0.92) 52%, rgba(28,49,111,0.72) 100%)`
              : `linear-gradient(135deg, ${ROYAL_950} 0%, ${ROYAL_900} 100%)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 190,
            left: 760,
            width: 640,
            height: 640,
            display: "flex",
            borderRadius: 9999,
            border: `2px solid ${GOLD_400}`,
            opacity: 0.2,
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: OG_SIZE.width,
            height: OG_SIZE.height,
            padding: 72,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {mark ? (
              <img
                src={mark}
                width={46}
                height={46}
                style={{ display: "flex" }}
              />
            ) : null}
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.01em",
              }}
            >
              IGA Global Investments
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  width: 48,
                  height: 3,
                  background: GOLD_400,
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: GOLD_400,
                }}
              >
                {eyebrow}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 26,
                fontSize,
                lineHeight: 1.1,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.025em",
                maxWidth: 880,
              }}
            >
              {title}
            </div>

            {meta ? (
              <div
                style={{
                  display: "flex",
                  marginTop: 24,
                  fontSize: 24,
                  color: ROYAL_100,
                }}
              >
                {meta}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
