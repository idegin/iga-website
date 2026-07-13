import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Thumbnail } from "@/components/ui/thumbnail";
import { CONTACT_ICONS, UI_ICONS } from "@/lib/icons";
import { CONTACT, SITE } from "@/lib/site";

export function ContactMap() {
  const { street, city, state, country } = CONTACT.address;
  const hasAddress = Boolean(street && city);
  const full = hasAddress
    ? [street, city, state, country].filter(Boolean).join(", ")
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
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-image border border-border shadow-card">
            {query ? (
              <iframe
                title={`Map showing the ${SITE.shortName} office at ${full}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[26rem] w-full border-0 grayscale-25 transition-[filter] duration-500 hover:grayscale-0 md:h-[32rem]"
              />
            ) : (
              <div className="relative flex h-[26rem] items-center justify-center md:h-[32rem]">
                <span aria-hidden className="absolute inset-0">
                  <Thumbnail seed="office-map" variant="grid" palette="mist" />
                </span>
                <div className="relative max-w-sm rounded-card border border-border bg-surface/95 p-8 text-center shadow-card backdrop-blur-sm">
                  <span className="inline-flex rounded-button bg-royal-50 p-3 text-primary">
                    <Icon icon={CONTACT_ICONS.address} size="lg" />
                  </span>
                  <h3 className="mt-5 text-h5 font-semibold">
                    Office address coming soon
                  </h3>
                  <p className="mt-3 text-small text-muted">
                    We are finalising our office details. In the meantime, book a
                    consultation and we will come to you — in person or on a call.
                  </p>
                  <a
                    href="/contact#contact-heading"
                    className="mt-6 inline-flex items-center gap-2 text-small font-semibold text-primary transition-colors duration-200 hover:text-accent-text"
                  >
                    Schedule a Consultation
                    <Icon icon={UI_ICONS.arrowDiagonal} size="sm" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
