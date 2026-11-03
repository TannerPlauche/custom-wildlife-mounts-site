import Image from "next/image";
import Link from "next/link";

import { SectionShell } from "@/components/ui/section-shell";

export function HeroSection() {
  return (
    <SectionShell id="top" className="pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] shadow-[0_30px_70px_rgba(15,12,9,0.3)]">
        <Image
          src="/images/gallery/mount-24.jpeg"
          alt=""
          fill
          preload
          sizes="(min-width: 1024px) 1120px, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(15,14,9,0.88) 0%, rgba(20,18,12,0.72) 35%, rgba(20,18,12,0.32) 60%, rgba(20,18,12,0.15) 100%)",
          }}
        />

        <div className="relative grid gap-10 p-8 md:min-h-[560px] md:grid-cols-[1.1fr_0.9fr] md:items-end md:p-14">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Leitchfield, Kentucky
            </p>
            <h1 className="font-display text-4xl leading-[1.05] text-[var(--color-cream)] md:text-6xl">
              Custom Wildlife Mounts
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[color:rgba(248,242,230,0.85)] md:text-xl">
              Quality taxidermy for hunters and families who want craftsmanship that
              honors the story behind every trophy.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="btn-hero-primary" href="/book">
                Book Now
              </Link>
              <a className="btn-hero-secondary" href="tel:+12707483990">
                Call 270-748-3990
              </a>
            </div>
            <Link
              className="inline-block text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-cream)] underline underline-offset-4 transition hover:text-[var(--color-accent)]"
              href="/work"
            >
              View Our Work
            </Link>
          </div>

          <div className="space-y-4 rounded-2xl border border-[color:rgba(248,242,230,0.25)] bg-[color:rgba(20,18,12,0.55)] p-6 backdrop-blur-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Brand Promise
            </p>
            <p className="text-base leading-relaxed text-[var(--color-cream)]">
              Honest timelines, clear communication, and mounts built with attention
              to form, color, and realism.
            </p>
            <p className="text-sm leading-relaxed text-[color:rgba(248,242,230,0.75)]">
              We keep the process simple from drop-off to pickup.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
