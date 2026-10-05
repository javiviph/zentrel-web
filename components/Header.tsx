"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -48% 0px", threshold: [0, 0.25, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function follow(href: string) {
    setOpen(false);
    const id = href.split("#")[1];
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `/#${id}`);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled || open ? "border-b border-line bg-paper/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-[76px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 rounded-full border border-line2 bg-card px-2 py-1.5 shadow-[2px_2px_0_rgba(28,27,22,0.08)] lg:flex" aria-label="Secciones">
          {nav.map((item) => {
            const on = active === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`rounded-full px-3 py-1.5 font-pixel2 text-[15px] tracking-wide transition-colors ${
                  on ? "bg-paper2 text-ink" : "text-ink2 hover:text-ink"
                }`}
                aria-current={on ? "location" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#contacto" className="btn btn-primary hidden px-3.5 py-2 text-sm sm:inline-flex">
            Hablemos
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-[12px] border-[1.5px] border-ink bg-card shadow-[2px_2px_0_rgba(28,27,22,0.16)] lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar" : "Menú"}</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-[1.5px] bg-ink transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] bg-ink transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="menu-movil" className="fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-auto bg-paper px-5 py-6 lg:hidden" aria-label="Secciones">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.id} className="border-b border-line">
                <Link
                  href={item.href}
                  className="block py-5 font-pixel2 text-[1.75rem] leading-none text-ink no-underline"
                  onClick={(event) => {
                    if (document.getElementById(item.id)) {
                      event.preventDefault();
                      follow(item.href);
                    } else {
                      setOpen(false);
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contacto"
            className="btn btn-primary mt-6 w-full no-underline"
            onClick={(event) => {
              if (document.getElementById("contacto")) {
                event.preventDefault();
                follow("/#contacto");
              } else {
                setOpen(false);
              }
            }}
          >
            Hablemos
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
