import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { PILARES } from "@/lib/data";

export function Diferenciais() {
  return (
    <section id="diferenciais" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.03] to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nossos diferenciais"
          titulo="Um tatame para todos"
          descricao="A gente acredita que o Jiu-Jitsu muda a vida das pessoas. Por isso fazemos questão de um ambiente acolhedor, onde cada um se sente bem."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILARES.map((pilar, i) => (
            <Reveal key={pilar.titulo} delay={i * 0.12}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border-subtle bg-card p-8 transition-colors hover:border-white/25 hover:bg-card-hover">
                <span
                  className="absolute -right-6 -top-6 size-24 rounded-full bg-white/[0.06] blur-2xl transition-opacity group-hover:opacity-100 md:opacity-60"
                  aria-hidden
                />
                <div className="flex size-14 items-center justify-center rounded-xl bg-white/10 text-foreground">
                  <pilar.icon className="size-7" aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold uppercase leading-snug">
                  {pilar.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {pilar.descricao}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
