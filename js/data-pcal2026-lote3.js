/* =====================================================================
   CEBRASPE LAB — Expansão Edital PC-AL 2026 (Lote 3)
   Preenche lacunas reais do programa de Agente/Escrivão detectadas no
   cruzamento com a prova oficial CESPE (PC-AL 2022):
     • Direito Penal — Crimes contra a pessoa (edital, item 2)
     • Direito Penal — Crimes contra o patrimônio (edital, item 3)
     • Processo Penal — Modalidades de prisão em flagrante (art. 302 CPP)
   Todas INÉDITAS, no estilo CEBRASPE, fundamentadas em legislação
   vigente e jurisprudência consolidada (STF/STJ). Não reproduzem
   questões oficiais — usam apenas os PADRÕES e TEMAS da banca.
   ===================================================================== */

const QUESTOES_PCAL_LOTE3 = [

  /* ============ DIREITO PENAL — CRIMES CONTRA A PESSOA ============ */
  {
    id: "DP-013", disciplina: "Direito Penal", assunto: "Crimes contra a pessoa", subassunto: "Dolo eventual × culpa consciente",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "No dolo eventual, o agente prevê o resultado e, embora não o queira diretamente, assume o risco de produzi-lo; já na culpa consciente, o agente também prevê o resultado, mas acredita sinceramente que este não ocorrerá.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "assume o risco",
    cognitivo: {
      motivo: "Distinguir dolo eventual (art. 18, I, 2ª parte) de culpa consciente (art. 18, II) — divisor clássico em homicídios de trânsito.",
      mede: "Elemento subjetivo nos crimes contra a pessoa.",
      pegadinhaDesc: "Item conceitual correto; a banca costuma inverter — dizer que na culpa consciente o agente 'assume o risco'.",
      ondeErra: "Confunde 'prever o resultado' (comum aos dois) com 'aceitar o resultado' (só o dolo eventual).",
      palavraCritica: "assume o risco × acredita que não ocorrerá",
      tecnica: "Ambos PREVEEM. A diferença é a ATITUDE diante da previsão: aceita (dolo eventual) ou confia que evita (culpa consciente).",
      regraMental: "Dolo eventual: 'foda-se, aconteça o que acontecer'. Culpa consciente: 'vai dar certo, eu controlo'."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 18: no dolo eventual (I) o agente assume o risco de produzir o resultado; na culpa consciente (II) prevê o resultado mas confia que não se produzirá. A previsão é comum aos dois — o que muda é a aceitação (consentimento no resultado).",
      fundamento: "CP, art. 18, I e II.",
      macete: "Fórmula de Frank: 'seja como for, dê no que der, não deixo de agir' = dolo eventual.",
      erroComum: "Achar que só o dolo eventual prevê o resultado — a culpa consciente também prevê.",
      comoBancaPensa: "Par espelhado de elementos subjetivos: a banca troca a atitude psíquica mantendo a previsão."
    }
  },
  {
    id: "DP-014", disciplina: "Direito Penal", assunto: "Crimes contra a pessoa", subassunto: "Lesão corporal seguida de morte",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "A lesão corporal seguida de morte é crime preterdoloso, no qual há dolo na conduta antecedente (lesão) e culpa quanto ao resultado mais grave (morte); por essa razão, não se admite a forma tentada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "preterdoloso",
    cognitivo: {
      motivo: "Cobrar a natureza preterdolosa do art. 129, § 3º, e a incompatibilidade com a tentativa.",
      mede: "Crimes qualificados pelo resultado / preterdolo.",
      pegadinhaDesc: "Item correto; a banca costuma afirmar que o resultado morte também é doloso, ou que admite tentativa.",
      ondeErra: "Confunde lesão seguida de morte (preterdolo) com homicídio (dolo na morte).",
      palavraCritica: "dolo na lesão + culpa na morte",
      tecnica: "Se a morte fosse desejada/aceita = homicídio. Se sobreveio por culpa = lesão seguida de morte.",
      regraMental: "Preterdolo = 'dolo no antecedente, culpa no consequente'. Sem dolo no resultado, não há o que 'tentar' nele."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 129, § 3º: crime preterdoloso — dolo na lesão e culpa na morte. Como a tentativa exige dolo quanto ao resultado não alcançado, e a morte aqui é culposa, não se admite a forma tentada.",
      fundamento: "CP, art. 129, § 3º; art. 19 (responsabilidade pelo resultado agravador só a título de culpa, no mínimo).",
      macete: "Bateu para machucar e a vítima morreu sem querer = lesão seguida de morte, não homicídio.",
      erroComum: "Tratar o resultado morte como doloso e enquadrar em homicídio.",
      comoBancaPensa: "Crimes qualificados pelo resultado são terreno fértil para trocar preterdolo por dolo direto."
    }
  },

  /* ============ DIREITO PENAL — CRIMES CONTRA O PATRIMÔNIO ============ */
  {
    id: "DP-015", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Roubo próprio × impróprio",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Configura roubo impróprio a conduta do agente que, logo depois de subtraída a coisa, emprega violência contra pessoa a fim de assegurar a impunidade do crime ou a detenção da coisa para si.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "logo depois de subtraída",
    cognitivo: {
      motivo: "Diferenciar roubo próprio (violência ANTES/DURANTE) de roubo impróprio (violência DEPOIS da subtração) — art. 157, § 1º.",
      mede: "Crimes contra o patrimônio (item 3 do edital).",
      pegadinhaDesc: "Item literal correto; a banca costuma trocar 'logo depois' por 'antes' ou exigir grave ameaça (o impróprio só admite violência).",
      ondeErra: "Não percebe que o momento da violência define próprio × impróprio.",
      palavraCritica: "logo depois de subtraída",
      tecnica: "Violência ANTES para subtrair = roubo próprio. Violência DEPOIS para garantir = roubo impróprio.",
      regraMental: "Impróprio: começou como furto e 'virou' roubo pela violência posterior. Só admite VIOLÊNCIA (não grave ameaça)."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 157, § 1º: o roubo impróprio ocorre quando o agente, logo depois de subtraída a coisa, emprega violência ou grave ameaça contra pessoa para assegurar a impunidade do crime ou a detenção da coisa. (Obs.: doutrina majoritária exige que a subtração já tenha se iniciado.)",
      fundamento: "CP, art. 157, caput e § 1º.",
      macete: "Furtou e, ao ser flagrado, agrediu para fugir com o bem = roubo impróprio.",
      erroComum: "Confundir o momento da violência ou achar que grave ameaça também basta no impróprio.",
      comoBancaPensa: "O elemento temporal (antes/depois) é o ponto exato de manipulação da assertiva."
    }
  },
  {
    id: "DP-016", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Consumação do roubo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Segundo o STJ, o crime de roubo somente se consuma quando o agente obtém a posse mansa, pacífica e desvigiada da coisa subtraída, fora da esfera de vigilância da vítima.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "posse mansa, pacífica e desvigiada",
    cognitivo: {
      motivo: "Cobrar a Súmula 582 do STJ — teoria da apprehensio/amotio.",
      mede: "Momento consumativo dos crimes patrimoniais.",
      pegadinhaDesc: "Cria a exigência (superada) da 'posse mansa e pacífica' — teoria da ablatio, rejeitada pelo STJ.",
      ondeErra: "Aplica a antiga exigência de retirada da esfera de vigilância.",
      palavraCritica: "somente ... posse mansa e pacífica",
      tecnica: "Basta a inversão da posse, ainda que por breve tempo e mesmo sob perseguição imediata.",
      regraMental: "Roubo/furto: consuma com a APREENSÃO (tirou da vítima), não precisa fugir em paz com o bem."
    },
    comentario: {
      resolucao: "ERRADO. Súmula 582/STJ: consuma-se o roubo com a inversão da posse mediante violência ou grave ameaça, ainda que por breve tempo e em seguida à perseguição imediata, sendo PRESCINDÍVEL a posse mansa e pacífica ou desvigiada. Adota-se a teoria da apprehensio (amotio).",
      fundamento: "CP, art. 157; Súmula 582/STJ.",
      jurisprudencia: "STF, RE 102.490 (teoria da apprehensio) — mesma lógica aplicada ao furto.",
      macete: "Inverteu a posse = consumou. Não precisa 'fugir tranquilo' com o objeto.",
      erroComum: "Aplicar a teoria da ablatio (posse desvigiada), superada pela jurisprudência.",
      comoBancaPensa: "Momento consumativo + súmula = a banca insere o requisito antigo para induzir o erro."
    }
  },
  {
    id: "DP-017", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Extorsão × roubo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "A extorsão é crime formal, consumando-se independentemente da obtenção da vantagem econômica indevida, bastando o constrangimento da vítima, mediante violência ou grave ameaça, a fazer, tolerar que se faça ou deixar de fazer alguma coisa.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "independentemente da obtenção",
    cognitivo: {
      motivo: "Cobrar a natureza formal da extorsão (Súmula 96 STJ) e o critério que a separa do roubo.",
      mede: "Distinção roubo × extorsão nos crimes patrimoniais.",
      pegadinhaDesc: "A banca costuma dizer que a extorsão exige a efetiva obtenção da vantagem (crime material) — o oposto do correto.",
      ondeErra: "Trata a extorsão como material e exige o resultado patrimonial.",
      palavraCritica: "independentemente da obtenção",
      tecnica: "Extorsão: a vítima COLABORA (faz/tolera/deixa de fazer). Roubo: o agente SUBTRAI diretamente. Extorsão é formal.",
      regraMental: "Súmula 96 STJ: extorsão consuma sem a vantagem. Comportamento imprescindível da vítima = extorsão."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 158; Súmula 96/STJ: 'O crime de extorsão consuma-se independentemente da obtenção da vantagem indevida.' É crime formal. Diferencia-se do roubo porque, na extorsão, a conduta da vítima é imprescindível (ela é constrangida a colaborar).",
      fundamento: "CP, art. 158; Súmula 96/STJ.",
      macete: "Sequestro relâmpago com a vítima sacando dinheiro no caixa = extorsão (art. 158, § 3º), não roubo.",
      erroComum: "Exigir a efetiva obtenção da vantagem (tratar como crime material).",
      comoBancaPensa: "Momento consumativo de crime formal é a pegadinha recorrente da banca."
    }
  },
  {
    id: "DP-018", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Estelionato — ação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Após a Lei nº 13.964/2019, a ação penal no crime de estelionato passou a ser, em regra, pública condicionada à representação do ofendido, salvo quando a vítima for a Administração Pública, criança ou adolescente, pessoa idosa ou vulnerável, entre outras hipóteses legais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "condicionada à representação",
    cognitivo: {
      motivo: "Cobrar a mudança do Pacote Anticrime no art. 171, § 5º, do CP — tema de alta atualidade.",
      mede: "Ação penal nos crimes patrimoniais + alteração legislativa recente.",
      pegadinhaDesc: "A banca costuma manter 'incondicionada' (regime antigo) ou omitir as exceções.",
      ondeErra: "Responde com o regime anterior à Lei 13.964/2019 (era incondicionada).",
      palavraCritica: "condicionada à representação (regra) + exceções",
      tecnica: "Novidade legislativa recente = cobrança literal. Guarde as exceções (vítimas vulneráveis / Administração).",
      regraMental: "Estelionato hoje: em regra depende de representação. Vítima frágil ou o Estado → incondicionada."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 171, § 5º (incluído pela Lei 13.964/2019): a ação penal é pública condicionada à representação, salvo se a vítima for a Administração Pública (direta ou indireta), criança/adolescente, pessoa com deficiência mental, maior de 70 anos ou incapaz.",
      fundamento: "CP, art. 171, § 5º (Lei 13.964/2019).",
      jurisprudencia: "STJ e STF discutiram a retroatividade da representação a processos já em curso (norma processual-penal híbrida).",
      macete: "Estelionato virou 'crime que espera a vítima reclamar' — salvo quando a vítima é vulnerável ou é o Estado.",
      erroComum: "Manter a ação como incondicionada (regime pré-2019).",
      comoBancaPensa: "Alteração do Pacote Anticrime cobrada de forma literal, geralmente como item CERTO."
    }
  },

  /* ============ PROCESSO PENAL — PRISÃO EM FLAGRANTE ============ */
  {
    id: "PP-010", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Modalidades (art. 302)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Considera-se em flagrante próprio o agente que é perseguido, logo após a prática do delito, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser ele o autor da infração.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "perseguido, logo após",
    cognitivo: {
      motivo: "Distinguir as modalidades do art. 302 do CPP — próprio, impróprio e presumido.",
      mede: "Prisão em flagrante (tema campeão em provas de carreira policial).",
      pegadinhaDesc: "Descreve corretamente o flagrante IMPRÓPRIO (inciso III) e o rotula como PRÓPRIO.",
      ondeErra: "Sabe a definição, mas não pareia com o nome certo da modalidade.",
      palavraCritica: "perseguido, logo após = impróprio (não próprio)",
      tecnica: "Está cometendo / acaba de cometer = próprio (I e II). Perseguido logo após = impróprio (III). Encontrado logo depois = presumido (IV).",
      regraMental: "Próprio = 'no ato'. Impróprio = 'perseguição'. Presumido = 'achado com a prova'."
    },
    comentario: {
      resolucao: "ERRADO. A situação descrita (perseguido, logo após, em presunção de autoria) é o flagrante IMPRÓPRIO (quase-flagrante), do art. 302, III, do CPP. O flagrante próprio (I e II) ocorre quando o agente está cometendo ou acaba de cometer a infração.",
      fundamento: "CPP, art. 302, I a IV.",
      macete: "III é 'imPRÓPRIO' porque não é mais no ato — a pessoa já foge e é perseguida.",
      erroComum: "Trocar as modalidades (próprio × impróprio × presumido).",
      comoBancaPensa: "Definição correta com o rótulo trocado é a pegadinha clássica em flagrante."
    }
  },
  {
    id: "PP-011", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Flagrante preparado × esperado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "Conforme entendimento sumulado do STF, não há crime quando a preparação do flagrante pela polícia torna impossível a sua consumação, hipótese em que se configura crime impossível.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "torna impossível a consumação",
    cognitivo: {
      motivo: "Cobrar a Súmula 145 do STF (flagrante preparado/provocado = crime impossível) e a distinção do flagrante esperado.",
      mede: "Validade das espécies anômalas de flagrante.",
      pegadinhaDesc: "A banca costuma inverter — dizer que o flagrante esperado gera crime impossível, ou que o preparado é válido.",
      ondeErra: "Confunde flagrante preparado (inválido) com flagrante esperado (válido).",
      palavraCritica: "preparação pela polícia torna impossível a consumação",
      tecnica: "Preparado/provocado (agente é induzido) = crime impossível. Esperado (polícia só aguarda) = válido.",
      regraMental: "Súmula 145 STF: se a polícia PROVOCOU e blindou o resultado, não há crime."
    },
    comentario: {
      resolucao: "CERTO. Súmula 145/STF: 'Não há crime, quando a preparação do flagrante pela polícia torna impossível a sua consumação.' É o flagrante preparado (provocado) — crime impossível (CP, art. 17). Diferente é o flagrante esperado, em que a polícia apenas aguarda a ação já em curso: este é válido.",
      fundamento: "Súmula 145/STF; CP, art. 17.",
      macete: "Polícia que arma toda a cena e impede o crime = preparado (nulo). Polícia de tocaia = esperado (válido).",
      erroComum: "Confundir preparado (inválido) com esperado (válido).",
      comoBancaPensa: "Par espelhado preparado × esperado: a banca troca qual deles vicia o flagrante."
    }
  },
  {
    id: "PP-012", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Crime permanente",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Nos crimes permanentes, considera-se o agente em situação de flagrância enquanto não cessar a permanência, razão pela qual é lícito o ingresso domiciliar, a qualquer hora do dia ou da noite, para fazer cessar a prática, como no caso do tráfico de drogas na modalidade 'ter em depósito'.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "enquanto não cessar a permanência",
    cognitivo: {
      motivo: "Cobrar o art. 303 do CPP e a relação com a inviolabilidade domiciliar (art. 5º, XI, CF).",
      mede: "Flagrante em crime permanente + ingresso domiciliar.",
      pegadinhaDesc: "Item correto; a banca costuma exigir mandado ou restringir ao período diurno mesmo no crime permanente.",
      ondeErra: "Aplica a regra do 'durante o dia' (que vale para mandado) ao flagrante permanente.",
      palavraCritica: "enquanto não cessar a permanência",
      tecnica: "Crime permanente = flagrância contínua = flagrante a qualquer hora, inclusive em domicílio.",
      regraMental: "Tráfico (guardar/ter em depósito) e cárcere privado: flagrante 24h, ingresso lícito para cessar."
    },
    comentario: {
      resolucao: "CERTO. CPP, art. 303: nas infrações permanentes, o agente está em flagrante enquanto não cessar a permanência. Como o flagrante autoriza o ingresso domiciliar a qualquer hora (CF, art. 5º, XI), é lícito entrar para fazer cessar o tráfico na modalidade permanente ('ter em depósito', 'guardar').",
      fundamento: "CPP, art. 303; CF, art. 5º, XI; Lei 11.343/2006, art. 33.",
      jurisprudencia: "STF, RE 603.616: exige fundadas razões, justificadas a posteriori, da situação de flagrância.",
      macete: "Droga guardada em casa = crime permanente = flagrante o tempo todo = pode entrar, com fundadas razões.",
      erroComum: "Exigir mandado ou restringir ao dia, ignorando a natureza permanente.",
      comoBancaPensa: "Cruza CPP (art. 303) com CF (art. 5º, XI) — o padrão 'lei + Constituição' favorito da banca."
    }
  },
  {
    id: "PP-013", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Audiência de custódia",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Recebido o auto de prisão em flagrante, o juiz deverá promover a audiência de custódia, com a apresentação do preso, no prazo máximo de setenta e duas horas contadas da prisão.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "setenta e duas horas",
    cognitivo: {
      motivo: "Cobrar o prazo da audiência de custódia (art. 310 do CPP).",
      mede: "Controle judicial da prisão em flagrante.",
      pegadinhaDesc: "Troca o prazo de 24h por 72h — pegadinha numérica típica.",
      ondeErra: "Não memorizou o prazo exato (24 horas).",
      palavraCritica: "setenta e duas horas (o correto é 24)",
      tecnica: "Prazos são ponto de checagem obrigatório: audiência de custódia = 24h da prisão.",
      regraMental: "Flagrante → juiz em 24h. Não confundir com o prazo do IP ou com outras 72h."
    },
    comentario: {
      resolucao: "ERRADO. CPP, art. 310: o juiz deve promover a audiência de custódia em até 24 (vinte e quatro) horas após a prisão, com a apresentação do preso, ocasião em que decidirá pelo relaxamento, conversão em preventiva, concessão de liberdade (com ou sem cautelares) ou fiança.",
      fundamento: "CPP, art. 310, caput.",
      macete: "Custódia = 24h. É um dos números mais cobrados do CPP em provas policiais.",
      erroComum: "Trocar 24h por 48h ou 72h.",
      comoBancaPensa: "Números do CPP são o alvo preferido da troca numérica."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE3);

/* Reforço de frequência de temas para as lacunas preenchidas (Módulo 2) */
(function () {
  const dp = FREQUENCIA_TEMAS.find(f => f.disciplina === "Direito Penal");
  if (dp) dp.temas.push(
    { tema: "Crimes contra a pessoa (dolo/preterdolo)", freq: 84, tendencia: "estavel", prob: 0.85 },
    { tema: "Crimes contra o patrimônio (roubo/extorsão/estelionato)", freq: 86, tendencia: "alta", prob: 0.88 },
  );
  const pp = FREQUENCIA_TEMAS.find(f => f.disciplina === "Processo Penal");
  if (pp) pp.temas.push(
    { tema: "Modalidades de prisão em flagrante (art. 302)", freq: 90, tendencia: "alta", prob: 0.92 },
  );
})();
