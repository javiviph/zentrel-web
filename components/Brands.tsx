import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { brands, brandsSection, type Brand } from "@/lib/content";

const faces = [
  "font-sans text-[1.35rem] font-extrabold tracking-[-0.04em]",
  "serif text-[1.7rem]",
  "font-pixel2 text-[1.35rem] font-medium tracking-wide",
  "font-sans text-[0.95rem] font-bold uppercase tracking-[0.16em]",
];

function wordmarkSize(name: string) {
  if (name.length > 26) return "text-[0.95rem]";
  if (name.length > 16) return "text-base";
  if (name.length < 5) return "text-[1.7rem]";
  return "";
}

function Wordmark({ brand, index }: { brand: Brand; index: number }) {
  if (brand.svg) {
    return (
      <Image
        src={brand.svg}
        alt={brand.name}
        width={180}
        height={48}
        className="h-9 w-auto max-w-[180px] object-contain opacity-70 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
      />
    );
  }

  return (
    <span
      className={`inline-block text-ink2 transition-colors duration-200 hover:text-ink ${faces[index % faces.length]} ${wordmarkSize(brand.name)}`}
    >
      {brand.name}
    </span>
  );
}

function Row({ clone = false }: { clone?: boolean }) {
  return (
    <ul className="flex items-center gap-x-10 gap-y-4 px-5" {...(clone ? { "aria-hidden": true, "data-clone": "true" } : {})}>
      {brands.map((brand, index) => (
        <li key={`${brand.slug}-${clone ? "b" : "a"}`} className="shrink-0 whitespace-nowrap py-3">
          <Wordmark brand={brand} index={index} />
        </li>
      ))}
    </ul>
  );
}

export function Brands() {
  return (
    <section id={brandsSection.id} className="section" aria-labelledby="marcas-title">
      <div className="wrap">
        <div className="reveal">
          <SectionHeading
            id="marcas-title"
            eyebrow={brandsSection.eyebrow}
            title={
              <>
                {brandsSection.titleBefore}
                <span className="serif">{brandsSection.titleEm}</span>
              </>
            }
          />
        </div>
      </div>
      <div className="reveal mt-12 border-y border-line2 bg-card/70 py-4" style={{ ["--d" as string]: "120ms" }}>
        <div className="marquee">
          <div className="marquee-track">
            <Row />
            <Row clone />
          </div>
        </div>
      </div>
    </section>
  );
}
