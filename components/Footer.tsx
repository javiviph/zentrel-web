import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contactEmail, footerBlurb, footerCaption, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line2">
      <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <Logo className="text-4xl" />
          <p className="mt-3 text-sm leading-relaxed text-ink2">{footerBlurb}</p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <nav aria-label="Pie" className="flex flex-wrap gap-x-4 gap-y-2">
            {nav.map((item) => (
              <Link key={item.id} href={item.href} className="font-pixel2 text-sm text-ink2 hover:text-ink">
                {item.label}
              </Link>
            ))}
            <Link href="/#contacto" className="font-pixel2 text-sm text-ink2 hover:text-ink">
              Contacto
            </Link>
          </nav>
          <a href={`mailto:${contactEmail}`} className="text-sm font-semibold text-ink">
            {contactEmail}
          </a>
          <p className="font-pixel text-[10px] uppercase tracking-[0.14em] text-muted">© {new Date().getFullYear()} Zentrel</p>
        </div>
      </div>
      <div className="factory">
        <Image
          src="/footer-factory.webp"
          alt=""
          width={1280}
          height={720}
          sizes="100vw"
          className="factory-img"
        />
        <div className="factory-shade" aria-hidden="true" />
        <p className="factory-caption">{footerCaption}</p>
      </div>
    </footer>
  );
}
