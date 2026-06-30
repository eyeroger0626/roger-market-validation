import { ArrowRight, CheckCircle2, Clock3, FileText, Search, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MarketValidationAuthorBlock } from "@/components/author/market-validation-author-block";
import type { InsightArticle } from "@/lib/insights";

type SeoInsightArticleProps = {
  article: InsightArticle;
};

export function SeoInsightArticle({ article }: SeoInsightArticleProps) {
  const isLongform = article.readingMode === "longform";
  const contentSections = article.sections.filter(
    (section) =>
      section.title !== "主要關鍵字" && section.title !== "關鍵字",
  );
  const [leadSection, ...bodySections] = contentSections;
  const ctaTitle = "建立製造業海外獲客系統";
  const ctaDescription =
    "從海外市場驗證開始，串連探廠短影音、Google SEO、海外廣告與內容行銷，持續累積海外買家與 B2B 詢盤。";
  const getSectionId = (title: string) => {
    const index = contentSections.findIndex((section) => section.title === title);

    return index >= 0 ? `article-section-${index + 1}` : undefined;
  };

  const renderDefaultParagraphs = (
    section: InsightArticle["sections"][number],
  ) =>
    section.paragraphs.map((paragraph, index) => (
      <div className="contents" key={`${paragraph}-${index}`}>
        <p>{paragraph}</p>
        {section.image && section.image.afterParagraph === index + 1 ? (
          <figure className="my-4 overflow-hidden rounded-[1.5rem] border border-border bg-background shadow-sm">
            <div className="relative aspect-[16/9] w-full">
              <Image
                alt={section.image.alt}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                src={section.image.src}
              />
            </div>
          </figure>
        ) : null}
      </div>
    ));

  const renderLongformParagraphs = (
    section: InsightArticle["sections"][number],
  ) => {
    const blocks: Array<{
      kind: "paragraph" | "flow" | "checklist";
      items: string[];
    }> = [];
    let index = 0;

    while (index < section.paragraphs.length) {
      const paragraph = section.paragraphs[index];

      if (paragraph.startsWith("□")) {
        const items: string[] = [];

        while (
          index < section.paragraphs.length &&
          section.paragraphs[index].startsWith("□")
        ) {
          items.push(section.paragraphs[index].replace(/^□\s*/, ""));
          index += 1;
        }

        blocks.push({ kind: "checklist", items });
        continue;
      }

      if (
        paragraph === "↓" ||
        section.paragraphs[index + 1] === "↓"
      ) {
        const items: string[] = [paragraph];
        index += 1;

        while (
          index < section.paragraphs.length &&
          (section.paragraphs[index] === "↓" ||
            section.paragraphs[index - 1] === "↓")
        ) {
          items.push(section.paragraphs[index]);
          index += 1;
        }

        blocks.push({ kind: "flow", items });
        continue;
      }

      const items = [paragraph];
      index += 1;

      while (index < section.paragraphs.length && items.length < 3) {
        const next = section.paragraphs[index];
        const nextStartsFlow = section.paragraphs[index + 1] === "↓";

        if (next.startsWith("□") || next === "↓" || nextStartsFlow) {
          break;
        }

        items.push(next);
        index += 1;
      }

      blocks.push({ kind: "paragraph", items });
    }

    return blocks.map((block, blockIndex) => {
      if (block.kind === "checklist") {
        return (
          <ul
            className="mb-6 grid gap-3 rounded-[1.1rem] border border-border bg-background p-4 text-base leading-[1.9] last:mb-0 lg:text-lg"
            key={`checklist-${blockIndex}`}
          >
            {block.items.map((item) => (
              <li className="flex items-start gap-3" key={item}>
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-secondary"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      }

      if (block.kind === "flow") {
        return (
          <div
            className="mb-6 flex flex-col items-center gap-1 rounded-[1.1rem] border border-primary/10 bg-background px-4 py-5 text-center text-base font-semibold leading-[1.9] text-primary last:mb-0 lg:text-lg"
            key={`flow-${blockIndex}`}
          >
            {block.items.map((item, itemIndex) =>
              item === "↓" ? (
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-secondary"
                  key={`arrow-${itemIndex}`}
                >
                  ↓
                </span>
              ) : (
                <span key={`${item}-${itemIndex}`}>{item}</span>
              ),
            )}
          </div>
        );
      }

      return (
        <p
          className="mb-6 [text-wrap:pretty] last:mb-0"
          key={`paragraph-${blockIndex}`}
        >
          {block.items.join("")}
        </p>
      );
    });
  };

  const renderParagraphs = (
    section: InsightArticle["sections"][number],
  ) =>
    article.readingMode === "longform"
      ? renderLongformParagraphs(section)
      : renderDefaultParagraphs(section);

  const renderRelatedLinks = () =>
    article.relatedLinks?.length ? (
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            Related Insights
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground">
            延伸閱讀
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {article.relatedLinks.map((link) => (
              <Link
                className="flex items-center justify-between rounded-[1.25rem] border border-border bg-background p-5 font-semibold text-primary transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
                href={link.href}
                key={link.href}
              >
                {link.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    ) : null;

  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_8%,rgba(201,151,74,0.18),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f3f7fa_100%)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-[0_10px_30px_rgba(18,59,93,0.08)]">
              {article.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              {article.description}
            </p>
          </div>

          <div className="rounded-[2rem] border border-border/80 bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "核心問題", value: "詢盤難成交", icon: Search },
                { label: "解決方式", value: "先驗證市場", icon: FileText },
                { label: "驗證工具", value: "短影音＋海外廣告", icon: Video },
                { label: "目標結果", value: "取得買家訊號", icon: Clock3 },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="rounded-[1.35rem] border border-primary/10 bg-[linear-gradient(135deg,#ffffff_0%,#eef4f7_100%)] p-5"
                    key={item.label}
                  >
                    <Icon aria-hidden="true" className="mb-5 h-6 w-6 text-accent" />
                    <p className="text-2xl font-semibold text-primary">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-muted">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {article.keywords.length ? (
        <section className="border-y border-border/70 bg-white py-10 sm:py-12">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Insight
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              相關主題
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {article.keywords.map((keyword) => (
                <span
                  className="rounded-full border border-primary/10 bg-[#eef4f7] px-4 py-2 text-sm font-semibold text-primary hover:border-primary/25 hover:bg-[#e7f0f4]"
                  key={keyword}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {leadSection ? (
        <section
          className="bg-white py-20 sm:py-24"
          id="article-section-1"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Insight
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                {leadSection.title}
              </h2>
            </div>
            <div className="grid gap-5 text-base leading-8 text-muted sm:text-lg">
              {renderParagraphs(leadSection)}
            </div>
          </div>
        </section>
      ) : null}

      {article.toc || article.executiveSummary ? (
        <section className="border-y border-border/70 bg-background py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
            {article.toc ? (
              <nav
                aria-label={article.toc.title}
                className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  Article Guide
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground">
                  {article.toc.title}
                </h2>
                <p className="mt-4 leading-8 text-muted">{article.toc.intro}</p>
                <ol className="mt-6 grid gap-3">
                  {article.toc.items.map((item, index) => {
                    const sectionId = getSectionId(item.targetTitle);

                    return (
                      <li key={item.label}>
                        <a
                          className="flex items-start gap-3 rounded-xl border border-primary/8 bg-background px-4 py-3 text-sm font-semibold leading-6 text-primary transition hover:border-primary/25 hover:bg-[#eef4f7]"
                          href={sectionId ? `#${sectionId}` : undefined}
                        >
                          <span className="text-accent">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            ) : null}

            {article.executiveSummary ? (
              <aside className="rounded-[1.75rem] border border-secondary/20 bg-[linear-gradient(145deg,#fffdf8_0%,#f4f8fa_100%)] p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  Executive Summary
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                  {article.executiveSummary.intro}
                </h2>
                <div className="mt-6 grid gap-5 text-base leading-[1.9] text-muted lg:text-lg">
                  {article.executiveSummary.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </aside>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="py-20 sm:py-24">
        <div
          className={`mx-auto grid w-full gap-8 px-6 lg:px-8 ${
            isLongform ? "max-w-[820px]" : "max-w-5xl"
          }`}
        >
          {bodySections.map((section, index) => (
            <article
              className="scroll-mt-24 rounded-[1.75rem] border border-border bg-white p-6 shadow-sm sm:p-8"
              id={`article-section-${index + 2}`}
              key={section.title}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-background text-accent">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-accent">
                    {String(index + 2).padStart(2, "0")}
                  </p>
                  <h2
                    className={`font-semibold leading-tight text-foreground ${
                      isLongform
                        ? "mb-6 mt-3 text-3xl sm:text-4xl"
                        : "mt-2 text-2xl sm:text-3xl"
                    }`}
                  >
                    {section.title}
                  </h2>
                  <div
                    className={`text-base text-muted [text-wrap:pretty] ${
                      isLongform
                        ? "grid gap-0 leading-[1.9] lg:text-lg"
                        : "mt-5 grid gap-4 leading-8 sm:text-lg"
                    }`}
                  >
                    {renderParagraphs(section)}
                  </div>
                  {section.subsections?.length ? (
                    <div className="mt-7 grid gap-5">
                      {section.subsections.map((subsection) => (
                        <section
                          className="rounded-[1.35rem] border border-border bg-background p-5 sm:p-6"
                          key={subsection.title}
                        >
                          <h3
                            className={`font-semibold text-primary ${
                              isLongform
                                ? "text-2xl leading-[1.5]"
                                : "text-xl leading-8"
                            }`}
                          >
                            {subsection.title}
                          </h3>
                          <div
                            className={`mt-4 grid gap-4 text-base text-muted [text-wrap:pretty] ${
                              isLongform
                                ? "leading-[1.9] lg:text-lg"
                                : "leading-8"
                            }`}
                          >
                            {subsection.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </section>
                      ))}
                    </div>
                  ) : null}
                  {section.highlight ? (
                    <aside className="mt-7 rounded-[1.35rem] border border-secondary/25 bg-[linear-gradient(135deg,#fffaf0_0%,#f4f8fa_100%)] p-5 sm:p-6">
                      <p className="text-sm font-bold text-secondary">
                        {section.highlight.label}
                      </p>
                      <p
                        className={`mt-3 font-semibold text-primary [text-wrap:pretty] ${
                          isLongform
                            ? "text-xl leading-[1.8]"
                            : "text-lg leading-8"
                        }`}
                      >
                        {section.highlight.text}
                      </p>
                    </aside>
                  ) : null}
                  {section.table ? (
                    <div className="mt-7 overflow-x-auto rounded-[1.35rem] border border-border">
                      <table className="min-w-[58rem] border-collapse bg-white text-left text-sm">
                        <thead className="bg-primary text-white">
                          <tr>
                            {section.table.columns.map((column) => (
                              <th
                                className="px-4 py-4 font-semibold"
                                key={column}
                                scope="col"
                              >
                                {column}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr
                              className="border-t border-border even:bg-background"
                              key={row.join("-")}
                            >
                              {row.map((cell, cellIndex) => (
                                <td
                                  className={`px-4 py-4 align-top leading-6 text-muted ${
                                    cellIndex === 0
                                      ? "font-semibold text-primary"
                                      : ""
                                  }`}
                                  key={`${cell}-${cellIndex}`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                  {section.observation ? (
                    <aside className="mt-7 rounded-[1.35rem] border border-primary/15 bg-[#eef4f7] p-5 sm:p-6">
                      <h3
                        className={`font-semibold text-primary ${
                          isLongform ? "text-2xl" : "text-xl"
                        }`}
                      >
                        {section.observation.title}
                      </h3>
                      <div
                        className={`mt-4 grid gap-5 text-base text-muted [text-wrap:pretty] ${
                          isLongform
                            ? "leading-[1.9] lg:text-lg"
                            : "leading-8"
                        }`}
                      >
                        {section.observation.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </aside>
                  ) : null}
                  {section.authorInsight ? (
                    <aside className="mt-7 rounded-[1.35rem] border border-primary/15 bg-[linear-gradient(135deg,#eef4f7_0%,#ffffff_100%)] p-5 sm:p-6">
                      <h3
                        className={`font-semibold text-primary ${
                          isLongform ? "text-xl" : "text-lg"
                        }`}
                      >
                        作者觀點
                      </h3>
                      <p
                        className={`mt-3 text-base text-muted [text-wrap:pretty] ${
                          isLongform
                            ? "leading-[1.9] lg:text-lg"
                            : "leading-8"
                        }`}
                      >
                        {section.authorInsight}
                      </p>
                    </aside>
                  ) : null}
                  {section.summary ? (
                    <div className="mt-7 border-t border-border pt-5">
                      <p
                        className={`font-semibold text-primary [text-wrap:pretty] ${
                          isLongform
                            ? "text-lg leading-[1.9]"
                            : "text-base leading-8"
                        }`}
                      >
                        <span className="text-secondary">本章重點：</span>
                        {section.summary}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {article.glossary ? (
        <section className="border-y border-border/70 bg-white py-20 sm:py-24">
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Glossary
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground">
              {article.glossary.title}
            </h2>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {article.glossary.items.map((item) => (
                <div
                  className="rounded-[1.35rem] border border-border bg-background p-5 sm:p-6"
                  key={item.term}
                >
                  <dt className="text-xl font-semibold text-primary">
                    {item.term}
                  </dt>
                  <dd className="mt-3 text-base leading-8 text-muted">
                    {item.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      {article.relatedLinksPlacement !== "afterFaq"
        ? renderRelatedLinks()
        : null}

      {article.faqs?.length ? (
        <section className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground">
              常見問題
            </h2>
            <div className="mt-8 grid gap-4">
              {article.faqs.map((faq) => (
                <article
                  className="rounded-[1.5rem] border border-border bg-white p-6 shadow-sm sm:p-8"
                  key={faq.question}
                >
                  <h3
                    className={`font-semibold text-foreground ${
                      isLongform
                        ? "text-2xl leading-[1.5]"
                        : "text-xl leading-8"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <p
                    className={`mt-4 text-base text-muted [text-wrap:pretty] ${
                      isLongform
                        ? "leading-[1.9] lg:text-lg"
                        : "leading-8 sm:text-lg"
                    }`}
                  >
                    {faq.answer}
                  </p>
                  {faq.targetTitle && getSectionId(faq.targetTitle) ? (
                    <a
                      className="mt-4 inline-flex text-sm font-semibold text-primary underline decoration-secondary/50 underline-offset-4 hover:text-secondary"
                      href={`#${getSectionId(faq.targetTitle)}`}
                    >
                      詳細內容可參考本文「{faq.targetTitle}」章節。
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {article.relatedLinksPlacement === "afterFaq"
        ? renderRelatedLinks()
        : null}

      <MarketValidationAuthorBlock />

      <section className="bg-white pb-24 sm:pb-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-[linear-gradient(135deg,#ffffff_0%,#eef4f7_100%)] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.1)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Overseas Acquisition CTA
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                {ctaTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                {ctaDescription}
              </p>
            </div>
            <Link
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0d2f4d] lg:mt-0"
              href="/#contact"
            >
              預約海外獲客系統諮詢
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {article.updateInfo ? (
        <footer className="border-t border-border bg-background py-8">
          <div className="mx-auto w-full max-w-7xl px-6 text-sm leading-7 text-muted lg:px-8">
            <p className="font-semibold text-primary">
              最後更新日期：{article.updateInfo.date}
            </p>
            <p className="mt-1">{article.updateInfo.note}</p>
          </div>
        </footer>
      ) : null}
    </main>
  );
}

