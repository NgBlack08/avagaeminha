/* =====================================================================
   CEBRASPE LAB — Lote 22: BLOCOS TEXTO-BASE ("prova real")
   Formato clássico da CEBRASPE: um caso concreto (texto de apoio) com
   várias assertivas encadeadas, exigindo aplicação do direito ao fato.
   3 blocos × 4 itens = 12 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

/* ---- Textos de apoio compartilhados (cada bloco = 1 texto) ---- */
const TA_FLAGRANTE = "Situação hipotética: Durante patrulhamento noturno, policiais civis avistaram João no exato momento em que subtraía um veículo estacionado em via pública. Em seguida, deram-lhe voz de prisão e o conduziram à delegacia. Na unidade, o delegado ouviu o condutor da prisão, as testemunhas e o próprio João, que, orientado, optou por permanecer em silêncio. Lavrado o auto de prisão em flagrante, este foi encaminhado ao juiz no prazo legal, tendo sido entregue ao preso a respectiva nota de culpa.";

const TA_FEMINICIDIO = "Situação hipotética: Após anos de relacionamento marcado por agressões, Pedro matou sua companheira Maria por razões da condição do sexo feminino, em contexto de violência doméstica e familiar. Na mesma ocasião, para assegurar a execução do crime, Pedro feriu gravemente o irmão de Maria, que tentava defendê-la. Pedro foi preso e, posteriormente, denunciado.";

const TA_ABORDAGEM = "Situação hipotética: Em operação policial, agentes abordaram um grupo de pessoas em via pública. Durante a ação, um dos abordados foi algemado e conduzido à delegacia, sendo informado de seus direitos, inclusive o de permanecer calado e o de ser assistido por advogado. A prisão foi comunicada à família do preso e ao juiz competente.";

