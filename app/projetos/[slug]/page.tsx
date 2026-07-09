import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Robison`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container-content section-spacing max-w-3xl">
      <Link
        href="/#projetos"
        className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} />
        Voltar para Projetos
      </Link>

      <div className="mt-8">
        <p className="text-small uppercase tracking-widest">
          {project.tagline}
        </p>
        <h1 className="text-heading mt-3">{project.name}</h1>
        <p className="text-body mt-4 max-w-xl">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-small border border-border rounded-full px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors mt-8"
          >
            Ver projeto ao vivo
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>

      <div className="mt-16 space-y-12">
        <section>
          <h2 className="text-lg font-medium text-foreground">O problema</h2>
          <p className="text-body mt-3 max-w-xl">{project.problem}</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Funcionalidades principais
          </h2>
          <ul className="mt-3 space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <CheckCircle2
                  size={18}
                  className="text-accent mt-0.5 shrink-0"
                  strokeWidth={1.75}
                />
                <span className="text-body">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">Meu papel</h2>
          <p className="text-body mt-3 max-w-xl">{project.role}</p>
        </section>
      </div>
    </main>
  );
}
