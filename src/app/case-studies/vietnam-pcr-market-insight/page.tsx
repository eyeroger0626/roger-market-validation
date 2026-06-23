import type { Metadata } from "next";
import Link from "next/link";
import { MarketValidationAuthorBlock } from "@/components/author/market-validation-author-block";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  Globe2,
  Lightbulb,
  MessageSquareText,
  PackageCheck,
  Recycle,
  Target,
  UsersRound,
  Video,
} from "lucide-react";

const pageTitle =
  "越南 PCR 市場驗證案例｜500 美金取得 3 筆詢盤，更重要的是看見市場真正的阻力";
const pageDescription =
  "台灣 PCR 再生塑膠材料製造商透過 TikTok 與短影音測試越南市場，投入 500 美金取得 3 筆詢盤，並發現越南市場對 PCR 存在明顯認知偏見。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "PCR 市場開發",
    "越南市場開發",
    "再生塑膠出口",
    "PCR 材料外銷",
    "越南採購商",
    "海外市場驗證",
    "製造業海外獲客",
    "TikTok B2B 行銷",
    "塑膠原料出口",
    "ESG 材料市場",
    "越南 PCR 市場需求",
    "PCR 材料越南市場",
    "如何開發越南塑膠市場",
    "再生塑膠外銷案例",
    "海外市場驗證案例",
    "TikTok 開發海外市場",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const clientFacts = [
  { label: "公司", value: "惠嘉電實業" },
  { label: "產業類別", value: "再生塑膠材料製造" },
  { label: "主要產品", value: "PCR 再生塑膠原料" },
  { label: "案例定位", value: "Market Insight Case" },
];

const targetMarkets = [
  "塑膠射出成型廠",
  "塑膠製品製造商",
  "環保材料採購商",
  "出口買家",
];

const strategyItems = [
  {
    title: "探廠短影音",
    icon: Video,
    description:
      "透過工廠現場、生產流程與材料應用畫面，讓越南市場先看見供應商能力。",
  },
  {
    title: "TikTok 廣告測試",
    icon: Target,
    description:
      "以越南市場為測試範圍，觀察短影音內容能否帶來採購商互動與市場訊號。",
  },
  {
    title: "越南在地語言內容",
    icon: Globe2,
    description:
      "將 PCR 的應用價值轉成越南受眾更容易理解的內容語言。",
  },
  {
    title: "市場留言分析",
    icon: MessageSquareText,
    description:
      "不只看詢盤數，也分析留言與互動，找出市場對 PCR 的真實認知狀態。",
  },
];

const metrics = [
  { value: "500 USD", label: "廣告預算", icon: BadgeDollarSign },
  { value: "3 筆詢盤", label: "有效詢盤", icon: UsersRound },
  { value: "TikTok", label: "投放平台", icon: Video },
  { value: "市場洞察", label: "案例定位", icon: Lightbulb },
];

const marketSignals = [
  "原生料比 PCR 更好",
  "PCR 無法取代 HDPE",
  "PCR như muối bỏ biển",
];

const misconceptionPoints = [
  "市場可能誤以為產品競爭力不足",
  "市場可能誤以為價格太高",
  "市場可能誤以為沒有需求",
  "但真正問題是市場尚未理解 PCR 的價值",
];

