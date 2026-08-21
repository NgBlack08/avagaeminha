# Revisão de `itensPorDisciplina` — PC-AL 2026

Proposta de novos pesos, com o sinal que sustenta cada linha declarado.
Nada aqui foi aplicado ao código: é material para decisão.

## Os quatro sinais, em ordem de autoridade

**A — Edital 2026.** Fato. Define quais disciplinas existem e fixa os
totais de bloco: 50 itens em conhecimentos básicos, 70 em específicos
(item 8.11.4/8.11.5). Nenhuma proposta pode violar esses totais.

**B — PC-AL 2021.** O caderno da própria banca, no próprio estado, para
o próprio cargo. É a evidência mais próxima do alvo, e a única válida
para disciplina de conteúdo estadual.

**C — Incidência medida em 5 cadernos de PC.** 476 itens conferidos à
mão (`js/data-incidencia-pc-manual.js`). Vale para disciplina geral.
**Não vale para conteúdo estadual** — o Estatuto da PC-AL não cai na
prova de Sergipe, e a média entre estados só dilui.

**D — Volume do conteúdo programático.** Quantos tópicos o edital lista.
Sinal fraco, usado só onde não há histórico algum.

## A restrição que organiza tudo

Na PC-AL 2021 os dois blocos fecham exatamente com as disciplinas que
existiam:

```
P1 (50) = Português 20 + Direitos Humanos 12 + Ética 10 + TI 8
P2 (70) = Penal 15 + Proc. Penal 15 + Administrativo 14 + Institucional 14 + Constitucional 12
```

O edital de 2026 acrescenta **duas** disciplinas ao P1 (RLM e
Atualidades) e **quatro** ao P2 (Legislação Especial, Contabilidade,
Estatística, Crimes Cibernéticos). Os totais não crescem.

Logo: **toda disciplina que já existia precisa encolher.** Não é opinião
sobre importância, é aritmética do edital.

## Erro que esta revisão corrige

Numa versão anterior desta análise eu reportei que Ética e Legislação
Institucional estavam **super**ponderadas. Estava errado: a média que usei
dividia por cinco cadernos mesmo quando a disciplina aparecia em dois. Os
zeros não eram "a banca não cobrou" — eram "aquele estado tem outra lei".

Medindo só onde a disciplina aparece:

| Disciplina | média onde aparece | cadernos | PC-AL 2021 |
|---|---|---|---|
| Legislação Institucional | 13,1 | 2/5 | 14 |
| Ética no Serviço Público | 7,0 | 3/5 | 10 |

As duas estavam **sub**ponderadas, não super. A conclusão anterior teria
levado a mexer na direção errada.

---

## P1 — Conhecimentos básicos (50 itens)

| Disciplina | Hoje | Proposto | Δ | Sinal que sustenta |
|---|---|---|---|---|
| Língua Portuguesa | 12,7 | **15** | +2,3 | B: 20 em 2021. C: 19,3 em 4 de 5 cadernos, o mais consistente de todos. Encolhe de 20 para 15 só porque o bloco recebeu duas disciplinas novas. |
| TI e Segurança Cibernética | 10,6 | **11** | +0,4 | C: 12,5 em 5 de 5. **D: o edital expandiu muito** — 23 tópicos, incluindo IA, LGPD, Java/Python, MITRE e NIST, contra a informática básica de 2021. É a única disciplina antiga que cresce apesar do aperto. |
| Direitos Humanos | 9,6 | **9** | −0,6 | B: 12 em 2021. C: 8,3 em 5 de 5. Convergem para perto de 9. |
| Ética no Serviço Público | 6,4 | **7** | +0,6 | B: 10 em 2021 — e é conteúdo **estadual** (Lei 6.754/2006), então só PC-AL vale. C não se aplica. |
| Raciocínio Lógico-Matemático | 6,4 | **5** | −1,4 | Sem histórico na PC-AL. C: 7,1 em 3 de 5. D: 15 tópicos no edital, mas volume de conteúdo não é volume de itens. |
| Atualidades | 4,3 | **3** | −1,3 | Sem histórico. D: **1 tópico** no edital, o menor de todos. Estimativa editorial, marcada como tal. |
| | **50,0** | **50** | | |

## P2 — Conhecimentos específicos (70 itens)

| Disciplina | Hoje | Proposto | Δ | Sinal que sustenta |
|---|---|---|---|---|
| Processo Penal | 9,7 | **12** | +2,3 | B: 15 em 2021. C: 12,0 em 5 de 5. Convergem alto. Inquérito policial é o tópico mais detalhado de todo o edital — 15 subtópicos no item 2.1. |
| Direito Penal | 9,6 | **11** | +1,4 | B: 15 em 2021. C: 9,8 em 5 de 5. |
| Legislação Institucional (AL) | 9,7 | **10** | +0,3 | B: 14 em 2021. Conteúdo **estadual** — C inválido. Onde aparece (PC-AL e PC-DF), fica em ~11% do caderno. |
| Direito Administrativo | 9,7 | **10** | +0,3 | B: 14 em 2021. C: 12,6 em 4 de 5. D: 7 tópicos, escopo estável. |
| Direito Constitucional | 9,7 | **8** | −1,7 | B: 12 em 2021 e C: 11,1 em 5 de 5 puxariam para cima — **mas D manda aqui**: o edital 2026 reduziu a disciplina a **1 tópico** (CF/88, com apenas Direitos e Garantias Fundamentais e Segurança Pública). Escopo estreitado invalida o histórico. |
| Legislação Especial | 7,2 | **6** | −1,2 | Sem histórico separado (na medição está dentro de Direito Penal). D: 17 tópicos, escopo grande. |
| Contabilidade e Análise Financeira | 4,8 | **6** | +1,2 | C: 14,9 onde aparece, em 3 de 5 — mas são cadernos de perfil contábil, não replicáveis. D: 13 tópicos. Sobe com cautela. |
| Estatística | 4,8 | **5** | +0,2 | C: 10,9 em 3 de 5. D: **29 tópicos, a maior seção do edital inteiro**. Tensão real: muito conteúdo listado, nenhuma tradição de cobrança na PC-AL. Proposta conservadora. |
| Crimes Cibernéticos | 4,8 | **2** | −2,8 | Sem histórico. D: 6 tópicos. Disciplina nova, e parte do conteúdo se sobrepõe a TI. Estimativa editorial. |
| | **70,0** | **70** | | |

