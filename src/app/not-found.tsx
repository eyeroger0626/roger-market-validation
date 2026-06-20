import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-background py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-3xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
          404 Not Found
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          找不到這個頁面
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          您可以回到首頁，查看海外市場驗證專案與案例成果。
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0d2f4d] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          回到首頁
        </Link>
      </div>
    </main>
  );
}
