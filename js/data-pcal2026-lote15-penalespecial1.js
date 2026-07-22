/* =====================================================================
   CEBRASPE LAB — Lote 15: LEGISLAÇÃO PENAL ESPECIAL I
   Lei Maria da Penha (11.340/2006), Lei de Tortura (9.455/1997) e
   Lei dos Crimes Hediondos (8.072/1990).
   30 itens INÉDITOS (C/E balanceados), no estilo CEBRASPE, com
   engenharia cognitiva e fundamento em lei + jurisprudência STF/STJ.

   Fonte: material esquematizado das leis (fornecido pelo usuário).
   Leis são texto público (Lei 9.610/98, art. 8, IV). Não reproduz
   questões de terceiros — todos os itens são originais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE15 = [

  /* ============ LEI MARIA DA PENHA (Lei 11.340/2006) ============ */
  {
    id: "LE-052", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Formas de violência (art. 7º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "A violência patrimonial, entendida como conduta que configure retenção, subtração ou destruição parcial dos objetos da mulher, é uma das formas de violência doméstica e familiar previstas na Lei Maria da Penha.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "violência patrimonial",
    cognitivo: {
      motivo: "Cobrar o rol das formas de violência doméstica (art. 7º).",
      mede: "Lei Maria da Penha — conceito e espécies de violência.",
      pegadinhaDesc: "A banca costuma suprimir a violência patrimonial ou moral do rol, ou inverter definições.",
      ondeErra: "Esquece que patrimonial e moral também integram o rol, não só física, psicológica e sexual.",
      palavraCritica: "patrimonial",
      tecnica: "Memorize as 5 formas: física, psicológica, sexual, patrimonial e moral.",
      regraMental: "Violência não é só bater: também é destruir bens (patrimonial) e caluniar (moral)."
    },
    comentario: {
      resolucao: "CERTO. O art. 7º da Lei 11.340/2006 elenca cinco formas de violência doméstica e familiar contra a mulher: física, psicológica, sexual, patrimonial e moral. A violência patrimonial (inciso IV) abrange retenção, subtração, destruição parcial ou total de objetos, instrumentos de trabalho, documentos e recursos econômicos.",
      fundamento: "Lei 11.340/2006, art. 7º, IV.",
      macete: "5 formas: Física, Psicológica, Sexual, Patrimonial, Moral (FPSPM).",
      erroComum: "Reduzir a violência a agressão física.",
      comoBancaPensa: "Testa se o candidato conhece as formas menos lembradas (patrimonial e moral)."
    }
  },
  {
    id: "LE-053", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Coabitação (Súmula 600 STJ)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.86,
    enunciado: "A caracterização da violência doméstica e familiar contra a mulher exige a coabitação entre o autor e a vítima.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exige a coabitação",
    cognitivo: {
      motivo: "Cobrar a desnecessidade de coabitação (Súmula 600 do STJ).",
      mede: "Lei Maria da Penha — âmbito de incidência.",
      pegadinhaDesc: "Cria um requisito inexistente: exigir vida sob o mesmo teto.",
      ondeErra: "Confunde relação doméstica/familiar/afetiva com coabitação.",
      palavraCritica: "exige a coabitação",
      tecnica: "Súmula 600 do STJ: dispensa-se a coabitação para configurar a violência doméstica.",
      regraMental: "Não precisa morar junto. Ex-namorado que agride ex-namorada responde pela lei."
    },
    comentario: {
      resolucao: "ERRADO. Conforme a Súmula 600 do STJ, para a configuração da violência doméstica e familiar contra a mulher não se exige a coabitação entre autor e vítima. Basta a relação íntima de afeto, doméstica ou familiar, ainda que já extinta.",
      fundamento: "Lei 11.340/2006, art. 5º; Súmula 600 do STJ.",
      jurisprudencia: "STJ, Súmula 600.",
      macete: "Sem coabitação também há Maria da Penha.",
      erroComum: "Exigir vida sob o mesmo teto.",
      comoBancaPensa: "Insere requisito que a jurisprudência afastou."
    }
  },
  {
    id: "LE-054", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Ação penal na lesão corporal (Súmula 542 STJ)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.9,
    enunciado: "A ação penal no crime de lesão corporal praticado contra a mulher no âmbito das relações domésticas é pública incondicionada, independentemente de representação da ofendida.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "incondicionada",
    cognitivo: {
      motivo: "Cobrar a natureza da ação penal na lesão corporal (ADI 4.424 / Súmula 542).",
      mede: "Lei Maria da Penha — ação penal.",
      pegadinhaDesc: "A banca troca por 'condicionada à representação' — regra geral do CP, mas afastada aqui.",
      ondeErra: "Aplica a regra da lesão leve do CP (condicionada) ao contexto doméstico.",
      palavraCritica: "incondicionada",
      tecnica: "STF (ADI 4.424) e Súmula 542 do STJ: lesão corporal na Maria da Penha é ação pública INCONDICIONADA.",
      regraMental: "Lesão + Maria da Penha = incondicionada. A mulher não precisa (nem pode) 'retirar a queixa'."
    },
    comentario: {
      resolucao: "CERTO. Segundo a Súmula 542 do STJ e a decisão do STF na ADI 4.424, a ação penal relativa ao crime de lesão corporal — leve ou grave — praticado contra a mulher no ambiente doméstico é pública incondicionada, dispensando representação. A representação subsiste apenas para outros crimes de ação pública condicionada (ex.: ameaça).",
      fundamento: "Lei 11.340/2006; CP, art. 129, § 9º; Súmula 542 do STJ.",
      jurisprudencia: "STF, ADI 4.424; STJ, Súmula 542.",
      macete: "Lesão doméstica = incondicionada. Ameaça = condicionada.",
      erroComum: "Exigir representação na lesão corporal doméstica.",
      comoBancaPensa: "Testa a exceção jurisprudencial à regra do CP."
    }
  },
  {
    id: "LE-055", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Vedação da Lei 9.099/95 (art. 41)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.88,
    enunciado: "Aos crimes praticados com violência doméstica e familiar contra a mulher, quando a pena máxima não superar dois anos, aplica-se a Lei 9.099/95, admitindo-se a transação penal.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "aplica-se a Lei 9.099/95",
    cognitivo: {
      motivo: "Cobrar a vedação expressa da Lei dos Juizados Especiais (art. 41).",
      mede: "Lei Maria da Penha — institutos despenalizadores.",
      pegadinhaDesc: "Sugere que a pena baixa reativa os benefícios da 9.099/95.",
      ondeErra: "Acha que o critério do menor potencial ofensivo prevalece sobre a vedação da Maria da Penha.",
      palavraCritica: "aplica-se a Lei 9.099/95",
      tecnica: "Art. 41: NÃO se aplica a Lei 9.099/95 aos crimes de violência doméstica, qualquer que seja a pena.",
      regraMental: "Maria da Penha = sem 9.099. Sem transação, sem composição civil despenalizadora."
    },
    comentario: {
      resolucao: "ERRADO. O art. 41 da Lei 11.340/2006 veda expressamente a aplicação da Lei 9.099/95 aos crimes praticados com violência doméstica e familiar contra a mulher, independentemente da pena cominada. Logo, não cabem transação penal nem suspensão condicional do processo nesse contexto. A constitucionalidade dessa vedação foi reconhecida pelo STF (ADC 19).",
      fundamento: "Lei 11.340/2006, art. 41; STF, ADC 19.",
      jurisprudencia: "STF, ADC 19.",
      macete: "Art. 41: 'independentemente da pena'. Não há JECRIM na Maria da Penha.",
      erroComum: "Aplicar 9.099/95 quando a pena é baixa.",
      comoBancaPensa: "Explora a tendência de vincular pena baixa a benefícios despenalizadores."
    }
  },
  {
    id: "LE-056", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Descumprimento de medida protetiva (art. 24-A)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "O descumprimento de medida protetiva de urgência deferida com base na Lei Maria da Penha configura crime autônomo, punível com pena de detenção.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "crime autônomo",
    cognitivo: {
      motivo: "Cobrar o crime de descumprimento de medida protetiva (art. 24-A).",
      mede: "Lei Maria da Penha — tutela penal das medidas protetivas.",
      pegadinhaDesc: "A banca pode dizer que o descumprimento gera apenas prisão preventiva, sem crime.",
      ondeErra: "Ignora que o art. 24-A tipificou o descumprimento como crime.",
      palavraCritica: "crime autônomo",
      tecnica: "Art. 24-A (incluído pela Lei 13.641/2018): descumprir medida protetiva = detenção de 3 meses a 2 anos.",
      regraMental: "Descumpriu a protetiva? É crime próprio, além de autorizar a preventiva."
    },
    comentario: {
      resolucao: "CERTO. O art. 24-A da Lei 11.340/2006, incluído pela Lei 13.641/2018, tipifica como crime autônomo o descumprimento de decisão judicial que defere medidas protetivas de urgência, com pena de detenção de 3 meses a 2 anos. A competência para conceder a medida não afasta a incidência do tipo.",
      fundamento: "Lei 11.340/2006, art. 24-A.",
      macete: "Descumprir protetiva = crime (art. 24-A), detenção 3 meses a 2 anos.",
      erroComum: "Tratar o descumprimento como mero fato processual.",
      comoBancaPensa: "Verifica o conhecimento da tipificação autônoma."
    }
  },
  {
    id: "LE-057", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Princípio da insignificância",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "Conforme entendimento consolidado do STJ, admite-se a aplicação do princípio da insignificância aos crimes praticados no âmbito da violência doméstica e familiar contra a mulher.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "admite-se a insignificância",
    cognitivo: {
      motivo: "Cobrar a vedação jurisprudencial da insignificância na violência doméstica.",
      mede: "Lei Maria da Penha — princípios penais aplicáveis.",
      pegadinhaDesc: "Sugere que crimes patrimoniais de pequeno valor no lar seriam bagatela.",
      ondeErra: "Aplica a bagatela ignorando a relevância do bem jurídico tutelado.",
      palavraCritica: "admite-se",
      tecnica: "STJ: é inaplicável o princípio da insignificância aos crimes cometidos com violência doméstica (Súmula 589).",
      regraMental: "Violência doméstica NÃO é bagatela. Insignificância não entra."
    },
    comentario: {
      resolucao: "ERRADO. Segundo a Súmula 589 do STJ, é inaplicável o princípio da insignificância nos crimes ou contravenções penais praticados contra a mulher no âmbito das relações domésticas, dada a relevância do bem jurídico protegido. O mesmo raciocínio afasta a insignificância nos crimes patrimoniais nesse contexto.",
      fundamento: "Lei 11.340/2006; Súmula 589 do STJ.",
      jurisprudencia: "STJ, Súmula 589.",
      macete: "Súmula 589: nada de insignificância na violência doméstica.",
      erroComum: "Aplicar bagatela a furto/dano entre cônjuges.",
      comoBancaPensa: "Inverte a orientação sumulada do STJ."
    }
  },
  {
    id: "LE-058", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Renúncia à representação (art. 16)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.83,
    enunciado: "Nas ações penais públicas condicionadas à representação, a renúncia à representação da ofendida só é admitida perante o juiz, em audiência especialmente designada, antes do recebimento da denúncia e ouvido o Ministério Público.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "perante o juiz, em audiência",
    cognitivo: {
      motivo: "Cobrar o rito da renúncia à representação (art. 16).",
      mede: "Lei Maria da Penha — retratação da representação.",
      pegadinhaDesc: "A banca costuma admitir a renúncia perante a autoridade policial.",
      ondeErra: "Permite a retratação na delegacia, sem o crivo judicial.",
      palavraCritica: "perante o juiz, em audiência",
      tecnica: "Art. 16: renúncia só perante o juiz, em audiência designada para tal fim, antes do recebimento da denúncia, ouvido o MP.",
      regraMental: "Retratação da vítima não é na delegacia: é em audiência, diante do juiz."
    },
    comentario: {
      resolucao: "CERTO. O art. 16 da Lei 11.340/2006 estabelece que, nas ações penais públicas condicionadas à representação, a renúncia à representação só será admitida perante o juiz, em audiência especialmente designada, antes do recebimento da denúncia e ouvido o Ministério Público. Trata-se de garantia contra pressões sobre a vítima.",
      fundamento: "Lei 11.340/2006, art. 16.",
      macete: "Renúncia: juiz + audiência + antes do recebimento + ouvido o MP.",
      erroComum: "Aceitar a retratação na delegacia.",
      comoBancaPensa: "Desloca o ato para a autoridade policial."
    }
  },
  {
    id: "LE-059", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Sujeito passivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "A proteção especial da Lei Maria da Penha aplica-se indistintamente a vítimas do sexo masculino e feminino em situação de violência doméstica.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "sexo masculino e feminino",
    cognitivo: {
      motivo: "Cobrar a delimitação do sujeito passivo (a mulher).",
      mede: "Lei Maria da Penha — âmbito subjetivo de proteção.",
      pegadinhaDesc: "Universaliza a proteção, ignorando o recorte de gênero da lei.",
      ondeErra: "Confunde a agravante do CP (aplicável a qualquer vítima) com a lei protetiva específica.",
      palavraCritica: "indistintamente",
      tecnica: "A Lei 11.340/2006 protege a MULHER em situação de vulnerabilidade de gênero. O STJ estende às mulheres trans, mas não a homens.",
      regraMental: "Maria da Penha = proteção da mulher. Homem vítima não entra na lei específica."
    },
    comentario: {
      resolucao: "ERRADO. A Lei Maria da Penha tem por destinatária a mulher em situação de violência doméstica e familiar baseada no gênero (art. 5º). Não se aplica indistintamente a vítimas do sexo masculino. Para homens, incidem as regras gerais do Código Penal, inclusive a agravante do art. 129, § 9º, mas não o microssistema protetivo da Lei 11.340/2006.",
      fundamento: "Lei 11.340/2006, arts. 2º e 5º.",
      macete: "Sujeito passivo é a mulher (inclusive trans, por decisão do STJ).",
      erroComum: "Universalizar a proteção para qualquer vítima doméstica.",
      comoBancaPensa: "Amplia indevidamente o polo passivo."
    }
  },
  {
    id: "LE-060", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Mulher transexual (STJ)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Segundo a jurisprudência do STJ, a Lei Maria da Penha é aplicável às mulheres transexuais em situação de violência doméstica e familiar, independentemente de alteração no registro civil.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "mulheres transexuais",
    cognitivo: {
      motivo: "Cobrar a extensão jurisprudencial da lei às mulheres trans.",
      mede: "Lei Maria da Penha — interpretação do conceito de mulher.",
      pegadinhaDesc: "A banca pode condicionar a proteção à cirurgia ou à retificação do registro.",
      ondeErra: "Exige requisito formal não previsto para o reconhecimento da identidade de gênero.",
      palavraCritica: "independentemente de alteração no registro civil",
      tecnica: "STJ (6ª Turma, REsp 1.977.124): a proteção alcança a mulher trans, com base na identidade de gênero, sem exigir cirurgia ou registro.",
      regraMental: "Mulher trans é mulher para a Maria da Penha. Sem exigir cirurgia ou papel."
    },
    comentario: {
      resolucao: "CERTO. O STJ firmou que a Lei Maria da Penha se aplica às mulheres transexuais vítimas de violência doméstica, com fundamento na identidade de gênero, sendo dispensável a realização de cirurgia de redesignação ou a alteração do registro civil.",
      fundamento: "Lei 11.340/2006, art. 5º; STJ, REsp 1.977.124.",
      jurisprudencia: "STJ, REsp 1.977.124 (6ª Turma).",
      macete: "Identidade de gênero basta. Nada de exigir cirurgia/registro.",
      erroComum: "Condicionar a proteção à retificação do registro.",
      comoBancaPensa: "Insere requisito formal para restringir a proteção."
    }
  },
  {
    id: "LE-061", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Medida protetiva pela autoridade policial (art. 12-C)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "As medidas protetivas de urgência que determinam o afastamento do agressor do lar somente podem ser concedidas pelo juiz, sendo vedada, em qualquer hipótese, a atuação da autoridade policial.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "em qualquer hipótese",
    cognitivo: {
      motivo: "Cobrar o afastamento do agressor pela autoridade policial (art. 12-C).",
      mede: "Lei Maria da Penha — legitimidade para conceder medidas.",
      pegadinhaDesc: "Usa termo absoluto ('qualquer hipótese') para negar a atuação do delegado.",
      ondeErra: "Desconhece a alteração da Lei 13.827/2019, que autorizou o delegado em certas hipóteses.",
      palavraCritica: "em qualquer hipótese",
      tecnica: "Art. 12-C: havendo risco atual e não sendo sede de comarca, o delegado pode afastar o agressor; se não houver delegado, o policial pode fazê-lo, comunicando o juiz em 24h.",
      regraMental: "Regra: juiz. Exceção: delegado (e até o policial) quando o município não é sede de comarca."
    },
    comentario: {
      resolucao: "ERRADO. O art. 12-C, incluído pela Lei 13.827/2019, autoriza o afastamento imediato do agressor do lar pela autoridade policial (delegado), quando o município não for sede de comarca e houver risco atual à vida ou à integridade da mulher; inexistindo delegado disponível, o próprio policial pode determiná-lo, comunicando o juiz em 24 horas. Logo, é falsa a afirmação de vedação absoluta.",
      fundamento: "Lei 11.340/2006, art. 12-C.",
      macete: "Não é sede de comarca + risco atual = delegado afasta o agressor.",
      erroComum: "Reservar toda medida protetiva ao juiz.",
      comoBancaPensa: "Termo absoluto que ignora a exceção legal."
    }
  },
  {
    id: "LE-062", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Violência psicológica (art. 7º, II)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A violência psicológica contra a mulher pode caracterizar-se por condutas que causem dano emocional e diminuição da autoestima, como a vigilância constante, a humilhação e a manipulação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dano emocional",
    cognitivo: {
      motivo: "Cobrar o conceito de violência psicológica (art. 7º, II).",
      mede: "Lei Maria da Penha — espécies de violência.",
      pegadinhaDesc: "Costuma confundir violência psicológica com moral, ou negar a vigilância como conduta típica.",
      ondeErra: "Restringe a violência psicológica a ameaças diretas.",
      palavraCritica: "dano emocional",
      tecnica: "Art. 7º, II: dano emocional e diminuição da autoestima — inclui vigilância, humilhação, manipulação, isolamento.",
      regraMental: "Controlar, vigiar e humilhar é violência psicológica."
    },
    comentario: {
      resolucao: "CERTO. O art. 7º, II, da Lei 11.340/2006 define violência psicológica como qualquer conduta que cause dano emocional e diminuição da autoestima, ou que prejudique o pleno desenvolvimento da mulher, incluindo vigilância constante, humilhação, manipulação, isolamento e limitação do direito de ir e vir.",
      fundamento: "Lei 11.340/2006, art. 7º, II.",
      macete: "Psicológica = mexer com a mente e a autoestima.",
      erroComum: "Limitar a violência psicológica à ameaça verbal.",
      comoBancaPensa: "Item de fixação conceitual (nível fácil)."
    }
  },
  {
    id: "LE-063", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Prisão preventiva (art. 20)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "É vedada a decretação de prisão preventiva do agressor nos casos de violência doméstica e familiar contra a mulher.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "vedada a prisão preventiva",
    cognitivo: {
      motivo: "Cobrar a possibilidade de prisão preventiva na violência doméstica.",
      mede: "Lei Maria da Penha — medidas cautelares.",
      pegadinhaDesc: "Nega uma medida que a lei expressamente autoriza.",
      ondeErra: "Confunde a vedação da 9.099/95 com vedação de prisão.",
      palavraCritica: "vedada",
      tecnica: "Art. 20 da Lei 11.340/2006 e art. 313, III, do CPP: a preventiva pode ser decretada para garantir as medidas protetivas.",
      regraMental: "Pode haver preventiva para proteger a mulher — inclusive por descumprimento de protetiva."
    },
    comentario: {
      resolucao: "ERRADO. O art. 20 da Lei 11.340/2006 admite a prisão preventiva do agressor, de ofício ou a requerimento, em qualquer fase do inquérito ou da instrução. O art. 313, III, do CPP reforça o cabimento para garantir a execução das medidas protetivas de urgência.",
      fundamento: "Lei 11.340/2006, art. 20; CPP, art. 313, III.",
      macete: "Preventiva é possível — inclusive pela pena não ser critério aqui.",
      erroComum: "Confundir a vedação da 9.099/95 com vedação de cautelar prisional.",
      comoBancaPensa: "Restringe medida cautelar expressamente prevista."
    }
  },

  /* ============ LEI DE TORTURA (Lei 9.455/1997) ============ */
  {
    id: "LE-064", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Inafiançabilidade (art. 1º, § 6º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.455/1997, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "O crime de tortura é inafiançável e insuscetível de graça ou anistia.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inafiançável",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 1º, § 6º, da Lei de Tortura.",
      mede: "Lei de Tortura — regime de benefícios vedados.",
      pegadinhaDesc: "Pode acrescentar indevidamente o 'indulto' à vedação legal.",
      ondeErra: "Não distingue o texto da Lei de Tortura do texto da Lei dos Crimes Hediondos.",
      palavraCritica: "graça ou anistia",
      tecnica: "Art. 1º, § 6º: inafiançável e insuscetível de GRAÇA ou ANISTIA (a lei não menciona indulto).",
      regraMental: "Tortura: graça e anistia estão vedadas na lei. Indulto NÃO consta do texto."
    },
    comentario: {
      resolucao: "CERTO. O art. 1º, § 6º, da Lei 9.455/1997 dispõe que o crime de tortura é inafiançável e insuscetível de graça ou anistia. É a exata literalidade do dispositivo.",
      fundamento: "Lei 9.455/1997, art. 1º, § 6º; CF, art. 5º, XLIII.",
      macete: "Tortura: inafiançável + sem graça + sem anistia.",
      erroComum: "Acrescentar 'indulto' como se constasse do texto legal.",
      comoBancaPensa: "Cobra a literalidade exata para depois inserir o indulto em outra questão."
    }
  },
  {
    id: "LE-065", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Indulto (pegadinha do § 6º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.455/1997, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A Lei de Tortura veda expressamente a concessão de graça, anistia e indulto ao condenado pelo crime de tortura.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "e indulto",
    cognitivo: {
      motivo: "Cobrar o que a Lei de Tortura NÃO menciona (indulto).",
      mede: "Lei de Tortura — regime de vedações.",
      pegadinhaDesc: "Verdade (graça e anistia) emendada a um item falso (indulto expresso).",
      ondeErra: "Transfere a redação da Lei dos Crimes Hediondos (que veda indulto) para a Lei de Tortura.",
      palavraCritica: "e indulto",
      tecnica: "A Lei 9.455/97 fala apenas em graça e anistia. A vedação expressa de indulto está na Lei 8.072/90 (hediondos).",
      regraMental: "Cuidado: a palavra 'indulto' delata a pegadinha na Lei de Tortura."
    },
    comentario: {
      resolucao: "ERRADO. O art. 1º, § 6º, da Lei 9.455/1997 veda expressamente apenas a fiança, a graça e a anistia — NÃO menciona o indulto. A vedação literal ao indulto consta da Lei 8.072/1990 (crimes hediondos). Por isso, dizer que a Lei de Tortura proíbe expressamente o indulto está incorreto.",
      fundamento: "Lei 9.455/1997, art. 1º, § 6º; cf. Lei 8.072/1990, art. 2º, I.",
      macete: "Indulto expresso = lei dos hediondos, não a de tortura.",
      erroComum: "Igualar as redações das duas leis.",
      comoBancaPensa: "Adiciona palavra verdadeira em outro diploma para induzir ao erro."
    }
  },
  {
    id: "LE-066", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Regime inicial fechado (art. 1º, § 7º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.455/1997, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "O condenado por crime de tortura iniciará, em regra, o cumprimento da pena em regime fechado, admitindo-se a progressão de regime.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "regime fechado",
    cognitivo: {
      motivo: "Cobrar o regime inicial na Lei de Tortura (art. 1º, § 7º).",
      mede: "Lei de Tortura — execução da pena.",
      pegadinhaDesc: "A banca pode negar a progressão (como no antigo regime dos hediondos).",
      ondeErra: "Confunde regime inicial fechado com cumprimento integralmente fechado.",
      palavraCritica: "admitindo-se a progressão",
      tecnica: "Art. 1º, § 7º: inicia em regime fechado — mas a progressão é admitida (o cumprimento integral fechado foi declarado inconstitucional).",
      regraMental: "Inicial fechado ≠ integral fechado. Progressão existe."
    },
    comentario: {
      resolucao: "CERTO. O art. 1º, § 7º, da Lei 9.455/1997 determina o início do cumprimento da pena em regime fechado. A vedação à progressão (regime integralmente fechado) não subsiste, pois o STF declarou inconstitucional esse óbice (HC 82.959), aplicando-se a progressão nos moldes da legislação de execução penal.",
      fundamento: "Lei 9.455/1997, art. 1º, § 7º; STF, HC 82.959.",
      jurisprudencia: "STF, HC 82.959.",
      macete: "Começa no fechado, mas progride.",
      erroComum: "Negar a progressão de regime.",
      comoBancaPensa: "Testa a distinção entre regime inicial e cumprimento integral."
    }
  },
  {
    id: "LE-067", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Sujeito ativo (crime comum)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.455/1997, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "O crime de tortura é próprio, exigindo que o sujeito ativo seja funcionário público no exercício da função.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "crime próprio",
    cognitivo: {
      motivo: "Cobrar a natureza comum do crime de tortura.",
      mede: "Lei de Tortura — sujeito ativo.",
      pegadinhaDesc: "Trata a tortura como crime próprio de funcionário público.",
      ondeErra: "Confunde a tortura brasileira (crime comum) com a definição da Convenção da ONU (agente estatal).",
      palavraCritica: "crime próprio",
      tecnica: "Na Lei 9.455/97, a tortura é, em regra, crime COMUM (qualquer pessoa). A condição de agente público é apenas causa de aumento (§ 4º, I). Exceção: a tortura-omissão (§ 2º) é própria.",
      regraMental: "Tortura no Brasil = crime comum. Ser servidor só aumenta a pena."
    },
    comentario: {
      resolucao: "ERRADO. Diferentemente da definição da Convenção da ONU, a Lei 9.455/1997 tipifica a tortura, em regra, como crime COMUM, que pode ser praticado por qualquer pessoa. A condição de agente público não é elementar, mas causa de aumento de pena (art. 1º, § 4º, I). Apenas a modalidade omissiva do § 2º constitui crime próprio.",
      fundamento: "Lei 9.455/1997, art. 1º, caput e § 4º, I.",
      macete: "Tortura = comum. Servidor público → só majora (§ 4º).",
      erroComum: "Exigir a qualidade de funcionário público como elementar.",
      comoBancaPensa: "Insere requisito da definição internacional que a lei brasileira não adota."
    }
  },
  {
    id: "LE-068", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Tortura-omissão (art. 1º, § 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.455/1997, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Aquele que se omite diante da prática de tortura, quando tinha o dever de evitá-la ou de apurá-la, responde por crime de tortura, apenado com detenção.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dever de evitá-la ou apurá-la",
    cognitivo: {
      motivo: "Cobrar a modalidade omissiva imprópria (art. 1º, § 2º).",
      mede: "Lei de Tortura — tortura-omissão.",
      pegadinhaDesc: "A banca pode dizer que a omissão é punida com reclusão (igual à tortura comissiva).",
      ondeErra: "Aplica a pena da tortura própria à modalidade omissiva.",
      palavraCritica: "detenção",
      tecnica: "Art. 1º, § 2º: quem tinha o dever de evitar ou apurar e se omite responde com DETENÇÃO de 1 a 4 anos (pena menor que a da tortura comissiva).",
      regraMental: "Tortura por ação = reclusão. Tortura por omissão = detenção (1 a 4 anos)."
    },
    comentario: {
      resolucao: "CERTO. O art. 1º, § 2º, da Lei 9.455/1997 pune com detenção de 1 a 4 anos quem se omite diante da tortura, quando tinha o dever de evitá-la ou apurá-la. É a chamada tortura-omissão, crime próprio e apenado com detenção — pena inferior à das modalidades comissivas.",
      fundamento: "Lei 9.455/1997, art. 1º, § 2º.",
      macete: "Omissão diante da tortura: detenção 1 a 4 anos.",
      erroComum: "Aplicar reclusão à modalidade omissiva.",
      comoBancaPensa: "Explora a diferença de pena entre ação e omissão."
    }
  },
  {
    id: "LE-069", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Efeitos da condenação (art. 1º, § 5º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.455/1997, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "A condenação por crime de tortura acarreta, como efeito, a perda do cargo, função ou emprego público e a interdição para o seu exercício pelo dobro do prazo da pena aplicada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dobro do prazo da pena",
    cognitivo: {
      motivo: "Cobrar o efeito automático da condenação (art. 1º, § 5º).",
      mede: "Lei de Tortura — efeitos extrapenais da condenação.",
      pegadinhaDesc: "Costuma trocar o 'dobro' por 'mesmo prazo' da pena.",
      ondeErra: "Não retém o prazo em dobro da interdição.",
      palavraCritica: "dobro do prazo da pena",
      tecnica: "Art. 1º, § 5º: perda do cargo/função/emprego + interdição pelo DOBRO do prazo da pena. É efeito automático (não precisa de fundamentação específica).",
      regraMental: "Tortura: perde o cargo e fica interditado pelo DOBRO da pena — automaticamente."
    },
    comentario: {
      resolucao: "CERTO. O art. 1º, § 5º, da Lei 9.455/1997 estabelece que a condenação acarreta a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada. Trata-se de efeito automático da condenação, independentemente de motivação específica na sentença (diferentemente da regra geral do art. 92 do CP).",
      fundamento: "Lei 9.455/1997, art. 1º, § 5º.",
      macete: "Perda do cargo + interdição em DOBRO, automaticamente.",
      erroComum: "Aplicar o 'mesmo prazo' em vez do dobro.",
      comoBancaPensa: "Troca numérica no efeito da condenação."
    }
  },
  {
    id: "LE-070", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Extraterritorialidade (art. 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.455/1997, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "A Lei de Tortura não se aplica quando o crime é cometido fora do território nacional, ainda que a vítima seja brasileira.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "não se aplica fora do território",
    cognitivo: {
      motivo: "Cobrar a extraterritorialidade da Lei de Tortura (art. 2º).",
      mede: "Lei de Tortura — aplicação no espaço.",
      pegadinhaDesc: "Nega a aplicação extraterritorial expressamente prevista.",
      ondeErra: "Aplica a regra geral da territorialidade sem considerar a exceção da lei.",
      palavraCritica: "não se aplica",
      tecnica: "Art. 2º: a lei aplica-se ainda que o crime não tenha sido cometido em território nacional, quando a vítima for brasileira ou o agente estiver em local sob jurisdição brasileira.",
      regraMental: "Vítima brasileira lá fora? A Lei de Tortura alcança (extraterritorialidade)."
    },
    comentario: {
      resolucao: "ERRADO. O art. 2º da Lei 9.455/1997 prevê expressamente a extraterritorialidade: a lei aplica-se mesmo quando o crime não tenha sido cometido em território nacional, desde que a vítima seja brasileira ou o agente se encontre em local sob jurisdição brasileira.",
      fundamento: "Lei 9.455/1997, art. 2º.",
      macete: "Vítima brasileira no exterior = a lei alcança.",
      erroComum: "Aplicar territorialidade estrita.",
      comoBancaPensa: "Nega a extraterritorialidade prevista em lei."
    }
  },
  {
    id: "LE-071", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Tortura-discriminação (art. 1º, I, 'c')",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.455/1997, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "Constitui crime de tortura constranger alguém, com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental, em razão de discriminação racial ou religiosa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "discriminação racial ou religiosa",
    cognitivo: {
      motivo: "Cobrar a modalidade tortura-discriminação (art. 1º, I, 'c').",
      mede: "Lei de Tortura — modalidades típicas.",
      pegadinhaDesc: "A banca pode ampliar as formas de discriminação para além das previstas (racial e religiosa).",
      ondeErra: "Inclui outras discriminações não previstas no tipo dessa alínea.",
      palavraCritica: "racial ou religiosa",
      tecnica: "Art. 1º, I, 'c': tortura por discriminação RACIAL ou RELIGIOSA. Apenas essas duas formas figuram nesta modalidade.",
      regraMental: "Tortura-discriminação: só racial ou religiosa (nesta alínea)."
    },
    comentario: {
      resolucao: "CERTO. O art. 1º, I, 'c', da Lei 9.455/1997 tipifica como tortura constranger alguém, com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental, em razão de discriminação racial ou religiosa. A discriminação que caracteriza essa modalidade é a racial ou religiosa.",
      fundamento: "Lei 9.455/1997, art. 1º, I, 'c'.",
      macete: "Tortura-discriminação: racial OU religiosa.",
      erroComum: "Incluir outras discriminações nesta modalidade.",
      comoBancaPensa: "Fixação da literalidade das formas de discriminação."
    }
  },

  /* ============ LEI DOS CRIMES HEDIONDOS (Lei 8.072/1990) ============ */
  {
    id: "LE-072", disciplina: "Legislação Especial", assunto: "Crimes Hediondos", subassunto: "Vedações do art. 2º",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.88,
    enunciado: "Os crimes hediondos são inafiançáveis e insuscetíveis de anistia e graça, admitindo-se, contudo, a concessão de indulto.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "admitindo-se o indulto",
    cognitivo: {
      motivo: "Cobrar a vedação de indulto nos crimes hediondos (art. 2º, I).",
      mede: "Crimes Hediondos — benefícios vedados.",
      pegadinhaDesc: "Verdades iniciais (anistia e graça vedadas) emendadas a uma falsidade (permitir indulto).",
      ondeErra: "Distingue mal o regime dos hediondos (que veda indulto) do da tortura (que não menciona indulto).",
      palavraCritica: "admitindo-se o indulto",
      tecnica: "Art. 2º, I, da Lei 8.072/90: hediondos e equiparados são insuscetíveis de anistia, graça e INDULTO.",
      regraMental: "Hediondo: nada de anistia, graça NEM indulto. Todos vedados."
    },
    comentario: {
      resolucao: "ERRADO. O art. 2º, I, da Lei 8.072/1990 veda, aos crimes hediondos e equiparados, a anistia, a graça E o indulto. A afirmação erra ao admitir o indulto, que também é proibido nesses crimes.",
      fundamento: "Lei 8.072/1990, art. 2º, I; CF, art. 5º, XLIII.",
      macete: "Hediondo veda os três: anistia, graça e indulto.",
      erroComum: "Permitir o indulto nos crimes hediondos.",
      comoBancaPensa: "Emenda uma falsidade após verdades para induzir ao 'certo'."
    }
  },
  {
    id: "LE-073", disciplina: "Legislação Especial", assunto: "Crimes Hediondos", subassunto: "Rol taxativo (art. 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "O rol dos crimes hediondos é taxativo, definido expressamente em lei, não se admitindo interpretação extensiva para incluir crimes não previstos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "taxativo",
    cognitivo: {
      motivo: "Cobrar a taxatividade do rol (sistema legal).",
      mede: "Crimes Hediondos — técnica de definição.",
      pegadinhaDesc: "A banca pode afirmar que o juiz pode reputar hediondo crime grave não listado.",
      ondeErra: "Confunde gravidade do crime com hediondez legal.",
      palavraCritica: "taxativo",
      tecnica: "O Brasil adotou o sistema LEGAL: só é hediondo o que a lei enumera (art. 1º). Não cabe o critério judicial.",
      regraMental: "Hediondo é o que está na lista. Juiz não 'cria' hediondez."
    },
    comentario: {
      resolucao: "CERTO. A Lei 8.072/1990 adotou o sistema legal (rol taxativo): são hediondos apenas os crimes expressamente enumerados no art. 1º. Não se admite que o julgador, por analogia ou pela mera gravidade, considere hediondo um crime não previsto.",
      fundamento: "Lei 8.072/1990, art. 1º.",
      macete: "Sistema legal = lista fechada. Fora da lista, não é hediondo.",
      erroComum: "Reputar hediondo crime grave não listado.",
      comoBancaPensa: "Testa a taxatividade do rol."
    }
  },
  {
    id: "LE-074", disciplina: "Legislação Especial", assunto: "Crimes Hediondos", subassunto: "Equiparados (TTT)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "O tráfico ilícito de entorpecentes, o terrorismo e a tortura são classificados pela Constituição Federal como crimes hediondos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "classificados como hediondos",
    cognitivo: {
      motivo: "Cobrar a distinção entre hediondos e equiparados.",
      mede: "Crimes Hediondos — categorias.",
      pegadinhaDesc: "Chama de hediondos os crimes que, na verdade, são equiparados.",
      ondeErra: "Não distingue 'hediondo' de 'equiparado a hediondo'.",
      palavraCritica: "classificados como hediondos",
      tecnica: "TTT (Tráfico, Terrorismo e Tortura) são EQUIPARADOS a hediondos (art. 5º, XLIII, CF), não hediondos propriamente ditos.",
      regraMental: "TTT = equiparados. Hediondos são os do art. 1º da Lei 8.072/90."
    },
    comentario: {
      resolucao: "ERRADO. O tráfico ilícito de drogas, o terrorismo e a tortura (os '3 T') são equiparados a crimes hediondos, por força do art. 5º, XLIII, da CF, e não crimes hediondos propriamente ditos. Estes últimos estão no rol do art. 1º da Lei 8.072/1990. Embora recebam tratamento severo semelhante, a classificação técnica é distinta.",
      fundamento: "CF, art. 5º, XLIII; Lei 8.072/1990, arts. 1º e 2º.",
      macete: "TTT são equiparados; hediondos 'de verdade' estão no art. 1º.",
      erroComum: "Chamar os equiparados de hediondos.",
      comoBancaPensa: "Troca a categoria jurídica (equiparado por hediondo)."
    }
  },
  {
    id: "LE-075", disciplina: "Legislação Especial", assunto: "Crimes Hediondos", subassunto: "Progressão após o Pacote Anticrime",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990 c/c Lei 13.964/2019, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Após a Lei 13.964/2019 (Pacote Anticrime), a progressão de regime nos crimes hediondos passou a observar percentuais de cumprimento de pena que variam conforme a primariedade do apenado e a ocorrência de resultado morte.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "percentuais",
    cognitivo: {
      motivo: "Cobrar o novo sistema de progressão por percentuais (LEP, art. 112).",
      mede: "Crimes Hediondos — execução penal após o Anticrime.",
      pegadinhaDesc: "A banca pode manter a fração antiga (2/5 e 3/5) revogada pelo Anticrime.",
      ondeErra: "Aplica as frações da Lei 11.464/2007 (revogadas).",
      palavraCritica: "percentuais que variam",
      tecnica: "A Lei 13.964/19 alterou o art. 112 da LEP: progressão por percentuais (ex.: 40% hediondo primário; 50% com resultado morte primário; 60% e 70% para reincidentes).",
      regraMental: "Anticrime trocou frações por percentuais escalonados (primariedade + resultado morte)."
    },
    comentario: {
      resolucao: "CERTO. A Lei 13.964/2019 reformulou o art. 112 da Lei de Execução Penal, substituindo o sistema de frações por percentuais de cumprimento que variam conforme a natureza do crime, a primariedade/reincidência e o resultado morte (ex.: 40% para hediondo primário, 50% com resultado morte para primário, 60% e 70% para reincidentes).",
      fundamento: "Lei 8.072/1990; Lei 7.210/1984 (LEP), art. 112, com redação da Lei 13.964/2019.",
      macete: "Anticrime: progressão por percentuais, não mais por frações.",
      erroComum: "Manter as antigas frações de 2/5 e 3/5.",
      comoBancaPensa: "Verifica a atualização legislativa do Pacote Anticrime."
    }
  },
  {
    id: "LE-076", disciplina: "Legislação Especial", assunto: "Crimes Hediondos", subassunto: "Regime integralmente fechado (inconstitucionalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Nos crimes hediondos, a pena privativa de liberdade deve ser cumprida integralmente em regime fechado, sendo vedada a progressão de regime.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "integralmente em regime fechado",
    cognitivo: {
      motivo: "Cobrar a superação do regime integralmente fechado.",
      mede: "Crimes Hediondos — progressão de regime.",
      pegadinhaDesc: "Repete a redação original (revogada e declarada inconstitucional).",
      ondeErra: "Desconhece o HC 82.959/STF e a Lei 11.464/2007.",
      palavraCritica: "integralmente em regime fechado",
      tecnica: "STF (HC 82.959) declarou inconstitucional a vedação à progressão; a Lei 11.464/2007 passou a admiti-la, hoje regida pela LEP (percentuais).",
      regraMental: "Regime integralmente fechado é passado. Há progressão nos hediondos."
    },
    comentario: {
      resolucao: "ERRADO. A previsão original de cumprimento integralmente em regime fechado foi declarada inconstitucional pelo STF (HC 82.959) e superada pela Lei 11.464/2007. Atualmente, admite-se a progressão de regime nos crimes hediondos, observados os percentuais do art. 112 da LEP.",
      fundamento: "Lei 8.072/1990; STF, HC 82.959; Lei 11.464/2007.",
      jurisprudencia: "STF, HC 82.959.",
      macete: "Progressão existe. 'Integralmente fechado' caiu.",
      erroComum: "Reproduzir a redação revogada.",
      comoBancaPensa: "Restringe direito de execução já reconhecido."
    }
  },
  {
    id: "LE-077", disciplina: "Legislação Especial", assunto: "Crimes Hediondos", subassunto: "Livramento condicional (art. 5º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "O condenado por crime hediondo poderá obter livramento condicional após o cumprimento de mais de dois terços da pena, desde que não seja reincidente específico em crimes dessa natureza.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mais de dois terços",
    cognitivo: {
      motivo: "Cobrar o requisito do livramento condicional nos hediondos.",
      mede: "Crimes Hediondos — livramento condicional.",
      pegadinhaDesc: "A banca pode trocar '2/3' por '1/2' ou remover a ressalva do reincidente específico.",
      ondeErra: "Não retém a fração ou ignora a vedação ao reincidente específico.",
      palavraCritica: "mais de dois terços",
      tecnica: "CP, art. 83, V (c/c Lei 8.072/90): livramento após 2/3, vedado ao reincidente específico em crime hediondo/equiparado.",
      regraMental: "Hediondo: livramento só após 2/3 — e nunca para reincidente específico."
    },
    comentario: {
      resolucao: "CERTO. Nos crimes hediondos e equiparados, o livramento condicional exige o cumprimento de mais de dois terços da pena (CP, art. 83, V), sendo vedado ao condenado reincidente específico em crimes de tal natureza. A afirmação reproduz corretamente esses requisitos.",
      fundamento: "CP, art. 83, V; Lei 8.072/1990, art. 5º.",
      macete: "Livramento nos hediondos: 2/3 e nada de reincidente específico.",
      erroComum: "Trocar a fração ou suprimir a vedação.",
      comoBancaPensa: "Testa a fração e a ressalva simultaneamente."
    }
  },
  {
    id: "LE-078", disciplina: "Legislação Especial", assunto: "Crimes Hediondos", subassunto: "Homicídio qualificado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "O homicídio qualificado é considerado crime hediondo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "homicídio qualificado",
    cognitivo: {
      motivo: "Cobrar a hediondez do homicídio qualificado (art. 1º, I).",
      mede: "Crimes Hediondos — rol.",
      pegadinhaDesc: "A banca costuma inverter (dizer que só o simples é hediondo).",
      ondeErra: "Confunde as hipóteses de homicídio hediondo.",
      palavraCritica: "qualificado",
      tecnica: "Art. 1º, I: homicídio qualificado é hediondo; o simples só é hediondo se praticado em atividade de grupo de extermínio.",
      regraMental: "Homicídio qualificado = hediondo. Simples só em grupo de extermínio."
    },
    comentario: {
      resolucao: "CERTO. O art. 1º, I, da Lei 8.072/1990 classifica o homicídio qualificado (CP, art. 121, § 2º) como crime hediondo. O homicídio simples, por sua vez, só é hediondo quando praticado em atividade típica de grupo de extermínio.",
      fundamento: "Lei 8.072/1990, art. 1º, I; CP, art. 121, § 2º.",
      macete: "Qualificado sempre hediondo; simples só em grupo de extermínio.",
      erroComum: "Negar a hediondez do homicídio qualificado.",
      comoBancaPensa: "Item de fixação (nível fácil)."
    }
  },
  {
    id: "LE-079", disciplina: "Legislação Especial", assunto: "Crimes Hediondos", subassunto: "Homicídio simples e grupo de extermínio",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "O homicídio simples, em qualquer hipótese, não constitui crime hediondo.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "em qualquer hipótese",
    cognitivo: {
      motivo: "Cobrar a exceção do homicídio simples em grupo de extermínio.",
      mede: "Crimes Hediondos — hipóteses do homicídio.",
      pegadinhaDesc: "Usa termo absoluto para negar a única hipótese em que o simples é hediondo.",
      ondeErra: "Ignora a atividade de grupo de extermínio.",
      palavraCritica: "em qualquer hipótese",
      tecnica: "Art. 1º, I: o homicídio simples é hediondo quando praticado em atividade típica de grupo de extermínio, ainda que por um só agente.",
      regraMental: "Simples em grupo de extermínio = hediondo. Logo, 'nunca' é falso."
    },
    comentario: {
      resolucao: "ERRADO. Embora, em regra, o homicídio simples não seja hediondo, o art. 1º, I, da Lei 8.072/1990 o considera hediondo quando praticado em atividade típica de grupo de extermínio, ainda que cometido por um só agente. Por isso, o termo absoluto 'em qualquer hipótese' torna a assertiva incorreta.",
      fundamento: "Lei 8.072/1990, art. 1º, I.",
      macete: "Simples + grupo de extermínio = hediondo.",
      erroComum: "Afirmar categoricamente que o simples nunca é hediondo.",
      comoBancaPensa: "Termo absoluto para mascarar a exceção legal."
    }
  },
  {
    id: "LE-080", disciplina: "Legislação Especial", assunto: "Crimes Hediondos", subassunto: "Arma de fogo de uso proibido (Anticrime)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990 c/c Lei 13.964/2019, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "A posse ou o porte ilegal de arma de fogo de uso proibido é classificado como crime hediondo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "uso proibido",
    cognitivo: {
      motivo: "Cobrar a hediondez do porte/posse de arma de uso proibido (Anticrime).",
      mede: "Crimes Hediondos — inovações da Lei 13.964/2019.",
      pegadinhaDesc: "A banca pode trocar 'uso proibido' por 'uso permitido' (que não é hediondo).",
      ondeErra: "Confunde arma de uso permitido, restrito e proibido.",
      palavraCritica: "uso proibido",
      tecnica: "Art. 1º, parágrafo único, da Lei 8.072/90 (Anticrime): é hediondo o porte/posse de arma de fogo de USO PROIBIDO. Arma de uso permitido não é hedionda.",
      regraMental: "Arma de uso proibido = hediondo. Uso permitido, não."
    },
    comentario: {
      resolucao: "CERTO. A Lei 13.964/2019 incluiu, no parágrafo único do art. 1º da Lei 8.072/1990, a hediondez da posse ou porte ilegal de arma de fogo de uso proibido, bem como do comércio ilegal e do tráfico internacional de armas. A hediondez alcança a arma de uso proibido — não a de uso permitido.",
      fundamento: "Lei 8.072/1990, art. 1º, parágrafo único; Lei 10.826/2003.",
      macete: "Uso proibido é hediondo; permitido não.",
      erroComum: "Estender a hediondez à arma de uso permitido.",
      comoBancaPensa: "Explora a distinção entre categorias de armas."
    }
  },
  {
    id: "LE-081", disciplina: "Legislação Especial", assunto: "Crimes Hediondos", subassunto: "Estupro de vulnerável",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O estupro de vulnerável, por dispensar a violência ou grave ameaça reais, não está incluído no rol dos crimes hediondos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "não está incluído",
    cognitivo: {
      motivo: "Cobrar a hediondez do estupro de vulnerável (art. 1º, VI).",
      mede: "Crimes Hediondos — rol.",
      pegadinhaDesc: "Usa a ausência de violência real para excluí-lo do rol, o que é falso.",
      ondeErra: "Associa hediondez à presença de violência física.",
      palavraCritica: "não está incluído",
      tecnica: "Art. 1º, VI: o estupro de vulnerável (CP, art. 217-A) é expressamente hediondo, independentemente de violência real (a vulnerabilidade presume-se).",
      regraMental: "Estupro de vulnerável = hediondo, mesmo sem violência real."
    },
    comentario: {
      resolucao: "ERRADO. O estupro de vulnerável (CP, art. 217-A) integra o rol dos crimes hediondos (art. 1º, VI, da Lei 8.072/1990). A dispensa de violência ou grave ameaça reais decorre da presunção de vulnerabilidade e não afasta a hediondez.",
      fundamento: "Lei 8.072/1990, art. 1º, VI; CP, art. 217-A; Súmula 593 do STJ.",
      jurisprudencia: "STJ, Súmula 593.",
      macete: "Vulnerável: presunção absoluta e hediondez garantida.",
      erroComum: "Excluir do rol por 'ausência de violência'.",
      comoBancaPensa: "Usa característica típica para negar a hediondez."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE15);

/* Frequência de temas — Legislação Penal Especial I (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Legislação Especial");
  if (!d) { d = { disciplina: "Legislação Especial", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Maria da Penha — ação penal e vedação da 9.099/95", freq: 92, tendencia: "alta", prob: 0.93 },
    { tema: "Maria da Penha — medidas protetivas e art. 24-A", freq: 88, tendencia: "alta", prob: 0.9 },
    { tema: "Tortura — benefícios vedados e regime inicial", freq: 82, tendencia: "estavel", prob: 0.85 },
    { tema: "Hediondos — vedações, progressão e rol", freq: 90, tendencia: "alta", prob: 0.9 },
  );
})();
