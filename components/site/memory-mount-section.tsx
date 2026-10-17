import Image from "next/image";

import { SectionShell } from "@/components/ui/section-shell";

const MEMORY_MOUNT_URL = "https://memorymount.com";

function MemoryMountEmblem() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
      <Image
        src="/images/memory-mount-logo.png"
        alt="Memory Mount logo: Preserve the memory. Relive the hunt."
        width={1200}
        height={1200}
        sizes="(min-width: 768px) 24rem, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}

export function MemoryMountSection() {
  return (
    <SectionShell id="memory-mount" className="bg-[var(--color-forest-dark)] py-20 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
        <div className="flex justify-center md:justify-start">
          <MemoryMountEmblem />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Smart Mounts
          </p>
          <div className="space-y-3">
            <h2 className="font-display text-3xl leading-tight text-[var(--color-cream)] md:text-4xl">
              Authorized Memory Mount Taxidermist
            </h2>
            <span className="rule-gold mx-auto md:mx-0" aria-hidden />
          </div>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[color:rgba(248,242,230,0.8)] md:mx-0 md:text-lg">
            We are an authorized partner of{" "}
            <strong className="font-semibold text-[var(--color-cream)]">Memory Mount</strong>,
            offering smart mounts that let you preserve more than just the trophy. Just tap your
            mount with your phone to instantly relive your hunt through photos, videos, and
            detailed memories. No batteries or subscriptions required.
          </p>
          <div>
            <a
              href={MEMORY_MOUNT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              Visit Memory Mount
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
