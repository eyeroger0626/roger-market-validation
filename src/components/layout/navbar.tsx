import Link from "next/link";

export function Navbar() {
  const links = [
    { href: "/#case-studies", label: "案例成果" },
    { href: "/#about", label: "關於我們" },
    { href: "/#program", label: "獲客方案" },
    { href: "/#faq", label: "常見問題" },
    { href: "/#contact", label: "聯絡我們" },
  ];

  return (
    <header className="border-b border-border bg-background/95">
      <nav
        aria-label="主要導覽"
        className="mx-auto flex min-h-16 w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
      >
        <Link
          href="/"
          className="group inline-flex max-w-full flex-col leading-tight"
        >
          <span className="text-base font-bold tracking-normal text-primary sm:text-lg">
            製造業海外獲客系統
          </span>
          <span className="mt-1 text-xs font-semibold tracking-[0.08em] text-accent sm:text-sm">
            星啟夢圓行銷
          </span>
        </Link>
        <div className="-mx-4 flex w-[calc(100%+2rem)] gap-5 overflow-x-auto whitespace-nowrap px-4 pb-1 text-sm font-semibold text-muted sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 lg:mx-0 lg:w-auto lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0">
          {links.map((link) => (
            <Link
              className="transition hover:text-primary"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
