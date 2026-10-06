import type { Metadata } from "next";
import { JavierCv } from "@/components/cv/JavierCv";
import { javierJsonLd, javierMeta } from "@/lib/javier";

export const metadata: Metadata = {
  title: javierMeta.title,
  description: javierMeta.description,
  alternates: { canonical: javierMeta.path },
  openGraph: {
    title: "Javier Peñas — Polímata y creador de productos",
    description: javierMeta.description,
    url: javierMeta.path,
    locale: "es_ES",
    type: "profile",
  },
};

export default function JavierPenasPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(javierJsonLd) }} />
      <JavierCv />
    </main>
  );
}
