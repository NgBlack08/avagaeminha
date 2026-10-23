/* =====================================================================
   QUESTLAB — Lote 110: CRIMES CIBERNÉTICOS E SEGURANÇA DIGITAL, QAPs DSO
   (módulo 06 — LGPD e Convenção sobre o Crime Cibernético)

   ORIGEM E MÉTODO: os do lote 100. Comentários escritos do zero contra a
   Lei 13.709/2018 e o Decreto 11.491/2023 (Convenção de Budapeste).

   LGPD: 26 itens CEBRASPE de 2025 (PC-DF, PF, TRF 6, INSS, STM e outros).
   Nenhum estava no banco com o mesmo texto.

   CONVENÇÃO DE BUDAPESTE: 20 itens de autoria do curso. 15 repetem ponto e
   gabarito de itens já no banco (CC-105 a CC-122) e entraram como anotação
   de origem. Os outros 5 foram reescritos com redação própria.
   ===================================================================== */

const BASE110 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Crimes Cibernéticos e Segurança Digital",
};

const QUESTOES_PCAL_LOTE110 = [

  /* ===== LGPD — FUNDAMENTOS, PRINCÍPIOS E APLICAÇÃO ===== */

  {
    ...BASE110,
    concurso: "PCDF", ano: 2025,
    id: "CC-123", assunto: "LGPD",
    subassunto: "Endereço IP — base legal e direitos do titular",
    origem: "CEBRASPE PC-DF 2025 (cargo não informado) — caderno: CEBRASPE - PC DF/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Com base na Lei n.º 13.709/2018 (LGPD), uma empresa de e-commerce no Brasil que coleta endereços de IP dos usuários deve justificar o tratamento de dados pessoais com base na LGPD, mediante o consentimento do titular ou para atender ao legítimo interesse do controlador, sendo assegurados ao titular o acesso e a eliminação dos dados tratados, salvo exceções legais.",
    gabarito: "C",
    pegadinha: "verdade-mais-falso",
    palavraChave: "endereços de IP",
    cognitivo: {
      motivo: "Reconhecer o IP como dado pessoal e as bases legais do art. 7º.",
      palavraCritica: "deve justificar",
    },
    comentario: {
      resolucao: "CERTO. O endereço IP permite identificar a pessoa natural, por isso é dado pessoal (art. 5º, I). O tratamento precisa de base legal, como o consentimento (art. 7º, I) ou o legítimo interesse do controlador (art. 7º, IX). O titular tem direito de acesso e de eliminação (art. 18, II e VI), ressalvadas as hipóteses de conservação do art. 16.",
      fundamento: "Lei nº 13.709/2018, arts. 5º, I, 7º, I e IX, 16 e 18, II e VI.",
      macete: "IP é dado pessoal: precisa de base legal.",
      erroComum: "Achar que dado técnico não é dado pessoal.",
      comoBancaPensa: "Junta conceito, base legal e direitos num só item.",
    },
  },

  {
    ...BASE110,
    id: "CC-124", assunto: "LGPD",
    subassunto: "Princípio da necessidade",
    origem: "CEBRASPE - TRF 6/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Segundo o princípio da necessidade, o tratamento de dados deve ser limitado ao mínimo necessário para a realização de suas finalidades, logo deve abranger apenas os dados pertinentes, proporcionais e não excessivos em relação às suas finalidades.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "princípio da necessidade",
    cognitivo: {
      motivo: "Associar 'mínimo necessário' à necessidade (art. 6º, III).",
      palavraCritica: "mínimo necessário",
    },
    comentario: {
      resolucao: "CERTO. É a definição do art. 6º, III: necessidade é a limitação do tratamento ao mínimo necessário para suas finalidades, com dados pertinentes, proporcionais e não excessivos.",
      fundamento: "Lei nº 13.709/2018, art. 6º, III.",
      macete: "Necessidade = minimização.",
      erroComum: "Confundir com adequação ou finalidade.",
      comoBancaPensa: "Testa a correspondência princípio–definição.",
    },
  },

  {
    ...BASE110,
    id: "CC-125", assunto: "LGPD",
    subassunto: "Investigação penal — fora da LGPD",
    origem: "CEBRASPE - TRF 6/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A Lei Geral de Proteção de Dados Pessoais (LGPD) não se aplica ao tratamento de dados pessoais realizado para fins exclusivos de atividades de investigação e repressão de infrações penais.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "fins exclusivos",
    cognitivo: {
      motivo: "Conhecer o art. 4º, III, 'd'.",
      palavraCritica: "não se aplica",
    },
    comentario: {
      resolucao: "CERTO. O art. 4º, III, exclui da LGPD o tratamento para fins exclusivos de segurança pública, defesa nacional, segurança do Estado ou investigação e repressão de infrações penais. Essas hipóteses serão regidas por legislação específica, que deve observar o devido processo legal, os princípios gerais e os direitos do titular (§ 1º).",
      fundamento: "Lei nº 13.709/2018, art. 4º, III, 'd', e § 1º.",
      macete: "Investigação penal: LGPD não se aplica (lei própria).",
      erroComum: "Achar que a LGPD rege a investigação.",
      comoBancaPensa: "Reproduz a exclusão.",
    },
  },

  {
    ...BASE110,
    id: "CC-126", assunto: "LGPD",
    subassunto: "Dado sensível x dado anonimizado",
    origem: "CEBRASPE - TRF 6/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Conforme a LGPD, o dado pessoal relativo a origem racial ou étnica, bem como a convicção religiosa e opinião política, é classificado como dado pessoal anonimizado.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "anonimizado",
    cognitivo: {
      motivo: "Separar dado sensível (art. 5º, II) de anonimizado (art. 5º, III).",
      palavraCritica: "anonimizado",
    },
    comentario: {
      resolucao: "ERRADO. Origem racial ou étnica, convicção religiosa e opinião política são dados pessoais SENSÍVEIS (art. 5º, II). Dado anonimizado é o que não permite identificar o titular, considerados os meios técnicos razoáveis disponíveis (art. 5º, III).",
      fundamento: "Lei nº 13.709/2018, art. 5º, II e III.",
      macete: "Raça, religião, política: sensíveis.",
      erroComum: "Trocar as categorias.",
      comoBancaPensa: "Troca o rótulo.",
    },
  },

  {
    ...BASE110,
    id: "CC-127", assunto: "LGPD",
    subassunto: "Fundamentos — autodeterminação e liberdade de expressão",
    origem: "CEBRASPE - TRF 6/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A LGPD disciplina a proteção de dados pessoais com fundamento na autodeterminação informativa e na liberdade de expressão, informação, comunicação e opinião.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "autodeterminação informativa",
    cognitivo: {
      motivo: "Conhecer os incisos II e III do art. 2º.",
      palavraCritica: "fundamento",
    },
    comentario: {
      resolucao: "CERTO. O art. 2º lista, entre os fundamentos, a autodeterminação informativa (II) e a liberdade de expressão, de informação, de comunicação e de opinião (III).",
      fundamento: "Lei nº 13.709/2018, art. 2º, II e III.",
      macete: "Fundamentos: privacidade, autodeterminação, expressão...",
      erroComum: "Confundir fundamentos com princípios (art. 6º).",
      comoBancaPensa: "Reproduz o artigo.",
    },
  },

  {
    ...BASE110,
    id: "CC-128", assunto: "LGPD",
    subassunto: "Fundamentos — livre iniciativa e consumidor",
    origem: "CEBRASPE - FUNPRESP-EXE/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A Lei Geral de Proteção de Dados Pessoais prevê como fundamentos da disciplina da proteção de dados pessoais a livre iniciativa, a livre concorrência e a defesa do consumidor.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "defesa do consumidor",
    cognitivo: {
      motivo: "Conhecer o inciso VI do art. 2º.",
      palavraCritica: "fundamentos",
    },
    comentario: {
      resolucao: "CERTO. O art. 2º, VI, inclui entre os fundamentos a livre iniciativa, a livre concorrência e a defesa do consumidor. A LGPD equilibra proteção da pessoa e desenvolvimento econômico (inciso V).",
      fundamento: "Lei nº 13.709/2018, art. 2º, V e VI.",
      macete: "LGPD também protege mercado e consumidor.",
      erroComum: "Achar que a LGPD só trata de privacidade.",
      comoBancaPensa: "Cobra fundamento menos lembrado.",
    },
  },

  /* ===== LGPD — AGENTES, CONSENTIMENTO E DIREITOS ===== */

  {
    ...BASE110,
    id: "CC-129", assunto: "LGPD",
    subassunto: "Operador x controlador",
    origem: "CEBRASPE - FUNPRESP-EXE/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Aquele que realiza o tratamento de dados pessoais em nome do operador é denominado controlador.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "em nome do operador",
    cognitivo: {
      motivo: "Lembrar: operador trata em nome do controlador.",
      palavraCritica: "controlador",
    },
    comentario: {
      resolucao: "ERRADO. Controlador é quem toma as decisões sobre o tratamento (art. 5º, VI). Operador é quem realiza o tratamento EM NOME DO CONTROLADOR (art. 5º, VII). O item inverte os papéis.",
      fundamento: "Lei nº 13.709/2018, art. 5º, VI e VII.",
      macete: "Controlador decide; operador executa.",
      erroComum: "Inverter os agentes.",
      comoBancaPensa: "Troca os sujeitos da definição.",
    },
  },

  {
    ...BASE110,
    id: "CC-130", assunto: "LGPD",
    subassunto: "Consentimento — não pode ser implícito",
    origem: "CEBRASPE - FUNPRESP-EXE/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "O consentimento do titular dos dados pessoais pode ser obtido de forma implícita e inferido a partir de ações indiretas do titular, como a navegação em um site ou o uso de um serviço.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "de forma implícita",
    cognitivo: {
      motivo: "Lembrar 'manifestação livre, informada e inequívoca'.",
      palavraCritica: "implícita",
    },
    comentario: {
      resolucao: "ERRADO. Consentimento é a manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento para finalidade determinada (art. 5º, XII). Deve ser dado por escrito ou por outro meio que demonstre a vontade do titular, cabendo ao controlador o ônus da prova (art. 8º, caput e § 2º). Navegar num site não é consentimento.",
      fundamento: "Lei nº 13.709/2018, arts. 5º, XII, e 8º.",
      macete: "Consentimento: inequívoco, nunca presumido.",
      erroComum: "Aceitar consentimento tácito.",
      comoBancaPensa: "Admite inferência onde a lei exige manifestação.",
    },
  },

  /* ===== LGPD — FUNDAMENTOS, PRINCÍPIOS E APLICAÇÃO ===== */

  {
    ...BASE110,
    id: "CC-131", assunto: "LGPD",
    subassunto: "Segurança pública — fora da LGPD",
    origem: "CEBRASPE - ANM/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "O tratamento de dados pessoais realizado para fins exclusivos de segurança pública, defesa nacional, segurança do Estado ou atividades de investigação e repressão de infrações penais se submete às disposições da LGPD, pois as normas gerais nela contidas são de interesse nacional e devem ser observadas pela União, pelos estados, pelo Distrito Federal e pelos municípios.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "se submete às disposições da LGPD",
    cognitivo: {
      motivo: "Lembrar a exclusão do art. 4º, III.",
      palavraCritica: "se submete",
    },
    comentario: {
      resolucao: "ERRADO. Essas finalidades estão expressamente excluídas da LGPD (art. 4º, III). Serão regidas por legislação específica, com medidas proporcionais e estritamente necessárias ao interesse público, observados o devido processo, os princípios gerais e os direitos do titular (§ 1º). A parte sobre normas gerais de interesse nacional (art. 1º, parágrafo único) é verdadeira, mas não altera a exclusão.",
      fundamento: "Lei nº 13.709/2018, arts. 1º, parágrafo único, e 4º, III, e § 1º.",
      macete: "Segurança e investigação: fora da LGPD.",
      erroComum: "Usar o caráter nacional da lei para afastar a exclusão.",
      comoBancaPensa: "Junta uma verdade com uma conclusão falsa.",
    },
  },

  {
    ...BASE110,
    id: "CC-132", assunto: "LGPD",
    subassunto: "Alcance — particulares também",
    origem: "CEBRASPE - ANM/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A proteção de dados assegurada pela LGPD abrange apenas as operações de tratamento de dados pessoais realizadas entre particular e o poder público.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "apenas",
    cognitivo: {
      motivo: "Lembrar 'pessoa natural ou jurídica de direito público ou privado'.",
      palavraCritica: "apenas",
    },
    comentario: {
      resolucao: "ERRADO. A LGPD aplica-se a qualquer operação de tratamento realizada por pessoa natural ou jurídica de direito público OU PRIVADO, inclusive nos meios digitais (arts. 1º e 3º). Relações entre particulares estão abrangidas.",
      fundamento: "Lei nº 13.709/2018, arts. 1º e 3º.",
      macete: "LGPD: público e privado.",
      erroComum: "Achar que a lei só vale para o Estado.",
      comoBancaPensa: "Restringe o alcance.",
    },
  },

  /* ===== LGPD — AGENTES, CONSENTIMENTO E DIREITOS ===== */

  {
    ...BASE110,
    id: "CC-133", assunto: "LGPD",
    subassunto: "Quem trata em nome do operador?",
    origem: "CEBRASPE - ANM/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do operador é denominada de controlador.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "em nome do operador",
    cognitivo: {
      motivo: "Lembrar a relação controlador–operador.",
      palavraCritica: "controlador",
    },
    comentario: {
      resolucao: "ERRADO. O operador é quem trata dados em nome do controlador (art. 5º, VII). O controlador é a pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões sobre o tratamento (art. 5º, VI).",
      fundamento: "Lei nº 13.709/2018, art. 5º, VI e VII.",
      macete: "Operador age em nome do controlador.",
      erroComum: "Inverter os papéis.",
      comoBancaPensa: "Mesma troca de sujeitos, em outra prova.",
    },
  },

  {
    ...BASE110,
    id: "CC-134", assunto: "LGPD",
    subassunto: "Encarregado — canal de comunicação",
    origem: "CEBRASPE - EMBRAPA/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Considera-se encarregado a pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "encarregado",
    cognitivo: {
      motivo: "Separar encarregado (canal) de operador (executa).",
      palavraCritica: "encarregado",
    },
    comentario: {
      resolucao: "ERRADO. A definição do item é a de OPERADOR (art. 5º, VII). Encarregado é a pessoa indicada pelo controlador e pelo operador para atuar como canal de comunicação entre o controlador, os titulares e a ANPD (art. 5º, VIII).",
      fundamento: "Lei nº 13.709/2018, art. 5º, VII e VIII.",
      macete: "Encarregado: canal de comunicação (DPO).",
      erroComum: "Confundir encarregado com operador.",
      comoBancaPensa: "Põe a definição de um agente no nome de outro.",
    },
  },

  {
    ...BASE110,
    concurso: "PF", ano: 2025,
    id: "CC-135", assunto: "LGPD",
    subassunto: "Relatório de impacto",
    origem: "CEBRASPE PF 2025 (cargo não informado) — caderno: CEBRASPE - PF/2025 (Polícia Federal) — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Com base na Lei Geral de Proteção de Dados, considera-se relatório de impacto à proteção de dados pessoais a documentação do controlador que contém a descrição dos processos de tratamento de dados pessoais que podem gerar riscos às liberdades civis e aos direitos fundamentais, bem como medidas, salvaguardas e mecanismos de mitigação de riscos.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "mecanismos de mitigação de riscos",
    cognitivo: {
      motivo: "Conhecer o art. 5º, XVII.",
      palavraCritica: "documentação do controlador",
    },
    comentario: {
      resolucao: "CERTO. É a definição do art. 5º, XVII: documentação do controlador com a descrição dos processos que podem gerar riscos às liberdades civis e aos direitos fundamentais, e as medidas, salvaguardas e mecanismos de mitigação.",
      fundamento: "Lei nº 13.709/2018, art. 5º, XVII.",
      macete: "RIPD: riscos + medidas de mitigação.",
      erroComum: "Atribuir o relatório ao operador ou à ANPD.",
      comoBancaPensa: "Reproduz a definição.",
    },
  },

  {
    ...BASE110,
    id: "CC-136", assunto: "LGPD",
    subassunto: "Dados manifestamente públicos — dispensa de consentimento",
    origem: "CEBRASPE - TRF 6/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O tratamento de dados pessoais deve ser realizado mediante o consentimento do titular, ficando dispensada tal exigência para os dados tornados manifestamente públicos pelo titular.",
    gabarito: "C",
    pegadinha: "verdade-mais-falso",
    palavraChave: "manifestamente públicos",
    cognitivo: {
      motivo: "Conhecer o § 4º do art. 7º.",
      palavraCritica: "dispensada",
    },
    comentario: {
      resolucao: "CERTO. O art. 7º, I, prevê o consentimento como base legal, e o § 4º dispensa o consentimento para os dados tornados manifestamente públicos pelo titular, resguardados os direitos do titular e os princípios da lei. O consentimento não é a única base legal (há dez no art. 7º), mas o item reproduz a regra do § 4º.",
      fundamento: "Lei nº 13.709/2018, art. 7º, I e § 4º.",
      macete: "Dado que o titular tornou público: dispensa consentimento.",
      erroComum: "Achar que dado público pode ser usado sem nenhuma regra.",
      comoBancaPensa: "Cobra a dispensa do § 4º.",
    },
  },

  {
    ...BASE110,
    id: "CC-137", assunto: "LGPD",
    subassunto: "Obrigação legal ou regulatória",
    origem: "CEBRASPE - TRF 6/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Na hipótese de o tratamento de dados pessoais pelo poder público ser realizado para o cumprimento de obrigação legal ou regulatória pelo controlador, a obrigação legal decorre de uma norma de conduta, isto é, uma regra que disciplina um comportamento, em geral estabelecendo um fato ou uma hipótese legal, com uma possível consequência jurídica em caso de descumprimento.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "norma de conduta",
    cognitivo: {
      motivo: "Reconhecer a explicação do Guia da ANPD sobre a base do art. 7º, II.",
      palavraCritica: "norma de conduta",
    },
    comentario: {
      resolucao: "CERTO. A base legal do art. 7º, II (e art. 11, II, 'a', para dados sensíveis) é o cumprimento de obrigação legal ou regulatória. O Guia orientativo da ANPD sobre tratamento pelo poder público explica que a obrigação decorre de norma de conduta, que descreve um comportamento e prevê consequência para o descumprimento.",
      fundamento: "Lei nº 13.709/2018, arts. 7º, II, e 23; ANPD, Guia de tratamento de dados pelo Poder Público.",
      macete: "Obrigação legal: a lei manda tratar o dado.",
      erroComum: "Confundir com execução de políticas públicas (art. 7º, III).",
      comoBancaPensa: "Cobra conceito do guia da ANPD.",
    },
  },

  {
    ...BASE110,
    id: "CC-138", assunto: "LGPD",
    subassunto: "Revogação do consentimento",
    origem: "CEBRASPE - TRF 6/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "De acordo com a LGPD, o consentimento para tratamento de dados pessoais pode ser revogado a qualquer momento mediante manifestação expressa do titular, por procedimento gratuito e facilitado, ratificados os tratamentos realizados sob amparo do consentimento anteriormente manifestado enquanto não houver requerimento de eliminação dos dados.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "ratificados os tratamentos",
    cognitivo: {
      motivo: "Conhecer o § 5º do art. 8º.",
      palavraCritica: "a qualquer momento",
    },
    comentario: {
      resolucao: "CERTO. O art. 8º, § 5º, permite revogar o consentimento a qualquer momento, por manifestação expressa, em procedimento gratuito e facilitado, ratificados os tratamentos feitos sob o consentimento anterior enquanto não houver requerimento de eliminação (art. 18, VI).",
      fundamento: "Lei nº 13.709/2018, arts. 8º, § 5º, e 18, VI.",
      macete: "Revogar: a qualquer hora, grátis; o passado fica valendo.",
      erroComum: "Achar que a revogação anula o tratamento anterior.",
      comoBancaPensa: "Reproduz o parágrafo, incluindo o detalhe da ratificação.",
    },
  },

  {
    ...BASE110,
    id: "CC-139", assunto: "LGPD",
    subassunto: "Consentimento não é sempre obrigatório",
    origem: "CEBRASPE - FUNPRESP-EXE/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O consentimento do titular é sempre obrigatório para qualquer tipo de tratamento de dados pessoais, independentemente da finalidade ou da base legal utilizada.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "sempre obrigatório",
    cognitivo: {
      motivo: "Lembrar as dez bases legais do art. 7º.",
      palavraCritica: "sempre",
    },
    comentario: {
      resolucao: "ERRADO. O consentimento é apenas uma das bases legais do art. 7º. O tratamento também pode se basear em obrigação legal, execução de políticas públicas, estudos por órgão de pesquisa, execução de contrato, exercício regular de direitos, proteção da vida, tutela da saúde, legítimo interesse e proteção do crédito.",
      fundamento: "Lei nº 13.709/2018, art. 7º, I a X.",
      macete: "Consentimento: uma base entre dez.",
      erroComum: "Achar que tudo depende de consentimento.",
      comoBancaPensa: "Absolutiza uma das hipóteses.",
    },
  },

  {
    ...BASE110,
    id: "CC-140", assunto: "LGPD",
    subassunto: "Dados sensíveis — consentimento específico e destacado",
    origem: "CEBRASPE - INSS/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "É possível o tratamento dos dados sensíveis quando o titular, ou seu responsável legal, consenti-lo, de forma clara e destacada, para propósitos específicos.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "clara e destacada",
    cognitivo: {
      motivo: "Conhecer o art. 11, I.",
      palavraCritica: "destacada",
    },
    comentario: {
      resolucao: "CERTO. O art. 11, I, permite o tratamento de dados sensíveis quando o titular ou o responsável legal consentir de forma específica e destacada, para finalidades específicas. A banca escreveu 'clara' no lugar de 'específica' sem alterar o sentido, e o gabarito foi CERTO.",
      fundamento: "Lei nº 13.709/2018, art. 11, I.",
      macete: "Sensível com consentimento: específico e destacado.",
      erroComum: "Achar que dado sensível nunca pode ser tratado.",
      comoBancaPensa: "Reproduz a hipótese.",
    },
  },

  {
    ...BASE110,
    id: "CC-141", assunto: "LGPD",
    subassunto: "Dados sensíveis — proteção da vida",
    origem: "CEBRASPE - INSS/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O tratamento dos dados sensíveis poderá ocorrer, inclusive, visando à proteção da vida ou da incolumidade física do titular ou de terceiro.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "proteção da vida",
    cognitivo: {
      motivo: "Conhecer o art. 11, II, 'e'.",
      palavraCritica: "poderá",
    },
    comentario: {
      resolucao: "CERTO. O art. 11, II, 'e', permite o tratamento de dados sensíveis, sem consentimento, para a proteção da vida ou da incolumidade física do titular ou de terceiro.",
      fundamento: "Lei nº 13.709/2018, art. 11, II, 'e'.",
      macete: "Salvar vida: autoriza tratar dado sensível.",
      erroComum: "Exigir consentimento em toda hipótese.",
      comoBancaPensa: "Reproduz a hipótese.",
    },
  },

  {
    ...BASE110,
    id: "CC-142", assunto: "LGPD",
    subassunto: "Término do tratamento — quem revoga é o titular",
    origem: "CEBRASPE - InoversaSul/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O término do tratamento de dados pessoais ocorrerá exatamente quando da revogação do consentimento pela autoridade nacional de proteção de dados.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "pela autoridade nacional",
    cognitivo: {
      motivo: "Lembrar que o consentimento é revogado pelo titular.",
      palavraCritica: "autoridade nacional",
    },
    comentario: {
      resolucao: "ERRADO. O art. 15 lista as hipóteses de término: finalidade alcançada, fim do período de tratamento, comunicação do titular (inclusive no exercício do direito de revogar o consentimento) e determinação da ANPD quando houver violação da lei. A revogação do consentimento é ato do TITULAR, não da ANPD.",
      fundamento: "Lei nº 13.709/2018, art. 15, I a IV.",
      macete: "Consentimento: quem dá e quem revoga é o titular.",
      erroComum: "Atribuir a revogação à ANPD.",
      comoBancaPensa: "Troca o sujeito e mistura dois incisos.",
    },
  },

  {
    ...BASE110,
    id: "CC-143", assunto: "LGPD",
    subassunto: "Eliminação — ressalvada obrigação legal",
    origem: "CEBRASPE - FUNPRESP-EXE/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Aos titulares dos dados é garantido o direito de solicitar a exclusão de seus dados pessoais, a qualquer momento, das bases de dados de empresas ou organizações, desde que não haja obrigação legal para a sua manutenção.",
    gabarito: "C",
    pegadinha: "verdade-mais-falso",
    palavraChave: "desde que não haja obrigação legal",
    cognitivo: {
      motivo: "Lembrar o art. 18, VI, e as exceções do art. 16.",
      palavraCritica: "desde que",
    },
    comentario: {
      resolucao: "CERTO. O art. 18, VI, garante a eliminação dos dados tratados com consentimento, ressalvadas as hipóteses do art. 16, entre elas o cumprimento de obrigação legal ou regulatória pelo controlador (inciso I). O item segue o gabarito da banca. A rigor, o direito do inciso VI se refere aos dados tratados com base no consentimento.",
      fundamento: "Lei nº 13.709/2018, arts. 16 e 18, VI.",
      macete: "Pedir para apagar: pode, salvo dever legal de guardar.",
      erroComum: "Esquecer a ressalva.",
      comoBancaPensa: "Cobra a ressalva da conservação.",
    },
  },

  {
    ...BASE110,
    id: "CC-144", assunto: "LGPD",
    subassunto: "Exercício regular de direito — não pode prejudicar o titular",
    origem: "CEBRASPE - STM/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "A utilização de dados pessoais, pelo titular, para o exercício regular de um direito dele não pode ser feita em seu prejuízo.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "em seu prejuízo",
    cognitivo: {
      motivo: "Conhecer o art. 21.",
      palavraCritica: "não pode",
    },
    comentario: {
      resolucao: "CERTO. O art. 21 dispõe que os dados pessoais referentes ao exercício regular de direitos pelo titular não podem ser utilizados em seu prejuízo.",
      fundamento: "Lei nº 13.709/2018, art. 21.",
      macete: "Exercer direito não pode virar prejuízo.",
      erroComum: "Desconfiar por soar óbvio.",
      comoBancaPensa: "Reproduz o artigo.",
    },
  },

  {
    ...BASE110,
    id: "CC-145", assunto: "LGPD",
    subassunto: "Poder público infrator — informe da ANPD",
    origem: "CEBRASPE - ANM/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Quando houver infração à LGPD em decorrência do tratamento de dados pessoais por órgãos públicos, a autoridade nacional poderá enviar informe com medidas cabíveis para fazer cessar a violação.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "enviar informe",
    cognitivo: {
      motivo: "Conhecer o art. 31.",
      palavraCritica: "poderá",
    },
    comentario: {
      resolucao: "CERTO. É o art. 31: quando houver infração em razão do tratamento por órgãos públicos, a ANPD poderá enviar informe com medidas cabíveis para fazer cessar a violação.",
      fundamento: "Lei nº 13.709/2018, art. 31.",
      macete: "Órgão público infrator: ANPD envia informe.",
      erroComum: "Achar que a ANPD só multa.",
      comoBancaPensa: "Reproduz o artigo.",
    },
  },

  {
    ...BASE110,
    id: "CC-146", assunto: "LGPD",
    subassunto: "Transferência internacional — sem exceção para certificação",
    origem: "CEBRASPE - EMBRAPA/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "A transferência internacional de dados pessoais no contexto do agronegócio deve observar tanto a legislação de proteção de dados do país destinatário quanto a LGPD; no entanto, quando a transferência tiver como finalidade a obtenção de certificação internacional, ela não estará sujeita às exigências da LGPD.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "obtenção de certificação internacional",
    cognitivo: {
      motivo: "Lembrar que o art. 33 é rol de hipóteses permitidas, sem essa exceção.",
      palavraCritica: "não estará sujeita",
    },
    comentario: {
      resolucao: "ERRADO. A transferência internacional só é permitida nas hipóteses do art. 33, como país com proteção adequada, cláusulas contratuais, consentimento específico e cooperação jurídica. Não há exceção que libere das exigências da LGPD a transferência feita para obter certificação internacional.",
      fundamento: "Lei nº 13.709/2018, art. 33.",
      macete: "Transferência internacional: só nas hipóteses do art. 33.",
      erroComum: "Aceitar exceção setorial inexistente.",
      comoBancaPensa: "Inventa uma exceção.",
    },
  },

  {
    ...BASE110,
    id: "CC-147", assunto: "LGPD",
    subassunto: "Encarregado — designação e função",
    origem: "CEBRASPE - FUNPRESP-EXE/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "O controlador deve designar um encarregado pelo tratamento de dados pessoais, que será responsável por atuar como canal de comunicação entre o controlador, os titulares dos dados pessoais e a Autoridade Nacional de Proteção de Dados (ANPD).",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "canal de comunicação",
    cognitivo: {
      motivo: "Conhecer o art. 41 e o art. 5º, VIII.",
      palavraCritica: "deve",
    },
    comentario: {
      resolucao: "CERTO. O controlador deverá indicar o encarregado (art. 41), que atua como canal de comunicação entre controlador, titulares e ANPD (art. 5º, VIII). Suas atividades estão no § 2º do art. 41. A ANPD pode dispensar a indicação conforme o porte do agente (§ 3º).",
      fundamento: "Lei nº 13.709/2018, arts. 5º, VIII, e 41.",
      macete: "Encarregado: ponte entre controlador, titular e ANPD.",
      erroComum: "Confundir encarregado com operador.",
      comoBancaPensa: "Reproduz a regra.",
    },
  },

  {
    ...BASE110,
    id: "CC-148", assunto: "LGPD",
    subassunto: "Relatório de impacto — por determinação da ANPD",
    origem: "CEBRASPE - FUNPRESP-EXE/2025 — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Nos casos em que o tratamento de dados pessoais em uma organização representar alto risco à garantia dos princípios gerais da proteção de dados pessoais dos seus titulares, a organização que os detém pode ser solicitada a emitir relatórios de impacto à proteção de dados pessoais, os quais poderão ser objeto de auditoria de conformidade.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "pode ser solicitada",
    cognitivo: {
      motivo: "Conhecer o art. 38.",
      palavraCritica: "pode ser solicitada",
    },
    comentario: {
      resolucao: "CERTO. O art. 38 permite à ANPD determinar ao controlador que elabore relatório de impacto, inclusive sobre dados sensíveis. O relatório deve descrever os tipos de dados, a metodologia, as medidas de segurança e a análise de mitigação de riscos (parágrafo único). O relatório serve à verificação de conformidade.",
      fundamento: "Lei nº 13.709/2018, arts. 5º, XVII, e 38.",
      macete: "RIPD: ANPD pode exigir.",
      erroComum: "Achar que o relatório é sempre obrigatório ou sempre voluntário.",
      comoBancaPensa: "Cobra a faculdade da ANPD.",
    },
  },

  /* ===== CONVENÇÃO DE BUDAPESTE ===== */

  {
    ...BASE110,
    id: "CC-149", assunto: "Convenção de Budapeste",
    subassunto: "Acesso ilegítimo — condições facultativas",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "A Convenção sobre o Crime Cibernético permite que o Estado Parte exija, para tipificar o acesso ilegítimo a sistema informático, que a conduta seja praticada com violação de medidas de segurança ou com intenção desonesta.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "violação de medidas de segurança",
    cognitivo: {
      motivo: "Conhecer a parte final do art. 2º.",
      palavraCritica: "permite",
    },
    comentario: {
      resolucao: "CERTO. O art. 2º manda tipificar o acesso intencional e ilegítimo a sistema informático, mas faculta à Parte exigir que a infração seja cometida com violação de medidas de segurança, com intenção de obter dados ou outra intenção desonesta, ou em relação a sistema conectado a outro. O Brasil, no art. 154-A do CP, não exige mais a violação de mecanismo de segurança desde a Lei 14.155/2021.",
      fundamento: "Convenção sobre o Crime Cibernético (Decreto nº 11.491/2023), art. 2º; CP, art. 154-A.",
      macete: "Acesso ilegítimo: a Parte pode exigir elementos adicionais.",
      erroComum: "Achar que a Convenção impõe um tipo fechado.",
      comoBancaPensa: "Cobra a cláusula de faculdade.",
    },
  },

  {
    ...BASE110,
    id: "CC-150", assunto: "Convenção de Budapeste",
    subassunto: "Interceptação sem controle — viola as salvaguardas",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Viola as salvaguardas da Convenção de Budapeste a interceptação em tempo real do conteúdo de comunicações determinada, com base em urgência, sem controle judicial ou outro controle independente e sem fundamentação, ainda que a medida esteja prevista na lei interna.",
    gabarito: "C",
    pegadinha: "verdade-mais-falso",
    palavraChave: "ainda que a medida esteja prevista na lei interna",
    cognitivo: {
      motivo: "Conhecer as condições e salvaguardas do art. 15.",
      palavraCritica: "viola",
    },
    comentario: {
      resolucao: "CERTO. O art. 15 sujeita os poderes processuais da Convenção a condições e salvaguardas que protejam os direitos humanos. Entre elas estão a supervisão judicial ou outra supervisão independente, a fundamentação e a limitação de alcance e duração, sobretudo para medidas invasivas como a interceptação de conteúdo (art. 21). No Brasil, a interceptação depende de ordem judicial (CF, art. 5º, XII; Lei 9.296/1996).",
      fundamento: "Convenção sobre o Crime Cibernético (Decreto nº 11.491/2023), arts. 15 e 21; CF, art. 5º, XII; Lei 9.296/1996.",
      macete: "Poder processual da Convenção: sempre com salvaguardas.",
      erroComum: "Achar que a previsão em lei basta.",
      comoBancaPensa: "Põe a previsão legal como falsa garantia.",
    },
  },

  {
    ...BASE110,
    id: "CC-151", assunto: "Convenção de Budapeste",
    subassunto: "Posse de dispositivos — sem intenção criminosa",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "A Convenção de Budapeste não obriga o Estado Parte a criminalizar a mera posse de dispositivo apto à prática de crimes informáticos quando não houver intenção de usá-lo para cometer as infrações nela previstas.",
    gabarito: "C",
    pegadinha: "restricao-indevida",
    palavraChave: "quando não houver intenção de usá-lo",
    cognitivo: {
      motivo: "Conhecer o art. 6º, itens 1, 'b', e 2.",
      palavraCritica: "não obriga",
    },
    comentario: {
      resolucao: "CERTO. O art. 6º, 1, 'b', exige que a posse seja intencional e tenha o objetivo de cometer as infrações dos arts. 2º a 5º. O item 2 esclarece que o artigo não impõe responsabilidade penal quando a produção ou a posse não visam a prática de crime, como nos testes autorizados ou na proteção de sistemas. O item 3 ainda admite reserva parcial.",
      fundamento: "Convenção sobre o Crime Cibernético (Decreto nº 11.491/2023), art. 6º, itens 1, 'b', 2 e 3.",
      macete: "Ferramenta sem intenção criminosa: não precisa ser crime.",
      erroComum: "Achar que toda posse de ferramenta de ataque é crime.",
      comoBancaPensa: "Cobra a ressalva do art. 6º.2.",
    },
  },

  {
    ...BASE110,
    id: "CC-152", assunto: "Convenção de Budapeste",
    subassunto: "Conservação expedita sem dupla incriminação",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Ainda que o Estado Parte condicione a assistência mútua à dupla incriminação, essa exigência não se aplica, como regra, ao pedido de simples conservação expedita de dados informáticos formulado por outra Parte.",
    gabarito: "C",
    pegadinha: "exigencia-inexistente",
    palavraChave: "não se aplica",
    cognitivo: {
      motivo: "Conhecer o art. 29, itens 3 e 4.",
      palavraCritica: "como regra",
    },
    comentario: {
      resolucao: "CERTO. O art. 29.3 diz que a dupla incriminação não é exigida como condição para a conservação expedita. A razão é a urgência, porque dados voláteis podem se perder. O art. 29.4 admite reserva quanto a infrações distintas das dos arts. 2º a 11, quando a Parte exija dupla incriminação para a divulgação.",
      fundamento: "Convenção sobre o Crime Cibernético (Decreto nº 11.491/2023), art. 29, itens 3 e 4.",
      macete: "Conservar dado: sem dupla incriminação.",
      erroComum: "Exigir dupla incriminação para a medida urgente.",
      comoBancaPensa: "Testa a regra e a exceção do art. 29.",
    },
  },

  {
    ...BASE110,
    id: "CC-153", assunto: "Convenção de Budapeste",
    subassunto: "Recusa de assistência — infração fiscal",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação — LGPD e Budapeste), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "A Parte requerida pode recusar a assistência mútua relativa a crime previsto na Convenção de Budapeste sob o fundamento de que se trata de infração de natureza meramente fiscal, desde que motive a recusa na lei nacional.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "infração de natureza meramente fiscal",
    cognitivo: {
      motivo: "Lembrar a vedação do art. 25.4.",
      palavraCritica: "pode recusar",
    },
    comentario: {
      resolucao: "ERRADO. O art. 25.4 proíbe a Parte de recusar assistência quanto às infrações dos arts. 2º a 11 com o único fundamento de que o pedido se refere a infração de natureza fiscal. A motivação na lei nacional não supera essa vedação.",
      fundamento: "Convenção sobre o Crime Cibernético (Decreto nº 11.491/2023), arts. 25.4 e 27.4.",
      macete: "Crime da Convenção: não se recusa ajuda por ser fiscal.",
      erroComum: "Achar que a lei interna autoriza a recusa.",
      comoBancaPensa: "Oferece fundamentação formal para uma recusa vedada.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE110);
