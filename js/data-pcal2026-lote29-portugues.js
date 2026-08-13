/* =====================================================================
   QUESTLAB — Lote 29: LÍNGUA PORTUGUESA (expansão — texto-base autoral)
   Preenche uma das lacunas mais rasas do banco (Língua Portuguesa era a
   disciplina com menor cobertura relativa considerando sua relevância
   no edital). Texto-base 100% autoral (tema: perícia criminal e cadeia
   de custódia), escrito especificamente para este banco — nenhum trecho
   de terceiros foi reproduzido. Itens testam fenômenos gramaticais e
   textuais clássicos da banca (regência, crase, coesão, concordância,
   pontuação, tipologia, voz verbal), com gabarito verificado de forma
   independente pela análise linguística do próprio texto.
   12 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const TEXTO_BASE_LOTE29 = `A perícia criminal desempenha papel decisivo na elucidação de crimes, pois é responsável por transformar vestígios materiais em provas técnicas capazes de subsidiar a persecução penal. Para que esse trabalho produza resultados confiáveis, torna-se indispensável a preservação rigorosa da cadeia de custódia, ou seja, o conjunto de procedimentos que garante a rastreabilidade de um vestígio desde a sua coleta até o descarte final, passando pelo transporte, pelo armazenamento e pela análise em laboratório.

Quando essa cadeia é rompida, abre-se margem para que a defesa questione a idoneidade da prova, o que pode comprometer todo o esforço investigativo. Por essa razão, peritos e agentes que atuam na cena do crime devem sujeitar-se à disciplina metodológica desde a primeira diligência, seguindo protocolos padronizados, registrando cada etapa em formulários específicos e utilizando embalagens que impeçam contaminação ou adulteração dos materiais coletados.

Ainda que a tecnologia tenha avançado significativamente nas últimas décadas — a exemplo dos exames de DNA e das ferramentas de análise digital —, nenhuma inovação substitui a disciplina metodológica na cena do crime. Afinal, de nada adianta um laboratório de ponta se os vestígios que ali chegam já estiverem irremediavelmente comprometidos.`;

const QUESTOES_PCAL_LOTE29 = [

  {
    id: "PT-021", disciplina: "Língua Portuguesa", assunto: "Coesão textual", subassunto: "Conectivo explicativo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "No primeiro parágrafo, a expressão \"ou seja\" introduz uma reformulação explicativa do termo imediatamente anterior (\"cadeia de custódia\"), retomando-o para defini-lo em termos mais acessíveis ao leitor.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ou seja ... reformulação explicativa",
    cognitivo: {
      motivo: "Cobrar o valor semântico do conectivo 'ou seja'.",
      palavraCritica: "ou seja",
    },
    comentario: {
      resolucao: "CERTO. A expressão 'ou seja' tem valor explicativo: retoma 'cadeia de custódia' e a define ('o conjunto de procedimentos que garante a rastreabilidade...'), função típica desse conectivo.",
      fundamento: "Gramática — classe dos conectivos explicativos.",
      macete: "Conectivo explicativo = reformula/define o termo anterior.",
      erroComum: "Atribuir valor adversativo ou condicional ao conectivo.",
      comoBancaPensa: "Item de fixação sobre o valor semântico de conectivos textuais."
    }
  },
  {
    id: "PT-022", disciplina: "Língua Portuguesa", assunto: "Sintaxe", subassunto: "Orações subordinadas adverbiais",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "No período que inicia o segundo parágrafo, a oração \"Quando essa cadeia é rompida\" classifica-se como oração subordinada adverbial temporal, indicando o momento em que se verifica o fato expresso na oração principal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Quando ... adverbial temporal",
    cognitivo: {
      motivo: "Cobrar a classificação de orações subordinadas adverbiais.",
      palavraCritica: "Quando",
    },
    comentario: {
      resolucao: "CERTO. 'Quando essa cadeia é rompida' é oração subordinada adverbial temporal, pois situa no tempo a circunstância em que ocorre o fato descrito na oração principal ('abre-se margem para que a defesa questione...').",
      fundamento: "Gramática — orações subordinadas adverbiais (classificação).",
      macete: "Quando = sempre temporal, nunca condicional.",
      erroComum: "Classificar 'quando' como conjunção condicional.",
      comoBancaPensa: "Item clássico de classificação de orações."
    }
  },
  {
    id: "PT-023", disciplina: "Língua Portuguesa", assunto: "Regência verbal", subassunto: "Verbo transitivo direto",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "No trecho \"para que a defesa questione a idoneidade da prova\", o verbo \"questionar\" exige complemento regido de preposição, classificando-se como transitivo indireto.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "questione a idoneidade ... transitivo indireto",
    cognitivo: {
      motivo: "Cobrar a regência correta do verbo 'questionar'.",
      palavraCritica: "transitivo indireto",
    },
    comentario: {
      resolucao: "ERRADO. O verbo 'questionar', no trecho, é transitivo DIRETO ('questionar algo'), e não indireto — o complemento 'a idoneidade da prova' completa o verbo sem preposição exigida por ele.",
      fundamento: "Gramática — regência verbal (transitividade).",
      macete: "Questionar algo = VTD. Não confundir com verbos que exigem preposição (ex.: 'duvidar DE algo').",
      erroComum: "Classificar 'questionar' como VTI por analogia com verbos similares que exigem preposição.",
      comoBancaPensa: "Testa se o candidato verifica a real regência antes de aceitar a classificação proposta."
    }
  },
  {
    id: "PT-024", disciplina: "Língua Portuguesa", assunto: "Ortografia e acentuação", subassunto: "Crase",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "O acento indicativo de crase em \"devem sujeitar-se à disciplina metodológica\" (segundo parágrafo) justifica-se pela regência do verbo pronominal \"sujeitar-se\", que exige a preposição \"a\", combinada com o artigo feminino que precede o substantivo \"disciplina\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sujeitar-se à disciplina ... regência + artigo feminino",
    cognitivo: {
      motivo: "Cobrar a justificativa correta do uso da crase.",
      palavraCritica: "à disciplina",
    },
    comentario: {
      resolucao: "CERTO. A crase em 'à disciplina' resulta da regência de 'sujeitar-se a' (que exige a preposição 'a') combinada com o artigo feminino que acompanha 'disciplina', configurando corretamente a fusão preposição+artigo.",
      fundamento: "Gramática — regras de crase (fusão de preposição e artigo).",
      macete: "Verbo/nome que rege 'a' + palavra feminina determinada por artigo = crase.",
      erroComum: "Negar a crase por não perceber a regência do verbo pronominal.",
      comoBancaPensa: "Testa o raciocínio completo de justificativa da crase, não apenas o reconhecimento do acento."
    }
  },
  {
    id: "PT-025", disciplina: "Língua Portuguesa", assunto: "Concordância verbal", subassunto: "Sujeito simples",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.7,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "No terceiro parágrafo, o verbo \"substitui\", em \"nenhuma inovação substitui a disciplina metodológica\", deveria flexionar-se no plural (\"substituem\"), uma vez que seu sujeito é composto pelos elementos \"tecnologia\" e \"inovação\", ambos mencionados no período.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sujeito composto ... substituem",
    cognitivo: {
      motivo: "Cobrar a identificação correta do sujeito gramatical.",
      palavraCritica: "sujeito composto",
    },
    comentario: {
      resolucao: "ERRADO. O sujeito de 'substitui' é apenas 'nenhuma inovação' (sujeito simples, singular) — 'tecnologia' integra outra oração do mesmo período ('Ainda que a tecnologia tenha avançado...'), não compondo o sujeito da oração em análise. A concordância no singular está correta.",
      fundamento: "Gramática — concordância verbal (identificação do sujeito).",
      macete: "Delimite a oração antes de identificar o sujeito — não misture orações do mesmo período.",
      erroComum: "Somar elementos de orações diferentes para 'criar' um sujeito composto inexistente.",
      comoBancaPensa: "Testa se o candidato delimita corretamente os limites oracionais antes de analisar a concordância."
    }
  },
  {
    id: "PT-026", disciplina: "Língua Portuguesa", assunto: "Pontuação", subassunto: "Travessão (aposto explicativo)",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.72,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "No trecho \"— a exemplo dos exames de DNA e das ferramentas de análise digital —\", o par de travessões isola um aposto que contém informação essencial à compreensão do período, razão pela qual sua supressão comprometeria a estrutura sintática da frase.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "informação essencial ... comprometeria",
    cognitivo: {
      motivo: "Cobrar a distinção entre informação acessória (exemplificativa) e essencial.",
      palavraCritica: "informação essencial ... comprometeria",
    },
    comentario: {
      resolucao: "ERRADO. O trecho isolado pelos travessões é um aposto explicativo de natureza exemplificativa ('a exemplo de'), portanto acessório: sua supressão não compromete a estrutura sintática do período ('Ainda que a tecnologia tenha avançado significativamente nas últimas décadas, nenhuma inovação substitui...' permanece completo e correto).",
      fundamento: "Gramática — pontuação (travessão e aposto explicativo).",
      macete: "Exemplo entre travessões/vírgulas = acessório, suprimível sem quebrar a sintaxe.",
      erroComum: "Considerar todo aposto como 'essencial' apenas por conter informação relevante.",
      comoBancaPensa: "Restringe indevidamente o caráter acessório do aposto exemplificativo."
    }
  },
  {
    id: "PT-027", disciplina: "Língua Portuguesa", assunto: "Coesão textual", subassunto: "Conectivo conclusivo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.72,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "O vocábulo \"Afinal\", que inicia o período final do texto, introduz uma justificativa para a afirmação anterior, apresentando valor semântico conclusivo/explicativo no contexto em que ocorre.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Afinal ... justificativa ... conclusivo/explicativo",
    cognitivo: {
      motivo: "Cobrar o valor semântico do advérbio/conectivo 'afinal'.",
      palavraCritica: "Afinal",
    },
    comentario: {
      resolucao: "CERTO. 'Afinal', no período final, introduz a justificativa da afirmação anterior (a insubstituibilidade da disciplina metodológica), com valor semântico conclusivo/explicativo, equivalente a 'pois' ou 'com efeito'.",
      fundamento: "Gramática — valores semânticos de conectivos e advérbios.",
      macete: "'Afinal' explicativo = justifica; não confundir com o sentido temporal de 'por fim'.",
      erroComum: "Atribuir a 'afinal' valor adversativo ou puramente temporal.",
      comoBancaPensa: "Item de fixação sobre polissemia de conectivos comuns."
    }
  },
  {
    id: "PT-028", disciplina: "Língua Portuguesa", assunto: "Regência nominal", subassunto: "Substantivo abstrato + preposição",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.7,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "No trecho \"idoneidade da prova\" (segundo parágrafo), o substantivo \"idoneidade\" rege-se pela preposição \"a\", e não \"de\", de modo que a combinação \"da prova\" configura um desvio de regência nominal em relação à norma-padrão.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "idoneidade ... preposição 'a' ... desvio de regência",
    cognitivo: {
      motivo: "Cobrar a regência nominal correta do substantivo 'idoneidade'.",
      palavraCritica: "desvio de regência",
    },
    comentario: {
      resolucao: "ERRADO. O substantivo 'idoneidade' rege-se corretamente pela preposição 'de' ('idoneidade de algo'), como empregado no texto ('idoneidade da prova' = idoneidade + de + a prova). Não existe, na norma-padrão, exigência de regência pela preposição 'a' para esse substantivo — a afirmação cria uma exigência inexistente.",
      fundamento: "Gramática — regência nominal.",
      macete: "Idoneidade DE (algo/alguém) — regência consagrada, sem variação.",
      erroComum: "Aceitar uma regra de regência fabricada sem verificar o uso padrão real.",
      comoBancaPensa: "Cria uma exigência gramatical que não existe, testando se o candidato a aceita sem questionar."
    }
  },
  {
    id: "PT-029", disciplina: "Língua Portuguesa", assunto: "Sintaxe", subassunto: "Oração reduzida de gerúndio",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.7,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "A oração reduzida \"registrando cada etapa em formulários específicos\" (segundo parágrafo) expressa circunstância concessiva em relação à oração principal, equivalendo a \"embora registrem cada etapa em formulários específicos\".",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "registrando ... concessiva",
    cognitivo: {
      motivo: "Cobrar o valor circunstancial correto de orações reduzidas de gerúndio.",
      palavraCritica: "concessiva",
    },
    comentario: {
      resolucao: "ERRADO. A oração reduzida de gerúndio expressa circunstância de MODO (indica como os peritos cumprem a disciplina metodológica), e não concessão — não há, no trecho, qualquer ideia de contraste ou oposição que justificasse a equivalência com 'embora registrem'.",
      fundamento: "Gramática — orações reduzidas (valores circunstanciais do gerúndio).",
      macete: "Gerúndio descrevendo 'como' a ação principal se realiza = modo.",
      erroComum: "Atribuir valor concessivo a qualquer oração reduzida de gerúndio, independentemente do contexto.",
      comoBancaPensa: "Testa a real compreensão do valor circunstancial, não apenas o reconhecimento da forma verbal."
    }
  },
  {
    id: "PT-030", disciplina: "Língua Portuguesa", assunto: "Pontuação", subassunto: "Vírgula (aposto explicativo)",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.72,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "No primeiro parágrafo, as vírgulas que isolam \"ou seja, o conjunto de procedimentos que garante a rastreabilidade de um vestígio desde a sua coleta até o descarte final\" cumprem a função de isolar um aposto explicativo que retoma e define o termo antecedente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vírgulas ... aposto explicativo",
    cognitivo: {
      motivo: "Cobrar a função das vírgulas na construção de apostos explicativos.",
      palavraCritica: "aposto explicativo",
    },
    comentario: {
      resolucao: "CERTO. As vírgulas isolam corretamente um aposto explicativo, introduzido pela expressão 'ou seja', que retoma e define o termo 'cadeia de custódia' mencionado anteriormente.",
      fundamento: "Gramática — pontuação (vírgula em aposto explicativo).",
      macete: "Vírgula antes e depois de 'ou seja' = sinal de aposto explicativo.",
      erroComum: "Não identificar a estrutura apositiva isolada por vírgulas.",
      comoBancaPensa: "Item de fixação sobre a função sintática da pontuação."
    }
  },
  {
    id: "PT-031", disciplina: "Língua Portuguesa", assunto: "Sintaxe", subassunto: "Voz passiva sintética",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "Em \"abre-se margem para que a defesa questione a idoneidade da prova\" (segundo parágrafo), o pronome \"se\" indica sujeito indeterminado, uma vez que o verbo \"abrir\" tem, nesse contexto, valor intransitivo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "abre-se margem ... sujeito indeterminado",
    cognitivo: {
      motivo: "Cobrar a distinção entre voz passiva sintética e indeterminação do sujeito.",
      palavraCritica: "sujeito indeterminado",
    },
    comentario: {
      resolucao: "ERRADO. Trata-se de voz passiva sintética (pronome apassivador 'se'), e não de indeterminação do sujeito: o verbo 'abrir' é transitivo direto ('abrir margem'), e 'margem' funciona como sujeito paciente, concordando corretamente no singular com 'abre-se'.",
      fundamento: "Gramática — funções do 'se' (voz passiva sintética × indeterminação do sujeito).",
      macete: "Se o substantivo após o 'se' concorda em número com o verbo, é voz passiva sintética — não indeterminação.",
      erroComum: "Classificar toda construção com 'se' e verbo intransitivo aparente como indeterminação do sujeito.",
      comoBancaPensa: "Testa a distinção fina entre as duas funções mais confundidas do 'se' na sintaxe portuguesa."
    }
  },
  {
    id: "PT-032", disciplina: "Língua Portuguesa", assunto: "Tipologia textual", subassunto: "Dissertativo-argumentativo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    textoApoio: TEXTO_BASE_LOTE29,
    enunciado: "Predomina no texto a tipologia dissertativo-argumentativa, evidenciada, sobretudo, pelo período final, em que o autor defende, por meio de uma justificativa lógica, a tese de que a disciplina metodológica na cena do crime é insubstituível.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dissertativo-argumentativa ... tese ... insubstituível",
    cognitivo: {
      motivo: "Cobrar a identificação da tipologia textual predominante.",
      palavraCritica: "dissertativo-argumentativa",
    },
    comentario: {
      resolucao: "CERTO. O texto é predominantemente dissertativo-argumentativo: expõe informações técnicas sobre a cadeia de custódia e defende, com justificativas explícitas ('Por essa razão', 'Afinal'), a tese de que nenhuma tecnologia substitui a disciplina metodológica na cena do crime.",
      fundamento: "Teoria da comunicação — tipologia textual (dissertação argumentativa).",
      macete: "Presença de tese + justificativas + conectivos argumentativos = dissertativo-argumentativo.",
      erroComum: "Classificar o texto como meramente expositivo/descritivo, ignorando a defesa de tese.",
      comoBancaPensa: "Item de fixação sobre reconhecimento de tipologia textual predominante."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE29);
