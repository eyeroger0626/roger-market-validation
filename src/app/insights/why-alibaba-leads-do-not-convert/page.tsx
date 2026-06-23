import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("why-alibaba-leads-do-not-convert")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;

export const metadata: Metadata = {
  title: "為什麼阿里巴巴詢盤很多卻很難成交？製造業外銷開發痛點分析",
  description: article.description,
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title: "為什麼阿里巴巴詢盤很多卻很難成交？製造業外銷開發痛點分析",
    description: article.description,
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "為什麼阿里巴巴詢盤很多卻很難成交？製造業外銷開發痛點分析",
    description: article.description,
  },
};

export default function WhyAlibabaLeadsDoNotConvertPage() {
  return <SeoInsightArticle article={article} />;
}
