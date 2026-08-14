/* =====================================================================
   QUESTLAB — Lote 92: RACIOCÍNIO LÓGICO-MATEMÁTICO contra o reflexo

   Lote CORRETIVO, guiado por medição, não por tópico. O alvo é o
   vazamento da regra cega, que em RLM estava em +14,3pp — o quarto pior
   do banco, numa disciplina de apenas 42 itens autorais.

   O QUE FOI MEDIDO, antes de escrever qualquer coisa:

     comprimento → CERTO      0-120   121-200   201-300
                              44,4%    47,4%     78,6%
     termo absoluto → ERRADO  62,5% com o termo, contra 38,2% sem
     itens acima de 300 caracteres: ZERO

   Ou seja: em RLM, quem lesse só o tamanho do enunciado e a presença de
   "sempre/todo/nenhum" acertava 14,3pp acima do chute puro. Na prova real
   o mesmo chutador rende −1,1pp. Estávamos treinando um reflexo que a
   CEBRASPE não paga.

   POR QUE O TERMO ABSOLUTO É O ALVO PRINCIPAL, e por que isso é honesto

   A regra cega decide primeiro pelo termo absoluto e só depois pelo
   comprimento. Envenenar essa primeira ramificação é o que mais move o
   número — a simulação mostrou queda de +14,3pp para −5,3pp com quinze
   itens bem escolhidos, contra +9,1pp gastando vinte e quatro só em
   comprimento.

   E em LÓGICA isso não é manobra estatística: é a matéria. As leis
   lógicas são universais por natureza. "Uma condicional de antecedente
   falso é sempre verdadeira" não é exagero retórico — é o que a tabela
   -verdade diz. "Nenhuma proposição é simultaneamente verdadeira e falsa"
   é o princípio da não contradição. Escrever itens CERTOS com quantificador
   universal aqui é escrever RLM correto; o que era artificial era o banco
   anterior, em que quase todo "sempre" caía em ERRADO.

   DESENHO DOS 16 ITENS

     7 CERTOS com termo absoluto (leis lógicas e fórmulas gerais)
     6 ERRADOS longos, acima de 300 caracteres, sem termo absoluto
     3 CERTOS curtos, até 120 caracteres

   Gabarito: 10 CERTO / 6 ERRADO. O desequilíbrio é deliberado e local:
   RLM está em 57,1% de CERTO, e este lote pende para CERTO justamente
   nas faixas em que o banco tinha ERRADO — curto e com absoluto. O efeito
   sobre o equilíbrio global do banco é de 0,1pp, medido.

   TODOS OS ITENS SÃO VERIFICÁVEIS POR CÁLCULO. Cada resolução traz a
   conta fechada, e nenhuma depende de fonte externa ou de data — foi por
   isso que RLM veio antes de Atualidades, que tem o pior vazamento
   (+20,6pp) mas exige checagem factual item a item.
   ===================================================================== */

const CARGOS92 = ["Escrivão", "Agente"];
const BASE92 = {
  disciplina: "Raciocínio Lógico-Matemático", concurso: "PCAL", cargo: CARGOS92, ano: 2026,
  tipo: "CE", probReaparecer: 0.8,
  origem: "Inédita — estilo CEBRASPE (lote corretivo de perfil formal)",
};

