# Auditoria do método contra provas reais da CEBRASPE

Teste das premissas do `DNA_BANCA` e do radar lexical contra **provas
aplicadas com gabarito oficial**. Até aqui os padrões vinham de leitura
qualitativa e eram medidos apenas no nosso próprio acervo — o que media o
nosso estilo de redação, não o da banca.

## Corpus — 372 itens rotulados, 257 de carreira policial

| prova | cargo | tipo | itens |
|---|---|---|---|
| PC-DF 2021 | Agente de Polícia | policial | 61 |
| PC-SE 2021 | Agente de Polícia Judiciária | policial | 89 |
| PF 2025 | **Agente de Polícia Federal** | policial | 107 |
| PF 2025 | Administrador | administrativo | 115 |

Gabaritos oficiais definitivos, parseados do PDF do Cebraspe com zero
lacunas em todas as matrizes. Itens anulados excluídos. Intervalos de
confiança de 95% (Wilson) em todas as porcentagens.

O caderno administrativo é mantido como grupo de contraste: o objeto da
análise é a **forma** do item C/E, que é da banca e não do cargo, e ter os
dois recortes permite testar se algum padrão é específico de carreira
policial. Nenhum se mostrou.

### Armadilhas de extração que valeram metade da amostra

- No caderno do PC-SE, os **específicos (31–100) aparecem antes dos gerais
  (1–30)** no texto extraído. Varredura só para frente perdia dois terços.
- `Item 21 22` traz **dois números na mesma linha**, desalinhando cada
  bloco do gabarito.
- No gabarito do PF policial, o cabeçalho `0 GABARITOS OFICIAIS
  DEFINITIVOS` cai **no meio de um bloco**, e os números voltam depois dele
  sem um novo `Item`. Sem tratar isso, a matriz do Agente rendia 6 dos 24
  itens.
- O PDF comentado do PC-DF traz **apenas 64 itens com justificativa**, não
  os 120 do caderno: ali o teto é do material.

---

## Premissa 1 — "a banca fica perto de 50/50" · inclinação leve para ERRADO

| | ERRADO | IC 95% |
|---|---|---|
| **todas as provas (n=372)** | **53,2%** | [48–58] |
| **só carreiras policiais (n=257)** | **54,1%** | [48–60] |
| · PC-DF 2021 (n=61) | 57,4% | [45–69] |
| · PC-SE 2021 (n=89) | 52,8% | [43–63] |
| · PF 2025 Agente (n=107) | 53,3% | [44–62] |
| · PF 2025 Administrador (n=115) | 51,3% | [42–60] |
| nosso banco (n=1.863) | 48,0% | [46–50] |

As **quatro** provas apontam na mesma direção, com dispersão pequena
(51,3 a 57,4). O nosso banco aponta na oposta. É o achado mais estável de
toda a auditoria.

## Premissa 2 — "item longo tende a CERTO" · **REFUTADA**

Carreiras policiais, n=257:

| faixa | ERRADO real | IC 95% | ERRADO nosso |
|---|---|---|---|
| até 120 | 52,4% (n=42) | [38–67] | 59% |
| 120–180 | 60,3% (n=73) | [49–71] | 60% |
| 180–250 | 53,3% (n=60) | [41–65] | 44% |
| 250–350 | 42,2% (n=45) | [29–57] | 35% |
| 350+ | 59,5% (n=37) | [43–74] | 37% |

A série **oscila** — sobe, desce, sobe. Não há tendência, monotônica ou
invertida: há ruído em torno da taxa-base, com todos os intervalos se
sobrepondo.

O chutador cego, que decide só por forma, fecha a conta:

```
ganho sobre o chute da classe majoritária
  todas as provas ......... −1,1 pp
  só carreiras policiais .. −0,8 pp
  nosso banco ............. +8,4 pp
```

**Na prova real o heurístico de comprimento não entrega nada** — fica em
torno de zero, ligeiramente negativo. E vale +8,4pp aqui dentro. O banco
vinha treinando, com reforço positivo, um reflexo que a prova não paga.

> **Correção de uma afirmação anterior.** Na rodada com 265 itens eu
> reportei que o heurístico era *pior* nas carreiras policiais (−3,3pp).
> Aquele número vinha de um caderno do PF que era do cargo Administrador,
> não de Agente. Com a prova policial correta, o valor é −0,8pp. A
> conclusão de fundo não muda (o heurístico não serve), mas a magnitude
> que eu havia destacado era artefato de amostra errada.

