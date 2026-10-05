import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="font-pixel text-[11px] uppercase tracking-[0.16em] text-accent">404</p>
      <h1 className="mt-3 max-w-xl font-sans text-5xl font-extrabold tracking-[-0.045em] text-ink">
        Esta página no <span className="serif">está.</span>
      </h1>
      <p className="mt-4 max-w-md text-ink2">El enlace no lleva a ninguna sección del estudio.</p>
      <Link href="/" className="btn btn-primary mt-8 w-fit">
        Volver al inicio
      </Link>
    </main>
  );
}