const QUESTOES_PCAL_LOTE92 = [

  /* ---- 7 CERTOS COM TERMO ABSOLUTO — leis lógicas são universais ---- */

  {
    ...BASE92,
    id: "RL-050", assunto: "Lógica proposicional", subassunto: "Condicional de antecedente falso",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "Uma proposição condicional é sempre verdadeira quando seu antecedente é falso.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "sempre",
    cognitivo: {
      motivo: "Fixar a linha da tabela-verdade que mais gera dúvida e, ao mesmo tempo, apresentar termo absoluto em item VERDADEIRO.",
      palavraCritica: "sempre",
    },
    comentario: {
      resolucao: "CERTO. Na tabela-verdade de p → q, as duas linhas em que p é falso resultam em V, independentemente de q: F → V é verdadeira e F → F também é. Só existe uma linha falsa na condicional, aquela em que o antecedente é verdadeiro e o consequente é falso (V → F). Logo, antecedente falso implica condicional verdadeira, sempre.",
      fundamento: "Lógica proposicional — tabela-verdade da condicional.",
      macete: "A condicional só mente quando promete (V) e não cumpre (F). Antecedente falso não promete nada.",
      erroComum: "Marcar ERRADO por reflexo diante de 'sempre', sem conferir que a tabela-verdade autoriza a universalidade.",
      comoBancaPensa: "Item curto, categórico e VERDADEIRO — a contraprova exata de que 'termo absoluto = ERRADO' não é técnica."
    }
  },
  {
    ...BASE92,
    id: "RL-051", assunto: "Lógica proposicional", subassunto: "Princípio do terceiro excluído",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A disjunção inclusiva entre uma proposição e a sua negação é sempre verdadeira.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "sempre",
    cognitivo: {
      motivo: "Cobrar a tautologia p ∨ ~p com quantificação universal legítima.",
      palavraCritica: "sempre",
    },
    comentario: {
      resolucao: "CERTO. A fórmula p ∨ ~p é tautologia: se p é verdadeira, a disjunção é verdadeira pelo primeiro termo; se p é falsa, ~p é verdadeira e a disjunção é verdadeira pelo segundo. Não há linha da tabela-verdade em que resulte falsa. É o princípio do terceiro excluído.",
      fundamento: "Lógica proposicional — tautologia; princípio do terceiro excluído.",
      macete: "Ou chove ou não chove: uma das duas é verdade, sempre.",
      erroComum: "Confundir com a disjunção exclusiva, que também seria verdadeira aqui, mas por outra razão.",
      comoBancaPensa: "Afirmação universal e verdadeira, curta — formato que o candidato treinado a temer 'sempre' erra."
    }
  },
  {
    ...BASE92,
    id: "RL-052", assunto: "Lógica proposicional", subassunto: "Princípio da não contradição",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Nenhuma proposição pode ser, ao mesmo tempo e sob o mesmo aspecto, verdadeira e falsa.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "Nenhuma",
    cognitivo: {
      motivo: "Cobrar o princípio da não contradição em enunciado com quantificador negativo universal.",
      palavraCritica: "Nenhuma",
    },
    comentario: {
      resolucao: "CERTO. É o princípio da não contradição, um dos fundamentos da lógica clássica: a proposição admite exatamente um valor lógico. A ressalva 'ao mesmo tempo e sob o mesmo aspecto' é a formulação clássica e afasta o falso contraexemplo de sentenças que mudam de valor conforme o contexto ou o momento.",
      fundamento: "Lógica proposicional — princípio da não contradição.",
      macete: "Proposição tem um valor só. Se parecer ter dois, mudou o tempo ou o aspecto.",
      erroComum: "Marcar ERRADO por 'Nenhuma', ou por lembrar de paradoxos que não são proposições no sentido clássico.",
      comoBancaPensa: "Negativa absoluta verdadeira — o espelho do item anterior e mais uma contraprova do reflexo."
    }
  },
  {
    ...BASE92,
    id: "RL-053", assunto: "Lógica proposicional", subassunto: "Definição de tautologia",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Toda tautologia assume valor lógico verdadeiro em todas as linhas de sua tabela-verdade.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "Toda / todas",
    cognitivo: {
      motivo: "Cobrar a definição de tautologia, que é universal por construção.",
      palavraCritica: "todas",
    },
    comentario: {
      resolucao: "CERTO. É a própria definição: tautologia é a proposição composta que resulta verdadeira para qualquer atribuição de valores às proposições simples que a compõem. Se houvesse uma única linha falsa, deixaria de ser tautologia e seria contingência.",
      fundamento: "Lógica proposicional — tautologia, contradição e contingência.",
      macete: "Tautologia: só V na coluna final. Contradição: só F. Contingência: mistura.",
      erroComum: "Estranhar dois quantificadores universais no mesmo enunciado e supor exagero.",
      comoBancaPensa: "Definição correta enunciada com 'toda' e 'todas' — dois gatilhos do reflexo numa frase só."
    }
  },
  {
    ...BASE92,
    id: "RL-054", assunto: "Análise combinatória", subassunto: "Número de subconjuntos",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Qualquer conjunto finito com n elementos possui exatamente 2^n subconjuntos, incluídos o conjunto vazio e o próprio conjunto.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "Qualquer",
    cognitivo: {
      motivo: "Cobrar a fórmula do conjunto das partes com quantificador universal legítimo.",
      palavraCritica: "Qualquer",
    },
    comentario: {
      resolucao: "CERTO. Cada elemento admite duas possibilidades independentes — pertencer ou não pertencer ao subconjunto —, o que dá 2 × 2 × … × 2 = 2^n combinações. Conferindo com n = 3: os subconjuntos de {a, b, c} são ∅, {a}, {b}, {c}, {a,b}, {a,c}, {b,c} e {a,b,c}, oito ao todo, e 2³ = 8.",
      fundamento: "Análise combinatória — conjunto das partes.",
      macete: "Cada elemento é uma chave liga-desliga. n chaves, 2^n combinações.",
      erroComum: "Esquecer de contar o vazio e o próprio conjunto, chegando a 2^n − 2.",
      comoBancaPensa: "Fórmula geral, verdadeira para qualquer n, apresentada com 'qualquer' e 'exatamente'."
    }
  },
  {
    ...BASE92,
    id: "RL-055", assunto: "Lógica de argumentação", subassunto: "Validade e verdade das premissas",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "Se um argumento é válido e todas as suas premissas são verdadeiras, então sua conclusão é necessariamente verdadeira.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "necessariamente",
    cognitivo: {
      motivo: "Cobrar a definição de argumento sólido, distinguindo validade de veracidade.",
      palavraCritica: "necessariamente",
    },
    comentario: {
      resolucao: "CERTO. Validade significa exatamente que é impossível ter todas as premissas verdadeiras e a conclusão falsa. Somando premissas de fato verdadeiras, a conclusão verdadeira decorre por necessidade — é o que se chama argumento sólido. Cuidado com a recíproca, que é falsa: um argumento válido pode ter conclusão falsa, desde que alguma premissa também seja falsa.",
      fundamento: "Lógica de argumentação — validade, verdade e solidez.",
      macete: "Válido = a forma preserva a verdade. Sólido = válido + premissas verdadeiras. Só o sólido garante conclusão verdadeira.",
      erroComum: "Rejeitar por 'necessariamente', quando a necessidade é justamente o que define a validade.",
      comoBancaPensa: "Duplo gatilho — 'todas' e 'necessariamente' — num item que é a definição correta."
    }
  },
  {
    ...BASE92,
    id: "RL-056", assunto: "Lógica de predicados", subassunto: "Negação de proposição universal",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "A negação de uma proposição universal afirmativa é sempre uma proposição particular negativa.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "sempre",
    cognitivo: {
      motivo: "Cobrar a regra de negação de quantificadores, com quantificação universal legítima sobre a própria regra.",
      palavraCritica: "sempre",
    },
    comentario: {
      resolucao: "CERTO. A negação de 'Todo A é B' é 'Algum A não é B' — basta um contraexemplo para derrubar a universal. Formalmente, ~(∀x)(A(x) → B(x)) equivale a (∃x)(A(x) ∧ ~B(x)). O erro clássico é negar para 'Nenhum A é B', que é a contrária, e não a contraditória.",
      fundamento: "Lógica de predicados — negação de quantificadores.",
      macete: "Nega o 'todo' com 'existe pelo menos um que não'. Nunca com 'nenhum'.",
      erroComum: "Negar 'Todo A é B' como 'Nenhum A é B', confundindo contrária com contraditória.",
      comoBancaPensa: "A regra é universal, e o item a enuncia com 'sempre' — verdadeiro, apesar do gatilho."
    }
  },

  /* ---- 6 ERRADOS LONGOS (>300 caracteres), sem termo absoluto ---- */

  {
    ...BASE92,
    id: "RL-057", assunto: "Probabilidade", subassunto: "Probabilidade condicional",
    dificuldade: 3, tempoIdealSeg: 120,
    enunciado: "Em uma delegacia, 60% dos inquéritos instaurados em determinado mês tratavam de crimes patrimoniais e, entre esses, 25% foram concluídos dentro do prazo legal. Entre os inquéritos que não tratavam de crimes patrimoniais, a proporção de conclusão no prazo foi de 50%. Nessa situação, escolhendo-se ao acaso um inquérito daquele mês, a probabilidade de que ele tenha sido concluído no prazo legal é igual a 40%.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "40%",
    cognitivo: {
      motivo: "Cobrar probabilidade total, com resultado próximo do correto para punir a conta feita de cabeça.",
      palavraCritica: "40%",
    },
    comentario: {
      resolucao: "ERRADO. Pela probabilidade total: P = 0,60 × 0,25 + 0,40 × 0,50 = 0,15 + 0,20 = 0,35, ou seja, 35% — e não 40%. O erro de 5 pontos percentuais é exatamente o que se obtém ao trocar algum dos pesos, motivo pelo qual convém escrever as duas parcelas antes de somar.",
      fundamento: "Probabilidade — teorema da probabilidade total.",
      macete: "Probabilidade total = soma de (peso do grupo × taxa dentro do grupo). Escreva as parcelas separadas.",
      erroComum: "Somar as taxas e dividir por dois (37,5%) ou arredondar mentalmente para 40%.",
      comoBancaPensa: "Enunciado longo com dois grupos e duas taxas, e um resultado plausivelmente próximo do verdadeiro."
    }
  },
  {
    ...BASE92,
    id: "RL-058", assunto: "Análise combinatória", subassunto: "Permutação com repetição",
    dificuldade: 3, tempoIdealSeg: 120,
    enunciado: "Uma equipe de investigação precisa definir a ordem em que serão ouvidas seis testemunhas, das quais duas são peritos, outras duas são policiais militares e as duas restantes são civis. Considerando que interessa apenas a sequência das categorias, e não a identidade individual de cada pessoa dentro da sua categoria, o número de ordens distintas possíveis é igual a 180.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "180",
    cognitivo: {
      motivo: "Cobrar permutação com elementos repetidos, com resultado errado por fator 2.",
      palavraCritica: "180",
    },
    comentario: {
      resolucao: "ERRADO. Trata-se de permutação de 6 elementos com três pares indistinguíveis: 6! / (2! × 2! × 2!) = 720 / 8 = 90 — e não 180. O valor 180 sai de dividir por apenas 4, isto é, de esquecer um dos três pares repetidos.",
      fundamento: "Análise combinatória — permutação com repetição.",
      macete: "Divida o fatorial total pelo fatorial de CADA grupo repetido. Conte os grupos antes de dividir.",
      erroComum: "Dividir por 2! duas vezes em vez de três, ou dividir por 3! por haver três categorias.",
      comoBancaPensa: "Contexto policial longo para consumir tempo, com resultado que é exatamente o dobro do correto."
    }
  },
  {
    ...BASE92,
    id: "RL-059", assunto: "Porcentagem", subassunto: "Aumentos sucessivos",
    dificuldade: 3, tempoIdealSeg: 110,
    enunciado: "O número de ocorrências registradas em determinado setor cresceu 20% de janeiro para fevereiro e, em seguida, cresceu mais 30% de fevereiro para março. Considerando esse cenário e desprezando qualquer variação em outros meses, é correto afirmar que o crescimento acumulado no período de janeiro a março foi de 50%.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "50%",
    cognitivo: {
      motivo: "Cobrar a não aditividade de variações percentuais sucessivas.",
      palavraCritica: "50%",
    },
    comentario: {
      resolucao: "ERRADO. Percentuais sucessivos multiplicam, não somam: 1,20 × 1,30 = 1,56, o que corresponde a 56% de crescimento acumulado, e não 50%. A diferença de 6 pontos é o efeito composto — os 30% de março incidem sobre uma base já 20% maior.",
      fundamento: "Porcentagem — variações percentuais sucessivas.",
      macete: "Transforme cada variação em fator (1 + i) e MULTIPLIQUE. Somar percentuais é o erro mais comum da matéria.",
      erroComum: "Somar 20% + 30% e responder 50%.",
      comoBancaPensa: "Enunciado longo e cenário simples, com a resposta intuitiva errada colocada como conclusão."
    }
  },
  {
    ...BASE92,
    id: "RL-060", assunto: "Lógica proposicional", subassunto: "Equivalência da condicional",
    dificuldade: 3, tempoIdealSeg: 115,
    enunciado: "Considere a proposição “Se o inquérito for relatado, então o processo será distribuído”. A partir dessa proposição, e mantidas as mesmas proposições simples que a compõem, pode-se afirmar que ela é logicamente equivalente à proposição “Se o processo não for distribuído, então o inquérito não foi relatado”, bem como à proposição “Se o inquérito não for relatado, então o processo não será distribuído”.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "bem como",
    cognitivo: {
      motivo: "Testar a distinção entre contrapositiva (equivalente) e inversa (não equivalente).",
      palavraCritica: "bem como",
    },
    comentario: {
      resolucao: "ERRADO. A primeira equivalência está certa: 'Se não q, então não p' é a contrapositiva de 'Se p, então q', e contrapositiva é equivalente. A segunda está errada: 'Se não p, então não q' é a INVERSA, que não equivale à original. Como o item afirma as duas, o conjunto é falso — basta uma parte falsa para derrubar tudo.",
      fundamento: "Lógica proposicional — contrapositiva, recíproca e inversa.",
      macete: "Só a contrapositiva (nega e inverte a ordem) equivale. Recíproca e inversa, não.",
      erroComum: "Validar o item pela primeira equivalência, que é verdadeira, sem julgar a segunda.",
      comoBancaPensa: "Verdade + falso emendado, com o 'bem como' escondendo a segunda afirmação no fim do período."
    }
  },
  {
    ...BASE92,
    id: "RL-061", assunto: "Teoria dos conjuntos", subassunto: "Princípio da inclusão-exclusão",
    dificuldade: 3, tempoIdealSeg: 120,
    enunciado: "Em um grupo de 100 servidores, verificou-se que 60 concluíram o curso de cadeia de custódia e 45 concluíram o curso de redação técnica, sendo que 20 concluíram os dois cursos. Considerando exclusivamente essas informações e que todos os servidores do grupo foram consultados, conclui-se que o número de servidores que não concluíram nenhum dos dois cursos é igual a 5.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "5",
    cognitivo: {
      motivo: "Cobrar inclusão-exclusão, com erro por não subtrair a interseção.",
      palavraCritica: "nenhum dos dois",
    },
    comentario: {
      resolucao: "ERRADO. Pelo princípio da inclusão-exclusão, quem concluiu pelo menos um curso é 60 + 45 − 20 = 85. Logo, não concluíram nenhum: 100 − 85 = 15, e não 5. O valor 5 resulta de somar 60 + 45 = 105 e subtrair de 100 sem devolver a interseção contada duas vezes.",
      fundamento: "Teoria dos conjuntos — princípio da inclusão-exclusão.",
      macete: "|A ∪ B| = |A| + |B| − |A ∩ B|. Quem está nos dois foi contado duas vezes e precisa voltar uma.",
      erroComum: "Esquecer de subtrair a interseção, ou subtraí-la duas vezes.",
      comoBancaPensa: "Enunciado longo com três números, e a resposta errada é a que sai da conta feita rápido."
    }
  },
  {
    ...BASE92,
    id: "RL-062", assunto: "Lógica de argumentação", subassunto: "Falácia da afirmação do consequente",
    dificuldade: 3, tempoIdealSeg: 115,
    enunciado: "Considere o seguinte argumento: se o suspeito esteve no local do crime, então suas digitais estarão no objeto apreendido; verificou-se que as digitais do suspeito estão no objeto apreendido; portanto, o suspeito esteve no local do crime. Considerando as regras da lógica formal, e independentemente da plausibilidade da conclusão no caso concreto, esse argumento é válido.",
    /* Era "juris-mais-lei" por descuido meu, e o validador barrou: não há
       jurisprudência em item de lógica, e o bloco pós-resposta ficaria sem
       estratégia casada. O mecanismo real é troca de conceito — o item
       apresenta a afirmação do consequente e a rotula de argumento
       válido, que é o nome da forma vizinha (modus ponens). */
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "é válido",
    cognitivo: {
      motivo: "Cobrar o reconhecimento da falácia da afirmação do consequente em contexto policial verossímil.",
      palavraCritica: "válido",
    },
    comentario: {
      resolucao: "ERRADO. O argumento tem a forma 'p → q; q; logo p', que é a falácia da afirmação do consequente. A conclusão não decorre: as digitais poderiam estar no objeto por outra razão — tê-lo manuseado antes, em outro lugar. O modo válido seria negar o consequente ('p → q; ~q; logo ~p'), que é o modus tollens.",
      fundamento: "Lógica de argumentação — modus ponens, modus tollens e falácias formais.",
      macete: "Afirmar o consequente e negar o antecedente são as duas falácias clássicas. Válidos são afirmar o antecedente e negar o consequente.",
      erroComum: "Aceitar por a conclusão parecer razoável no contexto investigativo — validade é da forma, não do conteúdo.",
      comoBancaPensa: "Veste a falácia com um cenário policial plausível e avisa 'independentemente da plausibilidade', contando com o candidato ignorar o aviso."
    }
  },

  /* ---- 3 CERTOS CURTOS (até 120 caracteres) ---- */

  {
    ...BASE92,
    id: "RL-063", assunto: "Probabilidade", subassunto: "Evento complementar",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "Se a probabilidade de um evento ocorrer é 0,3, a de ele não ocorrer é 0,7.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "0,7",
    cognitivo: {
      motivo: "Cobrar o complementar em item curto e correto, para povoar a faixa curta com CERTO.",
      palavraCritica: "não ocorrer",
    },
    comentario: {
      resolucao: "CERTO. A probabilidade do evento complementar é 1 menos a do evento: 1 − 0,3 = 0,7. A soma das probabilidades de um evento e do seu complementar é sempre 1, porque juntos esgotam o espaço amostral.",
      fundamento: "Probabilidade — evento complementar.",
      macete: "P(A) + P(não A) = 1. Sempre.",
      erroComum: "Nenhum frequente — o item existe para calibrar o perfil de comprimento do banco, não para pegar o candidato.",
      comoBancaPensa: "A prova real tem itens curtos e diretos como este; nosso banco quase não tinha."
    }
  },
  {
    ...BASE92,
    id: "RL-064", assunto: "Porcentagem", subassunto: "Cálculo direto",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "Se 40 dos 250 inquéritos de um setor foram arquivados, então foram arquivados 16% deles.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "16%",
    cognitivo: {
      motivo: "Cobrar conversão de fração em porcentagem, em item curto e correto.",
      palavraCritica: "16%",
    },
    comentario: {
      resolucao: "CERTO. 40 / 250 = 0,16, ou seja, 16%. Conferindo pelo caminho inverso: 10% de 250 são 25, e 16% são 25 × 1,6 = 40.",
      fundamento: "Porcentagem — razão parte/todo.",
      macete: "Ache 10% primeiro (divida por 10) e monte o resto a partir dele.",
      erroComum: "Inverter a razão e calcular 250/40.",
      comoBancaPensa: "Item curto, verdadeiro e de conta fechada — perfil que faltava na disciplina."
    }
  },
  {
    ...BASE92,
    id: "RL-065", assunto: "Lógica proposicional", subassunto: "Negação da conjunção",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "A negação de “chove e faz frio” é “não chove ou não faz frio”.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ou",
    cognitivo: {
      motivo: "Cobrar a primeira lei de De Morgan em item curto e correto.",
      palavraCritica: "ou",
    },
    comentario: {
      resolucao: "CERTO. É a lei de De Morgan: ~(p ∧ q) equivale a ~p ∨ ~q. Para que 'chove e faz frio' seja falsa, basta que uma das duas falhe — daí a disjunção. Negar para 'não chove e não faz frio' seria exigir que as duas falhem, o que é mais forte do que a negação.",
      fundamento: "Lógica proposicional — leis de De Morgan.",
      macete: "Negou o 'e', vira 'ou'; negou o 'ou', vira 'e'. E nega cada parte.",
      erroComum: "Manter a conjunção na negação, produzindo proposição mais forte que a correta.",
      comoBancaPensa: "Regra fundamental cobrada de forma direta, em item curto e verdadeiro."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE92);
