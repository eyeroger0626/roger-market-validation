import { siteUrl } from "@/lib/site-url";

const publisher = {
  "@type": "Organization",
  name: "星啟夢圓行銷",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
  },
};

const homeVideos = [
  {
    id: "l8N34Q1J0aI",
    name: "美國食品市場驗證短影音",
    description:
      "透過探廠短影音呈現工廠實力、生產能力與產品定位，協助美國採購商重新回到對話並進入樣品付款流程。",
    uploadDate: "2026-05-22T14:19:52+08:00",
    duration: "PT46S",
  },
  {
    id: "yFvh4cWsn9E",
    name: "越南設備案例短影音",
    description:
      "透過越南語短影音呈現包裝設備、真空封口機與應用場景，協助當地買家理解設備需求並取得 B2B 詢盤。",
    uploadDate: "2026-04-12T13:51:41+08:00",
    duration: "PT46S",
  },
  {
    id: "wcEQFQxpUc0",
    name: "Social Trade 深度內容影片",
    description:
      "說明海外買家如何在展會前透過社群內容、探廠影片與短影音篩選供應商並建立第一層信任。",
    uploadDate: "2026-03-24T15:51:05+08:00",
    duration: "PT2M35S",
  },
];

export function HomeVideoSchema() {
  return homeVideos.map((video) => {
    const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;
    const videoJsonLd = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "@id": `${siteUrl}/#video-${video.id}`,
      name: video.name,
      description: video.description,
      thumbnailUrl: [
        `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
        `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
      ],
      uploadDate: video.uploadDate,
      duration: video.duration,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
      contentUrl: watchUrl,
      url: watchUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": siteUrl,
      },
      publisher,
      inLanguage: "zh-Hant-TW",
      potentialAction: {
        "@type": "WatchAction",
        target: watchUrl,
      },
    };

    return (
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        key={video.id}
        type="application/ld+json"
      />
    );
  });
}
