import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("is-alibaba-worth-high-annual-fees")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;
const seoTitle =
  "阿里巴巴一年花幾十萬甚至上百萬元，真的值得嗎？先回答這三個問題";

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

export default function IsAlibabaWorthHighAnnualFeesPage() {
  return <SeoInsightArticle article={article} />;
}
