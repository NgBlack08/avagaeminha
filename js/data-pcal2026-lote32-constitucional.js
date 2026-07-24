/* =====================================================================
   CEBRASPE LAB — Lote 32: DIREITO CONSTITUCIONAL (expansão)
   Cobre pontos de alta recorrência ainda pouco explorados no banco:
   extradição de brasileiro naturalizado, direito ao esquecimento (STF,
   Tema 786), inviolabilidade de domicílio, remédios constitucionais
   (habeas data, mandado de injunção, mandado de segurança coletivo),
   cargos privativos de brasileiro nato e competências do Congresso
   Nacional sobre estado de defesa/sítio. Itens 100% originais, com
   gabarito verificado de forma independente a partir do texto
   constitucional e de jurisprudência consolidada do STF.
   12 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE32 = [

  {
    id: "DC-037", disciplina: "Direito Constitucional", assunto: "Nacionalidade", subassunto: "Extradição de brasileiro naturalizado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, LI)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.84,
    enunciado: "Com base na Constituição Federal de 1988, o brasileiro naturalizado pode ser extraditado em caso de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, ainda que esse envolvimento seja posterior à naturalização.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "tráfico ... ainda que posterior à naturalização",
    cognitivo: {
      motivo: "Cobrar a exceção específica de extradição por tráfico de drogas, sem restrição temporal.",
      mede: "Direito Constitucional — nacionalidade (extradição).",
      pegadinhaDesc: "A banca pode estender indevidamente a restrição temporal (antes da naturalização) também à hipótese de tráfico de drogas.",
      ondeErra: "Aplica ao tráfico de drogas a mesma restrição temporal exigida para crime comum.",
      palavraCritica: "ainda que posterior à naturalização",
      tecnica: "Art. 5º, LI, CF: o naturalizado só pode ser extraditado por crime comum se praticado ANTES da naturalização; já por tráfico ilícito de entorpecentes, a extradição cabe independentemente do momento da prática (antes ou depois da naturalização).",
      regraMental: "Naturalizado: crime comum = só antes da naturalização. Tráfico de drogas = a qualquer tempo."
    },
    comentario: {
      resolucao: "CERTO. Diferentemente do crime comum (que exige prática anterior à naturalização), a extradição do brasileiro naturalizado por tráfico ilícito de entorpecentes e drogas afins cabe independentemente do momento da prática do crime, ainda que posterior à naturalização, conforme o art. 5º, LI, da CF.",
      fundamento: "Constituição Federal, art. 5º, LI.",
      macete: "Tráfico de drogas: extradição do naturalizado vale a qualquer tempo.",
      erroComum: "Achar que a restrição temporal (antes da naturalização) vale para toda e qualquer hipótese de extradição.",
      comoBancaPensa: "Cobra a exceção específica que distingue crime comum de tráfico de drogas."
    }
  },
  {
    id: "DC-038", disciplina: "Direito Constitucional", assunto: "Nacionalidade", subassunto: "Extradição de brasileiro naturalizado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, LI)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "O brasileiro naturalizado poderá ser extraditado por crime comum praticado após a naturalização, desde que haja tratado de extradição vigente entre o Brasil e o Estado requerente.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "crime comum ... após a naturalização",
    cognitivo: {
      motivo: "Cobrar a restrição temporal exigida para extradição de naturalizado por crime comum.",
      mede: "Direito Constitucional — nacionalidade (extradição).",
      pegadinhaDesc: "A banca cria uma exceção (tratado vigente) que não supre a exigência constitucional de anterioridade.",
      ondeErra: "Acha que a existência de tratado de extradição autoriza a extradição por crime comum praticado após a naturalização.",
      palavraCritica: "após a naturalização",
      tecnica: "Pelo art. 5º, LI, CF, a extradição do naturalizado por crime comum só é possível se o crime foi praticado ANTES da naturalização — não há exceção constitucional para crimes comuns posteriores, independentemente da existência de tratado.",
      regraMental: "Crime comum + naturalizado = extradição só se o crime for anterior à naturalização, sem exceções."
    },
    comentario: {
      resolucao: "ERRADO. A Constituição não admite a extradição de brasileiro naturalizado por crime comum praticado APÓS a naturalização, em nenhuma hipótese — a existência de tratado de extradição não supre essa vedação constitucional, que é absoluta para crimes comuns.",
      fundamento: "Constituição Federal, art. 5º, LI.",
      macete: "Crime comum + naturalizado: só antes da naturalização. Sem exceções por tratado.",
      erroComum: "Achar que tratados internacionais podem flexibilizar a vedação constitucional.",
      comoBancaPensa: "Cria uma exceção fictícia (tratado vigente) para testar se o candidato confia na literalidade da CF."
    }
  },
  {
    id: "DC-039", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Direito ao esquecimento (STF, Tema 786)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STF, RE 1.010.606, Tema 786)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.82,
    enunciado: "Conforme entendimento firmado pelo Supremo Tribunal Federal em repercussão geral, é incompatível com a Constituição Federal a ideia de um direito ao esquecimento, assim entendido como o poder de obstar, em razão da passagem do tempo, a divulgação de fatos ou dados verídicos e licitamente obtidos e publicados em meios de comunicação social analógicos ou digitais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "incompatível com a Constituição ... direito ao esquecimento",
    cognitivo: {
      motivo: "Cobrar a tese fixada pelo STF sobre o chamado 'direito ao esquecimento'.",
      mede: "Direito Constitucional — direitos fundamentais (liberdade de expressão e informação).",
      pegadinhaDesc: "A banca pode inverter a tese, afirmando que o STF reconheceu o direito ao esquecimento.",
      ondeErra: "Presume que o STF validou o direito ao esquecimento como regra geral, quando na verdade o rejeitou.",
      palavraCritica: "incompatível com a Constituição",
      tecnica: "No RE 1.010.606 (Tema 786), o STF fixou a tese de que o direito ao esquecimento, entendido como o poder de impedir a divulgação de fatos verídicos e licitamente obtidos, é incompatível com a CF — eventuais excessos devem ser resolvidos por outras vias (responsabilidade civil, proteção à honra/imagem).",
      regraMental: "STF: NÃO existe direito ao esquecimento genérico contra fato verídico e licitamente obtido."
    },
    comentario: {
      resolucao: "CERTO. O STF, em repercussão geral (RE 1.010.606, Tema 786, 2021), fixou a tese de que é incompatível com a Constituição a ideia de um direito ao esquecimento capaz de obstar, pela mera passagem do tempo, a divulgação de fatos ou dados verídicos e licitamente obtidos e publicados — eventuais abusos devem ser tratados pelos instrumentos já existentes de proteção à honra, imagem e privacidade.",
      fundamento: "STF, RE 1.010.606/RJ, Tema 786 de repercussão geral (2021).",
      macete: "STF rejeitou o 'direito ao esquecimento' como regra geral — não confunda com proteção pontual à honra/imagem.",
      erroComum: "Achar que o STF reconheceu e validou o direito ao esquecimento.",
      comoBancaPensa: "Cobra a tese fixada literalmente, testando se o candidato conhece a decisão (e não apenas intui o resultado)."
    }
  },
  {
    id: "DC-040", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Inviolabilidade de domicílio",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, XI)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "Por determinação judicial, é permitido ingressar na casa, asilo inviolável do indivíduo, sem o consentimento do morador, a qualquer hora do dia ou da noite.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "a qualquer hora do dia ou da noite",
    cognitivo: {
      motivo: "Cobrar a restrição temporal (apenas durante o dia) para o ingresso por determinação judicial.",
      mede: "Direito Constitucional — direitos fundamentais (inviolabilidade de domicílio).",
      pegadinhaDesc: "A banca generaliza a autorização judicial para qualquer horário, inclusive noturno.",
      ondeErra: "Não percebe que a determinação judicial só autoriza o ingresso DURANTE O DIA.",
      palavraCritica: "a qualquer hora do dia ou da noite",
      tecnica: "Art. 5º, XI, CF: ninguém pode entrar na casa alheia sem consentimento, salvo em flagrante delito, desastre, para prestar socorro, ou, DURANTE O DIA, por determinação judicial. À noite, só cabem as três primeiras hipóteses — nunca por determinação judicial isoladamente.",
      regraMental: "Determinação judicial para entrar em casa alheia: só de DIA. À noite, só flagrante/desastre/socorro."
    },
    comentario: {
      resolucao: "ERRADO. A determinação judicial autoriza o ingresso em domicílio alheio apenas DURANTE O DIA. À noite, o ingresso sem consentimento do morador só é permitido em caso de flagrante delito, desastre ou para prestar socorro — nunca por mera determinação judicial.",
      fundamento: "Constituição Federal, art. 5º, XI.",
      macete: "Determinação judicial = só de dia. À noite: só flagrante, desastre ou socorro.",
      erroComum: "Generalizar a autorização judicial para qualquer horário.",
      comoBancaPensa: "Clássica pegadinha de generalização indevida de uma restrição temporal expressa na CF."
    }
  },
  {
    id: "DC-041", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Inviolabilidade de domicílio",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, XI)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.84,
    enunciado: "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "flagrante ... desastre ... socorro ... durante o dia, por determinação judicial",
    cognitivo: {
      motivo: "Cobrar a redação literal e completa do art. 5º, XI, da CF.",
      mede: "Direito Constitucional — direitos fundamentais (inviolabilidade de domicílio).",
      pegadinhaDesc: "A banca pode omitir uma das quatro hipóteses ou alterar a restrição temporal.",
      ondeErra: "Não memoriza as quatro hipóteses exatas nem a restrição 'durante o dia' exclusiva da determinação judicial.",
      palavraCritica: "durante o dia, por determinação judicial",
      tecnica: "Reprodução literal do art. 5º, XI, CF: quatro hipóteses de exceção à inviolabilidade — flagrante delito, desastre, prestação de socorro (a qualquer hora) e determinação judicial (só de dia).",
      regraMental: "Quatro hipóteses: flagrante, desastre, socorro (sempre) + determinação judicial (só de dia)."
    },
    comentario: {
      resolucao: "CERTO. O item reproduz corretamente o art. 5º, XI, da CF: a inviolabilidade domiciliar cede em quatro hipóteses — flagrante delito, desastre, prestação de socorro (a qualquer hora) e determinação judicial (restrita ao período diurno).",
      fundamento: "Constituição Federal, art. 5º, XI.",
      macete: "Decore as quatro hipóteses e a restrição temporal exclusiva da via judicial.",
      erroComum: "Confundir a restrição temporal, aplicando-a às demais hipóteses.",
      comoBancaPensa: "Cobra a redação literal de um dos direitos fundamentais mais cobrados em provas policiais."
    }
  },
  {
    id: "DC-042", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Mandado de injunção",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, LXXI)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "O mandado de injunção é cabível exclusivamente quando a falta de norma regulamentadora torne inviável o exercício de direitos e liberdades constitucionais, não se aplicando às prerrogativas inerentes à nacionalidade, à soberania e à cidadania.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente ... não se aplicando",
    cognitivo: {
      motivo: "Cobrar a amplitude constitucional do cabimento do mandado de injunção.",
      mede: "Direito Constitucional — remédios constitucionais.",
      pegadinhaDesc: "A banca restringe indevidamente o cabimento do writ, excluindo hipóteses previstas na própria CF.",
      ondeErra: "Não reconhece que a CF também prevê o mandado de injunção para nacionalidade, soberania e cidadania.",
      palavraCritica: "exclusivamente ... não se aplicando",
      tecnica: "Art. 5º, LXXI, CF: o mandado de injunção cabe quando a falta de norma regulamentadora tornar inviável o exercício de direitos e liberdades constitucionais E TAMBÉM das prerrogativas inerentes à nacionalidade, à soberania e à cidadania.",
      regraMental: "Mandado de injunção: direitos/liberdades constitucionais + nacionalidade + soberania + cidadania."
    },
    comentario: {
      resolucao: "ERRADO. O art. 5º, LXXI, da CF expressamente estende o cabimento do mandado de injunção também às prerrogativas inerentes à nacionalidade, à soberania e à cidadania, e não apenas aos direitos e liberdades constitucionais em geral — a assertiva restringe indevidamente o alcance do instituto.",
      fundamento: "Constituição Federal, art. 5º, LXXI.",
      macete: "Mandado de injunção: não é só 'direitos e liberdades' — inclui nacionalidade, soberania e cidadania.",
      erroComum: "Esquecer as três prerrogativas adicionais previstas expressamente no dispositivo.",
      comoBancaPensa: "Restringe indevidamente o alcance de um remédio constitucional de aplicação mais ampla."
    }
  },
  {
    id: "DC-043", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Habeas data",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, LXXII)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O habeas data é cabível para assegurar ao impetrante o conhecimento de informações relativas à sua própria pessoa constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, bem como para promover a retificação desses dados, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "conhecimento ... retificação ... processo sigiloso, judicial ou administrativo",
    cognitivo: {
      motivo: "Cobrar a redação literal e completa do art. 5º, LXXII, da CF.",
      mede: "Direito Constitucional — remédios constitucionais.",
      pegadinhaDesc: "A banca pode omitir a ressalva do processo sigiloso ou restringir os bancos de dados apenas aos governamentais.",
      ondeErra: "Esquece a hipótese de retificação ou a ressalva sobre o processo sigiloso.",
      palavraCritica: "quando não se prefira fazê-lo por processo sigiloso",
      tecnica: "Art. 5º, LXXII, CF: habeas data cabe (a) para conhecimento de informações sobre a própria pessoa em bancos de dados governamentais ou de caráter público, e (b) para retificação de dados, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo.",
      regraMental: "Habeas data: conhecer + retificar dados próprios, com ressalva do processo sigiloso."
    },
    comentario: {
      resolucao: "CERTO. O item reproduz corretamente as duas hipóteses de cabimento do habeas data previstas no art. 5º, LXXII, da CF: conhecimento de informações pessoais em bancos de dados governamentais ou de caráter público, e retificação desses dados, ressalvada a preferência pelo processo sigiloso.",
      fundamento: "Constituição Federal, art. 5º, LXXII.",
      macete: "Habeas data: só dados PRÓPRIOS do impetrante — conhecer ou retificar.",
      erroComum: "Esquecer a ressalva do processo sigiloso, judicial ou administrativo.",
      comoBancaPensa: "Cobra a redação literal e completa de um remédio constitucional específico."
    }
  },
  {
    id: "DC-044", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Mandado de segurança coletivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, LXX)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.76,
    enunciado: "Para a validade do mandado de segurança coletivo, exige-se que o partido político impetrante possua funcionamento comprovado há pelo menos um ano, requisito idêntico ao estabelecido para organizações sindicais, entidades de classe e associações.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "partido político ... um ano ... requisito idêntico",
    cognitivo: {
      motivo: "Cobrar os diferentes requisitos de legitimidade ativa no mandado de segurança coletivo.",
      mede: "Direito Constitucional — remédios constitucionais.",
      pegadinhaDesc: "A banca generaliza um requisito (um ano de funcionamento) que só vale para parte dos legitimados.",
      ondeErra: "Aplica a todos os legitimados uma exigência que a CF restringe a apenas alguns deles.",
      palavraCritica: "requisito idêntico",
      tecnica: "Art. 5º, LXX, CF: o partido político com representação no Congresso Nacional não precisa comprovar tempo mínimo de funcionamento; já organizações sindicais, entidades de classe e associações precisam estar legalmente constituídas e em funcionamento há pelo menos um ano.",
      regraMental: "Partido político: só representação no Congresso. Sindicato/entidade/associação: + 1 ano de funcionamento."
    },
    comentario: {
      resolucao: "ERRADO. O requisito de funcionamento há pelo menos um ano aplica-se apenas a organizações sindicais, entidades de classe e associações — o partido político, para impetrar mandado de segurança coletivo, precisa apenas ter representação no Congresso Nacional, sem exigência de tempo mínimo de funcionamento.",
      fundamento: "Constituição Federal, art. 5º, LXX, alíneas 'a' e 'b'.",
      macete: "Só sindicato/entidade/associação precisam do 'um ano'. Partido político, não.",
      erroComum: "Generalizar o requisito temporal para todos os legitimados do mandado de segurança coletivo.",
      comoBancaPensa: "Generaliza indevidamente um requisito que a CF distribui de forma diferenciada entre os legitimados."
    }
  },
  {
    id: "DC-045", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Mandado de segurança coletivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Súmula 629, STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "A impetração de mandado de segurança coletivo por entidade de classe em favor de seus associados independe de autorização expressa destes, conforme entendimento sumulado do Supremo Tribunal Federal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "independe de autorização expressa",
    cognitivo: {
      motivo: "Cobrar o entendimento sumulado do STF sobre a dispensa de autorização expressa dos associados.",
      mede: "Direito Constitucional — remédios constitucionais (jurisprudência do STF).",
      pegadinhaDesc: "A banca pode negar essa dispensa, exigindo autorização expressa dos associados.",
      ondeErra: "Confunde o regime do mandado de segurança coletivo (dispensa autorização) com o de ações ordinárias de representação processual.",
      palavraCritica: "independe de autorização expressa",
      tecnica: "Súmula 629, STF: 'A impetração de mandado de segurança coletivo por entidade de classe em favor dos associados independe da autorização destes.' A legitimidade decorre diretamente da representação institucional da entidade.",
      regraMental: "MS coletivo por entidade de classe: dispensa autorização expressa dos associados (Súmula 629, STF)."
    },
    comentario: {
      resolucao: "CERTO. Conforme a Súmula 629 do STF, a entidade de classe pode impetrar mandado de segurança coletivo em defesa de seus associados independentemente de autorização expressa destes, já que a legitimidade decorre da própria natureza representativa da entidade.",
      fundamento: "STF, Súmula 629.",
      macete: "Súmula 629: entidade de classe não precisa de autorização expressa dos associados para o MS coletivo.",
      erroComum: "Exigir autorização expressa, confundindo com outras hipóteses de representação processual.",
      comoBancaPensa: "Cobra a literalidade de uma súmula clássica e recorrente do STF."
    }
  },
  {
    id: "DC-046", disciplina: "Direito Constitucional", assunto: "Nacionalidade", subassunto: "Cargos privativos de brasileiro nato",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 12, §3º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "São privativos de brasileiro nato os cargos de Presidente e Vice-Presidente da República, Presidente da Câmara dos Deputados, Presidente do Senado Federal, Ministro do Supremo Tribunal Federal, os da carreira diplomática, o de oficial das Forças Armadas e o de Ministro de Estado da Defesa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Ministro de Estado da Defesa",
    cognitivo: {
      motivo: "Cobrar o rol taxativo de cargos privativos de brasileiro nato.",
      mede: "Direito Constitucional — nacionalidade.",
      pegadinhaDesc: "A banca pode omitir um dos sete cargos do rol ou incluir cargo que não conste dele.",
      ondeErra: "Esquece o Ministro de Estado da Defesa (incluído pela EC nº 23/1999) ou algum dos demais cargos.",
      palavraCritica: "Ministro de Estado da Defesa",
      tecnica: "Art. 12, §3º, CF: rol taxativo de sete cargos privativos de brasileiro nato — PR/VP, Presidente da Câmara, Presidente do Senado, Ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro de Estado da Defesa.",
      regraMental: "Decore os 7 cargos privativos de nato — inclui só o Ministério da Defesa, entre os ministérios."
    },
    comentario: {
      resolucao: "CERTO. O item reproduz corretamente o rol taxativo do art. 12, §3º, da CF, incluindo o Ministro de Estado da Defesa, cargo cuja exclusividade para brasileiro nato foi introduzida pela Emenda Constitucional nº 23/1999.",
      fundamento: "Constituição Federal, art. 12, §3º.",
      macete: "7 cargos privativos de nato: PR/VP, Pres. Câmara, Pres. Senado, Min. STF, diplomacia, oficial FFAA, Min. Defesa.",
      erroComum: "Esquecer o Ministro de Estado da Defesa, cargo menos lembrado do rol.",
      comoBancaPensa: "Cobra a memorização completa do rol taxativo, incluindo o item mais frequentemente esquecido."
    }
  },
  {
    id: "DC-047", disciplina: "Direito Constitucional", assunto: "Nacionalidade", subassunto: "Cargos privativos de brasileiro nato",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 12, §3º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "Todos os cargos de Ministro de Estado são privativos de brasileiro nato, e não apenas o de Ministro de Estado da Defesa.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "todos os cargos de Ministro de Estado",
    cognitivo: {
      motivo: "Cobrar que apenas o Ministério da Defesa, entre os ministérios, é privativo de nato.",
      mede: "Direito Constitucional — nacionalidade.",
      pegadinhaDesc: "A banca generaliza indevidamente a exclusividade de um único ministério para todos os demais.",
      ondeErra: "Presume que a restrição de nacionalidade se estende a todos os cargos ministeriais.",
      palavraCritica: "todos os cargos de Ministro de Estado",
      tecnica: "O art. 12, §3º, VII, CF restringe a exclusividade de brasileiro nato apenas ao Ministro de Estado da DEFESA — os demais ministérios podem ser ocupados por brasileiro naturalizado, sem restrição de nacionalidade.",
      regraMental: "Entre os ministérios, só o da Defesa é privativo de brasileiro nato — os demais, não."
    },
    comentario: {
      resolucao: "ERRADO. Apenas o cargo de Ministro de Estado da Defesa é privativo de brasileiro nato, entre todos os ministérios (art. 12, §3º, VII, CF, com redação dada pela EC nº 23/1999) — os demais cargos ministeriais podem ser exercidos por brasileiro naturalizado.",
      fundamento: "Constituição Federal, art. 12, §3º, VII.",
      macete: "Só o Ministério da Defesa é privativo de nato — os demais, não.",
      erroComum: "Generalizar a restrição de um único ministério para todos os demais.",
      comoBancaPensa: "Generaliza indevidamente uma exceção pontual para toda uma categoria de cargos."
    }
  },
  {
    id: "DC-048", disciplina: "Direito Constitucional", assunto: "Estado de defesa e estado de sítio", subassunto: "Competência do Congresso Nacional",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 49, IV)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.72,
    enunciado: "Compete ao Congresso Nacional autorizar previamente o estado de defesa e a intervenção federal decretados pelo Presidente da República, cabendo-lhe apenas aprovar, posteriormente, a decretação do estado de sítio.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "autorizar previamente ... apenas aprovar ... estado de sítio",
    cognitivo: {
      motivo: "Cobrar a distinção entre 'aprovar' (controle posterior) e 'autorizar' (controle prévio) no art. 49, IV, da CF.",
      mede: "Direito Constitucional — organização dos poderes (competências do Congresso Nacional).",
      pegadinhaDesc: "A banca inverte os verbos constitucionais entre as duas medidas excepcionais.",
      ondeErra: "Troca 'aprovar' por 'autorizar' (e vice-versa) entre estado de defesa/intervenção federal e estado de sítio.",
      palavraCritica: "autorizar previamente ... apenas aprovar",
      tecnica: "Art. 49, IV, CF: compete ao Congresso Nacional APROVAR o estado de defesa e a intervenção federal (que já são decretados pelo Presidente, cabendo controle posterior) e AUTORIZAR o estado de sítio (que depende de autorização prévia do Congresso antes da decretação). O item inverteu os dois verbos.",
      regraMental: "Estado de defesa/intervenção: decreta e depois APROVA. Estado de sítio: AUTORIZA antes de decretar."
    },
    comentario: {
      resolucao: "ERRADO. Os verbos constitucionais foram invertidos: o Congresso Nacional APROVA (controle posterior) o estado de defesa e a intervenção federal, já decretados pelo Presidente, e AUTORIZA (controle prévio) o estado de sítio, que depende de autorização do Congresso antes de sua decretação — o inverso do que afirma o item.",
      fundamento: "Constituição Federal, art. 49, IV.",
      macete: "Defesa/intervenção: aprova depois. Sítio: autoriza antes.",
      erroComum: "Trocar os verbos 'aprovar' e 'autorizar' entre as três medidas excepcionais.",
      comoBancaPensa: "Testa a distinção fina entre controle prévio e posterior do Congresso sobre medidas excepcionais."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE32);

/* Frequência de temas — Direito Constitucional (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Direito Constitucional");
  if (!d) { d = { disciplina: "Direito Constitucional", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Nacionalidade: extradição e cargos privativos de nato", freq: 82, tendencia: "alta", prob: 0.82 },
    { tema: "Remédios constitucionais (habeas data, injunção, MS coletivo)", freq: 78, tendencia: "alta", prob: 0.78 },
    { tema: "Direitos fundamentais: domicílio e direito ao esquecimento (STF)", freq: 84, tendencia: "alta", prob: 0.84 },
    { tema: "Estado de defesa e estado de sítio (competências)", freq: 68, tendencia: "estavel", prob: 0.7 },
  );
})();
