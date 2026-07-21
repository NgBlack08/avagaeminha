/* =====================================================================
   CEBRASPE LAB — Ajuste de Qualidade (Lote 10 — calibração final C/E)
   2º passe: 36 questões INÉDITAS, TODAS "Errado", distribuídas nas
   disciplinas ainda enviesadas para "Certo" (Penal, Legislação Especial,
   Processo Penal, Estatística, Constitucional, Direitos Humanos, etc.).
   Leva a proporção global de ~58% para ~51% Certo — praticamente 50/50,
   dentro da faixa real da banca. Fundamentadas na legislação vigente e
   jurisprudência consolidada. Não reproduzem questões oficiais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE10 = [

  /* ============ DIREITO PENAL (9 itens 'Errado') ============ */
  {
    id: "DP-042", disciplina: "Direito Penal", assunto: "Aplicação da lei penal", subassunto: "Analogia in malam partem",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "Em razão do princípio da legalidade, admite-se, no direito penal brasileiro, a analogia in malam partem para incriminar condutas socialmente reprováveis ainda não tipificadas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "analogia in malam partem",
    cognitivo: {
      motivo: "Cobrar a vedação à analogia in malam partem (princípio da legalidade).",
      mede: "Princípios penais (item 1.1 do edital).",
      pegadinhaDesc: "Contradiz-se: invoca a legalidade para justificar exatamente o que ela proíbe.",
      ondeErra: "Confunde analogia in bonam partem (admitida) com in malam partem (vedada).",
      palavraCritica: "incriminar por analogia",
      tecnica: "Legalidade: não há crime sem lei anterior. Analogia para prejudicar/incriminar é proibida.",
      regraMental: "Analogia contra o réu: proibida. A favor do réu: admitida."
    },
    comentario: {
      resolucao: "ERRADO. O princípio da legalidade (CF, art. 5º, XXXIX; CP, art. 1º) VEDA a analogia in malam partem — não se pode criar crime ou agravar pena por analogia. Admite-se apenas a analogia in bonam partem (a favor do réu).",
      fundamento: "CF, art. 5º, XXXIX; CP, art. 1º.",
      macete: "Legalidade = só a lei cria crime. Analogia contra o réu, jamais.",
      erroComum: "Inverter analogia in bonam × in malam partem.",
      comoBancaPensa: "Usa o próprio princípio da legalidade como falso fundamento do proibido."
    }
  },
  {
    id: "DP-043", disciplina: "Direito Penal", assunto: "Aplicação da lei penal", subassunto: "Novatio legis in pejus",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "A lei penal mais grave (novatio legis in pejus) retroage para alcançar os fatos praticados antes de sua entrada em vigor, desde que ainda não haja sentença condenatória transitada em julgado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "lei mais grave retroage",
    cognitivo: {
      motivo: "Cobrar a irretroatividade da lei penal mais gravosa.",
      mede: "Lei penal no tempo (itens 1.2 e 1.6 do edital).",
      pegadinhaDesc: "Faz a lei mais grave retroagir, contrariando a irretroatividade.",
      ondeErra: "Confunde a retroatividade benéfica com a maléfica.",
      palavraCritica: "mais grave retroage (falso)",
      tecnica: "A lei penal só retroage para BENEFICIAR. A mais grave é irretroativa.",
      regraMental: "Lei nova pior: não pega o passado. Lei nova melhor: retroage."
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, XL, e CP, art. 2º: a lei penal não retroagirá, salvo para beneficiar o réu. A novatio legis in pejus (mais grave) é IRRETROATIVA, mesmo antes do trânsito em julgado.",
      fundamento: "CF, art. 5º, XL; CP, art. 2º e parágrafo único.",
      macete: "Só retroage para o bem. Lei pior não alcança fato anterior.",
      erroComum: "Fazer a lei mais grave retroagir.",
      comoBancaPensa: "Inverte a regra da retroatividade (só benéfica)."
    }
  },
  {
    id: "DP-044", disciplina: "Direito Penal", assunto: "Teoria do crime", subassunto: "Erro na execução (aberratio ictus)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.7,
    enunciado: "No erro na execução (aberratio ictus), em que o agente, por acidente ou erro no uso dos meios, atinge pessoa diversa da pretendida, respondem-se pelo crime considerando-se as condições e qualidades da vítima efetivamente atingida.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "vítima efetivamente atingida",
    cognitivo: {
      motivo: "Cobrar a regra do art. 73 do CP (consideram-se as qualidades da vítima visada).",
      mede: "Teoria do crime — erro na execução.",
      pegadinhaDesc: "Manda considerar a vítima atingida, quando a lei considera a vítima pretendida.",
      ondeErra: "Inverte qual vítima define as elementares/qualidades.",
      palavraCritica: "vítima atingida (deveria ser a visada)",
      tecnica: "Aberratio ictus: consideram-se as condições da vítima PRETENDIDA (art. 73 c/c art. 20, § 3º).",
      regraMental: "Errou o alvo: responde como se tivesse acertado quem QUERIA acertar."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 73: no erro na execução, o agente responde como se tivesse atingido a vítima PRETENDIDA, considerando-se as condições/qualidades desta (art. 20, § 3º), e não as da vítima efetivamente atingida.",
      fundamento: "CP, arts. 73 e 20, § 3º.",
      macete: "Aberratio ictus: valem as qualidades de quem o agente QUERIA atingir.",
      erroComum: "Considerar a vítima realmente atingida.",
      comoBancaPensa: "Troca a vítima de referência (visada × atingida)."
    }
  },
  {
    id: "DP-045", disciplina: "Direito Penal", assunto: "Ilicitude", subassunto: "Estado de necessidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "Pode invocar o estado de necessidade, para excluir a ilicitude de sua conduta, aquele que tinha o dever legal de enfrentar o perigo, ainda que dispusesse de meios para fazê-lo.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "dever legal de enfrentar o perigo",
    cognitivo: {
      motivo: "Cobrar a vedação do art. 24, § 1º, do CP.",
      mede: "Excludentes de ilicitude — estado de necessidade.",
      pegadinhaDesc: "Permite o estado de necessidade a quem tinha o dever legal de enfrentar o perigo.",
      ondeErra: "Ignora a restrição do § 1º do art. 24.",
      palavraCritica: "dever legal de enfrentar (não pode alegar)",
      tecnica: "Quem tem o dever legal de enfrentar o perigo (bombeiro, policial, salva-vidas) NÃO pode alegar estado de necessidade para se eximir.",
      regraMental: "Tem o dever de encarar o perigo? Não invoca estado de necessidade para fugir dele."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 24, § 1º: não pode alegar estado de necessidade quem tinha o DEVER LEGAL de enfrentar o perigo. O bombeiro, por exemplo, não se exime de entrar no incêndio invocando a excludente.",
      fundamento: "CP, art. 24, § 1º.",
      macete: "Dever legal de enfrentar o risco = sem estado de necessidade.",
      erroComum: "Estender a excludente a quem tem o dever de agir.",
      comoBancaPensa: "Suprime a restrição do § 1º do art. 24."
    }
  },
  {
    id: "DP-046", disciplina: "Direito Penal", assunto: "Teoria do crime", subassunto: "Crime impossível",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "O crime impossível, decorrente da absoluta ineficácia do meio ou da absoluta impropriedade do objeto, é punível a título de tentativa, com a pena correspondente reduzida.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "punível a título de tentativa",
    cognitivo: {
      motivo: "Cobrar a impunibilidade do crime impossível (art. 17 do CP).",
      mede: "Teoria do crime — crime impossível.",
      pegadinhaDesc: "Pune o crime impossível como tentativa, quando ele não é punível.",
      ondeErra: "Confunde crime impossível (atípico) com tentativa (punível).",
      palavraCritica: "punível (falso)",
      tecnica: "Art. 17: por ineficácia ABSOLUTA do meio ou impropriedade ABSOLUTA do objeto, não se pune. Se a ineficácia/impropriedade for relativa, há tentativa.",
      regraMental: "Crime impossível (absoluto) = não pune. Relativo = tentativa."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 17: não se pune a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar-se o crime (teoria objetiva temperada). O crime impossível NÃO é punível.",
      fundamento: "CP, art. 17.",
      macete: "Absoluta ineficácia/impropriedade = crime impossível = impunível.",
      erroComum: "Punir o crime impossível como tentativa.",
      comoBancaPensa: "Transforma o impunível (art. 17) em punível."
    }
  },
  {
    id: "DP-047", disciplina: "Direito Penal", assunto: "Teoria da pena", subassunto: "Reincidência",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Verifica-se a reincidência quando o agente comete novo crime antes de transitar em julgado a sentença que o tenha condenado por crime anterior.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "antes de transitar em julgado",
    cognitivo: {
      motivo: "Cobrar o conceito de reincidência (art. 63 do CP).",
      mede: "Teoria da pena — reincidência.",
      pegadinhaDesc: "Antecipa a reincidência para antes do trânsito em julgado do crime anterior.",
      ondeErra: "Confunde reincidência com maus antecedentes.",
      palavraCritica: "antes (deveria ser depois do trânsito em julgado)",
      tecnica: "Reincidência: novo crime DEPOIS de transitada em julgado a condenação anterior (art. 63).",
      regraMental: "Reincidente = cometeu o novo crime DEPOIS de já condenado definitivamente antes."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 63: a reincidência verifica-se quando o agente comete novo crime DEPOIS de transitar em julgado a sentença que o condenou por crime anterior. Se o novo crime é anterior ao trânsito em julgado, há, no máximo, maus antecedentes.",
      fundamento: "CP, art. 63; Lei de Contravenções, art. 7º.",
      macete: "Reincidência exige condenação anterior DEFINITIVA antes do novo crime.",
      erroComum: "Confundir reincidência com maus antecedentes.",
      comoBancaPensa: "Troca 'depois' por 'antes' do trânsito em julgado."
    }
  },
  {
    id: "DP-048", disciplina: "Direito Penal", assunto: "Concurso de crimes", subassunto: "Crime continuado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "No crime continuado, aplica-se a regra do cúmulo material, somando-se as penas de cada um dos delitos que integram a continuidade delitiva.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "cúmulo material",
    cognitivo: {
      motivo: "Distinguir exasperação (continuado) de cúmulo material (concurso material).",
      mede: "Concurso de crimes.",
      pegadinhaDesc: "Aplica o cúmulo material ao crime continuado, que segue a exasperação.",
      ondeErra: "Confunde continuado (uma pena aumentada) com concurso material (soma).",
      palavraCritica: "cúmulo material (deveria ser exasperação)",
      tecnica: "Crime continuado (art. 71): aplica-se a pena de UM só crime, aumentada de 1/6 a 2/3 (exasperação).",
      regraMental: "Continuado = exasperação (uma pena + aumento). Concurso material = soma."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 71: no crime continuado, aplica-se a pena de um só dos crimes (se idênticas) ou a mais grave (se diversas), AUMENTADA de 1/6 a 2/3 — sistema da exasperação. O cúmulo material (soma) é do concurso material (art. 69).",
      fundamento: "CP, arts. 69 e 71.",
      macete: "Continuado = exasperação. Material = soma. Formal = exasperação (regra).",
      erroComum: "Aplicar a soma (cúmulo material) ao crime continuado.",
      comoBancaPensa: "Troca o sistema de aplicação da pena entre concursos."
    }
  },
  {
    id: "DP-049", disciplina: "Direito Penal", assunto: "Crimes contra a pessoa", subassunto: "Homicídio privilegiado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.72,
    enunciado: "O homicídio privilegiado, cometido por relevante valor social ou moral ou sob o domínio de violenta emoção logo após injusta provocação da vítima, é classificado como crime hediondo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "privilegiado / hediondo",
    cognitivo: {
      motivo: "Cobrar que o homicídio privilegiado não é hediondo.",
      mede: "Crimes contra a pessoa + crimes hediondos.",
      pegadinhaDesc: "Atribui hediondez ao privilegiado (só o qualificado é hediondo).",
      ondeErra: "Confunde privilegiado (redução de pena) com qualificado (hediondo).",
      palavraCritica: "privilegiado = hediondo (falso)",
      tecnica: "Homicídio QUALIFICADO é hediondo; o PRIVILEGIADO (art. 121, § 1º) não é.",
      regraMental: "Privilegiado reduz a pena e não é hediondo. Qualificado é hediondo."
    },
    comentario: {
      resolucao: "ERRADO. O homicídio privilegiado (art. 121, § 1º) é causa de diminuição de pena e NÃO é hediondo. Hediondo é o homicídio qualificado (art. 121, § 2º) e o simples praticado em atividade típica de grupo de extermínio (Lei 8.072/1990).",
      fundamento: "CP, art. 121, §§ 1º e 2º; Lei 8.072/1990, art. 1º, I.",
      macete: "Privilegiado: pena menor, não hediondo. Qualificado: hediondo.",
      erroComum: "Tratar o privilegiado como hediondo.",
      comoBancaPensa: "Troca privilegiado por qualificado quanto à hediondez."
    }
  },
  {
    id: "DP-050", disciplina: "Direito Penal", assunto: "Teoria da pena", subassunto: "Prescrição",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "Além do racismo e da ação de grupos armados contra a ordem constitucional, também o crime de peculato, por ofender a Administração Pública, é imprescritível no ordenamento brasileiro.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "peculato imprescritível",
    cognitivo: {
      motivo: "Cobrar o rol taxativo de crimes imprescritíveis.",
      mede: "Teoria da pena — prescrição.",
      pegadinhaDesc: "Inclui o peculato entre os imprescritíveis, ampliando o rol constitucional.",
      ondeErra: "Assume que crimes graves contra a Administração seriam imprescritíveis.",
      palavraCritica: "peculato imprescritível (falso)",
      tecnica: "Imprescritíveis são APENAS: racismo (art. 5º, XLII) e ação de grupos armados contra a ordem constitucional (XLIV). Todos os demais prescrevem.",
      regraMental: "Só 2 imprescritíveis: racismo e grupos armados. Peculato prescreve."
    },
    comentario: {
      resolucao: "ERRADO. Os únicos crimes imprescritíveis na CF são o racismo (art. 5º, XLII) e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV). O peculato, como os demais crimes, está sujeito à prescrição.",
      fundamento: "CF, art. 5º, XLII e XLIV.",
      macete: "Imprescritíveis: só racismo e grupos armados. O resto prescreve.",
      erroComum: "Ampliar o rol de imprescritíveis.",
      comoBancaPensa: "Generaliza a imprescritibilidade para crime fora do rol."
    }
  },

  /* ============ LEGISLAÇÃO PENAL ESPECIAL (8 itens 'Errado') ============ */
  {
    id: "LE-039", disciplina: "Legislação Especial", assunto: "Lei de Drogas", subassunto: "Pena do tráfico",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "O crime de tráfico de drogas, previsto no art. 33 da Lei nº 11.343/2006, é punido com pena de reclusão de três a dez anos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "três a dez anos",
    cognitivo: {
      motivo: "Cobrar a pena do tráfico (art. 33).",
      mede: "Lei de Drogas (Dias 20-21 do plano).",
      pegadinhaDesc: "Reduz a pena mínima (3) e o máximo (10), quando são 5 a 15 anos.",
      ondeErra: "Não memoriza os limites da pena do tráfico.",
      palavraCritica: "três a dez (deveria ser cinco a quinze)",
      tecnica: "Tráfico (art. 33): reclusão de 5 a 15 anos + multa.",
      regraMental: "Tráfico = 5 a 15 anos. Tráfico privilegiado (§4º) reduz de 1/6 a 2/3."
    },
    comentario: {
      resolucao: "ERRADO. Lei 11.343/2006, art. 33: a pena do tráfico é de reclusão de 5 (cinco) a 15 (quinze) anos, e multa. A assertiva reduziu indevidamente os limites.",
      fundamento: "Lei 11.343/2006, art. 33.",
      macete: "Tráfico = 5 a 15. Não confundir com outras penas.",
      erroComum: "Trocar os limites da pena do tráfico.",
      comoBancaPensa: "Altera os números da pena (ponto de checagem)."
    }
  },
  {
    id: "LE-040", disciplina: "Legislação Especial", assunto: "Organização Criminosa", subassunto: "Infiltração de agentes",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Na Lei nº 12.850/2013, a infiltração de agentes de polícia em tarefas de investigação independe de autorização judicial, bastando a requisição da autoridade policial ou do Ministério Público.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "independe de autorização judicial",
    cognitivo: {
      motivo: "Cobrar a reserva de jurisdição na infiltração de agentes (art. 10).",
      mede: "Lei do Crime Organizado — meios de obtenção de prova.",
      pegadinhaDesc: "Dispensa a autorização judicial para a infiltração.",
      ondeErra: "Confunde a representação/requerimento com a decisão que autoriza.",
      palavraCritica: "independe de autorização judicial (falso)",
      tecnica: "Infiltração de agentes: exige AUTORIZAÇÃO JUDICIAL, precedida de requerimento do MP ou representação do delegado.",
      regraMental: "Infiltração é medida excepcional: só com ordem do juiz."
    },
    comentario: {
      resolucao: "ERRADO. Lei 12.850/2013, art. 10: a infiltração de agentes depende de AUTORIZAÇÃO JUDICIAL circunstanciada, mediante representação do delegado ou requerimento do MP. A autoridade policial não a autoriza por conta própria.",
      fundamento: "Lei 12.850/2013, arts. 10 e ss.",
      macete: "Infiltração = reserva de jurisdição. Delegado representa, o juiz autoriza.",
      erroComum: "Dispensar a ordem judicial.",
      comoBancaPensa: "Retira a reserva de jurisdição da medida invasiva."
    }
  },
  {
    id: "LE-041", disciplina: "Legislação Especial", assunto: "Lavagem de dinheiro", subassunto: "Infração antecedente",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "Após as alterações promovidas na Lei nº 9.613/1998, somente crimes hediondos e equiparados podem figurar como infração penal antecedente do crime de lavagem de dinheiro.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "somente crimes hediondos",
    cognitivo: {
      motivo: "Cobrar a eliminação do rol de crimes antecedentes (Lei 12.683/2012).",
      mede: "Lavagem de dinheiro (Dia 25 do plano).",
      pegadinhaDesc: "Restringe a infração antecedente a hediondos, quando qualquer infração serve.",
      ondeErra: "Aplica o regime anterior (que tinha rol fechado).",
      palavraCritica: "somente hediondos (falso)",
      tecnica: "Desde a Lei 12.683/2012, QUALQUER infração penal (crime ou contravenção) pode ser antecedente da lavagem.",
      regraMental: "Lavagem hoje: antecedente é qualquer infração penal, não só as graves."
    },
    comentario: {
      resolucao: "ERRADO. A Lei 12.683/2012 eliminou o rol taxativo de crimes antecedentes. Atualmente, QUALQUER infração penal (crime ou contravenção) pode figurar como antecedente da lavagem de dinheiro (Lei 9.613/1998, art. 1º).",
      fundamento: "Lei 9.613/1998, art. 1º (redação da Lei 12.683/2012).",
      macete: "Antecedente da lavagem = qualquer infração penal (rol aberto).",
      erroComum: "Restringir aos hediondos (regime antigo).",
      comoBancaPensa: "Mantém o rol fechado, superado pela Lei 12.683/2012."
    }
  },
  {
    id: "LE-042", disciplina: "Legislação Especial", assunto: "Crimes hediondos", subassunto: "Livramento condicional",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "É vedada, de forma absoluta, a concessão de livramento condicional aos condenados por crimes hediondos ou equiparados, qualquer que seja a situação do apenado.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "vedada de forma absoluta",
    cognitivo: {
      motivo: "Cobrar a possibilidade de livramento condicional nos hediondos (art. 83, V, do CP).",
      mede: "Crimes hediondos (Dia 27 do plano).",
      pegadinhaDesc: "Absolutiza a vedação, ignorando a hipótese de 2/3 para o não reincidente específico.",
      ondeErra: "Confunde a vedação para o reincidente específico com vedação total.",
      palavraCritica: "vedada de forma absoluta (falso)",
      tecnica: "CP, art. 83, V: cabe livramento após cumpridos mais de 2/3 da pena, salvo se reincidente específico em hediondo.",
      regraMental: "Hediondo: livramento com 2/3 cumpridos. Só é vedado ao reincidente específico."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 83, V: nos crimes hediondos e equiparados, admite-se o livramento condicional após o cumprimento de mais de DOIS TERÇOS da pena, sendo vedado apenas ao reincidente específico nesses crimes. Não há vedação absoluta.",
      fundamento: "CP, art. 83, V; Lei 8.072/1990.",
      macete: "Hediondo: livramento com 2/3. Vedado só ao reincidente específico.",
      erroComum: "Tratar a vedação como absoluta.",
      comoBancaPensa: "Termo absoluto ('de forma absoluta') sobre benefício que tem exceção."
    }
  },
  {
    id: "LE-043", disciplina: "Legislação Especial", assunto: "Abuso de Autoridade", subassunto: "Ação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "Os crimes de abuso de autoridade, previstos na Lei nº 13.869/2019, procedem-se mediante ação penal pública condicionada à representação do ofendido.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "condicionada à representação",
    cognitivo: {
      motivo: "Cobrar a natureza da ação penal na Lei de Abuso de Autoridade (art. 3º).",
      mede: "Legislação penal especial — abuso de autoridade (Dia 30 do plano).",
      pegadinhaDesc: "Exige representação, quando a ação é incondicionada.",
      ondeErra: "Confunde com crimes que dependem da vítima.",
      palavraCritica: "condicionada (deveria ser incondicionada)",
      tecnica: "Lei 13.869/2019, art. 3º: os crimes de abuso de autoridade são de ação penal pública INCONDICIONADA.",
      regraMental: "Abuso de autoridade = incondicionada. O Estado age de ofício."
    },
    comentario: {
      resolucao: "ERRADO. Lei 13.869/2019, art. 3º: os crimes de abuso de autoridade são de ação penal pública INCONDICIONADA. Admite-se ação penal privada subsidiária da pública se a denúncia não for oferecida no prazo legal.",
      fundamento: "Lei 13.869/2019, art. 3º.",
      macete: "Abuso de autoridade: incondicionada (não depende de representação).",
      erroComum: "Exigir representação da vítima.",
      comoBancaPensa: "Cria falsa condição de procedibilidade."
    }
  },
  {
    id: "LE-044", disciplina: "Legislação Especial", assunto: "Estatuto da Pessoa Idosa", subassunto: "Conceito de idoso",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.75,
    enunciado: "Para os fins do Estatuto da Pessoa Idosa (Lei nº 10.741/2003), considera-se idosa a pessoa com idade igual ou superior a sessenta e cinco anos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "sessenta e cinco anos",
    cognitivo: {
      motivo: "Cobrar o marco etário do Estatuto (60 anos).",
      mede: "Legislação penal especial — Estatuto da Pessoa Idosa.",
      pegadinhaDesc: "Troca 60 por 65 anos (marco de outros benefícios, como a gratuidade no transporte).",
      ondeErra: "Confunde o conceito legal (60) com o marco de 65 de certos benefícios.",
      palavraCritica: "sessenta e cinco (deveria ser sessenta)",
      tecnica: "Estatuto: idoso é quem tem 60 anos ou mais (art. 1º).",
      regraMental: "Idoso = 60+. O '65' aparece em benefícios específicos (ex.: transporte gratuito)."
    },
    comentario: {
      resolucao: "ERRADO. Lei 10.741/2003, art. 1º: considera-se idosa a pessoa com idade igual ou superior a 60 (sessenta) anos. O marco de 65 anos aparece para determinados benefícios (como a gratuidade no transporte coletivo urbano), não para o conceito geral.",
      fundamento: "Lei 10.741/2003, art. 1º.",
      macete: "Idoso = 60. Alguns benefícios só aos 65.",
      erroComum: "Usar 65 como conceito geral de idoso.",
      comoBancaPensa: "Troca o marco etário do conceito."
    }
  },
  {
    id: "LE-045", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Sujeito ativo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "O crime de tortura previsto na Lei nº 9.455/1997 é próprio, somente podendo ser praticado por funcionário público no exercício de suas funções.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "somente funcionário público",
    cognitivo: {
      motivo: "Cobrar que a tortura é, em regra, crime comum.",
      mede: "Legislação penal especial — tortura (Dia 29 do plano).",
      pegadinhaDesc: "Restringe o sujeito ativo ao funcionário público.",
      ondeErra: "Confunde a tortura (crime comum) com a tortura-omissão (própria de quem tem o dever de evitar).",
      palavraCritica: "somente funcionário público (falso)",
      tecnica: "Tortura é, em regra, crime COMUM (qualquer pessoa). A condição de agente público é causa de aumento de pena (§ 4º).",
      regraMental: "Qualquer um pode torturar (crime comum). Agente público: pena aumentada, não requisito."
    },
    comentario: {
      resolucao: "ERRADO. A tortura (Lei 9.455/1997) é, em regra, crime COMUM — pode ser praticada por qualquer pessoa. A qualidade de agente público funciona como causa de aumento de pena (art. 1º, § 4º, I), e não como elementar. Exceção: a tortura-omissão (§ 2º) é própria de quem tinha o dever de evitá-la.",
      fundamento: "Lei 9.455/1997, art. 1º, §§ 2º e 4º.",
      macete: "Tortura: crime comum. Ser agente público só aumenta a pena.",
      erroComum: "Tratar a tortura como crime próprio de funcionário.",
      comoBancaPensa: "Restringe o sujeito ativo, criando falsa elementar."
    }
  },
  {
    id: "LE-046", disciplina: "Legislação Especial", assunto: "Estatuto do Desarmamento", subassunto: "Disparo de arma de fogo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "No Estatuto do Desarmamento, o crime de disparo de arma de fogo em local habitado somente se configura quando o disparo resulta em lesão corporal ou morte de alguém.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "somente quando resulta em lesão",
    cognitivo: {
      motivo: "Cobrar a natureza de perigo abstrato do disparo de arma de fogo (art. 15).",
      mede: "Estatuto do Desarmamento (Dias 18-19 do plano).",
      pegadinhaDesc: "Exige resultado lesivo para o crime de disparo, que é de perigo.",
      ondeErra: "Confunde crime de perigo com crime de dano.",
      palavraCritica: "somente quando resulta em lesão (falso)",
      tecnica: "Art. 15: disparar arma de fogo em lugar habitado é crime de perigo abstrato — independe de lesão. Se houver resultado mais grave, há outro crime (absorção/concurso).",
      regraMental: "Disparo em local habitado: crime só pela conduta perigosa, sem precisar ferir ninguém."
    },
    comentario: {
      resolucao: "ERRADO. Lei 10.826/2003, art. 15: disparar arma de fogo ou acionar munição em lugar habitado ou via pública é crime de PERIGO ABSTRATO, consumando-se com o disparo, independentemente de lesão. Havendo intenção de matar/ferir, responde-se pelo crime respectivo (o disparo é absorvido).",
      fundamento: "Lei 10.826/2003, art. 15.",
      macete: "Disparo em local habitado: crime pela conduta, sem precisar acertar ninguém.",
      erroComum: "Exigir resultado lesivo (tratar como crime de dano).",
      comoBancaPensa: "Cria exigência de resultado em crime de perigo."
    }
  },

  /* ============ PROCESSO PENAL (6 itens 'Errado') ============ */
  {
    id: "PP-031", disciplina: "Processo Penal", assunto: "Prisão e medidas cautelares", subassunto: "Fiança pela autoridade policial",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "A autoridade policial não pode conceder fiança em nenhuma hipótese, sendo tal atribuição privativa da autoridade judiciária.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "não pode em nenhuma hipótese",
    cognitivo: {
      motivo: "Cobrar a competência do delegado para conceder fiança (art. 322 do CPP).",
      mede: "Prisão e liberdade provisória.",
      pegadinhaDesc: "Absolutiza a vedação, ignorando o art. 322.",
      ondeErra: "Desconhece a competência do delegado nas infrações de menor pena.",
      palavraCritica: "em nenhuma hipótese (falso)",
      tecnica: "CPP, art. 322: o delegado concede fiança nas infrações com pena privativa máxima não superior a 4 anos. Acima disso, é o juiz.",
      regraMental: "Delegado arbitra fiança até 4 anos de pena máxima. Acima, só o juiz."
    },
    comentario: {
      resolucao: "ERRADO. CPP, art. 322: a autoridade policial pode conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 anos. Nas demais, a fiança será requerida ao juiz.",
      fundamento: "CPP, art. 322.",
      macete: "Delegado dá fiança até 4 anos. Passou disso, é com o juiz.",
      erroComum: "Negar totalmente a competência do delegado.",
      comoBancaPensa: "Termo absoluto sobre competência que existe (até 4 anos)."
    }
  },
  {
    id: "PP-032", disciplina: "Processo Penal", assunto: "Ação penal", subassunto: "Princípio da oportunidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "A ação penal de iniciativa privada rege-se pelo princípio da obrigatoriedade, de modo que o ofendido está obrigado a oferecer a queixa-crime quando presentes indícios de autoria e materialidade.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "obrigatoriedade",
    cognitivo: {
      motivo: "Cobrar o princípio da oportunidade na ação penal privada.",
      mede: "Ação penal.",
      pegadinhaDesc: "Aplica à ação privada a obrigatoriedade (que é da pública).",
      ondeErra: "Troca oportunidade (privada) por obrigatoriedade (pública).",
      palavraCritica: "obrigatoriedade (deveria ser oportunidade)",
      tecnica: "Ação privada: oportunidade/conveniência (a vítima decide se processa) e disponibilidade (pode desistir).",
      regraMental: "Privada = a vítima escolhe (oportunidade). Pública = MP é obrigado (obrigatoriedade)."
    },
    comentario: {
      resolucao: "ERRADO. A ação penal de iniciativa privada rege-se pela OPORTUNIDADE (o ofendido decide se oferece ou não a queixa) e pela disponibilidade (pode dela desistir por perdão ou perempção). A obrigatoriedade é princípio da ação penal pública.",
      fundamento: "CPP, arts. 30, 48, 51, 60; doutrina.",
      macete: "Privada: oportunidade e disponibilidade. Pública: obrigatoriedade e indisponibilidade.",
      erroComum: "Aplicar a obrigatoriedade à ação privada.",
      comoBancaPensa: "Troca os princípios entre ação pública e privada."
    }
  },
  {
    id: "PP-033", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Ônus da prova",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "No processo penal, em decorrência do princípio da verdade real, cabe ao acusado o ônus de provar a sua inocência.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "ônus de provar a inocência",
    cognitivo: {
      motivo: "Cobrar o ônus da prova e a presunção de inocência.",
      mede: "Provas / disposições constitucionais aplicáveis.",
      pegadinhaDesc: "Inverte o ônus da prova, atribuindo-o ao réu.",
      ondeErra: "Ignora a presunção de inocência (o ônus é da acusação).",
      palavraCritica: "acusado prova a inocência (falso)",
      tecnica: "O ônus de provar a culpa é da ACUSAÇÃO. O réu é presumido inocente e não precisa provar sua inocência.",
      regraMental: "Quem acusa, prova. Réu não tem que provar que é inocente."
    },
    comentario: {
      resolucao: "ERRADO. Por força da presunção de inocência (CF, art. 5º, LVII), o ônus de provar a culpa recai sobre a ACUSAÇÃO. O acusado não tem o dever de provar sua inocência; a dúvida se resolve em seu favor (in dubio pro reo).",
      fundamento: "CF, art. 5º, LVII; CPP, art. 156.",
      macete: "Ônus da prova = acusação. Réu não prova inocência.",
      erroComum: "Inverter o ônus da prova no processo penal.",
      comoBancaPensa: "Usa 'verdade real' como falso fundamento para inverter o ônus."
    }
  },
  {
    id: "PP-034", disciplina: "Processo Penal", assunto: "Disposições preliminares", subassunto: "Citação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.72,
    enunciado: "No processo penal, a citação por edital constitui a regra geral, adotada sempre que o acusado não for localizado na primeira tentativa de citação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "edital como regra",
    cognitivo: {
      motivo: "Cobrar a preferência pela citação pessoal.",
      mede: "Disposições do CPP.",
      pegadinhaDesc: "Coloca a citação por edital como regra.",
      ondeErra: "Inverte a excepcionalidade do edital.",
      palavraCritica: "edital como regra (falso)",
      tecnica: "A citação PESSOAL é a regra; a por edital é excepcional (réu não encontrado após diligências, art. 361).",
      regraMental: "Regra: citação pessoal. Edital só quando o réu não é encontrado, esgotadas as tentativas."
    },
    comentario: {
      resolucao: "ERRADO. A regra é a citação PESSOAL. A citação por edital é medida excepcional, cabível quando o acusado não é encontrado (CPP, art. 361), após frustradas as tentativas de localização. Se, citado por edital, não comparecer nem constituir advogado, aplica-se o art. 366.",
      fundamento: "CPP, arts. 351, 361 e 366.",
      macete: "Pessoal é regra; edital é o último recurso.",
      erroComum: "Tratar o edital como forma comum de citação.",
      comoBancaPensa: "Inverte regra (pessoal) e exceção (edital)."
    }
  },
  {
    id: "PP-035", disciplina: "Processo Penal", assunto: "Prisão e medidas cautelares", subassunto: "Habeas corpus",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "O habeas corpus, por versar sobre a liberdade de locomoção, exige capacidade postulatória, de modo que somente pode ser impetrado por advogado regularmente inscrito na OAB.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "somente por advogado",
    cognitivo: {
      motivo: "Cobrar a informalidade do HC (legitimação universal).",
      mede: "Disposições constitucionais aplicáveis ao processo penal.",
      pegadinhaDesc: "Exige advogado para o HC, quando qualquer pessoa pode impetrar.",
      ondeErra: "Aplica a capacidade postulatória ao HC.",
      palavraCritica: "somente por advogado (falso)",
      tecnica: "HC: qualquer pessoa, em seu favor ou de outrem, pode impetrar, dispensada a capacidade postulatória (CPP, art. 654).",
      regraMental: "HC é informal: até o próprio preso, sem advogado, pode impetrar."
    },
    comentario: {
      resolucao: "ERRADO. CPP, art. 654: o habeas corpus pode ser impetrado por QUALQUER PESSOA, em seu favor ou de terceiro, bem como pelo Ministério Público, dispensando-se a capacidade postulatória (não exige advogado). É instrumento marcado pela informalidade.",
      fundamento: "CF, art. 5º, LXVIII; CPP, art. 654.",
      macete: "HC: qualquer um impetra, sem advogado.",
      erroComum: "Exigir advogado/capacidade postulatória no HC.",
      comoBancaPensa: "Cria exigência de advogado inexistente no HC."
    }
  },
  {
    id: "PP-036", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Interrogatório na instrução",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "No procedimento comum, o interrogatório do acusado constitui o primeiro ato da instrução processual, realizado antes da oitiva das testemunhas de acusação e defesa.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "primeiro ato da instrução",
    cognitivo: {
      motivo: "Cobrar a posição do interrogatório como último ato da instrução (Lei 11.719/2008).",
      mede: "Provas / procedimento.",
      pegadinhaDesc: "Coloca o interrogatório como primeiro ato (regime antigo).",
      ondeErra: "Aplica a ordem anterior à reforma de 2008.",
      palavraCritica: "primeiro ato (deveria ser o último)",
      tecnica: "Após a Lei 11.719/2008, o interrogatório é o ÚLTIMO ato da instrução, garantindo a autodefesa após toda a prova.",
      regraMental: "Interrogatório = último ato da instrução (o réu fala por último)."
    },
    comentario: {
      resolucao: "ERRADO. Após a Lei 11.719/2008, o interrogatório passou a ser o ÚLTIMO ato da instrução (CPP, art. 400), realizado depois da oitiva das testemunhas, para ampliar a autodefesa. O STF estende essa lógica a procedimentos especiais.",
      fundamento: "CPP, art. 400 (Lei 11.719/2008); jurisprudência do STF.",
      macete: "O réu fala por último: interrogatório = último ato da instrução.",
      erroComum: "Aplicar a ordem anterior a 2008 (interrogatório primeiro).",
      comoBancaPensa: "Usa a ordem revogada do interrogatório."
    }
  },

  /* ============ ESTATÍSTICA (4 itens 'Errado') ============ */
  {
    id: "ES-018", disciplina: "Estatística e Análise de Dados", assunto: "Medidas de posição", subassunto: "Moda em variáveis qualitativas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "A moda é a única medida de tendência central que não pode ser utilizada para variáveis qualitativas, por depender de operações aritméticas sobre os dados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "moda / qualitativas",
    cognitivo: {
      motivo: "Cobrar a aplicabilidade da moda a variáveis qualitativas.",
      mede: "Medidas de tendência central (item 2 do edital).",
      pegadinhaDesc: "Inverte: a moda é justamente a que se aplica a qualitativas.",
      ondeErra: "Confunde a moda (contagem) com média/mediana (exigem ordem/aritmética).",
      palavraCritica: "moda não pode em qualitativas (falso)",
      tecnica: "Moda: valor mais frequente — aplicável inclusive a variáveis qualitativas nominais. Média e mediana exigem dados numéricos/ordenáveis.",
      regraMental: "Moda serve para qualquer variável (até nominal). Média/mediana, só numéricas/ordenáveis."
    },
    comentario: {
      resolucao: "ERRADO. É o contrário: a MODA (valor/categoria mais frequente) é a única medida de tendência central aplicável a variáveis QUALITATIVAS nominais, pois independe de operações aritméticas. Média e mediana exigem dados quantitativos (ou pelo menos ordenáveis, no caso da mediana).",
      fundamento: "Estatística descritiva — medidas de posição.",
      macete: "Cor preferida da turma? Só a moda responde (qualitativa).",
      erroComum: "Achar que a moda não serve para qualitativas.",
      comoBancaPensa: "Inverte a única medida aplicável a variáveis qualitativas."
    }
  },
  {
    id: "ES-019", disciplina: "Estatística e Análise de Dados", assunto: "Correlação", subassunto: "Coeficiente de Pearson",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "O coeficiente de correlação linear de Pearson pode assumir qualquer valor real, sendo tanto mais forte a correlação quanto maior for o seu valor absoluto, inclusive acima de um.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "acima de um",
    cognitivo: {
      motivo: "Cobrar o intervalo do coeficiente de Pearson (−1 a +1).",
      mede: "Coeficiente de correlação de Pearson (item 2 do edital).",
      pegadinhaDesc: "Admite valores acima de 1 para o coeficiente.",
      ondeErra: "Desconhece que Pearson está limitado a [−1, +1].",
      palavraCritica: "acima de um (impossível)",
      tecnica: "Pearson varia de −1 a +1. |r|=1: correlação linear perfeita; r=0: ausência de correlação linear.",
      regraMental: "Pearson vive entre −1 e +1. Nunca passa disso."
    },
    comentario: {
      resolucao: "ERRADO. O coeficiente de correlação de Pearson (r) está limitado ao intervalo [−1, +1]. Não assume valores acima de +1 nem abaixo de −1. |r| próximo de 1 indica correlação linear forte; r = 0 indica ausência de correlação linear.",
      fundamento: "Estatística — coeficiente de correlação de Pearson.",
      macete: "Pearson: de −1 a +1, sempre. Fora disso, é erro.",
      erroComum: "Admitir |r| > 1.",
      comoBancaPensa: "Extrapola o intervalo do coeficiente."
    }
  },
  {
    id: "ES-020", disciplina: "Estatística e Análise de Dados", assunto: "Distribuição normal", subassunto: "Média, mediana e moda",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "Na distribuição normal, por ser assimétrica à direita, a média, a mediana e a moda assumem necessariamente valores distintos entre si.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "assimétrica / valores distintos",
    cognitivo: {
      motivo: "Cobrar a simetria da distribuição normal e a coincidência das três medidas.",
      mede: "Distribuição normal (item 2 do edital).",
      pegadinhaDesc: "Diz que a normal é assimétrica e que as três medidas diferem.",
      ondeErra: "Confunde a normal (simétrica) com distribuições assimétricas.",
      palavraCritica: "assimétrica / valores distintos (falso)",
      tecnica: "Na normal (simétrica), média = mediana = moda, coincidindo no centro.",
      regraMental: "Normal é simétrica: média = mediana = moda. Assimetria é o oposto."
    },
    comentario: {
      resolucao: "ERRADO. A distribuição normal é SIMÉTRICA em torno da média; nela, média, mediana e moda COINCIDEM (assumem o mesmo valor central). A afirmação de assimetria e de valores distintos é falsa.",
      fundamento: "Estatística — distribuição normal.",
      macete: "Normal = sino simétrico: média = mediana = moda.",
      erroComum: "Tratar a normal como assimétrica.",
      comoBancaPensa: "Nega a simetria característica da normal."
    }
  },
  {
    id: "ES-021", disciplina: "Estatística e Análise de Dados", assunto: "Probabilidade", subassunto: "Intervalo de probabilidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.75,
    enunciado: "A probabilidade de ocorrência de um evento pode assumir valores negativos, especialmente quando se trata de um evento impossível.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "valores negativos",
    cognitivo: {
      motivo: "Cobrar o intervalo axiomático da probabilidade [0, 1].",
      mede: "Conceitos básicos de probabilidade (item 2 do edital).",
      pegadinhaDesc: "Admite probabilidade negativa para evento impossível.",
      ondeErra: "Confunde 'evento impossível' (probabilidade zero) com valor negativo.",
      palavraCritica: "negativos (impossível)",
      tecnica: "Axiomas de Kolmogorov: 0 ≤ P(A) ≤ 1. Evento impossível: P = 0. Evento certo: P = 1.",
      regraMental: "Probabilidade vai de 0 a 1. Impossível = 0, não negativo."
    },
    comentario: {
      resolucao: "ERRADO. Pela definição axiomática, a probabilidade de qualquer evento está entre 0 e 1 (0 ≤ P ≤ 1). Um evento impossível tem probabilidade ZERO — nunca negativa. Um evento certo tem probabilidade 1.",
      fundamento: "Teoria da probabilidade — axiomas de Kolmogorov.",
      macete: "Probabilidade: 0 a 1. Impossível = 0. Certo = 1.",
      erroComum: "Associar evento impossível a probabilidade negativa.",
      comoBancaPensa: "Viola o intervalo axiomático da probabilidade."
    }
  },

  /* ============ DIREITO CONSTITUCIONAL (3 itens 'Errado') ============ */
  {
    id: "DC-017", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Medida provisória em matéria penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Presentes os requisitos de relevância e urgência, é admitida a edição de medida provisória para a criação de novos tipos penais e a cominação das respectivas penas.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "medida provisória / tipos penais",
    cognitivo: {
      motivo: "Cobrar a vedação de MP em matéria penal (art. 62, § 1º, I, 'b', da CF).",
      mede: "Direitos e garantias fundamentais / legalidade penal.",
      pegadinhaDesc: "Admite MP para criar crime, o que a CF veda.",
      ondeErra: "Ignora a proibição constitucional de MP em direito penal.",
      palavraCritica: "MP cria tipo penal (vedado)",
      tecnica: "CF, art. 62, § 1º, I, 'b': é vedada MP sobre direito penal. Crime só por lei em sentido estrito.",
      regraMental: "Crime só nasce por lei (legalidade). MP não cria crime nem pena."
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 62, § 1º, I, 'b': é VEDADA a edição de medida provisória sobre matéria de direito penal. A criação de crimes e a cominação de penas dependem de lei em sentido estrito (princípio da legalidade — art. 5º, XXXIX).",
      fundamento: "CF, art. 62, § 1º, I, 'b'; art. 5º, XXXIX.",
      macete: "MP não faz crime. Direito penal incriminador = lei formal.",
      erroComum: "Admitir MP para criar tipos penais.",
      comoBancaPensa: "Ignora a vedação de MP em matéria penal."
    }
  },
  {
    id: "DC-018", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Cláusulas pétreas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "Por constituírem cláusulas pétreas, os direitos e garantias individuais não admitem qualquer forma de restrição ou regulamentação por lei infraconstitucional.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "não admitem qualquer restrição",
    cognitivo: {
      motivo: "Distinguir vedação à abolição (cláusula pétrea) de vedação à regulamentação/restrição.",
      mede: "Direitos e garantias fundamentais.",
      pegadinhaDesc: "Confunde a proteção contra a ABOLIÇÃO com imunidade a toda regulamentação.",
      ondeErra: "Trata os direitos fundamentais como imunes a limites.",
      palavraCritica: "não admitem qualquer restrição (falso)",
      tecnica: "Cláusula pétrea impede a ABOLIÇÃO/tendência a abolir (art. 60, § 4º). Os direitos podem ser regulamentados e sofrem limitações recíprocas (são relativos).",
      regraMental: "Pétrea = não pode ABOLIR. Mas pode regulamentar e ponderar (direitos são relativos)."
    },
    comentario: {
      resolucao: "ERRADO. As cláusulas pétreas (CF, art. 60, § 4º) impedem a ABOLIÇÃO dos direitos e garantias individuais, mas não a sua regulamentação nem eventuais restrições proporcionais — inclusive porque os direitos fundamentais são relativos e se limitam reciprocamente.",
      fundamento: "CF, art. 60, § 4º, IV; teoria dos direitos fundamentais.",
      macete: "Pétrea = não abole. Regulamentar e restringir com proporcionalidade, pode.",
      erroComum: "Tratar direito fundamental como imune a toda restrição.",
      comoBancaPensa: "Confunde proteção contra abolição com imunidade absoluta."
    }
  },
  {
    id: "DC-019", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Inviolabilidade domiciliar",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "A casa é asilo inviolável do indivíduo, sendo vedado o ingresso sem consentimento do morador durante o período noturno, mesmo em caso de flagrante delito.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "vedado à noite mesmo em flagrante",
    cognitivo: {
      motivo: "Cobrar que o flagrante autoriza o ingresso a qualquer hora.",
      mede: "Direitos e garantias fundamentais (art. 5º, XI).",
      pegadinhaDesc: "Impede o ingresso noturno mesmo em flagrante, restringindo a regra.",
      ondeErra: "Aplica a limitação temporal (dia) que só vale para a ordem judicial.",
      palavraCritica: "vedado à noite em flagrante (falso)",
      tecnica: "Flagrante/desastre/socorro autorizam o ingresso A QUALQUER HORA; só a ordem judicial exige o período diurno.",
      regraMental: "Flagrante não tem hora. Mandado tem: de dia."
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, XI: o ingresso sem consentimento é permitido, EM CASO DE FLAGRANTE DELITO, desastre ou para prestar socorro, A QUALQUER HORA (inclusive à noite). Apenas a determinação judicial fica restrita ao período diurno.",
      fundamento: "CF, art. 5º, XI; STF, RE 603.616.",
      macete: "Flagrante: entra a qualquer hora. Mandado: só de dia.",
      erroComum: "Restringir o flagrante ao período diurno.",
      comoBancaPensa: "Aplica a limitação de horário (que é do mandado) ao flagrante."
    }
  },

  /* ============ DIREITOS HUMANOS (3 itens 'Errado') ============ */
  {
    id: "DH-018", disciplina: "Direitos Humanos", assunto: "Direitos humanos na Constituição", subassunto: "Status dos tratados",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "No Brasil, todos os tratados internacionais de direitos humanos ingressam no ordenamento com status de norma constitucional, independentemente do procedimento de aprovação adotado pelo Congresso Nacional.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "todos / independentemente do procedimento",
    cognitivo: {
      motivo: "Cobrar a diferença entre status constitucional (rito do § 3º) e supralegal.",
      mede: "A Constituição e os tratados de DH (item 6 do edital).",
      pegadinhaDesc: "Atribui status constitucional a todos os tratados de DH, sem o rito especial.",
      ondeErra: "Ignora que só o rito do art. 5º, § 3º, confere status de emenda.",
      palavraCritica: "todos / independentemente do rito (falso)",
      tecnica: "Tratado de DH com rito do § 3º (3/5, 2 turnos): status constitucional. Sem esse rito: SUPRALEGAL (STF, RE 466.343).",
      regraMental: "Só com rito de emenda o tratado de DH vira norma constitucional. Senão, supralegal."
    },
    comentario: {
      resolucao: "ERRADO. Apenas os tratados de DH aprovados pelo rito do art. 5º, § 3º (dois turnos, 3/5 em cada Casa) equivalem a emendas constitucionais. Os demais tratados de DH têm status SUPRALEGAL (acima da lei, abaixo da Constituição), conforme o STF (RE 466.343).",
      fundamento: "CF, art. 5º, § 3º; STF, RE 466.343.",
      macete: "Rito do § 3º = constitucional. Sem ele = supralegal.",
      erroComum: "Dar status constitucional a todo tratado de DH.",
      comoBancaPensa: "Generaliza o status constitucional (termo absoluto)."
    }
  },
  {
    id: "DH-019", disciplina: "Direitos Humanos", assunto: "Convenção Americana", subassunto: "Pena de morte",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.7,
    enunciado: "De acordo com a Convenção Americana sobre Direitos Humanos, admite-se a aplicação da pena de morte a pessoas que, no momento do crime, eram menores de dezoito anos, desde que haja previsão na legislação do Estado-parte.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "menores de dezoito anos",
    cognitivo: {
      motivo: "Cobrar a vedação do art. 4º da CADH quanto à pena de morte.",
      mede: "Convenção Americana — direito à vida.",
      pegadinhaDesc: "Admite pena de morte a menores de 18, o que a CADH proíbe.",
      ondeErra: "Desconhece as vedações etárias e pessoais do art. 4º.",
      palavraCritica: "menores de 18 (vedado)",
      tecnica: "CADH, art. 4º: não se aplica pena de morte a quem, ao tempo do crime, era menor de 18 ou maior de 70 anos, nem a mulheres grávidas.",
      regraMental: "Pena de morte na CADH: nunca a menores de 18, maiores de 70 e gestantes."
    },
    comentario: {
      resolucao: "ERRADO. CADH, art. 4º, item 5: não se pode impor a pena de morte a pessoas que, no momento do delito, tinham menos de 18 anos ou mais de 70 anos, nem a mulheres em estado de gravidez. A previsão em lei interna não afasta a vedação convencional.",
      fundamento: "Decreto 678/1992 (CADH), art. 4º, item 5.",
      macete: "Pena de morte na CADH: proibida a <18, >70 e gestantes.",
      erroComum: "Admitir pena de morte a menor de 18 por lei interna.",
      comoBancaPensa: "Cria exceção vedada pela Convenção."
    }
  },
  {
    id: "DH-020", disciplina: "Direitos Humanos", assunto: "Sistema interamericano", subassunto: "Comissão × Corte",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "A Comissão Interamericana de Direitos Humanos é o órgão jurisdicional do sistema interamericano, competente para julgar e condenar os Estados-partes ao pagamento de indenizações às vítimas de violações.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "Comissão / órgão jurisdicional",
    cognitivo: {
      motivo: "Distinguir a Comissão (não jurisdicional) da Corte Interamericana (jurisdicional).",
      mede: "Sistema interamericano de proteção (item 6 do edital).",
      pegadinhaDesc: "Atribui à Comissão a função jurisdicional, que é da Corte.",
      ondeErra: "Confunde os dois órgãos do sistema interamericano.",
      palavraCritica: "Comissão como órgão jurisdicional (falso)",
      tecnica: "Comissão IDH: órgão de promoção/monitoramento (analisa petições, faz recomendações). Corte IDH: órgão JURISDICIONAL (julga e condena).",
      regraMental: "Comissão recomenda; Corte julga e condena. A Comissão não profere sentença."
    },
    comentario: {
      resolucao: "ERRADO. A Comissão Interamericana NÃO é órgão jurisdicional — atua na promoção e defesa dos DH, recebendo petições e formulando recomendações. O órgão jurisdicional é a CORTE Interamericana de Direitos Humanos, competente para julgar e condenar os Estados (função contenciosa e consultiva).",
      fundamento: "CADH — Comissão (arts. 34 e ss.) e Corte (arts. 52 e ss.).",
      macete: "Comissão recomenda; Corte condena.",
      erroComum: "Atribuir função jurisdicional à Comissão.",
      comoBancaPensa: "Troca as funções da Comissão e da Corte."
    }
  },

  /* ============ CRIMES CIBERNÉTICOS (1 item 'Errado') ============ */
  {
    id: "CC-011", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "LGPD", subassunto: "Hipóteses de não aplicação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "A Lei Geral de Proteção de Dados aplica-se integralmente ao tratamento de dados pessoais realizado por pessoa natural para fins exclusivamente particulares e não econômicos.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "fins exclusivamente particulares",
    cognitivo: {
      motivo: "Cobrar as hipóteses de não incidência da LGPD (art. 4º, I).",
      mede: "LGPD (item do edital de TI/Crimes Cibernéticos).",
      pegadinhaDesc: "Aplica a LGPD ao tratamento particular e não econômico, que está excluído.",
      ondeErra: "Desconhece a exclusão do art. 4º, I.",
      palavraCritica: "fins particulares e não econômicos (excluídos)",
      tecnica: "LGPD, art. 4º, I: não se aplica ao tratamento por pessoa natural para fins exclusivamente particulares e não econômicos (ex.: agenda pessoal).",
      regraMental: "Uso pessoal e sem fim econômico: fora da LGPD (art. 4º, I)."
    },
    comentario: {
      resolucao: "ERRADO. Lei 13.709/2018, art. 4º, I: a LGPD NÃO se aplica ao tratamento de dados realizado por pessoa natural para fins exclusivamente particulares e não econômicos (ex.: lista de contatos pessoal). Também não incide em fins jornalísticos, artísticos, acadêmicos e de segurança pública/investigação penal.",
      fundamento: "Lei 13.709/2018, art. 4º.",
      macete: "Uso doméstico/pessoal e sem fim econômico = fora da LGPD.",
      erroComum: "Aplicar a LGPD ao uso particular.",
      comoBancaPensa: "Ignora as exclusões de incidência da LGPD."
    }
  },

  /* ============ RACIOCÍNIO LÓGICO (1 item 'Errado') ============ */
  {
    id: "RL-020", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Equivalência lógica",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "Duas proposições compostas são logicamente equivalentes quando possuem a mesma quantidade de conectivos lógicos em sua estrutura.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "mesma quantidade de conectivos",
    cognitivo: {
      motivo: "Cobrar o conceito de equivalência lógica (mesma tabela-verdade).",
      mede: "Equivalências (item 11.3 do edital).",
      pegadinhaDesc: "Define equivalência pela quantidade de conectivos, e não pelos valores lógicos.",
      ondeErra: "Confunde estrutura sintática com valor de verdade.",
      palavraCritica: "quantidade de conectivos (irrelevante)",
      tecnica: "Equivalência lógica: as proposições têm a MESMA tabela-verdade (mesmos valores em todas as linhas).",
      regraMental: "Equivalentes = mesma tabela-verdade. Número de conectivos não importa (ex.: p→q ≡ ~p∨q)."
    },
    comentario: {
      resolucao: "ERRADO. Duas proposições são logicamente equivalentes quando têm a MESMA tabela-verdade (mesmos valores lógicos em todas as linhas), e não pela quantidade de conectivos. Ex.: 'p → q' equivale a '~p ∨ q', embora tenham estruturas diferentes.",
      fundamento: "Lógica proposicional — equivalência lógica.",
      macete: "Equivalência = mesma tabela-verdade, não mesma 'aparência'.",
      erroComum: "Definir equivalência por número de conectivos.",
      comoBancaPensa: "Troca o critério (valor de verdade) por um sintático irrelevante."
    }
  },

  /* ============ CRIMINOLOGIA (1 item 'Errado') ============ */
  {
    id: "CR-003", disciplina: "Criminologia", assunto: "Escolas criminológicas", subassunto: "Escola Clássica",
    concurso: "PCAL", cargo: ["Delegado","Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.68,
    enunciado: "Para a Escola Clássica, cujo expoente foi Cesare Lombroso, o criminoso é um indivíduo determinado por fatores biológicos, sendo o crime um fenômeno natural e não uma opção racional.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "Escola Clássica / determinado / Lombroso",
    cognitivo: {
      motivo: "Distinguir a Escola Clássica (livre-arbítrio) da Positiva (determinismo/Lombroso).",
      mede: "Escolas criminológicas (item do edital).",
      pegadinhaDesc: "Atribui à Escola Clássica o determinismo biológico e Lombroso (que são da Positiva).",
      ondeErra: "Troca os fundamentos das duas escolas.",
      palavraCritica: "Clássica determinista / Lombroso (falso)",
      tecnica: "Clássica (Beccaria, Carrara): livre-arbítrio e responsabilidade moral. Positiva (Lombroso, Ferri, Garofalo): determinismo e defesa social.",
      regraMental: "Clássica = livre-arbítrio. Positiva = determinismo (Lombroso). O enunciado inverteu."
    },
    comentario: {
      resolucao: "ERRADO. O determinismo biológico e Cesare Lombroso pertencem à Escola POSITIVA. A Escola CLÁSSICA (Beccaria, Carrara) funda-se no LIVRE-ARBÍTRIO: o crime é opção racional do indivíduo, e a responsabilidade é moral. A assertiva inverteu as escolas.",
      fundamento: "Doutrina criminológica — Escolas Clássica e Positiva.",
      macete: "Clássica = livre-arbítrio (Beccaria). Positiva = determinismo (Lombroso).",
      erroComum: "Atribuir Lombroso/determinismo à Escola Clássica.",
      comoBancaPensa: "Inverte os fundamentos das duas escolas."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE10);
