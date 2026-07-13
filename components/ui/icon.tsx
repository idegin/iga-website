import type { LucideIcon, LucideProps } from "lucide-react";

const SIZES = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  display: 40,
} as const;

export type IconSize = keyof typeof SIZES;

export type IconProps = Omit<LucideProps, "size" | "ref"> & {
  icon: LucideIcon;
  size?: IconSize;
  label?: string;
};

export function Icon({
  icon: Glyph,
  size = "md",
  label,
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <Glyph
      size={SIZES[size]}
      strokeWidth={strokeWidth}
      absoluteStrokeWidth
      focusable="false"
      {...(label
        ? { role: "img", "aria-label": label }
        : { "aria-hidden": true })}
      {...props}
    />
  );
}
