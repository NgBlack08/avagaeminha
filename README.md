# CEBRASPE Lab — Laboratório de Engenharia Reversa da Banca

Plataforma inteligente de preparação para concursos **CEBRASPE** de **carreiras policiais**, com prioridade absoluta para a **Polícia Civil de Alagoas (PCAL)**.

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
js/data.js          → camada de dados (questões, DNA, frequências, predições, estratégias)
js/engine.js        → motor: perfil, SRS, seleção adaptativa, filtros, detector, estatística
js/charts.js        → gráficos SVG nativos (barras, linhas, gauge, heatmap)
js/app.js           → telas/rotas da aplicação
```

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
