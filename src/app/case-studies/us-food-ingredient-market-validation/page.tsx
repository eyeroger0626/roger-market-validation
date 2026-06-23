import type { Metadata } from "next";
import Link from "next/link";
import { MarketValidationAuthorBlock } from "@/components/author/market-validation-author-block";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  Clock3,
  Factory,
  Globe2,
  Handshake,
  LineChart,
  PackageCheck,
  Target,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "美國食品原料市場驗證案例｜4天取得42筆詢盤並完成樣品付款｜星啟夢圓行銷",
  description:
    "台灣食品原料供應商透過海外市場驗證系統，在4天內取得42筆美國詢盤並完成樣品付款，驗證美國市場需求。",
  openGraph: {
    title:
      "美國食品原料市場驗證案例｜4天取得42筆詢盤並完成樣品付款｜星啟夢圓行銷",
    description:
      "台灣食品原料供應商透過海外市場驗證系統，在4天內取得42筆美國詢盤並完成樣品付款，驗證美國市場需求。",
    type: "article",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "美國食品原料市場驗證案例｜4天取得42筆詢盤並完成樣品付款｜星啟夢圓行銷",
    description:
      "台灣食品原料供應商透過海外市場驗證系統，在4天內取得42筆美國詢盤並完成樣品付款，驗證美國市場需求。",
  },
};

const challenges = [
  "不確定海外市場是否有實際需求",
  "參展成本高昂",
  "阿里巴巴詢盤品質參差不齊",
  "難以直接接觸終端買家",
  "缺乏市場驗證數據作為決策依據",
];

const validationGoals = [
  "是否能吸引美國買家主動留下資料",
  "哪種類型買家最有興趣",
  "詢盤成本是否合理",
  "是否有機會進一步進入打樣與採購階段",
];

const processSteps = [
  {
    title: "探廠短影音拍攝",
    icon: Factory,
    points: ["生產流程", "品質管理", "原料供應能力", "包裝與出貨能力"],
  },
  {
    title: "多語內容製作",
    icon: Globe2,
    points: [
      "One-stop supply solution",
      "Low MOQ market testing",
      "Taiwan supplier",
      "FDA / ISO 管理體系",
      "Simplifying sourcing process",
    ],
  },
  {
    title: "美國市場廣告測試",
    icon: Target,
    points: [
      "Beverage Brands",
      "Bubble Tea Chains",
      "Dessert Brands",
      "Food Service Buyers",
      "Importers & Distributors",
    ],
  },
];

const metrics = [
  {
    value: "4 天",
    label: "測試期間",
    icon: Clock3,
  },
  {
    value: "42 筆",
    label: "海外詢盤",
    icon: UsersRound,
  },
  {
    value: "USD 100",
    label: "廣告花費",
    icon: BadgeDollarSign,
  },
  {
    value: "USD 2.38",
    label: "平均詢盤成本 / Lead",
    icon: LineChart,
  },
];

const leadSources = [
  "美國飲料品牌",
  "餐飲品牌",
  "原料採購商",
  "創業品牌",
];

const buyerRoles = ["Owner", "Founder", "Purchasing", "Brand Operator"];

