/* =====================================================================
   QUESTLAB — Lote 57: ESTATÍSTICA — PROBABILIDADE E INFERÊNCIA

   A auditoria do banco mostrou concentração em estatística descritiva:
   dos 97 itens de Estatística, 38 estavam em Análise Exploratória e
   Medidas de Tendência Central, e praticamente nada cobria a outra
   metade do conteúdo programático — distribuições de probabilidade,
   teste de hipóteses, estimação e amostragem.

   O escopo foi calibrado pelo conteúdo do edital e pela profundidade
   cobrada em material de curso (fórmulas, parâmetros, condições de
   aplicação). Os enunciados são autorais; a matéria é conhecimento
   estatístico padrão, não texto de terceiro.

   34 itens: distribuições discretas (binomial, Poisson, geométrica,
   hipergeométrica, binomial negativa), contínuas (normal, exponencial,
   uniforme), teste de hipóteses e erros, qui-quadrado, estimação
   pontual e intervalar, amostragem e distribuições amostrais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE57 = [

  /* ===================== DISTRIBUIÇÕES DISCRETAS ===================== */
  {
    id: "ES-098", disciplina: "Estatística", assunto: "Distribuição binomial", subassunto: "Condições de aplicação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "A distribuição binomial pressupõe número fixo de provas independentes, cada uma com apenas dois resultados possíveis e probabilidade de sucesso constante entre as provas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "número fixo de provas independentes ... probabilidade de sucesso constante",
    cognitivo: {
      motivo: "Fixar as condições que caracterizam um experimento binomial.",
      mede: "Modelo binomial — pressupostos.",
      pegadinhaDesc: "As quatro condições estão corretas; a banca costuma trocar 'constante' por 'variável'.",
      ondeErra: "Confunde com a hipergeométrica, em que p varia por não haver reposição.",
      palavraCritica: "independentes ... constante",
      tecnica: "Binomial: n fixo, provas independentes, dois resultados, p constante. Se p muda entre provas, é hipergeométrica.",
      regraMental: "Binomial = com reposição (p constante). Hipergeométrica = sem reposição."
    },
    comentario: {
      resolucao: "CERTO. São exatamente os pressupostos do modelo binomial: número fixo de ensaios (n), independência entre eles, dicotomia dos resultados (sucesso/fracasso) e probabilidade de sucesso p constante. A amostragem com reposição garante essa constância.",
      fundamento: "Modelo binomial — X ~ B(n, p).",
      macete: "n fixo + independência + 2 resultados + p constante.",
      erroComum: "Aplicar binomial a sorteios sem reposição.",
      comoBancaPensa: "Item correto que testa a distinção binomial × hipergeométrica."
    }
  },
  {
    id: "ES-099", disciplina: "Estatística", assunto: "Distribuição binomial", subassunto: "Esperança e variância",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.9,
    enunciado: "Se X segue distribuição binomial com parâmetros n e p, então a esperança de X é np e a variância também é np.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "a variância também é np",
    cognitivo: {
      motivo: "Separar os momentos da binomial dos da Poisson.",
      mede: "Binomial — E(X) e Var(X).",
      pegadinhaDesc: "Acerta a esperança e atribui à binomial a igualdade média = variância, que é propriedade da Poisson.",
      ondeErra: "Transfere para a binomial a marca registrada da Poisson.",
      palavraCritica: "variância também é np",
      tecnica: "Var = np(1−p) = npq. Como q < 1, a variância é sempre MENOR que a média na binomial — é a Poisson que tem média igual à variância.",
      regraMental: "Binomial: média np, variância npq (menor). Poisson: iguais."
    },
    comentario: {
      resolucao: "ERRADO. A esperança está correta, E(X) = np, mas a variância é Var(X) = np(1 − p) = npq. Como 0 < q < 1, na binomial a variância é sempre INFERIOR à média. A igualdade entre média e variância é característica da distribuição de Poisson, não da binomial.",
      fundamento: "Modelo binomial — momentos.",
      macete: "Média np; variância npq.",
      erroComum: "Escrever Var(X) = np, confundindo com Poisson.",
      comoBancaPensa: "Acerta a parte fácil e cola na binomial a propriedade que identifica a Poisson."
    }
  },
  {
    id: "ES-100", disciplina: "Estatística", assunto: "Distribuição de Poisson", subassunto: "Média e variância",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "Na distribuição de Poisson, a média é igual a λ e a variância é igual a λ², de modo que a variância cresce quadraticamente com a média.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "a variância é igual a λ²",
    cognitivo: {
      motivo: "Fixar a igualdade entre média e variância na Poisson.",
      mede: "Modelo de Poisson — momentos.",
      pegadinhaDesc: "Acerta a média e eleva a variância ao quadrado, quebrando a propriedade central do modelo.",
      ondeErra: "Aplica a intuição da variância como 'quadrado de algo' (herança do desvio padrão).",
      palavraCritica: "λ²",
      tecnica: "A marca da Poisson é E(X) = Var(X) = λ. Se a questão separar os dois valores, está errada.",
      regraMental: "Poisson: média = variância = λ."
    },
    comentario: {
      resolucao: "ERRADO. Na distribuição de Poisson, média e variância são ambas iguais a λ: E(X) = Var(X) = λ. Essa igualdade é justamente a característica que identifica o modelo. O desvio padrão, sim, é √λ.",
      fundamento: "Modelo de Poisson — X ~ Poisson(λ).",
      macete: "Poisson: média = variância.",
      erroComum: "Elevar λ ao quadrado na variância.",
      comoBancaPensa: "Ataca a propriedade mais distintiva do modelo, apostando na confusão com desvio padrão."
    }
  },
  {
    id: "ES-101", disciplina: "Estatística", assunto: "Distribuição de Poisson", subassunto: "Aplicação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "A distribuição de Poisson é adequada para modelar o número de ocorrências de um evento em um intervalo fixo de tempo ou espaço, quando os eventos ocorrem de forma independente e a uma taxa média constante.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "número de ocorrências ... intervalo fixo ... taxa média constante",
    cognitivo: {
      motivo: "Fixar o contexto de aplicação da Poisson.",
      mede: "Modelo de Poisson — pressupostos.",
      pegadinhaDesc: "Descrição fiel do modelo de contagem em intervalo contínuo.",
      ondeErra: "Confunde com binomial, que conta sucessos em n provas fixas, não em intervalo.",
      palavraCritica: "intervalo fixo de tempo ou espaço",
      tecnica: "Binomial conta sucessos em n ensaios; Poisson conta ocorrências por unidade de tempo/espaço, sem n definido.",
      regraMental: "Poisson: quantos por hora/km/página."
    },
    comentario: {
      resolucao: "CERTO. A Poisson modela contagens de eventos raros e independentes em um intervalo fixo (tempo, área, volume), sob taxa média constante λ — como chamadas por hora ou defeitos por metro de tecido.",
      fundamento: "Modelo de Poisson — pressupostos.",
      macete: "Poisson conta ocorrências por unidade de tempo ou espaço.",
      erroComum: "Exigir número fixo de ensaios, como na binomial.",
      comoBancaPensa: "Item correto que separa contagem por intervalo de contagem por ensaios."
    }
  },
  {
    id: "ES-102", disciplina: "Estatística", assunto: "Distribuição hipergeométrica", subassunto: "Distinção da binomial",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "A distribuição hipergeométrica aplica-se a extrações sem reposição de uma população finita, situação em que as provas não são independentes e a probabilidade de sucesso varia a cada extração.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem reposição ... não são independentes ... varia a cada extração",
    cognitivo: {
      motivo: "Fixar o critério que separa hipergeométrica de binomial.",
      mede: "Modelo hipergeométrico — pressupostos.",
      pegadinhaDesc: "Descrição correta; o candidato pode duvidar por associar 'dois resultados' automaticamente à binomial.",
      ondeErra: "Aplica binomial a sorteios sem reposição.",
      palavraCritica: "sem reposição",
      tecnica: "A pergunta decisiva é: houve reposição? Sem reposição em população finita → hipergeométrica.",
      regraMental: "Sem reposição = hipergeométrica."
    },
    comentario: {
      resolucao: "CERTO. Na hipergeométrica, as extrações ocorrem sem reposição em população finita de tamanho N com K sucessos; a cada retirada a composição muda, de modo que as provas são dependentes e p não é constante — exatamente o que a distingue da binomial.",
      fundamento: "Modelo hipergeométrico.",
      macete: "Sem reposição → hipergeométrica.",
      erroComum: "Usar binomial em amostragem sem reposição.",
      comoBancaPensa: "Item correto que cobra o critério de escolha entre os dois modelos."
    }
  },
  {
    id: "ES-103", disciplina: "Estatística", assunto: "Distribuição geométrica", subassunto: "Definição",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.75,
    enunciado: "A distribuição geométrica modela o número de ensaios de Bernoulli independentes necessários até a ocorrência do primeiro sucesso.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "até a ocorrência do primeiro sucesso",
    cognitivo: {
      motivo: "Fixar o que a geométrica conta.",
      mede: "Modelo geométrico.",
      pegadinhaDesc: "Definição correta; a banca costuma trocar 'primeiro' por 'k-ésimo', que seria binomial negativa.",
      ondeErra: "Confunde com a binomial negativa (r-ésimo sucesso).",
      palavraCritica: "primeiro sucesso",
      tecnica: "Geométrica é o caso particular da binomial negativa com r = 1.",
      regraMental: "Geométrica: espera o 1º sucesso."
    },
    comentario: {
      resolucao: "CERTO. A geométrica conta os ensaios independentes de Bernoulli até o primeiro sucesso, com P(X = k) = (1 − p)^(k−1)·p. É o caso particular da binomial negativa em que se aguarda apenas um sucesso.",
      fundamento: "Modelo geométrico.",
      macete: "Geométrica = tempo de espera do 1º sucesso.",
      erroComum: "Confundir com binomial negativa.",
      comoBancaPensa: "Item correto que exige separar geométrica de binomial negativa."
    }
  },
  {
    id: "ES-104", disciplina: "Estatística", assunto: "Distribuição binomial negativa", subassunto: "Distinção da geométrica",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.7,
    enunciado: "A distribuição binomial negativa modela o número de ensaios necessários até a obtenção do primeiro sucesso, sendo idêntica à distribuição geométrica em qualquer situação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "primeiro sucesso, sendo idêntica ... em qualquer situação",
    cognitivo: {
      motivo: "Separar binomial negativa de geométrica.",
      mede: "Modelo binomial negativo.",
      pegadinhaDesc: "Reduz a binomial negativa ao seu caso particular, afirmando identidade total.",
      ondeErra: "Sabe que há parentesco entre as duas e conclui que são iguais.",
      palavraCritica: "idêntica ... em qualquer situação",
      tecnica: "A binomial negativa aguarda o r-ésimo sucesso; a geométrica é o caso r = 1. A relação é de particularização, não de identidade.",
      regraMental: "Geométrica ⊂ binomial negativa (r = 1)."
    },
    comentario: {
      resolucao: "ERRADO. A binomial negativa modela o número de ensaios até o r-ésimo sucesso. A geométrica é apenas o caso particular em que r = 1; para r > 1 as distribuições não coincidem.",
      fundamento: "Modelo binomial negativo (Pascal).",
      macete: "Binomial negativa: espera o r-ésimo sucesso.",
      erroComum: "Tratar as duas como sinônimas.",
      comoBancaPensa: "Usa a relação verdadeira de caso particular para afirmar identidade falsa."
    }
  },
  {
    id: "ES-105", disciplina: "Estatística", assunto: "Variáveis aleatórias", subassunto: "Função de probabilidade (discretas)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Em uma variável aleatória discreta, a soma das probabilidades de todos os valores possíveis deve ser igual a 1, e cada probabilidade individual deve situar-se entre 0 e 1, inclusive.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "soma ... igual a 1 ... entre 0 e 1",
    cognitivo: {
      motivo: "Fixar os axiomas da função de probabilidade.",
      mede: "Variáveis aleatórias discretas.",
      pegadinhaDesc: "Condições corretas de uma função de probabilidade.",
      ondeErra: "Aceita soma diferente de 1 em tabelas de distribuição.",
      palavraCritica: "soma ... igual a 1",
      tecnica: "Toda questão que apresenta tabela de distribuição pede, antes de tudo, conferir se a soma fecha em 1.",
      regraMental: "Σp(x) = 1 e 0 ≤ p(x) ≤ 1."
    },
    comentario: {
      resolucao: "CERTO. São as duas condições que definem uma função de probabilidade de variável discreta: não negatividade limitada por 1 e soma unitária sobre todo o suporte.",
      fundamento: "Axiomas da função de probabilidade.",
      macete: "Soma sempre 1.",
      erroComum: "Não checar o fechamento da tabela.",
      comoBancaPensa: "Item correto que prepara para questões com parâmetro a determinar."
    }
  },

  /* ===================== DISTRIBUIÇÕES CONTÍNUAS ===================== */
  {
    id: "ES-106", disciplina: "Estatística", assunto: "Distribuição normal", subassunto: "Propriedades",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.9,
    enunciado: "Na distribuição normal, a curva é simétrica em torno da média, e média, mediana e moda coincidem.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "simétrica em torno da média ... média, mediana e moda coincidem",
    cognitivo: {
      motivo: "Fixar as propriedades básicas da normal.",
      mede: "Distribuição normal.",
      pegadinhaDesc: "Propriedades corretas e centrais do modelo.",
      ondeErra: "Duvida por lembrar que em distribuições assimétricas essas medidas divergem.",
      palavraCritica: "coincidem",
      tecnica: "Simetria perfeita implica igualdade das três medidas de tendência central — é o oposto do que ocorre na assimétrica.",
      regraMental: "Normal: média = mediana = moda."
    },
    comentario: {
      resolucao: "CERTO. A normal é simétrica em relação à média, tem forma de sino e apresenta coincidência entre média, mediana e moda. Assimetria e curtose de excesso são nulas.",
      fundamento: "Distribuição normal — propriedades.",
      macete: "Normal: as três medidas centrais no mesmo ponto.",
      erroComum: "Aplicar a divergência típica de distribuições assimétricas.",
      comoBancaPensa: "Item correto de fundamento, base para questões de padronização."
    }
  },
  {
    id: "ES-107", disciplina: "Estatística", assunto: "Distribuição normal", subassunto: "Normal padrão e escore Z",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.9,
    enunciado: "A distribuição normal padrão possui média igual a 0 e desvio padrão igual a 1, sendo a padronização obtida pela subtração da média e divisão pela variância.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "divisão pela variância",
    cognitivo: {
      motivo: "Fixar a fórmula correta de padronização.",
      mede: "Escore Z.",
      pegadinhaDesc: "Acerta os parâmetros da normal padrão e erra o denominador da padronização.",
      ondeErra: "Troca desvio padrão por variância no denominador.",
      palavraCritica: "divisão pela variância",
      tecnica: "Z = (X − μ)/σ. O denominador é o DESVIO PADRÃO, não a variância — só assim Z fica adimensional.",
      regraMental: "Z divide por sigma, não por sigma²."
    },
    comentario: {
      resolucao: "ERRADO. A normal padrão realmente tem média 0 e desvio padrão 1, mas a padronização é Z = (X − μ)/σ, ou seja, divide-se pelo DESVIO PADRÃO, não pela variância. Dividir por σ² não produziria escore com desvio padrão unitário.",
      fundamento: "Padronização — escore Z.",
      macete: "Z = (X − μ)/σ.",
      erroComum: "Usar σ² no denominador.",
      comoBancaPensa: "Mantém correta a parte fácil (média 0, DP 1) e altera o denominador da fórmula."
    }
  },
  {
    id: "ES-108", disciplina: "Estatística", assunto: "Distribuição normal", subassunto: "Regra empírica",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "Em uma distribuição normal, aproximadamente 95% das observações situam-se no intervalo de um desvio padrão em torno da média.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "95% ... um desvio padrão",
    cognitivo: {
      motivo: "Fixar a correspondência correta da regra empírica 68-95-99,7.",
      mede: "Distribuição normal — dispersão.",
      pegadinhaDesc: "Usa um percentual verdadeiro da escala com o número errado de desvios, o que soa familiar.",
      ondeErra: "Lembra do 95% mas o associa ao primeiro sigma.",
      palavraCritica: "um desvio padrão",
      tecnica: "Memorize a escada pareada: 1σ ≈ 68%, 2σ ≈ 95%, 3σ ≈ 99,7%. O 95% é do SEGUNDO desvio.",
      regraMental: "68 – 95 – 99,7 para 1, 2 e 3 sigmas."
    },
    comentario: {
      resolucao: "ERRADO. Em um desvio padrão em torno da média (μ ± 1σ) concentram-se cerca de 68% das observações. Os 95% correspondem a μ ± 2σ, e aproximadamente 99,7% a μ ± 3σ.",
      fundamento: "Regra empírica (68-95-99,7).",
      macete: "2 sigmas ≈ 95%; 1 sigma ≈ 68%.",
      erroComum: "Deslocar o percentual em um sigma.",
      comoBancaPensa: "Aproveita que o candidato memoriza os percentuais sem parear com o número de desvios."
    }
  },
  {
    id: "ES-109", disciplina: "Estatística", assunto: "Distribuição exponencial", subassunto: "Falta de memória",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.75,
    enunciado: "A distribuição exponencial é utilizada para modelar o tempo entre ocorrências sucessivas de um processo de Poisson e possui a propriedade de falta de memória.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "tempo entre ocorrências ... falta de memória",
    cognitivo: {
      motivo: "Ligar exponencial e Poisson e fixar a propriedade característica.",
      mede: "Distribuição exponencial.",
      pegadinhaDesc: "Ambas as afirmações são corretas e complementares.",
      ondeErra: "Não associa a exponencial ao processo de Poisson.",
      palavraCritica: "falta de memória",
      tecnica: "Poisson conta ocorrências no intervalo; a exponencial mede o tempo ENTRE elas. Falta de memória: P(X > s+t | X > s) = P(X > t).",
      regraMental: "Poisson conta; exponencial cronometra o intervalo."
    },
    comentario: {
      resolucao: "CERTO. Se as ocorrências seguem processo de Poisson com taxa λ, o tempo entre ocorrências consecutivas segue exponencial de parâmetro λ. A falta de memória significa que o tempo já decorrido não altera a probabilidade de espera adicional — é a única contínua com essa propriedade.",
      fundamento: "Distribuição exponencial — relação com Poisson.",
      macete: "Exponencial = tempo de espera, sem memória.",
      erroComum: "Dissociar exponencial de Poisson.",
      comoBancaPensa: "Item correto que cobra a ligação entre os dois modelos."
    }
  },
  {
    id: "ES-110", disciplina: "Estatística", assunto: "Distribuição uniforme", subassunto: "Densidade constante",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.75,
    enunciado: "Na distribuição uniforme contínua no intervalo [a, b], a função densidade é constante nesse intervalo e a variância é dada por (b − a)²/2.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "variância ... (b − a)²/2",
    cognitivo: {
      motivo: "Fixar a variância da uniforme contínua.",
      mede: "Distribuição uniforme.",
      pegadinhaDesc: "A densidade constante está correta e o formato da variância é quase certo — só o divisor foi trocado.",
      ondeErra: "Lembra do quadrado da amplitude mas não do divisor 12.",
      palavraCritica: "/2",
      tecnica: "Densidade f(x) = 1/(b−a); média (a+b)/2; variância (b−a)²/12. O 2 aparece na média, o 12 na variância.",
      regraMental: "Uniforme: média divide por 2, variância divide por 12."
    },
    comentario: {
      resolucao: "ERRADO. A densidade é de fato constante, f(x) = 1/(b − a) no intervalo, mas a variância da uniforme contínua é (b − a)²/12, e não (b − a)²/2. O divisor 2 pertence à média, que é o ponto médio (a + b)/2.",
      fundamento: "Distribuição uniforme contínua.",
      macete: "Média sobre 2; variância sobre 12.",
      erroComum: "Trocar o divisor da variância pelo da média.",
      comoBancaPensa: "Mantém correta a primeira metade e altera apenas o denominador da fórmula."
    }
  },
  {
    id: "ES-111", disciplina: "Estatística", assunto: "Variáveis aleatórias", subassunto: "Densidade em variáveis contínuas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Em uma variável aleatória contínua, a probabilidade de que ela assuma exatamente um valor pontual específico é igual a zero.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "valor pontual específico é igual a zero",
    cognitivo: {
      motivo: "Fixar a diferença essencial entre variáveis discretas e contínuas.",
      mede: "Variáveis aleatórias contínuas.",
      pegadinhaDesc: "Propriedade correta, mas contraintuitiva — o candidato tende a rejeitar.",
      ondeErra: "Transfere a lógica das discretas, em que P(X = x) > 0.",
      palavraCritica: "exatamente um valor pontual ... zero",
      tecnica: "Em contínuas, probabilidade é área sob a curva; um ponto tem largura zero, logo área zero. Por isso P(X ≤ a) = P(X < a).",
      regraMental: "Contínua: ponto tem probabilidade zero; só intervalo tem área."
    },
    comentario: {
      resolucao: "CERTO. Para variáveis contínuas, a probabilidade corresponde à área sob a função densidade em um intervalo; um único ponto delimita área nula, de modo que P(X = a) = 0. Consequência prática: incluir ou excluir o extremo não altera a probabilidade do intervalo.",
      fundamento: "Variáveis aleatórias contínuas — função densidade.",
      macete: "Ponto isolado: probabilidade zero.",
      erroComum: "Aplicar raciocínio de variável discreta.",
      comoBancaPensa: "Item correto e contraintuitivo, que separa quem entendeu densidade de quem decorou."
    }
  },

  /* ===================== PROBABILIDADE ===================== */
  {
    id: "ES-112", disciplina: "Estatística", assunto: "Probabilidade", subassunto: "Probabilidade da união",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "Para dois eventos quaisquer A e B, a probabilidade da união é dada por P(A) + P(B) − P(A ∩ B).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "P(A) + P(B) − P(A ∩ B)",
    cognitivo: {
      motivo: "Fixar a regra da adição em sua forma geral.",
      mede: "Probabilidade — união de eventos.",
      pegadinhaDesc: "Fórmula geral correta, válida inclusive para eventos não excludentes.",
      ondeErra: "Omite o termo da interseção, que só é nulo em eventos mutuamente excludentes.",
      palavraCritica: "− P(A ∩ B)",
      tecnica: "Subtrai-se a interseção para não contar duas vezes. Se A e B são excludentes, P(A ∩ B) = 0 e a fórmula simplifica.",
      regraMental: "União: soma menos a interseção."
    },
    comentario: {
      resolucao: "CERTO. É a regra geral da adição: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). O termo subtraído corrige a dupla contagem do espaço comum; em eventos mutuamente excludentes ele é zero.",
      fundamento: "Axiomas de probabilidade — regra da adição.",
      macete: "Sempre desconte a interseção.",
      erroComum: "Somar direto, tratando todos os eventos como excludentes.",
      comoBancaPensa: "Item correto que serve de base para pegadinhas sobre exclusividade."
    }
  },
  {
    id: "ES-113", disciplina: "Estatística", assunto: "Probabilidade", subassunto: "Independência × exclusividade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "Dois eventos mutuamente excludentes, ambos com probabilidade positiva, são necessariamente independentes.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "mutuamente excludentes ... necessariamente independentes",
    cognitivo: {
      motivo: "Separar exclusividade mútua de independência.",
      mede: "Probabilidade — conceitos.",
      pegadinhaDesc: "Confunde dois conceitos distintos que a banca adora sobrepor.",
      ondeErra: "Trata 'não ocorrem juntos' como 'não se influenciam'.",
      palavraCritica: "necessariamente independentes",
      tecnica: "Excludentes: P(A∩B)=0. Independentes: P(A∩B)=P(A)·P(B). Com P(A),P(B) > 0, o produto é positivo — logo não pode ser zero. São incompatíveis.",
      regraMental: "Excludentes com prob. positiva são sempre DEPENDENTES."
    },
    comentario: {
      resolucao: "ERRADO. É o oposto: eventos mutuamente excludentes com probabilidades positivas são necessariamente DEPENDENTES. Se A ocorre, B não pode ocorrer, o que é a maior dependência possível. Formalmente, P(A ∩ B) = 0, mas P(A)·P(B) > 0, violando a condição de independência.",
      fundamento: "Probabilidade — independência e exclusividade.",
      macete: "Excludente ≠ independente; com prob. positiva, são opostos.",
      erroComum: "Tratar os dois conceitos como sinônimos.",
      comoBancaPensa: "Explora a confusão terminológica mais clássica da probabilidade."
    }
  },
  {
    id: "ES-114", disciplina: "Estatística", assunto: "Probabilidade", subassunto: "Probabilidade condicional",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (probabilidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "A probabilidade condicional de A dado B, com P(B) > 0, é definida como o quociente entre a probabilidade da interseção de A e B e a probabilidade de B.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "interseção de A e B ... probabilidade de B",
    cognitivo: {
      motivo: "Fixar a definição de probabilidade condicional.",
      mede: "Probabilidade condicional.",
      pegadinhaDesc: "Definição correta; a banca costuma inverter o denominador.",
      ondeErra: "Divide pela probabilidade de A em vez de B.",
      palavraCritica: "probabilidade de B",
      tecnica: "P(A|B) = P(A∩B)/P(B). O denominador é sempre o evento CONDICIONANTE, o que vem depois da barra.",
      regraMental: "Divide pelo que veio depois da barra."
    },
    comentario: {
      resolucao: "CERTO. Por definição, P(A|B) = P(A ∩ B)/P(B), para P(B) > 0. O condicionamento restringe o espaço amostral a B, e por isso o denominador é a probabilidade de B.",
      fundamento: "Probabilidade condicional.",
      macete: "Denominador é o evento condicionante.",
      erroComum: "Inverter e dividir por P(A).",
      comoBancaPensa: "Item correto que sustenta questões de Bayes."
    }
  },

  /* ===================== INFERÊNCIA: TESTE DE HIPÓTESES ===================== */
  {
    id: "ES-115", disciplina: "Estatística", assunto: "Teste de hipóteses", subassunto: "Erro tipo I",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "O erro do tipo I consiste em rejeitar a hipótese nula quando ela é verdadeira, e sua probabilidade de ocorrência corresponde ao nível de significância do teste.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "rejeitar a hipótese nula quando ela é verdadeira ... nível de significância",
    cognitivo: {
      motivo: "Fixar a definição do erro tipo I e sua relação com α.",
      mede: "Teste de hipóteses — erros.",
      pegadinhaDesc: "Definição e associação corretas; a banca costuma inverter com o erro tipo II.",
      ondeErra: "Troca rejeição por aceitação, ou associa α ao erro tipo II.",
      palavraCritica: "rejeitar ... verdadeira",
      tecnica: "Tipo I é REJEIÇÃO INCORRETA (α). Tipo II é ACEITAÇÃO INCORRETA (β).",
      regraMental: "Tipo I rejeita o que era verdade; α é sua probabilidade."
    },
    comentario: {
      resolucao: "CERTO. O erro tipo I é a rejeição incorreta de H₀ verdadeira, e sua probabilidade é justamente o nível de significância α — os testes são construídos para controlar esse erro.",
      fundamento: "Teste de hipóteses — erros tipo I e II.",
      macete: "Tipo I = rejeição incorreta = α.",
      erroComum: "Inverter com o erro tipo II.",
      comoBancaPensa: "Item correto sobre o par de definições mais cobrado da inferência."
    }
  },
  {
    id: "ES-116", disciplina: "Estatística", assunto: "Teste de hipóteses", subassunto: "Relação entre erros I e II",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "Mantido constante o tamanho da amostra, a redução do nível de significância de um teste diminui simultaneamente a probabilidade de erro do tipo I e a de erro do tipo II.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "diminui simultaneamente",
    cognitivo: {
      motivo: "Cobrar o trade-off entre os dois tipos de erro.",
      mede: "Teste de hipóteses — relação α × β.",
      pegadinhaDesc: "Sugere ganho sem custo, ignorando a relação inversa entre α e β.",
      ondeErra: "Supõe que basta ser mais rigoroso para errar menos em tudo.",
      palavraCritica: "diminui simultaneamente",
      tecnica: "Com n fixo, α e β se movem em sentidos opostos. Reduzir os dois ao mesmo tempo exige AUMENTAR a amostra.",
      regraMental: "α desce, β sobe — salvo se n crescer."
    },
    comentario: {
      resolucao: "ERRADO. Com o tamanho da amostra fixo, α e β variam em sentidos opostos: ao reduzir o nível de significância, exige-se evidência mais forte para rejeitar H₀, o que aumenta a probabilidade de erro tipo II. Reduzir ambos simultaneamente só é possível aumentando o tamanho da amostra.",
      fundamento: "Teste de hipóteses — trade-off α × β.",
      macete: "Com n fixo, α e β são gangorra.",
      erroComum: "Achar que rigor maior reduz todos os erros.",
      comoBancaPensa: "Oferece um 'ganho duplo' que viola o trade-off fundamental do teste."
    }
  },
  {
    id: "ES-117", disciplina: "Estatística", assunto: "Teste de hipóteses", subassunto: "p-valor",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "O p-valor representa a probabilidade de a hipótese nula ser verdadeira, de modo que um p-valor de 0,03 indica 3% de chance de H₀ ser verdadeira.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "probabilidade de a hipótese nula ser verdadeira",
    cognitivo: {
      motivo: "Corrigir a interpretação equivocada mais comum do p-valor.",
      mede: "Teste de hipóteses — nível descritivo.",
      pegadinhaDesc: "Inverte o condicionamento: o p-valor condiciona-se a H₀ verdadeira, não mede a probabilidade dela.",
      ondeErra: "Lê o p-valor como probabilidade da hipótese, e não dos dados.",
      palavraCritica: "probabilidade de a hipótese nula ser verdadeira",
      tecnica: "p-valor = P(dados tão ou mais extremos | H₀ verdadeira). É probabilidade DOS DADOS dado H₀, nunca de H₀.",
      regraMental: "p-valor condiciona a H₀; não mede H₀."
    },
    comentario: {
      resolucao: "ERRADO. O p-valor é a probabilidade de se observar um resultado tão ou mais extremo que o obtido, SUPONDO a hipótese nula verdadeira. Não é a probabilidade de H₀ ser verdadeira — a estatística clássica não atribui probabilidade a hipóteses. Rejeita-se H₀ quando o p-valor é inferior a α.",
      fundamento: "Teste de hipóteses — p-valor (nível descritivo).",
      macete: "p-valor mede os dados, não a hipótese.",
      erroComum: "Inverter o condicionamento.",
      comoBancaPensa: "Explora o erro de interpretação mais difundido da inferência clássica."
    }
  },
  {
    id: "ES-118", disciplina: "Estatística", assunto: "Teste de hipóteses", subassunto: "Poder do teste",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O poder de um teste estatístico é dado por 1 menos a probabilidade de erro do tipo II.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "1 menos a probabilidade de erro do tipo II",
    cognitivo: {
      motivo: "Fixar a definição de poder do teste.",
      mede: "Teste de hipóteses — poder.",
      pegadinhaDesc: "Definição correta; a banca costuma trocar β por α.",
      ondeErra: "Escreve 1 − α, confundindo com o nível de confiança.",
      palavraCritica: "erro do tipo II",
      tecnica: "Poder = 1 − β: probabilidade de rejeitar H₀ quando ela é de fato falsa. Não confundir com 1 − α, que é o nível de confiança.",
      regraMental: "Poder = 1 − β. Confiança = 1 − α."
    },
    comentario: {
      resolucao: "CERTO. O poder do teste é 1 − β, ou seja, a probabilidade de rejeitar corretamente uma hipótese nula falsa. Aumenta com o tamanho da amostra e com o afastamento entre o valor hipotético e o real.",
      fundamento: "Teste de hipóteses — poder.",
      macete: "Poder = 1 − β.",
      erroComum: "Confundir com o nível de confiança (1 − α).",
      comoBancaPensa: "Item correto que separa poder de confiança."
    }
  },
  {
    id: "ES-119", disciplina: "Estatística", assunto: "Teste de hipóteses", subassunto: "Hipótese nula",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "O não rejeitar a hipótese nula em um teste estatístico equivale a demonstrar que ela é verdadeira.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "equivale a demonstrar que ela é verdadeira",
    cognitivo: {
      motivo: "Fixar o que a não rejeição de H₀ significa — e o que não significa.",
      mede: "Teste de hipóteses — lógica da decisão.",
      pegadinhaDesc: "Converte ausência de evidência contrária em prova a favor.",
      ondeErra: "Lê 'aceitar H₀' como 'H₀ provada'.",
      palavraCritica: "equivale a demonstrar",
      tecnica: "O teste só controla o erro de rejeitar H₀ verdadeira (α). Não rejeitar pode significar apenas amostra pequena ou teste de baixo poder.",
      regraMental: "Não rejeitar ≠ provar. Falta de evidência não é evidência de falta."
    },
    comentario: {
      resolucao: "ERRADO. Não rejeitar H₀ significa apenas que a evidência amostral foi insuficiente para rejeitá-la ao nível de significância adotado — o que pode decorrer de amostra pequena ou baixo poder do teste. A hipótese nula nunca é provada; ela é apenas mantida por falta de evidência contrária.",
      fundamento: "Teste de hipóteses — lógica da decisão.",
      macete: "Não rejeitar não é provar.",
      erroComum: "Tratar a não rejeição como confirmação de H₀.",
      comoBancaPensa: "Explora a leitura intuitiva de 'aceitar a hipótese' como demonstração."
    }
  },
  {
    id: "ES-120", disciplina: "Estatística", assunto: "Teste qui-quadrado", subassunto: "Aplicação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "O teste qui-quadrado de independência é aplicável a variáveis qualitativas dispostas em tabelas de contingência e compara frequências observadas com frequências esperadas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "variáveis qualitativas ... frequências observadas com ... esperadas",
    cognitivo: {
      motivo: "Fixar o campo de aplicação do qui-quadrado.",
      mede: "Teste qui-quadrado.",
      pegadinhaDesc: "Descrição correta; a banca costuma afirmar que exige variáveis quantitativas.",
      ondeErra: "Supõe que todo teste estatístico requer variáveis numéricas.",
      palavraCritica: "qualitativas ... observadas ... esperadas",
      tecnica: "Qui-quadrado trabalha com CONTAGENS em categorias. A estatística soma (O − E)²/E sobre as células.",
      regraMental: "Qui-quadrado: variável qualitativa, compara observado com esperado."
    },
    comentario: {
      resolucao: "CERTO. O qui-quadrado de independência avalia associação entre duas variáveis qualitativas em tabela de contingência, confrontando frequências observadas e esperadas sob a hipótese de independência, pela soma de (O − E)²/E.",
      fundamento: "Teste qui-quadrado de independência.",
      macete: "Qualitativas + contagens = qui-quadrado.",
      erroComum: "Exigir variáveis quantitativas.",
      comoBancaPensa: "Item correto que fixa o único teste do edital voltado a dados categóricos."
    }
  },

  /* ===================== ESTIMAÇÃO E AMOSTRAGEM ===================== */
  {
    id: "ES-121", disciplina: "Estatística", assunto: "Estimação", subassunto: "Intervalo de confiança — amplitude",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "Mantidos constantes os demais fatores, o aumento do nível de confiança de um intervalo produz intervalo de menor amplitude.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "aumento do nível de confiança ... menor amplitude",
    cognitivo: {
      motivo: "Fixar a relação entre confiança e amplitude.",
      mede: "Estimação intervalar.",
      pegadinhaDesc: "Inverte a relação: mais confiança exige intervalo mais largo, não mais estreito.",
      ondeErra: "Associa 'melhor' a 'mais preciso' e conclui que ganha nos dois.",
      palavraCritica: "menor amplitude",
      tecnica: "Mais confiança → maior valor crítico → intervalo mais LARGO. Só se ganha precisão e confiança ao mesmo tempo aumentando n.",
      regraMental: "Mais confiança, mais largo. Para estreitar sem perder confiança, aumente n."
    },
    comentario: {
      resolucao: "ERRADO. É o contrário: elevar o nível de confiança (de 95% para 99%, por exemplo) exige valor crítico maior e, portanto, intervalo MAIS AMPLO. Só é possível estreitar o intervalo mantendo a confiança aumentando o tamanho da amostra ou reduzindo a variabilidade.",
      fundamento: "Estimação intervalar — confiança × precisão.",
      macete: "Mais confiança = intervalo mais largo.",
      erroComum: "Supor ganho simultâneo de confiança e precisão.",
      comoBancaPensa: "Oferece um ganho sem custo, invertendo o trade-off do intervalo."
    }
  },
  {
    id: "ES-122", disciplina: "Estatística", assunto: "Estimação", subassunto: "Interpretação do intervalo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "Um intervalo de confiança de 95% para a média populacional significa que há 95% de probabilidade de o parâmetro estar dentro daquele intervalo já calculado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "95% de probabilidade de o parâmetro estar dentro daquele intervalo já calculado",
    cognitivo: {
      motivo: "Corrigir a interpretação frequentista do intervalo de confiança.",
      mede: "Estimação intervalar — interpretação.",
      pegadinhaDesc: "Atribui probabilidade a um parâmetro fixo e a um intervalo já observado.",
      ondeErra: "Lê a confiança como probabilidade do parâmetro, e não do procedimento.",
      palavraCritica: "daquele intervalo já calculado",
      tecnica: "Na inferência clássica o parâmetro é fixo; o que varia é o intervalo. A confiança é do MÉTODO: em 95% das amostras, o intervalo conteria o parâmetro.",
      regraMental: "Confiança é do procedimento, não do intervalo específico."
    },
    comentario: {
      resolucao: "ERRADO. Na abordagem clássica, o parâmetro é uma constante desconhecida e o intervalo já calculado ou o contém ou não. A confiança de 95% refere-se ao procedimento: se o processo de amostragem fosse repetido muitas vezes, cerca de 95% dos intervalos construídos conteriam o parâmetro.",
      fundamento: "Estimação intervalar — interpretação frequentista.",
      macete: "95% dos intervalos, não 95% de chance neste.",
      erroComum: "Atribuir probabilidade ao parâmetro.",
      comoBancaPensa: "Explora a interpretação intuitiva porém incorreta do intervalo."
    }
  },
  {
    id: "ES-123", disciplina: "Estatística", assunto: "Estimação", subassunto: "Estimador não viesado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Um estimador é dito não viesado quando sua esperança matemática é igual ao parâmetro populacional que se pretende estimar.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "esperança matemática é igual ao parâmetro",
    cognitivo: {
      motivo: "Fixar a definição de não viés.",
      mede: "Estimação pontual — propriedades.",
      pegadinhaDesc: "Definição correta e formal.",
      ondeErra: "Confunde não viés com consistência ou eficiência.",
      palavraCritica: "esperança ... igual ao parâmetro",
      tecnica: "Não viés: E(estimador) = parâmetro. Consistência: converge com n → ∞. Eficiência: menor variância.",
      regraMental: "Não viesado acerta na média."
    },
    comentario: {
      resolucao: "CERTO. Um estimador é não viesado (não tendencioso) quando sua esperança coincide com o parâmetro. A média amostral é estimador não viesado da média populacional; a variância amostral com denominador n − 1 é não viesada da variância populacional.",
      fundamento: "Estimação pontual — não viés.",
      macete: "Não viesado: acerta na média.",
      erroComum: "Confundir com consistência.",
      comoBancaPensa: "Item correto sobre a propriedade mais cobrada de estimadores."
    }
  },
  {
    id: "ES-124", disciplina: "Estatística", assunto: "Amostragem", subassunto: "Amostragem probabilística",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (amostragem)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "Na amostragem probabilística, todo elemento da população possui probabilidade conhecida e não nula de ser selecionado, o que permite a generalização estatística dos resultados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "probabilidade conhecida e não nula",
    cognitivo: {
      motivo: "Fixar o critério que define amostragem probabilística.",
      mede: "Amostragem — classificação.",
      pegadinhaDesc: "Critério correto e sua consequência inferencial.",
      ondeErra: "Confunde com amostragem por conveniência ou por julgamento.",
      palavraCritica: "conhecida e não nula",
      tecnica: "Sem probabilidade conhecida de seleção não há como calcular erro amostral — por isso a não probabilística não permite inferência formal.",
      regraMental: "Probabilística = todos têm chance conhecida e positiva."
    },
    comentario: {
      resolucao: "CERTO. A amostragem probabilística exige que cada elemento tenha probabilidade conhecida e maior que zero de integrar a amostra, condição que viabiliza o cálculo do erro amostral e a inferência para a população. As modalidades não probabilísticas (conveniência, julgamento, cotas) não atendem a esse requisito.",
      fundamento: "Amostragem probabilística × não probabilística.",
      macete: "Probabilística: chance conhecida e positiva para todos.",
      erroComum: "Tratar amostra grande como sinônimo de probabilística.",
      comoBancaPensa: "Item correto que fundamenta a distinção entre os dois grupos de técnicas."
    }
  },
  {
    id: "ES-125", disciplina: "Estatística", assunto: "Amostragem", subassunto: "Estratificada × conglomerados",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (amostragem)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "Na amostragem estratificada, a população é dividida em subgrupos homogêneos internamente e extraem-se elementos de todos os estratos; na amostragem por conglomerados, sorteiam-se grupos inteiros, que são internamente heterogêneos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "todos os estratos ... sorteiam-se grupos inteiros",
    cognitivo: {
      motivo: "Separar as duas técnicas probabilísticas mais confundidas.",
      mede: "Amostragem — estratificada e conglomerados.",
      pegadinhaDesc: "Ambas as descrições corretas, inclusive quanto à homogeneidade interna.",
      ondeErra: "Inverte a homogeneidade ou supõe que na estratificada se sorteiam estratos.",
      palavraCritica: "homogêneos ... heterogêneos",
      tecnica: "Estrato: homogêneo dentro, e TODOS entram. Conglomerado: heterogêneo dentro (mini-população), e só ALGUNS são sorteados.",
      regraMental: "Estrato: todos participam. Conglomerado: sorteia-se o grupo."
    },
    comentario: {
      resolucao: "CERTO. Na estratificada busca-se homogeneidade interna nos estratos (e heterogeneidade entre eles), retirando-se elementos de cada estrato. Na amostragem por conglomerados, cada grupo idealmente reproduz a população (heterogêneo internamente) e sorteiam-se conglomerados inteiros, o que reduz custo mas tende a elevar o erro amostral.",
      fundamento: "Amostragem estratificada e por conglomerados.",
      macete: "Estrato: homogêneo e todos entram. Conglomerado: heterogêneo e sorteia-se o grupo.",
      erroComum: "Inverter a homogeneidade interna das duas técnicas.",
      comoBancaPensa: "Item correto que cobra a distinção integral entre as duas."
    }
  },
  {
    id: "ES-126", disciplina: "Estatística", assunto: "Amostragem", subassunto: "Amostragem sistemática",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (amostragem)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.75,
    enunciado: "A amostragem sistemática, por selecionar os elementos segundo regra fixa de intervalo, classifica-se como técnica não probabilística.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "classifica-se como técnica não probabilística",
    cognitivo: {
      motivo: "Fixar a classificação da amostragem sistemática.",
      mede: "Amostragem — classificação das técnicas.",
      pegadinhaDesc: "Usa a regularidade do passo como argumento para negar a natureza probabilística.",
      ondeErra: "Associa 'regra fixa' a 'sem sorteio', esquecendo que o ponto de partida é aleatório.",
      palavraCritica: "não probabilística",
      tecnica: "É probabilística porque o primeiro elemento é sorteado, o que dá a todos chance conhecida de seleção. Não probabilísticas são conveniência, julgamento e cotas.",
      regraMental: "Sistemática: sorteia o começo, depois anda de k em k — é probabilística."
    },
    comentario: {
      resolucao: "ERRADO. A amostragem sistemática é PROBABILÍSTICA: define-se o intervalo k = N/n, sorteia-se aleatoriamente o primeiro elemento entre os k iniciais e selecionam-se os demais de k em k. A aleatoriedade do ponto de partida garante probabilidade conhecida de seleção. São não probabilísticas as amostragens por conveniência, por julgamento e por cotas. Ressalva: a técnica pode gerar viés se a lista apresentar periodicidade coincidente com o intervalo.",
      fundamento: "Amostragem sistemática — classificação.",
      macete: "Início sorteado ⇒ probabilística.",
      erroComum: "Considerá-la não probabilística pela regularidade do passo.",
      comoBancaPensa: "Oferece um argumento plausível (regra fixa) para uma classificação errada."
    }
  },
  {
    id: "ES-127", disciplina: "Estatística", assunto: "Distribuições amostrais", subassunto: "Teorema Central do Limite",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.9,
    enunciado: "Pelo teorema central do limite, a distribuição da média amostral aproxima-se da normal à medida que o tamanho da amostra cresce, ainda que a população de origem não siga distribuição normal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ainda que a população de origem não siga distribuição normal",
    cognitivo: {
      motivo: "Fixar o alcance do teorema central do limite.",
      mede: "Distribuições amostrais — TCL.",
      pegadinhaDesc: "Enunciado correto, inclusive na parte que dispensa a normalidade da população.",
      ondeErra: "Acredita que o TCL exige população normal.",
      palavraCritica: "ainda que a população ... não siga distribuição normal",
      tecnica: "O TCL fala da distribuição da MÉDIA AMOSTRAL, não dos dados. É o que autoriza usar a normal em amostras grandes de populações quaisquer.",
      regraMental: "TCL normaliza a média, não a população."
    },
    comentario: {
      resolucao: "CERTO. O teorema central do limite garante que, para n suficientemente grande, a distribuição da média amostral tende à normal, independentemente da distribuição da população de origem (desde que a variância seja finita). É esse resultado que sustenta a inferência baseada na normal em amostras grandes.",
      fundamento: "Teorema central do limite.",
      macete: "TCL: a média fica normal, mesmo com população torta.",
      erroComum: "Exigir população normal para aplicar o TCL.",
      comoBancaPensa: "Item correto sobre o teorema mais cobrado da inferência."
    }
  },
  {
    id: "ES-128", disciplina: "Estatística", assunto: "Distribuições amostrais", subassunto: "Erro padrão da média",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (inferência)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "O erro padrão da média amostral é obtido dividindo-se o desvio padrão populacional pelo tamanho da amostra.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "pelo tamanho da amostra",
    cognitivo: {
      motivo: "Fixar a fórmula do erro padrão.",
      mede: "Distribuições amostrais — erro padrão.",
      pegadinhaDesc: "Omite a raiz quadrada, exagerando a redução do erro com o aumento de n.",
      ondeErra: "Esquece que a divisão é por √n, não por n.",
      palavraCritica: "pelo tamanho da amostra",
      tecnica: "Erro padrão = σ/√n. Para reduzir o erro pela metade é preciso QUADRUPLICAR a amostra.",
      regraMental: "Divide por raiz de n."
    },
    comentario: {
      resolucao: "ERRADO. O erro padrão da média é σ/√n — divide-se pela RAIZ QUADRADA do tamanho da amostra, não por n. É por isso que ganhos de precisão são cada vez mais caros: reduzir o erro à metade exige amostra quatro vezes maior.",
      fundamento: "Distribuição amostral da média — erro padrão.",
      macete: "σ sobre raiz de n.",
      erroComum: "Dividir por n.",
      comoBancaPensa: "Suprime a raiz, um dos erros de fórmula mais explorados."
    }
  },
  {
    id: "ES-129", disciplina: "Estatística", assunto: "Correlação e regressão", subassunto: "Coeficiente de correlação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (correlação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "O coeficiente de correlação linear de Pearson varia entre −1 e 1, e um valor próximo de zero indica ausência de qualquer relação entre as variáveis.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "ausência de qualquer relação",
    cognitivo: {
      motivo: "Delimitar o que o coeficiente de Pearson mede.",
      mede: "Correlação linear.",
      pegadinhaDesc: "Acerta o intervalo e generaliza indevidamente a interpretação do valor nulo.",
      ondeErra: "Toma 'sem correlação linear' por 'sem relação alguma'.",
      palavraCritica: "qualquer relação",
      tecnica: "Pearson mede apenas relação LINEAR. Uma relação perfeitamente quadrática pode apresentar r ≈ 0.",
      regraMental: "r ≈ 0 afasta reta, não afasta curva."
    },
    comentario: {
      resolucao: "ERRADO. O intervalo de −1 a 1 está correto, mas r próximo de zero indica ausência de relação LINEAR, e não de qualquer relação. Variáveis com associação não linear forte (parabólica, por exemplo) podem apresentar coeficiente de Pearson próximo de zero.",
      fundamento: "Coeficiente de correlação de Pearson.",
      macete: "Pearson só enxerga reta.",
      erroComum: "Concluir independência a partir de r ≈ 0.",
      comoBancaPensa: "Amplia a conclusão para além do que o coeficiente mede."
    }
  },
  {
    id: "ES-130", disciplina: "Estatística", assunto: "Correlação e regressão", subassunto: "Coeficiente de determinação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (correlação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O coeficiente de determinação (R²) na regressão linear simples indica a proporção da variabilidade da variável dependente explicada pelo modelo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "proporção da variabilidade ... explicada pelo modelo",
    cognitivo: {
      motivo: "Fixar a interpretação do R².",
      mede: "Regressão linear — R².",
      pegadinhaDesc: "Interpretação correta do coeficiente.",
      ondeErra: "Confunde R² com o coeficiente angular ou com o próprio r.",
      palavraCritica: "proporção da variabilidade",
      tecnica: "Na regressão simples, R² é o quadrado de r e varia de 0 a 1 — sempre não negativo, ao contrário de r.",
      regraMental: "R² = quanto da variação Y o modelo explica."
    },
    comentario: {
      resolucao: "CERTO. O R² expressa a fração da variabilidade total da variável dependente explicada pela regressão, variando de 0 a 1. Na regressão linear simples equivale ao quadrado do coeficiente de correlação de Pearson.",
      fundamento: "Regressão linear — coeficiente de determinação.",
      macete: "R² = r² na regressão simples.",
      erroComum: "Confundir com o coeficiente angular.",
      comoBancaPensa: "Item correto sobre a medida de ajuste mais cobrada."
    }
  },
  {
    id: "ES-131", disciplina: "Estatística", assunto: "Correlação e regressão", subassunto: "Correlação e causalidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (correlação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "A existência de correlação forte entre duas variáveis é suficiente para se concluir que uma delas causa a outra.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "suficiente para se concluir que uma delas causa a outra",
    cognitivo: {
      motivo: "Separar associação de causalidade.",
      mede: "Correlação — interpretação.",
      pegadinhaDesc: "Converte medida de associação em prova de causa.",
      ondeErra: "Toma correlação alta como demonstração causal.",
      palavraCritica: "suficiente ... causa",
      tecnica: "Correlação pode decorrer de terceira variável (confundidora), coincidência ou causalidade reversa. Causalidade exige delineamento adequado.",
      regraMental: "Correlação não implica causalidade."
    },
    comentario: {
      resolucao: "ERRADO. Correlação mede associação, não causa. A relação observada pode resultar de variável confundidora, de causalidade em sentido inverso ou de mera coincidência (correlação espúria). A inferência causal exige delineamento experimental ou controle estatístico adequado.",
      fundamento: "Correlação × causalidade.",
      macete: "Correlação não prova causa.",
      erroComum: "Inferir causalidade de coeficiente alto.",
      comoBancaPensa: "Item clássico que testa rigor interpretativo."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE57);
