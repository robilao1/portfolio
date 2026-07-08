"use client";

const NAV_ITEMS = [
  { label: "Jornada", href: "#jornada" },
  { label: "Como Aprendo", href: "#como-aprendo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Estudando", href: "#estudando" },
];

interface NavProps {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
}

export function Nav({ className, linkClassName, onLinkClick }: NavProps) {
  return (
    <nav className={className}>
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onLinkClick}
          className={
            linkClassName ??
            "text-sm text-foreground-secondary hover:text-foreground transition-colors"
          }
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
