# 製造業海外獲客系統｜星啟夢圓行銷

## 專案用途

這是一個製造業海外獲客顧問網站，目標受眾為台灣製造業老闆、工業會會員、工廠二代與外銷業務主管。網站用於介紹製造業海外獲客系統、展示 Case Study、建立信任並收集潛在客戶詢問。

## 技術架構

- Next.js 15
- TypeScript
- App Router
- Tailwind CSS
- Framer Motion
- lucide-react
- SEO metadata
- sitemap / robots

## 本機安裝方式

```bash
pnpm install
```

若使用 npm：

```bash
npm install
```

## 開發指令

```bash
pnpm dev
```

或：

```bash
npm run dev
```

## Build 指令

```bash
pnpm build
```

或：

```bash
npm run build
```

## 其他指令

```bash
pnpm lint
pnpm start
```

或：

```bash
npm run lint
npm run start
```

## Vercel 部署方式

本專案為標準 Next.js 專案，可直接部署到 Vercel。

1. 將專案推送到 GitHub。
2. 在 Vercel 新增專案並選擇該 GitHub repository。
3. Framework Preset 選擇 Next.js。
4. Build Command 使用預設 `next build`。
5. Output Directory 維持預設。
6. 設定環境變數後部署。

目前不需要 `vercel.json`，Vercel 會自動偵測 Next.js 設定。

## 環境變數

請在 Vercel 或本機 `.env.local` 設定：

```bash
NEXT_PUBLIC_SITE_URL=https://roger-market-validation.vercel.app
```

用途：

- 產生 `sitemap.xml` 網址
- 產生 `robots.txt` sitemap 位置

若未設定，系統會 fallback 使用：

```bash
https://roger-market-validation.vercel.app
```
