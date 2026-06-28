import {
  BadgeDollarSign,
  BarChart3,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Megaphone,
  Video,
} from "lucide-react";

const offerItems = [
  {
    title: "初步市場切入建議",
    icon: ClipboardCheck,
  },
  {
    title: "探廠與素材規劃",
    icon: Camera,
  },
  {
    title: "短影音內容製作",
    icon: Video,
  },
  {
    title: "海外廣告測試",
    icon: Megaphone,
  },
  {
    title: "採購商名單整理",
    icon: CheckCircle2,
  },
  {
    title: "市場反應初步報告",
    icon: BarChart3,
  },
];

export function MarketValidationProgramSection() {
  return (
    <section
      id="program"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(47,111,126,0.14),transparent_34%),linear-gradient(180deg,#f8fbfd_0%,#ffffff_100%)] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2.25rem] border border-white/70 bg-white/82 p-4 shadow-[0_40px_120px_rgba(15,23,42,0.14)] ring-1 ring-primary/5 backdrop-blur sm:p-5">
          <div className="rounded-[1.9rem] border border-border/70 bg-[linear-gradient(135deg,#ffffff_0%,#eef4f7_100%)] p-8 sm:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  Program Offer
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
                  海外市場驗證專案
                </h2>
                <p className="mt-6 max-w-[47rem] text-base leading-8 text-muted [text-wrap:pretty] sm:text-[1.05rem] sm:leading-9">
                  先驗證市場，再決定投入。比起直接投入展會、平台與長期廣告，更重要的是先確認海外市場是否真的存在需求。
                </p>

                <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-primary p-6 text-white shadow-[0_30px_90px_rgba(18,59,93,0.34)] sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    專案費用
                  </p>
                  <p className="mt-5 break-words text-[2.55rem] font-semibold leading-none tracking-normal sm:text-5xl lg:text-[3.5rem]">
                    NTD 29,800
                  </p>
                  <div className="mt-6 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-5">
                    <BadgeDollarSign
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    />
                    <p className="text-[0.8125rem] leading-6 text-white/[0.72] [text-wrap:pretty] sm:text-sm">
                      用小預算先測出市場反應，讓工廠不用一開始就砸大錢，也能直觀看見海外買家的需求訊號。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  專案包含
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {offerItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="flex items-center gap-4 rounded-2xl border border-border/80 bg-white/86 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(15,23,42,0.1)]"
                        key={item.title}
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon aria-hidden="true" className="h-5 w-5" />
                        </div>
                        <p className="font-semibold leading-6 text-foreground">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 rounded-[1.75rem] border border-primary/10 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                  <h3 className="text-2xl font-semibold text-foreground">
                    不再只靠阿里與展會碰運氣
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-7 text-muted [text-wrap:pretty] sm:text-base">
                    當阿里國際站詢盤品質下降、平台成本變高，展會又需要大量預算與人力時，工廠更需要一種低成本、高效率的海外市場測試方式。先用小預算取得詢盤與買家回應，再判斷是否值得擴大投入。
                  </p>
                  <a
                    className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(18,59,93,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0d2f4d] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
                    href="#contact"
                  >
                    預約海外獲客諮詢
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
