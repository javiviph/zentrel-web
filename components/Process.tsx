import { SectionHeading } from "@/components/SectionHeading";
import { processSection, processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id={processSection.id} className="section" aria-labelledby="proceso-title">
      <div className="wrap">
        <div className="reveal">
          <SectionHeading id="proceso-title" eyebrow={processSection.eyebrow} title={processSection.title} />
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <li
              key={step}
              className="card lift reveal p-6 md:p-8"
              style={{ ["--d" as string]: `${100 + index * 80}ms` }}
            >
              <p className="font-pixel text-[13px] tracking-[0.14em] text-accent-ink">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 max-w-md font-sans text-[1.55rem] font-extrabold leading-snug tracking-[-0.035em] text-ink">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
