import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { UI_ICONS } from "@/lib/icons";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt?: string;
}) {
  return (
    <section
      aria-labelledby="page-heading"
      className="surface-blue relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      <Image
        src={image}
        alt={imageAlt}
        aria-hidden={imageAlt === "" ? true : undefined}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-25"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-br from-royal-950 via-royal-900/95 to-royal-800/80"
      />

      <div className="container-page">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-caption text-royal-200">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden className="flex items-center">
                <Icon icon={UI_ICONS.arrow} size="sm" />
              </li>
              <li aria-current="page" className="text-accent">
                {eyebrow}
              </li>
            </ol>
          </nav>

          <h1 id="page-heading" className="mt-8 max-w-4xl text-hero text-white">
            {title}
          </h1>
          <p className="measure mt-6 text-body-lg text-royal-100">{lead}</p>
        </Reveal>
      </div>
    </section>
  );
}
