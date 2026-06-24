import type { Metadata } from "next";
import Link from "next/link";
import { MarketValidationAuthorBlock } from "@/components/author/market-validation-author-block";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  Factory,
  Globe2,
  LineChart,
  MessageSquareText,
  PackageCheck,
  Target,
  UsersRound,
  Video,
} from "lucide-react";

const pageTitle = "300 美金取得 129 筆 B2B 詢盤｜越南設備市場驗證案例";
const pageDescription =
  "台灣真空包裝設備工廠透過探廠短影音、越南語內容與 Meta 廣告測試，在越南市場取得 129 筆 B2B 詢盤，平均 CPL 僅 2.33 USD。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "越南市場開發",
    "越南設備市場",
    "越南B2B開發",
    "越南詢盤",
    "設備外銷",
    "真空包裝機外銷",
    "包裝設備越南",
    "海外市場驗證",
    "製造業海外獲客",
    "B2B海外開發",
    "如何開發越南市場",
    "越南設備代理商開發",
    "真空包裝機越南市場",
    "包裝設備越南需求",
    "製造業海外市場驗證案例",
    "短影音開發海外市場",
    "海外詢盤測試案例",
    "越南設備經銷商開發",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    locale: "zh_TW",
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [socialShareImageUrl],
  },
};

const clientFacts = [
  { label: "客戶", value: "圓方圓興業股份有限公司" },
  { label: "成立", value: "1991年" },
  { label: "產業", value: "真空包裝設備 / 封口機設備 / 食品包裝設備" },
  { label: "認證", value: "CE / ISO / ETL" },
];

const challenges = [
  "不知道越南市場是否存在需求",
  "無法確認目標客群",
  "展會成本高",
  "外銷開發週期長",
  "缺乏市場驗證數據",
];

const processSteps = [
  {
    title: "工廠訪談",
    icon: Factory,
    intro: "了解產品、應用場景、客群與優勢，先確認市場驗證切入方向。",
    points: ["產品", "應用場景", "客群", "優勢"],
  },
  {
    title: "探廠拍攝",
    icon: Video,
    intro: "透過工廠現場與設備運作畫面，建立海外買家信任感。",
    points: ["工廠環境", "生產流程", "設備運作", "應用情境"],
  },
  {
    title: "製作越南語短影音",
    icon: Globe2,
    intro: "將設備價值轉換成越南買家看得懂的內容語言。",
    points: ["真空包裝應用", "食品包裝需求", "包裝材料搭配", "設備效益"],
  },
  {
    title: "Meta 廣告測試",
    icon: Target,
    intro: "以越南市場為測試範圍，針對具備設備需求的 B2B 受眾收集 Leads。",
    points: ["包裝材料商", "真空袋批發商", "食品加工廠", "包裝設備經銷商"],
  },
];

const metrics = [
  { value: "USD 300", label: "廣告預算", icon: BadgeDollarSign },
  { value: "129 筆", label: "B2B 詢盤", icon: UsersRound },
  { value: "USD 2.33", label: "平均 CPL", icon: LineChart },
  { value: "越南", label: "驗證市場", icon: Globe2 },
];

const buyerQuestions = [
  "設備價格",
  "MOQ",
  "批發合作",
  "經銷合作",
  "產品規格",
  "公司資訊",
];

const buyerData = ["公司名稱", "聯絡資訊", "採購需求"];

const insights = [
  "設備產業同樣可以透過短影音驗證市場。",
  "許多設備工廠習慣展示規格表，但海外買家更在意如何使用、解決什麼問題與實際應用情境。",
  "當設備內容轉換成買家看得懂的語言後，市場回應速度明顯提升。",
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

export default function VietnamVacuumPackagingMarketValidationPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_8%,rgba(201,151,74,0.18),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f3f7fa_100%)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-[0_10px_30px_rgba(18,59,93,0.08)]">
                越南設備市場驗證案例
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                越南設備市場驗證案例
                <span className="block text-primary">
                  300 美金取得 129 筆 B2B 詢盤
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                台灣真空包裝設備工廠透過探廠短影音、越南語內容與 Meta 廣告測試，在正式投入更多資源之前，先驗證越南市場是否存在真實 B2B 設備需求。
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
            eyebrow="Client Background"
            title="客戶背景"
            description="本次合作對象為圓方圓興業股份有限公司，成立於 1991 年，長期專注於真空包裝設備、封口機設備與食品包裝設備。"
          />
          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {clientFacts.map((fact) => (
                <div
                  className="rounded-[1.35rem] border border-border bg-background p-5"
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
            <div className="rounded-[1.5rem] border border-border bg-background p-6 text-base leading-8 text-muted sm:text-lg">
              <p>
                過去主要透過展會、經銷商與傳統外銷開發拓展海外市場。客戶希望開發越南市場，但無法確認越南市場是否真的有需求、哪些客群最有興趣，以及是否值得投入更多資源。
              </p>
              <p className="mt-4">
                因此，本次專案先以低成本方式驗證市場，讓決策建立在實際詢盤與買家回應之上。
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
            description="設備產業進入新市場前，往往需要先確認目標客群、需求強度與投入成本是否合理。"
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
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Validation Process"
            title="驗證方式"
            description="本次專案以工廠訪談、探廠拍攝、越南語短影音與 Meta 廣告測試，建立越南設備市場的初步需求證據。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
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
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {step.intro}
                  </p>
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
            description="透過越南市場 Meta 廣告測試，本次專案以 Leads 為目標，蒐集具備設備需求的 B2B 詢盤。"
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
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader
            eyebrow="Buyer Signals"
            title="買家詢問內容"
            description="買家主動詢問設備價格、合作條件與產品規格，部分買家也願意提供公司資訊與採購需求，作為後續開發依據。"
          />
          <div className="grid gap-5">
            <div className="rounded-[1.5rem] border border-border bg-background p-6">
              <MessageSquareText
                aria-hidden="true"
                className="h-7 w-7 text-accent"
              />
              <h3 className="mt-5 text-2xl font-semibold text-foreground">
                買家主動詢問
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {buyerQuestions.map((item) => (
                  <span
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-background p-6">
              <PackageCheck
                aria-hidden="true"
                className="h-7 w-7 text-accent"
              />
              <h3 className="mt-5 text-2xl font-semibold text-foreground">
                可作為後續開發依據
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {buyerData.map((item) => (
                  <span
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Insights"
            title="案例重點發現"
            description="設備買家不只看規格表，更需要看懂使用方式、問題解法與應用情境。"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {insights.map((insight) => (
              <div
                className="rounded-[1.5rem] border border-border bg-white p-6 text-base font-semibold leading-8 text-primary shadow-sm"
                key={insight}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mb-5 h-6 w-6 text-accent"
                />
                {insight}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#0b1b2b_0%,#123b5d_100%)] py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Core Result
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            USD 300
          </h2>
          <p className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            取得 129 筆 B2B 詢盤
          </p>
          <p className="mt-5 text-2xl font-semibold text-accent sm:text-3xl">
            平均 CPL 2.33 USD
          </p>
        </div>
      </section>

      <MarketValidationAuthorBlock />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-[linear-gradient(135deg,#ffffff_0%,#eef4f7_100%)] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.1)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Market Validation CTA
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                想知道你的設備是否適合開發越南市場？
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                透過短影音、海外廣告與市場測試，先取得市場訊號，再決定是否擴大投入。
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



