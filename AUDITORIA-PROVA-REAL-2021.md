# Auditoria contra prova real — CEBRASPE / PC-AL 2021 (Agente)

Primeira calibração do método contra **prova aplicada**, e não contra
inferência. Até aqui, todos os padrões do `DNA_BANCA` e do radar lexical
tinham sido derivados de leitura qualitativa e medidos apenas no nosso
próprio acervo — o que media o nosso estilo de redação, não o da banca.

**Fonte:** caderno oficial CEBRASPE, PC/AL Edital 2021, cargo Agente de
Polícia (prova anulada, aplicada em 29/08/2021). 120 itens C/E extraídos
integralmente do PDF.

**Limite desta auditoria, declarado de saída:** não foi possível obter o
gabarito oficial — a página do Cebraspe é renderizada por JavaScript e o
PDF do gabarito não respondeu a acesso direto. Portanto **mediu-se
frequência e estrutura, não confiabilidade preditiva**. Nada aqui afirma
"marcador X acerta Y% na CEBRASPE"; o que se afirma é "marcador X aparece
em Y% dos itens reais", que é uma pergunta diferente e igualmente decisiva:
um marcador que não aparece não pode ajudar, por mais confiável que fosse.

---

## Achado 1 — Nossos itens são mais longos que os reais

| faixa (caracteres) | CEBRASPE 2021 | nosso banco |
|---|---|---|
| até 120 | **24,2%** | 6,6% |
| 120–200 | 45,0% | 41,2% |
| 200–300 | 23,3% | **45,1%** |
| 300–450 | 3,3% | 7,0% |
| 450+ | 4,2% | 0,1% |

Mediana: **152** caracteres na prova real contra **203** no nosso banco.

A banca usa item curto quase quatro vezes mais do que nós. Isso importa
diretamente para o vazamento de 8,4pp que o validador detectou: a "regra
cega" (item longo tende a CERTO) foi aprendida sobre a NOSSA distribuição,
que é muito mais concentrada na faixa média. Treinar esse reflexo aqui é
treinar um reflexo que a prova real não recompensa da mesma forma.

## Achado 2 — O radar lexical mira o que a banca quase não usa

Frequência do marcador nos itens (% de itens que o contêm):

| marcador | CEBRASPE 2021 | nosso banco | razão |
|---|---|---|---|
| **não** | **25,8%** | 20,2% | 1,28x |
| **poderá** | **6,7%** | 3,1% | 0,47x — *sub-representado* |
| apenas | 4,2% | 2,7% | 0,64x |
| todos | 4,2% | 2,2% | 0,53x |
| **deverá** | **3,3%** | 1,0% | 0,31x — *sub-representado* |
| somente | 1,7% | 2,9% | 1,71x |
| sempre | 0,8% | 2,0% | 2,4x |
| qualquer | 0,8% | 6,9% | **8,6x — super-representado** |
| independentemente | 0,8% | 2,7% | 3,4x |
| **exclusivamente** | **0,0%** | 2,6% | ∞ |
| **automaticamente** | **0,0%** | 1,2% | ∞ |
| **em regra** | **0,0%** | 1,2% | ∞ |

### A conclusão que isso força

`exclusivamente` era o marcador mais confiável do nosso radar — 80% de
ERRADO, topo da lista recém-calibrada. **Ele aparece zero vezes em 120
itens reais.** O mesmo vale para `automaticamente` e `em regra`.

E `qualquer`, que usamos em 6,9% dos itens, aparece em 0,8% dos reais.

Ou seja: a "caça ao termo absoluto", que é o centro de gravidade do
`DNA_BANCA` e de praticamente todo cursinho, mira um fenômeno que responde
por uma fração pequena da prova. Em compensação, os dois marcadores mais
frequentes na prova real — **negação** (25,8%) e **operador modal**
`poderá`/`deverá` (10,0% somados) — estão sub-representados no nosso banco.

O trabalho discriminativo de verdade, na CEBRASPE, parece estar em:

1. **Negação** — presente em um a cada quatro itens.
2. **Modalidade deôntica** — `dever` x `poder`, obrigação x faculdade.
3. Só depois, e bem atrás, os quantificadores absolutos.

---

## O que mudou por causa disto

1. `scripts/validar.js` ganhou o **perfil de comprimento da prova real**
   como alvo, com aviso quando o banco se afasta demais dele. A regra cega
   já era medida; agora se mede também a causa.
2. O radar lexical passa a exibir **frequência na prova real** ao lado da
   força medida, para o candidato saber quais marcadores valem vigilância
   e quais são folclore.
3. Os próximos lotes devem privilegiar itens curtos (até 120 caracteres) e
   construções com `poderá`/`deverá` e negação.

## Pendência

Obter o gabarito oficial de 2021 (ou de outra prova CEBRASPE aplicada)
para medir **confiabilidade preditiva**, e não só frequência. É o único
caminho para afirmar quanto cada marcador realmente antecipa o gabarito.
Sem isso, o radar continua sendo um mapa de onde olhar — nunca do que
responder.
