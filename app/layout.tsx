import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Pixelify_Sans, Plus_Jakarta_Sans, Silkscreen } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteUrl } from "@/lib/content";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-zentrel-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-zentrel-serif",
  display: "swap",
});

const pixel = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zentrel-pixel",
  display: "swap",
});

const pixel2 = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-zentrel-pixel2",
  display: "swap",
});

const description =
  "Asistentes, automatizaciones y herramientas a medida, webs, tours 3D y configuradores cuando hacen falta. Estudio sénior, de principio a fin.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zentrel — Creamos experiencias tecnológicas que enamoran a tus clientes",
    template: "%s · Zentrel",
  },
  description,
  applicationName: "Zentrel",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zentrel — Creamos experiencias tecnológicas que enamoran a tus clientes",
    description,
    locale: "es_ES",
    type: "website",
    siteName: "Zentrel",
    url: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F1E8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${sans.variable} ${serif.variable} ${pixel.variable} ${pixel2.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a className="skip" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <div id="contenido" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
