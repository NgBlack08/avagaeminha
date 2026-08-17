# QuestLab — Estado atual (16/08/2026)

Site: `NgBlack08/avagaeminha` (GitHub Pages) + Supabase (`zxhzkucjiipsaumneccg`).
Vanilla JS, sem build. Prova PC-AL Agente/Escrivão em 2026-12-06.

**Último commit:** versão 7.183, banco com 2573 questões (2513 C/E + 60 ME).
**Push:** PENDENTE — a correção do "envio travado" está commitada localmente, mas não subiu.

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

5. **Incidente "Envio travado" — corrigido.** A múltipla escolha subiu sem que o
   banco soubesse: o CHECK de `respostas.resposta` no Supabase só aceitava
   `C/E/B`. Respostas `A`, `D` e o branco de ME (`-`) eram recusadas (23514),
   ficavam presas na FRENTE da fila e seguravam tudo atrás por 12 tentativas.
   - Migração `permitir_respostas_multipla_escolha` — CHECK agora aceita `A–E` e `-`.
   - `FILA_ERROS_PERMANENTES` (js/engine.js) ganhou `23514` — era a rede de
     proteção que deveria ter evitado o bloqueio da fila, e não tinha o código.
   - Teste de regressão em `scripts/testes/fila.test.js`.
   - **3 respostas foram perdidas de verdade** (esgotaram as 12 tentativas antes
     da correção), registradas em `eventos_cliente`. Não são recuperáveis.
6. **Dois consumidores que ainda assumiam C/E** (mesma família de causa):
   - `js/desafios.js` sorteava ME para duelos, que desenham só CERTO/ERRADO/Em
     branco — a questão chegava sem as alternativas. Risco medido: 21% dos
     duelos de 10 questões. Agora filtra `formato: "CE"`.
   - `js/app.js` `finalizarProvaConfirm()` contava respondidas com `!== "B"`,
     subnotificando quem marcava a alternativa B numa prova ME.

7. **Lote 98 — início da conversão do banco para múltipla escolha.** 5 itens
   (DP-212 a DP-216), Princípios penais, dificuldade 2–3, gabaritos C/A/E/B/D.
   Formato: 4 afirmativas I–IV vindas de itens C/E já existentes + 5 alternativas
   combinatórias (o formato do DP-133). Os originais C/E ficam no banco.

   **REGRA QUE NÃO PODE SER QUEBRADA NOS PRÓXIMOS LOTES.** O banco C/E foi
   escrito em PARES DELIBERADOS — o mesmo ponto tem um item verdadeiro e um
   falso (ex.: DP-160/DP-189, DP-169/DP-170, DP-178/DP-179, DP-185/DP-207).
   Pôr os dois lados de um par no mesmo item ME deixa o aluno deduzir por
   contradição, sem saber o conteúdo — é o vazamento de "regra cega" que o
   validador mede. **Nenhum campo marca esses pares** (`subassunto` e
   `palavraChave` são únicos por item: 35 itens = 35 valores distintos). Só
   dá para detectar LENDO as afirmativas. Por isso a conversão é manual,
   tema a tema — script não serve.

   Medição do potencial: 2.472 C/E, dos quais 1.563 elegíveis (sem contexto
   externo, ≤230 chars, dificuldade ≥2). Teto aritmético de 264 itens ME,
   mas o teto REAL é menor por causa da regra dos pares. Temas mais
   compatíveis, em ordem: Estatuto da PC-AL (13), Lógica proposicional (11),
   Estatuto do Desarmamento (8), Princípios penais (8 — 5 já feitos),
   Banco de dados (6), Constituição de Alagoas (6).

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
- **Lição do incidente do envio travado:** ao mexer no formato das questões, auditar
  TODO consumidor que assume C/E — o banco (CHECKs), a fila de escrita, e cada tela
  que desenha botões ou conta brancos. `grep -n '"B"' js/` é o primeiro lugar a olhar.
  Duelo e Modo Prova oficial são C/E de propósito, não por esquecimento.

## Plano em espera (não confirmado se ainda quer)
`C:\Users\Jonathas Asus Rog\.claude\plans\twinkling-enchanting-snail.md` — "Refinamento de UI/UX do Dashboard" (gauge meta marker, hero card, diagnostic bars, etc). Não relacionado ao trabalho de lotes. Só retomar se o usuário pedir.
