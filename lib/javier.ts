/**
 * CV page content for /javier-penas.
 * Source of truth: the exported CV (Notion «Javier Peñas CV ES», edited 2026-10-05).
 * Do not add employers, metrics, dates, levels or links that are not in that CV.
 *
 * TODO(cv-links): the CV has no GitHub, personal site, X/Twitter or other profiles — only LinkedIn.
 * TODO(cv-dates): education entries have no dates. Pearson has a year (2026) and no start month.
 * TODO(cv-languages): ES | ENG | FR, with no levels.
 * Phone and the personal email from the CV stay off this page. Public contact is the studio address.
 */

import { contactEmail, javierPortrait, siteUrl } from "@/lib/content";

export const javierLinkedIn = "https://www.linkedin.com/in/javiux";

export const javierMeta = {
  title: "Javier Peñas",
  description:
    "CV de Javier Peñas, Product Leader & Builder. IA aplicada, producto y diseño, de la estrategia a la construcción. Madrid.",
  path: "/javier-penas",
} as const;

export const javierHero = {
  eyebrow: "CV · Product Leader",
  name: "Javier",
  nameEm: "Peñas.",
  role: ["Product Leader & Builder", "IA aplicada", "Ex-CTO"],
  lema: "Donde negocio, tecnología y experiencia conectan",
  lede: "Líder de producto con base tecnológica y de diseño. Transformo estrategia en productos digitales escalables con ejecución hands-on.",
  chips: { place: "Madrid", focus: "IA aplicada" },
  writeLabel: "Escríbeme",
  linkedInLabel: "LinkedIn",
  printLabel: "Descargar PDF",
} as const;

/**
 * Figures quoted in the CV, each tied to one role. Not career-wide totals.
 * TODO(cv-metrics): there is no explicit “years of experience” total in the CV — do not invent one.
 */
export const javierMetrics = {
  note: "Cifras citadas en el CV, cada una ligada al puesto que se indica. No son totales de carrera.",
  items: [
    { value: 83, prefix: "", suffix: "", label: "Proyectos liderados", note: "Ole Tecnología" },
    { value: 80, prefix: "+", suffix: "%", label: "Eficiencia operativa", note: "Ole Tecnología" },
    { value: 62, prefix: "+", suffix: "%", label: "Captación de proyectos", note: "Ole Tecnología" },
    { value: 21, prefix: ">", suffix: "%", label: "Ventas anuales", note: "Bassein · ISTEL" },
    { value: 11000, prefix: "+", suffix: "", label: "Estaciones", note: "Bassein · ISTEL" },
  ],
} as const;

export const javierProfile = [
  "He liderado discovery, visión y roadmaps end-to-end en entornos B2B/B2C, integrando IA y automatización para mejorar eficiencia, decisión y experiencia de cliente.",
  "Combino visión estratégica con ejecución hands-on, diseño, prototipo y construyo productos de principio a fin, trabajando con cuentas enterprise como KPMG, IATA, BP, Correos, Abbott, Fundación Unicaja, Iberdrola, Cellnex, American Tower Corporation, Grupo Visalia o Indra.",
] as const;

export const javierTerminal = {
  title: "javier@zentrel — claude",
  lines: [
    { kind: "cmd" as const, text: 'claude perfil --rol "Product Leader & Builder"' },
    { kind: "ok" as const, text: "✔ Líder de producto con base tecnológica y de diseño" },
    { kind: "ok" as const, text: "✔ IA aplicada en Pearson y en Ole Tecnología" },
    { kind: "ok" as const, text: "✔ +80% eficiencia operativa · 83 proyectos liderados" },
    { kind: "ok" as const, text: "✔ React / TypeScript · Python · AWS" },
    { kind: "arw" as const, text: "→ Donde negocio, tecnología y experiencia conectan" },
  ],
};

