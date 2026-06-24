import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("can-factory-short-videos-get-overseas-buyers")!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;

export const metadata: Metadata = {
  title: "工廠拍短影音真的會有海外客戶嗎？製造業短影音獲客案例分析",
  description: article.description,
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title: "工廠拍短影音真的會有海外客戶嗎？製造業短影音獲客案例分析",
    description: article.description,
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "工廠拍短影音真的會有海外客戶嗎？製造業短影音獲客案例分析",
    description: article.description,
    images: [socialShareImageUrl],
  },
};

export default function CanFactoryShortVideosGetOverseasBuyersPage() {
  return <SeoInsightArticle article={article} />;
}


