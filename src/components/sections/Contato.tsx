import { MapPin } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  ACADEMIA,
  CONTATO,
  mapsEmbedUrl,
  whatsappLink,
} from "@/lib/data";

export function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-white/[0.03]" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Conteúdo */}
          <div>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Contato
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Comece a treinar hoje
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Chame a gente no WhatsApp pra marcar uma aula experimental ou passe
              aqui pra conhecer. Vai ser um prazer receber você no tatame.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border-subtle bg-card p-5 transition-colors hover:border-white/30"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-foreground">
                  <WhatsAppIcon className="size-6" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold uppercase">WhatsApp</p>
                  <p className="text-sm text-muted">{CONTATO.whatsappLabel}</p>
                </div>
              </a>

              <a
                href={CONTATO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border-subtle bg-card p-5 transition-colors hover:border-white/30"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-foreground">
                  <InstagramIcon className="size-6" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold uppercase">Instagram</p>
                  <p className="text-sm text-muted">@{CONTATO.instagramUser}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border-subtle bg-card p-5">
                <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-foreground">
                  <MapPin className="size-6" aria-hidden />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold uppercase">Endereço</p>
                  <p className="text-sm text-muted">{ACADEMIA.endereco}</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block"
            >
              <Button size="lg">
                <WhatsAppIcon />
                Agende sua aula experimental
              </Button>
            </a>
          </div>

          {/* Mapa */}
          <Reveal className="min-h-[360px] overflow-hidden rounded-2xl border border-border-subtle">
            <iframe
              title={`Localização da ${ACADEMIA.nomeCompleto}`}
              src={mapsEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-[360px] grayscale-[0.3] contrast-110"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
