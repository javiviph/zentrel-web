import Link from "next/link";

export function Logo({ className = "text-[1.7rem]" }: { className?: string }) {
  return (
    <Link href="/" className={`serif text-ink ${className}`} aria-label="Zentrel, inicio">
      Zentrel.
    </Link>
  );
}
