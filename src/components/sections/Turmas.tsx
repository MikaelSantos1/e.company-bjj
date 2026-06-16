import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { TURMAS, whatsappLink } from "@/lib/data";

export function Turmas() {
  return (
    <section id="turmas" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Turmas"
          titulo="Para todas as idades"
          descricao="Da criançada à galera mais experiente, tem uma turma certa pra você e pra sua família."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TURMAS.map((turma, i) => (
            <Reveal key={turma.nome} delay={i * 0.1}>
              <article className="group flex h-full flex-col rounded-2xl border border-border-subtle bg-card p-7 transition-all hover:-translate-y-1 hover:border-white/25">
                <div className="flex size-14 items-center justify-center rounded-xl bg-white/10 text-foreground">
                  <turma.icon className="size-7" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase">
                  {turma.nome}
                </h3>
                <span className="mt-1 text-sm font-semibold text-muted">
                  {turma.idade}
                </span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {turma.descricao}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Encontre sua turma
              <ArrowRight aria-hidden />
            </Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
