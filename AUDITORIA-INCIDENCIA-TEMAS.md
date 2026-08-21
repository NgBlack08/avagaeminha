# Auditoria: os pesos de incidência seguem mesmo as estatísticas da banca?

Pergunta que originou esta auditoria: *"verifique todas as provas policiais
da CEBRASPE nos últimos 6 anos, principalmente PC e PF, e verifique a
incidência dos temas — os parâmetros estabelecidos realmente seguem as
estatísticas de assuntos cobrados?"*

Resposta curta: **não seguem "as estatísticas" — seguem UMA prova.** E há
um motivo forte para NÃO fazer o agrupamento amplo que o pedido sugeria.

---

## 1. Toda a incidência de temas vem de um único caderno

Três estruturas do app afirmam "o que cai":

| Estrutura | Base | Volume |
|---|---|---|
| `INCIDENCIA_PCAL2021` | PC-AL 2021, Agente | 120 itens |
| `FREQUENCIA_TEMAS` | PC-AL 2021 | 9 disciplinas, 32 temas, 120 itens |
| `PREDICOES` | PC-AL 2021 | todo campo `base:` cita "caderno de 2021" |

São a mesma prova, contada três vezes. `FREQUENCIA_TEMAS` registra
`itens2021` e `onde: "77 a 83"` — números de item de um caderno só.

O arquivo `data-incidencia-real.js` é honesto sobre isso e diz, na própria
cabeçalho, que não é previsão de 2026. O problema não é o arquivo: é que
nada mais foi medido depois, e o resto do app trata esses números como
se fossem a distribuição da banca.

## 2. Este projeto já provou que uma prova só não basta

Não é hipótese. Aconteceu aqui, com o perfil de COMPRIMENTO.

Até agosto/2026 o alvo de comprimento vinha de um caderno (PC-AL 2021) e
dizia que 7,5% dos itens passavam de 300 caracteres. Cinco cadernos
policiais depois, o número real era **19,2%** — duas vezes e meia maior,
em três provas independentes (ver `scripts/validar.js`, PERFIL_REAL_2021).

Consequência registrada no próprio código: *"parte do 'excesso de itens
longos' que o validador vinha acusando no banco era o alvo que estava
errado, não o banco."*

O erro de n=1 já custou uma correção de rumo neste projeto. A incidência
de temas continua em n=1 e nunca passou pela mesma revisão.

## 3. O pedido precisa de um ajuste: PF e PC não são a mesma população

Aqui está a razão para NÃO juntar tudo. Comparando as duas carreiras:

| Disciplina | PC-AL 2021 (Agente) | PF (Agente) |
|---|---|---|
| Informática / TI | — | **36 itens** |
| Contabilidade | — | 20–24 |
| Língua Portuguesa | 20 | 18 |
| Direito Penal | **15** | **2** |
| Processo Penal | **15** | **2** |
| Direito Administrativo | 14 | 3 |
| Direito Constitucional | 12 | 3 |

A PF de Agente é uma prova de Informática e Contabilidade. A PC-AL de
Agente é uma prova de Direito. Direito Penal vale 15 itens numa e 2 na
outra — sete vezes e meia de diferença.

**Somar as duas para extrair "incidência de temas" produziria um número
que não descreve prova nenhuma.** Um agregado PF+PC diluiria Direito Penal
para algo em torno de 8 itens: quase o dobro do que a PF cobra e quase a
metade do que a PC-AL cobra.

Então o ajuste ao pedido é este:

- **Incidência de TEMA** só pode ser agregada entre provas comparáveis —
  Polícia Civil estadual, carreira de investigação (Agente/Escrivão).
  A PF entra como referência de contraste, não como dado de peso.
- **Perfil de FORMA** (comprimento, uso de termo absoluto, construção do
  item) pode e deve agregar amplamente, porque aí o que se mede é o estilo
  de redação da banca, que atravessa carreiras. É exatamente como o
  projeto já usa os 292 itens de PF 2014 + PC-SE.

Essa separação já existe implicitamente no código. Ela só nunca foi dita.

## 4. Evidência real que o projeto já tem e não usa

O banco contém itens de quatro provas reais:

| Prova | Itens no banco | Usada para incidência? |
|---|---|---|
| PC-DF 2021 | 47 | **não** |
| PC-AL 2021 | 46 | sim — é a única |
| PF 2025 | 30 | **não** |
| PC-PE 2024 | 8 | **não** |

