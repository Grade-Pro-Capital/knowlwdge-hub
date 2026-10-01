/**
 * robots.txt: the default file, a parser, Google-style URL matching and the safety
 * checks the admin editor runs before saving. Pure functions, used by the editor
 * (live checks as you type), the admin API (the same checks on save) and the
 * /robots.txt route (the default when nothing custom is saved).
 *
 * Matching follows RFC 9309 / Google: the group for the crawler's user-agent (else
 * "*"), then the most specific (longest) matching rule, Allow winning ties; "*"
 * matches anything and a trailing "$" anchors the end of the URL.
 */

// ---------- Default file ----------

/** Crawlers served the default rules: everyone, plus AI bots we welcome explicitly. */
const DEFAULT_USER_AGENTS = ["*", "GPTBot", "ChatGPT-User", "Google-Extended", "PerplexityBot", "Claude-Web", "anthropic-ai"];

/**
 * Tag archives are noindex and kept out of the sitemap, so they are blocked to save
 * crawl budget; /admin/ and /api/ are private.
 */
const DEFAULT_DISALLOW = ["/blogs/tag/", "/admin/", "/api/"];

export function defaultRobotsTxt(baseUrl: string): string {
  const groups = DEFAULT_USER_AGENTS.map((agent) =>
    [`User-agent: ${agent}`, "Allow: /", ...DEFAULT_DISALLOW.map((path) => `Disallow: ${path}`)].join("\n"),
  );
  return `${groups.join("\n\n")}\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
}

// ---------- Parsing ----------

export type RobotsRule = { type: "allow" | "disallow"; pattern: string; line: number };
export type RobotsGroup = { agents: string[]; rules: RobotsRule[] };
export type RobotsIssue = { line?: number; message: string };
export type ParsedRobots = { groups: RobotsGroup[]; sitemaps: { url: string; line: number }[]; errors: RobotsIssue[]; warnings: RobotsIssue[] };

/** Google reads at most 500 KiB of a robots.txt file. */
const MAX_BYTES = 500 * 1024;

const KNOWN = ["user-agent", "allow", "disallow", "sitemap"];
/** Real but non-standard instructions: kept, but Google ignores them. */
const IGNORED_BY_GOOGLE: Record<string, string> = {
  "crawl-delay": "Crawl-delay",
  host: "Host",
  "clean-param": "Clean-param",
  "request-rate": "Request-rate",
  "visit-time": "Visit-time",
  noindex: "Noindex",
};

function editDistance(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return row[b.length];
}

const DISPLAY_NAME: Record<string, string> = {
  "user-agent": "User-agent",
  allow: "Allow",
  disallow: "Disallow",
  sitemap: "Sitemap",
};

export function parseRobotsTxt(text: string): ParsedRobots {
  const groups: RobotsGroup[] = [];
  const sitemaps: ParsedRobots["sitemaps"] = [];
  const errors: RobotsIssue[] = [];
  const warnings: RobotsIssue[] = [];
  if (new TextEncoder().encode(text).length > MAX_BYTES) {
    errors.push({ message: "The file is larger than 500 KB; Google ignores everything after that." });
  }

  let current: RobotsGroup | null = null;
  let lastWasAgent = false;
  text.split(/\r\n|\r|\n/).forEach((raw, index) => {
    const line = index + 1;
    const content = raw.replace(/#.*/, "").trim();
    if (!content) return;
    const colon = content.indexOf(":");
    if (colon < 0) {
      errors.push({ line, message: `Line ${line}: “${content}” isn’t a valid instruction (expected “Name: value”).` });
      return;
    }
    const field = content.slice(0, colon).trim().toLowerCase();
    const value = content.slice(colon + 1).trim();

    if (field === "user-agent") {
      if (!value) {
        errors.push({ line, message: `Line ${line}: User-agent needs a value, e.g. “*” for all crawlers.` });
        return;
      }
      if (!current || !lastWasAgent) {
        current = { agents: [], rules: [] };
        groups.push(current);
      }
      current.agents.push(value);
      lastWasAgent = true;
      return;
    }
    if (field === "sitemap") {
      if (!/^https?:\/\/\S+$/i.test(value)) {
        errors.push({ line, message: `Line ${line}: Sitemap must be a full URL, e.g. https://grade.capital/sitemap.xml.` });
      } else {
        sitemaps.push({ url: value, line });
      }
      return; // Sitemap lines don't belong to a group.
    }
    if (field === "allow" || field === "disallow") {
      lastWasAgent = false;
      if (!current) {
        errors.push({ line, message: `Line ${line}: ${DISPLAY_NAME[field]} must come after a User-agent line.` });
        return;
      }
      if (value && !value.startsWith("/") && !value.startsWith("*")) {
        errors.push({ line, message: `Line ${line}: paths must start with “/” (e.g. /blogs/tag/).` });
        return;
      }
      // An empty Disallow means "nothing is disallowed"; an empty Allow does nothing.
      if (value) current.rules.push({ type: field, pattern: value, line });
      return;
    }
    lastWasAgent = false;
    if (IGNORED_BY_GOOGLE[field]) {
      warnings.push({ line, message: `Line ${line}: Google ignores “${IGNORED_BY_GOOGLE[field]}” (other crawlers may use it).` });
      return;
    }
    const suggestion = KNOWN.find((known) => editDistance(field, known) <= 2);
    errors.push({
      line,
      message: suggestion
        ? `Line ${line}: unknown instruction “${content.slice(0, colon).trim()}”. Did you mean “${DISPLAY_NAME[suggestion]}”?`
        : `Line ${line}: unknown instruction “${content.slice(0, colon).trim()}”.`,
    });
  });

  return { groups, sitemaps, errors, warnings };
}

