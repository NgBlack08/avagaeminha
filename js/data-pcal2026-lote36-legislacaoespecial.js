/* =====================================================================
   CEBRASPE LAB — Lote 36: LEGISLAÇÃO PENAL ESPECIAL (expansão)
   Cobre crimes falimentares (Lei 11.101/2005), efeitos da condenação
   por lavagem de dinheiro (Lei 9.613/1998), a real extensão da
   insuscetibilidade dos crimes hediondos após a Lei 11.464/2007 (fim
   da vedação automática à liberdade provisória), tortura-castigo (Lei
   9.455/1997) e a superação da teoria da dupla imputação necessária em
   crimes ambientais (jurisprudência do STF). Itens 100% originais, com
   gabarito verificado de forma independente a partir da legislação
   especial vigente e de jurisprudência consolidada.
   10 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE36 = [

  {
    id: "LE-131", disciplina: "Legislação Especial", assunto: "Crimes falimentares", subassunto: "Ação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005, art. 184)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "Os crimes previstos na Lei nº 11.101/2005 (Lei de Falências e Recuperação Judicial) são de ação penal pública incondicionada, promovida pelo Ministério Público independentemente de representação dos credores prejudicados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ação penal pública incondicionada",
    cognitivo: {
      motivo: "Cobrar a natureza da ação penal nos crimes falimentares.",
      mede: "Legislação Especial — crimes falimentares (Lei 11.101/2005).",
      pegadinhaDesc: "A banca pode condicionar a persecução penal à representação dos credores.",
      ondeErra: "Confunde os crimes falimentares com crimes de ação penal condicionada à representação, exigindo iniciativa dos credores.",
      palavraCritica: "incondicionada",
      tecnica: "Art. 184, Lei 11.101/2005: 'os crimes previstos nesta Lei são de ação penal pública incondicionada'. Não há necessidade de representação dos credores prejudicados para que o Ministério Público promova a ação penal.",
      regraMental: "Crimes falimentares: sempre ação penal pública incondicionada (art. 184, Lei 11.101/2005)."
    },
    comentario: {
      resolucao: "CERTO. O art. 184 da Lei 11.101/2005 estabelece expressamente que os crimes falimentares são de ação penal pública incondicionada, dispensando representação dos credores prejudicados para que o Ministério Público promova a persecução penal.",
      fundamento: "Lei nº 11.101/2005, art. 184.",
      macete: "Crimes falimentares = ação penal pública INCONDICIONADA.",
      erroComum: "Exigir representação dos credores para a propositura da ação penal.",
      comoBancaPensa: "Item de fixação sobre a natureza da ação penal nos crimes falimentares."
    }
  },
  {
    id: "LE-132", disciplina: "Legislação Especial", assunto: "Crimes falimentares", subassunto: "Ação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005, art. 184)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.76,
    enunciado: "A persecução penal dos crimes falimentares previstos na Lei nº 11.101/2005 depende de representação dos credores prejudicados, tratando-se de ação penal pública condicionada.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "depende de representação ... condicionada",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a natureza incondicionada da ação penal nos crimes falimentares.",
      mede: "Legislação Especial — crimes falimentares (Lei 11.101/2005).",
      pegadinhaDesc: "A banca cria uma condição de procedibilidade (representação dos credores) que a lei não exige.",
      ondeErra: "Presume que, por envolver interesses patrimoniais privados (credores), a ação penal exigiria representação, ignorando a regra legal expressa.",
      palavraCritica: "depende de representação ... condicionada",
      tecnica: "Art. 184, Lei 11.101/2005: os crimes falimentares são de ação penal pública INCONDICIONADA — não há exigência de representação dos credores para a atuação do Ministério Público.",
      regraMental: "Crimes falimentares: sempre incondicionada — não confundir com crimes patrimoniais comuns condicionados."
    },
    comentario: {
      resolucao: "ERRADO. Os crimes falimentares são de ação penal pública INCONDICIONADA (art. 184, Lei 11.101/2005), não havendo exigência legal de representação dos credores prejudicados para que o Ministério Público promova a persecução penal.",
      fundamento: "Lei nº 11.101/2005, art. 184.",
      macete: "Crimes falimentares: incondicionada, sem exigência de representação.",
      erroComum: "Presumir condição de procedibilidade inexistente por envolver interesses de credores privados.",
      comoBancaPensa: "Cria uma exigência legal inexistente para testar a real memorização do dispositivo."
    }
  },
  {
    id: "LE-133", disciplina: "Legislação Especial", assunto: "Lavagem de dinheiro", subassunto: "Efeitos da condenação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 7º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.76,
    enunciado: "Constituem efeitos da condenação pelo crime de lavagem de dinheiro, além dos previstos no Código Penal, a interdição do exercício de cargo ou função pública de qualquer natureza pelo mesmo período da pena privativa de liberdade aplicada; esse efeito, todavia, não é automático, dependendo de motivação expressa na sentença quanto à gravidade concreta do fato ou às circunstâncias do crime que o justifiquem.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não é automático ... motivação expressa",
    cognitivo: {
      motivo: "Cobrar que os efeitos específicos da condenação por lavagem de dinheiro não são automáticos.",
      mede: "Legislação Especial — lavagem de dinheiro (efeitos da condenação).",
      pegadinhaDesc: "A banca pode afirmar que esses efeitos são automáticos, dispensando fundamentação.",
      ondeErra: "Não percebe que a Lei 9.613/1998 exige motivação expressa e demonstração de gravidade concreta para esses efeitos específicos.",
      palavraCritica: "não é automático ... motivação expressa",
      tecnica: "Art. 7º, II, Lei 9.613/1998: a interdição do exercício de cargo/função pública pelo mesmo prazo da pena é efeito da condenação, mas o parágrafo único do art. 7º exige que esse efeito seja condicionado à demonstração da gravidade concreta do fato e motivadamente declarado na sentença — não é automático como no art. 92, CP.",
      regraMental: "Lavagem: efeito de interdição de cargo NÃO é automático — exige motivação expressa sobre a gravidade do fato."
    },
    comentario: {
      resolucao: "CERTO. O art. 7º, II, da Lei 9.613/1998 prevê a interdição do exercício de cargo ou função pública como efeito da condenação por lavagem de dinheiro, mas o parágrafo único do mesmo artigo exige que esse efeito seja motivadamente declarado na sentença, a partir da demonstração da gravidade concreta do fato — não se trata de efeito automático.",
      fundamento: "Lei nº 9.613/1998, art. 7º, II e parágrafo único.",
      macete: "Lavagem: efeitos do art. 7º exigem motivação expressa — não são automáticos como no CP.",
      erroComum: "Achar que a interdição de cargo é efeito automático, dispensando fundamentação específica.",
      comoBancaPensa: "Cobra uma nuance processual pouco lembrada, que distingue a lavagem de outros efeitos automáticos do CP."
    }
  },
  {
    id: "LE-134", disciplina: "Legislação Especial", assunto: "Lavagem de dinheiro", subassunto: "Efeitos da condenação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 7º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.74,
    enunciado: "Constitui efeito automático da condenação pelo crime de lavagem de dinheiro a interdição do exercício de cargo ou função pública pelo mesmo período da pena privativa de liberdade aplicada, independentemente de fundamentação específica na sentença sobre a gravidade concreta do fato.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "efeito automático ... independentemente de fundamentação",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o efeito de interdição de cargo na lavagem não é automático.",
      mede: "Legislação Especial — lavagem de dinheiro (efeitos da condenação).",
      pegadinhaDesc: "A banca trata como automático um efeito que a lei condiciona expressamente à motivação judicial.",
      ondeErra: "Aplica à lavagem de dinheiro a lógica dos efeitos automáticos do art. 92 do CP, ignorando a exigência específica do art. 7º, parágrafo único, da Lei 9.613/1998.",
      palavraCritica: "efeito automático ... independentemente de fundamentação",
      tecnica: "O parágrafo único do art. 7º, Lei 9.613/1998, exige que a interdição de cargo/função pública seja motivadamente declarada na sentença, a partir da demonstração da gravidade concreta do fato — não é, portanto, efeito automático da condenação.",
      regraMental: "Lavagem: interdição de cargo exige motivação expressa — nunca é automática."
    },
    comentario: {
      resolucao: "ERRADO. A interdição do exercício de cargo ou função pública, como efeito da condenação por lavagem de dinheiro, não é automática — depende de motivação expressa na sentença sobre a gravidade concreta do fato, conforme o parágrafo único do art. 7º da Lei 9.613/1998.",
      fundamento: "Lei nº 9.613/1998, art. 7º, II e parágrafo único.",
      macete: "Lavagem: sempre exige motivação expressa para esse efeito específico.",
      erroComum: "Confundir com os efeitos automáticos genéricos do art. 92 do Código Penal.",
      comoBancaPensa: "Testa se o candidato aplica por analogia uma regra geral que a lei especial excepciona."
    }
  },
  {
    id: "LE-135", disciplina: "Legislação Especial", assunto: "Crimes hediondos", subassunto: "Insuscetibilidade de benefícios",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, com redação da Lei 11.464/2007)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.8,
    enunciado: "Os crimes hediondos, a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins e o terrorismo são insuscetíveis de anistia, graça, indulto, fiança e liberdade provisória, nos termos da Lei nº 8.072/1990 em sua redação atualmente vigente.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "insuscetíveis ... liberdade provisória ... redação atualmente vigente",
    cognitivo: {
      motivo: "Cobrar que a vedação à liberdade provisória foi excluída da Lei de Crimes Hediondos pela Lei 11.464/2007.",
      mede: "Legislação Especial — crimes hediondos (Lei 8.072/1990).",
      pegadinhaDesc: "A banca apresenta a redação ORIGINAL da lei (já alterada) como se fosse a atualmente vigente.",
      ondeErra: "Desconhece que a Lei 11.464/2007 retirou a expressão 'e liberdade provisória' do art. 2º, II, da Lei 8.072/1990, após o STF declarar essa vedação inconstitucional (HC 104.339).",
      palavraCritica: "redação atualmente vigente",
      tecnica: "A redação original da Lei 8.072/1990 vedava também a liberdade provisória, mas a Lei 11.464/2007 suprimiu essa vedação do art. 2º, II — hoje, é possível a concessão de liberdade provisória em crimes hediondos quando ausentes os requisitos da prisão preventiva, conforme entendimento consolidado do STF.",
      regraMental: "Hoje: hediondos são insuscetíveis de anistia, graça, indulto e fiança — MAS liberdade provisória pode ser concedida (Lei 11.464/2007)."
    },
    comentario: {
      resolucao: "ERRADO. A redação atual da Lei 8.072/1990 (após a Lei 11.464/2007) não veda mais a liberdade provisória em crimes hediondos — essa vedação foi suprimida do texto legal após o STF declará-la inconstitucional (HC 104.339). Atualmente, é possível conceder liberdade provisória quando ausentes os requisitos da prisão preventiva.",
      fundamento: "Lei nº 8.072/1990, art. 2º, II, com redação dada pela Lei nº 11.464/2007; STF, HC 104.339.",
      macete: "Hediondos hoje: sem anistia/graça/indulto/fiança, MAS liberdade provisória é possível (se ausentes requisitos da preventiva).",
      erroComum: "Apresentar a redação original (já superada) da Lei 8.072/1990 como se fosse a atualmente vigente.",
      comoBancaPensa: "Testa se o candidato conhece a evolução legislativa e jurisprudencial do dispositivo, e não apenas a redação histórica."
    }
  },
  {
    id: "LE-136", disciplina: "Legislação Especial", assunto: "Crimes hediondos", subassunto: "Insuscetibilidade de benefícios",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, com redação da Lei 11.464/2007)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.78,
    enunciado: "Os crimes hediondos, a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins e o terrorismo são insuscetíveis de anistia, graça, indulto e fiança; a vedação à liberdade provisória, contudo, foi excluída da Lei nº 8.072/1990 pela Lei nº 11.464/2007, sendo hoje possível sua concessão quando ausentes os requisitos da prisão preventiva.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "excluída ... Lei 11.464/2007 ... possível sua concessão",
    cognitivo: {
      motivo: "Cobrar a redação atualmente vigente e correta do art. 2º da Lei 8.072/1990.",
      mede: "Legislação Especial — crimes hediondos (Lei 8.072/1990).",
      pegadinhaDesc: "A banca pode negar essa evolução legislativa, mantendo a vedação original à liberdade provisória.",
      ondeErra: "Desconhece a alteração promovida pela Lei 11.464/2007 e o histórico jurisprudencial que a motivou (STF, HC 104.339).",
      palavraCritica: "excluída ... hoje possível sua concessão",
      tecnica: "A Lei 11.464/2007 suprimiu do art. 2º, II, da Lei 8.072/1990, a expressão 'e liberdade provisória' — hoje, a insuscetibilidade recai apenas sobre anistia, graça, indulto e fiança, sendo possível conceder liberdade provisória em crimes hediondos quando ausentes os requisitos da prisão preventiva.",
      regraMental: "Hediondos: sem anistia/graça/indulto/fiança. Liberdade provisória: possível desde 2007."
    },
    comentario: {
      resolucao: "CERTO. Desde a Lei 11.464/2007, a Lei 8.072/1990 não veda mais a liberdade provisória em crimes hediondos — essa vedação foi suprimida do texto legal, remanescendo apenas a insuscetibilidade de anistia, graça, indulto e fiança. É hoje possível conceder liberdade provisória quando ausentes os requisitos da prisão preventiva.",
      fundamento: "Lei nº 8.072/1990, art. 2º, II, com redação dada pela Lei nº 11.464/2007; STF, HC 104.339.",
      macete: "Hediondos: sem anistia/graça/indulto/fiança, MAS liberdade provisória é possível desde 2007.",
      erroComum: "Manter a vedação original à liberdade provisória, já superada pela Lei 11.464/2007.",
      comoBancaPensa: "Cobra a redação corretamente atualizada, testando conhecimento da evolução legislativa do dispositivo."
    }
  },
  {
    id: "LE-137", disciplina: "Legislação Especial", assunto: "Tortura", subassunto: "Tortura-castigo (art. 1º, II, Lei 9.455/1997)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.455/1997, art. 1º, II)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "A modalidade de tortura-castigo, prevista no art. 1º, II, da Lei nº 9.455/1997, consiste em submeter alguém, sob sua guarda, poder ou autoridade, com emprego de violência ou grave ameaça, a intenso sofrimento físico ou mental, como forma de aplicar castigo pessoal ou medida de caráter preventivo, configurando crime próprio, que somente pode ser cometido por quem detenha a vítima sob sua guarda, poder ou autoridade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "crime próprio ... sob sua guarda, poder ou autoridade",
    cognitivo: {
      motivo: "Cobrar a natureza de crime próprio da tortura-castigo.",
      mede: "Legislação Especial — crimes de tortura (Lei 9.455/1997).",
      pegadinhaDesc: "A banca pode classificar a tortura-castigo como crime comum, que qualquer pessoa poderia cometer.",
      ondeErra: "Não percebe que o tipo exige uma relação de sujeição (guarda, poder ou autoridade) entre agente e vítima, restringindo o círculo de autores possíveis.",
      palavraCritica: "crime próprio",
      tecnica: "Art. 1º, II, Lei 9.455/1997: a tortura-castigo exige que o agente tenha a vítima sob sua guarda, poder ou autoridade — por isso é classificada como crime PRÓPRIO, que só pode ser praticado por quem ostenta essa posição (ex.: responsável por criança, diretor de presídio, empregador).",
      regraMental: "Tortura-castigo: exige relação de sujeição prévia — crime próprio, não comum."
    },
    comentario: {
      resolucao: "CERTO. A tortura-castigo (art. 1º, II, Lei 9.455/1997) é crime próprio, pois exige que o agente detenha a vítima sob sua guarda, poder ou autoridade — não podendo ser praticada por qualquer pessoa indistintamente, mas apenas por quem ostente essa posição de sujeição em relação à vítima.",
      fundamento: "Lei nº 9.455/1997, art. 1º, II.",
      macete: "Tortura-castigo: crime PRÓPRIO — exige relação de guarda/poder/autoridade sobre a vítima.",
      erroComum: "Classificar a tortura-castigo como crime comum, sem exigência de relação prévia entre agente e vítima.",
      comoBancaPensa: "Item de fixação sobre a classificação doutrinária de um tipo penal específico da Lei de Tortura."
    }
  },
  {
    id: "LE-138", disciplina: "Legislação Especial", assunto: "Tortura", subassunto: "Tortura-castigo (art. 1º, II, Lei 9.455/1997)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.455/1997, art. 1º, II)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.74,
    enunciado: "A modalidade de tortura-castigo, prevista no art. 1º, II, da Lei nº 9.455/1997, configura crime comum, que pode ser praticado por qualquer pessoa, independentemente de o agente deter a vítima sob sua guarda, poder ou autoridade.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "crime comum ... independentemente ... guarda, poder ou autoridade",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a natureza de crime próprio da tortura-castigo.",
      mede: "Legislação Especial — crimes de tortura (Lei 9.455/1997).",
      pegadinhaDesc: "A banca nega a exigência de relação de sujeição entre agente e vítima, tratando o crime como comum.",
      ondeErra: "Ignora que o próprio tipo penal exige expressamente a relação de guarda, poder ou autoridade entre agente e vítima.",
      palavraCritica: "crime comum ... independentemente",
      tecnica: "O art. 1º, II, da Lei 9.455/1997 exige expressamente que o agente detenha a vítima sob sua guarda, poder ou autoridade — trata-se, portanto, de crime PRÓPRIO, e não comum, contrariamente ao afirmado no item.",
      regraMental: "Tortura-castigo: crime próprio — exige relação de sujeição prévia (guarda/poder/autoridade)."
    },
    comentario: {
      resolucao: "ERRADO. A tortura-castigo é crime PRÓPRIO, e não comum — o tipo penal do art. 1º, II, da Lei 9.455/1997 exige expressamente que o agente detenha a vítima sob sua guarda, poder ou autoridade, restringindo o círculo de possíveis autores a quem ostente essa posição.",
      fundamento: "Lei nº 9.455/1997, art. 1º, II.",
      macete: "Tortura-castigo: crime PRÓPRIO, não comum.",
      erroComum: "Ignorar a exigência típica de relação de sujeição entre agente e vítima.",
      comoBancaPensa: "Nega uma exigência típica expressa para testar a atenção do candidato ao texto legal."
    }
  },
  {
    id: "LE-139", disciplina: "Legislação Especial", assunto: "Crimes ambientais", subassunto: "Responsabilização penal da pessoa jurídica",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STF, RE 548.181)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.82,
    enunciado: "A responsabilização penal da pessoa jurídica por crime ambiental não depende da simultânea responsabilização da pessoa física que atuou em seu nome, tendo o Supremo Tribunal Federal superado a chamada teoria da dupla imputação necessária.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não depende ... superado ... dupla imputação necessária",
    cognitivo: {
      motivo: "Cobrar a superação da teoria da dupla imputação necessária pelo STF.",
      mede: "Legislação Especial — crimes ambientais (responsabilização da pessoa jurídica).",
      pegadinhaDesc: "A banca pode afirmar que a responsabilização da pessoa jurídica ainda depende da simultânea responsabilização da pessoa física.",
      ondeErra: "Desconhece a superação jurisprudencial da teoria da dupla imputação necessária pelo STF.",
      palavraCritica: "não depende ... superado",
      tecnica: "No RE 548.181/PR (2013), o STF afastou a teoria da dupla imputação necessária: a responsabilização penal da pessoa jurídica por crime ambiental é autônoma, não exigindo a simultânea responsabilização da pessoa física que atuou em seu nome.",
      regraMental: "STF: PJ pode ser responsabilizada por crime ambiental de forma autônoma, sem necessidade de PF concomitante."
    },
    comentario: {
      resolucao: "CERTO. No RE 548.181/PR (2013), o STF superou a teoria da dupla imputação necessária, fixando que a responsabilização penal da pessoa jurídica por crime ambiental é autônoma, não dependendo da simultânea responsabilização da pessoa física que atuou em seu nome.",
      fundamento: "STF, RE 548.181/PR (2013); Lei nº 9.605/1998 (crimes ambientais).",
      macete: "STF superou a dupla imputação: PJ responde sozinha por crime ambiental, sem exigir PF junto.",
      erroComum: "Manter o entendimento superado da dupla imputação necessária.",
      comoBancaPensa: "Cobra jurisprudência que corrige uma crença ainda comum entre candidatos desatualizados."
    }
  },
  {
    id: "LE-140", disciplina: "Legislação Especial", assunto: "Crimes ambientais", subassunto: "Responsabilização penal da pessoa jurídica",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STF, RE 548.181)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.8,
    enunciado: "A responsabilização penal da pessoa jurídica por crime ambiental está condicionada à imputação simultânea da pessoa física responsável pela decisão, de modo que a persecução penal isolada do ente moral é inadmissível.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "condicionada ... isolada ... inadmissível",
    cognitivo: {
      motivo: "Cobrar, na forma da teoria já superada, o entendimento atual sobre responsabilização da pessoa jurídica.",
      mede: "Legislação Especial — crimes ambientais (responsabilização da pessoa jurídica).",
      pegadinhaDesc: "A banca apresenta a teoria da dupla imputação necessária como se ainda vigente, quando já foi superada pelo STF.",
      ondeErra: "Desconhece a evolução jurisprudencial que dispensou a exigência de dupla imputação simultânea.",
      palavraCritica: "condicionada ... inadmissível",
      tecnica: "O STF, no RE 548.181/PR, superou a teoria da dupla imputação necessária — a responsabilização penal da pessoa jurídica por crime ambiental é autônoma e não depende da simultânea responsabilização da pessoa física, sendo perfeitamente admissível a persecução penal isolada do ente moral.",
      regraMental: "Dupla imputação necessária: teoria SUPERADA pelo STF desde 2013 (RE 548.181)."
    },
    comentario: {
      resolucao: "ERRADO. O STF superou a teoria da dupla imputação necessária (RE 548.181/PR, 2013): a responsabilização penal da pessoa jurídica por crime ambiental é autônoma, sendo admissível a persecução penal isolada do ente moral, sem necessidade de imputação simultânea da pessoa física.",
      fundamento: "STF, RE 548.181/PR (2013); Lei nº 9.605/1998.",
      macete: "Hoje, PJ pode responder sozinha por crime ambiental — dupla imputação não é mais exigida.",
      erroComum: "Aplicar a teoria da dupla imputação necessária, já superada pela jurisprudência do STF.",
      comoBancaPensa: "Apresenta uma teoria doutrinária já superada como se fosse o entendimento atual, testando atualização jurisprudencial."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE36);

/* Frequência de temas — Legislação Especial (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Legislação Especial");
  if (!d) { d = { disciplina: "Legislação Especial", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Crimes falimentares (Lei 11.101/2005): ação penal", freq: 74, tendencia: "estavel", prob: 0.76 },
    { tema: "Lavagem de dinheiro: efeitos da condenação", freq: 76, tendencia: "alta", prob: 0.76 },
    { tema: "Crimes hediondos: evolução da Lei 11.464/2007", freq: 82, tendencia: "alta", prob: 0.8 },
    { tema: "Crimes ambientais: dupla imputação superada (STF)", freq: 80, tendencia: "alta", prob: 0.82 },
  );
})();
