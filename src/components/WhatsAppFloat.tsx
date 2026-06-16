import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/data";

/** Botão flutuante de WhatsApp, fixo em todas as telas. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/40 transition-transform hover:-translate-y-0.5 hover:bg-[#1ebe5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden sm:inline">Fale conosco</span>
    </a>
  );
}
