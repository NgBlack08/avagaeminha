/* =====================================================================
   CEBRASPE LAB — Lote 13: LEI ORGÂNICA NACIONAL DAS POLÍCIAS CIVIS
   Lei nº 14.735, de 23 de novembro de 2023 (LONPC).
   ATENÇÃO: o edital PC-AL 2026 a indica como "Lei estadual nº
   14.735/2026" — trata-se, na verdade, da LEI FEDERAL 14.735/2023.
   Preenche a maior lacuna do banco (Legislação Institucional), que a
   prova oficial cobra intensamente. 20 itens INÉDITOS, equilibrados em
   10 Certo / 10 Errado, com citação precisa de artigo e parágrafo.
   Foco nos pontos que a banca mais manipula: NÚMEROS (prazos, prazos de
   estabilidade, percentuais), COMPETÊNCIAS (quem nomeia/designa) e
   EXCEÇÕES (vedações com ressalva).
   Observação metodológica: não foram elaboradas questões sobre os róis
   enumerados dos arts. 4º, 5º, 33 (princípios, diretrizes e deveres),
   cujo texto não constava de forma integral na fonte consultada.
   ===================================================================== */

const QUESTOES_PCAL_LOTE13 = [

  /* ===== DISPOSIÇÕES GERAIS E COMPETÊNCIAS ===== */
  {
    id: "LI-002", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Natureza e direção (art. 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.95,
    enunciado: "As polícias civis, dirigidas por delegado de polícia em atividade e de classe mais elevada, nomeado pelos governadores dos estados e do Distrito Federal, são instituições permanentes, com funções exclusivas e típicas de Estado, essenciais à justiça criminal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "em atividade e de classe mais elevada",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 1º da LONPC.",
      mede: "Lei Orgânica Nacional das Polícias Civis — disposições gerais.",
      pegadinhaDesc: "Item literal correto; a banca costuma trocar 'classe mais elevada' por 'qualquer classe' ou o agente nomeante.",
      ondeErra: "Não memoriza os dois requisitos do dirigente (em atividade + classe mais elevada).",
      palavraCritica: "em atividade / classe mais elevada / governadores",
      tecnica: "Guarde os três pontos: quem dirige (delegado em atividade, classe mais elevada), quem nomeia (governador) e a natureza (permanente, exclusiva e típica de Estado).",
      regraMental: "Delegado que dirige a PC: em atividade E da classe mais elevada. Quem nomeia é o governador."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 1º: as polícias civis, dirigidas por delegado de polícia em atividade e de classe mais elevada nomeado pelos governadores dos Estados e do Distrito Federal, são instituições permanentes, com funções exclusivas e típicas de Estado, essenciais à justiça criminal e imprescindíveis à segurança pública e à garantia dos direitos fundamentais no âmbito da investigação criminal.",
      fundamento: "Lei 14.735/2023, art. 1º; CF, art. 144, § 4º.",
      macete: "Permanente + exclusiva + típica de Estado. Dirigente: delegado em atividade, classe mais elevada.",
      erroComum: "Admitir delegado de qualquer classe ou nomeação por outra autoridade.",
      comoBancaPensa: "Cobra o caput literal de lei nova — e alterna com versões que trocam uma palavra."
    }
  },
  {
    id: "LI-003", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Integração ao Susp (art. 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "As polícias civis são integrantes operacionais do Sistema Único de Segurança Pública (Susp) e compõem o sistema de governança da política de segurança pública dos estados, do Distrito Federal e dos territórios.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "integrantes operacionais do Susp",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 2º da LONPC.",
      mede: "LONPC — inserção institucional das polícias civis.",
      pegadinhaDesc: "A banca costuma trocar 'integrantes operacionais' por 'integrantes estratégicos' ou negar a inserção no Susp.",
      ondeErra: "Desconhece a articulação da PC com o Susp.",
      palavraCritica: "integrantes operacionais",
      tecnica: "Susp: a PC é integrante OPERACIONAL e participa da GOVERNANÇA da política de segurança.",
      regraMental: "PC no Susp: operacional na ponta e presente na governança."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 2º: as polícias civis são integrantes operacionais do Sistema Único de Segurança Pública (Susp) e compõem o sistema de governança da política de segurança pública dos Estados, do Distrito Federal e dos Territórios.",
      fundamento: "Lei 14.735/2023, art. 2º; Lei 13.675/2018 (Susp).",
      macete: "PC = integrante OPERACIONAL do Susp (não apenas consultivo).",
      erroComum: "Negar a integração ao Susp ou trocar a qualificação.",
      comoBancaPensa: "Troca adjetivos em dispositivo curto e literal."
    }
  },
  {
    id: "LI-004", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Iniciativa da lei orgânica estadual (art. 3º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "A lei orgânica da polícia civil de cada estado, do Distrito Federal e de cada território, cuja iniciativa cabe privativamente à respectiva Assembleia Legislativa, deve estabelecer regras específicas observadas as normas gerais da Lei Orgânica Nacional.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "iniciativa da Assembleia Legislativa",
    cognitivo: {
      motivo: "Cobrar a titularidade da iniciativa legislativa (art. 3º).",
      mede: "LONPC — relação com as leis orgânicas estaduais.",
      pegadinhaDesc: "Atribui ao Legislativo a iniciativa que a lei confere ao governador.",
      ondeErra: "Confunde quem propõe (governador) com quem aprova (Assembleia).",
      palavraCritica: "iniciativa (é do governador)",
      tecnica: "Iniciativa da lei orgânica da PC: do respectivo GOVERNADOR — coerente com a organização administrativa do Executivo.",
      regraMental: "Governador propõe, Assembleia aprova. A iniciativa é do Executivo."
    },
    comentario: {
      resolucao: "ERRADO. Lei 14.735/2023, art. 3º: a lei orgânica da polícia civil de cada Estado, do Distrito Federal e de cada Território tem iniciativa do RESPECTIVO GOVERNADOR, e deve estabelecer, observadas as normas gerais da LONPC, regras específicas sobre a matéria.",
      fundamento: "Lei 14.735/2023, art. 3º.",
      macete: "Organização da Administração = iniciativa do chefe do Executivo (governador).",
      erroComum: "Atribuir a iniciativa à Assembleia Legislativa.",
      comoBancaPensa: "Troca de sujeito: quem tem a iniciativa legislativa."
    }
  },
  {
    id: "LI-005", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Competência da polícia civil (art. 6º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.92,
    enunciado: "Compete à polícia civil, ressalvadas a competência da União e as infrações penais militares, executar privativamente as funções de polícia judiciária civil e de apuração de infrações penais, materializadas em inquérito policial ou em outro procedimento de investigação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "privativamente / ressalvadas",
    cognitivo: {
      motivo: "Cobrar o caput do art. 6º, que dialoga com o art. 144, § 4º, da CF.",
      mede: "LONPC — competências.",
      pegadinhaDesc: "A banca costuma trocar 'privativamente' por 'concorrentemente' ou suprimir as ressalvas.",
      ondeErra: "Esquece as duas ressalvas (União e infrações militares).",
      palavraCritica: "privativamente + ressalvas",
      tecnica: "Mesma lógica do art. 144, § 4º, da CF: PC apura tudo, MENOS o que é da União e as infrações militares.",
      regraMental: "PC: polícia judiciária civil privativa — exceto União e crimes militares."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 6º: compete à polícia civil, ressalvadas a competência da União e as infrações penais militares, executar privativamente as funções de polícia judiciária civil e de apuração de infrações penais, a serem materializadas em inquérito policial ou em outro procedimento de investigação. O § 1º acrescenta que essas atribuições são exercidas exclusivamente por policiais civis em atividade.",
      fundamento: "Lei 14.735/2023, art. 6º, caput e § 1º; CF, art. 144, § 4º.",
      macete: "Privativa da PC, salvo União e militar. E só policial civil EM ATIVIDADE exerce.",
      erroComum: "Suprimir as ressalvas ou trocar 'privativamente'.",
      comoBancaPensa: "Reproduz o dispositivo e, em outra versão, retira uma das ressalvas."
    }
  },

  /* ===== ORGANIZAÇÃO E FUNCIONAMENTO ===== */
  {
    id: "LI-006", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Planejamento estratégico do Delegado-Geral (art. 8º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.88,
    enunciado: "Os Delegados-Gerais das Polícias Civis devem apresentar planejamento estratégico de gestão em até sessenta dias após a sua nomeação.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "sessenta dias",
    cognitivo: {
      motivo: "Cobrar o prazo do parágrafo único do art. 8º.",
      mede: "LONPC — Delegacia-Geral.",
      pegadinhaDesc: "Troca o prazo de 30 para 60 dias — pegadinha numérica típica.",
      ondeErra: "Não memoriza o prazo exato.",
      palavraCritica: "sessenta (o correto é trinta)",
      tecnica: "Prazos são ponto de checagem obrigatório em lei nova.",
      regraMental: "Delegado-Geral nomeado: 30 dias para apresentar o planejamento estratégico de gestão."
    },
    comentario: {
      resolucao: "ERRADO. Lei 14.735/2023, art. 8º, parágrafo único: os Delegados-Gerais devem apresentar, em até 30 (TRINTA) dias após sua nomeação, planejamento estratégico de gestão. O caput define que a polícia civil tem como chefe o Delegado-Geral, nomeado pelo governador dentre os delegados de polícia em atividade da classe mais elevada do cargo.",
      fundamento: "Lei 14.735/2023, art. 8º, caput e parágrafo único.",
      macete: "Delegado-Geral: 30 dias para o planejamento estratégico.",
      erroComum: "Trocar o prazo (30 × 60 dias).",
      comoBancaPensa: "Altera o número em dispositivo de lei recente."
    }
  },
  {
    id: "LI-007", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Corregedoria-Geral (art. 10, § 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "O Corregedor-Geral de Polícia Civil deve ser designado diretamente pelo governador do estado, dentre delegados de polícia de qualquer classe da carreira.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "designado pelo governador / qualquer classe",
    cognitivo: {
      motivo: "Cobrar quem designa o Corregedor-Geral e o requisito de classe.",
      mede: "LONPC — Corregedoria-Geral.",
      pegadinhaDesc: "Troca a autoridade designante e flexibiliza o requisito de classe.",
      ondeErra: "Confunde a nomeação do Delegado-Geral (governador) com a designação do Corregedor-Geral (Delegado-Geral).",
      palavraCritica: "governador / qualquer classe (duplo erro)",
      tecnica: "Delegado-Geral é nomeado pelo GOVERNADOR. O Corregedor-Geral é designado pelo DELEGADO-GERAL, dentre delegados da classe mais elevada.",
      regraMental: "Governador nomeia o Delegado-Geral; o Delegado-Geral designa o Corregedor-Geral (classe mais elevada)."
    },
    comentario: {
      resolucao: "ERRADO. Lei 14.735/2023, art. 10, § 1º: o Corregedor-Geral de Polícia Civil deve ser designado pelo DELEGADO-GERAL de Polícia Civil, dentre os delegados de polícia da CLASSE MAIS ELEVADA. A assertiva erra duplamente: na autoridade designante e no requisito de classe.",
      fundamento: "Lei 14.735/2023, art. 10, caput e § 1º.",
      macete: "Corregedor-Geral: quem designa é o Delegado-Geral, e só entre os da classe mais elevada.",
      erroComum: "Atribuir a designação ao governador.",
      comoBancaPensa: "Combina troca de sujeito com flexibilização de requisito."
    }
  },
  {
    id: "LI-008", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Duplo grau em processo disciplinar (art. 10, § 3º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.88,
    enunciado: "É garantido o duplo grau de revisão do julgamento nos processos disciplinares na hipótese de penalidade de demissão, mediante recurso ao Conselho Superior de Polícia Civil e, em última instância, ao Chefe do Poder Executivo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "duplo grau / demissão",
    cognitivo: {
      motivo: "Cobrar a garantia recursal do art. 10, § 3º.",
      mede: "LONPC — Corregedoria e processo disciplinar.",
      pegadinhaDesc: "A banca costuma ampliar a garantia a toda penalidade ou trocar a instância final.",
      ondeErra: "Estende o duplo grau a qualquer sanção disciplinar.",
      palavraCritica: "na hipótese de DEMISSÃO",
      tecnica: "A garantia é específica para a penalidade de demissão. Sequência: Conselho Superior → Chefe do Poder Executivo.",
      regraMental: "Demissão: dá para recorrer duas vezes — Conselho Superior e, por fim, o Governador."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 10, § 3º: é garantido o duplo grau de revisão do julgamento nos processos disciplinares na hipótese de penalidade de demissão, mediante recurso ao Conselho Superior de Polícia Civil e, em última instância, ao Chefe do Poder Executivo.",
      fundamento: "Lei 14.735/2023, art. 10, § 3º.",
      macete: "Demissão → Conselho Superior → Chefe do Executivo. Duplo grau garantido.",
      erroComum: "Estender a garantia a todas as penalidades disciplinares.",
      comoBancaPensa: "Cobra o dispositivo literal e, em variação, amplia indevidamente a hipótese."
    }
  },
  {
    id: "LI-009", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Unidades especializadas (art. 12, § 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "O efetivo das unidades especializadas em combate à lavagem de dinheiro e em interceptação de comunicação telefônica, de informática e telemática deve ser composto exclusivamente de policiais civis.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "exclusivamente de policiais civis",
    cognitivo: {
      motivo: "Cobrar a exclusividade de composição em unidades sensíveis (art. 12, § 2º).",
      mede: "LONPC — unidades de execução especializadas.",
      pegadinhaDesc: "A banca costuma admitir a cessão de servidores de outros órgãos para essas unidades.",
      ondeErra: "Generaliza a composição mista para unidades de alta sensibilidade.",
      palavraCritica: "exclusivamente",
      tecnica: "Lavagem de dinheiro e interceptação: sigilo elevado → efetivo exclusivamente de policiais civis.",
      regraMental: "Interceptação e lavagem: só policial civil no efetivo. É exclusividade legal."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 12, § 2º: o efetivo das unidades especializadas em combate à lavagem de dinheiro e em interceptação de comunicação telefônica, de informática e telemática deve ser composto exclusivamente de policiais civis — exigência ligada ao elevado grau de sigilo dessas atividades.",
      fundamento: "Lei 14.735/2023, art. 12, §§ 1º e 2º.",
      macete: "Lavagem + interceptação = efetivo 100% policial civil.",
      erroComum: "Admitir composição mista nessas unidades.",
      comoBancaPensa: "Testa a exclusividade legal com termo absoluto verdadeiro."
    }
  },
  {
    id: "LI-010", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Institutos técnico-científicos (art. 15, § 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "Os Institutos de Criminalística, de Medicina Legal e de Identificação devem ser coordenados por delegados de polícia da classe mais elevada, designados pelo Delegado-Geral de Polícia Civil.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "coordenados por delegados",
    cognitivo: {
      motivo: "Cobrar quem coordena os institutos técnico-científicos (art. 15, § 2º).",
      mede: "LONPC — unidades técnico-científicas.",
      pegadinhaDesc: "Substitui os peritos oficiais criminais por delegados na coordenação dos institutos.",
      ondeErra: "Aplica a lógica de chefia por delegado a unidades de natureza pericial.",
      palavraCritica: "delegados (deveriam ser peritos oficiais criminais)",
      tecnica: "Institutos periciais: coordenados por PERITOS OFICIAIS CRIMINAIS das respectivas áreas, na ativa e da classe mais elevada.",
      regraMental: "Instituto pericial é coordenado por perito da área, não por delegado."
    },
    comentario: {
      resolucao: "ERRADO. Lei 14.735/2023, art. 15, § 2º: os Institutos de Criminalística, de Medicina Legal e de Identificação devem ser coordenados por PERITOS OFICIAIS CRIMINAIS das respectivas áreas, que estejam na ativa e sejam da classe mais elevada. A assertiva trocou a categoria funcional.",
      fundamento: "Lei 14.735/2023, art. 15, §§ 1º e 2º.",
      macete: "Instituto pericial = perito da própria área, na ativa e da classe mais elevada.",
      erroComum: "Colocar delegado na coordenação de institutos periciais.",
      comoBancaPensa: "Troca a carreira responsável pela chefia da unidade."
    }
  },

  /* ===== CONCURSO, INVESTIDURA E PROMOÇÃO ===== */
  {
    id: "LI-011", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Requisitos do oficial investigador (art. 20, § 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "Para o cargo de oficial investigador de polícia, exige-se diploma de ensino superior completo, em nível de graduação, especificamente no curso de Direito, reconhecido pelo Ministério da Educação.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "especificamente no curso de Direito",
    cognitivo: {
      motivo: "Cobrar o requisito de formação do oficial investigador (art. 20, § 1º).",
      mede: "LONPC — concurso e investidura.",
      pegadinhaDesc: "Restringe a graduação a Direito, quando a lei admite qualquer área.",
      ondeErra: "Aplica ao investigador a exigência que é do delegado (bacharelado em Direito).",
      palavraCritica: "qualquer área (não só Direito)",
      tecnica: "Investigador: superior em QUALQUER área. Delegado: bacharelado em DIREITO + 3 anos de atividade jurídica ou policial.",
      regraMental: "Só o delegado precisa ser bacharel em Direito. O investigador: qualquer graduação."
    },
    comentario: {
      resolucao: "ERRADO. Lei 14.735/2023, art. 20, § 1º: para o cargo de oficial investigador de polícia é exigido diploma de ensino superior completo, em nível de graduação, em QUALQUER ÁREA, reconhecido pelo Ministério da Educação. A exigência de bacharelado em Direito é própria do cargo de delegado (§ 3º).",
      fundamento: "Lei 14.735/2023, art. 20, §§ 1º e 3º.",
      macete: "Investigador: qualquer graduação. Delegado: Direito + 3 anos.",
      erroComum: "Exigir Direito para o cargo de investigador.",
      comoBancaPensa: "Transfere ao investigador um requisito exclusivo do delegado."
    }
  },
  {
    id: "LI-012", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Requisitos do delegado (art. 20, § 3º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "Para o cargo de delegado de polícia são exigidos curso de bacharelado em Direito reconhecido pelo órgão competente e três anos de atividade jurídica ou policial, cabendo ao Conselho Superior de Polícia Civil definir os requisitos para classificação como atividade jurídica.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "três anos de atividade jurídica ou policial",
    cognitivo: {
      motivo: "Cobrar os requisitos do cargo de delegado (art. 20, § 3º).",
      mede: "LONPC — concurso e investidura.",
      pegadinhaDesc: "A banca costuma trocar o prazo (3 anos) ou restringir a 'atividade jurídica', suprimindo a policial.",
      ondeErra: "Esquece que a atividade POLICIAL também é aceita.",
      palavraCritica: "jurídica OU policial / 3 anos",
      tecnica: "São 3 anos, e a atividade pode ser jurídica OU policial. Quem define o que é atividade jurídica é o Conselho Superior.",
      regraMental: "Delegado: Direito + 3 anos (jurídica ou policial). Comprovação no ato da posse."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 20, § 3º: para o cargo de delegado de polícia são exigidos curso de bacharelado em Direito reconhecido pelo órgão competente e 3 (três) anos de atividade jurídica ou policial, cabendo ao Conselho Superior de Polícia Civil definir os requisitos para classificação como atividade jurídica. O § 5º exige que a comprovação ocorra no ato da posse.",
      fundamento: "Lei 14.735/2023, art. 20, §§ 3º e 5º.",
      macete: "3 anos de atividade jurídica OU policial — a policial também conta.",
      erroComum: "Suprimir a atividade policial ou alterar o prazo.",
      comoBancaPensa: "Cobra o dispositivo íntegro e, em variação, retira a alternativa 'policial'."
    }
  },
  {
    id: "LI-013", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Participação da OAB (art. 20, § 4º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "Para a investidura no cargo de delegado de polícia é exigida aprovação em concurso público de provas e títulos, com a participação da Ordem dos Advogados do Brasil em todas as fases do certame.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "OAB em todas as fases",
    cognitivo: {
      motivo: "Cobrar a participação da OAB no concurso de delegado (art. 20, § 4º).",
      mede: "LONPC — concurso e investidura.",
      pegadinhaDesc: "A banca costuma restringir a participação da OAB a apenas uma fase ou negá-la.",
      ondeErra: "Não sabe que a participação é em TODAS as fases.",
      palavraCritica: "em todas as fases",
      tecnica: "Delegado: concurso de provas E títulos, OAB em todas as fases, e vedada na comissão a participação de servidor da segurança pública alheio aos quadros da PC.",
      regraMental: "Concurso de delegado: OAB acompanha do início ao fim."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 20, § 4º: para a investidura no cargo de delegado de polícia é exigida aprovação em concurso público de provas e títulos, com a participação da OAB em todas as fases do certame, vedada a participação, na comissão do concurso, de servidor da segurança pública que não integre os quadros da polícia civil.",
      fundamento: "Lei 14.735/2023, art. 20, § 4º.",
      macete: "OAB em TODAS as fases — e a comissão não aceita servidor de fora da PC.",
      erroComum: "Restringir a participação da OAB a uma única fase.",
      comoBancaPensa: "Reduz o alcance ('todas as fases') para criar o item errado."
    }
  },
  {
    id: "LI-014", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Pontuação do tempo de atividade policial (art. 21)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O tempo de atividade policial civil deve ser considerado para pontuação em prova de títulos no concurso público para o cargo de delegado de polícia, valorado em cinquenta por cento da pontuação máxima da prova de títulos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "cinquenta por cento",
    cognitivo: {
      motivo: "Cobrar o percentual do art. 21 da LONPC.",
      mede: "LONPC — concurso para delegado.",
      pegadinhaDesc: "Troca o percentual de 30% por 50%.",
      ondeErra: "Não memoriza o percentual exato.",
      palavraCritica: "cinquenta (o correto é trinta)",
      tecnica: "Tempo de atividade policial: 30% da pontuação máxima da prova de títulos, entre 0,5 e 2 pontos percentuais por ano.",
      regraMental: "Art. 21: 30% da prova de títulos. E a prova de títulos vale, no mínimo, 10% do certame."
    },
    comentario: {
      resolucao: "ERRADO. Lei 14.735/2023, art. 21: o tempo de atividade policial civil é valorado em 30% (TRINTA POR CENTO) da pontuação máxima da prova de títulos, na proporção mínima de 0,5 e máxima de 2 pontos percentuais por ano de serviço. O § 2º acrescenta que a prova de títulos deve corresponder a, no mínimo, 10% do total da nota do certame.",
      fundamento: "Lei 14.735/2023, art. 21, caput e § 2º.",
      macete: "30% da prova de títulos; a prova de títulos = mínimo de 10% do certame.",
      erroComum: "Trocar 30% por 50%.",
      comoBancaPensa: "Altera percentual — ponto de checagem obrigatório."
    }
  },
  {
    id: "LI-015", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Curso de formação profissional (art. 22)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.88,
    enunciado: "Durante o curso de formação profissional, de caráter meramente classificatório, pode ser concedida ajuda de custo não inferior a trinta por cento do valor da remuneração prevista em lei para a classe inicial do respectivo cargo.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "classificatório / trinta por cento",
    cognitivo: {
      motivo: "Cobrar a natureza e o percentual do art. 22.",
      mede: "LONPC — curso de formação.",
      pegadinhaDesc: "Erra duas vezes: a natureza (é eliminatório) e o percentual (é 50%).",
      ondeErra: "Não retém nem o caráter do curso nem o piso da ajuda de custo.",
      palavraCritica: "eliminatório / 50%",
      tecnica: "Curso de formação: ELIMINATÓRIO. Ajuda de custo: não inferior a 50% da remuneração da classe inicial.",
      regraMental: "Formação é eliminatória (reprova) e a bolsa é de, no mínimo, metade do salário inicial."
    },
    comentario: {
      resolucao: "ERRADO. Lei 14.735/2023, art. 22: o curso de formação profissional é de caráter ELIMINATÓRIO, e a ajuda de custo que pode ser concedida não pode ser inferior a 50% (CINQUENTA POR CENTO) do valor da remuneração prevista em lei para a classe inicial do respectivo cargo. A assertiva erra na natureza e no percentual.",
      fundamento: "Lei 14.735/2023, art. 22.",
      macete: "Formação: eliminatória + ajuda de no mínimo 50% do salário inicial.",
      erroComum: "Tratar o curso como classificatório ou reduzir o percentual.",
      comoBancaPensa: "Insere dois erros no mesmo item (natureza e número)."
    }
  },
  {
    id: "LI-016", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Exoneração antes de três anos (art. 24, § 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "O servidor que pedir exoneração antes de completar três anos de exercício deve ressarcir ao erário competente os gastos com sua formação, proporcionalmente ao tempo de serviço.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "três anos / ressarcimento proporcional",
    cognitivo: {
      motivo: "Cobrar a regra de ressarcimento do art. 24, § 1º.",
      mede: "LONPC — quadro e permanência.",
      pegadinhaDesc: "A banca costuma alterar o prazo ou tornar o ressarcimento integral.",
      ondeErra: "Confunde o prazo com o da estabilidade ou esquece a proporcionalidade.",
      palavraCritica: "proporcionalmente ao tempo de serviço",
      tecnica: "3 anos é prazo recorrente na lei: coincide com o da estabilidade (art. 30, § 15).",
      regraMental: "Saiu antes de 3 anos: devolve o custo da formação — mas proporcional, não integral."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 24, § 1º: o servidor que pedir exoneração antes de completar 3 (três) anos de exercício deve ressarcir ao erário competente os gastos com sua formação, proporcionalmente ao tempo de serviço prestado.",
      fundamento: "Lei 14.735/2023, art. 24, § 1º.",
      macete: "Menos de 3 anos e pediu para sair: devolve proporcional ao que ficou.",
      erroComum: "Exigir ressarcimento integral ou trocar o prazo.",
      comoBancaPensa: "Mantém o número e manipula a proporcionalidade — ou vice-versa."
    }
  },

  /* ===== PRERROGATIVAS, DIREITOS E VEDAÇÕES ===== */
  {
    id: "LI-017", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Atuação do perito oficial criminal (art. 28)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "O perito oficial criminal exerce atribuições de perícia oficial de natureza criminal sob requisição do delegado de polícia, assegurada a ele autonomia técnica, científica e funcional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sob requisição / autonomia técnica",
    cognitivo: {
      motivo: "Cobrar a relação entre requisição do delegado e autonomia do perito (art. 28).",
      mede: "LONPC — prerrogativas dos cargos.",
      pegadinhaDesc: "A banca costuma opor as duas ideias, como se a requisição excluísse a autonomia.",
      ondeErra: "Acha que atuar sob requisição significa subordinação técnica.",
      palavraCritica: "requisição + autonomia (coexistem)",
      tecnica: "O delegado requisita a perícia (decide que se faça); o perito decide COMO fazer — autonomia técnica, científica e funcional.",
      regraMental: "Delegado requisita; perito conclui com autonomia. Uma coisa não anula a outra."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 28: o perito oficial criminal exerce atribuições de perícia oficial de natureza criminal sob requisição do delegado de polícia, assegurada a ele autonomia técnica, científica e funcional. A requisição define a realização do exame; a conclusão técnica é do perito.",
      fundamento: "Lei 14.735/2023, art. 28; CPP.",
      macete: "Requisitar não é mandar no laudo: o perito tem autonomia técnica.",
      erroComum: "Supor que a requisição afasta a autonomia do perito.",
      comoBancaPensa: "Contrapõe requisição e autonomia como se fossem incompatíveis."
    }
  },
  {
    id: "LI-018", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Estabilidade do policial civil (art. 30, § 15)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "A estabilidade do policial civil dar-se-á após três anos de efetivo exercício no cargo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "três anos de efetivo exercício",
    cognitivo: {
      motivo: "Cobrar o prazo de estabilidade previsto no art. 30, § 15.",
      mede: "LONPC — direitos e garantias.",
      pegadinhaDesc: "A banca costuma trocar por 2 ou 5 anos.",
      ondeErra: "Confunde com prazos de outros regimes.",
      palavraCritica: "três anos",
      tecnica: "3 anos de efetivo exercício — mesmo prazo do art. 41 da CF e do ressarcimento do art. 24, § 1º.",
      regraMental: "Estabilidade: 3 anos. É o mesmo número do ressarcimento da formação."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 30, § 15: a estabilidade do policial civil dar-se-á após 3 (três) anos de efetivo exercício no cargo, em consonância com o art. 41 da Constituição Federal.",
      fundamento: "Lei 14.735/2023, art. 30, § 15; CF, art. 41.",
      macete: "Estabilidade = 3 anos de efetivo exercício.",
      erroComum: "Trocar o prazo por 2 ou 5 anos.",
      comoBancaPensa: "Prazo curto e literal — alvo de troca numérica."
    }
  },
  {
    id: "LI-019", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Porte de arma do aposentado (art. 30, § 3º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "Os policiais civis, por ocasião de sua aposentadoria, perdem automaticamente a autorização de porte de arma de fogo, que fica restrita aos servidores em atividade.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "perdem automaticamente",
    cognitivo: {
      motivo: "Cobrar a manutenção do porte na aposentadoria (art. 30, § 3º).",
      mede: "LONPC — direitos dos aposentados.",
      pegadinhaDesc: "Nega direito expressamente assegurado ao aposentado.",
      ondeErra: "Supõe que o porte é vinculado exclusivamente à atividade.",
      palavraCritica: "conservam (não perdem)",
      tecnica: "O aposentado CONSERVA a autorização de livre porte, válida em todo o território nacional, na forma da legislação em vigor.",
      regraMental: "Aposentou: mantém o porte. E ainda pode receber arma institucional em doação (§ 4º)."
    },
    comentario: {
      resolucao: "ERRADO. Lei 14.735/2023, art. 30, § 3º: os policiais civis, por ocasião de sua aposentadoria, CONSERVAM a autorização do livre porte de arma de fogo, válido em todo o território nacional, na forma da legislação em vigor. O § 4º ainda assegura a possibilidade de doação de armas institucionais aos aposentados.",
      fundamento: "Lei 14.735/2023, art. 30, §§ 3º e 4º; Lei 10.826/2003.",
      macete: "Aposentado conserva o porte — em todo o território nacional.",
      erroComum: "Restringir o porte aos servidores em atividade.",
      comoBancaPensa: "Nega um direito expressamente previsto para o inativo."
    }
  },
  {
    id: "LI-020", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Sigilo das técnicas de investigação (art. 34)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "É vedada a divulgação, a qualquer tempo e fora da esfera policial, de técnicas de investigação utilizadas pelas polícias civis e de qualquer dado ou informação obtidos por meio de medida cautelar judicial, ressalvadas as hipóteses legais, respondendo o infrator civil, administrativa e criminalmente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "a qualquer tempo / fora da esfera policial",
    cognitivo: {
      motivo: "Cobrar a vedação do art. 34 e a tríplice responsabilização.",
      mede: "LONPC — vedações.",
      pegadinhaDesc: "A banca costuma limitar a vedação ao curso da investigação ('a qualquer tempo' é o ponto).",
      ondeErra: "Supõe que, encerrado o caso, a técnica pode ser divulgada.",
      palavraCritica: "a qualquer tempo",
      tecnica: "A vedação é permanente e não se aplica aos cursos de formação ministrados a profissionais do art. 144 da CF (§ 1º).",
      regraMental: "Técnica de investigação: sigilo permanente. Exceção: cursos internos das forças do art. 144."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 34: é vedada a divulgação, a qualquer tempo e fora da esfera policial, de técnicas de investigação e de dados obtidos por medida cautelar judicial, ressalvadas as hipóteses legais, respondendo o infrator civil, administrativa e criminalmente. O § 1º excepciona os cursos de formação ministrados exclusivamente a profissionais das instituições do art. 144 da CF, e o § 2º manda resguardar o sigilo mesmo em audiências.",
      fundamento: "Lei 14.735/2023, art. 34, caput e §§ 1º e 2º.",
      macete: "Sigilo das técnicas vale para sempre — só se abre em curso interno das forças de segurança.",
      erroComum: "Limitar a vedação ao período da investigação.",
      comoBancaPensa: "Suprime o 'a qualquer tempo' para criar o item errado."
    }
  },
  {
    id: "LI-021", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Custódia de presos em unidades policiais (art. 40)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.88,
    enunciado: "É vedada, de forma absoluta e sem qualquer exceção, a custódia de preso e de adolescente infrator em dependências de prédios e unidades das polícias civis.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sem qualquer exceção",
    cognitivo: {
      motivo: "Cobrar a ressalva final do art. 40.",
      mede: "LONPC — disposições finais.",
      pegadinhaDesc: "Absolutiza a vedação, suprimindo a ressalva legal expressa.",
      ondeErra: "Memoriza a regra e esquece a exceção.",
      palavraCritica: "salvo interesse fundamentado na investigação policial",
      tecnica: "A vedação alcança inclusive a custódia provisória — MAS há ressalva: interesse fundamentado na investigação policial.",
      regraMental: "Regra: delegacia não é presídio. Exceção: interesse fundamentado na investigação."
    },
    comentario: {
      resolucao: "ERRADO. Lei 14.735/2023, art. 40: fica vedada a custódia de preso e de adolescente infrator, ainda que em caráter provisório, em dependências de prédios e unidades das polícias civis, SALVO INTERESSE FUNDAMENTADO NA INVESTIGAÇÃO POLICIAL. A vedação, portanto, não é absoluta.",
      fundamento: "Lei 14.735/2023, art. 40.",
      macete: "Vedação forte, mas com ressalva: interesse fundamentado na investigação.",
      erroComum: "Tratar a vedação como absoluta.",
      comoBancaPensa: "Suprime a ressalva final e absolutiza a regra — pegadinha clássica."
    }
  },
  {
    id: "LI-022", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Conselho Nacional da Polícia Civil (art. 44)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Foi instituído o Conselho Nacional da Polícia Civil, órgão dotado de competência exclusivamente consultiva sobre as políticas públicas institucionais de padronização e intercâmbio nas áreas de competências das polícias civis.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exclusivamente consultiva",
    cognitivo: {
      motivo: "Cobrar a natureza da competência do Conselho Nacional (art. 44).",
      mede: "LONPC — disposições finais.",
      pegadinhaDesc: "Restringe a competência a consultiva, suprimindo a deliberativa.",
      ondeErra: "Assume que conselho nacional é sempre meramente opinativo.",
      palavraCritica: "consultiva E deliberativa",
      tecnica: "O Conselho tem competência CONSULTIVA E DELIBERATIVA; sua composição e regimento vêm por DECRETO específico.",
      regraMental: "Conselho Nacional da PC: consulta e delibera. Regimento por decreto."
    },
    comentario: {
      resolucao: "ERRADO. Lei 14.735/2023, art. 44: fica instituído o Conselho Nacional da Polícia Civil, com competência CONSULTIVA E DELIBERATIVA sobre as políticas públicas institucionais de padronização e intercâmbio nas áreas de competências constitucionais e legais das polícias civis. O § 1º remete a composição e o regimento a decreto específico.",
      fundamento: "Lei 14.735/2023, art. 44, caput e § 1º.",
      macete: "Consultiva E deliberativa — não é só opinativo.",
      erroComum: "Restringir a competência à função consultiva.",
      comoBancaPensa: "Suprime uma das competências com o advérbio 'exclusivamente'."
    }
  },
  {
    id: "LI-023", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis", subassunto: "Dia Nacional da Polícia Civil (art. 47)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.75,
    enunciado: "A polícia civil tem como Dia Nacional a data de 5 de abril.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "5 de abril",
    cognitivo: {
      motivo: "Cobrar a data simbólica fixada no art. 47.",
      mede: "LONPC — disposições finais.",
      pegadinhaDesc: "Item literal e direto; a banca costuma alterar a data.",
      ondeErra: "Não memoriza datas comemorativas previstas em lei.",
      palavraCritica: "5 de abril",
      tecnica: "Datas fixadas em lei são de cobrança literal fácil — vale memorizar.",
      regraMental: "Dia Nacional da Polícia Civil: 5 de abril."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.735/2023, art. 47: a polícia civil tem como Dia Nacional a data de 5 de abril.",
      fundamento: "Lei 14.735/2023, art. 47.",
      macete: "5 de abril — Dia Nacional da Polícia Civil.",
      erroComum: "Trocar a data.",
      comoBancaPensa: "Item curto e literal, de baixa dificuldade e alta taxa de acerto."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE13);

/* Frequência de temas da Legislação Institucional (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Legislação Institucional (AL)");
  if (!d) { d = { disciplina: "Legislação Institucional (AL)", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "LONPC — concurso, investidura e promoção (arts. 20-25)", freq: 92, tendencia: "alta", prob: 0.93 },
    { tema: "LONPC — organização e Delegacia-Geral (arts. 7º-18)", freq: 88, tendencia: "alta", prob: 0.9 },
    { tema: "LONPC — direitos, deveres e vedações (arts. 26-35)", freq: 86, tendencia: "alta", prob: 0.88 },
    { tema: "LONPC — disposições finais (arts. 36-50)", freq: 78, tendencia: "alta", prob: 0.8 },
  );
})();
