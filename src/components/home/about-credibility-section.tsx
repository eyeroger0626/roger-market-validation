import { BadgeCheck, ImageIcon, MapPinned, Play } from "lucide-react";
import { AssetImage } from "@/components/ui/asset-image";
import { AssetVideo } from "@/components/ui/asset-video";
import { VIDEO_SOURCES } from "@/lib/video-sources";

const profileItems = [
  "代表人 Roger",
  "台中市青年諮詢委員",
  "專注製造業海外市場驗證",
];

const validatedMarkets = [
  { flag: "🇺🇸", name: "美國", style: "flag-us" },
  { flag: "🇻🇳", name: "越南", style: "flag-vn" },
  { flag: "🇪🇺", name: "歐洲", style: "flag-eu" },
  { flag: "🇵🇭", name: "菲律賓", style: "flag-ph" },
  { flag: "🇨🇴", name: "哥倫比亞", style: "flag-co" },
  { flag: "🇷🇺", name: "俄羅斯", style: "flag-ru" },
  { flag: "🇳🇿", name: "紐西蘭", style: "flag-nz" },
];

export function AboutCredibilitySection() {
  return (
    <section id="about" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-border/80 bg-white/78 p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8 lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              About Company
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              關於星啟夢圓行銷
            </h2>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[1.35rem] border border-border bg-background text-primary shadow-sm">
              <AssetImage
                alt="星啟夢圓行銷團隊與企業交流"
                className="object-cover"
                fallback={
                  <div className="flex h-full flex-col justify-between bg-[linear-gradient(135deg,#f8fbfd_0%,#dce7ee_100%)] p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <ImageIcon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-semibold text-muted">
                      公司橫式照片區
                    </p>
                  </div>
                }
                src="/assets/about/company-photo.jpg"
              />
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="grid max-w-[48rem] gap-6 text-base leading-8 text-muted sm:text-[1.05rem] sm:leading-9">
              <p className="leading-9">
                <span className="block">
                  星啟夢圓行銷長期協助台灣製造業透過探廠短影音、海外廣告測試與市場反應分析，
                </span>
                <span className="block">
                  在投入大型展會、阿里國際站或海外代理開發之前，先取得真實市場訊號。
                </span>
              </p>
              <div className="rounded-[1.35rem] border border-accent/25 bg-[linear-gradient(135deg,#ffffff_0%,#f7efe2_48%,#eef4f7_100%)] px-6 py-8 shadow-[0_22px_70px_rgba(201,151,74,0.16)]">
                <p className="bg-[linear-gradient(135deg,#123b5d_0%,#c9974a_48%,#8b642b_100%)] bg-clip-text text-[2.1rem] font-extrabold leading-tight text-transparent sm:text-[2.4rem] lg:text-[2.7rem]">
                  <span className="block">先驗證需求</span>
                  <span className="block">再投入預算</span>
                </p>
                <p className="mt-4 max-w-2xl text-sm font-semibold leading-6 text-muted sm:text-base sm:leading-7">
                  比起花幾十萬參展後才發現市場沒反應，我們更相信先用小成本取得真實市場訊號。
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {profileItems.map((item) => (
                <div
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 p-4 text-sm font-semibold leading-6 text-primary"
                  key={item}
                >
                  <BadgeCheck
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-accent"
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-background/80 p-5">
              <div className="flex items-center gap-3">
                <MapPinned aria-hidden="true" className="h-5 w-5 text-accent" />
                <p className="text-sm font-semibold text-muted">
                  海外市場驗證經驗
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {validatedMarkets.map((market) => (
                  <span
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    key={market.name}
                  >
                    <span
                      aria-hidden="true"
                      className={`flag-visual ${market.style}`}
                    >
                      {market.flag}
                    </span>
                    {market.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-border bg-[linear-gradient(135deg,#f8fbfd_0%,#ffffff_100%)] p-5 shadow-[0_20px_65px_rgba(15,23,42,0.07)] lg:col-span-2 lg:grid lg:grid-cols-[0.36fr_0.64fr] lg:items-center lg:gap-8 lg:p-7">
            <div className="mx-auto w-full max-w-[15.5rem] rounded-[2.6rem] border border-slate-900 bg-slate-950 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:max-w-[16.25rem]">
              <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-black">
                <AssetVideo
                  className="h-full w-full object-cover"
                  fallback={
                    <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_18%_12%,rgba(244,181,94,0.18),transparent_32%),linear-gradient(160deg,#0b1b2b_0%,#123b5d_100%)] p-5 text-white">
                      <div className="flex items-center justify-between">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-accent ring-1 ring-white/10">
                          <Play aria-hidden="true" className="h-5 w-5" />
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                          Social Trade
                        </span>
                      </div>
                      <div>
                        <div className="h-2 w-4/5 rounded-full bg-white/28" />
                        <div className="mt-3 h-2 w-2/3 rounded-full bg-accent/60" />
                        <div className="mt-5 grid gap-2">
                          <div className="h-9 rounded-xl border border-white/10 bg-white/10" />
                          <div className="h-9 rounded-xl border border-white/10 bg-white/10" />
                        </div>
                      </div>
                    </div>
                  }
                  src={VIDEO_SOURCES.socialTrade}
                />
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Social Trade Video
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                外貿真的變了，買家早就在社群上篩選供應商
              </h3>
              <p className="mt-5 text-base leading-8 text-muted [text-wrap:pretty] sm:text-lg">
                過去很多工廠把展會當成開發海外客戶的起點，但現在的買家在到展會之前，往往已經在線上看過一輪供應商。社群內容、探廠影片與短影音，正在變成新一代海外買家判斷工廠實力與信任感的重要入口。
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "線上篩選，線下確認，現場成交",
                  "一支 30 秒工廠影片，比 20 頁型錄更容易建立信任",
                  "中小批發商、跨境電商與新一代採購者，正在社群上尋找供應商",
                ].map((item) => (
                  <div
                    className="rounded-2xl border border-border bg-white p-4 text-sm font-semibold leading-6 text-primary shadow-sm"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
