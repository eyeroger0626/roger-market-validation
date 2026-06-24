import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("are-trade-shows-still-worth-it")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;

export const metadata: Metadata = {
  title: "展會到底還有沒有用？製造業參展前的海外市場驗證思考",
  description: article.description,
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title: "展會到底還有沒有用？製造業參展前的海外市場驗證思考",
    description: article.description,
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "展會到底還有沒有用？製造業參展前的海外市場驗證思考",
    description: article.description,
    images: [socialShareImageUrl],
  },
};

export default function AreTradeShowsStillWorthItPage() {
  return <SeoInsightArticle article={article} />;
}