## Premissa 3 — "termo absoluto tende a ERRADO" · **refutada**

Carreiras policiais:

| | ERRADO | IC 95% |
|---|---|---|
| com termo absoluto (n=36) | 55,6% | [40–70] |
| sem termo absoluto (n=221) | 53,8% | [47–60] |

Diferença de **1,8pp** contra uma taxa-base de 54,1%. Não é sinal fraco: é
ausência de sinal. E os termos absolutos aparecem em apenas **14% dos itens
reais** — a caça que ocupa o centro do `DNA_BANCA` e de todo cursinho tem
alvo em um sétimo da prova e, nesse sétimo, não discrimina nada.

## Premissa 4 — "cada marcador tem confiabilidade própria" · refutada

Só três marcadores atingem n≥15 em 257 itens policiais:

| marcador | ERRADO (real) | IC 95% | nosso banco |
|---|---|---|---|
| não | 42,9% (n=49) | [30–57] | 44% |
| deve | 50,0% (n=16) | [28–72] | 53% |
| pode | 50,0% (n=18) | [29–71] | 41% |

Taxa-base 54,1%. Todos os intervalos a contêm.

### A demonstração mais limpa de ausência de sinal

A estimativa de `não`, medida três vezes conforme a amostra crescia:

```
n=130 ....... 59,5% ERRADO
n=265 ....... 48,1%
n=372 ....... 42,9%
```

Ela atravessou a taxa-base e seguiu descendo. É exatamente o passeio
aleatório de uma variável sem poder preditivo — e é a razão pela qual não
se deve construir técnica sobre marcador medido em amostra pequena. Foi o
erro que cometi ao coroar `exclusivamente` com 80% de confiabilidade
medindo só o nosso acervo; esse termo aparece **zero vezes** em 492 itens
reais.

---

## Veredito

**Nenhuma heurística de superfície sobrevive ao contato com prova real.**
Comprimento não entrega nada. Termos absolutos cobrem 14% da prova e não
discriminam. Marcadores lexicais não separam. O que resta é uma inclinação
suave para ERRADO — 53,2% no total, 54,1% nas policiais — consistente nas
quatro provas.

Três consequências, em ordem de importância:

1. **O banco precisa parar de ensinar o atalho que ele mesmo criou.** Os
   8,4pp de vazamento não são defeito estético: são reflexo falso treinado
   com reforço positivo, que na prova real não paga nada.

2. **O radar lexical é localizador, não preditor.** Ele dirige a leitura
   para a restrição, a condicionante, o quantificador, e isso continua
   útil. Ele não diz, e nunca disse, o que responder.

3. **A única técnica de forma com validade demonstrada é a aritmética do
   branco**, que não depende de padrão nenhum da banca: com erro anulando
   acerto, arriscar só compensa acima de 50% de chance real.

O caminho para o índice de acertos é conteúdo. Não há atalho de forma — e
qualquer material que prometa um está vendendo o que não mediu.

---

## O que mudou no projeto

- `scripts/validar.js`: limiar da regra cega ancorado na referência real
  (−1,1pp), com o recorte policial (−0,8pp) documentado.
- Perfil de comprimento da prova real registrado como alvo por faixa.
- Radar lexical rebaixado a localizador, com o resultado da auditoria
  aberto no topo do card.

## Pendências

- **Corrigir o vazamento de 8,4pp** exige reescrever itens nas três
  disciplinas mais afetadas (Atualidades, Direito Administrativo, RLM),
  aproximando a distribuição de comprimento da real. Trabalho de lote.
- ~~**Aproximar a taxa-base.** Nosso banco está em 48% ERRADO contra 53–54%
  das quatro provas.~~ **SUPERADO — ver a revisão de agosto/2026 abaixo.**
  A recomendação estava errada: o alvo de 53–54% era artefato da amostra
  pequena, e persegui-lo teria afastado o banco do valor real.

## Revisão de agosto/2026 — 2.474 itens, 36 cadernos

Um compilado de provas de carreiras policiais permitiu refazer a medição
da taxa-base com corpus **6,6 vezes maior** que o de 2021. Gabaritos
oficiais definitivos, parseados das tabelas do próprio caderno; itens
anulados (72) excluídos.

| medida | auditoria 2021 | revisão 2026 |
|---|---|---|
| itens | 372 | **2.474** |
| cadernos | 4 | **36** |
| taxa de ERRADO | 54,1% | **49,2%** |
| IC 95% | — | **47,3% a 51,2%** |

