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
            </div>

            <figure className="border-t border-border/70 bg-primary/[0.03] p-5 sm:p-7 lg:border-l lg:border-t-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-[0_22px_70px_rgba(15,23,42,0.14)]">
                <Image
                  alt="Roger 海外市場驗證系統創建者，協助台灣製造業取得海外詢盤"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  src="/images/roger-market-validation-system.JPG"
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
