import { PropsWithChildren } from "react";

type SectionShellProps = PropsWithChildren<{
  id: string;
  className?: string;
}>;

export function SectionShell({ id, className = "", children }: SectionShellProps) {
  return (
    <section id={id} className={`section-shell ${className}`.trim()}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">{children}</div>
    </section>
  );
}