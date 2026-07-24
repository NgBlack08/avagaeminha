/* =====================================================================
   CEBRASPE LAB — Lote 33: DIREITO ADMINISTRATIVO (expansão)
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
      mede: "Direito Administrativo — organização administrativa.",
      pegadinhaDesc: "A banca pode restringir a desconcentração apenas à Administração Direta.",
      ondeErra: "Acha que a desconcentração só ocorre entre órgãos da Administração Direta.",
      palavraCritica: "tanto na Administração Direta quanto ... Indireta",
      tecnica: "Desconcentração é a distribuição interna de competências entre órgãos de UMA MESMA pessoa jurídica (sem criação de nova pessoa). Isso pode ocorrer dentro da Administração Direta (ex.: divisão em secretarias) ou dentro de cada entidade da Administração Indireta (ex.: divisão em departamentos de uma autarquia).",
      regraMental: "Desconcentração: mesma pessoa jurídica, distribuição interna — vale para Direta e para cada entidade da Indireta."
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
      mede: "Direito Administrativo — classificação dos atos administrativos.",
      pegadinhaDesc: "A banca inverte os poderes administrativos que fundamentam os atos ordinatórios.",
      ondeErra: "Confunde o poder regulamentar (edição de decretos regulamentares, externo) com o poder hierárquico (organização interna).",
      palavraCritica: "poder regulamentar, e não do poder hierárquico",
      tecnica: "Os atos ordinatórios (ordens de serviço, circulares, instruções, memorandos) decorrem do PODER HIERÁRQUICO, pois disciplinam o funcionamento interno da Administração e a relação entre superiores e subordinados — não se confundem com o poder regulamentar, que se exerce por decretos de alcance mais amplo.",
      regraMental: "Atos ordinatórios = poder hierárquico (disciplina interna). Decretos regulamentares = poder regulamentar."
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
      mede: "Direito Administrativo — agentes públicos.",
      pegadinhaDesc: "A banca pode inverter os regimes entre emprego e cargo.",
      ondeErra: "Troca CLT por regime estatutário (ou vice-versa) entre os dois institutos.",
      palavraCritica: "CLT ... estatutária",
      tecnica: "Emprego público: vínculo contratual, regido pela CLT (natureza celetista). Cargo público: vínculo estatutário, criado por lei, com denominação e atribuições próprias, provido em caráter efetivo ou em comissão.",
      regraMental: "Emprego = CLT (contrato). Cargo = estatuto (lei)."
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
      mede: "Direito Administrativo — poderes administrativos (poder hierárquico).",
      pegadinhaDesc: "A banca generaliza a avocação como medida permanente e imotivada.",
      ondeErra: "Confunde a natureza excepcional da avocação com uma prerrogativa genérica e ilimitada da autoridade superior.",
      palavraCritica: "caráter permanente ... independentemente de justificativa",
      tecnica: "Art. 15 da Lei 9.784/1999: a avocação é permitida 'em caráter excepcional e por motivos relevantes devidamente justificados' — é temporária, chamando para si a autoridade superior competência de órgão subordinado, mas não pode ser permanente nem imotivada, sob pena de esvaziar a repartição de competências.",
      regraMental: "Avocação: excepcional, temporária e motivada (art. 15, Lei 9.784/99) — nunca permanente e sem justificativa."
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
      mede: "Direito Administrativo — controle legislativo da Administração Pública.",
      pegadinhaDesc: "A banca pode trocar o Congresso Nacional pelo Senado Federal como órgão competente.",
      ondeErra: "Confunde competências privativas do Senado Federal (art. 52, CF) com competências do Congresso Nacional (art. 49, CF).",
      palavraCritica: "Congresso Nacional",
      tecnica: "Art. 49, V, CF: compete ao CONGRESSO NACIONAL (e não privativamente ao Senado Federal) sustar os atos normativos do Poder Executivo que exorbitem do poder regulamentar ou dos limites de delegação legislativa.",
      regraMental: "Sustar atos normativos do Executivo que exorbitem = competência do CONGRESSO NACIONAL, não do Senado isoladamente."
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
      mede: "Direito Administrativo — responsabilidade civil do Estado.",
      pegadinhaDesc: "A banca troca a responsabilidade objetiva (regra para atos comissivos) pela subjetiva.",
      ondeErra: "Confunde a regra geral (objetiva, teoria do risco administrativo) com a exceção da omissão (que a jurisprudência majoritária trata como subjetiva).",
      palavraCritica: "subjetiva ... dolo ou culpa",
      tecnica: "Art. 37, §6º, CF: a responsabilidade civil do Estado por atos COMISSIVOS de seus agentes, nessa qualidade, é OBJETIVA (teoria do risco administrativo), bastando a comprovação do nexo causal entre a conduta e o dano — dispensa-se a prova de dolo ou culpa.",
      regraMental: "Ato comissivo do Estado: responsabilidade OBJETIVA. Basta nexo causal, sem provar dolo/culpa."
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
      mede: "Direito Administrativo — poderes administrativos (poder de polícia).",
      pegadinhaDesc: "A banca pode generalizar a autoexecutoriedade sem a ressalva da reserva de jurisdição.",
      ondeErra: "Ignora que certas medidas (ex.: busca domiciliar) exigem autorização judicial prévia, mesmo no exercício do poder de polícia.",
      palavraCritica: "ressalvadas ... reserva de jurisdição",
      tecnica: "A autoexecutoriedade permite à Administração executar diretamente suas decisões, sem necessidade de prévia manifestação judicial, EXCETO nas hipóteses de reserva de jurisdição expressamente previstas (ex.: art. 5º, XI, CF — entrada forçada em domicílio à noite exige ordem judicial, mesmo em contexto de poder de polícia).",
      regraMental: "Autoexecutoriedade é a regra, mas cede diante de hipóteses de reserva de jurisdição."
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
      mede: "Direito Administrativo — extinção dos atos administrativos.",
      pegadinhaDesc: "A banca atribui à revogação características exclusivas da anulação.",
      ondeErra: "Confunde os dois institutos quanto ao sujeito competente e quanto aos efeitos temporais.",
      palavraCritica: "revogação ... Poder Judiciário ... ex tunc",
      tecnica: "A ANULAÇÃO (vício de legalidade) pode ser feita pela Administração (autotutela) OU pelo Judiciário, com efeitos EX TUNC (retroativos). A REVOGAÇÃO (conveniência e oportunidade) é PRIVATIVA da Administração — o Judiciário não revoga atos administrativos por mérito — e produz efeitos EX NUNC (não retroativos).",
      regraMental: "Anulação: Adm. ou Judiciário, ex tunc. Revogação: só Administração, ex nunc."
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
      mede: "Direito Administrativo — atos administrativos (silêncio administrativo).",
      pegadinhaDesc: "A banca pode afirmar que o silêncio sempre implica deferimento ou indeferimento automático.",
      ondeErra: "Presume um efeito jurídico ao silêncio que a lei não lhe atribuiu expressamente.",
      palavraCritica: "não pode ser interpretado ... via judicial",
      tecnica: "O silêncio administrativo é fato jurídico que, em regra, não produz efeito de deferimento ou indeferimento tácito, salvo quando a lei expressamente lhe atribuir esse efeito. Na ausência de previsão legal, cabe ao interessado buscar o Judiciário para compelir a Administração a se manifestar (mandado de segurança contra a omissão, por exemplo).",
      regraMental: "Silêncio administrativo sem previsão legal específica = nenhum efeito automático; via judicial resolve a omissão."
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
      mede: "Direito Administrativo — atos administrativos (silêncio administrativo).",
      pegadinhaDesc: "A banca generaliza um efeito (deferimento tácito) que só existe quando a lei expressamente o prevê.",
      ondeErra: "Acha que a inércia da Administração sempre favorece o administrado com deferimento automático.",
      palavraCritica: "sempre equivale ao deferimento tácito",
      tecnica: "O silêncio administrativo só produz efeito de deferimento (ou indeferimento) tácito quando a LEI expressamente lhe atribuir esse efeito — na ausência de previsão legal, o silêncio não gera, por si só, qualquer efeito jurídico presumido.",
      regraMental: "Silêncio administrativo: só tem efeito se a LEI disser expressamente qual é esse efeito."
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
