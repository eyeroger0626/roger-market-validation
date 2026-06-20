const faqs = [
  {
    question: "這個專案是保證成交嗎？",
    answer:
      "不是。海外市場驗證專案的目的不是保證訂單，而是先用低成本測試市場反應、詢盤品質與海外買家是否有興趣。確認市場有機會後，再決定是否擴大投入。",
  },
  {
    question: "29,800 元包含什麼？",
    answer:
      "包含市場方向整理、內容策略、短影音素材規劃、海外廣告測試、詢盤初步分析與市場驗證建議。基礎方案已包含 100 美金測試廣告費。",
  },
  {
    question: "適合哪些產業？",
    answer:
      "適合已有產品、具備出口潛力、想測試海外市場的台灣製造業，例如食品、機械設備、包裝設備、五金零件、手工具、材料與工業用品等。",
  },
  {
    question: "如果我從來沒有出口過，也適合嗎？",
    answer:
      "適合。海外市場驗證的目的，就是在正式投入海外市場之前，先確認產品是否有詢盤機會與市場需求。即使沒有外銷經驗，也可以透過驗證流程了解市場反應，再判斷是否值得投入更多資源。",
  },
  {
    question: "多久可以看到結果？",
    answer:
      "一般會以 2 到 4 週作為第一階段觀察週期。實際結果會依產品、目標市場、素材品質與受眾反應而不同。",
  },
  {
    question: "詢盤資料歸誰？",
    answer:
      "專案產生的海外採購商詢盤資料會提供給合作廠商作為後續業務開發使用。",
  },
  {
    question: "如果測試效果不錯，下一步是什麼？",
    answer:
      "如果市場反應良好，可以進一步規劃第二階段合作，例如擴大廣告預算、增加短影音內容、針對特定國家深度開發，或建立長期海外詢盤系統。",
  },
  {
    question: "如果測試效果不好，是否代表產品沒有市場？",
    answer:
      "不一定。測試結果可能受到素材、切入角度、目標市場、價格區間與受眾設定影響。專案重點在於先用小成本找出問題，而不是一開始就投入大量預算。",
  },
  {
    question: "一定要拍攝工廠嗎？",
    answer:
      "不一定，但如果產品需要建立信任，探廠、設備展示、製程畫面與團隊訪談通常會比單純產品照片更能提升海外買家的信任感。",
  },
  {
    question: "可以測試哪些國家？",
    answer:
      "可依產品類型與市場策略評估，例如美國、越南、德國、法國、波蘭、東南亞市場或其他具潛力的海外市場。",
  },
  {
    question: "如何開始？",
    answer:
      "可以先預約一次初步討論，我們會根據產品、目標市場與目前外銷狀況，判斷是否適合進行第一階段海外市場驗證。",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              常見問題 FAQ
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.25] text-foreground sm:text-5xl sm:leading-[1.18]">
              <span className="block">海外市場驗證 FAQ</span>
              <span className="block">第一次測試海外市場前</span>
              <span className="block">您可能想知道的事</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-muted">
              我們把製造業廠商最常遇到的問題整理在這裡，幫助您判斷是否適合先用小預算測試海外市場。
            </p>

            <div className="mt-10 rounded-[1.5rem] border border-border bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-primary">
                還不確定是否適合？
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0d2f4d] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
              >
                預約初步討論
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="rounded-[1.5rem] border border-border bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="flex gap-4 sm:gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-foreground sm:text-xl">
                      Q：{faq.question}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-muted">
                      A：{faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
