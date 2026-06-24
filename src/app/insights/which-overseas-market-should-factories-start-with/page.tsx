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
  description: article.description,
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title:
      "工廠第一次做海外市場應該從哪個國家開始？製造業外銷市場選擇方法",
    description: article.description,
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "工廠第一次做海外市場應該從哪個國家開始？製造業外銷市場選擇方法",
    description: article.description,
    images: [socialShareImageUrl],
  },
};

export default function WhichOverseasMarketShouldFactoriesStartWithPage() {
  return <SeoInsightArticle article={article} />;
}
