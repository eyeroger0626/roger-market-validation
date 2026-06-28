import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Boxes,
  Building2,
  CircleAlert,
  CircleCheck,
  Clapperboard,
  Factory,
  Globe2,
  Handshake,
  ImageIcon,
  Megaphone,
  PackageCheck,
  Play,
  Quote,
  Target,
  UsersRound,
  Video,
} from "lucide-react";
import { notFound } from "next/navigation";
import { AssetImage } from "@/components/ui/asset-image";
import { AssetVideo } from "@/components/ui/asset-video";
import { LightboxImage } from "@/components/ui/lightbox-image";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { VIDEO_SOURCES } from "@/lib/video-sources";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type DetailItem = {
  label: string;
  value: string;
};

type IconCard = {
  icon: typeof Globe2;
  title: string;
  description: string;
};

type TimelineItem = {
  phase: string;
  title: string;
  description: string;
};

type MetricItem = {
  value: string;
  label: string;
  icon: typeof Globe2;
};

type GalleryItem = {
  title: string;
  description: string;
  icon: typeof Globe2;
  assetPath?: string;
  videoPath?: string;
};

type GalleryMetric = {
  value: string;
  label: string;
};

type DetailedCaseStudy = {
  evidenceFirst?: boolean;
  eyebrow: string;
  title: string;
  summary: string;
  market: string;
  industry: string;
  result: string;
  overviewTitle: string;
  overviewDescription: string;
  projectOverview: DetailItem[];
  challengeTitle: string;
  challengeDescription: string;
  challenges: IconCard[];
  strategyTitle: string;
  strategyDescription: string;
  strategySteps: IconCard[];
  timelineTitle: string;
  timelineDescription: string;
  timeline: TimelineItem[];
  metricsTitle: string;
  metricsDescription: string;
  keyMetrics: MetricItem[];
  galleryTitle: string;
  galleryDescription: string;
  galleryItems: GalleryItem[];
  galleryMetrics?: GalleryMetric[];
  insightPrimary: string;
  insightSecondary: string;
  insightDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  primaryCta: string;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  const title = caseStudy?.title ?? "Case Study";
  const description = [
    caseStudy?.summary ?? "",
    "星啟夢圓行銷協助台灣製造業持續取得海外 B2B 詢盤，降低對展會與 B2B 平台的依賴。",
  ].join(" ");
  const socialTitle = [
    title,
    "製造業海外獲客系統｜星啟夢圓行銷",
  ].join("\uFF5C");

  return {
    title,
    description,
    openGraph: {
      title: socialTitle,
      description,
      images: [socialShareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialShareImageUrl],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  if (caseStudy.slug === "case-1") {
    return <FeaturedCaseStudyPage data={usaCaseStudyDetail} />;
  }

  if (caseStudy.slug === "case-2") {
    return <FeaturedCaseStudyPage data={vietnamCaseStudyDetail} />;
  }

  if (caseStudy.slug === "case-3") {
    return <FeaturedCaseStudyPage data={europeCaseStudyDetail} />;
  }

  return (
    <article className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <Link
          href="/#case-studies"
          className="text-sm font-semibold text-primary transition hover:text-secondary"
        >
          ← 返回案例列表
        </Link>

        <header className="mt-10 border-b border-border pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            Case Study
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
            {caseStudy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            {caseStudy.summary}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-muted">產業</p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                {caseStudy.industry}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-muted">市場</p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                {caseStudy.market}
              </p>
            </div>
          </div>
        </header>

        <div className="grid gap-5 py-12">
          {[
            ["挑戰", caseStudy.challenge],
            ["做法", caseStudy.approach],
            ["結果", caseStudy.result],
          ].map(([title, content]) => (
            <section
              key={title}
              className="rounded-[1.5rem] border border-border bg-white p-7 shadow-sm sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                {title}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">{content}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

const usaCaseStudyDetail: DetailedCaseStudy = {
  evidenceFirst: true,
  eyebrow: "美國食品 Market Validation",
  title: "美國食品海外獲客案例",
  summary: "以 100 美金廣告預算取得 40+ 美國採購商名單，並推動樣品單進展。",
  market: "美國",
  industry: "食品製造業",
  result: "40+ 採購商名單與樣品單進展",
  overviewTitle: "在擴大外銷投入前，先用低成本取得市場回應。",
  overviewDescription:
    "客戶希望在投入展會、經銷商開發與庫存規劃前，先確認美國採購商是否會對產品產生實際回應。本專案重點不是流量，而是能支持決策的市場證據。",
  projectOverview: [
  {
    label: "客戶背景",
    value:
      "台灣食品製造業者，具備穩定生產能力，準備評估美國市場是否值得進一步投入。",
  },
  {
    label: "市場",
    value:
      "美國市場，聚焦進口商、通路買家與特殊食品零售相關採購回應。",
  },
  {
    label: "目標",
    value:
      "以可控預算測試產品賣點、信任素材與廣告訊息，是否能帶來合格 B2B 買家對話。",
  },
  ],
  challengeTitle:
    "問題不只是產品好不好，而是買家會不會採取行動。",
  challengeDescription:
    "對 B2B 外銷來說，產品品質只是決策的一部分。海外買家還需要信任、清楚資訊、佐證素材，以及開始對話的理由。",
  challenges: [
  {
    icon: CircleAlert,
    title: "有外銷意願，但買家意圖不明確",
    description:
      "團隊對產品品質有信心，但缺少證據判斷美國買家是否接受定位、價格邏輯與供應條件。",
  },
  {
    icon: Target,
    title: "產品優勢尚未轉換成美國買家語言",
    description:
      "工廠能力、認證與穩定量產是重要優勢，但需要轉成買家能快速理解、能降低採購風險的訊息。",
  },
  {
    icon: UsersRound,
    title: "擴大投入前需要可判斷的市場訊號",
    description:
      "在投入展會或經銷商開發前，客戶需要用低成本建立驗證流程，取得可衡量的買家回饋。",
  },
  ],
  strategyTitle: "先建立信任，再衡量轉換訊號。",
  strategyDescription:
    "策略將工廠可信度、短影音佐證、精準廣告與名單判讀串成一個市場驗證流程。",
  strategySteps: [
  {
    title: "探廠訪談",
    description:
      "整理生產現場、產品優勢、品質控管與外銷準備度，作為建立海外買家信任的素材。",
    icon: Factory,
  },
  {
    title: "短影音內容",
    description:
      "將工廠可信度轉換成簡潔的視覺證據，降低買家第一次接觸時的理解成本。",
    icon: Clapperboard,
  },
  {
    title: "廣告測試",
    description:
      "以小額預算測試訊息與市場的契合度，判斷哪些買家族群會回應。",
    icon: Megaphone,
  },
  {
    title: "採購商名單",
    description:
      "依據產業關聯、採購角色與回覆內容，篩選具後續開發價值的名單。",
    icon: Handshake,
  },
  {
    title: "樣品單進展",
    description:
      "以最強買家訊號驗證商務意圖，作為後續外銷跟進依據。",
    icon: PackageCheck,
  },
  ],
  timelineTitle: "四週內從市場假設走到買家回饋。",
  timelineDescription:
    "流程以快速測試為核心，同時產出老闆與外銷主管可用於判斷的市場證據。",
  timeline: [
  {
    phase: "第 1 週",
    title: "市場假設",
    description:
      "定義目標買家、產品切入角度與本次驗證要回答的關鍵問題。",
  },
  {
    phase: "第 2 週",
    title: "素材製作",
    description:
      "製作面向買家的短影音素材，並整理品質、供應能力與產品證據。",
  },
  {
    phase: "第 3 週",
    title: "需求測試",
    description:
      "啟動聚焦廣告測試，觀察美國市場的回應品質、詢問模式與常見疑慮。",
  },
  {
    phase: "第 4 週",
    title: "名單判讀",
    description:
      "整理合格名單與買家回饋，判斷從興趣走向轉換的下一步。",
  },
  ],
  metricsTitle: "小預算取得清楚訊號，讓外銷決策更有依據。",
  metricsDescription:
    "本次測試不是追求最大曝光，而是確認回應品質與後續跟進潛力。",
  keyMetrics: [
  {
    value: "40+",
    label: "採購商名單",
    icon: UsersRound,
  },
  {
    value: "100 USD",
    label: "廣告預算",
    icon: BadgeDollarSign,
  },
  {
    value: "1",
    label: "樣品單進展",
    icon: Boxes,
  },
  {
    value: "USA",
    label: "目標市場",
    icon: Globe2,
  },
  ],
  galleryTitle: "美國食品海外獲客案例素材紀錄。",
  galleryDescription:
    "以實際廣告數據、採購商對話、樣品付款流程、短影音素材與工廠現場畫面，完整呈現從低預算測試到市場訊號成立的證據。",
  galleryItems: [
  {
    title: "採購商對話截圖區",
    description:
      "美國採購商主動詢問產品、回覆細節與展現初步採購意圖的對話紀錄。",
    icon: Handshake,
    assetPath: "/assets/case-studies/usa-food/buyer-chat-sample.png.jpg",
  },
  {
    title: "樣品付款流程截圖區",
    description:
      "從樣品溝通、付款流程到後續跟進的實際紀錄，驗證買家不只停留在詢問階段。",
    icon: BadgeDollarSign,
    assetPath: "/assets/case-studies/usa-food/sample-payment-flow.jpg",
  },
  {
    title: "廣告投放成果截圖區",
    description:
      "Meta Ads 測試成果截圖，呈現廣告預算、觸及、互動與採購商名單產出狀況。",
    icon: Megaphone,
    assetPath: "/assets/case-studies/usa-food/meta-ads-result.jpg",
  },
  {
    title: "短影音播放器",
    description:
      "用於測試美國買家回應的短影音廣告素材，協助買家快速理解產品與應用情境。",
    icon: Play,
    assetPath: "/assets/case-studies/usa-food/short-video-cover.jpg",
    videoPath: VIDEO_SOURCES.usa,
  },
  {
    title: "工廠探訪素材",
    description:
      "探廠紀錄、工廠現場與生產環境素材，作為建立海外買家信任的輔助證據。",
    icon: Factory,
    assetPath: "/assets/case-studies/usa-food/factory-visit.jpg",
  },
  ],
  galleryMetrics: [
    {
      value: "100 美金",
      label: "廣告預算",
    },
    {
      value: "40+",
      label: "美國採購商名單",
    },
    {
      value: "2.38 美金",
      label: "平均 CPL",
    },
    {
      value: "1 筆",
      label: "樣品單進展",
    },
  ],
  insightPrimary: "流量不等於信任",
  insightSecondary: "信任才會創造轉換",
  insightDescription:
    "本次專案最大的價值不是流量數字，而是找出哪些信任證據會讓買家願意回覆、提問，並走向下一個具體動作。",
  ctaTitle: "從市場驗證開始，建立海外獲客系統。",
  ctaDescription:
    "從市場驗證、短影音與海外廣告開始，把不確定性轉換成買家證據與可持續追蹤的詢盤。",
  primaryCta: "預約海外獲客諮詢",
};

const vietnamCaseStudyDetail: DetailedCaseStudy = {
  eyebrow: "越南設備 Market Validation",
  title: "越南設備海外獲客案例",
  summary:
    "以 300 美金廣告預算取得 129 筆設備相關 B2B 詢盤。",
  market: "越南",
  industry: "包裝設備／封口機",
  result: "129 筆設備詢盤與市場需求驗證",
  overviewTitle:
    "在擴大東南亞布局前，先用低風險方式測試設備需求。",
  overviewDescription:
    "一家台灣包裝設備製造商希望在投入更大海外行銷預算前，測試短影音與社群廣告是否能觸及東南亞真正的 B2B 設備買家。",
  projectOverview: [
    {
      label: "客戶背景",
      value:
        "台灣包裝設備製造商，提供生產線與工業包裝應用所需的封口機解決方案。",
    },
    {
      label: "市場",
      value:
        "越南市場，聚焦食品、飲料、包裝與設備採購相關 B2B 受眾。",
    },
    {
      label: "目標",
      value:
        "在投入大型海外推廣前，驗證短影音內容是否能產生具採購意圖的 B2B 設備詢盤。",
    },
  ],
  challengeTitle:
    "設備買家在聯繫供應商前，需要先建立足夠信任。",
  challengeDescription:
    "客戶希望跳脫只依賴展會與被動詢盤的模式，同時用可控預算確認社群廣告是否能產生真正的設備採購需求。",
  challenges: [
    {
      icon: CircleAlert,
      title: "海外開發高度依賴展會",
      description:
        "傳統 Lead Generation 主要依靠展會、既有人脈與被動詢盤，難以快速測試市場需求。",
    },
    {
      icon: Target,
      title: "設備買家需要信任才會主動聯繫",
      description:
        "買家需要先理解設備應用、使用情境、供應商可信度，以及是否符合自身生產需求。",
    },
    {
      icon: UsersRound,
      title: "社群廣告能否帶來有效詢盤仍待驗證",
      description:
        "關鍵不是影片觀看數，而是短影音與精準廣告是否能吸引真正具採購意圖的 B2B 詢問。",
    },
    {
      icon: BadgeDollarSign,
      title: "需要以有限風險測試市場",
      description:
        "在擴大東南亞投入前，客戶需要用可控預算取得可衡量的詢盤資料。",
    },
  ],
  strategyTitle:
    "用設備短影音把注意力轉換成詢盤。",
  strategyDescription:
    "策略結合設備應用短影音、越南市場受眾設定、小額廣告預算與詢盤收集，評估市場回應與名單品質。",
  strategySteps: [
    {
      title: "產品定位",
      description:
        "先釐清設備應用情境、買家痛點與採購關聯，再進入素材製作。",
      icon: Factory,
    },
    {
      title: "短影音內容",
      description:
        "用簡潔設備應用內容呈現機台價值、操作情境與實際使用方式。",
      icon: Clapperboard,
    },
    {
      title: "越南市場受眾",
      description:
        "聚焦越南食品、飲料、包裝、生產製造與設備採購相關受眾。",
      icon: Target,
    },
    {
      title: "廣告測試",
      description:
        "以 300 美金廣告預算測試回應品質，判斷市場是否能產生有效 B2B 詢盤。",
      icon: Megaphone,
    },
    {
      title: "詢盤收集",
      description:
        "收集並判讀詢盤資料，評估買家意圖、名單關聯性與後續市場潛力。",
      icon: Handshake,
    },
  ],
  timelineTitle:
    "從定位到市場檢視的完整驗證流程。",
  timelineDescription:
    "專案從設備定位、短影音內容、精準廣告測試，到詢盤收集與需求檢視逐步推進。",
  timeline: [
    {
      phase: "步驟 1",
      title: "產品定位",
      description:
        "定義封口機應用情境、買家問題與越南市場測試訊息角度。",
    },
    {
      phase: "步驟 2",
      title: "短影音內容",
      description:
        "製作能快速傳達設備應用的視覺內容，降低買家理解門檻。",
    },
    {
      phase: "步驟 3",
      title: "越南市場受眾設定",
      description:
        "設定食品、飲料、包裝、製造與採購相關 B2B 受眾。",
    },
    {
      phase: "步驟 4",
      title: "付費廣告測試",
      description:
        "啟動可控廣告測試，衡量詢盤量、回應品質與市場訊號強度。",
    },
    {
      phase: "步驟 5",
      title: "詢盤收集",
      description:
        "收集設備相關詢盤，整理後進行名單品質判讀。",
    },
    {
      phase: "步驟 6",
      title: "市場驗證檢視",
      description:
        "檢視詢盤資料，判斷越南市場是否具備後續投入價值。",
    },
  ],
  metricsTitle: "越南設備買家的實際需求訊號。",
  metricsDescription:
    "測試顯示，精準短影音內容能在可控預算下產生可衡量的 B2B 設備詢盤。",
  keyMetrics: [
    {
      value: "129",
      label: "B2B 詢盤",
      icon: UsersRound,
    },
    {
      value: "300 USD",
      label: "廣告預算",
      icon: BadgeDollarSign,
    },
    {
      value: "越南",
      label: "目標市場",
      icon: Globe2,
    },
    {
      value: "設備",
      label: "產業",
      icon: Boxes,
    },
    {
      value: "已驗證",
      label: "市場需求",
      icon: CircleCheck,
    },
  ],
  galleryTitle: "讓設備買家快速理解的廣告素材。",
  galleryDescription:
    "以封口機影片、應用情境圖片與短影音素材，協助越南設備買家快速理解產品用途與採購價值。",
  galleryItems: [
    {
      title: "設備應用影片",
      description:
        "展示封口機使用情境與生產線關聯性的短影音素材。",
      icon: Play,
      assetPath: "/assets/case-studies/vietnam-equipment/equipment-video-cover.jpg",
      videoPath: VIDEO_SOURCES.vietnam,
    },
    {
      title: "機台與應用圖片",
      description:
        "呈現產品視角、包裝應用與設備細節，降低設備買家理解成本。",
      icon: ImageIcon,
    },
    {
      title: "越南廣告素材",
      description:
        "用於測試越南 B2B 受眾回應的直式短影音素材。",
      icon: Video,
    },
  ],
  insightPrimary: "短影音不只是曝光",
  insightSecondary: "精準內容能創造 B2B 需求訊號",
  insightDescription:
    "對製造業來說，短影音不只是做品牌曝光。當它搭配精準廣告與市場設定，就能成為快速、低成本測試 B2B 需求的方法。",
  ctaTitle: "驗證您的下一個海外市場",
  ctaDescription:
    "在投入大型廣告、展會或經銷商開發前，先確認目標市場是否能產生真實買家對話。",
  primaryCta: "預約海外獲客諮詢",
};

const europeCaseStudyDetail: DetailedCaseStudy = {
  eyebrow: "歐洲展會海外獲客策略",
  title: "歐洲展會海外獲客策略案例",
  summary:
    "將展會名片與現場素材轉化為後續信任建立與代理商開發機會。",
  market: "德國／歐洲",
  industry: "包裝設備／真空封口機",
  result: "展後再行銷策略與代理商開發路徑",
  overviewTitle:
    "為長週期歐洲 B2B 關係設計的展後追蹤策略。",
  overviewDescription:
    "一家台灣包裝設備製造商已透過展會累積歐洲客戶關係，特別是在德國、法國、丹麥、比利時與保加利亞。客戶希望探索如何用短影音與社群再行銷支援展後追蹤，並協助開發長期代理商或經銷商。",
  projectOverview: [
    {
      label: "客戶背景",
      value:
        "台灣包裝設備製造商，具備歐洲展會客戶基礎，產品包含面向工業買家的真空封口機應用。",
    },
    {
      label: "市場",
      value:
        "以德國作為第一優先驗證市場，同時延伸觀察法國、丹麥、比利時與保加利亞等歐洲市場。",
    },
    {
      label: "目標",
      value:
        "運用短影音與展後再行銷維持買家互動，支援長期代理商與經銷商開發。",
    },
  ],
  challengeTitle:
    "展會接觸只是開始，信任建立發生在展後。",
  challengeDescription:
    "歐洲設備買家通常需要多次接觸才會往下一步推進。挑戰在於延續展會對話價值，並讓工廠能力在展後持續被看見。",
  challenges: [
    {
      icon: CircleAlert,
      title: "展會名單需要較長追蹤週期",
      description:
        "攤位對話能打開第一道門，但嚴謹的歐洲買家仍需要反覆佐證、技術脈絡與穩定追蹤。",
    },
    {
      icon: Handshake,
      title: "歐洲 B2B 買家重視長期信任",
      description:
        "對代理商、經銷商與設備買家來說，供應商可靠度、工廠能力與長期支援不亞於產品規格。",
    },
    {
      icon: ImageIcon,
      title: "型錄與靜態圖片不足以完整展示能力",
      description:
        "型錄和產品圖片無法完整呈現機台運作、展會互動、買家對話、測試場景與工廠可信度。",
    },
    {
      icon: UsersRound,
      title: "展後需要持續維持買家互動",
      description:
        "目標是在展會後持續保持可見度，提醒買家機台價值，並創造繼續對話的理由。",
    },
    {
      icon: Target,
      title: "真正目標是代理商與經銷商開發",
      description:
        "本案不只是取得單一買家詢問，更重要的是支援歐洲長期通路開發。",
    },
  ],
  strategyTitle:
    "把展會素材變成第二次接觸的信任系統。",
  strategyDescription:
    "策略以德國作為第一驗證市場，將展會互動轉化為短影音信任素材，並為歐洲代理商與經銷商開發準備再行銷測試。",
  strategySteps: [
    {
      title: "德國優先",
      description:
        "先以德國作為展後驗證的第一優先市場，再評估是否擴大到其他歐洲市場。",
      icon: Globe2,
    },
    {
      title: "展會現場素材",
      description:
        "運用攤位互動、買家對話、機台展示與測試場景作為建立信任的素材。",
      icon: Clapperboard,
    },
    {
      title: "短影音信任素材",
      description:
        "將展會片段剪輯成短影音，讓產品應用、買家興趣與供應商能力能在展後再次被看見。",
      icon: Video,
    },
    {
      title: "再行銷準備",
      description:
        "準備展後廣告測試所需的受眾與內容結構，面向歐洲設備買家進行再接觸。",
      icon: Megaphone,
    },
    {
      title: "通路開發",
      description:
        "運用後續回應訊號支援歐洲經銷商與代理商洽談。",
      icon: Handshake,
    },
  ],
  timelineTitle:
    "從歐洲市場檢視到再行銷測試的規劃流程。",
  timelineDescription:
    "本案例屬於策略與啟動前階段，因此流程聚焦於展後市場回應測試的前期規劃。",
  timeline: [
    {
      phase: "步驟 1",
      title: "歐洲市場檢視",
      description:
        "檢視既有展會客戶關係，判斷哪些歐洲市場具備最高追蹤潛力。",
    },
    {
      phase: "步驟 2",
      title: "德國優先策略",
      description:
        "因德國在歐洲製造與設備採購中的重要性，將其設定為初期驗證市場。",
    },
    {
      phase: "步驟 3",
      title: "展會內容規劃",
      description:
        "規劃哪些攤位畫面、機台展示、買家討論與產品測試場景可轉化為再行銷內容。",
    },
    {
      phase: "步驟 4",
      title: "攤位與買家互動畫面",
      description:
        "捕捉型錄無法呈現的人與技術證據：對話、展示與買家互動。",
    },
    {
      phase: "步驟 5",
      title: "展後內容製作",
      description:
        "將展會素材轉成短影音，用於第二次接觸與後續跟進。",
    },
    {
      phase: "步驟 6",
      title: "再行銷與市場回應測試",
      description:
        "規劃廣告測試，評估歐洲買家、經銷商與代理商是否回應展後信任素材。",
    },
  ],
  metricsTitle: "規劃中的驗證指標",
  metricsDescription:
    "本案例目前屬於策略與啟動前階段，因此以下為 Planned Validation Indicators，而非已完成的成果數字。",
  keyMetrics: [
    {
      value: "德國",
      label: "第一驗證市場",
      icon: Globe2,
    },
    {
      value: "再行銷",
      label: "展後追蹤策略",
      icon: Megaphone,
    },
    {
      value: "代理商",
      label: "通路開發",
      icon: Handshake,
    },
    {
      value: "短影音",
      label: "內容形式",
      icon: Video,
    },
    {
      value: "規劃中",
      label: "市場驗證",
      icon: CircleCheck,
    },
  ],
  galleryTitle: "為展後第二次接觸準備的素材。",
  galleryDescription:
    "以攤位畫面、機台展示、買家互動片段與短影音再行銷素材，延續展會後的信任建立。",
  galleryItems: [
    {
      title: "攤位互動畫面",
      description:
        "展示買家對話、攤位活動與產品興趣的展會片段。",
      icon: Play,
    },
    {
      title: "機台展示圖片",
      description:
        "呈現真空封口機展示、產品測試場景與技術佐證圖片。",
      icon: ImageIcon,
    },
    {
      title: "展後再行銷短影音",
      description:
        "讓歐洲買家在展後持續保持互動的短影音素材。",
      icon: Video,
    },
  ],
  insightPrimary: "展會接觸只是第一步",
  insightSecondary: "多次接觸才能建立歐洲 B2B 信任",
  insightDescription:
    "對歐洲 B2B 買家來說，信任需要透過多次接觸累積。展會接觸只是第一步，短影音與再行銷能協助製造商在展後保持可見度，讓後續跟進更有效。",
  ctaTitle: "把展後追蹤納入海外獲客系統",
  ctaDescription:
    "把下一次展會轉化為有系統的追蹤流程，持續維持買家互動、強化信任，並支援代理商與經銷商開發。",
  primaryCta: "規劃海外獲客系統",
};

function FeaturedCaseStudyPage({ data }: { data: DetailedCaseStudy }) {
  const evidenceFirst = data.evidenceFirst === true;

  return (
    <article className="flex flex-col bg-background">
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(47,111,126,0.18),transparent_62%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:gap-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <Link
              href="/#case-studies"
              className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-secondary"
            >
              ← 返回案例列表
            </Link>
            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              {data.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl break-words text-4xl font-semibold leading-tight text-foreground sm:text-6xl lg:text-7xl">
              {data.title}
            </h1>
            <p className="mt-8 max-w-3xl text-xl font-medium leading-8 text-primary sm:text-3xl sm:leading-9">
              {data.summary}
            </p>
          </div>

          <div className="self-end rounded-[1.5rem] border border-border bg-background p-6 shadow-soft">
            <div className="grid gap-4">
              <InfoRow icon={Globe2} label="市場" value={data.market} />
              <InfoRow
                icon={Building2}
                label="產業"
                value={data.industry}
              />
              <InfoRow
                icon={CircleCheck}
                label="成果"
                value={data.result}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`py-24 sm:py-28 lg:py-32 ${evidenceFirst ? "order-3" : ""}`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="專案概覽"
            title={data.overviewTitle}
            description={data.overviewDescription}
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {data.projectOverview.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.25rem] border border-border bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-muted">{item.label}</p>
                <p className="mt-4 text-xl font-semibold leading-7 text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`bg-white py-24 sm:py-28 lg:py-32 ${evidenceFirst ? "order-4" : ""}`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="挑戰"
            title={data.challengeTitle}
            description={data.challengeDescription}
          />

          <div className="mt-14 grid gap-5">
            {data.challenges.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="grid gap-5 rounded-[1.5rem] border border-border bg-background p-6 shadow-sm sm:grid-cols-[4rem_1fr] sm:p-8"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className={`py-24 sm:py-28 lg:py-32 ${evidenceFirst ? "order-5" : ""}`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="策略"
            title={data.strategyTitle}
            description={data.strategyDescription}
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-5">
            {data.strategySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative">
                  {index < data.strategySteps.length - 1 ? (
                    <div className="absolute left-8 top-16 hidden h-px w-[calc(100%+1.5rem)] bg-border lg:block" />
                  ) : null}
                  <div className="relative rounded-[1.5rem] border border-border bg-white p-6 shadow-sm">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-soft">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </div>
                    <h3 className="mt-8 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {step.description}
                    </p>
                    {index < data.strategySteps.length - 1 ? (
                      <ArrowRight
                        aria-hidden="true"
                        className="mt-6 h-5 w-5 text-secondary lg:hidden"
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className={`bg-white py-24 sm:py-28 lg:py-32 ${evidenceFirst ? "order-6" : ""}`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="執行流程"
            title={data.timelineTitle}
            description={data.timelineDescription}
          />

          <div className="mt-14 grid gap-5">
            {data.timeline.map((item, index) => (
              <div
                key={item.phase}
                className="grid gap-5 rounded-[1.5rem] border border-border bg-background p-6 shadow-sm sm:grid-cols-[8rem_1fr] sm:p-8"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                    {item.phase}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-primary">
                    0{index + 1}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`bg-primary py-24 text-white sm:py-28 lg:py-32 ${evidenceFirst ? "order-1" : ""}`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="關鍵指標"
            title={data.metricsTitle}
            description={data.metricsDescription}
            dark
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {data.keyMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-7 backdrop-blur"
                >
                  <Icon aria-hidden="true" className="h-7 w-7 text-accent" />
                  <p className="mt-8 break-words text-3xl font-semibold tracking-normal text-white sm:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-white/[0.62]">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className={`py-24 sm:py-28 lg:py-32 ${evidenceFirst ? "order-2" : ""}`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="素材展示"
            title={data.galleryTitle}
            description={data.galleryDescription}
          />

          {data.galleryMetrics ? (
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.galleryMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.25rem] border border-border bg-white p-5 shadow-sm"
                >
                  <p className="text-2xl font-semibold text-primary">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          {data.galleryMetrics ? (
            <div className="mt-5 rounded-[1.5rem] border border-border bg-white p-6 shadow-sm">
              <p className="text-2xl font-semibold leading-tight text-primary sm:text-3xl">
                100 USD → 40+ 採購商名單 → 樣品付款 → 市場驗證成功
              </p>
            </div>
          ) : null}

          {data.galleryMetrics ? (
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              {data.galleryItems.map((item) => (
                <MediaPlaceholder
                  key={item.title}
                  enableLightbox={data.evidenceFirst}
                  item={item}
                  large={data.evidenceFirst}
                />
              ))}
            </div>
          ) : (
            <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <MediaPlaceholder item={data.galleryItems[0]} featured />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {data.galleryItems.slice(1).map((item) => (
                  <MediaPlaceholder key={item.title} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section
        className={`bg-white py-24 sm:py-28 lg:py-32 ${evidenceFirst ? "order-7" : ""}`}
      >
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-background p-8 shadow-soft sm:p-12">
            <Quote aria-hidden="true" className="h-10 w-10 text-accent" />
            <p className="mt-8 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              {data.insightPrimary}
            </p>
            <p className="mt-4 text-3xl font-semibold leading-tight text-primary sm:text-5xl">
              {data.insightSecondary}
            </p>
            <p className="mt-8 max-w-3xl text-base leading-7 text-muted">
              {data.insightDescription}
            </p>
          </div>
        </div>
      </section>

      <section
        className={`py-24 sm:py-28 lg:py-32 ${evidenceFirst ? "order-8" : ""}`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                下一步
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
                {data.ctaTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
                {data.ctaDescription}
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0">
              <Link
                href="/#contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0d2f4d] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
              >
                {data.primaryCta}
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-white px-7 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/40 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
              >
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

type InfoRowProps = {
  icon: typeof Globe2;
  label: string;
  value: string;
};

function InfoRow({ icon: Icon, label, value }: InfoRowProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-white p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-muted">{label}</p>
        <p className="mt-1 text-base font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
};

function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p
        className={
          dark
            ? "text-sm font-semibold uppercase tracking-[0.18em] text-accent"
            : "text-sm font-semibold uppercase tracking-[0.18em] text-secondary"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          dark
            ? "mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl"
            : "mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl"
        }
      >
        {title}
      </h2>
      <p
        className={
          dark
            ? "mt-6 text-base leading-7 text-white/[0.66]"
            : "mt-6 text-base leading-7 text-muted"
        }
      >
        {description}
      </p>
    </div>
  );
}

type MediaPlaceholderProps = {
  item: GalleryItem;
  enableLightbox?: boolean;
  featured?: boolean;
  large?: boolean;
};

function MediaPlaceholder({
  item,
  enableLightbox = false,
  featured = false,
  large = false,
}: MediaPlaceholderProps) {
  const Icon = item.icon;
  const hasMedia = item.assetPath || item.videoPath;

  return (
    <div
      className={
        featured
          ? "flex rounded-[1.5rem] border border-border bg-white p-7 shadow-sm"
          : "flex min-h-52 flex-col justify-between rounded-[1.5rem] border border-border bg-white p-7 shadow-sm"
      }
    >
      <div
        className={
          hasMedia
            ? large
              ? "relative mb-8 h-[360px] overflow-hidden rounded-2xl border border-border bg-background text-primary"
              : featured
                ? "relative mb-8 h-64 overflow-hidden rounded-2xl border border-border bg-background text-primary"
                : "relative mb-8 h-64 overflow-hidden rounded-2xl border border-border bg-background text-primary"
            : "flex h-14 w-14 items-center justify-center rounded-2xl bg-background text-primary"
        }
      >
        {item.videoPath ? (
          <AssetVideo
            className="h-full w-full object-contain p-3"
            fallback={
              item.assetPath ? (
                <AssetImage
                  alt={item.title}
                  className="object-contain p-3"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                  }
                  src={item.assetPath}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
              )
            }
            poster={item.assetPath}
            src={item.videoPath}
          />
        ) : item.assetPath && enableLightbox ? (
          <LightboxImage
            alt={item.title}
            className="object-contain p-3"
            fallback={
              <div className="flex h-full w-full items-center justify-center">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
            }
            src={item.assetPath}
          />
        ) : item.assetPath ? (
          <AssetImage
            alt={item.title}
            className={
              featured
                ? "h-auto max-h-[30rem] w-full object-contain"
                : "object-contain p-3"
            }
            fill={!featured}
            fallback={
              <div className="flex h-full w-full items-center justify-center">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
            }
            height={1403}
            src={item.assetPath}
            width={648}
          />
        ) : (
          <Icon aria-hidden="true" className="h-6 w-6" />
        )}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{item.title}</h3>
        <p className="mt-3 text-base leading-7 text-muted">
          {item.description}
        </p>
      </div>
    </div>
  );
}
