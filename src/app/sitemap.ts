import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const seoCaseStudyPages = [
    "us-food-ingredient-market-validation",
    "vietnam-vacuum-packaging-market-validation",
  ];

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...caseStudies.map((caseStudy) => ({
      url: `${siteUrl}/case-studies/${caseStudy.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...seoCaseStudyPages.map((slug) => ({
      url: `${siteUrl}/case-studies/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
