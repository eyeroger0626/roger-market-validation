import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("how-to-judge-overseas-lead-quality")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;

export const metadata: Metadata = {
  title: "海外詢盤怎麼判斷真假？製造業 B2B Lead 品質判斷方法",
  description: article.description,
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title: "海外詢盤怎麼判斷真假？製造業 B2B Lead 品質判斷方法",
    description: article.description,
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "海外詢盤怎麼判斷真假？製造業 B2B Lead 品質判斷方法",
    description: article.description,
  },
};

export default function HowToJudgeOverseasLeadQualityPage() {
  return <SeoInsightArticle article={article} />;
}
