/* =====================================================================
   QUESTLAB — Lote 54: PROCESSO PENAL (expansão II)
   11 itens INÉDITOS em estilo CEBRASPE, sobre:
   - Princípios constitucionais do processo penal (contraditório, ampla
     defesa, presunção de inocência, nemo tenetur se detegere, provas
     ilícitas, publicidade, juiz natural);
   - Aplicação da lei processual penal no tempo e no espaço
     (territorialidade/lex fori, tempus regit actum, isolamento dos
     atos processuais, não retroatividade).
   Base: CF, arts. 5º (LIII, LV, LVI, LVII, LXIII, XXXVII), 52, I e 93, IX;
   CPP, arts. 1º, 2º, 157 e 366; Súmula 444/STJ; RE 591.054/STF;
   doutrina de Renato Brasileiro de Lima.
   ===================================================================== */

const QUESTOES_PCAL_LOTE54 = [

  /* ===== PRINCÍPIOS CONSTITUCIONAIS DO PROCESSO PENAL ===== */
  {
    id: "PP-071", disciplina: "Processo Penal", assunto: "Princípios constitucionais do processo penal", subassunto: "Contraditório e ampla defesa — acesso a elementos já documentados",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LV; Súmula Vinculante 14/STF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Os princípios do contraditório e da ampla defesa asseguram ao acusado o direito de ser ouvido e de apresentar provas, bem como o direito de acesso aos elementos de prova já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, desde que digam respeito ao exercício do direito de defesa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "já documentados",
    cognitivo: {
      motivo: "Cobrar o alcance do contraditório/ampla defesa na fase investigatória — acesso à prova já produzida, não participação na produção da prova em andamento.",
      palavraCritica: "já documentados",
    },
    comentario: {
      resolucao: "CERTO. Os princípios do contraditório e da ampla defesa asseguram ao acusado o direito de ser ouvido e de apresentar provas, bem como — segundo entendimento consolidado na Súmula Vinculante 14 do STF — o direito de acesso amplo aos elementos de prova já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, que digam respeito ao exercício do direito de defesa.",
      fundamento: "CF, art. 5º, LV; Súmula Vinculante 14/STF.",
      macete: "Defesa acessa o que já está documentado; diligências em andamento podem permanecer sigilosas.",
      erroComum: "Achar que o direito de acesso alcança também as diligências investigatórias futuras, ainda não documentadas.",
      comoBancaPensa: "Cobra o alcance exato do direito de acesso da defesa ao inquérito, fixado pela SV 14."
    }
  },
  {
    id: "PP-072", disciplina: "Processo Penal", assunto: "Princípios constitucionais do processo penal", subassunto: "Nemo tenetur se detegere — reconhecimento x cessão de senha",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (nemo tenetur se detegere; doutrina de Renato Brasileiro)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Na fase de investigação policial, o princípio da não autoincriminação (nemo tenetur se detegere) autoriza o investigado a recusar tanto a participação em ato de reconhecimento pessoal quanto o fornecimento da senha de desbloqueio de seu aparelho celular, por se tratar, em ambos os casos, de comportamento ativo exigido do próprio investigado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "em ambos os casos",
    cognitivo: {
      motivo: "Fixar a distinção entre cooperação meramente passiva (reconhecimento pessoal, que pode ser executado coercitivamente) e comportamento ativo/facere (fornecer senha, que não pode ser exigido).",
      palavraCritica: "em ambos os casos",
    },
    comentario: {
      resolucao: "ERRADO. O princípio da não autoincriminação (nemo tenetur se detegere) protege o investigado apenas contra a exigência de comportamento ATIVO (um facere), como o fornecimento da senha de desbloqueio do celular — nesse caso, ele não pode ser compelido. Já o reconhecimento pessoal, por exigir apenas cooperação passiva do investigado (tolerar sua realização), admite execução coercitiva, mesmo contra a vontade dele. Os dois casos, portanto, NÃO recebem o mesmo tratamento.",
      fundamento: "Doutrina — Lima, Renato Brasileiro de. Manual de Processo Penal.",
      macete: "Passivo (tolerar, ex.: reconhecimento) = coercitivo. Ativo (fazer, ex.: senha) = não exigível.",
      erroComum: "Achar que toda e qualquer colaboração do investigado é protegida igualmente pelo nemo tenetur se detegere.",
      comoBancaPensa: "Agrupa dois institutos com tratamento jurídico oposto sob o mesmo rótulo, testando a distinção fina entre cooperação ativa e passiva."
    }
  },
  {
    id: "PP-073", disciplina: "Processo Penal", assunto: "Princípios constitucionais do processo penal", subassunto: "Ampla defesa e produção antecipada de provas (art. 366, CPP)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 366)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "Viola o princípio da ampla defesa a decisão que determine a produção antecipada de provas urgentes nos casos em que o acusado, citado por edital, não compareça nem constitua advogado, ainda que a medida esteja prevista em lei e conte com a participação de defensor nomeado pelo juízo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "viola o princípio da ampla defesa",
    cognitivo: {
      motivo: "Fixar que o art. 366 do CPP é medida constitucional voltada à preservação da prova, e não uma violação da ampla defesa.",
      palavraCritica: "viola",
    },
    comentario: {
      resolucao: "ERRADO. A produção antecipada de provas urgentes, nos casos em que o acusado citado por edital não comparece nem constitui advogado, está expressamente prevista no art. 366 do CPP e não viola o princípio da ampla defesa — ao contrário, é medida que visa preservar a prova (verdade real), sendo exercida com a participação de defesa técnica nomeada pelo juízo, o que a torna compatível com o devido processo legal.",
      fundamento: "CPP, art. 366.",
      macete: "Art. 366 do CPP preserva a prova; não fere a ampla defesa, pois conta com defesa técnica.",
      erroComum: "Achar que qualquer ato processual praticado à revelia do acusado citado por edital viola automaticamente a ampla defesa.",
      comoBancaPensa: "Descreve a hipótese legal corretamente, mas inverte a conclusão jurídica sobre ela."
    }
  },
  {
    id: "PP-074", disciplina: "Processo Penal", assunto: "Princípios constitucionais do processo penal", subassunto: "Inadmissibilidade das provas ilícitas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LVI; CPP, art. 157; princípio da proporcionalidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "A despeito do princípio constitucional da vedação às provas ilícitas, o juiz poderá considerar uma prova ilícita em qualquer situação, desde que se convença de sua importância para a condenação do réu.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "em qualquer situação",
    cognitivo: {
      motivo: "Fixar que a única mitigação aceita à vedação de provas ilícitas é o uso em favor do réu (pro reo), nunca para fundamentar condenação (pro societate).",
      palavraCritica: "em qualquer situação",
    },
    comentario: {
      resolucao: "ERRADO. A vedação constitucional às provas ilícitas (CF, art. 5º, LVI) é uma barreira contra o arbítrio estatal. A única mitigação aceita pela jurisprudência e pela doutrina majoritária, com base no princípio da proporcionalidade, ocorre quando a prova ilícita é o único caminho para evitar uma condenação injusta (em favor do réu) — nunca para fundamentar a condenação, como afirma incorretamente o item.",
      fundamento: "CF, art. 5º, LVI; CPP, art. 157; princípio da proporcionalidade (doutrina e jurisprudência majoritária).",
      macete: "Prova ilícita: só socorre o réu (pro reo), nunca o Estado (pro societate).",
      erroComum: "Achar que a mitigação da vedação às provas ilícitas vale para qualquer finalidade processual, incluindo a condenação.",
      comoBancaPensa: "Generaliza uma exceção estreita (uso em favor do réu) para abranger também a hipótese oposta (uso para condenar)."
    }
  },
  {
    id: "PP-075", disciplina: "Processo Penal", assunto: "Princípios constitucionais do processo penal", subassunto: "Presunção de inocência e maus antecedentes",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Súmula 444/STJ; RE 591.054/STF — repercussão geral)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.9,
    enunciado: "Fere o princípio constitucional da presunção de inocência (ou da não culpabilidade) a definição de maus antecedentes, para fins de aplicação da pena-base, com fundamento em inquéritos policiais ou ações penais em curso, sem sentença condenatória transitada em julgado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem sentença condenatória transitada em julgado",
    cognitivo: {
      motivo: "Cobrar a Súmula 444/STJ e a tese de repercussão geral do STF (RE 591.054) sobre uso de inquéritos/ações em curso para agravar a pena-base.",
      palavraCritica: "sem sentença condenatória transitada em julgado",
    },
    comentario: {
      resolucao: "CERTO. Utilizar inquéritos policiais ou ações penais em curso, sem trânsito em julgado, para caracterizar maus antecedentes e agravar a pena-base do réu configura antecipação de culpa, o que fere o princípio da presunção de inocência (ou não culpabilidade) — entendimento consolidado na Súmula 444 do STJ e na tese de repercussão geral fixada pelo STF no RE 591.054.",
      fundamento: "Súmula 444/STJ; STF, RE 591.054 (repercussão geral); CF, art. 5º, LVII.",
      macete: "Maus antecedentes exigem trânsito em julgado — nunca inquérito/ação em curso.",
      erroComum: "Achar que o simples envolvimento em investigações ou processos em andamento já autoriza o agravamento da pena-base.",
      comoBancaPensa: "Cobra jurisprudência sumulada de forma literal e direta, sem grande armadilha adicional."
    }
  },
  {
    id: "PP-076", disciplina: "Processo Penal", assunto: "Princípios constitucionais do processo penal", subassunto: "Princípio da publicidade — ampla e restrita",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 93, IX)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "A lei não poderá restringir, em nenhuma hipótese, a publicidade dos atos processuais penais, sob pena de ferir o princípio constitucional da publicidade.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "em nenhuma hipótese",
    cognitivo: {
      motivo: "Fixar que o princípio da publicidade admite exceções (publicidade restrita), previstas no próprio texto constitucional.",
      palavraCritica: "em nenhuma hipótese",
    },
    comentario: {
      resolucao: "ERRADO. O princípio da publicidade admite exceções: o art. 93, IX, da CF autoriza a lei a limitar a presença em determinados atos processuais para preservar o direito à intimidade do interessado, desde que isso não prejudique o interesse público à informação — é a chamada publicidade restrita, como ocorre, por exemplo, em processos que apuram crimes contra a dignidade sexual.",
      fundamento: "CF, art. 93, IX.",
      macete: "Publicidade ampla é a regra, mas publicidade restrita é exceção prevista na própria CF.",
      erroComum: "Achar que a publicidade processual penal é absoluta e não comporta qualquer restrição legal.",
      comoBancaPensa: "Usa o termo absoluto 'em nenhuma hipótese' para transformar em errada uma regra que, na Constituição, admite exceção expressa."
    }
  },
  {
    id: "PP-077", disciplina: "Processo Penal", assunto: "Princípios constitucionais do processo penal", subassunto: "Princípio do juiz natural",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LIII e XXXVII)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.88,
    enunciado: "Ninguém será processado nem sentenciado senão pela autoridade competente, tampouco haverá juízo ou tribunal de exceção, em respeito ao princípio constitucional do juiz natural.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "autoridade competente",
    cognitivo: {
      motivo: "Cobrar o conteúdo literal do princípio do juiz natural, combinando os dois incisos constitucionais que o fundamentam.",
      palavraCritica: "autoridade competente",
    },
    comentario: {
      resolucao: "CERTO. O princípio do juiz natural assegura que ninguém será processado nem sentenciado senão pela autoridade competente (CF, art. 5º, LIII), vedando-se a instituição de juízo ou tribunal de exceção (CF, art. 5º, XXXVII) — trata-se do direito de cada cidadão de saber previamente qual autoridade poderá processá-lo e julgá-lo, caso pratique conduta definida como infração penal.",
      fundamento: "CF, art. 5º, LIII e XXXVII.",
      macete: "Juiz natural = autoridade competente + preexistente + sem tribunal de exceção.",
      erroComum: "Confundir o juiz natural com o devido processo legal em sentido amplo, sem atentar aos dois incisos que o compõem especificamente.",
      comoBancaPensa: "Cobra a literalidade dos dois dispositivos constitucionais que fundamentam o princípio, de forma direta."
    }
  },

  /* ===== LEI PROCESSUAL PENAL NO TEMPO E NO ESPAÇO ===== */
  {
    id: "PP-078", disciplina: "Processo Penal", assunto: "Disposições preliminares", subassunto: "Territorialidade da lei processual penal (CPP, art. 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 1º; CF, art. 52, I)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "O Código de Processo Penal será aplicado a todas as ações penais e correlatas que tiverem curso no território nacional, nelas incluídas as destinadas a apurar crime de responsabilidade cometido pelo presidente da República.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "nelas incluídas",
    cognitivo: {
      motivo: "Fixar as ressalvas taxativas do art. 1º do CPP à regra da territorialidade, especialmente a jurisdição política dos crimes de responsabilidade do Presidente.",
      palavraCritica: "nelas incluídas",
    },
    comentario: {
      resolucao: "ERRADO. A regra geral, no espaço, é a territorialidade (lex fori): o processo penal rege-se, em todo o território brasileiro, pelo CPP. O erro do item está em incluir nessa regra geral o crime de responsabilidade do Presidente da República, que é justamente uma das ressalvas taxativas do art. 1º do CPP — nesse caso, quem processa e julga é o Senado Federal, em jurisdição política (CF, art. 52, I), e não o CPP.",
      fundamento: "CPP, art. 1º, II; CF, art. 52, I.",
      macete: "Crime de responsabilidade do Presidente = Senado Federal (jurisdição política), NÃO o CPP.",
      erroComum: "Achar que o CPP é aplicável a toda e qualquer ação penal ou correlata em curso no território nacional, sem exceções.",
      comoBancaPensa: "Generaliza a regra da territorialidade para abranger também uma das ressalvas taxativas do art. 1º do CPP."
    }
  },
  {
    id: "PP-079", disciplina: "Processo Penal", assunto: "Disposições preliminares", subassunto: "Aplicação imediata da lei processual penal (tempus regit actum)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 2º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.9,
    enunciado: "Uma norma processual penal só terá aplicabilidade aos crimes que forem praticados após sua entrada em vigor, tal como ocorre com a lei penal material.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "tal como ocorre com a lei penal material",
    cognitivo: {
      motivo: "Fixar a distinção entre tempus regit actum (lei processual, rege o ATO) e tempus delicti (lei penal material, rege o CRIME).",
      palavraCritica: "tal como ocorre com a lei penal material",
    },
    comentario: {
      resolucao: "ERRADO. A lei processual penal aplica-se desde logo (CPP, art. 2º), inclusive aos processos em curso, em razão do princípio tempus regit actum: o que importa é a data do ato processual, e não a data do crime — a nova lei alcança os atos praticados após sua vigência, ainda que o crime seja anterior a ela. O item erra ao equiparar essa lógica à do direito penal material, que se rege pelo tempus delicti (lei vigente ao tempo do crime).",
      fundamento: "CPP, art. 2º.",
      macete: "Lei processual olha para o ATO; lei penal material olha para o CRIME. Lógicas opostas.",
      erroComum: "Aplicar à lei processual penal o mesmo critério temporal (data do crime) usado no direito penal material.",
      comoBancaPensa: "Importa, de forma incorreta, a lógica do tempus delicti (direito penal material) para o campo da lei processual, testando se o candidato distingue os dois regimes."
    }
  },
  {
    id: "PP-080", disciplina: "Processo Penal", assunto: "Disposições preliminares", subassunto: "Não retroatividade da lei processual penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 2º; CP, art. 2º, parágrafo único)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "Lei nova mais benéfica, quando modifica procedimentos no processo penal, retroage e impõe a renovação dos atos processuais já praticados sob a vigência da lei anterior.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "retroage e impõe a renovação",
    cognitivo: {
      motivo: "Fixar a teoria do isolamento dos atos processuais: a lei processual não retroage, mesmo se mais benéfica, e não impõe renovação de atos já praticados.",
      palavraCritica: "retroage",
    },
    comentario: {
      resolucao: "ERRADO. A lei puramente processual aplica-se de imediato, mas não retroage, ainda que mais benéfica, e não impõe a renovação dos atos já praticados — é a teoria do isolamento dos atos processuais (CPP, art. 2º): o que foi praticado sob a lei anterior permanece válido, e o processo segue dali em diante pela lei nova. A ideia de que a lei mais benéfica retroage é do direito penal material (CP, art. 2º, parágrafo único), não do processo penal.",
      fundamento: "CPP, art. 2º; CP, art. 2º, parágrafo único (contraste).",
      macete: "Teoria do isolamento dos atos processuais: lei nova não retroage nem renova o que já foi praticado.",
      erroComum: "Aplicar ao processo penal a lógica da retroatividade benéfica, que é exclusiva do direito penal material.",
      comoBancaPensa: "Transporta ao processo penal um instituto (retroatividade benéfica) que pertence ao direito penal material, testando se o candidato os separa corretamente."
    }
  },
  {
    id: "PP-081", disciplina: "Processo Penal", assunto: "Disposições preliminares", subassunto: "Aplicação imediata e isolamento dos atos processuais",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 2º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "A lei processual penal deverá ser aplicada imediatamente, sem que isso prejudique a validade dos atos realizados sob a vigência da lei anterior, tampouco constitua ofensa ao princípio da irretroatividade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem prejuízo da validade dos atos",
    cognitivo: {
      motivo: "Fixar, em sentido positivo, a combinação entre aplicação imediata (tempus regit actum), preservação dos atos anteriores e ausência de ofensa à irretroatividade.",
      palavraCritica: "sem prejuízo da validade dos atos",
    },
    comentario: {
      resolucao: "CERTO. Nos termos do art. 2º do CPP, a lei processual penal aplica-se desde logo, sem prejuízo da validade dos atos realizados sob a vigência da lei anterior. Essa aplicação imediata não constitui ofensa ao princípio da irretroatividade, pois os atos já praticados permanecem válidos (isolamento dos atos processuais) — a lei nova rege apenas os atos futuros do processo em curso.",
      fundamento: "CPP, art. 2º.",
      macete: "Aplicação imediata + atos anteriores preservados = não fere a irretroatividade.",
      erroComum: "Achar que aplicação imediata da lei processual é, por si só, uma forma de retroatividade.",
      comoBancaPensa: "Cobra a compatibilidade entre aplicação imediata e irretroatividade, de forma literal e correta, fechando o bloco temático."
    }
  }

];

QUESTOES.push(...QUESTOES_PCAL_LOTE54);
