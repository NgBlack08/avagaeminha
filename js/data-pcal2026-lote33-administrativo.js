/* =====================================================================
   QUESTLAB — Lote 33: DIREITO ADMINISTRATIVO (expansão)
   Cobre organização administrativa (desconcentração), classificação de
   atos administrativos, agentes públicos (emprego x cargo), poderes
   administrativos (hierárquico, regulamentar, de polícia), controle
   legislativo da Administração, responsabilidade civil do Estado e
   silêncio administrativo. Itens 100% originais, com gabarito
   verificado de forma independente a partir da Constituição Federal e
   da doutrina consolidada de Direito Administrativo.
   10 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE33 = [

  {
    id: "DA-051", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Desconcentração",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (organização administrativa)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "A desconcentração administrativa, por consistir na distribuição interna de competências entre órgãos de uma mesma pessoa jurídica, pode ocorrer tanto na Administração Direta quanto no âmbito interno das entidades da Administração Indireta.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mesma pessoa jurídica ... Direta ... Indireta",
    cognitivo: {
      motivo: "Cobrar o conceito de desconcentração e sua abrangência.",
      palavraCritica: "tanto na Administração Direta quanto ... Indireta",
    },
    comentario: {
      resolucao: "CERTO. A desconcentração é técnica de distribuição interna de competências dentro de uma mesma pessoa jurídica, podendo ocorrer tanto entre órgãos da Administração Direta (ex.: divisão em ministérios/secretarias) quanto internamente em cada entidade da Administração Indireta (ex.: divisão em departamentos de uma autarquia).",
      fundamento: "Doutrina de Direito Administrativo — organização administrativa (desconcentração x descentralização).",
      macete: "Desconcentração = mesma pessoa jurídica, órgãos internos, em Direta ou Indireta.",
      erroComum: "Restringir a desconcentração apenas à Administração Direta.",
      comoBancaPensa: "Item de fixação sobre a abrangência correta do conceito."
    }
  },
  {
    id: "DA-052", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Atos ordinatórios",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (classificação dos atos administrativos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "Os atos administrativos ordinatórios — a exemplo das ordens de serviço e das circulares internas — veiculam determinações destinadas a disciplinar o funcionamento interno da Administração e decorrem do poder regulamentar, e não do poder hierárquico.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "poder regulamentar, e não do poder hierárquico",
    cognitivo: {
      motivo: "Cobrar o fundamento correto (poder hierárquico) dos atos ordinatórios.",
      palavraCritica: "poder regulamentar, e não do poder hierárquico",
    },
    comentario: {
      resolucao: "ERRADO. Os atos ordinatórios decorrem do PODER HIERÁRQUICO, e não do poder regulamentar — este último se manifesta por meio de decretos e regulamentos que detalham a execução de leis, enquanto o poder hierárquico organiza o funcionamento interno da Administração e a relação entre superiores e subordinados.",
      fundamento: "Doutrina de Direito Administrativo — poderes administrativos (hierárquico x regulamentar).",
      macete: "Ordens de serviço e circulares internas = poder hierárquico.",
      erroComum: "Confundir o poder hierárquico (interno) com o poder regulamentar (decretos).",
      comoBancaPensa: "Troca o fundamento correto de um instituto por outro poder administrativo distinto."
    }
  },
  {
    id: "DA-053", disciplina: "Direito Administrativo", assunto: "Agentes públicos", subassunto: "Emprego público x cargo público",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (regime jurídico dos agentes públicos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "O emprego público distingue-se do cargo público por vincular o agente à Administração mediante contrato de trabalho regido pela Consolidação das Leis do Trabalho (CLT), ao passo que o cargo público, de natureza estatutária, é criado por lei, com denominação própria, e destina-se ao provimento em caráter efetivo ou em comissão.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "CLT ... estatutária ... efetivo ou em comissão",
    cognitivo: {
      motivo: "Cobrar a distinção entre emprego público (celetista) e cargo público (estatutário).",
      palavraCritica: "CLT ... estatutária",
    },
    comentario: {
      resolucao: "CERTO. O emprego público tem natureza contratual, regido pela CLT, enquanto o cargo público tem natureza estatutária, criado por lei, com denominação própria, provido em caráter efetivo (mediante concurso) ou em comissão (livre nomeação e exoneração).",
      fundamento: "Doutrina de Direito Administrativo — regime jurídico dos agentes públicos.",
      macete: "Emprego = CLT. Cargo = estatuto/lei.",
      erroComum: "Inverter os regimes entre emprego público e cargo público.",
      comoBancaPensa: "Item de fixação sobre a distinção clássica de regimes jurídicos dos agentes públicos."
    }
  },
  {
    id: "DA-054", disciplina: "Direito Administrativo", assunto: "Poderes administrativos", subassunto: "Avocação de competência",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (poder hierárquico)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.76,
    enunciado: "A avocação de competência, decorrente do poder hierárquico, pode ser determinada em caráter permanente pela autoridade superior, independentemente de justificativa, por constituir expressão natural da relação de subordinação.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "caráter permanente ... independentemente de justificativa",
    cognitivo: {
      motivo: "Cobrar a natureza excepcional, temporária e motivada da avocação de competência.",
      palavraCritica: "caráter permanente ... independentemente de justificativa",
    },
    comentario: {
      resolucao: "ERRADO. Nos termos do art. 15 da Lei 9.784/1999, a avocação só é permitida em caráter excepcional e por motivos relevantes devidamente justificados, sendo temporária — não pode ser exercida em caráter permanente e sem justificativa, sob pena de comprometer a repartição de competências entre os órgãos da Administração. (Não confundir com a delegação, que, nos termos do art. 12, pode ocorrer mesmo sem subordinação hierárquica.)",
      fundamento: "Lei nº 9.784/1999, art. 15 (avocação); art. 12 (delegação); doutrina de Direito Administrativo (poder hierárquico).",
      macete: "Avocação: sempre excepcional, temporária e motivada.",
      erroComum: "Tratar a avocação como prerrogativa ampla, permanente e discricionária da autoridade superior.",
      comoBancaPensa: "Generaliza indevidamente uma medida excepcional como se fosse regra permanente."
    }
  },
  {
    id: "DA-055", disciplina: "Direito Administrativo", assunto: "Controle da Administração Pública", subassunto: "Controle legislativo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 49, V)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.8,
    enunciado: "Compete ao Congresso Nacional, e não privativamente ao Senado Federal, sustar os atos normativos do Poder Executivo que exorbitem do poder regulamentar ou dos limites de delegação legislativa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Congresso Nacional, e não privativamente ao Senado",
    cognitivo: {
      motivo: "Cobrar o órgão constitucionalmente competente para sustar atos normativos do Executivo.",
      palavraCritica: "Congresso Nacional",
    },
    comentario: {
      resolucao: "CERTO. A competência para sustar os atos normativos do Poder Executivo que exorbitem do poder regulamentar ou dos limites de delegação legislativa é do CONGRESSO NACIONAL (art. 49, V, CF), e não privativa do Senado Federal.",
      fundamento: "Constituição Federal, art. 49, V.",
      macete: "Sustar atos do Executivo que exorbitam = Congresso Nacional (bicameral), não só o Senado.",
      erroComum: "Confundir competências do Congresso Nacional com competências privativas do Senado Federal.",
      comoBancaPensa: "Cobra a redação correta da competência constitucional, testando a precisão do conhecimento do candidato."
    }
  },
  {
    id: "DA-056", disciplina: "Direito Administrativo", assunto: "Responsabilidade civil do Estado", subassunto: "Responsabilidade objetiva",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF/88, art. 37, §6º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "A responsabilidade civil do Estado por danos decorrentes de atos comissivos de seus agentes é subjetiva, cabendo à vítima comprovar o dolo ou a culpa do agente público para fazer jus à indenização.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "subjetiva ... dolo ou culpa",
    cognitivo: {
      motivo: "Cobrar a natureza objetiva da responsabilidade civil do Estado por atos comissivos.",
      palavraCritica: "subjetiva ... dolo ou culpa",
    },
    comentario: {
      resolucao: "ERRADO. A responsabilidade civil do Estado por danos decorrentes de atos comissivos de seus agentes, nessa qualidade, é OBJETIVA (teoria do risco administrativo, art. 37, §6º, CF), bastando a comprovação do nexo causal entre a conduta e o dano, sem necessidade de provar dolo ou culpa do agente.",
      fundamento: "Constituição Federal, art. 37, §6º; teoria do risco administrativo.",
      macete: "Ato comissivo do Estado = responsabilidade objetiva (nexo causal basta).",
      erroComum: "Exigir prova de dolo ou culpa para responsabilizar o Estado por conduta comissiva.",
      comoBancaPensa: "Troca o regime objetivo (regra) pelo subjetivo, testando conhecimento da regra geral do art. 37, §6º."
    }
  },
  {
    id: "DA-057", disciplina: "Direito Administrativo", assunto: "Poderes administrativos", subassunto: "Poder de polícia (autoexecutoriedade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (poder de polícia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "O poder de polícia administrativa caracteriza-se, entre outros atributos, pela autoexecutoriedade, que permite à Administração executar suas decisões e, quando necessário, empregar meios diretos de coerção, independentemente de prévia autorização judicial, ressalvadas as hipóteses expressamente submetidas à reserva de jurisdição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "autoexecutoriedade ... ressalvadas ... reserva de jurisdição",
    cognitivo: {
      motivo: "Cobrar o atributo da autoexecutoriedade e seus limites (reserva de jurisdição).",
      palavraCritica: "ressalvadas ... reserva de jurisdição",
    },
    comentario: {
      resolucao: "CERTO. A autoexecutoriedade é atributo do poder de polícia que dispensa, em regra, prévia autorização judicial para a Administração executar suas decisões — mas essa regra cede nas hipóteses de reserva de jurisdição expressamente estabelecidas pelo ordenamento (ex.: inviolabilidade de domicílio à noite, que exige ordem judicial).",
      fundamento: "Doutrina de Direito Administrativo — poder de polícia (atributos); Constituição Federal, art. 5º, XI.",
      macete: "Autoexecutoriedade é a regra, mas tem exceções de reserva de jurisdição.",
      erroComum: "Generalizar a autoexecutoriedade como absoluta, ignorando as hipóteses de reserva de jurisdição.",
      comoBancaPensa: "Testa se o candidato conhece o atributo e também seus limites constitucionais."
    }
  },
  {
    id: "DA-058", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Anulação x revogação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (extinção dos atos administrativos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "A revogação de ato administrativo, assim como a anulação, pode ser promovida tanto pela Administração quanto pelo Poder Judiciário, produzindo, em ambos os casos, efeitos retroativos (ex tunc).",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "revogação ... Poder Judiciário ... ex tunc",
    cognitivo: {
      motivo: "Cobrar as diferenças entre anulação (vício de legalidade) e revogação (conveniência/oportunidade).",
      palavraCritica: "revogação ... Poder Judiciário ... ex tunc",
    },
    comentario: {
      resolucao: "ERRADO. A revogação é privativa da Administração (o Judiciário não pode revogar atos por conveniência e oportunidade, apenas anular por ilegalidade) e produz efeitos EX NUNC (não retroativos) — diferentemente da anulação, que pode ser feita pela Administração ou pelo Judiciário e produz efeitos EX TUNC.",
      fundamento: "Doutrina de Direito Administrativo — extinção dos atos administrativos (anulação x revogação); Súmulas 346 e 473, STF.",
      macete: "Anulação: Adm./Judiciário + ex tunc. Revogação: só Adm. + ex nunc.",
      erroComum: "Atribuir à revogação a possibilidade de controle judicial de mérito e efeitos retroativos.",
      comoBancaPensa: "Mistura as características de dois institutos distintos, testando a precisão conceitual do candidato."
    }
  },
  {
    id: "DA-059", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Silêncio administrativo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (silêncio administrativo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.72,
    enunciado: "O silêncio administrativo, quando a lei não lhe atribuir efeito específico, não pode ser interpretado como deferimento ou indeferimento tácito do pedido, cabendo ao interessado, nesse caso, buscar a via judicial para compelir a Administração a decidir.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não pode ser interpretado ... via judicial para compelir",
    cognitivo: {
      motivo: "Cobrar que o silêncio administrativo, por si só, não produz efeito jurídico presumido.",
      palavraCritica: "não pode ser interpretado ... via judicial",
    },
    comentario: {
      resolucao: "CERTO. Na ausência de previsão legal expressa atribuindo efeito ao silêncio administrativo, este não pode ser interpretado como deferimento ou indeferimento tácito — cabe ao interessado buscar a via judicial (ex.: mandado de segurança contra omissão) para compelir a Administração a decidir.",
      fundamento: "Doutrina de Direito Administrativo — silêncio administrativo.",
      macete: "Silêncio sem previsão legal = nenhum efeito automático; recorra ao Judiciário.",
      erroComum: "Presumir deferimento ou indeferimento tácito sem base legal expressa.",
      comoBancaPensa: "Item de fixação sobre um tema frequentemente mal compreendido pelos candidatos."
    }
  },
  {
    id: "DA-060", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Silêncio administrativo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (silêncio administrativo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.72,
    enunciado: "O silêncio administrativo sempre equivale ao deferimento tácito do pedido formulado pelo administrado, independentemente de a lei atribuir-lhe ou não esse efeito específico.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "sempre equivale ao deferimento tácito",
    cognitivo: {
      motivo: "Cobrar que o silêncio administrativo não gera efeito jurídico automático sem previsão legal.",
      palavraCritica: "sempre equivale ao deferimento tácito",
    },
    comentario: {
      resolucao: "ERRADO. O silêncio administrativo não equivale automaticamente a deferimento tácito em todas as hipóteses — esse efeito só existe quando expressamente previsto em lei; na ausência de previsão legal, o silêncio não produz efeito jurídico presumido, sendo mera omissão a ser combatida pelas vias adequadas.",
      fundamento: "Doutrina de Direito Administrativo — silêncio administrativo.",
      macete: "Sem previsão legal expressa, silêncio não é nem deferimento nem indeferimento automático.",
      erroComum: "Generalizar o deferimento tácito como regra geral do silêncio administrativo.",
      comoBancaPensa: "Generaliza indevidamente uma exceção (deferimento tácito por lei específica) como regra geral."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE33);

/* Frequência de temas — Direito Administrativo (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Direito Administrativo");
  if (!d) { d = { disciplina: "Direito Administrativo", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Organização administrativa e poderes administrativos", freq: 80, tendencia: "alta", prob: 0.8 },
    { tema: "Responsabilidade civil objetiva do Estado", freq: 82, tendencia: "alta", prob: 0.82 },
    { tema: "Anulação, revogação e silêncio administrativo", freq: 76, tendencia: "estavel", prob: 0.76 },
    { tema: "Controle legislativo da Administração Pública", freq: 74, tendencia: "estavel", prob: 0.74 },
  );
})();
