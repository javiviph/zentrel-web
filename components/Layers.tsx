import { SectionHeading } from "@/components/SectionHeading";
import { ServiceArt } from "@/components/ServiceArt";
import { layers, servicesSection } from "@/lib/content";

export function Layers() {
  return (
    <section id={servicesSection.id} className="section" aria-labelledby="capas-title">
      <div className="wrap">
        <div className="reveal">
          <SectionHeading
            id="capas-title"
            eyebrow={servicesSection.eyebrow}
            title={
              <>
                {servicesSection.titleBefore}
                <span className="serif">{servicesSection.titleEm}</span>
              </>
            }
            intro={servicesSection.intro}
          />
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {layers.map((layer, index) => (
            <article
              key={layer.index}
              className="card lift reveal flex h-full flex-col p-6 md:p-7"
              style={{ ["--d" as string]: `${140 + index * 90}ms` }}
            >
              <ServiceArt kind={layer.art} />
              <p className="font-pixel text-[13px] tracking-[0.14em] text-accent-ink">{layer.index}</p>
              <h3 className="mt-4 font-sans text-[1.65rem] font-extrabold leading-tight tracking-[-0.035em] text-ink">
                {layer.name}
              </h3>
              <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-ink2">{layer.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {layer.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-line2 bg-paper2 px-3 py-1 font-pixel2 text-sm text-ink"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        {/* TODO(demos): when /demos/configurador is interactive, link the Configuradores chip to it. */}
      </div>
    </section>
  );
}
