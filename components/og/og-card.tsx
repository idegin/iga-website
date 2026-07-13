const ROYAL_950 = "#121e4d";
const ROYAL_800 = "#26428b";
const GOLD_400 = "#e3af64";
const ROYAL_100 = "#e1ebfc";

export const OG_SIZE = { width: 1200, height: 630 };

export function OgCard({
  eyebrow,
  title,
  meta,
}: {
  eyebrow: string;
  title: string;
  meta?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: `linear-gradient(135deg, ${ROYAL_950} 0%, ${ROYAL_800} 100%)`,
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -120,
          bottom: -160,
          width: 620,
          height: 620,
          display: "flex",
          borderRadius: 9999,
          border: `2px solid ${GOLD_400}`,
          opacity: 0.18,
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", width: 44, height: 44 }}>
          <svg width="44" height="44" viewBox="0 0 44 44">
            <path d="M4 4h36v36H24V20H4Z" fill="#ffffff" />
            <rect x="4" y="26" width="14" height="14" fill={GOLD_400} />
          </svg>
        </div>
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
          <div style={{ display: "flex", width: 48, height: 3, background: GOLD_400 }} />
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
            marginTop: 28,
            fontSize: title.length > 70 ? 56 : 68,
            lineHeight: 1.1,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.025em",
            maxWidth: 940,
          }}
        >
          {title}
        </div>

        {meta ? (
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 24,
              color: ROYAL_100,
            }}
          >
            {meta}
          </div>
        ) : null}
      </div>
    </div>
  );
}
