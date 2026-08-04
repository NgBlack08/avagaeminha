# Auditoria do método contra provas reais da CEBRASPE

Teste das premissas do `DNA_BANCA` e do radar lexical contra **provas
aplicadas com gabarito oficial**. Até aqui os padrões vinham de leitura
qualitativa e eram medidos apenas no nosso próprio acervo — o que media o
nosso estilo de redação, não o da banca.

## Corpus — 265 itens rotulados

| prova | cargo | tipo | itens |
|---|---|---|---|
| PC-DF 2021 | Agente de Polícia | policial | 61 |
| PC-SE 2021 | Agente de Polícia Judiciária | policial | 89 |
| PF 2025 | **Administrador** | administrativo | 115 |

Gabaritos oficiais definitivos, parseados do PDF do Cebraspe com zero
lacunas. Itens anulados excluídos. Intervalos de confiança de 95% (Wilson)
em todas as porcentagens.

**Ressalva de composição, que precisa acompanhar os números:** o caderno do
PF de 2025 **não é de carreira policial**. É o concurso administrativo da
Diretoria de Gestão de Pessoas, e as 15 matrizes do gabarito são
Administrador, Contador, Enfermeiro, Médicos, Psicólogos, Agente
Administrativo e afins — não há Agente de Polícia Federal. O conteúdo dos
específicos (administração geral, AFO, gestão de pessoas, gestão de
materiais) identifica o caderno como CARGO 1: ADMINISTRADOR, o que também
confirma que os básicos usados são os de nível superior (CB1).

Isso não invalida a análise — o objeto aqui é a **forma** do item C/E, que
é da banca e não do cargo —, mas obriga a olhar os recortes separadamente.
E, de fato, o vazamento de forma se comporta diferente nos dois grupos.

Correções de parser que valeram metade da amostra:

- No caderno do PC-SE, os **específicos (31–100) aparecem antes dos gerais
  (1–30)** no texto extraído. Varredura só para frente perdia dois terços
  da prova. A versão final coleta todas as fronteiras e ordena por posição.
- O PDF comentado do PC-DF traz **apenas 64 itens com justificativa**, não
  os 120 do caderno: o teto ali é do material.

---

## Premissa 1 — "a banca fica perto de 50/50" · inclinação leve para ERRADO

| | ERRADO | IC 95% |
|---|---|---|
| **amostra real (n=265)** | **53,2%** | [47–59] |
| PC-DF 2021 (n=61) | 57,4% | [45–69] |
| PC-SE 2021 (n=89) | 52,8% | [43–63] |
| PF 2025 (n=115) | 51,3% | [42–60] |
| nosso banco (n=1.863) | 48,0% | [46–50] |

As três provas apontam na mesma direção; o nosso banco aponta na oposta.
O intervalo ainda inclui 50%, então não é viés forte — mas na dúvida
absoluta ERRADO é o palpite marginalmente melhor, e o banco treina o
reflexo contrário.

## Premissa 2 — "item longo tende a CERTO" · **REFUTADA E INVERTIDA**

| faixa | ERRADO na prova real | IC 95% | ERRADO no nosso banco |
|---|---|---|---|
| até 120 | **43,9%** (n=41) | [30–59] | **59%** |
| 120–180 | 60,3% (n=73) | [49–71] | 60% |
| 180–250 | 48,6% (n=70) | [37–60] | 44% |
| 250–350 | 49,1% (n=55) | [36–62] | 35% |
| **350+** | **69,2%** (n=26) | [50–83] | **37%** |

Não há tendência monotônica na prova real. E os **dois extremos estão
invertidos** em relação ao nosso acervo:

- item **curto**: real tende a CERTO (43,9% ERRADO) · nosso tende a ERRADO (59%)
- item **longo**: real tende a ERRADO (69,2%) · nosso tende a CERTO (37% ERRADO)

O chutador cego, que decide só por forma, fecha a conta:

```
ganho sobre o chute da classe majoritária
  provas reais (n=265) ........ −1,9 pp
     só carreiras policiais .... −3,3 pp
     só cargo administrativo ....  0,0 pp
  nosso banco ................. +8,4 pp
```

**Na prova real o heurístico de comprimento tem retorno negativo — e é pior
justamente nas carreiras policiais (−3,3pp).** Ele não é apenas inútil:
quem o aplica erra mais do que quem o ignora. E vale +8,4pp aqui dentro, o
que significa que o banco vinha treinando, com reforço positivo, um reflexo
que a prova pune.

## Premissa 3 — "termo absoluto tende a ERRADO" · não sustentada

| | ERRADO | IC 95% |
|---|---|---|
| com termo absoluto (n=33) | 60,6% | [44–75] |
| sem termo absoluto (n=232) | 52,2% | [46–58] |

O ponto estimado vai na direção esperada, mas o intervalo contém a
taxa-base (53,2%): **não é distinguível de ruído**. E os termos absolutos
aparecem em apenas **12% dos itens reais** — a caça que ocupa o centro do
`DNA_BANCA` e de todo cursinho tem alvo em um oitavo da prova.

## Premissa 4 — "cada marcador tem confiabilidade própria" · nenhum significativo

Só três marcadores atingem n≥12 em 265 itens:

| marcador | ERRADO (real) | IC 95% | nosso banco |
|---|---|---|---|
| deverá | 58,3% (n=12) | [32–81] | 58% |
| não | 48,1% (n=52) | [35–61] | 44% |
| pode | 47,6% (n=21) | [28–68] | 41% |

Taxa-base 53,2%. **Todos os intervalos a contêm.** Nenhum marcador separa o
gabarito melhor do que simplesmente conhecer a proporção geral.

Um detalhe metodológico que vale como advertência: a estimativa de `não`
era 59,5% com n=130 e caiu para 48,1% com n=265 — atravessou a taxa-base.
É exatamente o comportamento de uma variável sem sinal, e mostra por que
não se deve construir técnica sobre marcador medido em amostra pequena.

---

## Veredito

**Nenhuma heurística de superfície sobrevive ao contato com prova real.**
Comprimento tem retorno negativo e está invertido nos dois extremos.
Termos absolutos cobrem 12% da prova e não separam. Marcadores lexicais não
separam. O que resta é uma inclinação suave para ERRADO (53,2%),
consistente nas três provas e ainda dentro da margem.

Três consequências, em ordem de importância:

1. **O banco precisa parar de ensinar o atalho que ele mesmo criou.** Os
   8,4pp de vazamento não são defeito estético: são reflexo falso treinado
   com reforço positivo, e que na prova real custa pontos — mais ainda em
   carreira policial.

2. **O radar lexical é localizador, não preditor.** Ele dirige a leitura
   para a restrição, a condicionante, o quantificador, e isso continua
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
  referência real (−1,9pp), com tolerância de 3pp apenas para ruído
  amostral. O aviso diz explicitamente que é reflexo falso.
- Perfil de comprimento da prova real registrado como alvo por faixa.
- Radar lexical rebaixado a localizador, com o resultado da auditoria
  aberto no topo do card.

## Pendências

- **Corrigir o vazamento de 8,4pp** exige reescrever itens nas três
  disciplinas mais afetadas (Atualidades, Direito Administrativo, RLM):
  encurtar os CERTO e alongar os ERRADO até o perfil bater com o real.
  É trabalho de lote, não de ajuste pontual.
- **Ampliar o corpus policial.** Hoje são 150 itens de carreira policial e
  115 de cargo administrativo. Mais provas de PC/PF policiais permitiriam
  testar se o retorno negativo de −3,3pp se confirma.
