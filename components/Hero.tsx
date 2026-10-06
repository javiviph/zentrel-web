import Link from "next/link";
import { HeroArt } from "@/components/HeroArt";
import { hero, proof } from "@/lib/content";

export function Hero() {
  return (
    <section className="wrap pb-16 pt-8 md:pb-24 md:pt-14">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-8">
        <div className="reveal max-w-xl">
          <p className="flex items-center gap-2.5 font-pixel2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="size-2 shrink-0 bg-accent" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 font-sans text-[clamp(2.35rem,4.5vw,4.15rem)] font-extrabold leading-[0.98] tracking-[-0.048em] text-ink">
            {hero.lines.map((line) => (
              <span key={line.map((part) => part.text).join("")} className="block">
                {line.map((part) => (
                  <span key={part.text} className={part.serif ? "serif" : part.mark ? "mark" : undefined}>
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <div className="mt-6 space-y-3 text-[1.02rem] leading-relaxed text-ink2">
            <p>{hero.lede}</p>
            <p>{hero.support}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
              <span aria-hidden="true">→</span>
            </Link>
            <Link href={hero.secondaryCta.href} className="btn btn-secondary">
              {hero.secondaryCta.label}
            </Link>
          </div>
          <ul className="hero-proof">
            {proof.map((item) => {
              const strong = "strong" in item ? item.strong : null;
              return (
                <li key={item.label} className={strong ? "hero-proof-stat" : "hero-proof-note"}>
                  {strong ? <strong>{strong}</strong> : null}
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="reveal hero-art relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
          <div
            className="absolute inset-0 translate-x-3 translate-y-3.5 rounded-[22px] bg-ink/20"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[22px] border-[1.5px] border-ink bg-card">
            <HeroArt />
            <span className="chip absolute left-4 top-4">
              <span className="size-1.5 bg-accent" aria-hidden="true" />
              {hero.chips.live}
            </span>
            <span className="chip absolute bottom-4 right-4">{hero.chips.since}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
