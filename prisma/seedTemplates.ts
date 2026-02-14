/**
 * Default investment blog templates. Used by seed and can be imported for reference.
 */
export const DEFAULT_TEMPLATES = [
  {
    name: "Market Analysis",
    content: `
<p>[Opening: set the scene for the market or asset you're analysing—timeframe, key theme.]</p>

<h2 id="overview">Market overview</h2>

<p>[Summarise current price action, trend, and sentiment in 2–3 sentences.]</p>

<p>Key levels and data:</p>
<ul>
  <li><strong>Support/Resistance:</strong> [Levels and relevance.]</li>
  <li><strong>Volume & open interest:</strong> [What the data suggests.]</li>
  <li><strong>Funding rates:</strong> [Positioning and sentiment.]</li>
</ul>

<h2 id="catalysts">Catalysts and risks</h2>

<p>[What could move the market next—events, data, policy.]</p>

<ul>
  <li><strong>Upside:</strong> [Bullish factors.]</li>
  <li><strong>Downside:</strong> [Key risks.]</li>
</ul>

<h2 id="outlook">Outlook</h2>

<p>[Your view: base case, time horizon, and what to watch.]</p>
`.trim(),
  },
  {
    name: "Regulatory Update",
    content: `
<p>[Brief context: which jurisdiction or theme, and why it matters for investors.]</p>

<h2 id="what-changed">What changed</h2>

<p>[Summary of the new rule, guidance, or policy in plain language.]</p>

<p>Key takeaways:</p>
<ul>
  <li><strong>Scope:</strong> [Who and what is in scope.]</li>
  <li><strong>Deadlines:</strong> [Compliance or effective dates.]</li>
  <li><strong>Enforcement:</strong> [What happens if not complied.]</li>
</ul>

<h2 id="implications">Implications for investors</h2>

<p>[How this affects portfolios, products, or access.]</p>

<ul>
  <li><strong>Tax & reporting:</strong> [Any new obligations.]</li>
  <li><strong>Product availability:</strong> [Changes to offerings.]</li>
</ul>

<h2 id="action-items">What to do next</h2>

<p>[Practical steps: review holdings, talk to advisor, update documents.]</p>
`.trim(),
  },
  {
    name: "Portfolio Strategy",
    content: `
<p>[Theme: e.g. allocation, rebalancing, or risk. One paragraph on why this matters now.]</p>

<h2 id="current-context">Current context</h2>

<p>[Market environment, volatility, and how it affects the strategy.]</p>

<p>Relevant data:</p>
<ul>
  <li><strong>Correlations:</strong> [How assets have moved together.]</li>
  <li><strong>Volatility:</strong> [Current vs historical.]</li>
  <li><strong>Valuation:</strong> [Where things stand.]</li>
</ul>

<h2 id="strategy">Strategy in practice</h2>

<p>[Concrete approach: sizing, rebalance rules, or risk limits.]</p>

<ul>
  <li><strong>Allocation:</strong> [Suggested ranges or buckets.]</li>
  <li><strong>Rebalancing:</strong> [When and how.]</li>
  <li><strong>Risk management:</strong> [Stop-loss, position limits, etc.]</li>
</ul>

<h2 id="conclusion">Bottom line</h2>

<p>[Summary and one clear takeaway for the reader.]</p>
`.trim(),
  },
  {
    name: "Asset / Token Deep Dive",
    content: `
<p>[Introduce the asset or token: what it is, why you're covering it.]</p>

<h2 id="overview">Overview</h2>

<p>[Purpose, use case, and key metrics in 2–3 sentences.]</p>

<p>At a glance:</p>
<ul>
  <li><strong>Market cap & supply:</strong> [Size and emission.]</li>
  <li><strong>Key use case:</strong> [Primary utility or demand.]</li>
  <li><strong>Ecosystem:</strong> [Notable integrations or protocols.]</li>
</ul>

<h2 id="fundamentals">Fundamentals and metrics</h2>

<p>[What to watch: TVL, revenue, adoption, etc.]</p>

<ul>
  <li><strong>Growth:</strong> [Trends and numbers.]</li>
  <li><strong>Competition:</strong> [Alternatives and differentiation.]</li>
</ul>

<h2 id="risks">Risks and considerations</h2>

<p>[Smart contract, regulatory, market, or liquidity risks.]</p>

<h2 id="outlook">Outlook</h2>

<p>[Your view: catalysts, downside, and how you'd size or monitor a position.]</p>
`.trim(),
  },
  {
    name: "Weekly / Monthly Roundup",
    content: `
<p>[One paragraph: period covered and the main theme—e.g. "A risk-off week as [X] drove volatility."]</p>

<h2 id="highlights">Highlights</h2>

<p>[2–3 bullet-style highlights that set the tone.]</p>

<ul>
  <li><strong>Markets:</strong> [How major assets performed.]</li>
  <li><strong>Policy & regulation:</strong> [Headlines that matter.]</li>
  <li><strong>On-chain & adoption:</strong> [Notable metrics or news.]</li>
</ul>

<h2 id="top-movers">Top movers</h2>

<p>[Short take on biggest gainers and losers and why.]</p>

<ul>
  <li><strong>Gainers:</strong> [Names and drivers.]</li>
  <li><strong>Decliners:</strong> [Names and drivers.]</li>
</ul>

<h2 id="what-to-watch">What to watch</h2>

<p>[Upcoming events, data, or themes for the next period.]</p>

<ul>
  <li>[Event or release 1.]</li>
  <li>[Event or release 2.]</li>
  <li>[Theme or level to monitor.]</li>
</ul>

<p>[Closing line: one sentence forward-looking.]</p>
`.trim(),
  },
  {
    name: "Risk & Volatility Report",
    content: `
<p>[Context: which asset or market, timeframe, and why volatility matters now.]</p>

<h2 id="volatility-metrics">Volatility metrics</h2>

<p>[Current vs historical volatility, recent drawdowns, and regime shift if any.]</p>

<p>Key data:</p>
<ul>
  <li><strong>Realised volatility:</strong> [Level and trend.]</li>
  <li><strong>Implied volatility:</strong> [Options market view.]</li>
  <li><strong>Drawdown:</strong> [Peak-to-trough and duration.]</li>
</ul>

<h2 id="risk-factors">Risk factors</h2>

<p>[What is driving or could drive volatility—macro, flows, leverage.]</p>

<ul>
  <li><strong>Leverage & funding:</strong> [Positioning and liquidation risk.]</li>
  <li><strong>Correlation:</strong> [How this moves with other assets.]</li>
  <li><strong>Tail risk:</strong> [Stress scenarios to consider.]</li>
</ul>

<h2 id="implications">Implications for portfolios</h2>

<p>[Sizing, hedging, or rebalancing suggestions given the volatility regime.]</p>
`.trim(),
  },
  {
    name: "Institutional Flows Report",
    content: `
<p>[Theme: institutional inflows/outflows, ETFs, or custody. Why it matters this week or month.]</p>

<h2 id="flows-summary">Flows summary</h2>

<p>[Net flows, trend, and comparison to prior periods.]</p>

<p>Key numbers:</p>
<ul>
  <li><strong>ETF flows:</strong> [Inflows/outflows and AUM change.]</li>
  <li><strong>Custody & exchange:</strong> [Movements and what they suggest.]</li>
  <li><strong>Whale activity:</strong> [Notable large transfers or accumulation.]</li>
</ul>

<h2 id="drivers">Drivers and context</h2>

<p>[What is driving the flows—new products, regulation, macro, or sentiment.]</p>

<ul>
  <li><strong>New products:</strong> [Launches or approvals.]</li>
  <li><strong>Regulation:</strong> [Impact on institutional access.]</li>
</ul>

<h2 id="outlook">Outlook</h2>

<p>[What to watch next: upcoming catalysts or data that could shift flows.]</p>
`.trim(),
  },
  {
    name: "Tax & Compliance Guide",
    content: `
<p>[Jurisdiction and theme: e.g. "India crypto tax update" or "Reporting requirements for 2025."]</p>

<h2 id="current-rules">Current rules</h2>

<p>[Summary of how crypto is taxed or regulated—gains, TDS, reporting.]</p>

<p>At a glance:</p>
<ul>
  <li><strong>Tax on gains:</strong> [Rate and how it applies.]</li>
  <li><strong>TDS / withholding:</strong> [When and how much.]</li>
  <li><strong>Reporting:</strong> [Forms, deadlines, and disclosures.]</li>
</ul>

<h2 id="compliance-checklist">Compliance checklist</h2>

<p>[Practical steps for investors or advisors.]</p>

<ul>
  <li><strong>Record-keeping:</strong> [What to maintain.]</li>
  <li><strong>Filing:</strong> [Deadlines and how to report.]</li>
  <li><strong>Common pitfalls:</strong> [Mistakes to avoid.]</li>
</ul>

<h2 id="faq">FAQ</h2>

<p>[2–3 short Q&As on frequent questions.]</p>
`.trim(),
  },
  {
    name: "Sector / Theme Deep Dive",
    content: `
<p>[Introduce the sector or theme—e.g. DeFi, L2, RWA—and why it deserves attention now.]</p>

<h2 id="overview">Sector overview</h2>

<p>[What the sector is, key players, and total size or TVL.]</p>

<p>Key metrics:</p>
<ul>
  <li><strong>TVL or market size:</strong> [Current and trend.]</li>
  <li><strong>Key protocols:</strong> [Top names and share.]</li>
  <li><strong>Growth drivers:</strong> [What is pulling capital in.]</li>
</ul>

<h2 id="recent-developments">Recent developments</h2>

<p>[Upgrades, new chains, regulation, or adoption news.]</p>

<ul>
  <li><strong>Protocol updates:</strong> [Notable launches or changes.]</li>
  <li><strong>Adoption:</strong> [Institutional or real-world use.]</li>
</ul>

<h2 id="risks">Risks and considerations</h2>

<p>[Smart contract, regulatory, or market risks specific to the sector.]</p>

<h2 id="outlook">Outlook</h2>

<p>[Your view: catalysts, hurdles, and how to track the sector.]</p>
`.trim(),
  },
  {
    name: "Market Sentiment & Positioning",
    content: `
<p>[Timeframe and theme: e.g. "Sentiment shifted risk-off this week as [X]."]</p>

<h2 id="sentiment-gauges">Sentiment gauges</h2>

<p>[Fear/greed, funding rates, or survey data and what they imply.]</p>

<p>Key indicators:</p>
<ul>
  <li><strong>Funding rates:</strong> [Levels and trend—long- or short-heavy.]</li>
  <li><strong>Open interest:</strong> [Positioning and leverage.]</li>
  <li><strong>Options flow:</strong> [Calls vs puts, notable trades.]</li>
</ul>

<h2 id="positioning">Positioning</h2>

<p>[Who is positioned how—retail vs institutions, derivatives vs spot.]</p>

<ul>
  <li><strong>Exchange reserves:</strong> [Supply available to sell.]</li>
  <li><strong>Crowding:</strong> [Overcrowded trades and contrarian signals.]</li>
</ul>

<h2 id="contrarian-view">Contrarian view</h2>

<p>[Where sentiment might be wrong and what could surprise the consensus.]</p>
`.trim(),
  },
  {
    name: "Due Diligence Checklist",
    content: `
<p>[Context: type of product or asset—e.g. fund, token, or platform—and who this checklist is for.]</p>

<h2 id="governance">Governance and team</h2>

<p>[What to verify about governance, team, and legal structure.]</p>

<ul>
  <li><strong>Team & track record:</strong> [Background and experience.]</li>
  <li><strong>Legal structure:</strong> [Entity, jurisdiction, and licensing.]</li>
  <li><strong>Transparency:</strong> [Audits, disclosures, and communication.]</li>
</ul>

<h2 id="technical">Technical and security</h2>

<p>[Smart contracts, custody, and operational risk.]</p>

<ul>
  <li><strong>Audits:</strong> [Who audited, scope, and findings.]</li>
  <li><strong>Custody:</strong> [How assets are held and who has access.]</li>
  <li><strong>Incident history:</strong> [Past hacks or issues.]</li>
</ul>

<h2 id="financial">Financial and terms</h2>

<p>[Fees, liquidity, redemption, and key terms.]</p>

<ul>
  <li><strong>Fees:</strong> [Management, performance, and other costs.]</li>
  <li><strong>Liquidity:</strong> [Lock-ups, redemption frequency.]</li>
</ul>

<h2 id="conclusion">Bottom line</h2>

<p>[Summary: when to use this checklist and one clear takeaway.]</p>
`.trim(),
  },
];
