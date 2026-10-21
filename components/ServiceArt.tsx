import Image from "next/image";
import { serviceArt, type ServiceArtKind } from "@/lib/content";

export function ServiceArt({ kind }: { kind: ServiceArtKind }) {
  const art = serviceArt[kind];
  return (
    <div className="svc-art">
      <Image
        src={art.src}
        alt=""
        width={art.width}
        height={art.height}
        sizes="(max-width: 1024px) 92vw, 340px"
        unoptimized
        className="svc-shot pixel-portrait"
      />
    </div>
  );
}
