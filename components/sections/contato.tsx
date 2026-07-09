"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Check } from "lucide-react";

export function Contato() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("rr.robison@hotmail.com").catch(() => {
      // Se a área de transferência não estiver disponível, o link mailto
      // abaixo ainda tenta abrir o programa de e-mail normalmente.
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contato"
      className="section-spacing container-content text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto"
      >
        <p className="text-small uppercase tracking-widest">Contato</p>
        <h2 className="text-heading mt-3">Vamos conversar?</h2>
        <p className="text-body mt-4">
          Estou disponível para minha primeira oportunidade como
          desenvolvedor full stack júnior. Se meu perfil fizer sentido pra
          sua equipe, me chama.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="https://wa.me/5579996818929"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors w-full sm:w-auto justify-center"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href="mailto:rr.robison@hotmail.com"
            onClick={handleEmailClick}
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-border-hover hover:bg-background-hover transition-colors w-full sm:w-auto justify-center"
          >
            {copied ? <Check size={16} /> : <Mail size={16} />}
            {copied ? "E-mail copiado!" : "rr.robison@hotmail.com"}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
