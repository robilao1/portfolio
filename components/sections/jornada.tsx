"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  {
    period: "Início",
    title: "No-code e automação",
    description:
      "Comecei mexendo com n8n e EvolutionAPI, automatizando processos reais para negócios. Foi minha porta de entrada para lógica, integrações e sistemas.",
  },
  {
    period: "Em seguida",
    title: "Mergulho nos fundamentos",
    description:
      "Passei a estudar programação de verdade — HTML, CSS, JavaScript, lógica, como a web funciona por trás dos panos.",
  },
  {
    period: "Construindo",
    title: "Sistemas reais, com IA como ferramenta",
    description:
      "Comecei a construir produtos completos (SaaS, automações, CRMs), usando Inteligência Artificial para acelerar o desenvolvimento — sem abrir mão de entender o que estava sendo construído.",
  },
  {
    period: "Hoje",
    title: "Aprofundando em React, TypeScript e arquitetura",
    description:
      "Sigo construindo enquanto estudo os fundamentos de arquitetura de software, banco de dados e boas práticas — ainda em evolução, ainda aprendendo todos os dias.",
  },
];

export function Jornada() {
  return (
    <section id="jornada" className="section-spacing container-content">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-small uppercase tracking-widest">Minha Jornada</p>
        <h2 className="text-heading mt-3 max-w-xl">
          Não comecei escrevendo código em uma empresa.
        </h2>
        <p className="text-body max-w-xl mt-4">
          Comecei construindo sistemas reais em casa, estudando os
          fundamentos diariamente e usando IA como ferramenta de
          aceleração — não de atalho.
        </p>
      </motion.div>

      <div className="mt-16 relative">
        {/* Linha vertical conectando os marcos */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
          aria-hidden="true"
        />

        <ol className="space-y-12">
          {MILESTONES.map((milestone, index) => (
            <motion.li
              key={milestone.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative pl-10"
            >
              <span
                className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background"
                aria-hidden="true"
              />
              <p className="text-small uppercase tracking-widest">
                {milestone.period}
              </p>
              <h3 className="text-lg font-medium text-foreground mt-2">
                {milestone.title}
              </h3>
              <p className="text-body mt-2 max-w-lg">
                {milestone.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
