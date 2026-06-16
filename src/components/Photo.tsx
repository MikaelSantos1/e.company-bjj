"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  /** Texto exibido no placeholder enquanto a imagem real não é adicionada. */
  placeholderLabel?: string;
  priority?: boolean;
};

/**
 * Imagem com fallback gracioso: se o arquivo ainda não existe em /public,
 * exibe um bloco com a identidade da marca (sem quebrar o layout).
 * Quando o usuário adicionar o arquivo real, a foto aparece automaticamente.
 */
export function Photo({
  src,
  alt,
  className,
  placeholderLabel,
  priority,
}: PhotoProps) {
  const [erro, setErro] = useState(false);

  if (erro) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-soft via-card to-black text-muted",
          className,
        )}
      >
        <ImageIcon className="size-8 opacity-50" aria-hidden />
        <span className="px-4 text-center text-xs font-medium uppercase tracking-wider text-muted/80">
          {placeholderLabel ?? alt}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setErro(true)}
      className={cn("object-cover", className)}
    />
  );
}
