import {
  Baby,
  Brain,
  Dumbbell,
  Focus,
  HandHelping,
  Heart,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Contato / Marca                                                            */
/* -------------------------------------------------------------------------- */

export const ACADEMIA = {
  nome: "Excellence Company",
  nomeCompleto: "Excellence Company Brazilian Jiu-Jitsu",
  mestre: "Mestre Marcio",
  // Endereço — substitua pelo endereço real da academia
  endereco: "R. Rubens de Oliveira, 251 - 2° andar - Parque Res. Cocaia, São Paulo - SP, 04849-210",
  cidade: "São Paulo - SP",
} as const;

export const CONTATO = {
  whatsappNumero: "5511958275686",
  whatsappLabel: "(11) 95827-5686",
  instagramUser: "e.companybjj",
  instagramUrl: "https://instagram.com/e.companybjj",
} as const;

/** Monta um link wa.me com mensagem pré-preenchida. */
export function whatsappLink(
  mensagem = "Oi! Vi o site de vocês e queria saber mais sobre as aulas de Jiu-Jitsu na Excellence Company.",
) {
  return `https://wa.me/${CONTATO.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
}

/** Embed do Google Maps a partir de uma busca pelo endereço. */
export function mapsEmbedUrl() {
  const query = encodeURIComponent(
    `${ACADEMIA.nomeCompleto} ${ACADEMIA.endereco} ${ACADEMIA.cidade}`,
  );
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

/* -------------------------------------------------------------------------- */
/* Navegação                                                                  */
/* -------------------------------------------------------------------------- */

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#turmas", label: "Turmas" },
  { href: "#horarios", label: "Horários" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
] as const;

/* -------------------------------------------------------------------------- */
/* Diferenciais (pilares)                                                     */
/* -------------------------------------------------------------------------- */

export type Pilar = {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
};

export const PILARES: Pilar[] = [
  {
    icon: Users,
    titulo: "Espaço para as mulheres",
    descricao:
      "As mulheres têm o seu lugar aqui. O clima é tranquilo e respeitoso, pensado pra você treinar à vontade e evoluir no seu ritmo.",
  },
  {
    icon: Brain,
    titulo: "Aulas para alunos autistas",
    descricao:
      "Temos um olhar atento para alunos autistas. A aula se adapta ao tempo e ao jeito de cada um, com paciência e bastante acolhimento.",
  },
  {
    icon: ShieldCheck,
    titulo: "Conscientização contra o bullying",
    descricao:
      "O Jiu-Jitsu ajuda muito quem passa por bullying. A gente trabalha respeito e autoconfiança, dentro e fora do tatame.",
  },
];

/* -------------------------------------------------------------------------- */
/* Benefícios do Jiu-Jitsu                                                    */
/* -------------------------------------------------------------------------- */

export type Beneficio = {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
};

export const BENEFICIOS: Beneficio[] = [
  {
    icon: Scale,
    titulo: "Coordenação e equilíbrio",
    descricao:
      "Brincando e treinando, as crianças ganham coordenação, equilíbrio e mais consciência do próprio corpo.",
  },
  {
    icon: Dumbbell,
    titulo: "Força e preparo físico",
    descricao:
      "O treino deixa o corpo mais forte e melhora o condicionamento, seja você iniciante ou já mais avançado.",
  },
  {
    icon: Shield,
    titulo: "Defesa pessoal",
    descricao:
      "Você aprende a se defender de verdade e passa a se sentir bem mais seguro no dia a dia.",
  },
  {
    icon: Focus,
    titulo: "Foco e disciplina",
    descricao:
      "Treinar com frequência ajuda demais no foco, na disciplina e na cabeça pra resolver problemas.",
  },
  {
    icon: Heart,
    titulo: "Autoconfiança",
    descricao:
      "Cada pequena evolução no tatame faz a autoestima crescer e dá mais confiança pra vida.",
  },
  {
    icon: HandHelping,
    titulo: "Amizades de verdade",
    descricao:
      "Aqui se faz amizade pra valer. O esporte ensina a conviver, respeitar e treinar em grupo.",
  },
];

/* -------------------------------------------------------------------------- */
/* Turmas                                                                     */
/* -------------------------------------------------------------------------- */

export type Turma = {
  icon: LucideIcon;
  nome: string;
  idade: string;
  descricao: string;
};

export const TURMAS: Turma[] = [
  {
    icon: Baby,
    nome: "Baby",
    idade: "mais ou menos 3 a 5 anos",
    descricao:
      "O primeiro contato com o tatame, no meio de brincadeiras que ajudam na coordenação e na socialização.",
  },
  {
    icon: Sparkles,
    nome: "Kids",
    idade: "mais ou menos 6 a 11 anos",
    descricao:
      "As crianças aprendem o básico do Jiu-Jitsu brincando, sempre com muita disciplina e respeito.",
  },
  {
    icon: Zap,
    nome: "Juvenil",
    idade: "mais ou menos 12 a 15 anos",
    descricao:
      "Hora de aprofundar a técnica e o preparo físico, preparando os jovens pra fase adulta.",
  },
  {
    icon: Users,
    nome: "Adulto",
    idade: "16 anos ou mais",
    descricao:
      "Turmas para todos os níveis. Tanto faz se você nunca treinou ou já quer competir, vai achar o seu lugar.",
  },
];

/* -------------------------------------------------------------------------- */
/* Grade de horários                                                          */
/* -------------------------------------------------------------------------- */

export const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"] as const;

export type SlotTipo = "Adulto" | "Kids" | "Juvenil" | "Baby" | null;

export type LinhaHorario = {
  horario: string;
  aulas: SlotTipo[]; // ordem: Seg, Ter, Qua, Qui, Sex, Sáb
};

export const GRADE: LinhaHorario[] = [
  { horario: "08:00 – 09:30", aulas: ["Adulto", null, "Adulto", null, "Adulto", null] },
  { horario: "10:00 – 11:00", aulas: ["Kids", null, "Kids", null, "Kids", "Kids"] },
  { horario: "18:00 – 19:00", aulas: ["Juvenil", null, "Juvenil", null, "Juvenil", null] },
  { horario: "19:00 – 20:00", aulas: ["Kids", "Baby", "Kids", "Baby", "Kids", null] },
  { horario: "20:00 – 21:30", aulas: ["Adulto", null, "Adulto", null, "Adulto", "Adulto"] },
  { horario: "20:15 – 21:15", aulas: [null, "Kids", null, "Kids", null, null] },
  { horario: "21:30 – 22:30", aulas: ["Adulto", null, "Adulto", null, "Adulto", null] },
];

/** Estilo das células da grade (monocromático). */
export const SLOT_CORES: Record<NonNullable<SlotTipo>, string> = {
  Adulto: "bg-white/[0.08] text-foreground border-white/10",
  Kids: "bg-white/[0.08] text-foreground border-white/10",
  Juvenil: "bg-white/[0.08] text-foreground border-white/10",
  Baby: "bg-white/[0.08] text-foreground border-white/10",
};

/* -------------------------------------------------------------------------- */
/* Galeria                                                                    */
/* -------------------------------------------------------------------------- */

export type Foto = {
  src: string;
  alt: string;
  legenda: string;
};

// Adicione novos itens aqui conforme tiver mais fotos (veja public/README.md).
export const GALERIA: Foto[] = [
  {
    src: "/turma-geral.jpeg",
    alt: "Turma da Excellence Company reunida no tatame em um dia de aula",
    legenda: "Dia de treino",
  },
  {
    src: "/turma-feminina.jpeg",
    alt: "Turma feminina da Excellence Company no tatame",
    legenda: "Turma feminina",
  },
];
