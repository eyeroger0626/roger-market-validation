"use client";

import { CheckCircle2 } from "lucide-react";
import { LightboxImage } from "@/components/ui/lightbox-image";

const validationPoints = [
  "找出越南市場對 PCR 材料的信任門檻",
  "驗證當地買家對原生料 HDPE 的偏好",
  "取得海外買家主動詢問與 WhatsApp 聯絡方式",
  "協助企業調整後續市場教育與開發策略",
];

const evidenceCards = [
  {
    image: "/images/cases/vietnam-pcr-comment-feedback.jpg",
    title: "市場留言反饋",
    description:
      "透過越南留言互動，快速看出當地市場對 PCR 材料的接受度與疑慮。",
    alt: "越南市場對 PCR 再生塑膠材料的留言反饋與市場疑慮",
  },
  {
    image: "/images/cases/vietnam-pcr-market-validation.jpg",
    title: "海外買家填寫需求",
    description:
      "買家主動留下公司資訊、需求材料、每月用量與聯絡方式，協助企業判斷市場需求。",
    alt: "越南買家填寫 PCR 再生塑膠材料需求與聯絡資訊",
  },
  {
    image: "/images/cases/vietnam-pcr-buyer-message.jpg",
    title: "海外買家主動詢問",
    description:
      "買家主動詢問再生塑膠材料種類，並留下 WhatsApp，希望與供應商進一步聯繫。",
    alt: "越南海外買家主動私訊詢問 PCR 再生塑膠材料並留下 WhatsApp",
  },
];

export function VietnamPcrProofSection() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_12%,rgba(244,181,94,0.16),transparent_32%),linear-gradient(135deg,#0b1b2b_0%,#123b5d_54%,#0d2f4d_100%)] py-20 text-white sm:py-24 lg:py-28"
      id="vietnam-pcr-proof"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Vietnam PCR Proof
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            越南 PCR 市場驗證案例
          </h2>
          <p className="mt-4 text-xl font-semibold text-white/[0.78] sm:text-2xl">
            150 USD 取得第一線市場情報
          </p>
        </div>

        <article className="mt-12 grid gap-8 rounded-[2rem] border border-white/[0.12] bg-white/[0.1] p-5 shadow-[0_34px_110px_rgba(0,0,0,0.26)] backdrop-blur lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center lg:p-7">
          <div className="mx-auto w-full max-w-[16.25rem] rounded-[2.6rem] border border-slate-950 bg-slate-950 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:max-w-[18rem] lg:max-w-[19rem]">
            <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-black">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
                src="https://www.youtube.com/embed/Agmm-LmfQU0"
                title="越南 PCR 市場驗證影片"
              />
            </div>
          </div>

          <div className="p-2 lg:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Market Insight Case
            </p>
            <div className="mt-4 grid max-w-[48rem] gap-4 text-base leading-8 text-white/[0.72] sm:text-lg sm:leading-9">
              <p>
                我們協助台灣 PCR
                再生塑膠材料製造商，以越南市場為目標，透過探廠短影音、越南語內容、海外廣告與留言互動，進行低成本市場驗證。
              </p>
              <p>
                本次測試的重點不是單純追求名單數量，而是透過第一線市場反饋，了解越南買家對
                PCR 材料的真實接受度與疑慮。
              </p>
              <p>
                測試過程中，我們觀察到越南市場對原生料 HDPE
                仍具有明顯偏好，部分留言也反映出當地市場對 PCR
                材料存在信任門檻。
              </p>
              <p>
                這些回饋讓企業在投入更多海外開發資源前，能先掌握市場阻力，調整後續策略，例如強化國際認證、實際性能比較、樣品測試與市場教育。
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {validationPoints.map((point) => (
                <div
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] p-4"
                  key={point}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  />
                  <p className="text-sm font-semibold leading-6 text-white">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {evidenceCards.map((card) => (
            <article
              className="overflow-hidden rounded-[1.5rem] border border-white/[0.12] bg-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur"
              key={card.title}
            >
              <div className="relative flex h-[31rem] items-center justify-center border-b border-white/10 bg-white p-3 sm:h-[36rem] lg:h-[34rem]">
                <LightboxImage
                  alt={card.alt}
                  className="object-contain object-center p-2"
                  fallback={
                    <div className="flex h-full items-center justify-center bg-slate-100 px-6 text-center text-sm font-semibold text-primary/70">
                      {card.title}
                    </div>
                  }
                  src={card.image}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.65]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
