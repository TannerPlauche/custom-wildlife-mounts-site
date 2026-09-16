import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const highlights = [
  "Detailed craftsmanship rooted in traditional taxidermy standards",
  "Friendly, straightforward process from intake to final pickup",
  "Focused on preserving color, anatomy, and natural expression",
];

export function AboutSection() {
  return (
    <SectionShell id="about" className="py-20 md:py-24">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
        <SectionHeading
          eyebrow="About"
          title="Built on Quality Taxidermy"
          description="Custom Wildlife Mounts and Outfitting LLC serves the Leitchfield area with taxidermy work designed to look timeless, natural, and display-ready."
        />
        <ul className="space-y-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6 shadow-[0_18px_40px_-24px_rgba(30,20,11,0.5)] md:p-8">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-4 text-base leading-relaxed text-[var(--color-ink)]"
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-forest)] text-[11px] text-[var(--color-cream)]"
              >
                &#10003;
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}