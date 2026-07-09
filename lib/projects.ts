import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "chame-frete",
    name: "Chame Frete",
    tagline: "Marketplace de fretes",
    description:
      "Plataforma que conecta quem precisa enviar carga com motoristas e transportadoras, facilitando a busca e negociação de fretes.",
    problem:
      "Conectar clientes a fretantes da cidade — quem precisa transportar algo encontra, de forma rápida, quem pode fazer o frete.",
    role: "Desenvolvi sozinho, do zero: frontend, backend e integrações.",
    features: [
      "Cadastro de fretantes e clientes",
      "Busca por localização com Mapbox",
      "Contato direto pela plataforma",
    ],
    stack: ["HTML", "JavaScript", "Supabase", "Mapbox"],
    liveUrl: "https://chamefrete.com.br",
  },
  {
    slug: "poscrm",
    name: "PósCRM",
    tagline: "CRM de pós-atendimento para clínicas estéticas",
    description:
      "Sistema multi-tenant que ajuda clínicas estéticas a priorizar e não perder o acompanhamento de clientes após procedimentos.",
    problem:
      "Clínicas estéticas perdem o acompanhamento de clientes após o procedimento, prejudicando retenção e resultado do tratamento.",
    role: "Desenvolvi sozinho, do zero: frontend, backend e integrações.",
    features: [
      "Motor de priorização de clientes por urgência de retorno",
      "Autenticação multi-tenant (várias clínicas, dados isolados)",
      "Camada administrativa para gestão da plataforma",
    ],
    stack: ["HTML", "JavaScript", "Supabase"],
    liveUrl: "https://lembrarclientelp.netlify.app/",
  },
];