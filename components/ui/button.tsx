import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Icon } from "./icon";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "gold" | "onDark" | "ghost";
type Size = "md" | "lg" | "xl";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-hover shadow-card hover:shadow-card-hover",
  secondary:
    "border border-primary bg-surface text-primary hover:bg-primary hover:text-on-primary",
  gold: "bg-accent text-on-accent hover:bg-accent-hover shadow-card hover:shadow-card-hover",
  onDark:
    "border border-white/35 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-royal-800 hover:border-white",
  ghost: "text-primary hover:text-accent-text",
};

const SIZES: Record<Size, string> = {
  md: "h-11 px-5 text-small",
  lg: "h-13 px-7 text-small",
  xl: "h-14 px-8 text-body",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  className?: string;
  children: React.ReactNode;
};

function classes({ variant = "primary", size = "lg", className }: BaseProps) {
  return cn(
    "inline-flex items-center justify-center gap-2.5 rounded-button font-semibold",
    "transition-[background-color,color,box-shadow,border-color,transform] duration-200 ease-standard",
    "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5",
    VARIANTS[variant],
    SIZES[size],
    className,
  );
}

export function ButtonLink({
  href,
  icon,
  children,
  ...rest
}: BaseProps & { href: string }) {
  return (
    <Link href={href} className={classes({ icon, children, ...rest })}>
      {children}
      {icon ? <Icon icon={icon} size="sm" /> : null}
    </Link>
  );
}

export function Button({
  icon,
  children,
  type = "button",
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { variant, size, className, ...native } = rest;
  return (
    <button
      type={type}
      className={classes({ variant, size, className, icon, children })}
      {...native}
    >
      {children}
      {icon ? <Icon icon={icon} size="sm" /> : null}
    </button>
  );
}
