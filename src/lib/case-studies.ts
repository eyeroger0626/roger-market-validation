export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  market: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-1",
    title: "美國食品海外獲客案例",
    industry: "食品製造業",
    market: "美國",
    summary:
      "以 100 美金廣告預算取得 40+ 美國採購商名單，並推動樣品單進展。",
    challenge:
      "客戶需要在擴大外銷投入前，確認美國採購商是否會對產品產生實際回應。",
    approach:
      "我們將工廠能力轉換成採購商看得懂的訊息，製作短影音信任素材，並透過精準廣告測試需求。",
    result:
      "專案取得合格採購商名單、釐清轉換阻力，並推動樣品單作為下一階段市場進入訊號。",
  },
  {
    slug: "case-2",
    title: "越南設備海外獲客案例",
    industry: "包裝設備／封口機",
    market: "越南",
    summary:
      "以 300 美金廣告預算取得 129 筆設備相關 B2B 詢盤。",
    challenge:
      "客戶需要確認短影音與社群廣告是否能在越南帶來真正具採購意圖的設備詢盤。",
    approach:
      "我們以設備應用短影音、越南市場受眾設定與有限廣告預算，驗證 B2B 市場需求。",
    result:
      "測試取得 129 筆設備相關 B2B 詢盤，確認後續布局東南亞市場的需求訊號。",
  },
  {
    slug: "case-3",
    title: "歐洲展會海外獲客策略案例",
    industry: "包裝設備／真空封口機",
    market: "德國／歐洲",
    summary:
      "將展會名片與現場素材轉化為後續信任建立與代理商開發機會。",
    challenge:
      "客戶需要在展會結束後，持續與歐洲潛在買家建立互動與信任。",
    approach:
      "我們規劃以德國為優先測試市場，運用展會影片、買家互動畫面與短影音作為展後信任素材。",
    result:
      "此策略建立了歐洲代理商與經銷商開發的後續驗證路徑。",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
