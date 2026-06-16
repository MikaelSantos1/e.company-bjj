import { MapPin } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import {
  ACADEMIA,
  CONTATO,
  NAV_LINKS,
  whatsappLink,
} from "@/lib/data";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo size={56} withText />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {ACADEMIA.nomeCompleto}. Jiu-Jitsu pra família toda, num ambiente
            tranquilo e acolhedor.
          </p>
          <p className="mt-3 text-sm text-muted">
            À frente do trabalho, o{" "}
            <span className="text-foreground">{ACADEMIA.mestre}</span>.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Navegação
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Contato
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-white"
              >
                <WhatsAppIcon className="size-4 shrink-0" />
                WhatsApp {CONTATO.whatsappLabel}
              </a>
            </li>
            <li>
              <a
                href={CONTATO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-white"
              >
                <InstagramIcon className="size-4 shrink-0" />@
                {CONTATO.instagramUser}
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{ACADEMIA.endereco}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted sm:px-6 lg:px-8">
          © {ano} {ACADEMIA.nomeCompleto}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
