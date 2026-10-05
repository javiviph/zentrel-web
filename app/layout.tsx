import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Pixelify_Sans, Plus_Jakarta_Sans, Silkscreen } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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

export const metadata: Metadata = {
  title: {
    default: "Zentrel — Creamos digital que se nota en el negocio",
    template: "%s · Zentrel",
  },
  description:
    "Asistentes, automatizaciones y herramientas a medida para pymes. Webs, tours 3D y configuradores cuando hacen falta. Estudio sénior, de principio a fin.",
  applicationName: "Zentrel",
  openGraph: {
    title: "Zentrel — Creamos digital que se nota en el negocio",
    description:
      "Asistentes, automatizaciones y herramientas a medida. Diseñado y construido de principio a fin por un estudio sénior.",
    locale: "es_ES",
    type: "website",
    siteName: "Zentrel",
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
