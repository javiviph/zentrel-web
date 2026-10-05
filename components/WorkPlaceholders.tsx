import { SectionHeading } from "@/components/SectionHeading";
import { cases } from "@/lib/content";

export function WorkPlaceholders() {
  return (
    <section id="prueba" className="section" aria-labelledby="prueba-title">
      <div className="wrap">
        <div className="reveal">
          <SectionHeading
            id="prueba-title"
            index="03"
            title={
              <>
                Productos reales. Resultados que <span className="mark">se notan.</span>
              </>
            }
            intro="Cuatro huecos. Los casos entran cuando se pueden contar."
          />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cases.map((item, index) => (
            <article
              key={item.index}
              className="card lift reveal flex min-h-[300px] flex-col overflow-hidden"
              style={{ ["--d" as string]: `${120 + index * 80}ms` }}
            >
              <div className="hatch relative grid min-h-[170px] flex-1 place-items-center border-b border-dashed border-line2">
                <span className="font-pixel text-[11px] uppercase tracking-[0.16em] text-muted">
                  {item.name ? item.name : "En preparación"}
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 p-5 md:p-6">
                <div>
                  <p className="font-pixel text-[11px] tracking-[0.14em] text-accent">{item.index}</p>
                  <h3 className="mt-2 font-sans text-xl font-extrabold tracking-[-0.03em] text-ink">{item.type}</h3>
                  <p className="mt-1 text-sm text-ink2">
                    {item.outcome ?? "Resultado pendiente"}
                  </p>
                </div>
                <p className="serif text-3xl text-muted" aria-hidden="true">
                  {item.name ? "" : "—"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