O valor de 2021 caiu **fora** do intervalo de confiança do corpus maior.
A explicação é amostragem: entre os 36 cadernos, o percentual de CERTO
vai de 44,8% a 56,1%, com mediana de 50,0%. As quatro provas de 2021
calharam de estar no lado alto dessa faixa, e quatro cadernos não bastam
para separar tendência de ruído.

**O que muda.** Não existe lado mais provável para chutar — a banca
trabalha essencialmente em 50/50. O limiar `LIMIAR_CE_GLOBAL` de 5% em
torno de 50/50, no validador, já estava bem calibrado por outro caminho e
segue valendo. O banco, hoje em 48,5% ERRADO, está dentro do intervalo
real e **não precisa de correção** — ao contrário do que a pendência
acima recomendava.

### Segunda rodada — 292 itens policiais com texto E gabarito

Os arquivos separados por prova resolveram a junção: cada par
prova/gabarito é um caderno, com numeração inequívoca. Sete provas
extraíram limpo; duas (PC-DF Agente e Escrivão) são **provas
comentadas** — trazem a JUSTIFICATIVA oficial no corpo, que contém a
resposta — e foram descartadas inteiras. Uma (PC-PE 2023) é de múltipla
escolha, fora do escopo C/E.

Corpus final: **292 itens de carreira policial** (PF 2014 Agente, PF
2025 Agente e Escrivão, PC-SE Agente Judiciário e Escrivão), mais 102
administrativos. Independente dos 372 de 2021.

**1. Regra cega — CONFIRMADA, e com mais força que antes.**

    ganho observado ............ +1,7pp
    mediana sob gabarito
      embaralhado (20k perm.) .. +2,1pp
    p-valor .................... 0,644

O ganho fica ABAIXO da mediana do acaso. Varrer 31 cortes e ficar com o
melhor infla qualquer resultado; descontada essa inflação, não sobra
nada. As duas rodadas concordam: **a forma não entrega o gabarito na
prova real**. `REGRA_CEGA_REFERENCIA_REAL` mantido.

**2. Termos absolutos — CONFIRMADO que não predizem.**

Presentes em 11,0% dos itens. Taxa de ERRADO: 56,3% com, 50,0% sem —
diferença de 6,3pp, IC 95% de **−12,0 a +24,5pp**. O intervalo cruza o
zero com folga. Mesma conclusão de 2021, agora com marcador de força
maior e ainda assim insignificante.

**3. Perfil de comprimento — AJUSTADO. O alvo antigo estava errado.**

    faixa        alvo antigo   medido (292)   provas independentes
    1-120           24,2%         14,7%       11,8 / 13,9 / 21,3
    121-200         45,0%         38,7%       38,2 / 37,5 / 37,5
    201-300         23,3%         27,4%       33,6 / 22,2 / 21,3
    >300             7,5%         19,2%       16,4 / 26,4 / 20,0

A faixa longa é 2,5 a 3,5 vezes o alvo antigo, em três provas
independentes. Não é artefato de extração: nas duas do PC-SE, nenhum
item terminou sem pontuação final — o sinal de linha truncada ou
fundida. O alvo antigo vinha de UM caderno de 120 itens.

Efeito no diagnóstico do banco, que **se inverteu**: o alarme de "faltam
itens curtos" (8,7% contra 24,2%) desapareceu, porque o alvo real é
14,7%. Em lugar dele apareceram dois novos — sobra concentração em
201-300 (42,4% contra 27,4%) e **faltam itens longos** (6,3% contra
19,2%). Parte do que o validador vinha cobrando do banco era o alvo que
estava errado.

**O que NÃO foi possível refazer.** O perfil de comprimento e a regra
cega dependem do TEXTO de cada item casado com seu gabarito. O compilado
é diagramado em duas colunas, e a extração ainda funde trecho de um item
com o do vizinho (mediana de 251 caracteres contra 152 esperados, e 67
itens com comando de bloco no meio do enunciado). Os arquivos separados
por prova resolveriam isso — o par 01 chegou com o PDF da prova
corrompido (282 KB de bytes nulos) e os pares 02 a 10 ainda não estão no
disco. Até lá, `REGRA_CEGA_REFERENCIA_REAL = -0.011` e
`PERFIL_COMPRIMENTO_REAL` continuam valendo, apoiados nos 372 itens de
2021.

---

## Terceira rodada — o relatório consolidado do usuário (agosto/2026)