const QUESTOES_PCAL_LOTE22 = [

  /* ============ BLOCO 1 — FLAGRANTE (Processo Penal) ============ */
  {
    id: "PP-049", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Espécies de flagrante (art. 302)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, CPP)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    textoApoio: TA_FLAGRANTE,
    enunciado: "Considerando a situação hipotética, a prisão de João caracteriza flagrante próprio, pois ele foi surpreendido no momento em que cometia a infração penal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "flagrante próprio",
    cognitivo: {
      motivo: "Aplicar as espécies de flagrante ao caso concreto (art. 302, I).",
      mede: "Processo Penal — prisão em flagrante.",
      pegadinhaDesc: "A banca pode rotular o caso como flagrante impróprio ou presumido.",
      ondeErra: "Confunde 'está cometendo' (próprio) com 'logo após' (impróprio).",
      palavraCritica: "no momento em que cometia",
      tecnica: "Art. 302, I: flagrante próprio = quem está cometendo a infração. João foi visto no ato → flagrante próprio (real).",
      regraMental: "Pego no ato = flagrante próprio (art. 302, I)."
    },
    comentario: {
      resolucao: "CERTO. João foi surpreendido no exato momento da subtração, o que caracteriza o flagrante próprio (real), previsto no art. 302, I, do CPP — está cometendo a infração penal.",
      fundamento: "CPP, art. 302, I.",
      macete: "Cometendo = próprio; logo após = impróprio; presumido = com instrumentos.",
      erroComum: "Classificar como flagrante impróprio.",
      comoBancaPensa: "Testa a subsunção do fato à espécie correta."
    }
  },
  {
    id: "PP-050", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Reserva de jurisdição (art. 5º, LXI, CF)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, CF/CPP)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    textoApoio: TA_FLAGRANTE,
    enunciado: "Ainda com base na situação, a autoridade policial não poderia ter lavrado o auto de prisão em flagrante sem prévia autorização judicial.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "prévia autorização judicial",
    cognitivo: {
      motivo: "Cobrar a dispensa de ordem judicial no flagrante.",
      mede: "Processo Penal — prisão sem mandado.",
      pegadinhaDesc: "Cria exigência de autorização judicial para o flagrante.",
      ondeErra: "Ignora a exceção constitucional ao mandado (flagrante).",
      palavraCritica: "prévia autorização judicial",
      tecnica: "Art. 5º, LXI, CF: ninguém será preso senão em flagrante ou por ordem judicial. O flagrante é exceção — dispensa mandado.",
      regraMental: "Flagrante não precisa de mandado (é exceção constitucional)."
    },
    comentario: {
      resolucao: "ERRADO. A prisão em flagrante independe de ordem judicial prévia, conforme o art. 5º, LXI, da CF, que a coloca como exceção à exigência de mandado. Qualquer do povo pode e as autoridades policiais devem prender quem esteja em flagrante (CPP, art. 301).",
      fundamento: "CF, art. 5º, LXI; CPP, art. 301.",
      macete: "Flagrante: prisão sem mandado.",
      erroComum: "Exigir autorização judicial para o flagrante.",
      comoBancaPensa: "Cria requisito inexistente."
    }
  },
  {
    id: "PP-051", disciplina: "Processo Penal", assunto: "Interrogatório", subassunto: "Direito ao silêncio (art. 5º, LXIII, CF)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, CF/CPP)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.8,
    textoApoio: TA_FLAGRANTE,
    enunciado: "O silêncio de João, no interrogatório policial, não pode ser interpretado em seu prejuízo nem importa confissão.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "silêncio",
    cognitivo: {
      motivo: "Aplicar o direito ao silêncio ao caso.",
      mede: "Processo Penal — garantias do preso.",
      pegadinhaDesc: "A banca pode dizer que o silêncio prejudica a defesa.",
      ondeErra: "Trata o silêncio como confissão ficta.",
      palavraCritica: "não importa confissão",
      tecnica: "CF, art. 5º, LXIII, e CPP, art. 186, parágrafo único: o silêncio é direito e não pode ser interpretado em prejuízo do réu.",
      regraMental: "Silêncio é direito: não prejudica, não confessa."
    },
    comentario: {
      resolucao: "CERTO. O direito ao silêncio (art. 5º, LXIII, da CF; art. 186, parágrafo único, do CPP) assegura que o silêncio de João não seja interpretado em seu prejuízo nem valha como confissão.",
      fundamento: "CF, art. 5º, LXIII; CPP, art. 186.",
      macete: "Silêncio: direito que não prejudica.",
      erroComum: "Tratar o silêncio como confissão.",
      comoBancaPensa: "Item de fixação aplicado ao caso."
    }
  },
  {
    id: "PP-052", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Nota de culpa (art. 306, § 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, CPP)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    textoApoio: TA_FLAGRANTE,
    enunciado: "A entrega da nota de culpa a João era dispensável, bastando a comunicação da prisão ao juiz competente.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "dispensável",
    cognitivo: {
      motivo: "Cobrar a obrigatoriedade da nota de culpa.",
      mede: "Processo Penal — formalidades do flagrante.",
      pegadinhaDesc: "Dispensa uma garantia obrigatória do preso.",
      ondeErra: "Confunde comunicação ao juiz com a nota de culpa (garantias distintas).",
      palavraCritica: "dispensável",
      tecnica: "CPP, art. 306, § 2º: em até 24h da prisão, entrega-se ao preso a nota de culpa, assinada pela autoridade, com o motivo da prisão e os nomes do condutor e testemunhas. É obrigatória.",
      regraMental: "Nota de culpa é obrigatória (24h). Não se dispensa."
    },
    comentario: {
      resolucao: "ERRADO. A nota de culpa é obrigatória: nos termos do art. 306, § 2º, do CPP, deve ser entregue ao preso em até 24 horas, com o motivo da prisão e a identificação do condutor e das testemunhas. É garantia distinta e cumulativa em relação à comunicação da prisão ao juiz.",
      fundamento: "CPP, art. 306, §§ 1º e 2º.",
      macete: "Flagrante: comunica ao juiz E entrega nota de culpa (24h).",
      erroComum: "Dispensar a nota de culpa.",
      comoBancaPensa: "Suprime garantia obrigatória do preso."
    }
  },

  /* ============ BLOCO 2 — FEMINICÍDIO (Direito Penal) ============ */
  {
    id: "DP-072", disciplina: "Direito Penal", assunto: "Feminicídio", subassunto: "Crime autônomo e hediondez",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, CP art. 121-A)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.9,
    textoApoio: TA_FEMINICIDIO,
    enunciado: "A conduta de Pedro contra Maria configura feminicídio, crime autônomo previsto no Código Penal e classificado como hediondo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "crime autônomo",
    cognitivo: {
      motivo: "Aplicar o feminicídio autônomo (Lei 14.994/2024) ao caso.",
      mede: "Direito Penal — feminicídio.",
      pegadinhaDesc: "A banca pode negar a hediondez ou tratar como qualificadora.",
      ondeErra: "Usa o regime anterior à Lei 14.994/2024.",
      palavraCritica: "crime autônomo ... hediondo",
      tecnica: "Art. 121-A do CP (Lei 14.994/2024): feminicídio é crime autônomo e hediondo. Matar mulher por razões da condição do sexo feminino, em violência doméstica, subsume-se ao tipo.",
      regraMental: "Feminicídio: tipo autônomo (121-A) e hediondo."
    },
    comentario: {
      resolucao: "CERTO. Matar mulher por razões da condição do sexo feminino, em contexto de violência doméstica, caracteriza o feminicídio (art. 121-A do CP, incluído pela Lei 14.994/2024), crime autônomo e hediondo.",
      fundamento: "CP, art. 121-A; Lei 14.994/2024; Lei 8.072/1990.",
      macete: "Feminicídio: autônomo (121-A) + hediondo.",
      erroComum: "Tratar como qualificadora ou negar hediondez.",
      comoBancaPensa: "Aplica a lei nova ao caso concreto."
    }
  },
  {
    id: "DP-073", disciplina: "Direito Penal", assunto: "Feminicídio", subassunto: "Competência do júri",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, CF art. 5º, XXXVIII)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    textoApoio: TA_FEMINICIDIO,
    enunciado: "Por ter sido praticado em contexto de violência doméstica, o feminicídio será julgado pelo juizado de violência doméstica e familiar contra a mulher, afastada a competência do tribunal do júri.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "afastada a competência do júri",
    cognitivo: {
      motivo: "Cobrar a competência do júri para o feminicídio.",
      mede: "Penal/Processo Penal — competência.",
      pegadinhaDesc: "Desloca o julgamento para o juizado de violência doméstica.",
      ondeErra: "Confunde as atribuições do juizado (medidas protetivas) com o julgamento do crime doloso contra a vida.",
      palavraCritica: "afastada a competência do júri",
      tecnica: "O feminicídio é crime doloso contra a vida → competência do tribunal do júri (art. 5º, XXXVIII, CF). O juizado de violência doméstica cuida de medidas protetivas e de outros delitos, não do julgamento do feminicídio.",
      regraMental: "Feminicídio (doloso contra a vida) = júri."
    },
    comentario: {
      resolucao: "ERRADO. O feminicídio é crime doloso contra a vida e, portanto, de competência do tribunal do júri (art. 5º, XXXVIII, da CF). O juizado de violência doméstica não julga o feminicídio; atua nas medidas protetivas e em outras infrações no âmbito doméstico.",
      fundamento: "CF, art. 5º, XXXVIII; Lei 11.340/2006.",
      macete: "Crime doloso contra a vida → júri (mesmo o feminicídio).",
      erroComum: "Mandar o feminicídio ao juizado de violência doméstica.",
      comoBancaPensa: "Troca o órgão competente."
    }
  },
  {
    id: "DP-074", disciplina: "Direito Penal", assunto: "Concurso de crimes", subassunto: "Concurso com lesão grave",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, CP)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    textoApoio: TA_FEMINICIDIO,
    enunciado: "A lesão corporal grave provocada por Pedro no irmão de Maria constitui crime autônomo, em concurso com o feminicídio.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "crime autônomo, em concurso",
    cognitivo: {
      motivo: "Aplicar o concurso de crimes ao caso (duas vítimas, dois crimes).",
      mede: "Direito Penal — concurso de crimes.",
      pegadinhaDesc: "A banca pode absorver a lesão no feminicídio (consunção indevida).",
      ondeErra: "Aplica consunção onde há bens jurídicos e vítimas distintos.",
      palavraCritica: "crime autônomo, em concurso",
      tecnica: "A lesão grave no irmão atinge vítima e bem jurídico distintos — constitui crime autônomo, em concurso (formal ou material, conforme a análise) com o feminicídio contra Maria.",
      regraMental: "Vítimas/bens distintos = crimes autônomos em concurso."
    },
    comentario: {
      resolucao: "CERTO. A lesão corporal grave contra o irmão de Maria atinge vítima e bem jurídico diversos, configurando crime autônomo em concurso com o feminicídio. Não há consunção, pois as condutas não integram um mesmo iter contra a mesma vítima.",
      fundamento: "CP, arts. 69/70 e 129, § 1º.",
      macete: "Outra vítima, outro crime — há concurso.",
      erroComum: "Absorver a lesão no feminicídio.",
      comoBancaPensa: "Testa a consunção × concurso."
    }
  },
  {
    id: "DP-075", disciplina: "Direito Penal", assunto: "Crimes Hediondos", subassunto: "Progressão de regime",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, Lei 8.072/1990)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    textoApoio: TA_FEMINICIDIO,
    enunciado: "Por ser o feminicídio crime hediondo, a pena imposta a Pedro deverá ser cumprida integralmente em regime fechado, vedada a progressão de regime.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "integralmente em regime fechado",
    cognitivo: {
      motivo: "Cobrar a progressão nos crimes hediondos aplicada ao caso.",
      mede: "Direito Penal — execução penal.",
      pegadinhaDesc: "Repete o regime integralmente fechado (inconstitucional).",
      ondeErra: "Desconhece o HC 82.959/STF e os percentuais da LEP.",
      palavraCritica: "integralmente em regime fechado",
      tecnica: "O regime integralmente fechado foi declarado inconstitucional (HC 82.959). Há progressão nos crimes hediondos, observados os percentuais do art. 112 da LEP (Lei 13.964/2019).",
      regraMental: "Hediondo progride (por percentuais). Integral fechado caiu."
    },
    comentario: {
      resolucao: "ERRADO. Ainda que hediondo, o feminicídio admite progressão de regime. A vedação ao regime integralmente fechado foi declarada inconstitucional pelo STF (HC 82.959), aplicando-se hoje os percentuais do art. 112 da LEP.",
      fundamento: "Lei 8.072/1990; STF, HC 82.959; LEP, art. 112.",
      jurisprudencia: "STF, HC 82.959.",
      macete: "Hediondo progride; integral fechado é passado.",
      erroComum: "Negar a progressão ao hediondo.",
      comoBancaPensa: "Restringe direito de execução já reconhecido."
    }
  },

  /* ============ BLOCO 3 — ABORDAGEM POLICIAL (Direitos Humanos) ============ */
  {
    id: "DH-041", disciplina: "Direitos Humanos", assunto: "Garantias do preso", subassunto: "Silêncio e defesa (CF + CADH)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, CF/CADH)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    textoApoio: TA_ABORDAGEM,
    enunciado: "A informação ao preso sobre o direito de permanecer calado e de ser assistido por advogado concretiza garantia prevista tanto na Constituição quanto na Convenção Americana de Direitos Humanos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Constituição quanto na Convenção Americana",
    cognitivo: {
      motivo: "Relacionar garantias do preso na CF e na CADH.",
      mede: "Direitos Humanos — garantias judiciais.",
      pegadinhaDesc: "A banca pode negar a previsão em um dos diplomas.",
      ondeErra: "Desconhece a dupla proteção (interna e convencional).",
      palavraCritica: "Constituição e Convenção Americana",
      tecnica: "CF, art. 5º, LXIII (silêncio e assistência de advogado) e CADH, art. 8º (garantias judiciais) protegem essas garantias — dupla fonte.",
      regraMental: "Silêncio e defesa técnica: garantidos na CF e na CADH."
    },
    comentario: {
      resolucao: "CERTO. O direito ao silêncio e à assistência de advogado está previsto no art. 5º, LXIII, da CF e nas garantias judiciais do art. 8º da Convenção Americana de Direitos Humanos, havendo dupla proteção (constitucional e convencional).",
      fundamento: "CF, art. 5º, LXIII; CADH, art. 8º.",
      macete: "Garantias do preso: CF + CADH.",
      erroComum: "Negar a previsão convencional.",
      comoBancaPensa: "Testa o diálogo entre CF e tratados de DH."
    }
  },
  {
    id: "DH-042", disciplina: "Direitos Humanos", assunto: "Uso de algemas", subassunto: "Súmula Vinculante 11",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, SV 11)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    textoApoio: TA_ABORDAGEM,
    enunciado: "O uso de algemas é livre e discricionário, podendo ser empregado em qualquer abordagem, independentemente de justificativa.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "livre e discricionário",
    cognitivo: {
      motivo: "Cobrar a excepcionalidade do uso de algemas (SV 11).",
      mede: "Direitos Humanos — dignidade da pessoa presa.",
      pegadinhaDesc: "Trata o uso de algemas como livre e irrestrito.",
      ondeErra: "Ignora a exigência de justificativa por escrito.",
      palavraCritica: "livre ... independentemente de justificativa",
      tecnica: "Súmula Vinculante 11: o uso de algemas é excepcional, admitido apenas em caso de resistência, fundado receio de fuga ou perigo à integridade, com justificativa por escrito, sob pena de responsabilidade.",
      regraMental: "Algema é exceção justificada por escrito (SV 11)."
    },
    comentario: {
      resolucao: "ERRADO. Conforme a Súmula Vinculante 11 do STF, o uso de algemas é medida excepcional, cabível apenas diante de resistência, fundado receio de fuga ou perigo à integridade física própria ou alheia, exigindo-se justificativa por escrito. Não é livre nem discricionário.",
      fundamento: "STF, Súmula Vinculante 11.",
      jurisprudencia: "STF, SV 11.",
      macete: "Algema: excepcional e justificada por escrito.",
      erroComum: "Tratar o uso de algemas como regra livre.",
      comoBancaPensa: "Termo absoluto que ignora a excepcionalidade."
    }
  },
  {
    id: "DH-043", disciplina: "Direitos Humanos", assunto: "Garantias do preso", subassunto: "Comunicação da prisão (art. 5º, LXII)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, CF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    textoApoio: TA_ABORDAGEM,
    enunciado: "A comunicação da prisão ao juiz competente e à família do preso concretiza garantia voltada à proteção contra prisões arbitrárias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "comunicação ao juiz e à família",
    cognitivo: {
      motivo: "Aplicar a garantia de comunicação da prisão (art. 5º, LXII).",
      mede: "Direitos Humanos — proteção contra prisão arbitrária.",
      pegadinhaDesc: "A banca pode restringir a comunicação apenas ao juiz.",
      ondeErra: "Esquece a comunicação à família ou pessoa indicada.",
      palavraCritica: "juiz e à família",
      tecnica: "Art. 5º, LXII: a prisão de qualquer pessoa será comunicada imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada.",
      regraMental: "Prisão: comunica ao juiz E à família."
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, LXII, da CF exige que a prisão seja comunicada imediatamente ao juiz competente e à família do preso ou a pessoa por ele indicada — garantia contra prisões arbitrárias e desaparecimentos.",
      fundamento: "CF, art. 5º, LXII.",
      macete: "Comunicação: juiz + família.",
      erroComum: "Restringir a comunicação só ao juiz.",
      comoBancaPensa: "Testa a dupla comunicação."
    }
  },
  {
    id: "DH-044", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Condução à autoridade judicial (art. 7.5)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (bloco texto-base, CADH)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    textoApoio: TA_ABORDAGEM,
    enunciado: "Segundo a Convenção Americana de Direitos Humanos, a pessoa presa não tem direito de ser conduzida, sem demora, à presença de uma autoridade judicial.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "não tem direito de ser conduzida",
    cognitivo: {
      motivo: "Cobrar o direito à apresentação sem demora à autoridade judicial (art. 7.5).",
      mede: "Direitos Humanos — CADH e audiência de custódia.",
      pegadinhaDesc: "Nega o direito de apresentação à autoridade judicial.",
      ondeErra: "Desconhece o fundamento convencional da audiência de custódia.",
      palavraCritica: "não tem direito",
      tecnica: "CADH, art. 7.5: toda pessoa presa deve ser conduzida, sem demora, à presença de um juiz — base da audiência de custódia no Brasil.",
      regraMental: "CADH 7.5: preso vai, sem demora, ao juiz (custódia)."
    },
    comentario: {
      resolucao: "ERRADO. O art. 7.5 da CADH assegura que toda pessoa presa seja conduzida, sem demora, à presença de um juiz ou autoridade autorizada por lei a exercer funções judiciais — fundamento da audiência de custódia. Negar esse direito contraria a Convenção.",
      fundamento: "CADH, art. 7.5.",
      macete: "Preso → juiz, sem demora (audiência de custódia).",
      erroComum: "Negar o direito de apresentação ao juiz.",
      comoBancaPensa: "Restrição indevida de direito convencional."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE22);
