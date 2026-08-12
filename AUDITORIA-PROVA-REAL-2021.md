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
