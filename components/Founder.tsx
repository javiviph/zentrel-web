import Image from "next/image";
import Link from "next/link";
import { founder, javierPortrait } from "@/lib/content";

export function Founder() {
  return (
    <section id={founder.id} className="section" aria-labelledby="fundador-title">
      <div className="wrap">
        <p className="eyebrow">{founder.eyebrow}</p>
        <div className="founder-grid">
          <div className="founder-photo">
            <Image
              src={javierPortrait.src}
              alt={javierPortrait.alt}
              width={javierPortrait.width}
              height={javierPortrait.height}
              sizes="(max-width: 760px) 320px, 460px"
              unoptimized
              className="pixel-portrait founder-shot"
            />
          </div>
          <div>
            <h2 id="fundador-title" className="founder-name">
              {founder.name}
              <span className="text-accent-ink">.</span>
            </h2>
            <p className="founder-role">{founder.role}</p>
            <p className="founder-lead">{founder.lead}</p>
            <p className="founder-bio">{founder.bio}</p>
            <Link href={founder.cta.href} className="btn btn-primary mt-7">
              {founder.cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
