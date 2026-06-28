import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle(
  "which-overseas-market-should-factories-start-with",
)!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;

export const metadata: Metadata = {
  title:
    "工廠第一次做海外市場應該從哪個國家開始？製造業外銷市場選擇方法",
  description: [article.description, "星啟夢圓行銷協助台灣製造業持續取得海外 B2B 詢盤，降低對展會與 B2B 平台的依賴。"].join(" "),
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title:
      ["工廠第一次做海外市場應該從哪個國家開始？製造業外銷市場選擇方法", "製造業海外獲客系統｜星啟夢圓行銷"].join("\uFF5C"),
    description: [article.description, "星啟夢圓行銷協助台灣製造業持續取得海外 B2B 詢盤，降低對展會與 B2B 平台的依賴。"].join(" "),
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title:
      ["工廠第一次做海外市場應該從哪個國家開始？製造業外銷市場選擇方法", "製造業海外獲客系統｜星啟夢圓行銷"].join("\uFF5C"),
    description: [article.description, "星啟夢圓行銷協助台灣製造業持續取得海外 B2B 詢盤，降低對展會與 B2B 平台的依賴。"].join(" "),
    images: [socialShareImageUrl],
  },
};

export default function WhichOverseasMarketShouldFactoriesStartWithPage() {
  return <SeoInsightArticle article={article} />;
}
