import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("why-alibaba-inquiries-do-not-become-orders")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;
const seoTitle =
  "為什麼阿里巴巴有詢盤，卻沒有訂單？真正的問題，可能不是詢盤品質";

export const metadata: Metadata = {
  title: seoTitle,
  description: article.description,
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
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

export default function WhyAlibabaInquiriesDoNotBecomeOrdersPage() {
  return <SeoInsightArticle article={article} />;
}
