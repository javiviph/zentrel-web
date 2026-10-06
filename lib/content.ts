/**
 * Copy and structured content for the Zentrel site.
 * Spanish (es). Prices stay off the site — conversations only.
 *
 * Brand logos: drop a file at /public/brands/<slug>.svg and set `svg`
 * to `/brands/<slug>.svg`. The strip renders the file when present,
 * otherwise a text wordmark.
 */

export const siteUrl = "https://zentrel.es";

export const contactEmail = "hola@zentrel.es";

export const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "Quiero construir algo con Zentrel",
)}`;

/**
 * TODO(voice-call): the contact CTA will start an AI voice call that books a meeting.
 * Keep this false until that call exists. `Contact` only invokes `onStartVoiceCall` when this is true.
 */
export const voiceCallEnabled = false;

export const headerCta = {
  href: "/#contacto",
  label: "Consulta tu caso",
} as const;

export const nav = [
  { href: "/#que-hacemos", id: "que-hacemos", label: "Qué hacemos" },
  { href: "/#marcas", id: "marcas", label: "Marcas" },
  { href: "/#proyectos", id: "proyectos", label: "Proyectos" },
  { href: "/#equipo", id: "equipo", label: "Equipo" },
  { href: "/#por-que", id: "por-que", label: "Por qué" },
] as const;

export const footerBlurb =
  "Asistentes, automatizaciones y herramientas a medida para que una pyme venda y opere con menos fricción.";

export const footerCaption = "Antes todo esto era campo";

type HeroRun = { text: string; mark?: boolean; serif?: boolean };

export const hero = {
  eyebrow: "Estudio digital",
  lines: [
    [{ text: "Creamos experiencias" }],
    [{ text: "tecnológicas que" }],
    [
      { text: "enamoran", mark: true },
      { text: " a tus " },
      { text: "clientes.", serif: true },
    ],
  ] satisfies HeroRun[][],
  lede: "Asistentes, automatizaciones y herramientas a medida, webs, tours 3D y configuradores cuando hacen falta.",
  support:
    "Diseñado y construido de principio a fin por un estudio sénior. Sin traspasos, sin juniors, sin concesiones: solo trabajo con criterio y obsesión por que funcione.",
  primaryCta: { href: "/#contacto", label: "Consulta tu caso" },
  secondaryCta: { href: "/#proyectos", label: "Ver proyectos" },
  chips: { live: "En el taller", since: "Estudio sénior" },
} as const;

export const proof = [
  { strong: "13", label: "años creando" },
  { strong: "+200", label: "proyectos" },
  { label: "Experiencias a medida + optimización tech + criterio sénior" },
] as const;

export const servicesSection = {
  id: "que-hacemos",
  eyebrow: "01 — QUÉ HACEMOS",
  titleBefore: "Creamos experiencias tecnológicas avanzadas adaptadas a ",
  titleEm: "tu caso.",
  intro:
    "Tres niveles. Tu caso. Empezamos donde necesites y escalamos sin cambiar de equipo.",
} as const;

export type ServiceArtKind = "visual" | "brain" | "software";

export type Layer = {
  index: string;
  name: string;
  body: string;
  chips: string[];
  art: ServiceArtKind;
};

export const layers: Layer[] = [
  {
    index: "01",
    name: "Experiencias Visuales",
    body: "Diseñamos y desarrollamos tu web, contenido editorial con IA o tradicional (tú eliges), tours virtuales inmersivos y experiencias 3D con configuradores de producto interactivos.",
    chips: ["Webs", "Contenido", "Tours 3D", "Configuradores"],
    art: "visual",
  },
  {
    index: "02",
    name: "Cerebro Digital",
    body: "Asistentes de voz y chat + automatizaciones inteligentes. Sistemas con flujos organizados y menos fricción en ventas y operaciones, mes a mes.",
    chips: ["Voz", "Chat", "Automatizaciones", "Sistemas de gestión", "Agentes IA"],
    art: "brain",
  },
  {
    index: "03",
    name: "Software a medida",
    body: "Software a medida en 7–30 días. Criterio sénior + IA. De la idea al producto que usáis de verdad, porque cualquiera puede hacerlo, pero nosotros lo hacemos bien y con cariño.",
    chips: ["Software", "IA", "SaaS"],
    art: "software",
  },
];

export const brandsSection = {
  id: "marcas",
  eyebrow: "02 — Marcas",
  titleBefore: "Marcas con las que ",
  titleEm: "hemos trabajado.",
} as const;

export type Brand = {
  name: string;
  slug: string;
  /** Public path, e.g. `/brands/kpmg.svg`, once the file lives in /public/brands. */
  svg?: string;
};

/**
 * Essential client list (ok to draft on the home).
 * Confirm each name can be shown publicly before launch — some relationships may be under NDA.
 * Employers stay off this strip (Pearson, Ole Tecnología, Bassein, ISTEL, Essensi, Outivate).
 * Do not add Amazon or Concentrix.
 */
export const brands: Brand[] = [
  { name: "KPMG", slug: "kpmg" },
  { name: "Fundación Unicaja", slug: "fundacion-unicaja" },
  { name: "IATA", slug: "iata" },
  { name: "Correos", slug: "correos" },
  { name: "BP", slug: "bp" },
  { name: "Iberdrola", slug: "iberdrola" },
  { name: "Mahou", slug: "mahou" },
  { name: "FENIN", slug: "fenin" },
  { name: "Indra", slug: "indra" },
  { name: "Junta de Castilla y León", slug: "junta-castilla-y-leon" },
  { name: "Dominio del Pidio", slug: "dominio-del-pidio" },
  { name: "Protos", slug: "protos" },
  { name: "1K Sports", slug: "1k-sports" },
  { name: "Fundación Manuel Fernández Lito", slug: "fundacion-manuel-fernandez-lito" },
  { name: "Lemons Bucket", slug: "lemons-bucket" },
  { name: "Hospital La Paz", slug: "hospital-la-paz" },
  { name: "Circutech", slug: "circutech" },
  { name: "Junta de Andalucía", slug: "junta-de-andalucia" },
];

export const projectsSection = {
  id: "proyectos",
  eyebrow: "03 — Algunos proyectos",
  titleBefore: "Negocios reales. Soluciones ",
  titleEm: "reales.",
  intro: "Cuatro huecos. Los casos entran cuando se pueden contar.",
} as const;

export type CaseSlot = {
  index: string;
  type: string;
  /** Null until a real case is cleared to publish. */
  name: string | null;
  outcome: string | null;
};

export const cases: CaseSlot[] = [
  { index: "01", type: "Agente de voz / chat", name: null, outcome: null },
  { index: "02", type: "Tour 3D / VR", name: null, outcome: null },
  { index: "03", type: "Herramienta / automatización", name: null, outcome: null },
  { index: "04", type: "Web / configurador", name: null, outcome: null },
];

/**
 * Home figures strip. The brand count is `brands.length` so it stays
 * equal to the logos in the marcas section.
 */
export const banner = {
  id: "cifras",
  eyebrow: "En cifras",
  caption: "Lo entregado, en tres cifras.",
  stats: [
    { value: 200, prefix: "+", label: "proyectos entregados" },
    { value: brands.length, prefix: "", label: "marcas enterprise" },
    { value: 6, prefix: "", label: "sectores" },
  ],
} as const;

export const teamSection = {
  id: "equipo",
  eyebrow: "04 — El equipo",
  titleBefore: "Trabajáis con quien ",
  titleEm: "construye.",
  intro:
    "Somos un estudio sénior. Sin capas de cuenta, sin juniors aprendiendo con vuestro presupuesto.",
} as const;

export const javierPortrait = {
  src: "/javier-penas.webp",
  width: 880,
  height: 1206,
  alt: "Retrato pixel-art de Javier Peñas: traje gris, gafas y fondo gris claro.",
} as const;

export type Teammate = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  /** Estella is the only teammate presented openly as AI. */
  ai?: boolean;
  /** Public path to a portrait. Only set when a real image exists. */
  portrait?: string;
  tone: string;
  on: string;
};

export const team: Teammate[] = [
  {
    initials: "J",
    name: "Javier",
    role: "CEO & Polímata",
    bio: "El polímata que conecta los puntos y rumia tu caso hasta solucionarlo.",
    portrait: javierPortrait.src,
    tone: "#1C1B16",
    on: "#F4F1E8",
  },
  {
    initials: "S",
    name: "Susana",
    role: "Diseño",
    bio: "Hace que las cosas no solo funcionen, sino que enamoren a primera vista.",
    tone: "#A34B32",
    on: "#FBF9F2",
  },
  {
    initials: "R",
    name: "Rubén",
    role: "Experiencias virtuales / 3D",
    bio: "Construye las dimensiones que el resto aún no podemos ver.",
    tone: "#2F5D73",
    on: "#FBF9F2",
  },
  {
    initials: "L",
    name: "Luis",
    role: "Tecnología",
    bio: "Traduce ideas imposibles al idioma del código y la estabilidad.",
    tone: "#4F46E5",
    on: "#FBF9F2",
  },
  {
    initials: "A",
    name: "Andrea",
    role: "Automatizaciones",
    bio: "Le devuelve tiempo al reloj haciendo que los procesos funcionen de verdad.",
    tone: "#3D6B32",
    on: "#FBF9F2",
  },
  {
    initials: "IA",
    name: "Estella",
    role: "Compañera IA (Contenido)",
    bio: "Nuestra creadora de contenido digital. No toma café, pero genera ideas a la velocidad de la luz.",
    ai: true,
    tone: "#FBF9F2",
    on: "#4F46E5",
  },
];

export const processSection = {
  id: "por-que",
  eyebrow: "05 — Por qué Zentrel",
  title: "4 reglas básicas de éxito",
} as const;

export const processSteps = [
  "Un equipo sénior de principio a fin.",
  "Pocos proyectos a la vez.",
  "Plazos cortos de entrega y mejora continua.",
  "Os decimos con honestidad si no somos el encaje.",
] as const;

export const founder = {
  id: "fundador",
  eyebrow: "06 — Sobre el fundador",
  name: "Javier Peñas",
  role: "Polímata y creador de productos",
  lead: "Soy creador de producto: hago software y productos digitales que dan vida a las ideas en cualquier plataforma, combinando estrategia, creatividad y tecnología.",
  bio: "Creo herramientas que la gente disfruta usando, uniendo diseño intuitivo y soluciones reales. A lo largo de una carrera larga y en muchos sectores, mi objetivo no ha cambiado: hacer experiencias tecnológicas que mejoren negocios.",
  cta: { href: "/javier-penas", label: "CV completo" },
} as const;

export const contactSection = {
  id: "contacto",
  eyebrow: "07 — Empieza tu proyecto",
  titleBefore: "Hagamos algo ",
  titleEm: "diferente.",
  body: "Deja de ver vídeos de cómo otros hacen cosas increíbles con IA y empieza a hacer tu propio camino. Cuéntanos qué estás haciendo y dónde quieres llegar, y te decimos si podemos ayudarte.",
  cta: "Hablar con nuestra IA",
  soonLead: "Muy pronto: podrás hablar con nuestra IA. Mientras, escríbenos a",
} as const;
