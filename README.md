# QuestLab — Laboratório de Engenharia Reversa da Banca

Plataforma inteligente de preparação para concursos **CEBRASPE** de **carreiras policiais**.

## Como usar

Abra o arquivo **`index.html`** em qualquer navegador (duplo clique). Não precisa de instalação, servidor nem internet. Todo o seu progresso fica salvo localmente no navegador (localStorage).

## O que está implementado (mapeamento dos módulos)

| Módulo da especificação | Onde está |
|---|---|
| M1 — Banco Inteligente de Questões | Tela **Banco de Questões**: 43 questões C/E com concurso, cargo, disciplina, assunto, subassunto, dificuldade, gabarito, fonte; filtros combinados (inclusive "só as que errei") |
| M2 — Engenharia Reversa | Tela **Raio-X da Banca**: frequência de temas, evolução histórica, perfil de redação, heatmap padrão × disciplina |
| M3 — Engenharia Cognitiva | Em cada questão respondida: painel "🎯 Como não cair nessa de novo" — por que a questão existe, a palavra que muda tudo e as **estratégias da banca** que neutralizam aquele padrão (casadas por `pegadinha` ↔ `contraDNA`), com passos e limites de cada técnica |
| M4 — Perfil da Banca (DNA) | **Raio-X**: 10 padrões com índice de incidência e gatilho mental |
| M5 — Detector de Pegadinhas | Tela **Detector**: glossário de 21 palavras-perigosas + laboratório para colar qualquer enunciado; destaque automático nas questões |
| M6 — IA Explicadora | Comentário completo por questão: resolução, fundamento legal, jurisprudência, macete, erro comum, como a banca pensa, tempo ideal |
| M7 — Simulador Inteligente | **Simulado Adaptativo**: seleção ponderada por pontos fracos + repetição espaçada (intervalos 1/3/7/15/30/60 dias) + correção 1 líquida |
| M8 — Perfil do Estudante | **Meu Perfil**: evolução diária, fortes×fracas, tempo médio, confiança calibrada, histórico de simulados |
| M9 — Predição de Cobrança | **Predição**: ranking de temas + radar de novidades legislativas/jurisprudenciais (sempre marcado como estimativa) |
| M10 — Estratégias | **Estratégias**: 12 técnicas com link para questão-exemplo do banco |
| M11 — Geradora de Questões | O banco inicial é 100% composto de questões inéditas geradas em estilo CEBRASPE, com metadados completos |
| M12 — Radar de Aprovação | **Dashboard**: índice de preparo (gauge), domina/melhorar/risco, estimativa de horas restantes |
| M13 — Inteligência Estatística | `js/engine.js`: heurísticas locais (peso adaptativo, SRS, calibração de confiança, estatística por padrão) |
| M14 — Interface | Tema claro/escuro, responsiva (menu mobile), dashboards, heatmap, timeline, busca |
| M15 — Tecnologias | Versão atual: HTML/CSS/JS puro (roda offline). Roadmap abaixo para a stack completa |

## Arquitetura

```
index.html          → shell da SPA
css/styles.css      → design system (temas via CSS variables)
js/data*.js         → FONTE editável dos dados (questões, DNA, frequências, predições, estratégias)
js/gerado/          → o que o navegador carrega; produzido por scripts/dividir-dados.js
js/engine.js        → motor: perfil, SRS, seleção adaptativa, filtros, detector, estatística
js/charts.js        → gráficos SVG nativos (barras, linhas, gauge, heatmap)
js/app.js           → telas/rotas da aplicação
scripts/            → build: validação do banco, divisão leve/pesado, cache-busting, ícones
```

## Como publicar uma versão

Depois de alterar qualquer arquivo de `js/`, `css/` ou `icons/`, rode:

```bash
node scripts/versionar.js
```

O script faz três coisas, nesta ordem:

1. **Valida o banco** (`scripts/validar.js`). Se houver erro, aborta sem gerar
   nem publicar nada — ver *Validação* abaixo.
2. **Regenera o banco dividido** (`scripts/dividir-dados.js`) — ver
   *Banco de questões* abaixo.
3. **Incrementa a versão** (`7.23` → `7.24`) e reescreve o `?v=` de cada asset em
   `index.html` e `manifest.json` com o **hash do conteúdo do próprio arquivo**.
   Nunca edite esses `?v=` à mão.

- `node scripts/versionar.js 8.0` — define a versão explicitamente.
- `node scripts/versionar.js --dry` — mostra o que mudaria, sem gravar.

Por que hash em vez da versão da aplicação: com um `?v=` único para tudo, corrigir
uma linha do CSS obrigava cada usuário a rebaixar os ~478 KB (gzip) do banco de
questões. Com hash por arquivo, só a URL de quem realmente mudou é invalidada.

A versão da aplicação continua em `version.json` e em `APP_VERSION` (`index.html`),
mas agora serve só ao *check* que força recarregamento quando há release nova.

## Banco de questões: fonte × gerado

