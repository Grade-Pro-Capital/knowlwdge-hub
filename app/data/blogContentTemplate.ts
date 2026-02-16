/**
 * Default HTML template for new blog posts.
 * Uses H2 for sections, bold for list labels, and blockquote for quotes
 * so the content matches the blog layout (gold headings, sidebar ToC).
 */
export const BLOG_CONTENT_TEMPLATE = `
<p>[Write your opening paragraph here. Set the context and main thesis for the article.]</p>

<h2 id="section-1">[First main section heading]</h2>

<p>[Introduce this section in one or two sentences.]</p>

<p>According to recent data:</p>
<ul>
  <li><strong>[Category or metric]:</strong> [Supporting detail or statistic.]</li>
  <li><strong>[Category or metric]:</strong> [Supporting detail or statistic.]</li>
  <li><strong>[Category or metric]:</strong> [Supporting detail or statistic.]</li>
</ul>

<h2 id="section-2">[Second main section heading]</h2>

<p>[Introduce this section. Key takeaways include:]</p>
<ul>
  <li><strong>[Point one]:</strong> [Explanation.]</li>
  <li><strong>[Point two]:</strong> [Explanation.]</li>
  <li><strong>[Point three]:</strong> [Explanation.]</li>
</ul>

<h2 id="key-metrics">[Key metrics or data]</h2>

<p>[Highlight the main numbers or metrics that support your argument.]</p>
<table>
  <thead>
    <tr>
      <th>[Column 1 header]</th>
      <th>[Column 2 header]</th>
      <th>[Column 3 header]</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[Data cell]</td>
      <td>[Data cell]</td>
      <td>[Data cell]</td>
    </tr>
    <tr>
      <td>[Data cell]</td>
      <td>[Data cell]</td>
      <td>[Data cell]</td>
    </tr>
  </tbody>
</table>
<ul>
  <li><strong>[Metric]:</strong> [Value or insight.]</li>
  <li><strong>[Metric]:</strong> [Value or insight.]</li>
</ul>

<blockquote>
  <p>"[Optional pull quote or attributed statement from an expert or source.]"</p>
</blockquote>

<h2 id="section-3">[Third main section heading]</h2>

<p>[Section content. You can use more paragraphs and lists as needed.]</p>

<ul>
  <li><strong>[Key point]:</strong> [Detail.]</li>
  <li><strong>[Key point]:</strong> [Detail.]</li>
</ul>

<h2 id="risks">[Risks and considerations]</h2>

<p>[What could go wrong or what the reader should be aware of.]</p>
<ul>
  <li><strong>[Risk or caveat]:</strong> [Brief note.]</li>
  <li><strong>[Risk or caveat]:</strong> [Brief note.]</li>
</ul>

<h2 id="conclusion">[Conclusion heading]</h2>

<p>[Summarise the main argument. What should the reader take away?]</p>

<ul>
  <li>[Closing point one.]</li>
  <li>[Closing point two.]</li>
  <li>[Closing point three.]</li>
</ul>

<p>[Final paragraph. End with a forward-looking or actionable note.]</p>
`.trim();
