# QuestLab — Laboratório de Engenharia Reversa da Banca

Plataforma inteligente de preparação para concursos **CEBRASPE** de **carreiras policiais**.

## Como usar

Abra o arquivo **`index.html`** em qualquer navegador (duplo clique). Não precisa de instalação, servidor nem internet. Todo o seu progresso fica salvo localmente no navegador (localStorage).

## O que está implementado (mapeamento dos módulos)

| Módulo da especificação | Onde está |
|---|---|
| M1 — Banco Inteligente de Questões | Tela **Banco de Questões**: 43 questões C/E com concurso, cargo, disciplina, assunto, subassunto, dificuldade, gabarito, fonte; filtros combinados (inclusive "só as que errei") |
| M2 — Engenharia Reversa | Tela **Raio-X da Banca**: frequência de temas, evolução histórica, perfil de redação, heatmap padrão × disciplina |
| M3 — Engenharia Cognitiva | Em cada questão: painel "🧠 Engenharia cognitiva" com os 8 itens (motivo, o que mede, pegadinha, onde erra, palavra crítica, técnica, regra mental, reaparecimento) |
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
scripts/            → utilitários de build (cache-busting, geração de ícones)
```

## Como publicar uma versão

Depois de alterar qualquer arquivo de `js/`, `css/` ou `icons/`, rode:

```bash
node scripts/versionar.js
```

O script faz duas coisas:

1. **Regenera o banco dividido** (chama `scripts/dividir-dados.js`) — ver
   *Banco de questões* abaixo.
2. **Incrementa a versão** (`7.21` → `7.22`) e reescreve o `?v=` de cada asset em
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

**Ao criar um lote novo:** salve o arquivo em `js/`, acrescente o nome a
`scripts/lotes.json` (na ordem de carga) e rode `node scripts/versionar.js`. Se
esquecer do `lotes.json`, o build falha avisando — o lote não é ignorado em
silêncio. O diretório `js/gerado/` é versionado no git, porque o GitHub Pages
serve direto do repositório.

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
