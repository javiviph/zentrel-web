"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import {
  contactEmail,
  javierPortrait,
  mailtoHref,
} from "@/lib/content";
import {
  javierAccounts,
  javierContributions,
  javierCta,
  javierEducation,
  javierGanttAxis,
  javierHero,
  javierInterests,
  javierJobs,
  javierLanguages,
  javierLinkedIn,
  javierLocation,
  javierMetrics,
  javierProfile,
  javierSkillGroups,
  javierTerminal,
  type JavierJob,
} from "@/lib/javier";

const TICK = (
  <svg viewBox="0 0 11 11" fill="#F4F1E8" shapeRendering="crispEdges" aria-hidden="true">
    <rect x="8" y="2" width="2" height="1" />
    <rect x="7" y="3" width="2" height="1" />
    <rect x="6" y="4" width="2" height="1" />
    <rect x="1" y="5" width="2" height="1" />
    <rect x="5" y="5" width="2" height="1" />
    <rect x="2" y="6" width="2" height="1" />
    <rect x="4" y="6" width="2" height="1" />
    <rect x="3" y="7" width="3" height="1" />
  </svg>
);

const CHEVRON = (
  <svg viewBox="0 0 7 4" fill="currentColor" shapeRendering="crispEdges" aria-hidden="true">
    <rect x="0" y="0" width="7" height="1" />
    <rect x="1" y="1" width="5" height="1" />
    <rect x="2" y="2" width="3" height="1" />
    <rect x="3" y="3" width="1" height="1" />
  </svg>
);

function SkillIcon({ id }: { id: string }) {
  if (id === "ux") {
    return (
      <svg viewBox="0 0 16 16" fill="currentColor" shapeRendering="crispEdges" aria-hidden="true">
        <rect x="2" y="3" width="12" height="8" />
        <rect x="3" y="4" width="10" height="6" fill="#F4F1E8" />
        <rect x="6" y="12" width="4" height="1" />
        <rect x="4" y="13" width="8" height="1" />
      </svg>
    );
  }
  if (id === "product") {
    return (
      <svg viewBox="0 0 16 16" fill="currentColor" shapeRendering="crispEdges" aria-hidden="true">
        <rect x="2" y="9" width="3" height="5" />
        <rect x="7" y="5" width="3" height="9" />
        <rect x="12" y="2" width="3" height="12" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="2" y="2" width="5" height="5" />
      <rect x="9" y="2" width="5" height="5" />
      <rect x="2" y="9" width="5" height="5" />
      <rect x="9" y="9" width="5" height="5" />
    </svg>
  );
}

function formatCount(value: number) {
  return value.toLocaleString("es-ES");
}

function JobLinks({ job }: { job: JavierJob }) {
  const links = [
    ...(job.href && job.hrefLabel ? [{ href: job.href, label: job.hrefLabel }] : []),
    ...(job.extraLinks ?? []),
  ];
  if (links.length === 0) return null;
  return (
    <p className="cv-links">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      ))}
    </p>
  );
}

