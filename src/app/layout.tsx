import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { socialShareImage, socialShareImageUrl } from "@/lib/social-share";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const siteTitle = "製造業海外獲客系統｜星啟夢圓行銷";
const siteDescription =
  "協助台灣製造業持續取得海外 B2B 詢盤，降低對展會與 B2B 平台的依賴。";
const organizationName = "星啟夢圓行銷";
const organizationLegalName = "星啟夢圓行銷有限公司";
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteTitle,
  alternateName: organizationName,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "zh-Hant-TW",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteTitle,
  legalName: organizationLegalName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s｜${siteTitle}`,
  },
  applicationName: siteTitle,
  description: siteDescription,
  keywords: [
    "製造業海外獲客系統",
    "製造業海外市場驗證",
    "海外市場驗證",
    "B2B 詢盤",
    "短影音引流",
    "台灣製造業",
    "外銷開發",
    "海外B2B拓客",
    "Meta Ads",
    "Lead Generation",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "zh_TW",
    url: siteUrl,
    siteName: siteTitle,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialShareImageUrl],
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
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
