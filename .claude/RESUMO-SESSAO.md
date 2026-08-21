# QuestLab — Estado atual (21/08/2026)

Site: `NgBlack08/avagaeminha` (GitHub Pages) + Supabase (`zxhzkucjiipsaumneccg`).
Vanilla JS, sem build. Prova PC-AL Agente/Escrivão em 2026-12-06.

**Último commit:** `264d403`, versão 7.196, banco com 2578 questões (2513 C/E + 65 ME).
**Push:** feito e confirmado no ar (Pages publicou `264d403` com sucesso; `version.json` do site bate com o do repo). Nada pendente.

## O que mudou nesta sessão (a mais longa até agora: correção crítica → conversão ME → desempenho → auditoria de incidência → pesos)

1. **Corrigido "Envio travado"** — CHECK do Supabase só aceitava C/E/B; respostas ME
   ficavam presas na fila e travavam tudo atrás. Ver commits `b0e25fe`, `f59fdb4`.
2. **Lote 98** — início da conversão do banco para ME (5 itens, Princípios penais).
   **Regra fixada:** o banco C/E tem pares deliberados (verdadeiro/falso do mesmo
   ponto); juntar os dois num item ME vaza a resposta por contradição. Nenhum campo
   marca os pares — só dá para detectar lendo. Conversão é manual, não por script.
3. **Desempenho** (`caa6350`) — escopo e regex do detector memoizados, render 4x
   mais rápido (Raio-X: 192ms → 17ms).
4. **Auditoria de incidência de temas — o grosso da sessão.** Ver seção própria abaixo.
5. **Campo de procedência por disciplina** (`264d403`) — cada peso agora diz se foi
   `medido`, decidido `edital`, por `analogia` ou `estimado`. Selo visível no Raio-X
   só onde NÃO foi medido (7 de 15 disciplinas são medidas; 8 não).

## Auditoria de incidência — resumo da investigação (não repetir o processo)

**Pergunta original do usuário:** os pesos do app (`itensPorDisciplina`) seguem
estatística real da banca, ou são chute? Resposta: eram rateio editorial por
faixa de prioridade, nunca conferido contra prova.

**Tentativa 1 — classificador automático por regex** sobre comandos "julgue os
itens" extraídos de PDFs de 5 cadernos de PC (PC-DF, PC-SE, PC-PE). **Reprovado**
na calibração: rodado contra a PC-AL 2021 (única prova com contagem manual
preexistente, 120/120 conferida), errou Direitos Humanos por −12 e Ética por +11.
Causa: padrão de "ética" era largo demais e vinha cedo na lista, sequestrando
blocos inteiros. Corrigido (v2: ordem específico→geral, herança do comando
seguinte) e recalibrado a 0% de erro — **mas esse 0% não generaliza**: removendo
as frases copiadas da própria prova de calibração, o erro sobe para 20%. Testado
contra PC-SE Escrivão (fora da amostra): errou 62 de 90 itens (69%). Testado
contra PC-PE 2023 (que é ME, não C/E): 45% das questões sem classificar.
**Conclusão: script não é confiável para isto. Não retomar essa linha.**

**Tentativa 2 — leitura manual, bloco por bloco.** Funcionou. 5 cadernos lidos à
mão (PC-AL 2021 já existia; PC-DF Agente/Escrivão e PC-SE Agente/Escrivão feitos
nesta sessão), 476 itens no total, cada soma conferida contra o número de itens
capturados. Resultado em `js/data-incidencia-pc-manual.js`.

**Achados que já eram esperados:**
- Processo Penal, TI, Direito Constitucional, Direito Penal, Direitos Humanos
  aparecem nos 5 cadernos — confirma peso alto.

**Achados que corrigiram o app:**
- Ética e Legislação Institucional são conteúdo **estadual** — só a PC-AL 2021
  serve de evidência para elas (a média entre estados dilui, porque cada estado
  tem outra lei). As duas estavam subponderadas.
- TI e Segurança Cibernética: o histórico de 2021 (8 itens) está desatualizado —
  o edital 2026 expandiu a disciplina para 23 tópicos (IA, LGPD, Python, MITRE,
  NIST). Decisão: edital vence histórico aqui.
- Direito Constitucional: o edital 2026 reduziu a disciplina a **1 tópico**
  (CF/88 — Direitos e Garantias + Segurança Pública), contra 12 itens no
  histórico de 2021. Decisão: edital vence histórico aqui também — é a aposta
  mais discutível da revisão, reverter se sair evidência nova.
- **Duas disciplinas apareceram na medição e não existem no banco/edital
  carregado:** Medicina Legal (12 itens em 2 cadernos) e Arquivologia (10 em 1).
  Não resolvido — conferir se o edital PC-AL 2026 as prevê em algum tópico.

**Pesos aplicados** (`js/data.js`, `EDITAIS.PCAL.prioridade` +
`itensPorDisciplina`, deriva automaticamente — não escrever peso à mão, o
validador recalcula e barra o build se divergir):

| Disciplina | Procedência | Peso |
|---|---|---|
| Língua Portuguesa | medido | 14,3 |
| TI e Segurança Cibernética | edital | 10,7 |
| Direitos Humanos | medido | 8,9 |
| Ética no Serviço Público | medido | 7,1 |
| Raciocínio Lógico-Matemático | analogia | 5,4 |
| Atualidades | estimado | 3,6 |
| Processo Penal | medido | 10,4 |
| Direito Penal | medido | 10,4 |
| Direito Administrativo | medido | 10,4 |
| Legislação Institucional (AL) | medido | 10,4 |
| Direito Constitucional | edital | 7,8 |
| Legislação Especial | estimado | 6,5 |
| Contabilidade | analogia | 6,5 |
| Estatística | analogia | 5,2 |
| Crimes Cibernéticos | estimado | 2,6 |

