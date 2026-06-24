import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("is-alibaba-still-worth-it")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;

export const metadata: Metadata = {
  title: "阿里巴巴國際站還有效嗎？2026 製造業外銷獲客現況分析",
  description: article.description,
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title: article.title,
    description: article.description,
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.description,
    images: [socialShareImageUrl],
  },
};

export default function IsAlibabaStillWorthItPage() {
  return <SeoInsightArticle article={article} />;
}


