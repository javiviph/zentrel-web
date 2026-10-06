"use client";

import { useEffect, useRef, type RefObject } from "react";
import { banner } from "@/lib/content";

function paintStill(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (!width || !height) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const tone = getComputedStyle(canvas);
  const hot = tone.getPropertyValue("--banner-hot").trim() || "#f26b2e";
  const base = tone.getPropertyValue("--banner").trim() || "#e8642c";
  const sky = ctx.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, hot);
  sky.addColorStop(1, base);
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);
}

/**
 * Warm pixel field on the orange banner: drifting clouds and soft specks.
 * Pauses off-screen. A still gradient when motion is reduced.
 */
function usePixelSky(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvasNode = canvasRef.current;
    if (!canvasNode) return;
    const context = canvasNode.getContext("2d");
    if (!context) return;
    const canvas: HTMLCanvasElement = canvasNode;
    const ctx: CanvasRenderingContext2D = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let stars: { x: number; y: number; s: number; p: number; sp: number; b: number }[] = [];
    let clouds: { x: number; y: number; sc: number; vx: number }[] = [];
    let hot = "#f26b2e";
    let base = "#e8642c";
    let frame = 0;
    let running = false;
    let raf = 0;

    function build() {
      stars = [];
      const count = Math.floor(width / 22);
      for (let i = 0; i < count; i += 1) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.95,
          s: Math.random() < 0.16 ? 4 : 2,
          p: Math.random() * 6.28,
          sp: 0.5 + Math.random() * 1.7,
          b: 0.55 + Math.random() * 0.45,
        });
      }
      clouds = [];
      for (let c = 0; c < 3; c += 1) {
        clouds.push({
          x: Math.random() * width,
          y: height * 0.12 + Math.random() * height * 0.38,
          sc: 1 + Math.random() * 0.7,
          vx: 0.1 + Math.random() * 0.14,
        });
      }
    }

    function size() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (!width || !height) return;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const tone = getComputedStyle(canvas);
      hot = tone.getPropertyValue("--banner-hot").trim() || hot;
      base = tone.getPropertyValue("--banner").trim() || base;
      if (reduce) {
        paintStill(canvas);
        return;
      }
      build();
    }

    function px(x: number, y: number, w: number, h: number) {
      ctx.fillRect(Math.round(x), Math.round(y), w, h);
    }

    function drawCloud(cloud: (typeof clouds)[number]) {
      const unit = 6 * cloud.sc;
      ctx.fillStyle = "rgba(244,241,232,0.16)";
      const cells = [
        [1, 0],
        [2, 0],
        [3, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 2],
      ];
      cells.forEach(([cx, cy]) => px(cloud.x + cx * unit, cloud.y + cy * unit, unit + 0.6, unit + 0.6));
    }

    function tick() {
      if (!running) return;
      raf = requestAnimationFrame(tick);
      frame += 0.03;
      const sky = ctx.createLinearGradient(0, 0, 0, height);
      sky.addColorStop(0, hot);
      sky.addColorStop(1, base);
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, width, height);
      clouds.forEach((cloud) => {
        cloud.x += cloud.vx;
        if (cloud.x > width + 70) cloud.x = -90;
        drawCloud(cloud);
      });
      stars.forEach((star) => {
        const alpha = 0.14 + star.b * 0.16 * (0.5 + 0.5 * Math.sin(frame * star.sp + star.p));
        ctx.fillStyle = `rgba(244,241,232,${alpha.toFixed(3)})`;
        px(star.x, star.y, star.s, star.s);
      });
    }

    function start() {
      if (reduce || running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    size();
    const resize = () => size();
    window.addEventListener("resize", resize);

    let observer: IntersectionObserver | null = null;
    if (!reduce && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => (entry.isIntersecting ? start() : stop()));
        },
        { threshold: 0.01 },
      );
      observer.observe(canvas);
    } else if (!reduce) {
      start();
    }

    return () => {
      stop();
      observer?.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);
}

function useCountUp(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nodes = [...root.querySelectorAll<HTMLElement>("[data-count]")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    nodes.forEach((node) => {
      node.textContent = "0";
    });

    let started = false;
    const ease = (t: number) => 1 - (1 - t) ** 3;

    function run(node: HTMLElement) {
      const target = Number(node.dataset.count);
      const startedAt = performance.now();
      function step(now: number) {
        const progress = Math.min((now - startedAt) / 1100, 1);
        node.textContent = String(Math.round(target * ease(progress)));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (started || !entries.some((entry) => entry.isIntersecting)) return;
        started = true;
        nodes.forEach(run);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [rootRef]);
}

export function Banner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  usePixelSky(canvasRef);
  useCountUp(rootRef);

  return (
    <section id={banner.id} className="section" style={{ paddingTop: 0 }} aria-label={banner.eyebrow}>
      <div className="wrap">
        <div className="banner reveal" ref={rootRef}>
          <canvas ref={canvasRef} className="banner-sky" aria-hidden="true" />
          <div className="banner-head">
            <p className="banner-kicker">{banner.eyebrow}</p>
            <p className="banner-cap">{banner.caption}</p>
          </div>
          <ul className="banner-grid">
            {banner.stats.map((stat) => (
              <li key={stat.label}>
                <p className="banner-num">
                  {stat.prefix ? <span className="pre">{stat.prefix}</span> : null}
                  <span data-count={stat.value}>{stat.value.toLocaleString("es-ES")}</span>
                </p>
                <p className="banner-label">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
