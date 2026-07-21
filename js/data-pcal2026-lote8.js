/* =====================================================================
   CEBRASPE LAB — Expansão Edital PC-AL 2026 (Lote 8 — robustez máxima)
   Mapeado pelo plano de leitura (artigos do edital). Preenche lacunas:
   Direito Penal (crimes contra a pessoa, contra a Administração e
   contra a administração da justiça, receptação), Raciocínio Lógico
   (argumentos, PA/PG, combinatória, conjuntos), Português (paralelismo,
   pontuação, regência), Processo Penal (ação penal, competência),
   Direito Constitucional (devido processo, art. 144) e Legislação
   Penal Especial (crimes ambientais, relações de consumo).
   Questões INÉDITAS no estilo CEBRASPE, fundamentadas na legislação
   vigente e jurisprudência consolidada. Não reproduzem questões
   oficiais — usam apenas os padrões e temas da banca.
   ===================================================================== */

const QUESTOES_PCAL_LOTE8 = [

  /* ===== DIREITO PENAL — CRIMES CONTRA A PESSOA ===== */
  {
    id: "DP-025", disciplina: "Direito Penal", assunto: "Crimes contra a pessoa", subassunto: "Constrangimento ilegal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "Comete constrangimento ilegal quem constrange alguém, mediante violência ou grave ameaça, ou depois de lhe haver reduzido a capacidade de resistência, a não fazer o que a lei permite ou a fazer o que ela não manda.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não fazer o que a lei permite",
    cognitivo: {
      motivo: "Cobrar o tipo do constrangimento ilegal (art. 146 do CP).",
      mede: "Crimes contra a liberdade individual (CP, arts. 121-154-B; Dia 07 do plano).",
      pegadinhaDesc: "A banca costuma inverter para 'fazer o que a lei permite', descaracterizando o tipo.",
      ondeErra: "Troca a lógica: o crime é obrigar a NÃO fazer o permitido ou a FAZER o não obrigatório.",
      palavraCritica: "não fazer o permitido / fazer o não obrigatório",
      tecnica: "Constrangimento ilegal é subsidiário: só incide quando a conduta não configura crime mais grave.",
      regraMental: "Constrangimento ilegal = forçar alguém a agir contra a liberdade que a lei lhe garante."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 146: constranger alguém, mediante violência ou grave ameaça, ou depois de reduzir-lhe a capacidade de resistência, a não fazer o que a lei permite, ou a fazer o que ela não manda. É crime subsidiário (cede a tipos mais graves, como roubo, estupro, extorsão).",
      fundamento: "CP, art. 146.",
      macete: "É o 'crime-mãe' da coação: forçar contra a liberdade. Se houver fim específico (subtrair, etc.), vira outro crime.",
      erroComum: "Inverter o objeto do constrangimento.",
      comoBancaPensa: "A estrutura 'não fazer o permitido / fazer o não obrigatório' é o ponto manipulado."
    }
  },
  {
    id: "DP-026", disciplina: "Direito Penal", assunto: "Crimes contra a pessoa", subassunto: "Ameaça — ação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "No crime de ameaça, consistente em ameaçar alguém, por palavra, escrito ou gesto, de causar-lhe mal injusto e grave, a ação penal é pública condicionada à representação do ofendido.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "condicionada à representação",
    cognitivo: {
      motivo: "Cobrar a natureza da ação penal na ameaça (art. 147, parágrafo único).",
      mede: "Crimes contra a liberdade pessoal.",
      pegadinhaDesc: "A banca costuma tratar a ameaça como ação penal pública incondicionada.",
      ondeErra: "Ignora a exigência de representação prevista no parágrafo único.",
      palavraCritica: "condicionada à representação",
      tecnica: "Ameaça: mal INJUSTO e GRAVE + ação penal condicionada à representação.",
      regraMental: "Ameaça = precisa que a vítima represente. Mal deve ser injusto e grave (futuro e verossímil)."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 147: ameaçar alguém de causar-lhe mal injusto e grave. O parágrafo único condiciona a ação penal à representação do ofendido. O mal prometido deve ser injusto, grave e verossímil.",
      fundamento: "CP, art. 147, parágrafo único.",
      macete: "Ameaça: mal injusto e grave + representação.",
      erroComum: "Considerar a ameaça de ação penal incondicionada.",
      comoBancaPensa: "Natureza da ação penal é ponto recorrente nos crimes contra a pessoa."
    }
  },
  {
    id: "DP-027", disciplina: "Direito Penal", assunto: "Crimes contra a pessoa", subassunto: "Sequestro e cárcere privado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "O crime de sequestro ou cárcere privado, que consiste em privar alguém de sua liberdade, é classificado como crime permanente, de modo que a consumação se prolonga no tempo enquanto perdurar a privação da liberdade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "crime permanente",
    cognitivo: {
      motivo: "Cobrar a natureza permanente do art. 148 do CP e seus efeitos.",
      mede: "Crimes contra a liberdade individual.",
      pegadinhaDesc: "A banca costuma classificar o crime como instantâneo, negando a permanência.",
      ondeErra: "Confunde crime permanente com instantâneo de efeitos permanentes.",
      palavraCritica: "consumação se prolonga no tempo",
      tecnica: "Permanente: a consumação se protrai; cabe flagrante a qualquer tempo e a prescrição só corre do fim da permanência.",
      regraMental: "Sequestro/cárcere: enquanto a vítima está presa, o crime está 'consumando' (permanente)."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 148: privar alguém de sua liberdade, mediante sequestro ou cárcere privado, é crime PERMANENTE — a consumação se protrai no tempo. Consequências: flagrante possível enquanto durar a privação e prescrição contada do fim da permanência.",
      fundamento: "CP, art. 148.",
      macete: "Permanente = 'enquanto durar, está consumando'. Igual ao tráfico na modalidade 'guardar'.",
      erroComum: "Classificar como crime instantâneo.",
      comoBancaPensa: "Natureza permanente do delito é cobrada pelos seus efeitos práticos (flagrante/prescrição)."
    }
  },
  {
    id: "DP-028", disciplina: "Direito Penal", assunto: "Crimes contra a pessoa", subassunto: "Omissão de socorro",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.72,
    enunciado: "Configura-se o crime de omissão de socorro quando o agente deixa de prestar assistência, quando possível fazê-lo sem risco pessoal, a criança abandonada ou extraviada, ou a pessoa inválida ou ferida, ao desamparo ou em grave e iminente perigo, podendo também deixar de pedir socorro à autoridade pública.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem risco pessoal",
    cognitivo: {
      motivo: "Cobrar os elementos da omissão de socorro (art. 135 do CP).",
      mede: "Crimes de periclitação da vida e da saúde.",
      pegadinhaDesc: "A banca costuma exigir o socorro mesmo com risco pessoal, ou negar a alternativa de pedir ajuda à autoridade.",
      ondeErra: "Ignora a cláusula 'sem risco pessoal' e a conduta alternativa.",
      palavraCritica: "possível sem risco pessoal",
      tecnica: "Basta pedir socorro à autoridade quando a assistência direta implicar risco pessoal.",
      regraMental: "Omissão de socorro: ajude OU chame ajuda. Só se exige quando NÃO há risco pessoal."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 135: deixar de prestar assistência, quando possível sem risco pessoal, a criança abandonada/extraviada ou a pessoa inválida/ferida, ao desamparo ou em grave e iminente perigo; ou não pedir, nesses casos, o socorro da autoridade pública. É crime omissivo próprio.",
      fundamento: "CP, art. 135.",
      macete: "Sem risco pessoal: socorra ou chame a autoridade. A lei não exige heroísmo.",
      erroComum: "Exigir o socorro mesmo com risco à própria vida.",
      comoBancaPensa: "A cláusula 'sem risco pessoal' e a conduta alternativa são o foco."
    }
  },
  {
    id: "DP-029", disciplina: "Direito Penal", assunto: "Crimes contra a dignidade sexual", subassunto: "Estupro de vulnerável",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Segundo entendimento sumulado do STJ, pratica estupro de vulnerável quem mantém conjunção carnal ou ato libidinoso com menor de 14 anos, sendo irrelevante o eventual consentimento da vítima, sua experiência sexual anterior ou a existência de relacionamento amoroso com o agente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "irrelevante o consentimento",
    cognitivo: {
      motivo: "Cobrar a Súmula 593 do STJ (presunção absoluta de vulnerabilidade).",
      mede: "Crimes contra a dignidade sexual (art. 217-A do CP).",
      pegadinhaDesc: "A banca costuma admitir o consentimento do menor como excludente.",
      ondeErra: "Trata a vulnerabilidade como relativa.",
      palavraCritica: "irrelevante o consentimento",
      tecnica: "Menor de 14 anos: vulnerabilidade ABSOLUTA. Consentimento e experiência não afastam o crime.",
      regraMental: "Menor de 14 = estupro de vulnerável, sempre. Não há 'namoro' que legitime (Súmula 593 STJ)."
    },
    comentario: {
      resolucao: "CERTO. Súmula 593/STJ: o crime de estupro de vulnerável (art. 217-A do CP) configura-se com conjunção carnal ou ato libidinoso com menor de 14 anos, sendo irrelevantes o consentimento da vítima, sua eventual experiência sexual anterior ou a existência de relacionamento amoroso. A presunção é absoluta.",
      fundamento: "CP, art. 217-A; Súmula 593/STJ.",
      macete: "Menor de 14 = vulnerabilidade absoluta. Consentimento não conta.",
      erroComum: "Aceitar o consentimento do menor como excludente.",
      comoBancaPensa: "Tema com súmula é cobrado contra a intuição de 'relativizar' o consentimento."
    }
  },

  /* ===== DIREITO PENAL — CRIMES CONTRA A ADMINISTRAÇÃO ===== */
  {
    id: "DP-030", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Excesso de exação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "Comete excesso de exação o funcionário que exige tributo ou contribuição social que sabe ou deveria saber indevido, ou, quando devido, emprega na cobrança meio vexatório ou gravoso não autorizado por lei.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "tributo indevido / meio vexatório",
    cognitivo: {
      motivo: "Cobrar o tipo do excesso de exação (art. 316, § 1º, do CP).",
      mede: "Crimes contra a Administração Pública (Dia 17 do plano).",
      pegadinhaDesc: "A banca costuma confundir excesso de exação com concussão ou corrupção.",
      ondeErra: "Não distingue exigir tributo indevido (exação) de exigir vantagem indevida (concussão).",
      palavraCritica: "tributo/contribuição indevido",
      tecnica: "Excesso de exação: objeto é TRIBUTO/contribuição (indevido ou cobrado de forma vexatória). Concussão: vantagem indevida em geral.",
      regraMental: "Exação = cobrança de tributo. Concussão = exigir vantagem. O objeto muda o crime."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 316, § 1º: exigir tributo ou contribuição social que sabe ou deveria saber indevido, ou, quando devido, empregar na cobrança meio vexatório/gravoso não autorizado. Se o funcionário desvia o valor arrecadado em proveito próprio, incide a forma qualificada (§ 2º).",
      fundamento: "CP, art. 316, §§ 1º e 2º.",
      macete: "Exação = cobrança abusiva de TRIBUTO. Não confundir com concussão (vantagem indevida).",
      erroComum: "Confundir com concussão pela semelhança da conduta de 'exigir'.",
      comoBancaPensa: "O objeto (tributo × vantagem) distingue exação de concussão."
    }
  },
  {
    id: "DP-031", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Resistência",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "Configura o crime de resistência a oposição à execução de ato legal, mediante violência ou ameaça a funcionário competente para executá-lo ou a quem lhe esteja prestando auxílio.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "violência ou ameaça / ato legal",
    cognitivo: {
      motivo: "Distinguir resistência (art. 329) de desobediência (art. 330).",
      mede: "Crimes praticados por particular contra a Administração.",
      pegadinhaDesc: "A banca costuma retirar a 'violência ou ameaça' (confundindo com desobediência) ou tratar ato ilegal como objeto.",
      ondeErra: "Confunde resistência (com violência/ameaça) com desobediência (sem violência).",
      palavraCritica: "com violência ou ameaça / ato legal",
      tecnica: "Resistência: opor-se com VIOLÊNCIA/AMEAÇA a ato LEGAL. Desobediência: descumprir ordem legal, sem violência.",
      regraMental: "Resistência = revida com força. Desobediência = simplesmente não obedece. Ato ilegal não gera resistência."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 329: opor-se à execução de ato LEGAL, mediante violência ou ameaça a funcionário competente ou a quem lhe presta auxílio. Sem violência/ameaça, a conduta pode configurar desobediência (art. 330). A oposição a ato ilegal não caracteriza o crime.",
      fundamento: "CP, arts. 329 e 330.",
      macete: "Resistência: força + ato legal. Desobediência: sem força.",
      erroComum: "Suprimir a violência/ameaça ou admitir resistência a ato ilegal.",
      comoBancaPensa: "Resistência × desobediência é cobrada pela presença de violência/ameaça."
    }
  },
  {
    id: "DP-032", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Desacato",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Segundo o entendimento atual dos tribunais superiores, o crime de desacato a funcionário público no exercício da função foi descriminalizado por incompatibilidade com a Convenção Americana sobre Direitos Humanos.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "descriminalizado",
    cognitivo: {
      motivo: "Cobrar a jurisprudência consolidada sobre a validade do desacato.",
      mede: "Crimes contra a Administração — desacato (art. 331).",
      pegadinhaDesc: "Explora uma decisão isolada e superada do STJ de 2016 que chegou a afastar o crime.",
      ondeErra: "Toma como definitivo um entendimento que foi revisto.",
      palavraCritica: "descriminalizado (falso)",
      tecnica: "O STJ (3ª Seção) e o STF confirmaram que o desacato CONTINUA sendo crime, compatível com a CADH.",
      regraMental: "Desacato ainda é crime. A tese de descriminalização (CADH) não prevaleceu."
    },
    comentario: {
      resolucao: "ERRADO. Embora uma decisão da 5ª Turma do STJ (2016) tenha afastado o crime, a 3ª Seção do STJ e o STF firmaram que o desacato (art. 331 do CP) permanece TÍPICO e compatível com a Convenção Americana. Logo, não houve descriminalização.",
      fundamento: "CP, art. 331; STJ (3ª Seção, HC 379.269); STF (ADPF 496).",
      macete: "Desacato continua crime. A 'descriminalização pela CADH' foi rejeitada.",
      erroComum: "Tomar a decisão isolada de 2016 como entendimento vigente.",
      comoBancaPensa: "Explora uma virada jurisprudencial que não se consolidou."
    }
  },
  {
    id: "DP-033", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Contrabando × descaminho",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "O descaminho consiste em importar ou exportar mercadoria cuja entrada ou saída do país seja absolutamente proibida, ao passo que o contrabando se caracteriza pela ilusão, total ou parcial, do pagamento de imposto devido sobre mercadoria permitida.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "descaminho × contrabando",
    cognitivo: {
      motivo: "Distinguir contrabando (art. 334-A) de descaminho (art. 334).",
      mede: "Crimes contra a Administração Pública.",
      pegadinhaDesc: "Inverte as definições dos dois crimes.",
      ondeErra: "Troca mercadoria proibida (contrabando) por sonegação de imposto (descaminho).",
      palavraCritica: "proibida (contrabando) × imposto (descaminho)",
      tecnica: "Contrabando: mercadoria PROIBIDA. Descaminho: iludir IMPOSTO de mercadoria permitida.",
      regraMental: "ConTRAbando = mercadoria proibida (traficar). Descaminho = 'descaminhar' o imposto (sonegar)."
    },
    comentario: {
      resolucao: "ERRADO. As definições estão trocadas. CONTRABANDO (art. 334-A): importar/exportar mercadoria PROIBIDA. DESCAMINHO (art. 334): iludir, total ou parcialmente, o pagamento de imposto devido sobre mercadoria permitida. A assertiva inverteu os conceitos.",
      fundamento: "CP, arts. 334 (descaminho) e 334-A (contrabando).",
      macete: "Contrabando = proibida. Descaminho = imposto (permitida, mas sem pagar).",
      erroComum: "Trocar as definições dos dois crimes.",
      comoBancaPensa: "Par espelhado (contrabando × descaminho) invertido."
    }
  },
  {
    id: "DP-034", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Peculato mediante erro de outrem",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.7,
    enunciado: "O funcionário público que se apropria de dinheiro ou de qualquer utilidade que, no exercício do cargo, recebeu por erro de outrem, pratica o denominado peculato-estelionato, ou peculato mediante erro de outrem.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "recebeu por erro de outrem",
    cognitivo: {
      motivo: "Cobrar a modalidade do art. 313 do CP (peculato mediante erro de outrem).",
      mede: "Crimes contra a Administração — peculato.",
      pegadinhaDesc: "A banca costuma confundir com estelionato comum ou com peculato-apropriação.",
      ondeErra: "Não identifica o 'erro de outrem' como elemento definidor.",
      palavraCritica: "recebeu por erro de outrem",
      tecnica: "No art. 313, o funcionário recebe por ERRO de terceiro e se apropria. Difere do peculato do art. 312 (posse legítima anterior).",
      regraMental: "Peculato-estelionato: 'caiu no colo por erro' e o funcionário ficou com ele."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 313: apropriar-se de dinheiro ou utilidade que, no exercício do cargo, recebeu por erro de outrem — é o peculato-estelionato (mediante erro de outrem). Diferencia-se do peculato do art. 312, em que a posse é legítima e anterior.",
      fundamento: "CP, art. 313.",
      macete: "Recebeu por erro alheio e ficou com o bem = peculato-estelionato (art. 313).",
      erroComum: "Confundir com estelionato comum ou peculato-apropriação.",
      comoBancaPensa: "O 'erro de outrem' é o elemento que a banca testa."
    }
  },

  /* ===== DIREITO PENAL — CRIMES CONTRA A ADMINISTRAÇÃO DA JUSTIÇA ===== */
  {
    id: "DP-035", disciplina: "Direito Penal", assunto: "Crimes contra a Administração da Justiça", subassunto: "Denunciação caluniosa",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Pratica denunciação caluniosa quem dá causa à instauração de investigação policial, de processo judicial, de investigação administrativa, de inquérito civil ou de ação de improbidade administrativa contra alguém, imputando-lhe crime de que o sabe inocente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "imputando crime de que o sabe inocente",
    cognitivo: {
      motivo: "Cobrar o tipo da denunciação caluniosa (art. 339 do CP).",
      mede: "Crimes contra a administração da justiça.",
      pegadinhaDesc: "A banca costuma dispensar o 'sabe inocente' (dolo direto) ou confundir com calúnia.",
      ondeErra: "Confunde denunciação caluniosa (movimenta o aparato estatal) com calúnia (ofende a honra).",
      palavraCritica: "dá causa à investigação + sabe inocente",
      tecnica: "Denunciação caluniosa: provoca a máquina persecutória contra quem se sabe inocente. Calúnia: imputa crime falso (honra).",
      regraMental: "Denunciação caluniosa 'move o Estado'. Calúnia só 'suja a honra'."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 339: dar causa à instauração de investigação policial, processo judicial, investigação administrativa, inquérito civil ou ação de improbidade, imputando a alguém crime de que o sabe inocente. Exige dolo direto ('sabe inocente') e a efetiva movimentação do aparato estatal.",
      fundamento: "CP, art. 339.",
      macete: "Denunciação caluniosa = acionar o Estado contra inocente. Difere da calúnia (só honra).",
      erroComum: "Dispensar o 'sabe inocente' ou confundir com calúnia.",
      comoBancaPensa: "O dolo direto e a movimentação estatal são os pontos cobrados."
    }
  },
  {
    id: "DP-036", disciplina: "Direito Penal", assunto: "Crimes contra a Administração da Justiça", subassunto: "Falso testemunho",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.72,
    enunciado: "O crime de falso testemunho ou falsa perícia consuma-se com a afirmação falsa, a negação ou a omissão da verdade por testemunha, perito, contador, tradutor ou intérprete, em processo judicial, administrativo, inquérito policial ou em juízo arbitral.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "afirmação falsa / omissão da verdade",
    cognitivo: {
      motivo: "Cobrar o tipo do falso testemunho (art. 342 do CP).",
      mede: "Crimes contra a administração da justiça.",
      pegadinhaDesc: "A banca costuma restringir o crime ao processo judicial ou excluir o inquérito policial.",
      ondeErra: "Ignora a abrangência (também inquérito e juízo arbitral).",
      palavraCritica: "processo judicial, administrativo, IP ou arbitral",
      tecnica: "Falso testemunho: crime de mão própria; retratação antes da sentença extingue a punibilidade.",
      regraMental: "Mentir como testemunha/perito em qualquer processo/IP = crime. Retratar-se a tempo apaga."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 342: fazer afirmação falsa, negar ou calar a verdade, como testemunha, perito, contador, tradutor ou intérprete, em processo judicial, administrativo, inquérito policial ou juízo arbitral. É crime de mão própria; a retratação antes da sentença extingue a punibilidade (§ 2º).",
      fundamento: "CP, art. 342, §§ 1º e 2º.",
      macete: "Mentiu como testemunha/perito = crime. Retratou antes da sentença = extingue a punibilidade.",
      erroComum: "Restringir o crime apenas ao processo judicial.",
      comoBancaPensa: "A abrangência do tipo (IP, arbitral) é o ponto cobrado."
    }
  },
  {
    id: "DP-037", disciplina: "Direito Penal", assunto: "Crimes contra a Administração da Justiça", subassunto: "Comunicação falsa × autoacusação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.68,
    enunciado: "Comete o crime de autoacusação falsa quem provoca a ação de autoridade, comunicando a ocorrência de crime ou de contravenção que sabe não ter se verificado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "autoacusação falsa",
    cognitivo: {
      motivo: "Distinguir comunicação falsa de crime (art. 340) de autoacusação falsa (art. 341).",
      mede: "Crimes contra a administração da justiça.",
      pegadinhaDesc: "Rotula como 'autoacusação falsa' a conduta que é 'comunicação falsa de crime'.",
      ondeErra: "Troca os dois tipos.",
      palavraCritica: "comunicar crime inexistente = art. 340 (não 341)",
      tecnica: "Art. 340 (comunicação falsa): avisa de crime que não houve. Art. 341 (autoacusação): confessa crime inexistente ou praticado por outrem.",
      regraMental: "Comunicação falsa = 'inventou um crime'. Autoacusação = 'assumiu um crime que não cometeu'."
    },
    comentario: {
      resolucao: "ERRADO. A conduta descrita (comunicar crime/contravenção que sabe não ter ocorrido, provocando a ação da autoridade) é COMUNICAÇÃO FALSA DE CRIME (art. 340). A AUTOACUSAÇÃO FALSA (art. 341) ocorre quando alguém se acusa, perante a autoridade, de crime inexistente ou cometido por outrem.",
      fundamento: "CP, arts. 340 e 341.",
      macete: "340: inventou o crime. 341: assumiu a culpa de crime que não é seu.",
      erroComum: "Trocar os dois tipos penais.",
      comoBancaPensa: "Par espelhado (comunicação falsa × autoacusação) invertido."
    }
  },

  /* ===== DIREITO PENAL — CRIMES CONTRA O PATRIMÔNIO ===== */
  {
    id: "DP-038", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Receptação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Na receptação, a punição do agente depende da prévia condenação do autor do crime antecedente que gerou a coisa receptada, em razão da acessoriedade do delito.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "depende da prévia condenação",
    cognitivo: {
      motivo: "Cobrar a autonomia da receptação (art. 180, § 4º, do CP).",
      mede: "Crimes contra o patrimônio (item 3 do edital).",
      pegadinhaDesc: "Cria a exigência de condenação prévia do crime antecedente, que a lei dispensa.",
      ondeErra: "Trata a receptação como delito acessório dependente de condenação anterior.",
      palavraCritica: "depende de condenação prévia (falso)",
      tecnica: "Art. 180, § 4º: a receptação é punível ainda que desconhecido ou isento de pena o autor do crime antecedente.",
      regraMental: "Receptação é autônoma: pune-se mesmo sem condenar (ou identificar) quem cometeu o crime anterior."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 180, § 4º: a receptação é punível ainda que desconhecido ou isento de pena o autor do crime de que proveio a coisa. Não se exige a prévia condenação do autor do crime antecedente — o delito é autônomo.",
      fundamento: "CP, art. 180, § 4º.",
      macete: "Receptação pune-se sozinha: não espera condenar o ladrão original.",
      erroComum: "Exigir condenação prévia do crime antecedente.",
      comoBancaPensa: "Cria falsa dependência entre receptação e crime antecedente."
    }
  },

  /* ===== RACIOCÍNIO LÓGICO-MATEMÁTICO ===== */
  {
    id: "RL-012", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica de argumentação", subassunto: "Modus tollens",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "Considere o argumento: 'Se o suspeito é culpado, então ele estava no local do crime. O suspeito não estava no local do crime. Logo, o suspeito não é culpado.' Esse argumento é válido, correspondendo à forma conhecida como modus tollens.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "modus tollens",
    cognitivo: {
      motivo: "Cobrar a validade do modus tollens.",
      mede: "Lógica de argumentação (item 10 do edital).",
      pegadinhaDesc: "A banca costuma apresentar a falácia da negação do antecedente como se fosse válida, ou negar o modus tollens.",
      ondeErra: "Confunde modus tollens (válido) com falácias formais.",
      palavraCritica: "nega o consequente → nega o antecedente",
      tecnica: "Modus tollens: P→Q, ~Q ⊢ ~P (válido). Modus ponens: P→Q, P ⊢ Q (válido).",
      regraMental: "Negou a conclusão (consequente) → nega a causa (antecedente): válido (tollens)."
    },
    comentario: {
      resolucao: "CERTO. O argumento tem a forma modus tollens: de P→Q e ~Q, conclui-se ~P. É uma forma de argumento válida. (Cuidado: 'P→Q, ~P ⊢ ~Q' seria a falácia da negação do antecedente, inválida.)",
      fundamento: "Lógica — regras de inferência (modus tollens).",
      macete: "Ponens: afirma a causa → afirma o efeito. Tollens: nega o efeito → nega a causa. Ambos válidos.",
      erroComum: "Confundir com a negação do antecedente (falácia).",
      comoBancaPensa: "Formas válidas × falácias formais são o alvo em lógica de argumentação."
    }
  },
  {
    id: "RL-013", disciplina: "Raciocínio Lógico-Matemático", assunto: "Progressões", subassunto: "Progressão aritmética",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "Em uma progressão aritmética de primeiro termo igual a 3 e razão igual a 5, o décimo termo é igual a 48.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "a10 = a1 + 9r",
    cognitivo: {
      motivo: "Cobrar o termo geral da PA.",
      mede: "Progressões aritméticas (item 7 do edital).",
      pegadinhaDesc: "A banca costuma usar (n) em vez de (n−1) no termo geral, gerando erro por um passo.",
      ondeErra: "Multiplica a razão por 10 em vez de por 9.",
      palavraCritica: "a_n = a1 + (n−1)·r",
      tecnica: "Termo geral da PA: a_n = a1 + (n−1)·r. Para n=10: a10 = 3 + 9·5 = 48.",
      regraMental: "PA: soma (n−1) razões ao primeiro termo. Cuidado com o (n−1), não (n)."
    },
    comentario: {
      resolucao: "CERTO. Termo geral da PA: a_n = a1 + (n−1)·r. Com a1=3, r=5 e n=10: a10 = 3 + (10−1)·5 = 3 + 45 = 48.",
      fundamento: "Matemática — progressão aritmética (termo geral).",
      macete: "a10 = a1 + 9r (nove 'saltos' de razão, não dez).",
      erroComum: "Usar 10·r (esquecendo o n−1) e obter 53.",
      comoBancaPensa: "O erro clássico é o (n−1); a banca calibra o número para punir esse deslize."
    }
  },
  {
    id: "RL-014", disciplina: "Raciocínio Lógico-Matemático", assunto: "Análise combinatória", subassunto: "Arranjo × combinação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Para formar uma comissão de três integrantes, sem cargos definidos, a partir de um grupo de cinco policiais, deve-se utilizar o conceito de combinação, pois a ordem de escolha dos integrantes é irrelevante.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ordem irrelevante = combinação",
    cognitivo: {
      motivo: "Distinguir arranjo (ordem importa) de combinação (ordem não importa).",
      mede: "Princípios de contagem (itens 1 e 13 do edital).",
      pegadinhaDesc: "A banca costuma exigir arranjo onde a ordem é irrelevante.",
      ondeErra: "Usa arranjo (com ordem) para formar comissão sem cargos.",
      palavraCritica: "sem cargos definidos = ordem irrelevante",
      tecnica: "Ordem importa (cargos, pódio, senha) = ARRANJO. Ordem não importa (comissão, grupo) = COMBINAÇÃO.",
      regraMental: "Comissão sem cargos = combinação. C(5,3) = 10. Se houvesse cargos, seria arranjo."
    },
    comentario: {
      resolucao: "CERTO. Como a comissão não tem cargos (a ordem dos escolhidos não altera o resultado), aplica-se a COMBINAÇÃO: C(5,3) = 5!/(3!·2!) = 10 comissões possíveis. Se houvesse cargos distintos (presidente, secretário...), seria arranjo.",
      fundamento: "Análise combinatória — arranjo × combinação.",
      macete: "Tem cargo/ordem? Arranjo. Não tem? Combinação.",
      erroComum: "Usar arranjo (ordem) para uma comissão sem hierarquia.",
      comoBancaPensa: "A relevância da ordem é o divisor cobrado entre arranjo e combinação."
    }
  },
  {
    id: "RL-015", disciplina: "Raciocínio Lógico-Matemático", assunto: "Operações com conjuntos", subassunto: "Princípio da inclusão-exclusão",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "Em um grupo de 100 investigados, 60 usam determinada rede social A e 50 usam a rede B, sendo que 30 usam ambas. Nessa situação, exatamente 20 investigados não usam nenhuma das duas redes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inclusão-exclusão",
    cognitivo: {
      motivo: "Cobrar o princípio da inclusão-exclusão em conjuntos.",
      mede: "Operações com conjuntos (item 14 do edital).",
      pegadinhaDesc: "A banca costuma somar 60+50 sem subtrair a interseção, gerando erro.",
      ondeErra: "Esquece de subtrair os 30 que usam ambas (dupla contagem).",
      palavraCritica: "n(A∪B) = n(A) + n(B) − n(A∩B)",
      tecnica: "n(A∪B) = 60 + 50 − 30 = 80. Nenhuma = 100 − 80 = 20.",
      regraMental: "União = soma − interseção. Quem está nos dois não pode ser contado duas vezes."
    },
    comentario: {
      resolucao: "CERTO. n(A∪B) = n(A) + n(B) − n(A∩B) = 60 + 50 − 30 = 80 usam pelo menos uma rede. Logo, 100 − 80 = 20 não usam nenhuma das duas.",
      fundamento: "Teoria dos conjuntos — princípio da inclusão-exclusão.",
      macete: "União = soma das partes menos a interseção. Sempre desconte a dupla contagem.",
      erroComum: "Somar 60+50=110 e ignorar a interseção.",
      comoBancaPensa: "A dupla contagem da interseção é o erro que a banca busca."
    }
  },
  {
    id: "RL-016", disciplina: "Raciocínio Lógico-Matemático", assunto: "Porcentagem", subassunto: "Variações percentuais sucessivas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Um valor que sofre um aumento de 10% e, em seguida, uma redução de 10% sobre o novo valor retorna exatamente ao seu valor original.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "aumento e redução de 10%",
    cognitivo: {
      motivo: "Cobrar que variações percentuais sucessivas não se cancelam por soma.",
      mede: "Porcentagens (item 4 do edital).",
      pegadinhaDesc: "Induz a pensar que +10% e −10% se anulam.",
      ondeErra: "Soma as porcentagens (+10 −10 = 0) em vez de multiplicar os fatores.",
      palavraCritica: "1,10 × 0,90 = 0,99",
      tecnica: "Fatores sucessivos multiplicam: 1,10 × 0,90 = 0,99 → perda líquida de 1%.",
      regraMental: "Aumento e desconto iguais NÃO se anulam: sempre sobra uma pequena perda (o produto dá 0,99)."
    },
    comentario: {
      resolucao: "ERRADO. As variações sucessivas multiplicam-se: 1,10 × 0,90 = 0,99. O valor final é 99% do original — uma redução líquida de 1%, e não o retorno ao valor inicial. Porcentagens sucessivas não se somam algebricamente.",
      fundamento: "Matemática financeira/básica — variações percentuais sucessivas.",
      macete: "+10% depois −10% = ×1,10×0,90 = 0,99 (perde 1%).",
      erroComum: "Somar +10% e −10% e concluir 'volta ao mesmo'.",
      comoBancaPensa: "A intuição de somar percentuais é a armadilha explorada."
    }
  },

  /* ===== LÍNGUA PORTUGUESA ===== */
  {
    id: "PT-010", disciplina: "Língua Portuguesa", assunto: "Sintaxe", subassunto: "Vírgula entre sujeito e verbo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    textoApoio: "Os agentes responsáveis pela investigação apresentaram o relatório final à autoridade.",
    enunciado: "A inserção de uma vírgula imediatamente após 'investigação' preservaria a correção gramatical do período, por isolar o sujeito da oração.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "vírgula entre sujeito e verbo",
    cognitivo: {
      motivo: "Cobrar a vedação da vírgula entre sujeito e verbo.",
      mede: "Emprego dos sinais de pontuação (item 5.4 do edital).",
      pegadinhaDesc: "Sugere isolar o sujeito com vírgula, o que a norma proíbe.",
      ondeErra: "Acredita que se pode separar o sujeito do predicado por vírgula.",
      palavraCritica: "vírgula separando sujeito e verbo (proibida)",
      tecnica: "Não se separa por vírgula o sujeito do verbo, nem o verbo do complemento — salvo termo intercalado (entre PAR de vírgulas).",
      regraMental: "Sujeito e verbo 'namoram': nada de vírgula única entre eles."
    },
    comentario: {
      resolucao: "ERRADO. A norma-padrão veda a vírgula única entre o sujeito ('Os agentes responsáveis pela investigação') e o verbo ('apresentaram'). A pontuação só seria admissível para isolar um termo intercalado, delimitado por um PAR de vírgulas.",
      fundamento: "Gramática normativa — pontuação (sujeito × predicado).",
      macete: "Uma vírgula sozinha entre sujeito e verbo = erro. Só vale par de vírgulas isolando intercalado.",
      erroComum: "Isolar o sujeito com uma única vírgula.",
      comoBancaPensa: "Reescritura de pontuação testa a proibição sujeito-verbo."
    }
  },
  {
    id: "PT-011", disciplina: "Língua Portuguesa", assunto: "Sintaxe", subassunto: "Paralelismo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "No período 'A autoridade recomendou cautela e que os agentes agissem com discrição', há quebra de paralelismo sintático, que seria corrigida pela reescrita 'A autoridade recomendou cautela e discrição aos agentes'.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "paralelismo sintático",
    cognitivo: {
      motivo: "Cobrar a noção de paralelismo sintático.",
      mede: "Estrutura morfossintática / coordenação (itens 5.2 e 6.3).",
      pegadinhaDesc: "A banca costuma negar a quebra de paralelismo ou apresentar reescrita que não a corrige.",
      ondeErra: "Não percebe a coordenação de estruturas diferentes (nome + oração).",
      palavraCritica: "coordenar termos de mesma função/estrutura",
      tecnica: "Paralelismo: elementos coordenados devem ter a mesma estrutura (nome + nome, ou oração + oração).",
      regraMental: "Coordenou 'cautela' (nome) com 'que agissem' (oração) = quebra. Iguale as estruturas."
    },
    comentario: {
      resolucao: "CERTO. Há quebra de paralelismo ao coordenar um substantivo ('cautela') com uma oração ('que os agentes agissem com discrição'). A correção iguala as estruturas: dois substantivos coordenados ('cautela e discrição') ou duas orações.",
      fundamento: "Gramática normativa — paralelismo sintático.",
      macete: "Coordenou coisas diferentes (nome + oração)? Quebrou o paralelismo. Iguale a estrutura.",
      erroComum: "Não identificar a assimetria entre nome e oração coordenados.",
      comoBancaPensa: "Paralelismo é cobrado por meio de reescritura equivalente."
    }
  },
  {
    id: "PT-012", disciplina: "Língua Portuguesa", assunto: "Regência verbal", subassunto: "Verbo 'preferir'",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.72,
    enunciado: "De acordo com a norma-padrão, a construção 'prefiro atuar em campo do que trabalhar no gabinete' está gramaticalmente correta quanto à regência do verbo 'preferir'.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "prefiro ... do que",
    cognitivo: {
      motivo: "Cobrar a regência do verbo 'preferir'.",
      mede: "Regência verbal (item 5.6 do edital).",
      pegadinhaDesc: "Valida a construção coloquial 'preferir ... do que', condenada pela norma culta.",
      ondeErra: "Aceita 'do que' após 'preferir'.",
      palavraCritica: "preferir A (não 'do que')",
      tecnica: "Preferir uma coisa A outra (sem 'mais', sem 'do que', sem 'antes').",
      regraMental: "Prefiro X a Y. Nada de 'prefiro X do que Y' na norma culta."
    },
    comentario: {
      resolucao: "ERRADO. Na norma-padrão, 'preferir' rege a preposição 'a': prefere-se uma coisa A outra. A construção com 'do que' ('prefiro atuar em campo do que...') é condenada. O correto: 'prefiro atuar em campo a trabalhar no gabinete'.",
      fundamento: "Gramática normativa — regência do verbo 'preferir'.",
      macete: "Preferir + 'a'. Sem 'mais', sem 'do que', sem 'antes'.",
      erroComum: "Usar 'do que' após 'preferir'.",
      comoBancaPensa: "Regência de 'preferir' é cobrada validando a forma coloquial."
    }
  },

  /* ===== PROCESSO PENAL ===== */
  {
    id: "PP-025", disciplina: "Processo Penal", assunto: "Ação penal", subassunto: "Princípios da ação penal pública",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A ação penal pública rege-se, entre outros, pelos princípios da obrigatoriedade e da indisponibilidade, de modo que, presentes os requisitos legais, o Ministério Público está, em regra, obrigado a oferecer a denúncia e não pode dela desistir.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "obrigatoriedade / indisponibilidade",
    cognitivo: {
      motivo: "Cobrar os princípios da ação penal pública.",
      mede: "Ação penal / disposições preliminares do CPP.",
      pegadinhaDesc: "A banca costuma trocar por 'oportunidade' e 'disponibilidade' (que regem a ação privada).",
      ondeErra: "Aplica à ação pública os princípios da ação privada.",
      palavraCritica: "obrigatoriedade + indisponibilidade",
      tecnica: "Ação pública: obrigatoriedade, indisponibilidade, oficialidade, indivisibilidade (discutida). Ação privada: oportunidade e disponibilidade.",
      regraMental: "Pública: MP é obrigado e não desiste. Privada: a vítima decide (oportunidade/disponibilidade)."
    },
    comentario: {
      resolucao: "CERTO. A ação penal pública é regida pela obrigatoriedade (o MP deve denunciar quando presentes os requisitos) e pela indisponibilidade (não pode desistir da ação — CPP, art. 42). Exceção mitigadora: o ANPP (art. 28-A, CPP) e a transação penal introduzem a obrigatoriedade mitigada.",
      fundamento: "CPP, arts. 24, 42; Lei 9.099/1995; CPP, art. 28-A.",
      macete: "Pública: obrigado e não desiste. Privada: oportunidade e disponibilidade.",
      erroComum: "Trocar os princípios entre ação pública e privada.",
      comoBancaPensa: "Os princípios da ação penal são cobrados por troca pública × privada."
    }
  },
  {
    id: "PP-026", disciplina: "Processo Penal", assunto: "Competência", subassunto: "Lugar da infração",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "Como regra geral, a competência para o processo e julgamento será determinada pelo lugar em que se consumar a infração ou, no caso de tentativa, pelo lugar em que for praticado o último ato de execução.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "lugar da consumação",
    cognitivo: {
      motivo: "Cobrar a competência ratione loci (art. 70 do CPP).",
      mede: "Competência no processo penal.",
      pegadinhaDesc: "A banca costuma trocar o local da consumação pelo da ação (teoria da atividade), confundindo com o CP.",
      ondeErra: "Aplica a regra do lugar do crime do CP (ubiquidade) à competência interna do CPP.",
      palavraCritica: "lugar da consumação (CPP) × lugar da ação (CP)",
      tecnica: "CPP, art. 70: competência pelo lugar da CONSUMAÇÃO (teoria do resultado). Não confundir com o art. 6º do CP (ubiquidade).",
      regraMental: "Competência interna (CPP) = lugar onde o crime se consumou (resultado)."
    },
    comentario: {
      resolucao: "CERTO. CPP, art. 70: a competência é, em regra, determinada pelo lugar da consumação da infração (teoria do resultado); na tentativa, pelo local do último ato de execução. Difere do art. 6º do CP (lugar do crime — teoria da ubiquidade, para fixar a lei brasileira).",
      fundamento: "CPP, art. 70; CP, art. 6º.",
      macete: "Competência (CPP) = onde consumou. Lei aplicável (CP) = ubiquidade.",
      erroComum: "Aplicar a ubiquidade do CP à competência interna do CPP.",
      comoBancaPensa: "Cruza a competência do CPP com o lugar do crime do CP."
    }
  },
  {
    id: "PP-027", disciplina: "Processo Penal", assunto: "Ação penal", subassunto: "Prazo para oferecimento da denúncia",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "O prazo para o oferecimento da denúncia, estando o réu preso, é de cinco dias, contados da data em que o órgão do Ministério Público receber os autos do inquérito policial; se solto, o prazo é de quinze dias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cinco dias preso / quinze solto",
    cognitivo: {
      motivo: "Cobrar os prazos da denúncia (art. 46 do CPP).",
      mede: "Ação penal — prazos.",
      pegadinhaDesc: "A banca costuma inverter os prazos (5/15) ou trocar preso/solto.",
      ondeErra: "Confunde qual prazo se aplica ao réu preso e ao solto.",
      palavraCritica: "preso 5 / solto 15",
      tecnica: "Denúncia: réu PRESO = 5 dias; réu SOLTO = 15 dias (CPP, art. 46).",
      regraMental: "Preso tem pressa: 5 dias. Solto: 15 dias."
    },
    comentario: {
      resolucao: "CERTO. CPP, art. 46: o prazo para oferecimento da denúncia é de 5 dias se o réu estiver preso e de 15 dias se estiver solto, contados do recebimento dos autos pelo MP. Na ação penal privada, o prazo de decadência para a queixa é, em regra, de 6 meses.",
      fundamento: "CPP, art. 46; art. 38.",
      macete: "Preso = 5 (tem pressa). Solto = 15.",
      erroComum: "Inverter os prazos ou preso/solto.",
      comoBancaPensa: "Prazos processuais são cobrados por inversão numérica."
    }
  },

  /* ===== DIREITO CONSTITUCIONAL ===== */
  {
    id: "DC-014", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Provas ilícitas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "São inadmissíveis, no processo, as provas obtidas por meios ilícitos, garantia expressamente prevista no rol de direitos e garantias fundamentais da Constituição Federal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "provas obtidas por meios ilícitos",
    cognitivo: {
      motivo: "Cobrar a inadmissibilidade das provas ilícitas (art. 5º, LVI).",
      mede: "Direitos e garantias fundamentais (Dia 01 do plano).",
      pegadinhaDesc: "A banca costuma dizer que a vedação está apenas no CPP, não na CF, ou admitir a prova ilícita em regra.",
      ondeErra: "Desconhece a previsão constitucional expressa.",
      palavraCritica: "inadmissíveis / meios ilícitos",
      tecnica: "CF, art. 5º, LVI: provas ilícitas são inadmissíveis. O CPP (art. 157) detalha, incluindo as derivadas (frutos da árvore envenenada), salvo fonte independente.",
      regraMental: "Prova ilícita = fora do processo (CF, art. 5º, LVI). Contamina as derivadas, salvo fonte independente."
    },
    comentario: {
      resolucao: "CERTO. CF, art. 5º, LVI: 'são inadmissíveis, no processo, as provas obtidas por meios ilícitos'. O CPP, art. 157, regulamenta o desentranhamento e a teoria dos frutos da árvore envenenada (prova ilícita por derivação), ressalvadas a fonte independente e a descoberta inevitável.",
      fundamento: "CF, art. 5º, LVI; CPP, art. 157.",
      macete: "Prova ilícita = inadmissível (CF) e desentranhada (CPP). Contamina as derivadas.",
      erroComum: "Negar a previsão constitucional da garantia.",
      comoBancaPensa: "Localização da garantia (CF × CPP) e seu alcance são cobrados."
    }
  },
  {
    id: "DC-015", disciplina: "Direito Constitucional", assunto: "Segurança pública", subassunto: "Subordinação das polícias",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "As polícias civis, os corpos de bombeiros militares e as polícias militares subordinam-se aos Governadores dos Estados, do Distrito Federal e dos Territórios.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "subordinam-se aos Governadores",
    cognitivo: {
      motivo: "Cobrar a subordinação das polícias estaduais (art. 144, § 6º, CF).",
      mede: "Segurança pública — art. 144 (Dia 07 do plano).",
      pegadinhaDesc: "A banca costuma subordinar as polícias ao Poder Judiciário ou à União.",
      ondeErra: "Confunde a subordinação administrativa (Governador) com vínculos funcionais.",
      palavraCritica: "aos Governadores",
      tecnica: "Art. 144, § 6º: polícias civis, militares e bombeiros militares subordinam-se aos Governadores.",
      regraMental: "Polícias estaduais = subordinadas ao Governador. Não ao juiz nem à União."
    },
    comentario: {
      resolucao: "CERTO. CF, art. 144, § 6º: as polícias militares e corpos de bombeiros militares, forças auxiliares e reserva do Exército, subordinam-se, juntamente com as polícias civis e as polícias penais estaduais e distrital, aos Governadores dos Estados, do DF e dos Territórios.",
      fundamento: "CF, art. 144, § 6º.",
      macete: "Polícias estaduais respondem ao Governador (subordinação administrativa).",
      erroComum: "Subordinar as polícias ao Judiciário ou à União.",
      comoBancaPensa: "A subordinação administrativa das polícias é o ponto cobrado."
    }
  },
  {
    id: "DC-016", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Devido processo, contraditório e ampla defesa",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "Aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e a ampla defesa, com os meios e recursos a ela inerentes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "processo judicial ou administrativo",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 5º, LV, da CF.",
      mede: "Direitos e garantias fundamentais.",
      pegadinhaDesc: "A banca costuma restringir a garantia ao processo judicial, excluindo o administrativo.",
      ondeErra: "Limita o contraditório e a ampla defesa à esfera judicial.",
      palavraCritica: "judicial OU administrativo",
      tecnica: "Contraditório e ampla defesa valem no processo judicial E administrativo (art. 5º, LV).",
      regraMental: "Contraditório/ampla defesa não são só do Judiciário — o processo administrativo também os garante."
    },
    comentario: {
      resolucao: "CERTO. CF, art. 5º, LV: aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e a ampla defesa, com os meios e recursos a ela inerentes. A Súmula Vinculante 5 ressalva que a falta de defesa técnica no PAD não ofende a Constituição.",
      fundamento: "CF, art. 5º, LV; Súmula Vinculante 5.",
      macete: "Contraditório e ampla defesa = judicial E administrativo.",
      erroComum: "Restringir a garantia ao processo judicial.",
      comoBancaPensa: "A abrangência (judicial + administrativo) é o ponto testado."
    }
  },

  /* ===== LEGISLAÇÃO PENAL ESPECIAL ===== */
  {
    id: "LE-034", disciplina: "Legislação Especial", assunto: "Crimes ambientais", subassunto: "Responsabilidade da pessoa jurídica",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "Conforme a Lei nº 9.605/1998 e a jurisprudência dos tribunais superiores, a pessoa jurídica pode ser responsabilizada penalmente por crimes ambientais, não se exigindo, atualmente, a simultânea imputação da pessoa física para a validade da ação penal (superada a teoria da dupla imputação).",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "superada a dupla imputação",
    cognitivo: {
      motivo: "Cobrar a responsabilidade penal da PJ e a superação da dupla imputação (STF).",
      mede: "Crimes ambientais (Lei 9.605/1998; item do edital).",
      pegadinhaDesc: "A banca costuma exigir a dupla imputação (PJ + PF), tese superada pelo STF.",
      ondeErra: "Aplica a teoria da dupla imputação, já abandonada.",
      palavraCritica: "não se exige imputação simultânea da pessoa física",
      tecnica: "STF (RE 548.181): admite-se a responsabilização isolada da PJ, sem necessidade de imputar concomitantemente a PF.",
      regraMental: "PJ responde por crime ambiental sozinha — a dupla imputação obrigatória foi superada."
    },
    comentario: {
      resolucao: "CERTO. Lei 9.605/1998, art. 3º: a PJ pode ser responsabilizada penalmente por crimes ambientais. O STF (RE 548.181) superou a teoria da dupla imputação, admitindo a ação penal contra a PJ ainda que não haja imputação simultânea da pessoa física.",
      fundamento: "CF, art. 225, § 3º; Lei 9.605/1998, art. 3º; STF, RE 548.181.",
      macete: "PJ pode responder sozinha por crime ambiental (dupla imputação superada).",
      erroComum: "Exigir a imputação conjunta da pessoa física.",
      comoBancaPensa: "Virada jurisprudencial (dupla imputação) é cobrada para pegar material antigo."
    }
  },
  {
    id: "LE-035", disciplina: "Legislação Especial", assunto: "Crimes contra a ordem tributária", subassunto: "Relações de consumo (Lei 8.137/1990)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.7,
    enunciado: "A Lei nº 8.137/1990, além dos crimes contra a ordem tributária e econômica, tipifica condutas lesivas às relações de consumo, como vender ou expor à venda mercadoria cujas condições de fabricação, distribuição ou apresentação estejam em desacordo com as normas legais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "relações de consumo",
    cognitivo: {
      motivo: "Cobrar o alcance da Lei 8.137/1990 (também crimes contra o consumo).",
      mede: "Crimes contra a ordem econômica/tributária e as relações de consumo (Dia 24 do plano).",
      pegadinhaDesc: "A banca costuma restringir a Lei 8.137 aos crimes tributários, excluindo o consumo.",
      ondeErra: "Ignora que a lei também protege as relações de consumo (art. 7º).",
      palavraCritica: "relações de consumo",
      tecnica: "Lei 8.137: crimes contra a ordem tributária (arts. 1º-3º), econômica (art. 4º-6º) e relações de consumo (art. 7º).",
      regraMental: "8.137 é 'três em um': ordem tributária + econômica + consumo."
    },
    comentario: {
      resolucao: "CERTO. A Lei 8.137/1990 tipifica crimes contra a ordem tributária (arts. 1º e 2º), contra a ordem econômica (arts. 4º a 6º) e contra as relações de consumo (art. 7º), como vender mercadoria imprópria ou em desacordo com as normas de fabricação/apresentação.",
      fundamento: "Lei 8.137/1990, arts. 1º, 4º e 7º.",
      macete: "Lei 8.137 protege: tributária + econômica + consumo.",
      erroComum: "Restringir a lei apenas aos crimes tributários.",
      comoBancaPensa: "O alcance amplo da Lei 8.137 é o ponto cobrado."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE8);

/* Reforço de frequência de temas do lote 8 (Módulo 2) */
(function () {
  const add = (disc, temas) => {
    let d = FREQUENCIA_TEMAS.find(f => f.disciplina === disc);
    if (!d) { d = { disciplina: disc, temas: [] }; FREQUENCIA_TEMAS.push(d); }
    d.temas.push(...temas);
  };
  add("Direito Penal", [
    { tema: "Crimes contra a liberdade e a dignidade sexual", freq: 82, tendencia: "alta", prob: 0.84 },
    { tema: "Crimes contra a administração da justiça", freq: 78, tendencia: "estavel", prob: 0.8 },
  ]);
  add("Raciocínio Lógico-Matemático", [
    { tema: "Argumentos válidos e falácias", freq: 90, tendencia: "alta", prob: 0.92 },
    { tema: "Combinatória e conjuntos", freq: 82, tendencia: "estavel", prob: 0.84 },
  ]);
  add("Língua Portuguesa", [
    { tema: "Pontuação e paralelismo", freq: 86, tendencia: "estavel", prob: 0.88 },
  ]);
})();
