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
    title: "工廠訪談",
    description: "先整理產品、外銷經驗、目標市場與目前開發卡點，確認驗證方向。",
    icon: ClipboardCheck,
  },
  {
    title: "探廠拍攝",
    description: "把工廠現場、設備、生產流程與團隊可信度轉成海外買家能理解的素材。",
    icon: Camera,
  },
  {
    title: "短影音素材製作",
    description: "將工廠能力與產品應用整理成短影音內容，降低海外買家的理解成本。",
    icon: Video,
  },
  {
    title: "海外廣告測試",
    description: "用小額預算測試不同市場與受眾反應，觀察詢盤數量與買家意圖。",
    icon: Megaphone,
  },
  {
    title: "採購商名單收集",
    description: "整理主動回應的潛在買家資料，作為後續業務追蹤與市場判斷依據。",
    icon: UsersRound,
  },
  {
    title: "市場訊號分析",
    description: "分析詢盤內容、買家角色、需求強度與市場反應，判斷是否值得深入。",
    icon: BarChart3,
  },
  {
    title: "決定是否擴大投入",
    description: "根據驗證結果決定下一步：加碼廣告、增加內容、開發特定國家或暫緩投入。",
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
              Market Validation Flow
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              海外市場驗證流程
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted lg:ml-auto">
            不是先投入大量預算，而是用可追蹤的驗證流程，從工廠素材、廣告測試到市場訊號分析，協助老闆判斷下一步。
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
