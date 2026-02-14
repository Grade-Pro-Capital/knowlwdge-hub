/**
 * Converts plain-text template format (with [placeholders]) to HTML.
 * - Lines in [[double brackets]] → <h3> (subsection)
 * - Lines in [brackets] that look like section titles → <h2>
 * - "[Label]: [Detail]" or "[Label]: Detail" → <li><strong>Label:</strong> Detail</li>
 * - Line in "quotes" → <blockquote>
 * - "According to recent data:" etc. → <p>
 * - Other non-empty lines → <p>
 * - Consecutive list items → <ul>
 */
export function plainTextTemplateToHtml(text: string): string {
  const lines = text.split(/\n/).map((s) => s.trimEnd());
  const out: string[] = [];
  let i = 0;
  let sectionIndex = 0;
  let subsectionIndex = 0;

  function flushList(items: string[]) {
    if (items.length === 0) return;
    out.push("<ul>");
    for (const item of items) {
      // "[Label]: [Detail]" or "[Label]: rest"
      const match = item.match(/^\[([^\]]+)\]:\s*(.*)$/);
      if (match) {
        const label = match[1];
        const rest = match[2].replace(/^\[|\]$/g, "").trim() || match[2];
        out.push(`<li><strong>${escapeHtml(label)}:</strong> ${escapeHtml(rest)}</li>`);
      } else {
        out.push(`<li>${escapeHtml(item.replace(/^\[|\]$/g, ""))}</li>`);
      }
    }
    out.push("</ul>");
  }

  let listBuffer: string[] = [];

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      flushList(listBuffer);
      listBuffer = [];
      i++;
      continue;
    }

    // Quoted line → blockquote
    if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("\"") && trimmed.endsWith("\""))) {
      flushList(listBuffer);
      listBuffer = [];
      const inner = trimmed.slice(1, -1).trim();
      out.push(`<blockquote><p>${escapeHtml(inner)}</p></blockquote>`);
      i++;
      continue;
    }

    // Double brackets [[...]] → subsection heading (h3)
    if (/^\[\[.+\]\]$/.test(trimmed) && trimmed.length < 120) {
      flushList(listBuffer);
      listBuffer = [];
      subsectionIndex += 1;
      const inner = trimmed.slice(2, -2);
      out.push(`<h3 id="subsection-${subsectionIndex}">${escapeHtml(inner)}</h3>`);
      i++;
      continue;
    }

    // Single line in [brackets], short → section heading (h2)
    if (/^\[.+\]$/.test(trimmed) && trimmed.length < 100) {
      flushList(listBuffer);
      listBuffer = [];
      sectionIndex += 1;
      const inner = trimmed.slice(1, -1);
      out.push(`<h2 id="section-${sectionIndex}">${escapeHtml(inner)}</h2>`);
      i++;
      continue;
    }

    // "[Label]: [Detail]" or "[Label]: text" → list item (buffer)
    if (/^\[[^\]]+\]:\s*.+/.test(trimmed)) {
      listBuffer.push(trimmed);
      i++;
      continue;
    }

    // Standalone "[Closing point one.]" – run of bracket-only lines → list
    if (/^\[.+\]$/.test(trimmed) && !trimmed.includes(":")) {
      const run: string[] = [trimmed];
      let j = i + 1;
      while (j < lines.length) {
        const nextTrimmed = lines[j].trim();
        if (nextTrimmed === "") { j++; continue; }
        if (/^\[.+\]$/.test(nextTrimmed) && !nextTrimmed.includes(":")) {
          run.push(nextTrimmed);
          j++;
        } else break;
      }
      if (run.length > 1) {
        flushList(listBuffer);
        listBuffer = [];
        out.push("<ul>");
        for (const item of run) {
          out.push(`<li>${escapeHtml(item.slice(1, -1))}</li>`);
        }
        out.push("</ul>");
        i = j;
        continue;
      }
    }

    // Intro phrases that precede a list
    if (/^(According to recent data|Key takeaways include):/i.test(trimmed)) {
      flushList(listBuffer);
      listBuffer = [];
      out.push(`<p>${escapeHtml(trimmed)}</p>`);
      i++;
      continue;
    }

    // Normal paragraph
    flushList(listBuffer);
    listBuffer = [];
    out.push(`<p>${escapeHtml(trimmed)}</p>`);
    i++;
  }

  flushList(listBuffer);
  return out.join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Default plain-text template structure for the create form. */
export const DEFAULT_PLAIN_TEMPLATE = `[Write your opening paragraph here. Set the context and main thesis for the article.]

[First main section heading]

[Introduce this section in one or two sentences.]

According to recent data:

[Category or metric]: [Supporting detail or statistic.]

[Category or metric]: [Supporting detail or statistic.]

[Category or metric]: [Supporting detail or statistic.]

[Second main section heading]

[Introduce this section. Key takeaways include:]

[Point one]: [Explanation.]

[Point two]: [Explanation.]

[Point three]: [Explanation.]

[Key metrics or data]

[Highlight the main numbers or metrics that support your argument.]

[Metric]: [Value or insight.]

[Metric]: [Value or insight.]

"[Optional pull quote or attributed statement from an expert or source.]"

[Third main section heading]

[Section content. You can use more paragraphs and lists as needed.]

[Key point]: [Detail.]

[Key point]: [Detail.]

[Risks and considerations]

[What could go wrong or what the reader should be aware of.]

[Risk or caveat]: [Brief note.]

[Risk or caveat]: [Brief note.]

[Conclusion heading]

[Summarise the main argument. What should the reader take away?]

[Closing point one.]

[Closing point two.]

[Closing point three.]

[Final paragraph. End with a forward-looking or actionable note.]`;
