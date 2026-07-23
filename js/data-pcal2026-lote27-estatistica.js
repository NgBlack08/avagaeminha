/* =====================================================================
   CEBRASPE LAB — Lote 27: ESTATÍSTICA E ANÁLISE DE DADOS (expansão)
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
    id: "ES-024", disciplina: "Estatística e Análise de Dados", assunto: "Estatística descritiva", subassunto: "Intervalo interquartil",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (estatística descritiva)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Considere um conjunto de dados cujo primeiro quartil (Q1) seja igual a 45 e cujo terceiro quartil (Q3) seja igual a 65. Nessa situação, o intervalo interquartil (IIQ) desses dados é igual a 110, obtido pela soma entre o primeiro e o terceiro quartis.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "IIQ = Q3 + Q1 (soma)",
    cognitivo: {
      motivo: "Cobrar o cálculo e a interpretação do intervalo interquartil.",
      mede: "Estatística — medidas de dispersão.",
      pegadinhaDesc: "A banca troca a subtração pela soma dos quartis.",
      ondeErra: "Soma os quartis em vez de subtrair, inflando o resultado.",
      palavraCritica: "soma",
      tecnica: "IIQ = Q3 − Q1 = 65 − 45 = 20 (e não a soma, que daria 110). Mede a dispersão dos 50% centrais dos dados (entre o 25º e o 75º percentil).",
      regraMental: "Intervalo interquartil: sempre Q3 MENOS Q1, nunca soma."
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
    id: "ES-025", disciplina: "Estatística e Análise de Dados", assunto: "Estatística descritiva", subassunto: "Regra dos outliers (1,5×IIQ)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (estatística descritiva)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Em um conjunto de dados com primeiro quartil igual a 45 e terceiro quartil igual a 65, serão considerados valores atípicos (outliers) superiores aqueles que excederem 95, conforme o critério usual de 1,5 vez o intervalo interquartil acima do terceiro quartil.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "1,5 vez o intervalo interquartil",
    cognitivo: {
      motivo: "Cobrar o critério clássico (regra de Tukey) para identificação de outliers.",
      mede: "Estatística — detecção de valores atípicos.",
      pegadinhaDesc: "A banca pode trocar o multiplicador (1,5) ou o ponto de referência (Q3).",
      ondeErra: "Não sabe o valor do multiplicador ou calcula a partir da mediana.",
      palavraCritica: "1,5 vez",
      tecnica: "Limite superior = Q3 + 1,5×IIQ = 65 + 1,5×20 = 65 + 30 = 95. Valores acima de 95 são outliers superiores.",
      regraMental: "Outlier superior: Q3 + 1,5×IIQ. Aqui: 65 + 30 = 95."
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
    id: "ES-026", disciplina: "Estatística e Análise de Dados", assunto: "Probabilidade", subassunto: "Variável aleatória discreta (soma de probabilidades)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "Se X é uma variável aleatória discreta que representa o número mensal de inquéritos policiais concluídos, então a probabilidade de X assumir um valor entre o mínimo e o máximo observados é sempre igual a 1, pois esse intervalo abrange a totalidade dos resultados possíveis da distribuição amostral considerada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sempre igual a 1",
    cognitivo: {
      motivo: "Cobrar o axioma de que a soma das probabilidades no espaço amostral é 1.",
      mede: "Estatística — probabilidade e variáveis aleatórias.",
      pegadinhaDesc: "Item conceitual: a banca costuma testar se o candidato confunde amplitude de valores observados com espaço amostral completo.",
      ondeErra: "Acha que sempre sobra probabilidade fora do intervalo mínimo-máximo observado.",
      palavraCritica: "sempre igual a 1",
      tecnica: "Se o intervalo [mínimo, máximo] contém TODOS os valores já observados/possíveis da variável, a probabilidade de X estar nesse intervalo é 1 (evento certo), por definição de função de probabilidade.",
      regraMental: "P(mínimo ≤ X ≤ máximo) = 1 quando esse intervalo cobre todo o suporte da variável."
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
    id: "ES-027", disciplina: "Estatística e Análise de Dados", assunto: "Distribuição normal", subassunto: "Padronização (escore Z)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (distribuição normal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Considere que a velocidade dos veículos envolvidos em determinado tipo de acidente de trânsito siga uma distribuição normal com média de 85 km/h e desvio padrão de 18 km/h. Nessa situação, o valor de 121 km/h corresponde a um escore Z igual a 4, obtido pela padronização (X − média) dividida pelo desvio padrão.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "escore Z igual a 4",
    cognitivo: {
      motivo: "Cobrar o cálculo do escore Z (padronização da normal).",
      mede: "Estatística — distribuição normal.",
      pegadinhaDesc: "A banca troca o resultado correto (2) por outro número plausível (4).",
      ondeErra: "Erra a conta ou aceita o resultado sem recalcular.",
      palavraCritica: "escore Z igual a 4",
      tecnica: "Z = (X − μ) / σ = (121 − 85) / 18 = 36 / 18 = 2, e não 4.",
      regraMental: "Z = (valor − média) / desvio padrão. Sempre refaça a conta."
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
    id: "ES-028", disciplina: "Estatística e Análise de Dados", assunto: "Análise de dados", subassunto: "Processo de ETL",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (ETL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "No processo de ETL (Extract, Transform, Load), a etapa de extração dos dados de suas fontes de origem antecede a etapa de transformação, na qual os dados são padronizados, limpos e adequados antes de serem carregados no ambiente de destino.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "extração ... antecede a transformação",
    cognitivo: {
      motivo: "Cobrar a ordem correta das etapas do ETL.",
      mede: "Análise de dados — integração e tratamento de dados.",
      pegadinhaDesc: "A banca pode inverter a ordem (transformar antes de extrair), o que não faz sentido operacional.",
      ondeErra: "Aceita a inversão da ordem sem perceber o absurdo lógico.",
      palavraCritica: "extração ... antecede a transformação",
      tecnica: "ETL = Extract (extrair da fonte) → Transform (limpar/padronizar) → Load (carregar no destino). A extração é sempre a primeira etapa.",
      regraMental: "ETL: primeiro extrai, depois transforma, por último carrega."
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
    id: "ES-029", disciplina: "Estatística e Análise de Dados", assunto: "Análise de dados", subassunto: "Bibliotecas Python (Pandas × Scikit-learn)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Python para ciência de dados)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Em ciência de dados com Python, a biblioteca Scikit-learn (sklearn) é utilizada principalmente para a manipulação e análise de dados estruturados em formato tabular, por meio de suas estruturas DataFrame e Series, ao passo que a biblioteca Pandas é voltada à criação e à avaliação de modelos de aprendizado de máquina.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "Scikit-learn ... DataFrame e Series ... Pandas ... aprendizado de máquina",
    cognitivo: {
      motivo: "Cobrar a finalidade correta de cada biblioteca Python.",
      mede: "Análise de dados — ferramentas de ciência de dados.",
      pegadinhaDesc: "A banca inverte as finalidades das duas bibliotecas.",
      ondeErra: "Aceita a troca sem perceber a inversão de atribuições.",
      palavraCritica: "Pandas: DataFrame/Series. Sklearn: modelos de ML.",
      tecnica: "Pandas: manipulação/análise de dados tabulares (DataFrame, Series). Scikit-learn: construção e avaliação de modelos de machine learning (classificação, regressão, clusterização). O enunciado inverteu as duas.",
      regraMental: "Pandas organiza a tabela. Sklearn treina o modelo."
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
    id: "ES-030", disciplina: "Estatística e Análise de Dados", assunto: "Mineração de dados", subassunto: "Clusterização (aprendizado não supervisionado)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (mineração de dados)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A análise de agrupamentos (clusterização) é uma técnica de aprendizado supervisionado, que exige a existência de rótulos previamente definidos nos dados para identificar grupos de observações semelhantes entre si.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "aprendizado supervisionado ... rótulos previamente definidos",
    cognitivo: {
      motivo: "Cobrar a distinção entre aprendizado supervisionado e não supervisionado.",
      mede: "Análise de dados — mineração de dados.",
      pegadinhaDesc: "Troca a natureza da clusterização (não supervisionada) por supervisionada.",
      ondeErra: "Confunde clusterização (sem rótulos) com classificação (com rótulos).",
      palavraCritica: "aprendizado supervisionado ... rótulos previamente definidos",
      tecnica: "Clusterização é técnica de aprendizado NÃO supervisionado: agrupa observações por similaridade SEM rótulos prévios. Classificação (com rótulos) é que é supervisionada.",
      regraMental: "Clusterização: sem rótulo, não supervisionado. Classificação: com rótulo, supervisionado."
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
    id: "ES-031", disciplina: "Estatística e Análise de Dados", assunto: "Machine Learning", subassunto: "Classificador Naive Bayes",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (machine learning)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "O classificador Naive Bayes fundamenta-se no teorema de Bayes e assume que os atributos preditores são condicionalmente independentes entre si, dado o valor da classe — premissa que, embora frequentemente não corresponda à realidade dos dados, não impede que o algoritmo apresente bom desempenho em diversas aplicações práticas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "condicionalmente independentes ... dado o valor da classe",
    cognitivo: {
      motivo: "Cobrar a premissa 'ingênua' (naive) de independência condicional do algoritmo.",
      mede: "Machine Learning — classificador Naive Bayes.",
      pegadinhaDesc: "A banca pode negar a robustez prática do algoritmo apesar da premissa irrealista.",
      ondeErra: "Nega que o algoritmo funcione bem apesar da premissa simplificadora.",
      palavraCritica: "condicionalmente independentes",
      tecnica: "O Naive Bayes assume independência condicional dos atributos dado a classe (daí o nome 'naive'/ingênuo). Apesar de essa premissa raramente se sustentar na prática, o algoritmo é conhecido por bom desempenho empírico em muitas aplicações (ex.: filtros de spam).",
      regraMental: "Naive Bayes: independência condicional (premissa simplificada) + bom desempenho prático mesmo assim."
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
    id: "ES-032", disciplina: "Estatística e Análise de Dados", assunto: "Análise de dados", subassunto: "Processamento de Linguagem Natural (n-gramas)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (PLN)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "No Processamento de Linguagem Natural (PLN), os n-gramas constituem uma técnica de representação textual baseada em sequências contíguas de n itens (palavras ou caracteres) extraídas de um texto, sendo um unigrama uma sequência de dois itens consecutivos e um bigrama, uma sequência de um único item.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "unigrama ... dois itens ... bigrama ... um único item",
    cognitivo: {
      motivo: "Cobrar o conceito de n-gramas em PLN.",
      mede: "Análise de dados — Processamento de Linguagem Natural.",
      pegadinhaDesc: "A banca inverte as definições de unigrama e bigrama.",
      ondeErra: "Aceita a troca sem perceber a inversão das quantidades.",
      palavraCritica: "unigrama: 1 item. Bigrama: 2 itens.",
      tecnica: "N-gramas são sequências contíguas de N itens de um texto. Unigrama (N=1): um único item. Bigrama (N=2): dois itens consecutivos. O enunciado inverteu as duas definições.",
      regraMental: "N-grama: N indica a quantidade de itens na sequência contígua."
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
    id: "ES-033", disciplina: "Estatística e Análise de Dados", assunto: "Machine Learning", subassunto: "Overfitting e underfitting",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (machine learning)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.74,
    enunciado: "O underfitting (subajuste) ocorre quando um modelo preditivo se ajusta excessivamente aos dados de treinamento, capturando ruídos e particularidades que prejudicam sua capacidade de generalização para novos dados, ao passo que o overfitting caracteriza-se pela incapacidade do modelo de capturar adequadamente os padrões subjacentes aos dados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "underfitting ... prejudicam a generalização ... overfitting ... incapacidade de capturar padrões",
    cognitivo: {
      motivo: "Cobrar a distinção entre overfitting e underfitting.",
      mede: "Machine Learning — validação e avaliação de modelos.",
      pegadinhaDesc: "A banca inverte os dois conceitos.",
      ondeErra: "Aceita a troca sem perceber a inversão entre os dois termos.",
      palavraCritica: "overfitting: excesso de ajuste. Underfitting: falta de ajuste.",
      tecnica: "Overfitting: modelo 'decora' o treino (ruído incluído), generaliza mal. Underfitting: modelo simples demais, nem no treino capta o padrão real. O enunciado trocou os dois nomes entre si.",
      regraMental: "Overfitting = ajuste demais (decora). Underfitting = ajuste de menos (não aprende)."
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
    id: "ES-034", disciplina: "Estatística e Análise de Dados", assunto: "Análise de dados", subassunto: "Formatos de dados abertos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (dados abertos)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.7,
    enunciado: "XML, JSON e CSV são formatos amplamente utilizados para representação e intercâmbio de dados estruturados e semiestruturados, sendo o CSV mais adequado para dados tabulares simples, enquanto XML e JSON são comumente empregados para representar dados hierárquicos ou aninhados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "CSV ... tabulares simples ... XML e JSON ... hierárquicos",
    cognitivo: {
      motivo: "Cobrar a finalidade típica de cada formato de dados.",
      mede: "Análise de dados — formatos e tecnologias.",
      pegadinhaDesc: "A banca pode inverter as finalidades dos formatos.",
      ondeErra: "Troca CSV por XML/JSON quanto à estrutura hierárquica.",
      palavraCritica: "CSV: tabular simples. XML/JSON: hierárquico.",
      tecnica: "CSV: valores separados por vírgula, ideal para tabelas simples (linhas/colunas). XML e JSON: suportam estruturas aninhadas/hierárquicas (objetos dentro de objetos).",
      regraMental: "CSV = planilha simples. XML/JSON = dados aninhados."
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
    id: "ES-035", disciplina: "Estatística e Análise de Dados", assunto: "Inferência", subassunto: "Estimação pontual × intervalar",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência estatística)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "Diferentemente da estimação intervalar, que atribui um único valor numérico como estimativa de um parâmetro populacional, a estimação pontual fornece um intervalo de valores plausíveis para esse parâmetro, associado a um nível de confiança.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "intervalar ... único valor ... pontual ... intervalo",
    cognitivo: {
      motivo: "Cobrar a distinção entre estimação pontual e intervalar.",
      mede: "Estatística — inferência estatística.",
      pegadinhaDesc: "A banca inverte as definições dos dois tipos de estimação.",
      ondeErra: "Aceita a troca sem perceber a inversão dos nomes.",
      palavraCritica: "único valor ... intervalo ... nível de confiança",
      tecnica: "Estimação pontual: um único número (ex.: média amostral). Estimação intervalar: um intervalo (ex.: IC 95%) que, com determinado nível de confiança, contém o parâmetro real. O enunciado trocou os dois nomes entre si.",
      regraMental: "Pontual = um número. Intervalar = uma faixa + confiança."
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
    id: "ES-036", disciplina: "Estatística e Análise de Dados", assunto: "Amostragem", subassunto: "Amostragem estratificada",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (técnicas de amostragem)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "Na amostragem estratificada, a população é dividida em subgrupos (estratos) internamente mais heterogêneos entre si, a partir dos quais se selecionam amostras, de modo a garantir a representatividade de cada estrato na amostra final.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "estratos ... internamente ... heterogêneos",
    cognitivo: {
      motivo: "Cobrar o conceito de amostragem estratificada.",
      mede: "Estatística — técnicas de amostragem.",
      pegadinhaDesc: "A banca troca 'homogêneos' por 'heterogêneos' dentro do estrato.",
      ondeErra: "Aceita a troca sem perceber a inversão da lógica de homogeneidade interna.",
      palavraCritica: "internamente ... heterogêneos",
      tecnica: "Na amostragem estratificada, cada estrato deve ser internamente HOMOGÊNEO (indivíduos parecidos entre si) e os estratos entre si devem ser heterogêneos (diferentes uns dos outros) — o enunciado inverteu essa lógica.",
      regraMental: "Estratificada: dentro do estrato, parecido; entre estratos, diferente."
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
    id: "ES-037", disciplina: "Estatística e Análise de Dados", assunto: "Estatística descritiva", subassunto: "Assimetria da distribuição",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (assimetria)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "Em uma distribuição de dados na qual a mediana é superior à média aritmética, é correto afirmar que essa distribuição apresenta assimetria negativa (à esquerda), com cauda mais alongada para valores menores.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mediana superior à média ... assimetria negativa",
    cognitivo: {
      motivo: "Cobrar a relação entre média, mediana e tipo de assimetria.",
      mede: "Estatística — medidas de assimetria.",
      pegadinhaDesc: "A banca pode inverter a relação (positiva × negativa).",
      ondeErra: "Troca assimetria negativa por positiva.",
      palavraCritica: "mediana superior à média ... assimetria negativa",
      tecnica: "Assimetria negativa (à esquerda): média < mediana < moda, com cauda alongada à esquerda (valores menores 'puxando' a média para baixo).",
      regraMental: "Média menor que a mediana = assimetria negativa (cauda à esquerda)."
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

/* Frequência de temas — Estatística e Análise de Dados (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Estatística e Análise de Dados");
  if (!d) { d = { disciplina: "Estatística e Análise de Dados", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Quartis, IIQ e outliers (regra de Tukey)", freq: 82, tendencia: "alta", prob: 0.85 },
    { tema: "Machine Learning: Naive Bayes, overfitting/underfitting", freq: 76, tendencia: "alta", prob: 0.8 },
    { tema: "Python para ciência de dados (Pandas, Sklearn)", freq: 74, tendencia: "alta", prob: 0.78 },
    { tema: "PLN: n-gramas e mineração de dados", freq: 70, tendencia: "estavel", prob: 0.72 },
  );
})();