Documentos de referência (não apagar): `AUDITORIA-INCIDENCIA-TEMAS.md` (diagnóstico
inicial), `REVISAO-PESOS-2026.md` (proposta + aplicação real), `js/data-incidencia-pc-manual.js`
(dado bruto dos 5 cadernos, comentado com o método).

**Conferência posterior da própria revisão** (o usuário pediu para verificar se
tendências e incidências tinham sido ajustadas corretamente — e não tinham, de
todo). Três defeitos achados e corrigidos:
1. RLM e Estatística estavam com selo `estimado` ("sem medição") tendo 18 e 20
   itens contados em 3 cadernos cada — mesma situação de Contabilidade, que
   estava como `analogia`. Viraram `analogia`. Os pesos NÃO mudaram: a faixa é
   grossa (unidade de 2,6 no bloco P2) e 5,2 já é o valor mais próximo do
   medido 5,4 que a grade consegue expressar; mexer na faixa deslocaria todo o
   bloco para perseguir 0,2.
2. `INCIDENCIA_PC_MANUAL` viajava no bundle sem consumidor e sem validador —
   não estava em `GLOBAIS_PUBLICAS`. Registrada, e agora `scripts/validar.js`
   confere a aritmética dos 5 cadernos e refaz o `agregado` a partir deles.
3. O parágrafo de leitura do Raio-X dizia "20 itens para peso 12,7" com a
   tabela logo acima dizendo 14,3 — número em prosa que a revisão de pesos
   deixou para trás. Passou a ser derivado da mesma fonte da tabela.

A invariante nova em `validar.js` confronta cada selo contra a medição
(`medido`/`edital` exigem presença no caderno da PC-AL; `analogia` exige
presença fora dela e ausência nela; `estimado` exige ausência em todos).
As quatro regras foram testadas por sabotagem.

**O que continua NÃO ajustado, e é intencional:** a incidência por TEMA
(`FREQUENCIA_TEMAS`, o que marca um tema como alta incidência na tela) segue
100% derivada dos 120 itens da PC-AL 2021. A medição dos 476 itens é em nível
de DISCIPLINA. Tema cobrado em Sergipe não transfere para Alagoas, então subir
os 5 cadernos ao nível de tema exigiria decidir equivalência de tema entre
editais estaduais — não foi feito.

## Convenções fixas (não perguntar de novo)
- **Todo texto para o usuário em pt-BR.**
- **Nunca dar `git push` sem pedido explícito.** Commitar é ok; sempre reportar se não deu push.
- Pipeline por lote: extrair PDF → escrever `js/data-*.js` → `node scripts/validar.js` → `node scripts/versionar.js` → verificar no browser preview → commit detalhado em pt-BR.
- Nunca inventar estatística; medir e citar. Se não dá pra medir, marcar como estimativa (ver campo `procedenciaPeso`).
- Regra de conflito normativo: a lei mais recente prevalece.
- **Fins de linha:** editar `js/engine.js` ou `js/data.js` pode deixar CRLF misto (autocrlf não normaliza arquivo misto). Sempre checar `git diff --stat` antes de commitar — se um arquivo mostrar milhares de linhas alteradas por uma edição pequena, rodar normalização LF manual antes do `git add`.
- **Extração de PDF:** usar `pdfjs-dist` via npm no scratchpad (não persiste entre sessões, recriar se precisar). Cadernos CEBRASPE vêm em 2 colunas e às vezes com páginas fora de ordem ou sem camada de texto (imagem) — sempre verificar taxa de captura antes de confiar num número.
- **Classificação automática de tema por regex sobre comando da banca: não confiável.** Ver "Auditoria de incidência" acima. Se precisar de mais cadernos, ler à mão.

## Pendências conhecidas (não bloqueantes)
- Medicina Legal, Arquivologia e Conhecimentos regionais apareceram na medição de incidência e não estão no edital carregado — conferir edital PC-AL 2026. O validador agora emite aviso com os três a cada rodada, para não sumirem de vista.
- Amostra do plano gratuito (`js/plano-gratis.js`) não tem nenhum item ME.
- Lote 98 (conversão ME) parado em 5 itens. Fila sugerida por potencial: Estatuto da PC-AL (13), Lógica proposicional (11), Estatuto do Desarmamento (8), Banco de dados (6), Constituição de Alagoas (6). PC-PE 2023 confirma que a CEBRASPE usa ME em prova de PC, no mesmo formato I/II/III adotado no lote 98.
- Direito Constitucional a 7,8 (peso baixo) é a decisão mais discutível da revisão de pesos — reverter se a prova de 2026 contrariar.
- Falta o mesmo tratamento de procedência para a trilha SESAUAL_FISIO (hoje sem `prioridade`/`procedenciaPeso`, `procedenciaDoPeso()` retorna `null` para ela sem quebrar).

## Plano em espera (não confirmado se ainda quer)
`C:\Users\Jonathas Asus Rog\.claude\plans\twinkling-enchanting-snail.md` — "Refinamento de UI/UX do Dashboard". Não relacionado ao trabalho desta sessão. Só retomar se o usuário pedir.
