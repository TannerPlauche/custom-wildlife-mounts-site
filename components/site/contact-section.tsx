import Link from "next/link";

import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const facebookUrl =
  "https://www.facebook.com/p/Custom-Wildlife-Mounts-And-Outfitting-LLC-100056794104663/";

export function ContactSection() {
  return (
    <SectionShell id="contact" className="pt-20 pb-24 md:pt-24 md:pb-28">
      <div className="grid gap-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-[0_24px_60px_-30px_rgba(30,20,11,0.5)] md:grid-cols-[1fr_0.95fr] md:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Ready To Start A Mount?"
          description="Book online, or call or message to discuss your project, timeline, and drop-off details."
        />
        <div className="space-y-5 rounded-2xl border border-[var(--color-forest)]/25 bg-[var(--color-panel)] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Business Details
          </p>
          <div className="space-y-2 text-base leading-relaxed text-[var(--color-ink)]">
            <p>Custom Wildlife Mounts and Outfitting LLC</p>
            <p>Leitchfield, KY</p>
            <p>
              Phone: <a href="tel:+12707483990">270-748-3990</a>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="btn-primary" href="/book">
              Book Now
            </Link>
            <a className="btn-secondary" href="tel:+12707483990">
              Call Now
            </a>
            <Link className="btn-secondary" href={facebookUrl} target="_blank">
              Facebook Page
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}