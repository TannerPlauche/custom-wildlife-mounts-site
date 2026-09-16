import type { ReactNode } from "react";

import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    title: "Deer Mounts",
    description: "Shoulder mounts and custom poses finished for clean, lifelike display.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M12 21V11" />
        <path d="M12 11c0-2.2 1-3 2.5-3.6C15.7 6.9 16 5.8 16 4.5" />
        <path d="M14.5 7.4c1.3.1 2.2-.3 3-1.4" />
        <path d="M12 11c0-2.2-1-3-2.5-3.6C8.3 6.9 8 5.8 8 4.5" />
        <path d="M9.5 7.4c-1.3.1-2.2-.3-3-1.4" />
      </svg>
    ),
  },
  {
    title: "Waterfowl",
    description: "Natural posture and habitat-inspired details for ducks and other birds.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M3 13c2.5-3.5 6-3.5 8.5 0M11.5 13c2.5-3.5 6-3.5 8.5 0" />
        <path d="M7.3 13c.3 2.6 2.2 4.5 4.7 4.5s4.4-1.9 4.7-4.5" />
      </svg>
    ),
  },
  {
    title: "Game Birds",
    description: "Classic and dynamic mounting options designed around your space.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M19 5c-7.5 0-13 5.5-13 13" />
        <path d="M8 16l-2.5 2.5M10.5 13.5L8 16M13 11l-2.5 2.5M15.5 8.5L13 11" />
      </svg>
    ),
  },
  {
    title: "Outfitting Support",
    description: "Guidance and field-focused support as part of the overall experience.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 9.5l-2 5-5 2 2-5 5-2z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

function ServiceCard({ title, description, icon }: Service) {
  return (
    <article className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(30,20,11,0.45)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-panel)] text-[var(--color-accent)] transition group-hover:bg-[var(--color-forest)] group-hover:text-[var(--color-cream)]">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-2xl text-[var(--color-ink)]">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">{description}</p>
    </article>
  );
}

export function ServicesSection() {
  return (
    <SectionShell id="services" className="py-20 md:py-24">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="Simple Service Categories"
          description="Tell us what you harvested and what style you want. We will walk you through options and expectations before work begins."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}