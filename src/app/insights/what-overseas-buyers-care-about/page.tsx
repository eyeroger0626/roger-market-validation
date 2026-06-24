import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("what-overseas-buyers-care-about")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;

export const metadata: Metadata = {
  title: "海外買家最在意工廠什麼？製造業外銷成交關鍵分析",
  description: article.description,
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title: "海外買家最在意工廠什麼？製造業外銷成交關鍵分析",
    description: article.description,
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "海外買家最在意工廠什麼？製造業外銷成交關鍵分析",
    description: article.description,
    images: [socialShareImageUrl],
  },
};

export default function WhatOverseasBuyersCareAboutPage() {
  return <SeoInsightArticle article={article} />;
}
