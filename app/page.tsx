export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 container-content text-center">
      <p className="text-small uppercase tracking-widest">Teste de tokens</p>
      <h1 className="text-display">
        Fundo escuro, texto claro,<br /> accent <span className="text-accent">azul</span>.
      </h1>
      <p className="text-body max-w-md">
        Se você está vendo isso em tema escuro com esse título em destaque azul,
        os tokens da Etapa 2 estão funcionando corretamente.
      </p>
    </main>
  );
}
