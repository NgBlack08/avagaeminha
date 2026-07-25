/* =====================================================================
   QUESTLAB — Lote 51: ESTATÍSTICA — MEDIDAS DE TENDÊNCIA CENTRAL
   Baseado em material de terceiros contendo questões REAIS de
   Certo/Errado de provas anteriores da CEBRASPE (2024-2025) sobre
   medidas de tendência central (média, mediana, moda, quartis).
   Questões da fonte original que dependiam de leitura de gráficos,
   histogramas ou tabelas específicas (imagens não disponíveis para
   verificação) foram DESCARTADAS. Foram aproveitados apenas os itens
   cujo enunciado trazia os dados numéricos completos no próprio
   texto, permitindo verificação independente dos cálculos.
   Cada enunciado ORIGINAL foi redigido do zero, com CONJUNTOS DE
   DADOS PRÓPRIOS (números diferentes dos utilizados pela banca),
   testando o mesmo conceito estatístico e recalculando o resultado
   correto de forma independente — nenhum enunciado ou conjunto
   numérico da fonte foi reproduzido literalmente. Cada tema recebeu
   um PAR C/E (versão espelhada) para reforçar o conceito. Todos os
   cálculos foram conferidos de forma independente.
   18 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE51 = [

  /* ===== MEDIANA — MÉDIA DOS DOIS VALORES CENTRAIS (CONJUNTO PAR) ===== */
  {
    id: "ES-080", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Cálculo da mediana (conjunto de tamanho par)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "O tempo de deslocamento (em minutos) de 8 viaturas até o local de determinada ocorrência foi registrado da seguinte forma: 12, 15, 15, 18, 20, 22, 25, 30. Com base nesses dados, é correto afirmar que a mediana do tempo de deslocamento das viaturas é igual a 19 minutos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mediana ... igual a 19 minutos",
    cognitivo: {
      motivo: "Cobrar o cálculo correto da mediana em um conjunto de tamanho par: a média aritmética dos dois valores centrais após a ordenação.",
      mede: "Estatística — Medidas de Tendência Central (cálculo da mediana).",
      pegadinhaDesc: "A banca pode apresentar apenas um dos dois valores centrais como sendo a mediana, esquecendo de calcular a média entre eles.",
      ondeErra: "Toma apenas o 4º ou o 5º valor da série ordenada como mediana, sem calcular a média entre os dois valores centrais.",
      palavraCritica: "igual a 19 minutos",
      tecnica: "Com 8 valores já ordenados (12, 15, 15, 18, 20, 22, 25, 30), a mediana de um conjunto de tamanho par é a média aritmética dos dois valores centrais (4º e 5º): (18 + 20) / 2 = 19.",
      regraMental: "Conjunto par: mediana = média dos dois valores do meio, nunca apenas um deles isoladamente."
    },
    comentario: {
      resolucao: "CERTO. Com os dados já ordenados (12, 15, 15, 18, 20, 22, 25, 30), a mediana de um conjunto de 8 valores (par) é a média aritmética dos dois valores centrais, o 4º (18) e o 5º (20): (18 + 20) / 2 = 19 minutos.",
      fundamento: "Doutrina de Estatística — cálculo da mediana em conjuntos de tamanho par.",
      macete: "Conjunto par: some os dois valores do meio e divida por 2.",
      erroComum: "Considerar apenas um dos dois valores centrais (18 ou 20) como sendo a mediana, sem calcular a média entre eles.",
      comoBancaPensa: "Item 'limpo' que exige o cálculo correto e completo da mediana em conjunto de tamanho par."
    }
  },
  {
    id: "ES-081", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Cálculo da mediana (conjunto de tamanho par)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    enunciado: "O tempo de deslocamento (em minutos) de 8 viaturas até o local de determinada ocorrência foi registrado da seguinte forma: 12, 15, 15, 18, 20, 22, 25, 30. Com base nesses dados, é correto afirmar que a mediana do tempo de deslocamento das viaturas é igual a 18 minutos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "mediana ... igual a 18 minutos",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a mediana de um conjunto par não é apenas um dos valores centrais isolados, mas a média entre eles.",
      mede: "Estatística — Medidas de Tendência Central (cálculo da mediana).",
      pegadinhaDesc: "A banca apresenta apenas o 4º valor da série ordenada (18) como se fosse a mediana completa.",
      ondeErra: "Esquece de calcular a média entre o 4º e o 5º valores, considerando apenas o primeiro deles como a mediana.",
      palavraCritica: "igual a 18 minutos",
      tecnica: "Com os dados ordenados (12, 15, 15, 18, 20, 22, 25, 30), a mediana de um conjunto de 8 valores (par) exige a média aritmética dos dois valores centrais — o 4º (18) e o 5º (20): (18 + 20) / 2 = 19, e não apenas 18.",
      regraMental: "Nunca tome só um dos dois valores centrais como mediana em conjunto par — é preciso somar e dividir por 2."
    },
    comentario: {
      resolucao: "ERRADO. A mediana correta é 19 minutos, e não 18. Com os dados ordenados (12, 15, 15, 18, 20, 22, 25, 30), a mediana de um conjunto de 8 valores é a média aritmética entre o 4º valor (18) e o 5º valor (20): (18 + 20) / 2 = 19.",
      fundamento: "Doutrina de Estatística — cálculo da mediana em conjuntos de tamanho par.",
      macete: "18 é só o 4º valor — a mediana real é a média entre o 4º e o 5º, que dá 19.",
      erroComum: "Parar no primeiro dos dois valores centrais e esquecer de calcular a média com o segundo.",
      comoBancaPensa: "Apresenta um valor real da série (18), mas que não corresponde à mediana correta, testando o cálculo completo."
    }
  },

  /* ===== MODA — VALOR MAIS FREQUENTE ===== */
  {
    id: "ES-082", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Cálculo da moda",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "A idade (em anos) de 9 suspeitos abordados em determinada operação policial foi registrada da seguinte forma: 22, 25, 25, 25, 28, 30, 32, 35, 40. Com base nesses dados, é correto afirmar que a moda das idades observadas é igual a 25 anos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "moda ... igual a 25 anos",
    cognitivo: {
      motivo: "Cobrar o cálculo correto da moda: o valor que ocorre com maior frequência no conjunto de dados.",
      mede: "Estatística — Medidas de Tendência Central (cálculo da moda).",
      pegadinhaDesc: "A banca pode atribuir a moda a um valor que aparece apenas uma vez no conjunto.",
      ondeErra: "Confunde a moda com o valor mínimo, o máximo ou qualquer outro valor que não seja o mais frequente.",
      palavraCritica: "igual a 25 anos",
      tecnica: "No conjunto de dados (22, 25, 25, 25, 28, 30, 32, 35, 40), o valor 25 aparece 3 vezes — mais do que qualquer outro valor, que aparece apenas uma vez cada. Portanto, a moda do conjunto é 25.",
      regraMental: "Moda = valor que mais se repete. Contar a frequência de cada valor é o único caminho seguro."
    },
    comentario: {
      resolucao: "CERTO. No conjunto de dados (22, 25, 25, 25, 28, 30, 32, 35, 40), o valor 25 é o único que se repete (aparece 3 vezes), sendo, portanto, a moda do conjunto.",
      fundamento: "Doutrina de Estatística — cálculo da moda (medida de tendência central).",
      macete: "Moda = valor mais frequente. Conte as repetições, não olhe só para a posição na lista.",
      erroComum: "Atribuir a moda a um valor que aparece apenas uma vez no conjunto de dados.",
      comoBancaPensa: "Item 'limpo' que exige a identificação correta do valor de maior frequência."
    }
  },
  {
    id: "ES-083", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Cálculo da moda",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "A idade (em anos) de 9 suspeitos abordados em determinada operação policial foi registrada da seguinte forma: 22, 25, 25, 25, 28, 30, 32, 35, 40. Com base nesses dados, é correto afirmar que a moda das idades observadas é igual a 22 anos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "moda ... igual a 22 anos",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a moda é o valor mais frequente (25), e não o primeiro valor da série ordenada (22).",
      mede: "Estatística — Medidas de Tendência Central (cálculo da moda).",
      pegadinhaDesc: "A banca atribui a moda ao valor mínimo do conjunto, que na verdade aparece apenas uma vez.",
      ondeErra: "Confunde a moda com o menor valor do conjunto de dados, ignorando a contagem de frequências.",
      palavraCritica: "igual a 22 anos",
      tecnica: "O valor 22 aparece apenas uma vez no conjunto de dados (22, 25, 25, 25, 28, 30, 32, 35, 40) — não é, portanto, a moda. A moda correta é 25, valor que se repete 3 vezes, mais do que qualquer outro.",
      regraMental: "O menor valor do conjunto não é automaticamente a moda — é preciso contar as repetições de cada valor."
    },
    comentario: {
      resolucao: "ERRADO. A moda correta é 25 anos, e não 22. O valor 22 aparece apenas uma vez no conjunto de dados (22, 25, 25, 25, 28, 30, 32, 35, 40), ao passo que o valor 25 se repete 3 vezes, sendo o mais frequente.",
      fundamento: "Doutrina de Estatística — cálculo da moda (medida de tendência central).",
      macete: "Menor valor da lista ≠ moda. Moda é sempre o valor mais repetido.",
      erroComum: "Confundir a moda com o valor mínimo (ou qualquer valor que não seja o mais frequente) do conjunto de dados.",
      comoBancaPensa: "Atribui a moda a um valor extremo do conjunto para testar se o candidato realmente conta as frequências."
    }
  },

  /* ===== MÉDIA ARITMÉTICA — CÁLCULO DIRETO ===== */
  {
    id: "ES-084", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Cálculo da média aritmética",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "A quantidade de armas de fogo apreendidas em 5 operações policiais distintas foi de 3, 5, 7, 9 e 11 unidades, respectivamente. Com base nesses dados, é correto afirmar que a média aritmética de armas apreendidas por operação é igual a 7.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "média aritmética ... igual a 7",
    cognitivo: {
      motivo: "Cobrar o cálculo direto da média aritmética: soma dos valores dividida pela quantidade de observações.",
      mede: "Estatística — Medidas de Tendência Central (cálculo da média aritmética).",
      pegadinhaDesc: "A banca pode apresentar como média um valor que não corresponde à soma dividida pela quantidade correta de observações.",
      ondeErra: "Divide a soma dos valores por um número de observações diferente do real, ou erra a soma dos valores.",
      palavraCritica: "igual a 7",
      tecnica: "A média aritmética é a soma dos valores dividida pela quantidade de observações: (3 + 5 + 7 + 9 + 11) / 5 = 35 / 5 = 7.",
      regraMental: "Média = soma de tudo dividida pela quantidade de valores. Simples, mas sempre confira o denominador."
    },
    comentario: {
      resolucao: "CERTO. A soma das quantidades de armas apreendidas nas 5 operações é 3 + 5 + 7 + 9 + 11 = 35. Dividindo pela quantidade de operações (5), obtém-se a média aritmética: 35 / 5 = 7.",
      fundamento: "Doutrina de Estatística — cálculo da média aritmética (medida de tendência central).",
      macete: "Média = soma ÷ quantidade de valores. Confira sempre os dois números antes de dividir.",
      erroComum: "Errar a soma dos valores ou dividir por uma quantidade de observações incorreta.",
      comoBancaPensa: "Item 'limpo' que exige apenas o cálculo direto e correto da média aritmética."
    }
  },
  {
    id: "ES-085", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Cálculo da média aritmética",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "A quantidade de armas de fogo apreendidas em 5 operações policiais distintas foi de 3, 5, 7, 9 e 11 unidades, respectivamente. Com base nesses dados, é correto afirmar que a média aritmética de armas apreendidas por operação é igual a 9.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "média aritmética ... igual a 9",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a média aritmética correta do conjunto é 7, e não 9 (que é apenas um dos valores observados).",
      mede: "Estatística — Medidas de Tendência Central (cálculo da média aritmética).",
      pegadinhaDesc: "A banca apresenta um dos valores do próprio conjunto (9) como se fosse a média calculada.",
      ondeErra: "Confunde um valor individual do conjunto de dados com a média aritmética calculada a partir de todos eles.",
      palavraCritica: "igual a 9",
      tecnica: "A média aritmética é a soma dos valores dividida pela quantidade de observações: (3 + 5 + 7 + 9 + 11) / 5 = 35 / 5 = 7, e não 9 — que é apenas um dos cinco valores observados, não o resultado do cálculo da média.",
      regraMental: "Um valor do conjunto não é a média só porque está 'no meio' da lista — é preciso somar tudo e dividir."
    },
    comentario: {
      resolucao: "ERRADO. A média aritmética correta é 7, e não 9. A soma dos valores (3 + 5 + 7 + 9 + 11 = 35) dividida pela quantidade de operações (5) resulta em 35 / 5 = 7 — o valor 9 é apenas uma das observações, não o resultado da média.",
      fundamento: "Doutrina de Estatística — cálculo da média aritmética (medida de tendência central).",
      macete: "Nunca confundir um valor do conjunto com o resultado do cálculo da média.",
      erroComum: "Apontar um valor qualquer do conjunto de dados como sendo a própria média aritmética, sem realizar o cálculo.",
      comoBancaPensa: "Apresenta um valor real, porém individual, da série como se fosse o resultado do cálculo da média."
    }
  },

  /* ===== PRIMEIRO QUARTIL x MÉDIA AMOSTRAL ===== */
  {
    id: "ES-086", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Primeiro quartil x média amostral",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, quartis)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.78,
    enunciado: "Supondo que os valores 50, 55, 60, 65 e 70 (em milhares de reais) constituam uma amostra de valores de propina apreendidos em cinco operações distintas, julgue: o primeiro quartil dessa amostra é inferior à média amostral.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "primeiro quartil ... inferior à média amostral",
    cognitivo: {
      motivo: "Cobrar a comparação entre o primeiro quartil (que reflete os valores mais baixos da distribuição) e a média amostral.",
      mede: "Estatística — Medidas de Tendência Central (quartis, comparação com a média).",
      pegadinhaDesc: "A banca pode afirmar o contrário, que o primeiro quartil é superior à média amostral.",
      ondeErra: "Não sabe calcular o primeiro quartil ou compara incorretamente seu valor com a média.",
      palavraCritica: "inferior à média amostral",
      tecnica: "Com os dados ordenados (50, 55, 60, 65, 70), a mediana é 60. O primeiro quartil (Q1) é a mediana da metade inferior dos dados (excluindo a mediana geral): {50, 55}, cuja média é (50 + 55) / 2 = 52,5. A média amostral é (50 + 55 + 60 + 65 + 70) / 5 = 300 / 5 = 60. Como 52,5 é menor que 60, o primeiro quartil é, de fato, inferior à média amostral.",
      regraMental: "Q1 reflete a 'metade de baixo' dos dados — costuma ficar abaixo da média quando a distribuição não é muito assimétrica para a esquerda."
    },
    comentario: {
      resolucao: "CERTO. O primeiro quartil (Q1) é calculado a partir da metade inferior dos dados ordenados (50, 55), resultando em 52,5. A média amostral é (50+55+60+65+70)/5 = 60. Como 52,5 é inferior a 60, o item está correto.",
      fundamento: "Doutrina de Estatística — quartis e média aritmética (medidas de posição e tendência central).",
      macete: "Q1 = mediana da metade inferior dos dados. Compare sempre com o resultado real da média, não com 'impressões'.",
      erroComum: "Inverter a comparação, afirmando que o primeiro quartil é superior à média amostral.",
      comoBancaPensa: "Item 'limpo' que exige o cálculo de duas medidas distintas (quartil e média) para uma comparação correta."
    }
  },
  {
    id: "ES-087", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Primeiro quartil x média amostral",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, quartis)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "Supondo que os valores 50, 55, 60, 65 e 70 (em milhares de reais) constituam uma amostra de valores de propina apreendidos em cinco operações distintas, julgue: o primeiro quartil dessa amostra é superior à média amostral.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "primeiro quartil ... superior à média amostral",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o primeiro quartil (52,5) é inferior — e não superior — à média amostral (60).",
      mede: "Estatística — Medidas de Tendência Central (quartis, comparação com a média).",
      pegadinhaDesc: "A banca inverte o resultado real da comparação entre o primeiro quartil e a média amostral.",
      ondeErra: "Calcula (ou assume) incorretamente que o primeiro quartil, por refletir 'apenas uma parte' dos dados, seria maior que a média.",
      palavraCritica: "superior à média amostral",
      tecnica: "O primeiro quartil (Q1) desse conjunto é 52,5 (média entre 50 e 55, a metade inferior dos dados ordenados). A média amostral é 60. Como 52,5 é MENOR que 60, o primeiro quartil é inferior — e não superior — à média amostral.",
      regraMental: "Confira sempre os dois valores calculados, sem assumir a comparação apenas por intuição."
    },
    comentario: {
      resolucao: "ERRADO. O primeiro quartil (Q1 = 52,5) é inferior — e não superior — à média amostral (60). O item inverte o resultado da comparação correta entre as duas medidas.",
      fundamento: "Doutrina de Estatística — quartis e média aritmética (medidas de posição e tendência central).",
      macete: "Refaça sempre os dois cálculos (Q1 e média) antes de aceitar qualquer comparação entre eles.",
      erroComum: "Assumir, sem calcular, que o primeiro quartil seria superior à média amostral.",
      comoBancaPensa: "Inverte o resultado de uma comparação numérica real para testar se o candidato de fato calcula, em vez de apenas estimar."
    }
  },

  /* ===== DISTRIBUIÇÃO PERFEITAMENTE SIMÉTRICA — MÉDIA = MEDIANA = MODA ===== */
  {
    id: "ES-088", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Distribuição simétrica — coincidência de média, mediana e moda",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, simetria)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Em um conjunto de dados cuja distribuição seja perfeitamente simétrica, a média aritmética, a mediana e a moda tendem a assumir o mesmo valor, sendo todas essas medidas classificadas como medidas de tendência central.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "distribuição ... perfeitamente simétrica ... tendem a assumir o mesmo valor",
    cognitivo: {
      motivo: "Cobrar que, em distribuições perfeitamente simétricas, média, mediana e moda tendem a coincidir.",
      mede: "Estatística — Medidas de Tendência Central (simetria da distribuição).",
      pegadinhaDesc: "A banca pode afirmar que essas três medidas nunca coincidem, ou que apenas duas delas são medidas de tendência central.",
      ondeErra: "Não sabe que a simetria perfeita da distribuição é justamente a condição que faz média, mediana e moda convergirem para o mesmo valor.",
      palavraCritica: "tendem a assumir o mesmo valor",
      tecnica: "Quando uma distribuição é perfeitamente simétrica (como a distribuição normal), as três principais medidas de tendência central — média aritmética, mediana e moda — tendem a coincidir no mesmo valor central, que corresponde também ao eixo de simetria da distribuição.",
      regraMental: "Simetria perfeita → média = mediana = moda. As três são medidas de tendência central."
    },
    comentario: {
      resolucao: "CERTO. Em uma distribuição perfeitamente simétrica, a média aritmética, a mediana e a moda tendem a assumir o mesmo valor, que corresponde ao eixo de simetria da distribuição — todas essas três medidas são classificadas como medidas de tendência central.",
      fundamento: "Doutrina de Estatística — medidas de tendência central e simetria de distribuições.",
      macete: "Distribuição simétrica: média = mediana = moda, todas coincidindo no centro.",
      erroComum: "Achar que essas três medidas nunca podem coincidir, ou que alguma delas não é medida de tendência central.",
      comoBancaPensa: "Item 'limpo' que reforça a relação central entre simetria e coincidência das três principais medidas."
    }
  },
  {
    id: "ES-089", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Distribuição simétrica — coincidência de média, mediana e moda",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, simetria)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "Em um conjunto de dados cuja distribuição seja perfeitamente simétrica, a moda tende a assumir um valor superior ao da média e ao da mediana, uma vez que essas três medidas de tendência central raramente coincidem em uma mesma distribuição.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "moda ... valor superior ... raramente coincidem",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que em distribuições perfeitamente simétricas as três medidas coincidem, e não que a moda supera as demais.",
      mede: "Estatística — Medidas de Tendência Central (simetria da distribuição).",
      pegadinhaDesc: "A banca afirma que a moda é sempre superior às demais medidas e que a coincidência entre elas é rara.",
      ondeErra: "Confunde a relação entre média, mediana e moda em distribuições ASSIMÉTRICAS (onde de fato podem se ordenar) com a situação de simetria perfeita, na qual elas coincidem.",
      palavraCritica: "valor superior ... raramente coincidem",
      tecnica: "É justamente na distribuição perfeitamente simétrica que média, mediana e moda tendem a COINCIDIR no mesmo valor — a diferenciação entre essas medidas (com uma sendo maior que as outras) ocorre em distribuições ASSIMÉTRICAS, e não nas simétricas.",
      regraMental: "Simetria perfeita = as três coincidem. É a assimetria que separa média, mediana e moda em valores diferentes."
    },
    comentario: {
      resolucao: "ERRADO. Em uma distribuição perfeitamente simétrica, a moda NÃO tende a superar a média e a mediana — pelo contrário, as três medidas tendem a coincidir no mesmo valor. É nas distribuições assimétricas que essas medidas se distanciam entre si.",
      fundamento: "Doutrina de Estatística — medidas de tendência central e simetria de distribuições.",
      macete: "Simetria = coincidência das três medidas. Diferença entre elas é sinal de assimetria, não de simetria.",
      erroComum: "Achar que a simetria perfeita é a condição em que as medidas de tendência central mais se distanciam entre si.",
      comoBancaPensa: "Inverte a relação real entre simetria e coincidência das medidas de tendência central."
    }
  },

  /* ===== MÉDIA = MEDIANA NÃO IMPLICA DISTRIBUIÇÃO SIMÉTRICA ===== */
  {
    id: "ES-090", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Média igual à mediana não implica simetria",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, simetria)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.76,
    enunciado: "Se um conjunto de dados for constituído pela quantidade de recursos julgados improcedentes em cinco varas distintas, a saber, {0, 0, 5, 7, 13}, então tal conjunto de dados possui média igual à mediana, distribuindo-se, contudo, de forma assimétrica em torno dessas medidas de posição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "média igual à mediana ... de forma assimétrica",
    cognitivo: {
      motivo: "Cobrar que a igualdade entre média e mediana não garante, por si só, que a distribuição dos dados seja simétrica.",
      mede: "Estatística — Medidas de Tendência Central (relação entre média, mediana e simetria).",
      pegadinhaDesc: "A banca pode afirmar que, sempre que a média for igual à mediana, a distribuição será necessariamente simétrica.",
      ondeErra: "Confunde 'média igual à mediana' (condição necessária, mas não suficiente) com 'distribuição simétrica' (condição mais forte).",
      palavraCritica: "média igual à mediana ... de forma assimétrica",
      tecnica: "No conjunto {0, 0, 5, 7, 13}, a média é (0+0+5+7+13)/5 = 25/5 = 5, e a mediana (valor central após ordenação) também é 5 — logo, média = mediana = 5. No entanto, os desvios em torno desse valor central são -5, -5, 0, +2 e +8: não há simetria (os valores não se distribuem espelhados de forma equilibrada de ambos os lados do centro). Isso mostra que a igualdade entre média e mediana não implica, por si só, simetria da distribuição.",
      regraMental: "Média = mediana é necessário para simetria perfeita, mas não é suficiente — pode haver essa igualdade em distribuições assimétricas."
    },
    comentario: {
      resolucao: "CERTO. No conjunto {0, 0, 5, 7, 13}, tanto a média quanto a mediana são iguais a 5. Ainda assim, os valores não se distribuem de forma simétrica em torno desse centro (os desvios são -5, -5, 0, +2 e +8, sem espelhamento equilibrado) — a igualdade entre média e mediana não implica, portanto, simetria da distribuição.",
      fundamento: "Doutrina de Estatística — relação entre média, mediana e simetria de distribuições.",
      macete: "Média = mediana não garante simetria — é condição necessária, mas não suficiente.",
      erroComum: "Achar que toda vez que média e mediana coincidem, a distribuição dos dados é automaticamente simétrica.",
      comoBancaPensa: "Item 'limpo' que exige entender a diferença entre uma condição necessária e uma condição suficiente para a simetria."
    }
  },
  {
    id: "ES-091", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Média igual à mediana não implica simetria",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, simetria)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.72,
    enunciado: "Sempre que, em um conjunto de dados, a média aritmética for numericamente igual à mediana, pode-se concluir, necessariamente, que a distribuição desses dados é simétrica em torno desse valor central comum.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "sempre que ... pode-se concluir, necessariamente, que a distribuição ... é simétrica",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a igualdade entre média e mediana não é condição suficiente para concluir simetria da distribuição.",
      mede: "Estatística — Medidas de Tendência Central (relação entre média, mediana e simetria).",
      pegadinhaDesc: "A banca generaliza indevidamente, tratando a igualdade entre média e mediana como prova definitiva de simetria.",
      ondeErra: "Não percebe que é possível construir conjuntos de dados assimétricos nos quais, ainda assim, média e mediana coincidam numericamente.",
      palavraCritica: "necessariamente ... simétrica",
      tecnica: "É possível ter conjuntos de dados em que a média seja numericamente igual à mediana, mas cuja distribuição seja assimétrica — por exemplo, {0, 0, 5, 7, 13}, em que ambas valem 5, mas os desvios em torno desse valor (-5, -5, 0, +2, +8) não são simétricos. A igualdade entre média e mediana, portanto, não permite concluir simetria de forma automática.",
      regraMental: "Média = mediana não garante simetria — sempre existem contraexemplos possíveis com dados assimétricos."
    },
    comentario: {
      resolucao: "ERRADO. A igualdade numérica entre média e mediana não permite concluir, necessariamente, que a distribuição seja simétrica. É possível haver conjuntos de dados assimétricos (como {0, 0, 5, 7, 13}, em que ambas valem 5) em que essa igualdade ocorre sem simetria real na distribuição.",
      fundamento: "Doutrina de Estatística — relação entre média, mediana e simetria de distribuições.",
      macete: "'Sempre que média = mediana, distribuição é simétrica' está sempre errado — existem contraexemplos.",
      erroComum: "Tratar a igualdade entre média e mediana como prova suficiente e automática de simetria da distribuição.",
      comoBancaPensa: "Generaliza uma condição necessária (mas não suficiente) como se fosse garantia absoluta de simetria."
    }
  },

  /* ===== RECOMPOSIÇÃO DE MÉDIAS AO COMBINAR GRUPOS ===== */
  {
    id: "ES-092", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Recomposição de médias ao combinar grupos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, médias combinadas)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "Em determinada delegacia, 8 policiais têm idade média de 38 anos. Para reforçar o efetivo, foram admitidos mais 4 novos policiais. Considerando que, após essa admissão, a idade média do grupo combinado de 12 policiais passou a ser de 35 anos, é correto concluir que a idade média dos 4 novos policiais é inferior a 30 anos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "idade média dos 4 novos policiais é inferior a 30 anos",
    cognitivo: {
      motivo: "Cobrar a recomposição de médias ao combinar dois grupos: a partir da soma total dos dois grupos, isolar a média do subgrupo desconhecido.",
      mede: "Estatística — Medidas de Tendência Central (recomposição de médias, problemas combinados).",
      pegadinhaDesc: "A banca pode apresentar um limiar de comparação inconsistente com o cálculo real da média dos novos policiais.",
      ondeErra: "Tenta estimar a média do subgrupo novo sem calcular corretamente as somas totais de idade antes e depois da admissão.",
      palavraCritica: "inferior a 30 anos",
      tecnica: "Soma das idades dos 8 policiais originais: 8 × 38 = 304 anos. Soma das idades do grupo combinado (12 policiais, média 35): 12 × 35 = 420 anos. Soma das idades dos 4 novos policiais: 420 − 304 = 116 anos. Média de idade dos novos: 116 / 4 = 29 anos — que é, de fato, inferior a 30.",
      regraMental: "Para recompor médias de grupos combinados: some totais (média × quantidade), subtraia o que já se sabe, e divida pelo restante."
    },
    comentario: {
      resolucao: "CERTO. A soma das idades dos 8 policiais originais é 8×38=304. A soma das idades do grupo combinado (12 policiais, média 35) é 12×35=420. A soma das idades dos 4 novos policiais é 420−304=116, resultando em uma média de 116/4=29 anos — inferior a 30, como afirma o item.",
      fundamento: "Doutrina de Estatística — recomposição de médias em grupos combinados (problemas de média ponderada).",
      macete: "Some os totais (média × n), subtraia o grupo conhecido, divida pelo grupo restante.",
      erroComum: "Tentar 'estimar' a média do novo grupo sem recompor corretamente as somas totais de idade envolvidas.",
      comoBancaPensa: "Item 'limpo' que exige o raciocínio completo de recomposição de médias a partir de somas totais."
    }
  },
  {
    id: "ES-093", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Recomposição de médias ao combinar grupos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, médias combinadas)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.74,
    enunciado: "Em determinada delegacia, 8 policiais têm idade média de 38 anos. Para reforçar o efetivo, foram admitidos mais 4 novos policiais. Considerando que, após essa admissão, a idade média do grupo combinado de 12 policiais passou a ser de 35 anos, é correto concluir que a idade média dos 4 novos policiais é superior a 30 anos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "idade média dos 4 novos policiais é superior a 30 anos",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a média correta dos 4 novos policiais (29 anos) é inferior — e não superior — a 30 anos.",
      mede: "Estatística — Medidas de Tendência Central (recomposição de médias, problemas combinados).",
      pegadinhaDesc: "A banca inverte o resultado real do cálculo, testando se o candidato apenas 'estima' em vez de calcular.",
      ondeErra: "Assume, sem calcular, que a média dos novos policiais deveria ser próxima ou superior à média geral combinada (35 anos).",
      palavraCritica: "superior a 30 anos",
      tecnica: "Recompondo as somas: 8 × 38 = 304 (grupo original); 12 × 35 = 420 (grupo combinado); 420 − 304 = 116 (soma dos 4 novos); 116 / 4 = 29 anos — inferior, e não superior, a 30 anos.",
      regraMental: "Não assuma a média do subgrupo desconhecido por intuição — sempre recomponha as somas totais antes de comparar."
    },
    comentario: {
      resolucao: "ERRADO. A média de idade dos 4 novos policiais é de 29 anos (calculada por 116/4, onde 116 = 420 − 304), e não superior a 30 anos como afirma o item — 29 é inferior a 30.",
      fundamento: "Doutrina de Estatística — recomposição de médias em grupos combinados (problemas de média ponderada).",
      macete: "Sempre recomponha as somas (média × n) antes de comparar — não assuma o resultado por intuição.",
      erroComum: "Estimar, sem calcular, que a média do subgrupo desconhecido deveria se aproximar da média geral do grupo combinado.",
      comoBancaPensa: "Inverte o resultado real do cálculo de recomposição de médias para testar se o candidato de fato resolve o problema."
    }
  },

  /* ===== QUARTIL EM CONJUNTO DE DADOS COM VALORES REPETIDOS ===== */
  {
    id: "ES-094", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Cálculo do primeiro quartil (conjunto com valores repetidos)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, quartis)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.76,
    enunciado: "Considerando que {1, 2, 2, 2, 2, 3, 4, 4, 4, 9} seja um conjunto de dados referente à quantidade de ocorrências registradas em 10 dias consecutivos, julgue o item: o primeiro quartil desse conjunto de dados é igual a 2.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "primeiro quartil ... igual a 2",
    cognitivo: {
      motivo: "Cobrar o cálculo do primeiro quartil em um conjunto com valores repetidos, usando a mediana da metade inferior dos dados.",
      mede: "Estatística — Medidas de Tendência Central (quartis, conjunto de dados com repetições).",
      pegadinhaDesc: "A banca pode atribuir ao primeiro quartil um valor da metade superior dos dados, em vez da metade inferior.",
      ondeErra: "Calcula o quartil a partir da metade errada dos dados (superior em vez de inferior), ou erra a mediana dessa metade.",
      palavraCritica: "igual a 2",
      tecnica: "Com os 10 valores já ordenados (1, 2, 2, 2, 2, 3, 4, 4, 4, 9), a metade inferior corresponde aos 5 primeiros valores: {1, 2, 2, 2, 2}. A mediana dessa metade (o valor central, 3º de 5) é 2. Logo, o primeiro quartil (Q1) do conjunto é 2.",
      regraMental: "Q1 = mediana da metade INFERIOR dos dados ordenados (excluindo, se necessário, a mediana geral)."
    },
    comentario: {
      resolucao: "CERTO. A metade inferior dos dados ordenados (1, 2, 2, 2, 2, 3, 4, 4, 4, 9) é {1, 2, 2, 2, 2}, cuja mediana (valor central) é 2. Esse é o valor do primeiro quartil (Q1) do conjunto.",
      fundamento: "Doutrina de Estatística — cálculo de quartis em conjuntos de dados com valores repetidos.",
      macete: "Q1 sempre vem da metade de baixo dos dados ordenados, nunca da metade de cima.",
      erroComum: "Calcular o quartil a partir da metade superior dos dados, em vez da metade inferior correspondente ao Q1.",
      comoBancaPensa: "Item 'limpo' que exige a correta segmentação dos dados ordenados para o cálculo do primeiro quartil."
    }
  },
  {
    id: "ES-095", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Cálculo do primeiro quartil (conjunto com valores repetidos)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, quartis)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.72,
    enunciado: "Considerando que {1, 2, 2, 2, 2, 3, 4, 4, 4, 9} seja um conjunto de dados referente à quantidade de ocorrências registradas em 10 dias consecutivos, julgue o item: o primeiro quartil desse conjunto de dados é igual a 4.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "primeiro quartil ... igual a 4",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o primeiro quartil (2) corresponde à metade inferior, e não à metade superior (onde está o valor 4).",
      mede: "Estatística — Medidas de Tendência Central (quartis, conjunto de dados com repetições).",
      pegadinhaDesc: "A banca calcula corretamente uma mediana, mas da metade ERRADA dos dados (a superior, que corresponderia ao terceiro quartil).",
      ondeErra: "Confunde o primeiro quartil (metade inferior) com o terceiro quartil (metade superior) do conjunto de dados.",
      palavraCritica: "igual a 4",
      tecnica: "O valor 4 é, na verdade, a mediana da metade SUPERIOR dos dados ordenados ({3, 4, 4, 4, 9}), que corresponde ao terceiro quartil (Q3), e não ao primeiro. O primeiro quartil (Q1) é calculado a partir da metade inferior ({1, 2, 2, 2, 2}), resultando em 2.",
      regraMental: "Metade de baixo = Q1. Metade de cima = Q3. Nunca trocar as duas metades entre si."
    },
    comentario: {
      resolucao: "ERRADO. O valor 4 corresponde ao terceiro quartil (Q3), calculado a partir da metade superior dos dados ({3, 4, 4, 4, 9}) — e não ao primeiro quartil (Q1), que é 2, calculado a partir da metade inferior ({1, 2, 2, 2, 2}).",
      fundamento: "Doutrina de Estatística — cálculo de quartis em conjuntos de dados com valores repetidos.",
      macete: "Metade de baixo → Q1. Metade de cima → Q3. Não confundir os dois quartis extremos.",
      erroComum: "Calcular corretamente um quartil, mas atribuí-lo ao rótulo errado (Q1 em vez de Q3, ou vice-versa).",
      comoBancaPensa: "Apresenta um valor real do conjunto (o Q3 correto), mas o rotula incorretamente como sendo o primeiro quartil."
    }
  },

  /* ===== SENSIBILIDADE DA MÉDIA A OUTLIERS x ROBUSTEZ DA MEDIANA ===== */
  {
    id: "ES-096", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Sensibilidade da média a outliers x robustez da mediana",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, outliers)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "Considere o conjunto de salários (em milhares de reais) de 5 servidores: 3, 4, 4, 5 e 6. Se o valor 6 for substituído por 60 (um valor discrepante), a média aritmética do conjunto sofrerá alteração significativa, ao passo que a mediana permanecerá igual a 4, evidenciando a maior sensibilidade da média a valores extremos (outliers) em comparação com a mediana.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "média ... alteração significativa ... mediana permanecerá igual a 4 ... maior sensibilidade da média",
    cognitivo: {
      motivo: "Cobrar que a média é sensível a valores extremos (outliers), enquanto a mediana é uma medida robusta a esse tipo de distorção.",
      mede: "Estatística — Medidas de Tendência Central (sensibilidade a outliers, robustez da mediana).",
      pegadinhaDesc: "A banca pode afirmar que média e mediana são igualmente sensíveis a valores extremos.",
      ondeErra: "Não sabe que a mediana, por depender apenas da posição central dos dados ordenados, tende a não se alterar diante de um valor extremo isolado.",
      palavraCritica: "alteração significativa ... permanecerá igual a 4 ... maior sensibilidade da média",
      tecnica: "Antes da substituição: média = (3+4+4+5+6)/5 = 22/5 = 4,4; mediana = 4. Após substituir 6 por 60: média = (3+4+4+5+60)/5 = 76/5 = 15,2 (alteração significativa); mediana (dados ordenados: 3,4,4,5,60) permanece o valor central = 4 (inalterada). Isso demonstra que a média é sensível a outliers, e a mediana é robusta a eles.",
      regraMental: "Outlier distorce a média (que soma tudo), mas raramente move a mediana (que só olha a posição central)."
    },
    comentario: {
      resolucao: "CERTO. Antes da substituição, a média é 4,4 e a mediana é 4. Após substituir 6 por 60, a média salta para 15,2 (alteração significativa), enquanto a mediana permanece igual a 4 — evidenciando que a média é mais sensível a valores extremos (outliers) do que a mediana.",
      fundamento: "Doutrina de Estatística — sensibilidade das medidas de tendência central a valores extremos (outliers).",
      macete: "Outlier: média dispara, mediana quase não se move — por isso a mediana é preferida em dados com valores extremos.",
      erroComum: "Achar que média e mediana são igualmente afetadas pela presença de um valor discrepante no conjunto de dados.",
      comoBancaPensa: "Item 'limpo' que ilustra numericamente, com um exemplo concreto, a diferença de robustez entre média e mediana."
    }
  },
  {
    id: "ES-097", disciplina: "Estatística", assunto: "Medidas de Tendência Central", subassunto: "Sensibilidade da média a outliers x robustez da mediana",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central, outliers)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "Considere o conjunto de salários (em milhares de reais) de 5 servidores: 3, 4, 4, 5 e 6. Se o valor 6 for substituído por 60 (um valor discrepante), tanto a média aritmética quanto a mediana do conjunto sofrerão alteração proporcional e de mesma magnitude, uma vez que ambas as medidas são igualmente sensíveis à presença de valores extremos (outliers).",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "ambas as medidas são igualmente sensíveis ... alteração proporcional e de mesma magnitude",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a mediana é robusta a outliers, ao contrário da média, que é sensível a eles.",
      mede: "Estatística — Medidas de Tendência Central (sensibilidade a outliers, robustez da mediana).",
      pegadinhaDesc: "A banca afirma que ambas as medidas reagem da mesma forma a um valor extremo, igualando indevidamente média e mediana.",
      ondeErra: "Ignora que a mediana, por depender apenas da posição central dos dados ordenados, não se altera com a simples troca de um valor extremo, ao contrário da média.",
      palavraCritica: "ambas as medidas são igualmente sensíveis ... mesma magnitude",
      tecnica: "Antes da substituição: média = 4,4; mediana = 4. Após substituir 6 por 60: média = 15,2 (alteração de mais de 10 pontos); mediana permanece 4 (nenhuma alteração). As duas medidas reagem de forma completamente diferente ao outlier — a média é muito mais sensível, e a mediana é robusta a esse tipo de distorção.",
      regraMental: "Nunca tratar média e mediana como igualmente sensíveis a outliers — a mediana é a medida robusta, a média não é."
    },
    comentario: {
      resolucao: "ERRADO. A mediana permanece igual a 4 mesmo após a substituição do valor 6 por 60, ao passo que a média salta de 4,4 para 15,2 — as duas medidas não reagem de forma igual ou proporcional a um valor extremo; a mediana é robusta a outliers, e a média não é.",
      fundamento: "Doutrina de Estatística — sensibilidade das medidas de tendência central a valores extremos (outliers).",
      macete: "Mediana é robusta a outliers; média não é — nunca tratá-las como igualmente sensíveis.",
      erroComum: "Achar que qualquer alteração em um valor do conjunto afeta média e mediana na mesma proporção.",
      comoBancaPensa: "Generaliza indevidamente a reação das duas medidas a um valor extremo, ignorando a robustez conhecida da mediana."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE51);

/* Frequência de temas — Estatística (Medidas de Tendência Central) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Estatística");
  if (!d) { d = { disciplina: "Estatística", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Cálculo de mediana, moda e média aritmética", freq: 80, tendencia: "alta", prob: 0.8 },
    { tema: "Quartis — cálculo e comparação com a média", freq: 76, tendencia: "media", prob: 0.76 },
    { tema: "Simetria da distribuição e relação entre média, mediana e moda", freq: 78, tendencia: "media", prob: 0.78 },
    { tema: "Recomposição de médias e sensibilidade a outliers", freq: 78, tendencia: "alta", prob: 0.78 },
  );
})();
