import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-[var(--radius)] border border-border bg-background-elevated p-6 flex flex-col hover:border-border-hover transition-colors">
      <div className="flex-1">
        <p className="text-small uppercase tracking-widest">
          {project.tagline}
        </p>
        <Link href={`/projetos/${project.slug}`}>
          <h3 className="text-lg font-medium text-foreground mt-2 hover:text-accent transition-colors">
            {project.name}
          </h3>
        </Link>
        <p className="text-body mt-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-small border border-border rounded-full px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5 mt-6">
        <Link
          href={`/projetos/${project.slug}`}
          className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
        >
          Ver detalhes
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Ver ao vivo
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
