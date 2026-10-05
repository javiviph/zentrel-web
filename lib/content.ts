/**
 * Copy and structured content for the Zentrel home page.
 * Spanish (es). Prices stay off the site — conversations only.
 *
 * Brand logos: drop a file at /public/brands/<slug>.svg and set `svg`
 * to `/brands/<slug>.svg`. The strip renders the file when present,
 * otherwise a text wordmark.
 */

export const contactEmail = "contact@zentrel.com";

export const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "Quiero construir algo con Zentrel",
)}`;

export const nav = [
  { href: "/#capas", id: "capas", label: "Ayudamos" },
  { href: "/#marcas", id: "marcas", label: "Marcas" },
  { href: "/#prueba", id: "prueba", label: "Prueba" },
  { href: "/#equipo", id: "equipo", label: "Equipo" },
  { href: "/#proceso", id: "proceso", label: "Proceso" },
] as const;

/**
 * TODO(proof): the wireframe calls for “Años · proyectos · Trabajáis con quien construye”.
 * Swap the first two lines for confirmed figures when they exist. Do not invent counts.
 */
export const proof = [
  "Años en el oficio",
  "Proyectos con criterio",
  "Trabajáis con quien construye",
] as const;

export type Layer = {
  index: string;
  name: string;
  body: string;
  chips: string[];
};

export const layers: Layer[] = [
  {
    index: "01",
    name: "Puerta de entrada",
    body: "Webs, contenido, tours virtuales 3D y configuradores de producto. Para que la marca se vea, se entienda y convierta.",
    chips: ["Webs", "Contenido", "Tours 3D", "Configuradores"],
  },
  {
    index: "02",
    name: "Core recurrente",
    body: "Asistentes de voz y chat + automatizaciones inteligentes. Menos fricción en ventas y operaciones, mes a mes.",
    chips: ["Voz", "Chat", "Automatizaciones"],
  },
  {
    index: "03",
    name: "Alto valor",
    body: "Software a medida en 7–30 días. Criterio senior + IA. De la idea al producto que usáis de verdad.",
    chips: ["Software a medida", "7–30 días"],
  },
];

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

export type Teammate = {
  name: string;
  role: string;
  /** Shown only when we have a real note. Bios are still pending for most of the studio. */
  note?: string;
  /** Estella is the only teammate presented openly as AI. */
  ai?: boolean;
  initials: string;
  tone: string;
  on: string;
};

export const team: Teammate[] = [
  {
    name: "Javier",
    role: "CEO",
    note: "Siempre en las reuniones.",
    initials: "J",
    tone: "#1C1B16",
    on: "#F4F1E8",
  },
  {
    name: "Susana",
    role: "Diseño",
    initials: "S",
    tone: "#A34B32",
    on: "#FBF9F2",
  },
  {
    name: "Rubén",
    role: "Experiencias virtuales / 3D",
    initials: "R",
    tone: "#2F5D73",
    on: "#FBF9F2",
  },
  {
    name: "Luis",
    role: "Tecnología",
    initials: "L",
    tone: "#4F46E5",
    on: "#FBF9F2",
  },
  {
    name: "Andrea",
    role: "Automatizaciones",
    initials: "A",
    tone: "#3D6B32",
    on: "#FBF9F2",
  },
  {
    name: "Estella",
    role: "Contenido IA",
    note: "Compañera de IA del estudio. No es una persona.",
    ai: true,
    initials: "IA",
    tone: "#FBF9F2",
    on: "#4F46E5",
  },
];

export const processSteps = [
  "De principio a fin, un solo equipo.",
  "Pocos proyectos a la vez.",
  "Plazos cortos cuando el alcance lo permite.",
  "Os decimos con honestidad si no somos el encaje.",
] as const;
