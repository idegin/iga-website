import { SERVICE_ICONS, VALUE_ICONS } from "./icons";

export const MISSION =
  "To develop high-quality, affordable properties that meet the housing needs of individuals and families, while fostering economic growth, enhancing communities, and providing exceptional value through integrity, innovation and professional excellence.";

export const VISION =
  "To be a globally trusted and leading real estate development company, recognized for excellence in property acquisition, investment advisory, and wealth creation that transforms communities by delivering innovative, sustainable and affordable housing solutions.";

export const SERVICE_DETAIL = [
  {
    slug: "property-investment-advisory",
    title: "Property Investment Advisory",
    summary:
      "We help investors identify opportunities that hold their value, and walk through the numbers before a naira is committed.",
    icon: SERVICE_ICONS["property-investment-advisory"],
  },
  {
    slug: "residential-property-development",
    title: "Residential Property Development",
    summary:
      "Quality, affordable housing built to standards that families can rely on for a generation.",
    icon: SERVICE_ICONS["residential-property-development"],
  },
  {
    slug: "property-acquisition-consulting",
    title: "Property Acquisition Consulting",
    summary:
      "Title verification, due diligence, and negotiation support, so a purchase is secure before it is signed.",
    icon: SERVICE_ICONS["property-acquisition-consulting"],
  },
  {
    slug: "investment-planning",
    title: "Investment Planning",
    summary:
      "Long-term portfolio building matched to your horizon, your budget, and the life you are planning for.",
    icon: SERVICE_ICONS["investment-planning"],
  },
  {
    slug: "market-research",
    title: "Market Research",
    summary:
      "Decisions grounded in demand, pricing, and growth data rather than speculation or hearsay.",
    icon: SERVICE_ICONS["market-research"],
  },
  {
    slug: "strategic-partnerships",
    title: "Strategic Partnerships",
    summary:
      "We work alongside institutions, landowners, and developers to bring larger projects to completion.",
    icon: SERVICE_ICONS["strategic-partnerships"],
  },
] as const;

export const VALUES = [
  {
    title: "Integrity",
    body: "Honesty, transparency, and ethical business practice in every transaction.",
    icon: VALUE_ICONS.integrity,
  },
  {
    title: "Excellence",
    body: "Quality developments and service that holds up to scrutiny.",
    icon: VALUE_ICONS.team,
  },
  {
    title: "Affordability",
    body: "Making home ownership and property investment reachable for more people.",
    icon: VALUE_ICONS.affordability,
  },
  {
    title: "Innovation",
    body: "Modern approaches to development and to the client experience.",
    icon: VALUE_ICONS.innovation,
  },
  {
    title: "Sustainability",
    body: "Environmentally responsible, resilient communities built to last.",
    icon: VALUE_ICONS.sustainability,
  },
  {
    title: "Community Impact",
    body: "Contributing to social and economic development beyond the buildings.",
    icon: VALUE_ICONS.community,
  },
] as const;

export const OPPORTUNITIES = [
  {
    title: "Residential Investments",
    body: "Income-generating homes in areas with real, sustained demand.",
    image: "/images/opp-residential.webp",
    alt: "Contemporary residential home with a landscaped pool terrace",
  },
  {
    title: "Land Banking",
    body: "Acquiring land early in the growth curve and holding it for appreciation.",
    image: "/images/opp-land.webp",
    alt: "Residential street at dusk in a developing neighbourhood",
  },
  {
    title: "Joint Venture Opportunities",
    body: "Partnering capital with land and expertise on shared-return projects.",
    image: "/images/opp-joint-venture.webp",
    alt: "Professional team reviewing a project together in a modern office",
  },
  {
    title: "Development Partnerships",
    body: "Working with developers and institutions on larger residential schemes.",
    image: "/images/opp-development.webp",
    alt: "Modern multi-storey residential apartment block",
  },
  {
    title: "Diaspora Investment Advisory",
    body: "Investing in Nigerian property from abroad, with someone accountable on the ground.",
    image: "/images/opp-diaspora.webp",
    alt: "Bright modern office interior with floor-to-ceiling glazing",
  },
  {
    title: "Retirement Property Planning",
    body: "Building a property base now that supports you when the income stops.",
    image: "/images/opp-retirement.webp",
    alt: "Calm, well-appointed residential living space",
  },
] as const;

export const PROCESS = [
  {
    title: "Consultation",
    body: "We start by understanding what you are trying to achieve, and what you are working with.",
  },
  {
    title: "Needs Assessment",
    body: "Budget, timeline, risk appetite, and goals, examined honestly before anything is recommended.",
  },
  {
    title: "Investment Strategy",
    body: "A written approach matched to your position, not a product we happen to be selling.",
  },
  {
    title: "Property Acquisition",
    body: "Due diligence, title verification, and negotiation support through to completion.",
  },
  {
    title: "Development Support",
    body: "Oversight through build, delivery, and handover, with progress you can actually see.",
  },
  {
    title: "Long-term Value Growth",
    body: "Ongoing portfolio review as the market, and your life, move forward.",
  },
] as const;

export const NIGERIA_DRIVERS = [
  {
    title: "Growing Population",
    body: "One of the fastest-growing populations in the world, and every household needs somewhere to live.",
    icon: VALUE_ICONS.growth,
  },
  {
    title: "Housing Demand",
    body: "Demand for quality housing continues to outpace delivery across major cities.",
    icon: VALUE_ICONS.community,
  },
  {
    title: "Urban Expansion",
    body: "Cities are expanding outward, turning today's periphery into tomorrow's centre.",
    icon: VALUE_ICONS.innovation,
  },
  {
    title: "Long-term Appreciation",
    body: "Well-selected property has historically been a durable store of value against inflation.",
    icon: VALUE_ICONS.affordability,
  },
] as const;

export const INSIGHTS = [
  {
    title: "How to start investing in Nigerian real estate",
    category: "Investment",
    href: "/insights",
    image: "/images/insight-1.webp",
    alt: "Reviewing investment figures with a laptop and calculator",
  },
  {
    title: "Why real estate holds value against inflation",
    category: "Finance",
    href: "/insights",
    image: "/images/insight-2.webp",
    alt: "Modern residential property with pool and terrace",
  },
  {
    title: "Buying property safely: what to verify first",
    category: "Tips",
    href: "/insights",
    image: "/images/insight-3.webp",
    alt: "Interior of a contemporary, well-finished living room",
  },
] as const;

export const FAQS = [
  {
    q: "How do I begin investing with IGA Global?",
    a: "It begins with a consultation. We look at your budget, your timeline, and what you want the investment to do for you, then set out the options honestly, including the ones that are not right for you.",
  },
  {
    q: "Do you work with Nigerians living abroad?",
    a: "Yes. Diaspora advisory is a core part of what we do. We act as accountable representation on the ground: verifying title, assessing the property, and reporting on progress so that you are not relying on distance and goodwill.",
  },
  {
    q: "Can first-time buyers invest, or is this only for large investors?",
    a: "First-time buyers are welcome. Affordability is one of our stated values, and part of the advisory work is finding an entry point that is realistic for you rather than pushing you beyond it.",
  },
  {
    q: "Do you build properties yourselves, or only advise?",
    a: "Both. Alongside investment advisory we develop residential property, and we support clients through the build and handover of projects we are involved in.",
  },
  {
    q: "What does a consultation actually involve?",
    a: "A conversation, not a sales pitch. We assess your position, explain how the market currently behaves, and set out what a sensible strategy would look like. You leave with a clearer picture whether or not you proceed with us.",
  },
] as const;