const meaningPoints = [
  "是否有需求",
  "哪個市場反應最好",
  "哪種買家最有興趣",
  "詢盤成本是否合理",
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function UsFoodIngredientMarketValidationPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_8%,rgba(201,151,74,0.18),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f3f7fa_100%)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-[0_10px_30px_rgba(18,59,93,0.08)]">
                美國食品原料市場驗證案例
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                美國食品原料市場驗證案例｜
                <span className="block text-primary">
                  4天取得42筆詢盤並完成樣品付款
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                台灣食品原料供應商透過海外市場驗證系統，在投入大量資源之前，先以短影音、廣告與市場測試確認美國買家是否真的存在需求。
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0d2f4d]"
                  href="/#contact"
                >
                  立即預約市場評估
                  <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/80 bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <div
                      className="rounded-[1.35rem] border border-primary/10 bg-[linear-gradient(135deg,#ffffff_0%,#eef4f7_100%)] p-5"
                      key={metric.label}
                    >
                      <Icon
                        aria-hidden="true"
                        className="mb-5 h-6 w-6 text-accent"
                      />
                      <p className="text-3xl font-semibold text-primary">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-muted">
                        {metric.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeader
            eyebrow="Client Background"
            title="客戶背景"
            description="本次合作對象為台灣食品原料供應商，主要產品包含爆爆珠（Popping Pearls）、茶葉（Tea Leaves）與糖漿（Syrup），具備完整供應能力，可提供飲料品牌與餐飲業者一站式原料採購方案。"
          />
          <div className="grid gap-6 text-base leading-8 text-muted sm:text-lg">
            <p>
              過去客戶主要透過展覽、阿里巴巴國際站以及既有經銷商體系開發海外市場。然而隨著國際市場競爭加劇，獲客成本持續提高，客戶希望尋找更低成本、更可量化的方式驗證美國市場需求。
            </p>
            <div className="rounded-[1.5rem] border border-accent/25 bg-[linear-gradient(135deg,#ffffff_0%,#f7efe2_52%,#eef4f7_100%)] p-6 shadow-[0_20px_65px_rgba(201,151,74,0.13)]">
              <p className="text-xl font-semibold leading-8 text-primary sm:text-2xl">
                在正式投入大量資源之前，客戶希望先回答一個關鍵問題：
              </p>
              <p className="mt-4 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                「美國市場真的對我們的產品有需求嗎？」
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Challenge"
            title="面臨的挑戰"
            description="許多台灣製造業在開發海外市場時，都會遇到相同問題。如果在未驗證市場需求的情況下直接投入大量預算，往往容易造成資源浪費。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {challenges.map((challenge) => (
              <div
                className="rounded-[1.35rem] border border-border bg-white p-5 text-sm font-semibold leading-6 text-primary shadow-sm"
                key={challenge}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mb-4 h-5 w-5 text-accent"
                />
                {challenge}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-border bg-white p-6 shadow-soft">
            <p className="text-base font-semibold text-foreground">
              因此本次專案目標並非直接追求成交，而是透過市場驗證方式確認：
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {validationGoals.map((goal) => (
                <div
                  className="rounded-2xl bg-background px-4 py-3 text-sm font-semibold text-muted"
                  key={goal}
                >
                  {goal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Validation System"
            title="驗證方式"
            description="本次專案採用海外市場驗證系統進行測試，以內容素材、受眾測試與詢盤收集建立可判斷的市場訊號。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  className="rounded-[1.75rem] border border-border bg-background p-6 shadow-sm"
                  key={step.title}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold text-accent">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <div className="mt-5 grid gap-3">
                    {step.points.map((point) => (
                      <div
                        className="rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-muted"
                        key={point}
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Results"
            title="驗證成果"
            description="測試期間共 4 天，透過 Meta 廣告表單蒐集有興趣買家資料，取得可量化的市場反應。"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  className="rounded-[1.5rem] border border-primary/10 bg-white p-6 shadow-[0_20px_65px_rgba(18,59,93,0.08)]"
                  key={`results-${metric.label}`}
                >
                  <Icon aria-hidden="true" className="h-6 w-6 text-accent" />
                  <p className="mt-6 text-3xl font-semibold text-primary">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-muted">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-border bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground">
                詢盤來源
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {leadSources.map((source) => (
                  <span
                    className="rounded-full bg-background px-4 py-2 text-sm font-semibold text-primary"
                    key={source}
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground">
                名單品質
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                詢盤者包含以下角色，並非一般消費者流量。
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {buyerRoles.map((role) => (
                  <span
                    className="rounded-full bg-background px-4 py-2 text-sm font-semibold text-primary"
                    key={role}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#0b1b2b_0%,#123b5d_100%)] py-20 text-white sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Sample Payment
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              樣品付款案例
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              在驗證過程中，其中一位美國買家主動詢問包裝規格、MOQ、樣品寄送方式。經過雙方溝通後，買家決定進行樣品測試。
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/12 bg-white/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur">
            <PackageCheck aria-hidden="true" className="h-9 w-9 text-accent" />
            <p className="mt-6 text-2xl font-semibold leading-9">
              從收到付款連結到完成付款，僅約 11 分鐘。
            </p>
            <p className="mt-5 text-base leading-8 text-white/68">
              這代表市場不只是有興趣，而是真正存在採購需求。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeader
            eyebrow="Insight"
            title="本次驗證的意義"
            description="許多企業認為海外市場開發必須投入大量參展預算、長時間業務開發與高昂平台費用。但在投入大筆資源之前，可以先透過市場驗證方式確認關鍵訊號。"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {meaningPoints.map((point) => (
              <div
                className="rounded-[1.35rem] border border-border bg-background p-5 text-base font-semibold text-primary"
                key={point}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mb-4 h-5 w-5 text-accent"
                />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-8">
          <Handshake aria-hidden="true" className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            結論
          </h2>
          <div className="mx-auto mt-6 grid max-w-4xl gap-5 text-left text-base leading-8 text-muted sm:text-lg">
            <p>
              本次美國食品原料市場驗證專案證明：即使在有限預算下，仍然可以透過短影音、海外廣告與市場測試快速驗證海外需求。
            </p>
            <p>
              在 4 天內取得 42 筆海外詢盤，並成功獲得樣品付款，顯示市場對台灣食品原料具備實際需求。
            </p>
            <p>
              對於希望開發海外市場的台灣製造業而言，與其直接投入大量資源，不如先驗證市場需求，再決定是否擴大投入。
            </p>
          </div>
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
                想知道您的產品是否適合海外市場？
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                歡迎預約免費初步評估。我們將協助您透過市場驗證方式，先確認海外需求，再決定是否擴大投入。
              </p>
            </div>
            <Link
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0d2f4d] lg:mt-0"
              href="/#contact"
            >
              立即預約市場評估
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
