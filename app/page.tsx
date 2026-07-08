import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="min-h-[80vh] flex flex-col items-center justify-center container-content text-center">
          <p className="text-small uppercase tracking-widest">Hero</p>
          <h1 className="text-display mt-4">Etapa 4 vem aqui</h1>
        </section>

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
