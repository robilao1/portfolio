import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Jornada } from "@/components/sections/jornada";
import { ComoAprendo } from "@/components/sections/como-aprendo";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Jornada />
        <ComoAprendo />
        <section id="projetos" className="section-spacing container-content">
          <p className="text-small">#projetos — placeholder</p>
        </section>
        <section id="estudando" className="section-spacing container-content">
          <p className="text-small">#estudando — placeholder</p>
        </section>
        <section id="contato" className="section-spacing container-content">
          <p className="text-small">#contato — placeholder</p>
        </section>
      </main>
    </>
  );
}
