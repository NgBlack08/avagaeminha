# Auditoria do método contra provas reais da CEBRASPE

Teste das premissas do `DNA_BANCA` e do radar lexical contra **provas
aplicadas com gabarito oficial**. Até aqui os padrões vinham de leitura
qualitativa e eram medidos apenas no nosso próprio acervo — o que media o
nosso estilo de redação, não o da banca.

## Corpus

| prova | recorte | itens rotulados |
|---|---|---|
| PC-DF 2021 — Agente | itens 1–120 (CB1 + matriz 001) | 54 |
| PF 2025 — básicos nível superior | itens 1–50 (CB1) | 49 |
| PC-SE 2021 — conhecimentos gerais | itens 1–30 (CG1, comum a todos os cargos) | 27 |
| **total** | | **130** |

Gabaritos oficiais definitivos, parseados do PDF do Cebraspe (zero lacunas
após correção do parser). Itens anulados excluídos. Usaram-se apenas
faixas em que a matriz do gabarito é identificável sem ambiguidade — por
isso PC-SE entra só com os conhecimentos gerais, e PF só com os básicos.

Uma quarta prova, **PC-AL 2021 (120 itens)**, entra apenas na análise
estrutural: o gabarito não foi obtido.

**Limite estatístico, que condiciona tudo abaixo:** n=130. Intervalos de
confiança de 95% (Wilson) acompanham cada número. Vários resultados são
inconclusivos por falta de amostra — e isso está dito, não escondido.

---

## Premissa 1 — "a banca fica perto de 50/50" · **parcialmente refutada**

| | ERRADO | IC 95% |
|---|---|---|
| amostra real (n=130) | **56,2%** | [48–64] |
| PC-DF 2021 (n=54) | 59,3% | [46–71] |
| PF 2025 (n=49) | 51,0% | [37–64] |
| PC-SE 2021 (n=27) | 59,3% | [41–75] |
| **nosso banco (n=1.863)** | **48,0%** | — |

O intervalo inclui 50%, então não dá para cravar viés. Mas as três provas
apontam na **mesma direção**, e nosso banco aponta na direção **oposta**.

Consequência prática: na dúvida absoluta, ERRADO é o palpite marginalmente
melhor na prova real — e o nosso banco treina o reflexo contrário.

## Premissa 2 — "item longo tende a CERTO" · **REFUTADA**

| faixa (caracteres) | REAL % CERTO | NOSSO % CERTO |
|---|---|---|
| até 120 | **59%** (n=17) | 41% (n=123) |
| 120–200 | 42% (n=45) | 43% (n=768) |
| 200–300 | 40% (n=43) | **60%** (n=840) |
| 300–450 | 53% (n=15) | **68%** (n=130) |

Agrupado: curto (<180) **54,5% ERRADO** [42–67] contra longo (≥180)
**57,3% ERRADO** [46–68]. Intervalos praticamente sobrepostos: **não há
sinal**.

O teste decisivo é o do chutador cego, que decide só por forma:

```
ganho sobre o chute puro
  provas reais ....... +0,8 pp   (ou seja, nada)
  nosso banco ........ +8,4 pp
```

**O heurístico de comprimento não existe na CEBRASPE. É criação nossa.**

Pior que inútil: na faixa curta a direção é *invertida* — item curto é
59% CERTO na prova real e 41% no nosso banco. Quem treina aqui e aplica lá
erra mais do que se chutasse.

## Premissa 3 — "termo absoluto tende a ERRADO" · **não sustentada**

| | ERRADO | IC 95% |
|---|---|---|
| com termo absoluto (n=18) | 61,1% | [39–80] |
| sem termo absoluto (n=112) | 55,4% | [46–64] |

Diferença de 5,7pp com intervalos amplamente sobrepostos. Em 130 itens
reais, **apenas 18 contêm algum termo absoluto** — a caça que ocupa o
centro do `DNA_BANCA` e de todo cursinho tem alvo em 14% da prova, e nesses
14% o ganho sobre a taxa-base é indistinguível de ruído.

## Premissa 4 — "cada marcador tem confiabilidade própria" · **não mensurável**

Dos 25 marcadores do radar, **apenas a negação aparece 6 ou mais vezes** na
amostra real. Todos os demais são raros demais para medir.

| | ERRADO | IC 95% |
|---|---|---|
| com negação (n=37) | 59,5% | [43–74] |
| sem negação (n=93) | 54,8% | [45–65] |

Também sobreposto. E note a inversão: no nosso banco, itens com "não" são
**44% ERRADO** — contra 63% no real. O único marcador com massa crítica
está com o sinal trocado aqui.

Lembrete do que isso desmonta: na auditoria anterior, medida só no nosso
acervo, `exclusivamente` liderava o radar com 80% de confiabilidade.
Ele aparece **zero vezes** em 250 itens reais (130 rotulados + 120 do
PC-AL). Um marcador que não aparece não pode ajudar.

---

## Veredito

**Nenhuma heurística de superfície — comprimento, termo absoluto, negação —
sobrevive ao contato com prova real neste tamanho de amostra.** O que
sobra é uma inclinação suave para ERRADO (56,2%), consistente nas três
provas, e ainda assim dentro da margem.

Isso tem três consequências, em ordem de importância:

1. **O banco precisa parar de ensinar o atalho que ele mesmo criou.** Os
   8,4pp de vazamento não são um defeito estético: são um reflexo falso
   sendo treinado com reforço positivo, porque funciona aqui e não lá.

2. **O radar lexical deve ser rebaixado de preditor a localizador.** Ele
   diz onde olhar dentro do item — e isso continua útil para dirigir a
   leitura. Não diz, e nunca disse, o que responder.

3. **A única técnica com validade matemática comprovada é a aritmética do
   branco**, que não depende de padrão nenhum da banca: com erro anulando
   acerto, arriscar só compensa acima de 50% de chance real de acerto.
   Essa continua de pé, intacta.

O caminho para o índice de acertos é conteúdo. Não há atalho de forma — e
qualquer produto que prometa um está vendendo o que não mediu.

---

## O que mudou no projeto

- `scripts/validar.js`: o teste da regra cega passa a ser comparado com a
  referência real (+0,8pp), e não com uma tolerância arbitrária.
- Perfil de comprimento da prova real registrado como alvo por faixa.
- Radar lexical reetiquetado: a força medida no nosso acervo permanece
  visível, mas rotulada como tal, com aviso de que não se transfere.

## Pendências

- Ampliar o corpus. n=130 fecha a porta para "existe sinal forte", mas não
  para "existe sinal fraco". Com 500+ itens reais, marcadores individuais
  passariam a ser mensuráveis.
- PC-SE itens 31–100 e PF itens 51–120 ficaram de fora porque a matriz do
  gabarito depende do cargo e o caderno não o identifica. Recuperáveis se
  você souber o cargo exato de cada PDF.
