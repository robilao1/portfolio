import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* Placeholders — cada seção será construída na sua própria etapa */}
        <section id="jornada" className="section-spacing container-content">
          <p className="text-small">#jornada — placeholder</p>
        </section>
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
