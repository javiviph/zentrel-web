import Image from "next/image";
import { founder, founderPortrait } from "@/lib/content";

export function Founder() {
  return (
    <section id={founder.id} className="section" aria-labelledby="fundador-title">
      <div className="wrap">
        <p className="eyebrow">{founder.eyebrow}</p>
        <div className="founder-grid">
          <div className="founder-photo">
            <Image
              src={founderPortrait.src}
              alt={founderPortrait.alt}
              width={founderPortrait.width}
              height={founderPortrait.height}
              sizes="(max-width: 760px) 320px, 480px"
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
          </div>
        </div>
      </div>
    </section>
  );
}
