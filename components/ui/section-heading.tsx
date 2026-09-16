type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <div className="space-y-3">
        <h2 className="font-display text-3xl leading-tight text-[var(--color-ink)] md:text-4xl">
          {title}
        </h2>
        <span className="rule-gold" aria-hidden />
      </div>
      <p className="text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
        {description}
      </p>
    </header>
  );
}