/** Paraphrases of CV sentences and skill groups. No extra claims. */
export const javierContributions = [
  {
    title: "Estrategia que se puede construir",
    body: "Transformo estrategia en productos digitales escalables, con ejecución hands-on.",
  },
  {
    title: "IA aplicada de verdad",
    body: "Integro IA y automatización para mejorar eficiencia, decisión y experiencia de cliente.",
  },
  {
    title: "De la idea al producto",
    body: "Diseño, prototipo y construyo de principio a fin: negocio, tecnología y diseño en la misma mesa.",
  },
  {
    title: "Dirección de UX/UI",
    body: "Research, sistemas de diseño, prototipo rápido y validación con usuarios antes de desarrollar.",
  },
  {
    title: "Equipos multidisciplinares",
    body: "Roadmap, priorización y entrega con producto, UX/UI, desarrollo, data e IA.",
  },
  {
    title: "Cuentas enterprise",
    body: "He trabajado con cuentas como KPMG, IATA, BP, Correos, Iberdrola, Cellnex o Indra.",
  },
  {
    title: "Builder",
    body: "React y TypeScript, Python, Java, SQL/PostgreSQL y AWS (Lambda, API Gateway).",
  },
  {
    title: "Resultados que el CV cita",
    body: "En Ole Tecnología: +80% de eficiencia operativa, 83 proyectos y +62% de captación.",
  },
] as const;

/**
 * Gantt positions. Origin January 2017 (first role). End October 2026
 * (the CV’s current year; Pearson is listed as 2026 with no end).
 * Year ranges use the start of the first year through the end of the last year.
 * Freelance starts in August 2020, the only month the CV states.
 * Overlaps are the overlaps written in the CV.
 */
const timelineStart = 2017;
const timelineEnd = 2026 + 9 / 12;

function bar(start: number, end: number) {
  const span = timelineEnd - timelineStart;
  const left = ((start - timelineStart) / span) * 100;
  const width = ((end - start) / span) * 100;
  return {
    left: `${left.toFixed(2)}%`,
    width: `${width.toFixed(2)}%`,
  };
}

export type JavierJob = {
  id: string;
  title: string;
  org: string;
  href?: string;
  hrefLabel?: string;
  extraLinks?: { href: string; label: string }[];
  when: string;
  current?: boolean;
  internalTitle?: string;
  /** TODO shown next to the date when the CV omits a month. */
  dateNote?: string;
  points: string[];
  chips: string[];
  color: string;
  bar: { left: string; width: string };
};

