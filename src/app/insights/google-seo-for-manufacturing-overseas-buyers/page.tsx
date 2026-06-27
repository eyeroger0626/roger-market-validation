import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("google-seo-for-manufacturing-overseas-buyers")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;
const seoTitle =
  "Google SEO 對製造業真的有用嗎？為什麼越來越多海外採購商先搜尋 Google";

export const metadata: Metadata = {
  title: seoTitle,
  description: article.description,
  keywords: article.keywords,
  alternates: { canonical: `/insights/${article.slug}` },
  openGraph: {
    title: seoTitle,
    description: article.description,
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: article.description,
    images: [socialShareImageUrl],
  },
};

export default function GoogleSeoForManufacturingOverseasBuyersPage() {
  return <SeoInsightArticle article={article} />;
}
