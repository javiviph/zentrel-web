import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { javierPortrait, team, teamSection, type Teammate } from "@/lib/content";

function Avatar({ person }: { person: Teammate }) {
  if (person.portrait) {
    return (
      <Image
        src={person.portrait}
        alt={javierPortrait.alt}
        width={javierPortrait.width}
        height={javierPortrait.height}
        sizes="72px"
        unoptimized
        className="pixel-portrait team-shot"
      />
    );
  }

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
    <section id={teamSection.id} className="section" aria-labelledby="equipo-title">
      <div className="wrap">
        <div className="reveal">
          <SectionHeading
            id="equipo-title"
            eyebrow={teamSection.eyebrow}
            title={
              <>
                {teamSection.titleBefore}
                <span className="serif">{teamSection.titleEm}</span>
              </>
            }
            intro={teamSection.intro}
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
                <Avatar person={person} />
                <h3 className="mt-5 font-sans text-2xl font-extrabold tracking-[-0.03em] text-ink">{person.name}</h3>
                <p className="mt-1 text-ink2">{person.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink">{person.bio}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
