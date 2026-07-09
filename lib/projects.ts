import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "chame-frete",
    name: "Chame Frete",
    tagline: "Marketplace de fretes",
    description:
      "Plataforma que conecta quem precisa enviar carga com motoristas e transportadoras, facilitando a busca e negociação de fretes.",
    stack: ["HTML", "JavaScript", "Supabase", "Mapbox"],
    liveUrl: "https://chamefrete.com.br",
  },
  {
    slug: "poscrm",
    name: "PósCRM",
    tagline: "CRM de pós-atendimento para clínicas estéticas",
    description:
      "Sistema multi-tenant que ajuda clínicas estéticas a priorizar e não perder o acompanhamento de clientes após procedimentos.",
    stack: ["HTML", "JavaScript", "Supabase"],
    liveUrl: "https://lembrarclientelp.netlify.app/",
  },
];