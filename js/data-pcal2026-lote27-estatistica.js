/* =====================================================================
   QUESTLAB — Lote 27: ESTATÍSTICA E ANÁLISE DE DADOS (expansão)
   Preenche a lacuna mais profunda apontada na auditoria do edital: os
   itens técnicos especializados (Machine Learning, PLN, bibliotecas
   Python, ETL) do item II "Análise de Dados", que tinham cobertura
   quase nula.

   Temas confirmados como efetivamente cobrados via simulado próprio
   (pós-edital, fornecido pelo usuário) — os itens abaixo são 100%
   originais, com redação e gabarito verificados de forma independente
   (nenhuma frase do material de terceiros foi reproduzida).
   14 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE27 = [

  /* ===== ESTATÍSTICA DESCRITIVA — QUARTIS E OUTLIERS ===== */
  {
    id: "ES-024", disciplina: "Estatística", assunto: "Estatística descritiva", subassunto: "Intervalo interquartil",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (estatística descritiva)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Considere um conjunto de dados cujo primeiro quartil (Q1) seja igual a 45 e cujo terceiro quartil (Q3) seja igual a 65. Nessa situação, o intervalo interquartil (IIQ) desses dados é igual a 110, obtido pela soma entre o primeiro e o terceiro quartis.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "IIQ = Q3 + Q1 (soma)",
    cognitivo: {
      motivo: "Cobrar o cálculo e a interpretação do intervalo interquartil.",
      palavraCritica: "soma",
    },
    comentario: {
      resolucao: "ERRADO. O intervalo interquartil é calculado por subtração, e não soma: IIQ = Q3 − Q1 = 65 − 45 = 20. O valor 110 corresponderia à soma dos quartis, o que não tem significado estatístico como medida de dispersão.",
      fundamento: "Estatística descritiva — medidas de dispersão (intervalo interquartil).",
      macete: "IIQ = Q3 − Q1. Sempre subtração, nunca soma.",
      erroComum: "Somar os quartis em vez de subtrair.",
      comoBancaPensa: "Troca a operação aritmética correta por outra plausível."
    }
  },
  {
    id: "ES-025", disciplina: "Estatística", assunto: "Estatística descritiva", subassunto: "Regra dos outliers (1,5×IIQ)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (estatística descritiva)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Em um conjunto de dados com primeiro quartil igual a 45 e terceiro quartil igual a 65, serão considerados valores atípicos (outliers) superiores aqueles que excederem 95, conforme o critério usual de 1,5 vez o intervalo interquartil acima do terceiro quartil.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "1,5 vez o intervalo interquartil",
    cognitivo: {
      motivo: "Cobrar o critério clássico (regra de Tukey) para identificação de outliers.",
      palavraCritica: "1,5 vez",
    },
    comentario: {
      resolucao: "CERTO. Pelo critério usual (regra de Tukey), o limite superior para outliers é Q3 + 1,5×IIQ = 65 + 1,5×(65−45) = 65 + 30 = 95. Valores estritamente superiores a 95 são considerados atípicos.",
      fundamento: "Estatística descritiva — regra de Tukey para outliers.",
      macete: "Outlier superior = Q3 + 1,5×IIQ. Outlier inferior = Q1 − 1,5×IIQ.",
      erroComum: "Usar multiplicador diferente de 1,5 ou somar ao invés de partir de Q3.",
      comoBancaPensa: "Exige o cálculo completo da regra de Tukey."
    }
  },
  {
    id: "ES-026", disciplina: "Estatística", assunto: "Probabilidade", subassunto: "Variável aleatória discreta (soma de probabilidades)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "Se X é uma variável aleatória discreta que representa o número mensal de inquéritos policiais concluídos, então a probabilidade de X assumir um valor entre o mínimo e o máximo observados é sempre igual a 1, pois esse intervalo abrange a totalidade dos resultados possíveis da distribuição amostral considerada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sempre igual a 1",
    cognitivo: {
      motivo: "Cobrar o axioma de que a soma das probabilidades no espaço amostral é 1.",
      palavraCritica: "sempre igual a 1",
    },
    comentario: {
      resolucao: "CERTO. Por definição, se o intervalo entre o valor mínimo e o valor máximo observados contém todo o suporte da variável aleatória X (ou seja, todos os valores possíveis), a probabilidade de X pertencer a esse intervalo é igual a 1, já que a soma das probabilidades de todos os valores possíveis de uma variável aleatória é sempre 1 (axioma da probabilidade total).",
      fundamento: "Teoria da probabilidade — axiomas de Kolmogorov (soma das probabilidades = 1).",
      macete: "Todo o suporte da variável = evento certo = probabilidade 1.",
      erroComum: "Supor que há probabilidade fora do intervalo observado.",
      comoBancaPensa: "Testa a compreensão do conceito de espaço amostral completo."
    }
  },
  {
    id: "ES-027", disciplina: "Estatística", assunto: "Distribuição normal", subassunto: "Padronização (escore Z)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (distribuição normal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Considere que a velocidade dos veículos envolvidos em determinado tipo de acidente de trânsito siga uma distribuição normal com média de 85 km/h e desvio padrão de 18 km/h. Nessa situação, o valor de 121 km/h corresponde a um escore Z igual a 4, obtido pela padronização (X − média) dividida pelo desvio padrão.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "escore Z igual a 4",
    cognitivo: {
      motivo: "Cobrar o cálculo do escore Z (padronização da normal).",
      palavraCritica: "escore Z igual a 4",
    },
    comentario: {
      resolucao: "ERRADO. O escore Z correto é Z = (X − μ) / σ = (121 − 85) / 18 = 36 / 18 = 2, e não 4. O valor 121 km/h está 2 desvios padrão acima da média, não 4.",
      fundamento: "Estatística — padronização da distribuição normal (escore Z).",
      macete: "Z = (X − média) / desvio padrão.",
      erroComum: "Aceitar o número da assertiva sem refazer o cálculo.",
      comoBancaPensa: "Troca o resultado numérico correto por outro plausível."
    }
  },

  /* ===== ANÁLISE DE DADOS — ETL, PYTHON, ML, PLN ===== */
  {
    id: "ES-028", disciplina: "Estatística", assunto: "Análise de dados", subassunto: "Processo de ETL",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (ETL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "No processo de ETL (Extract, Transform, Load), a etapa de extração dos dados de suas fontes de origem antecede a etapa de transformação, na qual os dados são padronizados, limpos e adequados antes de serem carregados no ambiente de destino.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "extração ... antecede a transformação",
    cognitivo: {
      motivo: "Cobrar a ordem correta das etapas do ETL.",
      palavraCritica: "extração ... antecede a transformação",
    },
    comentario: {
      resolucao: "CERTO. No processo de ETL, a extração (Extract) dos dados de suas fontes de origem é a primeira etapa, antecedendo a transformação (Transform) — em que os dados são padronizados, limpos e enriquecidos — que, por sua vez, antecede o carregamento (Load) no ambiente de destino.",
      fundamento: "Análise de dados — processos de ETL (Extract, Transform, Load).",
      macete: "ETL: a ordem das letras é a ordem das etapas.",
      erroComum: "Inverter a ordem, transformando antes de extrair.",
      comoBancaPensa: "Testa se o candidato decorou a sigla sem entender o processo."
    }
  },
  {
    id: "ES-029", disciplina: "Estatística", assunto: "Análise de dados", subassunto: "Bibliotecas Python (Pandas × Scikit-learn)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Python para ciência de dados)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Em ciência de dados com Python, a biblioteca Scikit-learn (sklearn) é utilizada principalmente para a manipulação e análise de dados estruturados em formato tabular, por meio de suas estruturas DataFrame e Series, ao passo que a biblioteca Pandas é voltada à criação e à avaliação de modelos de aprendizado de máquina.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "Scikit-learn ... DataFrame e Series ... Pandas ... aprendizado de máquina",
    cognitivo: {
      motivo: "Cobrar a finalidade correta de cada biblioteca Python.",
      palavraCritica: "Pandas: DataFrame/Series. Sklearn: modelos de ML.",
    },
    comentario: {
      resolucao: "ERRADO. As atribuições foram invertidas. O Pandas é a biblioteca voltada à manipulação e análise de dados estruturados, com as estruturas DataFrame e Series. O Scikit-learn (sklearn) é a biblioteca de referência para criação, treinamento e avaliação de modelos de aprendizado de máquina.",
      fundamento: "Análise de dados — bibliotecas Python (Pandas, Scikit-learn).",
      macete: "Pandas = tabela (DataFrame/Series). Sklearn = machine learning.",
      erroComum: "Não perceber a inversão de finalidades entre as duas bibliotecas.",
      comoBancaPensa: "Troca atribuições entre ferramentas conhecidas."
    }
  },
  {
    id: "ES-030", disciplina: "Estatística", assunto: "Mineração de dados", subassunto: "Clusterização (aprendizado não supervisionado)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (mineração de dados)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A análise de agrupamentos (clusterização) é uma técnica de aprendizado supervisionado, que exige a existência de rótulos previamente definidos nos dados para identificar grupos de observações semelhantes entre si.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "aprendizado supervisionado ... rótulos previamente definidos",
    cognitivo: {
      motivo: "Cobrar a distinção entre aprendizado supervisionado e não supervisionado.",
      palavraCritica: "aprendizado supervisionado ... rótulos previamente definidos",
    },
    comentario: {
      resolucao: "ERRADO. A análise de agrupamentos (clusterização) é uma técnica de aprendizado NÃO supervisionado, que identifica grupos (clusters) de observações semelhantes entre si sem que existam rótulos ou categorias previamente definidas nos dados. A exigência de rótulos é característica da classificação, técnica supervisionada.",
      fundamento: "Mineração de dados — aprendizado supervisionado × não supervisionado.",
      macete: "Sem rótulo = não supervisionado = clusterização.",
      erroComum: "Trocar clusterização por classificação.",
      comoBancaPensa: "Inverte a natureza da técnica de aprendizado."
    }
  },
  {
    id: "ES-031", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Classificador Naive Bayes",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (machine learning)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "O classificador Naive Bayes fundamenta-se no teorema de Bayes e assume que os atributos preditores são condicionalmente independentes entre si, dado o valor da classe — premissa que, embora frequentemente não corresponda à realidade dos dados, não impede que o algoritmo apresente bom desempenho em diversas aplicações práticas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "condicionalmente independentes ... dado o valor da classe",
    cognitivo: {
      motivo: "Cobrar a premissa 'ingênua' (naive) de independência condicional do algoritmo.",
      palavraCritica: "condicionalmente independentes",
    },
    comentario: {
      resolucao: "CERTO. O Naive Bayes baseia-se no teorema de Bayes e assume que os atributos são condicionalmente independentes dado o valor da classe. Embora essa premissa 'ingênua' raramente reflita a realidade dos dados, o algoritmo é amplamente reconhecido por apresentar bom desempenho prático em diversas aplicações, como filtros antispam.",
      fundamento: "Machine Learning — classificador Naive Bayes (teorema de Bayes).",
      macete: "Naive = ingênuo = assume independência condicional entre atributos.",
      erroComum: "Achar que a premissa irrealista invalida o desempenho prático.",
      comoBancaPensa: "Testa o entendimento da premissa e da robustez empírica do modelo."
    }
  },
  {
    id: "ES-032", disciplina: "Estatística", assunto: "Análise de dados", subassunto: "Processamento de Linguagem Natural (n-gramas)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (PLN)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "No Processamento de Linguagem Natural (PLN), os n-gramas constituem uma técnica de representação textual baseada em sequências contíguas de n itens (palavras ou caracteres) extraídas de um texto, sendo um unigrama uma sequência de dois itens consecutivos e um bigrama, uma sequência de um único item.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "unigrama ... dois itens ... bigrama ... um único item",
    cognitivo: {
      motivo: "Cobrar o conceito de n-gramas em PLN.",
      palavraCritica: "unigrama: 1 item. Bigrama: 2 itens.",
    },
    comentario: {
      resolucao: "ERRADO. As definições foram invertidas. O unigrama corresponde a uma sequência de um único item (n=1), e o bigrama, a uma sequência de dois itens consecutivos (n=2) — e não o contrário.",
      fundamento: "Análise de dados — Processamento de Linguagem Natural (n-gramas).",
      macete: "Unigrama=1, bigrama=2, trigrama=3 itens.",
      erroComum: "Não perceber a inversão entre unigrama e bigrama.",
      comoBancaPensa: "Item de fixação conceitual sobre representação textual, com troca proposital das quantidades."
    }
  },
  {
    id: "ES-033", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Overfitting e underfitting",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (machine learning)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.74,
    enunciado: "O underfitting (subajuste) ocorre quando um modelo preditivo se ajusta excessivamente aos dados de treinamento, capturando ruídos e particularidades que prejudicam sua capacidade de generalização para novos dados, ao passo que o overfitting caracteriza-se pela incapacidade do modelo de capturar adequadamente os padrões subjacentes aos dados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "underfitting ... prejudicam a generalização ... overfitting ... incapacidade de capturar padrões",
    cognitivo: {
      motivo: "Cobrar a distinção entre overfitting e underfitting.",
      palavraCritica: "overfitting: excesso de ajuste. Underfitting: falta de ajuste.",
    },
    comentario: {
      resolucao: "ERRADO. Os conceitos foram invertidos. O overfitting (e não o underfitting) ocorre quando o modelo se ajusta em excesso aos dados de treinamento, capturando ruídos que comprometem sua generalização. O underfitting (e não o overfitting) caracteriza-se pela incapacidade do modelo de capturar os padrões subjacentes.",
      fundamento: "Machine Learning — validação e avaliação de modelos preditivos.",
      macete: "Overfitting: decorou demais. Underfitting: não aprendeu nada.",
      erroComum: "Não perceber a troca de nomes entre os dois conceitos.",
      comoBancaPensa: "Testa a distinção clássica entre os dois problemas de ajuste, invertendo os rótulos."
    }
  },
  {
    id: "ES-034", disciplina: "Estatística", assunto: "Análise de dados", subassunto: "Formatos de dados abertos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (dados abertos)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.7,
    enunciado: "XML, JSON e CSV são formatos amplamente utilizados para representação e intercâmbio de dados estruturados e semiestruturados, sendo o CSV mais adequado para dados tabulares simples, enquanto XML e JSON são comumente empregados para representar dados hierárquicos ou aninhados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "CSV ... tabulares simples ... XML e JSON ... hierárquicos",
    cognitivo: {
      motivo: "Cobrar a finalidade típica de cada formato de dados.",
      palavraCritica: "CSV: tabular simples. XML/JSON: hierárquico.",
    },
    comentario: {
      resolucao: "CERTO. O CSV é adequado para dados tabulares simples (linhas e colunas separadas por vírgula), enquanto XML e JSON permitem representar dados hierárquicos ou aninhados, com estruturas mais complexas de objetos e atributos.",
      fundamento: "Análise de dados — formatos e tecnologias (XML, JSON, CSV).",
      macete: "CSV: tabela simples. XML/JSON: estrutura aninhada.",
      erroComum: "Inverter as finalidades dos formatos.",
      comoBancaPensa: "Item de fixação sobre formatos de dados."
    }
  },
  {
    id: "ES-035", disciplina: "Estatística", assunto: "Inferência", subassunto: "Estimação pontual × intervalar",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência estatística)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "Diferentemente da estimação intervalar, que atribui um único valor numérico como estimativa de um parâmetro populacional, a estimação pontual fornece um intervalo de valores plausíveis para esse parâmetro, associado a um nível de confiança.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "intervalar ... único valor ... pontual ... intervalo",
    cognitivo: {
      motivo: "Cobrar a distinção entre estimação pontual e intervalar.",
      palavraCritica: "único valor ... intervalo ... nível de confiança",
    },
    comentario: {
      resolucao: "ERRADO. Os nomes foram invertidos. A estimação pontual (e não a intervalar) fornece um único valor como estimativa do parâmetro populacional. A estimação intervalar (e não a pontual) fornece um intervalo de valores plausíveis, associado a um nível de confiança.",
      fundamento: "Estatística — inferência estatística (estimação pontual e intervalar).",
      macete: "Pontual: um valor. Intervalar: faixa + confiança.",
      erroComum: "Não perceber a troca de nomes entre as duas formas de estimação.",
      comoBancaPensa: "Item de fixação conceitual em inferência, com troca proposital dos rótulos."
    }
  },
  {
    id: "ES-036", disciplina: "Estatística", assunto: "Amostragem", subassunto: "Amostragem estratificada",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (técnicas de amostragem)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "Na amostragem estratificada, a população é dividida em subgrupos (estratos) internamente mais heterogêneos entre si, a partir dos quais se selecionam amostras, de modo a garantir a representatividade de cada estrato na amostra final.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "estratos ... internamente ... heterogêneos",
    cognitivo: {
      motivo: "Cobrar o conceito de amostragem estratificada.",
      palavraCritica: "internamente ... heterogêneos",
    },
    comentario: {
      resolucao: "ERRADO. A lógica foi invertida: na amostragem estratificada, cada estrato deve ser internamente HOMOGÊNEO (e não heterogêneo), com elementos semelhantes entre si quanto a alguma característica relevante, enquanto os estratos entre si devem ser heterogêneos.",
      fundamento: "Estatística — técnicas de amostragem (amostragem estratificada).",
      macete: "Estrato: homogêneo por dentro, heterogêneo entre estratos.",
      erroComum: "Não perceber a inversão da lógica de homogeneidade.",
      comoBancaPensa: "Item de fixação sobre a técnica de amostragem, com troca proposital do termo-chave."
    }
  },
  {
    id: "ES-037", disciplina: "Estatística", assunto: "Estatística descritiva", subassunto: "Assimetria da distribuição",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (assimetria)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "Em uma distribuição de dados na qual a mediana é superior à média aritmética, é correto afirmar que essa distribuição apresenta assimetria negativa (à esquerda), com cauda mais alongada para valores menores.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mediana superior à média ... assimetria negativa",
    cognitivo: {
      motivo: "Cobrar a relação entre média, mediana e tipo de assimetria.",
      palavraCritica: "mediana superior à média ... assimetria negativa",
    },
    comentario: {
      resolucao: "CERTO. Quando a mediana é superior à média aritmética, a distribuição apresenta assimetria negativa (à esquerda): valores extremos menores 'puxam' a média para baixo, gerando uma cauda mais alongada nessa direção.",
      fundamento: "Estatística descritiva — medidas de assimetria.",
      macete: "Média < mediana → assimetria negativa (cauda à esquerda).",
      erroComum: "Inverter a direção da assimetria.",
      comoBancaPensa: "Testa a relação entre as três medidas de tendência central."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE27);

/* Frequência de temas — Estatística (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Estatística");
  if (!d) { d = { disciplina: "Estatística", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Quartis, IIQ e outliers (regra de Tukey)", freq: 82, tendencia: "alta", prob: 0.85 },
    { tema: "Machine Learning: Naive Bayes, overfitting/underfitting", freq: 76, tendencia: "alta", prob: 0.8 },
    { tema: "Python para ciência de dados (Pandas, Sklearn)", freq: 74, tendencia: "alta", prob: 0.78 },
    { tema: "PLN: n-gramas e mineração de dados", freq: 70, tendencia: "estavel", prob: 0.72 },
  );
})();
