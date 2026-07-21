/* =====================================================================
   CEBRASPE LAB — Ajuste de Qualidade (Lote 9 — calibração)
   1º passe de qualidade: rebalanceia a proporção Certo/Errado (o banco
   estava com 64% "Certo"; alvo ~50%), reforça as disciplinas mais
   enviesadas para "Certo" com itens "Errado" plausíveis, adiciona
   questões FÁCEIS onde faltavam e algumas com TEXTO DE APOIO para
   simular a leitura densa da prova real.
   Questões INÉDITAS no estilo CEBRASPE, fundamentadas na legislação
   vigente e jurisprudência consolidada. Não reproduzem questões oficiais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE9 = [

  /* ===== ESTATÍSTICA (reduzir viés 'C'; incluir fácil) ===== */
  {
    id: "ES-015", disciplina: "Estatística e Análise de Dados", assunto: "Medidas de posição", subassunto: "Mediana × média",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.8,
    enunciado: "Em qualquer conjunto de dados numéricos, a mediana é sempre igual à média aritmética.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sempre igual",
    cognitivo: {
      motivo: "Cobrar a diferença entre média e mediana e o efeito da assimetria.",
      mede: "Medidas de tendência central (item 2 do edital de Estatística).",
      pegadinhaDesc: "Absolutiza com 'sempre', ignorando distribuições assimétricas.",
      ondeErra: "Assume que média e mediana coincidem em todo conjunto.",
      palavraCritica: "sempre",
      tecnica: "Média e mediana só coincidem em distribuições simétricas; a média é sensível a outliers, a mediana não.",
      regraMental: "Dados assimétricos: média ≠ mediana. Outlier puxa a média, não a mediana."
    },
    comentario: {
      resolucao: "ERRADO. Média e mediana só coincidem em distribuições simétricas. Em conjuntos assimétricos (ou com valores extremos), elas diferem — a média é influenciada por outliers, ao passo que a mediana é resistente a eles.",
      fundamento: "Estatística descritiva — medidas de posição.",
      macete: "Salário com um bilionário na sala: a média dispara, a mediana quase não muda.",
      erroComum: "Achar que média e mediana são sempre iguais.",
      comoBancaPensa: "Termo absoluto ('sempre') aplicado a conceito que depende da simetria."
    }
  },
  {
    id: "ES-016", disciplina: "Estatística e Análise de Dados", assunto: "Medidas de dispersão", subassunto: "Desvio padrão",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.78,
    enunciado: "O desvio padrão pode assumir valores negativos quando a maioria das observações se encontra abaixo da média aritmética.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "valores negativos",
    cognitivo: {
      motivo: "Cobrar a natureza não negativa do desvio padrão.",
      mede: "Medidas de dispersão (item 2 do edital).",
      pegadinhaDesc: "Sugere desvio padrão negativo, o que é impossível.",
      ondeErra: "Confunde a posição dos dados (abaixo da média) com o sinal da dispersão.",
      palavraCritica: "negativos",
      tecnica: "Desvio padrão é a raiz quadrada da variância (média dos quadrados) — sempre ≥ 0.",
      regraMental: "Variância e desvio padrão nunca são negativos. Zero só quando todos os valores são iguais."
    },
    comentario: {
      resolucao: "ERRADO. O desvio padrão é a raiz quadrada da variância, calculada a partir de desvios ELEVADOS AO QUADRADO; portanto, é sempre maior ou igual a zero, independentemente de os dados estarem acima ou abaixo da média. Só é zero quando não há variação.",
      fundamento: "Estatística descritiva — variância e desvio padrão.",
      macete: "Quadrado não é negativo → dispersão não é negativa.",
      erroComum: "Associar 'dados abaixo da média' a desvio negativo.",
      comoBancaPensa: "Cria uma propriedade impossível para a medida de dispersão."
    }
  },
  {
    id: "ES-017", disciplina: "Estatística e Análise de Dados", assunto: "Amostragem", subassunto: "Amostragem aleatória simples",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "Na amostragem aleatória simples, cada elemento da população possui probabilidade distinta de ser selecionado, privilegiando-se os estratos mais representativos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "probabilidade distinta / estratos",
    cognitivo: {
      motivo: "Distinguir amostragem aleatória simples da estratificada.",
      mede: "Técnicas de amostragem (item 2 do edital).",
      pegadinhaDesc: "Atribui à aleatória simples características da estratificada e nega a equiprobabilidade.",
      ondeErra: "Confunde amostragem simples (mesma chance) com estratificada (por estratos).",
      palavraCritica: "probabilidade distinta (deveria ser igual)",
      tecnica: "Aleatória simples: todos com IGUAL probabilidade. Estratificada: divide em estratos e amostra dentro de cada.",
      regraMental: "Aleatória simples = mesma chance para todos. 'Estratos' é da estratificada."
    },
    comentario: {
      resolucao: "ERRADO. Na amostragem aleatória simples, todos os elementos da população têm IGUAL probabilidade de seleção. A menção a 'estratos mais representativos' descreve a amostragem estratificada, técnica distinta.",
      fundamento: "Estatística — técnicas de amostragem.",
      macete: "Simples = igual chance. Estratificada = por grupos (estratos).",
      erroComum: "Trocar aleatória simples por estratificada.",
      comoBancaPensa: "Mistura características de duas técnicas de amostragem."
    }
  },

  /* ===== CRIMES CIBERNÉTICOS (reduzir viés 'C') ===== */
  {
    id: "CC-009", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Invasão de dispositivo", subassunto: "Ação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "O crime de invasão de dispositivo informático, previsto no art. 154-A do Código Penal, é, em todas as hipóteses, de ação penal pública incondicionada.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "todas as hipóteses / incondicionada",
    cognitivo: {
      motivo: "Cobrar a natureza da ação penal do art. 154-A (art. 154-B do CP).",
      mede: "Crimes cibernéticos — Lei 12.737/2012.",
      pegadinhaDesc: "Absolutiza a ação penal como incondicionada, ignorando a regra da representação.",
      ondeErra: "Desconhece que, em regra, a ação é condicionada à representação.",
      palavraCritica: "em todas as hipóteses (falso)",
      tecnica: "Art. 154-B: em regra, condicionada à representação; incondicionada só quando a vítima é a Administração Pública.",
      regraMental: "Invasão de dispositivo: regra = representação. Vítima é o Estado = incondicionada."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 154-B: a ação penal é, em regra, pública CONDICIONADA à representação. Será incondicionada apenas quando o crime for cometido contra a Administração Pública (direta ou indireta) de qualquer dos Poderes/entes. Logo, não é incondicionada 'em todas as hipóteses'.",
      fundamento: "CP, art. 154-B (Lei 12.737/2012).",
      macete: "Regra: representação. Exceção (vítima é o Estado): incondicionada.",
      erroComum: "Tratar a ação como sempre incondicionada.",
      comoBancaPensa: "Termo absoluto ('todas as hipóteses') sobre a natureza da ação penal."
    }
  },
  {
    id: "CC-010", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Golpes virtuais", subassunto: "Phishing × ransomware",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.82,
    enunciado: "O phishing é um tipo de código malicioso que criptografa os arquivos do dispositivo da vítima e exige o pagamento de resgate para a sua liberação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "criptografa e exige resgate",
    cognitivo: {
      motivo: "Distinguir phishing (engenharia social) de ransomware (sequestro de dados).",
      mede: "Golpes virtuais e malwares (Segurança Digital).",
      pegadinhaDesc: "Descreve o ransomware e o rotula como phishing.",
      ondeErra: "Confunde o golpe de 'pescaria' com o malware de resgate.",
      palavraCritica: "criptografa e exige resgate = ransomware (não phishing)",
      tecnica: "Phishing: engenharia social (isca por mensagem falsa para roubar dados). Ransomware: cifra dados e cobra resgate.",
      regraMental: "Phishing 'pesca' credenciais. Ransomware 'sequestra' arquivos por resgate."
    },
    comentario: {
      resolucao: "ERRADO. A descrição (cifrar arquivos e exigir resgate) é de RANSOMWARE. O phishing é técnica de engenharia social: mensagens fraudulentas que se passam por instituições legítimas para induzir a vítima a fornecer dados/credenciais.",
      fundamento: "Segurança da informação — golpes e códigos maliciosos (CERT.br).",
      macete: "Phishing = pescaria (isca). Ransomware = resgate (sequestro de dados).",
      erroComum: "Trocar phishing por ransomware.",
      comoBancaPensa: "Definição correta de um conceito com o nome de outro."
    }
  },

  /* ===== PROCESSO PENAL (reduzir viés 'C') ===== */
  {
    id: "PP-028", disciplina: "Processo Penal", assunto: "Inquérito policial", subassunto: "Dispensabilidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "O inquérito policial é peça indispensável à propositura da ação penal, de modo que a sua ausência acarreta a nulidade do processo penal dele decorrente.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "indispensável",
    cognitivo: {
      motivo: "Cobrar a dispensabilidade do IP.",
      mede: "Inquérito policial — características.",
      pegadinhaDesc: "Afirma a indispensabilidade do IP, quando ele é dispensável.",
      ondeErra: "Confunde peça informativa (dispensável) com condição de procedibilidade.",
      palavraCritica: "indispensável (falso)",
      tecnica: "O IP é dispensável: se o titular da ação já dispõe de elementos, pode denunciar sem inquérito.",
      regraMental: "IP é dispensável. Sua ausência ou vício não anula a ação penal."
    },
    comentario: {
      resolucao: "ERRADO. O inquérito policial é DISPENSÁVEL: se o titular da ação penal já possui elementos suficientes (ex.: peças de informação), pode oferecer a denúncia/queixa independentemente de inquérito. Sua ausência ou eventuais vícios não contaminam a ação penal.",
      fundamento: "CPP; jurisprudência consolidada.",
      macete: "IP informa, não é obrigatório. Tem prova? Pode denunciar sem ele.",
      erroComum: "Tratar o IP como condição de procedibilidade.",
      comoBancaPensa: "Cria falsa indispensabilidade do inquérito."
    }
  },
  {
    id: "PP-029", disciplina: "Processo Penal", assunto: "Prisão e medidas cautelares", subassunto: "Prazo da preventiva",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "A prisão preventiva possui prazo máximo de trinta dias, prorrogável uma única vez por igual período, findo o qual o preso deve ser obrigatoriamente colocado em liberdade.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "prazo máximo de trinta dias",
    cognitivo: {
      motivo: "Cobrar a inexistência de prazo legal fixo da preventiva e a regra de revisão periódica.",
      mede: "Prisão e liberdade provisória.",
      pegadinhaDesc: "Inventa um prazo máximo fixo (30 dias) para a preventiva.",
      ondeErra: "Confunde a preventiva (sem prazo pré-fixado) com a temporária (5/30 dias).",
      palavraCritica: "prazo máximo de trinta dias (inexistente)",
      tecnica: "A preventiva não tem prazo legal pré-fixado; o juiz deve revisar a necessidade a cada 90 dias (art. 316, § único).",
      regraMental: "Preventiva: sem prazo fixo, mas revisão obrigatória a cada 90 dias. Prazo fixo é da temporária."
    },
    comentario: {
      resolucao: "ERRADO. A prisão preventiva não tem prazo máximo legal pré-fixado. O CPP, art. 316, parágrafo único (Lei 13.964/2019), impõe ao órgão emissor rever a necessidade da manutenção a cada 90 dias, sob pena de tornar a prisão ilegal — o que não equivale a soltura automática em 30 dias.",
      fundamento: "CPP, art. 316, parágrafo único.",
      macete: "Preventiva: sem prazo fixo, mas revisa a cada 90 dias. Prazo (5/30) é da temporária.",
      erroComum: "Atribuir à preventiva um prazo fixo (confusão com a temporária).",
      comoBancaPensa: "Cria prazo inexistente e mistura preventiva com temporária."
    }
  },
  {
    id: "PP-030", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Reconhecimento de pessoas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "Segundo a jurisprudência mais recente do STJ, as formalidades do reconhecimento de pessoas previstas no art. 226 do Código de Processo Penal constituem mera recomendação, podendo ser livremente dispensadas pela autoridade.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "mera recomendação",
    cognitivo: {
      motivo: "Cobrar a mudança de entendimento do STJ sobre o art. 226 do CPP.",
      mede: "Provas — reconhecimento de pessoas.",
      pegadinhaDesc: "Mantém o entendimento antigo (formalidades como mera recomendação), superado pelo STJ.",
      ondeErra: "Desconhece a virada jurisprudencial de 2020.",
      palavraCritica: "mera recomendação (superado)",
      tecnica: "STJ (HC 598.886): as formalidades do art. 226 são de observância obrigatória; o descumprimento gera invalidade do reconhecimento.",
      regraMental: "Reconhecimento hoje: seguir o art. 226 é obrigatório. Reconhecimento viciado não sustenta condenação sozinho."
    },
    comentario: {
      resolucao: "ERRADO. O STJ (a partir do HC 598.886/SC, 2020) passou a exigir a observância das formalidades do art. 226 do CPP como regra de garantia — não mais 'mera recomendação'. O reconhecimento realizado em desconformidade é inválido e não pode fundamentar, isoladamente, a condenação.",
      fundamento: "CPP, art. 226; STJ, HC 598.886/SC.",
      macete: "Reconhecimento fora do rito do art. 226 = prova frágil/inválida (novo entendimento).",
      erroComum: "Aplicar o entendimento antigo (formalidades dispensáveis).",
      comoBancaPensa: "Explora quem estudou pela jurisprudência antiga."
    }
  },

  /* ===== RACIOCÍNIO LÓGICO (reduzir viés 'C'; incluir fácil) ===== */
  {
    id: "RL-017", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Negação simples",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.8,
    enunciado: "A negação da proposição 'João é policial' é 'João é bombeiro'.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "negação",
    cognitivo: {
      motivo: "Cobrar a diferença entre negar e afirmar o contrário/oposto.",
      mede: "Proposições simples e compostas (item 11 do edital).",
      pegadinhaDesc: "Troca a negação lógica por uma afirmação de conteúdo diferente.",
      ondeErra: "Confunde negar com 'dizer outra coisa'.",
      palavraCritica: "negar = 'não é', não 'é outra coisa'",
      tecnica: "A negação de 'X é P' é 'X não é P'.",
      regraMental: "Negar 'é policial' = 'NÃO é policial'. 'É bombeiro' é outra afirmação, não a negação."
    },
    comentario: {
      resolucao: "ERRADO. A negação de 'João é policial' é 'João NÃO é policial'. Dizer que 'João é bombeiro' é uma proposição diferente, não a negação lógica da original (João poderia não ser policial nem bombeiro).",
      fundamento: "Lógica proposicional — negação.",
      macete: "Negar = colocar 'não'. Não é trocar por outra categoria.",
      erroComum: "Negar afirmando um oposto arbitrário.",
      comoBancaPensa: "Confunde negação lógica com afirmação de conteúdo contrário."
    }
  },
  {
    id: "RL-018", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Disjunção inclusiva",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "Em uma disjunção inclusiva do tipo 'p ou q', para que a proposição composta seja verdadeira, é necessário que ambas as proposições simples sejam verdadeiras.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "ambas verdadeiras",
    cognitivo: {
      motivo: "Cobrar a tabela-verdade da disjunção inclusiva.",
      mede: "Tabelas-verdade (item 11.2 do edital).",
      pegadinhaDesc: "Exige as duas verdadeiras (isso é a conjunção), não a disjunção.",
      ondeErra: "Confunde 'ou' (basta uma) com 'e' (exige as duas).",
      palavraCritica: "basta uma verdadeira",
      tecnica: "Disjunção inclusiva (∨): verdadeira se AO MENOS UMA for verdadeira; falsa só quando ambas forem falsas.",
      regraMental: "'ou' = basta uma. 'e' = exige as duas. Aqui trocaram um pelo outro."
    },
    comentario: {
      resolucao: "ERRADO. A disjunção inclusiva 'p ou q' é verdadeira quando AO MENOS UMA das proposições é verdadeira; só é falsa quando ambas são falsas. Exigir as duas verdadeiras é característica da CONJUNÇÃO ('p e q').",
      fundamento: "Lógica proposicional — disjunção inclusiva (tabela-verdade).",
      macete: "'ou' basta uma. 'e' precisa das duas.",
      erroComum: "Aplicar à disjunção a regra da conjunção.",
      comoBancaPensa: "Troca a condição de verdade de 'ou' pela de 'e'."
    }
  },
  {
    id: "RL-019", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Condicional com antecedente falso",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Na proposição condicional 'se p, então q', quando a proposição antecedente p é falsa, a condicional é necessariamente falsa, independentemente do valor lógico de q.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "antecedente falso",
    cognitivo: {
      motivo: "Cobrar a tabela-verdade da condicional.",
      mede: "Tabelas-verdade (item 11.2 do edital).",
      pegadinhaDesc: "Afirma que antecedente falso torna a condicional falsa — o oposto do correto.",
      ondeErra: "Não sabe que a condicional só é falsa quando p é V e q é F.",
      palavraCritica: "antecedente falso → condicional VERDADEIRA",
      tecnica: "A condicional p→q só é FALSA no caso V→F. Com antecedente falso, é verdadeira (vacuamente).",
      regraMental: "Condicional só é falsa em 'V→F'. Antecedente falso = condicional verdadeira."
    },
    comentario: {
      resolucao: "ERRADO. A condicional p→q é FALSA apenas quando p é verdadeira e q é falsa. Se o antecedente p é falso, a condicional é VERDADEIRA (verdade vacuosa), qualquer que seja q.",
      fundamento: "Lógica proposicional — condicional (tabela-verdade).",
      macete: "Só 'V→F' é falsa. Antecedente falso → sempre verdadeira.",
      erroComum: "Achar que antecedente falso derruba a condicional.",
      comoBancaPensa: "Inverte a única linha em que a condicional é falsa."
    }
  },

  /* ===== DIREITO PENAL (reduzir viés 'C') ===== */
  {
    id: "DP-039", disciplina: "Direito Penal", assunto: "Teoria do crime", subassunto: "Tentativa — punição",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.82,
    enunciado: "No Código Penal, a tentativa é punida, em regra, com a mesma pena cominada ao crime consumado.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "mesma pena",
    cognitivo: {
      motivo: "Cobrar a regra de punição da tentativa (art. 14, parágrafo único).",
      mede: "Teoria do crime — tentativa.",
      pegadinhaDesc: "Iguala a pena da tentativa à do consumado, ignorando a redução.",
      ondeErra: "Desconhece a causa de diminuição obrigatória da tentativa.",
      palavraCritica: "mesma pena (falso)",
      tecnica: "Tentativa: pena do consumado reduzida de 1/3 a 2/3 (teoria objetiva). Exceções: crimes de atentado/empreendimento.",
      regraMental: "Tentou mas não consumou: pena reduzida de 1/3 a 2/3. Não é a mesma do consumado."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 14, parágrafo único: salvo disposição em contrário, pune-se a tentativa com a pena do crime consumado, DIMINUÍDA de um a dois terços (teoria objetiva). Só nos crimes de atentado (empreendimento) a tentativa é punida como consumação.",
      fundamento: "CP, art. 14, II e parágrafo único.",
      macete: "Tentativa = pena do consumado − (1/3 a 2/3). Quanto mais perto de consumar, menor a redução.",
      erroComum: "Igualar a pena da tentativa à do consumado.",
      comoBancaPensa: "Omite a causa de diminuição obrigatória da tentativa."
    }
  },
  {
    id: "DP-040", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Roubo — modalidade culposa",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.78,
    enunciado: "O crime de roubo admite tanto a forma dolosa quanto a forma culposa, esta última quando a subtração ocorre por imprudência do agente.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "forma culposa",
    cognitivo: {
      motivo: "Cobrar a inexistência de roubo culposo.",
      mede: "Crimes contra o patrimônio (item 3 do edital).",
      pegadinhaDesc: "Inventa a modalidade culposa do roubo.",
      ondeErra: "Ignora que roubo exige dolo (e emprego de violência/grave ameaça).",
      palavraCritica: "forma culposa (inexistente)",
      tecnica: "Crimes patrimoniais como furto e roubo são dolosos. Não há 'subtrair por imprudência'.",
      regraMental: "Não existe roubo culposo. A regra é o dolo (art. 18, parágrafo único, do CP)."
    },
    comentario: {
      resolucao: "ERRADO. O roubo (art. 157) é crime exclusivamente doloso — não existe modalidade culposa. Aliás, o CP (art. 18, parágrafo único) só admite punição por culpa quando expressamente prevista, o que não ocorre no roubo.",
      fundamento: "CP, arts. 18, parágrafo único, e 157.",
      macete: "Roubo culposo não existe. Subtrair 'sem querer' com violência é uma contradição.",
      erroComum: "Admitir modalidade culposa em crime patrimonial.",
      comoBancaPensa: "Cria modalidade culposa inexistente."
    }
  },
  {
    id: "DP-041", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Furto de coisa comum",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.68,
    enunciado: "A subtração, pelo condômino, de coisa comum móvel, em detrimento dos demais coproprietários, é conduta atípica, por incidir sobre bem do qual o agente também é titular.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "atípica",
    cognitivo: {
      motivo: "Cobrar a tipicidade do furto de coisa comum (art. 156 do CP).",
      mede: "Crimes contra o patrimônio.",
      pegadinhaDesc: "Afirma a atipicidade, quando há tipo penal específico.",
      ondeErra: "Assume que a copropriedade afasta o crime.",
      palavraCritica: "atípica (falso)",
      tecnica: "Art. 156: furtar coisa comum é crime, de ação penal condicionada à representação. Exceção: coisa fungível no valor da própria quota (§ 2º).",
      regraMental: "Furtar a parte dos outros condôminos é crime (art. 156), não atípico."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 156: subtrair o condômino, coerdeiro ou sócio, para si ou para outrem, a quem legitimamente a detém, a coisa comum, é crime (furto de coisa comum), de ação penal condicionada à representação. Só não é punível a subtração de coisa comum fungível cujo valor não exceda a quota do agente (§ 2º).",
      fundamento: "CP, art. 156, §§ 1º e 2º.",
      macete: "Pegar a parte dos outros condôminos = crime (art. 156). Não é atípico.",
      erroComum: "Achar que a copropriedade torna a conduta atípica.",
      comoBancaPensa: "Cria falsa atipicidade com base na titularidade parcial."
    }
  },

  /* ===== LEGISLAÇÃO PENAL ESPECIAL (reduzir viés 'C') ===== */
  {
    id: "LE-036", disciplina: "Legislação Especial", assunto: "Lei de Drogas", subassunto: "Usuário — pena",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A Lei nº 11.343/2006 comina pena privativa de liberdade de seis meses a dois anos para quem adquire ou traz consigo droga para consumo pessoal.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "pena privativa de liberdade",
    cognitivo: {
      motivo: "Cobrar a ausência de pena privativa de liberdade para o usuário (art. 28).",
      mede: "Lei de Drogas (Dias 20-21 do plano).",
      pegadinhaDesc: "Inventa pena de prisão para o porte de consumo.",
      ondeErra: "Ignora a despenalização do art. 28.",
      palavraCritica: "pena privativa de liberdade (inexistente)",
      tecnica: "Art. 28: só advertência, prestação de serviços à comunidade e medida educativa. Sem prisão.",
      regraMental: "Usuário (art. 28): nunca prisão. Só A-P-M (advertência, PSC, medida educativa)."
    },
    comentario: {
      resolucao: "ERRADO. Lei 11.343/2006, art. 28: ao usuário aplicam-se apenas advertência, prestação de serviços à comunidade e medida educativa — não há pena privativa de liberdade. O STF (Tema 506) fixou parâmetro de 40g de maconha/6 plantas para distinguir usuário de traficante.",
      fundamento: "Lei 11.343/2006, art. 28; STF, RE 635.659 (Tema 506).",
      macete: "Usuário: A-P-M, sem prisão. Prisão é do tráfico (art. 33).",
      erroComum: "Atribuir pena de prisão ao usuário.",
      comoBancaPensa: "Cria pena privativa inexistente para o porte de consumo."
    }
  },
  {
    id: "LE-037", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Ação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "O crime de tortura, previsto na Lei nº 9.455/1997, procede-se mediante ação penal pública condicionada à representação da vítima.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "condicionada à representação",
    cognitivo: {
      motivo: "Cobrar a natureza da ação penal na tortura.",
      mede: "Legislação penal especial — tortura.",
      pegadinhaDesc: "Exige representação onde a ação é incondicionada.",
      ondeErra: "Trata crime hediondo-equiparado como dependente da vítima.",
      palavraCritica: "condicionada (deveria ser incondicionada)",
      tecnica: "Tortura: ação penal pública incondicionada (crime equiparado a hediondo, de gravidade elevada).",
      regraMental: "Tortura = incondicionada. O Estado persegue de ofício, independentemente da vítima."
    },
    comentario: {
      resolucao: "ERRADO. A tortura (Lei 9.455/1997) é crime de ação penal pública INCONDICIONADA. Sendo equiparado a hediondo, é inafiançável e insuscetível de graça, anistia e indulto; a persecução independe de representação da vítima.",
      fundamento: "Lei 9.455/1997; CF, art. 5º, XLIII.",
      macete: "Tortura: gravidade alta = incondicionada. Não depende da vítima.",
      erroComum: "Exigir representação na tortura.",
      comoBancaPensa: "Cria falsa condição de procedibilidade."
    }
  },
  {
    id: "LE-038", disciplina: "Legislação Especial", assunto: "Crimes de racismo", subassunto: "Fiança e prescrição",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "Nos termos da Constituição Federal, a prática do racismo constitui crime afiançável e sujeito à prescrição, punido com pena de detenção.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "afiançável e sujeito à prescrição",
    cognitivo: {
      motivo: "Cobrar as características constitucionais do racismo (art. 5º, XLII).",
      mede: "Legislação penal especial — racismo (Dia 28 do plano).",
      pegadinhaDesc: "Inverte os atributos: racismo é inafiançável e imprescritível.",
      ondeErra: "Troca inafiançável/imprescritível por afiançável/prescritível.",
      palavraCritica: "afiançável e prescritível (falso)",
      tecnica: "CF, art. 5º, XLII: racismo é crime INAFIANÇÁVEL e IMPRESCRITÍVEL, sujeito à pena de reclusão.",
      regraMental: "Racismo: inafiançável + imprescritível + reclusão. É a exceção da imprescritibilidade (com a ação de grupos armados)."
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, XLII: a prática do racismo constitui crime INAFIANÇÁVEL e IMPRESCRITÍVEL, sujeito à pena de RECLUSÃO. A assertiva inverteu todos os atributos.",
      fundamento: "CF, art. 5º, XLII; Lei 7.716/1989.",
      macete: "Racismo: inafiançável, imprescritível, reclusão. Tudo o contrário do enunciado.",
      erroComum: "Trocar os atributos constitucionais do racismo.",
      comoBancaPensa: "Inverte simultaneamente fiança, prescrição e tipo de pena."
    }
  },

  /* ===== DIREITOS HUMANOS (reduzir viés 'C') ===== */
  {
    id: "DH-016", disciplina: "Direitos Humanos", assunto: "Teoria geral", subassunto: "Relatividade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "Por serem fundamentais à dignidade humana, os direitos humanos possuem caráter absoluto, não admitindo qualquer limitação, ainda que diante da colisão com outros direitos humanos.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "caráter absoluto",
    cognitivo: {
      motivo: "Cobrar a relatividade (limitabilidade) dos direitos humanos.",
      mede: "Características dos direitos humanos (item 1 do edital).",
      pegadinhaDesc: "Absolutiza os DH, ignorando que são relativos.",
      ondeErra: "Confunde 'fundamental' com 'ilimitado'.",
      palavraCritica: "caráter absoluto",
      tecnica: "DH são relativos: colisões resolvem-se por ponderação/proporcionalidade.",
      regraMental: "Não há direito humano absoluto (salvo a vedação à tortura, tida como sem exceção)."
    },
    comentario: {
      resolucao: "ERRADO. Os direitos humanos são RELATIVOS (limitáveis): em caso de colisão, resolve-se por ponderação e proporcionalidade. A regra é a relatividade — a doutrina aponta como quase única exceção a vedação absoluta à tortura e ao tratamento desumano.",
      fundamento: "Teoria geral dos direitos humanos; CF, art. 5º, III.",
      macete: "DH = relativos. 'Absoluto' quase nunca é resposta certa (exceção: vedação à tortura).",
      erroComum: "Tratar os DH como ilimitados.",
      comoBancaPensa: "Termo absoluto aplicado a direitos que são relativos."
    }
  },
  {
    id: "DH-017", disciplina: "Direitos Humanos", assunto: "Afirmação histórica", subassunto: "Natureza da DUDH",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "A Declaração Universal dos Direitos Humanos, de 1948, é formalmente um tratado internacional e, por isso, foi incorporada ao ordenamento brasileiro com status de emenda constitucional.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "tratado / emenda constitucional",
    cognitivo: {
      motivo: "Distinguir a DUDH (declaração/resolução) dos tratados de DH.",
      mede: "A Constituição e os tratados de DH (item 6 do edital).",
      pegadinhaDesc: "Atribui à DUDH natureza de tratado com status de emenda.",
      ondeErra: "Confunde declaração (soft law) com tratado formal.",
      palavraCritica: "tratado / status de emenda (falso)",
      tecnica: "A DUDH é resolução da Assembleia Geral da ONU (não tratado). Status de emenda é o dos tratados de DH aprovados pelo rito do art. 5º, § 3º.",
      regraMental: "DUDH = declaração (força moral/costumeira). Status de emenda é de tratado com rito do § 3º (ex.: Convenção de NY sobre PcD)."
    },
    comentario: {
      resolucao: "ERRADO. A DUDH (1948) é uma RESOLUÇÃO/DECLARAÇÃO da Assembleia Geral da ONU, não um tratado em sentido formal — embora tenha enorme força moral e seja reconhecida como direito costumeiro internacional. O status de emenda constitucional é reservado aos tratados de DH aprovados pelo rito do art. 5º, § 3º, da CF.",
      fundamento: "DUDH (1948); CF, art. 5º, § 3º; STF, RE 466.343.",
      macete: "DUDH = declaração (soft law). Emenda constitucional = tratado com rito do § 3º.",
      erroComum: "Tratar a DUDH como tratado com força constitucional.",
      comoBancaPensa: "Confunde a natureza jurídica da DUDH com a dos tratados."
    }
  },

  /* ===== LÍNGUA PORTUGUESA (com texto de apoio) ===== */
  {
    id: "PT-013", disciplina: "Língua Portuguesa", assunto: "Compreensão e reescritura", subassunto: "Substituição que altera o sentido",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.85,
    textoApoio: "A investigação criminal moderna exige que o agente, além de conhecer a legislação, domine técnicas de análise de dados, uma vez que grande parte das provas hoje é digital. Sem esse preparo, dificilmente se chega à autoria dos delitos cibernéticos.",
    enunciado: "No trecho, a substituição da expressão 'uma vez que' por 'ainda que' preservaria a correção gramatical e o sentido original do período.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "uma vez que / ainda que",
    cognitivo: {
      motivo: "Distinguir conector causal (uma vez que) de concessivo (ainda que).",
      mede: "Coesão e emprego de conectores (item 4.1 do edital).",
      pegadinhaDesc: "Substitui uma conjunção causal por uma concessiva, invertendo a relação lógica.",
      ondeErra: "Julga só a 'fluência' e ignora a mudança de sentido.",
      palavraCritica: "causa (uma vez que) × concessão (ainda que)",
      tecnica: "'Uma vez que' = porque (causa). 'Ainda que' = embora (concessão). Trocar altera a lógica.",
      regraMental: "Causal ↔ concessivo NÃO se trocam: um explica a causa, o outro contraria a expectativa."
    },
    comentario: {
      resolucao: "ERRADO. 'Uma vez que' introduz relação de CAUSA (equivale a 'porque'); 'ainda que' expressa CONCESSÃO (equivale a 'embora'). A substituição inverteria a relação lógica entre as orações, alterando o sentido do período.",
      fundamento: "Gramática normativa — conjunções causais e concessivas.",
      macete: "Uma vez que = porque. Ainda que = embora. São valores opostos.",
      erroComum: "Trocar conectivos de valores lógicos diferentes por soarem parecidos.",
      comoBancaPensa: "Substituição de conectivo que altera a relação de sentido — formato nº 1 de Português."
    }
  },
  {
    id: "PT-014", disciplina: "Língua Portuguesa", assunto: "Compreensão e reescritura", subassunto: "Referência pronominal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    textoApoio: "A autoridade policial recebeu o relatório e o encaminhou ao Ministério Público, que ofereceu a denúncia.",
    enunciado: "No período, o pronome 'o', em 'encaminhou', refere-se ao termo 'relatório'.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "referência do pronome 'o'",
    cognitivo: {
      motivo: "Cobrar a referência do pronome oblíquo átono.",
      mede: "Coesão referencial — substituição (item 4.1 do edital).",
      pegadinhaDesc: "A banca costuma sugerir que 'o' remete a 'autoridade' ou a 'Ministério Público'.",
      ondeErra: "Não identifica o antecedente correto (objeto direto retomado).",
      palavraCritica: "'o' = relatório",
      tecnica: "O pronome oblíquo 'o' retoma o objeto direto mais próximo compatível: 'o relatório'.",
      regraMental: "Pronome 'o/a' retoma o objeto (a coisa recebida): aqui, o relatório."
    },
    comentario: {
      resolucao: "CERTO. O pronome oblíquo átono 'o', em 'encaminhou-o', retoma 'o relatório' (objeto direto), estabelecendo a coesão: a autoridade recebeu o relatório e o encaminhou ao MP.",
      fundamento: "Gramática normativa — pronomes oblíquos e coesão referencial.",
      macete: "'o/a' retoma coisa (objeto). 'lhe' retoma pessoa (objeto indireto).",
      erroComum: "Atribuir o pronome ao sujeito em vez do objeto.",
      comoBancaPensa: "Referência pronominal é cobrança recorrente de coesão."
    }
  },
  {
    id: "PT-015", disciplina: "Língua Portuguesa", assunto: "Concordância", subassunto: "Concordância verbal — sujeito composto",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    textoApoio: "O delegado e o escrivão analisou as provas do inquérito antes de encaminhá-lo ao juiz.",
    enunciado: "No período, o emprego do verbo 'analisou' no singular está de acordo com a norma-padrão de concordância verbal.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "analisou (singular)",
    cognitivo: {
      motivo: "Cobrar a concordância com sujeito composto anteposto ao verbo.",
      mede: "Concordância verbal (item 5.5 do edital).",
      pegadinhaDesc: "Aceita o singular com sujeito composto ('o delegado e o escrivão').",
      ondeErra: "Não flexiona o verbo no plural diante de sujeito composto.",
      palavraCritica: "sujeito composto → verbo no plural",
      tecnica: "Sujeito composto anteposto ao verbo → verbo obrigatoriamente no plural: 'analisaram'.",
      regraMental: "Dois núcleos ('delegado e escrivão') antes do verbo = plural. 'Analisou' está errado."
    },
    comentario: {
      resolucao: "ERRADO. O sujeito é composto ('O delegado e o escrivão') e antecede o verbo; logo, a concordância exige o plural: 'analisaram'. O emprego no singular ('analisou') viola a norma-padrão.",
      fundamento: "Gramática normativa — concordância verbal (sujeito composto).",
      macete: "Sujeito composto antes do verbo = plural. 'A e B analisaram'.",
      erroComum: "Concordar o verbo com apenas um dos núcleos.",
      comoBancaPensa: "Sujeito composto anteposto com verbo no singular é isca clássica."
    }
  },

  /* ===== TI (incluir fácil; reduzir viés) ===== */
  {
    id: "TI-013", disciplina: "TI e Segurança Cibernética", assunto: "Organização de arquivos", subassunto: "Extensão de arquivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.75,
    enunciado: "Em ambiente Windows, a extensão de um arquivo (como .docx, .pdf ou .exe) indica, em regra, o seu tipo ou formato, orientando o sistema quanto ao programa associado à sua abertura.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "extensão indica o tipo",
    cognitivo: {
      motivo: "Cobrar a função da extensão de arquivos.",
      mede: "Organização e gerenciamento de arquivos (item 4 do edital de TI).",
      pegadinhaDesc: "A banca costuma dizer que a extensão define o tamanho ou a segurança do arquivo.",
      ondeErra: "Confunde extensão (tipo/formato) com outros atributos.",
      palavraCritica: "extensão = tipo/formato",
      tecnica: "A extensão sinaliza o formato e o programa associado; renomeá-la não converte o conteúdo do arquivo.",
      regraMental: "Extensão = 'sobrenome' do arquivo: diz o tipo e qual programa abre."
    },
    comentario: {
      resolucao: "CERTO. A extensão indica, em regra, o tipo/formato do arquivo e orienta o sistema operacional quanto ao programa associado à sua abertura. Observação: alterar apenas a extensão não converte o conteúdo do arquivo.",
      fundamento: "Noções de sistema operacional e gerenciamento de arquivos.",
      macete: "Extensão = tipo do arquivo. Trocar o '.docx' por '.pdf' não vira PDF de verdade.",
      erroComum: "Achar que a extensão define tamanho ou segurança.",
      comoBancaPensa: "Conceito básico de arquivos, cobrado de forma direta."
    }
  },
  {
    id: "TI-014", disciplina: "TI e Segurança Cibernética", assunto: "Sistema operacional", subassunto: "Memória RAM",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.75,
    enunciado: "A memória RAM é um tipo de memória não volátil, de modo que os dados nela armazenados são preservados mesmo após o desligamento do computador.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "não volátil",
    cognitivo: {
      motivo: "Cobrar a volatilidade da memória RAM.",
      mede: "Noções de hardware/sistema operacional (item 1 do edital de TI).",
      pegadinhaDesc: "Classifica a RAM como não volátil, quando ela é volátil.",
      ondeErra: "Confunde RAM (volátil) com memória secundária (não volátil, como SSD/HD).",
      palavraCritica: "não volátil (deveria ser volátil)",
      tecnica: "RAM: volátil (perde o conteúdo ao desligar). Armazenamento permanente é a memória secundária (HD/SSD/ROM).",
      regraMental: "RAM = trabalho temporário (volátil). HD/SSD = guarda permanente (não volátil)."
    },
    comentario: {
      resolucao: "ERRADO. A memória RAM é VOLÁTIL: seus dados se perdem quando o computador é desligado. A preservação dos dados após o desligamento cabe às memórias não voláteis, como HD, SSD e ROM.",
      fundamento: "Fundamentos de computação — hierarquia de memórias.",
      macete: "RAM = volátil (memória de trabalho). Desligou, apagou.",
      erroComum: "Tratar a RAM como memória permanente.",
      comoBancaPensa: "Troca a volatilidade da RAM (conceito básico)."
    }
  },

  /* ===== CONTABILIDADE (reduzir viés) ===== */
  {
    id: "CT-012", disciplina: "Contabilidade e Análise Financeira", assunto: "Método das partidas dobradas", subassunto: "Débito e crédito",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "No método das partidas dobradas, adotado pela contabilidade, para cada lançamento a débito não há necessariamente um lançamento a crédito de igual valor.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "não há necessariamente",
    cognitivo: {
      motivo: "Cobrar o princípio das partidas dobradas.",
      mede: "Mecanismo de débito e crédito (item 4 do edital de Contabilidade).",
      pegadinhaDesc: "Nega a igualdade obrigatória entre débitos e créditos.",
      ondeErra: "Desconhece o princípio fundamental da escrituração.",
      palavraCritica: "não há necessariamente (falso)",
      tecnica: "Partidas dobradas: para cada débito há um crédito de igual valor. O total de débitos sempre iguala o total de créditos.",
      regraMental: "Não há débito sem crédito de igual valor. Débitos = Créditos (sempre)."
    },
    comentario: {
      resolucao: "ERRADO. No método das partidas dobradas (Luca Pacioli), para cada débito há sempre um crédito de igual valor — 'não há débito sem crédito correspondente'. Por isso, no balancete, a soma dos débitos é igual à soma dos créditos.",
      fundamento: "Contabilidade geral — método das partidas dobradas.",
      macete: "Débito = Crédito, sempre. Se não bate, há erro de escrituração.",
      erroComum: "Negar a igualdade obrigatória débito/crédito.",
      comoBancaPensa: "Nega o princípio-base da escrituração contábil."
    }
  },

  /* ===== DIREITO ADMINISTRATIVO (reduzir viés) ===== */
  {
    id: "DA-017", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Controle judicial da discricionariedade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "Os atos administrativos discricionários, por envolverem juízo de conveniência e oportunidade, não se sujeitam a qualquer espécie de controle pelo Poder Judiciário.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "não se sujeitam a qualquer controle",
    cognitivo: {
      motivo: "Cobrar os limites do controle judicial dos atos discricionários.",
      mede: "Atos administrativos + controle da Administração (itens 2 e 6 do edital).",
      pegadinhaDesc: "Absolutiza a imunidade dos atos discricionários ao controle judicial.",
      ondeErra: "Confunde a impossibilidade de controle do mérito com imunidade total.",
      palavraCritica: "qualquer controle (falso)",
      tecnica: "O Judiciário controla a LEGALIDADE do ato discricionário (competência, forma, finalidade) e a razoabilidade/proporcionalidade; não substitui o mérito.",
      regraMental: "Discricionário: mérito não se controla, mas legalidade e proporcionalidade, sim."
    },
    comentario: {
      resolucao: "ERRADO. Os atos discricionários sujeitam-se ao controle judicial de LEGALIDADE (competência, forma, finalidade, motivo) e dos limites da razoabilidade/proporcionalidade. O que o Judiciário não pode é substituir o mérito administrativo (conveniência e oportunidade). Logo, não há imunidade total ao controle.",
      fundamento: "Doutrina administrativista; CF, art. 5º, XXXV; jurisprudência do STF/STJ.",
      macete: "Discricionário: controla-se a legalidade e a proporcionalidade; o mérito, não.",
      erroComum: "Achar que o ato discricionário é imune a todo controle.",
      comoBancaPensa: "Termo absoluto ('qualquer controle') sobre a discricionariedade."
    }
  },
  {
    id: "DA-018", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Revogação × anulação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "O Poder Judiciário, no exercício de sua função jurisdicional, pode revogar atos administrativos de outros Poderes por razões de conveniência e oportunidade.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "revogar / conveniência e oportunidade",
    cognitivo: {
      motivo: "Cobrar a impossibilidade de o Judiciário revogar atos de outros Poderes.",
      mede: "Atos administrativos — revogação × anulação (Súmula 473/STF).",
      pegadinhaDesc: "Atribui ao Judiciário o poder de revogar por mérito, que é da Administração.",
      ondeErra: "Confunde anulação (por ilegalidade, cabe ao Judiciário) com revogação (por mérito, só a Administração).",
      palavraCritica: "revogar por conveniência (falso p/ o Judiciário)",
      tecnica: "Judiciário ANULA atos ilegais (de qualquer Poder). REVOGAÇÃO (mérito) só a própria Administração que editou o ato.",
      regraMental: "Judiciário anula (ilegalidade). Só a Administração revoga (conveniência/oportunidade)."
    },
    comentario: {
      resolucao: "ERRADO. O Judiciário, na função jurisdicional, pode ANULAR atos administrativos ilegais (de qualquer Poder), mas não pode REVOGÁ-LOS por conveniência e oportunidade — a revogação é competência da própria Administração que editou o ato (Súmula 473/STF).",
      fundamento: "Súmula 473/STF; separação de Poderes.",
      macete: "Judiciário anula (ilegalidade). Revogação (mérito) é só da Administração.",
      erroComum: "Atribuir ao Judiciário a revogação por mérito.",
      comoBancaPensa: "Troca anulação (Judiciário) por revogação (Administração)."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE9);
