/* =====================================================================
   QUESTLAB — Lote 26: LEIS FEDERAIS DO EDITAL SEM QUESTÕES
   Preenche lacunas de LEGISLAÇÃO PENAL ESPECIAL apontadas na
   verificação cruzada com o edital PC-AL 2026:
   - Crimes de responsabilidade: Lei 1.079/1950 (autoridades federais/
     estaduais) e Decreto-Lei 201/1967 (prefeitos e vereadores) — item 12.
   - Lei 8.176/1991 — crimes contra a ordem econômica (item 7).
   - Lei 11.101/2005 — crimes falimentares (item 13).
   12 itens INÉDITOS (C/E balanceados). Leis federais de domínio
   público (Lei 9.610/98, art. 8, IV) — itens 100% originais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE26 = [

  /* ===== CRIMES DE RESPONSABILIDADE — Lei 1.079/1950 ===== */
  {
    id: "LE-119", disciplina: "Legislação Especial", assunto: "Crimes de Responsabilidade", subassunto: "Natureza (Lei 1.079/1950)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950; CF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Os crimes de responsabilidade definidos na Lei 1.079/1950 constituem infrações político-administrativas, punidas com a perda do cargo e a inabilitação para o exercício de função pública.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "infrações político-administrativas",
    cognitivo: {
      motivo: "Cobrar a natureza jurídica dos crimes de responsabilidade.",
      palavraCritica: "infrações político-administrativas",
    },
    comentario: {
      resolucao: "CERTO. Os crimes de responsabilidade previstos na Lei 1.079/1950 têm natureza político-administrativa. A condenação (pelo Senado, no caso do Presidente) acarreta a perda do cargo e a inabilitação para o exercício de função pública, e não pena privativa de liberdade.",
      fundamento: "Lei 1.079/1950; CF, art. 52, parágrafo único.",
      macete: "Responsabilidade = política; comum = criminal.",
      erroComum: "Atribuir-lhes pena de prisão.",
      comoBancaPensa: "Testa a distinção entre sanção política e pena criminal."
    }
  },
  {
    id: "LE-120", disciplina: "Legislação Especial", assunto: "Crimes de Responsabilidade", subassunto: "Julgamento do Presidente (troca de sujeito)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 52, I; Lei 1.079/1950)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Nos crimes de responsabilidade, o Presidente da República é processado e julgado pelo Supremo Tribunal Federal.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "Supremo Tribunal Federal",
    cognitivo: {
      motivo: "Cobrar o órgão competente para julgar o Presidente nos crimes de responsabilidade.",
      palavraCritica: "Supremo Tribunal Federal",
    },
    comentario: {
      resolucao: "ERRADO. Nos crimes de responsabilidade, o Presidente da República é julgado pelo SENADO FEDERAL, após autorização de dois terços da Câmara dos Deputados (CF, art. 52, I). O STF é competente para os crimes comuns do Presidente (art. 102, I, 'b').",
      fundamento: "CF, arts. 52, I, e 86; Lei 1.079/1950.",
      macete: "Presidente: responsabilidade no Senado; comum no STF.",
      erroComum: "Mandar o crime de responsabilidade ao STF.",
      comoBancaPensa: "Troca o órgão julgador competente."
    }
  },
  {
    id: "LE-121", disciplina: "Legislação Especial", assunto: "Crimes de Responsabilidade", subassunto: "Rol (probidade e lei orçamentária)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 85; Lei 1.079/1950)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "São crimes de responsabilidade os atos do Presidente da República que atentem contra a probidade na administração e contra a lei orçamentária.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "probidade na administração e ... lei orçamentária",
    cognitivo: {
      motivo: "Cobrar o rol de crimes de responsabilidade (art. 85 da CF).",
      palavraCritica: "probidade na administração ... lei orçamentária",
    },
    comentario: {
      resolucao: "CERTO. O art. 85 da CF, regulamentado pela Lei 1.079/1950, arrola como crimes de responsabilidade os atos do Presidente que atentem contra a Constituição, especialmente contra a probidade na administração e a lei orçamentária, entre outras hipóteses.",
      fundamento: "CF, art. 85, V e VI; Lei 1.079/1950.",
      macete: "Rol do art. 85: probidade e lei orçamentária incluídas.",
      erroComum: "Desconhecer as hipóteses do art. 85.",
      comoBancaPensa: "Cobra a literalidade do rol constitucional."
    }
  },
  {
    id: "LE-122", disciplina: "Legislação Especial", assunto: "Crimes de Responsabilidade", subassunto: "Inabilitação (troca numérica)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 52, parágrafo único)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "A condenação por crime de responsabilidade acarreta a inabilitação, por dez anos, para o exercício de função pública.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "dez anos",
    cognitivo: {
      motivo: "Cobrar o prazo de inabilitação (art. 52, parágrafo único, CF).",
      palavraCritica: "dez anos",
    },
    comentario: {
      resolucao: "ERRADO. A inabilitação para o exercício de função pública, decorrente da condenação por crime de responsabilidade, é de OITO anos, conforme o art. 52, parágrafo único, da CF — e não dez anos.",
      fundamento: "CF, art. 52, parágrafo único; Lei 1.079/1950.",
      macete: "Inabilitação: 8 anos.",
      erroComum: "Trocar o prazo por dez anos.",
      comoBancaPensa: "Troca numérica no prazo de inabilitação."
    }
  },

  /* ===== CRIMES DE RESPONSABILIDADE — Decreto-Lei 201/1967 (prefeitos) ===== */
  {
    id: "LE-123", disciplina: "Legislação Especial", assunto: "Crimes de Responsabilidade", subassunto: "Prefeitos — art. 1º (DL 201/1967)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Decreto-Lei 201/1967; STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Os crimes de responsabilidade dos prefeitos municipais previstos no art. 1º do Decreto-Lei 201/1967 são julgados pelo Poder Judiciário, independentemente do pronunciamento da Câmara Municipal.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "Poder Judiciário, independentemente",
    cognitivo: {
      motivo: "Cobrar a competência para os crimes do art. 1º do DL 201/1967.",
      palavraCritica: "Poder Judiciário, independentemente",
    },
    comentario: {
      resolucao: "CERTO. Apesar do nome, os 'crimes de responsabilidade' do art. 1º do Decreto-Lei 201/1967 têm natureza de crimes comuns (funcionais) e são julgados pelo Poder Judiciário, com penas privativas de liberdade, independentemente de pronunciamento da Câmara Municipal (Súmula 703 do STF).",
      fundamento: "Decreto-Lei 201/1967, art. 1º; Súmula 703 do STF.",
      jurisprudencia: "STF, Súmula 703.",
      macete: "Art. 1º = crime (Judiciário); art. 4º = infração política (Câmara).",
      erroComum: "Exigir juízo prévio da Câmara para os crimes do art. 1º.",
      comoBancaPensa: "Mistura a competência do art. 1º com a do art. 4º."
    }
  },
  {
    id: "LE-124", disciplina: "Legislação Especial", assunto: "Crimes de Responsabilidade", subassunto: "Prefeitos — art. 4º (troca de sujeito)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Decreto-Lei 201/1967, art. 4º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "As infrações político-administrativas dos prefeitos, previstas no art. 4º do Decreto-Lei 201/1967, são julgadas pelo Poder Judiciário, com imposição de pena privativa de liberdade.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "julgadas pelo Poder Judiciário",
    cognitivo: {
      motivo: "Cobrar a competência para as infrações do art. 4º do DL 201/1967.",
      palavraCritica: "Poder Judiciário ... pena privativa de liberdade",
    },
    comentario: {
      resolucao: "ERRADO. As infrações político-administrativas do art. 4º do Decreto-Lei 201/1967 são julgadas pela Câmara Municipal, com sanção de cassação do mandato — não pelo Poder Judiciário nem com pena privativa de liberdade. A competência judicial e a pena de prisão referem-se aos crimes do art. 1º.",
      fundamento: "Decreto-Lei 201/1967, arts. 1º e 4º.",
      macete: "Infração política do prefeito: Câmara cassa; não há prisão.",
      erroComum: "Levar as infrações do art. 4º ao Judiciário.",
      comoBancaPensa: "Troca o órgão julgador e a natureza da sanção."
    }
  },

  /* ===== CRIMES CONTRA A ORDEM ECONÔMICA — Lei 8.176/1991 ===== */
  {
    id: "LE-125", disciplina: "Legislação Especial", assunto: "Crimes contra a Ordem Econômica", subassunto: "Combustíveis (Lei 8.176/1991, art. 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.176/1991, art. 1º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "Constitui crime contra a ordem econômica adquirir, distribuir e revender derivados de petróleo, gás natural e demais combustíveis líquidos carburantes em desacordo com as normas estabelecidas na forma da lei.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "em desacordo com as normas",
    cognitivo: {
      motivo: "Cobrar o tipo do art. 1º da Lei 8.176/1991.",
      palavraCritica: "em desacordo com as normas",
    },
    comentario: {
      resolucao: "CERTO. O art. 1º, I, da Lei 8.176/1991 tipifica como crime contra a ordem econômica adquirir, distribuir e revender derivados de petróleo, gás natural e suas frações recuperáveis, álcool carburante e demais combustíveis líquidos carburantes em desacordo com as normas estabelecidas.",
      fundamento: "Lei 8.176/1991, art. 1º, I.",
      macete: "Combustível irregular: é crime, não só multa.",
      erroComum: "Reduzir a conduta a ilícito administrativo.",
      comoBancaPensa: "Testa a existência do tipo penal."
    }
  },
  {
    id: "LE-126", disciplina: "Legislação Especial", assunto: "Crimes contra a Ordem Econômica", subassunto: "Usurpação de matéria-prima da União (art. 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.176/1991, art. 2º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.7,
    enunciado: "A usurpação de matéria-prima pertencente à União, mediante sua exploração sem autorização legal, constitui mero ilícito administrativo, sem repercussão penal.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "mero ilícito administrativo",
    cognitivo: {
      motivo: "Cobrar a tipicidade penal da usurpação de matéria-prima da União.",
      palavraCritica: "mero ilícito administrativo",
    },
    comentario: {
      resolucao: "ERRADO. O art. 2º da Lei 8.176/1991 tipifica como crime a produção de bens ou a exploração de matéria-prima pertencentes à União sem autorização legal ou em desacordo com ela. Trata-se de crime, e não de mero ilícito administrativo.",
      fundamento: "Lei 8.176/1991, art. 2º.",
      macete: "Matéria-prima da União sem autorização: é crime.",
      erroComum: "Rebaixar a conduta a ilícito administrativo.",
      comoBancaPensa: "Nega a repercussão penal do tipo."
    }
  },

  /* ===== CRIMES FALIMENTARES — Lei 11.101/2005 ===== */
  {
    id: "LE-127", disciplina: "Legislação Especial", assunto: "Crimes Falimentares", subassunto: "Condição objetiva de punibilidade (art. 180)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005, art. 180)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "A decretação da falência, a concessão da recuperação judicial ou a homologação da recuperação extrajudicial é condição objetiva de punibilidade das infrações penais previstas na Lei de Falências.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "condição objetiva de punibilidade",
    cognitivo: {
      motivo: "Cobrar a condição objetiva de punibilidade nos crimes falimentares (art. 180).",
      palavraCritica: "condição objetiva de punibilidade",
    },
    comentario: {
      resolucao: "CERTO. O art. 180 da Lei 11.101/2005 estabelece que a sentença que decreta a falência, concede a recuperação judicial ou homologa a recuperação extrajudicial é condição objetiva de punibilidade das infrações penais nela descritas.",
      fundamento: "Lei 11.101/2005, art. 180.",
      macete: "Crime falimentar só se pune após a sentença (condição objetiva).",
      erroComum: "Chamá-la de elementar do tipo.",
      comoBancaPensa: "Testa a natureza da condição objetiva de punibilidade."
    }
  },
  {
    id: "LE-128", disciplina: "Legislação Especial", assunto: "Crimes Falimentares", subassunto: "Fraude a credores (troca de pena)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005, art. 168)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "A prática, antes ou depois da falência, de ato fraudulento de que resulte prejuízo aos credores, com o fim de obter vantagem indevida, é punida com detenção.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "detenção",
    cognitivo: {
      motivo: "Cobrar a pena do crime de fraude a credores (art. 168).",
      palavraCritica: "detenção",
    },
    comentario: {
      resolucao: "ERRADO. O art. 168 da Lei 11.101/2005 pune a fraude a credores com pena de RECLUSÃO de 3 a 6 anos e multa, e não com detenção. A troca da espécie de pena torna a assertiva incorreta.",
      fundamento: "Lei 11.101/2005, art. 168.",
      macete: "Fraude a credores: reclusão (3 a 6 anos) + multa.",
      erroComum: "Trocar reclusão por detenção.",
      comoBancaPensa: "Troca a espécie de pena privativa de liberdade."
    }
  },
  {
    id: "LE-129", disciplina: "Legislação Especial", assunto: "Crimes Falimentares", subassunto: "Ação penal (art. 184)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005, art. 184)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.7,
    enunciado: "Os crimes previstos na Lei de Falências são de ação penal pública incondicionada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "pública incondicionada",
    cognitivo: {
      motivo: "Cobrar a natureza da ação penal nos crimes falimentares (art. 184).",
      palavraCritica: "pública incondicionada",
    },
    comentario: {
      resolucao: "CERTO. Nos termos do art. 184 da Lei 11.101/2005, os crimes nela previstos são de ação penal pública incondicionada, de titularidade do Ministério Público.",
      fundamento: "Lei 11.101/2005, art. 184.",
      macete: "Falimentar: ação pública incondicionada.",
      erroComum: "Exigir representação/queixa do credor.",
      comoBancaPensa: "Testa a natureza da ação penal."
    }
  },
  {
    id: "LE-130", disciplina: "Legislação Especial", assunto: "Crimes Falimentares", subassunto: "Competência (troca de sujeito)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005, art. 183)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "A competência para o processo e julgamento dos crimes falimentares é do juízo cível perante o qual tramita o processo de falência ou de recuperação.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "juízo cível",
    cognitivo: {
      motivo: "Cobrar a competência criminal nos crimes falimentares (art. 183).",
      palavraCritica: "juízo cível",
    },
    comentario: {
      resolucao: "ERRADO. Conforme o art. 183 da Lei 11.101/2005, compete ao juiz CRIMINAL da jurisdição onde foi decretada a falência (ou concedida/homologada a recuperação) processar e julgar os crimes falimentares. O juízo cível da falência não detém a competência penal.",
      fundamento: "Lei 11.101/2005, art. 183.",
      macete: "Falimentar: crime no juízo criminal; falência no juízo cível.",
      erroComum: "Atribuir o crime ao juízo universal da falência.",
      comoBancaPensa: "Troca o juízo competente (cível × criminal)."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE26);
