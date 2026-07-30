/* =====================================================================
   QUESTLAB — Lote 44: DIREITO CONSTITUCIONAL
   Direitos e Deveres Individuais e Coletivos (art. 5º da CF/88) — expansão
   Baseado em material de terceiros contendo 7 questões REAIS de
   Certo/Errado de provas anteriores da banca CEBRASPE (TCE-RN, PC-AL,
   Polícia Federal, ANM, CAU-BR, MPE-SC), com gabarito oficial,
   fundamentação em dispositivos da CF/88 e jurisprudência STF/STJ.
   Cada enunciado ORIGINAL foi redigido do zero, testando o mesmo
   tema e a mesma resposta correta identificada pela banca/doutrina,
   com um PAR C/E adicional (versão espelhada) para reforçar cada
   conceito. Temas já amplamente cobertos no banco (inviolabilidade
   genérica de domicílio, direito ao esquecimento — STF Tema 786,
   remédios constitucionais básicos) foram DELIBERADAMENTE OMITIDOS
   aqui para evitar redundância; o lote foca nos ângulos ainda não
   testados: vedação ao anonimato, censura prévia, direitos do preso
   (identificação dos responsáveis), liberdade de associação
   (suspensão x dissolução), o cruzamento entre imprescritibilidade e
   vedação a graça/anistia, a troca HC x MS para liberdade de
   locomoção, ação popular, e o critério objetivo de "dia e noite"
   para busca domiciliar (STJ, RHC 196.496, pós Lei 13.869/2019).
   Gabarito de cada item novo verificado de forma independente.
   16 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE44 = [

  /* ===== VEDAÇÃO AO ANONIMATO (ART. 5º, IV) ===== */
  {
    id: "DC-049", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Liberdade de manifestação e vedação ao anonimato (art. 5º, IV)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, IV)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "A Constituição Federal assegura a livre manifestação do pensamento, mas veda o anonimato, exigindo-se a identificação do autor para viabilizar sua responsabilização por eventuais abusos e assegurar ao ofendido o direito de resposta proporcional ao agravo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "livre a manifestação do pensamento ... vedado o anonimato",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 5º, IV, e a razão de ser da vedação ao anonimato (responsabilização e direito de resposta).",
      palavraCritica: "vedado o anonimato ... responsabilização",
    },
    comentario: {
      resolucao: "CERTO. A Constituição assegura a livre manifestação do pensamento, mas veda o anonimato (art. 5º, IV) justamente para permitir a responsabilização do autor por eventuais abusos e assegurar ao ofendido o direito de resposta proporcional ao agravo.",
      fundamento: "CF/88, art. 5º, IV.",
      macete: "Livre manifestação + identificação obrigatória = responsabilização possível.",
      erroComum: "Achar que existe direito constitucional à manifestação anônima.",
      comoBancaPensa: "Item 'limpo' que reproduz a literalidade do inciso, tema recorrente e de alta incidência."
    }
  },
  {
    id: "DC-050", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Liberdade de manifestação e vedação ao anonimato (art. 5º, IV)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, IV)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A Constituição Federal, ao assegurar a livre manifestação do pensamento como garantia fundamental, admite o anonimato do autor sempre que este entenda necessário resguardar sua identidade para evitar retaliações pessoais ou profissionais.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "admite o anonimato do autor",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a CF veda — e não admite — o anonimato na manifestação do pensamento.",
      palavraCritica: "admite o anonimato",
    },
    comentario: {
      resolucao: "ERRADO. A Constituição veda — e não admite — o anonimato na manifestação do pensamento (art. 5º, IV), sem prever exceção relacionada a proteção contra retaliações. A identificação do autor é sempre exigida, para viabilizar sua responsabilização por eventuais abusos.",
      fundamento: "CF/88, art. 5º, IV.",
      macete: "Vedação ao anonimato não tem exceção por 'medo de retaliação' — é regra sem ressalva no texto constitucional.",
      erroComum: "Criar uma exceção à vedação ao anonimato que a Constituição não prevê.",
      comoBancaPensa: "Inverte o comando constitucional (vedação → permissão condicionada) para testar a literalidade do inciso."
    }
  },

  /* ===== CENSURA PRÉVIA (ART. 5º, IX) ===== */
  {
    id: "DC-051", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Liberdade de expressão intelectual, artística e científica (art. 5º, IX)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, IX)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "É livre a expressão da atividade intelectual, artística, científica e de comunicação, independentemente de censura ou licença, de modo que a exigência de autorização prévia de órgão público para a publicação de uma obra é incompatível com a Constituição Federal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "independentemente de censura ou licença",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 5º, IX, e a vedação à exigência de autorização prévia (censura) para publicação de obras.",
      palavraCritica: "independentemente de censura ou licença",
    },
    comentario: {
      resolucao: "CERTO. É livre a expressão da atividade intelectual, artística, científica e de comunicação, independentemente de censura ou licença (art. 5º, IX, da CF), sendo incompatível com a Constituição a exigência de autorização prévia de órgão público para a publicação de uma obra.",
      fundamento: "CF/88, art. 5º, IX.",
      macete: "Expressão intelectual/artística/científica: nunca precisa de 'licença' prévia do Estado.",
      erroComum: "Achar que órgãos públicos podem condicionar publicações a autorização prévia.",
      comoBancaPensa: "Item 'limpo' que reproduz a literalidade do inciso, evitando confundi-lo com o direito ao esquecimento (tema distinto do mesmo artigo)."
    }
  },
  {
    id: "DC-052", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Liberdade de expressão intelectual, artística e científica (art. 5º, IX)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, IX)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "A expressão da atividade intelectual, artística, científica e de comunicação, embora livre em regra, pode ser condicionada, pela Constituição Federal, à obtenção de licença prévia de órgão público competente, quando a obra a ser publicada envolver temas de interesse social relevante.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "pode ser condicionada ... à obtenção de licença prévia",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a CF não admite condicionamento da liberdade de expressão intelectual/artística/científica a licença prévia, nem mesmo por relevância do tema.",
      palavraCritica: "pode ser condicionada ... licença prévia ... temas de interesse social relevante",
    },
    comentario: {
      resolucao: "ERRADO. A liberdade de expressão intelectual, artística, científica e de comunicação é assegurada pela CF independentemente de censura ou licença (art. 5º, IX), sem qualquer exceção relacionada à relevância social do tema da obra a ser publicada.",
      fundamento: "CF/88, art. 5º, IX.",
      macete: "Nenhuma 'licença por relevância' existe no art. 5º, IX — a liberdade é incondicionada.",
      erroComum: "Criar uma exceção constitucional inexistente para justificar exigência de licença prévia.",
      comoBancaPensa: "Insere uma condição plausível ('interesse social relevante') que não consta do texto constitucional."
    }
  },

  /* ===== DIREITOS DO PRESO — IDENTIFICAÇÃO DOS RESPONSÁVEIS (ART. 5º, LXIV) ===== */
  {
    id: "DC-053", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Direitos do preso — identificação dos responsáveis (art. 5º, LXIV)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, LXIV)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "É assegurado ao preso o direito à identificação dos responsáveis por sua prisão ou por seu interrogatório policial, garantia que não comporta exceção, ainda que a prisão decorra de operação sigilosa autorizada por autoridade competente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não comporta exceção ... operação sigilosa",
    cognitivo: {
      motivo: "Cobrar que o direito à identificação dos responsáveis pela prisão (art. 5º, LXIV) é garantia incondicional, sem exceção para operações sigilosas.",
      palavraCritica: "não comporta exceção ... operação sigilosa",
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, LXIV, da CF assegura ao preso o direito à identificação dos responsáveis por sua prisão ou por seu interrogatório policial, sem qualquer exceção constitucional — nem mesmo quando a prisão decorrer de operação sigilosa autorizada por autoridade competente.",
      fundamento: "CF/88, art. 5º, LXIV.",
      macete: "Identificação dos responsáveis pela prisão: garantia sem exceção, nem para operação sigilosa.",
      erroComum: "Achar que existe ressalva constitucional para operações sigilosas nesse inciso.",
      comoBancaPensa: "Item 'limpo' que reforça a ausência de exceção — pegadinha mais frequente do CESPE nesse inciso, na forma correta."
    }
  },
  {
    id: "DC-054", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Direitos do preso — identificação dos responsáveis (art. 5º, LXIV)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, LXIV)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "É assegurado ao preso o direito à identificação dos responsáveis por sua prisão, exceto quando esta ocorrer no âmbito de operação sigilosa autorizada por autoridade competente, hipótese em que a identificação pode ser recusada por razões de segurança institucional.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exceto quando ... operação sigilosa ... pode ser recusada",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que não existe exceção constitucional ao direito de identificação dos responsáveis pela prisão.",
      palavraCritica: "exceto quando ... operação sigilosa ... pode ser recusada",
    },
    comentario: {
      resolucao: "ERRADO. A ressalva relativa a 'operação sigilosa' não existe no texto constitucional. O art. 5º, LXIV, assegura ao preso o direito à identificação dos responsáveis por sua prisão ou interrogatório policial sem qualquer exceção, seja por sigilo operacional, seja por segurança institucional.",
      fundamento: "CF/88, art. 5º, LXIV.",
      macete: "Criar exceção onde a CF não criou é o padrão de erro mais frequente nesse inciso — desconfie sempre.",
      erroComum: "Aceitar como válida uma exceção de 'sigilo' ou 'segurança institucional' não prevista na Constituição.",
      comoBancaPensa: "Insere uma exceção plausível (sigilo, segurança institucional) para testar se o candidato confia cegamente na 'lógica' em vez da literalidade constitucional."
    }
  },

  /* ===== LIBERDADE DE ASSOCIAÇÃO — SUSPENSÃO x DISSOLUÇÃO (ART. 5º, XIX) ===== */
  {
    id: "DC-055", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Liberdade de associação — suspensão x dissolução (art. 5º, XIX)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, XIX)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "As associações somente poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se, no caso da dissolução compulsória, o trânsito em julgado, requisito que não é exigido para a suspensão das atividades, medida de natureza reversível que admite decisão judicial ainda recorrível.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "trânsito em julgado ... apenas para a dissolução ... suspensão ... decisão recorrível",
    cognitivo: {
      motivo: "Cobrar que o trânsito em julgado é exigido apenas para a dissolução compulsória, e não para a suspensão de atividades.",
      palavraCritica: "trânsito em julgado ... apenas para a dissolução",
    },
    comentario: {
      resolucao: "CERTO. Nos termos do art. 5º, XIX, da CF, as associações só podem ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se o trânsito em julgado apenas para a dissolução compulsória — a suspensão, por ser medida reversível, admite decisão judicial ainda recorrível.",
      fundamento: "CF/88, art. 5º, XIX.",
      macete: "Trânsito em julgado só para dissolver (definitivo); suspender (reversível) dispensa esse requisito.",
      erroComum: "Estender a exigência de trânsito em julgado também à suspensão de atividades da associação.",
      comoBancaPensa: "Item 'limpo' que exige conhecer a distinção fina entre os dois requisitos do mesmo inciso."
    }
  },
  {
    id: "DC-056", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Liberdade de associação — suspensão x dissolução (art. 5º, XIX)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, XIX)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "As associações somente poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial com trânsito em julgado, sendo esse requisito aplicável igualmente às duas medidas, em razão da gravidade da interferência estatal na liberdade de associação.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "aplicável igualmente às duas medidas",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o trânsito em julgado é exigido apenas para a dissolução, e não para a suspensão de atividades.",
      palavraCritica: "aplicável igualmente às duas medidas",
    },
    comentario: {
      resolucao: "ERRADO. O trânsito em julgado, nos termos do art. 5º, XIX, da CF, é exigido apenas para a dissolução compulsória de associações — medida definitiva. A suspensão das atividades, por ser reversível, admite decisão judicial ainda recorrível, sem necessidade de trânsito em julgado.",
      fundamento: "CF/88, art. 5º, XIX.",
      macete: "Generalizar o trânsito em julgado para as duas medidas é o erro clássico desse inciso.",
      erroComum: "Achar que a gravidade da interferência estatal justifica exigir trânsito em julgado também na suspensão.",
      comoBancaPensa: "Generaliza indevidamente um requisito específico (dissolução) para as duas hipóteses do inciso."
    }
  },

  /* ===== CRIMES INAFIANÇÁVEIS, IMPRESCRITÍVEIS E GRAÇA/ANISTIA (ART. 5º, XLII-XLIV) ===== */
  {
    id: "DC-057", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Crimes inafiançáveis, imprescritíveis e graça/anistia (art. 5º, XLII-XLIV)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, XLII, XLIII e XLIV)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.86,
    enunciado: "Segundo a Constituição Federal, o crime de racismo, embora imprescritível e inafiançável, admite os benefícios de graça e indulto, ao passo que o crime de terrorismo, apesar de prescritível, é insuscetível de anistia, graça ou indulto — regimes jurídicos distintos que não devem ser confundidos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "racismo ... admite graça e indulto ... terrorismo ... insuscetível de anistia, graça ou indulto",
    cognitivo: {
      motivo: "Cobrar o cruzamento fino entre imprescritibilidade (racismo, art. 5º, XLII) e vedação a graça/anistia (tortura, tráfico, terrorismo e hediondos, art. 5º, XLIII) — regimes jurídicos distintos.",
      palavraCritica: "racismo ... admite graça e indulto ... terrorismo ... insuscetível de anistia, graça ou indulto",
    },
    comentario: {
      resolucao: "CERTO. O racismo (art. 5º, XLII) é inafiançável e imprescritível, mas a Constituição não veda a ele graça ou indulto. Já a tortura, o tráfico, o terrorismo e os hediondos (art. 5º, XLIII) são inafiançáveis e insuscetíveis de graça ou anistia, mas prescrevem — são regimes jurídicos distintos, e a assertiva reproduz corretamente essa distinção.",
      fundamento: "CF/88, art. 5º, XLII, XLIII e XLIV.",
      macete: "Imprescritíveis: RA-GA (Racismo, Ação de Grupos Armados). Sem graça/anistia (mas prescritíveis): 3T+H (Tortura, Tráfico, Terrorismo, Hediondos).",
      erroComum: "Confundir imprescritibilidade com vedação a graça/anistia, tratando-as como a mesma coisa.",
      comoBancaPensa: "Testa o cruzamento fino entre dois regimes jurídicos do mesmo artigo — quem decora sem entender erra."
    }
  },
  {
    id: "DC-058", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Crimes inafiançáveis, imprescritíveis e graça/anistia (art. 5º, XLII-XLIV)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, XLII, XLIII e XLIV)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.82,
    enunciado: "Segundo a Constituição Federal, o crime de racismo é insuscetível de graça ou indulto, por força de sua imprescritibilidade, ao passo que o crime de terrorismo, por ser prescritível, admite a concessão de anistia, graça ou indulto pelo Poder Público.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "racismo ... insuscetível de graça ... terrorismo ... admite anistia, graça ou indulto",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que imprescritibilidade e vedação a graça/anistia não caminham juntas — a lógica do item está exatamente trocada.",
      palavraCritica: "insuscetível de graça ... por força de sua imprescritibilidade ... admite anistia, graça ou indulto",
    },
    comentario: {
      resolucao: "ERRADO. A relação está invertida: o racismo é imprescritível, mas a CF NÃO veda a ele graça ou indulto (art. 5º, XLII). Já o terrorismo, embora prescritível, é expressamente insuscetível de graça, indulto ou anistia (art. 5º, XLIII) — o oposto do que a assertiva afirma.",
      fundamento: "CF/88, art. 5º, XLII e XLIII.",
      macete: "Imprescritibilidade (racismo) e vedação a graça/anistia (terrorismo e outros) são regimes distintos — nunca decorrem um do outro.",
      erroComum: "Tratar imprescritibilidade e vedação a graça/anistia como consequências automáticas uma da outra.",
      comoBancaPensa: "Inverte deliberadamente as restrições entre os dois crimes para testar se o candidato decorou sem entender o cruzamento."
    }
  },

  /* ===== HABEAS CORPUS x MANDADO DE SEGURANÇA (ART. 5º, LXVIII e LXIX) ===== */
  {
    id: "DC-059", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Habeas corpus x mandado de segurança — liberdade de locomoção (art. 5º, LXVIII e LXIX)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, LXVIII e LXIX)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "O remédio constitucional cabível para tutelar a liberdade de locomoção contra ilegalidade ou abuso de poder é o habeas corpus, e não o mandado de segurança, que é residual, destinado a proteger direito líquido e certo não amparado por habeas corpus ou habeas data.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "habeas corpus ... liberdade de locomoção ... mandado de segurança ... residual",
    cognitivo: {
      motivo: "Cobrar a correta distinção entre habeas corpus (liberdade de locomoção) e mandado de segurança (residual, direito líquido e certo).",
      palavraCritica: "habeas corpus ... e não o mandado de segurança",
    },
    comentario: {
      resolucao: "CERTO. O remédio constitucional cabível para tutelar a liberdade de locomoção é o habeas corpus (art. 5º, LXVIII), e não o mandado de segurança (art. 5º, LXIX), que tem natureza residual, protegendo direito líquido e certo não amparado por habeas corpus ou habeas data.",
      fundamento: "CF/88, art. 5º, LXVIII e LXIX.",
      macete: "Bem jurídico = liberdade de ir e vir → sempre habeas corpus, nunca mandado de segurança.",
      erroComum: "Trocar os institutos, indicando o mandado de segurança para tutelar a liberdade de locomoção.",
      comoBancaPensa: "Item 'limpo' que reforça a distinção correta entre os dois remédios mais cobrados do rol do art. 5º."
    }
  },
  {
    id: "DC-060", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Habeas corpus x mandado de segurança — liberdade de locomoção (art. 5º, LXVIII e LXIX)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, LXVIII e LXIX)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Para anular uma prisão ilegal, cabe ao preso impetrar mandado de segurança, remédio constitucional destinado especificamente a tutelar a liberdade de locomoção contra ilegalidade ou abuso de poder praticado por autoridade pública.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "mandado de segurança ... tutelar a liberdade de locomoção",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o remédio destinado à liberdade de locomoção é o habeas corpus, e não o mandado de segurança.",
      palavraCritica: "mandado de segurança ... tutelar a liberdade de locomoção",
    },
    comentario: {
      resolucao: "ERRADO. O remédio constitucional cabível para anular prisão ilegal e tutelar a liberdade de locomoção é o habeas corpus (art. 5º, LXVIII), e não o mandado de segurança (art. 5º, LXIX), que é residual e protege direito líquido e certo não amparado por habeas corpus ou habeas data.",
      fundamento: "CF/88, art. 5º, LXVIII e LXIX.",
      macete: "Troca clássica de institutos: sempre que o tema for liberdade de locomoção, o remédio é habeas corpus.",
      erroComum: "Indicar o mandado de segurança para tutelar a liberdade de locomoção.",
      comoBancaPensa: "Troca os institutos (HC por MS) mantendo a descrição correta do objetivo (anular prisão ilegal)."
    }
  },

  /* ===== AÇÃO POPULAR (ART. 5º, LXXIII) ===== */
  {
    id: "DC-061", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Ação popular (art. 5º, LXXIII)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, LXXIII)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Qualquer cidadão é parte legítima para propor ação popular que vise anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente ou ao patrimônio histórico e cultural, ficando o autor, salvo comprovada má-fé, isento de custas judiciais e do ônus da sucumbência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "qualquer cidadão ... isento de custas ... salvo comprovada má-fé",
    cognitivo: {
      motivo: "Cobrar a legitimidade ativa (qualquer cidadão), o objeto e a isenção de custas/sucumbência da ação popular, salvo má-fé.",
      palavraCritica: "qualquer cidadão ... isento de custas ... salvo comprovada má-fé",
    },
    comentario: {
      resolucao: "CERTO. Nos termos do art. 5º, LXXIII, da CF, qualquer cidadão é parte legítima para propor ação popular visando anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente ou ao patrimônio histórico e cultural, ficando isento de custas judiciais e do ônus da sucumbência, salvo comprovada má-fé.",
      fundamento: "CF/88, art. 5º, LXXIII.",
      macete: "Ação popular: legitimado é o cidadão (não qualquer pessoa), sem custas salvo má-fé comprovada.",
      erroComum: "Achar que a ação popular exige advogado constituído ou que o autor sempre paga custas e sucumbência.",
      comoBancaPensa: "Item 'limpo' que reúne legitimidade, objeto e o benefício de isenção de custas em um único enunciado."
    }
  },
  {
    id: "DC-062", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Ação popular (art. 5º, LXXIII)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 5º, LXXIII)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "A ação popular somente pode ser proposta por partido político com representação no Congresso Nacional ou por entidade de classe legalmente constituída, não sendo facultado ao cidadão comum, isoladamente, o ajuizamento dessa ação para anular ato lesivo ao patrimônio público.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "partido político ... entidade de classe ... não sendo facultado ao cidadão comum",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o legitimado para a ação popular é qualquer cidadão, e não partidos políticos ou entidades de classe.",
      palavraCritica: "não sendo facultado ao cidadão comum",
    },
    comentario: {
      resolucao: "ERRADO. A ação popular pode ser proposta por qualquer cidadão (art. 5º, LXXIII, da CF), e não apenas por partido político ou entidade de classe — legitimados próprios do mandado de segurança coletivo, instituto distinto que não se confunde com a ação popular.",
      fundamento: "CF/88, art. 5º, LXXIII.",
      macete: "Ação popular = cidadão. Não confundir com o mandado de segurança coletivo (partido/entidade de classe/associação).",
      erroComum: "Trocar a legitimidade ativa da ação popular pela do mandado de segurança coletivo.",
      comoBancaPensa: "Importa a legitimidade de outro remédio constitucional (MS coletivo) para negar a legitimidade correta da ação popular (cidadão)."
    }
  },

  /* ===== CONCEITO DE DIA E NOITE PARA BUSCA DOMICILIAR (STJ, RHC 196.496) ===== */
  {
    id: "DC-063", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Inviolabilidade de domicílio — conceito de dia e noite (STJ, RHC 196.496)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STJ, RHC 196.496; Lei 13.869/2019, art. 22, § 1º, III)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "Desde o advento do art. 22, § 1º, III, da Lei nº 13.869/2019 (Lei de Abuso de Autoridade), passou a ser válido o cumprimento de mandado de busca e apreensão domiciliar no período compreendido entre 5 horas e 21 horas, configurando abuso de autoridade seu cumprimento fora dessa janela, sem o consentimento do morador.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "entre 5 horas e 21 horas ... abuso de autoridade ... fora dessa janela",
    cognitivo: {
      motivo: "Cobrar o critério objetivo e temporal (5h às 21h) fixado pela Lei de Abuso de Autoridade para o cumprimento de mandado de busca domiciliar, superando a antiga divergência doutrinária sobre 'dia' e 'noite'.",
      palavraCritica: "entre 5 horas e 21 horas",
    },
    comentario: {
      resolucao: "CERTO. Após o advento do art. 22, § 1º, III, da Lei nº 13.869/2019 (Lei de Abuso de Autoridade), passou a ser válido o cumprimento de mandado de busca e apreensão domiciliar entre 5h e 21h, configurando abuso de autoridade seu cumprimento fora dessa janela sem o consentimento do morador — entendimento reafirmado pelo STJ (RHC 196.496/RN).",
      fundamento: "Lei nº 13.869/2019, art. 22, § 1º, III; STJ, RHC 196.496/RN, 3ª Seção.",
      macete: "Mandado de busca domiciliar: janela objetiva de 5h às 21h — fora disso, é abuso de autoridade (sem consentimento).",
      erroComum: "Achar que a definição de 'dia' e 'noite' para busca domiciliar continua indefinida ou puramente subjetiva.",
      comoBancaPensa: "Cobra uma atualização legislativa recente (2019) que superou uma antiga divergência doutrinária — testa se o candidato está atualizado."
    }
  },
  {
    id: "DC-064", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Inviolabilidade de domicílio — conceito de dia e noite (STJ, RHC 196.496)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STJ, RHC 196.496; Lei 13.869/2019, art. 22, § 1º, III)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.76,
    enunciado: "A definição dos conceitos de 'dia' e 'noite', para fins de cumprimento de mandado de busca e apreensão domiciliar, permanece, até hoje, sem qualquer critério objetivo fixado em lei, dependendo exclusivamente da avaliação subjetiva do agente responsável pelo cumprimento da diligência.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sem qualquer critério objetivo ... avaliação subjetiva do agente",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a Lei 13.869/2019 já fixou um critério objetivo e temporal (5h-21h) para a definição de dia/noite na busca domiciliar.",
      palavraCritica: "sem qualquer critério objetivo ... avaliação subjetiva do agente",
    },
    comentario: {
      resolucao: "ERRADO. A Lei nº 13.869/2019 (Lei de Abuso de Autoridade), em seu art. 22, § 1º, III, fixou um critério objetivo e temporal para a definição de 'dia' e 'noite' na busca domiciliar (válido entre 5h e 21h), superando a antiga divergência doutrinária — a definição não depende mais de avaliação subjetiva do agente.",
      fundamento: "Lei nº 13.869/2019, art. 22, § 1º, III; STJ, RHC 196.496/RN, 3ª Seção.",
      macete: "Desde 2019, o critério é objetivo (5h-21h) — nunca mais 'subjetivo' ou 'indefinido'.",
      erroComum: "Ignorar a atualização legislativa de 2019 e tratar o tema como ainda indefinido ou subjetivo.",
      comoBancaPensa: "Nega uma atualização legislativa real para testar se o candidato está desatualizado sobre o tema."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE44);

/* Frequência de temas — Direito Constitucional (Direitos e Deveres Individuais e Coletivos) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Direito Constitucional");
  if (!d) { d = { disciplina: "Direito Constitucional", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Vedação ao anonimato e censura prévia (art. 5º, IV e IX)", freq: 82, tendencia: "alta", prob: 0.82 },
    { tema: "Direitos do preso — identificação dos responsáveis (art. 5º, LXIV)", freq: 84, tendencia: "alta", prob: 0.84 },
    { tema: "Liberdade de associação — suspensão x dissolução (art. 5º, XIX)", freq: 82, tendencia: "media", prob: 0.82 },
    { tema: "Crimes inafiançáveis, imprescritíveis e graça/anistia (art. 5º, XLII-XLIV)", freq: 84, tendencia: "alta", prob: 0.84 },
    { tema: "Habeas corpus x mandado de segurança; ação popular (art. 5º, LXVIII-LXXIII)", freq: 84, tendencia: "alta", prob: 0.84 },
    { tema: "Inviolabilidade de domicílio — critério de dia/noite (Lei 13.869/2019)", freq: 78, tendencia: "media", prob: 0.78 },
  );
})();
