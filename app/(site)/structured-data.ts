/**
 * Structured data copied verbatim from the live Framer site (its custom-code
 * snippets), so search engines see exactly what they see today.
 */

/** Emitted on every main-site page. */
export const SITE_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://grade.capital/#organization",
        name: "Grade Capital",
        legalName: "Atlantease Ventures Inc",
        url: "https://grade.capital",
        logo: {
          "@type": "ImageObject",
          "@id": "https://grade.capital/#logo",
          url: "https://framerusercontent.com/images/MrzZ5h6uhrEkJHMTQ4BPaI7ep8.png?scale-down-to=512",
          contentUrl: "https://framerusercontent.com/images/MrzZ5h6uhrEkJHMTQ4BPaI7ep8.png?scale-down-to=512",
          width: "512",
          height: "512",
          caption: "Grade Capital",
        },
        image: {
          "@id": "https://grade.capital/#logo",
        },
        description: "Invest in diversified crypto with Grade Capital's derivatives baskets and mutual fund approach.",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "hi@grade.capital",
            telephone: "+91-8058071055",
            availableLanguage: ["English"],
            url: "https://grade.capital/support",
            areaServed: "Worldwide",
          },
          {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            telephone: "+91-9876365657",
            availableLanguage: ["English"],
            areaServed: "IN",
          },
        ],
        address: [
          {
            "@type": "PostalAddress",
            "@id": "https://grade.capital/#address-registered-india",
            name: "Registered Office (India)",
            streetAddress: "704, 7th Floor Sfc 16 Palm Court, Industrial Estate",
            addressLocality: "Gurgaon",
            addressRegion: "Haryana",
            postalCode: "122007",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            "@id": "https://grade.capital/#address-operations-india",
            name: "Operations Office (India)",
            streetAddress: "Office 530, Spaze I Tech, Sector 49",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            postalCode: "122001",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            "@id": "https://grade.capital/#address-usa",
            name: "International Operations (USA)",
            streetAddress: "8 THE GREEN STE, A",
            addressLocality: "Dover",
            addressRegion: "DE",
            postalCode: "19901",
            addressCountry: "US",
          },
        ],
        founder: {
          "@type": "Person",
          name: "Anubhav Aggarwal",
        },
        sameAs: [
          "https://www.linkedin.com/company/gradecapital",
          "https://instagram.com/grade.capital",
          "https://twitter.com/gradecapital",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://grade.capital/#website",
        url: "https://grade.capital",
        name: "Grade Capital",
        publisher: {
          "@id": "https://grade.capital/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": "https://grade.capital/#service",
        name: "Grade Capital Crypto Investment Services",
        provider: {
          "@id": "https://grade.capital/#organization",
        },
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        serviceType: "Cryptocurrency Investment Management",
        category: "Financial Services",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://grade.capital/#website",
    url: "https://grade.capital",
    name: "Grade Capital",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://grade.capital/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    hasPart: [
      {
        "@type": "WebPage",
        name: "Home",
        url: "https://grade.capital",
      },
      {
        "@type": "WebPage",
        name: "Education",
        url: "https://grade.capital/education",
      },
      {
        "@type": "WebPage",
        name: "Support",
        url: "https://grade.capital/support",
      },
      {
        "@type": "WebPage",
        name: "Privacy Policy",
        url: "https://grade.capital/privacy-policy",
      },
      {
        "@type": "WebPage",
        name: "Investor Agreement",
        url: "https://grade.capital/investor-agreement",
      },
      {
        "@type": "WebPage",
        name: "AML & KYC Policy",
        url: "https://grade.capital/anti-laundering",
      },
      {
        "@type": "WebPage",
        name: "Terms of Use",
        url: "https://grade.capital/terms-of-use",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://grade.capital/#organization",
    name: "Grade Capital",
    alternateName: ["Atlantease Ventures", "Grade Capital Crypto"],
    url: "https://grade.capital",
    logo: "https://grade.capital/images/grade-capital-logo.png",
    description:
      "India's first structured crypto derivatives fund. Professionally managed crypto portfolios using futures and options strategies with potential tax advantages under Indian tax law.",
    foundingDate: "2023-01-01",
    founder: {
      "@type": "Person",
      name: "Anubhav Aggarwal",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.wikidata.org/wiki/Q139369923",
      "https://www.linkedin.com/company/grade-capital",
      "https://play.google.com/store/apps/details?id=com.grade.capital",
    ],
    knowsAbout: [
      "cryptocurrency",
      "crypto derivatives",
      "futures trading",
      "options trading",
      "asset management",
      "GIFT City",
      "IFSCA",
      "crypto tax India",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    iso6523Code: "ISO 9001:2015",
  },
];

/** FAQPage schema — Framer emits this on the home page. */
export const HOME_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Grade Capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade Capital is India's first professionally managed crypto derivatives fund. Founded in January 2023 and headquartered in Gurugram with operations in GIFT City, Gujarat, Grade Capital uses futures and options strategies to give Indian investors structured exposure to cryptocurrency markets. The fund is ISO 9001:2015 certified and PMLA compliant, with assets held in Fireblocks institutional custody.",
      },
    },
    {
      "@type": "Question",
      name: "How is investing in Grade Capital different from buying spot crypto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade Capital uses crypto derivatives (futures and options) rather than spot crypto. This means gains may be treated as speculative business income under Sections 43(5) and 73 of the Income Tax Act, potentially taxed at your applicable slab rate ‚Äî instead of the flat 30% VDA tax under Section 115BBH that applies to spot crypto. Additionally, losses can be set off against gains and carried forward for up to 4 years, which is not possible with spot crypto.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum investment in Grade Capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade Capital offers four investment baskets with different durations and risk profiles: Gold and Blue Chip Basket (21 months), Multi Cap Aggressive Basket (30 months), Blue Chip Wealth Sentinel (48 months), and Sentinel Live NAV (12 months). Contact Grade Capital directly at hi@Grade.Capital or call +91 8058071055 for current minimum investment amounts.",
      },
    },
    {
      "@type": "Question",
      name: "How is my money protected in Grade Capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade Capital uses Fireblocks MPC institutional custody ‚Äî the same infrastructure used by 1,800+ global financial institutions. 80% of assets are stored in air-gapped cold storage, 20% in hot wallets for active trading. Fireblocks is certified SOC 2 Type II (audited by EY), ISO 27001, ISO 27017, ISO 27018, and CCSS Level 3. All assets are covered by an A-rated insurance programme. Grade Capital itself is ISO 9001:2015 certified and PMLA compliant with FIU-registered fiat infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What returns has Grade Capital generated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade Capital has published its NAV daily since inception on January 1, 2023. Annual performance: 2023: +215.20%, 2024: +94.48%, 2025: +99.84%, 2026 YTD (as of February 2026): +7.88%. Total return since inception: +1,221.50%. CAGR (USD): 127.67%. Past performance is not a guarantee of future results.",
      },
    },
    {
      "@type": "Question",
      name: "Is Grade Capital regulated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade Capital operates through Gradepro Technologies Private Limited (India) and Atlantease Ventures Inc. (Delaware, USA). The fund is PMLA compliant, FIU registered (OnMeta: VA00032718), ISO 9001:2015 certified, and operates with KYC via HyperVerge. Operations are based in GIFT City IFSC, Gujarat under IFSCA jurisdiction. Grade Capital follows full AML, KYC, and CTF compliance frameworks including OFAC and UN sanctions screening.",
      },
    },
    {
      "@type": "Question",
      name: "Who should invest in Grade Capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade Capital is designed for Indian salaried professionals and HNIs who want managed crypto exposure without the complexity of self-directed trading. It is particularly suited for investors in the 10% or 20% income tax bracket who benefit from the slab-rate taxation of derivatives versus the flat 30% VDA tax on spot crypto. Chartered Accountants and Mutual Fund Distributors can also become Grade Capital advisors to refer clients.",
      },
    },
  ],
};

