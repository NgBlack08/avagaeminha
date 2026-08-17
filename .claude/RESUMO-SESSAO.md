# QuestLab — Estado atual (16/08/2026)

Site: `NgBlack08/avagaeminha` (GitHub Pages) + Supabase (`zxhzkucjiipsaumneccg`).
Vanilla JS, sem build. Prova PC-AL Agente/Escrivão em 2026-12-06.

**Último commit:** `2de7420` — versão 7.181, banco com 2573 questões.
**Push:** feito, nada pendente.

## O que mudou nesta sessão

1. **Lote 95** — Segurança da Informação (41 itens, TI-250 a TI-290), material do usuário + PDFs de apoio.
2. **Lote 96** — Direito Penal, Princípios (79 itens, DP-133 a DP-211). **Primeiro lote com múltipla escolha.**
3. **Feature nova: suporte a múltipla escolha no banco inteiro.**
   - `q.tipo`: `"CE"` (Certo/Errado, padrão) ou `"ME"` (múltipla escolha, com `q.alternativas`).
   - Helpers em `js/engine.js`: `formatoDaQuestao()`, `tokenBranco()`, `respostaEmBranco()`, `letrasDaQuestao()`, `rotuloResposta()`.
   - Branco em ME usa token `"-"` (não `"B"`, que é alternativa válida).
   - Seletor de formato nas 3 telas (Banco/Simulado/Prova), sempre inicia em C/E, só muda por ação do usuário.
   - Prova oficial fixada em C/E (replica o caderno real da CEBRASPE).
   - `scripts/validar.js` atualizado para validar `alternativas` e escopar estatísticas C/E corretamente.
4. **Lote 97** — RLM Estruturas Lógicas (84 itens, RL-066 a RL-149): 34 ME + 50 CE derivadas. Origem: banca diversa (FUNDATEC, IBFC etc.), não CEBRASPE — `probReaparecer` mais baixo (0.78).

## Convenções fixas (não perguntar de novo)
- **Todo texto para o usuário em pt-BR.**
- **Nunca dar `git push` sem pedido explícito.** Commitar é ok; sempre reportar se não deu push.
- Pipeline por lote: extrair PDF → escrever `js/data-*.js` → `node scripts/validar.js` → `node scripts/versionar.js` → verificar no browser preview → commit com mensagem detalhada em pt-BR.
- Nunca inventar estatística; medir e citar.
- Regra de conflito normativo: a lei mais recente prevalece.
- Extrator de PDF customizado em Node está no scratchpad da sessão anterior (não persiste — recriar se precisar extrair PDF novo: usar `pdfjs-dist` via npm, é mais confiável que parser manual).

## Pendências conhecidas (não bloqueantes)
- Amostra do plano gratuito (`js/plano-gratis.js`) não tem nenhum item ME — quem está no gratuito vê o filtro de múltipla escolha zerado. Decisão de produto, não resolvido.
- Atualidades: viés de regra cega +20pp (não resolvido).
- Direitos Humanos: banco menor que o peso no edital (~100 questões a menos que o proporcional).
- Usuário mencionou "ajustar todo o banco" para os dois formatos depois — ainda não iniciado; caminho sugerido é derivar ME a partir de C/E existentes por tema, não o inverso.

## Plano em espera (não confirmado se ainda quer)
`C:\Users\Jonathas Asus Rog\.claude\plans\twinkling-enchanting-snail.md` — "Refinamento de UI/UX do Dashboard" (gauge meta marker, hero card, diagnostic bars, etc). Não relacionado ao trabalho de lotes. Só retomar se o usuário pedir.