Os arquivos **`js/data*.js` são a fonte editável** — é neles que se escreve uma
questão nova. Eles **não são mais carregados pelo navegador**: `scripts/dividir-dados.js`
os lê e gera `js/gerado/`, que é o que o `index.html` serve.

```
js/data*.js  (fonte, 55 arquivos)
      ↓ scripts/dividir-dados.js
js/gerado/dados-base.js       → globais + questões SEM comentario/cognitivo
js/gerado/detalhes-<disc>.js  → comentario/cognitivo, um por disciplina
```

Motivo: `comentario` e `cognitivo` são 71% do banco e só aparecem **depois** que o
usuário responde. Carregá-los no boot custava caro mesmo com o cache quente,
porque cache evita o *download*, não o *parse* — eram 2,25 MB de JS reinterpretados
a cada visita. Hoje o boot carrega 0,96 MB e os detalhes entram sob demanda, por
disciplina (`carregarDetalhes()` em `js/engine.js`).

**Ao criar um lote novo:** salve o arquivo em `js/` e rode `node scripts/versionar.js`.
Só isso — o build detecta o arquivo, registra em `scripts/lotes.json` e o inclui.
Apagar um lote também se resolve sozinho. Esse manifesto é mantido pelo script;
não precisa ser editado à mão.

A única restrição de ordem é o `data.js` vir primeiro, porque é ele que declara
`QUESTOES`; os demais apenas dão `push` e não dependem uns dos outros.

O diretório `js/gerado/` **é versionado no git**, porque o GitHub Pages serve
direto do repositório.

## Validação do banco

```bash
node scripts/validar.js
```

Separa duas coisas diferentes:

**Erros** — quebram o build, porque são defeitos objetivos que só apareceriam
em produção, na frente do aluno: campo obrigatório ausente, gabarito fora de
`{C,E}`, dificuldade fora de `{1,2,3}`, `cargo` que não é array, `probReaparecer`
fora de `0..1`, ID repetido, enunciado idêntico a outro, e `pegadinha` que não
existe em `DNA_BANCA` (slug órfão some da tela sem erro nenhum).

**Avisos** — não bloqueiam nada. Medem o quanto o banco ainda imita a banca de
verdade, que é o tipo de coisa que se degrada em silêncio, lote a lote, e não
aparece olhando uma questão por vez:

- **Padrão previsível**: padrão que cai no mesmo gabarito em ≥90% dos itens. É o
  sinal mais importante — quando isso acontece, o rótulo vira paráfrase do
  gabarito, e o bloco "Padrão da banca detectado" deixa de ensinar algo
  transferível. Hoje 7 padrões estão nessa faixa (`literalidade` em 95,9% CERTO,
  `generalizacao` em 100% ERRADO).
- **Viés de comprimento** entre enunciados CERTO e ERRADO — vira pista.
- **Equilíbrio C/E global** fora da faixa 45–55%.
- **Cobertura desalinhada**: disciplina com peso alto na Predição de Cobrança e
  banco raso.
- **Disciplina sem entrada em `PREDICOES`**, que o Plano de Estudo acaba
  priorizando pelo peso padrão.

Os avisos são intencionalmente não-bloqueantes: transcrição fiel da lei *deve*
mesmo ser CERTO, então "consertar" o desequilíbrio forçando o gabarito seria
pior que o problema. O caminho é escrever os itens que faltam — no caso da
`literalidade`, o item pseudo-literal: aparência de transcrição fiel com uma
única alteração cirúrgica.

## Integridade pedagógica

- As questões do banco são **inéditas**, geradas no estilo da banca — não são reproduções de provas oficiais. Cada uma indica o padrão que imita (ex.: "estilo PCAL").
- Comentários fundamentados em **legislação vigente** (CP, CPP, CF, leis especiais) e **jurisprudência consolidada** (STF/STJ), citando dispositivo e julgado.
- Toda probabilidade exibida é **estimativa estatística**, sinalizada como tal na interface — nunca garantia de prova.

## Roadmap para a stack completa (especificação original)

1. **Backend**: NestJS + PostgreSQL + Prisma — migrar `js/data.js` para tabelas (`questoes`, `respostas`, `padroes`, `predicoes`); a modelagem já está pronta no formato dos objetos JS.
2. **IA generativa**: OpenAI/Claude API para gerar novas questões no estilo (o schema de questão com `cognitivo` e `comentario` já é o contrato de saída ideal para o prompt).
3. **RAG**: pgvector/Qdrant com embeddings dos enunciados para busca semântica e detecção de questões similares.
4. **Importação de provas oficiais**: parser de PDFs do CEBRASPE para popular o banco com questões reais e recalcular as frequências com dados exatos.
5. **Frontend**: portar as telas para Next.js + Tailwind + Shadcn/UI (a estrutura de views/rotas atual mapeia 1:1 para páginas Next).
6. **Infra**: Docker Compose (web + api + db + redis), GitHub Actions, Vercel/Railway.
