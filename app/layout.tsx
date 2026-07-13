import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { FloatingActions } from "@/components/layout/floating-actions";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { websiteSchema } from "@/lib/schema";
import { CONTACT, SITE, SOCIALS } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Inter", "system-ui", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#26428B",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  manifest: "/manifest.webmanifest",
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.legalName,
    title: SITE.tagline,
    description: SITE.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.tagline,
    description: SITE.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function organizationSchema() {
  const { street, area, city, state, postalCode, country } = CONTACT.address;
  const hasAddress = Boolean(street && city);
  const socials = SOCIALS.filter((s) => s.href).map((s) => s.href);
  const openingHours = CONTACT.hours
    .filter((h) => h.opens && h.closes)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days
        .split("–")
        .map((d) => d.trim())
        .filter(Boolean),
      opens: h.opens,
      closes: h.closes,
    }));

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "RealEstateAgent"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.shortName,
    url: SITE.url,
    description: SITE.description,
    areaServed: { "@type": "Country", name: "Nigeria" },
    ...(SITE.founded ? { foundingDate: SITE.founded } : {}),
    ...(socials.length > 0 && { sameAs: socials }),
    ...(CONTACT.email && { email: CONTACT.email }),
    ...(CONTACT.phone && {
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: CONTACT.phone,
        areaServed: "NG",
        availableLanguage: "English",
      },
    }),
    ...(openingHours.length > 0 && { openingHoursSpecification: openingHours }),
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        streetAddress: [street, area].filter(Boolean).join(", "),
        addressLocality: city,
        addressRegion: state,
        postalCode,
        addressCountry: country,
      },
    }),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), websiteSchema()]),
          }}
        />
      </body>
    </html>
  );
}
