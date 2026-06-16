import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DIAS, GRADE, SLOT_CORES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Horarios() {
  return (
    <section id="horarios" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Grade de horários"
          titulo="Escolha o melhor horário"
          descricao="Veja a nossa grade da semana e escolha o horário que cabe melhor na sua rotina."
        />

        <Reveal className="mt-12 overflow-x-auto rounded-2xl border border-border-subtle">
          <table className="w-full min-w-[680px] border-collapse text-center text-sm">
            <caption className="sr-only">Grade semanal de horários das aulas</caption>
            <thead>
              <tr className="bg-white/[0.06] text-foreground">
                <th scope="col" className="px-4 py-4 text-left font-display uppercase tracking-wide">
                  Horário
                </th>
                {DIAS.map((dia) => (
                  <th
                    key={dia}
                    scope="col"
                    className="px-3 py-4 font-display uppercase tracking-wide"
                  >
                    {dia}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GRADE.map((linha, idx) => (
                <tr
                  key={linha.horario}
                  className={cn(
                    "border-t border-border-subtle",
                    idx % 2 === 0 ? "bg-card" : "bg-card-hover",
                  )}
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 text-left font-semibold text-foreground"
                  >
                    {linha.horario}
                  </th>
                  {linha.aulas.map((aula, i) => (
                    <td key={i} className="px-3 py-3">
                      {aula ? (
                        <span
                          className={cn(
                            "inline-block rounded-md border px-2.5 py-1 text-xs font-semibold uppercase",
                            SLOT_CORES[aula],
                          )}
                        >
                          {aula}
                        </span>
                      ) : (
                        <span className="text-muted/40" aria-label="Sem aula">
                          —
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="mt-4 text-center text-sm text-muted">
          Os horários podem mudar de vez em quando. Se tiver qualquer dúvida,{" "}
          <a
            href="#contato"
            className="font-semibold text-foreground underline underline-offset-4 hover:text-white"
          >
            é só chamar a gente
          </a>
          .
        </p>
      </div>
    </section>
  );
}
