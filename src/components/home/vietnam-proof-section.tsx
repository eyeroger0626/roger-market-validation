"use client";

import {
  BarChart3,
  MessageSquareText,
  PackageSearch,
} from "lucide-react";
import { LightboxImage } from "@/components/ui/lightbox-image";

const metrics = [
  {
    value: "300 USD",
    label: "廣告預算",
  },
  {
    value: "129 筆",
    label: "B2B 詢盤",
  },
  {
    value: "2.33 USD",
    label: "平均 CPL",
  },
];

const storyPoints = [
  "用越南語內容降低買家理解成本",
  "讓設備應用場景比規格表更容易被看懂",
  "以小額預算測出 129 筆 B2B 詢盤訊號",
];

const evidenceCards = [
  {
    title: "買家詢問批發與價格",
    description: "買家主動詢問批發、設備、價格或產品細節。",
    image: "/assets/case-studies/vietnam-equipment/vietnam-chat-1.jpg",
    icon: MessageSquareText,
  },
  {
    title: "買家提供公司或需求資訊",
    description: "整理設備相關 B2B 詢盤，作為市場需求判斷依據。",
    image: "/assets/case-studies/vietnam-equipment/vietnam-chat-2.jpg",
    icon: PackageSearch,
  },
  {
    title: "廣告測試帶來詢盤結果",
    description: "以小額廣告測試設備需求，觀察目標受眾回應品質。",
    image: "/assets/case-studies/vietnam-equipment/leads-result.png",
    icon: BarChart3,
  },
];

export function VietnamProofSection() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(244,181,94,0.18),transparent_34%),linear-gradient(135deg,#0a1a2a_0%,#123b5d_58%,#0d2f4d_100%)] py-20 text-white sm:py-24 lg:py-28"
      id="vietnam-proof"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Vietnam Proof
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              <span className="block">越南設備市場驗證</span>
              <span className="mt-3 block text-[1.65rem] leading-tight text-white/82 sm:whitespace-nowrap sm:text-[2.35rem] lg:text-[2.95rem]">
                300 美金取得 129 筆 B2B 詢盤
              </span>
            </h2>
            <p className="mt-5 inline-flex rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold leading-6 text-accent">
              驗證結果：成功取得設備商與經銷商詢盤。
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.68]">
              同樣的驗證流程，也能應用在設備與製造業產品。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map((metric) => (
              <div
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.09] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur"
                key={metric.label}
              >
                <p className="text-[2rem] font-semibold tracking-normal text-white">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm font-semibold text-white/[0.58]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <article className="mt-12 grid gap-8 rounded-[2rem] border border-white/[0.12] bg-white/[0.1] p-5 shadow-[0_34px_110px_rgba(0,0,0,0.26)] backdrop-blur lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center lg:p-6">
          <div className="mx-auto w-full max-w-[16.25rem] rounded-[2.6rem] border border-slate-950 bg-slate-950 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:max-w-[18rem] lg:max-w-[19rem]">
            <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-black">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
                src="https://www.youtube.com/embed/yFvh4cWsn9E"
                title="越南設備案例短影音"
              />
            </div>
          </div>

          <div className="p-2 lg:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Short Video Proof
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              越南設備詢盤：短影音讓設備需求被看見
            </h3>
            <p className="mt-5 max-w-[46rem] text-[1.03rem] leading-8 text-white/[0.7] [text-wrap:pretty] sm:text-lg sm:leading-9">
              <span className="lg:block">
                透過越南語短影音與小額廣告測試，將包裝設備、真空封口機與相關應用場景轉成
              </span>
              <span className="lg:block">
                當地買家看得懂的內容，進一步取得設備批發商、包裝材料商與潛在經銷商的詢盤回應。
              </span>
            </p>
            <div className="mt-6 grid gap-3">
              {storyPoints.map((point) => (
                <div
                  className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 text-sm font-semibold leading-6 text-white"
                  key={point}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </article>

        <p className="mt-7 max-w-4xl text-lg font-medium leading-8 text-white sm:text-xl sm:leading-9">
          從食品到設備，重點不是拍影片，而是讓市場用回應告訴你是否值得繼續投入。
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {evidenceCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                className="overflow-hidden rounded-[1.5rem] border border-white/[0.12] bg-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur"
                key={card.title}
              >
                <div className="relative h-[28rem] border-b border-white/10 bg-[#0b1b2b] text-white sm:h-[34rem] lg:h-[32rem]">
                  <LightboxImage
                    alt={card.title}
                    className="object-contain p-2"
                    fallback={
                      <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_16%_12%,rgba(244,181,94,0.2),transparent_30%),linear-gradient(135deg,#0b1b2b_0%,#123b5d_100%)] p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-accent ring-1 ring-white/10">
                            <Icon aria-hidden="true" className="h-5 w-5" />
                          </div>
                          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                            Evidence
                          </span>
                        </div>
                        <div>
                          <div className="h-2 w-4/5 rounded-full bg-white/26" />
                          <div className="mt-3 h-2 w-2/3 rounded-full bg-accent/55" />
                          <div className="mt-5 grid gap-2">
                            <div className="h-8 rounded-xl border border-white/10 bg-white/10" />
                            <div className="h-8 rounded-xl border border-white/10 bg-white/10" />
                          </div>
                        </div>
                      </div>
                    }
                    src={card.image}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/[0.62]">
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