PC-DF 2021 e PC-PE 2024 são exatamente a população comparável definida
acima — Polícia Civil estadual, mesma banca, dentro da janela de 6 anos.
São 55 itens já catalogados, com disciplina e assunto preenchidos, que
nunca entraram em `FREQUENCIA_TEMAS`.

## 5. Os pesos por disciplina não são medição — são rateio

`EDITAIS.PCAL.itensPorDisciplina` distribui pesos fracionários (12.7,
10.6, 9.6, 6.4...). Conferido: **P1 soma exatamente 50,0 e P2 exatamente
70,0**.

Isso revela o método: os totais de bloco vêm do edital (fato), e as
disciplinas recebem uma fatia conforme as faixas de prioridade S++/S+/S/A+
do Relatório Consolidado. O próprio comentário no código chama isso de
"leitura editorial do estudo".

É uma estimativa razoável e declarada — mas é rateio por juízo, não
frequência observada. E o app a consome como se fosse alvo estatístico:
o validador acusa "Direito Administrativo vale ~9.7 itens na prova mas é
só 4.0% do escopo da trilha", tratando 9.7 como fato medido.

## 6. O buraco maior: 27% da prova sem histórico algum

O edital de 2026 tem 15 disciplinas. `FREQUENCIA_TEMAS` cobre 9 — todas
de 2021. As outras seis não existiam na prova de 2021:

| Disciplina | Peso atribuído |
|---|---|
| Legislação Especial | 7,2 itens |
| Raciocínio Lógico-Matemático | 6,4 |
| Contabilidade e Análise Financeira | 4,8 |
| Estatística | 4,8 |
| Crimes Cibernéticos e Segurança Digital | 4,8 |
| Atualidades | 4,3 |
| **Total** | **32,3 de 120 itens — 26,9% da prova** |

Mais de um quarto da prova é ponderado sem nenhuma medição por trás. O
`data-incidencia-real.js` marca essas como `estreia: true` e se recusa a
arbitrar número, o que está certo. Mas `itensPorDisciplina` arbitra
assim mesmo, e é ele que alimenta o Plano de Estudo e o Radar.

---

## O que fazer, em ordem de retorno

**1. Medir PC-DF 2021 e PC-PE 2024 item a item.** É a correção de maior
impacto e a mais barata: são provas comparáveis, da janela certa, com 55
itens já no banco. Trocaria n=1 por n=3 na população que importa. Para
isso é preciso o caderno completo das duas, não só os itens catalogados.

**2. Separar no código o que é medido do que é rateado.** Hoje
`itensPorDisciplina` mistura fato do edital (50/70) com juízo editorial
(a fatia de cada disciplina) num número só. Um campo de procedência por
disciplina — `medido` × `rateado` × `estreia` — deixaria o Radar e o
validador dizerem "estimativa" onde é estimativa.

**3. Não agregar PF na incidência de tema.** Manter a PF onde ela já
serve bem: perfil de forma e contraste de carreira.

**4. Revisar `PREDICOES`.** Toda predição hoje se apoia em "caiu tanto em
2021". Com três provas, a base passa a ser "caiu em X de 3 provas", que é
afirmação de outra qualidade.

---

## Limites desta auditoria

Verificado por leitura direta do repositório e conferido por execução
(somas, contagens, cruzamentos): tudo nas seções 1, 4, 5 e 6.

A seção 3 usa números de distribuição da PF vindos de **fontes
secundárias** (portais de concurso), não de caderno oficial casado com
gabarito. A estrutura de blocos da PF 2025 (60 + 36 + 24) é bem
corroborada entre fontes; a quebra fina por disciplina é atribuída à
prova de 2021 e não foi conferida contra o caderno. O PDF oficial
retornou 403 na tentativa de leitura automática.

O que essa limitação NÃO afeta: a ordem de grandeza da diferença entre
PF e PC é grande demais (15 contra 2 itens de Direito Penal) para
depender da precisão da fonte. A conclusão de que são populações
distintas se sustenta mesmo com margem larga de erro.

O que ela afeta: qualquer uso desses números como alvo. Eles servem aqui
para justificar a SEPARAÇÃO, não para virar parâmetro.