export const javierJobs: JavierJob[] = [
  {
    id: "pearson",
    title: "AI Product Manager & Builder",
    org: "Pearson",
    href: "https://www.pearson.com",
    hrefLabel: "pearson.com",
    when: "2026 — actualidad",
    current: true,
    internalTitle: "AI Advance Specialist Product Manager & Builder",
    dateNote: "El CV indica el año 2026, sin mes de inicio.",
    points: [
      "Diseñé y construí desde cero (0→1) un producto de evaluación conversacional con IA para análisis de soft skills en entrevistas, con responsabilidad hands-on sobre producto y arquitectura.",
      "Definí y desplegué pipelines de IA en AWS con orquestación de colas y automatizaciones para procesamiento de conversaciones y scoring de candidatos.",
      "Trabajé como IC sénior en un rol de alta autonomía técnica, tras años liderando equipos, para profundizar en construcción práctica de productos de IA end-to-end.",
      "Colaboré con producto, UX/IA y stakeholders para validar el modelo antes de su integración en Versant, el producto principal de la compañía.",
    ],
    chips: ["IA", "AWS", "0→1", "Versant"],
    color: "var(--grass)",
    bar: bar(2026, timelineEnd),
  },
  {
    id: "ole",
    title: "Product & Innovation Lead",
    org: "Ole Tecnología",
    href: "http://www.oletecnologia.com",
    hrefLabel: "oletecnologia.com",
    when: "2022 — 2026",
    internalTitle: "CTO – CIO Innovación, Diseño e IA",
    points: [
      "Defino y lidero la estrategia de producto y su ejecución end-to-end, actuando como nexo entre negocio, tecnología, diseño y datos para lanzar y escalar productos digitales.",
      "Diseño y gobierno roadmaps, priorización y entrega con equipos multidisciplinares (producto, UX/UI, desarrollo, data e IA).",
      "Impulso la adopción de IA aplicada y automatización como palanca de producto para optimizar operaciones, acelerar delivery y mejorar la toma de decisiones.",
      "Diseñé e implanté un sistema centralizado de control y gobierno (procesos, proyectos y costes) sustituyendo herramientas dispersas, logrando +80% de eficiencia operativa.",
      "Lideré más de 83 proyectos y contribuí al crecimiento y consolidación del área, aumentando la captación de nuevos proyectos en un 62%.",
      "Proyectos representativos: IATA EasyPay (con KPMG), plan de transformación para Fundación Bancaria Unicaja, BP Studio, Cryptosello AR (Correos), y proyectos de innovación de alto impacto.",
    ],
    chips: ["Producto", "Roadmap", "IA", "Gobierno"],
    color: "var(--accent)",
    bar: bar(2022, timelineEnd),
  },
  {
    id: "bassein",
    title: "Product Manager | UX/UI Lead",
    org: "Bassein Corporation · ISTEL",
    href: "https://bassein.es",
    hrefLabel: "bassein.es",
    extraLinks: [{ href: "https://istel.es", label: "istel.es" }],
    when: "2021 — 2022",
    points: [
      "Lideré iniciativas de producto en entornos industriales y telecom, alineando estrategia de negocio, UX y ejecución técnica.",
      "Evolucioné productos y sistemas inteligentes: control de stock y almacén con reducción del 35% del riesgo de compras.",
      "Optimicé el canal digital y la experiencia, incrementando las ventas anuales >21%.",
      "Impulsé mejora continua basada en datos, optimizando rendimiento térmico y operativo en +11.000 estaciones y elevando la satisfacción del cliente.",
      "Diseñé y prototipé directamente las interfaces (UX/UI) de los sistemas de control de stock, validando con usuarios antes de pasar a desarrollo.",
    ],
    chips: ["UX/UI", "Producto", "Datos"],
    color: "var(--accent2)",
    bar: bar(2021, 2023),
  },
  {
    id: "freelance",
    title: "Product & Growth Consultant",
    org: "Freelance",
    when: "agosto 2020 — 2021",
    points: [
      "Acompañé a marcas y proyectos en definición de propuesta de valor, experiencia digital y growth, conectando estrategia con ejecución.",
      "Lideré entregables de producto: UX/UI, front-end, contenidos y automatización de procesos, optimizando conversión y eficiencia operativa.",
    ],
    chips: ["Growth", "UX/UI", "Automatización"],
    color: "var(--sky)",
    bar: bar(2020 + 7 / 12, 2022),
  },
  {
    id: "esenssi",
    title: "Digital Product & Marketing Strategy Lead",
    org: "Esenssi Aromas S.L.",
    href: "https://esenssi.com",
    hrefLabel: "esenssi.com",
    when: "2019 — 2020",
    points: [
      "Lideré la estrategia digital y de producto en entorno B2B, alineando negocio, experiencia de cliente y canales online.",
      "Dirigí iniciativas de lanzamiento y evolución de producto, optimización comercial y automatización, coordinando equipos multidisciplinares.",
    ],
    chips: ["Estrategia", "B2B", "Producto"],
    color: "var(--gold)",
    bar: bar(2019, 2021),
  },
  {
    id: "outivate",
    title: "Junior Product Builder",
    org: "Outivate S.L.",
    href: "https://www.linkedin.com/company/outivate/",
    hrefLabel: "LinkedIn · Outivate",
    when: "2017 — 2019",
    internalTitle: "Software Developer & UX/UI Designer",
    points: [
      "Inicio de mi carrera en producto digital, formando parte del equipo fundador y construyendo el producto desde cero.",
      "Definimos y validamos el modelo de negocio para entrenadores personales y alquiler de espacios de entrenamiento.",
      "Lideré UX/UI y desarrollo, cubriendo el ciclo completo hasta lanzamiento.",
      "Formé y coordiné un equipo de 4 desarrolladores, estableciendo bases técnicas y de producto.",
    ],
    chips: ["Producto", "UX/UI", "Equipo"],
    color: "var(--clay)",
    bar: bar(2017, 2020),
  },
];

