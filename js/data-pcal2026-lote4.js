/* =====================================================================
   CEBRASPE LAB — Expansão Edital PC-AL 2026 (Lote 4 — robustez)
   Grande lote de questões INÉDITAS no estilo CEBRASPE, modeladas nos
   temas e padrões recorrentes da banca em provas policiais, filtradas
   ao programa de Agente/Escrivão (itens 20.2.3 e 20.2.4 do edital).
   Prioriza disciplinas básicas (todos os cargos) e o diferencial
   cibernético/dados deste certame. Fundamentos em legislação vigente
   e jurisprudência consolidada. Não reproduzem questões oficiais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE4 = [

  /* ==================== LÍNGUA PORTUGUESA ==================== */
  {
    id: "PT-005", disciplina: "Língua Portuguesa", assunto: "Concordância", subassunto: "Verbo 'fazer' impessoal (tempo)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "No trecho 'Fazem cinco anos que o inquérito foi instaurado', o emprego do verbo no plural atende à norma-padrão, uma vez que concorda com o termo 'cinco anos'.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "Fazem cinco anos",
    cognitivo: {
      motivo: "Cobrar a impessoalidade do verbo 'fazer' indicando tempo decorrido.",
      mede: "Concordância verbal (item 5.5 do edital).",
      pegadinhaDesc: "Sugere concordância com 'cinco anos', quando 'fazer' de tempo é impessoal e fica no singular.",
      ondeErra: "Trata 'cinco anos' como sujeito, mas não há sujeito — é oração sem sujeito.",
      palavraCritica: "Fazem (deveria ser 'Faz')",
      tecnica: "'Fazer', 'haver' e 'ir' indicando tempo são impessoais → sempre no singular.",
      regraMental: "Tempo decorrido: FAZ / HÁ (nunca 'fazem'/'hão'). O mesmo vale para 'houve' × 'houveram' vítimas."
    },
    comentario: {
      resolucao: "ERRADO. O verbo 'fazer' indicando tempo decorrido é impessoal (sem sujeito) e permanece invariável na 3ª pessoa do singular: 'Faz cinco anos'. 'Cinco anos' é objeto, não sujeito. A verbalização no plural viola a norma-padrão.",
      fundamento: "Gramática normativa — verbos impessoais (fazer/haver de tempo).",
      macete: "Troque 'fazer' por 'haver': 'Há cinco anos' (nunca 'Hão cinco anos'). Se cabe 'há', fica singular.",
      erroComum: "Flexionar 'fazer'/'haver' de tempo como se 'anos' fosse sujeito.",
      comoBancaPensa: "Verbo impessoal com expressão de tempo no plural é isca clássica de concordância."
    }
  },
  {
    id: "PT-006", disciplina: "Língua Portuguesa", assunto: "Crase", subassunto: "Locuções e palavras femininas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "Na frase 'O suspeito foi mantido a distância pelos agentes', a ausência do acento grave em 'a distância' respeita a norma-padrão, pois a palavra 'distância' não vem determinada por adjunto que a especifique.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "a distância (sem especificação)",
    cognitivo: {
      motivo: "Cobrar a regra da crase facultativa/vedada em 'a distância' × 'à distância de'.",
      mede: "Emprego do sinal indicativo de crase (item 5.7).",
      pegadinhaDesc: "A banca costuma exigir crase em 'a distância' sem especificação (onde não cabe).",
      ondeErra: "Aplica crase por 'distância' ser feminino, ignorando que falta a preposição/artigo determinante.",
      palavraCritica: "a distância × à distância de",
      tecnica: "'A distância' genérica: sem crase. 'À distância de 50 metros' (especificada): com crase.",
      regraMental: "Sem especificar, sem crase. Se disser de QUANTO é a distância, aí acentua."
    },
    comentario: {
      resolucao: "CERTO. Segundo a norma-padrão, não se emprega crase em 'a distância' quando a expressão não está determinada por adjunto especificador. A crase seria obrigatória em 'à distância de cinquenta metros'. Portanto, a ausência de acento está correta.",
      fundamento: "Gramática normativa — crase em locuções adverbiais.",
      macete: "'Ficar a distância' = sem crase; 'ficar à distância de X' = com crase.",
      erroComum: "Acentuar por reflexo, só porque 'distância' é feminino.",
      comoBancaPensa: "Crase em expressões 'a distância', 'a olho nu', 'a bordo' é campo minado da banca."
    }
  },
  {
    id: "PT-007", disciplina: "Língua Portuguesa", assunto: "Colocação pronominal", subassunto: "Próclise obrigatória",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "Em 'Nunca se viu tamanha celeridade nas investigações', a próclise (colocação do pronome antes do verbo) é obrigatória em razão da presença do advérbio de negação 'nunca'.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "nunca (palavra atrativa)",
    cognitivo: {
      motivo: "Cobrar as palavras atrativas que exigem próclise.",
      mede: "Colocação dos pronomes átonos (item 5.8).",
      pegadinhaDesc: "A banca costuma propor ênclise ('viu-se') após palavra atrativa, o que é erro.",
      ondeErra: "Ignora que advérbios de negação atraem o pronome para antes do verbo.",
      palavraCritica: "nunca / se viu",
      tecnica: "Palavras atrativas (não, nunca, jamais, que, quem, advérbios) → próclise obrigatória.",
      regraMental: "Negação, advérbio, pronome relativo/indefinido, conjunção subordinativa: puxam o pronome para ANTES."
    },
    comentario: {
      resolucao: "CERTO. Advérbios de negação como 'nunca' são palavras atrativas que impõem a próclise: 'Nunca se viu'. A ênclise ('viu-se') seria incorreta nesse contexto.",
      fundamento: "Gramática normativa — colocação pronominal (fatores de próclise).",
      macete: "Tem palavra 'negativa/atrativa' antes do verbo? Pronome cola ANTES (próclise).",
      erroComum: "Usar ênclise após negação, advérbio ou pronome relativo.",
      comoBancaPensa: "Colocação pronominal é cobrada por meio de reescrita — atenção ao gatilho atrativo."
    }
  },
  {
    id: "PT-008", disciplina: "Língua Portuguesa", assunto: "Regência verbal", subassunto: "Verbo 'assistir'",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "Em 'Os peritos assistiram o laudo com atenção', o verbo 'assistir', no sentido de presenciar, está corretamente empregado como transitivo direto, dispensando a preposição 'a'.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "assistiram o laudo",
    cognitivo: {
      motivo: "Cobrar a dupla regência do verbo 'assistir' conforme o sentido.",
      mede: "Regência verbal (item 5.6).",
      pegadinhaDesc: "Afirma que 'assistir' (presenciar) é transitivo direto — quando é transitivo indireto (assistir A algo).",
      ondeErra: "Confunde 'assistir' (ver/presenciar → indireto) com 'assistir' (ajudar/prestar assistência → direto).",
      palavraCritica: "assistir a (presenciar) × assistir (ajudar)",
      tecnica: "Presenciar = assistir A (indireto). Prestar socorro = assistir (direto). O sentido define a regência.",
      regraMental: "Assisti AO filme (vi). O médico assistiu O paciente (ajudou)."
    },
    comentario: {
      resolucao: "ERRADO. No sentido de presenciar/ver, 'assistir' é transitivo indireto e exige a preposição 'a': 'assistiram AO laudo'. Como transitivo direto, 'assistir' significa prestar assistência ('assistir o doente'). A frase inverteu a regência.",
      fundamento: "Gramática normativa — regência do verbo 'assistir'.",
      macete: "Ver = assistir A. Ajudar = assistir (sem preposição). Cabe também 'assistir a' no sentido de caber direito (assiste-lhe o direito).",
      erroComum: "Usar 'assistir' (presenciar) sem a preposição 'a'.",
      comoBancaPensa: "Verbos de dupla regência (assistir, visar, aspirar, proceder) são pratos cheios para C/E."
    }
  },
  {
    id: "PT-009", disciplina: "Língua Portuguesa", assunto: "Compreensão e reescritura", subassunto: "Voz passiva",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.8,
    textoApoio: "A autoridade policial instaurou o inquérito após receber a notícia do crime.",
    enunciado: "A transposição do período para a voz passiva mantém a correção e o sentido na forma: 'O inquérito foi instaurado pela autoridade policial após receber a notícia do crime'.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "foi instaurado pela autoridade",
    cognitivo: {
      motivo: "Cobrar a conversão ativa→passiva analítica, tema recorrente de reescritura.",
      mede: "Reorganização de orações / voz verbal (itens 4.2 e 6.3).",
      pegadinhaDesc: "A banca costuma trocar o agente da passiva ou o tempo verbal na conversão.",
      ondeErra: "Erra o auxiliar ('foi') ou inverte quem pratica a ação.",
      palavraCritica: "objeto vira sujeito; sujeito vira agente da passiva",
      tecnica: "Ativa: sujeito + VTD + objeto. Passiva: objeto→sujeito + ser + particípio + 'por' + agente.",
      regraMental: "'A polícia instaurou o IP' → 'O IP foi instaurado pela polícia'. Mantém o tempo (pretérito)."
    },
    comentario: {
      resolucao: "CERTO. Na voz passiva analítica, o objeto direto ('o inquérito') torna-se sujeito, o verbo assume a forma 'ser + particípio' no mesmo tempo ('foi instaurado') e o sujeito original vira agente da passiva ('pela autoridade policial'). O sentido é preservado.",
      fundamento: "Gramática normativa — vozes verbais.",
      macete: "Quem sofre a ação vira sujeito; quem pratica vira 'agente da passiva' (introduzido por 'por').",
      erroComum: "Mudar o tempo verbal ou trocar o agente na conversão.",
      comoBancaPensa: "Conversão de voz é reescritura clássica: julgue tempo verbal + agente."
    }
  },

  /* ==================== RACIOCÍNIO LÓGICO-MATEMÁTICO ==================== */
  {
    id: "RL-007", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Contrapositiva",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "A proposição 'Se há indícios de autoria, então o inquérito é instaurado' é logicamente equivalente a 'Se o inquérito não é instaurado, então não há indícios de autoria'.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "contrapositiva",
    cognitivo: {
      motivo: "Cobrar a equivalência entre condicional e sua contrapositiva.",
      mede: "Equivalências lógicas (item 11.3).",
      pegadinhaDesc: "A banca costuma oferecer a recíproca (Q→P) ou a inversa (~P→~Q), que NÃO equivalem.",
      ondeErra: "Confunde contrapositiva (equivalente) com recíproca/inversa (não equivalentes).",
      palavraCritica: "~Q → ~P",
      tecnica: "P→Q equivale a ~Q→~P (contrapositiva): inverte e nega os dois termos.",
      regraMental: "Contrapositiva = 'nega os dois e troca a ordem'. Recíproca (só troca) NÃO equivale."
    },
    comentario: {
      resolucao: "CERTO. A condicional P→Q é logicamente equivalente à sua contrapositiva ~Q→~P. Aqui: P='há indícios', Q='inquérito instaurado'. A contrapositiva 'se não instaurado, então não há indícios' preserva o valor lógico.",
      fundamento: "Lógica proposicional — equivalências da condicional.",
      macete: "P→Q também equivale a ~P ∨ Q. A recíproca Q→P e a inversa ~P→~Q não equivalem à original.",
      erroComum: "Aceitar a recíproca como equivalente.",
      comoBancaPensa: "Condicional × contrapositiva × recíproca é a tríade favorita de equivalência."
    }
  },
  {
    id: "RL-008", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Negação da condicional",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.88,
    enunciado: "A negação da proposição 'Se o agente cumpriu o mandado, então o suspeito foi preso' é 'O agente cumpriu o mandado e o suspeito não foi preso'.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "negação de P→Q",
    cognitivo: {
      motivo: "Cobrar a negação correta da condicional (P ∧ ~Q).",
      mede: "Equivalências e negações (item 11.3).",
      pegadinhaDesc: "A banca costuma negar como '~P→~Q' ou 'se cumpriu, então não foi preso' (mantendo a condicional).",
      ondeErra: "Nega mantendo a estrutura 'se...então', quando a negação vira uma conjunção.",
      palavraCritica: "P e não Q",
      tecnica: "~(P→Q) = P ∧ ~Q: afirma o antecedente e nega o consequente.",
      regraMental: "Negar 'se P então Q' = 'P e não Q'. Some o 'se...então', vira 'e'."
    },
    comentario: {
      resolucao: "CERTO. A negação de uma condicional P→Q é P ∧ ~Q (o antecedente ocorre e o consequente não). Logo: 'O agente cumpriu o mandado E o suspeito NÃO foi preso'. A negação não é outra condicional.",
      fundamento: "Lógica proposicional — negação da condicional.",
      macete: "Para negar 'se chove, levo guarda-chuva': 'choveu E não levei'.",
      erroComum: "Negar mantendo 'se...então' ou negando os dois termos.",
      comoBancaPensa: "Negação de condicional é das mais cobradas — a resposta nunca é outra condicional."
    }
  },
  {
    id: "RL-009", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica de primeira ordem", subassunto: "Negação de quantificador",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "A negação da proposição 'Todos os policiais são armados' é 'Nenhum policial é armado'.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "Nenhum",
    cognitivo: {
      motivo: "Cobrar a negação correta do quantificador universal.",
      mede: "Lógica de primeira ordem / diagramas (itens 11.5 e 12).",
      pegadinhaDesc: "Oferece o contrário ('nenhum') no lugar da negação lógica ('pelo menos um não').",
      ondeErra: "Confunde 'negar' com 'afirmar o oposto extremo'.",
      palavraCritica: "Nenhum (deveria ser 'Pelo menos um não')",
      tecnica: "Negar 'todo A é B' = 'existe A que não é B' (algum A não é B).",
      regraMental: "Negação de 'todo' é 'algum não'; negação de 'algum' é 'nenhum'. Não é o oposto extremo."
    },
    comentario: {
      resolucao: "ERRADO. A negação de 'Todos os policiais são armados' é 'Pelo menos um policial não é armado' (existe policial não armado). 'Nenhum policial é armado' é a contrária, não a negação (basta um contraexemplo para negar o 'todos').",
      fundamento: "Lógica quantificacional — negação de proposições categóricas.",
      macete: "Para derrubar 'todos', basta UM que não seja. Não precisa que 'nenhum' seja.",
      erroComum: "Trocar a negação pelo oposto extremo ('nenhum').",
      comoBancaPensa: "Negar quantificador universal com 'nenhum' é a pegadinha mais recorrente do tema."
    }
  },
  {
    id: "RL-010", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Leis de De Morgan",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "Pela Lei de De Morgan, a negação de 'O réu é culpado e a prova é lícita' equivale a 'O réu não é culpado ou a prova não é lícita'.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "De Morgan",
    cognitivo: {
      motivo: "Cobrar a aplicação das Leis de De Morgan.",
      mede: "Equivalências / Leis de De Morgan (item 11.4).",
      pegadinhaDesc: "A banca costuma manter o conectivo ('e') ou negar só uma das partes.",
      ondeErra: "Não troca o 'e' por 'ou' ao negar a conjunção.",
      palavraCritica: "nega os dois e troca 'e' por 'ou'",
      tecnica: "~(P ∧ Q) = ~P ∨ ~Q; ~(P ∨ Q) = ~P ∧ ~Q.",
      regraMental: "De Morgan: 'nega tudo e vira o conectivo'. E vira OU; OU vira E."
    },
    comentario: {
      resolucao: "CERTO. Lei de De Morgan: a negação de uma conjunção (P ∧ Q) é a disjunção das negações (~P ∨ ~Q). Logo, negar 'culpado E lícita' = 'não culpado OU não lícita'.",
      fundamento: "Lógica proposicional — Leis de De Morgan.",
      macete: "Negou 'e'? Vira 'ou' (e nega as partes). Negou 'ou'? Vira 'e'.",
      erroComum: "Manter o conectivo ou negar apenas um termo.",
      comoBancaPensa: "De Morgan é cobrado direto ou embutido na negação de proposições compostas."
    }
  },
  {
    id: "RL-011", disciplina: "Raciocínio Lógico-Matemático", assunto: "Probabilidade", subassunto: "Probabilidade condicional",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Em um baralho comum de 52 cartas, a probabilidade de se retirar uma carta que seja rei, dado que a carta retirada é uma figura (valete, dama ou rei), é igual a 1/3.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dado que (condicional)",
    cognitivo: {
      motivo: "Cobrar o cálculo de probabilidade condicional em espaço amostral reduzido.",
      mede: "Probabilidade condicional (itens 13 e 2.x de Estatística).",
      pegadinhaDesc: "A banca costuma usar o espaço amostral total (52) em vez do reduzido (12 figuras).",
      ondeErra: "Divide por 52 em vez de restringir ao universo das figuras.",
      palavraCritica: "dado que é figura → universo = 12",
      tecnica: "P(A|B) = casos favoráveis dentro de B ÷ total de B. Reduza o espaço amostral ao evento condicionante.",
      regraMental: "'Dado que' encolhe o universo: figuras = 12 (4 reis, 4 damas, 4 valetes). Reis = 4. 4/12 = 1/3."
    },
    comentario: {
      resolucao: "CERTO. Há 12 figuras (4 valetes, 4 damas, 4 reis). Condicionada a ser figura, a probabilidade de ser rei é P(rei | figura) = 4/12 = 1/3. O universo reduz-se às 12 figuras, não às 52 cartas.",
      fundamento: "Teoria da probabilidade — probabilidade condicional P(A|B).",
      macete: "'Dado que' = reduza o denominador ao evento já conhecido.",
      erroComum: "Calcular 4/52 (ignorando a condição).",
      comoBancaPensa: "Condicional é cobrada para testar se o candidato reduz corretamente o espaço amostral."
    }
  },

  /* ==================== NOÇÕES DE DIREITOS HUMANOS ==================== */
  {
    id: "DH-006", disciplina: "Direitos Humanos", assunto: "Teoria geral", subassunto: "Características",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Entre as características dos direitos humanos está a imprescritibilidade, de modo que tais direitos não se perdem pela passagem do tempo nem pelo seu não exercício.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "imprescritibilidade",
    cognitivo: {
      motivo: "Cobrar as características dos direitos humanos.",
      mede: "Teoria geral dos DH (item 1 do edital).",
      pegadinhaDesc: "Item correto; a banca costuma trocar por 'prescritíveis' ou confundir com 'inalienáveis'.",
      ondeErra: "Confunde imprescritibilidade (tempo) com irrenunciabilidade (vontade) ou inalienabilidade (transferência).",
      palavraCritica: "não se perdem pelo tempo",
      tecnica: "Imprescritível = não caduca. Inalienável = não se vende/transfere. Irrenunciável = não se abre mão.",
      regraMental: "DH são universais, indivisíveis, imprescritíveis, inalienáveis, irrenunciáveis — e RELATIVOS (não absolutos)."
    },
    comentario: {
      resolucao: "CERTO. A imprescritibilidade é característica dos direitos humanos: eles não se extinguem pelo decurso do tempo nem pelo não uso. Não confundir com inalienabilidade (não podem ser transferidos) e irrenunciabilidade (não se pode renunciar a eles).",
      fundamento: "Teoria geral dos direitos humanos (doutrina).",
      macete: "Imprescritível = 'o tempo não apaga'. Diferente de inalienável e irrenunciável.",
      erroComum: "Misturar as características entre si ou afirmar que DH são absolutos.",
      comoBancaPensa: "Lista de características é cobrada trocando os conceitos entre si."
    }
  },
  {
    id: "DH-007", disciplina: "Direitos Humanos", assunto: "Convenção Americana", subassunto: "Prisão civil por dívida",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Conforme o Pacto de São José da Costa Rica e o entendimento do STF, é lícita a prisão civil do depositário infiel, ao lado da prisão do devedor de alimentos.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "depositário infiel",
    cognitivo: {
      motivo: "Cobrar a Súmula Vinculante 25 e o efeito do Pacto de São José (Decreto 678/1992).",
      mede: "Convenção Americana / DH na CF (itens 6 do edital).",
      pegadinhaDesc: "Mantém a prisão do depositário infiel, que foi afastada pela jurisprudência.",
      ondeErra: "Aplica a literalidade do art. 5º, LXVII, da CF sem o filtro do controle de convencionalidade.",
      palavraCritica: "depositário infiel (não cabe)",
      tecnica: "Só cabe prisão civil do DEVEDOR DE ALIMENTOS. Depositário infiel: proibido (SV 25).",
      regraMental: "Pacto de São José + SV 25: única prisão civil admitida é a do devedor de alimentos."
    },
    comentario: {
      resolucao: "ERRADO. Súmula Vinculante 25/STF: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Por força do Pacto de São José (status supralegal), subsiste apenas a prisão civil do devedor voluntário e inescusável de alimentos.",
      fundamento: "CF, art. 5º, LXVII; Decreto 678/1992 (Pacto de São José); Súmula Vinculante 25/STF.",
      macete: "Prisão civil hoje = só quem não paga pensão alimentícia.",
      erroComum: "Admitir a prisão do depositário infiel pela leitura isolada da CF.",
      comoBancaPensa: "Cruza CF + tratado de DH + súmula — o controle de convencionalidade é o ponto."
    }
  },
  {
    id: "DH-008", disciplina: "Direitos Humanos", assunto: "Dimensões dos direitos", subassunto: "Gerações",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "Os direitos de primeira dimensão (ou geração) correspondem aos direitos sociais, econômicos e culturais, que exigem prestações positivas do Estado, ligados ao valor da igualdade.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "primeira dimensão / sociais",
    cognitivo: {
      motivo: "Cobrar a correspondência entre dimensões e valores da Revolução Francesa.",
      mede: "Afirmação histórica dos DH (item 2).",
      pegadinhaDesc: "Atribui à 1ª dimensão o conteúdo da 2ª (direitos sociais / igualdade).",
      ondeErra: "Troca liberdade (1ª) por igualdade (2ª).",
      palavraCritica: "primeira dimensão = liberdade (não igualdade)",
      tecnica: "1ª = Liberdade (civis/políticos, prestação negativa). 2ª = Igualdade (sociais, prestação positiva). 3ª = Fraternidade (difusos).",
      regraMental: "Liberté, Égalité, Fraternité = 1ª, 2ª, 3ª dimensões, nessa ordem."
    },
    comentario: {
      resolucao: "ERRADO. A primeira dimensão abrange os direitos civis e políticos (liberdade), com prestação NEGATIVA do Estado. Os direitos sociais, econômicos e culturais (igualdade, prestação positiva) são de SEGUNDA dimensão. A assertiva cruzou as dimensões.",
      fundamento: "Doutrina dos direitos humanos — dimensões/gerações.",
      macete: "1ª Liberdade / 2ª Igualdade / 3ª Fraternidade (solidariedade).",
      erroComum: "Trocar o conteúdo/valor de cada dimensão.",
      comoBancaPensa: "Par ordenado dimensão↔valor é alvo clássico de inversão."
    }
  },
  {
    id: "DH-009", disciplina: "Direitos Humanos", assunto: "Direitos humanos e Estado", subassunto: "Uso da força policial",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "Segundo os parâmetros internacionais de direitos humanos aplicáveis à atividade policial, o uso da força deve observar os princípios da legalidade, necessidade e proporcionalidade, sendo o emprego de arma de fogo medida excepcional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "legalidade, necessidade e proporcionalidade",
    cognitivo: {
      motivo: "Cobrar os princípios do uso diferenciado da força (Código de Conduta da ONU / princípios básicos).",
      mede: "Direitos humanos e responsabilidade do Estado (item 3).",
      pegadinhaDesc: "Item correto; a banca costuma inverter para tornar a arma de fogo regra ou dispensar a proporcionalidade.",
      ondeErra: "Trata o uso da força como discricionário e ilimitado.",
      palavraCritica: "excepcional / proporcionalidade",
      tecnica: "Força: legal + necessária + proporcional. Arma de fogo é último recurso.",
      regraMental: "Uso da força é escalonado e excepcional — arma de fogo só quando indispensável para proteger a vida."
    },
    comentario: {
      resolucao: "CERTO. Os princípios internacionais (Código de Conduta para os Encarregados da Aplicação da Lei e Princípios Básicos sobre o Uso da Força, da ONU) exigem legalidade, necessidade e proporcionalidade, com o emprego de arma de fogo como medida excepcional, voltada à proteção da vida.",
      fundamento: "Instrumentos internacionais de DH aplicáveis à atividade policial (ONU).",
      macete: "Força policial: LNP — Legalidade, Necessidade, Proporcionalidade. Arma = último recurso.",
      erroComum: "Tratar o uso da força como livre ou a arma de fogo como primeira opção.",
      comoBancaPensa: "Tema operacional de DH: a banca inverte a excepcionalidade da arma de fogo."
    }
  },

  /* ==================== ÉTICA NO SERVIÇO PÚBLICO ==================== */
  {
    id: "ET-004", disciplina: "Ética no Serviço Público", assunto: "Ética e moral", subassunto: "Distinção conceitual",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A moral corresponde ao conjunto de normas e costumes efetivamente vividos por um grupo social, enquanto a ética é a reflexão crítica e filosófica sobre esses valores morais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "reflexão crítica",
    cognitivo: {
      motivo: "Cobrar a distinção conceitual entre ética e moral.",
      mede: "Ética e moral (item 1 do edital).",
      pegadinhaDesc: "Item correto; a banca costuma inverter (dizer que a moral reflete sobre a ética).",
      ondeErra: "Inverte os papéis: moral (prática vivida) × ética (teoria/reflexão).",
      palavraCritica: "moral = costume vivido; ética = reflexão",
      tecnica: "Moral = conjunto de regras praticadas. Ética = ciência/reflexão sobre a moral.",
      regraMental: "Moral 'faz'; ética 'pensa sobre o que se faz'."
    },
    comentario: {
      resolucao: "CERTO. Distinção clássica: a moral é o conjunto de valores e costumes efetivamente praticados por um grupo; a ética é a disciplina filosófica que reflete criticamente sobre esses valores (a 'teoria' da conduta).",
      fundamento: "Filosofia — ética e moral.",
      macete: "Moral = prática/costume; Ética = reflexão/teoria.",
      erroComum: "Inverter qual é a prática e qual é a reflexão.",
      comoBancaPensa: "Definições espelhadas são invertidas para testar a base conceitual."
    }
  },
  {
    id: "ET-005", disciplina: "Ética no Serviço Público", assunto: "Ética e função pública", subassunto: "Princípios da Administração",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "O princípio da impessoalidade, aplicável ao servidor público, impõe que a atuação administrativa seja voltada ao interesse público, vedando a promoção pessoal do agente à custa de atos e realizações da Administração.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "impessoalidade",
    cognitivo: {
      motivo: "Cobrar o conteúdo do princípio da impessoalidade (CF, art. 37, caput e § 1º).",
      mede: "Ética e função pública (item 4).",
      pegadinhaDesc: "Item correto; a banca costuma confundir impessoalidade com moralidade ou publicidade.",
      ondeErra: "Troca o conteúdo dos princípios do LIMPE.",
      palavraCritica: "veda promoção pessoal",
      tecnica: "Impessoalidade = ausência de favoritismo/perseguição + vedação à autopromoção (art. 37, §1º).",
      regraMental: "LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência."
    },
    comentario: {
      resolucao: "CERTO. A impessoalidade determina que o agente atue em nome do interesse público, sem favorecer ou prejudicar pessoas, e proíbe a promoção pessoal do servidor por meio de obras e campanhas públicas (CF, art. 37, § 1º).",
      fundamento: "CF, art. 37, caput e § 1º.",
      macete: "Impessoalidade = 'nem favorece amigo, nem se autopromove'.",
      erroComum: "Confundir impessoalidade com moralidade.",
      comoBancaPensa: "Princípios do LIMPE são cobrados trocando as definições entre si."
    }
  },
  {
    id: "ET-006", disciplina: "Ética no Serviço Público", assunto: "Ética no setor público", subassunto: "Conduta do servidor",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "No exercício da função pública, a cortesia, a boa-vontade e o zelo no trato com o cidadão são deveres éticos do servidor, e não meras liberalidades sujeitas à sua conveniência pessoal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "deveres éticos",
    cognitivo: {
      motivo: "Cobrar a natureza cogente dos deveres éticos de urbanidade do servidor.",
      mede: "Ética no setor público (item 5).",
      pegadinhaDesc: "A banca costuma rebaixar tais condutas a mera cortesia facultativa.",
      ondeErra: "Trata urbanidade como opção, não como dever funcional.",
      palavraCritica: "deveres éticos (não liberalidades)",
      tecnica: "Urbanidade/cortesia são deveres funcionais — sua ausência configura desídia ética.",
      regraMental: "Tratar bem o cidadão é DEVER, não favor do servidor."
    },
    comentario: {
      resolucao: "CERTO. Os códigos de ética do serviço público tratam a cortesia, a presteza e o zelo como deveres funcionais, e não como gentilezas facultativas. A qualidade do atendimento é elemento da moralidade administrativa e da eficiência.",
      fundamento: "Princípios éticos do serviço público (padrão dos códigos de ética funcional).",
      macete: "Bom atendimento = dever ético, cobrável — não depende do humor do servidor.",
      erroComum: "Rebaixar a urbanidade a mera cortesia opcional.",
      comoBancaPensa: "A banca testa se o candidato entende a natureza obrigatória dos deveres éticos."
    }
  },

  /* ==================== TI E SEGURANÇA CIBERNÉTICA ==================== */
  {
    id: "TI-005", disciplina: "TI e Segurança Cibernética", assunto: "Malwares", subassunto: "Cavalo de Troia × vírus",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.85,
    enunciado: "O cavalo de Troia (trojan) caracteriza-se por se replicar automaticamente pela rede, sem necessidade de ação do usuário nem de um programa hospedeiro, o que o distingue do vírus.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "replica automaticamente",
    cognitivo: {
      motivo: "Distinguir trojan, vírus e worm.",
      mede: "Noções de vírus, worms e pragas virtuais (item 5.2).",
      pegadinhaDesc: "Atribui ao trojan a característica do WORM (autorreplicação pela rede).",
      ondeErra: "Confunde as três pragas: vírus (hospedeiro), worm (autorreplica), trojan (disfarce).",
      palavraCritica: "replica automaticamente = worm (não trojan)",
      tecnica: "Vírus: precisa de hospedeiro + ação. Worm: autorreplica sozinho na rede. Trojan: se disfarça de programa legítimo.",
      regraMental: "Trojan = 'presente de grego' (disfarce). Worm = 'verme que se multiplica'. Vírus = 'gruda em arquivo'."
    },
    comentario: {
      resolucao: "ERRADO. Quem se replica automaticamente pela rede, sem hospedeiro nem ação do usuário, é o WORM. O cavalo de Troia (trojan) disfarça-se de programa legítimo para induzir a execução e abrir portas/rouba dados, mas não se autorreplica.",
      fundamento: "Cartilha de Segurança CERT.br — códigos maliciosos.",
      macete: "Worm = autorreplica. Trojan = disfarce. Vírus = precisa de hospedeiro e do usuário.",
      erroComum: "Trocar as definições de trojan, worm e vírus.",
      comoBancaPensa: "Definição perfeita com o nome trocado é o padrão nº 1 de Informática."
    }
  },
  {
    id: "TI-006", disciplina: "TI e Segurança Cibernética", assunto: "Criptografia", subassunto: "Simétrica × assimétrica",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "Na criptografia assimétrica, utiliza-se um par de chaves: aquilo que é cifrado com a chave pública somente pode ser decifrado com a respectiva chave privada, e vice-versa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "par de chaves",
    cognitivo: {
      motivo: "Cobrar o funcionamento da criptografia de chave pública.",
      mede: "Criptografia e ferramentas (item 4 da Segurança Cibernética).",
      pegadinhaDesc: "A banca costuma dizer que a mesma chave cifra e decifra (isso é a simétrica).",
      ondeErra: "Confunde assimétrica (par de chaves) com simétrica (chave única).",
      palavraCritica: "pública cifra / privada decifra",
      tecnica: "Simétrica: 1 chave (rápida, problema de distribuição). Assimétrica: 2 chaves (pública + privada).",
      regraMental: "Sigilo: cifra com a PÚBLICA do destinatário. Autenticidade/assinatura: cifra com a PRIVADA do emissor."
    },
    comentario: {
      resolucao: "CERTO. A criptografia assimétrica usa um par matematicamente relacionado (chave pública e chave privada). O que é cifrado por uma só é decifrado pela outra. Para sigilo, cifra-se com a pública do destinatário; para assinatura digital, cifra-se (assina-se) com a privada do emissor.",
      fundamento: "Fundamentos de segurança da informação — criptografia de chave pública.",
      macete: "Assimétrica = duas chaves. Simétrica = uma chave só (AES, DES).",
      erroComum: "Dizer que a mesma chave cifra e decifra (isso é simétrica).",
      comoBancaPensa: "Simétrica × assimétrica é par conceitual clássico de inversão."
    }
  },
  {
    id: "TI-007", disciplina: "TI e Segurança Cibernética", assunto: "Segurança de rede", subassunto: "Firewall × IDS × IPS",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "O IDS (Intrusion Detection System) atua de forma reativa apenas detectando e alertando sobre atividades suspeitas, ao passo que o IPS (Intrusion Prevention System) pode bloquear ativamente o tráfego malicioso.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "IDS detecta / IPS bloqueia",
    cognitivo: {
      motivo: "Distinguir IDS (detecção) de IPS (prevenção) e de firewall.",
      mede: "Firewalls, IDS/IPS, segmentação de rede (item 3.1).",
      pegadinhaDesc: "A banca costuma inverter — dizer que o IDS bloqueia e o IPS só alerta.",
      ondeErra: "Troca o papel detectar × bloquear.",
      palavraCritica: "IDS = detecta; IPS = previne/bloqueia",
      tecnica: "IDS = câmera de segurança (alerta). IPS = porta que tranca (bloqueia). Firewall = filtra por regras.",
      regraMental: "A letra D de IDS = Detecção. A letra P de IPS = Prevenção (bloqueio ativo)."
    },
    comentario: {
      resolucao: "CERTO. O IDS monitora e alerta sobre atividades suspeitas (papel passivo/reativo); o IPS, além de detectar, atua ativamente bloqueando o tráfego malicioso. O firewall, por sua vez, filtra o tráfego conforme regras predefinidas.",
      fundamento: "Segurança de redes — sistemas de detecção e prevenção de intrusão.",
      macete: "IDS Detecta, IPS Previne. A inicial já entrega a função.",
      erroComum: "Inverter os papéis de IDS e IPS.",
      comoBancaPensa: "Siglas de segurança são cobradas trocando a função de cada uma."
    }
  },
  {
    id: "TI-008", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Modelos de serviço",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "No modelo de computação em nuvem SaaS (Software as a Service), o usuário final acessa aplicações prontas pela Internet, sem precisar gerenciar a infraestrutura, o sistema operacional ou a manutenção do software subjacente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "SaaS",
    cognitivo: {
      motivo: "Cobrar os modelos de serviço em nuvem (IaaS, PaaS, SaaS).",
      mede: "Computação na nuvem (item 3.6 e Segurança em Nuvem).",
      pegadinhaDesc: "A banca costuma trocar SaaS por IaaS ou atribuir ao SaaS a gestão da infraestrutura.",
      ondeErra: "Confunde os três modelos e o que cada um entrega ao usuário.",
      palavraCritica: "aplicação pronta (SaaS)",
      tecnica: "IaaS = infraestrutura (máquinas). PaaS = plataforma (para desenvolver). SaaS = software pronto (usuário final).",
      regraMental: "SaaS = 'usa o app' (Gmail). PaaS = 'programa no ambiente'. IaaS = 'aluga o servidor'."
    },
    comentario: {
      resolucao: "CERTO. No SaaS, o provedor entrega a aplicação pronta pela Internet (ex.: webmail, suítes online) e o usuário apenas a utiliza, sem responsabilidade sobre infraestrutura, SO ou manutenção. IaaS entrega infraestrutura; PaaS, plataforma de desenvolvimento.",
      fundamento: "Fundamentos de computação em nuvem (modelos de serviço).",
      macete: "SaaS = Software pronto; PaaS = Plataforma; IaaS = Infraestrutura.",
      erroComum: "Atribuir ao SaaS a gestão da infraestrutura (que é do IaaS).",
      comoBancaPensa: "Os três modelos de nuvem são cobrados trocando o que cada um oferece."
    }
  },
  {
    id: "TI-009", disciplina: "TI e Segurança Cibernética", assunto: "Gestão de identidades", subassunto: "Autenticação multifator",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A autenticação multifator (MFA) combina fatores de categorias distintas — como algo que o usuário sabe, algo que possui e algo que é —, de modo que a exigência de duas senhas diferentes já configura, por si só, autenticação multifator.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "duas senhas diferentes",
    cognitivo: {
      motivo: "Cobrar o conceito preciso de MFA (fatores de categorias distintas).",
      mede: "Autenticação, MFA e SSO (item 6 e Segurança Digital).",
      pegadinhaDesc: "Começa com a definição correta e emenda a conclusão falsa (duas senhas = MFA).",
      ondeErra: "Aceita duas senhas (mesmo fator 'conhecimento') como multifator.",
      palavraCritica: "duas senhas (mesmo fator)",
      tecnica: "MFA exige fatores de CATEGORIAS diferentes. Duas senhas são o mesmo fator (algo que se sabe).",
      regraMental: "MFA = combinar categorias: saber (senha) + possuir (token/celular) + ser (biometria)."
    },
    comentario: {
      resolucao: "ERRADO. A primeira parte está correta, mas a conclusão é falsa: duas senhas pertencem ao MESMO fator (algo que o usuário sabe), logo não configuram MFA. A autenticação multifator exige combinar fatores de categorias distintas (ex.: senha + código no celular).",
      fundamento: "Gestão de identidades e acesso — autenticação multifator.",
      macete: "Multifator ≠ multi-senha. Precisa misturar categorias (saber + ter + ser).",
      erroComum: "Contar dois fatores do mesmo tipo como MFA.",
      comoBancaPensa: "Verdade + falso emendado: valida a definição e induz a conclusão errada."
    }
  },
  {
    id: "TI-010", disciplina: "TI e Segurança Cibernética", assunto: "Fundamentos de segurança", subassunto: "Tríade CID",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.85,
    enunciado: "O princípio da integridade, na segurança da informação, garante que a informação esteja acessível e disponível sempre que um usuário autorizado dela necessitar.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "acessível e disponível",
    cognitivo: {
      motivo: "Distinguir os pilares da tríade CID (Confidencialidade, Integridade, Disponibilidade).",
      mede: "Princípios de confidencialidade, integridade e disponibilidade (item 1).",
      pegadinhaDesc: "Descreve a DISPONIBILIDADE e a rotula como integridade.",
      ondeErra: "Troca os pilares da tríade.",
      palavraCritica: "acessível/disponível = disponibilidade (não integridade)",
      tecnica: "Confidencialidade: só quem pode vê. Integridade: não foi alterada indevidamente. Disponibilidade: acessível quando preciso.",
      regraMental: "CID: Confidencialidade (sigilo), Integridade (exatidão), Disponibilidade (acesso)."
    },
    comentario: {
      resolucao: "ERRADO. A descrição (informação acessível quando necessária) corresponde à DISPONIBILIDADE. A integridade garante que a informação não seja alterada de forma indevida ou não autorizada, preservando sua exatidão e completude.",
      fundamento: "Fundamentos de segurança da informação — tríade CID.",
      macete: "Integridade = 'não foi adulterada'. Disponibilidade = 'está no ar quando preciso'.",
      erroComum: "Trocar integridade por disponibilidade.",
      comoBancaPensa: "A tríade CID é cobrada trocando a definição de um pilar por outro."
    }
  },

  /* ==================== DIREITO CONSTITUCIONAL ==================== */
  {
    id: "DC-007", disciplina: "Direito Constitucional", assunto: "Segurança pública", subassunto: "Órgãos do art. 144",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "A segurança pública é exercida, entre outros órgãos, pelas polícias penais federal, estaduais e distrital, incluídas expressamente no rol do art. 144 da Constituição Federal pela Emenda Constitucional nº 104/2019.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "polícias penais",
    cognitivo: {
      motivo: "Cobrar a inclusão das polícias penais no art. 144 (EC 104/2019).",
      mede: "Segurança pública — Título V, Cap. III (item do edital).",
      pegadinhaDesc: "A banca costuma omitir as polícias penais ou negar sua previsão constitucional.",
      ondeErra: "Desconhece a atualização do rol pela EC 104/2019.",
      palavraCritica: "polícias penais (EC 104/2019)",
      tecnica: "O rol do art. 144 é taxativo. Memorize os órgãos, incluindo as polícias penais.",
      regraMental: "Art. 144: PF, PRF, PFF (ferroviária), Polícias Civis, Militares, Bombeiros e Polícias Penais."
    },
    comentario: {
      resolucao: "CERTO. A EC 104/2019 incluiu as polícias penais (federal, estaduais e distrital) no art. 144 da CF, vinculadas ao órgão administrador do sistema penal. O rol constitucional dos órgãos de segurança pública é considerado taxativo pelo STF.",
      fundamento: "CF, art. 144, incisos e § 5º-A (EC 104/2019); jurisprudência do STF (rol taxativo).",
      macete: "Polícia penal 'substituiu' o antigo agente penitenciário no plano constitucional.",
      erroComum: "Ignorar a EC 104/2019 e negar a previsão das polícias penais.",
      comoBancaPensa: "Alteração constitucional recente cobrada de forma literal."
    }
  },
  {
    id: "DC-008", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Remédios constitucionais",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "Conceder-se-á habeas data para assegurar o conhecimento ou a retificação de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "habeas data",
    cognitivo: {
      motivo: "Cobrar a finalidade do habeas data (art. 5º, LXXII).",
      mede: "Direitos e garantias fundamentais — remédios constitucionais.",
      pegadinhaDesc: "A banca costuma trocar habeas data por mandado de segurança ou por habeas corpus.",
      ondeErra: "Confunde os remédios ou o objeto de cada um.",
      palavraCritica: "informações da própria pessoa",
      tecnica: "HD: acesso/retificação de dados PESSOAIS do impetrante. MS: direito líquido e certo não amparado por HC/HD.",
      regraMental: "Habeas DATA = seus DADOS. Habeas CORPUS = liberdade de locomoção. MI = norma faltante."
    },
    comentario: {
      resolucao: "CERTO. CF, art. 5º, LXXII: o habeas data assegura o conhecimento e a retificação de informações relativas à pessoa do impetrante em registros de entidades governamentais ou de caráter público. É personalíssimo quanto aos próprios dados.",
      fundamento: "CF, art. 5º, LXXII; Lei 9.507/1997.",
      macete: "Habeas DATA cuida dos seus DADOS pessoais — não serve para dados de terceiros.",
      erroComum: "Trocar habeas data por mandado de segurança.",
      comoBancaPensa: "Os remédios constitucionais são cobrados trocando finalidade/objeto entre eles."
    }
  },
  {
    id: "DC-009", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Direito de reunião",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "O direito de reunião em locais abertos ao público, previsto na Constituição, depende de prévia autorização da autoridade competente, exigindo-se, ainda, que não frustre outra reunião anteriormente convocada para o mesmo local.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "prévia autorização",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 5º, XVI (aviso prévio × autorização).",
      mede: "Direitos e garantias fundamentais.",
      pegadinhaDesc: "Troca 'prévio aviso' por 'prévia autorização', criando exigência inexistente.",
      ondeErra: "Confunde comunicar (aviso) com pedir permissão (autorização).",
      palavraCritica: "autorização (o correto é 'prévio aviso')",
      tecnica: "Reunião: exige apenas AVISO prévio à autoridade — nunca autorização.",
      regraMental: "Reunião pacífica, sem armas: independe de autorização; basta AVISAR antes."
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, XVI: a reunião pacífica, sem armas, em locais abertos ao público, independe de AUTORIZAÇÃO, exigindo-se apenas prévio AVISO à autoridade competente, e desde que não frustre outra reunião anteriormente convocada para o mesmo local. Exigir autorização é inconstitucional.",
      fundamento: "CF, art. 5º, XVI.",
      macete: "Reunião: avisa, não pede licença. 'Autorização' é a pegadinha.",
      erroComum: "Aceitar 'prévia autorização' como requisito.",
      comoBancaPensa: "Troca de uma palavra (aviso→autorização) em dispositivo muito conhecido."
    }
  },

  /* ==================== DIREITO ADMINISTRATIVO ==================== */
  {
    id: "DA-006", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Autarquias",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "As autarquias são pessoas jurídicas de direito público, integrantes da Administração indireta, criadas diretamente por lei específica, dispensando registro de seus atos constitutivos para adquirir personalidade jurídica.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "criadas por lei",
    cognitivo: {
      motivo: "Cobrar o regime de criação das autarquias (art. 37, XIX, CF).",
      mede: "Organização administrativa — Administração indireta (item 1).",
      pegadinhaDesc: "A banca costuma dizer que a autarquia é 'autorizada' por lei (regime das estatais) ou de direito privado.",
      ondeErra: "Confunde criação por lei (autarquia/fundação pública de D. Público) com autorização por lei (EP/SEM/fundação privada).",
      palavraCritica: "criadas diretamente por lei",
      tecnica: "Autarquia: lei CRIA. Empresa pública/SEM: lei AUTORIZA a criação (depende de registro).",
      regraMental: "Direito público (autarquia) = a lei já cria. Direito privado (estatais) = a lei só autoriza."
    },
    comentario: {
      resolucao: "CERTO. As autarquias são pessoas jurídicas de direito público, criadas diretamente por lei específica (CF, art. 37, XIX), adquirindo personalidade com a vigência da lei — sem necessidade de registro. Já as empresas públicas e sociedades de economia mista têm sua criação apenas autorizada por lei.",
      fundamento: "CF, art. 37, XIX; Decreto-Lei 200/1967.",
      macete: "Autarquia: lei CRIA (pronto). Estatal: lei AUTORIZA (ainda precisa registrar).",
      erroComum: "Aplicar à autarquia o regime de 'autorização' das estatais.",
      comoBancaPensa: "Criar × autorizar por lei é o divisor clássico da Administração indireta."
    }
  },
  {
    id: "DA-007", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Atributos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "A autoexecutoriedade, atributo do ato administrativo, está presente em todos os atos da Administração, permitindo-lhe executá-los diretamente, com o uso da força se necessário, independentemente de previsão legal ou de situação de urgência.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "todos os atos",
    cognitivo: {
      motivo: "Cobrar os limites da autoexecutoriedade.",
      mede: "Atos administrativos — atributos (item 2.1).",
      pegadinhaDesc: "Generaliza a autoexecutoriedade para TODOS os atos e dispensa lei/urgência.",
      ondeErra: "Não sabe que a autoexecutoriedade só existe quando há previsão legal ou urgência.",
      palavraCritica: "todos / independentemente de previsão legal",
      tecnica: "Autoexecutoriedade não é atributo de todo ato — depende de lei ou de urgência.",
      regraMental: "Nem todo ato se autoexecuta: cobrança de multa, por exemplo, exige ação judicial."
    },
    comentario: {
      resolucao: "ERRADO. A autoexecutoriedade NÃO está presente em todos os atos: só se admite quando prevista em lei ou diante de situação de urgência. Ex.: a Administração não pode cobrar multa coercitivamente sem processo — precisa de execução judicial. A generalização torna o item falso.",
      fundamento: "Doutrina administrativista (Di Pietro, Carvalho Filho); atributos do ato administrativo.",
      macete: "Atributos: PATI — Presunção de legitimidade, Autoexecutoriedade, Tipicidade, Imperatividade. Só a presunção é de TODO ato.",
      erroComum: "Achar que todo ato é autoexecutório.",
      comoBancaPensa: "Termo absoluto ('todos') aplicado a atributo que tem exceções."
    }
  },
  {
    id: "DA-008", disciplina: "Direito Administrativo", assunto: "Licitações", subassunto: "Modalidades (Lei 14.133/2021)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A Lei nº 14.133/2021 (nova Lei de Licitações) manteve as modalidades tomada de preços e convite, acrescentando a elas o diálogo competitivo.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "tomada de preços e convite",
    cognitivo: {
      motivo: "Cobrar as modalidades de licitação da nova lei (art. 28).",
      mede: "Licitações — modalidades (item 5.3).",
      pegadinhaDesc: "Mantém tomada de preços e convite, que foram EXTINTAS pela Lei 14.133/2021.",
      ondeErra: "Responde com as modalidades da lei antiga (8.666/1993).",
      palavraCritica: "tomada de preços e convite (extintas)",
      tecnica: "Modalidades atuais (art. 28): pregão, concorrência, concurso, leilão e diálogo competitivo.",
      regraMental: "A 14.133 MATOU tomada de preços e convite; CRIOU o diálogo competitivo."
    },
    comentario: {
      resolucao: "ERRADO. A Lei 14.133/2021 EXTINGUIU a tomada de preços e o convite. As modalidades atuais (art. 28) são: pregão, concorrência, concurso, leilão e diálogo competitivo. O diálogo competitivo é a novidade da lei.",
      fundamento: "Lei 14.133/2021, art. 28.",
      macete: "5 modalidades novas: Pregão, Concorrência, Concurso, Leilão, Diálogo competitivo.",
      erroComum: "Manter modalidades da Lei 8.666/1993 (revogada).",
      comoBancaPensa: "Lei nova extinguindo institutos antigos é cobrança recorrente por vários anos."
    }
  },
  {
    id: "DA-009", disciplina: "Direito Administrativo", assunto: "Poderes administrativos", subassunto: "Poder de polícia",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "O ciclo de polícia administrativa compreende as fases de ordem, consentimento, fiscalização e sanção; segundo o STF, a fase de sanção pode ser delegada a pessoas jurídicas de direito privado integrantes da Administração indireta.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sanção pode ser delegada",
    cognitivo: {
      motivo: "Cobrar o ciclo de polícia e os limites de delegação (STF, RE 633.782).",
      mede: "Poderes administrativos — poder de polícia (item 4.1).",
      pegadinhaDesc: "Afirma que a SANÇÃO é delegável, quando o STF admite delegar consentimento e fiscalização, mas não ordem e sanção.",
      ondeErra: "Não distingue as fases delegáveis das indelegáveis.",
      palavraCritica: "sanção (indelegável)",
      tecnica: "Delegáveis a PJ de direito privado estatal: consentimento e fiscalização. Indelegáveis: ordem e sanção.",
      regraMental: "Ciclo O-C-F-S: o 'miolo' (Consentimento e Fiscalização) delega; as 'pontas' (Ordem e Sanção) não."
    },
    comentario: {
      resolucao: "ERRADO. STF (RE 633.782, Tema 532): é constitucional a delegação, a estatais de capital majoritariamente público que prestem serviço exclusivo do Estado, apenas das fases de CONSENTIMENTO e FISCALIZAÇÃO. As fases de ORDEM (legislar) e SANÇÃO permanecem indelegáveis. A assertiva inverteu.",
      fundamento: "STF, RE 633.782 (Tema 532); ciclo de polícia (doutrina).",
      macete: "Ciclo OCFS: só Consentimento e Fiscalização (o meio) podem ser delegados.",
      erroComum: "Admitir a delegação da sanção ou da ordem.",
      comoBancaPensa: "Cruza ciclo de polícia + tese do STF, manipulando qual fase é delegável."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE4);

/* Reforço de frequência para disciplinas básicas ampliadas (Módulo 2) */
(function () {
  const add = (disc, temas) => {
    let d = FREQUENCIA_TEMAS.find(f => f.disciplina === disc);
    if (!d) { d = { disciplina: disc, temas: [] }; FREQUENCIA_TEMAS.push(d); }
    d.temas.push(...temas);
  };
  add("Língua Portuguesa", [
    { tema: "Concordância (verbos impessoais)", freq: 85, tendencia: "estavel", prob: 0.86 },
    { tema: "Colocação pronominal", freq: 78, tendencia: "estavel", prob: 0.8 },
  ]);
  add("Raciocínio Lógico-Matemático", [
    { tema: "Equivalências e negações (condicional)", freq: 92, tendencia: "alta", prob: 0.93 },
    { tema: "Negação de quantificadores", freq: 85, tendencia: "estavel", prob: 0.86 },
  ]);
  add("Direitos Humanos", [
    { tema: "Características dos DH", freq: 88, tendencia: "alta", prob: 0.9 },
    { tema: "Convenção Americana (Pacto de São José)", freq: 84, tendencia: "alta", prob: 0.86 },
  ]);
  add("TI e Segurança Cibernética", [
    { tema: "Malwares (trojan/worm/vírus)", freq: 90, tendencia: "alta", prob: 0.91 },
    { tema: "Criptografia simétrica × assimétrica", freq: 84, tendencia: "alta", prob: 0.85 },
    { tema: "Tríade CID", freq: 86, tendencia: "alta", prob: 0.88 },
  ]);
})();