// ---------- Matching ----------

function patternMatches(pattern: string, path: string): boolean {
  const anchored = pattern.endsWith("$");
  const body = anchored ? pattern.slice(0, -1) : pattern;
  const regex = body
    .split("*")
    .map((part) => part.replace(/[.+?^${}()|[\]\\]/g, "\\$&"))
    .join(".*");
  return new RegExp(`^${regex}${anchored ? "$" : ""}`).test(path);
}

/** Groups that apply to a crawler: its own (case-insensitive) if any, else "*". */
function groupsFor(parsed: ParsedRobots, userAgent: string): RobotsGroup[] {
  const agent = userAgent.toLowerCase();
  const own = parsed.groups.filter((g) => g.agents.some((a) => a.toLowerCase() === agent));
  return own.length ? own : parsed.groups.filter((g) => g.agents.includes("*"));
}

export type UrlVerdict = { allowed: boolean; rule?: RobotsRule };

/** May `userAgent` crawl `url` (a path or full URL)? Also returns the deciding rule. */
export function checkUrl(parsed: ParsedRobots, userAgent: string, url: string): UrlVerdict {
  let path = url.trim() || "/";
  if (/^https?:\/\//i.test(path)) {
    try {
      const u = new URL(path);
      path = u.pathname + u.search;
    } catch {
      return { allowed: true };
    }
  }
  if (!path.startsWith("/")) path = `/${path}`;

  let best: RobotsRule | undefined;
  for (const group of groupsFor(parsed, userAgent)) {
    for (const rule of group.rules) {
      if (!patternMatches(rule.pattern, path)) continue;
      const longer = !best || rule.pattern.length > best.pattern.length;
      const tieAllow = best && rule.pattern.length === best.pattern.length && rule.type === "allow";
      if (longer || tieAllow) best = rule;
    }
  }
  return { allowed: !best || best.type === "allow", rule: best };
}

// ---------- Safety checks ----------

export type KeyPage = { label: string; path: string };
export type KeyPageResult = KeyPage & { blockedFor: string[]; rule?: RobotsRule };

/** Crawlers the key-page check runs for: Google's, and everyone else ("*"). */
const CHECKED_AGENTS = [
  { agent: "Googlebot", label: "Google" },
  { agent: "*", label: "all other crawlers" },
];

export type RobotsAnalysis = {
  errors: RobotsIssue[];
  warnings: RobotsIssue[];
  keyPages: KeyPageResult[];
  /** Saving needs the extra "I understand" confirmation. */
  blocksKeyPages: boolean;
};

export function analyzeRobotsTxt(text: string, options: { baseUrl: string; keyPages: KeyPage[] }): RobotsAnalysis {
  const parsed = parseRobotsTxt(text);
  const warnings = [...parsed.warnings];

  if (!parsed.sitemaps.length) {
    warnings.push({ message: `No Sitemap line: add “Sitemap: ${options.baseUrl}/sitemap.xml” so crawlers find all pages.` });
  } else {
    const siteHost = new URL(options.baseUrl).hostname;
    for (const s of parsed.sitemaps) {
      if (new URL(s.url).hostname !== siteHost) {
        warnings.push({ line: s.line, message: `Line ${s.line}: the Sitemap points to ${new URL(s.url).hostname}, not ${siteHost}.` });
      }
    }
  }

  const keyPages = options.keyPages.map((page) => {
    const blockedFor: string[] = [];
    let rule: RobotsRule | undefined;
    for (const { agent, label } of CHECKED_AGENTS) {
      const verdict = checkUrl(parsed, agent, page.path);
      if (!verdict.allowed) {
        blockedFor.push(label);
        rule ??= verdict.rule;
      }
    }
    return { ...page, blockedFor, rule };
  });

  return {
    errors: parsed.errors,
    warnings,
    keyPages,
    blocksKeyPages: keyPages.some((p) => p.blockedFor.length > 0),
  };
}
