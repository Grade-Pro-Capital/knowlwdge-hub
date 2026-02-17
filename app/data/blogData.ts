export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  image: string;
  content?: string;
  isProfessional?: boolean;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "next-trillion-dollars-crypto-institutions",
    title: "Why the Next Trillion Dollars in Crypto Will Come from Institutions",
    excerpt: "First mover in wealth funds is an crypto-centric ... down-fund will be the institutional recipe that will be in the next. Here's our thesis...",
    category: "Analysis",
    readTime: "5 min read",
    author: {
      name: "Ravi Kumar",
      avatar: "",
    },
    publishedAt: "17 minutes",
    image: "institutional finance building",
    isProfessional: false,
    content: `
      <p>An estimated 7 trillion USD in conventional assets are sitting in traditional mutual funds in India. But India's crypto economy is just getting started. Institutional adoption of crypto is the next major growth driver in this nascent market, and recent legal developments are paving the way.</p>

      <h2 id="institutional-race">The Institutional 'Race' Is On: The 'Trillions'</h2>
      
      <p>Institutions aren't just testing the waters anymore—they're diving in. From pension funds to insurance companies, traditional finance (TradFi) players are beginning to allocate a portion of their portfolios to digital assets. The rationale is simple: diversification, higher return potential, and hedge against inflation.</p>
      
      <p>According to recent data:</p>
      <ul>
        <li><strong>Institutional inflows:</strong> Pension funds and endowments have started crypto-market value</li>
        <li><strong>Hedge funds activation:</strong> Dedicated crypto hedge funds now manage over $50 billion AUM</li>
        <li><strong>Corporate treasuries:</strong> Companies like MicroStrategy and Tesla have added Bitcoin to their balance sheets</li>
      </ul>

      <h2 id="regulation">Regulation: Clarity is No Longer Elusive. Here's What's New</h2>
      
      <p>Regulatory clarity is no longer a dream. Recent developments in India have shed light on how crypto will be treated. Key takeaways include:</p>
      
      <ul>
        <li><strong>Clear tax guidelines:</strong> 30% tax on crypto gains and 1% TDS on transactions above INR 10,000</li>
        <li><strong>AML and KYC compliance:</strong> Exchanges are required to implement stringent verification processes</li>
        <li><strong>Securities classification:</strong> Some tokens may be treated as securities, requiring registration</li>
      </ul>

      <blockquote style="border-left: 4px solid #FDBE35; padding-left: 1.5rem; font-style: italic; color: rgba(255,255,255,0.9); margin: 2rem 0;">
        <p>"Institutional adoption isn't just about FOMO—it's about rigorous due diligence, risk management, and seeking uncorrelated returns" said one family office CIO at a recent crypto conference.</p>
      </blockquote>

      <h2 id="volatility">Volatility Shocks and Balance Funds Leading the Charge</h2>
      
      <p>The argument against crypto has always been volatility. But institutional strategies are emerging to mitigate this:</p>
      
      <ul>
        <li><strong>Dollar-cost averaging (DCA):</strong> Institutions build positions gradually</li>
        <li><strong>Hedging strategies:</strong> Using derivatives to limit downside risk</li>
        <li><strong>Diversified portfolios:</strong> Limiting crypto exposure to 1-5% of total AUM</li>
      </ul>

      <p>Volatility is being tamed through sophisticated risk models. Institutions aren't gambling—they're strategically positioned to capture upside while limiting downside.</p>

      <h2 id="conclusion">What This Means for Crypto in India</h2>
      
      <p>The next trillion dollars won't come from retail FOMO. It'll come from:</p>
      
      <ul>
        <li>Pension funds seeking yield</li>
        <li>Insurance companies diversifying portfolios</li>
        <li>Family offices hedging against currency depreciation</li>
        <li>Corporates strengthening balance sheets</li>
      </ul>

      <p>As India's crypto economy matures, institutional participation will be the cornerstone of sustainable growth. The infrastructure is being built. The regulations are becoming clearer. And the institutions? They're just getting started.</p>
    `,
  },
  {
    id: "2",
    slug: "bitcoin-february-2025-key-events",
    title: "Bitcoin in February 2026: Key Events to Watch",
    excerpt: "After another volatile start, what are the market events to keep an eye on?",
    category: "Market Updates",
    readTime: "4 min read",
    author: { name: "Priya Sharma", avatar: "" },
    publishedAt: "2 hours",
    image: "bitcoin cryptocurrency coins",
    isProfessional: false,
  },
  {
    id: "3",
    slug: "stablecoins-facing-global-payment-regulations",
    title: "Stablecoins Are Facing Global Payment Regulations—Here's the Data",
    excerpt: "Why would the needs for their framework include a block from large-scale payment networks on the local operations.",
    category: "Regulation",
    readTime: "6 min read",
    author: { name: "Ankit Verma", avatar: "" },
    publishedAt: "5 hours",
    image: "digital payment technology",
    isProfessional: false,
  },
  {
    id: "4",
    slug: "india-crypto-tax-regulator",
    title: "India's Crypto Tax Regulator: What Changed in Budget 2025",
    excerpt: "A brand-new set of tax laws signal policy shift. What do these mean for long-term crypto investors on India?",
    category: "Regulation",
    readTime: "5 min read",
    author: { name: "Suresh Patel", avatar: "" },
    publishedAt: "1 day",
    image: "legal documents taxation",
    isProfessional: false,
  },
  {
    id: "5",
    slug: "ethereum-layer-2-comparison",
    title: "Ethereum's Layer 2 Ecosystem: A 2025 Landscape Study",
    excerpt: "Arbitrum, Optimism, and newcomers are still optimizing scalability. We compare gas, speed, and security.",
    category: "Research",
    readTime: "8 min read",
    author: { name: "Neha Kapoor", avatar: "" },
    publishedAt: "1 day",
    image: "blockchain network technology",
    isProfessional: false,
  },
  {
    id: "6",
    slug: "institutional-portfolio-crypto-allocation",
    title: "The Case for a 3% Crypto Allocation in Every Indian Portfolio",
    excerpt: "What performance and volatility research demonstrates regarding institutional-scale diversification",
    category: "Analysis",
    readTime: "7 min read",
    author: { name: "Rajesh Iyer", avatar: "" },
    publishedAt: "2 days",
    image: "investment portfolio analysis",
    isProfessional: false,
  },
  {
    id: "7",
    slug: "defi-2025-when-traditional-finance-wakeup",
    title: "DeFi in 2025: When Traditional Finance Has to Wakeup",
    excerpt: "A deeper look into the coming traditional finance-DeFi convergence for India's wealthy",
    category: "Analysis",
    readTime: "6 min read",
    author: { name: "Vikram Singh", avatar: "" },
    publishedAt: "3 days",
    image: "modern architecture building",
    isProfessional: true,
  },
  {
    id: "8",
    slug: "crypto-mutual-funds-india-regulatory-roadmap",
    title: "Crypto Mutual Funds for India: A Regulatory Roadmap",
    excerpt: "We explain the structure, compliance requirements, and investor protections",
    category: "Research",
    readTime: "9 min read",
    author: { name: "Meera Reddy", avatar: "" },
    publishedAt: "4 days",
    image: "financial market data charts",
    isProfessional: true,
  },
];