export function JavierCv() {
  const [open, setOpen] = useState<Record<string, boolean>>({ pearson: true });
  const [typed, setTyped] = useState<string[] | null>(null);
  const [cursor, setCursor] = useState(false);
  const [top, setTop] = useState(false);
  const matchRef = useRef<HTMLDivElement>(null);
  const ganttRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<HTMLDivElement>(null);
  const headingId = useId();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => setTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onPrint = () => {
      setOpen(Object.fromEntries(javierJobs.map((job) => [job.id, true])));
      setTyped(null);
      setCursor(false);
    };
    window.addEventListener("beforeprint", onPrint);

    const metricNodes = [...(metricsRef.current?.querySelectorAll<HTMLElement>("[data-count]") ?? [])];
    let metricObserver: IntersectionObserver | null = null;
    if (!reduce && metricNodes.length > 0) {
      metricNodes.forEach((node) => {
        node.textContent = "0";
      });
      const ease = (t: number) => 1 - (1 - t) ** 3;
      metricObserver = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          metricNodes.forEach((node) => {
            const target = Number(node.dataset.count);
            const startedAt = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - startedAt) / 1100, 1);
              node.textContent = formatCount(Math.round(target * ease(progress)));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
          metricObserver?.disconnect();
        },
        { threshold: 0.45 },
      );
      if (metricsRef.current) metricObserver.observe(metricsRef.current);
    }

    let matchObserver: IntersectionObserver | null = null;
    if (matchRef.current) {
      const rows = [...matchRef.current.querySelectorAll<HTMLElement>(".mrow")];
      if (reduce) {
        rows.forEach((row) => row.classList.add("in"));
      } else {
        matchObserver = new IntersectionObserver(
          (entries) => {
            if (!entries.some((entry) => entry.isIntersecting)) return;
            rows.forEach((row, index) => {
              window.setTimeout(() => row.classList.add("in"), index * 80);
            });
            matchObserver?.disconnect();
          },
          { threshold: 0.15 },
        );
        matchObserver.observe(matchRef.current);
      }
    }

    let ganttObserver: IntersectionObserver | null = null;
    if (ganttRef.current) {
      if (reduce) ganttRef.current.classList.add("vis");
      else {
        ganttObserver = new IntersectionObserver(
          (entries) => {
            if (!entries.some((entry) => entry.isIntersecting)) return;
            ganttRef.current?.classList.add("vis");
            ganttObserver?.disconnect();
          },
          { threshold: 0.3 },
        );
        ganttObserver.observe(ganttRef.current);
      }
    }

    let termTimer = 0;
    let termObserver: IntersectionObserver | null = null;
    if (!reduce && termRef.current) {
      setTyped(javierTerminal.lines.map(() => ""));
      let line = 0;
      let char = 0;
      let started = false;
      const typeLine = () => {
        if (line >= javierTerminal.lines.length) {
          setCursor(true);
          return;
        }
        const source = javierTerminal.lines[line].text;
        const delay = javierTerminal.lines[line].kind === "cmd" ? 32 : 14;
        if (char <= source.length) {
          const index = line;
          const slice = source.slice(0, char);
          setTyped((current) => {
            const next = current ? [...current] : javierTerminal.lines.map(() => "");
            next[index] = slice;
            return next;
          });
          char += 1;
          termTimer = window.setTimeout(typeLine, delay);
        } else {
          line += 1;
          char = 0;
          termTimer = window.setTimeout(typeLine, line === 1 ? 240 : 140);
        }
      };
      termObserver = new IntersectionObserver(
        (entries) => {
          if (started || !entries.some((entry) => entry.isIntersecting)) return;
          started = true;
          typeLine();
          termObserver?.disconnect();
        },
        { threshold: 0.35 },
      );
      termObserver.observe(termRef.current);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeprint", onPrint);
      metricObserver?.disconnect();
      matchObserver?.disconnect();
      ganttObserver?.disconnect();
      termObserver?.disconnect();
      window.clearTimeout(termTimer);
    };
  }, []);

  function toggle(id: string) {
    setOpen((current) => ({ ...current, [id]: !current[id] }));
  }

  const transcript = javierTerminal.lines.map((line) => line.text).join(". ");

  return (
    <article className="cv-page">
      <header className="cv-hero">
        <div className="wrap cv-hero-grid">
          <div>
            <p className="flex items-center gap-2.5 font-pixel2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              <span className="size-2 shrink-0 bg-accent" aria-hidden="true" />
              {javierHero.eyebrow}
            </p>
            <h1 className="cv-h1">
              {javierHero.name} <span className="serif">{javierHero.nameEm}</span>
            </h1>
            <p className="cv-role">
              {javierHero.role.map((part, index) => (
                <span key={part}>
                  {index > 0 ? <span className="sep">·</span> : null}
                  {part}
                </span>
              ))}
            </p>
            <p className="cv-tag">
              <b>«{javierHero.lema}»</b> {javierHero.lede}
            </p>
            <div className="cv-cta">
              <a href={mailtoHref} className="btn btn-primary">
                {javierHero.writeLabel} <span aria-hidden="true">↗</span>
              </a>
              <a href={javierLinkedIn} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                {javierHero.linkedInLabel}
              </a>
              <button type="button" className="btn btn-secondary" onClick={() => window.print()}>
                {javierHero.printLabel}
              </button>
            </div>
          </div>
          <div className="cv-art">
            <span className="cv-chip-f a">{javierHero.chips.place}</span>
            <Image
              src={javierPortrait.src}
              alt={javierPortrait.alt}
              width={javierPortrait.width}
              height={javierPortrait.height}
              sizes="(max-width: 860px) 320px, 420px"
              priority
              unoptimized
              className="pixel-portrait cv-shot"
            />
            <span className="cv-chip-f b">{javierHero.chips.focus}</span>
          </div>
        </div>
      </header>

      <section className="cv-sec" aria-label="Cifras del CV" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="cv-metrics" ref={metricsRef}>
            {javierMetrics.items.map((item) => (
              <div key={item.label} className="cv-metric">
                <p className="cv-metric-k">
                  {item.prefix ? <span className="u">{item.prefix}</span> : null}
                  <span data-count={item.value}>{formatCount(item.value)}</span>
                  {item.suffix ? <span className="u">{item.suffix}</span> : null}
                </p>
                <p className="cv-metric-l">
                  {item.label}
                  <span>{item.note}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="cv-fine">{javierMetrics.note}</p>
        </div>
      </section>

      <section className="cv-sec" id="perfil" aria-labelledby={`${headingId}-perfil`}>
        <div className="wrap">
          <div className="cv-head">
            <span className="k">01 /</span>
            <h2 id={`${headingId}-perfil`}>Perfil</h2>
            <span className="rule" />
          </div>
          <p className="cv-lead">
            <b>{javierHero.lede}</b>
          </p>
          {javierProfile.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="cv-lead">
              {paragraph}
            </p>
          ))}
          <p className="sr-only">{transcript}</p>
          <div className="term" ref={termRef} aria-hidden="true">
            <div className="term-bar">
              <i className="r" />
              <i className="y" />
              <i className="g" />
              <span>{javierTerminal.title}</span>
            </div>
            <div className="term-body">
              {(typed === null ? javierTerminal.lines.map((line) => line.text) : typed).map((text, index) => {
                const line = javierTerminal.lines[index];
                const started =
                  typed === null ||
                  typed
                    .slice(0, index)
                    .every((row, rowIndex) => row.length === javierTerminal.lines[rowIndex].text.length);
                if (!started) return null;
                return (
                  <div key={line.text}>
                    {line.kind === "cmd" ? <span className="cmd">$ </span> : null}
                    <span className={line.kind}>{text}</span>
                  </div>
                );
              })}
              {cursor ? <span className="term-cursor" /> : null}
            </div>
          </div>
        </div>
      </section>

      <section className="cv-sec" id="aporto" aria-labelledby={`${headingId}-aporto`}>
        <div className="wrap">
          <div className="cv-head">
            <span className="k">02 /</span>
            <h2 id={`${headingId}-aporto`}>
              Qué <span className="serif">aporto.</span>
            </h2>
            <span className="rule" />
          </div>
          <div className="cv-match" ref={matchRef}>
            {javierContributions.map((item) => (
              <div key={item.title} className="mrow">
                <span className="tick">{TICK}</span>
                <div>
                  <b>{item.title}</b>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cv-sec" id="experiencia" aria-labelledby={`${headingId}-experiencia`}>
        <div className="wrap">
          <div className="cv-head">
            <span className="k">03 /</span>
            <h2 id={`${headingId}-experiencia`}>Experiencia</h2>
            <span className="rule" />
          </div>
          <div className="gantt" id="gantt" ref={ganttRef} aria-hidden="true">
            {javierJobs.map((job) => (
              <div key={job.id} className="gantt-row">
                <div className="gantt-lbl">{job.org}</div>
                <div className="gantt-track">
                  <span
                    className="gantt-bar"
                    style={{ left: job.bar.left, width: job.bar.width, backgroundColor: job.color }}
                  />
                </div>
              </div>
            ))}
            <div className="gantt-axis">
              {javierGanttAxis.map((year) => (
                <span key={year}>{year}</span>
              ))}
            </div>
          </div>
          <div className="tl">
            {javierJobs.map((job) => {
              const isOpen = Boolean(open[job.id]);
              return (
                <article key={job.id} className={`job${job.current ? " now" : ""}${isOpen ? " open" : ""}`}>
                  <div className="job-card">
                    <button
                      type="button"
                      className="job-head"
                      aria-expanded={isOpen}
                      onClick={() => toggle(job.id)}
                    >
                      <span>
                        <span className="job-title">{job.title}</span>
                        <span className="org">{job.org}</span>
                      </span>
                      <span className="job-meta">
                        <span className="job-when">{job.when}</span>
                        <span className="job-chev">{CHEVRON}</span>
                      </span>
                    </button>
                    <div className="job-body">
                      <div>
                        {job.internalTitle ? (
                          <p className="cv-internal">Título interno: {job.internalTitle}</p>
                        ) : null}
                        {job.dateNote ? <p className="cv-note">{job.dateNote}</p> : null}
                        <ul>
                          {job.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                        <JobLinks job={job} />
                        <div className="cv-chips">
                          {job.chips.map((chip) => (
                            <span key={chip} className="cv-chip">
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cv-sec" id="conocimientos" aria-labelledby={`${headingId}-skills`}>
        <div className="wrap">
          <div className="cv-head">
            <span className="k">04 /</span>
            <h2 id={`${headingId}-skills`}>Conocimientos</h2>
            <span className="rule" />
          </div>
          <div className="sk-grid">
            {javierSkillGroups.map((group) => (
              <article key={group.id} className="sk">
                <div className="sk-h">
                  <span className="sk-i">
                    <SkillIcon id={group.id} />
                  </span>
                  <h3 className="sk-t">{group.title}</h3>
                </div>
                <ul className="cv-chips">
                  {group.items.map((item) => (
                    <li key={item} className="cv-chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cv-sec" id="formacion" aria-labelledby={`${headingId}-mas`}>
        <div className="wrap">
          <div className="cv-head">
            <span className="k">05 /</span>
            <h2 id={`${headingId}-mas`}>
              Formación <span className="serif">y más.</span>
            </h2>
            <span className="rule" />
          </div>
          <div className="duo">
            <article className="pane">
              <h3>Formación</h3>
              <p className="cv-note">{javierEducation.note}</p>
              {javierEducation.items.map((item) => (
                <div key={item.title} className="it">
                  <b>{item.title}</b>
                  <small>{item.place}</small>
                </div>
              ))}
            </article>
            <article className="pane">
              <h3>Idiomas</h3>
              <p className="cv-note">{javierLanguages.note}</p>
              {javierLanguages.items.map((item) => (
                <div key={item} className="it">
                  <b>{item}</b>
                </div>
              ))}
              <h3 className="cv-subhead">Dónde</h3>
              <div className="it">
                <b>{javierLocation}</b>
              </div>
            </article>
          </div>
          <div className="duo">
            <article className="pane">
              <h3>Intereses</h3>
              {javierInterests.map((item) => (
                <div key={item} className="it">
                  <b>{item}</b>
                </div>
              ))}
            </article>
            <article className="pane">
              <h3>Cuentas y empleadores</h3>
              <p className="cv-note">Nombres que aparecen en el CV. Los empleadores no son clientes.</p>
              <h4 className="cv-mini">Cuentas</h4>
              <ul className="cv-chips">
                {javierAccounts.clients.map((name) => (
                  <li key={name} className="cv-chip">
                    {name}
                  </li>
                ))}
              </ul>
              <h4 className="cv-mini">Empleadores</h4>
              <ul className="cv-chips">
                {javierAccounts.employers.map((name) => (
                  <li key={name} className="cv-chip">
                    {name}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="cv-sec" id="escribir" aria-labelledby={`${headingId}-cta`}>
        <div className="wrap">
          <div className="cv-cta-card">
            <h2 id={`${headingId}-cta`}>
              {javierCta.titleBefore}
              <span className="serif">{javierCta.titleEm}</span>
            </h2>
            <p>{javierCta.body}</p>
            <div className="cv-cta-row">
              <a href={mailtoHref} className="btn btn-primary">
                {contactEmail} <span aria-hidden="true">↗</span>
              </a>
              <a href={javierLinkedIn} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <button
        type="button"
        className={`to-top${top ? " show" : ""}`}
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      >
        <svg width="20" height="12" viewBox="0 0 9 5" fill="currentColor" shapeRendering="crispEdges" aria-hidden="true">
          <rect x="4" y="0" width="1" height="1" />
          <rect x="3" y="1" width="3" height="1" />
          <rect x="2" y="2" width="5" height="1" />
          <rect x="1" y="3" width="7" height="1" />
          <rect x="0" y="4" width="9" height="1" />
        </svg>
      </button>
    </article>
  );
}
