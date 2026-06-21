import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const siteTitle = "海外市場驗證系統｜星啟夢圓行銷";
const siteDescription =
  "協助台灣製造業透過探廠短影音、廣告與市場測試，先驗證海外需求，再決定是否擴大投入。";
const ogImageUrl = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s｜星啟夢圓行銷",
  },
  description: siteDescription,
  keywords: [
    "海外市場驗證",
    "製造業海外行銷",
    "B2B 詢盤",
    "探廠短影音",
    "台灣製造業",
    "外銷開發",
    "海外B2B拓客系統",
    "Meta Ads",
    "Lead Generation",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "zh_TW",
    url: siteUrl,
    siteName: "星啟夢圓行銷",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-Hant">
      <body>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
