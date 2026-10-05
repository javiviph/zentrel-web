import Link from "next/link";
import { HeroArt } from "@/components/HeroArt";
import { proof } from "@/lib/content";

export function Hero() {
  return (
    <section className="wrap pb-16 pt-8 md:pb-24 md:pt-14">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-8">
        <div className="reveal max-w-xl">
          <p className="flex items-center gap-2.5 font-pixel text-[11px] uppercase tracking-[0.18em] text-accent">
            <span className="size-2 shrink-0 bg-accent" aria-hidden="true" />
            Estudio digital
          </p>
          <h1 className="mt-5 font-sans text-[clamp(2.45rem,4.7vw,4.35rem)] font-extrabold leading-[0.96] tracking-[-0.048em] text-ink">
            <span className="block">Creamos digital</span>
            <span className="block">
              que <span className="mark">se nota</span>
            </span>
            <span className="block">
              en el <span className="serif">negocio.</span>
            </span>
          </h1>
          <div className="mt-6 space-y-3 text-[1.02rem] leading-relaxed text-ink2">
            <p>
              Asistentes, automatizaciones y herramientas a medida, con webs, tours 3D y configuradores
              cuando hacen falta.
            </p>
            <p>
              Diseñado y construido de principio a fin por un estudio sénior. Sin traspasos, sin juniors,
              sin concesiones: solo trabajo con criterio y obsesión por que funcione.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/#contacto" className="btn btn-primary">
              Cuéntanos qué quieres construir
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/#capas" className="btn btn-secondary">
              Cómo ayudamos
            </Link>
          </div>
          <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
            {proof.map((item, index) => (
              <li key={item} className="flex items-center gap-3 font-pixel text-[10px] uppercase tracking-[0.14em] text-ink2">
                {index > 0 ? (
                  <span className="hidden size-1 rounded-full bg-muted sm:inline-block" aria-hidden="true" />
                ) : null}
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal hero-art relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end" style={{ ["--d" as string]: "120ms" }}>
          <div
            className="absolute inset-0 translate-x-3 translate-y-3.5 rounded-[22px] bg-ink/20"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[22px] border-[1.5px] border-ink bg-card">
            <HeroArt />
            <span className="chip absolute left-4 top-4">
              <span className="size-1.5 bg-accent" aria-hidden="true" />
              En el taller
            </span>
            <span className="chip absolute bottom-4 right-4">Estudio sénior</span>
          </div>
        </div>
      </div>
    </section>
  );
}
