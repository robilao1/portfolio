import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Jornada } from "@/components/sections/jornada";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Jornada />
        <section id="como-aprendo" className="section-spacing container-content">
          <p className="text-small">#como-aprendo — placeholder</p>
        </section>
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
