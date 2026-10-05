# Zentrel

Landing de Zentrel, estudio digital. Asistentes, automatizaciones y herramientas a medida para que una pyme venda y opere con menos fricción. Webs, tours 3D y configuradores son la puerta de entrada.

Una sola página en español, hecha con Next.js (App Router), TypeScript y Tailwind. Sin base de datos ni precios públicos.

## Arranque local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Deploy en Vercel

1. Sube el repositorio a GitHub (o impórtalo desde el git que ya uses).
2. En [vercel.com/new](https://vercel.com/new), importa el repo. El preset de Next.js detecta el framework solo.
3. Comandos por defecto: install `npm install`, build `npm run build`. No hace falta output directory ni variables de entorno.
4. Deploy. La home es estática; no hay servicios que levantar.

Cuando el build falle en Vercel, el log suele bastar: este proyecto no depende de secretos.

## Dominio `zentrel`

El dominio definitivo todavía no está cerrado. Cuando exista (por ejemplo `zentrel.com`):

1. En el proyecto de Vercel, entra en **Settings → Domains** y añade el dominio.
2. En el registrador, crea los registros DNS que indique Vercel (normalmente un `A` a `76.76.21.21` para el apex y un `CNAME` de `www` a `cname.vercel-dns.com` — confirma los valores en el panel, pueden cambiar).
3. Espera a que el certificado quede activo.
4. En `app/layout.tsx`, añade `metadataBase: new URL("https://tu-dominio")` para que Open Graph resuelva URLs absolutas.

## Correo

El mailto de la home apunta a `contact@zentrel.com`. Es un placeholder: el buzón no se crea con este sitio. Cuando el dominio esté comprado, abre el buzón real y, si la dirección cambia, actualiza `contactEmail` en `lib/content.ts`.

## Marcas

La franja usa wordmarks de texto. Para sustituir uno por el logo oficial:

1. Guarda el SVG en `public/brands/<slug>.svg` (el slug está en `lib/content.ts`).
2. En esa entrada, pon `svg: "/brands/<slug>.svg"`.

La lista esencial está en la home. Antes de publicar, confirma cuáles se pueden mostrar (hay relaciones que pueden estar bajo NDA). Los empleadores (Pearson, Ole Tecnología, Bassein, ISTEL, Essensi, Outivate) no van en la franja. No añadas Amazon ni Concentrix.

## Demos interactivos

TODO: demos de producto en el navegador. La ruta reservada es [`/demos/configurador`](app/demos/configurador/page.tsx). Hoy es un hueco, con `noindex`, para un configurador de verdad (opciones, material, color). No la enlaces desde la navegación hasta que se pueda usar. El comentario `TODO(demos)` en esa página y en `components/Layers.tsx` marca el sitio.

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Copy y datos (capas, marcas, equipo, casos) | `lib/content.ts` |
| Tokens (`--paper`, `--ink`, `--accent`, radios, sombras) | `app/globals.css` |
| Fuentes (Instrument Serif, Plus Jakarta Sans, Silkscreen, Pixelify Sans) | `app/layout.tsx` |
| Secciones | `components/Header.tsx`, `Hero.tsx`, `Layers.tsx`, `Brands.tsx`, `WorkPlaceholders.tsx`, `Team.tsx`, `Process.tsx`, `Contact.tsx`, `Footer.tsx` |

## Qué falta

- Dominio y buzón definitivos.
- Confirmación pública de cada marca (NDA) y los SVG en `public/brands/`.
- Cuatro casos reales en los huecos de Prueba (`lib/content.ts`, campos `name` y `outcome`).
- Cifras de años y proyectos, cuando se puedan decir. Hoy la prueba social del hero no inventa números.
- Retratos del equipo y bios cortas. Estella debe seguir marcada como compañera de IA.
- El configurador (y otros demos) en `/demos/configurador`.
