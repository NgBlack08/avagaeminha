# Auditoria do método contra provas reais da CEBRASPE

Teste das premissas do `DNA_BANCA` e do radar lexical contra **provas
aplicadas com gabarito oficial**. Até aqui os padrões vinham de leitura
qualitativa e eram medidos apenas no nosso próprio acervo — o que media o
nosso estilo de redação, não o da banca.

## Corpus — 198 itens rotulados

| prova | cargo | itens |
|---|---|---|
| PC-DF 2021 | Agente de Polícia | 61 |
| PC-SE 2021 | Agente de Polícia Judiciária | 89 |
| PF 2025 | básicos, nível superior | 48 |

Gabaritos oficiais definitivos, parseados do PDF do Cebraspe com zero
lacunas. Itens anulados excluídos. Todas as porcentagens vêm com intervalo
de confiança de 95% (Wilson).

Duas correções de parser foram necessárias e valem registro, porque sem
elas a amostra ficaria pela metade:

- No caderno do PC-SE, os **conhecimentos específicos (31–100) aparecem
  antes dos gerais (1–30)** no texto extraído. Uma varredura que só anda
  para frente perdia dois terços da prova. A versão final coleta todas as
  fronteiras e ordena por posição no documento.
- O PDF comentado do PC-DF traz **apenas 64 itens com justificativa**, não
  os 120 do caderno. O teto ali é do material, não do parser.

**Limite estatístico:** n=198 permite descartar efeitos grandes (acima de
~±10pp) nos marcadores testados. Efeitos pequenos continuam possíveis e
exigiriam amostra maior.

---

## Premissa 1 — "a banca fica perto de 50/50" · **inclinação leve para ERRADO**

| | ERRADO | IC 95% |
|---|---|---|
| **amostra real (n=198)** | **54,0%** | [47–61] |
| PC-DF 2021 (n=61) | 57,4% | [45–69] |
| PC-SE 2021 (n=89) | 52,8% | [43–63] |
| PF 2025 (n=48) | 52,1% | [38–66] |
| nosso banco (n=1.863) | 48,0% | [46–50] |

As três provas apontam na mesma direção; o nosso banco aponta na oposta.
O intervalo ainda inclui 50%, então não é um viés forte — mas na dúvida
absoluta ERRADO é o palpite marginalmente melhor, e o banco treina o
reflexo contrário.

## Premissa 2 — "item longo tende a CERTO" · **REFUTADA, e invertida**

| faixa (caracteres) | ERRADO na prova real | IC 95% |
|---|---|---|
| até 120 | 42,9% (n=35) | [28–59] |
| 120–180 | 57,4% (n=54) | [44–70] |
| 180–250 | 54,2% (n=48) | [40–67] |
| 250–350 | 48,8% (n=41) | [34–64] |
| **350+** | **75,0%** (n=20) | [53–89] |

Não há tendência monotônica. E o extremo desmente a premissa de forma
frontal: os itens **mais longos** são os **mais ERRADO** (75%), enquanto no
nosso banco a faixa 300–450 é 68% CERTO. A relação não é fraca — está
invertida.

O teste do chutador cego, que decide só por forma, fecha a conta:

```
ganho sobre o chute da classe majoritária
  provas reais ....... −1,5 pp   (pior que não usar)
  nosso banco ........ +8,4 pp
```

**Na prova real o heurístico de comprimento tem retorno negativo.** Ele não
é apenas inútil: quem o aplica erra mais do que quem o ignora. E ele vale
+8,4pp aqui dentro — ou seja, o banco vinha treinando, com reforço
positivo, um reflexo que a prova pune.

## Premissa 3 — "termo absoluto tende a ERRADO" · **sem alvo**

Nenhum termo absoluto — `sempre`, `nunca`, `somente`, `apenas`,
`exclusivamente`, `todos`, `qualquer` — alcança **sequer 10 ocorrências em
198 itens reais**. Não é que o sinal seja fraco: não há amostra para medir,
porque a banca quase não usa essas palavras.

A caça ao termo absoluto ocupa o centro do `DNA_BANCA` e de praticamente
todo cursinho. Ela mira uma construção que responde por uma fração marginal
da prova.

## Premissa 4 — "cada marcador tem confiabilidade própria" · **nenhum é significativo**

Apenas três marcadores atingem n≥10:

| marcador | ERRADO (real) | IC 95% | nosso banco | veredito |
|---|---|---|---|---|
| deverá | 63,6% (n=11) | [35–85] | 58% | dentro da taxa-base |
| não | 50,0% (n=42) | [36–64] | 44% | dentro da taxa-base |
| pode | 53,3% (n=15) | [30–75] | 41% | dentro da taxa-base |

Taxa-base: 54,0%. **Todos os intervalos a contêm.** Nenhum marcador separa
o gabarito melhor do que simplesmente conhecer a proporção geral da prova.

Vale lembrar o que isso desmonta: na auditoria anterior, medida só no nosso
acervo, `exclusivamente` liderava o radar com 80% de confiabilidade. Ele
aparece **zero vezes** em 318 itens reais (198 rotulados + 120 do PC-AL).

---

## Veredito

**Nenhuma heurística de superfície sobrevive ao contato com prova real.**
Comprimento tem retorno negativo. Termos absolutos não têm alvo. Marcadores
lexicais não separam. O que resta é uma inclinação suave para ERRADO
(54,0%), consistente nas três provas e ainda dentro da margem.

Três consequências, em ordem de importância:

1. **O banco precisa parar de ensinar o atalho que ele mesmo criou.** Os
   8,4pp de vazamento não são defeito estético: são reflexo falso treinado
   com reforço positivo, e que na prova real custa pontos.

2. **O radar lexical é localizador, não preditor.** Ele dirige a leitura
   para a restrição, a condicionante, o quantificador — e isso continua
   útil. Ele não diz, e nunca disse, o que responder.

3. **A única técnica com validade matemática comprovada é a aritmética do
   branco**, que não depende de padrão nenhum da banca: com erro anulando
   acerto, arriscar só compensa acima de 50% de chance real. Essa continua
   de pé, intacta.

O caminho para o índice de acertos é conteúdo. Não há atalho de forma — e
qualquer material que prometa um está vendendo o que não mediu.

---

## O que mudou no projeto

- `scripts/validar.js`: o limiar da regra cega passa a ser ancorado na
  referência real (−1,5pp), com tolerância de 3pp apenas para ruído
  amostral. O aviso diz explicitamente que é reflexo falso.
- Perfil de comprimento da prova real registrado como alvo por faixa.
- Radar lexical rebaixado a localizador, com o resultado da auditoria
  aberto no topo do card e aviso de que as porcentagens são do nosso
  acervo e não se transferem.

## Pendências

- **Ampliar o corpus.** n=198 descarta efeitos grandes; não descarta
  efeitos pequenos. Com 500+ itens, marcadores individuais passariam a ser
  mensuráveis com utilidade.
- **PF 2025, itens 51–120:** ficaram de fora porque a matriz específica
  depende do cargo (são 15 no gabarito) e o caderno não o identifica.
  Recuperáveis se o cargo for informado.
- **Corrigir o vazamento de 8,4pp** exige reescrever itens nas três
  disciplinas mais afetadas (Atualidades, Direito Administrativo, RLM),
  encurtando os CERTO e alongando os ERRADO até o perfil bater com o real.
