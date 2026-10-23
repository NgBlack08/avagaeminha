/* =====================================================================
   QUESTLAB — Lote 101: PROCESSO PENAL, QAPs DO CURSO DSO
   (Juliano Yamakawa — módulos 00, 11 e 14)

   ORIGEM E MÉTODO: os mesmos do lote 100 — enunciado e gabarito do
   material, gabarito lido direto do texto extraído e conferido contra o
   relatório do curso; comentário escrito do zero contra o CPP, a CF, as
   leis especiais e as teses citadas.

   CONTAGEM
     55 itens nos cadernos de Processo Penal
     -10 repetições internas
     -5  já estavam no banco com o mesmo texto: PP-074, PP-078, PP-081 (inéditas
         do QuestLab com redação igual à do item real) e PP-111, PP-112
     = 40 itens novos, PP-116 a PP-155. Os cinco últimos (PP-151 a 155)
       entraram depois: eram itens reais parecidos com inéditas do banco
       (PP-071, 077, 079, 080 e 073), mas não o mesmo item.

   Nenhuma divergência de gabarito encontrada contra o CPP vigente.
   Atenção a dois pontos de vigência que os comentários tratam: a vedação da
   prisão preventiva de ofício (Lei 13.964/2019, arts. 282, § 2º, e 311) e
   a regra do art. 310, § 2º (organização criminosa armada e liberdade
   provisória).
   ===================================================================== */

const BASE101 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Processo Penal",
};

