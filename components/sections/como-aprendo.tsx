"use client";

import { motion } from "framer-motion";
import { Hammer, BookOpen, Sparkles, Flame } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Hammer,
    title: "Aprendo construindo",
    description:
      "Não aprendo só na teoria. Cada conceito novo vira parte de um sistema real que estou construindo.",
  },
  {
    icon: BookOpen,
    title: "Estudo os fundamentos enquanto construo",
    description:
      "Não pulo etapas. Enquanto desenvolvo, estudo o que está por trás — HTTP, banco de dados, arquitetura.",
  },
  {
    icon: Sparkles,
    title: "Uso IA como acelerador, não atalho",
    description:
      "A IA acelera meu desenvolvimento, mas entender o que está sendo construído continua sendo comigo.",
  },
  {
    icon: Flame,
    title: "Disciplina diária de estudo",
    description:
      "Aprender é hábito, não evento. Estudo e construo todos os dias, de forma consistente.",
  },
];

export function ComoAprendo() {
  return (
    <section id="como-aprendo" className="section-spacing container-content">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-small uppercase tracking-widest">Como Aprendo</p>
        <h2 className="text-heading mt-3 max-w-xl">
          Meu processo de aprendizado, em quatro princípios.
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRINCIPLES.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[var(--radius)] border border-border bg-background-elevated p-6 hover:border-border-hover transition-colors"
            >
              <Icon size={20} className="text-accent" strokeWidth={1.75} />
              <h3 className="text-lg font-medium text-foreground mt-4">
                {principle.title}
              </h3>
              <p className="text-body mt-2">{principle.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
