import { ArrowRight, CheckCircle2, Clock3, FileText, Search, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MarketValidationAuthorBlock } from "@/components/author/market-validation-author-block";
import type { InsightArticle } from "@/lib/insights";

type SeoInsightArticleProps = {
  article: InsightArticle;
};

export function SeoInsightArticle({ article }: SeoInsightArticleProps) {
  const [leadSection, ...bodySections] = article.sections;
  const ctaTitle = article.cta?.title ?? "想先確認海外市場是否真的有需求？";
  const ctaDescription =
    article.cta?.description ??
    "透過短影音、廣告測試與詢盤分析，先驗證市場反應，再決定是否擴大投入。";

  const renderParagraphs = (
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
            <div className="mt-8 flex flex-wrap gap-3">
              {article.keywords.slice(0, 5).map((keyword) => (
                <span
                  className="rounded-full border border-primary/10 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm"
                  key={keyword}
                >
                  {keyword}
                </span>
              ))}
            </div>
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

      {leadSection ? (
        <section className="bg-white py-20 sm:py-24">
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

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 lg:px-8">
          {bodySections.map((section, index) => (
            <article
              className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm sm:p-8"
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
                  <h2 className="mt-2 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 grid gap-4 text-base leading-8 text-muted sm:text-lg">
                    {renderParagraphs(section)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <MarketValidationAuthorBlock />

      <section className="bg-white pb-24 sm:pb-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-[linear-gradient(135deg,#ffffff_0%,#eef4f7_100%)] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.1)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Market Validation CTA
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
              預約海外市場驗證討論
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

