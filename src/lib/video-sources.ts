export const VIDEO_SOURCES = {
  socialTrade:
    process.env.NEXT_PUBLIC_SOCIAL_TRADE_VIDEO_URL ??
    "/assets/about/social-trade-video.mp4",
  usa:
    process.env.NEXT_PUBLIC_USA_VIDEO_URL ??
    "/assets/case-studies/usa-food/video.mp4",
  vietnam:
    process.env.NEXT_PUBLIC_VIETNAM_VIDEO_URL ??
    "/assets/case-studies/vietnam-equipment/video.mp4",
} as const;
