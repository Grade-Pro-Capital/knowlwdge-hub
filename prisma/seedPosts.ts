/**
 * Temporary test data for SEO + GEO APIs.
 * Run: npx tsx prisma/seedPosts.ts
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://blogs.grade.capital";

const CATEGORIES = [
  {
    slug: "analysis",
    name: "Analysis",
    categorySeoTitle: "Crypto Analysis | Grade Capital",
    categorySeoDescription:
      "In-depth crypto and institutional adoption analysis for India. Market trends, regulatory insights, and investment research.",
  },
  {
    slug: "regulation",
    name: "Regulation",
    categorySeoTitle: "Crypto Regulation India | Grade Capital",
    categorySeoDescription:
      "Latest crypto regulation updates in India. Tax, compliance, and policy analysis for institutional and retail investors.",
  },
  {
    slug: "market-updates",
    name: "Market Updates",
    categorySeoTitle: "Crypto Market Updates | Grade Capital",
    categorySeoDescription:
      "Weekly crypto market updates. Bitcoin, Ethereum, and altcoin price analysis and key events.",
  },
  {
    slug: "research",
    name: "Research",
    categorySeoTitle: "Crypto Research | Grade Capital",
    categorySeoDescription:
      "Original crypto and DeFi research. Layer 2, institutional allocation, and market structure studies.",
  },
];

const AUTHORS = [
  {
    slug: "ravi-kumar",
    name: "Ravi Kumar",
    credentials: "Senior Crypto Analyst, CFA",
    bio: "Ravi specializes in institutional crypto adoption and regulatory frameworks. 10+ years in traditional finance, 5 years in digital assets.",
    linkedInUrl: "https://linkedin.com/in/ravi-kumar",
    twitterUrl: "https://twitter.com/ravi_kumar",
  },
  {
    slug: "priya-sharma",
    name: "Priya Sharma",
    credentials: "Market Analyst",
    bio: "Priya covers market dynamics, technical analysis, and macro trends for crypto markets.",
  },
  {
    slug: "ankit-verma",
    name: "Ankit Verma",
    credentials: "Regulatory Research Lead",
    bio: "Ankit tracks crypto regulation across India and APAC. Former compliance professional.",
  },
];

const SAMPLE_CONTENT = `
<p>An estimated 7 trillion USD in conventional assets are sitting in traditional mutual funds in India. But India's crypto economy is just getting started. Institutional adoption of crypto is the next major growth driver in this nascent market, and recent legal developments are paving the way.</p>

<h2 id="institutional-race">The Institutional 'Race' Is On</h2>

<p>Institutions aren't just testing the waters anymore—they're diving in. From pension funds to insurance companies, traditional finance (TradFi) players are beginning to allocate a portion of their portfolios to digital assets.</p>

<p>According to recent data:</p>
<ul>
  <li><strong>Institutional inflows:</strong> Pension funds and endowments have started crypto-market value</li>
  <li><strong>Hedge funds activation:</strong> Dedicated crypto hedge funds now manage over $50 billion AUM</li>
  <li><strong>Corporate treasuries:</strong> Companies like MicroStrategy and Tesla have added Bitcoin to their balance sheets</li>
</ul>

<h2 id="regulation">Regulation: Clarity is No Longer Elusive</h2>

<p>Regulatory clarity is no longer a dream. Recent developments in India have shed light on how crypto will be treated.</p>

<blockquote style="border-left: 4px solid #FDBE35; padding-left: 1.5rem; font-style: italic; color: rgba(255,255,255,0.9); margin: 2rem 0;">
  <p>"Institutional adoption isn't just about FOMO—it's about rigorous due diligence, risk management, and seeking uncorrelated returns"</p>
</blockquote>

<h2 id="conclusion">What This Means for Crypto in India</h2>

<p>The next trillion dollars won't come from retail FOMO. It'll come from pension funds seeking yield, insurance companies diversifying portfolios, and family offices hedging against currency depreciation.</p>
`;

const POSTS = [
  {
    slug: "next-trillion-dollars-crypto-institutions",
    title: "Why the Next Trillion Dollars in Crypto Will Come from Institutions",
    excerpt:
      "First mover in wealth funds is crypto-centric. The institutional recipe will drive the next wave. Here's our thesis on India's institutional crypto adoption.",
    category: "Analysis",
    authorName: "Ravi Kumar",
    authorSlug: "ravi-kumar",
    content: SAMPLE_CONTENT,
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200",
    isProfessional: false,
    published: true,
    tags: ["bitcoin", "institutional", "india"],
    metaTitle: "Institutional Crypto Adoption India 2025 | Grade Capital",
    metaDescription:
      "Explore how institutional investors are driving the next wave of crypto adoption in India. Pension funds, regulatory clarity, and market trends.",
    focusKeyword: "institutional crypto adoption India",
    secondaryKeywords: "pension funds crypto, regulatory clarity India, institutional adoption",
    canonicalUrl: `${BASE_URL}/article/next-trillion-dollars-crypto-institutions`,
    metaRobotsIndex: "index",
    metaRobotsFollow: "follow",
    ogTitle: "Institutional Crypto Adoption India | Grade Capital",
    ogDescription: "Deep dive into institutional crypto trends and India's regulatory path.",
    twitterCardTitle: "Institutional Crypto Adoption India",
    twitterCardDescription: "Pension funds, regulation, and the next trillion in crypto.",
    aiSummary:
      "Institutional investors in India are increasingly allocating to crypto. Recent regulatory clarity and pension fund interest signal a structural shift toward digital asset adoption. This analysis covers key drivers, data, and outlook.",
    keyTakeaways: [
      "Pension funds and endowments have started crypto allocations",
      "Regulatory clarity in India has reduced uncertainty",
      "Diversified portfolios typically limit crypto to 1-5% AUM",
    ],
    authoritativeCitations: [
      { name: "Reserve Bank of India - Crypto Framework", url: "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx" },
      { name: "SEBI Circular on Digital Assets", url: "https://www.sebi.gov.in" },
    ],
    entityTags: ["Bitcoin", "SEBI", "MicroStrategy", "TradFi"],
    contentFreshnessDate: new Date("2025-02-14"),
    expertiseSignals: {
      credentials: "Senior Crypto Analyst, CFA",
      methodology: "Primary research, regulatory filings, on-chain data",
      researchNotes: "Data as of Feb 2025",
    },
    faqs: [
      {
        question: "What is institutional crypto adoption?",
        answer: "Institutional crypto adoption refers to pension funds, hedge funds, and corporations allocating capital to digital assets like Bitcoin and Ethereum.",
      },
      {
        question: "Is crypto regulated in India?",
        answer: "Yes. India has implemented tax guidelines (30% on gains, 1% TDS) and AML/KYC requirements for crypto exchanges.",
      },
    ],
  },
  {
    slug: "bitcoin-february-2025-key-events",
    title: "Bitcoin in February 2026: Key Events to Watch",
    excerpt: "After another volatile start, what are the market events to keep an eye on?",
    category: "Market Updates",
    authorName: "Priya Sharma",
    authorSlug: "priya-sharma",
    content: SAMPLE_CONTENT,
    imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200",
    isProfessional: false,
    published: true,
    tags: ["bitcoin", "market-updates"],
    metaTitle: "Bitcoin February 2026 Events | Grade Capital",
    metaDescription: "Key Bitcoin events and market catalysts to watch in February 2026.",
    focusKeyword: "Bitcoin February 2026",
    aiSummary: "February 2026 brings several catalysts for Bitcoin. This note outlines key events, levels, and what to watch.",
    keyTakeaways: ["ETF flows remain a key driver", "Halving effects may persist", "Macro data could shift sentiment"],
    entityTags: ["Bitcoin", "ETF"],
  },
  {
    slug: "india-crypto-tax-regulator",
    title: "India's Crypto Tax Regulator: What Changed in Budget 2025",
    excerpt: "A brand-new set of tax laws signal policy shift. What do these mean for long-term crypto investors in India?",
    category: "Regulation",
    authorName: "Ankit Verma",
    authorSlug: "ankit-verma",
    content: SAMPLE_CONTENT,
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200",
    isProfessional: true,
    published: true,
    tags: ["regulation", "india", "tax"],
    metaTitle: "India Crypto Tax Budget 2025 | Grade Capital",
    metaDescription: "India's Budget 2025 crypto tax changes explained for investors.",
    focusKeyword: "India crypto tax 2025",
    aiSummary: "Budget 2025 introduced changes to crypto taxation. We break down implications for retail and institutional investors.",
    authoritativeCitations: [
      { name: "Union Budget 2025", url: "https://www.indiabudget.gov.in" },
    ],
    entityTags: ["India", "CBDT", "Crypto"],
  },
  {
    slug: "ethereum-layer-2-comparison",
    title: "Ethereum's Layer 2 Ecosystem: A 2025 Landscape Study",
    excerpt: "Arbitrum, Optimism, and newcomers are still optimizing scalability. We compare gas, speed, and security.",
    category: "Research",
    authorName: "Ravi Kumar",
    authorSlug: "ravi-kumar",
    content: SAMPLE_CONTENT,
    imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1200",
    isProfessional: true,
    published: true,
    tags: ["ethereum", "layer2", "arbitrum", "optimism"],
    metaTitle: "Ethereum Layer 2 Comparison 2025 | Grade Capital",
    metaDescription: "Compare Arbitrum, Optimism, and other L2s. Gas, speed, security analysis.",
    focusKeyword: "Ethereum Layer 2",
    entityTags: ["Ethereum", "Arbitrum", "Optimism"],
    faqs: [
      {
        question: "What is Ethereum Layer 2?",
        answer: "Layer 2 solutions scale Ethereum by processing transactions off the main chain, reducing gas and increasing throughput.",
      },
    ],
  },
];

async function main() {
  console.log("Seeding test data...\n");

  for (const cat of CATEGORIES) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      create: cat,
      update: cat,
    });
    console.log("Category:", cat.name);
  }

  for (const author of AUTHORS) {
    await prisma.author.upsert({
      where: { slug: author.slug },
      create: author,
      update: author,
    });
    console.log("Author:", author.name);
  }

  for (const post of POSTS) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      create: {
        ...post,
        authoritativeCitations: post.authoritativeCitations ?? undefined,
        expertiseSignals: post.expertiseSignals ?? undefined,
        faqs: post.faqs ?? undefined,
      },
      update: {
        ...post,
        authoritativeCitations: post.authoritativeCitations ?? undefined,
        expertiseSignals: post.expertiseSignals ?? undefined,
        faqs: post.faqs ?? undefined,
      },
    });
    console.log("Post:", post.slug);
  }

  console.log("\nDone! Test data seeded.");
  console.log("\nAPI test URLs (start dev server first):");
  console.log("  GET /api/posts");
  console.log("  GET /api/posts?professional=true");
  console.log("  GET /api/posts/next-trillion-dollars-crypto-institutions");
  console.log("  POST /api/posts/next-trillion-dollars-crypto-institutions/view");
  console.log("\nPage URLs:");
  console.log("  /article/next-trillion-dollars-crypto-institutions");
  console.log("  /category/analysis");
  console.log("  /tag/bitcoin");
  console.log("  /author/ravi-kumar");
  console.log("  /sitemap.xml");
  console.log("  /robots.txt");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