export const javierGanttAxis = ["2017", "2019", "2021", "2023", "2026"] as const;

export const javierSkillGroups = [
  {
    id: "stack",
    title: "Stack técnico & Builder",
    items: [
      "Full-Stack Prototyping",
      "React / TypeScript",
      "Python",
      "Java",
      "SQL / PostgreSQL",
      "AWS (Lambda, API Gateway)",
      "API Integration",
      "AI Applied to Product & Business Processes",
    ],
  },
  {
    id: "ux",
    title: "Experiencia de usuario & diseño",
    items: [
      "UX/UI Design & Design Direction",
      "User Research & Business Research (UX)",
      "Rapid Prototyping with AI Tools (Figma AI, v0, Claude, Google Stitch, AI Studio)",
      "Design Systems & Component Libraries",
      "User-Centered Design & Experience Strategy",
      "Usability Testing & User Validation",
      "Customer Experience (CX) & User Satisfaction",
      "Information Architecture & Interaction Design",
    ],
  },
  {
    id: "product",
    title: "Habilidades de producto",
    items: [
      "Product Strategy & Product Vision",
      "Product Roadmap Definition & Ownership",
      "Product Discovery & Opportunity Validation",
      "Backlog Management & Prioritization (Impact vs Effort)",
      "Go-to-Market Strategy & Product Launch",
      "Data-Driven Decision Making",
      "Product Metrics & Analytics (KPIs, OKRs)",
      "Stakeholder Management & Executive Communication",
      "Cross-Functional & Multidisciplinary Team Leadership",
      "Agile Methodologies & Product Delivery",
    ],
  },
] as const;

export const javierEducation = {
  note: "El CV no indica fechas de formación.",
  items: [
    { title: "Desarrollo de Software Multiplataforma", place: "IES Ágora, Cáceres (España)" },
    { title: "Desarrollo de Inteligencia Artificial (IA)", place: "IBM" },
    { title: "Artes y Diseño", place: "IES Al-Qázeres, Cáceres (España)" },
    { title: "Diseño UX/UI", place: "UXER School" },
    { title: "IA Responsable y Prompt Engineering", place: "Founderz" },
    { title: "UX/UI Design", place: "Google" },
  ],
} as const;

export const javierLanguages = {
  note: "El CV no indica niveles.",
  items: ["Español", "Inglés", "Francés"],
} as const;

export const javierInterests = [
  "Creación de MVPs con IA",
  "Prototipado e impresión 3D",
  "Divulgación de contenido sobre tecnología y productos innovadores",
] as const;

export const javierLocation = "Madrid, España";

export const javierAccounts = {
  clients: [
    "KPMG",
    "IATA",
    "BP",
    "Correos",
    "Abbott",
    "Fundación Unicaja",
    "Iberdrola",
    "Cellnex",
    "American Tower Corporation",
    "Grupo Visalia",
    "Indra",
  ],
  employers: [
    "Pearson",
    "Ole Tecnología",
    "Bassein Corporation",
    "ISTEL",
    "Esenssi Aromas",
    "Outivate",
  ],
} as const;

export const javierCta = {
  titleBefore: "¿Hablamos de ",
  titleEm: "producto?",
  body: "Donde negocio, tecnología y experiencia conectan. Si quieres hablar de un producto o de un caso, escríbeme.",
} as const;

export const javierJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Javier Peñas",
  jobTitle: "Product Leader & Builder",
  description: javierHero.lede,
  email: contactEmail,
  url: `${siteUrl}${javierMeta.path}`,
  sameAs: [javierLinkedIn],
  image: `${siteUrl}${javierPortrait.src}`,
  homeLocation: {
    "@type": "Place",
    name: javierLocation,
  },
} as const;
