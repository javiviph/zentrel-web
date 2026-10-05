export function HeroArt() {
  return (
    <svg
      viewBox="0 0 640 500"
      role="img"
      aria-labelledby="hero-art-title"
      className="block h-auto w-full"
    >
      <title id="hero-art-title">
        Escritorio del estudio: un asistente en pantalla, un recorrido 3D y un configurador de color.
      </title>
      <defs>
        <linearGradient id="zentrel-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8E7C4" />
          <stop offset="58%" stopColor="#F3D7A4" />
          <stop offset="100%" stopColor="#E7C98B" />
        </linearGradient>
      </defs>
      <rect width="640" height="500" fill="url(#zentrel-sky)" />
      <circle cx="548" cy="72" r="46" fill="#F8D78A" opacity="0.85" />
      <circle cx="548" cy="72" r="30" fill="#F2C14D" />
      <g fill="#FBF8F2">
        <ellipse cx="150" cy="78" rx="54" ry="18" />
        <ellipse cx="186" cy="70" rx="32" ry="16" />
        <ellipse cx="116" cy="74" rx="28" ry="14" />
        <ellipse cx="360" cy="118" rx="62" ry="16" />
        <ellipse cx="404" cy="110" rx="30" ry="14" />
      </g>
      <path
        d="M0 240C70 214 120 228 180 206C250 180 300 210 370 188C450 162 520 204 640 168V500H0Z"
        fill="#C5D3DE"
      />
      <path
        d="M0 292C90 258 150 286 230 258C320 226 370 268 460 246C530 230 580 270 640 236V500H0Z"
        fill="#97B56C"
      />
      <path
        d="M0 352C110 322 190 348 290 332C410 312 500 356 640 312V500H0Z"
        fill="#6D9346"
      />
      <rect x="0" y="430" width="640" height="70" fill="#D5D6A4" />

      <g>
        <rect x="78" y="268" width="7" height="42" rx="2" fill="#6B4A30" />
        <ellipse cx="81" cy="246" rx="18" ry="40" fill="#3F6A2A" />
        <ellipse cx="81" cy="228" rx="11" ry="24" fill="#538537" />
      </g>
      <g>
        <rect x="560" y="214" width="6" height="36" rx="2" fill="#6B4A30" />
        <ellipse cx="563" cy="196" rx="14" ry="32" fill="#3F6A2A" />
        <ellipse cx="563" cy="182" rx="8" ry="18" fill="#74A84A" />
      </g>

      <g stroke="#3F6A2A" strokeWidth="1.6" fill="none">
        <path d="M36 468v-22" />
        <path d="M58 474v-18" />
        <path d="M92 470v-16" />
        <path d="M560 472v-20" />
        <path d="M588 468v-24" />
        <path d="M612 474v-16" />
      </g>
      <g>
        <circle cx="36" cy="444" r="5" fill="#E07A5F" />
        <circle cx="58" cy="454" r="4" fill="#4F46E5" />
        <circle cx="92" cy="452" r="4.5" fill="#F2C14D" />
        <circle cx="560" cy="450" r="5" fill="#FBF9F2" stroke="#1C1B16" strokeWidth="1.2" />
        <circle cx="588" cy="442" r="4.5" fill="#E07A5F" />
        <circle cx="612" cy="456" r="4" fill="#4F46E5" />
      </g>

      <rect x="128" y="356" width="384" height="12" rx="4" fill="#6B4528" opacity="0.28" />
      <rect x="110" y="332" width="420" height="18" rx="3" fill="#C4894A" />
      <rect x="110" y="332" width="420" height="6" rx="2" fill="#D7A15C" />
      <rect x="138" y="350" width="16" height="80" rx="2" fill="#8A5A32" />
      <rect x="486" y="350" width="16" height="80" rx="2" fill="#8A5A32" />

      <g transform="translate(132 286) rotate(-8)">
        <rect width="86" height="58" rx="8" fill="#FBF9F2" stroke="#1C1B16" strokeWidth="2.25" />
        <circle cx="24" cy="30" r="10" fill="#4F46E5" />
        <circle cx="44" cy="30" r="10" fill="#E07A5F" />
        <circle cx="64" cy="30" r="10" fill="#74A84A" />
      </g>

      <g>
        <rect x="196" y="214" width="176" height="118" rx="10" fill="#EAD9B8" stroke="#1C1B16" strokeWidth="2.4" />
        <rect x="208" y="226" width="152" height="80" rx="4" fill="#241F1A" />
        <rect x="220" y="242" width="72" height="16" rx="8" fill="#4F46E5" />
        <rect x="268" y="268" width="78" height="16" rx="8" fill="#F4F1E8" />
        <circle cx="284" cy="316" r="3" fill="#1C1B16" opacity="0.35" />
      </g>

      <g>
        <rect x="372" y="230" width="132" height="102" rx="8" fill="#F7F1E4" stroke="#1C1B16" strokeWidth="2.4" />
        <path d="M438 252 L470 268 L438 284 L406 268 Z" fill="#D5E4F2" stroke="#1C1B16" strokeWidth="1.6" />
        <path d="M438 284 L470 268 L470 300 L438 316 Z" fill="#4F46E5" stroke="#1C1B16" strokeWidth="1.6" />
        <path d="M438 284 L406 268 L406 300 L438 316 Z" fill="#74A84A" stroke="#1C1B16" strokeWidth="1.6" />
      </g>

      <g>
        <rect x="512" y="304" width="30" height="28" rx="4" fill="#C46B4A" stroke="#1C1B16" strokeWidth="2" />
        <ellipse cx="527" cy="296" rx="20" ry="13" fill="#3F6A2A" />
        <ellipse cx="516" cy="288" rx="11" ry="9" fill="#538537" />
        <ellipse cx="538" cy="290" rx="11" ry="9" fill="#74A84A" />
      </g>
    </svg>
  );
}
