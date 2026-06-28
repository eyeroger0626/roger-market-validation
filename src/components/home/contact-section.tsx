"use client";

import { FormEvent, useState } from "react";
import { Mail, MessageCircle, Send, ShieldCheck } from "lucide-react";

const fitItems = [
  "想開發海外市場，但不知道從哪個國家開始",
  "已經做過阿里國際站或展會，但轉換效果有限",
  "想測試短影音與社群廣告是否能帶來 B2B 詢盤",
  "想用小預算先驗證市場，再決定是否擴大投入",
  "需要重新整理產品對海外買家的信任溝通方式",
];

const fields = [
  { id: "company", label: "公司名稱", type: "text" },
  { id: "name", label: "聯絡人姓名", type: "text" },
  { id: "title", label: "職稱", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "contact", label: "Line ID 或電話", type: "text" },
  { id: "product", label: "主要產品", type: "text" },
  { id: "market", label: "想測試的海外市場", type: "text" },
];

const recipientEmail = "eyeroger0626@gmail.com";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const companyName = String(formData.get("company") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const contact = String(formData.get("contact") ?? "").trim();

    if (!companyName) {
      setSubmitted(false);
      setError("請填寫公司名稱。");
      return;
    }

    if (!email && !contact) {
      setSubmitted(false);
      setError("請至少填寫 Email 或 Line ID / 電話，方便我們聯繫您。");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName,
          contactName: String(formData.get("name") ?? "").trim(),
          title: String(formData.get("title") ?? "").trim(),
          email,
          lineOrPhone: contact,
          product: String(formData.get("product") ?? "").trim(),
          targetMarket: String(formData.get("market") ?? "").trim(),
          currentProblem: String(formData.get("message") ?? "").trim(),
        }),
      });
      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.error);
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setSubmitted(false);
      setError("送出失敗，請稍後再試，或直接 Email 聯繫我們。");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-none">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            聯絡我們
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.2] text-foreground sm:text-5xl sm:leading-[1.15] lg:text-6xl">
            <span className="block">想知道您的產品</span>
            <span className="block">哪個海外市場最有機會？</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            留下產品資訊，我們將協助初步評估適合優先測試的國家、是否適合用短影音開發，以及是否有機會取得海外詢盤。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-[2rem] border border-border bg-background p-6 shadow-sm sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
              <ShieldCheck aria-hidden="true" className="h-7 w-7" />
            </div>
            <h3 className="mt-8 text-2xl font-semibold text-foreground sm:text-3xl">
              適合先聊聊的情況
            </h3>

            <div className="mt-8 grid gap-4">
              {fitItems.map((item) => (
                <div
                  key={item}
                className="flex gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-5"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="text-base leading-7 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-white p-6 shadow-soft sm:p-8">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <label key={field.id} className="grid gap-2">
                    <span className="text-sm font-semibold text-foreground">
                      {field.label}
                    </span>
                    <input
                      className="h-12 rounded-2xl border border-border bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted/70 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15"
                      name={field.id}
                      placeholder={field.label}
                      type={field.type}
                    />
                  </label>
                ))}
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-foreground">
                  目前外銷狀況 / 想解決的問題
                </span>
                <textarea
                  className="min-h-36 resize-y rounded-2xl border border-border bg-background px-4 py-3 text-base leading-7 text-foreground outline-none transition placeholder:text-muted/70 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15"
                  name="message"
                  placeholder="請簡單描述目前外銷狀況、遇到的問題，或想優先測試的市場。"
                />
              </label>

              <button
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0d2f4d] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-fit"
                disabled={isSubmitting}
                type="submit"
              >
                <Send aria-hidden="true" className="mr-2 h-4 w-4" />
                {isSubmitting ? "送出中..." : "送出初步評估"}
              </button>

              {submitted ? (
                <div className="rounded-2xl border border-secondary/20 bg-secondary/10 p-4 text-sm font-semibold text-primary">
                  感謝填寫，我們已收到您的需求，將盡快與您聯繫。
                </div>
              ) : null}

              {error ? (
                <div className="rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm font-semibold text-primary">
                  {error}
                </div>
              ) : null}
            </form>

            <div className="mt-8 grid gap-3 border-t border-border pt-6 text-sm leading-6 text-muted">
              <a
                className="flex min-w-0 items-center gap-3 break-all transition hover:text-primary"
              >
                <Mail aria-hidden="true" className="h-4 w-4 text-primary" />
                Email：{recipientEmail}
              </a>
              <p className="flex min-w-0 items-center gap-3">
                <MessageCircle
                  aria-hidden="true"
                  className="h-4 w-4 text-primary"
                />
                LINE：請填入您的 LINE ID，我們會主動聯繫
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