O usuário trouxe um estudo próprio das provas policiais da CEBRASPE
(Relatório Consolidado PC/AL 2026, fases 1–25). A conclusão central dele
coincide com o que este projeto já vinha medindo de forma independente:
**não existe fórmula confiável para prever CERTO/ERRADO**; o valor dos
padrões está em localizar o ponto de ruptura, não em decidir o item.

### O que já convergia

| Achado do relatório | O que o QuestLab já tinha medido |
|---|---|
| Distribuição perto de 50/50 | 49,2% ERRADO em 2.474 gabaritos |
| "Palavra absoluta = ERRADO" rejeitada | +6,3pp, IC95 −12,0 a +24,5pp (292 itens) |
| "Item longo = ERRADO" não validada | regra cega −1,1pp e depois p=0,644 |
| Mecanismo isolado não prediz | teste de permutação em duas rodadas |

### O que era novo — e o que aconteceu ao testar

O relatório rejeita também a heurística de **sequência** ("depois de
vários CERTO vem ERRADO"). Essa eu nunca tinha medido. Ao testar:

**Primeira medição, 5.371 gabaritos lidos das tabelas oficiais:**
P(C | anterior C) = 43,2% contra P(C | anterior E) = 58,7%. Diferença de
−15,5pp, p = 0,000 em 20 mil permutações. Contradizia o relatório
frontalmente e sugeria uma heurística fortíssima.

**Era artefato.** Antes de gravar isso no sistema, fui conferir a
extração. Os dois cadernos comentados do PC-DF trazem a JUSTIFICATIVA
oficial item a item — verdade externa que não depende de tabela nenhuma.
Comparando:

```
leitura por índice de token .... 92,9% de concordância (7 erros em 99)
leitura por coluna de caractere. 89,9% de concordância (10 erros em 99)
```

**A leitura da tabela de gabarito erra ~7%.** A grade do PDF tem lacunas
horizontais em posições diferentes nas linhas "Item" e "Gabarito", e
nenhuma das duas formas de parear resolve todos os casos.

**Segunda medição, só com verdade oficial** (156 itens com justificativa,
apenas trechos consecutivos sem lacuna): −12,5pp com **p = 0,173**. O
sinal persiste na direção, mas não sobrevive ao acaso. O relatório está
certo, e o número grande vinha do meu defeito de extração.

### Consequências para as conclusões anteriores

- **Perfil de comprimento** — intacto. Depende só do texto dos itens,
  nunca dos gabaritos.
- **Regra cega** — conclusão preservada. Ruído de rótulo atenua efeito em
  direção ao zero, e o valor observado já estava **abaixo** da mediana do
  acaso; um erro de 7% não fabrica esse resultado, no máximo o encolhe.
- **Taxa-base 49,2% ERRADO** — a estimativa fica puxada em direção a 50/50
  por ruído simétrico. A conclusão "perto do equilíbrio" se sustenta, mas
  a precisão decimal não deve ser levada a sério.

### O que entrou no sistema

`js/data-ruptura.js`, com três coisas que o relatório acrescenta e o
banco não tinha:

1. **Pontos de ruptura R1–R12** — eixo ortogonal à `pegadinha`. A
   pegadinha diz COMO o item foi falseado; a ruptura diz QUAL ELEMENTO
   foi alterado (competência, prazo, requisito, limiar). Dois itens com a
   mesma pegadinha podem romper em lugares diferentes.
2. **Protocolo de resolução** — as oito perguntas que varrem os pontos de
   ruptura, com o qualificador deliberadamente por último, para que o
   candidato não comece pela forma.
3. **Heurísticas rejeitadas** — cada uma com a medição que a derruba,
   auditável e com o corpus indicado.

O validador passou a checar a integridade desse eixo: exemplo inexistente
ou de disciplina fora do escopo declarado quebra o build.

---

## Quarta rodada — o DNA e a Predição param de medir a nós mesmos

Uma pergunta do usuário expôs um defeito que as três rodadas anteriores
não tinham alcançado: o painel **DNA da banca** desenhava, como se fosse
comportamento da CEBRASPE, a **fatia de cada padrão dentro deste banco**.
A barra media as questões que nós escrevemos. O mesmo valia para a
Predição de Cobrança e para a Frequência de Temas, que trabalhavam com
`score` e `freq` de 0 a 100 nunca medidos.

### O caderno de 2021, contado item a item

`material/txt/prova-pcal-2021-agente.txt` guardava o texto da PC/AL 2021
(cargo 1, Agente, aplicada em 29/08/2021) desde uma rodada anterior. A
diagramação em duas colunas funde o começo de um item ao fim do anterior;
captura por numeração **monotônica** (só aceita o próximo número
esperado) resolve, e rendeu **120 de 120 itens, sem lacuna**.

A conferência que dá confiança no número não é essa. É que os blocos,
somados por disciplina, batem exatamente com `estruturaHistorica2021` —
que veio do Relatório Consolidado por caminho independente:

```
básicos      LP 20 · Ética 10 · DH 12 · Informática 8          = 50 ✔
específicos  DA 14 · DC 12 · DP 15 · PP 15 · Leg. Inst. 14     = 70 ✔
```

Duas leituras da mesma prova, mesma repartição. O validador refaz essa
comparação a cada build.

### O que a contagem mostrou

Os cinco maiores temas de 2021, que agora abrem a Predição de Cobrança:

| tema | itens | onde |
|---|---|---|
| Direitos e garantias fundamentais (art. 5º) | 8 | 65 a 72 |
| Compreensão, inferência e argumentação | 7 | 2, 3, 7–9, 14, 15 |
| Crimes contra a pessoa | 7 | 77 a 83 |
| Teoria geral dos direitos humanos e DUDH | 7 | 36 a 42 |
| Inquérito policial | 6 | 92, 102 a 106 |

**Nenhum dos dez temas que o ranking antigo listava com score de 85 a 96
correspondia a um tema efetivamente cobrado.** Medida protetiva autônoma
teve 1 item; busca domiciliar, 1; cadeia de custódia, zero.

### O DNA, medido em prova real

Frequência de cada mecanismo nos **131 itens de caderno aplicado** do
acervo (PC-AL 2021, PC-DF 2021, PF 2025, PC-PE 2024):

```
literalidade ........... 40,5%  (53)   alta     era "media"
troca-conceito ......... 19,1%  (25)   alta
troca-numerica .......... 9,2%  (12)   media
termo-absoluto .......... 6,9%   (9)   media    era "alta"
restricao-indevida ...... 6,1%   (8)   media    era "alta"
exigencia-inexistente ... 4,6%   (6)   baixa    era "alta"
juris-mais-lei .......... 1,5%   (2)   baixa    era "media"
juris-inventada ......... 0,0%   (0)   NUNCA OBSERVADO
```

A ordem editorial estava **invertida no topo**: punha em "alta" o termo
absoluto, que a rodada anterior já havia mostrado não predizer nada, e
rebaixava a literalidade, que é o mecanismo mais frequente por larga
margem. E `juris-inventada` — padrão que catalogamos a partir de material
de cursinho e para o qual chegamos a escrever 9 itens — **não aparece
nenhuma vez** em prova aplicada.

A faixa `atencao` deixou de ser escrita à mão: é derivada por limiares
declarados (≥15% alta, 5–15% media, <5% baixa), e o validador quebra o
build se o arquivo divergir da medição.

**Ressalva.** O enunciado é da banca; a classificação do mecanismo é
nossa leitura, e a amostra é a que conseguimos obter. O número sustenta a
ordem entre padrões, não a precisão decimal.

### O que foi removido

- **48 blocos** espalhados pelos arquivos de lote, cada um empurrando
  `freq`/`prob` inventados para a Frequência de Temas. Somados, eram
  ~160 números que a tela exibia ao lado dos medidos, indistinguíveis
  deles. Um deles vazava disciplina de SESAU para o Raio-X da PC-AL.
- **`TIMELINE_DISCIPLINAS`** — série de 2018 a 2025 com itens por
  disciplina por ano, inteiramente inventada, da qual a tela ainda
  extraía a conclusão de que Legislação Especial estaria "em maior
  expansão". No lugar entrou a comparação 2021 → 2026, com os dois lados
  verificáveis.

### Pendência declarada

O relatório recomenda `variavel_critica` e `ponto_ruptura` **por item**.
A variável crítica já existia sob outro nome (`palavraChave` +
`cognitivo.palavraCritica`, em todas as 2.246 questões). O campo
`ruptura` está criado e validado, mas **nenhuma questão foi etiquetada
ainda** — fazê-lo exige julgamento item a item, e derivá-lo
mecanicamente da `pegadinha` seria inventar análise. Fica como trabalho
declarado, não como funcionalidade entregue pela metade.
