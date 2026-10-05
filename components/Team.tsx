import { SectionHeading } from "@/components/SectionHeading";
import { team, type Teammate } from "@/lib/content";

function Avatar({ person }: { person: Teammate }) {
  return (
    <div
      className={`grid size-[72px] place-items-center rounded-full border-[1.5px] ${
        person.ai ? "border-dashed border-accent" : "border-ink"
      }`}
      style={{ background: person.tone, color: person.on }}
      aria-hidden="true"
    >
      <span className={`text-[1.65rem] leading-none ${person.ai ? "font-pixel text-sm tracking-[0.14em]" : "serif"}`}>
        {person.initials}
      </span>
    </div>
  );
}

export function Team() {
  return (
    <section id="equipo" className="section" aria-labelledby="equipo-title">
      <div className="wrap">
        <div className="reveal">
          <SectionHeading
            id="equipo-title"
            index="04"
            title={
              <>
                Trabajáis con quien <span className="serif">construye.</span>
              </>
            }
            intro="Somos un estudio sénior. Sin capas de cuenta, sin juniors aprendiendo con vuestro presupuesto."
          />
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <li key={person.name} className="reveal" style={{ ["--d" as string]: `${100 + index * 70}ms` }}>
              <article
                className={`card lift flex h-full flex-col p-6 ${
                  person.ai ? "ring-2 ring-accent ring-offset-2 ring-offset-paper" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <Avatar person={person} />
                  {person.ai ? (
                    <span className="rounded-full border border-accent bg-card px-2.5 py-1 font-pixel text-[10px] uppercase tracking-[0.14em] text-accent">
                      Compañera IA
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-5 font-sans text-2xl font-extrabold tracking-[-0.03em] text-ink">{person.name}</h3>
                <p className="mt-1 text-ink2">{person.role}</p>
                {person.note ? <p className="mt-4 text-sm leading-relaxed text-ink">{person.note}</p> : null}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
