import { cn } from "@/lib/utils";

export type ThumbnailVariant = "notch" | "grid" | "arcs" | "strata";

export type ThumbnailPalette = {
  background: string;
  foreground: string;
  accent: string;
};

export const PALETTES: Record<string, ThumbnailPalette> = {
  royal: {
    background: "var(--color-royal-800)",
    foreground: "var(--color-royal-600)",
    accent: "var(--color-gold-400)",
  },
  midnight: {
    background: "var(--color-royal-950)",
    foreground: "var(--color-royal-800)",
    accent: "var(--color-gold-300)",
  },
  gold: {
    background: "var(--color-gold-400)",
    foreground: "var(--color-gold-300)",
    accent: "var(--color-royal-900)",
  },
  mist: {
    background: "var(--color-ink-100)",
    foreground: "var(--color-royal-100)",
    accent: "var(--color-royal-800)",
  },
};

const VARIANTS: ThumbnailVariant[] = ["notch", "grid", "arcs", "strata"];
const PALETTE_KEYS = Object.keys(PALETTES);

function hash(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

export function Thumbnail({
  seed,
  label,
  variant,
  palette,
  className,
}: {
  seed: string;
  label?: string;
  variant?: ThumbnailVariant;
  palette?: keyof typeof PALETTES | ThumbnailPalette;
  className?: string;
}) {
  const h = hash(seed);
  const resolvedVariant = variant ?? VARIANTS[h % VARIANTS.length];
  const resolvedPalette =
    typeof palette === "object"
      ? palette
      : PALETTES[palette ?? PALETTE_KEYS[(h >> 3) % PALETTE_KEYS.length]];

  const { background, foreground, accent } = resolvedPalette;

  return (
    <svg
      viewBox="0 0 300 200"
      preserveAspectRatio="xMidYMid slice"
      role={label ? "img" : "presentation"}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("h-full w-full", className)}
    >
      <rect width="300" height="200" fill={background} />

      {resolvedVariant === "notch" ? (
        <g>
          <path
            d="M60 40h150v120h-56V96H60Z"
            fill={foreground}
            opacity="0.55"
          />
          <rect x="60" y="118" width="42" height="42" fill={accent} />
          <path d="M116 40h94v56h-94Z" fill={foreground} opacity="0.35" />
        </g>
      ) : null}

      {resolvedVariant === "grid" ? (
        <g>
          {Array.from({ length: 6 }).map((_, col) =>
            Array.from({ length: 4 }).map((__, row) => {
              const on = (h >> (col * 4 + row)) & 1;
              return (
                <rect
                  key={`${col}-${row}`}
                  x={30 + col * 42}
                  y={24 + row * 40}
                  width="30"
                  height="30"
                  fill={on ? foreground : "transparent"}
                  opacity={on ? 0.6 : 1}
                  stroke={foreground}
                  strokeWidth="1"
                  strokeOpacity="0.4"
                />
              );
            }),
          )}
          <rect
            x={30 + (h % 6) * 42}
            y={24 + ((h >> 5) % 4) * 40}
            width="30"
            height="30"
            fill={accent}
          />
        </g>
      ) : null}

      {resolvedVariant === "arcs" ? (
        <g fill="none" strokeLinecap="round">
          {[40, 72, 104, 136].map((r, i) => (
            <circle
              key={r}
              cx="238"
              cy="176"
              r={r}
              stroke={i === 1 ? accent : foreground}
              strokeWidth={i === 1 ? 4 : 2}
              strokeOpacity={i === 1 ? 1 : 0.5}
            />
          ))}
          <rect x="28" y="140" width="40" height="4" fill={accent} />
        </g>
      ) : null}

      {resolvedVariant === "strata" ? (
        <g>
          {[0, 1, 2, 3, 4].map((i) => {
            const w = 60 + ((h >> (i * 3)) % 9) * 20;
            return (
              <rect
                key={i}
                x="34"
                y={36 + i * 26}
                width={w}
                height="12"
                rx="6"
                fill={i === 2 ? accent : foreground}
                opacity={i === 2 ? 1 : 0.45}
              />
            );
          })}
        </g>
      ) : null}
    </svg>
  );
}
