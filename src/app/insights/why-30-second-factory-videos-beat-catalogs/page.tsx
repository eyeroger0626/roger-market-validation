import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle("why-30-second-factory-videos-beat-catalogs")!;

const pageUrl = `${siteUrl}/insights/${article.slug}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: article.keywords,
  alternates: {
    canonical: `/insights/${article.slug}`,
  },
  openGraph: {
    title: article.title,
    description: article.description,
    type: "article",
    locale: "zh_TW",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.description,
  },
};

export default function WhyThirtySecondFactoryVideosBeatCatalogsPage() {
  return <SeoInsightArticle article={article} />;
}
