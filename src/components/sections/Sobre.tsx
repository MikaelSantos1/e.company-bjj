import { Award, Heart, Users } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ACADEMIA } from "@/lib/data";

const VALORES = [
  { icon: Award, titulo: "Disciplina", texto: "Respeito às regras e constância no treino, dentro e fora do tatame." },
  { icon: Heart, titulo: "Acolhimento", texto: "Um espaço seguro, onde todo tipo de aluno é bem-vindo." },
  { icon: Users, titulo: "Comunidade", texto: "Uma turma unida, que treina e cresce junta." },
];

export function Sobre() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sobre a academia"
          titulo="Tradição e excelência no tatame"
        />

        <Reveal className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-base leading-relaxed text-muted sm:text-lg">
          <p>
            A <strong className="text-foreground">{ACADEMIA.nomeCompleto}</strong>{" "}
            não é só uma academia de Jiu-Jitsu. É um lugar onde as pessoas
            mudam pra melhor. Quem chega encontra respeito, disciplina e gente
            disposta a ajudar, do primeiro dia no tatame até a conquista das
            próximas faixas.
          </p>
          <p>
            À frente do trabalho está o{" "}
            <strong className="text-foreground">{ACADEMIA.mestre}</strong>, que vai
            muito além da técnica. A ideia é formar gente mais confiante e
            saudável, com turmas pra todas as idades e níveis.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {VALORES.map((v, i) => (
            <Reveal key={v.titulo} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-border-subtle bg-card p-6 text-center">
                <v.icon className="mx-auto size-8 text-foreground" aria-hidden />
                <h3 className="mt-3 font-display text-lg font-semibold uppercase">
                  {v.titulo}
                </h3>
                <p className="mt-1 text-sm text-muted">{v.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
