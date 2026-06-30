import type { Metadata } from "next";
import { SeoInsightArticle } from "@/components/insights/seo-insight-article";
import { getInsightArticle } from "@/lib/insights";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";

const article = getInsightArticle(
  "what-is-manufacturing-overseas-lead-generation",
)!;
const pageUrl = `${siteUrl}/insights/${article.slug}`;
const seoTitle =
  "什麼是製造業海外獲客？2026 完整指南｜製造業海外獲客系統｜星啟夢圓行銷";

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

export default function WhatIsManufacturingOverseasLeadGenerationPage() {
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
