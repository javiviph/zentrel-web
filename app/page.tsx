import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Layers } from "@/components/Layers";
import { Process } from "@/components/Process";
import { Team } from "@/components/Team";
import { WorkPlaceholders } from "@/components/WorkPlaceholders";

export default function Home() {
  return (
    <main>
      <Hero />
      <Layers />
      <Brands />
      <WorkPlaceholders />
      <Team />
      <Process />
      <Contact />
    </main>
  );
}
