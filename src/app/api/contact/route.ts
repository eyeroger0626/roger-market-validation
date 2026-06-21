import { NextResponse } from "next/server";

type ContactRequest = {
  companyName?: string;
  contactName?: string;
  title?: string;
  email?: string;
  lineOrPhone?: string;
  product?: string;
  targetMarket?: string;
  currentProblem?: string;
};

const resendApiUrl = "https://api.resend.com/emails";
const defaultToEmail = "eyeroger0626@gmail.com";
const defaultFromEmail = "onboarding@resend.dev";

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildEmailText(data: Required<ContactRequest>) {
  return [
    "海外市場驗證初步評估申請",
    "",
    `公司名稱：${data.companyName}`,
    `聯絡人姓名：${data.contactName}`,
    `職稱：${data.title}`,
    `Email：${data.email}`,
    `Line ID 或電話：${data.lineOrPhone}`,
    `主要產品：${data.product}`,
    `想測試的海外市場：${data.targetMarket}`,
    "",
    "目前外銷狀況 / 想解決的問題：",
    data.currentProblem,
  ].join("\n");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactRequest;
    const data = {
      companyName: normalize(payload.companyName),
      contactName: normalize(payload.contactName),
      title: normalize(payload.title),
      email: normalize(payload.email),
      lineOrPhone: normalize(payload.lineOrPhone),
      product: normalize(payload.product),
      targetMarket: normalize(payload.targetMarket),
      currentProblem: normalize(payload.currentProblem),
    };

    if (!data.companyName) {
      return NextResponse.json(
        { success: false, error: "請填寫公司名稱。" },
        { status: 400 },
      );
    }

    if (!data.email && !data.lineOrPhone) {
      return NextResponse.json(
        {
          success: false,
          error: "請至少填寫 Email 或 Line ID / 電話。",
        },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY is not configured." },
        { status: 500 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || defaultToEmail;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || defaultFromEmail;
    const text = buildEmailText(data);

    const response = await fetch(resendApiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: "海外市場驗證初步評估申請",
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      return NextResponse.json(
        {
          success: false,
          error: errorText || "Email sending failed.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}
