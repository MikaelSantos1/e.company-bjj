import { ArrowRight, CalendarCheck, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ACADEMIA, whatsappLink } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-grid"
    >
      {/* Brilho radial suave + degradês */}
      <div
        className="absolute left-1/2 top-1/3 -z-10 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-transparent to-background"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        {/* Logo em destaque */}
        <div className="flex justify-center">
          <Logo size={132} />
        </div>

        <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/70">
          <MapPin className="size-3.5" aria-hidden /> {ACADEMIA.cidade}
        </span>

        <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
          Excellence Company
          <span className="mt-2 block text-2xl font-semibold text-foreground/90 sm:text-4xl">
            Brazilian Jiu-Jitsu
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85">
          Aqui o Jiu-Jitsu é para a família toda. Você treina, faz amigos e ganha
          mais confiança no dia a dia, num ambiente tranquilo e acolhedor. Venha
          conhecer o trabalho do {ACADEMIA.mestre} e da nossa equipe.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto">
              <CalendarCheck aria-hidden />
              Aula experimental grátis
            </Button>
          </a>
          <a href="#turmas">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Conheça as turmas
              <ArrowRight aria-hidden />
            </Button>
          </a>
        </div>

        {/* Selos rápidos */}
        <ul className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-foreground/80">
          {[
            "Inclusão de mulheres",
            "Metodologia para autistas",
            "Anti-bullying",
            "Turmas Kids, Juvenil e Adulto",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-white/40" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
