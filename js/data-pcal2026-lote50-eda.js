/* =====================================================================
   QUESTLAB — Lote 50: ESTATÍSTICA — ANÁLISE EXPLORATÓRIA DE DADOS
   Baseado em material de terceiros contendo questões REAIS de
   Certo/Errado de provas anteriores da CEBRASPE (2013 a 2025) sobre
   conceitos de análise exploratória de dados (tipos de variáveis,
   amostragem, visualização de dados, tabelas de frequência,
   histogramas). Questões da fonte original que dependiam de leitura
   de gráficos/tabelas específicas (imagens não disponíveis para
   verificação) foram DESCARTADAS; foram aproveitados apenas os itens
   puramente conceituais, cuja correção pôde ser verificada de forma
   independente com base na doutrina padrão de estatística descritiva.
   Cada enunciado ORIGINAL foi redigido do zero, testando o mesmo
   conceito e a mesma resposta correta identificada pela banca, com
   um PAR C/E adicional (versão espelhada) para reforçar cada
   conceito. Gabarito de cada item novo verificado de forma
   independente.
   20 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE50 = [

  /* ===== ESTATÍSTICA (AMOSTRA) x PARÂMETRO (POPULAÇÃO) ===== */
  {
    id: "ES-060", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Estatística x parâmetro (amostra x população)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (conceitos de amostragem)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Uma estatística é uma medida numérica calculada a partir dos dados de uma amostra, ao passo que um parâmetro é uma medida numérica que descreve uma característica da população como um todo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "estatística ... amostra ... parâmetro ... população",
    cognitivo: {
      motivo: "Cobrar a distinção conceitual básica entre estatística (medida da amostra) e parâmetro (medida da população).",
      palavraCritica: "estatística ... amostra ... parâmetro ... população",
    },
    comentario: {
      resolucao: "CERTO. Uma estatística é uma medida numérica calculada a partir dos dados de uma amostra (ex.: média amostral, desvio padrão amostral), ao passo que um parâmetro é uma medida numérica que descreve uma característica da população como um todo (ex.: média populacional).",
      fundamento: "Doutrina de Estatística — conceitos fundamentais de amostragem e inferência estatística.",
      macete: "Estatística = amostra. Parâmetro = população. Nunca inverter.",
      erroComum: "Trocar as definições, atribuindo 'estatística' à população e 'parâmetro' à amostra.",
      comoBancaPensa: "Item 'limpo' que testa a distinção mais básica e mais cobrada da inferência estatística."
    }
  },
  {
    id: "ES-061", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Estatística x parâmetro (amostra x população)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (conceitos de amostragem)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "Um parâmetro é uma medida numérica calculada a partir dos dados de uma amostra, ao passo que uma estatística é uma medida numérica que descreve uma característica da população como um todo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "parâmetro ... amostra ... estatística ... população",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que é a estatística (e não o parâmetro) que se refere à amostra, e o parâmetro (e não a estatística) que se refere à população.",
      palavraCritica: "parâmetro ... amostra ... estatística ... população",
    },
    comentario: {
      resolucao: "ERRADO. É a estatística que é medida numérica calculada a partir dos dados de uma amostra, e o parâmetro que descreve uma característica da população como um todo — o item inverte exatamente essas definições.",
      fundamento: "Doutrina de Estatística — conceitos fundamentais de amostragem e inferência estatística.",
      macete: "Estatística = amostra. Parâmetro = população. O item trocou os dois.",
      erroComum: "Aceitar a inversão entre as definições de estatística e parâmetro sem perceber a troca.",
      comoBancaPensa: "Inverte deliberadamente os dois conceitos centrais da inferência estatística para testar a memorização exata."
    }
  },

  /* ===== VARIÁVEL QUANTITATIVA CONTÍNUA — QUALQUER VALOR NUMÉRICO ===== */
  {
    id: "ES-062", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Variáveis quantitativas contínuas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (tipos de variáveis)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "Variáveis quantitativas contínuas podem assumir qualquer valor numérico dentro de um intervalo, mesmo que esse valor não corresponda a um número inteiro, como ocorre, por exemplo, com a altura ou o peso de uma pessoa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "qualquer valor numérico ... mesmo que ... não corresponda a um número inteiro",
    cognitivo: {
      motivo: "Cobrar que variáveis quantitativas contínuas admitem valores fracionários, obtidas por mensuração.",
      palavraCritica: "qualquer valor numérico ... não corresponda a um número inteiro",
    },
    comentario: {
      resolucao: "CERTO. Variáveis quantitativas contínuas, obtidas por mensuração, podem assumir qualquer valor numérico dentro de um intervalo, inclusive valores fracionários — como ocorre com a altura ou o peso de uma pessoa —, ao contrário das variáveis discretas, que só assumem valores inteiros.",
      fundamento: "Doutrina de Estatística — classificação de variáveis (quantitativas contínuas x discretas).",
      macete: "Contínua = mensuração, pode ter fração. Discreta = contagem, só inteiro.",
      erroComum: "Achar que variáveis quantitativas contínuas só podem assumir valores inteiros.",
      comoBancaPensa: "Item 'limpo' que reforça a característica central que distingue variáveis contínuas de discretas."
    }
  },
  {
    id: "ES-063", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Variáveis quantitativas contínuas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (tipos de variáveis)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "Variáveis quantitativas contínuas, por definição, somente podem assumir valores numéricos inteiros, sendo vedada a ocorrência de valores fracionários, os quais caracterizariam uma variável quantitativa discreta.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "somente ... valores numéricos inteiros ... vedada ... valores fracionários",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que variáveis contínuas admitem valores fracionários, e que essa admissão não as torna discretas.",
      palavraCritica: "somente ... valores numéricos inteiros ... vedada",
    },
    comentario: {
      resolucao: "ERRADO. Variáveis quantitativas contínuas admitem valores fracionários (obtidas por mensuração, como altura e peso) — é a variável quantitativa discreta (obtida por contagem) que é restrita a valores inteiros. O item inverte essa classificação.",
      fundamento: "Doutrina de Estatística — classificação de variáveis (quantitativas contínuas x discretas).",
      macete: "Restrição a valores inteiros é da discreta, não da contínua — nunca inverter.",
      erroComum: "Atribuir à variável contínua a restrição a valores inteiros, que pertence à variável discreta.",
      comoBancaPensa: "Inverte as características centrais de contínua e discreta para testar a memorização exata da distinção."
    }
  },

  /* ===== VARIÁVEL DUMMY — K CATEGORIAS EXIGEM K-1 DUMMIES ===== */
  {
    id: "ES-064", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Variáveis dummy (binárias)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (variáveis dummy)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "Uma variável qualitativa expressa por três categorias distintas não pode ser representada por uma única variável dummy (binária), sendo necessárias, no mínimo, duas variáveis dummy para codificar todas as categorias sem redundância.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não pode ser representada por uma única variável dummy ... duas variáveis dummy",
    cognitivo: {
      motivo: "Cobrar que uma variável qualitativa com k categorias exige k-1 variáveis dummy para codificação completa, sem redundância.",
      palavraCritica: "não pode ser representada ... duas variáveis dummy",
    },
    comentario: {
      resolucao: "CERTO. Uma variável qualitativa com três categorias não pode ser representada por uma única variável dummy (binária, que só distingue 2 valores) — são necessárias, no mínimo, duas variáveis dummy para codificar as três categorias sem redundância (regra geral: k categorias exigem k-1 dummies).",
      fundamento: "Doutrina de Estatística — codificação de variáveis qualitativas (variáveis dummy).",
      macete: "k categorias → k-1 dummies. Nunca apenas uma dummy para 3 ou mais categorias.",
      erroComum: "Achar que uma única variável dummy é suficiente para representar qualquer variável qualitativa, independentemente do número de categorias.",
      comoBancaPensa: "Item 'limpo' que exige conhecer a regra de codificação k-1 para variáveis dummy."
    }
  },
  {
    id: "ES-065", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Variáveis dummy (binárias)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (variáveis dummy)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.72,
    enunciado: "Uma variável qualitativa expressa por três categorias pode ser representada por uma variável dummy, uma vez que a variável dummy, por definição, é capaz de codificar qualquer número de categorias em um único indicador binário.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "pode ser representada por uma variável dummy ... qualquer número de categorias",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que uma única variável dummy (binária) só distingue 2 categorias, não sendo suficiente para 3 ou mais.",
      palavraCritica: "qualquer número de categorias em um único indicador binário",
    },
    comentario: {
      resolucao: "ERRADO. A variável dummy é binária por definição, distinguindo no máximo 2 categorias isoladamente. Uma variável qualitativa com 3 categorias exige, no mínimo, 2 variáveis dummy para codificação completa sem redundância — não pode ser representada por uma única dummy.",
      fundamento: "Doutrina de Estatística — codificação de variáveis qualitativas (variáveis dummy).",
      macete: "Uma dummy = só 2 categorias. Nunca 'qualquer número' em um único indicador binário.",
      erroComum: "Achar que a variável dummy, sozinha, pode codificar qualquer quantidade de categorias.",
      comoBancaPensa: "Generaliza indevidamente a capacidade de uma única variável dummy, ignorando sua natureza binária."
    }
  },

  /* ===== MÉDIA EXIGE VARIÁVEL MÉTRICA (QUANTITATIVA) ===== */
  {
    id: "ES-066", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Cálculo da média — exigência de variável métrica",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Para o cálculo da média aritmética, a variável deve ser necessariamente do tipo métrica (quantitativa), não sendo possível calcular uma média aritmética significativa a partir de dados de natureza meramente qualitativa nominal ou ordinal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "necessariamente do tipo métrica ... não sendo possível ... qualitativa",
    cognitivo: {
      motivo: "Cobrar que a média aritmética exige variável quantitativa (métrica), não sendo aplicável a variáveis qualitativas.",
      palavraCritica: "necessariamente do tipo métrica ... não sendo possível",
    },
    comentario: {
      resolucao: "CERTO. O cálculo da média aritmética exige que a variável seja do tipo métrica (quantitativa) — não é possível calcular uma média aritmética significativa a partir de dados qualitativos nominais ou ordinais, ainda que codificados numericamente. Para esses casos, usam-se moda ou mediana.",
      fundamento: "Doutrina de Estatística — medidas de tendência central e níveis de mensuração.",
      macete: "Média = variável métrica. Nominal → moda. Ordinal → mediana.",
      erroComum: "Achar que a média aritmética pode ser calculada para qualquer variável, inclusive qualitativas codificadas numericamente.",
      comoBancaPensa: "Item 'limpo' que reforça a exigência de nível de mensuração adequado para cada medida de tendência central."
    }
  },
  {
    id: "ES-067", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Cálculo da média — exigência de variável métrica",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas de tendência central)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "A média aritmética pode ser calculada de forma estatisticamente significativa para qualquer tipo de variável, inclusive para variáveis qualitativas nominais e ordinais, bastando que suas categorias sejam previamente codificadas com valores numéricos.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "qualquer tipo de variável ... nominais e ordinais ... bastando ... codificadas",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a mera codificação numérica de categorias qualitativas não torna a média aritmética significativa.",
      palavraCritica: "qualquer tipo de variável ... bastando ... codificadas",
    },
    comentario: {
      resolucao: "ERRADO. A média aritmética exige variável métrica (quantitativa) para ter significado estatístico — a mera codificação numérica de categorias qualitativas nominais ou ordinais não torna essa média significativa. Para essas variáveis, usam-se moda (nominal) ou mediana (ordinal).",
      fundamento: "Doutrina de Estatística — medidas de tendência central e níveis de mensuração.",
      macete: "Codificação numérica arbitrária não cria escala métrica — a média continua sem sentido.",
      erroComum: "Achar que basta atribuir números às categorias qualitativas para poder calcular uma média significativa.",
      comoBancaPensa: "Generaliza indevidamente a aplicabilidade da média aritmética para qualquer variável, ignorando a exigência do nível de mensuração."
    }
  },

  /* ===== DIAS DA SEMANA SÃO QUALITATIVOS ORDINAIS, NÃO QUANTITATIVOS ===== */
  {
    id: "ES-068", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Variáveis ordinais são qualitativas, não quantitativas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (classificação de variáveis)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Os dias da semana constituem exemplo de variável qualitativa ordinal — e não de variável quantitativa —, uma vez que expressam uma ordem entre categorias (segunda, terça, quarta...), sem que essa ordem corresponda a uma medida numérica passível de operações aritméticas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "qualitativa ordinal ... e não de variável quantitativa",
    cognitivo: {
      motivo: "Cobrar que variáveis que remetem a uma ideia de ordem (como dias da semana) são qualitativas ordinais, e não quantitativas.",
      palavraCritica: "qualitativa ordinal ... e não de variável quantitativa",
    },
    comentario: {
      resolucao: "CERTO. Os dias da semana são exemplo de variável qualitativa ordinal, e não quantitativa — expressam uma ordem entre categorias, mas essa ordem não corresponde a uma medida numérica passível de operações aritméticas (não faz sentido somar ou dividir 'terça-feira').",
      fundamento: "Doutrina de Estatística — classificação de variáveis (qualitativas nominais/ordinais x quantitativas discretas/contínuas).",
      macete: "'Ordinal' só existe como subtipo de qualitativa — nunca de quantitativa.",
      erroComum: "Classificar variáveis com ordem entre categorias (como dias da semana) como 'quantitativas ordinais', categoria inexistente.",
      comoBancaPensa: "Item 'limpo' que corrige uma confusão comum entre 'ordem entre categorias' e 'natureza quantitativa'."
    }
  },
  {
    id: "ES-069", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Variáveis ordinais são qualitativas, não quantitativas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (classificação de variáveis)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "As variáveis quantitativas podem ser do tipo ordinais, sendo estas as que remetem a uma ideia de ordem entre os valores, como, por exemplo, os dias da semana e as horas do dia.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "variáveis quantitativas podem ser do tipo ordinais",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que 'ordinal' é subtipo exclusivo de variável qualitativa, e que dias da semana não são variáveis quantitativas.",
      palavraCritica: "variáveis quantitativas podem ser do tipo ordinais",
    },
    comentario: {
      resolucao: "ERRADO. 'Ordinal' é subdivisão exclusiva das variáveis qualitativas, e não das quantitativas — estas se dividem em discretas e contínuas. Dias da semana e horas do dia, quando tratados como categorias que expressam ordem, são exemplos de variáveis qualitativas ordinais, e não quantitativas.",
      fundamento: "Doutrina de Estatística — classificação de variáveis (qualitativas nominais/ordinais x quantitativas discretas/contínuas).",
      macete: "Nunca existe 'variável quantitativa ordinal' — ordinal é sempre qualitativa.",
      erroComum: "Classificar como quantitativas variáveis que apenas expressam ordem entre categorias, sem natureza numérica somável.",
      comoBancaPensa: "Cria uma categoria de classificação inexistente para testar se o candidato decorou a árvore de classificação sem entendê-la."
    }
  },

  /* ===== CORES EM GRÁFICOS INFLUENCIAM A INTERPRETAÇÃO ===== */
  {
    id: "ES-070", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Visualização de dados — influência das cores",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (visualização de dados)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "A escolha das cores em um gráfico tem influência relevante na interpretação dos dados, podendo destacar, ofuscar ou até distorcer a percepção de padrões, tendências e comparações entre categorias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "influência relevante ... destacar, ofuscar ou ... distorcer",
    cognitivo: {
      motivo: "Cobrar que a escolha de cores em visualizações de dados tem impacto significativo na interpretação, e não é um detalhe irrelevante.",
      palavraCritica: "influência relevante ... distorcer",
    },
    comentario: {
      resolucao: "CERTO. A escolha das cores em um gráfico tem influência relevante na interpretação dos dados, podendo destacar, ofuscar ou distorcer a percepção de padrões, tendências e comparações entre categorias — é elemento central das boas práticas de visualização de dados.",
      fundamento: "Doutrina de Estatística e Ciência de Dados — visualização de dados (data visualization).",
      macete: "Cor em gráfico é ferramenta analítica, não só estética — influencia diretamente a leitura dos dados.",
      erroComum: "Tratar a escolha de cores como um detalhe estético irrelevante para a interpretação dos dados.",
      comoBancaPensa: "Item 'limpo' que reforça a relevância prática de um tema frequentemente subestimado em provas de estatística aplicada."
    }
  },
  {
    id: "ES-071", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Visualização de dados — influência das cores",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (visualização de dados)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.74,
    enunciado: "A escolha das cores em um gráfico tem pouca influência na interpretação dos dados, tratando-se de um aspecto meramente estético que não afeta a percepção de padrões, tendências ou comparações entre categorias apresentadas na visualização.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "pouca influência ... meramente estético",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a escolha de cores tem influência relevante (e não pouca ou nula) na interpretação de dados visualizados.",
      palavraCritica: "pouca influência ... meramente estético",
    },
    comentario: {
      resolucao: "ERRADO. A escolha das cores em um gráfico tem influência relevante — e não pouca ou nula — na interpretação dos dados, podendo destacar, ofuscar ou distorcer a percepção de padrões e comparações entre categorias. Não se trata de aspecto meramente estético.",
      fundamento: "Doutrina de Estatística e Ciência de Dados — visualização de dados (data visualization).",
      macete: "Nunca é 'pouca influência' — cor é ferramenta analítica central na visualização de dados.",
      erroComum: "Subestimar a importância da escolha de cores, tratando-a como puramente decorativa.",
      comoBancaPensa: "Minimiza a relevância de um elemento técnico central da visualização de dados, testando o conhecimento prático do tema."
    }
  },

  /* ===== GRÁFICO DE PIZZA — INADEQUADO PARA MUITAS CATEGORIAS/DADOS COMPLEXOS ===== */
  {
    id: "ES-072", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Gráfico de setores (pizza) — limitações",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (visualização de dados)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O gráfico de setores (pizza) não é a melhor escolha para a visualização de grandes conjuntos de dados complexos, sendo mais adequado para representar a distribuição proporcional de uma variável qualitativa com poucas categorias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não é a melhor escolha ... grandes conjuntos ... poucas categorias",
    cognitivo: {
      motivo: "Cobrar que o gráfico de pizza é adequado para poucas categorias, e não para grandes conjuntos de dados complexos.",
      palavraCritica: "não é a melhor escolha ... poucas categorias",
    },
    comentario: {
      resolucao: "CERTO. O gráfico de setores (pizza) não é a melhor escolha para grandes conjuntos de dados complexos — é mais adequado para representar a distribuição proporcional de uma variável qualitativa com poucas categorias, sob pena de se tornar visualmente poluído e de difícil leitura com muitas fatias.",
      fundamento: "Doutrina de Estatística e Ciência de Dados — visualização de dados (limitações do gráfico de setores).",
      macete: "Pizza: poucas categorias, sim. Muitas categorias/dados complexos: prefira gráfico de barras.",
      erroComum: "Achar que o gráfico de pizza é adequado para representar grandes volumes de dados ou muitas categorias.",
      comoBancaPensa: "Item 'limpo' que reforça uma limitação prática bem estabelecida na literatura de visualização de dados."
    }
  },
  {
    id: "ES-073", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Gráfico de setores (pizza) — limitações",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (visualização de dados)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "O gráfico de pizza é a melhor escolha para a visualização de grandes conjuntos de dados complexos, por permitir a representação simultânea de um elevado número de categorias sem prejuízo à clareza da leitura.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "melhor escolha ... grandes conjuntos ... elevado número de categorias ... sem prejuízo",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o gráfico de pizza se torna ilegível com muitas categorias, não sendo adequado para dados complexos.",
      palavraCritica: "melhor escolha ... elevado número de categorias ... sem prejuízo",
    },
    comentario: {
      resolucao: "ERRADO. O gráfico de pizza não é a melhor escolha para grandes conjuntos de dados complexos — com um número elevado de categorias, as fatias tornam-se pequenas e de difícil distinção visual, prejudicando a clareza da leitura. Nesses casos, são preferíveis gráficos de barras ou outras visualizações.",
      fundamento: "Doutrina de Estatística e Ciência de Dados — visualização de dados (limitações do gráfico de setores).",
      macete: "Pizza nunca é ideal para 'grandes conjuntos complexos' — a legibilidade cai com muitas fatias.",
      erroComum: "Achar que o gráfico de pizza mantém boa legibilidade independentemente do número de categorias representadas.",
      comoBancaPensa: "Inverte a limitação conhecida do gráfico de pizza, apresentando-a como uma vantagem, para testar o conhecimento prático de visualização de dados."
    }
  },

  /* ===== TABELA DE FREQUÊNCIAS — PERDA DA SEQUÊNCIA ORIGINAL DOS DADOS ===== */
  {
    id: "ES-074", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Tabela de frequências — perda de informação sequencial",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (distribuição de frequências)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "A partir de uma tabela de frequências absolutas de uma variável qualitativa nominal, não é possível recuperar a sequência original dos valores individuais da série de dados, uma vez que a tabela apenas informa a contagem de ocorrências por categoria, sem preservar a ordem em que foram coletadas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não é possível recuperar a sequência original ... apenas informa a contagem",
    cognitivo: {
      motivo: "Cobrar que a tabela de frequências, ao agregar dados em contagens por categoria, perde a informação sobre a ordem/sequência original das observações individuais.",
      palavraCritica: "não é possível recuperar a sequência original ... sem preservar a ordem",
    },
    comentario: {
      resolucao: "CERTO. A agregação é irreversível: a tabela guarda \"quantos\", não \"em que ordem\" nem \"de quem\". Do resumo não se retorna ao dado bruto. É exatamente o mesmo motivo pelo qual, a partir de uma tabela de frequências por classe, não se calcula a média EXATA — só uma estimativa, usando o ponto médio de cada classe como representante de todos os valores dela. Guarde a regra geral: todo resumo estatístico troca detalhe por legibilidade, e a pergunta útil em prova é sempre qual informação foi descartada no caminho.",
      fundamento: "Doutrina de Estatística — distribuições de frequência (agregação e perda de informação sequencial).",
      macete: "Tabela de frequências = contagem por categoria. A ordem original dos dados nunca é recuperável a partir dela.",
      erroComum: "Achar que a tabela de frequências preserva informação suficiente para reconstruir a sequência exata dos dados coletados.",
      comoBancaPensa: "Item 'limpo' que reforça um conceito central sobre agregação de dados: resumir é sempre perder alguma informação."
    }
  },
  {
    id: "ES-075", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Tabela de frequências — perda de informação sequencial",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (distribuição de frequências)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "A partir de uma tabela de frequências absolutas de uma variável qualitativa nominal, é possível recuperar os valores originais da série de dados, incluída a ordem exata em que cada observação foi coletada.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "é possível recuperar os valores originais ... incluída a ordem exata",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a tabela de frequências não preserva a ordem/sequência original das observações.",
      palavraCritica: "é possível recuperar ... incluída a ordem exata",
    },
    comentario: {
      resolucao: "ERRADO. A tabela de frequências absolutas não preserva a ordem em que os dados foram coletados — apenas informa a contagem de ocorrências por categoria. Não é possível, a partir dela, recuperar a sequência original dos valores individuais da série de dados.",
      fundamento: "Doutrina de Estatística — distribuições de frequência (agregação e perda de informação sequencial).",
      macete: "Tabela de frequências: contagem sim, ordem original nunca.",
      erroComum: "Achar que uma tabela resumida de frequências preserva informação suficiente para reconstruir a sequência exata da coleta original.",
      comoBancaPensa: "Afirma uma capacidade de reconstrução que a agregação estatística, por definição, não permite."
    }
  },

  /* ===== HISTOGRAMA — ALTURA DAS BARRAS PROPORCIONAL À FREQUÊNCIA ===== */
  {
    id: "ES-076", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Histograma — construção",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (histogramas)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Na construção de um histograma, a altura das barras verticais deve ser proporcional à frequência observada de cada valor ou intervalo de classe mensurado, permitindo a visualização da distribuição de uma variável quantitativa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "altura das barras ... proporcional à frequência observada",
    cognitivo: {
      motivo: "Cobrar a regra básica de construção do histograma: altura das barras proporcional à frequência.",
      palavraCritica: "altura das barras ... proporcional à frequência",
    },
    comentario: {
      resolucao: "CERTO. A altura da barra representa a frequência da classe. Duas precisões que a banca cobra: primeiro, o histograma é para variável QUANTITATIVA e tem barras coladas, porque o eixo horizontal é contínuo — barras separadas caracterizam o gráfico de colunas, próprio de variável qualitativa. Segundo, quando as classes têm amplitudes DIFERENTES, o rigor manda usar a densidade de frequência (frequência ÷ amplitude) na altura, para que a ÁREA, e não a altura, fique proporcional à frequência. Com classes de mesma amplitude — o caso usual em prova — altura e área são proporcionais e o enunciado está correto como escrito.",
      fundamento: "Doutrina de Estatística — representação gráfica de distribuições de frequência (histograma).",
      macete: "Histograma: altura da barra = frequência da classe.",
      erroComum: "Confundir a dimensão do histograma (altura) que representa a frequência com a largura das barras.",
      comoBancaPensa: "Item 'limpo' que reproduz a regra fundamental de construção do histograma."
    }
  },
  {
    id: "ES-077", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Histograma — construção",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (histogramas)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.76,
    enunciado: "Na construção de um histograma, a altura das barras verticais é sempre igual entre si, independentemente da frequência observada, sendo a largura de cada barra o elemento que deve ser ajustado para representar a frequência de cada classe.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "altura ... sempre igual ... largura ... deve ser ajustado para representar a frequência",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que é a altura (e não a largura) das barras do histograma que representa a frequência de cada classe.",
      palavraCritica: "altura ... sempre igual ... largura ... deve ser ajustado",
    },
    comentario: {
      resolucao: "ERRADO. No histograma, é a altura das barras verticais que é proporcional à frequência observada de cada classe — a largura geralmente corresponde à amplitude do intervalo de classe. O item inverte essa relação, atribuindo à largura a função de representar a frequência.",
      fundamento: "Doutrina de Estatística — representação gráfica de distribuições de frequência (histograma).",
      macete: "Nunca inverter: altura = frequência. A largura não é o elemento que representa a frequência da classe.",
      erroComum: "Trocar as dimensões do histograma, atribuindo à largura das barras a representação da frequência de cada classe.",
      comoBancaPensa: "Inverte a regra fundamental de construção do histograma para testar a memorização exata do conceito."
    }
  },

  /* ===== AGRUPAMENTO EM CLASSES — MAIS CLASSES = MENOS PERDA DE INFORMAÇÃO ===== */
  {
    id: "ES-078", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Agrupamento em classes — número de classes e perda de informação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (distribuição de frequências por classes)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "Ao se agrupar os dados de uma variável quantitativa contínua por faixas (classes) de valores para se construir uma tabela de frequências, a perda de informação em relação aos dados originais será tanto menor quanto maior for o número de classes escolhidas, uma vez que intervalos mais estreitos aproximam a representação dos valores individuais reais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "perda de informação ... tanto menor quanto maior for o número de classes",
    cognitivo: {
      motivo: "Cobrar que aumentar o número de classes (intervalos mais estreitos) reduz a perda de informação, aproximando a representação dos dados originais.",
      palavraCritica: "tanto menor quanto maior for o número de classes",
    },
    comentario: {
      resolucao: "CERTO. Ao agrupar dados contínuos em classes, quanto maior o número de classes escolhidas (intervalos mais estreitos), menor a perda de informação em relação aos dados originais, pois a representação se aproxima mais dos valores individuais reais.",
      fundamento: "Doutrina de Estatística — distribuições de frequência por classes (agrupamento de dados contínuos).",
      macete: "Mais classes = intervalos mais estreitos = menos perda de informação.",
      erroComum: "Inverter a relação, achando que mais classes geram mais perda de informação em vez de menos.",
      comoBancaPensa: "Item 'limpo' que reforça, na forma correta, a relação entre granularidade das classes e fidelidade aos dados originais."
    }
  },
  {
    id: "ES-079", disciplina: "Estatística", assunto: "Análise Exploratória de Dados", subassunto: "Agrupamento em classes — número de classes e perda de informação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (distribuição de frequências por classes)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "Ao se agrupar os dados de uma variável quantitativa contínua por faixas (classes) de valores para se construir uma tabela de frequências, a perda de informação em relação aos dados originais será tanto maior quanto maior for o número de classes escolhidas.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "perda de informação ... tanto maior quanto maior for o número de classes",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que mais classes (intervalos mais estreitos) reduzem — e não aumentam — a perda de informação.",
      palavraCritica: "tanto maior quanto maior for o número de classes",
    },
    comentario: {
      resolucao: "ERRADO. A relação está invertida: quanto maior o número de classes (intervalos mais estreitos), MENOR é a perda de informação em relação aos dados originais — e não maior. É o uso de POUCAS classes (intervalos largos) que aumenta a perda de informação.",
      fundamento: "Doutrina de Estatística — distribuições de frequência por classes (agrupamento de dados contínuos).",
      macete: "Inverteu a lógica? Desconfie: mais classes sempre aproxima mais dos dados originais, nunca afasta.",
      erroComum: "Achar que aumentar o número de classes de agrupamento aumenta a perda de informação em relação aos dados originais.",
      comoBancaPensa: "Inverte deliberadamente uma relação lógica bem estabelecida para testar se o candidato raciocina ou apenas decora padrões."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE50);
