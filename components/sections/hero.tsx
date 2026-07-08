"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center container-content text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 mb-8"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-success" />
        <span className="text-small">Disponível para oportunidades</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="text-display"
      >
        Robison
        <br />
        <span className="text-foreground-secondary">
          Desenvolvedor Full Stack Júnior
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="text-body max-w-xl mt-6"
      >
        Sou autodidata. Aprendo construindo sistemas reais e estudo os
        fundamentos técnicos ao longo do caminho — usando Inteligência
        Artificial como ferramenta de aceleração, não de atalho.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-10"
      >
        <a
          href="#projetos"
          className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors"
        >
          Ver Projetos
          <ArrowRight size={16} />
        </a>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-border-hover hover:bg-background-hover transition-colors"
        >
          Contato
        </a>
      </motion.div>
    </section>
  );
}
