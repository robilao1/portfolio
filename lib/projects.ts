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
    role: "Desenvolvi sozinho, do zero: frontend, backend e fiz as integrações.",
    features: [
      "Cadastro de fretantes e clientes",
      "Busca por localização com Mapbox",
      "Contato direto pela plataforma",
    ],
    stack: ["HTML", "JavaScript", "Supabase", "Mapbox"],
    liveUrl: "https://chamefrete.com.br",
    challenges: [
      {
        title: "Segurança da aplicação",
        description:
          "Depois do sistema pronto, me deparei com uma pergunta que não sabia responder: como garantir a segurança das informações, sem ter experiência prévia em segurança de aplicações? Pesquisei a fundo e cheguei à ideia de fazer uma auditoria de vulnerabilidades — chaves expostas, senhas, exposição de dados sensíveis. Construí o contexto certo no ChatGPT, gerei um prompt de auditoria estruturado, e usei o Claude para escanear o sistema com uma regra clara: identificar vulnerabilidades sem alterar nada que já estava funcionando. A partir do relatório, corrigi as falhas em ordem de risco — das mais críticas às mais simples — sem quebrar nada em produção.",
      },
    ],
    images: [
      {
        src: "/images/projects/chame-frete/landing.png",
        alt: "Tela inicial do Chame Frete com as opções 'Sou Cliente' e 'Sou Fretante'",
      },
      {
        src: "/images/projects/chame-frete/mapa.png",
        alt: "Mapa em tempo real do Chame Frete com filtros por tipo de veículo e fretantes próximos",
      },
    ],
  },
  {
    slug: "poscrm",
    name: "PósCRM",
    tagline: "CRM de pós-atendimento para clínicas estéticas",
    description:
      "Sistema multi-tenant que ajuda clínicas estéticas a priorizar e não perder o acompanhamento de clientes após procedimentos.",
    problem:
      "Clínicas estéticas perdem o acompanhamento de clientes após o procedimento, prejudicando retenção e resultado do tratamento.",
    role: "Desenvolvi sozinho, do zero: frontend, backend e fiz as integrações.",
    features: [
      "Motor de priorização de clientes por urgência de retorno",
      "Autenticação multi-tenant (várias clínicas, dados isolados)",
      "Assinatura recorrente via Asaas — 7 dias de teste grátis, acesso liberado por 30 dias após pagamento",
      "Camada administrativa para gestão da plataforma",
    ],
    stack: ["HTML", "JavaScript", "Supabase"],
    liveUrl: "https://lembrarclientelp.netlify.app/",
    challenges: [
      {
        title: "Segurança da aplicação",
        description:
          "Antes de expor o sistema a clientes reais, precisei garantir a segurança das informações mesmo sem experiência prévia na área. Usei o mesmo processo de auditoria que apliquei no Chame Frete: construí um prompt de auditoria de vulnerabilidades — chaves expostas, senhas, exposição de dados — e usei o Claude para escanear o sistema sem alterar o que já funcionava. Corrigi as falhas encontradas em ordem de risco, das mais críticas às mais simples.",
      },
      {
        title: "Integração de pagamento recorrente com Asaas",
        description:
          "Ao integrar o webhook de confirmação de pagamento do Asaas, recebi repetidamente erro 400 na comunicação entre os sistemas. Investiguei o payload esperado, refiz a estrutura do webhook, e consegui a resposta 200 — garantindo que o acesso de 30 dias só é liberado quando o pagamento é confirmado de verdade pelo gateway.",
      },
    ],
    images: [
      {
        src: "/images/projects/poscrm/dashboard.png",
        alt: "Painel do PósCRM mostrando clientes priorizados por urgência de retorno, com contagem de urgentes, no ponto ideal e contatados",
      },
      {
        src: "/images/projects/poscrm/landing.png",
        alt: "Página inicial do PósCRM explicando o fluxo de uso: revisar clientes e enviar lembrete pelo WhatsApp",
      },
    ],
  },
];
