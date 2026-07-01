import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle(
  "why-overseas-buyers-have-demand-but-do-not-choose-you",
)!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;
const seoTitle =
  "為什麼海外買家有需求，卻最後沒有選擇你？｜製造業海外買家信任與詢盤轉換分析｜星啟夢圓行銷";

export const metadata: Metadata = {
  title: { absolute: seoTitle },
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

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: seoTitle,
  description: article.description,
  mainEntityOfPage: pageUrl,
  url: pageUrl,
  image: socialShareImageUrl,
  author: {
    "@type": "Person",
    name: "Roger",
  },
  publisher: {
    "@type": "Organization",
    name: "星啟夢圓行銷",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: article.faqs?.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "首頁",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: article.title,
      item: pageUrl,
    },
  ],
};

export default function WhyOverseasBuyersHaveDemandButDoNotChooseYouPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        type="application/ld+json"
      />
      <SeoInsightArticle article={article} />
    </>
  );
}
