export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image?: string;
  alt?: string;
  readingMinutes: number;
  publishedAt: string;
  updatedAt?: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const CATEGORIES = [
  "Investment",
  "Housing",
  "Finance",
  "Market Trends",
  "Development",
  "Tips",
] as const;

export const ARTICLES: Article[] = [
  {
    slug: "how-to-start-investing-in-nigerian-real-estate",
    publishedAt: "2026-04-14",
    title: "How to start investing in Nigerian real estate",
    category: "Investment",
    excerpt:
      "You do not need a fortune to begin. You need a clear objective, a verified title, and the discipline to walk away from a bad deal.",
    image: "/images/insight-1.webp",
    alt: "Reviewing investment figures with a laptop and calculator",
    readingMinutes: 6,
    body: [
      {
        paragraphs: [
          "Most people who lose money in Nigerian property do not lose it because the market turned. They lose it because they bought something they did not understand, from someone they did not check, in a place they had not visited.",
          "Starting well is less about capital than it is about sequence. Get the order right and a modest first investment can compound for decades. Get it wrong and no amount of money protects you.",
        ],
      },
      {
        heading: "Decide what the money is for",
        paragraphs: [
          "An investment property and a family home are different purchases, and they reward different decisions. Rental income wants tenants, transport links, and steady demand. Long-term appreciation can tolerate a quieter location that the city is growing toward. A home you intend to live in answers to neither.",
          "Write down which one you are doing before you look at a single listing. It is the question that determines every other answer, and it is the one most buyers skip.",
        ],
      },
      {
        heading: "Verify the title before anything else",
        paragraphs: [
          "In Nigeria, title is where deals quietly fail. A property can be genuinely attractive and still be unsellable, encumbered, or subject to a claim you will inherit the moment you pay.",
          "Confirm what document exists, who holds it, and whether it is registered. Confirm the seller is entitled to sell. Do this through a professional, and do it before you pay a deposit, not after. A verification that costs a little now is the cheapest insurance you will ever buy.",
        ],
      },
      {
        heading: "Buy the location, not the brochure",
        paragraphs: [
          "Renderings are marketing. What determines value is access: roads, power, water, schools, and the direction the city is actually expanding.",
          "Visit at different times of day. Look at what is being built nearby. Ask what the area looked like five years ago. The trend tells you more than any single snapshot.",
        ],
      },
      {
        heading: "Be willing to wait",
        paragraphs: [
          "Property rewards patience and punishes urgency. Pressure to decide today is almost always the seller's interest, not yours.",
          "If the numbers do not work, the correct move is to do nothing. The deal you decline is often worth more than the one you rush.",
        ],
      },
    ],
  },
  {
    slug: "why-real-estate-holds-value-against-inflation",
    publishedAt: "2026-05-06",
    title: "Why real estate holds value against inflation",
    category: "Finance",
    excerpt:
      "Cash quietly loses purchasing power. Property, land, and rent tend to reprice with the currency, which is why it remains a durable store of value.",
    image: "/images/insight-2.webp",
    alt: "Modern residential property with pool and terrace",
    readingMinutes: 5,
    body: [
      {
        paragraphs: [
          "Inflation is a tax nobody votes for. Money left idle buys less each year, and the loss is invisible because the number in the account never changes.",
          "Property behaves differently, and understanding why is the difference between hoping and reasoning.",
        ],
      },
      {
        heading: "It is a real asset, not a promise",
        paragraphs: [
          "Cash is a claim denominated in a currency. When the currency weakens, the claim weakens with it. A building is not a claim. It is a physical thing that people need regardless of what the currency is doing.",
          "Because the replacement cost of that thing rises with inflation, as cement, steel, labour, and land all reprice, the value of the existing building tends to rise with it.",
        ],
      },
      {
        heading: "Rent adjusts",
        paragraphs: [
          "Income from property is not fixed in the way a savings rate is. Rents are renegotiated, and they are renegotiated in the money of the day.",
          "That means a well-let property can produce an income stream that moves with prices instead of falling behind them.",
        ],
      },
      {
        heading: "Demand is structural",
        paragraphs: [
          "The durability of Nigerian residential property does not rest on sentiment. It rests on a young, growing, rapidly urbanising population that needs somewhere to live, and on a supply of quality housing that has not kept pace.",
          "Demand of that kind does not evaporate in a bad quarter.",
        ],
      },
      {
        heading: "The caveats matter",
        paragraphs: [
          "None of this makes property a guarantee. A badly chosen property in a place nobody wants to live will not be rescued by inflation. Illiquidity is real: you cannot sell a house in an afternoon. Title problems destroy value completely.",
          "The protection comes from the asset being well chosen and properly verified. Inflation rewards the property, not the purchase.",
        ],
      },
    ],
  },
  {
    slug: "buying-property-safely-what-to-verify-first",
    publishedAt: "2026-05-28",
    title: "Buying property safely: what to verify first",
    category: "Tips",
    excerpt:
      "Most property disputes are not bad luck. They are the predictable result of checks that were never carried out.",
    image: "/images/insight-3.webp",
    alt: "Interior of a contemporary, well-finished living room",
    readingMinutes: 5,
    body: [
      {
        paragraphs: [
          "A property transaction has a small number of failure points, and they are well known. The reason people still fall into them is that verification feels like friction at exactly the moment everyone is enthusiastic.",
          "Slow down at that moment. It is the most valuable thing you can do.",
        ],
      },
      {
        heading: "Who owns it, really",
        paragraphs: [
          "Establish the chain of ownership, not just the person standing in front of you. Family land sold by one member without the consent of others is one of the most common sources of dispute, and it can surface years later.",
          "Ask for the document. Confirm the document is genuine. Confirm the person selling is entitled to sell.",
        ],
      },
      {
        heading: "What the document actually is",
        paragraphs: [
          "Not all paper is equal. A receipt is not a title. An allocation letter is not a deed. Understand precisely what you are being offered and what protection it does and does not give you.",
          "If a seller is vague about this, treat the vagueness itself as the finding.",
        ],
      },
      {
        heading: "Whether the land is free",
        paragraphs: [
          "Check for encumbrances: existing charges, government acquisition, ongoing litigation, or planning restrictions. A property under acquisition can look completely ordinary from the roadside.",
          "This is a search, not a conversation. It is carried out at the registry, by someone who knows what they are looking for.",
        ],
      },
      {
        heading: "Never pay before you check",
        paragraphs: [
          "Deposits create pressure to proceed. Once money is committed, buyers rationalise. The sequence that protects you is verification first, payment second, without exception, no matter how attractive the deal or how short the deadline.",
          "A seller who will not permit that sequence is telling you something important.",
        ],
      },
    ],
  },
  {
    slug: "common-property-investment-mistakes",
    publishedAt: "2026-06-18",
    title: "The investment mistakes we see most often",
    category: "Investment",
    excerpt:
      "Buying on emotion, skipping verification, ignoring the total cost, and chasing a location because someone else did well there.",
    readingMinutes: 4,
    body: [
      {
        paragraphs: [
          "The mistakes are remarkably consistent. Almost none of them are exotic, and almost all of them are avoidable.",
        ],
      },
      {
        heading: "Buying because someone else did well",
        paragraphs: [
          "A friend's return in an area three years ago tells you what that area was, not what it is. The entry price has moved, and the opportunity may already have been taken.",
          "Copying an outcome is not a strategy. Understanding why it worked might be.",
        ],
      },
      {
        heading: "Treating the deposit as the decision",
        paragraphs: [
          "Buyers routinely commit money to hold a property and only then begin serious checks. By that point the incentive has flipped: you are now motivated to find reasons it is fine.",
          "Do the work while you are still willing to walk away.",
        ],
      },
      {
        heading: "Ignoring the total cost",
        paragraphs: [
          "The purchase price is not the cost. Legal fees, agency fees, documentation, development levies, finishing, and maintenance all sit on top of it.",
          "An investment that only works if none of these exist does not work.",
        ],
      },
      {
        heading: "Confusing a home with an investment",
        paragraphs: [
          "It is entirely reasonable to buy a home you love. It is not reasonable to expect that the things you love about it are the things that will produce a return.",
          "Be honest about which purchase you are making. Both are valid. Pretending one is the other is what causes disappointment.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) =>
  ARTICLES.find((article) => article.slug === slug);
