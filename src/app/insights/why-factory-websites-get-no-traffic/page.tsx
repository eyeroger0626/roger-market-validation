import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("why-factory-websites-get-no-traffic")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;

export const metadata: Metadata = {
  title: "為什麼工廠網站沒人看？製造業網站沒有海外詢盤的原因",
  description: article.description,
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title: "為什麼工廠網站沒人看？製造業網站沒有海外詢盤的原因",
    description: article.description,
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "為什麼工廠網站沒人看？製造業網站沒有海外詢盤的原因",
    description: article.description,
    images: [socialShareImageUrl],
  },
};

export default function WhyFactoryWebsitesGetNoTrafficPage() {
  return <SeoInsightArticle article={article} />;
}
