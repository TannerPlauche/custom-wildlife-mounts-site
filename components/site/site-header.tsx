import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[color:rgba(247,238,219,0.93)] shadow-[0_8px_24px_-16px_rgba(30,20,11,0.35)] backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/company-logo.jpg"
            alt="Custom Wildlife Mounts logo"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full border border-[var(--color-border)] object-cover"
            preload
          />
          <div>
            <p className="font-display text-lg leading-tight text-[var(--color-ink)] md:text-xl">
              Custom Wildlife Mounts
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Leitchfield, KY
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-ink)] sm:gap-2">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <Link className="nav-link" href="/work">
            Work
          </Link>
          <a className="nav-link whitespace-nowrap" href="tel:+12707483990">
            <span className="hidden sm:inline">270-748-3990</span>
            <span className="sm:hidden" aria-label="Call 270-748-3990">
              Call
            </span>
          </a>
          <Link className="btn-primary ml-1 hidden whitespace-nowrap px-5 py-2 lg:inline-flex" href="/book">
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}