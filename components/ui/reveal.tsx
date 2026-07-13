"use client";

import { motion, useReducedMotion } from "motion/react";

type Direction = "up" | "left" | "right" | "scale";

const OFFSETS: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 28 },
  left: { x: 32 },
  right: { x: -32 },
  scale: { scale: 0.96 },
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;
  const Static = as === "li" ? "li" : "div";

  if (reduce) return <Static className={className}>{children}</Static>;

  return (
    <Tag
      data-reveal
      className={className}
      initial={{ opacity: 0, ...OFFSETS[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Tag>
  );
}
