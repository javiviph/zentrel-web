import type { ReactNode } from "react";

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-pixel2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 font-sans text-[clamp(2.05rem,4.3vw,3.45rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink"
      >
        {title}
      </h2>
      {intro ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink2">{intro}</p> : null}
    </div>
  );
}
