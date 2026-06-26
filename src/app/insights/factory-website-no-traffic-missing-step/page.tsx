import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("factory-website-no-traffic-missing-step")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;
const seoTitle =
  "工廠官網沒流量，不一定是網站做不好，而是少了這一步";

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

export default function FactoryWebsiteNoTrafficMissingStepPage() {
  return <SeoInsightArticle article={article} />;
}
