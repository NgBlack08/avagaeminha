/* =====================================================================
   QUESTLAB — Lote 20: JURISPRUDÊNCIA STF/STJ (o diferencial da elite)
   Preenche a maior lacuna do banco — súmulas e teses dos tribunais
   superiores, tão cobradas em carreiras policiais:
   - Constitucional: remédios constitucionais + Súmulas STF (266)
   - Processo Penal: provas ilícitas, SV 14, Súmula 145, Súmula 523
   - Administrativo: improbidade (Lei 14.230/2021), Súmula 473, TCU (STF)
   17 itens INÉDITOS, pegadinhas variadas.

   Súmulas e leis são texto público — itens 100% originais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE20 = [

  /* ===== DIREITO CONSTITUCIONAL — REMÉDIOS CONSTITUCIONAIS ===== */
  {
    id: "DC-022", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Habeas corpus (art. 5º, LXVIII)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LXVIII)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "O habeas corpus é cabível sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "liberdade de locomoção",
    cognitivo: {
      motivo: "Cobrar o objeto do habeas corpus.",
      palavraCritica: "liberdade de locomoção",
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, LXVIII, da CF assegura o habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Protege o direito de ir, vir e permanecer.",
      fundamento: "CF, art. 5º, LXVIII.",
      macete: "HC tutela locomoção (preventivo ou repressivo).",
      erroComum: "Estender o HC a direitos alheios à locomoção.",
      comoBancaPensa: "Fixa o objeto próprio do HC."
    }
  },
  {
    id: "DC-023", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "HC e punição disciplinar militar (art. 142, § 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 142, § 2º; STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Cabe habeas corpus para discutir o mérito das punições disciplinares militares.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "mérito das punições disciplinares",
    cognitivo: {
      motivo: "Cobrar a vedação do HC quanto ao mérito disciplinar militar.",
      palavraCritica: "mérito",
    },
    comentario: {
      resolucao: "ERRADO. O art. 142, § 2º, da CF veda o habeas corpus em relação a punições disciplinares militares. O STF admite o HC somente para aferir a legalidade do ato (hierarquia, poder disciplinar, ato ligado à função e pena legal), mas não o mérito da punição.",
      fundamento: "CF, art. 142, § 2º; STF.",
      jurisprudencia: "STF (controle de legalidade, não do mérito).",
      macete: "Punição militar: HC só na legalidade.",
      erroComum: "Admitir HC sobre o mérito disciplinar.",
      comoBancaPensa: "Generaliza o cabimento além da legalidade."
    }
  },
  {
    id: "DC-024", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Mandado de segurança (art. 5º, LXIX)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LXIX)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O mandado de segurança protege direito líquido e certo, não amparado por habeas corpus ou habeas data, lesado ou ameaçado por ato de autoridade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "direito líquido e certo",
    cognitivo: {
      motivo: "Cobrar o cabimento do mandado de segurança.",
      palavraCritica: "líquido e certo",
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, LXIX, da CF prevê o mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público.",
      fundamento: "CF, art. 5º, LXIX; Lei 12.016/2009.",
      macete: "MS: direito líquido e certo, caráter residual.",
      erroComum: "Admitir MS com necessidade de dilação probatória.",
      comoBancaPensa: "Testa a exigência de liquidez e certeza."
    }
  },
  {
    id: "DC-025", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "MS contra lei em tese (Súmula 266 STF)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Súmula 266 do STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "É cabível mandado de segurança contra lei em tese.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "lei em tese",
    cognitivo: {
      motivo: "Cobrar a Súmula 266 do STF.",
      palavraCritica: "lei em tese",
    },
    comentario: {
      resolucao: "ERRADO. Conforme a Súmula 266 do STF, não cabe mandado de segurança contra lei em tese. O MS pressupõe ato concreto de autoridade, e não a impugnação abstrata da norma, própria do controle de constitucionalidade.",
      fundamento: "Súmula 266 do STF.",
      jurisprudencia: "STF, Súmula 266.",
      macete: "MS precisa de ato concreto, não de lei em tese.",
      erroComum: "Usar MS como sucedâneo de ADI.",
      comoBancaPensa: "Contraria entendimento sumulado clássico."
    }
  },
  {
    id: "DC-026", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Habeas data (art. 5º, LXXII)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LXXII)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "O habeas data assegura o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou de caráter público.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "informações relativas à pessoa do impetrante",
    cognitivo: {
      motivo: "Cobrar o objeto do habeas data.",
      palavraCritica: "à pessoa do impetrante",
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, LXXII, da CF garante o habeas data para assegurar o conhecimento de informações relativas à pessoa do impetrante e para a retificação de dados. É remédio personalíssimo, voltado aos dados do próprio requerente.",
      fundamento: "CF, art. 5º, LXXII; Lei 9.507/1997.",
      macete: "HD: seus próprios dados (conhecer/retificar).",
      erroComum: "Usar HD para dados de terceiros.",
      comoBancaPensa: "Troca a titularidade das informações."
    }
  },
  {
    id: "DC-027", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Mandado de injunção (art. 5º, LXXI)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LXXI)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "O mandado de injunção é cabível sempre que a falta de norma regulamentadora de lei ordinária inviabilizar o exercício de um direito.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "norma regulamentadora de lei ordinária",
    cognitivo: {
      motivo: "Cobrar o pressuposto do mandado de injunção.",
      palavraCritica: "lei ordinária",
    },
    comentario: {
      resolucao: "ERRADO. O mandado de injunção pressupõe a falta de norma regulamentadora que inviabilize o exercício de direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania (art. 5º, LXXI). Refere-se à omissão de regulamentação de norma constitucional, e não de lei ordinária.",
      fundamento: "CF, art. 5º, LXXI; Lei 13.300/2016.",
      macete: "MI = omissão que trava direito constitucional.",
      erroComum: "Vincular o MI à regulamentação de lei ordinária.",
      comoBancaPensa: "Troca a natureza da norma omissa."
    }
  },

  /* ===== PROCESSO PENAL — PROVAS E NULIDADES ===== */
  {
    id: "PP-040", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Prova ilícita (art. 157 CPP)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LVI; CPP, art. 157)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "São inadmissíveis, devendo ser desentranhadas do processo, as provas obtidas por meios ilícitos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "desentranhadas",
    cognitivo: {
      motivo: "Cobrar a inadmissibilidade da prova ilícita.",
      palavraCritica: "desentranhadas",
    },
    comentario: {
      resolucao: "CERTO. Conforme o art. 5º, LVI, da CF e o art. 157 do CPP, são inadmissíveis as provas obtidas por meios ilícitos, devendo ser desentranhadas do processo. Consideram-se ilícitas as que violam normas constitucionais ou legais.",
      fundamento: "CF, art. 5º, LVI; CPP, art. 157.",
      macete: "Prova ilícita: inadmissível e desentranhada.",
      erroComum: "Admitir prova ilícita pela sua relevância.",
      comoBancaPensa: "Testa a firmeza da vedação."
    }
  },
  {
    id: "PP-041", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Prova ilícita por derivação (art. 157, § 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 157, § 1º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Pela teoria dos frutos da árvore envenenada, as provas derivadas das ilícitas são contaminadas em qualquer hipótese, sem exceção.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "em qualquer hipótese, sem exceção",
    cognitivo: {
      motivo: "Cobrar as exceções à ilicitude por derivação.",
      palavraCritica: "sem exceção",
    },
    comentario: {
      resolucao: "ERRADO. Embora a teoria dos frutos da árvore envenenada contamine, em regra, as provas derivadas, o art. 157, § 1º, do CPP prevê exceções: inexistência de nexo de causalidade e a fonte independente (abrangendo a descoberta inevitável). Logo, não é 'sem exceção'.",
      fundamento: "CPP, art. 157, § 1º.",
      macete: "Fonte independente e descoberta inevitável salvam a prova.",
      erroComum: "Absolutizar a contaminação por derivação.",
      comoBancaPensa: "Termo absoluto que apaga as exceções."
    }
  },
  {
    id: "PP-042", disciplina: "Processo Penal", assunto: "Investigação", subassunto: "Acesso aos autos (Súmula Vinculante 14)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Súmula Vinculante 14 do STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "É direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório, digam respeito ao exercício do direito de defesa.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "elementos já documentados",
    cognitivo: {
      motivo: "Cobrar a Súmula Vinculante 14 do STF.",
      palavraCritica: "já documentados",
    },
    comentario: {
      resolucao: "CERTO. A Súmula Vinculante 14 do STF assegura ao defensor acesso amplo aos elementos de prova já documentados em procedimento investigatório, no interesse do representado. Ressalvam-se as diligências em andamento, ainda não documentadas, que podem manter o sigilo.",
      fundamento: "STF, Súmula Vinculante 14.",
      jurisprudencia: "STF, SV 14.",
      macete: "Defensor acessa o que já está nos autos (documentado).",
      erroComum: "Estender o acesso a diligências sigilosas em curso.",
      comoBancaPensa: "Testa o limite 'já documentado'."
    }
  },
  {
    id: "PP-043", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Flagrante preparado (Súmula 145 STF)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Súmula 145 do STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "No flagrante preparado, em que o agente é induzido à prática do delito por terceiro que adota providências para impedir sua consumação, há crime consumado e punível.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "crime consumado e punível",
    cognitivo: {
      motivo: "Cobrar a Súmula 145 do STF (flagrante preparado = crime impossível).",
      palavraCritica: "consumado e punível",
    },
    comentario: {
      resolucao: "ERRADO. Segundo a Súmula 145 do STF, não há crime quando a preparação do flagrante pela autoridade torna impossível a sua consumação (flagrante preparado/provocado). A situação difere do flagrante esperado, em que a atuação policial apenas aguarda a ação do agente e é válida.",
      fundamento: "Súmula 145 do STF; CP, art. 17.",
      jurisprudencia: "STF, Súmula 145.",
      macete: "Preparado = crime impossível. Esperado = ok.",
      erroComum: "Punir o flagrante preparado.",
      comoBancaPensa: "Confunde as espécies de flagrante."
    }
  },
  {
    id: "PP-044", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Valor da confissão (art. 197 CPP)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 197)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "No processo penal, a confissão do acusado tem valor relativo e deve ser confrontada com as demais provas dos autos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "valor relativo",
    cognitivo: {
      motivo: "Cobrar o valor da confissão no processo penal.",
      palavraCritica: "valor relativo",
    },
    comentario: {
      resolucao: "CERTO. O art. 197 do CPP estabelece que o valor da confissão se afere pelos critérios adotados para os demais elementos de prova, devendo ser confrontada com as demais provas. Seu valor é relativo, além de a confissão ser divisível e retratável.",
      fundamento: "CPP, art. 197.",
      macete: "Confissão: relativa, divisível e retratável.",
      erroComum: "Dar valor absoluto à confissão.",
      comoBancaPensa: "Testa a superação da 'rainha das provas'."
    }
  },
  {
    id: "PP-045", disciplina: "Processo Penal", assunto: "Nulidades", subassunto: "Princípio do prejuízo (Súmula 523 STF)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 563; Súmula 523 do STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "No processo penal, a nulidade do ato deve ser reconhecida ainda que não haja demonstração de prejuízo à parte.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "ainda que não haja prejuízo",
    cognitivo: {
      motivo: "Cobrar o princípio 'pas de nullité sans grief' (Súmula 523).",
      palavraCritica: "ainda que não haja prejuízo",
    },
    comentario: {
      resolucao: "ERRADO. Vigora o princípio 'pas de nullité sans grief': nenhum ato será declarado nulo se da nulidade não resultar prejuízo (CPP, art. 563). A Súmula 523 do STF reforça que a falta de defesa constitui nulidade absoluta, mas a sua deficiência só anula se houver prova de prejuízo.",
      fundamento: "CPP, art. 563; Súmula 523 do STF.",
      jurisprudencia: "STF, Súmula 523.",
      macete: "Sem prejuízo, não se anula.",
      erroComum: "Anular sem demonstrar prejuízo.",
      comoBancaPensa: "Contraria o princípio do prejuízo."
    }
  },
  {
    id: "PP-046", disciplina: "Processo Penal", assunto: "Interrogatório", subassunto: "Direito ao silêncio (art. 186 CPP)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 186; CF, art. 5º, LXIII)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "O interrogatório é meio de defesa, sendo assegurado ao acusado o direito de permanecer calado, sem que o silêncio importe confissão ou seja interpretado em prejuízo da defesa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "permanecer calado",
    cognitivo: {
      motivo: "Cobrar a natureza do interrogatório e o direito ao silêncio.",
      palavraCritica: "não importa confissão nem prejuízo",
    },
    comentario: {
      resolucao: "CERTO. O interrogatório é predominantemente meio de defesa. O art. 186, parágrafo único, do CPP e o art. 5º, LXIII, da CF asseguram o direito ao silêncio, que não importa confissão nem pode ser interpretado em prejuízo da defesa.",
      fundamento: "CPP, art. 186; CF, art. 5º, LXIII.",
      macete: "Silêncio: direito que não prejudica.",
      erroComum: "Tratar o silêncio como confissão ficta.",
      comoBancaPensa: "Testa o alcance do direito ao silêncio."
    }
  },

  /* ===== DIREITO ADMINISTRATIVO — IMPROBIDADE E CONTROLE ===== */
  {
    id: "DA-038", disciplina: "Direito Administrativo", assunto: "Improbidade administrativa", subassunto: "Elemento subjetivo (Lei 14.230/2021)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.429/1992 c/c Lei 14.230/2021)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Após a Lei 14.230/2021, os atos de improbidade administrativa podem ser praticados a título de dolo ou de culpa.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "dolo ou de culpa",
    cognitivo: {
      motivo: "Cobrar a exigência de dolo na improbidade (reforma de 2021).",
      palavraCritica: "ou de culpa",
    },
    comentario: {
      resolucao: "ERRADO. A Lei 14.230/2021 passou a exigir dolo (vontade livre e consciente de alcançar o resultado ilícito) em todas as modalidades de improbidade, afastando a modalidade culposa que antes se admitia para os atos que causam lesão ao erário. Logo, não há mais improbidade culposa.",
      fundamento: "Lei 8.429/1992, art. 1º, §§ 1º a 3º (Lei 14.230/2021).",
      macete: "Improbidade: só dolo (culpa saiu em 2021).",
      erroComum: "Admitir improbidade culposa.",
      comoBancaPensa: "Explora quem não atualizou a Lei de Improbidade."
    }
  },
  {
    id: "DA-039", disciplina: "Direito Administrativo", assunto: "Improbidade administrativa", subassunto: "Enriquecimento ilícito (art. 9º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.429/1992, art. 9º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Constitui ato de improbidade que importa enriquecimento ilícito auferir, mediante a prática de ato doloso, qualquer tipo de vantagem patrimonial indevida em razão do exercício de cargo, mandato, função, emprego ou atividade pública.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vantagem patrimonial indevida",
    cognitivo: {
      motivo: "Cobrar a hipótese de enriquecimento ilícito (art. 9º).",
      palavraCritica: "vantagem patrimonial indevida",
    },
    comentario: {
      resolucao: "CERTO. O art. 9º da Lei 8.429/1992 tipifica como improbidade por enriquecimento ilícito auferir, mediante ato doloso, qualquer vantagem patrimonial indevida em razão do exercício de cargo, mandato, função, emprego ou atividade nas entidades referidas na lei. Independe de dano ao erário.",
      fundamento: "Lei 8.429/1992, art. 9º.",
      macete: "Enriquecimento ilícito: vantagem indevida (art. 9º).",
      erroComum: "Exigir dano ao erário para o enriquecimento.",
      comoBancaPensa: "Confunde as modalidades de improbidade."
    }
  },
  {
    id: "DA-040", disciplina: "Direito Administrativo", assunto: "Controle da Administração", subassunto: "Tribunal de Contas e sigilo bancário (STF)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STF — controle externo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "Segundo o STF, o Tribunal de Contas, no exercício do controle externo, pode, por autoridade própria, decretar a quebra do sigilo bancário dos responsáveis por contas públicas.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "decretar a quebra do sigilo bancário",
    cognitivo: {
      motivo: "Cobrar os limites dos poderes do Tribunal de Contas (STF).",
      palavraCritica: "decretar a quebra do sigilo bancário",
    },
    comentario: {
      resolucao: "ERRADO. O STF firmou que o Tribunal de Contas não pode, por autoridade própria, decretar a quebra do sigilo bancário, que, como regra, depende de reserva de jurisdição. O TC pode requisitar informações de gestão e dados públicos, mas não afastar o sigilo bancário protegido.",
      fundamento: "STF, MS 22.801 e MS 22.934.",
      jurisprudencia: "STF, MS 22.801/22.934.",
      macete: "Sigilo bancário: TC não quebra sozinho.",
      erroComum: "Ampliar os poderes do TC.",
      comoBancaPensa: "Generaliza a competência do controle externo."
    }
  },
  {
    id: "DA-041", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Autotutela (Súmula 473 STF)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Súmula 473 do STF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "A Administração pode anular seus próprios atos quando eivados de vícios que os tornem ilegais e revogá-los por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "anular e revogar",
    cognitivo: {
      motivo: "Cobrar a autotutela (Súmula 473 do STF).",
      palavraCritica: "anular ... revogá-los",
    },
    comentario: {
      resolucao: "CERTO. A Súmula 473 do STF consagra a autotutela: a Administração pode anular seus atos ilegais e revogar os atos válidos por motivo de conveniência ou oportunidade, sempre respeitados os direitos adquiridos e ressalvada a apreciação judicial.",
      fundamento: "Súmula 473 do STF; Lei 9.784/1999.",
      jurisprudencia: "STF, Súmula 473.",
      macete: "Anula ilegalidade; revoga mérito.",
      erroComum: "Inverter anulação e revogação.",
      comoBancaPensa: "Troca os fundamentos de desfazimento do ato."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE20);
