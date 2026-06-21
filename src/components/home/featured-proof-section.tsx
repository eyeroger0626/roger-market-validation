"use client";

import {
  BadgeDollarSign,
  CheckCircle2,
  ImageIcon,
  Play,
  UsersRound,
} from "lucide-react";
import { AssetImage } from "@/components/ui/asset-image";
import { LightboxImage } from "@/components/ui/lightbox-image";
import { YoutubeLazyEmbed } from "@/components/ui/youtube-lazy-embed";

const metrics = [
  {
    value: "100 USD",
    label: "廣告預算",
  },
  {
    value: "40+",
    label: "美國採購商名單",
  },
  {
    value: "2.38 USD",
    label: "平均 CPL",
  },
];

const storyPoints = [
  "讓海外買家先理解工廠實力",
  "補足阿里國際站與型錄建立不了的信任感",
  "讓停滯商機重新回到對話",
];

export function FeaturedProofSection() {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f3f7fa_100%)] py-24 sm:py-28 lg:py-32"
      id="featured-proof"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(47,111,126,0.16),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Featured Proof
            </p>
            <h2 className="mt-5 text-[2rem] font-semibold leading-[1.35] text-foreground sm:text-[2.65rem] sm:leading-[1.3] lg:text-[3rem]">
              <span className="block">美國食品市場驗證</span>
              <span className="block">讓停滯買家重新回流</span>
              <span className="block">並進入樣品付款流程</span>
            </h2>
            <p className="mt-6 max-w-[44rem] text-lg leading-8 text-muted [text-wrap:pretty]">
              同樣的工廠、同樣的產品。當海外買家真正理解工廠實力後，原本停滯的商機，才有機會重新推進。短影音不是為了做曝光，而是把工廠實力、產能與產品優勢，轉成海外買家看得懂、願意回覆、願意索樣的信任證據。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map((metric) => (
              <div
                className="rounded-[1.35rem] border border-primary/15 bg-[linear-gradient(135deg,#ffffff_0%,#eef4f7_100%)] p-6 shadow-[0_22px_70px_rgba(18,59,93,0.14)] ring-1 ring-white/80 backdrop-blur"
                key={metric.label}
              >
                <p className="text-4xl font-semibold tracking-normal text-primary">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm font-semibold text-secondary">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <article className="mt-12 grid gap-8 rounded-[2rem] border border-border/80 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.1)] lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-center lg:p-6">
          <div className="mx-auto w-full max-w-[15.5rem] rounded-[2.6rem] border border-slate-900 bg-slate-950 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.25)] sm:max-w-[16.25rem]">
            <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-black">
              <YoutubeLazyEmbed
                className="h-full w-full object-cover"
                embedUrl="https://www.youtube.com/embed/l8N34Q1J0aI"
                fallback={
                  <AssetImage
                    alt="短影音廣告素材"
                    className="object-cover"
                    fallback={
                      <div className="flex h-full w-full items-center justify-center text-white">
                        <Play aria-hidden="true" className="h-8 w-8" />
                      </div>
                    }
                    src="/assets/case-studies/usa-food/short-video-cover.jpg"
                  />
                }
                title="美國食品市場驗證短影音"
              />
            </div>
          </div>

          <div className="p-2 lg:p-5">
            <p className="text-sm font-semibold text-secondary">
              短影音不是曝光，而是信任建立
            </p>
            <h3 className="mt-2 text-[1.65rem] font-semibold leading-tight text-foreground sm:text-3xl lg:text-[1.85rem] xl:text-[2.1rem]">
              <span className="block lg:whitespace-nowrap">
                買家不是看到網站或名片就會回覆你
              </span>
              <span className="block lg:whitespace-nowrap">
                而是因為信任你才願意接洽
              </span>
            </h3>
            <div className="mt-5 grid max-w-[48rem] gap-3 text-base leading-8 text-muted [text-wrap:pretty] sm:text-[1.05rem] sm:leading-9">
              <p>
                這次協助的是南部珍珠奶茶供應鏈。一位美國採購商兩週前已透過阿里國際站與工廠接觸，但後續沒有進一步推進。
              </p>
              <p>
                後來買家再次看到我們協助工廠製作的短影音內容後，更完整理解工廠實力、生產能力與產品定位，因此主動回來聯繫，並進入樣品付款流程。
              </p>
            </div>
            <div className="mt-6 grid gap-3">
              {storyPoints.map((point) => (
                <div
                  className="flex items-center gap-3 rounded-2xl border border-secondary/18 bg-secondary/5 px-4 py-3 text-sm font-bold leading-6 text-primary shadow-sm"
                  key={point}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-secondary"
                  />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-border/80 bg-white p-5 shadow-[0_30px_90px_rgba(15,23,42,0.13)] lg:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-secondary">
                  買家回應紀錄
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  採購商對話
                </h3>
              </div>
              <UsersRound aria-hidden="true" className="h-7 w-7 text-primary" />
            </div>
            <div className="relative h-[30rem] overflow-hidden rounded-[1.5rem] border border-border bg-[#f8fbfd] text-primary shadow-inner sm:h-[34rem] lg:h-[32rem]">
              <LightboxImage
                alt="採購商對話"
                className="object-contain p-4"
                fallback={
                  <AssetImage
                    alt="採購商對話"
                    className="object-contain p-4"
                    fallback={
                      <div className="flex h-full w-full items-center justify-center">
                        <ImageIcon aria-hidden="true" className="h-8 w-8" />
                      </div>
                    }
                    src="/assets/case-studies/usa-food/buyer-chat-sample.png.jpg"
                  />
                }
                src="/assets/case-studies/usa-food/buyer-chat.jpg"
              />
            </div>
          </article>

          <article className="rounded-[2rem] border border-border/80 bg-white p-5 shadow-[0_26px_80px_rgba(15,23,42,0.12)] lg:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-secondary">
                  樣品付款訊號
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  樣品付款流程
                </h3>
              </div>
              <BadgeDollarSign
                aria-hidden="true"
                className="h-7 w-7 text-primary"
              />
            </div>
            <div className="relative h-[30rem] overflow-hidden rounded-[1.5rem] border border-border bg-[#f8fbfd] text-primary shadow-inner sm:h-[34rem] lg:h-[32rem]">
              <LightboxImage
                alt="樣品付款流程"
                className="object-contain p-4"
                fallback={
                  <AssetImage
                    alt="樣品付款流程"
                    className="object-contain p-4"
                    fallback={
                      <div className="flex h-full w-full items-center justify-center">
                        <ImageIcon aria-hidden="true" className="h-8 w-8" />
                      </div>
                    }
                    src="/assets/case-studies/usa-food/sample-payment-flow.jpg"
                  />
                }
                src="/assets/case-studies/usa-food/sample-payment.jpg"
              />
            </div>
          </article>

          <article className="rounded-[2rem] border border-border/80 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.1)] lg:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-secondary">
                  廣告數據紀錄
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  廣告投放成果
                </h3>
              </div>
              <BadgeDollarSign
                aria-hidden="true"
                className="h-7 w-7 text-primary"
              />
            </div>
            <div className="relative h-[30rem] overflow-hidden rounded-[1.5rem] border border-border bg-[#f8fbfd] text-primary shadow-inner sm:h-[34rem] lg:h-[32rem]">
              <LightboxImage
                alt="廣告投放成果"
                className="object-contain p-3 scale-[1.85] translate-y-[2%]"
                fallback={
                  <div className="flex h-full w-full items-center justify-center">
                    <ImageIcon aria-hidden="true" className="h-8 w-8" />
                  </div>
                }
                src="/assets/case-studies/usa-food/meta-ads-result.jpg"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
