import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Jornada } from "@/components/sections/jornada";
import { ComoAprendo } from "@/components/sections/como-aprendo";
import { Projetos } from "@/components/sections/projetos";
import { Estudando } from "@/components/sections/estudando";
import { Contato } from "@/components/sections/contato";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Jornada />
        <ComoAprendo />
        <Projetos />
        <Estudando />
        <Contato />
      </main>

      <Footer />
    </>
  );
}
