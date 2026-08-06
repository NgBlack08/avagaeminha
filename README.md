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
css/styles.css      → design system (temas via CSS variables) + @font-face local
js/data*.js         → FONTE editável dos dados (questões, DNA, frequências, predições, estratégias)
js/gerado/          → o que o navegador carrega; produzido por scripts/dividir-dados.js
js/engine.js        → motor: perfil, SRS, seleção adaptativa, filtros, detector, estatística,
                      fila de escrita resiliente
js/charts.js        → gráficos SVG nativos (barras, linhas, gauge, heatmap)
js/app.js           → telas/rotas da aplicação
js/vendor/          → dependências de terceiros, em versão fixa (ver LEIA-ME.md de lá)
fonts/              → Inter variável, servida do próprio domínio (SIL OFL 1.1)
sw.js               → service worker: casca offline
scripts/            → build: validação do banco, testes, divisão leve/pesado, cache-busting, ícones
scripts/testes/     → suíte do motor (node --test, sem dependências)
```

**Zero requisições a terceiros no carregamento.** O cliente Supabase e a fonte
Inter eram baixados de CDN (jsDelivr e Google Fonts); hoje saem deste mesmo
repositório. Isso remove dois pontos únicos de falha fora do nosso controle,
elimina o risco de o código mudar sem commit (a URL do Supabase apontava para a
faixa flutuante `@2`) e evita mandar o IP de cada aluno para o Google.

**Funciona sem rede.** O `sw.js` guarda a casca do app e todo asset com
`?v=<hash>` — que é imutável por construção, então cache-first ali nunca serve
conteúdo errado. O `index.html` vai de rede primeiro, para que uma release nova
apareça assim que houver conexão. A API do Supabase **nunca** é cacheada:
guardar resposta de dados ou de autenticação criaria progresso fantasma e sessão
zumbi. Quem cuida de escrever sem rede é a fila de `js/engine.js`, que persiste
a resposta e a reenvia depois.

## Como publicar uma versão

Depois de alterar qualquer arquivo de `js/`, `css/` ou `icons/`, rode:

```bash
node scripts/versionar.js
```

O script faz quatro coisas, nesta ordem:

1. **Valida o banco** (`scripts/validar.js`). Se houver erro, aborta sem gerar
   nem publicar nada — ver *Validação* abaixo.
2. **Roda os testes do motor** (`scripts/testes/`). Se algum falhar, aborta —
   ver *Testes* abaixo.
3. **Regenera o banco dividido** (`scripts/dividir-dados.js`) — ver
   *Banco de questões* abaixo.
4. **Incrementa a versão** (`7.23` → `7.24`) e reescreve o `?v=` de cada asset em
   `index.html` e `manifest.json` com o **hash do conteúdo do próprio arquivo**.
   Nunca edite esses `?v=` à mão.

- `node scripts/versionar.js 8.0` — define a versão explicitamente.
- `node scripts/versionar.js --dry` — mostra o que mudaria, sem gravar.
- `node scripts/versionar.js --sem-testes` — saída de emergência; não use como rotina.

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

## Testes

```bash
npm test          # ou: node --test scripts/testes/*.test.js
```

Sem dependências: usa o runner nativo do Node (`node --test`). Rodam também
dentro do `versionar.js`, porque suíte que depende de alguém lembrar de rodar
apodrece.

O app é feito de scripts clássicos que conversam por variáveis globais — sem
módulos, sem bundler, por escolha. Isso costuma ser tratado como "não
testável", mas não é: `scripts/testes/harness.js` monta um `global` de mentira
(localStorage, navigator, timers e cliente Supabase falsos) e avalia os
arquivos dentro dele, do mesmo jeito que o `fontes.js` já fazia para validar o
banco. Cada teste recebe um app zerado.

Os relógios são falsos de propósito: teste que depende de espera real é lento e
intermitente. Quem decide que o tempo passou é o teste, chamando
`timers.rodar()`.

Cobertura, por ordem de risco:

| Arquivo | O que protege |
| --- | --- |
| `fila.test.js` | Fila de escrita: enfileirar offline, idempotência do reenvio, retry com espera crescente, descarte só de erro irrecuperável, isolamento por usuário |
| `estado.test.js` | Carga do estado local contra storage corrompido, e recuperação parcial |
| `srs.test.js` | Repetição espaçada: erro não devolve o item na hora, acerto antes do vencimento não promove |
| `edital.test.js` | Peso proporcional ao edital, escopo da trilha, gate de plano, aritmética do branco |

Não é cobertura por cobertura: cada arquivo existe por causa de um defeito que
de fato chegou a produção, ou de uma regra cuja quebra seria silenciosa. Os
testes de peso fixam a **propriedade** (proporcionalidade ao edital), não os
números mágicos, para não travar recalibração legítima.

**A camada de interface (`js/app.js`) não tem cobertura automatizada** — ela
manipula DOM direto e exigiria um DOM de mentira que hoje não existe aqui.
Continua sendo verificada no navegador.

## Validação do banco

```bash
node scripts/validar.js
```

Separa duas coisas diferentes:

**Erros** — quebram o build, porque são defeitos objetivos que só apareceriam
em produção, na frente do aluno: campo obrigatório ausente, gabarito fora de
`{C,E}`, dificuldade fora de `{1,2,3}`, `cargo` que não é array, `probReaparecer`
fora de `0..1`, ID repetido, enunciado idêntico a outro, `pegadinha` que não
existe em `DNA_BANCA` (slug órfão some da tela sem erro nenhum), enunciado que
cita parágrafo/texto externo sem `textoApoio`, e questão para a qual nenhuma
estratégia casa (o bloco pós-resposta ficaria vazio).

**Avisos** — não bloqueiam nada. Medem o quanto o banco ainda imita a banca de
verdade, que é o tipo de coisa que se degrada em silêncio, lote a lote, e não
aparece olhando uma questão por vez:

- **Padrão previsível**: padrão que cai no mesmo gabarito em ≥90% dos itens. É o
  sinal mais importante — quando isso acontece, o rótulo vira paráfrase do
  gabarito, e o bloco "Padrão da banca detectado" deixa de ensinar algo
  transferível. Zerado pelos lotes 55 e 58; o aviso existe para não voltar.
- **Resolução que ecoa o enunciado**: repetição lexical ≥85% sem citar fonte nem
  explicar o porquê — o candidato lê duas vezes a mesma frase. Repetir é legítimo
  quando vem com a fonte; sem ela, não ensina. `node scripts/validar.js
  --resolucoes` imprime a fila completa, da pior para a menos ruim, com enunciado
  e resolução lado a lado.
- **Viés de comprimento** entre enunciados CERTO e ERRADO — vira pista.
- **Equilíbrio C/E global** fora da faixa 45–55%.
- **Cobertura desalinhada**: disciplina que vale muitos itens no edital e tem
  banco raso (medido por `EDITAL_PCAL2026`, a mesma tabela que o Plano de Estudo
  usa para priorizar).

Comprimento da resolução **não** é critério: as mais curtas do banco são de RLM
e estão completas — uma conta de probabilidade não precisa de 250 caracteres.

### O que o validador não alcança

Nenhuma heurística de texto detecta "li tudo e continuo sem entender" — quatro
foram testadas e todas marcavam resolução boa demais para valer a pena. Quem
sabe é o leitor, então esse sinal vem dele: sob o comentário de cada questão há
um botão discreto, e o que ele grava vira fila no painel de Administração,
ordenada por gravidade (gabarito suspeito primeiro, depois fonte incorreta,
depois quantidade de alunos) — não por data.

Os motivos são uma lista fechada de quatro, com comentário livre opcional,
porque fila só serve se for contável: cinco alunos travados na mesma questão é
sinal; cinco textos soltos são leitura. Um aluno, uma questão, um feedback —
reenviar corrige o anterior. Marcar como resolvida não apaga o histórico, e se
alguém sinalizar de novo a questão volta para a fila, porque a reescrita
anterior não resolveu o problema dele.

Os avisos são intencionalmente não-bloqueantes: transcrição fiel da lei *deve*
mesmo ser CERTO, então "consertar" o desequilíbrio forçando o gabarito seria
pior que o problema. O caminho é escrever os itens que faltam — no caso da
`literalidade`, o item pseudo-literal: aparência de transcrição fiel com uma
única alteração cirúrgica.

## Segurança do banco de dados

Todo acesso a dados passa por **RPCs `SECURITY DEFINER`** que checam
`auth.uid()` e, quando é o caso, `is_admin` no próprio corpo da função. A UI
nunca é a única barreira: esconder o botão não protege nada, e uma conta comum
que chame `admin_listar_usuarios` direto pelo endpoint é recusada pelo Postgres.

**Nenhuma função é alcançável por usuário não autenticado.** O site inteiro
exige login, então `EXECUTE` foi revogado de `PUBLIC` e de `anon` em todas as
RPCs. Isso é defesa em profundidade — elas já checariam a identidade sozinhas —
mas reduz a superfície exposta em `/rest/v1/rpc/` e impede sondagem anônima.
Duas delas (`ranking_desafios`, `ranking_pontuadores_desafios`) chegavam a
devolver apelidos e pontuações para qualquer um com a chave pública.

A tabela `invites` tem **RLS ligada e nenhuma policy, de propósito**: isso nega
todo acesso direto pelo PostgREST, e o acesso legítimo passa pelas funções de
convite. O linter do Supabase sinaliza isso como `rls_enabled_no_policy`; é
esperado, e criar uma policy ali afrouxaria a segurança em vez de aumentá-la.
O motivo está registrado num `COMMENT ON TABLE`.

O linter também sinaliza `authenticated_security_definer_function_executable`
para as RPCs. Também é esperado: é exatamente o desenho descrito acima —
administrador é um usuário autenticado como outro qualquer, e quem decide se ele
é admin é o corpo da função, não a permissão de execução.

**Pendente, e só resolvível no painel do Supabase:** a proteção contra senhas
vazadas (checagem contra o HaveIBeenPwned) está desligada.
Authentication → Policies → *Leaked password protection*.

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
