"use client";

import { motion } from "framer-motion";
import { Globe2, MessageSquareText, Ship, TrendingUp } from "lucide-react";
import { AssetImage } from "@/components/ui/asset-image";

const validationSignals = [
  {
    label: "Buyer Signal",
    value: "海外採購詢盤",
    icon: MessageSquareText,
  },
  {
    label: "Market Test",
    value: "小額市場測試",
    icon: Globe2,
  },
  {
    label: "Signal Analysis",
    value: "市場訊號分析",
    icon: TrendingUp,
  },
];

function GlobalTradeFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_22%_28%,rgba(244,181,94,0.22),transparent_18%),radial-gradient(circle_at_74%_34%,rgba(47,111,126,0.45),transparent_25%),linear-gradient(135deg,#f8fbfd_0%,#dce7ee_48%,#ffffff_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,59,93,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(18,59,93,0.08)_1px,transparent_1px)] bg-[size:54px_54px]" />
      <div className="absolute left-[13%] top-[26%] h-28 w-36 rounded-2xl border border-white/70 bg-white/80 p-3 shadow-[0_24px_70px_rgba(18,59,93,0.12)]">
        <div className="h-3 w-20 rounded-full bg-primary/30" />
        <div className="mt-4 grid gap-2">
          <div className="h-2 rounded-full bg-accent/80" />
          <div className="h-2 w-3/4 rounded-full bg-primary/18" />
          <div className="h-2 w-1/2 rounded-full bg-primary/18" />
        </div>
      </div>
      <div className="absolute bottom-[18%] right-[12%] h-32 w-44 rounded-3xl border border-white/70 bg-white/85 p-4 shadow-[0_24px_70px_rgba(18,59,93,0.12)]">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
            <Ship aria-hidden="true" className="h-5 w-5" />
          </div>
          <div>
            <div className="h-2 w-20 rounded-full bg-primary/36" />
            <div className="mt-2 h-2 w-14 rounded-full bg-primary/18" />
          </div>
        </div>
        <div className="mt-5 h-px bg-primary/12" />
        <div className="mt-4 flex gap-2">
          <div className="h-8 flex-1 rounded-xl bg-primary/10" />
          <div className="h-8 flex-1 rounded-xl bg-secondary/16" />
        </div>
      </div>
      <div className="absolute left-[24%] top-[48%] h-px w-[48%] rotate-[-8deg] bg-accent/80" />
      <div className="absolute left-[46%] top-[38%] h-px w-[32%] rotate-[28deg] bg-primary/25" />
      <div className="absolute left-[24%] top-[47%] h-4 w-4 rounded-full bg-accent shadow-[0_0_0_10px_rgba(244,181,94,0.16)]" />
      <div className="absolute right-[22%] top-[34%] h-3 w-3 rounded-full bg-primary shadow-[0_0_0_9px_rgba(18,59,93,0.1)]" />
      <div className="absolute bottom-[32%] left-[54%] h-3.5 w-3.5 rounded-full bg-secondary shadow-[0_0_0_9px_rgba(47,111,126,0.12)]" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(47,111,126,0.16),transparent_34%),linear-gradient(180deg,#f8fbfd_0%,#eef4f7_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,59,93,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(18,59,93,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-x-12 lg:px-8 lg:py-16">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-[0_10px_30px_rgba(18,59,93,0.08)] backdrop-blur">
            低成本市場驗證｜海外詢盤測試｜製造業社媒外貿出海
          </p>

          <h1 className="max-w-3xl tracking-normal text-foreground">
            <span className="block whitespace-nowrap text-[2.25rem] font-semibold leading-[1.12] sm:text-[3.35rem] lg:text-[3.55rem] xl:text-[4.1rem]">
              詢盤｜越來越難成交
            </span>
            <span className="block whitespace-nowrap text-[2.25rem] font-semibold leading-[1.12] sm:text-[3.35rem] lg:text-[3.55rem] xl:text-[4.1rem]">
              展會｜成本越來越高
            </span>
            <span className="mt-3 block whitespace-nowrap text-[2.02rem] font-semibold leading-[1.18] text-primary sm:text-[2.7rem] lg:text-[2.9rem] xl:text-[3.4rem]">
              先驗證海外市場需求
            </span>
            <span className="block whitespace-nowrap text-[2.02rem] font-semibold leading-[1.18] text-primary sm:text-[2.7rem] lg:text-[2.9rem] xl:text-[3.4rem]">
              再決定是否擴大投入
            </span>
          </h1>

          <p className="mt-7 max-w-[44rem] text-[1.05rem] leading-8 text-muted [text-wrap:pretty] sm:text-lg sm:leading-9 lg:max-w-[46rem]">
            紅色供應鏈擠壓、平台價格競爭加劇，台灣製造業不能再只靠展會或阿里國際站碰運氣。星啟夢圓行銷協助工廠用短影音、海外廣告與小額預算，先測出海外買家的真實需求，再決定是否加碼投入。
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(18,59,93,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0d2f4d] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
              href="#featured-proof"
            >
              查看真實案例
            </a>
            <a
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-primary/15 bg-white/82 px-7 text-sm font-semibold text-primary shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
              href="#contact"
            >
              預約市場驗證諮詢
            </a>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_50%_45%,rgba(47,111,126,0.18),transparent_58%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.18)] ring-1 ring-primary/5">
            <div className="relative min-h-[32rem] overflow-hidden sm:min-h-[36rem] lg:min-h-[38rem]">
              <AssetImage
                alt="全球貿易與海外市場驗證主視覺"
                className="object-cover"
                fallback={<GlobalTradeFallback />}
                src="/assets/hero/global-trade-map.jpg"
              />
              <div className="absolute inset-x-5 top-5 flex flex-wrap items-center justify-between gap-3">
                <div className="rounded-full border border-white/75 bg-slate-950/68 px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
                  Factory → Buyer → Lead
                </div>
                <div className="rounded-full border border-accent/40 bg-slate-950/62 px-4 py-2 text-sm font-semibold text-accent shadow-sm backdrop-blur-md">
                  Market Validation
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                {validationSignals.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      className="rounded-2xl border border-white/18 bg-[#0b1b2b]/82 p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-md"
                      key={item.label}
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/18 text-accent ring-1 ring-accent/24">
                          <Icon aria-hidden="true" className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/62">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-bold text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

