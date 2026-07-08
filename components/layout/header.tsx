"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-content flex items-center justify-between h-16">
        <a
          href="#"
          className="text-base font-medium tracking-tight text-foreground"
        >
          Robison
        </a>

        {/* Navegação desktop */}
        <Nav className="hidden md:flex items-center gap-8" />

        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-flex items-center rounded-[var(--radius)] bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors"
          >
            Contato
          </a>
        </div>

        {/* Botão do menu mobile */}
        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-[var(--radius)] p-2 text-foreground-secondary hover:text-foreground hover:bg-background-hover transition-colors"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="container-content flex flex-col gap-1 py-4">
              <Nav
                className="flex flex-col gap-1"
                linkClassName="text-base text-foreground-secondary hover:text-foreground transition-colors py-2"
                onLinkClick={() => setMobileOpen(false)}
              />
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-[var(--radius)] bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors"
              >
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
