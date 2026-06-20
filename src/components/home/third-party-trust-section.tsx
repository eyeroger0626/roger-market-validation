import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Building2, Newspaper } from "lucide-react";
import { AssetImage } from "@/components/ui/asset-image";

const trustCards = [
  {
    title: "台北市電腦公會會員企業專訪",
    description:
      "星啟夢圓行銷曾接受台北市電腦公會會員企業專訪，分享如何透過短影音與跨境行銷協助台灣企業拓展海外市場。",
    href: "https://www.tca.org.tw/tca_news1.php?n=2447",
    cta: "閱讀專訪",
    icon: Newspaper,
    image: "/assets/media/tca-interview.jpg",
    imageClassName: "object-cover",
  },
  {
    title: "台中市政府青年諮詢委員",
    description:
      "參與青年事務與產業發展相關討論，長期關注台灣製造業數位轉型與海外市場機會。",
    href: "https://youth.taichung.gov.tw/CommitteeManage/Detail/202efbf0-17d7-4fef-953b-7f91c5b5e918",
    cta: "查看委員資料",
    icon: Building2,
    image: "/assets/media/youth-committee.JPG",
    imageClassName: "object-contain p-1",
  },
  {
    title: "製造業探廠案例",
    description:
      "透過實際探廠影片，呈現工廠現場、設備、生產流程與產品應用，協助海外買家更快理解供應商能力。",
    href: "https://youtu.be/G0_wnXH5Z6U?si=QcX43b1JRp3QaqrB",
    cta: "觀看探廠影片",
    icon: BadgeCheck,
    image: "/assets/media/factory-tour-cover.gif",
    imageClassName: "object-contain p-1",
  },
];

function TrustVisual({
  alt,
  icon: Icon,
  src,
  imageClassName,
}: {
  alt: string;
  icon: typeof Newspaper;
  src: string;
  imageClassName: string;
}) {
  return (
    <div className="relative h-[22rem] overflow-hidden rounded-2xl border border-border bg-background text-primary shadow-sm sm:h-[24rem] lg:h-[23rem] xl:h-[25rem]">
      <AssetImage
        alt={alt}
        className={imageClassName}
        fallback={
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#f8fbfd_0%,#dce7ee_100%)]">
            <Icon aria-hidden="true" className="h-8 w-8" />
          </div>
        }
        src={src}
      />
    </div>
  );
}

export function ThirdPartyTrustSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20" id="third-party-trust">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Third-party Trust
            </p>
            <h2 className="mt-4 whitespace-normal text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:whitespace-nowrap lg:text-[2.65rem]">
              第三方報導與產業參與
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted lg:ml-auto">
            除了市場成果之外，也持續參與製造業與數位轉型相關交流。
          </p>
        </div>

        <div className="mt-10 rounded-[1.5rem] border border-border/80 bg-[linear-gradient(135deg,#f8fbfd_0%,#ffffff_100%)] p-2 shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
          <div className="grid overflow-hidden rounded-[1.1rem] border border-border/70 bg-white lg:grid-cols-3">
            {trustCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  className="flex flex-col border-b border-border/70 p-3 transition hover:bg-background/70 sm:p-4 lg:border-b-0 lg:border-r last:lg:border-r-0"
                  key={card.title}
                >
                  <TrustVisual
                    alt={card.title}
                    icon={card.icon}
                    imageClassName={card.imageClassName}
                    src={card.image}
                  />
                  <div className="mt-3 inline-flex w-fit items-center gap-3 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-primary">
                    <Icon aria-hidden="true" className="h-4 w-4" />
                    As Seen In
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-7 text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[0.8125rem] leading-6 text-muted [text-wrap:pretty]">
                    {card.description}
                  </p>
                  {card.href ? (
                    <Link
                      className="mt-auto inline-flex items-center pt-7 text-sm font-semibold text-primary transition hover:text-secondary"
                      href={card.href}
                      target="_blank"
                    >
                      {card.cta}
                      <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
                    </Link>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
