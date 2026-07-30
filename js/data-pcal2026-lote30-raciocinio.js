/* =====================================================================
   QUESTLAB — Lote 30: RACIOCÍNIO LÓGICO-MATEMÁTICO (expansão)
   Preenche lacuna relevante de RLM: proporcionalidade, porcentagem,
   probabilidade, combinatória com restrições, lógica proposicional,
   negação de proposições categóricas, divisibilidade, PA, conjuntos e
   sequências — todos os temas confirmados como recorrentes no padrão
   CEBRASPE para carreiras policiais. Itens 100% originais, com todos
   os cálculos verificados de forma independente (nenhum enunciado do
   material de terceiros foi reproduzido; apenas o TIPO de problema foi
   usado como referência de estilo).
   16 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE30 = [

  {
    id: "RL-024", disciplina: "Raciocínio Lógico-Matemático", assunto: "Razão e proporção", subassunto: "Divisão proporcional direta",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (divisão proporcional)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "Um prêmio de R$ 45.000 será dividido entre três policiais, de forma diretamente proporcional ao número de anos de serviço de cada um: 4, 5 e 6 anos, respectivamente. Nessas condições, o policial com maior tempo de serviço receberá R$ 18.000.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "diretamente proporcional ... R$ 18.000",
    cognitivo: {
      motivo: "Cobrar o cálculo de divisão proporcional direta.",
      palavraCritica: "R$ 18.000",
    },
    comentario: {
      resolucao: "CERTO. Somando as partes (4+5+6=15) e dividindo o total pelo número de partes (45.000/15=3.000), cada 'parte' vale R$ 3.000. O policial com 6 anos recebe 6×3.000 = R$ 18.000.",
      fundamento: "Matemática — razão e proporção (divisão proporcional direta).",
      macete: "Some as partes, divida o total, multiplique pela parte desejada.",
      erroComum: "Dividir o valor igualmente entre os três (erro de dividir sem proporcionalidade).",
      comoBancaPensa: "Cobra o procedimento completo de divisão em partes diretamente proporcionais."
    }
  },
  {
    id: "RL-025", disciplina: "Raciocínio Lógico-Matemático", assunto: "Porcentagem", subassunto: "Aumento percentual",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (porcentagem)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Um equipamento de proteção individual custava R$ 250 e passou a custar R$ 312,50 após reajuste. Nessas condições, o aumento percentual aplicado foi superior a 20%, porém inferior a 30%.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "superior a 20% ... inferior a 30%",
    cognitivo: {
      motivo: "Cobrar o cálculo de variação percentual.",
      palavraCritica: "superior a 20%, porém inferior a 30%",
    },
    comentario: {
      resolucao: "CERTO. O aumento absoluto foi de R$ 62,50 (312,50−250). Dividindo pelo valor inicial: 62,50/250 = 0,25 = 25%, valor que está entre 20% e 30%.",
      fundamento: "Matemática — porcentagem (variação percentual).",
      macete: "Sempre divida a variação pelo valor INICIAL, nunca pelo final.",
      erroComum: "Usar o valor final como base do cálculo percentual.",
      comoBancaPensa: "Item clássico de cálculo percentual com faixa de valores."
    }
  },
  {
    id: "RL-026", disciplina: "Raciocínio Lógico-Matemático", assunto: "Probabilidade", subassunto: "Probabilidade de eventos mutuamente exclusivos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "Uma urna contém 5 bolas vermelhas, 3 azuis e 2 verdes, indistinguíveis pelo tato. Retirando-se uma bola ao acaso, a probabilidade de que ela seja azul ou verde é igual a 1/2.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "azul ou verde ... 1/2",
    cognitivo: {
      motivo: "Cobrar a soma de probabilidades de eventos mutuamente exclusivos.",
      palavraCritica: "1/2",
    },
    comentario: {
      resolucao: "CERTO. Total de bolas: 10. Bolas azuis ou verdes: 3+2=5. Probabilidade: 5/10 = 1/2.",
      fundamento: "Matemática — probabilidade (eventos mutuamente exclusivos).",
      macete: "P(A ou B) = (casos de A + casos de B) / total, quando A e B são mutuamente exclusivos.",
      erroComum: "Multiplicar as probabilidades individuais em vez de somar os casos favoráveis.",
      comoBancaPensa: "Item de fixação sobre a regra da soma em probabilidade."
    }
  },
  {
    id: "RL-027", disciplina: "Raciocínio Lógico-Matemático", assunto: "Análise combinatória", subassunto: "Combinação com restrição",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (combinatória)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.75,
    enunciado: "Uma comissão de 4 pessoas será formada a partir de 5 homens e 3 mulheres, devendo conter exatamente 2 mulheres. Nessas condições, o número de comissões distintas que podem ser formadas é igual a 40.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "exatamente 2 mulheres ... 40",
    cognitivo: {
      motivo: "Cobrar o cálculo de combinação com restrição de composição.",
      palavraCritica: "40",
    },
    comentario: {
      resolucao: "ERRADO. C(3,2)=3 (mulheres) e C(5,2)=10 (homens); o total de comissões é 3×10=30, e não 40 como afirmado.",
      fundamento: "Matemática — análise combinatória (combinação simples com restrição).",
      macete: "Multiplique as combinações de cada grupo restrito separadamente.",
      erroComum: "Somar em vez de multiplicar as combinações parciais, ou errar um dos cálculos de C(n,p).",
      comoBancaPensa: "Troca o resultado correto por um número numericamente próximo e plausível."
    }
  },
  {
    id: "RL-028", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Negação da condicional",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (lógica proposicional)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.82,
    enunciado: "Considere a proposição \"Se o suspeito confessou o crime, então ele será indiciado\", representada por P → Q, sendo P: \"o suspeito confessou o crime\" e Q: \"ele será indiciado\". A negação dessa proposição condicional equivale a \"o suspeito confessou o crime e não será indiciado\" (P ∧ ~Q).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "negação da condicional ... P ∧ ~Q",
    cognitivo: {
      motivo: "Cobrar a regra de negação da proposição condicional.",
      palavraCritica: "P ∧ ~Q",
    },
    comentario: {
      resolucao: "CERTO. A negação de uma condicional 'P → Q' é logicamente equivalente a 'P ∧ ~Q': afirma-se o antecedente (o suspeito confessou) e nega-se o consequente (não será indiciado).",
      fundamento: "Lógica proposicional — negação de proposições condicionais.",
      macete: "Negação de 'se P, então Q' = 'P e não Q'.",
      erroComum: "Negar ambos os termos ('~P → ~Q') ou inverter a condicional.",
      comoBancaPensa: "Cobra a equivalência lógica mais clássica e mais recorrente em provas CEBRASPE."
    }
  },
  {
    id: "RL-029", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Negação de proposição universal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (lógica de proposições categóricas)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.84,
    enunciado: "Considere a sentença \"Todo policial aprovado no concurso realizou o curso de formação.\" A negação dessa sentença é: \"Nenhum policial aprovado no concurso realizou o curso de formação.\"",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "Nenhum policial ... negação",
    cognitivo: {
      motivo: "Cobrar a regra correta de negação de proposições universais afirmativas.",
      palavraCritica: "Nenhum policial",
    },
    comentario: {
      resolucao: "ERRADO. A negação de 'Todo policial aprovado realizou o curso de formação' é 'Algum policial aprovado não realizou o curso de formação', e não 'Nenhum policial aprovado realizou o curso' — esta última é a proposição contrária, logicamente distinta da negação (contraditória).",
      fundamento: "Lógica proposicional — negação de proposições categóricas (quadro de oposições).",
      macete: "Negação de 'todo é' = 'algum não é'. Nunca 'nenhum é'.",
      erroComum: "Confundir a proposição contraditória (negação) com a contrária.",
      comoBancaPensa: "Um dos erros mais recorrentes e mais cobrados pela banca em lógica categórica."
    }
  },
  {
    id: "RL-030", disciplina: "Raciocínio Lógico-Matemático", assunto: "Aritmética", subassunto: "Critério de divisibilidade por 11",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (divisibilidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.7,
    enunciado: "O número 918.082 é divisível por 11, pois a diferença entre a soma dos algarismos de posições ímpares e a soma dos algarismos de posições pares (numerando da direita para a esquerda) é um múltiplo de 11, incluindo o zero.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "918.082 ... divisível por 11",
    cognitivo: {
      motivo: "Cobrar a aplicação do critério de divisibilidade por 11.",
      palavraCritica: "múltiplo de 11",
    },
    comentario: {
      resolucao: "CERTO. Numerando da direita para a esquerda: posições ímpares somam 2+0+1=3; posições pares somam 8+8+9=25. A diferença (3−25=−22) é múltiplo de 11. Conferindo: 918.082 ÷ 11 = 83.462, divisão exata.",
      fundamento: "Matemática — critérios de divisibilidade (regra do 11).",
      macete: "Alterne os algarismos (soma ímpares − soma pares); se der múltiplo de 11 (inclusive 0), é divisível.",
      erroComum: "Numerar os algarismos da esquerda para a direita, invertendo o resultado.",
      comoBancaPensa: "Cobra a aplicação literal e cuidadosa do critério, com verificação numérica real."
    }
  },
  {
    id: "RL-031", disciplina: "Raciocínio Lógico-Matemático", assunto: "Regra de três", subassunto: "Regra de três composta",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (regra de três composta)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.76,
    enunciado: "Se 10 escrivães elaboram 50 laudos periciais em 4 dias, mantida constante a produtividade individual de cada um, nas mesmas condições de produtividade, 8 escrivães elaborarão 60 laudos periciais em 6 dias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "8 escrivães ... 60 laudos ... 6 dias",
    cognitivo: {
      motivo: "Cobrar o raciocínio de regra de três composta (produtividade constante).",
      palavraCritica: "60 laudos ... 6 dias",
    },
    comentario: {
      resolucao: "CERTO. A taxa de produtividade é 50 laudos / (10 escrivães × 4 dias) = 1,25 laudos por pessoa-dia. Para 8 escrivães em 6 dias (48 pessoa-dias): 48 × 1,25 = 60 laudos, exatamente como afirmado.",
      fundamento: "Matemática — regra de três composta (grandezas diretamente proporcionais).",
      macete: "Calcule a taxa por unidade combinada (pessoa-dia) e multiplique pelo novo total.",
      erroComum: "Aplicar regra de três simples ignorando uma das variáveis (número de escrivães ou de dias).",
      comoBancaPensa: "Testa o raciocínio proporcional composto com dois fatores simultâneos."
    }
  },
  {
    id: "RL-032", disciplina: "Raciocínio Lógico-Matemático", assunto: "Matemática financeira", subassunto: "Juros simples",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (juros simples)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "Um capital de R$ 8.000 foi aplicado a uma taxa de juros simples de 2% ao mês. Após 10 meses, o montante acumulado será igual a R$ 9.800.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "montante ... R$ 9.800",
    cognitivo: {
      motivo: "Cobrar o cálculo de montante em juros simples.",
      palavraCritica: "R$ 9.800",
    },
    comentario: {
      resolucao: "ERRADO. Os juros simples acumulados são J=8.000×0,02×10=1.600. O montante correto é 8.000+1.600=R$ 9.600, e não R$ 9.800 como afirmado.",
      fundamento: "Matemática financeira — juros simples.",
      macete: "J = C×i×t (taxa em decimal). Montante = Capital + Juros.",
      erroComum: "Errar a multiplicação ou confundir com juros compostos.",
      comoBancaPensa: "Troca o resultado correto por um valor numericamente próximo."
    }
  },
  {
    id: "RL-033", disciplina: "Raciocínio Lógico-Matemático", assunto: "Estatística básica", subassunto: "Média ponderada",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (média ponderada)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "Um candidato obteve nota 7 na prova objetiva, com peso 3, e nota 5 na prova discursiva, com peso 2. Nessas condições, sua média ponderada final foi igual a 6,0.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "média ponderada ... 6,0",
    cognitivo: {
      motivo: "Cobrar o cálculo correto de média ponderada.",
      palavraCritica: "6,0",
    },
    comentario: {
      resolucao: "ERRADO. A média ponderada correta é (7×3+5×2)/(3+2) = 31/5 = 6,2, e não 6,0 como afirmado — o valor 6,0 corresponderia à média aritmética simples entre 7 e 5, que ignora os pesos.",
      fundamento: "Matemática — estatística básica (média ponderada).",
      macete: "Multiplique cada nota pelo peso, some tudo e divida pela soma dos pesos.",
      erroComum: "Calcular a média aritmética simples, esquecendo de ponderar pelos pesos.",
      comoBancaPensa: "Troca o resultado correto por um valor 'redondo' e tentador."
    }
  },
  {
    id: "RL-034", disciplina: "Raciocínio Lógico-Matemático", assunto: "Sequências numéricas", subassunto: "Progressão aritmética",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (progressão aritmética)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.72,
    enunciado: "Em uma progressão aritmética cujo primeiro termo é 4 e cuja razão é 7, o vigésimo termo dessa sequência é igual a 130.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "vigésimo termo ... 130",
    cognitivo: {
      motivo: "Cobrar a fórmula do termo geral da progressão aritmética.",
      palavraCritica: "130",
    },
    comentario: {
      resolucao: "ERRADO. O vigésimo termo é a20 = 4+(20−1)×7 = 4+133 = 137, e não 130 como afirmado.",
      fundamento: "Matemática — progressão aritmética (termo geral).",
      macete: "an = a1+(n−1)×r. Não esqueça de subtrair 1 de n.",
      erroComum: "Usar 20×7 em vez de 19×7 (esquecer o '−1' na fórmula).",
      comoBancaPensa: "Troca o resultado correto por um valor obtido com erro comum de fórmula."
    }
  },
  {
    id: "RL-035", disciplina: "Raciocínio Lógico-Matemático", assunto: "Análise combinatória", subassunto: "Princípio fundamental da contagem",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (princípio multiplicativo)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Uma delegacia possui 4 viaturas e 6 motoristas habilitados, podendo qualquer motorista conduzir qualquer viatura. Para formar uma dupla motorista-viatura, sem restrições adicionais, existem 20 combinações possíveis.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "20 combinações possíveis",
    cognitivo: {
      motivo: "Cobrar a aplicação do princípio fundamental da contagem.",
      palavraCritica: "20 combinações",
    },
    comentario: {
      resolucao: "ERRADO. Pelo princípio fundamental da contagem, o número total de duplas motorista-viatura é 4×6 = 24, e não 20 como afirmado.",
      fundamento: "Matemática — análise combinatória (princípio multiplicativo).",
      macete: "Etapas independentes: multiplique, nunca some, as possibilidades.",
      erroComum: "Somar 4+6=10 em vez de multiplicar, ou errar a conta de 4×6.",
      comoBancaPensa: "Troca o resultado correto por um número plausível, mas incorreto."
    }
  },
  {
    id: "RL-036", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Tabela-verdade da disjunção",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (tabela-verdade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "Considerando P e Q duas proposições simples, a disjunção \"P ou Q\" (P ∨ Q) é falsa apenas quando ambas as proposições, P e Q, forem falsas simultaneamente; em todas as demais combinações de valores lógicos, a disjunção é verdadeira.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "falsa apenas quando ... ambas falsas",
    cognitivo: {
      motivo: "Cobrar a tabela-verdade da disjunção inclusiva.",
      palavraCritica: "falsa apenas quando ambas falsas",
    },
    comentario: {
      resolucao: "CERTO. Na tabela-verdade da disjunção inclusiva (∨), o único caso em que o resultado é falso é quando P e Q são ambas falsas; em todos os outros três casos (V-V, V-F, F-V), a disjunção é verdadeira.",
      fundamento: "Lógica proposicional — tabela-verdade dos conectivos (disjunção).",
      macete: "'Ou' (∨) inclusivo: basta uma ser verdadeira para o todo ser verdadeiro.",
      erroComum: "Confundir com o 'ou exclusivo' (XOR), que é falso quando ambas têm o mesmo valor.",
      comoBancaPensa: "Item de fixação sobre a tabela-verdade do conectivo mais básico."
    }
  },
  {
    id: "RL-037", disciplina: "Raciocínio Lógico-Matemático", assunto: "Teoria dos conjuntos", subassunto: "Princípio da inclusão-exclusão",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (conjuntos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.78,
    enunciado: "Em uma unidade policial com 60 servidores, 35 possuem curso de tiro avançado, 28 possuem curso de direção veicular defensiva e 10 possuem ambos os cursos. Nessas condições, o número de servidores que não possui nenhum dos dois cursos é igual a 17.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "não possui nenhum ... 17",
    cognitivo: {
      motivo: "Cobrar o princípio da inclusão-exclusão em conjuntos.",
      palavraCritica: "17",
    },
    comentario: {
      resolucao: "ERRADO. A união dos dois grupos é 35+28−10=53. Subtraindo do total de servidores (60−53), o número de servidores sem nenhum dos cursos é 7, e não 17 como afirmado.",
      fundamento: "Matemática — teoria dos conjuntos (princípio da inclusão-exclusão).",
      macete: "|A∪B| = |A|+|B|−|A∩B|; 'nenhum dos dois' = total − |A∪B|.",
      erroComum: "Esquecer de subtrair a interseção, inflando o número de 'sem nenhum curso'.",
      comoBancaPensa: "Troca o resultado correto por um valor obtido ao esquecer a subtração da interseção."
    }
  },
  {
    id: "RL-038", disciplina: "Raciocínio Lógico-Matemático", assunto: "Sequências numéricas", subassunto: "Padrão recursivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (sequências e padrões)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.7,
    enunciado: "Considere a sequência numérica 3, 7, 15, 31, 63, ..., em que cada termo, a partir do segundo, é obtido multiplicando-se o termo anterior por 2 e somando-se 1 unidade. O próximo termo dessa sequência é igual a 127.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "próximo termo ... 127",
    cognitivo: {
      motivo: "Cobrar a identificação e aplicação de um padrão recursivo.",
      palavraCritica: "127",
    },
    comentario: {
      resolucao: "CERTO. Confirmando a regra (termo anterior×2+1) em toda a sequência dada, o próximo termo é 63×2+1 = 127.",
      fundamento: "Matemática — sequências numéricas (relações de recorrência).",
      macete: "Teste a regra proposta em ao menos dois pares consecutivos antes de aplicá-la.",
      erroComum: "Aplicar apenas parte da regra (ex.: só multiplicar, esquecendo de somar 1).",
      comoBancaPensa: "Item de fixação sobre reconhecimento e aplicação de padrões recursivos."
    }
  },
  {
    id: "RL-039", disciplina: "Raciocínio Lógico-Matemático", assunto: "Porcentagem", subassunto: "Percentuais sucessivos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (percentuais sucessivos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.84,
    enunciado: "Um produto de R$ 200 recebeu um desconto de 10% e, em seguida, sobre o novo valor, foi aplicado um acréscimo de 10%. Ao final dessas duas operações sucessivas, o preço do produto retornou exatamente ao valor original de R$ 200.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "retornou exatamente ao valor original",
    cognitivo: {
      motivo: "Cobrar a compreensão de que percentuais opostos sucessivos não se cancelam sobre bases diferentes.",
      palavraCritica: "retornou exatamente",
    },
    comentario: {
      resolucao: "ERRADO. Após o desconto de 10%, o valor passa a R$ 180 (200×0,9). O acréscimo de 10% incide sobre essa nova base: 180×1,1=R$ 198 — valor final inferior ao original de R$ 200, e não igual a ele.",
      fundamento: "Matemática — porcentagem (efeito de percentuais sucessivos sobre bases distintas).",
      macete: "Desconto e aumento de mesmo percentual NUNCA se cancelam — o resultado final é sempre menor que o original.",
      erroComum: "Presumir que -X% seguido de +X% sempre retorna ao valor inicial.",
      comoBancaPensa: "Generaliza uma crença intuitiva comum, mas matematicamente incorreta, para induzir ao erro."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE30);

/* Frequência de temas — Raciocínio Lógico-Matemático (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Raciocínio Lógico-Matemático");
  if (!d) { d = { disciplina: "Raciocínio Lógico-Matemático", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Razão, proporção e regra de três composta", freq: 80, tendencia: "alta", prob: 0.8 },
    { tema: "Lógica proposicional: negação de condicionais e categóricas", freq: 84, tendencia: "alta", prob: 0.84 },
    { tema: "Porcentagem (sucessiva) e juros simples", freq: 78, tendencia: "alta", prob: 0.78 },
    { tema: "Combinatória com restrição e conjuntos", freq: 76, tendencia: "estavel", prob: 0.76 },
  );
})();
