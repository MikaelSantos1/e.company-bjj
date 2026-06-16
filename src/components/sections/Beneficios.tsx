import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { BENEFICIOS } from "@/lib/data";

export function Beneficios() {
  return (
    <section id="beneficios" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por que treinar"
          titulo="Os benefícios do Jiu-Jitsu"
          descricao="Vale pra criançada e pros adultos também: o corpo fica mais forte, a cabeça mais tranquila e o dia a dia mais leve."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFICIOS.map((b, i) => (
            <Reveal key={b.titulo} delay={(i % 3) * 0.1}>
              <div className="flex h-full gap-4 rounded-2xl border border-border-subtle bg-card p-6 transition-colors hover:border-white/25">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-foreground">
                  <b.icon className="size-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase leading-snug">
                    {b.titulo}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {b.descricao}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
