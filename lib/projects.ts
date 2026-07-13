export const PLACEHOLDER_PROJECTS = true;

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: string;
  status: "Completed" | "Ongoing" | "Planned";
  summary: string;
  units: string;
  image?: string;
  alt?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "dawaki-heights",
    name: "Dawaki Heights",
    location: "Dawaki, Abuja",
    type: "Residential terraces",
    status: "Ongoing",
    summary:
      "A gated terrace development aimed squarely at first-time buyers and young families priced out of the city centre.",
    units: "24 units",
    image: "/images/opp-development.webp",
    alt: "Modern multi-storey residential apartment development",
  },
  {
    slug: "gwarinpa-courtyards",
    name: "Gwarinpa Courtyards",
    location: "Gwarinpa, Abuja",
    type: "Semi-detached homes",
    status: "Completed",
    summary:
      "Family homes arranged around shared green courtyards, designed so that density never costs the residents their light.",
    units: "16 units",
    image: "/images/opp-residential.webp",
    alt: "Contemporary residential home with landscaped grounds",
  },
  {
    slug: "kubwa-land-bank",
    name: "Kubwa Land Bank",
    location: "Kubwa Expressway, Abuja",
    type: "Serviced land",
    status: "Ongoing",
    summary:
      "Titled, serviced plots released in phases for investors building a position ahead of the corridor's expansion.",
    units: "40 plots",
    image: "/images/opp-land.webp",
    alt: "Residential street at dusk in a developing neighbourhood",
  },
  {
    slug: "lugbe-residences",
    name: "Lugbe Residences",
    location: "Lugbe, Abuja",
    type: "Apartment block",
    status: "Planned",
    summary:
      "A mid-rise apartment scheme intended for rental yield, positioned on an established transport route.",
    units: "32 apartments",
  },
];

export const STANDARDS = [
  {
    title: "Quality",
    body: "Materials and workmanship specified before ground is broken, and inspected against that specification, not against a deadline.",
  },
  {
    title: "Safety",
    body: "Structural and site safety treated as non-negotiable. A schedule is never a reason to accept less.",
  },
  {
    title: "Sustainability",
    body: "Orientation, ventilation, and drainage designed for the climate the building will actually stand in for decades.",
  },
  {
    title: "Affordability",
    body: "Cost engineered in at design stage, where it can be controlled, rather than stripped out of finishes at the end.",
  },
] as const;
