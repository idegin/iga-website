"use client";

import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { UI_ICONS, VALUE_ICONS } from "@/lib/icons";
import { CTA } from "@/lib/site";
import { cn } from "@/lib/utils";

const TRUST = [
  { label: "Trusted Investment Advisory", icon: VALUE_ICONS.integrity },
  { label: "Residential Development", icon: VALUE_ICONS.community },
  { label: "Affordable Housing", icon: VALUE_ICONS.affordability },
  { label: "Professional Excellence", icon: VALUE_ICONS.team },
];

const STATS = [
  { value: "15+", label: "Years of combined experience" },
  { value: "6", label: "Advisory & development services" },
  { value: "100%", label: "Client-led investment strategy" },
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    video.play().catch(() => {});
    if (video.readyState >= 3) setReady(true);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden bg-royal-950 pt-28 pb-14 sm:pt-32 sm:pb-16"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url(/video/hero-poster.jpg)" }}
      />

      <video
        ref={videoRef}
        aria-hidden
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/hero-poster.jpg"
        onCanPlay={() => setReady(true)}
        className={cn(
          "absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-1000 ease-standard motion-reduce:hidden",
          ready ? "opacity-100" : "opacity-0",
        )}
      >
        <source src="/video/hero-ambient.webm" type="video/webm" />
        <source src="/video/hero-ambient.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-br from-royal-950/95 via-royal-900/80 to-royal-800/60"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-linear-to-t from-royal-950 to-transparent"
      />

      <div className="container-page">
        <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow text-gold-400 before:bg-gold-400">
              Real Estate Investment Advisory
            </p>

            <h1
              id="hero-heading"
              className="mt-6 text-hero font-bold text-white"
            >
              Building Wealth Through Smart Real Estate Investments
            </h1>

            <p className="measure mt-6 text-body-lg text-royal-100">
              We help individuals, families, and diaspora investors unlock
              long-term value through trusted property investment advisory and
              residential development across Nigeria.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink
                href={CTA.primary.href}
                variant="gold"
                size="xl"
                icon={UI_ICONS.arrow}
              >
                {CTA.primary.label}
              </ButtonLink>
              <ButtonLink href="/services" variant="onDark" size="xl">
                Explore Our Services
              </ButtonLink>
            </div>
          </div>

          <aside
            aria-label="At a glance"
            className="lg:col-span-5 lg:justify-self-end"
          >
            <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-card border border-white/15 bg-white/10 backdrop-blur-md lg:grid-cols-1 lg:gap-0">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-royal-950/30 px-5 py-6 lg:px-7"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="numeric block text-h3 font-bold text-gold-400">
                      {stat.value}
                    </span>
                    <span
                      aria-hidden
                      className="mt-1 block text-caption text-royal-100"
                    >
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-4 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 text-small text-royal-100"
            >
              <Icon icon={item.icon} size="md" className="shrink-0 text-gold-400" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
