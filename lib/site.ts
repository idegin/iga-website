export const SITE = {
  name: "IGA Global Investments",
  legalName: "IGA Global Investments Ltd",
  shortName: "IGA Global",
  domain: "www.igaglobalinvestment.org",
  url: "https://www.igaglobalinvestment.org",
  locale: "en_NG",
  tagline: "Building Wealth Through Smart Real Estate Investments",
  description:
    "IGA Global Investments Ltd helps individuals, families, and diaspora investors unlock long-term value through trusted property investment advisory and residential development across Nigeria.",
  shortDescription:
    "Trusted property investment advisory and residential development across Nigeria.",
  keywords: [
    "real estate investment Nigeria",
    "property investment advisory",
    "diaspora property investment",
    "affordable housing Nigeria",
    "residential property development",
    "land banking Nigeria",
  ],
  founded: "",
} as const;

export const PLACEHOLDER_CONTACT_DETAILS = true;

type Contact = {
  isPlaceholder: boolean;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  email: string;
  salesEmail: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    countryCode: string;
  };
  mapUrl: string;
  mapQuery: string;
  hours: { days: string; opens: string; closes: string }[];
};

export const CONTACT: Contact = {
  isPlaceholder: PLACEHOLDER_CONTACT_DETAILS,
  phone: "+234 803 555 0142",
  phoneHref: "tel:+2348035550142",
  whatsapp: "+2348035550142",
  email: "info@igaglobalinvestment.org",
  salesEmail: "invest@igaglobalinvestment.org",
  address: {
    street: "14 Dawaki Crescent",
    area: "Dawaki",
    city: "Abuja",
    state: "FCT",
    postalCode: "901101",
    country: "Nigeria",
    countryCode: "NG",
  },
  mapUrl: "https://maps.google.com/?q=Dawaki,+Abuja,+Nigeria",
  mapQuery: "Dawaki, Abuja, Nigeria",
  hours: [
    { days: "Monday – Friday", opens: "09:00", closes: "17:00" },
    { days: "Saturday", opens: "10:00", closes: "14:00" },
    { days: "Sunday", opens: "", closes: "" },
  ],
};

export type SocialPlatform = "LinkedIn" | "Facebook" | "Instagram" | "X";

export const SOCIALS: { label: SocialPlatform; href: string }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/iga-global-investments",
  },
  { label: "Facebook", href: "https://www.facebook.com/igaglobalinvestments" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/igaglobalinvestments",
  },
  { label: "X", href: "https://x.com/igaglobalinvest" },
];

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Investment Solutions", href: "/investment-solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
] as const;

export const SERVICES = [
  {
    slug: "property-investment-advisory",
    title: "Property Investment Advisory",
    summary: "Helping investors identify profitable opportunities.",
  },
  {
    slug: "residential-property-development",
    title: "Residential Property Development",
    summary: "Developing quality affordable housing.",
  },
  {
    slug: "property-acquisition-consulting",
    title: "Property Acquisition Consulting",
    summary: "Supporting buyers through secure acquisitions.",
  },
  {
    slug: "investment-planning",
    title: "Investment Planning",
    summary: "Helping clients build long-term property portfolios.",
  },
  {
    slug: "market-research",
    title: "Market Research",
    summary: "Providing investment insights backed by market trends.",
  },
  {
    slug: "strategic-partnerships",
    title: "Strategic Partnerships",
    summary: "Working with institutions and developers.",
  },
] as const;

export const CTA = {
  primary: { label: "Schedule a Consultation", href: "/contact" },
  secondary: { label: "Speak With an Investment Advisor", href: "/contact" },
  supporting: { label: "Contact Us", href: "/contact" },
} as const;

export const LEADERSHIP = {
  ceo: {
    name: "Iweka Gabriel Achebe",
    role: "Chief Executive Officer",
  },
} as const;