const QUESTOES_PCAL_LOTE101 = [

  /* ===== LEI PROCESSUAL NO TEMPO ===== */

  {
    ...BASE101,
    id: "PP-116", assunto: "Disposições preliminares",
    subassunto: "Lei processual nova e decisões anteriores",
    origem: "CESPE / CEBRASPE - 2021 - DEPEN - Agente Federal de Execução Penal — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "No curso de determinada ação penal, foi sancionada lei que cria recurso exclusivo para defesa. Nessa situação, a nova lei poderá atingir decisões proferidas anteriormente na referida ação penal, em razão do princípio da retroatividade da lei mais benéfica.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "em razão do princípio da retroatividade da lei mais benéfica",
    cognitivo: {
      motivo: "Separar a lei processual pura (aplicação imediata) da lei penal benéfica (retroativa).",
      palavraCritica: "retroatividade",
    },
    comentario: {
      resolucao: "ERRADO. Norma que cria recurso é norma processual, e a lei processual penal segue o art. 2º do CPP: aplica-se desde logo, sem prejuízo da validade dos atos realizados sob a vigência da lei anterior (tempus regit actum). A retroatividade benéfica do art. 5º, XL, da CF é da lei PENAL. O recurso novo vale para as decisões proferidas depois da vigência da lei; as anteriores continuam regidas pela lei do tempo em que foram proferidas — inclusive quanto aos recursos cabíveis contra elas.",
      fundamento: "CPP, art. 2º; CF, art. 5º, XL.",
      macete: "Lei processual: daqui para frente. Lei penal benéfica: para trás também.",
      erroComum: "Aplicar a retroatividade benéfica a toda lei que favorece a defesa.",
      comoBancaPensa: "Usa o rótulo correto de um princípio de direito penal num caso de direito processual.",
    },
  },

  {
    ...BASE101,
    id: "PP-117", assunto: "Disposições preliminares",
    subassunto: "Interpretação extensiva e analogia — art. 3º do CPP",
    origem: "CESPE / CEBRASPE - 2023 - PO-AL - Auxiliar de Perícia — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "A lei processual penal não admite interpretação extensiva e aplicação analógica.",
    gabarito: "E",
    pegadinha: "literalidade",
    palavraChave: "não admite",
    cognitivo: {
      motivo: "Lembrar que a vedação da analogia in malam partem é do direito penal, não do processual.",
      palavraCritica: "não admite",
    },
    comentario: {
      resolucao: "ERRADO. O art. 3º do CPP diz o contrário: 'a lei processual penal admitirá interpretação extensiva e aplicação analógica, bem como o suplemento dos princípios gerais de direito'. A proibição de analogia prejudicial ao réu vale para a lei PENAL (CP, art. 1º), não para a processual.",
      fundamento: "CPP, art. 3º.",
      macete: "CPP aceita analogia; CP não aceita contra o réu.",
      erroComum: "Transportar a legalidade estrita penal para o processo.",
      comoBancaPensa: "Nega o texto do art. 3º com uma única palavra.",
    },
  },

  /* ===== PRINCÍPIOS CONSTITUCIONAIS ===== */

  {
    ...BASE101,
    concurso: "PCAL", ano: 2021,
    id: "PP-118", assunto: "Princípios constitucionais do processo penal",
    subassunto: "Presunção de inocência e maus antecedentes — Súmula 444 do STJ",
    origem: "CEBRASPE PC-AL 2021 (Agente, prova anulada) — caderno: CESPE / CEBRASPE - 2021 - PC-AL - Agente de Polícia - Prova Anulada — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Fere o princípio constitucional da não culpabilidade a definição de maus antecedentes na aplicação da pena, se feita com base em outros processos criminais em curso.",
    gabarito: "C",
    pegadinha: "juris-mais-lei",
    palavraChave: "processos criminais em curso",
    cognitivo: {
      motivo: "Aplicar a presunção de inocência à dosimetria da pena.",
      palavraCritica: "em curso",
    },
    comentario: {
      resolucao: "CERTO. Pela Súmula 444 do STJ, 'é vedada a utilização de inquéritos policiais e ações penais em curso para agravar a pena-base'. Processo em curso não é condenação definitiva; usá-lo como mau antecedente seria tratar o réu como culpado antes do trânsito em julgado, o que a CF proíbe (art. 5º, LVII). O STF tem a mesma orientação, em repercussão geral (RE 591.054).",
      fundamento: "CF, art. 5º, LVII; STJ, Súmula 444; STF, RE 591.054.",
      macete: "Mau antecedente só com condenação transitada.",
      erroComum: "Achar que vários processos abertos já demonstram personalidade voltada ao crime.",
      comoBancaPensa: "Item de súmula aplicado a um princípio constitucional.",
    },
  },

  {
    ...BASE101,
    id: "PP-119", assunto: "Princípios constitucionais do processo penal",
    subassunto: "Publicidade — restrições legais",
    origem: "CESPE - 2018 - STM - Analista Judiciário - Área Judiciária — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "A lei não poderá restringir a divulgação de nenhum ato processual penal, sob pena de ferir o princípio da publicidade.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "nenhum ato processual",
    cognitivo: {
      motivo: "Lembrar que a própria CF autoriza a lei a restringir a publicidade.",
      palavraCritica: "nenhum",
    },
    comentario: {
      resolucao: "ERRADO. O art. 5º, LX, da CF diz que a lei só poderá restringir a publicidade dos atos processuais quando a defesa da intimidade ou o interesse social o exigirem — ou seja, admite restrição legal. O art. 93, IX, repete a ideia, e o CPP prevê sigilo, por exemplo, no art. 792, § 1º, e no art. 201, § 6º (proteção da vítima). A publicidade é a regra, não um valor absoluto.",
      fundamento: "CF, arts. 5º, LX, e 93, IX; CPP, arts. 201, § 6º, e 792, § 1º.",
      macete: "Publicidade é regra; intimidade e interesse social são as exceções.",
      erroComum: "Tratar princípio constitucional como absoluto.",
      comoBancaPensa: "Termo absoluto que, aqui, é mesmo o sinal do erro: a CF prevê a exceção.",
    },
  },

  {
    ...BASE101,
    id: "PP-120", assunto: "Princípios constitucionais do processo penal",
    subassunto: "Não autoincriminação no inquérito",
    origem: "CESPE / CEBRASPE - 2025 - MPE-CE - Técnico Ministerial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 110,
    enunciado: "Em um bloquinho de carnaval, Heitor agrediu Carlos, mediante o uso de um canivete, depois de ter se sentido provocado com um empurrão. O ferimento, embora tenha causado significativo sangramento no momento da agressão, foi um corte superficial no braço esquerdo e se curou em menos de 30 dias, de modo que Carlos decidiu não se dirigir à delegacia para a realização de exame de corpo de delito nem noticiar, naquele momento, à polícia o fato. Depois de três meses do ocorrido, Heitor o ameaçou de nova agressão, o que motivou Carlos a finalmente ir à delegacia representar contra seu algoz, tendo ele relatado tanto a ameaça quanto a lesão corporal que havia sofrido no bloquinho de carnaval. Intimado a comparecer à delegacia na semana seguinte, Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular, sem ter obtido consentimento para acesso ao conteúdo do dispositivo. Nessa situação, no curso das investigações policiais, dada a natureza administrativa e não judicial, mitigam-se os princípios constitucionais da presunção de inocência e da não autoincriminação, de forma que o delegado pode, por exemplo, exigir do agente a colaboração em reconhecimento de pessoas e na cessão de senha para desbloqueio de aparelho celular.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "mitigam-se os princípios constitucionais",
    cognitivo: {
      motivo: "Saber que as garantias do investigado valem desde o inquérito.",
      palavraCritica: "exigir do agente a colaboração",
    },
    comentario: {
      resolucao: "ERRADO. O inquérito é procedimento administrativo e inquisitivo, mas isso não suspende as garantias constitucionais do investigado. Ninguém é obrigado a produzir prova contra si mesmo (CF, art. 5º, LXIII; CADH, art. 8º, 2, 'g'): o investigado pode recusar-se a participar ativamente de atos de prova, como fornecer a senha do celular. O acesso ao conteúdo do aparelho apreendido depende de consentimento ou de autorização judicial. No reconhecimento, ele pode ser colocado na fila (ato passivo), mas não pode ser obrigado a colaborar ativamente. O caso tem outros vícios — não havia flagrante três meses depois do fato —, mas o item cobra só as garantias.",
      fundamento: "CF, art. 5º, LVII e LXIII; CADH, art. 8º, 2, 'g'; CPP, art. 226.",
      macete: "Inquisitivo não quer dizer sem garantias: o silêncio e a recusa valem desde a delegacia.",
      erroComum: "Concluir que, por não haver contraditório no inquérito, também não há direito de não se autoincriminar.",
      comoBancaPensa: "Parte de uma verdade (natureza administrativa) para chegar a uma conclusão falsa (garantias mitigadas).",
    },
  },

  /* ===== INQUÉRITO POLICIAL ===== */

  {
    ...BASE101,
    id: "PP-121", assunto: "Inquérito policial",
    subassunto: "Contraditório e ampla defesa no inquérito",
    origem: "CESPE / CEBRASPE - 2024 - Prefeitura de Cachoeiro de Itapemirim - ES - Guarda Municipal — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "O princípio da ampla defesa e do contraditório é amplamente aplicável ao inquérito policial, uma vez que este é procedimento meramente administrativo.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "amplamente aplicável",
    cognitivo: {
      motivo: "Fixar que o inquérito é inquisitivo e que o contraditório pleno é do processo.",
      palavraCritica: "amplamente aplicável",
    },
    comentario: {
      resolucao: "ERRADO. O inquérito policial é procedimento administrativo, inquisitivo e preparatório: nele não há acusação formal nem partes, e por isso não incidem o contraditório e a ampla defesa em sua plenitude (CF, art. 5º, LV, fala em 'processo judicial ou administrativo' e em 'acusados'). O investigado tem direitos — silêncio, assistência de advogado, acesso aos elementos já documentados (Súmula Vinculante 14) —, mas a autoridade conduz a investigação sem precisar ouvi-lo antes de cada diligência. O item, além disso, usa a natureza administrativa como razão da aplicação, quando ela é justamente a razão da mitigação.",
      fundamento: "CF, art. 5º, LV; CPP, arts. 14 e 20; STF, Súmula Vinculante 14.",
      macete: "Inquérito: inquisitivo. Contraditório pleno: só no processo.",
      erroComum: "Confundir os direitos do investigado com contraditório pleno.",
      comoBancaPensa: "A justificativa ('meramente administrativo') leva à conclusão oposta à do item.",
    },
  },

  {
    ...BASE101,
    id: "PP-122", assunto: "Inquérito policial",
    subassunto: "Indisponibilidade do inquérito — art. 17",
    origem: "CESPE / CEBRASPE - 2024 - Prefeitura de Cachoeiro de Itapemirim - ES - Guarda Municipal — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "Uma das principais características do inquérito policial é a sua indisponibilidade, não podendo a autoridade policial proceder ao seu arquivamento, ainda que o fato apurado não configure crime.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "não podendo a autoridade policial proceder ao seu arquivamento",
    cognitivo: {
      motivo: "Lembrar quem pode arquivar o inquérito e quem não pode.",
      palavraCritica: "indisponibilidade",
    },
    comentario: {
      resolucao: "CERTO. Pelo art. 17 do CPP, a autoridade policial não poderá mandar arquivar autos de inquérito. Mesmo convencido de que o fato é atípico, o delegado conclui as investigações e relata; a decisão de arquivar é do Ministério Público, com a sistemática do art. 28 (na redação dada pela Lei 13.964/2019 e interpretada pelo STF nas ADIs 6.298 e outras, com controle judicial).",
      fundamento: "CPP, arts. 17 e 28.",
      macete: "Delegado instaura, investiga e relata. Arquivar, nunca.",
      erroComum: "Achar que a atipicidade evidente autoriza o delegado a arquivar.",
      comoBancaPensa: "Literalidade do art. 17 com um reforço ('ainda que') que parece exagero.",
    },
  },

  {
    ...BASE101,
    id: "PP-123", assunto: "Inquérito policial",
    subassunto: "Requerimento de diligências pelo indiciado — art. 14",
    origem: "CESPE / CEBRASPE - 2024 - Prefeitura de Cachoeiro de Itapemirim - ES - Procurador — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 60,
    enunciado: "Delegacia de polícia do município X recebeu denúncia anônima de possível desvio de verbas públicas por servidores públicos municipais que estariam envolvidos em esquema de corrupção para desviar, para benefício pessoal, fundos destinados a projetos de infraestrutura. Nessa situação, no curso do inquérito policial, os indiciados poderão requerer qualquer diligência, que será realizada, ou não, a juízo da autoridade.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "a juízo da autoridade",
    cognitivo: {
      motivo: "Reconhecer a discricionariedade do delegado para atender requerimentos.",
      palavraCritica: "a juízo da autoridade",
    },
    comentario: {
      resolucao: "CERTO. É a redação do art. 14 do CPP: 'o ofendido, ou seu representante legal, e o indiciado poderão requerer qualquer diligência, que será realizada, ou não, a juízo da autoridade'. A exceção é o exame de corpo de delito, que não pode ser negado quando a infração deixar vestígios (art. 158 c/c art. 184).",
      fundamento: "CPP, arts. 14, 158 e 184.",
      macete: "Pedir pode; fazer é decisão do delegado — salvo corpo de delito.",
      erroComum: "Achar que o requerimento do indiciado obriga a autoridade.",
      comoBancaPensa: "Literalidade do art. 14 dentro de um caso que desvia a atenção para a denúncia anônima.",
    },
  },

  {
    ...BASE101,
    id: "PP-124", assunto: "Inquérito policial",
    subassunto: "Denúncia anônima — diligências preliminares",
    origem: "CESPE / CEBRASPE - 2024 - Prefeitura de Cachoeiro de Itapemirim - ES - Procurador — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Delegacia de polícia do município X recebeu denúncia anônima de possível desvio de verbas públicas por servidores públicos municipais que estariam envolvidos em esquema de corrupção para desviar, para benefício pessoal, fundos destinados a projetos de infraestrutura. Nessa situação, a autoridade policial deverá realizar diligências preliminares para averiguação da denúncia anônima, antes de instaurar o inquérito policial.",
    gabarito: "C",
    pegadinha: "juris-mais-lei",
    palavraChave: "diligências preliminares",
    cognitivo: {
      motivo: "Aplicar a orientação do STF sobre a notícia anônima de crime.",
      palavraCritica: "antes de instaurar",
    },
    comentario: {
      resolucao: "CERTO. O STF e o STJ entendem que a denúncia anônima, sozinha, não autoriza a instauração de inquérito nem medidas invasivas. A autoridade deve antes fazer diligências preliminares para verificar a procedência das informações (VPI) e, só se elas trouxerem elementos idôneos, instaurar o inquérito. É a aplicação do art. 5º, § 3º, do CPP ('verificada a procedência das informações') à notícia apócrifa, conciliando o dever de investigar com a vedação do anonimato (CF, art. 5º, IV).",
      fundamento: "CPP, art. 5º, § 3º; CF, art. 5º, IV; STF, HC 84.827 e Inq 1.957.",
      macete: "Denúncia anônima: primeiro confere, depois instaura.",
      erroComum: "Instaurar o inquérito com base apenas no anonimato, ou desprezar a notícia por completo.",
      comoBancaPensa: "Tese jurisprudencial consolidada cobrada num caso de rotina.",
    },
  },

  {
    ...BASE101,
    id: "PP-125", assunto: "Inquérito policial",
    subassunto: "Arquivamento por atipicidade — coisa julgada material",
    origem: "CESPE / CEBRASPE - 2023 - PO-AL - Papiloscopista — QAP DSO (Direitos), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Quanto ao inquérito policial e à ação penal, o arquivamento do inquérito policial por atipicidade da conduta faz coisa julgada formal, o que permite a reabertura de investigações pela autoridade policial em determinadas situações.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "coisa julgada formal",
    cognitivo: {
      motivo: "Saber quais fundamentos de arquivamento fazem coisa julgada material.",
      palavraCritica: "formal",
    },
    comentario: {
      resolucao: "ERRADO. Em regra, o arquivamento por falta de provas faz só coisa julgada formal: surgindo provas novas, as investigações podem ser retomadas (CPP, art. 18; Súmula 524 do STF). Mas o arquivamento fundado em ATIPICIDADE da conduta — ou em extinção da punibilidade — examina o mérito e faz COISA JULGADA MATERIAL, impedindo nova investigação sobre o mesmo fato (STF, HC 84.156; Inq 2.004). A exceção conhecida é a da certidão de óbito falsa.",
      fundamento: "CPP, art. 18; STF, Súmula 524; STF, HC 84.156.",
      macete: "Faltou prova: formal, pode reabrir. Fato atípico: material, não reabre.",
      erroComum: "Aplicar o art. 18 a qualquer fundamento de arquivamento.",
      comoBancaPensa: "Troca 'material' por 'formal' e acrescenta a consequência que só vale para a formal.",
    },
  },

  {
    ...BASE101,
    concurso: "PF", ano: 2025,
    id: "PP-126", assunto: "Inquérito policial",
    subassunto: "Delatio criminis — dever de instaurar",
    origem: "CEBRASPE PF 2025 (Agente) — caderno: CESPE / CEBRASPE - 2025 - Polícia Federal - Agente de Polícia Federal — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "A autoridade policial deve instaurar inquérito policial sempre que qualquer pessoa do povo comunicar, verbalmente ou por escrito, a ocorrência de uma infração penal, independentemente da natureza da ação penal ou da verificação da procedência das informações.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "independentemente da natureza da ação penal",
    cognitivo: {
      motivo: "Lembrar os dois limites do art. 5º, § 3º: só ação pública incondicionada, e depois de verificada a procedência.",
      palavraCritica: "independentemente",
    },
    comentario: {
      resolucao: "ERRADO. O art. 5º, § 3º, do CPP diz que qualquer pessoa do povo que tiver conhecimento de infração penal EM QUE CAIBA AÇÃO PÚBLICA poderá comunicá-la à autoridade policial, que, VERIFICADA A PROCEDÊNCIA DAS INFORMAÇÕES, mandará instaurar inquérito. Nos crimes de ação pública condicionada, o inquérito depende de representação (§ 4º); nos de ação privada, de requerimento de quem tenha qualidade para intentá-la (§ 5º). O item ignora as duas limitações.",
      fundamento: "CPP, art. 5º, §§ 3º, 4º e 5º.",
      macete: "Delatio de qualquer um: só ação pública incondicionada, e com verificação prévia.",
      erroComum: "Achar que toda comunicação de crime obriga a instaurar inquérito.",
      comoBancaPensa: "Generaliza com duas cláusulas de 'independentemente', cada uma contrariando um parágrafo.",
    },
  },

  {
    ...BASE101,
    id: "PP-127", assunto: "Inquérito policial",
    subassunto: "Inquérito nos crimes de ação privada",
    origem: "CESPE / CEBRASPE - 2025 - MPE-CE - Analista Ministerial - Especialidade: Direito — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "O inquérito policial é um procedimento administrativo que visa à apuração de infrações penais bem como a sua autoria, sendo conduzido pela autoridade policial, com exceção dos crimes que exigem ação penal privada.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "com exceção dos crimes que exigem ação penal privada",
    cognitivo: {
      motivo: "Lembrar que há inquérito também na ação privada, mediante requerimento.",
      palavraCritica: "com exceção",
    },
    comentario: {
      resolucao: "ERRADO. A primeira parte está certa: o inquérito é procedimento administrativo, presidido pela autoridade policial, para apurar a infração e sua autoria (CPP, art. 4º). O erro é a exceção. Nos crimes de ação penal privada também há inquérito; a diferença é que ele só pode ser instaurado a requerimento de quem tenha qualidade para intentar a ação (art. 5º, § 5º), e, concluído, os autos aguardam a iniciativa do ofendido (art. 19).",
      fundamento: "CPP, arts. 4º, 5º, § 5º, e 19.",
      macete: "Ação privada também tem inquérito: depende do requerimento da vítima.",
      erroComum: "Confundir a iniciativa da ação com a existência da investigação.",
      comoBancaPensa: "Definição correta seguida de uma exceção inventada.",
    },
  },

  {
    ...BASE101,
    concurso: "PCDF", ano: 2021,
    id: "PP-128", assunto: "Inquérito policial",
    subassunto: "Advogado no inquérito — Lei 13.245/2016",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — caderno: CESPE / CEBRASPE - 2021 - PC-DF - Escrivão de Polícia da Carreira de Polícia Civil do Distrito Federal — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 100,
    enunciado: "Odete filmou Januário, empresário famoso, em conversa com um político. Segundo Odete, no encontro filmado, Januário estaria oferecendo dinheiro ao político local em troca de vantagens indevidas em determinado processo licitatório. Sete dias após o ocorrido, ela veiculou o vídeo em suas mídias sociais. O vídeo alcançou alta projeção nos noticiários. Diante da repercussão, o político negou a propina e Januário apresentou-se espontaneamente em uma delegacia, acompanhado de seu advogado, para prestar esclarecimentos. Nessa situação, durante o inquérito policial, dada sua natureza administrativa e inquisitorial, não se garantem o contraditório e a ampla defesa, razão por que o advogado de Januário não poderá requisitar diligências ou propor perguntas ao delegado.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "não poderá requisitar diligências ou propor perguntas",
    cognitivo: {
      motivo: "Saber o que o advogado pode fazer no inquérito depois da Lei 13.245/2016.",
      palavraCritica: "não poderá",
    },
    comentario: {
      resolucao: "ERRADO. É verdade que o inquérito é inquisitivo e não tem contraditório pleno. Mas a conclusão não decorre disso. O Estatuto da OAB, art. 7º, XXI, incluído pela Lei 13.245/2016, garante ao advogado assistir seu cliente investigado durante a apuração, sob pena de nulidade do interrogatório e dos depoimentos, podendo, inclusive, APRESENTAR RAZÕES E QUESITOS. E o art. 14 do CPP permite ao indiciado requerer diligências, cabendo à autoridade decidir. O advogado pode, portanto, pedir diligências e formular perguntas; o delegado é que avalia a pertinência. ('Requisitar', em sentido técnico de ordem, de fato o advogado não pode.)",
      fundamento: "Lei 8.906/1994, art. 7º, XIV e XXI (Lei 13.245/2016); CPP, art. 14.",
      macete: "Sem contraditório pleno, mas com advogado ativo: quesitos, razões e pedidos.",
      erroComum: "Concluir pela natureza inquisitiva que o advogado é mero espectador.",
      comoBancaPensa: "Premissa verdadeira, conclusão falsa — e o verbo 'requisitar' como armadilha extra.",
    },
  },

  {
    ...BASE101,
    id: "PP-129", assunto: "Inquérito policial",
    subassunto: "Ação pública condicionada — representação",
    origem: "CESPE / CEBRASPE - 2024 - Prefeitura de Cachoeiro de Itapemirim - ES - Guarda Municipal — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 70,
    enunciado: "Um guarda municipal, em serviço de fiscalização e controle do tráfego, presenciou uma violenta discussão entre dois homens em razão de uma vaga de estacionamento. No decorrer da discussão, um deles ameaçou verbalmente o outro de morte, fazendo, ainda, gestos com as mãos, simulando uma arma de fogo. Em razão da ameaça proferida, o guarda municipal, mediante apoio da polícia militar, conduziu as partes à delegacia de polícia para as providências legais cabíveis. Sabendo que a ameaça constitui crime de ação pública condicionada, a autoridade policial poderá agir de ofício para a apuração dos fatos, buscando penalizar a conduta delituosa.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "poderá agir de ofício",
    cognitivo: {
      motivo: "Aplicar o art. 5º, § 4º: sem representação, não há inquérito.",
      palavraCritica: "de ofício",
    },
    comentario: {
      resolucao: "ERRADO. Nos crimes de ação pública condicionada à representação, como a ameaça (CP, art. 147, parágrafo único), o inquérito NÃO PODERÁ SEM ELA SER INICIADO (CPP, art. 5º, § 4º). A autoridade não age de ofício: depende da manifestação de vontade da vítima. Sendo crime de menor potencial ofensivo, o procedimento será o termo circunstanciado da Lei 9.099/1995, que também exige a representação para prosseguir.",
      fundamento: "CPP, art. 5º, § 4º; CP, art. 147; Lei 9.099/1995, arts. 69 e 75.",
      macete: "Condicionada: sem representação, nem inquérito.",
      erroComum: "Achar que o flagrante dispensa a representação.",
      comoBancaPensa: "O próprio comando dá a pista (ação condicionada), e o item a ignora.",
    },
  },

  {
    ...BASE101,
    id: "PP-130", assunto: "Inquérito policial",
    subassunto: "Oitiva do indiciado — duas testemunhas de leitura",
    origem: "CESPE / CEBRASPE - 2023 - PO-AL - Perito Criminal - Especialidade: Direito — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 80,
    enunciado: "Durante uma investigação de homicídio, o autor do fato foi identificado, e a autoridade policial solicitou autorização judicial para realizar a interceptação telefônica e a decretação da prisão, tendo sido a interceptação indeferida pelo juiz, que entendeu que haveria outras formas de se obter a prova. Nessa situação, o autor do fato, ao ser indiciado no inquérito policial instaurado, em procedimento sigiloso, será ouvido, e o respectivo termo será assinado por duas testemunhas que dele tenham escutado a leitura.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "duas testemunhas que dele tenham escutado a leitura",
    cognitivo: {
      motivo: "Lembrar a formalidade do art. 6º, V, do CPP.",
      palavraCritica: "duas testemunhas",
    },
    comentario: {
      resolucao: "CERTO. O art. 6º, V, do CPP manda a autoridade policial ouvir o indiciado, com observância, no que for aplicável, das regras do interrogatório judicial (arts. 185 e seguintes), 'devendo o respectivo termo ser assinado por duas testemunhas que lhe tenham ouvido a leitura'. O sigilo do inquérito (art. 20) não afasta essa formalidade.",
      fundamento: "CPP, arts. 6º, V, e 20.",
      macete: "Termo de oitiva do indiciado: duas testemunhas de leitura.",
      erroComum: "Confundir com a regra do auto de prisão em flagrante, que também usa duas testemunhas, mas em outra situação.",
      comoBancaPensa: "Literalidade de um inciso pouco lido, embutida num caso sobre interceptação.",
    },
  },

  {
    ...BASE101,
    id: "PP-131", assunto: "Inquérito policial",
    subassunto: "Instauração e prazos do inquérito — art. 10",
    origem: "CESPE / CEBRASPE - 2025 - TRF - 6ª REGIÃO - Técnico Judiciário - Área: Administrativa - Especialidade: Agente de Polícia Judicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 80,
    enunciado: "Nos crimes processados via ação pública, o inquérito policial será iniciado sempre de ofício e deverá terminar no prazo de 10 dias, se o indiciado tiver sido preso em flagrante ou estiver preso preventivamente, contado o prazo, nesta hipótese, a partir do dia em que se executar a ordem de prisão, ou no prazo de 30 dias, quando o indiciado estiver solto em razão do pagamento de fiança.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "sempre de ofício",
    cognitivo: {
      motivo: "Conferir item longo cláusula por cláusula: o prazo está certo, a forma de instauração não.",
      palavraCritica: "sempre de ofício",
    },
    comentario: {
      resolucao: "ERRADO. Os prazos estão próximos do art. 10 do CPP (10 dias com o indiciado preso, contados da execução da prisão; 30 dias quando solto, MEDIANTE FIANÇA OU SEM ELA). Mas o item erra ao dizer que, na ação pública, o inquérito é iniciado SEMPRE de ofício. O art. 5º prevê também a requisição do juiz ou do MP e o requerimento do ofendido; e, na ação pública condicionada, ele depende de representação (§ 4º). Há ainda a restrição indevida do prazo de 30 dias ao solto 'em razão do pagamento de fiança'.",
      fundamento: "CPP, arts. 5º e 10.",
      macete: "Inquérito na ação pública: de ofício, por requisição ou por requerimento.",
      erroComum: "Validar o item pelos prazos, que são a parte que se costuma memorizar.",
      comoBancaPensa: "Item longo com números corretos para dar credibilidade às duas cláusulas erradas.",
    },
  },

  {
    ...BASE101,
    id: "PP-132", assunto: "Inquérito policial",
    subassunto: "Requisição de dados cadastrais — art. 13-A",
    origem: "CESPE / CEBRASPE - 2024 - TSE - Técnico Judiciário - Área: Administrativa - Especialidade: Agente da Polícia Judicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "De acordo com o Código de Processo Penal e a jurisprudência do STF, suponha que um homem tenha sido sequestrado e que os agentes criminosos tenham entrado em contato com os familiares da vítima exigindo-lhes a entrega de alto valor em dinheiro para libertá-lo. Nessa situação, durante a investigação, o membro do Ministério Público ou o delegado poderá requerer diretamente de uma empresa de natureza privada dados cadastrais da vítima ou dos suspeitos, independentemente de autorização judicial.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "independentemente de autorização judicial",
    cognitivo: {
      motivo: "Lembrar o rol de crimes do art. 13-A e a diferença entre dados cadastrais e sigilo de comunicações.",
      palavraCritica: "dados cadastrais",
    },
    comentario: {
      resolucao: "CERTO. O art. 13-A do CPP, incluído pela Lei 13.344/2016, permite ao membro do Ministério Público ou ao delegado de polícia requisitar, de quaisquer órgãos do poder público ou de EMPRESAS DA INICIATIVA PRIVADA, dados e informações cadastrais da vítima ou de suspeitos, nos crimes dos arts. 148, 149, 149-A, 158, § 3º, e 159 do CP. A extorsão mediante sequestro (art. 159) está na lista. Dados cadastrais (nome, filiação, endereço) não são protegidos pela reserva de jurisdição; o conteúdo de comunicações e a localização por sinal de celular (art. 13-B) seguem outro regime.",
      fundamento: "CPP, arts. 13-A e 13-B (Lei 13.344/2016); CP, art. 159.",
      macete: "Sequestro, cárcere, tráfico de pessoas, extorsão com restrição de liberdade: dados cadastrais sem juiz.",
      erroComum: "Exigir ordem judicial para qualquer dado de pessoa.",
      comoBancaPensa: "Expressão forte ('independentemente de autorização judicial') que soa como erro e é a letra da lei.",
    },
  },

  {
    ...BASE101,
    id: "PP-133", assunto: "Inquérito policial",
    subassunto: "Prazo do inquérito com indiciado preso — Polícia Civil",
    origem: "CEBRASPE (CESPE) - 2022 - Analista de Apoio à Assistência Judiciária (DP DF)/Direito e Legislação — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 80,
    enunciado: "Com a prisão em flagrante do autuado, foi instaurado inquérito pela Polícia Civil do Estado do Ceará para investigar crime de ação penal pública previsto no Código Penal e punido com pena de reclusão. A vítima reconheceu o preso, e este permaneceu calado. Concluídas as diligências, o delegado elaborou o relatório final. Nessa situação, com o autuado preso, o inquérito policial deve ser concluído no prazo de quinze dias, prorrogáveis por igual período em caso de necessidade devidamente justificada.",
    gabarito: "E",
    pegadinha: "troca-numerica",
    palavraChave: "quinze dias, prorrogáveis",
    cognitivo: {
      motivo: "Separar o prazo do CPP (10 dias) do prazo da Justiça Federal (15 + 15).",
      palavraCritica: "quinze dias",
    },
    comentario: {
      resolucao: "ERRADO. O inquérito da Polícia Civil, para crime do Código Penal, segue o art. 10 do CPP: com o indiciado preso, deve terminar em 10 (DEZ) dias, contados da execução da prisão. O prazo de 15 dias prorrogáveis por mais 15 é o dos inquéritos da Polícia Federal (Lei 5.010/1966, art. 66). A prorrogação por até 15 dias pelo juiz das garantias (art. 3º-B, § 2º, do CPP) é outra hipótese, por decisão judicial, e não a regra do prazo inicial.",
      fundamento: "CPP, arts. 10 e 3º-B, § 2º; Lei 5.010/1966, art. 66.",
      macete: "Preso: 10 (CPP), 15+15 (PF), 30+30 (drogas), 10 (crimes contra a economia popular).",
      erroComum: "Aplicar o prazo da Justiça Federal a inquérito estadual.",
      comoBancaPensa: "Troca o número por outro prazo que existe — mas em outra lei.",
    },
  },

  /* ===== PRISÃO EM FLAGRANTE ===== */

  {
    ...BASE101,
    id: "PP-134", assunto: "Prisão em flagrante",
    subassunto: "Flagrante facultativo — qualquer do povo",
    origem: "CEBRASPE (CESPE) - 2025 - Analista Ministerial (MPE CE)/Direito — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "Considerando os aspectos legais previstos no Código de Processo Penal, a prisão em flagrante pode ser efetuada por qualquer pessoa do povo nas hipóteses em que a infração penal esteja acontecendo ou tenha acabado de acontecer.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "qualquer pessoa do povo",
    cognitivo: {
      motivo: "Separar o flagrante facultativo (qualquer do povo) do obrigatório (autoridades e agentes).",
      palavraCritica: "pode",
    },
    comentario: {
      resolucao: "CERTO. Pelo art. 301 do CPP, qualquer do povo PODERÁ e as autoridades policiais e seus agentes DEVERÃO prender quem quer que seja encontrado em flagrante delito. As hipóteses citadas no item — a infração 'está acontecendo' ou 'acabou de acontecer' — são o flagrante próprio do art. 302, I e II.",
      fundamento: "CPP, arts. 301 e 302, I e II.",
      macete: "Povo pode; polícia deve.",
      erroComum: "Achar que só a autoridade pode prender em flagrante.",
      comoBancaPensa: "Literalidade simples, com o verbo modal correto ('pode').",
    },
  },

  {
    ...BASE101,
    id: "PP-135", assunto: "Prisão em flagrante",
    subassunto: "Auto de prisão — recusa do preso em assinar",
    origem: "CEBRASPE (CESPE) - 2025 - Analista Judiciário (STM)/Judiciária/\"Sem Especialidade\" — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 55,
    enunciado: "Lavrado o auto de prisão em flagrante, caso o preso se recuse a assiná-lo, a autoridade policial deverá colher a assinatura de duas testemunhas que tenham ouvido a sua leitura na presença da pessoa presa.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "duas testemunhas que tenham ouvido a sua leitura",
    cognitivo: {
      motivo: "Memorizar o § 3º do art. 304.",
      palavraCritica: "duas testemunhas",
    },
    comentario: {
      resolucao: "CERTO. Art. 304, § 3º, do CPP: 'quando o acusado se recusar a assinar, não souber ou não puder fazê-lo, o auto de prisão em flagrante será assinado por duas testemunhas, que tenham ouvido sua leitura na presença deste'.",
      fundamento: "CPP, art. 304, § 3º.",
      macete: "Preso não assina: duas testemunhas de leitura.",
      erroComum: "Achar que basta a autoridade certificar a recusa.",
      comoBancaPensa: "Literalidade; a variante errada (item seguinte do mesmo tema) troca as testemunhas pela certidão da autoridade.",
    },
  },

  {
    ...BASE101,
    id: "PP-136", assunto: "Prisão em flagrante",
    subassunto: "Auto de prisão — recusa do preso em assinar (variante)",
    origem: "CESPE / CEBRASPE - 2023 - TJ-ES - Analista Judiciário - Especialidade: Comissário de Justiça da Infância e Juventude — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 55,
    enunciado: "Quando o preso se recusar a assinar ou não souber fazê-lo, o fato será consignado ao final do auto de prisão em flagrante e certificada a leitura pela autoridade policial.",
    gabarito: "E",
    pegadinha: "literalidade",
    palavraChave: "certificada a leitura pela autoridade policial",
    cognitivo: {
      motivo: "Memorizar o § 3º do art. 304 e não aceitar a certidão da autoridade no lugar das testemunhas.",
      palavraCritica: "certificada pela autoridade",
    },
    comentario: {
      resolucao: "ERRADO. O art. 304, § 3º, do CPP não se contenta com a certificação da autoridade: quando o acusado se recusar a assinar, não souber ou não puder fazê-lo, o auto será assinado por DUAS TESTEMUNHAS QUE TENHAM OUVIDO SUA LEITURA na presença dele. A exigência existe justamente porque a autoridade é quem lavra o auto; as testemunhas de leitura garantem que o preso tomou conhecimento do conteúdo.",
      fundamento: "CPP, art. 304, § 3º.",
      macete: "Preso não assina: duas testemunhas de leitura — não basta a palavra do delegado.",
      erroComum: "Aceitar a certidão da autoridade como suficiente.",
      comoBancaPensa: "Mantém a hipótese do parágrafo e troca a solução legal por outra plausível.",
    },
  },

  {
    ...BASE101,
    concurso: "PRF", ano: 2021,
    id: "PP-137", assunto: "Prisão em flagrante",
    subassunto: "Flagrante próprio e nota de culpa",
    origem: "CEBRASPE PRF 2021 (Policial Rodoviário) — caderno: CESPE / CEBRASPE - 2021 - PRF - Policial Rodoviário Federal — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 90,
    enunciado: "Durante uma abordagem em via pública, tendo suspeitado do comportamento de determinado condutor e constatado rasura na carteira nacional de habilitação (CNH) por ele apresentada, o policial rodoviário, após efetuar busca no veículo e apreender mercadoria proibida, deu-lhe voz de prisão, em razão da prática de crime de ação penal pública. Nessa situação, a situação caracteriza flagrante próprio e, em até vinte e quatro horas após a realização da prisão, deverá ser entregue a nota de culpa ao preso.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "em até vinte e quatro horas",
    cognitivo: {
      motivo: "Identificar o flagrante próprio e lembrar o prazo da nota de culpa.",
      palavraCritica: "vinte e quatro horas",
    },
    comentario: {
      resolucao: "CERTO. O condutor foi surpreendido cometendo a infração — o transporte de mercadoria proibida e o uso de documento rasurado se davam naquele momento —, o que caracteriza flagrante próprio (CPP, art. 302, I). E o art. 306, § 2º, determina que, em até 24 horas após a realização da prisão, seja entregue ao preso, mediante recibo, a nota de culpa, assinada pela autoridade, com o motivo da prisão, o nome do condutor e os das testemunhas. No mesmo prazo, o auto deve ser encaminhado ao juiz (§ 1º).",
      fundamento: "CPP, arts. 302, I, e 306, §§ 1º e 2º.",
      macete: "24 horas: auto ao juiz, cópia à Defensoria (se não houver advogado) e nota de culpa ao preso.",
      erroComum: "Confundir o prazo da nota de culpa com o da audiência de custódia.",
      comoBancaPensa: "Junta classificação do flagrante e prazo numérico no mesmo item; os dois estão corretos.",
    },
  },

  {
    ...BASE101,
    concurso: "PF", ano: 2021,
    id: "PP-138", assunto: "Prisão em flagrante",
    subassunto: "Flagrante preparado — Súmula 145 do STF",
    origem: "CEBRASPE PF 2021 (Escrivão) — caderno: CESPE / CEBRASPE - 2021 - Polícia Federal - Escrivão de Polícia Federal — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "Caracteriza-se como flagrante preparado a situação em que os policiais provocam ou induzem o cometimento do crime pelo agente.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "provocam ou induzem",
    cognitivo: {
      motivo: "Separar o flagrante preparado (ilegal) do esperado (legal).",
      palavraCritica: "provocam ou induzem",
    },
    comentario: {
      resolucao: "CERTO. No flagrante preparado (ou provocado), o agente é induzido a praticar o crime por quem, ao mesmo tempo, toma providências para que ele não se consume. Pela Súmula 145 do STF, 'não há crime, quando a preparação do flagrante pela polícia torna impossível a sua consumação' — é hipótese de crime impossível. Diferente é o flagrante esperado: a polícia apenas aguarda, sem induzir, o momento em que o crime ocorre; esse é válido.",
      fundamento: "STF, Súmula 145; CP, art. 17.",
      macete: "Preparado: a polícia cria o crime (inválido). Esperado: a polícia só espera (válido).",
      erroComum: "Tratar toda campana policial como flagrante preparado.",
      comoBancaPensa: "Definição doutrinária correta; a armadilha usual troca 'preparado' por 'esperado'.",
    },
  },

  {
    ...BASE101,
    id: "PP-139", assunto: "Prisão em flagrante",
    subassunto: "Crime praticado na presença da autoridade — art. 307",
    origem: "CESPE / CEBRASPE - 2024 - STJ - Analista Judiciário - Área: Administrativa - Especialidade: Inspetor da Polícia Judicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "No decorrer de audiência judicial criminal, o culpado praticou um crime na presença do juiz que conduzia a audiência. Nessa situação, o próprio magistrado pode, além de dar voz de prisão ao infrator, lavrar o auto de prisão em flagrante, dispensando a figura do condutor da prisão.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "dispensando a figura do condutor",
    cognitivo: {
      motivo: "Conhecer o procedimento especial do art. 307 do CPP.",
      palavraCritica: "o próprio magistrado",
    },
    comentario: {
      resolucao: "CERTO. O art. 307 do CPP trata do fato praticado em presença da autoridade, ou contra esta, no exercício de suas funções: constarão do auto a narração do fato, a voz de prisão, as declarações do preso e os depoimentos das testemunhas, tudo assinado pela autoridade, pelo preso e pelas testemunhas. A autoridade que presenciou o crime — inclusive o juiz — é ao mesmo tempo quem prende e quem lavra o auto, e por isso não há condutor. Se for o juiz, o auto será remetido ao órgão competente para o processo.",
      fundamento: "CPP, art. 307.",
      macete: "Crime diante da autoridade: ela prende e ela lavra o auto.",
      erroComum: "Achar que só o delegado pode lavrar auto de prisão em flagrante.",
      comoBancaPensa: "Testa um artigo pouco estudado com um caso que contraria a rotina.",
    },
  },

  {
    ...BASE101,
    id: "PP-140", assunto: "Prisão em flagrante",
    subassunto: "Flagrante impróprio — perseguição ininterrupta",
    origem: "CESPE / CEBRASPE - 2024 - STJ - Analista Judiciário - Área: Administrativa - Especialidade: Inspetor da Polícia Judicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "Um indivíduo foi perseguido ininterruptamente pela polícia logo após ter cometido um crime, mas foi capturado e preso somente dois dias depois da prática do delito. Nessa situação, apesar de decorridas mais de 24 horas do crime, a prisão é considerada legal.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "perseguido ininterruptamente",
    cognitivo: {
      motivo: "Desfazer o mito das 24 horas no flagrante impróprio.",
      palavraCritica: "ininterruptamente",
    },
    comentario: {
      resolucao: "CERTO. No flagrante impróprio (CPP, art. 302, III), o agente é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração. A lei não fixa limite de horas: o que importa é que a perseguição comece logo após o crime e não seja interrompida (art. 290, § 1º). Se ela dura dois dias sem solução de continuidade, a prisão ao final é em flagrante e é legal. O prazo de 24 horas, muito citado, é do encaminhamento do auto ao juiz, não da duração do flagrante.",
      fundamento: "CPP, arts. 290, § 1º, e 302, III.",
      macete: "Flagrante impróprio não tem cronômetro: tem perseguição contínua.",
      erroComum: "Achar que o flagrante 'vence' em 24 horas.",
      comoBancaPensa: "Explora um mito popular que o candidato traz de fora do texto legal.",
    },
  },

  /* ===== PRISÕES CAUTELARES ===== */

  {
    ...BASE101,
    id: "PP-141", assunto: "Prisão e medidas cautelares",
    subassunto: "Preventiva por dúvida sobre a identidade civil",
    origem: "CESPE / CEBRASPE - 2025 - TRF - 6ª REGIÃO - Técnico Judiciário - Área: Administrativa - Especialidade: Agente de Polícia Judicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Suponha que um policial flagre uma pessoa praticando furtos na rua e consiga abordá-la, mas que, no momento, ela não porte nenhum documento de identificação, havendo dúvidas sobre sua identidade civil. Nesse caso, é admitida a decretação da prisão preventiva.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "dúvidas sobre sua identidade civil",
    cognitivo: {
      motivo: "Lembrar a hipótese autônoma do § 1º do art. 313.",
      palavraCritica: "identidade civil",
    },
    comentario: {
      resolucao: "CERTO. Embora o furto simples tenha pena máxima de 4 anos (o que, em regra, não admitiria preventiva pelo art. 313, I), o § 1º do art. 313 do CPP admite a prisão preventiva quando houver dúvida sobre a identidade civil da pessoa ou quando esta não fornecer elementos suficientes para esclarecê-la. O preso deve ser colocado imediatamente em liberdade após a identificação, salvo se outra hipótese recomendar a manutenção.",
      fundamento: "CPP, art. 313, I e § 1º.",
      macete: "Sem saber quem é: preventiva possível, até identificar.",
      erroComum: "Descartar a preventiva só porque a pena máxima não passa de 4 anos.",
      comoBancaPensa: "Usa crime de pena baixa para o candidato descartar a preventiva sem lembrar da hipótese do § 1º.",
    },
  },

  {
    ...BASE101,
    id: "PP-142", assunto: "Prisão e medidas cautelares",
    subassunto: "Revogação da preventiva — art. 316",
    origem: "CEBRASPE (CESPE) - 2023 - Analista Judiciário 02 (TJ ES)/Judiciária/Direito (e mais 2 concursos) — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "O Ministério Público pode formular requerimento de revogação da prisão preventiva, podendo o juiz atendê-lo de ofício, caso verifique a falta de motivo para sua manutenção.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "falta de motivo para sua manutenção",
    cognitivo: {
      motivo: "Lembrar que, depois de 2019, o juiz não decreta preventiva de ofício, mas pode revogá-la de ofício.",
      palavraCritica: "revogação",
    },
    comentario: {
      resolucao: "CERTO. O art. 316 do CPP permite ao juiz, de ofício ou a pedido das partes, revogar a prisão preventiva se verificar a falta de motivo para que ela subsista, e decretá-la novamente se sobrevierem razões que a justifiquem. O MP, como parte, pode requerer a revogação. A Lei 13.964/2019 vedou a decretação de ofício (art. 311), mas manteve a revogação de ofício: a vedação é só para restringir a liberdade, não para devolvê-la.",
      fundamento: "CPP, arts. 311 e 316.",
      macete: "De ofício: soltar pode; prender não.",
      erroComum: "Estender a vedação de atuação de ofício à revogação.",
      comoBancaPensa: "Redação um pouco truncada para testar se o candidato separa decretação e revogação.",
    },
  },

  {
    ...BASE101,
    id: "PP-143", assunto: "Prisão e medidas cautelares",
    subassunto: "Prisão domiciliar da gestante — art. 318-A",
    origem: "CESPE / CEBRASPE - 2024 - TSE - Técnico Judiciário - Área: Administrativa - Especialidade: Agente da Polícia Judicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "De acordo com o Código de Processo Penal e a jurisprudência do STF, considere que Maria tenha sido presa preventivamente em razão da prática do delito de roubo e que, após efetivada a prisão, tenha-se descoberto que ela estava gestante. Nesse caso, a prisão preventiva deverá ser substituída por prisão domiciliar.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "deverá ser substituída",
    cognitivo: {
      motivo: "Lembrar a exceção do art. 318-A: crime com violência ou grave ameaça.",
      palavraCritica: "roubo",
    },
    comentario: {
      resolucao: "ERRADO. O art. 318-A do CPP (Lei 13.769/2018) determina a substituição da preventiva por prisão domiciliar para a mulher gestante ou mãe ou responsável por criança ou pessoa com deficiência, DESDE QUE não tenha cometido crime com VIOLÊNCIA OU GRAVE AMEAÇA a pessoa, nem crime contra o filho ou dependente. O roubo é, por definição, cometido com violência ou grave ameaça; a substituição não é obrigatória, e o juiz pode analisá-la pelo art. 318, IV, conforme o caso. É também a linha do HC coletivo 143.641 do STF.",
      fundamento: "CPP, arts. 318, IV, e 318-A; STF, HC 143.641.",
      macete: "Gestante: domiciliar obrigatória, salvo violência/grave ameaça ou crime contra o filho.",
      erroComum: "Aplicar a substituição sem conferir o tipo de crime.",
      comoBancaPensa: "Escolhe justamente um crime que cai na exceção.",
    },
  },

  {
    ...BASE101,
    concurso: "PCE", ano: 2021,
    id: "PP-144", assunto: "Prisão e medidas cautelares",
    subassunto: "Prisão temporária — rol taxativo",
    origem: "CEBRASPE PC-SE 2021 (Escrivão) — caderno: CESPE / CEBRASPE - 2021 - PC-SE - Escrivão de Polícia\" — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 55,
    enunciado: "No que tange às modalidades de prisão previstas no ordenamento jurídico brasileiro, a prisão temporária poderá ser decretada somente em determinados crimes, não abrangendo toda e qualquer infração penal.",
    gabarito: "C",
    pegadinha: "termo-absoluto",
    palavraChave: "somente em determinados crimes",
    cognitivo: {
      motivo: "Lembrar que a temporária tem rol fechado de crimes.",
      palavraCritica: "somente",
    },
    comentario: {
      resolucao: "CERTO. A prisão temporária (Lei 7.960/1989) só cabe nos crimes listados no art. 1º, III, da lei (homicídio doloso, sequestro, roubo, extorsão, estupro, tráfico, organização criminosa etc.) e nos hediondos e equiparados (Lei 8.072/1990, art. 2º, § 4º). Além disso, o STF (ADIs 3.360 e 4.109) exigiu a soma dos requisitos: imprescindibilidade para a investigação, fundadas razões de autoria ou participação num dos crimes do rol, fatos novos ou contemporâneos e adequação da medida.",
      fundamento: "Lei 7.960/1989, art. 1º; Lei 8.072/1990, art. 2º, § 4º; STF, ADIs 3.360 e 4.109.",
      macete: "Temporária: só no inquérito, só nos crimes da lista.",
      erroComum: "Marcar ERRADO por causa do 'somente'.",
      comoBancaPensa: "Termo restritivo verdadeiro — a restrição é da própria lei.",
    },
  },

  {
    ...BASE101,
    id: "PP-145", assunto: "Prisão e medidas cautelares",
    subassunto: "Prisão temporária — prorrogação não automática",
    origem: "CESPE / CEBRASPE - 2025 - TRF - 6ª REGIÃO - Técnico Judiciário - Área: Administrativa - Especialidade: Agente de Polícia Judicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "A prisão temporária terá o prazo de cinco dias, prorrogável, de forma automática, por igual período.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "de forma automática",
    cognitivo: {
      motivo: "Lembrar que a prorrogação da temporária exige extrema e comprovada necessidade.",
      palavraCritica: "automática",
    },
    comentario: {
      resolucao: "ERRADO. O art. 2º da Lei 7.960/1989 prevê prazo de 5 dias, prorrogável por igual período EM CASO DE EXTREMA E COMPROVADA NECESSIDADE — e a prorrogação depende de nova decisão judicial fundamentada. Nos crimes hediondos e equiparados o prazo é de 30 dias, prorrogável por mais 30, com a mesma exigência (Lei 8.072/1990, art. 2º, § 4º). Não há prorrogação automática.",
      fundamento: "Lei 7.960/1989, art. 2º; Lei 8.072/1990, art. 2º, § 4º.",
      macete: "Temporária: 5 + 5 (comuns), 30 + 30 (hediondos), sempre com nova decisão.",
      erroComum: "Lembrar o número e esquecer a condição da prorrogação.",
      comoBancaPensa: "Número certo e adjetivo errado.",
    },
  },

  {
    ...BASE101,
    id: "PP-146", assunto: "Prisão e medidas cautelares",
    subassunto: "Conversão do flagrante em preventiva de ofício — vedação",
    origem: "CESPE / CEBRASPE - 2024 - STJ - Analista Judiciário - Área: Judiciária — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "De acordo com as recentes decisões dos tribunais superiores, o juiz, ao receber o auto de prisão em flagrante para o controle de legalidade, pode converter a prisão em flagrante em prisão preventiva, se preenchidos os requisitos estabelecidos no Código de Processo Penal, independentemente de requerimento do Ministério Público ou de representação da autoridade policial.",
    gabarito: "E",
    pegadinha: "juris-mais-lei",
    palavraChave: "independentemente de requerimento",
    cognitivo: {
      motivo: "Aplicar a vedação da prisão preventiva de ofício também à conversão do flagrante.",
      palavraCritica: "independentemente de requerimento",
    },
    comentario: {
      resolucao: "ERRADO. Depois da Lei 13.964/2019, que retirou a expressão 'de ofício' do art. 311 do CPP e reforçou o sistema acusatório (art. 3º-A), o STF e o STJ firmaram que o juiz não pode decretar a preventiva de ofício nem CONVERTER, DE OFÍCIO, O FLAGRANTE EM PREVENTIVA (STF, HC 188.888; STJ, RHC 131.263). A conversão do art. 310, II, depende de requerimento do MP, do querelante ou do assistente, ou de representação da autoridade policial.",
      fundamento: "CPP, arts. 3º-A, 282, § 2º, 310, II, e 311; STF, HC 188.888; STJ, RHC 131.263.",
      macete: "Preventiva, inclusive por conversão: só com pedido.",
      erroComum: "Achar que a conversão é ato automático do controle de legalidade.",
      comoBancaPensa: "Invoca 'recentes decisões' para dar autoridade à tese que elas rejeitaram.",
    },
  },

  {
    ...BASE101,
    concurso: "PCE", ano: 2021,
    id: "PP-147", assunto: "Prisão e medidas cautelares",
    subassunto: "Audiência de custódia — conversão de ofício por gravidade",
    origem: "CEBRASPE PC-SE 2021 (Escrivão) — caderno: CESPE / CEBRASPE - 2021 - PC-SE - Escrivão de Polícia — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "No que tange à implantação das audiências de custódia e às modalidades de prisão previstas no ordenamento jurídico brasileiro, considere que um indiciado preso pelo crime de tráfico de drogas tenha sido apresentado para audiência de custódia, ocasião em que o juiz, de ofício, converteu a prisão em flagrante em prisão preventiva. Nessa situação, dada a gravidade do crime, é legal o procedimento adotado pelo magistrado.",
    gabarito: "E",
    pegadinha: "juris-mais-lei",
    palavraChave: "dada a gravidade do crime",
    cognitivo: {
      motivo: "Perceber os dois vícios: a atuação de ofício e o fundamento na gravidade abstrata.",
      palavraCritica: "de ofício",
    },
    comentario: {
      resolucao: "ERRADO. Há dois problemas. Primeiro, o juiz não pode converter o flagrante em preventiva de ofício: a medida depende de requerimento do MP ou de representação da autoridade policial (CPP, arts. 282, § 2º, 311; STF, HC 188.888). Segundo, a gravidade abstrata do crime — tráfico, no caso — não fundamenta, sozinha, a prisão preventiva; é preciso demonstrar concretamente o perigo gerado pelo estado de liberdade (art. 312 e art. 315, § 2º). A hediondez ou a equiparação a hediondo não altera isso.",
      fundamento: "CPP, arts. 282, § 2º, 311, 312 e 315, § 2º; STF, HC 188.888.",
      macete: "Preventiva: precisa de pedido e de fundamento concreto.",
      erroComum: "Aceitar a gravidade do crime como fundamento suficiente.",
      comoBancaPensa: "Dá uma justificativa que soa razoável, mas que a lei e os tribunais rejeitam.",
    },
  },

  /* ===== LIBERDADE PROVISÓRIA E FIANÇA ===== */

  {
    ...BASE101,
    concurso: "PCDF", ano: 2026,
    id: "PP-148", assunto: "Prisão e liberdade provisória",
    subassunto: "Inafiançabilidade e liberdade provisória",
    origem: "CEBRASPE PC-DF 2026 (Delegado) — caderno: CESPE / CEBRASPE - 2026 - PC-DF - Delegado de Polícia — QAP DSO (Direitos), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Nos casos de infração insuscetível de fiança, ainda que se trate de delito hediondo ou equiparado, a vedação legal à fiança, por si só, não implica a inadmissibilidade de liberdade provisória, sendo irrelevante a mera hediondez da conduta para a segregação cautelar.",
    gabarito: "C",
    pegadinha: "juris-mais-lei",
    palavraChave: "não implica a inadmissibilidade de liberdade provisória",
    cognitivo: {
      motivo: "Separar inafiançabilidade (não pode pagar fiança) de proibição de liberdade (não pode sair).",
      palavraCritica: "por si só",
    },
    comentario: {
      resolucao: "CERTO. A CF (art. 5º, XLIII) torna inafiançáveis o racismo, a tortura, o tráfico, o terrorismo e os hediondos, mas inafiançável quer dizer apenas que não se concede liberdade MEDIANTE FIANÇA. Nada impede a liberdade provisória SEM fiança, com ou sem medidas cautelares. O STF declarou inconstitucionais as vedações abstratas de liberdade provisória (ADI 3.112, no Estatuto do Desarmamento; HC 104.339, na Lei de Drogas), e a Lei 11.464/2007 retirou essa vedação da Lei dos Crimes Hediondos. A prisão só se mantém se houver fundamento concreto do art. 312.",
      fundamento: "CF, art. 5º, XLIII; CPP, arts. 310, III, e 312; STF, ADI 3.112 e HC 104.339.",
      macete: "Inafiançável ≠ não pode ser solto. Pode, sem fiança.",
      erroComum: "Concluir que crime hediondo impede liberdade provisória.",
      comoBancaPensa: "Item longo e verdadeiro sobre um tema em que o reflexo leva ao erro.",
    },
  },

  {
    ...BASE101,
    concurso: "PCAL", ano: 2021,
    id: "PP-149", assunto: "Prisão e liberdade provisória",
    subassunto: "Fiança pelo delegado — pena máxima até 4 anos",
    origem: "CEBRASPE PC-AL 2021 (Escrivão) — caderno: CESPE / CEBRASPE - 2021 - PC-AL - Escrivão de Polícia — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 60,
    enunciado: "Joacir foi preso em flagrante pela prática de determinado crime. A pena prevista para tal crime é um a quatro anos de reclusão. Ele negou a autoria do crime e acusou a vítima de ter forjado a situação de flagrância. Nessa situação, considerando-se apenas a pena abstrata prevista para o crime, o delegado poderá conceder a liberdade provisória mediante arbitramento de fiança.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "um a quatro anos",
    cognitivo: {
      motivo: "Aplicar o limite do art. 322: a autoridade policial arbitra fiança se a pena máxima não passar de 4 anos.",
      palavraCritica: "quatro anos",
    },
    comentario: {
      resolucao: "CERTO. O art. 322 do CPP permite à autoridade policial conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 anos. A pena máxima do crime de Joacir é exatamente 4 anos — não é superior —, então o delegado pode arbitrar a fiança, desde que não haja impedimento dos arts. 323 e 324. Acima desse limite, a fiança só pode ser concedida pelo juiz, em 48 horas.",
      fundamento: "CPP, arts. 322, 323 e 324.",
      macete: "Pena máxima até 4 anos: delegado arbitra. Acima: juiz.",
      erroComum: "Achar que 'até 4' exclui o próprio 4, ou que fiança é sempre do juiz.",
      comoBancaPensa: "Põe a pena exatamente no limite legal.",
    },
  },

  {
    ...BASE101,
    id: "PP-150", assunto: "Prisão e liberdade provisória",
    subassunto: "Liberdade provisória vedada — organização criminosa armada (art. 310, § 2º)",
    origem: "CEBRASPE (CESPE) - 2022 - Auditor do Estado (SECONT ES)/Ciências Jurídicas/Ciências Jurídicas — QAP DSO (Direitos), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "No tocante às prisões e às medidas cautelares previstas no Código de Processo Penal, efetivada a prisão em flagrante, não há óbice à concessão de liberdade provisória ao agente do delito, com ou sem medidas cautelares, ainda que o autuado seja integrante de organização criminosa armada.",
    gabarito: "E",
    pegadinha: "literalidade",
    palavraChave: "ainda que o autuado seja integrante de organização criminosa armada",
    cognitivo: {
      motivo: "Conhecer a hipótese do § 2º do art. 310, incluída pelo Pacote Anticrime.",
      palavraCritica: "organização criminosa armada",
    },
    comentario: {
      resolucao: "ERRADO, segundo o gabarito do material, que segue a letra do CPP. O art. 310, § 2º, incluído pela Lei 13.964/2019, diz que, se o juiz verificar que o agente é reincidente ou que integra organização criminosa armada ou milícia, ou que porta arma de fogo de uso restrito, DEVERÁ DENEGAR A LIBERDADE PROVISÓRIA, com ou sem medidas cautelares. O item afirma justamente o contrário. Observação: há forte discussão sobre a constitucionalidade dessa vedação automática, à luz do que o STF já decidiu sobre vedações abstratas de liberdade provisória.",
      fundamento: "CPP, art. 310, § 2º (Lei 13.964/2019).",
      macete: "Reincidente, orcrim armada, milícia, arma restrita: o CPP manda denegar a liberdade provisória.",
      erroComum: "Aplicar ao caso a jurisprudência geral contra vedações abstratas e ignorar o texto do § 2º.",
      comoBancaPensa: "Cobra a letra de um dispositivo novo que contraria a tendência jurisprudencial.",
    },
  },

  /* ===== ACRÉSCIMOS — PRINCÍPIOS E LEI NO TEMPO ===== */

  {
    ...BASE101,
    id: "PP-151", assunto: "Princípios constitucionais do processo penal",
    subassunto: "Contraditório, ampla defesa e acesso aos elementos documentados",
    origem: "CESPE / CEBRASPE - 2025 - MPE-CE - Analista Ministerial (Direito) — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Os princípios do contraditório e da ampla defesa asseguram o direito de o acusado ser ouvido e de apresentar provas, bem como o direito de acesso aos elementos que, já documentados em procedimento investigatório realizado por órgão competente, digam respeito ao exercício do direito de defesa.",
    gabarito: "C",
    pegadinha: "juris-mais-lei",
    palavraChave: "já documentados",
    cognitivo: {
      motivo: "Unir o conteúdo clássico da ampla defesa à Súmula Vinculante 14.",
      palavraCritica: "já documentados",
    },
    comentario: {
      resolucao: "CERTO. O contraditório e a ampla defesa (CF, art. 5º, LV) asseguram ao acusado participar do processo, ser ouvido e produzir provas. A parte final do item reproduz a Súmula Vinculante 14 do STF: é direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, JÁ DOCUMENTADOS em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa. O 'já documentados' é o limite: diligências em curso (uma interceptação ainda em andamento, por exemplo) podem ser preservadas.",
      fundamento: "CF, art. 5º, LV; STF, Súmula Vinculante 14.",
      macete: "SV 14: acesso ao que já está no papel, não ao que ainda está acontecendo.",
      erroComum: "Achar que o defensor pode acessar diligências ainda em curso.",
      comoBancaPensa: "Mistura princípio constitucional e súmula vinculante numa frase longa e correta.",
    },
  },

  {
    ...BASE101,
    id: "PP-152", assunto: "Princípios constitucionais do processo penal",
    subassunto: "Juiz natural",
    origem: "CESPE - 2018 - STM - Analista Judiciário - Área Judiciária — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Ninguém será processado nem sentenciado, senão pela autoridade competente, em respeito ao princípio constitucional do juiz natural.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "autoridade competente",
    cognitivo: {
      motivo: "Reconhecer o art. 5º, LIII, como expressão do juiz natural.",
      palavraCritica: "juiz natural",
    },
    comentario: {
      resolucao: "CERTO. É a redação do art. 5º, LIII, da CF: 'ninguém será processado nem sentenciado senão pela autoridade competente'. Junto com o inciso XXXVII ('não haverá juízo ou tribunal de exceção'), forma o princípio do juiz natural: o julgador deve estar previamente definido por regras gerais de competência, anteriores ao fato.",
      fundamento: "CF, art. 5º, XXXVII e LIII.",
      macete: "Juiz natural = juiz definido antes do fato, por regra geral.",
      erroComum: "Confundir com o princípio do promotor natural, que a doutrina extrai do mesmo inciso.",
      comoBancaPensa: "Literalidade constitucional cobrada sem armadilha.",
    },
  },

  {
    ...BASE101,
    id: "PP-153", assunto: "Disposições preliminares",
    subassunto: "Aplicação imediata da lei processual",
    origem: "CESPE - 2021 - Polícia Civil -DF - Agente de Polícia — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Uma norma processual penal só terá aplicabilidade aos crimes que forem praticados após sua entrada em vigor.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "aos crimes que forem praticados após",
    cognitivo: {
      motivo: "Separar o marco da lei processual (o ato processual) do marco da lei penal (o fato).",
      palavraCritica: "crimes que forem praticados",
    },
    comentario: {
      resolucao: "ERRADO. A lei processual penal aplica-se DESDE LOGO, aos processos em curso, ainda que o crime tenha sido praticado antes dela (CPP, art. 2º). O marco temporal é o ato processual a ser praticado, não a data do crime. Os atos já realizados sob a lei anterior continuam válidos. O critério da data do fato é o da lei PENAL. (As normas mistas, com conteúdo penal e processual, seguem a regra da lei penal mais benéfica.)",
      fundamento: "CPP, art. 2º.",
      macete: "Lei processual nova: vale para os próximos atos, seja qual for a data do crime.",
      erroComum: "Aplicar à lei processual a irretroatividade da lei penal.",
      comoBancaPensa: "Usa o critério da lei penal (data do crime) numa afirmação sobre lei processual.",
    },
  },

  {
    ...BASE101,
    concurso: "PCAL", ano: 2021,
    id: "PP-154", assunto: "Disposições preliminares",
    subassunto: "Lei processual mais benéfica não renova atos",
    origem: "CEBRASPE PC-AL 2021 (Escrivão) — caderno: CESPE - 2021 - PCAL - Escrivão de Polícia — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "Em relação ao processo penal, lei nova mais benéfica, quando modifica procedimentos no processo penal, retroage e impõe a renovação dos atos já praticados.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "retroage e impõe a renovação",
    cognitivo: {
      motivo: "Lembrar que a lei processual não retroage nem anula o que já foi feito, ainda que benéfica.",
      palavraCritica: "renovação dos atos",
    },
    comentario: {
      resolucao: "ERRADO. A lei que muda procedimento é processual e segue o art. 2º do CPP: aplica-se desde logo, SEM PREJUÍZO DA VALIDADE DOS ATOS REALIZADOS sob a vigência da lei anterior. Não há retroatividade nem renovação de atos, ainda que a lei nova seja mais favorável à defesa. A retroatividade benéfica é regra da lei penal (CF, art. 5º, XL).",
      fundamento: "CPP, art. 2º; CF, art. 5º, XL.",
      macete: "Procedimento novo não refaz o processo velho.",
      erroComum: "Achar que 'mais benéfica' faz a lei processual retroagir.",
      comoBancaPensa: "Junta a ideia correta (lei benéfica) a um efeito que só vale para lei penal.",
    },
  },

  {
    ...BASE101,
    id: "PP-155", assunto: "Princípios constitucionais do processo penal",
    subassunto: "Produção antecipada de provas — art. 366 e Súmula 455 do STJ",
    origem: "CESPE / CEBRASPE - 2025 - MPE-CE - Analista Ministerial - Especialidade: Direito — QAP DSO (Direitos), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Considerando os aspectos legais previstos no Código de Processo Penal, viola o princípio da ampla defesa decisão que determine a produção antecipada de provas nos casos em que o acusado, citado por edital, não compareça nem constitua advogado.",
    gabarito: "E",
    pegadinha: "juris-mais-lei",
    palavraChave: "viola o princípio da ampla defesa",
    cognitivo: {
      motivo: "Saber que o art. 366 autoriza a prova antecipada, desde que fundamentada na urgência.",
      palavraCritica: "viola",
    },
    comentario: {
      resolucao: "ERRADO. O art. 366 do CPP prevê que, se o acusado citado por edital não comparecer nem constituir advogado, ficam suspensos o processo e o prazo prescricional, PODENDO O JUIZ DETERMINAR A PRODUÇÃO ANTECIPADA DAS PROVAS CONSIDERADAS URGENTES. Não há violação da ampla defesa na previsão em si. O limite está na Súmula 455 do STJ: a decisão deve ser concretamente fundamentada, não a justificando unicamente o mero decurso do tempo. Fundamentada, é válida — e há defensor nomeado para acompanhar o ato.",
      fundamento: "CPP, art. 366; STJ, Súmula 455.",
      macete: "Réu revel citado por edital: processo suspenso, prova urgente pode ser antecipada, com fundamento concreto.",
      erroComum: "Concluir que qualquer prova sem o réu viola a ampla defesa.",
      comoBancaPensa: "Generaliza para 'viola' o que a lei autoriza com condição.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE101);
