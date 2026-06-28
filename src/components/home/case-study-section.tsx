"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ImageIcon, Sparkles } from "lucide-react";
import { AssetImage } from "@/components/ui/asset-image";

const caseHighlights = [
  {
    title: "美國食品海外獲客案例",
    industry: "食品製造業",
    market: "美國",
    image: "/assets/case-studies/usa-food/meta-ads-result.jpg",
    href: "/case-studies/us-food-ingredient-market-validation",
    metrics: ["100 USD", "40+ 採購商名單", "1 筆樣品單進展"],
  },
  {
    title: "越南設備海外獲客案例",
    industry: "包裝設備／封口機",
    market: "越南",
    image: "/assets/case-studies/vietnam-equipment/equipment-video-cover.jpg",
    href: "/case-studies/case-2",
    metrics: ["300 USD", "129 筆 B2B 詢盤", "設備需求已驗證"],
  },
  {
    title: "歐洲展會海外獲客策略案例",
    industry: "包裝設備／真空封口機",
    market: "德國／歐洲",
    href: "/case-studies/case-3",
    metrics: ["展會名片", "後續信任建立", "代理商開發機會"],
  },
];

export function CaseStudySection() {
  return (
    <section id="case-studies" className="bg-background py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Case Highlights
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              三個海外獲客案例，先看結果再看方法。
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted">
            從美國食品、越南設備到歐洲展後再行銷，把廣告數據、買家回應與信任素材轉換成可判斷的市場訊號。
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {caseHighlights.map((caseStudy, index) => (
            <motion.article
              className="group overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              initial={{ opacity: 0, y: 22 }}
              key={caseStudy.title}
              transition={{
                duration: 0.62,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.28 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Link className="flex h-full flex-col p-6 sm:p-7" href={caseStudy.href}>
                <div className="relative mb-8 h-64 overflow-hidden rounded-2xl border border-border bg-background text-primary">
                  {caseStudy.image ? (
                    <AssetImage
                      alt={caseStudy.title}
                      className="object-contain p-3"
                      fallback={
                        <div className="flex h-full w-full items-center justify-center">
                          <ImageIcon aria-hidden="true" className="h-7 w-7" />
                        </div>
                      }
                      src={caseStudy.image}
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-between bg-[linear-gradient(135deg,#0b1220_0%,#123b5d_54%,#2f6f7e_100%)] p-6 text-white">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/15">
                        <Sparkles aria-hidden="true" className="h-6 w-6 text-accent" />
                      </div>
                      <div className="grid gap-3">
                        <div className="h-3 w-3/4 rounded-full bg-white/75" />
                        <div className="h-3 w-1/2 rounded-full bg-white/35" />
                        <div className="mt-3 grid grid-cols-3 gap-3">
                          <div className="h-16 rounded-2xl bg-white/[0.12]" />
                          <div className="h-16 rounded-2xl bg-white/[0.18]" />
                          <div className="h-16 rounded-2xl bg-white/[0.12]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-secondary">
                    <span>{caseStudy.market}</span>
                    <span aria-hidden="true">／</span>
                    <span>{caseStudy.industry}</span>
                  </div>
                  <h3 className="mt-3 break-words text-2xl font-semibold text-foreground">
                    {caseStudy.title}
                  </h3>

                  <div className="mt-6 grid gap-3">
                    {caseStudy.metrics.map((metric) => (
                      <div
                        className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-primary"
                        key={metric}
                      >
                        {metric}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center text-sm font-semibold text-primary">
                    查看完整案例
                    <ArrowRight
                      aria-hidden="true"
                      className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
