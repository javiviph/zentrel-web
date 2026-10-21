"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { heroArt } from "@/lib/content";

const screens = [
  { x: "27%", y: "44%", delay: "0s" },
  { x: "38%", y: "41%", delay: "0.55s" },
  { x: "49%", y: "31%", delay: "1.05s" },
  { x: "57%", y: "53%", delay: "0.35s" },
] as const;

const sparks = [
  { x: "15%", y: "20%", delay: "0s" },
  { x: "64%", y: "16%", delay: "0.9s" },
  { x: "83%", y: "32%", delay: "1.5s" },
] as const;

export function HeroArt() {
  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--px", x.toFixed(3));
    event.currentTarget.style.setProperty("--py", y.toFixed(3));
  }

  function onLeave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--px", "0");
    event.currentTarget.style.setProperty("--py", "0");
  }

  return (
    <div className="hero-stage" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="hero-drift">
        <div className="hero-bob">
          <Image
            src={heroArt.src}
            alt={heroArt.alt}
            fill
            preload
            unoptimized
            sizes="(max-width: 1024px) 92vw, 560px"
            className="pixel-portrait"
          />
          {screens.map((screen) => (
            <span
              key={`${screen.x}-${screen.y}`}
              className="hero-screen"
              style={{ left: screen.x, top: screen.y, animationDelay: screen.delay }}
              aria-hidden="true"
            />
          ))}
          <span className="hero-cursor" aria-hidden="true" />
          {sparks.map((spark) => (
            <span
              key={`${spark.x}-${spark.y}`}
              className="hero-spark"
              style={{ left: spark.x, top: spark.y, animationDelay: spark.delay }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      <span className="hero-scan" aria-hidden="true" />
      <span className="hero-sheen" aria-hidden="true" />
    </div>
  );
}
