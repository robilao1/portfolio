"use client";

import { motion } from "framer-motion";

const CATEGORIES = [
  {
    title: "Fundamentos da Web",
    topics: ["HTTP", "HTTPS", "DNS", "APIs REST"],
  },
  {
    title: "Frontend",
    topics: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend & Dados",
    topics: ["Banco de Dados", "PostgreSQL", "Supabase", "Autenticação"],
  },
  {
    title: "Ferramentas & Arquitetura",
    topics: ["Git", "GitHub", "Deploy", "Arquitetura de Software"],
  },
];

export function Estudando() {
  return (
    <section id="estudando" className="section-spacing container-content">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-small uppercase tracking-widest">
          O que estou estudando
        </p>
        <h2 className="text-heading mt-3 max-w-xl">
          Ainda em evolução — e é assim que pretende continuar.
        </h2>
        <p className="text-body max-w-xl mt-4">
          Estes são os temas que estudo enquanto construo. Não domínio
          completo — jornada em andamento.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <h3 className="text-small uppercase tracking-widest">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {category.topics.map((topic) => (
                <span
                  key={topic}
                  className="text-sm text-foreground-secondary border border-border rounded-full px-3 py-1.5 hover:border-border-hover hover:text-foreground transition-colors"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
