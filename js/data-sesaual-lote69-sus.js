/* =====================================================================
   QUESTLAB — Lote 69: LEGISLAÇÃO APLICADA AO SUS (expansão)
   A disciplina tinha 40 itens cobrindo os fundamentos. Este lote leva a
   125 e fecha as lacunas frente ao conteúdo programático da SESAU/AL.

   Material de curso (9 aulas, pós-edital) serviu de MAPA dos recortes
   cobrados. As questões que ele traz são de provas anteriores de bancas
   diversas — FGV, IBFC, VUNESP, SELECON, AVANÇA SP e algumas CEBRASPE —
   e em boa parte no formato de múltipla escolha. Copiá-las seria treinar
   o padrão errado: a prova da SESAU/AL é CEBRASPE, em certo/errado, cuja
   lógica de armadilha é outra. Foram usadas, então, para identificar
   QUAIS dispositivos e QUAIS confusões a banca explora; cada item aqui
   foi redigido do zero e conferido contra o texto legal.

   Lacunas que este lote fecha, por ordem de gravidade:
     • LC 141/2012 — não havia UMA questão sequer de financiamento, e a
       lei é o coração da parte orçamentária do SUS (percentuais mínimos,
       o que conta e o que não conta como ASPS, relatório quadrimestral);
     • competências das esferas na Lei 8.080 (arts. 15 a 19), que separam
       direção nacional, estadual e municipal — recorte clássico de troca
       de sujeito;
     • subsistemas e dispositivos especiais da Lei 8.080 (saúde indígena,
       atendimento domiciliar, acompanhante no parto, CONITEC);
     • Decreto 7.508 em profundidade (mapa da saúde, COAP, CIR, portas de
       entrada, planejamento ascendente);
     • vigilância em saúde e notificação compulsória, com os prazos que a
       banca troca (imediata em 24 h × semanal em 7 dias);
     • história e Reforma Sanitária (Eloy Chaves, CAPs/IAPs, INAMPS,
       CEBES, 8ª CNS, SUDS).

   85 itens (SUS-041 a SUS-125): 53 CERTO / 32 ERRADO, dificuldade 3 em 80.
   Contraexemplos deliberados marcados no comentário — absolutos, exigências
   e prazos que parecem armadilha e procedem.

   Dois itens tiveram de ser reescritos porque o validador apontou enunciado
   idêntico a questões já existentes (SUS-022 e SUS-032): cheguei à mesma
   formulação porque ambos os recortes são quase transcrição literal da lei.
   Foram refeitos por outro ângulo — a comparação Conferência × Conselho e a
   função financeira da Região de Saúde.
   ===================================================================== */

