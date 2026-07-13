export const PLACEHOLDER_LEGAL = true;

export const LEGAL_LAST_UPDATED = "2026-07-13";

export type LegalDoc = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
};

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "How IGA Global Investments Ltd collects, uses, and protects the personal information you share with us.",
    intro:
      "This policy explains what we collect when you use this website or contact us, why we collect it, and what we do with it. It is written to be read, not to be survived.",
    sections: [
      {
        heading: "What we collect",
        paragraphs: [
          "We only collect information you choose to give us, and the minimum needed to respond to you.",
        ],
        list: [
          "Your name, email address, and phone number when you submit the consultation form",
          "The service you express interest in, and the message you write",
          "Your email address if you subscribe to our newsletter",
        ],
      },
      {
        heading: "Why we collect it",
        paragraphs: [
          "To respond to your enquiry, to provide the advisory service you asked for, and to send you insights if you have asked to receive them.",
          "We do not sell your information. We do not share it with third parties for marketing.",
        ],
      },
      {
        heading: "Cookies and third parties",
        paragraphs: [
          "This site does not set advertising or tracking cookies of its own.",
          "The map on our contact page is provided by Google, which sets its own cookies. For that reason the map is not loaded until you explicitly choose to load it. If you never click it, Google is never contacted.",
        ],
      },
      {
        heading: "How long we keep it",
        paragraphs: [
          "We keep enquiry details for as long as is needed to serve you as a client, and no longer than is reasonable thereafter. Newsletter subscriptions are kept until you unsubscribe.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You may ask us what information we hold about you, ask us to correct it, or ask us to delete it. Write to us and we will act on it.",
        ],
      },
    ],
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    description:
      "The terms on which IGA Global Investments Ltd makes this website and its content available to you.",
    intro:
      "By using this website you accept these terms. They are short, and the most important one is the third.",
    sections: [
      {
        heading: "About this website",
        paragraphs: [
          "This site is published by IGA Global Investments Ltd. It describes our advisory and development services and provides general educational material about property investment in Nigeria.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "The content, branding, and design of this site belong to IGA Global Investments Ltd. You may read and share it. You may not reproduce it commercially without our permission.",
        ],
      },
      {
        heading: "Not investment advice",
        paragraphs: [
          "Nothing on this website is personal investment advice, and nothing on it should be acted on as though it were. The articles are general education. They do not know your circumstances, your budget, or your risk tolerance.",
          "Property investment carries risk, including the risk of losing money. Past performance of any market is not a promise about its future. Advice specific to you only begins once we have spoken and understood your position.",
        ],
      },
      {
        heading: "Accuracy",
        paragraphs: [
          "We take care to keep this site accurate, but we do not warrant that every statement is complete or current at the moment you read it. Where a figure matters to a decision, ask us and we will confirm it.",
        ],
      },
      {
        heading: "External links",
        paragraphs: [
          "Where we link to other sites, we are not responsible for their content or their practices.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description:
      "Which cookies this website uses, which it does not, and how third-party embeds are handled.",
    intro:
      "The short version: we do not track you, and we do not let anyone else track you without asking first.",
    sections: [
      {
        heading: "Cookies we set",
        paragraphs: [
          "This website does not set advertising, analytics, or tracking cookies of its own. Nothing here follows you across the internet.",
        ],
      },
      {
        heading: "Third-party embeds",
        paragraphs: [
          "The map on our contact page is served by Google Maps, which sets its own cookies once it loads.",
          "Because of that, we do not load the map automatically. It shows a placeholder with a button, and Google is only contacted if you press it. That choice is yours to make, each time.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "You can clear or block cookies in your browser settings at any time. Doing so will not stop this website from working.",
        ],
      },
    ],
  },
];

export const getLegalDoc = (slug: string) =>
  LEGAL_DOCS.find((doc) => doc.slug === slug);
