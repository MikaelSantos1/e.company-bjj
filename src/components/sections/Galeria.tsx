import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { GALERIA } from "@/lib/data";

export function Galeria() {
  return (
    <section id="galeria" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galeria"
          titulo="Nossa comunidade"
          descricao="Um pouquinho do nosso dia a dia no tatame."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
          {GALERIA.map((foto, i) => (
            <Reveal
              key={foto.src}
              delay={(i % 2) * 0.1}
              className="group relative overflow-hidden rounded-2xl border border-border-subtle"
            >
              <Photo
                src={foto.src}
                alt={foto.alt}
                placeholderLabel={foto.legenda}
                className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <p className="pointer-events-none absolute bottom-4 left-5 font-display text-lg font-semibold uppercase tracking-wide text-white">
                {foto.legenda}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
