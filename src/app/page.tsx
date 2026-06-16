import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Beneficios } from "@/components/sections/Beneficios";
import { Turmas } from "@/components/sections/Turmas";
import { Horarios } from "@/components/sections/Horarios";
import { Galeria } from "@/components/sections/Galeria";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Diferenciais />
      <Beneficios />
      <Turmas />
      <Horarios />
      <Galeria />
      <Contato />
    </>
  );
}