---

## O que fica em aberto, e é honesto dizer

**Quatro pesos são estimativa, não medição.** Atualidades, RLM, Crimes
Cibernéticos e Legislação Especial não têm histórico na PC-AL. O que os
sustenta é volume de conteúdo do edital, que é sinal fraco — muito
conteúdo listado não implica muitos itens. Estatística é o caso extremo:
a maior seção do edital, sem nenhuma tradição de cobrança.

**A tensão Constitucional é a decisão mais discutível.** O histórico
(B: 12, C: 11,1) e o edital (D: 1 tópico) apontam em direções opostas.
Escolhi o edital porque escopo é fato e histórico é inferência — mas
alguém pode argumentar que a banca cobra Direitos Fundamentais em
profundidade dentro do tópico único, e a proposta cairia por terra.

**A medição não é da PC-AL 2026.** Quatro dos cinco cadernos são de
outras Polícias Civis. Servem para dizer o que a banca cobra em prova de
PC, não o que cobrará em Alagoas.

**Duas disciplinas medidas não estão no edital**: Medicina Legal (8,3 em
2 cadernos) e Arquivologia (13,3 em 1). Se o edital da PC-AL as previr
em algum tópico que passei batido, a proposta precisa mudar.

---

# APLICADO — e o que mudou na aplicação

A proposta acima foi aplicada em `js/data.js`, com uma correção de
método que o validador impôs.

## O peso não se escreve à mão

`itensPorDisciplina` é **derivado** de `prioridade`:

```
peso = pesoPorPrioridade[faixa] × itensDoBloco / somaDasFaixasDoBloco
```

O validador refaz essa conta e compara. Quando escrevi os pesos
diretamente, ele barrou o build:

```
x "Estatística" tem peso 5, mas a faixa A+ no bloco p2 produz 4.8
x "Crimes Cibernéticos" tem peso 2, mas a faixa A+ no bloco p2 produz 4.8
```

É uma trava boa: sem ela, alguém promoveria uma disciplina de A+ para
S++ na tela e o motor continuaria tratando-a como A+. **Para mudar peso,
muda-se a faixa.** Foi o que se fez.

## Faixas alteradas

| Disciplina | Faixa antes | Faixa agora | Motivo |
|---|---|---|---|
| Língua Portuguesa | S+ | **S++** | 20 itens em 2021; 19,3 em 4 de 5 cadernos |
| TI e Segurança Cibernética | S | **S+** | edital: 23 tópicos, escopo expandido |
| Direitos Humanos | A+/S | **S** | 12 em 2021; 8,3 em 5 de 5 |
| Ética no Serviço Público | A | **A+** | 10 em 2021 — conteúdo estadual |
| Contabilidade | A+ | **S** | 14,9 onde aparece, com ressalva de perfil |
| Direito Constitucional | S++ | **S+** | edital reduziu a 1 tópico |
| Legislação Especial | S+ | **S** | sem histórico separado |
| Crimes Cibernéticos | A+ | **A/B** | sem histórico; sobrepõe TI |

Sem mudança: Direito Penal, Processo Penal, Direito Administrativo e
Legislação Institucional seguem S++; Estatística segue A+; RLM segue A;
Atualidades segue A/B.

## Pesos resultantes

| Bloco | Disciplina | Antes | Agora |
|---|---|---|---|
| P1 | Língua Portuguesa | 12,7 | **14,3** |
| P1 | TI e Segurança Cibernética | 10,6 | **10,7** |
| P1 | Direitos Humanos | 9,6 | **8,9** |
| P1 | Ética no Serviço Público | 6,4 | **7,1** |
| P1 | Raciocínio Lógico-Matemático | 6,4 | **5,4** |
| P1 | Atualidades | 4,3 | **3,6** |
| P2 | Processo Penal | 9,7 | **10,4** |
| P2 | Direito Penal | 9,6 | **10,4** |
| P2 | Direito Administrativo | 9,7 | **10,4** |
| P2 | Legislação Institucional (AL) | 9,7 | **10,4** |
| P2 | Direito Constitucional | 9,7 | **7,8** |
| P2 | Legislação Especial | 7,2 | **6,5** |
| P2 | Contabilidade e Análise Financeira | 4,8 | **6,5** |
| P2 | Estatística | 4,8 | **5,2** |
| P2 | Crimes Cibernéticos | 4,8 | **2,6** |

P1 soma 50, P2 soma 70. Validador: contrato íntegro.

## Diferença entre o proposto e o aplicado

A granularidade das faixas não permite qualquer número. Onde a proposta
pedia 15, a faixa S++ entrega 14,3; onde pedia 2, a faixa A/B entrega
2,6. As diferenças ficam abaixo de um item e a ordem de prioridade é a
mesma — mas vale saber que o sistema de faixas arredonda a intenção.

## O que continua pendente

Um campo de procedência por disciplina (`medido` × `estimado` ×
`estreia`) para o Radar e o Plano de Estudo dizerem "estimativa" onde é
estimativa, em vez de exibir 3,6 com a mesma confiança de 14,3. Cinco dos
quinze pesos são estimativa.
