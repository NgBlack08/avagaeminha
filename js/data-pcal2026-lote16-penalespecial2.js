/* =====================================================================
   CEBRASPE LAB — Lote 16: LEGISLAÇÃO PENAL ESPECIAL II
   Crimes Ambientais (Lei 9.605/1998), Crimes de Racismo/Preconceito
   (Lei 7.716/1989, atualizada pela Lei 14.532/2023), Lavagem de
   Dinheiro (Lei 9.613/1998) e Juizados Especiais Criminais (Lei
   9.099/1995).
   29 itens INÉDITOS (C/E balanceados), estilo CEBRASPE.

   Fonte: material esquematizado das leis (fornecido pelo usuário).
   Leis são texto público — itens 100% originais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE16 = [

  /* ============ CRIMES AMBIENTAIS (Lei 9.605/1998) ============ */
  {
    id: "LE-082", disciplina: "Legislação Especial", assunto: "Crimes Ambientais", subassunto: "Responsabilidade penal da pessoa jurídica (art. 3º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "As pessoas jurídicas podem ser responsabilizadas penalmente por crimes ambientais, quando a infração for cometida por decisão de seu representante legal ou de órgão colegiado, no interesse ou benefício da entidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "no interesse ou benefício da entidade",
    cognitivo: {
      motivo: "Cobrar a responsabilidade penal da pessoa jurídica (art. 3º).",
      mede: "Crimes Ambientais — sujeito ativo.",
      pegadinhaDesc: "A banca pode negar a responsabilidade penal da PJ ou omitir os requisitos.",
      ondeErra: "Acha que só pessoas físicas cometem crimes.",
      palavraCritica: "no interesse ou benefício da entidade",
      tecnica: "Art. 3º: PJ responde penalmente quando o crime for por decisão de representante/órgão colegiado, no interesse ou benefício da entidade.",
      regraMental: "PJ comete crime ambiental: decisão do representante + benefício da empresa."
    },
    comentario: {
      resolucao: "CERTO. O art. 3º da Lei 9.605/1998 admite a responsabilização penal da pessoa jurídica nos crimes ambientais, desde que a infração seja cometida por decisão de seu representante legal ou contratual, ou de órgão colegiado, no interesse ou benefício da entidade. A CF (art. 225, § 3º) dá suporte a essa responsabilização.",
      fundamento: "Lei 9.605/1998, art. 3º; CF, art. 225, § 3º.",
      macete: "PJ criminosa ambiental: decisão do representante + benefício da empresa.",
      erroComum: "Negar a responsabilidade penal da pessoa jurídica.",
      comoBancaPensa: "Testa o conhecimento da responsabilidade penal da PJ."
    }
  },
  {
    id: "LE-083", disciplina: "Legislação Especial", assunto: "Crimes Ambientais", subassunto: "Dupla imputação (STF)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Segundo a jurisprudência atual do STF, a responsabilização penal da pessoa jurídica por crime ambiental depende, necessariamente, da simultânea imputação da pessoa física responsável pela conduta.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "necessariamente",
    cognitivo: {
      motivo: "Cobrar a superação da teoria da dupla imputação.",
      mede: "Crimes Ambientais — jurisprudência do STF/STJ.",
      pegadinhaDesc: "Mantém a exigência de dupla imputação, já abandonada.",
      ondeErra: "Desconhece o RE 548.181/STF.",
      palavraCritica: "necessariamente",
      tecnica: "STF (RE 548.181) abandonou a teoria da dupla imputação: a PJ pode ser processada isoladamente, sem imputação concomitante à pessoa física.",
      regraMental: "PJ pode responder sozinha. Não precisa 'amarrar' uma pessoa física junto."
    },
    comentario: {
      resolucao: "ERRADO. O STF (RE 548.181) superou a teoria da dupla imputação: é possível responsabilizar penalmente a pessoa jurídica por crime ambiental ainda que não haja imputação simultânea da pessoa física. Logo, essa imputação conjunta não é requisito necessário.",
      fundamento: "Lei 9.605/1998, art. 3º; STF, RE 548.181.",
      jurisprudencia: "STF, RE 548.181.",
      macete: "Dupla imputação caiu: PJ responde isoladamente.",
      erroComum: "Exigir imputação simultânea da pessoa física.",
      comoBancaPensa: "Mantém tese jurisprudencial superada."
    }
  },
  {
    id: "LE-084", disciplina: "Legislação Especial", assunto: "Crimes Ambientais", subassunto: "Desconsideração da personalidade jurídica (art. 4º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "Poderá ser desconsiderada a pessoa jurídica sempre que sua personalidade for obstáculo ao ressarcimento de prejuízos causados à qualidade do meio ambiente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "obstáculo ao ressarcimento",
    cognitivo: {
      motivo: "Cobrar a desconsideração da PJ (art. 4º).",
      mede: "Crimes Ambientais — desconsideração da personalidade.",
      pegadinhaDesc: "A banca pode exigir requisitos adicionais (fraude, abuso).",
      ondeErra: "Aplica os requisitos do CC/CDC à hipótese ambiental.",
      palavraCritica: "obstáculo ao ressarcimento",
      tecnica: "Art. 4º: basta que a personalidade seja obstáculo ao ressarcimento dos prejuízos ambientais (teoria menor).",
      regraMental: "Ambiental: desconsidera se a PJ atrapalha o ressarcimento (não precisa de fraude)."
    },
    comentario: {
      resolucao: "CERTO. O art. 4º da Lei 9.605/1998 autoriza a desconsideração da pessoa jurídica sempre que sua personalidade constituir obstáculo ao ressarcimento de prejuízos causados ao meio ambiente. Adota-se a teoria menor, dispensando-se a prova de fraude ou abuso.",
      fundamento: "Lei 9.605/1998, art. 4º.",
      macete: "Ambiental = teoria menor. Basta atrapalhar o ressarcimento.",
      erroComum: "Exigir fraude/abuso como no Código Civil.",
      comoBancaPensa: "Testa a teoria menor da desconsideração."
    }
  },
  {
    id: "LE-085", disciplina: "Legislação Especial", assunto: "Crimes Ambientais", subassunto: "Penas da pessoa jurídica (art. 21)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "Entre as penas aplicáveis às pessoas jurídicas por crimes ambientais inclui-se a pena privativa de liberdade.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "privativa de liberdade",
    cognitivo: {
      motivo: "Cobrar as penas aplicáveis à PJ (art. 21).",
      mede: "Crimes Ambientais — penas da pessoa jurídica.",
      pegadinhaDesc: "Atribui à PJ pena de prisão, impossível por sua natureza.",
      ondeErra: "Não percebe que a PJ não pode ser presa.",
      palavraCritica: "privativa de liberdade",
      tecnica: "Art. 21: penas da PJ são multa, restritivas de direitos e prestação de serviços à comunidade. Nunca privativa de liberdade.",
      regraMental: "PJ não vai presa: multa, restritivas e prestação de serviços."
    },
    comentario: {
      resolucao: "ERRADO. As penas aplicáveis às pessoas jurídicas nos crimes ambientais são, isolada, cumulativa ou alternativamente, a multa, as restritivas de direitos e a prestação de serviços à comunidade (art. 21). A pena privativa de liberdade é incompatível com a natureza da pessoa jurídica.",
      fundamento: "Lei 9.605/1998, art. 21.",
      macete: "PJ: multa + restritivas + prestação de serviços. Prisão jamais.",
      erroComum: "Atribuir prisão à pessoa jurídica.",
      comoBancaPensa: "Cria pena impossível para a PJ."
    }
  },
  {
    id: "LE-086", disciplina: "Legislação Especial", assunto: "Crimes Ambientais", subassunto: "Transação e composição do dano (art. 27)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.7,
    enunciado: "Nos crimes ambientais de menor potencial ofensivo, a proposta de aplicação imediata de pena (transação penal) somente pode ser formulada após a prévia composição do dano ambiental, salvo comprovada impossibilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "prévia composição do dano",
    cognitivo: {
      motivo: "Cobrar o requisito específico da transação penal ambiental (art. 27).",
      mede: "Crimes Ambientais — institutos despenalizadores.",
      pegadinhaDesc: "A banca pode dispensar a composição do dano como condição.",
      ondeErra: "Aplica a transação penal comum, sem o requisito da reparação.",
      palavraCritica: "prévia composição do dano",
      tecnica: "Art. 27: a transação penal ambiental exige prévia composição do dano (salvo impossibilidade comprovada).",
      regraMental: "Transação ambiental: primeiro repara o dano, depois transaciona."
    },
    comentario: {
      resolucao: "CERTO. O art. 27 da Lei 9.605/1998 condiciona a proposta de transação penal, nos crimes ambientais de menor potencial ofensivo, à prévia composição do dano ambiental (art. 74 da Lei 9.099/95), salvo comprovada impossibilidade de fazê-lo. É requisito específico do microssistema ambiental.",
      fundamento: "Lei 9.605/1998, art. 27; Lei 9.099/1995, art. 74.",
      macete: "Transação ambiental: repara o dano primeiro.",
      erroComum: "Dispensar a composição do dano.",
      comoBancaPensa: "Explora o requisito próprio da transação ambiental."
    }
  },
  {
    id: "LE-087", disciplina: "Legislação Especial", assunto: "Crimes Ambientais", subassunto: "Responsabilidade das pessoas físicas (art. 3º, parágrafo único)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "A responsabilidade penal da pessoa jurídica por crime ambiental exclui a responsabilidade das pessoas físicas que sejam autoras, coautoras ou partícipes do mesmo fato.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclui a responsabilidade",
    cognitivo: {
      motivo: "Cobrar a coexistência das responsabilidades (art. 3º, parágrafo único).",
      mede: "Crimes Ambientais — concurso de responsabilidades.",
      pegadinhaDesc: "Apresenta as responsabilidades como excludentes.",
      ondeErra: "Trata PJ e pessoa física como alternativas.",
      palavraCritica: "exclui",
      tecnica: "Art. 3º, parágrafo único: a responsabilidade da PJ NÃO exclui a das pessoas físicas autoras, coautoras ou partícipes.",
      regraMental: "PJ e pessoa física respondem juntas. Uma não afasta a outra."
    },
    comentario: {
      resolucao: "ERRADO. O parágrafo único do art. 3º da Lei 9.605/1998 dispõe que a responsabilidade das pessoas jurídicas não exclui a das pessoas físicas, autoras, coautoras ou partícipes do mesmo fato. As responsabilidades coexistem, não se excluem.",
      fundamento: "Lei 9.605/1998, art. 3º, parágrafo único.",
      macete: "PJ + pessoa física: responsabilidades somam, não se excluem.",
      erroComum: "Tratar as responsabilidades como alternativas.",
      comoBancaPensa: "Transforma coexistência em exclusão."
    }
  },
  {
    id: "LE-088", disciplina: "Legislação Especial", assunto: "Crimes Ambientais", subassunto: "Circunstâncias atenuantes (art. 14)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.68,
    enunciado: "O baixo grau de instrução ou escolaridade do agente constitui circunstância que atenua a pena nos crimes ambientais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "baixo grau de instrução",
    cognitivo: {
      motivo: "Cobrar as atenuantes específicas (art. 14).",
      mede: "Crimes Ambientais — dosimetria.",
      pegadinhaDesc: "A banca pode apresentar o dispositivo como agravante.",
      ondeErra: "Inverte atenuante por agravante.",
      palavraCritica: "atenua",
      tecnica: "Art. 14, I: o baixo grau de instrução ou escolaridade do agente é atenuante.",
      regraMental: "Baixa instrução do agente = atenua a pena ambiental."
    },
    comentario: {
      resolucao: "CERTO. O art. 14, I, da Lei 9.605/1998 prevê como circunstância atenuante da pena o baixo grau de instrução ou escolaridade do agente. Também são atenuantes o arrependimento com reparação e a colaboração com os agentes de fiscalização.",
      fundamento: "Lei 9.605/1998, art. 14, I.",
      macete: "Baixa escolaridade atenua.",
      erroComum: "Confundir com agravante.",
      comoBancaPensa: "Inverte a natureza da circunstância."
    }
  },
  {
    id: "LE-089", disciplina: "Legislação Especial", assunto: "Crimes Ambientais", subassunto: "Crimes de perigo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.7,
    enunciado: "A configuração de qualquer crime ambiental exige a ocorrência de dano efetivo e mensurável ao meio ambiente.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "exige dano efetivo",
    cognitivo: {
      motivo: "Cobrar a existência de crimes ambientais de perigo (formais).",
      mede: "Crimes Ambientais — classificação dos tipos.",
      pegadinhaDesc: "Generaliza a exigência de dano efetivo a todos os crimes ambientais.",
      ondeErra: "Ignora os crimes de perigo abstrato.",
      palavraCritica: "qualquer / exige dano efetivo",
      tecnica: "Vários crimes ambientais são de perigo (formais/de mera conduta), consumando-se independentemente de dano efetivo (ex.: certas condutas de poluição e contra a flora).",
      regraMental: "Nem todo crime ambiental precisa de dano concreto: há crimes de perigo."
    },
    comentario: {
      resolucao: "ERRADO. Muitos crimes ambientais são de perigo (abstrato ou concreto) ou de mera conduta, consumando-se independentemente da ocorrência de dano efetivo. Assim, a exigência genérica de dano concreto e mensurável para 'qualquer' crime ambiental é incorreta.",
      fundamento: "Lei 9.605/1998 (tipos de perigo, ex.: arts. 54 e seguintes).",
      macete: "Há crime ambiental de perigo — dano efetivo nem sempre é exigido.",
      erroComum: "Generalizar a necessidade de dano concreto.",
      comoBancaPensa: "Usa 'qualquer' para forçar generalização indevida."
    }
  },

  /* ============ CRIMES DE RACISMO/PRECONCEITO (Lei 7.716/1989) ============ */
  {
    id: "LE-090", disciplina: "Legislação Especial", assunto: "Crimes de Racismo", subassunto: "Inafiançabilidade e imprescritibilidade (CF, art. 5º, XLII)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 7.716/1989 c/c CF, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "A prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inafiançável e imprescritível",
    cognitivo: {
      motivo: "Cobrar o regime constitucional do racismo (art. 5º, XLII).",
      mede: "Crimes de Racismo — tratamento constitucional.",
      pegadinhaDesc: "A banca pode trocar 'imprescritível' por 'prescritível' ou 'afiançável'.",
      ondeErra: "Confunde o regime do racismo com o de outros crimes.",
      palavraCritica: "inafiançável e imprescritível",
      tecnica: "CF, art. 5º, XLII: o racismo é crime inafiançável e imprescritível, sujeito a reclusão.",
      regraMental: "Racismo: inafiançável + imprescritível + reclusão."
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, XLII, da Constituição Federal define a prática do racismo como crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei (Lei 7.716/1989).",
      fundamento: "CF, art. 5º, XLII; Lei 7.716/1989.",
      macete: "Racismo: inafiançável, imprescritível, reclusão.",
      erroComum: "Torná-lo prescritível ou afiançável.",
      comoBancaPensa: "Troca um dos atributos constitucionais."
    }
  },
  {
    id: "LE-091", disciplina: "Legislação Especial", assunto: "Crimes de Racismo", subassunto: "Injúria racial (Lei 14.532/2023)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 7.716/1989 c/c Lei 14.532/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Após a Lei 14.532/2023, a injúria racial passou a ser tratada como modalidade de racismo, tornando-se imprescritível e inafiançável.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "modalidade de racismo",
    cognitivo: {
      motivo: "Cobrar a equiparação da injúria racial ao racismo (Lei 14.532/2023).",
      mede: "Crimes de Racismo — atualização legislativa.",
      pegadinhaDesc: "A banca pode manter a injúria racial como crime prescritível do CP.",
      ondeErra: "Aplica o regime antigo (art. 140, § 3º, do CP).",
      palavraCritica: "imprescritível e inafiançável",
      tecnica: "A Lei 14.532/2023 deslocou a injúria racial para a Lei 7.716/89 (art. 2º-A), tornando-a imprescritível e inafiançável, com pena de reclusão de 2 a 5 anos e multa.",
      regraMental: "Injúria racial virou racismo: imprescritível e inafiançável (Lei 14.532/23)."
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.532/2023 inseriu a injúria racial na Lei 7.716/1989 (art. 2º-A), equiparando-a ao racismo, com pena de reclusão de 2 a 5 anos e multa, submetendo-a ao regime da imprescritibilidade e da inafiançabilidade. Superou-se o antigo tratamento como injúria qualificada do CP (art. 140, § 3º).",
      fundamento: "Lei 7.716/1989, art. 2º-A; Lei 14.532/2023.",
      macete: "Injúria racial = racismo (imprescritível, inafiançável) desde 2023.",
      erroComum: "Manter a injúria racial como crime prescritível do CP.",
      comoBancaPensa: "Explora a atualização trazida pela Lei 14.532/23."
    }
  },
  {
    id: "LE-092", disciplina: "Legislação Especial", assunto: "Crimes de Racismo", subassunto: "Negativa de emprego (art. 4º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 7.716/1989, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.72,
    enunciado: "Constitui crime negar ou obstar emprego em empresa privada a alguém em razão de raça, cor, etnia, religião ou procedência nacional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "obstar emprego",
    cognitivo: {
      motivo: "Cobrar a tipificação da discriminação no emprego (art. 4º).",
      mede: "Crimes de Racismo — condutas típicas.",
      pegadinhaDesc: "A banca pode restringir o tipo ao serviço público.",
      ondeErra: "Acha que só a discriminação no setor público é crime.",
      palavraCritica: "empresa privada",
      tecnica: "Art. 4º: negar ou obstar emprego em empresa privada por discriminação é crime.",
      regraMental: "Discriminar no emprego, público ou privado, é racismo."
    },
    comentario: {
      resolucao: "CERTO. O art. 4º da Lei 7.716/1989 tipifica como crime negar ou obstar emprego em empresa privada por motivo de discriminação de raça, cor, etnia, religião ou procedência nacional. A conduta alcança expressamente o setor privado.",
      fundamento: "Lei 7.716/1989, art. 4º.",
      macete: "Negar emprego por discriminação (mesmo na iniciativa privada) é crime.",
      erroComum: "Restringir o tipo ao serviço público.",
      comoBancaPensa: "Item de fixação (nível fácil)."
    }
  },
  {
    id: "LE-093", disciplina: "Legislação Especial", assunto: "Crimes de Racismo", subassunto: "Racismo × injúria (individualização)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 7.716/1989, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "Os crimes de racismo previstos na Lei 7.716/1989 somente se configuram quando a discriminação é dirigida a uma pessoa determinada e individualizada.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "pessoa determinada",
    cognitivo: {
      motivo: "Cobrar a distinção clássica racismo (coletividade) × injúria (individual).",
      mede: "Crimes de Racismo — bem jurídico e sujeito passivo.",
      pegadinhaDesc: "Restringe o racismo à ofensa individualizada (que é típica da injúria).",
      ondeErra: "Confunde o alcance coletivo do racismo com a ofensa individual da injúria.",
      palavraCritica: "somente / individualizada",
      tecnica: "O racismo, em regra, atinge a coletividade/grupo (discriminação segregacionista). A ofensa a pessoa determinada tende a caracterizar injúria racial (hoje também no regime da 7.716).",
      regraMental: "Racismo mira o grupo; injúria racial mira a pessoa. 'Somente individual' é falso."
    },
    comentario: {
      resolucao: "ERRADO. Os crimes de racismo da Lei 7.716/1989 têm caráter segregacionista e, tradicionalmente, atingem toda a coletividade ou um grupo, não exigindo vítima individualizada. A ofensa dirigida a pessoa determinada caracteriza, em regra, a injúria racial. Portanto, é incorreto afirmar que o racismo 'somente' se configura contra pessoa individualizada.",
      fundamento: "Lei 7.716/1989; distinção racismo × injúria racial.",
      macete: "Racismo = coletividade; injúria racial = pessoa determinada.",
      erroComum: "Exigir vítima individualizada para o racismo.",
      comoBancaPensa: "Restringe indevidamente o alcance do racismo."
    }
  },
  {
    id: "LE-094", disciplina: "Legislação Especial", assunto: "Crimes de Racismo", subassunto: "Negativa de atendimento (art. 5º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 7.716/1989, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.7,
    enunciado: "Recusar ou impedir o acesso de alguém a estabelecimento comercial, negando-lhe atendimento em razão de sua cor, constitui crime da Lei de Crimes Resultantes de Preconceito.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "estabelecimento comercial",
    cognitivo: {
      motivo: "Cobrar a tipificação da negativa de atendimento (art. 5º).",
      mede: "Crimes de Racismo — condutas típicas.",
      pegadinhaDesc: "A banca pode enquadrar a conduta apenas como ilícito civil.",
      ondeErra: "Trata a discriminação no atendimento como mero dano moral.",
      palavraCritica: "estabelecimento comercial",
      tecnica: "Art. 5º: recusar ou impedir acesso a estabelecimento comercial por discriminação é crime.",
      regraMental: "Barrar cliente por cor em loja = crime da Lei 7.716."
    },
    comentario: {
      resolucao: "CERTO. O art. 5º da Lei 7.716/1989 tipifica a conduta de recusar ou impedir o acesso a estabelecimento comercial, negando atendimento por discriminação. A conduta é crime, e não mero ilícito civil.",
      fundamento: "Lei 7.716/1989, art. 5º.",
      macete: "Negar atendimento por cor em comércio = crime.",
      erroComum: "Reduzir a conduta a ilícito civil.",
      comoBancaPensa: "Item de fixação (nível fácil)."
    }
  },
  {
    id: "LE-095", disciplina: "Legislação Especial", assunto: "Crimes de Racismo", subassunto: "Ação penal e retratação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 7.716/1989, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.7,
    enunciado: "A retratação do ofendido é causa de extinção da punibilidade nos crimes de racismo.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "retratação extingue a punibilidade",
    cognitivo: {
      motivo: "Cobrar a inexistência de retratação extintiva no racismo.",
      mede: "Crimes de Racismo — ação penal.",
      pegadinhaDesc: "Cria hipótese extintiva inexistente.",
      ondeErra: "Aplica lógica de crimes contra a honra ao racismo.",
      palavraCritica: "retratação extingue",
      tecnica: "Os crimes de racismo são de ação penal pública incondicionada e imprescritíveis; não há previsão de retratação extintiva da punibilidade.",
      regraMental: "Racismo: ação pública incondicionada. Retratação não apaga o crime."
    },
    comentario: {
      resolucao: "ERRADO. Os crimes de racismo são de ação penal pública incondicionada e imprescritíveis, não havendo previsão legal de extinção da punibilidade pela retratação do ofendido. A retratação extintiva é instituto próprio de outros crimes (ex.: calúnia e difamação, em certas hipóteses).",
      fundamento: "Lei 7.716/1989; CF, art. 5º, XLII.",
      macete: "Racismo não se 'desiste': ação pública incondicionada.",
      erroComum: "Admitir retratação extintiva.",
      comoBancaPensa: "Cria causa extintiva inexistente."
    }
  },
  {
    id: "LE-096", disciplina: "Legislação Especial", assunto: "Crimes de Racismo", subassunto: "Agravante do funcionário público (art. 20-A)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 7.716/1989 c/c Lei 14.532/2023, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "A prática de crime de racismo por funcionário público, no exercício de suas funções, constitui circunstância que agrava a pena.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "funcionário público no exercício",
    cognitivo: {
      motivo: "Cobrar a agravante introduzida pela Lei 14.532/2023 (art. 20-A).",
      mede: "Crimes de Racismo — causas de aumento/agravantes.",
      pegadinhaDesc: "A banca pode negar a existência da agravante.",
      ondeErra: "Desconhece a atualização de 2023.",
      palavraCritica: "agrava a pena",
      tecnica: "Art. 20-A (Lei 14.532/23): a pena é agravada quando o crime é cometido por funcionário público no exercício de suas funções ou a pretexto de exercê-las.",
      regraMental: "Racismo por servidor no exercício da função = agravante."
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.532/2023 inseriu o art. 20-A na Lei 7.716/1989, prevendo o agravamento da pena quando o crime for cometido por funcionário público no exercício de suas funções ou a pretexto de exercê-las, dentre outras hipóteses (ex.: em contexto esportivo, artístico ou cultural).",
      fundamento: "Lei 7.716/1989, art. 20-A; Lei 14.532/2023.",
      macete: "Servidor racista no exercício da função: pena agravada.",
      erroComum: "Ignorar a agravante criada em 2023.",
      comoBancaPensa: "Cobra a inovação legislativa recente."
    }
  },

  /* ============ LAVAGEM DE DINHEIRO (Lei 9.613/1998) ============ */
  {
    id: "LE-097", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Infração antecedente (Lei 12.683/2012)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Após a Lei 12.683/2012, qualquer infração penal pode figurar como antecedente do crime de lavagem de dinheiro, tendo sido abolido o rol taxativo de crimes antecedentes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "qualquer infração penal",
    cognitivo: {
      motivo: "Cobrar a evolução do crime antecedente (Lei 12.683/2012).",
      mede: "Lavagem de Dinheiro — infração antecedente.",
      pegadinhaDesc: "A banca pode manter o rol taxativo revogado.",
      ondeErra: "Reproduz a redação original da Lei 9.613/98.",
      palavraCritica: "qualquer infração penal",
      tecnica: "A Lei 12.683/2012 substituiu o rol de crimes antecedentes por 'infração penal' — hoje qualquer crime ou contravenção pode ser antecedente.",
      regraMental: "Terceira geração: qualquer infração penal antecede a lavagem."
    },
    comentario: {
      resolucao: "CERTO. A Lei 12.683/2012 alterou a Lei 9.613/1998, abolindo o rol taxativo de crimes antecedentes. Passou-se a admitir qualquer infração penal (crime ou contravenção) como antecedente da lavagem — a chamada legislação de 'terceira geração'.",
      fundamento: "Lei 9.613/1998, art. 1º, com redação da Lei 12.683/2012.",
      macete: "Sem rol: qualquer infração penal antecede a lavagem.",
      erroComum: "Manter o rol taxativo revogado.",
      comoBancaPensa: "Testa a atualização de 2012."
    }
  },
  {
    id: "LE-098", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Autonomia (art. 2º, II)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.83,
    enunciado: "A condenação pelo crime de lavagem de dinheiro depende de prévia condenação, transitada em julgado, pelo crime antecedente.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "prévia condenação transitada",
    cognitivo: {
      motivo: "Cobrar a autonomia do crime de lavagem (art. 2º, II).",
      mede: "Lavagem de Dinheiro — relação com o crime antecedente.",
      pegadinhaDesc: "Exige condenação prévia do antecedente, o que a lei dispensa.",
      ondeErra: "Trata a lavagem como acessória do crime antecedente.",
      palavraCritica: "prévia condenação transitada",
      tecnica: "Art. 2º, II: o processo e julgamento da lavagem independem do processo/julgamento do crime antecedente. Basta indícios suficientes da infração antecedente.",
      regraMental: "Lavagem é autônoma: não precisa de condenação prévia do antecedente."
    },
    comentario: {
      resolucao: "ERRADO. O art. 2º, II, da Lei 9.613/1998 consagra a autonomia do crime de lavagem: seu processo e julgamento independem do processo e julgamento das infrações penais antecedentes, bastando a existência de indícios suficientes da infração antecedente (art. 2º, § 1º).",
      fundamento: "Lei 9.613/1998, art. 2º, II e § 1º.",
      macete: "Lavagem é autônoma: indícios do antecedente já bastam.",
      erroComum: "Exigir condenação prévia do crime antecedente.",
      comoBancaPensa: "Trata a lavagem como crime acessório."
    }
  },
  {
    id: "LE-099", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Competência e processo (art. 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "O processo e o julgamento do crime de lavagem de dinheiro independem do processo e julgamento das infrações penais antecedentes, ainda que praticadas em outro país.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ainda que em outro país",
    cognitivo: {
      motivo: "Cobrar a autonomia mesmo quando o antecedente ocorre no exterior.",
      mede: "Lavagem de Dinheiro — autonomia e antecedente estrangeiro.",
      pegadinhaDesc: "A banca pode exigir que o antecedente ocorra no Brasil.",
      ondeErra: "Restringe o antecedente ao território nacional.",
      palavraCritica: "ainda que em outro país",
      tecnica: "Art. 2º, II: a autonomia vale mesmo que a infração antecedente tenha sido cometida no estrangeiro.",
      regraMental: "Antecedente pode ser lá fora — a lavagem aqui é autônoma."
    },
    comentario: {
      resolucao: "CERTO. O art. 2º, II, da Lei 9.613/1998 estabelece que o processo e julgamento da lavagem independem do processo e julgamento das infrações antecedentes, ainda que cometidas em outro país. Basta que a conduta antecedente também seja punível no local onde praticada.",
      fundamento: "Lei 9.613/1998, art. 2º, II.",
      macete: "Antecedente no exterior não impede a persecução da lavagem no Brasil.",
      erroComum: "Exigir o antecedente cometido no Brasil.",
      comoBancaPensa: "Restringe territorialmente o antecedente."
    }
  },
  {
    id: "LE-100", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Pena (art. 1º, § 4º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "O crime de lavagem de dinheiro é punido com pena de detenção de um a quatro anos e multa.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "detenção de um a quatro anos",
    cognitivo: {
      motivo: "Cobrar a pena do crime de lavagem.",
      mede: "Lavagem de Dinheiro — sanção.",
      pegadinhaDesc: "Troca reclusão de 3 a 10 anos por detenção de 1 a 4 anos.",
      ondeErra: "Não retém a pena correta.",
      palavraCritica: "detenção de um a quatro anos",
      tecnica: "Art. 1º: pena de RECLUSÃO de 3 a 10 anos e multa. Aumenta de 1/3 a 2/3 se cometida de forma reiterada ou por organização criminosa.",
      regraMental: "Lavagem: reclusão 3 a 10 + multa (não é detenção 1 a 4)."
    },
    comentario: {
      resolucao: "ERRADO. A lavagem de dinheiro é punida com reclusão de 3 a 10 anos e multa (art. 1º da Lei 9.613/1998), e não com detenção de 1 a 4 anos. A pena pode ser aumentada de 1/3 a 2/3 se os crimes forem cometidos de forma reiterada ou por meio de organização criminosa.",
      fundamento: "Lei 9.613/1998, art. 1º, caput e § 4º.",
      macete: "Lavagem: reclusão 3 a 10 anos + multa.",
      erroComum: "Trocar a pena por detenção de 1 a 4 anos.",
      comoBancaPensa: "Troca numérica clássica na pena."
    }
  },
  {
    id: "LE-101", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Colaboração premiada (art. 1º, § 5º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "No crime de lavagem, a colaboração espontânea do autor que leve à apuração das infrações e à localização dos bens pode ensejar redução de pena, seu cumprimento em regime aberto ou semiaberto, ou até o perdão judicial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "colaboração espontânea",
    cognitivo: {
      motivo: "Cobrar os efeitos da colaboração premiada na lavagem (art. 1º, § 5º).",
      mede: "Lavagem de Dinheiro — colaboração premiada.",
      pegadinhaDesc: "A banca pode limitar os benefícios só à redução de pena.",
      ondeErra: "Desconhece a amplitude dos benefícios (inclusive perdão judicial).",
      palavraCritica: "regime aberto ou semiaberto, ou perdão judicial",
      tecnica: "Art. 1º, § 5º: colaboração pode reduzir a pena (1/3 a 2/3), fixar regime inicial aberto/semiaberto, substituir por restritiva de direitos ou até conceder perdão judicial.",
      regraMental: "Colaboração na lavagem: reduz pena, abranda regime ou perdoa."
    },
    comentario: {
      resolucao: "CERTO. O art. 1º, § 5º, da Lei 9.613/1998 prevê que a colaboração espontânea que conduza à apuração das infrações, à identificação dos autores ou à localização dos bens pode acarretar redução de pena de 1 a 2/3, início em regime aberto ou semiaberto, substituição por pena restritiva de direitos ou perdão judicial.",
      fundamento: "Lei 9.613/1998, art. 1º, § 5º.",
      macete: "Colaboração: reduz, abranda regime ou perdoa.",
      erroComum: "Limitar os benefícios à mera redução de pena.",
      comoBancaPensa: "Restringe os efeitos da colaboração."
    }
  },
  {
    id: "LE-102", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "COAF (natureza)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.7,
    enunciado: "O Conselho de Controle de Atividades Financeiras (COAF) integra a estrutura do Ministério Público Federal, com atribuição de promover a ação penal nos crimes de lavagem.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "Ministério Público Federal",
    cognitivo: {
      motivo: "Cobrar a natureza e a função do COAF.",
      mede: "Lavagem de Dinheiro — unidade de inteligência financeira.",
      pegadinhaDesc: "Atribui ao COAF função persecutória e o vincula ao MPF.",
      ondeErra: "Confunde o COAF (inteligência financeira) com órgão de persecução penal.",
      palavraCritica: "Ministério Público Federal / promover a ação penal",
      tecnica: "O COAF é a unidade de inteligência financeira do Brasil, atualmente vinculado ao Banco Central; sua função é receber, examinar e identificar operações suspeitas — não promove ação penal.",
      regraMental: "COAF = inteligência financeira (não é MP e não denuncia)."
    },
    comentario: {
      resolucao: "ERRADO. O COAF é a Unidade de Inteligência Financeira do Brasil, atualmente vinculado ao Banco Central. Sua função é receber, examinar e identificar ocorrências suspeitas de lavagem, comunicando as autoridades competentes. Não integra o Ministério Público Federal nem promove a ação penal.",
      fundamento: "Lei 9.613/1998, arts. 14 e 15.",
      macete: "COAF: inteligência financeira, não persecução penal.",
      erroComum: "Vincular o COAF ao MP e atribuir-lhe a ação penal.",
      comoBancaPensa: "Troca a natureza e a atribuição do órgão."
    }
  },
  {
    id: "LE-103", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Alienação antecipada (art. 4º-A)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.68,
    enunciado: "O juiz poderá determinar a alienação antecipada dos bens apreendidos ou sequestrados quando estiverem sujeitos a deterioração ou depreciação, ou quando houver dificuldade para sua manutenção.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "alienação antecipada",
    cognitivo: {
      motivo: "Cobrar a alienação antecipada de bens (art. 4º-A).",
      mede: "Lavagem de Dinheiro — medidas assecuratórias.",
      pegadinhaDesc: "A banca pode dizer que a alienação só ocorre após o trânsito em julgado.",
      ondeErra: "Confunde alienação antecipada com efeito da condenação definitiva.",
      palavraCritica: "alienação antecipada",
      tecnica: "Art. 4º-A: alienação antecipada para preservar o valor dos bens sujeitos a deterioração/depreciação ou de difícil manutenção.",
      regraMental: "Bem que estraga ou custa manter: aliena antes da sentença definitiva."
    },
    comentario: {
      resolucao: "CERTO. O art. 4º-A da Lei 9.613/1998 autoriza a alienação antecipada de bens sob medida assecuratória para preservação do respectivo valor, quando estejam sujeitos a deterioração ou depreciação ou quando houver dificuldade para sua manutenção. Não se aguarda o trânsito em julgado.",
      fundamento: "Lei 9.613/1998, art. 4º-A.",
      macete: "Bem que perde valor/dá custo: aliena antecipadamente.",
      erroComum: "Condicionar a alienação ao trânsito em julgado.",
      comoBancaPensa: "Confunde medida cautelar com efeito da condenação."
    }
  },

  /* ============ JUIZADOS ESPECIAIS CRIMINAIS (Lei 9.099/1995) ============ */
  {
    id: "LE-104", disciplina: "Legislação Especial", assunto: "Juizados Especiais Criminais", subassunto: "Menor potencial ofensivo (art. 61)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.099/1995, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "Consideram-se infrações de menor potencial ofensivo as contravenções penais e os crimes a que a lei comine pena máxima não superior a dois anos, cumulada ou não com multa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não superior a dois anos",
    cognitivo: {
      motivo: "Cobrar o conceito de menor potencial ofensivo (art. 61).",
      mede: "JECRIM — competência.",
      pegadinhaDesc: "A banca costuma trocar 'dois anos' por 'um ano' ou usar pena mínima.",
      ondeErra: "Confunde pena máxima (competência) com pena mínima (suspensão do processo).",
      palavraCritica: "pena máxima não superior a dois anos",
      tecnica: "Art. 61: IMPO = contravenções + crimes com pena MÁXIMA não superior a 2 anos (cumulada ou não com multa).",
      regraMental: "Menor potencial: pena MÁXIMA ≤ 2 anos."
    },
    comentario: {
      resolucao: "CERTO. O art. 61 da Lei 9.099/1995 define como infrações de menor potencial ofensivo as contravenções penais e os crimes a que a lei comine pena máxima não superior a dois anos, cumulada ou não com multa. É o critério de competência dos Juizados Especiais Criminais.",
      fundamento: "Lei 9.099/1995, art. 61.",
      macete: "IMPO: pena máxima ≤ 2 anos (ou contravenção).",
      erroComum: "Usar a pena mínima ou o limite de 1 ano.",
      comoBancaPensa: "Troca o parâmetro (máxima × mínima)."
    }
  },
  {
    id: "LE-105", disciplina: "Legislação Especial", assunto: "Juizados Especiais Criminais", subassunto: "Suspensão condicional do processo (art. 89)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.099/1995, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "A suspensão condicional do processo é cabível nos crimes cuja pena máxima cominada não seja superior a um ano.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "pena máxima não superior a um ano",
    cognitivo: {
      motivo: "Cobrar o requisito da suspensão condicional do processo (art. 89).",
      mede: "JECRIM — sursis processual.",
      pegadinhaDesc: "Troca pena mínima por pena máxima.",
      ondeErra: "Confunde o parâmetro do art. 89 (pena mínima) com o do art. 61 (pena máxima).",
      palavraCritica: "pena máxima não superior a um ano",
      tecnica: "Art. 89: a suspensão condicional do processo cabe quando a pena MÍNIMA cominada for igual ou inferior a um ano.",
      regraMental: "Suspensão do processo: pena MÍNIMA ≤ 1 ano."
    },
    comentario: {
      resolucao: "ERRADO. O art. 89 da Lei 9.099/1995 admite a suspensão condicional do processo nos crimes em que a pena MÍNIMA cominada seja igual ou inferior a um ano. O erro está em usar a pena máxima como parâmetro — o correto é a pena mínima.",
      fundamento: "Lei 9.099/1995, art. 89.",
      macete: "Sursis processual: pena MÍNIMA ≤ 1 ano.",
      erroComum: "Usar a pena máxima em vez da mínima.",
      comoBancaPensa: "Troca o parâmetro (mínima × máxima)."
    }
  },
  {
    id: "LE-106", disciplina: "Legislação Especial", assunto: "Juizados Especiais Criminais", subassunto: "Proposta de suspensão (art. 89)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.099/1995, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Ao oferecer a denúncia, o Ministério Público poderá propor a suspensão condicional do processo, por dois a quatro anos, ao acusado que não esteja sendo processado nem tenha sido condenado por outro crime, presentes os demais requisitos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dois a quatro anos",
    cognitivo: {
      motivo: "Cobrar os requisitos e o período de prova do sursis processual (art. 89).",
      mede: "JECRIM — suspensão condicional do processo.",
      pegadinhaDesc: "A banca pode trocar o período de prova (2 a 4 anos) por outro.",
      ondeErra: "Não retém o período de prova ou os requisitos subjetivos.",
      palavraCritica: "dois a quatro anos",
      tecnica: "Art. 89: proposta pelo MP, período de prova de 2 a 4 anos, exigindo-se que o réu não esteja sendo processado/condenado por outro crime e os requisitos do sursis (CP, art. 77).",
      regraMental: "Sursis processual: período de prova de 2 a 4 anos."
    },
    comentario: {
      resolucao: "CERTO. O art. 89 da Lei 9.099/1995 autoriza o Ministério Público, ao oferecer a denúncia, a propor a suspensão condicional do processo por período de prova de dois a quatro anos, desde que o acusado não esteja sendo processado ou não tenha sido condenado por outro crime e presentes os demais requisitos do art. 77 do CP.",
      fundamento: "Lei 9.099/1995, art. 89; CP, art. 77.",
      macete: "Período de prova do sursis processual: 2 a 4 anos.",
      erroComum: "Alterar o período de prova.",
      comoBancaPensa: "Troca numérica no período de prova."
    }
  },
  {
    id: "LE-107", disciplina: "Legislação Especial", assunto: "Juizados Especiais Criminais", subassunto: "Efeitos da transação penal (art. 76)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.099/1995, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A aceitação da proposta de transação penal implica reconhecimento de culpa e gera reincidência e maus antecedentes ao autor do fato.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "reconhecimento de culpa",
    cognitivo: {
      motivo: "Cobrar a natureza da transação penal (art. 76, § 4º e § 6º).",
      mede: "JECRIM — efeitos da transação.",
      pegadinhaDesc: "Atribui efeitos de condenação à transação penal.",
      ondeErra: "Equipara a transação a uma sentença condenatória.",
      palavraCritica: "reconhecimento de culpa / reincidência",
      tecnica: "Art. 76: a transação não importa reincidência, não consta de certidão de antecedentes (salvo para impedir novo benefício em 5 anos) e não implica reconhecimento de culpabilidade civil.",
      regraMental: "Transação não é condenação: sem culpa, sem reincidência, sem maus antecedentes."
    },
    comentario: {
      resolucao: "ERRADO. A transação penal (art. 76) não importa reincidência nem maus antecedentes, sendo registrada apenas para impedir novo benefício no prazo de cinco anos. Também não implica reconhecimento de culpa ou de responsabilidade civil. Trata-se de acordo despenalizador, e não de condenação.",
      fundamento: "Lei 9.099/1995, art. 76, §§ 4º e 6º.",
      macete: "Transação: sem culpa, sem reincidência, sem antecedente.",
      erroComum: "Tratar a transação como condenação.",
      comoBancaPensa: "Atribui efeitos de sentença à transação penal."
    }
  },
  {
    id: "LE-108", disciplina: "Legislação Especial", assunto: "Juizados Especiais Criminais", subassunto: "Composição civil dos danos (art. 74)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.099/1995, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "Nos crimes de ação penal privada ou pública condicionada à representação, a homologação do acordo de composição civil dos danos acarreta a renúncia ao direito de queixa ou de representação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "renúncia ao direito de queixa ou representação",
    cognitivo: {
      motivo: "Cobrar o efeito da composição civil homologada (art. 74, parágrafo único).",
      mede: "JECRIM — composição civil dos danos.",
      pegadinhaDesc: "A banca pode estender o efeito à ação penal pública incondicionada.",
      ondeErra: "Aplica a renúncia também aos crimes de ação pública incondicionada.",
      palavraCritica: "privada ou condicionada",
      tecnica: "Art. 74, parágrafo único: a composição civil homologada, nos crimes de ação privada ou pública condicionada, importa renúncia ao direito de queixa/representação. Na ação pública incondicionada, não tem esse efeito.",
      regraMental: "Composição civil só extingue queixa/representação (privada ou condicionada)."
    },
    comentario: {
      resolucao: "CERTO. O parágrafo único do art. 74 da Lei 9.099/1995 dispõe que, nos crimes de ação penal privada ou pública condicionada à representação, o acordo de composição civil dos danos homologado acarreta a renúncia ao direito de queixa ou de representação. Nos crimes de ação pública incondicionada, a composição não gera esse efeito extintivo.",
      fundamento: "Lei 9.099/1995, art. 74, parágrafo único.",
      macete: "Composição civil = renúncia (só na privada/condicionada).",
      erroComum: "Estender o efeito à ação pública incondicionada.",
      comoBancaPensa: "Testa o alcance do efeito extintivo."
    }
  },
  {
    id: "LE-109", disciplina: "Legislação Especial", assunto: "Juizados Especiais Criminais", subassunto: "Princípios (art. 62)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.099/1995, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.74,
    enunciado: "O processo perante o Juizado Especial Criminal orienta-se pelos critérios da oralidade, simplicidade, informalidade, economia processual e celeridade, bem como do contraditório diferido obrigatório.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "contraditório diferido obrigatório",
    cognitivo: {
      motivo: "Cobrar os critérios orientadores do JECRIM (art. 62).",
      mede: "JECRIM — princípios.",
      pegadinhaDesc: "Emenda um 'princípio' inexistente à lista correta.",
      ondeErra: "Aceita o acréscimo por reconhecer os primeiros critérios como verdadeiros.",
      palavraCritica: "contraditório diferido obrigatório",
      tecnica: "Art. 62: oralidade, simplicidade, informalidade, economia processual e celeridade. Não há 'contraditório diferido obrigatório' entre os critérios.",
      regraMental: "Critérios do JECRIM: OSIEC (Oralidade, Simplicidade, Informalidade, Economia, Celeridade)."
    },
    comentario: {
      resolucao: "ERRADO. O art. 62 da Lei 9.099/1995 elenca os critérios da oralidade, simplicidade, informalidade, economia processual e celeridade. Não figura entre eles o 'contraditório diferido obrigatório', que foi indevidamente acrescentado. A parte inicial é verdadeira, mas o item final torna a assertiva incorreta.",
      fundamento: "Lei 9.099/1995, art. 62.",
      macete: "OSIEC: oralidade, simplicidade, informalidade, economia, celeridade.",
      erroComum: "Aceitar a lista por seus primeiros itens corretos.",
      comoBancaPensa: "Adiciona item falso ao final de uma lista verdadeira."
    }
  },
  {
    id: "LE-110", disciplina: "Legislação Especial", assunto: "Juizados Especiais Criminais", subassunto: "Termo circunstanciado (art. 69)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.099/1995, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "A autoridade policial que tomar conhecimento de infração de menor potencial ofensivo lavrará termo circunstanciado; ao autor do fato que for imediatamente encaminhado ao juizado ou assumir compromisso de a ele comparecer não se imporá prisão em flagrante.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "termo circunstanciado",
    cognitivo: {
      motivo: "Cobrar o procedimento do termo circunstanciado (art. 69).",
      mede: "JECRIM — fase policial.",
      pegadinhaDesc: "A banca pode impor flagrante mesmo com compromisso de comparecimento.",
      ondeErra: "Ignora a vedação ao flagrante quando há encaminhamento/compromisso.",
      palavraCritica: "não se imporá prisão em flagrante",
      tecnica: "Art. 69, parágrafo único: quem é encaminhado ao juizado ou assume compromisso de comparecer não é preso em flagrante nem se exige fiança.",
      regraMental: "Assumiu compromisso de comparecer? Não há flagrante nas IMPO."
    },
    comentario: {
      resolucao: "CERTO. O art. 69 da Lei 9.099/1995 determina que a autoridade policial lavre termo circunstanciado nas infrações de menor potencial ofensivo. Conforme o parágrafo único, ao autor do fato imediatamente encaminhado ao juizado ou que assuma o compromisso de comparecer não se imporá prisão em flagrante nem se exigirá fiança.",
      fundamento: "Lei 9.099/1995, art. 69, caput e parágrafo único.",
      macete: "TC + compromisso de comparecer = sem flagrante e sem fiança.",
      erroComum: "Impor flagrante mesmo com compromisso de comparecimento.",
      comoBancaPensa: "Testa a vedação ao flagrante nas IMPO."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE16);

/* Frequência de temas — Legislação Penal Especial II (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Legislação Especial");
  if (!d) { d = { disciplina: "Legislação Especial", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Lavagem — autonomia e infração antecedente", freq: 86, tendencia: "alta", prob: 0.88 },
    { tema: "Racismo — injúria racial (Lei 14.532/23)", freq: 84, tendencia: "alta", prob: 0.86 },
    { tema: "Ambientais — responsabilidade penal da PJ", freq: 80, tendencia: "estavel", prob: 0.82 },
    { tema: "JECRIM — transação, suspensão e menor potencial", freq: 88, tendencia: "alta", prob: 0.89 },
  );
})();
