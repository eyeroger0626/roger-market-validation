"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Camera,
  ClipboardCheck,
  Factory,
  Megaphone,
  UsersRound,
  Video,
} from "lucide-react";

const flowSteps = [
  {
    title: "海外市場驗證",
    description: "先測試目標國家、產品與買家需求，確認值得投入的市場方向。",
    icon: ClipboardCheck,
  },
  {
    title: "探廠短影音",
    description: "把工廠現場、生產流程與產品優勢轉成海外買家看得懂的信任內容。",
    icon: Camera,
  },
  {
    title: "Google SEO",
    description: "建立能被海外採購商搜尋的網站內容，持續累積品牌與自然搜尋資產。",
    icon: BarChart3,
  },
  {
    title: "海外廣告",
    description: "精準觸及目標市場與產業受眾，快速取得可追蹤的買家回應。",
    icon: Megaphone,
  },
  {
    title: "海外內容行銷",
    description: "持續發布產品、工廠與案例內容，讓買家在決策過程中反覆看見企業。",
    icon: Video,
  },
  {
    title: "海外 B2B 詢盤",
    description: "收集採購需求與買家資料，交由業務持續跟進、報價與推動樣品合作。",
    icon: UsersRound,
  },
  {
    title: "持續成交",
    description: "把內容、流量、詢盤與業務追蹤串成可持續優化的海外獲客系統。",
    icon: Factory,
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Overseas Acquisition Flow
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              製造業海外獲客流程
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted lg:ml-auto">
            從第一階段市場驗證開始，串連內容、搜尋、廣告、詢盤與業務跟進，建立能長期運作的海外獲客系統。
          </p>
        </div>

        <div className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-14 lg:gap-y-16">
          <div className="pointer-events-none absolute left-0 right-0 top-[5.5rem] hidden h-1 rounded-full bg-[linear-gradient(90deg,transparent,rgba(18,59,93,0.36),rgba(244,181,94,0.58),transparent)] lg:block" />
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            const isRowEnd = index === 3;
            const isLast = index === flowSteps.length - 1;

            return (
              <motion.article
                className="relative rounded-[1.35rem] border border-border bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.07)]"
                initial={{ opacity: 0, y: 18 }}
                key={step.title}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {!isLast ? (
                  <div
                    aria-hidden="true"
                    className={[
                      "absolute z-10 flex items-center justify-center",
                      "left-1/2 top-full h-12 -translate-x-1/2 sm:hidden",
                      isRowEnd
                        ? "lg:hidden"
                        : "lg:flex lg:left-full lg:top-[5.5rem] lg:h-12 lg:w-16 lg:-translate-x-1/2 lg:-translate-y-1/2",
                    ].join(" ")}
                  >
                    <span className="hidden h-1 w-10 rounded-full bg-primary/55 lg:block" />
                    <span className="hidden h-10 w-10 place-items-center rounded-full border border-accent/45 bg-primary text-xl font-bold text-accent shadow-[0_12px_30px_rgba(18,59,93,0.22)] lg:grid">
                      →
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-accent/45 bg-primary text-xl font-bold text-accent shadow-[0_12px_30px_rgba(18,59,93,0.22)] lg:hidden">
                      ↓
                    </span>
                  </div>
                ) : null}
                <div className="flex items-start justify-between gap-4">
                  <span className="text-5xl font-extrabold leading-none tracking-normal text-primary/14">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-background text-primary shadow-sm ring-1 ring-border/80">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-7 text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
