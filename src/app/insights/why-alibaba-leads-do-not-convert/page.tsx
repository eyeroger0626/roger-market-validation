import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("why-alibaba-leads-do-not-convert")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;

export const metadata: Metadata = {
  title: "為什麼阿里巴巴詢盤很多卻很難成交？製造業外銷開發痛點分析",
  description: [article.description, "星啟夢圓行銷協助台灣製造業持續取得海外 B2B 詢盤，降低對展會與 B2B 平台的依賴。"].join(" "),
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title: ["為什麼阿里巴巴詢盤很多卻很難成交？製造業外銷開發痛點分析", "製造業海外獲客系統｜星啟夢圓行銷"].join("\uFF5C"),
    description: [article.description, "星啟夢圓行銷協助台灣製造業持續取得海外 B2B 詢盤，降低對展會與 B2B 平台的依賴。"].join(" "),
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: ["為什麼阿里巴巴詢盤很多卻很難成交？製造業外銷開發痛點分析", "製造業海外獲客系統｜星啟夢圓行銷"].join("\uFF5C"),
    description: [article.description, "星啟夢圓行銷協助台灣製造業持續取得海外 B2B 詢盤，降低對展會與 B2B 平台的依賴。"].join(" "),
    images: [socialShareImageUrl],
  },
};

export default function WhyAlibabaLeadsDoNotConvertPage() {
  return <SeoInsightArticle article={article} />;
}