/** FAQPage schema emitted on /faq. */
export const FAQ_PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Grade Capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade Capital is India's first professionally managed crypto derivatives fund offering fully managed baskets with institutional-grade risk management.",
      },
    },
    {
      "@type": "Question",
      name: "How does investing through Grade Capital work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Complete PAN-linked KYC, select your investment basket, and fund your account. Our professional traders manage your crypto derivatives portfolio with institutional strategies.",
      },
    },
    {
      "@type": "Question",
      name: "What are the minimum investment requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade Capital offers different investment tiers. Contact support or visit our website for the latest minimum investment requirements and basket options.",
      },
    },
    {
      "@type": "Question",
      name: "How is my investment protected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We employ institutional-grade risk management including position sizing, stop-loss mechanisms, and portfolio diversification. Our team monitors positions 24/7.",
      },
    },
    {
      "@type": "Question",
      name: "What are crypto derivatives baskets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professionally curated portfolios of crypto derivative instruments providing diversified exposure through futures, options, and other derivative products.",
      },
    },
    {
      "@type": "Question",
      name: "How can I track my investment performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Track your portfolio performance, returns, and analytics in real-time through your Grade Capital investor dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "What fees does Grade Capital charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade Capital operates on a transparent fee structure. Visit our website or contact support for details on management and performance fees.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Grade Capital support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reach our support team at grade.capital/support for account queries, investment questions, and technical assistance.",
      },
    },
  ],
};
