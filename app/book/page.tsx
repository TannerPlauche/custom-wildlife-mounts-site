import type { Metadata } from "next";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const BOOKING_URL = "https://app.mountmonitor.com/book/custom-wildlife-mounts-and-outfitting-llc";

export const metadata: Metadata = {
  title: "Book Now | Custom Wildlife Mounts",
  description:
    "Book online with Custom Wildlife Mounts and Outfitting LLC in Leitchfield, Kentucky.",
};

export default function BookPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionShell id="book" className="pt-14 pb-24 md:pt-20 md:pb-28">
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Book Now"
              title="Book Online"
              description="Use the form below to get started. Prefer to talk it through? Give us a call."
            />
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_24px_60px_-30px_rgba(30,20,11,0.5)]">
              <iframe
                src={BOOKING_URL}
                title="Book with Custom Wildlife Mounts"
                className="block h-[85dvh] min-h-[640px] w-full"
              />
            </div>
            <p className="text-center text-base leading-relaxed text-[var(--color-muted)]">
              Having trouble?{" "}
              <a
                className="font-semibold text-[var(--color-accent-dark)] underline underline-offset-4"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open booking in a new tab
              </a>{" "}
              or call{" "}
              <a
                className="font-semibold text-[var(--color-accent-dark)] underline underline-offset-4"
                href="tel:+12707483990"
              >
                270-748-3990
              </a>
              .
            </p>
          </div>
        </SectionShell>
      </main>
      <SiteFooter />
    </>
  );
}
