# Materiais das disciplinas

Site estático com os materiais de aula, oficinas e a grade de horários das
disciplinas ministradas por Edmilson Miranda Jr. no Centro Universitário
Sete de Setembro (UNI7).

**Endereço:** https://edmirandajr.github.io/materiais-disciplinas/

## Páginas

| Página | Arquivo | O que faz |
| --- | --- | --- |
| Materiais | `index.html` | Lista de apostilas, slides, vídeos e arquivos de prática, com busca e filtro por disciplina |
| Horários | `horarios.html` | Grade da semana com aulas, turmas, salas e horários de orientação |

## Estrutura

```
index.html               página de materiais
horarios.html            página de horários
README.md

assets/
  css/
    base.css             identidade do site: tipografia, cores, nav, cartões, rodapé
    horarios.css         grade semanal, cores das disciplinas, agenda mobile, impressão
  js/
    materiais.js         DADOS dos materiais + renderização da lista
    horarios.js          DADOS do horário + renderização da grade

arquivos/
  photoshop/             oficina CAPACITA 2026
  publicidade/           Criação Publicitária — campanha AV2
  tcc/                   TCC e Projeto Experimental
```

## Como adicionar um material

1. Coloque o arquivo na subpasta correspondente de `arquivos/`
   (nome em minúsculas, sem acentos nem espaços — use hífens).
2. Abra `assets/js/materiais.js` e acrescente um item ao array `MATERIAIS`:

```js
{
  titulo: 'Apostila — Semiótica: signo e significação',
  descricao: 'Material de apoio da primeira unidade.',
  categoria: 'semiotica',        // precisa existir em CATEGORIAS
  tipo: 'PDF',                   // PDF, PPTX, DOCX, PSD, JPG, PNG, Slides, Vídeo
  href: 'arquivos/semiotica/apostila-signo.pdf',
  tamanho: '1,2 MB',             // opcional, mas ajuda quem está no celular
  atualizado: '2026-08-10',      // opcional
},
```

Para links externos (Google Slides, YouTube, NotebookLM), use a URL completa
em `href`, acrescente `externo: true` e omita `tamanho`.

## Como criar uma nova disciplina

Acrescente uma entrada ao array `CATEGORIAS`, no topo de `assets/js/materiais.js`:

```js
{ id: 'semiotica', rotulo: 'Semiótica', titulo: 'Semiótica — 4º semestre' },
```

`rotulo` aparece no botão de filtro; `titulo`, no cabeçalho do grupo.
A ordem do array define a ordem das seções na página.

## Como atualizar o horário

Edite `SEMESTRE`, `AULAS` e `LEGENDA` no topo de `assets/js/horarios.js`.
A sala informada ali é a que todos os alunos veem — basta trocar
`'a definir'` pela sala real.

Para uma disciplina nova, adicione uma classe de cor em
`assets/css/horarios.css` (seção “Cores das disciplinas”) e use o nome dessa
classe no campo `tipo` da aula.

## Notas técnicas

- Site estático, sem dependências e sem build. Basta abrir os arquivos no
  navegador ou publicar via GitHub Pages.
- As duas páginas compartilham `base.css`; só o que é específico da grade
  fica em `horarios.css`.
- A grade vira uma agenda vertical por dia em telas de até 760px, sem
  rolagem horizontal.
- `Ctrl/Cmd + P` na página de horários imprime a grade em paisagem, sem
  navegação nem rodapé.
