import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe2 } from "lucide-react";

const verifiedMarkets = ["美國", "越南", "歐洲", "菲律賓"];

const relatedCases = [
  {
    title: "美國食品市場驗證",
    description:
      "100 USD 測試預算，4 天取得 40+ 筆美國採購商名單，平均 CPL 2.38 USD。",
    href: "/case-studies/us-food-ingredient-market-validation",
  },
  {
    title: "越南設備市場驗證",
    description: "300 USD 取得 129 筆 B2B 詢盤，平均 CPL 2.33 USD。",
    href: "/case-studies/vietnam-vacuum-packaging-market-validation",
  },
];

export function MarketValidationAuthorBlock() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(135deg,#ffffff_0%,#f3f7fa_100%)] shadow-[0_28px_90px_rgba(15,23,42,0.09)]">
          <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="p-7 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                作者
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Roger
              </h2>
              <p className="mt-3 text-lg font-semibold leading-7 text-primary">
                海外市場驗證系統創建者
                <span className="block text-base font-medium text-muted">
                  星啟夢圓行銷有限公司
                </span>
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                協助台灣製造業透過探廠短影音、海外廣告測試與市場驗證，在投入展會、阿里國際站或海外開發之前，先取得真實市場需求訊號。
              </p>

              <div className="mt-7">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Globe2 aria-hidden="true" className="h-4 w-4 text-accent" />
                  已驗證市場
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {verifiedMarkets.map((market) => (
                    <span
                      className="rounded-full border border-primary/10 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm"
                      key={market}
                    >
                      {market}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-primary">相關案例：</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {relatedCases.map((item) => (
                    <Link
                      className="group rounded-[1.25rem] border border-border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_18px_50px_rgba(18,59,93,0.1)]"
                      href={item.href}
                      key={item.href}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <BadgeCheck
                          aria-hidden="true"
                          className="mt-1 h-5 w-5 shrink-0 text-accent"
                        />
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-primary transition group-hover:translate-x-0.5"
                        />
                      </div>
                      <h3 className="mt-4 text-base font-semibold leading-6 text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <figure className="border-t border-border/70 bg-primary/[0.03] p-5 sm:p-7 lg:border-l lg:border-t-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-[0_22px_70px_rgba(15,23,42,0.14)]">
                <Image
                  alt="Roger 海外市場驗證系統創建者，協助台灣製造業取得海外詢盤"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  src="/images/roger-market-validation-system.jpg"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm font-medium text-muted">
                圖：海外市場驗證系統
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
