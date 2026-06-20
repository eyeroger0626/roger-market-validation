import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const siteTitle = "Roger｜製造業海外市場驗證";
const siteDescription =
  "協助台灣製造業以短影音、內容素材與海外廣告測試，低成本驗證海外市場需求、詢盤品質與潛在商機。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s｜Roger",
  },
  description: siteDescription,
  keywords: [
    "製造業海外行銷",
    "海外市場驗證",
    "B2B 詢盤",
    "短影音引流",
    "台灣製造業",
    "外銷開發",
    "工業會",
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
    url: "/",
    siteName: "星啟夢圓行銷有限公司",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Roger 製造業海外市場驗證",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
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
