import { ExternalLink } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-content py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-small">
          © {year} Robison. Construído do zero, aprendendo no processo.
        </p>
        <a
          href="https://github.com/robilao1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors"
        >
          github.com/robilao1
          <ExternalLink size={14} />
        </a>
      </div>
    </footer>
  );
}
