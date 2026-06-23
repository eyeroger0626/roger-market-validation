import Image from "next/image";
import { BadgeCheck } from "lucide-react";

const resultCards = [
  {
    title: "美國市場驗證",
    value: "100 USD",
    detail: "40+ 採購商名單",
  },
  {
    title: "越南設備市場驗證",
    value: "300 USD",
    detail: "129 筆 B2B 詢盤",
  },
  {
    title: "已驗證市場",
    value: "美國｜越南",
    detail: "歐洲｜菲律賓",
  },
  {
    title: "驗證方式",
    value: "短影音｜海外廣告",
    detail: "市場測試",
  },
];

const methodTags = ["探廠短影音", "海外廣告測試", "市場訊號分析"];

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

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {resultCards.map((card) => (
                  <article
                    className="rounded-[1.25rem] border border-primary/10 bg-white p-5 shadow-sm"
                    key={card.title}
                  >
                    <div className="flex items-center gap-2">
                      <BadgeCheck
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-accent"
                      />
                      <p className="text-sm font-semibold text-primary">
                        {card.title}
                      </p>
                    </div>
                    <p className="mt-4 text-2xl font-semibold leading-tight text-foreground">
                      {card.value}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-muted">
                      {card.detail}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-accent/20 bg-[linear-gradient(135deg,rgba(201,151,74,0.12)_0%,rgba(238,244,247,0.92)_100%)] p-6">
                <h3 className="text-base font-semibold text-primary">
                  Roger 的海外市場驗證方法
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  不是先大量投入展會或平台費用，而是先用小額預算測試市場反應，確認海外買家是否願意詢問、索樣與回覆，再決定是否擴大投入。
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {methodTags.map((tag) => (
                    <span
                      className="rounded-full border border-primary/10 bg-white/80 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <figure className="border-t border-border/70 bg-primary/[0.03] p-5 sm:p-7 lg:border-l lg:border-t-0">
              <div className="rounded-[1.75rem] border border-border/80 bg-white p-4 shadow-[0_28px_90px_rgba(15,23,42,0.14)] sm:p-5">
                <div className="mb-4 inline-flex rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Market Validation System
                </div>
                <div className="rounded-[1.45rem] bg-[linear-gradient(135deg,#edf4f7_0%,#ffffff_42%,#e8f0f4_100%)] p-3">
                  <div className="relative h-[650px] overflow-hidden rounded-[1.2rem] border border-white bg-white shadow-[0_18px_56px_rgba(15,23,42,0.12)] sm:h-[700px] lg:h-[740px]">
                    <Image
                      alt="Roger 海外市場驗證系統創建者，協助台灣製造業取得海外詢盤"
                      className="object-contain object-center"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      src="/images/roger-market-validation-system.JPG"
                    />
                  </div>
                </div>
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
