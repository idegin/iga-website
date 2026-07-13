"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Thumbnail } from "@/components/ui/thumbnail";
import { CONTACT_ICONS, UI_ICONS } from "@/lib/icons";
import { CONTACT, SITE } from "@/lib/site";

const FRAME = "h-[26rem] w-full md:h-[32rem]";

export function ContactMap() {
  const [loaded, setLoaded] = useState(false);

  const { street, area, city, state, country } = CONTACT.address;
  const hasAddress = Boolean(street && city);
  const full = hasAddress
    ? [street, area, city, state, country].filter(Boolean).join(", ")
    : "";
  const query = CONTACT.mapQuery || full;

  return (
    <section aria-labelledby="map-heading" className="section bg-surface pt-0">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Visit us</p>
          <h2 id="map-heading" className="mt-5 text-h2">
            Where to find us
          </h2>
          {hasAddress ? (
            <address className="measure mt-5 text-body-lg not-italic text-muted">
              {full}
            </address>
          ) : null}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-image border border-border shadow-card">
            {query && loaded ? (
              <iframe
                title={`Map showing the ${SITE.shortName} office at ${full || query}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`${FRAME} border-0`}
              />
            ) : (
              <div className={`relative flex items-center justify-center ${FRAME}`}>
                <span aria-hidden className="absolute inset-0">
                  <Thumbnail seed="office-map" variant="grid" palette="mist" />
                </span>

                <div className="relative max-w-sm rounded-card border border-border bg-surface/95 p-8 text-center shadow-card backdrop-blur-sm">
                  <span className="inline-flex rounded-button bg-royal-50 p-3 text-primary">
                    <Icon icon={CONTACT_ICONS.address} size="lg" />
                  </span>

                  {query ? (
                    <>
                      <h3 className="mt-5 text-h5 font-semibold">
                        View our office on the map
                      </h3>
                      <p className="mt-3 text-small text-muted">
                        The map is loaded from Google, which sets its own cookies.
                        We only load it when you ask us to.
                      </p>
                      <button
                        type="button"
                        onClick={() => setLoaded(true)}
                        className="mt-6 inline-flex h-11 items-center gap-2 rounded-button bg-primary px-6 text-small font-semibold text-on-primary transition-colors duration-200 hover:bg-primary-hover"
                      >
                        Load the map
                        <Icon icon={UI_ICONS.arrow} size="sm" />
                      </button>
                      {CONTACT.mapUrl ? (
                        <a
                          href={CONTACT.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-caption font-semibold text-muted transition-colors duration-200 hover:text-primary"
                        >
                          Open in Google Maps
                          <Icon icon={UI_ICONS.arrowDiagonal} size="sm" />
                        </a>
                      ) : null}
                    </>
                  ) : (
                    <>
                      <h3 className="mt-5 text-h5 font-semibold">
                        Office address coming soon
                      </h3>
                      <p className="mt-3 text-small text-muted">
                        We are finalising our office details. In the meantime, book
                        a consultation and we will come to you.
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
