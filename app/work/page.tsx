import type { Metadata } from "next";
import Link from "next/link";

import { GalleryGrid } from "@/components/site/gallery-grid";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Our Work | Custom Wildlife Mounts",
  description:
    "Browse a gallery of custom taxidermy work from Custom Wildlife Mounts and Outfitting LLC in Leitchfield, Kentucky.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionShell id="work" className="pt-14 pb-24 md:pt-20 md:pb-28">
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Gallery"
              title="Our Work"
              description="A look at recent mounts completed for hunters across Leitchfield and beyond. Filter by category or click any photo for a closer look."
            />
            <GalleryGrid />
            <div className="flex justify-center">
              <Link className="btn-primary" href="/book">
                Book Now
              </Link>
            </div>
          </div>
        </SectionShell>
      </main>
      <SiteFooter />
    </>
  );
}
