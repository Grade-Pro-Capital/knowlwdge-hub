import Link from "next/link";
import { buildSeoReport, type ArticleRef, type DuplicateGroup, type LinkIssue } from "@/app/lib/seoReports";
import { postPath } from "@/app/lib/blogPaths";

// Always computed from the live articles.
export const dynamic = "force-dynamic";

const card = "rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)]";
const th = "px-4 py-3";
const td = "px-4 py-3 align-top";
const muted = "text-[rgba(255,255,255,0.6)]";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function ArticleLink({ article }: { article: ArticleRef }) {
  return (
    <Link href={`/admin/posts/${article.id}/edit`} className="hover:text-[#FDBE35]">
      {article.title}
    </Link>
  );
}

function Section({ id, title, intro, children }: { id: string; title: string; intro: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-6">
      <h2 className="mb-1 text-lg font-medium">{title}</h2>
      <p className={`mb-4 max-w-3xl text-sm ${muted}`}>{intro}</p>
      {children}
    </section>
  );
}

function AllClear({ children }: { children: React.ReactNode }) {
  return <p className={`${card} p-6 text-sm text-green-300`}>{children}</p>;
}

function Duplicates({ groups, label }: { groups: DuplicateGroup[]; label: string }) {
  if (groups.length === 0) return <AllClear>No duplicates: every article has its own {label}.</AllClear>;
  return (
    <div className="space-y-3">
      {groups.map((group) => (
        <div key={group.value} className={`${card} p-4`}>
          <p className="mb-2 text-sm">&ldquo;{group.value}&rdquo;</p>
          <ul className={`list-inside list-disc text-sm ${muted}`}>
            {group.articles.map((a) => (
              <li key={a.id}>
                <ArticleLink article={a} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function LinkIssues({ issues, showTarget }: { issues: LinkIssue[]; showTarget: boolean }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[rgba(255,255,255,0.1)]">
      <table className="w-full text-sm">
        <thead>
          <tr className={`border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-left ${muted}`}>
            <th className={th}>In article</th>
            <th className={th}>Link</th>
            {showTarget && <th className={th}>New address</th>}
          </tr>
        </thead>
        <tbody>
          {issues.map((issue, i) => (
            <tr key={i} className="border-b border-[rgba(255,255,255,0.05)]">
              <td className={td}>
                <ArticleLink article={issue.from} />
              </td>
              <td className={`${td} break-all font-mono text-xs`}>{issue.href}</td>
              {showTarget && <td className={`${td} break-all font-mono text-xs`}>{issue.goesTo}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function AdminReportsPage() {
  const report = await buildSeoReport();
  const orphans = report.links.filter((l) => l.linkedFrom.length === 0);
  const summary = [
    { href: "#titles", label: "Duplicate titles", count: report.duplicateTitles.length },
    { href: "#descriptions", label: "Duplicate descriptions", count: report.duplicateDescriptions.length },
    { href: "#links", label: "Not linked from any article", count: orphans.length },
    { href: "#broken", label: "Broken internal links", count: report.brokenLinks.length },
    { href: "#old-urls", label: "Links using an old URL", count: report.oldUrlLinks.length },
  ];

  return (
    <div>
      <h1 className="mb-2 text-2xl font-semibold">SEO reports</h1>
      <p className={`mb-8 max-w-3xl text-sm ${muted}`}>
        Checked from the {report.articleCount} published articles each time you open this page.
        Click an article to edit it.
      </p>

      <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {summary.map((s) => (
          <a key={s.href} href={s.href} className={`${card} p-4 hover:border-[rgba(253,190,53,0.4)]`}>
            <div className={`text-2xl font-semibold ${s.count ? "text-amber-300" : "text-green-300"}`}>{s.count}</div>
            <div className={`text-xs ${muted}`}>{s.label}</div>
          </a>
        ))}
      </div>

      <Section
        id="titles"
        title="Duplicate titles"
        intro="Articles showing Google the same title (the SEO title, or the article title when that's empty). Google may pick only one of them for a search, or rewrite the titles."
      >
        <Duplicates groups={report.duplicateTitles} label="title" />
      </Section>

      <Section
        id="descriptions"
        title="Duplicate descriptions"
        intro="Articles with the same meta description (or the same excerpt, used when the description is empty). Google often ignores a description shared by several pages."
      >
        <Duplicates groups={report.duplicateDescriptions} label="description" />
      </Section>

      <Section
        id="links"
        title="Links between articles"
        intro={
          <>
            Every article is listed on the blog home and its category page. This counts the links
            written <em>inside</em> other articles, which tell Google how articles relate and which
            matter most. Articles no other article links to come first. &quot;Add a link from&quot;
            lists the most related articles that don&apos;t link there yet (by shared topic words):
            open one and link to the article from a relevant sentence.
          </>
        }
      >
        <div className="overflow-x-auto rounded-xl border border-[rgba(255,255,255,0.1)]">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-left ${muted}`}>
                <th className={th}>Article</th>
                <th className={th}>Linked from</th>
                <th className={th}>Links to</th>
                <th className={th}>Add a link from</th>
                <th className={th}>Last updated</th>
              </tr>
            </thead>
            <tbody>
              {report.links.map((row) => (
                <tr key={row.id} className="border-b border-[rgba(255,255,255,0.05)]">
                  <td className={td}>
                    <ArticleLink article={row} />
                    <div className="text-xs text-[rgba(255,255,255,0.4)]">{postPath(row.slug)}</div>
                  </td>
                  <td className={`${td} whitespace-nowrap`}>
                    {row.linkedFrom.length === 0 ? (
                      <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs text-amber-300">
                        No article
                      </span>
                    ) : (
                      <details>
                        <summary className="cursor-pointer">
                          {row.linkedFrom.length} {row.linkedFrom.length === 1 ? "article" : "articles"}
                        </summary>
                        <ul className={`mt-2 space-y-1 whitespace-normal text-xs ${muted}`}>
                          {row.linkedFrom.map((a) => (
                            <li key={a.id}>
                              <ArticleLink article={a} />
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </td>
                  <td className={`${td} whitespace-nowrap ${muted}`}>
                    {row.linksOut} {row.linksOut === 1 ? "article" : "articles"}
                  </td>
                  <td className={`${td} min-w-60 text-xs ${muted}`}>
                    {row.suggestedFrom.length === 0 ? (
                      <span className="text-[rgba(255,255,255,0.4)]">No close match</span>
                    ) : (
                      <ul className="space-y-1">
                        {row.suggestedFrom.map((a) => (
                          <li key={a.id}>
                            <ArticleLink article={a} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                  <td className={`${td} whitespace-nowrap ${muted}`}>{formatDate(row.lastUpdated)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="broken"
        title="Broken internal links"
        intro="Links inside articles to an article address that doesn't exist (or isn't published). Visitors get a 'not found' page. Fix the link, or add a redirect for the old address."
      >
        {report.brokenLinks.length === 0 ? (
          <AllClear>No broken links: every link to an article reaches one.</AllClear>
        ) : (
          <LinkIssues issues={report.brokenLinks} showTarget={false} />
        )}
      </Section>

      <Section
        id="old-urls"
        title="Links using an old URL"
        intro="These links still use an old address in the article text (the old blogs.grade.capital address, www., or an old article URL). Readers and Google already get the new address: it is swapped in when the page is shown. Updating the text is optional tidying."
      >
        {report.oldUrlLinks.length === 0 ? (
          <AllClear>All links to articles use the current address.</AllClear>
        ) : (
          <LinkIssues issues={report.oldUrlLinks} showTarget />
        )}
      </Section>
    </div>
  );
}
