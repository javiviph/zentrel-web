import type { ServiceArtKind } from "@/lib/content";

function Visual() {
  return (
    <svg viewBox="0 0 104 104" aria-hidden="true">
      <rect width="104" height="104" fill="#F6E3C0" />
      <circle cx="84" cy="20" r="9" fill="#F2C14E" />
      <path d="M0 62c18-8 28 6 48-2 16-6 28 8 56-6v50H0Z" fill="#97B56C" />
      <path d="M0 78c24-8 40 8 104-4v30H0Z" fill="#538537" />
      <g className="m bob">
        <rect x="16" y="30" width="48" height="32" rx="3" fill="#FBF9F2" stroke="#1C1B16" strokeWidth="1.6" />
        <rect x="20" y="34" width="40" height="20" fill="#241F1A" />
        <rect className="m bar" x="24" y="44" width="6" height="8" fill="#6366F1" />
        <rect className="m bar d1" x="33" y="40" width="6" height="12" fill="#74A84A" />
        <rect className="m bar d2" x="42" y="36" width="6" height="16" fill="#F2C14E" />
        <rect x="34" y="62" width="12" height="4" fill="#1C1B16" />
        <rect x="28" y="66" width="24" height="3" rx="1" fill="#8A5A32" />
      </g>
      <g className="m rock">
        <path d="M78 58l14 7-14 7-14-7 14-7Z" fill="#D5E4F2" stroke="#1C1B16" strokeWidth="1.3" />
        <path d="M78 72l14-7v12l-14 7V72Z" fill="#4F46E5" stroke="#1C1B16" strokeWidth="1.3" />
        <path d="M78 72l-14-7v12l14 7V72Z" fill="#74A84A" stroke="#1C1B16" strokeWidth="1.3" />
      </g>
    </svg>
  );
}

function Brain() {
  return (
    <svg viewBox="0 0 104 104" aria-hidden="true">
      <rect width="104" height="104" fill="#EEF0FA" />
      <g fill="none" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" className="m dash">
        <path d="M28 36h22" />
        <path d="M50 36 68 52" />
        <path d="M28 68h24" />
        <path d="M52 68 70 54" />
        <path d="M30 40v24" />
      </g>
      <g className="m node">
        <circle cx="26" cy="36" r="6" fill="#FBF9F2" stroke="#1C1B16" strokeWidth="1.5" />
        <circle cx="26" cy="36" r="2.2" fill="#4F46E5" />
      </g>
      <g className="m node d1">
        <circle cx="52" cy="36" r="6" fill="#FBF9F2" stroke="#1C1B16" strokeWidth="1.5" />
        <circle cx="52" cy="36" r="2.2" fill="#74A84A" />
      </g>
      <g className="m node d2">
        <circle cx="28" cy="68" r="6" fill="#FBF9F2" stroke="#1C1B16" strokeWidth="1.5" />
        <circle cx="28" cy="68" r="2.2" fill="#F2C14E" />
      </g>
      <g className="m node d1">
        <circle cx="54" cy="70" r="6" fill="#FBF9F2" stroke="#1C1B16" strokeWidth="1.5" />
        <circle cx="54" cy="70" r="2.2" fill="#4F46E5" />
      </g>
      <g className="m bob">
        <rect x="62" y="40" width="30" height="22" rx="6" fill="#FBF9F2" stroke="#1C1B16" strokeWidth="1.5" />
        <path d="M70 62l-4 6 8-4" fill="#FBF9F2" stroke="#1C1B16" strokeWidth="1.4" />
        <rect x="68" y="47" width="16" height="2" rx="1" fill="#4F46E5" />
        <rect x="68" y="53" width="10" height="2" rx="1" fill="#8C8979" />
      </g>
    </svg>
  );
}

function Software() {
  return (
    <svg viewBox="0 0 104 104" aria-hidden="true">
      <rect width="104" height="104" fill="#241F1A" />
      <rect x="12" y="16" width="80" height="72" rx="6" fill="#1C1B16" stroke="#F4F1E8" strokeWidth="1.5" />
      <circle cx="22" cy="26" r="2.2" fill="#E0584B" />
      <circle cx="30" cy="26" r="2.2" fill="#F2C14E" />
      <circle cx="38" cy="26" r="2.2" fill="#74A84A" />
      <g fill="#F4F1E8">
        <rect className="m line" x="20" y="40" width="46" height="4" rx="1" />
        <rect className="m line d1" x="20" y="50" width="34" height="4" rx="1" fill="#6366F1" />
        <rect className="m line d2" x="20" y="60" width="52" height="4" rx="1" />
        <rect className="m line d3" x="20" y="70" width="22" height="4" rx="1" fill="#74A84A" />
      </g>
      <rect className="m caret" x="46" y="69" width="3" height="6" fill="#F2C14E" />
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
