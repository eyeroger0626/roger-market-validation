import { ArrowRight, BookOpenText } from "lucide-react";
import Link from "next/link";

const topics = [
  "海外市場驗證",
  "Google SEO",
  "探廠短影音",
  "B2B 詢盤",
  "AI 搜尋",
];

export function PillarGuideSection() {
  return (
    <section
      aria-labelledby="pillar-guide-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,#f7fafc_0%,#ffffff_58%,#fffaf0_100%)] p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-12">
          <div>
            <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-primary">
              PILLAR GUIDE
            </p>
            <h2
              className="mt-6 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
              id="pillar-guide-heading"
            >
              製造業海外獲客完整指南（2026）
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted [text-wrap:pretty] sm:text-lg">
              從海外市場驗證、Google SEO、探廠短影音，到持續取得海外 B2B
              詢盤，完整解析台灣工廠如何建立可累積的海外獲客系統。
            </p>
            <Link
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0d2f4d]"
              href="/insights/what-is-manufacturing-overseas-lead-generation"
            >
              閱讀完整指南
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[1.5rem] border border-primary/10 bg-white/80 p-6 shadow-sm sm:p-7">
            <div className="flex items-center gap-3 text-primary">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                <BookOpenText aria-hidden="true" className="h-5 w-5" />
              </span>
              <p className="font-semibold">指南涵蓋主題</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {topics.map((topic) => (
                <span
                  className="rounded-full border border-primary/10 bg-[#eef4f7] px-4 py-2 text-sm font-semibold text-primary"
                  key={topic}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