const QUESTOES_SESAUAL_LOTE69 = [

  /* ===================== HISTÓRIA E REFORMA SANITÁRIA ===================== */
  {
    id: "SUS-041", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "Lei Eloy Chaves e as CAPs",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.72,
    enunciado: "A Lei Eloy Chaves, de 1923, é apontada como marco inicial da previdência social brasileira por instituir as Caixas de Aposentadoria e Pensões, organizadas por empresa e custeadas por empregados e empregadores.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "Caixas de Aposentadoria e Pensões ... por empresa",
    cognitivo: {
      motivo: "Fixar o marco inicial da previdência e a lógica das CAPs, base de toda a linha do tempo.",
      palavraCritica: "organizadas por empresa",
    },
    comentario: {
      resolucao: "CERTO. As CAPs eram organizadas por EMPRESA — cada uma tinha a sua —, com custeio tripartite na origem e forte peso de empregados e empregadores. Só depois, nos anos 1930, vieram os IAPs, organizados por CATEGORIA PROFISSIONAL, o que ampliou a cobertura e centralizou a gestão no Estado.",
      fundamento: "Decreto Legislativo nº 4.682/1923 (Lei Eloy Chaves).",
      macete: "CAPs = por empresa (Caixa da empresa). IAPs = por categoria (Instituto dos bancários, marítimos...).",
      erroComum: "Trocar a base de organização das CAPs pela dos IAPs.",
      comoBancaPensa: "Item correto que serve de âncora para a troca CAP/IAP em outro item da prova."
    }
  },
  {
    id: "SUS-042", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "CAPs e IAPs",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.68,
    enunciado: "Os Institutos de Aposentadoria e Pensões (IAPs), criados na década de 1930, eram organizados por empresa, ao passo que as Caixas de Aposentadoria e Pensões (CAPs) reuniam trabalhadores por categoria profissional.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "IAPs ... por empresa ... CAPs ... por categoria profissional",
    cognitivo: {
      motivo: "Cobrar a mesma distinção com os critérios permutados.",
      palavraCritica: "IAPs ... organizados por empresa",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. As CAPs eram por EMPRESA; os IAPs, por CATEGORIA PROFISSIONAL (IAPB dos bancários, IAPM dos marítimos, IAPI dos industriários). A mudança não foi só de forma: ao agrupar por categoria, o Estado assumiu papel central na gestão previdenciária.",
      fundamento: "Decreto Legislativo nº 4.682/1923 e legislação dos IAPs (décadas de 1930-1940).",
      macete: "A ordem histórica é CAP → IAP, e a lógica vai de empresa para categoria.",
      erroComum: "Decorar os dois nomes sem fixar o critério de agrupamento de cada um.",
      comoBancaPensa: "Permuta dois conceitos vizinhos cuja descrição isolada o candidato reconhece."
    }
  },
  {
    id: "SUS-043", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "INPS e INAMPS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade histórica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.66,
    enunciado: "A unificação dos institutos previdenciários no Instituto Nacional de Previdência Social (INPS), em 1966, consolidou modelo em que a assistência médica era prestada preferencialmente a quem contribuía para a previdência, o que excluía do atendimento regular a população sem vínculo formal de trabalho.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "prestada preferencialmente a quem contribuía ... excluía ... sem vínculo formal",
    cognitivo: {
      motivo: "Cobrar o caráter contributivo e excludente do modelo pré-SUS, que a universalidade viria a romper.",
      palavraCritica: "excluía do atendimento regular a população sem vínculo formal",
    },
    comentario: {
      resolucao: "CERTO. Esse é o ponto central para entender o que o SUS mudou. No modelo previdenciário, saúde era benefício de segurado: quem não contribuía dependia de filantropia, das santas casas ou de ações pontuais do Ministério da Saúde. Em 1977 o INAMPS separou a assistência médica dentro do sistema previdenciário, mas manteve a lógica contributiva. A universalidade só chega com a CF/88.",
      fundamento: "Decreto-Lei nº 72/1966 (INPS) e Lei nº 6.439/1977 (SINPAS/INAMPS).",
      macete: "Antes do SUS: saúde para quem tinha carteira assinada. Depois: saúde para todos.",
      erroComum: "Supor que sempre houve atendimento universal na rede pública.",
      comoBancaPensa: "Item correto que cobra a compreensão do modelo, não a data."
    }
  },
  {
    id: "SUS-044", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "Movimento da Reforma Sanitária",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade histórica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.7,
    enunciado: "O movimento da Reforma Sanitária brasileira, articulado a partir da década de 1970, teve entre seus espaços de organização o Centro Brasileiro de Estudos de Saúde (CEBES) e a Associação Brasileira de Saúde Coletiva (ABRASCO).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "CEBES ... ABRASCO",
    cognitivo: {
      motivo: "Cobrar as entidades que estruturaram o movimento, citadas com frequência.",
      palavraCritica: "CEBES ... ABRASCO",
    },
    comentario: {
      resolucao: "CERTO. O CEBES, fundado em 1976, e a ABRASCO, em 1979, foram as bases institucionais do movimento — que reunia acadêmicos, profissionais de saúde, sindicatos e movimentos populares em torno da saúde como direito e dever do Estado. A Reforma Sanitária é o antecedente político direto do SUS.",
      fundamento: "História da saúde pública brasileira — movimento da Reforma Sanitária.",
      macete: "CEBES (1976) e ABRASCO (1979): a base intelectual do SUS.",
      erroComum: "Confundir as siglas com órgãos oficiais de governo.",
      comoBancaPensa: "Item 'limpo' de memória histórica."
    }
  },
  {
    id: "SUS-045", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "8ª Conferência Nacional de Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "A 8ª Conferência Nacional de Saúde, realizada em 1986, foi a primeira a contar com ampla participação da sociedade civil e teve seu relatório final incorporado, em larga medida, ao capítulo da saúde da Constituição de 1988.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "8ª ... 1986 ... incorporado ... Constituição de 1988",
    cognitivo: {
      motivo: "Contraexemplo: número de conferência e ano corretos, no formato em que a banca costuma trocá-los.",
      palavraCritica: "8ª ... 1986",
    },
    comentario: {
      resolucao: "CERTO. A 8ª CNS (março de 1986) é o marco: aprovou o conceito ampliado de saúde, a saúde como direito de cidadania e dever do Estado, e propôs a criação de um sistema único, separado da previdência. Seu relatório orientou a Subcomissão de Saúde da Constituinte. Números e anos aqui são cobrados com frequência — e estão corretos no item.",
      fundamento: "Relatório final da 8ª Conferência Nacional de Saúde (1986).",
      macete: "8ª CNS = 1986 = a Conferência que desenhou o SUS.",
      erroComum: "Marcar ERRADO por desconfiar de qualquer data em enunciado.",
      comoBancaPensa: "Cobra o número exato num item verdadeiro, punindo quem chuta contra datas."
    }
  },
  {
    id: "SUS-046", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "Conceito ampliado de saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.71,
    enunciado: "O conceito ampliado de saúde adotado a partir da 8ª Conferência Nacional de Saúde define saúde como a ausência de doenças e enfermidades, restringindo-a ao plano biológico individual.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "ausência de doenças ... restringindo-a ao plano biológico individual",
    cognitivo: {
      motivo: "Cobrar o conteúdo do conceito ampliado, que é o oposto da definição negativa.",
      palavraCritica: "ausência de doenças",
    },
    comentario: {
      resolucao: "ERRADO. O conceito ampliado rompe justamente com a definição de saúde como mera ausência de doença: saúde resulta de condições de alimentação, habitação, educação, renda, meio ambiente, trabalho, transporte, emprego, lazer, liberdade, acesso à terra e aos serviços de saúde. É definição social e positiva, depois vertida no art. 3º da Lei 8.080/1990.",
      fundamento: "Relatório final da 8ª CNS (1986); Lei nº 8.080/1990, art. 3º.",
      macete: "Saúde não é 'não estar doente': é resultado de condições de vida.",
      erroComum: "Reproduzir a definição negativa, de senso comum.",
      comoBancaPensa: "Oferece a definição intuitiva, que é exatamente a que o conceito ampliado superou."
    }
  },
  {
    id: "SUS-047", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "SUDS e antecedentes imediatos",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.58,
    enunciado: "O Sistema Unificado e Descentralizado de Saúde (SUDS), instituído em 1987, antecedeu o SUS e representou etapa de descentralização ao transferir aos estados a gestão de serviços até então sob responsabilidade do INAMPS.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "SUDS ... 1987 ... transferir aos estados ... INAMPS",
    cognitivo: {
      motivo: "Cobrar o elo entre as AIS/SUDS e o SUS, etapa intermediária pouco estudada.",
      palavraCritica: "antecedeu o SUS",
    },
    comentario: {
      resolucao: "CERTO. A sequência é AIS (Ações Integradas de Saúde, 1984) → SUDS (1987) → SUS (1988/1990). O SUDS estadualizou serviços do INAMPS por meio de convênios, sendo ensaio prático da descentralização que a CF/88 consagraria. O INAMPS só foi extinto em 1993.",
      fundamento: "Decreto nº 94.657/1987 (SUDS).",
      macete: "AIS → SUDS → SUS. O SUDS é o ensaio da descentralização.",
      erroComum: "Ignorar as etapas intermediárias e saltar do INAMPS ao SUS.",
      comoBancaPensa: "Cobra a etapa que costuma ser pulada no estudo."
    }
  },
  {
    id: "SUS-048", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "Modelo campanhista",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.55,
    enunciado: "O modelo sanitarista campanhista, predominante no início do século XX e associado a Oswaldo Cruz, caracterizava-se pela ênfase na assistência médica individual e curativa, em detrimento de ações coletivas de controle de endemias.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "ênfase na assistência médica individual e curativa",
    cognitivo: {
      motivo: "Cobrar a natureza coletiva e compulsória do modelo campanhista.",
      palavraCritica: "individual e curativa",
    },
    comentario: {
      resolucao: "ERRADO. O modelo campanhista era exatamente o oposto: coletivo, com ações de saneamento, vacinação obrigatória e combate a vetores, executadas com poder de polícia sanitária — daí a Revolta da Vacina (1904). A ênfase na assistência médica individual e curativa é do modelo médico-assistencial privatista, que se firmou depois, com a previdência.",
      fundamento: "História da saúde pública brasileira — modelos campanhista e médico-assistencial privatista.",
      macete: "Campanhista = campanha, coletivo, polícia sanitária. Privatista = consultório, individual, curativo.",
      erroComum: "Trocar as características dos dois modelos.",
      comoBancaPensa: "Descreve corretamente um modelo e o etiqueta com o nome do outro."
    }
  },

  /* ===================== CONSTITUIÇÃO FEDERAL ===================== */
  {
    id: "SUS-049", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 195 — financiamento da seguridade",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.73,
    enunciado: "A seguridade social será financiada por toda a sociedade, de forma direta e indireta, mediante recursos dos orçamentos da União, dos estados, do Distrito Federal e dos municípios e por contribuições sociais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "toda a sociedade, de forma direta e indireta",
    cognitivo: {
      motivo: "Cobrar a literalidade do caput do art. 195, base do financiamento.",
      palavraCritica: "direta e indireta",
    },
    comentario: {
      resolucao: "CERTO. É a redação do art. 195, caput. A expressão 'toda a sociedade' consagra o princípio da solidariedade: financia quem contribui diretamente e também quem contribui de modo indireto, via orçamentos públicos. Note que os quatro entes federativos são citados — não apenas a União.",
      fundamento: "CF/1988, art. 195, caput.",
      macete: "Financiamento da seguridade: solidário, direto e indireto, dos quatro entes.",
      erroComum: "Restringir o financiamento às contribuições sociais.",
      comoBancaPensa: "Item de literalidade quase transcrita, que a banca cobra sem alteração."
    }
  },
  {
    id: "SUS-050", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 196 — acesso universal e igualitário",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.79,
    enunciado: "A garantia constitucional de acesso às ações e serviços de saúde é assegurada mediante contribuição prévia do beneficiário ao sistema, requisito que distingue a saúde da assistência social no âmbito da seguridade.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "mediante contribuição prévia do beneficiário",
    cognitivo: {
      motivo: "Cobrar o caráter não contributivo da saúde, que a separa da previdência.",
      palavraCritica: "contribuição prévia",
    },
    comentario: {
      resolucao: "ERRADO. Saúde é direito de todos e dever do Estado, com acesso UNIVERSAL e IGUALITÁRIO, independentemente de qualquer contribuição — art. 196. Quem exige contribuição prévia é a PREVIDÊNCIA social. Saúde e assistência social são ambas não contributivas; a assistência, porém, é prestada a quem dela necessitar, ao passo que a saúde é universal.",
      fundamento: "CF/1988, art. 196; art. 201 (previdência, caráter contributivo); art. 203 (assistência).",
      macete: "Dos três da seguridade, só a previdência exige contribuição.",
      erroComum: "Estender à saúde a lógica contributiva da previdência.",
      comoBancaPensa: "Ressuscita o modelo pré-1988, em que saúde dependia de vínculo previdenciário."
    }
  },
  {
    id: "SUS-051", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 197 — relevância pública",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.7,
    enunciado: "São de relevância pública as ações e serviços de saúde, cabendo ao poder público dispor, nos termos da lei, sobre sua regulamentação, fiscalização e controle, admitida a execução por pessoa física ou jurídica de direito privado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "relevância pública ... regulamentação, fiscalização e controle",
    cognitivo: {
      motivo: "Cobrar o trio regulamentação/fiscalização/controle e a possibilidade de execução privada.",
      palavraCritica: "execução por pessoa física ou jurídica de direito privado",
    },
    comentario: {
      resolucao: "CERTO. É a redação do art. 197. Duas leituras importam: 'relevância pública' autoriza a intervenção estatal mesmo sobre serviços privados de saúde; e a execução pode ser feita por terceiros — diretamente ou por meio de terceiros, pessoa física ou jurídica de direito privado —, o que não retira do poder público o dever de regulamentar, fiscalizar e controlar.",
      fundamento: "CF/1988, art. 197.",
      macete: "Relevância pública: o Estado regula, fiscaliza e controla, mesmo o que é privado.",
      erroComum: "Concluir que relevância pública impede a execução privada.",
      comoBancaPensa: "Item de literalidade em que o candidato tende a estranhar a menção ao privado."
    }
  },
  {
    id: "SUS-052", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 198 — diretrizes",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade distorcida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.82,
    enunciado: "Entre as diretrizes constitucionais do SUS estão a descentralização, com direção única em cada esfera de governo, o atendimento integral, com prioridade para as atividades assistenciais, sem prejuízo dos serviços preventivos, e a participação da comunidade.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "prioridade para as atividades assistenciais, sem prejuízo dos serviços preventivos",
    cognitivo: {
      motivo: "Cobrar a inversão da prioridade no atendimento integral, recorte clássico do art. 198, II.",
      palavraCritica: "prioridade para as atividades assistenciais",
    },
    comentario: {
      resolucao: "ERRADO. A prioridade está invertida. O art. 198, II, determina atendimento integral com PRIORIDADE PARA AS ATIVIDADES PREVENTIVAS, sem prejuízo dos serviços assistenciais. É uma das trocas mais cobradas da matéria, porque a inversão soa natural — mas o texto constitucional privilegia a prevenção. As demais diretrizes citadas estão corretas.",
      fundamento: "CF/1988, art. 198, I a III.",
      macete: "Prevenção primeiro, assistência sem prejuízo. Nunca o contrário.",
      erroComum: "Ler rápido e não notar a troca entre preventivo e assistencial.",
      comoBancaPensa: "Mantém corretas duas das três diretrizes e inverte só a ordem interna da segunda."
    }
  },
  {
    id: "SUS-053", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 198 — diretrizes",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.76,
    enunciado: "As ações e serviços públicos de saúde integram rede regionalizada e hierarquizada e constituem sistema único, organizado exclusivamente segundo as diretrizes de descentralização, atendimento integral e participação da comunidade.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "rede regionalizada e hierarquizada ... exclusivamente ... três diretrizes",
    cognitivo: {
      motivo: "Contraexemplo: um 'exclusivamente' que corresponde ao rol taxativo do art. 198.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "CERTO. O art. 198 traz três incisos, e apenas três: descentralização com direção única em cada esfera; atendimento integral, com prioridade para as atividades preventivas; e participação da comunidade. O rol é fechado — universalidade, integralidade e equidade são PRINCÍPIOS doutrinários e aparecem detalhados na Lei 8.080, art. 7º, não entre as diretrizes do art. 198.",
      fundamento: "CF/1988, art. 198, caput e incisos I a III.",
      macete: "Diretrizes da CF são 3: Descentralização, Atendimento integral, Participação (DAP).",
      erroComum: "Marcar ERRADO por reflexo diante de 'exclusivamente', ou misturar princípios da Lei 8.080 com diretrizes da CF.",
      comoBancaPensa: "Usa advérbio de exclusão num rol que é mesmo taxativo."
    }
  },
  {
    id: "SUS-054", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 198 §4º — agentes comunitários",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.6,
    enunciado: "Os gestores locais do SUS podem admitir agentes comunitários de saúde e agentes de combate às endemias por meio de processo seletivo público, de acordo com a natureza e complexidade de suas atribuições e requisitos específicos para sua atuação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "processo seletivo público",
    cognitivo: {
      motivo: "Cobrar a exceção constitucional ao concurso público para esses agentes.",
      palavraCritica: "processo seletivo público",
    },
    comentario: {
      resolucao: "CERTO. É o art. 198, §4º, incluído pela EC 51/2006. A regra geral do art. 37, II, exige concurso público; para agentes comunitários de saúde e de combate às endemias, a Constituição admite PROCESSO SELETIVO PÚBLICO — figura menos formal, mas ainda impessoal e competitiva. Não é livre nomeação.",
      fundamento: "CF/1988, art. 198, §4º (EC 51/2006); Lei nº 11.350/2006.",
      macete: "ACS e ACE entram por processo seletivo público — exceção que a própria CF abriu.",
      erroComum: "Afirmar que a admissão dispensa qualquer seleção, ou que exige concurso comum.",
      comoBancaPensa: "Cobra uma exceção constitucional expressa, que soa irregular a quem só conhece a regra geral."
    }
  },
  {
    id: "SUS-055", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 199 — participação complementar",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.78,
    enunciado: "As instituições privadas poderão participar de forma complementar do SUS, mediante contrato de direito público ou convênio, tendo preferência as entidades filantrópicas e as sem fins lucrativos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "de forma complementar ... preferência as entidades filantrópicas e as sem fins lucrativos",
    cognitivo: {
      motivo: "Cobrar o regime da participação privada e a ordem de preferência.",
      palavraCritica: "complementar ... preferência",
    },
    comentario: {
      resolucao: "CERTO. É o art. 199, §1º. Três elementos são cobrados: a participação é COMPLEMENTAR (não substitutiva — o privado entra quando a capacidade pública é insuficiente); o instrumento é contrato de direito público ou convênio; e há preferência para filantrópicas e sem fins lucrativos. Isso convive com o caput, que declara livre a assistência à saúde à iniciativa privada.",
      fundamento: "CF/1988, art. 199, caput e §1º; Lei nº 8.080/1990, art. 24 e art. 25.",
      macete: "Privado no SUS é complementar, e o filantrópico tem a fila preferencial.",
      erroComum: "Trocar 'complementar' por 'suplementar' — este é o regime dos planos de saúde.",
      comoBancaPensa: "Item de literalidade cuja armadilha correlata é a troca complementar/suplementar."
    }
  },
  {
    id: "SUS-056", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 199 — saúde suplementar",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "Denomina-se saúde complementar o segmento composto pelas operadoras de planos e seguros privados de assistência à saúde, ao passo que a participação suplementar designa a contratação de serviços privados pelo SUS quando sua capacidade instalada for insuficiente.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "saúde complementar ... operadoras de planos ... participação suplementar ... contratação pelo SUS",
    cognitivo: {
      motivo: "Cobrar os dois termos, que a banca inverte com frequência.",
      palavraCritica: "complementar ... suplementar",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. SAÚDE SUPLEMENTAR é o setor de planos e seguros privados, regulado pela ANS. PARTICIPAÇÃO COMPLEMENTAR é a contratação de serviços privados pelo SUS quando sua capacidade é insuficiente, na forma do art. 199, §1º. O 'C' de complementar é o que Completa o SUS por dentro.",
      fundamento: "CF/1988, art. 199, §1º; Lei nº 9.656/1998 e Lei nº 9.961/2000 (ANS).",
      macete: "Complementar = dentro do SUS, contratado por ele. Suplementar = plano de saúde, fora dele.",
      erroComum: "Usar os dois termos como sinônimos.",
      comoBancaPensa: "Permuta dois termos quase homógrafos com sentidos institucionais opostos."
    }
  },
  {
    id: "SUS-057", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 200 — competências do SUS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.75,
    enunciado: "Compete ao SUS, entre outras atribuições, ordenar a formação de recursos humanos na área de saúde, participar da formulação da política e da execução das ações de saneamento básico e colaborar na proteção do meio ambiente, nele compreendido o do trabalho.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "ordenar a formação de recursos humanos ... saneamento básico ... meio ambiente, nele compreendido o do trabalho",
    cognitivo: {
      motivo: "Cobrar três competências do art. 200 que extrapolam a assistência médica.",
      palavraCritica: "ordenar a formação de recursos humanos",
    },
    comentario: {
      resolucao: "CERTO. São os incisos III, IV e VIII do art. 200. O verbo importa: quanto ao saneamento, o SUS PARTICIPA da formulação e da execução — não é o responsável principal; quanto à formação de recursos humanos, ele ORDENA. E o meio ambiente do trabalho está expressamente incluído, o que fundamenta a atuação em saúde do trabalhador.",
      fundamento: "CF/1988, art. 200, III, IV e VIII.",
      macete: "SUS ORDENA formação, PARTICIPA do saneamento, COLABORA com o meio ambiente.",
      erroComum: "Supor que o SUS executa isoladamente o saneamento básico.",
      comoBancaPensa: "Item correto que exige atenção aos verbos, e não só aos temas."
    }
  },
  {
    id: "SUS-058", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 199 §4º — transplantes",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.62,
    enunciado: "A Constituição admite, mediante autorização do Ministério da Saúde e comprovação de finalidade terapêutica, a comercialização de órgãos, tecidos e substâncias humanas para fins de transplante.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "admite ... a comercialização de órgãos",
    cognitivo: {
      motivo: "Cobrar a vedação absoluta à comercialização de órgãos.",
      palavraCritica: "mediante autorização ... comercialização",
    },
    comentario: {
      resolucao: "ERRADO. O art. 199, §4º, veda expressamente TODO tipo de comercialização de órgãos, tecidos e substâncias humanas. A lei dispõe sobre as condições e requisitos para remoção e transplante, mas a vedação à comercialização é absoluta — não há autorização administrativa capaz de afastá-la. O item inventa um procedimento de exceção.",
      fundamento: "CF/1988, art. 199, §4º; Lei nº 9.434/1997.",
      macete: "Doação de órgão: sim. Venda: nunca, sob nenhuma condição.",
      erroComum: "Aceitar a exceção por parecer cercada de formalidades.",
      comoBancaPensa: "Cria um rito de autorização para tornar plausível o que a Constituição proíbe em termos absolutos."
    }
  },

  /* ===================== LEI 8.080 — COMPETÊNCIAS DAS ESFERAS ===================== */
  {
    id: "SUS-059", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 15 — atribuições comuns",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.74,
    enunciado: "A definição das instâncias e mecanismos de controle e fiscalização inerentes ao poder de polícia sanitária constitui atribuição comum da União, dos estados, do Distrito Federal e dos municípios, exercida em seu âmbito administrativo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "atribuição comum ... poder de polícia sanitária",
    cognitivo: {
      motivo: "Cobrar a existência de um rol de atribuições COMUNS, anterior à repartição por esfera.",
      palavraCritica: "em seu âmbito administrativo",
    },
    comentario: {
      resolucao: "CERTO. O art. 15 lista atribuições exercidas pelos quatro entes, cada um no seu âmbito — entre elas administração de recursos, planejamento, elaboração de normas técnicas, poder de polícia sanitária e elaboração da proposta orçamentária. Só depois, nos arts. 16 a 18, a lei distribui o que é privativo de cada direção.",
      fundamento: "Lei nº 8.080/1990, art. 15, caput e incisos.",
      macete: "Art. 15 = todo mundo faz. Arts. 16, 17 e 18 = cada um faz o seu.",
      erroComum: "Presumir que toda competência é privativa de uma esfera.",
      comoBancaPensa: "Item correto que estabelece a estrutura antes das trocas de sujeito."
    }
  },
  {
    id: "SUS-060", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 16 — direção nacional",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.77,
    enunciado: "Compete à direção nacional do SUS definir e coordenar os sistemas de redes integradas de assistência de alta complexidade, de rede de laboratórios de saúde pública, de vigilância epidemiológica e de vigilância sanitária.",
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "direção nacional ... definir e coordenar os sistemas",
    cognitivo: {
      motivo: "Cobrar o núcleo da competência federal: definir e coordenar sistemas de abrangência nacional.",
      palavraCritica: "definir e coordenar",
    },
    comentario: {
      resolucao: "CERTO. É o art. 16, III. O verbo marca a esfera: à União cabe DEFINIR e COORDENAR sistemas nacionais; aos estados, coordenar e, em caráter complementar, executar; aos municípios, EXECUTAR os serviços. Guardar os verbos resolve a maior parte dos itens de repartição de competências.",
      fundamento: "Lei nº 8.080/1990, art. 16, III.",
      macete: "União define e coordena. Estado coordena. Município executa.",
      erroComum: "Atribuir aos estados a definição dos sistemas nacionais.",
      comoBancaPensa: "Item correto que fixa os verbos antes das trocas."
    }
  },
  {
    id: "SUS-061", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 18 — direção municipal",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.81,
    enunciado: "Compete à direção estadual do SUS planejar, organizar, controlar e avaliar as ações e os serviços de saúde e gerir e executar os serviços públicos de saúde, cabendo à direção municipal a coordenação da rede de laboratórios de saúde pública em âmbito nacional.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "direção estadual ... gerir e executar ... direção municipal ... âmbito nacional",
    cognitivo: {
      motivo: "Cobrar a repartição de competências pela troca das esferas.",
      palavraCritica: "direção municipal ... em âmbito nacional",
    },
    comentario: {
      resolucao: "ERRADO. Duas trocas. Planejar, organizar, controlar, avaliar e EXECUTAR os serviços públicos de saúde é competência da direção MUNICIPAL (art. 18, I). E nenhuma competência de âmbito NACIONAL cabe ao município — a coordenação da rede nacional de laboratórios é da União (art. 16, III). A incoerência entre 'municipal' e 'nacional' entrega o erro.",
      fundamento: "Lei nº 8.080/1990, arts. 16, III, e 18, I.",
      macete: "Quem executa serviço é o município. Quem faz algo 'nacional' é a União.",
      erroComum: "Não notar a incompatibilidade entre a esfera citada e o alcance da atribuição.",
      comoBancaPensa: "Permuta esferas em enunciado longo, contando com a leitura apressada."
    }
  },
  {
    id: "SUS-062", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 17 — direção estadual",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.73,
    enunciado: "À direção estadual do SUS compete coordenar e, em caráter complementar, executar ações e serviços de vigilância epidemiológica, vigilância sanitária, alimentação e nutrição e saúde do trabalhador.",
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "coordenar e, em caráter complementar, executar",
    cognitivo: {
      motivo: "Cobrar a posição intermediária do estado: coordena e só executa em caráter complementar.",
      palavraCritica: "em caráter complementar",
    },
    comentario: {
      resolucao: "CERTO. É o art. 17, IV. A expressão 'em caráter complementar' é o que define o papel estadual: a execução ordinária é municipal, e o estado entra quando o município não dá conta ou quando a ação transcende o território municipal. Suprimir essa expressão do enunciado transformaria o item em falso.",
      fundamento: "Lei nº 8.080/1990, art. 17, IV.",
      macete: "Estado coordena sempre; executa só complementarmente.",
      erroComum: "Ler o estado como executor ordinário dos serviços.",
      comoBancaPensa: "Item correto cuja palavra decisiva é uma locução adverbial fácil de ignorar."
    }
  },
  {
    id: "SUS-063", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 19 — Distrito Federal",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.64,
    enunciado: "Ao Distrito Federal competem as atribuições reservadas aos estados e aos municípios.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "atribuições reservadas aos estados e aos municípios",
    cognitivo: {
      motivo: "Contraexemplo: enunciado curtíssimo e categórico que reproduz o artigo na íntegra.",
      palavraCritica: "estados e aos municípios",
    },
    comentario: {
      resolucao: "CERTO. É a redação integral do art. 19. O DF acumula as duas competências porque não é dividido em municípios (CF, art. 32, §1º). Enunciados muito curtos costumam levantar suspeita, mas aqui o item é a própria lei — e a acumulação é dupla, não apenas estadual.",
      fundamento: "Lei nº 8.080/1990, art. 19; CF/1988, art. 32, §1º.",
      macete: "DF é estado e município ao mesmo tempo — na saúde também.",
      erroComum: "Afirmar que o DF só tem competências estaduais.",
      comoBancaPensa: "Transcreve o artigo inteiro e conta com a desconfiança do candidato diante da brevidade."
    }
  },
  {
    id: "SUS-064", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 9º — direção única",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.76,
    enunciado: "A direção do SUS é única e exercida, em âmbito estadual, pelo Ministério da Saúde e, em âmbito nacional, pela respectiva Secretaria de Saúde ou órgão equivalente.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "âmbito estadual, pelo Ministério da Saúde ... nacional, pela ... Secretaria",
    cognitivo: {
      motivo: "Cobrar a correspondência entre esfera e órgão de direção.",
      palavraCritica: "estadual, pelo Ministério da Saúde",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. Pelo art. 9º, a direção única é exercida: na União, pelo MINISTÉRIO DA SAÚDE; nos estados e no DF, pela respectiva Secretaria de Saúde ou órgão equivalente; nos municípios, igualmente pela Secretaria de Saúde ou órgão equivalente. O princípio da direção única significa um só gestor por esfera — não um só gestor para todo o país.",
      fundamento: "Lei nº 8.080/1990, art. 9º, I a III.",
      macete: "Ministério é federal. Secretaria é estadual ou municipal.",
      erroComum: "Interpretar 'direção única' como comando nacional centralizado.",
      comoBancaPensa: "Troca os órgãos de duas esferas em item que parece apenas descritivo."
    }
  },
  {
    id: "SUS-065", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 14-A — comissões intergestores",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.71,
    enunciado: "As Comissões Intergestores Bipartite e Tripartite são reconhecidas como foros de negociação e pactuação entre gestores quanto aos aspectos operacionais do SUS, e suas decisões devem ser pactuadas de forma consensual.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "foros de negociação e pactuação ... de forma consensual",
    cognitivo: {
      motivo: "Cobrar a natureza e o método decisório das comissões intergestores.",
      palavraCritica: "de forma consensual",
    },
    comentario: {
      resolucao: "CERTO. É o art. 14-A, incluído pela Lei 12.466/2011. Dois pontos: são foros de GESTORES (não de controle social — este é dos conselhos), e decidem por CONSENSO, não por maioria. A CIT reúne União, estados e municípios; a CIB, estado e municípios; e o Decreto 7.508 acrescentou a CIR, no âmbito regional.",
      fundamento: "Lei nº 8.080/1990, art. 14-A (Lei nº 12.466/2011).",
      macete: "Intergestores = gestores, por consenso. Conselho = sociedade, por deliberação.",
      erroComum: "Confundir comissão intergestores com conselho de saúde.",
      comoBancaPensa: "Item correto que separa dois colegiados frequentemente embaralhados."
    }
  },
  {
    id: "SUS-066", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 14-B — CONASS e CONASEMS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.65,
    enunciado: "O Conselho Nacional de Secretários de Saúde (CONASS) congrega os secretários municipais de saúde, ao passo que o Conselho Nacional de Secretarias Municipais de Saúde (CONASEMS) reúne os secretários estaduais.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "CONASS ... secretários municipais ... CONASEMS ... estaduais",
    cognitivo: {
      motivo: "Cobrar a composição de cada entidade representativa.",
      palavraCritica: "CONASS ... municipais",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O CONASS reúne os secretários ESTADUAIS de saúde; o CONASEMS, os secretários MUNICIPAIS — o próprio nome entrega, pois traz 'Municipais' por extenso. Ambos são entidades de direito privado sem fins lucrativos, reconhecidas como representantes dos gestores pelo art. 14-B.",
      fundamento: "Lei nº 8.080/1990, art. 14-B (Lei nº 12.466/2011).",
      macete: "CONASEMS tem 'M' de Municipais. CONASS, por eliminação, é dos estados.",
      erroComum: "Trocar as duas siglas por semelhança.",
      comoBancaPensa: "Inverte duas siglas parecidas, apostando na memorização superficial."
    }
  },
  {
    id: "SUS-067", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 35 — critérios de repasse",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.6,
    enunciado: "Para o estabelecimento de valores a serem transferidos a estados, ao Distrito Federal e a municípios, será utilizada a combinação de critérios como perfil demográfico e epidemiológico, características da rede de saúde e desempenho técnico, sendo que metade dos recursos destinados a estados e municípios será distribuída segundo o quantitativo populacional.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "metade dos recursos ... quantitativo populacional",
    cognitivo: {
      motivo: "Contraexemplo: uma fração exata que corresponde ao §1º do art. 35.",
      palavraCritica: "metade dos recursos",
    },
    comentario: {
      resolucao: "CERTO. O art. 35 lista os critérios combinados e o §1º determina que METADE dos recursos destinados a estados e municípios seja distribuída segundo o quantitativo populacional, independentemente de qualquer procedimento prévio. É um piso de equidade populacional: garante que nenhum ente fique sem repasse por mau desempenho relativo.",
      fundamento: "Lei nº 8.080/1990, art. 35, caput e §1º.",
      macete: "Metade vai pela população, pura e simplesmente.",
      erroComum: "Marcar ERRADO por desconfiança de fração exata em enunciado.",
      comoBancaPensa: "Traz número correto num contexto de muitos critérios, onde o candidato tende a duvidar."
    }
  },
  {
    id: "SUS-068", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 24 — participação complementar",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.68,
    enunciado: "Quando as disponibilidades do SUS forem insuficientes para garantir a cobertura assistencial à população de determinada área, o SUS poderá recorrer aos serviços ofertados pela iniciativa privada, hipótese em que a participação complementar será formalizada mediante contrato ou convênio, observadas as normas de direito público.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "disponibilidades ... insuficientes ... contrato ou convênio ... normas de direito público",
    cognitivo: {
      motivo: "Cobrar o pressuposto da contratação privada e o regime jurídico aplicável.",
      palavraCritica: "forem insuficientes",
    },
    comentario: {
      resolucao: "CERTO. É a conjugação dos arts. 24 e 26. O pressuposto é a insuficiência da capacidade pública — não é opção livre do gestor. E o contrato, ainda que celebrado com particular, submete-se às normas de direito público, o que atrai princípios como impessoalidade e publicidade e permite o controle pelos órgãos do SUS.",
      fundamento: "Lei nº 8.080/1990, arts. 24, caput e parágrafo único, e 26.",
      macete: "Só contrata privado se o público não der conta — e sob regras públicas.",
      erroComum: "Tratar a contratação de privados como escolha discricionária.",
      comoBancaPensa: "Item correto que exige lembrar do pressuposto, e não apenas da possibilidade."
    }
  },
  {
    id: "SUS-069", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 14 — comissões intersetoriais",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.57,
    enunciado: "As comissões intersetoriais, subordinadas ao Conselho Nacional de Saúde, têm por finalidade articular políticas e programas de interesse para a saúde cuja execução envolva áreas não compreendidas no âmbito do SUS.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "subordinadas ao Conselho Nacional de Saúde ... áreas não compreendidas no âmbito do SUS",
    cognitivo: {
      motivo: "Contraexemplo: par de colegiados que a banca troca, aqui descrito corretamente.",
      palavraCritica: "áreas não compreendidas no âmbito do SUS",
    },
    comentario: {
      resolucao: "CERTO. É o art. 14. Dois detalhes que a banca explora: as comissões intersetoriais são subordinadas ao CNS — e não às comissões intergestores —, e sua razão de ser é articular o que está FORA do SUS (saneamento, meio ambiente, educação, alimentação), porque saúde depende de determinantes que o setor sozinho não controla.",
      fundamento: "Lei nº 8.080/1990, art. 14, caput e parágrafo único.",
      macete: "Intersetorial = entre setores diferentes, ligada ao Conselho. Intergestores = entre entes, de gestores.",
      erroComum: "Confundir comissão intersetorial com comissão intergestores.",
      comoBancaPensa: "Descreve corretamente um colegiado que costuma ser embaralhado com o outro."
    }
  },
  {
    id: "SUS-070", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 4º — composição do SUS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.69,
    enunciado: "Integram o SUS o conjunto de ações e serviços de saúde prestados por órgãos e instituições públicas federais, estaduais e municipais, da administração direta e indireta e das fundações mantidas pelo poder público, bem como todas as instituições privadas de saúde em funcionamento no território nacional.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "todas as instituições privadas de saúde",
    cognitivo: {
      motivo: "Cobrar o limite da integração privada ao SUS.",
      palavraCritica: "todas as instituições privadas",
    },
    comentario: {
      resolucao: "ERRADO. A primeira parte reproduz o art. 4º, caput. Mas a iniciativa privada só participa do SUS em CARÁTER COMPLEMENTAR (art. 4º, §2º), mediante contrato ou convênio — não por mera existência. Um hospital particular que atende só planos e pacientes privados não integra o SUS. Além disso, a lei ressalva que os serviços privados contratados passam a seguir as diretrizes do sistema.",
      fundamento: "Lei nº 8.080/1990, art. 4º, caput e §2º.",
      macete: "Privado só entra no SUS por contrato ou convênio. Existir não basta.",
      erroComum: "Ler o SUS como abrangendo todo o setor saúde do país.",
      comoBancaPensa: "Acopla uma cláusula falsa e generalizante a uma transcrição correta do caput."
    }
  },

  /* ===================== LEI 8.080 — DISPOSITIVOS ESPECIAIS ===================== */
  {
    id: "SUS-071", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 5º — objetivos do SUS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "São objetivos do SUS a identificação e a divulgação dos fatores condicionantes e determinantes da saúde, a formulação de política de saúde destinada a promover, nos campos econômico e social, a redução de riscos de doenças, e a assistência às pessoas por meio de ações de promoção, proteção e recuperação da saúde.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "identificação e a divulgação dos fatores condicionantes e determinantes",
    cognitivo: {
      motivo: "Cobrar os três objetivos do art. 5º, com destaque para a divulgação dos determinantes.",
      palavraCritica: "identificação e a divulgação",
    },
    comentario: {
      resolucao: "CERTO. São os três incisos do art. 5º. O primeiro é o mais cobrado e o mais esquecido: o SUS não apenas identifica os determinantes — ele tem o dever de DIVULGÁ-LOS. O terceiro objetivo traz a tríade promoção, proteção e recuperação, que estrutura toda a assistência.",
      fundamento: "Lei nº 8.080/1990, art. 5º, I a III.",
      macete: "Identificar e divulgar; formular política de redução de riscos; assistir com promoção, proteção e recuperação.",
      erroComum: "Reduzir os objetivos do SUS à assistência.",
      comoBancaPensa: "Item de literalidade em que o verbo 'divulgar' é o detalhe cobrado."
    }
  },
  {
    id: "SUS-072", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 6º §1º — vigilância sanitária",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.8,
    enunciado: "Entende-se por vigilância epidemiológica o conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "vigilância epidemiológica ... produção e circulação de bens",
    cognitivo: {
      motivo: "Cobrar a distinção entre as duas vigilâncias, uma das trocas mais frequentes da disciplina.",
      palavraCritica: "vigilância epidemiológica",
    },
    comentario: {
      resolucao: "ERRADO. A definição apresentada é a de vigilância SANITÁRIA (art. 6º, §1º) — ela cuida de bens, produtos e serviços. A vigilância EPIDEMIOLÓGICA (§2º) é o conjunto de ações que proporciona o conhecimento, a detecção ou prevenção de mudanças nos fatores determinantes e condicionantes da saúde individual ou coletiva, com a finalidade de recomendar e adotar medidas de prevenção e controle de doenças ou agravos.",
      fundamento: "Lei nº 8.080/1990, art. 6º, §§1º e 2º.",
      macete: "Sanitária cuida de COISAS (produtos, serviços). Epidemiológica cuida de DOENÇAS (casos, surtos).",
      erroComum: "Trocar as duas definições, que vêm em parágrafos consecutivos.",
      comoBancaPensa: "Reproduz fielmente uma definição legal e apenas troca o rótulo."
    }
  },
  {
    id: "SUS-073", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 6º §3º — saúde do trabalhador",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.63,
    enunciado: "No campo da saúde do trabalhador, compete ao SUS a avaliação do impacto que as tecnologias provocam à saúde, a participação na normatização e fiscalização das condições de trabalho e a informação ao trabalhador e à sua respectiva entidade sindical sobre os riscos a que se expõe no ambiente laboral.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "informação ao trabalhador e à sua respectiva entidade sindical",
    cognitivo: {
      motivo: "Cobrar o alcance da atuação do SUS em saúde do trabalhador, incluindo o direito à informação.",
      palavraCritica: "entidade sindical",
    },
    comentario: {
      resolucao: "CERTO. O art. 6º, §3º, lista essas atribuições. O dever de informar alcança não só o trabalhador, mas também o sindicato — o que reconhece a dimensão coletiva do risco ocupacional. O SUS também pode requisitar informações às empresas sobre riscos e agravos e avaliar as condições dos ambientes de trabalho.",
      fundamento: "Lei nº 8.080/1990, art. 6º, §3º, I a VIII.",
      macete: "Saúde do trabalhador no SUS chega até o ambiente de trabalho e o sindicato.",
      erroComum: "Supor que a fiscalização do trabalho é exclusiva do Ministério do Trabalho.",
      comoBancaPensa: "Item correto que amplia o alcance do SUS além da assistência clínica."
    }
  },
  {
    id: "SUS-074", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 7º — princípios",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.84,
    enunciado: "Entre os princípios do SUS estão a preservação da autonomia das pessoas na defesa de sua integridade física e moral e a igualdade da assistência à saúde, sem preconceitos ou privilégios de qualquer espécie.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "preservação da autonomia ... igualdade da assistência ... sem preconceitos ou privilégios",
    cognitivo: {
      motivo: "Cobrar dois princípios do art. 7º cuja redação a banca reproduz quase literalmente.",
      palavraCritica: "sem preconceitos ou privilégios de qualquer espécie",
    },
    comentario: {
      resolucao: "CERTO. São os incisos III e IV do art. 7º. Atenção à formulação legal: a lei fala em IGUALDADE da assistência, sem preconceitos ou privilégios — a EQUIDADE, embora seja princípio doutrinário consagrado, não aparece com essa palavra no rol do art. 7º, e a banca explora essa diferença entre o texto legal e o vocabulário da doutrina.",
      fundamento: "Lei nº 8.080/1990, art. 7º, III e IV.",
      macete: "A lei escreve 'igualdade'; a doutrina fala 'equidade'. Saiba os dois.",
      erroComum: "Procurar a palavra 'equidade' no texto do art. 7º.",
      comoBancaPensa: "Item de literalidade cuja armadilha correlata é trocar igualdade por equidade."
    }
  },
  {
    id: "SUS-075", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 7º — integralidade",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.77,
    enunciado: "A integralidade de assistência é entendida como conjunto articulado e contínuo das ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade do sistema.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "articulado e contínuo ... individuais e coletivos ... todos os níveis de complexidade",
    cognitivo: {
      motivo: "Cobrar a definição legal de integralidade, com seus quatro pares de opostos.",
      palavraCritica: "em todos os níveis de complexidade",
    },
    comentario: {
      resolucao: "CERTO. É o art. 7º, II. A definição legal encadeia oposições que se somam: preventivo E curativo, individual E coletivo, em TODOS os níveis de complexidade. Integralidade não é escolher um dos polos — é articular todos, de forma contínua. Daí a expressão 'conjunto articulado e contínuo'.",
      fundamento: "Lei nº 8.080/1990, art. 7º, II.",
      macete: "Integralidade soma: preventivo + curativo, individual + coletivo, todos os níveis.",
      erroComum: "Reduzir integralidade a 'atender a pessoa por inteiro'.",
      comoBancaPensa: "Item de literalidade que o candidato tende a estranhar por parecer amplo demais."
    }
  },
  {
    id: "SUS-076", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 19-A a 19-H — saúde indígena",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.62,
    enunciado: "O Subsistema de Atenção à Saúde Indígena é financiado pelos estados e municípios em cujo território se localizem as terras indígenas, cabendo à União apenas a supervisão técnica das ações.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "financiado pelos estados e municípios ... União apenas a supervisão",
    cognitivo: {
      motivo: "Cobrar a responsabilidade financeira pelo subsistema indígena.",
      palavraCritica: "financiado pelos estados e municípios",
    },
    comentario: {
      resolucao: "ERRADO. O art. 19-C é expresso: caberá à UNIÃO, com seus recursos próprios, financiar o Subsistema de Atenção à Saúde Indígena. Estados, municípios e outras instituições podem atuar de forma complementar (art. 19-E), mas o custeio é federal — coerente com a competência da União para tratar de terras e populações indígenas.",
      fundamento: "Lei nº 8.080/1990, arts. 19-C e 19-E.",
      macete: "Saúde indígena: dinheiro é da União. Os demais entes complementam.",
      erroComum: "Aplicar a lógica geral de cofinanciamento tripartite ao subsistema indígena.",
      comoBancaPensa: "Inverte o responsável pelo custeio num subsistema com regra própria."
    }
  },
  {
    id: "SUS-077", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 19-F — saúde indígena e cultura",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.58,
    enunciado: "Na atenção à saúde indígena, dever-se-á obrigatoriamente levar em consideração a realidade local e as especificidades da cultura dos povos indígenas e o modelo a ser adotado para a atenção à saúde indígena, que se deve pautar por uma abordagem diferenciada e global.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "obrigatoriamente ... realidade local e as especificidades da cultura",
    cognitivo: {
      motivo: "Cobrar o caráter obrigatório da adequação cultural, e não meramente recomendável.",
      palavraCritica: "obrigatoriamente",
    },
    comentario: {
      resolucao: "CERTO. É o art. 19-F. O advérbio 'obrigatoriamente' está no texto legal: a adequação cultural não é sugestão, é dever. O art. 19-G complementa determinando que o subsistema seja descentralizado, hierarquizado e regionalizado, e que as populações indígenas tenham direito a participar dos organismos colegiados de formulação e controle das políticas de saúde.",
      fundamento: "Lei nº 8.080/1990, arts. 19-F e 19-G.",
      macete: "Atenção diferenciada aos povos indígenas é obrigação legal expressa.",
      erroComum: "Ler a adequação cultural como diretriz programática sem força vinculante.",
      comoBancaPensa: "Item correto em que o advérbio absoluto vem da própria lei."
    }
  },
  {
    id: "SUS-078", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 19-I — atendimento domiciliar",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.66,
    enunciado: "O atendimento e a internação domiciliares no âmbito do SUS independem da concordância do paciente e de sua família, bastando a indicação médica para sua realização.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "independem da concordância do paciente e de sua família",
    cognitivo: {
      motivo: "Cobrar o requisito de consentimento no atendimento domiciliar.",
      palavraCritica: "independem da concordância",
    },
    comentario: {
      resolucao: "ERRADO. O art. 19-I, §2º, exige exatamente o contrário: o atendimento e a internação domiciliares só poderão ser realizados por indicação médica, COM EXPRESSA CONCORDÂNCIA DO PACIENTE E DE SUA FAMÍLIA. São duas condições cumulativas — indicação técnica e consentimento —, o que preserva a autonomia consagrada no art. 7º, III.",
      fundamento: "Lei nº 8.080/1990, art. 19-I, §§1º e 2º.",
      macete: "Internação domiciliar exige indicação médica E concordância da família.",
      erroComum: "Supor que a indicação clínica dispensa o consentimento.",
      comoBancaPensa: "Suprime um requisito legal expresso, apresentando o outro como suficiente."
    }
  },
  {
    id: "SUS-079", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 19-J — acompanhante no parto",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "Os serviços de saúde do SUS, da rede própria ou conveniada, ficam obrigados a permitir a presença, junto à parturiente, de um acompanhante durante todo o período de trabalho de parto, parto e pós-parto imediato, indicado pela própria parturiente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "um acompanhante ... trabalho de parto, parto e pós-parto imediato ... indicado pela própria parturiente",
    cognitivo: {
      motivo: "Cobrar o direito ao acompanhante, de aplicação direta na assistência à saúde da mulher.",
      palavraCritica: "indicado pela própria parturiente",
    },
    comentario: {
      resolucao: "CERTO. É o art. 19-J, incluído pela Lei 11.108/2005. Três pontos: o direito alcança a rede própria E a conveniada; cobre os três momentos (trabalho de parto, parto e pós-parto imediato); e a escolha do acompanhante é da PARTURIENTE, não do serviço nem da família. É garantia especialmente cobrada em concursos da área de saúde da mulher.",
      fundamento: "Lei nº 8.080/1990, art. 19-J (Lei nº 11.108/2005).",
      macete: "Um acompanhante, escolhido por ela, nos três momentos.",
      erroComum: "Restringir o direito ao momento do parto propriamente dito.",
      comoBancaPensa: "Item de literalidade com aplicação prática direta na assistência obstétrica."
    }
  },
  {
    id: "SUS-080", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 19-Q — CONITEC",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.6,
    enunciado: "A incorporação, a exclusão ou a alteração de novos medicamentos, produtos e procedimentos pelo SUS são atribuições do Ministério da Saúde, assessorado pela Comissão Nacional de Incorporação de Tecnologias no SUS.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "atribuições do Ministério da Saúde, assessorado pela Comissão Nacional de Incorporação de Tecnologias",
    cognitivo: {
      motivo: "Cobrar quem decide e quem assessora na incorporação de tecnologias.",
      palavraCritica: "assessorado",
    },
    comentario: {
      resolucao: "CERTO. É o art. 19-Q, incluído pela Lei 12.401/2011. A decisão é do MINISTÉRIO DA SAÚDE; a CONITEC ASSESSORA, emitindo relatório que considera as evidências científicas sobre eficácia, acurácia, efetividade e segurança, além da avaliação econômica comparativa. O processo é público e admite consulta pública.",
      fundamento: "Lei nº 8.080/1990, arts. 19-Q e 19-R (Lei nº 12.401/2011).",
      macete: "CONITEC recomenda; o Ministério decide.",
      erroComum: "Atribuir à CONITEC o poder decisório final.",
      comoBancaPensa: "Item correto que distingue órgão consultivo de órgão decisório."
    }
  },
  {
    id: "SUS-081", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 19-T — vedações",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.64,
    enunciado: "São vedados, em todas as esferas de gestão do SUS, o pagamento, o ressarcimento ou o reembolso de medicamento, produto e procedimento clínico ou cirúrgico experimental ou de uso não autorizado pela Agência Nacional de Vigilância Sanitária.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "vedados, em todas as esferas ... experimental ou de uso não autorizado",
    cognitivo: {
      motivo: "Contraexemplo: uma vedação absoluta que a lei formula exatamente assim.",
      palavraCritica: "em todas as esferas de gestão",
    },
    comentario: {
      resolucao: "CERTO. É o art. 19-T, I e II. A vedação alcança as três esferas e é categórica quanto ao que é experimental ou não registrado na ANVISA. É o dispositivo central nas discussões de judicialização da saúde: fundamenta a recusa administrativa ao custeio de tratamentos sem registro sanitário, ainda que haja prescrição médica.",
      fundamento: "Lei nº 8.080/1990, art. 19-T, I e II (Lei nº 12.401/2011).",
      macete: "Sem registro na ANVISA, o SUS não paga — em nenhuma esfera.",
      erroComum: "Marcar ERRADO por reflexo diante de 'todas as esferas'.",
      comoBancaPensa: "Usa linguagem categórica em vedação que é mesmo absoluta na lei."
    }
  },
  {
    id: "SUS-082", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 43 — gratuidade",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.71,
    enunciado: "É admitida a cobrança de taxa de coparticipação do usuário nos serviços públicos de saúde prestados diretamente pelo SUS, desde que fixada em valor simbólico e destinada à manutenção das unidades.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "admitida a cobrança de taxa de coparticipação",
    cognitivo: {
      motivo: "Cobrar a gratuidade integral, sem brechas de valor simbólico.",
      palavraCritica: "valor simbólico",
    },
    comentario: {
      resolucao: "ERRADO. O art. 43 é taxativo: a gratuidade das ações e serviços de saúde nos serviços públicos contratados fica preservada. Não há autorização para cobrança, ainda que simbólica ou finalisticamente vinculada. A gratuidade decorre do acesso universal e igualitário do art. 196 da CF e do caráter não contributivo da saúde.",
      fundamento: "Lei nº 8.080/1990, art. 43; CF/1988, art. 196.",
      macete: "No SUS não se cobra do usuário. Nem pouco, nem para 'ajudar na manutenção'.",
      erroComum: "Aceitar a exceção por parecer módica e bem-intencionada.",
      comoBancaPensa: "Cria uma brecha revestida de razoabilidade contra regra que não admite exceção."
    }
  },

  /* ===================== LEI 8.142/1990 ===================== */
  {
    id: "SUS-083", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Art. 1º — instâncias colegiadas",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.8,
    enunciado: "O SUS contará, em cada esfera de governo, sem prejuízo das funções do Poder Legislativo, com duas instâncias colegiadas: a Conferência de Saúde e o Conselho de Saúde.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "duas instâncias colegiadas ... Conferência ... Conselho",
    cognitivo: {
      motivo: "Contraexemplo: numeral exato que corresponde ao art. 1º.",
      palavraCritica: "duas instâncias",
    },
    comentario: {
      resolucao: "CERTO. É o art. 1º, caput. São exatamente duas — Conferência e Conselho —, em cada esfera de governo, e a ressalva quanto ao Legislativo deixa claro que o controle social não substitui o controle parlamentar. Comissões intergestores (CIT, CIB, CIR) não são instâncias de controle social, e sim de pactuação entre gestores.",
      fundamento: "Lei nº 8.142/1990, art. 1º, caput.",
      macete: "Controle social: Conferência (a cada 4 anos) e Conselho (permanente). Só esses dois.",
      erroComum: "Incluir as comissões intergestores entre as instâncias colegiadas do art. 1º.",
      comoBancaPensa: "Numeral fechado num rol que é mesmo taxativo."
    }
  },
  {
    id: "SUS-084", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Conferência de Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.83,
    enunciado: "Ao contrário do Conselho de Saúde, que é órgão de caráter permanente, a Conferência de Saúde tem natureza episódica e função propositiva, reunindo-se em intervalos plurianuais para avaliar a situação de saúde e propor as diretrizes da política do respectivo nível de governo.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "Conselho ... permanente ... Conferência ... episódica e função propositiva",
    cognitivo: {
      motivo: "Contraexemplo: as duas instâncias colegiadas contrastadas corretamente, sem inversão.",
      palavraCritica: "natureza episódica e função propositiva",
    },
    comentario: {
      resolucao: "CERTO. O contraste está correto nas duas pontas. O Conselho é permanente e DELIBERATIVO — decide e fiscaliza continuamente. A Conferência é episódica (a cada quatro anos) e PROPOSITIVA — avalia e propõe diretrizes, sem gerir o sistema no dia a dia. Confundir as duas naturezas é o erro mais frequente da matéria, e aqui a atribuição está certa.",
      fundamento: "Lei nº 8.142/1990, art. 1º, §§1º e 2º.",
      macete: "Conferência propõe de tempos em tempos; Conselho delibera o tempo todo.",
      erroComum: "Marcar ERRADO por desconfiar de item que compara as duas instâncias.",
      comoBancaPensa: "Apresenta corretamente o par que costuma inverter, punindo a resposta por formato."
    }
  },
  {
    id: "SUS-085", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Conselho de Saúde — natureza",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.85,
    enunciado: "O Conselho de Saúde é órgão colegiado de caráter temporário e consultivo, cabendo-lhe opinar sobre a formulação de estratégias, sem poder decisório sobre a execução da política de saúde.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "caráter temporário e consultivo ... sem poder decisório",
    cognitivo: {
      motivo: "Cobrar a natureza permanente e deliberativa do Conselho.",
      palavraCritica: "temporário e consultivo",
    },
    comentario: {
      resolucao: "ERRADO. O Conselho de Saúde é órgão colegiado de caráter PERMANENTE e DELIBERATIVO (art. 1º, §2º). Atua na formulação de estratégias E no controle da execução da política de saúde, inclusive nos aspectos econômicos e financeiros. Suas decisões são homologadas pelo chefe do poder legalmente constituído em cada esfera — homologação que é ato vinculado quanto à legalidade, não um veto discricionário.",
      fundamento: "Lei nº 8.142/1990, art. 1º, §2º; Resolução CNS nº 453/2012.",
      macete: "Conselho: permanente e deliberativo. Conferência: periódica e propositiva.",
      erroComum: "Tratar o Conselho como órgão meramente opinativo.",
      comoBancaPensa: "Inverte os dois adjetivos que definem a força jurídica do colegiado."
    }
  },
  {
    id: "SUS-086", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Paridade",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.86,
    enunciado: "A representação dos usuários nos Conselhos e Conferências de Saúde será paritária em relação ao conjunto dos demais segmentos, o que corresponde, na prática, a cinquenta por cento das vagas.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "paritária em relação ao conjunto dos demais segmentos ... cinquenta por cento",
    cognitivo: {
      motivo: "Cobrar o significado exato da paridade, que não é divisão igual entre todos os segmentos.",
      palavraCritica: "em relação ao conjunto dos demais segmentos",
    },
    comentario: {
      resolucao: "CERTO. É o art. 1º, §4º. A paridade é dos usuários contra TODOS OS OUTROS somados — 50% usuários, e os demais 50% repartidos entre trabalhadores da saúde (25%), gestores e prestadores (25%), na forma da Resolução CNS 453/2012. Não é 1/3 para cada um dos três segmentos, que é o erro clássico.",
      fundamento: "Lei nº 8.142/1990, art. 1º, §4º; Resolução CNS nº 453/2012.",
      macete: "Usuários 50%. Trabalhadores 25%. Gestores e prestadores 25%.",
      erroComum: "Dividir em três partes iguais por interpretar 'paritária' como 'igual entre todos'.",
      comoBancaPensa: "O número é correto, mas exige entender que a paridade se mede contra a soma dos outros."
    }
  },
  {
    id: "SUS-087", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Art. 4º — requisitos para repasse",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.79,
    enunciado: "Para receberem os recursos federais destinados à cobertura das ações e serviços de saúde, os municípios, os estados e o Distrito Federal deverão contar com Fundo de Saúde, Conselho de Saúde, plano de saúde, relatórios de gestão, contrapartida de recursos no respectivo orçamento e Comissão de elaboração do Plano de Carreira, Cargos e Salários.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Fundo ... Conselho ... plano ... relatórios ... contrapartida ... Plano de Carreira",
    cognitivo: {
      motivo: "Cobrar o rol completo de condicionantes do repasse, item de alta recorrência.",
      palavraCritica: "Comissão de elaboração do Plano de Carreira, Cargos e Salários",
    },
    comentario: {
      resolucao: "CERTO. São os seis incisos do art. 4º. O mais esquecido é o último — a Comissão de elaboração do PCCS —, e é justamente ele que a banca costuma suprimir ou substituir. Note que a exigência é da COMISSÃO de elaboração, com prazo de dois anos para a conclusão do plano, e não do plano já pronto.",
      fundamento: "Lei nº 8.142/1990, art. 4º, I a VI.",
      macete: "Fundo, Conselho, Plano, Relatórios, Contrapartida e Comissão do PCCS. Seis.",
      erroComum: "Esquecer a Comissão do PCCS ou trocá-la pelo plano concluído.",
      comoBancaPensa: "Item de literalidade que cobra a integralidade de um rol de seis."
    }
  },
  {
    id: "SUS-088", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Art. 3º — repasse automático",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "Os recursos do Fundo Nacional de Saúde serão alocados como despesas de custeio e capital do Ministério da Saúde, de seus órgãos e entidades da administração direta e indireta, e ainda como investimentos previstos em lei orçamentária, sendo repassados de forma regular e automática para municípios, estados e Distrito Federal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "regular e automática",
    cognitivo: {
      motivo: "Cobrar a modalidade de transferência fundo a fundo.",
      palavraCritica: "regular e automática",
    },
    comentario: {
      resolucao: "CERTO. É a conjugação dos arts. 2º e 3º. A expressão 'regular e automática' define a transferência fundo a fundo: os recursos saem do Fundo Nacional de Saúde direto para os fundos estaduais e municipais, sem necessidade de convênio a cada repasse. É o mecanismo que operacionaliza a descentralização financeira do SUS.",
      fundamento: "Lei nº 8.142/1990, arts. 2º e 3º, caput.",
      macete: "Fundo a fundo: regular e automático, sem convênio caso a caso.",
      erroComum: "Supor que cada repasse depende de instrumento específico.",
      comoBancaPensa: "Item correto cuja expressão-chave é o par de adjetivos."
    }
  },
  {
    id: "SUS-089", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Composição do Conselho Nacional",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.6,
    enunciado: "O Conselho Nacional de Secretários de Saúde e o Conselho Nacional de Secretarias Municipais de Saúde têm representação assegurada no Conselho Nacional de Saúde.",
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "representação assegurada no Conselho Nacional de Saúde",
    cognitivo: {
      motivo: "Cobrar a presença dos gestores estaduais e municipais no CNS.",
      palavraCritica: "representação assegurada",
    },
    comentario: {
      resolucao: "CERTO. É o art. 1º, §3º. CONASS e CONASEMS têm assento garantido no Conselho Nacional de Saúde, integrando o segmento de gestores. Isso não conflita com a paridade dos usuários: eles ocupam parte dos 50% reservados ao conjunto dos demais segmentos.",
      fundamento: "Lei nº 8.142/1990, art. 1º, §3º.",
      macete: "CONASS e CONASEMS sentam no CNS, no lado dos gestores.",
      erroComum: "Supor que o CNS é composto apenas por usuários e trabalhadores.",
      comoBancaPensa: "Item correto que testa se o candidato conhece a composição, e não só a paridade."
    }
  },
  {
    id: "SUS-090", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Convocação da Conferência",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.62,
    enunciado: "A convocação da Conferência de Saúde compete exclusivamente ao Poder Executivo, não podendo o Conselho de Saúde convocá-la em nenhuma hipótese.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente ao Poder Executivo ... em nenhuma hipótese",
    cognitivo: {
      motivo: "Cobrar a competência extraordinária do Conselho para convocar a Conferência.",
      palavraCritica: "exclusivamente ... nenhuma hipótese",
    },
    comentario: {
      resolucao: "ERRADO. O art. 1º, §1º, prevê convocação pelo Poder Executivo OU, extraordinariamente, pelo próprio CONSELHO DE SAÚDE. A previsão é relevante politicamente: impede que um Executivo omisso inviabilize o principal fórum de participação social ao simplesmente não convocá-lo.",
      fundamento: "Lei nº 8.142/1990, art. 1º, §1º.",
      macete: "Executivo convoca em regra; o Conselho pode convocar extraordinariamente.",
      erroComum: "Ler a convocação como monopólio do Executivo.",
      comoBancaPensa: "Fecha com dois absolutos uma competência que a lei divide."
    }
  },
  {
    id: "SUS-091", disciplina: "Legislação Aplicada ao SUS", assunto: "Resolução CNS 453/2012", subassunto: "Presidência do Conselho",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.63,
    enunciado: "A presidência do Conselho de Saúde cabe necessariamente ao secretário de saúde da respectiva esfera de governo, por força de sua condição de gestor do sistema.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "necessariamente ao secretário de saúde",
    cognitivo: {
      motivo: "Cobrar a autonomia do Conselho quanto à escolha de seu presidente.",
      palavraCritica: "necessariamente",
    },
    comentario: {
      resolucao: "ERRADO. A Resolução CNS 453/2012 determina que o Conselho de Saúde eleja seu presidente ou mesa diretora entre os conselheiros, em reunião plenária — não há vinculação ao cargo de secretário de saúde. Vincular a presidência ao gestor esvaziaria a função de controle social, já que o controlado presidiria o órgão controlador.",
      fundamento: "Resolução CNS nº 453/2012, Quarta Diretriz.",
      macete: "O Conselho elege quem o preside. Não é cargo do secretário por direito.",
      erroComum: "Presumir que o gestor preside o colegiado por ser autoridade máxima da pasta.",
      comoBancaPensa: "Cria vinculação hierárquica que contraria a lógica do controle social."
    }
  },
  {
    id: "SUS-092", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Descumprimento dos requisitos",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.58,
    enunciado: "O não atendimento pelos municípios ou pelos estados dos requisitos estabelecidos para o recebimento dos recursos federais implica que estes sejam administrados, respectivamente, pelos estados ou pela União.",
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "administrados, respectivamente, pelos estados ou pela União",
    cognitivo: {
      motivo: "Cobrar a consequência do descumprimento dos requisitos do art. 4º.",
      palavraCritica: "respectivamente",
    },
    comentario: {
      resolucao: "CERTO. É o art. 4º, parágrafo único. A consequência não é a perda do recurso — a população não pode ser penalizada pela omissão do gestor —, mas a administração pelo ente imediatamente superior: o estado assume o do município inadimplente, e a União assume o do estado. O advérbio 'respectivamente' organiza essa correspondência.",
      fundamento: "Lei nº 8.142/1990, art. 4º, parágrafo único.",
      macete: "Não cumpriu? Não perde o dinheiro: quem administra passa a ser o ente de cima.",
      erroComum: "Supor que o descumprimento acarreta cancelamento do repasse.",
      comoBancaPensa: "Item correto cuja leitura exige atenção à ordem estabelecida por 'respectivamente'."
    }
  },

  /* ===================== LC 141/2012 — FINANCIAMENTO ===================== */
  {
    id: "SUS-093", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "Percentual mínimo dos estados",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.87,
    enunciado: "Os estados e o Distrito Federal aplicarão anualmente em ações e serviços públicos de saúde, no mínimo, doze por cento da arrecadação dos impostos a que se refere o art. 155 da Constituição Federal, deduzidas as parcelas transferidas aos respectivos municípios.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "doze por cento ... deduzidas as parcelas transferidas aos respectivos municípios",
    cognitivo: {
      motivo: "Cobrar o percentual estadual e a dedução das transferências, base de cálculo que a banca omite.",
      palavraCritica: "deduzidas as parcelas transferidas",
    },
    comentario: {
      resolucao: "CERTO. É o art. 6º da LC 141/2012. Dois pontos: o percentual estadual é de 12%, e a base de cálculo desconta o que o estado repassa aos municípios — do contrário, o mesmo recurso seria contado duas vezes, no estado e no município que o recebe.",
      fundamento: "LC nº 141/2012, art. 6º; CF/1988, art. 198, §2º, II.",
      macete: "Estado 12%, Município 15%. E sempre líquido das transferências.",
      erroComum: "Trocar os percentuais de estados e municípios entre si.",
      comoBancaPensa: "Traz o número correto num item que também cobra a base de cálculo."
    }
  },
  {
    id: "SUS-094", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "Percentual mínimo dos municípios",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.88,
    enunciado: "Os municípios e o Distrito Federal aplicarão anualmente em ações e serviços públicos de saúde, no mínimo, doze por cento da arrecadação dos impostos a que se refere o art. 156 da Constituição Federal e dos recursos de que tratam os arts. 158 e 159.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "municípios ... doze por cento",
    cognitivo: {
      motivo: "Cobrar o percentual municipal pela troca com o estadual.",
      palavraCritica: "doze por cento",
    },
    comentario: {
      resolucao: "ERRADO. O percentual municipal é de QUINZE por cento (art. 7º da LC 141/2012); 12% é o dos estados. A troca entre os dois números é a pegadinha mais recorrente do tema. O município aplica mais proporcionalmente porque é o principal executor das ações e serviços de saúde.",
      fundamento: "LC nº 141/2012, arts. 6º e 7º; CF/1988, art. 198, §2º, II e III.",
      macete: "Quem executa mais, aplica mais: município 15%, estado 12%.",
      erroComum: "Memorizar os dois números sem fixar de quem é cada um.",
      comoBancaPensa: "Permuta dois percentuais que o candidato conhece, mas frequentemente não sabe atribuir."
    }
  },
  {
    id: "SUS-095", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "Distrito Federal",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.6,
    enunciado: "O Distrito Federal aplicará, anualmente, em ações e serviços públicos de saúde, no mínimo doze por cento do produto da arrecadação dos impostos de competência estadual e quinze por cento do produto da arrecadação dos impostos de competência municipal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "doze por cento ... competência estadual ... quinze por cento ... competência municipal",
    cognitivo: {
      motivo: "Cobrar a aplicação combinada dos dois percentuais ao DF.",
      palavraCritica: "combinação dos dois percentuais",
    },
    comentario: {
      resolucao: "CERTO. É o art. 7º, parágrafo único, combinado com o art. 6º. Como o DF acumula competências estaduais e municipais, aplica cada percentual sobre a respectiva base: 12% sobre os impostos estaduais e 15% sobre os municipais. Não existe percentual único para o DF.",
      fundamento: "LC nº 141/2012, arts. 6º e 7º, parágrafo único.",
      macete: "DF acumula competências, então acumula os dois percentuais, cada um na sua base.",
      erroComum: "Aplicar ao DF um percentual único.",
      comoBancaPensa: "Item correto que exige entender a natureza híbrida do DF."
    }
  },
  {
    id: "SUS-096", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "Art. 3º — o que são ASPS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.75,
    enunciado: "Consideram-se despesas com ações e serviços públicos de saúde as referentes a vigilância em saúde, atenção integral e universal à saúde, capacitação de pessoal do SUS, produção e distribuição de medicamentos e saneamento básico de domicílios situados em áreas habitadas por população carente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "saneamento básico de domicílios ... população carente",
    cognitivo: {
      motivo: "Cobrar as hipóteses em que saneamento conta como ASPS, exceção pouco lembrada.",
      palavraCritica: "áreas habitadas por população carente",
    },
    comentario: {
      resolucao: "CERTO. É o art. 3º, I a XI. O saneamento básico entra como ASPS em hipóteses delimitadas — domicílios ou pequenas comunidades em áreas de população de baixa renda, e ações de saneamento em escolas conveniadas —, justamente porque a regra geral do art. 4º exclui o saneamento de caráter universal. A distinção entre os dois artigos é o núcleo do tema.",
      fundamento: "LC nº 141/2012, art. 3º, I a XI.",
      macete: "Saneamento focalizado em área carente: conta. Saneamento para toda a cidade: não conta.",
      erroComum: "Excluir todo saneamento da conta de ASPS.",
      comoBancaPensa: "Item correto que cobra justamente a exceção dentro da vedação."
    }
  },
  {
    id: "SUS-097", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "Art. 4º — o que não é ASPS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.82,
    enunciado: "As despesas com assistência à saúde que não atenda ao princípio da universalidade, como a destinada exclusivamente a servidores públicos e seus dependentes, computam-se para fins de apuração do percentual mínimo em ações e serviços públicos de saúde.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "exclusivamente a servidores públicos ... computam-se",
    cognitivo: {
      motivo: "Cobrar a vedação do art. 4º, que exclui a assistência não universal.",
      palavraCritica: "computam-se",
    },
    comentario: {
      resolucao: "ERRADO. O art. 4º, III, exclui expressamente a assistência à saúde que não atenda ao princípio da universalidade — hipótese típica dos planos de saúde de servidores. A razão é coerente: o piso constitucional existe para custear o SUS, que é universal, e não benefício restrito a uma categoria. Também não contam pagamento de aposentadorias e pensões, limpeza urbana, merenda escolar e saneamento de caráter universal.",
      fundamento: "LC nº 141/2012, art. 4º, I a VII.",
      macete: "Se não é para todos, não conta como ASPS.",
      erroComum: "Incluir na conta gastos com assistência a servidores.",
      comoBancaPensa: "Inverte o sentido de uma vedação expressa, usando linguagem técnica correta."
    }
  },
  {
    id: "SUS-098", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "Art. 4º — aposentadorias e pensões",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.73,
    enunciado: "Não constituem despesas com ações e serviços públicos de saúde, para fins de apuração do mínimo constitucional, o pagamento de aposentadorias e pensões, inclusive dos servidores da área da saúde.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inclusive dos servidores da área da saúde",
    cognitivo: {
      motivo: "Cobrar a exclusão de inativos, mesmo os da própria saúde.",
      palavraCritica: "inclusive dos servidores da área da saúde",
    },
    comentario: {
      resolucao: "CERTO. É o art. 4º, I. A palavra decisiva é 'inclusive': mesmo o aposentado que trabalhou a vida inteira na saúde tem seus proventos fora da conta, porque aposentadoria é despesa previdenciária, não ação de saúde. Contabilizá-la inflaria artificialmente o cumprimento do piso sem qualquer serviço prestado à população.",
      fundamento: "LC nº 141/2012, art. 4º, I.",
      macete: "Inativo não presta serviço de saúde: seu provento não conta no piso.",
      erroComum: "Incluir inativos da saúde por associação com a área.",
      comoBancaPensa: "Item de literalidade em que o 'inclusive' fecha a brecha que o candidato imagina."
    }
  },
  {
    id: "SUS-099", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "Art. 36 — relatório de gestão",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade distorcida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.78,
    enunciado: "O gestor do SUS em cada ente da Federação elaborará relatório detalhado referente ao trimestre anterior, contendo, no mínimo, montante e fonte dos recursos aplicados no período e auditorias realizadas ou em fase de execução.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "referente ao trimestre anterior",
    cognitivo: {
      motivo: "Cobrar a periodicidade do relatório de gestão, alterada pela LC 141.",
      palavraCritica: "trimestre",
    },
    comentario: {
      resolucao: "ERRADO. O relatório é QUADRIMESTRAL, não trimestral (art. 36 da LC 141/2012). A periodicidade trimestral constava da redação anterior da Lei 8.689/1993 e foi substituída — por isso o erro é tentador para quem estudou por material desatualizado. O conteúdo mínimo descrito no item, esse sim, está correto.",
      fundamento: "LC nº 141/2012, art. 36, caput e incisos.",
      macete: "Relatório de gestão: quadrimestral. Três por ano.",
      erroComum: "Repetir a periodicidade trimestral da legislação revogada.",
      comoBancaPensa: "Usa a redação antiga do dispositivo, que ainda circula em materiais de estudo."
    }
  },
  {
    id: "SUS-100", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "Art. 36 §5º — audiência pública",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.7,
    enunciado: "O gestor do SUS apresentará, até o fim dos meses de maio, setembro e fevereiro, em audiência pública na casa legislativa do respectivo ente, o relatório sobre o montante e a fonte dos recursos aplicados, as auditorias realizadas e a oferta e produção de serviços na rede assistencial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "maio, setembro e fevereiro ... audiência pública na casa legislativa",
    cognitivo: {
      motivo: "Cobrar os meses exatos da prestação de contas quadrimestral em audiência pública.",
      palavraCritica: "maio, setembro e fevereiro",
    },
    comentario: {
      resolucao: "CERTO. É o art. 36, §5º. Os meses seguem os quadrimestres: janeiro-abril presta contas até maio; maio-agosto até setembro; setembro-dezembro até fevereiro do ano seguinte. A audiência é na casa legislativa — Câmara Municipal, Assembleia ou Congresso —, o que soma controle parlamentar ao controle social exercido pelos conselhos.",
      fundamento: "LC nº 141/2012, art. 36, §5º.",
      macete: "Maio, setembro e fevereiro: sempre no mês seguinte ao fim do quadrimestre.",
      erroComum: "Confundir os meses ou supor que a apresentação é ao conselho de saúde.",
      comoBancaPensa: "Item de literalidade com três números exatos, que o candidato tende a não memorizar."
    }
  },
  {
    id: "SUS-101", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "Fundo de Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "Os recursos destinados às ações e serviços públicos de saúde devem ser movimentados, até a sua destinação final, exclusivamente por meio de fundo de saúde, que será acompanhado pelo respectivo conselho de saúde.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "até a sua destinação final ... exclusivamente por meio de fundo de saúde",
    cognitivo: {
      motivo: "Contraexemplo: exigência absoluta que corresponde ao art. 2º, parágrafo único.",
      palavraCritica: "exclusivamente ... até a sua destinação final",
    },
    comentario: {
      resolucao: "CERTO. É o art. 2º, parágrafo único, da LC 141/2012. A exclusividade é real e tem função de controle: obrigar a passagem por fundo específico até o pagamento final impede que recursos da saúde se misturem ao caixa único e sejam desviados para outras finalidades. O acompanhamento pelo conselho fecha o desenho.",
      fundamento: "LC nº 141/2012, art. 2º, parágrafo único.",
      macete: "Dinheiro da saúde entra e sai pelo fundo de saúde. Sem atalho.",
      erroComum: "Marcar ERRADO por reflexo diante de 'exclusivamente'.",
      comoBancaPensa: "Advérbio de exclusão em regra que é mesmo sem exceção."
    }
  },
  {
    id: "SUS-102", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "SIOPS e transparência",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.65,
    enunciado: "A União, os estados, o Distrito Federal e os municípios deverão comprovar a observância do mínimo constitucional em saúde mediante o registro de dados no Sistema de Informações sobre Orçamentos Públicos em Saúde (SIOPS), cuja alimentação é obrigatória.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "SIOPS ... alimentação é obrigatória",
    cognitivo: {
      motivo: "Cobrar o instrumento oficial de comprovação do piso.",
      palavraCritica: "obrigatória",
    },
    comentario: {
      resolucao: "CERTO. É o art. 39 da LC 141/2012. O SIOPS é o sistema no qual todos os entes registram receitas e despesas com saúde, e sua alimentação é obrigatória — o descumprimento pode acarretar suspensão de transferências voluntárias. É a base de dados que permite ao Tribunal de Contas e à sociedade aferir o cumprimento do piso.",
      fundamento: "LC nº 141/2012, arts. 39 e 40.",
      macete: "SIOPS: onde se prova que o mínimo foi aplicado.",
      erroComum: "Tratar o SIOPS como sistema facultativo de gestão.",
      comoBancaPensa: "Item correto que cobra o instrumento, e não apenas o dever."
    }
  },
  {
    id: "SUS-103", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "Descumprimento do mínimo",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.6,
    enunciado: "Na hipótese de o ente da Federação não aplicar o percentual mínimo em ações e serviços públicos de saúde, a diferença deverá ser acrescida ao montante mínimo do exercício subsequente ao da apuração, sem prejuízo das sanções cabíveis.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acrescida ao montante mínimo do exercício subsequente",
    cognitivo: {
      motivo: "Cobrar a consequência da aplicação a menor, que não se extingue com o exercício.",
      palavraCritica: "acrescida ao montante mínimo do exercício subsequente",
    },
    comentario: {
      resolucao: "CERTO. É o art. 25 da LC 141/2012. A dívida com a saúde não prescreve com o encerramento do exercício: o que faltou entra como acréscimo ao piso do ano seguinte. Somam-se a isso as sanções da Lei de Responsabilidade Fiscal e a possibilidade de intervenção, prevista na Constituição para o descumprimento do mínimo em saúde.",
      fundamento: "LC nº 141/2012, art. 25; CF/1988, arts. 34, VII, 'e', e 35, III.",
      macete: "Deixou de aplicar? A diferença é cobrada no ano seguinte, além das sanções.",
      erroComum: "Supor que o descumprimento se resolve apenas com sanção ao gestor.",
      comoBancaPensa: "Item correto que cobra o efeito financeiro, além do punitivo."
    }
  },
  {
    id: "SUS-104", disciplina: "Legislação Aplicada ao SUS", assunto: "LC 141/2012 — financiamento", subassunto: "Rateio e transferências",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.64,
    enunciado: "O rateio dos recursos da União vinculados a ações e serviços públicos de saúde e repassados a estados, ao Distrito Federal e a municípios observará exclusivamente o critério populacional, vedada a consideração de indicadores epidemiológicos ou de desempenho.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "exclusivamente o critério populacional ... vedada a consideração",
    cognitivo: {
      motivo: "Cobrar a combinação de critérios no rateio, contra a redução ao populacional.",
      palavraCritica: "exclusivamente ... vedada",
    },
    comentario: {
      resolucao: "ERRADO. O art. 17 da LC 141/2012 determina que o rateio observe as necessidades de saúde da população, considerando as dimensões epidemiológica, demográfica, socioeconômica, espacial e de capacidade de oferta — com o objetivo de reduzir desigualdades regionais. O critério populacional é um entre vários, e nada é vedado nesse sentido. O item confunde essa regra com o art. 35, §1º, da Lei 8.080, que reserva metade dos recursos ao quantitativo populacional.",
      fundamento: "LC nº 141/2012, art. 17; Lei nº 8.080/1990, art. 35, §1º.",
      macete: "Rateio combina critérios e mira reduzir desigualdade regional.",
      erroComum: "Reduzir o rateio ao número de habitantes.",
      comoBancaPensa: "Fecha com 'exclusivamente' e 'vedada' uma regra que é expressamente multifatorial."
    }
  },

  /* ===================== DECRETO 7.508/2011 ===================== */
  {
    id: "SUS-105", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Região de Saúde — instituição",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.76,
    enunciado: "As Regiões de Saúde serão instituídas pela União, mediante portaria do Ministério da Saúde, ouvidos os estados e municípios interessados.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "instituídas pela União ... portaria do Ministério da Saúde",
    cognitivo: {
      motivo: "Cobrar quem institui a Região de Saúde.",
      palavraCritica: "pela União",
    },
    comentario: {
      resolucao: "ERRADO. As Regiões de Saúde são instituídas pelo ESTADO, em articulação com os municípios, respeitadas as diretrizes gerais pactuadas na CIT (art. 4º do Decreto 7.508/2011). A lógica é territorial: cabe ao estado organizar o espaço regional dentro de seu território. Regiões fronteiriças, com outro país, e interestaduais têm regras próprias, com participação da União.",
      fundamento: "Decreto nº 7.508/2011, art. 4º e §§.",
      macete: "Quem desenha a Região de Saúde é o estado, junto com os municípios.",
      erroComum: "Atribuir à União a instituição das regiões.",
      comoBancaPensa: "Troca o ente competente num dispositivo sobre organização territorial."
    }
  },
  {
    id: "SUS-106", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Região de Saúde — referência para transferências",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.7,
    enunciado: "As Regiões de Saúde têm finalidade meramente descritiva do território, não podendo servir de referência para as transferências de recursos entre os entes federativos, que se orientam apenas por critérios populacionais.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "não podendo servir de referência para as transferências ... apenas por critérios populacionais",
    cognitivo: {
      motivo: "Cobrar a função financeira da Região de Saúde, além da territorial.",
      palavraCritica: "meramente descritiva ... apenas por critérios populacionais",
    },
    comentario: {
      resolucao: "ERRADO. O art. 6º do Decreto 7.508/2011 é expresso: as Regiões de Saúde SERÃO referência para as transferências de recursos entre os entes federativos. A região não é recorte apenas geográfico — é a unidade de planejamento e de financiamento da rede. E o rateio combina critérios epidemiológicos, demográficos, socioeconômicos e de capacidade de oferta, não só população.",
      fundamento: "Decreto nº 7.508/2011, arts. 5º e 6º; LC nº 141/2012, art. 17.",
      macete: "A Região de Saúde organiza o serviço e serve de base para o dinheiro.",
      erroComum: "Reduzir a Região de Saúde a divisão administrativa sem efeito financeiro.",
      comoBancaPensa: "Esvazia a função de um instituto com duplo fecho: 'meramente' e 'apenas'."
    }
  },
  {
    id: "SUS-107", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Portas de Entrada",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.85,
    enunciado: "São Portas de Entrada às ações e aos serviços de saúde nas Redes de Atenção à Saúde os serviços de atenção primária, de atenção de urgência e emergência, de atenção psicossocial e os serviços hospitalares de alta complexidade.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "serviços hospitalares de alta complexidade",
    cognitivo: {
      motivo: "Cobrar o quarto item do rol de portas de entrada, que a banca substitui.",
      palavraCritica: "hospitalares de alta complexidade",
    },
    comentario: {
      resolucao: "ERRADO. A quarta porta é a dos SERVIÇOS ESPECIAIS DE ACESSO ABERTO (art. 9º, IV) — e não serviços hospitalares de alta complexidade. A diferença é conceitual: porta de entrada é onde se ingressa no sistema sem encaminhamento prévio; alta complexidade hospitalar é destino de referência, acessado por regulação. Aceitar o item inverteria a lógica de ordenação da rede pela atenção primária.",
      fundamento: "Decreto nº 7.508/2011, art. 9º, I a IV.",
      macete: "Portas: primária, urgência, psicossocial e especiais de acesso aberto.",
      erroComum: "Incluir o hospital de alta complexidade como porta de entrada.",
      comoBancaPensa: "Substitui o item menos memorizado do rol por outro que soa importante."
    }
  },
  {
    id: "SUS-108", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Mapa da Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "Mapa da Saúde é a descrição geográfica da distribuição de recursos humanos e de ações e serviços de saúde ofertados pelo SUS e pela iniciativa privada, considerando-se a capacidade instalada existente, os investimentos e o desempenho aferido a partir dos indicadores de saúde do sistema.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ofertados pelo SUS e pela iniciativa privada",
    cognitivo: {
      motivo: "Cobrar que o Mapa da Saúde inclui a rede privada, e não só a pública.",
      palavraCritica: "e pela iniciativa privada",
    },
    comentario: {
      resolucao: "CERTO. É o art. 2º, III, do Decreto 7.508/2011. O detalhe cobrado é a inclusão da iniciativa privada: planejar exige conhecer toda a capacidade instalada do território, inclusive a que não pertence ao SUS, sob pena de superestimar carências ou duplicar investimentos. O Mapa é insumo do planejamento e da definição das Regiões de Saúde.",
      fundamento: "Decreto nº 7.508/2011, art. 2º, III.",
      macete: "O Mapa da Saúde enxerga tudo que existe no território — público e privado.",
      erroComum: "Restringir o Mapa da Saúde à rede pública.",
      comoBancaPensa: "Item correto cuja pegadinha correlata é suprimir a menção ao privado."
    }
  },
  {
    id: "SUS-109", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "RENASES",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.78,
    enunciado: "A Relação Nacional de Ações e Serviços de Saúde (RENASES) compreende todas as ações e serviços que o SUS oferece ao usuário para atendimento da integralidade da assistência à saúde, cabendo ao Ministério da Saúde dispor sobre sua composição.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "RENASES ... ações e serviços ... integralidade",
    cognitivo: {
      motivo: "Contraexemplo: RENASES e RENAME, par que a banca troca, aqui descrito corretamente.",
      palavraCritica: "ações e serviços",
    },
    comentario: {
      resolucao: "CERTO. É o art. 21 do Decreto 7.508/2011. A RENASES trata de AÇÕES E SERVIÇOS; a RENAME, de MEDICAMENTOS. Estados, DF e municípios podem adotar relações específicas e complementares, desde que financiadas com recursos próprios. A revisão da RENASES é feita pelo Ministério da Saúde, ouvidos o CNS e a CIT.",
      fundamento: "Decreto nº 7.508/2011, arts. 21 e 22.",
      macete: "RENASES = Serviços. RENAME = Medicamentos. A sigla entrega.",
      erroComum: "Marcar ERRADO por desconfiar de item que descreve corretamente uma das duas relações.",
      comoBancaPensa: "Apresenta corretamente um dos dois róis que costuma permutar."
    }
  },
  {
    id: "SUS-110", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "RENAME",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.74,
    enunciado: "O acesso universal e igualitário à assistência farmacêutica no SUS pressupõe estar o usuário assistido por ações e serviços de saúde do SUS, ter o medicamento prescrito por profissional de saúde no exercício regular de suas funções no SUS e estar a prescrição em conformidade com a RENAME e os protocolos clínicos.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "pressupõe ... assistido ... prescrito por profissional ... conformidade com a RENAME",
    cognitivo: {
      motivo: "Contraexemplo: três requisitos cumulativos que parecem restrição indevida e constam do decreto.",
      palavraCritica: "pressupõe",
    },
    comentario: {
      resolucao: "CERTO. É o art. 28 do Decreto 7.508/2011, com os três requisitos cumulativos. Parecem restringir o acesso universal, mas o organizam: garantem que a dispensação siga vínculo assistencial, prescrição qualificada e base técnica. É dispositivo central nas ações judiciais de medicamentos, ao lado do art. 19-T da Lei 8.080.",
      fundamento: "Decreto nº 7.508/2011, art. 28, I a III.",
      macete: "Para receber o medicamento: estar no SUS, ter prescrição do SUS e estar na RENAME.",
      erroComum: "Marcar ERRADO por entender que os requisitos contrariam a universalidade.",
      comoBancaPensa: "Enumera condições que soam como barreiras, mas estão expressas na norma."
    }
  },
  {
    id: "SUS-111", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "COAP",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.71,
    enunciado: "O Contrato Organizativo da Ação Pública da Saúde definirá as responsabilidades individuais e solidárias dos entes federativos com relação às ações e serviços de saúde, os indicadores e as metas de saúde, os critérios de avaliação de desempenho e a forma de controle e fiscalização da sua execução.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "responsabilidades individuais e solidárias ... indicadores e as metas ... controle e fiscalização",
    cognitivo: {
      motivo: "Cobrar o conteúdo do COAP, instrumento que formaliza a organização regional.",
      palavraCritica: "individuais e solidárias",
    },
    comentario: {
      resolucao: "CERTO. É o art. 33 do Decreto 7.508/2011. O COAP é o instrumento jurídico que dá concretude à região: transforma pactuação política em obrigação contratual, com metas e indicadores. A expressão 'individuais e solidárias' é o núcleo — cada ente responde pelo seu, e todos respondem pelo conjunto, o que sustenta a responsabilização solidária reconhecida pelo STF em matéria de saúde.",
      fundamento: "Decreto nº 7.508/2011, arts. 33 a 35.",
      macete: "COAP: contrato entre entes, com metas, indicadores e responsabilidade solidária.",
      erroComum: "Tratar o COAP como convênio de repasse financeiro.",
      comoBancaPensa: "Item de literalidade sobre o instrumento menos estudado do decreto."
    }
  },
  {
    id: "SUS-112", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Planejamento ascendente",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade distorcida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.77,
    enunciado: "O processo de planejamento da saúde será descendente e integrado, do nível federal até o local, ouvidos os respectivos conselhos de saúde, e compatibilizado com os planos de saúde das demais esferas.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "descendente ... do nível federal até o local",
    cognitivo: {
      motivo: "Cobrar o sentido do planejamento no SUS, que é ascendente.",
      palavraCritica: "descendente",
    },
    comentario: {
      resolucao: "ERRADO. O planejamento da saúde é ASCENDENTE e integrado, do nível LOCAL até o federal (art. 15 do Decreto 7.508/2011, e art. 36 da Lei 8.080). O sentido não é detalhe: parte-se das necessidades identificadas no município, que sobem e se compatibilizam nas instâncias superiores. Inverter a direção contraria a descentralização com direção única e a lógica de aproximação do gestor ao cidadão.",
      fundamento: "Decreto nº 7.508/2011, art. 15; Lei nº 8.080/1990, art. 36.",
      macete: "Planejamento sobe: do local para o federal. Ascendente.",
      erroComum: "Aplicar ao SUS a lógica hierárquica de cima para baixo.",
      comoBancaPensa: "Inverte uma única palavra que define toda a lógica de planejamento do sistema."
    }
  },
  {
    id: "SUS-113", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Comissão Intergestores Regional",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.66,
    enunciado: "A Comissão Intergestores Regional atua no âmbito regional, vinculada à Secretaria Estadual de Saúde para efeitos administrativos e operacionais, e pactua a organização e o funcionamento das ações e serviços de saúde integrados em Rede de Atenção à Saúde.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "âmbito regional ... vinculada à Secretaria Estadual de Saúde",
    cognitivo: {
      motivo: "Cobrar a CIR, terceira comissão intergestores, criada pelo decreto.",
      palavraCritica: "vinculada à Secretaria Estadual de Saúde",
    },
    comentario: {
      resolucao: "CERTO. É o art. 30, III, e o art. 31 do Decreto 7.508/2011. A CIR completa o desenho: CIT no nacional, CIB no estadual e CIR no regional. A vinculação à Secretaria Estadual é administrativa e operacional — não subordina as decisões, que seguem sendo pactuadas por consenso entre os gestores participantes.",
      fundamento: "Decreto nº 7.508/2011, arts. 30 e 31.",
      macete: "CIT nacional, CIB estadual, CIR regional.",
      erroComum: "Desconhecer a CIR ou confundi-la com a CIB.",
      comoBancaPensa: "Cobra a comissão mais recente, menos presente nos materiais antigos."
    }
  },
  {
    id: "SUS-114", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Serviços especiais de acesso aberto",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.6,
    enunciado: "Serviços especiais de acesso aberto são aqueles que prestam atendimento inicial à saúde do usuário no SUS sem necessidade de encaminhamento prévio, na forma de ato normativo do Ministério da Saúde.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem necessidade de encaminhamento prévio",
    cognitivo: {
      motivo: "Cobrar a definição da quarta porta de entrada.",
      palavraCritica: "sem necessidade de encaminhamento prévio",
    },
    comentario: {
      resolucao: "CERTO. É o art. 2º, VI, do Decreto 7.508/2011. A característica definidora é a dispensa de encaminhamento — o usuário acessa diretamente. Exemplos típicos são os serviços de atenção a pessoas vivendo com HIV/aids e os de tuberculose, em que a barreira do encaminhamento comprometeria o diagnóstico precoce e o controle epidemiológico.",
      fundamento: "Decreto nº 7.508/2011, art. 2º, VI, e art. 9º, IV.",
      macete: "Acesso aberto = entra sem encaminhamento.",
      erroComum: "Confundir com serviços de alta complexidade, que exigem regulação.",
      comoBancaPensa: "Cobra o conceito que completa o rol de portas de entrada."
    }
  },
  {
    id: "SUS-115", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Rede de Atenção à Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.73,
    enunciado: "O acesso universal, igualitário e ordenado às ações e serviços de saúde inicia-se pelas Portas de Entrada do SUS e completa-se na rede regionalizada e hierarquizada, de acordo com a complexidade do serviço, cabendo à atenção primária ordenar o acesso.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "inicia-se pelas Portas de Entrada ... atenção primária ordenar o acesso",
    cognitivo: {
      motivo: "Cobrar o papel ordenador da atenção primária na rede.",
      palavraCritica: "ordenar o acesso",
    },
    comentario: {
      resolucao: "CERTO. É a conjugação dos arts. 8º e 9º do Decreto 7.508/2011. O adjetivo 'ordenado' foi acrescido ao par 'universal e igualitário' justamente para expressar que há um caminho: entra-se pelas portas e avança-se conforme a complexidade. A atenção primária é a ordenadora da rede e coordenadora do cuidado — não é apenas o nível mais simples.",
      fundamento: "Decreto nº 7.508/2011, arts. 8º e 9º, parágrafo único.",
      macete: "Universal, igualitário e ORDENADO. A porta principal é a atenção primária.",
      erroComum: "Ler universalidade como direito de acessar qualquer serviço diretamente.",
      comoBancaPensa: "Item correto que concilia universalidade com organização da rede."
    }
  },
  {
    id: "SUS-116", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Mapa da Saúde e planejamento",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.58,
    enunciado: "O Plano de Saúde de cada ente federativo é elaborado com base exclusivamente nas metas definidas pelo Ministério da Saúde, sendo vedado ao município estabelecer objetivos próprios não previstos no plano nacional.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "exclusivamente nas metas definidas pelo Ministério ... vedado ao município",
    cognitivo: {
      motivo: "Cobrar a autonomia do ente no planejamento, coerente com o modelo ascendente.",
      palavraCritica: "exclusivamente ... vedado",
    },
    comentario: {
      resolucao: "ERRADO. O planejamento é ascendente e parte das necessidades locais; o Plano de Saúde é o instrumento em que cada ente expressa suas prioridades, compatibilizando-as — não subordinando-as integralmente — às demais esferas. Vedar objetivos próprios ao município contrariaria a direção única em cada esfera e a própria lógica do art. 15 do decreto.",
      fundamento: "Decreto nº 7.508/2011, arts. 15 a 19; Lei nº 8.080/1990, art. 36.",
      macete: "Compatibilizar não é obedecer. Cada ente planeja o seu.",
      erroComum: "Confundir integração de planos com subordinação hierárquica.",
      comoBancaPensa: "Transforma compatibilização em submissão, com 'exclusivamente' e 'vedado'."
    }
  },

  /* ===================== VIGILÂNCIA EM SAÚDE ===================== */
  {
    id: "SUS-117", disciplina: "Legislação Aplicada ao SUS", assunto: "Vigilância em saúde", subassunto: "Notificação compulsória imediata",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.84,
    enunciado: "A notificação compulsória imediata deve ser realizada pelo profissional de saúde ou responsável pelo serviço assistencial em até quarenta e oito horas, a partir do conhecimento da ocorrência de doença, agravo ou evento de saúde pública.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "quarenta e oito horas",
    cognitivo: {
      motivo: "Cobrar o prazo da notificação imediata, número que a banca altera.",
      palavraCritica: "quarenta e oito horas",
    },
    comentario: {
      resolucao: "ERRADO. O prazo da notificação compulsória IMEDIATA é de até 24 HORAS a partir do conhecimento do caso. A notificação semanal é a que se faz em até 7 dias. O prazo de 48 horas não existe nessa classificação — é número inventado, que se aproxima o bastante do correto para parecer plausível.",
      fundamento: "Portaria de Consolidação nº 4/2017 (MS) — notificação compulsória.",
      macete: "Imediata = 24 horas. Semanal = 7 dias. Só esses dois prazos.",
      erroComum: "Aceitar 48 horas por soar razoável para um prazo 'urgente'.",
      comoBancaPensa: "Insere prazo intermediário entre os dois verdadeiros, dificultando a rejeição imediata."
    }
  },
  {
    id: "SUS-118", disciplina: "Legislação Aplicada ao SUS", assunto: "Vigilância em saúde", subassunto: "Notificação semanal",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.79,
    enunciado: "A notificação compulsória semanal é aquela realizada em até sete dias, a partir do conhecimento da ocorrência de doença ou agravo, pelo responsável pelo estabelecimento de saúde à autoridade de saúde competente.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "em até sete dias",
    cognitivo: {
      motivo: "Contraexemplo: prazo numérico exato e verdadeiro, logo após um item cujo número era falso.",
      palavraCritica: "sete dias",
    },
    comentario: {
      resolucao: "CERTO. A notificação semanal é feita em até 7 dias a partir do conhecimento do caso. Reserva-se a doenças e agravos que não exigem resposta imediata de controle — hanseníase e tuberculose, por exemplo. A imediata, de 24 horas, cobre situações com potencial de disseminação rápida ou gravidade elevada.",
      fundamento: "Portaria de Consolidação nº 4/2017 (MS).",
      macete: "Semanal é literal: uma semana, 7 dias.",
      erroComum: "Marcar ERRADO por desconfiança generalizada de prazos.",
      comoBancaPensa: "Cobra o número correto para separar quem sabe de quem rejeita todo prazo."
    }
  },
  {
    id: "SUS-119", disciplina: "Legislação Aplicada ao SUS", assunto: "Vigilância em saúde", subassunto: "Responsáveis pela notificação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "A notificação compulsória é obrigatória apenas para médicos, não alcançando os demais profissionais de saúde nem os responsáveis por serviços públicos e privados de saúde.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "apenas para médicos",
    cognitivo: {
      motivo: "Cobrar o alcance subjetivo do dever de notificar.",
      palavraCritica: "apenas para médicos",
    },
    comentario: {
      resolucao: "ERRADO. A notificação compulsória é obrigatória para MÉDICOS, OUTROS PROFISSIONAIS DE SAÚDE e responsáveis por organizações e estabelecimentos públicos e privados de saúde e de ensino, na forma da Lei 6.259/1975 e das portarias do Ministério da Saúde. Restringi-la ao médico esvaziaria a vigilância — o fisioterapeuta, o enfermeiro e o gestor do serviço também respondem por esse dever.",
      fundamento: "Lei nº 6.259/1975, art. 8º; Portaria de Consolidação nº 4/2017 (MS).",
      macete: "Notificar é dever de todo profissional de saúde, não só do médico.",
      erroComum: "Atribuir o dever exclusivamente à categoria médica.",
      comoBancaPensa: "Restringe a um só profissional um dever que a norma distribui amplamente."
    }
  },
  {
    id: "SUS-120", disciplina: "Legislação Aplicada ao SUS", assunto: "Vigilância em saúde", subassunto: "Violência e notificação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.8,
    enunciado: "A violência sexual e a tentativa de suicídio integram a lista de notificação compulsória imediata, devendo ser comunicadas em até vinte e quatro horas à autoridade de saúde competente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "violência sexual e a tentativa de suicídio ... imediata ... vinte e quatro horas",
    cognitivo: {
      motivo: "Cobrar a inclusão da violência entre os eventos de notificação imediata, de aplicação direta na clínica.",
      palavraCritica: "imediata",
    },
    comentario: {
      resolucao: "CERTO. Violência sexual e tentativa de suicídio são de notificação IMEDIATA (24 horas), porque exigem acionamento rápido da rede de proteção e de cuidado. A violência interpessoal e autoprovocada em geral é de notificação compulsória, e a notificação independe de autorização da vítima — é ato de vigilância, distinto do registro policial.",
      fundamento: "Portaria de Consolidação nº 4/2017 (MS); Lei nº 10.778/2003; Lei nº 13.931/2019.",
      macete: "Violência sexual e tentativa de suicídio: 24 horas, sem exceção.",
      erroComum: "Classificar violência como notificação semanal.",
      comoBancaPensa: "Item correto de alto valor prático para profissionais de saúde."
    }
  },
  {
    id: "SUS-121", disciplina: "Legislação Aplicada ao SUS", assunto: "Vigilância em saúde", subassunto: "Hanseníase e tuberculose",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "A hanseníase é doença de notificação compulsória imediata, devendo ser comunicada em até vinte e quatro horas em razão de seu elevado potencial de transmissão.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "hanseníase ... imediata ... vinte e quatro horas",
    cognitivo: {
      motivo: "Cobrar a classificação da hanseníase, que é semanal, não imediata.",
      palavraCritica: "imediata",
    },
    comentario: {
      resolucao: "ERRADO. A hanseníase é de notificação compulsória SEMANAL (até 7 dias). Sua transmissão é lenta e exige contato prolongado, o que dispensa resposta em 24 horas — diferente de sarampo, cólera ou febre amarela, que são imediatas. A tuberculose segue a mesma lógica da hanseníase.",
      fundamento: "Portaria de Consolidação nº 4/2017 (MS).",
      macete: "Transmissão lenta e crônica (hanseníase, tuberculose): semanal.",
      erroComum: "Presumir que toda doença infecciosa relevante é de notificação imediata.",
      comoBancaPensa: "Oferece justificativa epidemiológica falsa para sustentar a classificação errada."
    }
  },
  {
    id: "SUS-122", disciplina: "Legislação Aplicada ao SUS", assunto: "Vigilância em saúde", subassunto: "Vigilância epidemiológica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.75,
    enunciado: "Entende-se por vigilância epidemiológica o conjunto de ações que proporciona o conhecimento, a detecção ou a prevenção de qualquer mudança nos fatores determinantes e condicionantes de saúde individual ou coletiva, com a finalidade de recomendar e adotar as medidas de prevenção e controle das doenças ou agravos.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "conhecimento, a detecção ou a prevenção de qualquer mudança nos fatores determinantes",
    cognitivo: {
      motivo: "Contraexemplo: a definição correta de vigilância epidemiológica, após o item que a trocou.",
      palavraCritica: "recomendar e adotar as medidas de prevenção e controle",
    },
    comentario: {
      resolucao: "CERTO. É a redação do art. 6º, §2º, da Lei 8.080/1990. A vigilância epidemiológica não apenas observa: ela RECOMENDA E ADOTA medidas. O verbo duplo é o que a distingue de um mero sistema de informação — há poder de intervenção sobre a ocorrência de doenças e agravos.",
      fundamento: "Lei nº 8.080/1990, art. 6º, §2º.",
      macete: "Epidemiológica: conhece, detecta, previne — e age.",
      erroComum: "Trocá-la pela definição de vigilância sanitária.",
      comoBancaPensa: "Apresenta a definição no rótulo certo, após tê-la deslocado em outro item."
    }
  },
  {
    id: "SUS-123", disciplina: "Legislação Aplicada ao SUS", assunto: "Sistemas de informação em saúde", subassunto: "SINAN",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "O Sistema de Informação sobre Mortalidade (SIM) é o sistema destinado ao registro dos casos de doenças e agravos de notificação compulsória, ao passo que o Sistema de Informação de Agravos de Notificação (SINAN) reúne os dados de óbitos ocorridos no país.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "SIM ... notificação compulsória ... SINAN ... óbitos",
    cognitivo: {
      motivo: "Cobrar a função de cada sistema pela inversão.",
      palavraCritica: "SIM ... notificação compulsória",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O SINAN registra os agravos de NOTIFICAÇÃO compulsória — o próprio nome traz 'Agravos de Notificação'. O SIM é o Sistema de Informação sobre MORTALIDADE, alimentado pelas declarações de óbito. Completam o conjunto o SINASC (nascidos vivos), o CNES (estabelecimentos) e o SIA/SIH (produção ambulatorial e hospitalar).",
      fundamento: "Sistemas de informação em saúde do SUS — SINAN, SIM e SINASC.",
      macete: "SINAN = Agravos de Notificação. SIM = Mortalidade. SINASC = Nascidos vivos.",
      erroComum: "Trocar as siglas por não desdobrar o que cada letra significa.",
      comoBancaPensa: "Permuta dois sistemas cujas siglas o candidato reconhece sem saber decompor."
    }
  },
  {
    id: "SUS-124", disciplina: "Legislação Aplicada ao SUS", assunto: "Vigilância em saúde", subassunto: "Notificação e sigilo",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.68,
    enunciado: "A notificação compulsória de caso suspeito depende de confirmação diagnóstica laboratorial prévia, sendo vedado ao profissional notificar antes do resultado do exame.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "depende de confirmação diagnóstica laboratorial prévia",
    cognitivo: {
      motivo: "Cobrar que a suspeita basta para notificar, princípio operacional da vigilância.",
      palavraCritica: "confirmação diagnóstica laboratorial prévia",
    },
    comentario: {
      resolucao: "ERRADO. A notificação é feita diante da SUSPEITA, justamente para permitir resposta rápida — esperar a confirmação laboratorial anularia a finalidade da vigilância, que é interromper a cadeia de transmissão. A norma é expressa ao dizer que a notificação compulsória é obrigatória diante da suspeita ou confirmação. A investigação posterior descarta ou confirma o caso.",
      fundamento: "Lei nº 6.259/1975; Portaria de Consolidação nº 4/2017 (MS).",
      macete: "Na dúvida, notifique. A confirmação vem depois.",
      erroComum: "Condicionar a notificação ao diagnóstico fechado.",
      comoBancaPensa: "Inverte a lógica da vigilância, criando requisito que a inviabilizaria."
    }
  },
  {
    id: "SUS-125", disciplina: "Legislação Aplicada ao SUS", assunto: "Vigilância em saúde", subassunto: "Emergência de saúde pública",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.62,
    enunciado: "Constituem eventos de saúde pública de notificação imediata a ocorrência de agravo inusitado, de caso de doença erradicada e de surto ou epidemia, ainda que a doença envolvida não conste isoladamente da lista de notificação compulsória imediata.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "agravo inusitado ... doença erradicada ... surto ou epidemia",
    cognitivo: {
      motivo: "Cobrar as hipóteses em que o evento — e não a doença — determina a notificação imediata.",
      palavraCritica: "ainda que a doença envolvida não conste isoladamente da lista",
    },
    comentario: {
      resolucao: "CERTO. A lógica é do EVENTO, não apenas da doença. Agravo inusitado, reaparecimento de doença erradicada, surtos e epidemias exigem notificação imediata pelo que representam epidemiologicamente — mudança de padrão —, ainda que a doença isolada seja de notificação semanal. É o que permite detectar precocemente o inesperado.",
      fundamento: "Portaria de Consolidação nº 4/2017 (MS) — eventos de saúde pública.",
      macete: "Mudou o padrão — surto, agravo inusitado, doença que voltou? Notificação imediata.",
      erroComum: "Consultar apenas a lista de doenças e ignorar a categoria de eventos.",
      comoBancaPensa: "Item correto que exige distinguir notificação por doença de notificação por evento."
    }
  },

];

QUESTOES.push(...QUESTOES_SESAUAL_LOTE69);

/* Frequência de temas — Legislação Aplicada ao SUS */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Legislação Aplicada ao SUS");
  if (!d) { d = { disciplina: "Legislação Aplicada ao SUS", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "LC 141/2012 — percentuais mínimos e despesas que contam como ASPS", freq: 84, tendencia: "alta", prob: 0.84 },
    { tema: "Lei 8.080 — competências das esferas (arts. 15 a 19)", freq: 80, tendencia: "alta", prob: 0.80 },
    { tema: "Decreto 7.508 — região de saúde, portas de entrada, RENASES e RENAME", freq: 82, tendencia: "alta", prob: 0.82 },
    { tema: "Lei 8.142 — conferência, conselho e requisitos de repasse", freq: 85, tendencia: "alta", prob: 0.85 },
    { tema: "Vigilância em saúde — prazos de notificação compulsória", freq: 79, tendencia: "media", prob: 0.79 },
  );
})();
