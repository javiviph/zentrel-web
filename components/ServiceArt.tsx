import type { ServiceArtKind } from "@/lib/content";

const cream = "#f3e6c6";

function IsoGrid() {
  const lines = [];
  for (let i = -160; i <= 320; i += 18) {
    lines.push(<line key={`d${i}`} x1={i} y1={0} x2={i - 160} y2={160} />);
    lines.push(<line key={`u${i}`} x1={i} y1={0} x2={i + 160} y2={160} />);
  }
  return (
    <g fill="none" stroke="var(--accent)" strokeOpacity="0.28" strokeWidth="1">
      {lines}
    </g>
  );
}

function Spark({ x, y, delay, size = 8 }: { x: number; y: number; delay: string; size?: number }) {
  const t = 2;
  const half = t / 2;
  return (
    <g className="svc-twinkle" style={{ animationDelay: delay }} transform={`translate(${x} ${y})`} fill="var(--accent)">
      <rect x={-half} y={-size} width={t} height={size * 2} />
      <rect x={-size} y={-half} width={size * 2} height={t} />
      <rect x={-size + 2} y={-size + 2} width={t} height={t} />
      <rect x={size - 4} y={-size + 2} width={t} height={t} />
      <rect x={-size + 2} y={size - 4} width={t} height={t} />
      <rect x={size - 4} y={size - 4} width={t} height={t} />
    </g>
  );
}

function Visual() {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true" shapeRendering="crispEdges">
      <rect width="160" height="160" fill={cream} />
      <Spark x={22} y={28} delay="0s" />
      <Spark x={138} y={24} delay="0.45s" size={6} />
      <Spark x={18} y={132} delay="1.1s" size={6} />
      <Spark x={142} y={118} delay="0.8s" />
      <Spark x={80} y={16} delay="1.4s" size={5} />
      <g
        className="svc-float"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinejoin="miter"
        strokeLinecap="square"
      >
        <path d="M48 86 V64 L62 46 H98 L112 64 V86" />
        <path d="M56 86 V68 L68 54 H92 L104 68 V86" strokeWidth="2" />
        <path d="M22 78 H138 L148 90 V116 L138 128 H22 L12 116 V90 Z" fill={cream} />
        <rect x="34" y="90" width="38" height="26" />
        <rect x="88" y="90" width="38" height="26" />
        <path d="M40 96 H66 M94 96 H120" strokeWidth="2" />
        <path d="M72 108 L80 120 L88 108" />
        <path d="M12 98 H4 V112 H12 M148 98 H156 V112 H148" />
      </g>
    </svg>
  );
}

function Trace({ d, delay }: { d: string; delay: string }) {
  return (
    <path
      d={d}
      pathLength={100}
      className="svc-trace"
      style={{ animationDelay: delay }}
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinejoin="miter"
      strokeLinecap="square"
    />
  );
}

function Brain() {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true" shapeRendering="crispEdges">
      <rect width="160" height="160" fill={cream} />
      <IsoGrid />
      <g fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinejoin="miter" strokeLinecap="square">
        <path
          shapeRendering="geometricPrecision"
          d="M80 28c16-2 34 6 42 22 8 2 16 12 14 24 8 10 6 24-6 32 4 12-4 26-18 32-8 8-22 10-32 4-14-2-26-14-28-28-10-6-16-20-10-32 2-14 10-24 22-30 2-12 8-22 16-24z"
        />
        <path shapeRendering="geometricPrecision" d="M78 36c-4 18 6 32-2 52 6 16 2 32 8 46" strokeWidth="2" />
        <path shapeRendering="geometricPrecision" d="M96 42c8 10 6 22 14 30M60 48c-8 12-6 24-12 32M92 96c10 6 14 16 10 28M58 100c-6 8-4 18 2 26" strokeWidth="2" />
      </g>
      <Trace d="M54 70 H74 L92 86 H118" delay="0s" />
      <Trace d="M50 94 H72 L90 76 H108" delay="-0.7s" />
      <Trace d="M62 112 H94 L112 96" delay="-1.3s" />
      <Trace d="M68 56 H90 L106 70" delay="-0.4s" />
      <g fill="var(--accent)">
        <rect className="svc-node" x="50" y="66" width="6" height="6" />
        <rect className="svc-node" x="88" y="82" width="6" height="6" style={{ animationDelay: "0.35s" }} />
        <rect className="svc-node" x="114" y="66" width="6" height="6" style={{ animationDelay: "0.7s" }} />
        <rect className="svc-node" x="90" y="108" width="6" height="6" style={{ animationDelay: "0.2s" }} />
        <rect className="svc-node" x="64" y="52" width="6" height="6" style={{ animationDelay: "0.9s" }} />
      </g>
    </svg>
  );
}

function Bar({ x, h, delay }: { x: number; h: number; delay: string }) {
  const y = 96 - h;
  return (
    <rect
      className="svc-bar"
      x={x}
      y={y}
      width="8"
      height={h}
      style={{ animationDelay: delay }}
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
    />
  );
}

function Software() {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true" shapeRendering="crispEdges">
      <rect width="160" height="160" fill={cream} />
      <IsoGrid />
      <g fill={cream} stroke="var(--accent)" strokeWidth="3" strokeLinejoin="miter" strokeLinecap="square">
        <polygon points="36,48 48,36 140,36 128,48" />
        <polygon points="128,48 140,36 140,104 128,116" />
        <rect x="36" y="48" width="92" height="68" />
      </g>
      <rect x="46" y="58" width="72" height="46" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <g fill="var(--accent)">
        <rect x="50" y="52" width="4" height="4" />
        <rect x="58" y="52" width="4" height="4" />
        <rect x="66" y="52" width="4" height="4" />
      </g>
      <line x1="52" y1="96" x2="110" y2="96" stroke="var(--accent)" strokeWidth="2" />
      <Bar x={54} h={18} delay="0s" />
      <Bar x={68} h={28} delay="0.2s" />
      <Bar x={82} h={14} delay="0.45s" />
      <Bar x={96} h={24} delay="0.15s" />
      <rect className="svc-caret" x="104" y="70" width="3" height="8" fill="var(--accent)" />
      <g fill={cream} stroke="var(--accent)" strokeWidth="3" strokeLinejoin="miter">
        <rect x="74" y="116" width="16" height="12" />
        <polygon points="56,128 112,128 120,136 48,136" />
      </g>
    </svg>
  );
}

const arts = {
  visual: Visual,
  brain: Brain,
  software: Software,
} as const;

export function ServiceArt({ kind }: { kind: ServiceArtKind }) {
  const Art = arts[kind];
  return (
    <div className="svc-art">
      <Art />
    </div>
  );
}
