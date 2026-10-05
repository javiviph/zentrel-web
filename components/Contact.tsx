import { contactEmail, mailtoHref } from "@/lib/content";

export function Contact() {
  return (
    <section id="contacto" className="section" aria-labelledby="contacto-title">
      <div className="wrap">
        <div className="card reveal px-6 py-10 shadow-[8px_10px_0_rgba(28,27,22,0.12)] md:px-12 md:py-14">
          <p className="font-pixel text-[11px] uppercase tracking-[0.16em] text-accent">06</p>
          <div className="mt-4 grid items-end gap-8 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:gap-12">
            <div>
              <h2
                id="contacto-title"
                className="max-w-xl font-sans text-[clamp(2.15rem,4.6vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink"
              >
                Construyamos algo que <span className="mark">se note.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink2">
                Cuéntanos qué queréis vender u operar mejor. Os diremos, sin rodeos, si encajamos.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <a href={mailtoHref} className="btn btn-primary">
                Hablemos
                <span aria-hidden="true">→</span>
              </a>
              <a href={`mailto:${contactEmail}`} className="font-pixel2 text-lg text-accent underline decoration-accent/30 underline-offset-4 hover:text-accent2">
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
