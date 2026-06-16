# Imagens da academia (pasta `public/`)

Coloque os arquivos reais aqui, **com exatamente estes nomes**. Enquanto um
arquivo não existir, o site mostra um espaço reservado com a identidade da marca
(o layout não quebra).

## Arquivos esperados

| Arquivo | Onde aparece | Observação |
|---|---|---|
| `logo.jpg` | Topo (Hero), navbar, rodapé, favicon e compartilhamento | Logo (PNG com fundo transparente fica melhor, se tiver) |
| `turma-geral.jpeg` | Galeria — "Dia de treino" | Foto da turma reunida / dia de aula |
| `turma-feminina.jpeg` | Galeria — "Turma feminina" | Foto da turma feminina |

> Se trocar a extensão dos arquivos (ex.: `.png`/`.jpg`), atualize os caminhos
> em `src/components/Logo.tsx` (logo) e em `GALERIA` no `src/lib/data.ts`.

## Adicionar mais fotos à galeria

Para incluir novas fotos: coloque o arquivo em `public/` e adicione um item na
lista `GALERIA` em `src/lib/data.ts` (campos `src`, `alt` e `legenda`). A grade
da galeria se ajusta automaticamente.

## Onde editar os dados do site

- **Endereço, telefone, Instagram, mestre:** `src/lib/data.ts`
  (objetos `ACADEMIA` e `CONTATO`).
- **Grade de horários:** `src/lib/data.ts` (constante `GRADE`).
- **Turmas, benefícios, diferenciais:** `src/lib/data.ts`.
