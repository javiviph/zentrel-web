import type { Metadata } from "next";
import Link from "next/link";

/**
 * TODO(demos): interactive product demos.
 * This route is a stub for a future in-browser configurator
 * (options, materials, color — something a buyer can actually use).
 * Do not treat this page as a shipped demo.
 * Next likely sibling: /demos/<nombre> for a 3D tour or a voice agent, when one exists.
 */

export const metadata: Metadata = {
  title: "Configurador",
  description: "Hueco reservado para un configurador de producto interactivo.",
  robots: { index: false, follow: false },
};

export default function ConfiguradorDemoPage() {
  return (
    <main className="wrap flex min-h-[70vh] flex-col justify-center py-20">
      <p className="font-pixel text-[11px] uppercase tracking-[0.16em] text-accent">Demo · en el taller</p>
      <h1 className="mt-3 max-w-2xl font-sans text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-ink">
        El configurador <span className="serif">todavía no está.</span>
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink2">
        Este hueco queda para un demo de verdad: un producto que se configura en el navegador. Hasta
        entonces, la página solo reserva la ruta.
      </p>
      <Link href="/" className="btn btn-primary mt-8 w-fit">
        Volver al inicio
      </Link>
    </main>
  );
}
