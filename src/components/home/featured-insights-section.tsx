import Link from "next/link";
import { ArrowUpRight, BookOpenText } from "lucide-react";

const insights = [
  {
    title: "阿里巴巴國際站還值得做嗎？",
    description: "阿里國際站真的沒效了嗎？還是只是競爭模式改變了？",
    href: "/insights/is-alibaba-still-worth-it",
  },
  {
    title: "製造業如何取得海外詢盤？",
    description: "除了展會與阿里巴巴，現在還有哪些方式能獲得海外買家？",
    href: "/insights/how-to-get-overseas-b2b-leads",
  },
  {
    title: "短影音真的能帶來海外客戶嗎？",
    description: "從台灣製造業實際案例，看短影音如何協助取得海外詢盤。",
    href: "/insights/can-short-videos-generate-overseas-customers",
  },
  {
    title: "展會 vs 海外短影音",
    description: "如果預算有限，應該參展還是投入內容行銷？",
    href: "/insights/trade-show-vs-short-video-marketing",
  },
];

export function FeaturedInsightsSection() {
  return (
    <section
      aria-labelledby="featured-insights-heading"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-5 border-t border-border/70 pt-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Featured Insights
            </p>
            <h2
              id="featured-insights-heading"
              className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl"
            >
              產業觀點
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              分享製造業海外開發、市場驗證與國際行銷觀察
            </p>
          </div>

          <div className="hidden rounded-full border border-accent/25 bg-accent/10 px-5 py-2 text-sm font-semibold text-primary sm:block">
            Overseas B2B Insights
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((insight, index) => (
            <Link
              href={insight.href}
              key={insight.href}
              className="group flex min-h-[17rem] flex-col justify-between rounded-[1.5rem] border border-border/80 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_26px_80px_rgba(18,59,93,0.14)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <BookOpenText aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold leading-8 text-foreground">
                  {insight.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {insight.description}
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                閱讀全文
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
