"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Tamanho do quadrado do logo em pixels. */
  size?: number;
  withText?: boolean;
};

/**
 * Logo da academia. Usa /logo.jpg quando disponível; caso contrário,
 * exibe um selo estilizado com a marca para não quebrar o layout.
 */
export function Logo({ className, size = 44, withText = false }: LogoProps) {
  const [erro, setErro] = useState(false);

  return (
    <span className={cn("flex items-center gap-3", className)}>
      {erro ? (
        <span
          aria-label="Excellence Company Brazilian Jiu-Jitsu"
          className="flex items-center justify-center rounded-full border-2 border-brand bg-black font-display text-sm font-bold tracking-tight text-white"
          style={{ width: size, height: size }}
        >
          EC
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/logo.jpg"
          alt="Excellence Company Brazilian Jiu-Jitsu"
          width={size}
          height={size}
          onError={() => setErro(true)}
          className="rounded-full bg-white object-contain"
          style={{ width: size, height: size }}
        />
      )}
      {withText && (
        <span className="font-display text-lg font-bold uppercase leading-none tracking-tight">
          Excellence <span className="text-brand">Company</span>
        </span>
      )}
    </span>
  );
}
