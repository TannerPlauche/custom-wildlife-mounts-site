export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-forest-dark)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-[color:rgba(248,242,230,0.7)] md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-display text-base text-[var(--color-cream)]">
          Custom Wildlife Mounts and Outfitting LLC
        </p>
        <div className="flex flex-col gap-1 md:items-end">
          <a href="tel:+12707483990" className="text-[var(--color-cream)] transition hover:text-[var(--color-accent)]">
            270-748-3990
          </a>
          <p>© {year} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}