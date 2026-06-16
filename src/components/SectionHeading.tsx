import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  titulo: React.ReactNode;
  descricao?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  titulo,
  descricao,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
        {titulo}
      </h2>
      {descricao && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {descricao}
        </p>
      )}
    </Reveal>
  );
}
