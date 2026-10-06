import Link from "next/link";
import { founder } from "@/lib/content";

export function Founder() {
  return (
    <section id={founder.id} className="section" aria-labelledby="fundador-title">
      <div className="wrap">
        <p className="font-pixel2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          {founder.eyebrow}
        </p>
        <div className="founder-grid">
          {/* TODO(photo): initials until a portrait is exported. Do not invent a face. */}
          <div className="founder-photo">
            <div className="founder-plate" role="img" aria-label="Javier Peñas. Foto pendiente: se muestran las iniciales.">
              <span className="serif">JP</span>
            </div>
          </div>
          <div>
            <h2 id="fundador-title" className="founder-name">
              {founder.name}
              <span className="text-accent">.</span>
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
