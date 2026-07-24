/* =====================================================================
   CEBRASPE LAB — Lote 29: LÍNGUA PORTUGUESA (expansão — texto-base autoral)
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "No primeiro parágrafo, a expressão \"ou seja\" introduz uma reformulação explicativa do termo imediatamente anterior (\"cadeia de custódia\"), retomando-o para defini-lo em termos mais acessíveis ao leitor.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ou seja ... reformulação explicativa",
    cognitivo: {
      motivo: "Cobrar o valor semântico do conectivo 'ou seja'.",
      mede: "Língua Portuguesa — coesão textual (conectivos).",
      pegadinhaDesc: "A banca pode atribuir a 'ou seja' um valor diferente (ex.: adversativo, condicional).",
      ondeErra: "Confunde conectivo explicativo com conectivo de outra natureza.",
      palavraCritica: "ou seja",
      tecnica: "'Ou seja' é conjunção explicativa clássica: retoma o termo anterior para reformulá-lo/defini-lo em linguagem mais clara, sem contradizê-lo.",
      regraMental: "'Ou seja', 'isto é', 'a saber': sempre explicativos, nunca adversativos."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "No período que inicia o segundo parágrafo, a oração \"Quando essa cadeia é rompida\" classifica-se como oração subordinada adverbial temporal, indicando o momento em que se verifica o fato expresso na oração principal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Quando ... adverbial temporal",
    cognitivo: {
      motivo: "Cobrar a classificação de orações subordinadas adverbiais.",
      mede: "Língua Portuguesa — sintaxe do período composto.",
      pegadinhaDesc: "A banca pode trocar 'temporal' por 'condicional' ou 'causal'.",
      ondeErra: "Confunde 'quando' temporal com 'se' condicional.",
      palavraCritica: "Quando",
      tecnica: "'Quando' introduzindo uma oração que situa no tempo o fato da oração principal é conjunção subordinativa adverbial TEMPORAL.",
      regraMental: "'Quando' = tempo. 'Se' = condição. 'Porque' = causa."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "No trecho \"para que a defesa questione a idoneidade da prova\", o verbo \"questionar\" exige complemento regido de preposição, classificando-se como transitivo indireto.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "questione a idoneidade ... transitivo indireto",
    cognitivo: {
      motivo: "Cobrar a regência correta do verbo 'questionar'.",
      mede: "Língua Portuguesa — regência verbal.",
      pegadinhaDesc: "A banca classifica erroneamente um VTD como VTI.",
      ondeErra: "Aceita a classificação errada sem verificar se há preposição antes do complemento.",
      palavraCritica: "transitivo indireto",
      tecnica: "'Questionar algo' é verbo transitivo DIRETO — o complemento 'a idoneidade da prova' vem sem preposição exigida pelo verbo, confirmando a transitividade direta.",
      regraMental: "Sem preposição exigida pelo verbo = transitivo direto."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "O acento indicativo de crase em \"devem sujeitar-se à disciplina metodológica\" (segundo parágrafo) justifica-se pela regência do verbo pronominal \"sujeitar-se\", que exige a preposição \"a\", combinada com o artigo feminino que precede o substantivo \"disciplina\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sujeitar-se à disciplina ... regência + artigo feminino",
    cognitivo: {
      motivo: "Cobrar a justificativa correta do uso da crase.",
      mede: "Língua Portuguesa — crase (fusão de preposição + artigo).",
      pegadinhaDesc: "A banca pode negar a necessidade da crase ou atribuir motivo errado.",
      ondeErra: "Não reconhece a regência de 'sujeitar-se a' como exigência de preposição.",
      palavraCritica: "à disciplina",
      tecnica: "'Sujeitar-se A algo' exige a preposição 'a'; como 'disciplina' é substantivo feminino antecedido de artigo 'a', ocorre a fusão preposição+artigo = crase (à).",
      regraMental: "Crase = preposição 'a' (exigida pelo termo regente) + artigo feminino 'a' do termo regido."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.7,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "No terceiro parágrafo, o verbo \"substitui\", em \"nenhuma inovação substitui a disciplina metodológica\", deveria flexionar-se no plural (\"substituem\"), uma vez que seu sujeito é composto pelos elementos \"tecnologia\" e \"inovação\", ambos mencionados no período.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sujeito composto ... substituem",
    cognitivo: {
      motivo: "Cobrar a identificação correta do sujeito gramatical.",
      mede: "Língua Portuguesa — concordância verbal.",
      pegadinhaDesc: "A banca inventa um sujeito composto que não existe na oração analisada.",
      ondeErra: "Confunde termos mencionados no período com o sujeito real da oração específica.",
      palavraCritica: "sujeito composto",
      tecnica: "O sujeito da oração 'nenhuma inovação substitui a disciplina metodológica' é apenas 'nenhuma inovação' (sujeito simples, singular); 'tecnologia' pertence a outra oração do período. Verbo no singular está correto.",
      regraMental: "Sujeito é sempre da oração específica, não de todo o período."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.72,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "No trecho \"— a exemplo dos exames de DNA e das ferramentas de análise digital —\", o par de travessões isola um aposto que contém informação essencial à compreensão do período, razão pela qual sua supressão comprometeria a estrutura sintática da frase.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "informação essencial ... comprometeria",
    cognitivo: {
      motivo: "Cobrar a distinção entre informação acessória (exemplificativa) e essencial.",
      mede: "Língua Portuguesa — pontuação (travessão, aposto).",
      pegadinhaDesc: "A banca classifica como 'essencial' um aposto meramente exemplificativo e acessório.",
      ondeErra: "Não percebe que exemplos introduzidos por 'a exemplo de' são sempre acessórios, nunca essenciais à estrutura sintática.",
      palavraCritica: "informação essencial ... comprometeria",
      tecnica: "O trecho isolado por travessões é um aposto explicativo/exemplificativo (introduzido por 'a exemplo de'): pode ser suprimido sem prejuízo à estrutura sintática do período, embora se perca a exemplificação.",
      regraMental: "Aposto entre travessões: normalmente acessório e suprimível sintaticamente, ainda que relevante semanticamente."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.72,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "O vocábulo \"Afinal\", que inicia o período final do texto, introduz uma justificativa para a afirmação anterior, apresentando valor semântico conclusivo/explicativo no contexto em que ocorre.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Afinal ... justificativa ... conclusivo/explicativo",
    cognitivo: {
      motivo: "Cobrar o valor semântico do advérbio/conectivo 'afinal'.",
      mede: "Língua Portuguesa — coesão textual (conectivos).",
      pegadinhaDesc: "A banca pode atribuir a 'afinal' um valor adversativo ou temporal.",
      ondeErra: "Confunde 'afinal' explicativo/conclusivo com 'afinal' de sentido temporal ('por fim').",
      palavraCritica: "Afinal",
      tecnica: "No contexto, 'Afinal' introduz a razão/justificativa do que foi dito antes ('nenhuma inovação substitui a disciplina metodológica'), funcionando com valor explicativo-conclusivo equivalente a 'pois', 'com efeito'.",
      regraMental: "'Afinal' explicativo = justifica o que foi dito; diferente de 'afinal' temporal ('por fim, ao final')."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.7,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "No trecho \"idoneidade da prova\" (segundo parágrafo), o substantivo \"idoneidade\" rege-se pela preposição \"a\", e não \"de\", de modo que a combinação \"da prova\" configura um desvio de regência nominal em relação à norma-padrão.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "idoneidade ... preposição 'a' ... desvio de regência",
    cognitivo: {
      motivo: "Cobrar a regência nominal correta do substantivo 'idoneidade'.",
      mede: "Língua Portuguesa — regência nominal.",
      pegadinhaDesc: "A banca inventa uma exigência de regência que não existe na norma-padrão.",
      ondeErra: "Aceita uma regra de regência fabricada sem confrontá-la com o uso padrão da língua.",
      palavraCritica: "desvio de regência",
      tecnica: "'Idoneidade DE algo/alguém' é a regência consagrada na norma-padrão (ex.: 'idoneidade do candidato', 'idoneidade da prova'). Não há exigência de preposição 'a' para esse substantivo.",
      regraMental: "Antes de apontar 'erro de regência', confirme a regra real — não presuma exigências inexistentes."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.7,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "A oração reduzida \"registrando cada etapa em formulários específicos\" (segundo parágrafo) expressa circunstância concessiva em relação à oração principal, equivalendo a \"embora registrem cada etapa em formulários específicos\".",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "registrando ... concessiva",
    cognitivo: {
      motivo: "Cobrar o valor circunstancial correto de orações reduzidas de gerúndio.",
      mede: "Língua Portuguesa — sintaxe (orações reduzidas).",
      pegadinhaDesc: "A banca atribui valor concessivo a um gerúndio que expressa modo/meio.",
      ondeErra: "Não distingue o valor de modo (ação simultânea que caracteriza COMO se sujeita à disciplina) do valor concessivo (contraste/oposição).",
      palavraCritica: "concessiva",
      tecnica: "O gerúndio 'registrando...' expressa o MODO pelo qual os peritos se sujeitam à disciplina metodológica — não há qualquer contraste ou oposição que justifique valor concessivo.",
      regraMental: "Gerúndio expressando 'como se faz algo' = modo, não concessão (que exigiria contraste, como 'embora')."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.72,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "No primeiro parágrafo, as vírgulas que isolam \"ou seja, o conjunto de procedimentos que garante a rastreabilidade de um vestígio desde a sua coleta até o descarte final\" cumprem a função de isolar um aposto explicativo que retoma e define o termo antecedente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vírgulas ... aposto explicativo",
    cognitivo: {
      motivo: "Cobrar a função das vírgulas na construção de apostos explicativos.",
      mede: "Língua Portuguesa — pontuação (vírgula).",
      pegadinhaDesc: "A banca pode negar a função apositiva ou atribuir outra função à pontuação.",
      ondeErra: "Não reconhece a estrutura apositiva introduzida por 'ou seja' entre vírgulas.",
      palavraCritica: "aposto explicativo",
      tecnica: "As vírgulas isolam um aposto explicativo introduzido por 'ou seja', que retoma 'cadeia de custódia' para defini-la — função clássica de pontuação apositiva.",
      regraMental: "Vírgulas + 'ou seja'/'isto é' = aposto explicativo isolado."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "Em \"abre-se margem para que a defesa questione a idoneidade da prova\" (segundo parágrafo), o pronome \"se\" indica sujeito indeterminado, uma vez que o verbo \"abrir\" tem, nesse contexto, valor intransitivo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "abre-se margem ... sujeito indeterminado",
    cognitivo: {
      motivo: "Cobrar a distinção entre voz passiva sintética e indeterminação do sujeito.",
      mede: "Língua Portuguesa — sintaxe (funções do 'se').",
      pegadinhaDesc: "A banca classifica como indeterminação do sujeito uma construção de voz passiva sintética.",
      ondeErra: "Não percebe que 'abrir margem' é verbo transitivo direto, com 'margem' funcionando como sujeito paciente concordando com o verbo.",
      palavraCritica: "sujeito indeterminado",
      tecnica: "'Abrir margem' é locução verbal transitiva direta; na construção 'abre-se margem', 'margem' é sujeito paciente (concordando no singular com 'abre-se'), caracterizando voz passiva SINTÉTICA (pronome apassivador), não indeterminação do sujeito.",
      regraMental: "Verbo transitivo direto + se + substantivo concordando com o verbo = voz passiva sintética, não indeterminação."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: perícia e cadeia de custódia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    textoBase: TEXTO_BASE_LOTE29,
    enunciado: "Predomina no texto a tipologia dissertativo-argumentativa, evidenciada, sobretudo, pelo período final, em que o autor defende, por meio de uma justificativa lógica, a tese de que a disciplina metodológica na cena do crime é insubstituível.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dissertativo-argumentativa ... tese ... insubstituível",
    cognitivo: {
      motivo: "Cobrar a identificação da tipologia textual predominante.",
      mede: "Língua Portuguesa — tipologia textual.",
      pegadinhaDesc: "A banca pode classificar o texto como puramente narrativo ou descritivo.",
      ondeErra: "Não reconhece os elementos argumentativos (defesa de tese, justificativas) presentes no texto.",
      palavraCritica: "dissertativo-argumentativa",
      tecnica: "O texto expõe informações técnicas e defende uma tese central (a insubstituibilidade da disciplina metodológica), com justificativas encadeadas ('Por essa razão...', 'Afinal...') — características do texto dissertativo-argumentativo.",
      regraMental: "Defesa de tese + justificativas encadeadas = dissertativo-argumentativo."
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

/* Frequência de temas — Língua Portuguesa (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Língua Portuguesa");
  if (!d) { d = { disciplina: "Língua Portuguesa", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Regência verbal e nominal (texto-base)", freq: 80, tendencia: "alta", prob: 0.82 },
    { tema: "Crase e concordância em texto-base", freq: 78, tendencia: "alta", prob: 0.8 },
    { tema: "Coesão textual (conectivos) e pontuação", freq: 76, tendencia: "alta", prob: 0.78 },
    { tema: "Tipologia textual e voz verbal", freq: 72, tendencia: "estavel", prob: 0.74 },
  );
})();
