# SEO + GEO Implementation Reference

## 1. Folder Structure

```
app/
├── article/[slug]/page.tsx      # Clean URL: /article/[slug]
├── blog/[slug]/page.tsx         # Redirects to /article/[slug]
├── category/[slug]/page.tsx     # /category/[slug]
├── tag/[slug]/page.tsx          # /tag/[slug]
├── author/[slug]/page.tsx       # /author/[slug]
├── sitemap.ts                   # Auto-generated sitemap.xml
├── robots.ts                    # robots.txt
├── layout.tsx
├── page.tsx
├── components/
│   ├── Breadcrumb.tsx           # JSON-LD breadcrumb
│   ├── ArticleGeo.tsx           # AI summary, TL;DR, citations, author
│   ├── RelatedArticles.tsx
│   ├── JsonLdScript.tsx
│   └── ImageWithFallback.tsx
└── lib/
    ├── seo.ts                   # absoluteUrl, slugify, validation
    ├── jsonLd.ts                # Article, Breadcrumb, FAQ, Author schemas
    ├── readingTime.ts           # calculateReadingTime(), countWords()
    └── types.ts                 # Citation, ExpertiseSignals, FaqItem
prisma/
└── schema.prisma                # Post, Category, Author models
```

## 2. Database Schema (Prisma)

```prisma
model Post {
  id                     String     @id @default(auto()) @map("_id") @db.ObjectId
  slug                   String     @unique
  title                  String
  excerpt                String
  category               String
  readTime               String?
  authorName             String
  authorSlug             String?
  authorAvatar           String?
  publishedAt            DateTime   @default(now())
  imageUrl               String?
  imageKey               String?
  content                String?
  tags                   String[]   @default([])
  // SEO
  metaTitle              String?    // max 60 chars
  metaDescription        String?    // max 160 chars
  focusKeyword           String?
  secondaryKeywords      String?
  canonicalUrl           String?
  metaRobotsIndex        String?
  metaRobotsFollow       String?
  ogTitle                String?
  ogDescription          String?
  ogImage                String?
  twitterCardTitle       String?
  twitterCardDescription String?
  twitterCardImage       String?
  // GEO
  aiSummary              String?
  keyTakeaways           String[]   @default([])
  authoritativeCitations Json?
  entityTags             String[]   @default([])
  contentFreshnessDate   DateTime?
  expertiseSignals       Json?
  faqs                   Json?
  // ...
}

model Category {
  slug                   String   @unique
  name                   String
  categorySeoTitle       String?
  categorySeoDescription String?
}

model Author {
  slug              String   @unique
  name              String
  bio               String?
  credentials       String?
}
```

## 3. Example Article Object

```json
{
  "slug": "institutional-crypto-adoption-india",
  "title": "Why the Next Trillion Dollars in Crypto Will Come from Institutions",
  "excerpt": "Institutional adoption of crypto is the next major growth driver...",
  "category": "Analysis",
  "readTime": "5 min read",
  "authorName": "Ravi Kumar",
  "authorSlug": "ravi-kumar",
  "metaTitle": "Institutional Crypto Adoption India 2025 | Grade Capital",
  "metaDescription": "Explore how institutional investors are driving the next wave of crypto adoption in India. Analysis of pension funds, regulatory clarity, and market trends.",
  "focusKeyword": "institutional crypto adoption India",
  "secondaryKeywords": "pension funds crypto, regulatory clarity India",
  // "canonicalUrl": "https://blogs.grade.capital/article/institutional-crypto-adoption-india",
  "metaRobotsIndex": "index",
  "metaRobotsFollow": "follow",
  "ogTitle": "Institutional Crypto Adoption India | Grade Capital",
  "ogDescription": "Deep dive into institutional crypto trends...",
  "aiSummary": "Institutional investors in India are increasingly allocating to crypto. Recent regulatory clarity and pension fund interest signal a structural shift toward digital asset adoption.",
  "keyTakeaways": [
    "Pension funds and endowments have started crypto allocations",
    "Regulatory clarity in India has reduced uncertainty",
    "Diversified portfolios typically limit crypto to 1-5% AUM"
  ],
  "authoritativeCitations": [
    { "name": "Reserve Bank of India - Crypto Framework", "url": "https://..." },
    { "name": "SEBI Circular on Digital Assets", "url": "https://..." }
  ],
  "entityTags": ["Bitcoin", "SEBI", "MicroStrategy", "TradFi"],
  "contentFreshnessDate": "2025-02-14T00:00:00.000Z",
  "expertiseSignals": {
    "credentials": "Senior Crypto Analyst, CFA",
    "methodology": "Primary research, regulatory filings, on-chain data",
    "researchNotes": "Data as of Feb 2025"
  },
  "faqs": [
    { "question": "What is institutional crypto adoption?", "answer": "..." }
  ]
}
```

## 4. generateMetadata() Example

See `app/article/[slug]/page.tsx`. Key logic:

- `validateMetaTitle` / `validateMetaDescription` enforce 60/160 char limits
- Canonical: post canonicalUrl or `/article/[slug]`
- Robots: index/noindex, follow/nofollow from DB
- Open Graph: ogTitle/ogDescription/ogImage with fallbacks
- Twitter: summary_large_image card, fallbacks to OG
- Keywords: focusKeyword + secondaryKeywords array

## 5. JSON-LD Implementation

- **Article**: headline, description, image, datePublished, dateModified, author, publisher
- **Breadcrumb**: Home → Insights → Category → Article
- **FAQ**: Rendered when post.faqs is present
- **Author**: On /author/[slug] page

## 6. Sitemap & Robots

- **sitemap.ts**: Home, /article/*, /category/*, /tag/*, /author/*
- **robots.ts**: Allow /, disallow /admin/, /api/. Includes GPTBot, ChatGPT-User, Google-Extended rules.

## 7. URLs

| Route | Example |
|-------|---------|
| Article | /article/institutional-crypto-adoption-india |
| Category | /category/analysis |
| Tag | /tag/bitcoin |
| Author | /author/ravi-kumar |

## 8. Run Migration

```bash
npx prisma db push
# or
npx prisma migrate dev
```
