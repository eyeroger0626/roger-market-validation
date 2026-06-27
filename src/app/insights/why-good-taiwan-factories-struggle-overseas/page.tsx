import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("why-good-taiwan-factories-struggle-overseas")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;
const seoTitle = "為什麼很多台灣工廠產品很好，海外市場卻始終做不起來？";

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

export default function WhyGoodTaiwanFactoriesStruggleOverseasPage() {
  return <SeoInsightArticle article={article} />;
}
