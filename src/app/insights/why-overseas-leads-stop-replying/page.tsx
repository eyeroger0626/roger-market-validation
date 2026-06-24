import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("why-overseas-leads-stop-replying")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;

export const metadata: Metadata = {
  title: "海外詢盤沒有回覆怎麼辦？製造業最常忽略的 7 個成交關鍵",
  description: article.description,
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title: "海外詢盤沒有回覆怎麼辦？製造業最常忽略的 7 個成交關鍵",
    description: article.description,
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "海外詢盤沒有回覆怎麼辦？製造業最常忽略的 7 個成交關鍵",
    description: article.description,
    images: [socialShareImageUrl],
  },
};

export default function WhyOverseasLeadsStopReplyingPage() {
  return <SeoInsightArticle article={article} />;
}
