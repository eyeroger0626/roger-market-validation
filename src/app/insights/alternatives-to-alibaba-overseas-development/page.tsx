import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("alternatives-to-alibaba-overseas-development")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;
const seoTitle =
  "台灣工廠不做阿里巴巴，還有哪些海外開發方式？真正該思考的，不是哪個平台，而是哪個市場";

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

export default function AlternativesToAlibabaOverseasDevelopmentPage() {
  return <SeoInsightArticle article={article} />;
}