const strategyAdjustments = [
  "強調 GRS 國際認證",
  "強調性能接近原生料",
  "增加免費寄樣機制",
  "導入工廠實景與生產照片",
  "建立市場信任感",
  "透過實際樣品取代文字說服",
  "從教育市場開始建立需求",
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

export default function VietnamPcrMarketInsightPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_8%,rgba(201,151,74,0.18),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f3f7fa_100%)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-[0_10px_30px_rgba(18,59,93,0.08)]">
                Market Insight Case
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                越南 PCR 市場驗證案例
                <span className="block text-primary">
                  500 美金取得 3 筆詢盤，更重要的是看見市場真正的阻力
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                這不是一個單純追求低成本詢盤的案例，而是透過 TikTok 與短影音測試，提前看見越南市場對 PCR 的認知偏見與教育成本。
              </p>
              <div className="mt-8">
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
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <SectionHeader
            eyebrow="Case Summary"
            title="案例摘要"
            description="許多台灣製造業在開發海外市場時，最大的風險並不是找不到客戶，而是在投入大量資源之後，才發現市場根本不買單。"
          />
          <div className="grid gap-6 text-base leading-8 text-muted sm:text-lg">
            <p>
              本次案例來自台灣再生塑膠材料製造商惠嘉電實業。客戶希望了解越南市場對 PCR（Post-Consumer Recycled Material，再生塑膠原料）的接受度，因此在正式投入業務開發、代理商合作與海外展會之前，先透過短影音與廣告進行市場驗證。
            </p>
            <div className="rounded-[1.5rem] border border-accent/25 bg-[linear-gradient(135deg,#ffffff_0%,#f7efe2_52%,#eef4f7_100%)] p-6 shadow-[0_20px_65px_rgba(201,151,74,0.13)]">
              <p className="text-xl font-semibold leading-8 text-primary sm:text-2xl">
                最終共投入約 500 美金廣告預算，取得 3 筆有效詢盤。
              </p>
              <p className="mt-4 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                真正的價值在於：成功發現越南市場對 PCR 的核心認知障礙。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client Background"
            title="客戶背景"
            description="惠嘉電實業專注於再生塑膠材料製造，主要產品為 PCR 再生塑膠原料。"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clientFacts.map((fact) => (
              <div
                className="rounded-[1.35rem] border border-border bg-white p-5 shadow-sm"
                key={fact.label}
              >
                <p className="text-sm font-semibold text-secondary">
                  {fact.label}
                </p>
                <p className="mt-3 text-lg font-semibold leading-7 text-primary">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-border bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-foreground">
              主要市場
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {targetMarkets.map((market) => (
                <span
                  className="rounded-full bg-background px-4 py-2 text-sm font-semibold text-primary"
                  key={market}
                >
                  {market}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <SectionHeader
            eyebrow="Problem"
            title="客戶遇到的問題"
            description="隨著全球 ESG 與永續議題升溫，PCR 材料逐漸受到國際品牌重視。然而客戶面臨一個重要問題：越南市場真的願意接受 PCR 嗎？"
          />
          <div className="rounded-[1.5rem] border border-border bg-background p-6 text-base leading-8 text-muted sm:text-lg">
            <p>
              在沒有驗證之前，沒有人知道答案。如果直接投入展會、海外代理商、業務出差與市場開發，可能花費數十萬甚至上百萬元後，才發現市場教育成本遠高於預期。
            </p>
            <p className="mt-4">
              因此客戶希望先透過低成本方式測試市場反應，確認問題究竟來自產品、價格、需求，還是市場尚未理解 PCR 的價值。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Market Validation Strategy"
            title="市場驗證策略"
            description="本次專案的核心目標不是立即成交，而是取得真實市場訊號，驗證市場認知而非只驗證產品。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {strategyItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm"
                  key={item.title}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background text-primary shadow-sm">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold text-accent">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="TikTok Results"
            title="TikTok 投放成果"
            description="從數字來看，這並不是一個低成本詢盤案例。但它揭露的市場情報，遠比單純詢盤數量更有價值。"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  className="rounded-[1.5rem] border border-primary/10 bg-background p-6 shadow-[0_20px_65px_rgba(18,59,93,0.08)]"
                  key={`result-${metric.label}`}
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
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <SectionHeader
            eyebrow="Market Bias"
            title="越南市場對 PCR 的認知偏見"
            description="雖然詢盤數量不高，但廣告留言區透露出極具價值的市場情報。"
          />
          <div className="grid gap-5">
            {marketSignals.map((signal) => (
              <div
                className="rounded-[1.5rem] border border-border bg-white p-6 text-xl font-semibold leading-8 text-primary shadow-sm"
                key={signal}
              >
                <MessageSquareText
                  aria-hidden="true"
                  className="mb-4 h-6 w-6 text-accent"
                />
                {signal}
              </div>
            ))}
            <div className="rounded-[1.5rem] border border-accent/25 bg-[linear-gradient(135deg,#ffffff_0%,#f7efe2_52%,#eef4f7_100%)] p-6">
              <p className="text-base font-semibold leading-8 text-muted">
                「PCR như muối bỏ biển」意思接近「PCR 就像鹽丟進大海一樣微不足道」。這代表市場目前對 PCR 存在明顯認知偏見。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="HDPE Misconception"
            title="HDPE 迷思分析"
            description="問題不在產品，而在市場教育。若沒有先做驗證，企業很容易把市場認知障礙誤判成產品問題。"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {misconceptionPoints.map((point) => (
              <div
                className="rounded-[1.35rem] border border-border bg-background p-5 text-sm font-semibold leading-6 text-primary"
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

      <section className="bg-[linear-gradient(135deg,#0b1b2b_0%,#123b5d_100%)] py-20 text-white sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Market Signal
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              「PCR như muối bỏ biển」市場訊號分析
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              這句留言不是單純的負面評論，而是市場認知狀態的直接訊號。它提醒企業：越南市場目前可能仍需要理解 PCR 的材料價值、應用場景與認證可信度。
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/12 bg-white/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur">
            <Lightbulb aria-hidden="true" className="h-9 w-9 text-accent" />
            <p className="mt-6 text-2xl font-semibold leading-9">
              這項情報的價值，遠高於單純的詢盤數量。
            </p>
            <p className="mt-5 text-base leading-8 text-white/68">
              因為它幫助企業避免在錯誤方向投入更多廣告、展會或業務資源。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <SectionHeader
            eyebrow="Strategic Value"
            title="為什麼這個情報比詢盤更有價值"
            description="如果沒有先進行市場驗證，企業可能會誤判產品競爭力不足、價格太高或市場沒有需求。"
          />
          <div className="rounded-[1.5rem] border border-border bg-background p-6 text-base leading-8 text-muted sm:text-lg">
            <p>
              實際上，本次測試揭露的真正問題是市場尚未理解 PCR 的價值。這種認知障礙如果沒有提前發現，後續無論投入多少廣告、展會或業務資源，都可能面臨相同阻力。
            </p>
            <p className="mt-4">
              因此，本案例的重點不是詢盤少，而是企業在正式擴大投入之前，提早看見了越南 PCR 市場最大的成交障礙。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Next Strategy"
            title="後續策略調整"
            description="根據本次測試結果，後續廣告與市場溝通方向從單純推廣產品，轉向建立認證、樣品與工廠實景信任。"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strategyAdjustments.map((item) => (
              <div
                className="rounded-[1.35rem] border border-border bg-white p-5 text-sm font-semibold leading-6 text-primary shadow-sm"
                key={item}
              >
                <PackageCheck
                  aria-hidden="true"
                  className="mb-4 h-5 w-5 text-accent"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-8">
          <Recycle aria-hidden="true" className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            結論
          </h2>
          <div className="mx-auto mt-6 grid max-w-4xl gap-5 text-left text-base leading-8 text-muted sm:text-lg">
            <p>
              海外市場驗證的目的，從來不只是找到客戶。更重要的是在投入大量資源之前，先看見市場真正的需求與阻力。
            </p>
            <p>
              惠嘉電 PCR 案例證明，即使不是所有測試都能立即帶來大量詢盤，但每一次市場驗證，都能幫助企業更接近真實市場。
            </p>
            <p>
              本次專案雖然僅取得 3 筆詢盤，卻成功揭露越南 PCR 市場最大的成交障礙來自認知偏見，而非產品本身。這些市場洞察，往往才是最有價值的資產。
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
                想在投入展會或代理商開發前，先看見市場真正阻力？
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                歡迎與我們聯繫。星啟夢圓行銷將協助您透過製造業海外市場驗證系統，先確認市場需求與市場阻力，再決定是否擴大投入。
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
