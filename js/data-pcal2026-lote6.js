/* =====================================================================
   CEBRASPE LAB — Expansão Edital PC-AL 2026 (Lote 6 — robustez)
   Guiado pelo mapa de artigos do plano de leitura pós-edital.
   Foco: Lei 9.099/95 (Juizados), Estatuto do Desarmamento, Crimes
   contra o Sistema Financeiro Nacional (Lei 7.492/86), Lei de
   Licitações (14.133/2021), incisos do art. 5º da CF e Pacto de
   São José (CADH). Questões INÉDITAS no estilo CEBRASPE, fundamentadas
   na legislação vigente (textos de lei são de domínio público) e na
   jurisprudência consolidada. Não reproduzem questões oficiais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE6 = [

  /* ==================== LEI 9.099/95 — JUIZADOS ESPECIAIS ==================== */
  {
    id: "PP-020", disciplina: "Processo Penal", assunto: "Lei 9.099/1995", subassunto: "Infração de menor potencial ofensivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Consideram-se infrações penais de menor potencial ofensivo, para os fins da Lei nº 9.099/1995, as contravenções penais e os crimes a que a lei comine pena máxima não superior a dois anos, cumulada ou não com multa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "pena máxima não superior a dois anos",
    cognitivo: {
      motivo: "Cobrar o conceito legal de IMPO (art. 61 da Lei 9.099/1995).",
      mede: "Lei 9.099/1995 (item 5 do edital de Processo Penal).",
      pegadinhaDesc: "A banca costuma trocar 'pena máxima' por 'pena mínima' ou '2 anos' por '1 ano'.",
      ondeErra: "Confunde o critério da IMPO (2 anos máx.) com o da suspensão condicional (1 ano mín.).",
      palavraCritica: "pena máxima ≤ 2 anos",
      tecnica: "IMPO: contravenções + crimes com pena MÁXIMA de até 2 anos. É o critério de competência do JECRIM.",
      regraMental: "Menor potencial = 2 anos (máxima). Suspensão do processo = 1 ano (mínima). Não confunda."
    },
    comentario: {
      resolucao: "CERTO. Lei 9.099/1995, art. 61: infrações de menor potencial ofensivo são as contravenções penais e os crimes com pena máxima não superior a 2 anos, cumulada ou não com multa. Define a competência do Juizado Especial Criminal.",
      fundamento: "Lei 9.099/1995, art. 61.",
      macete: "IMPO = 2 anos de MÁXIMA. Suspensão condicional = 1 ano de MÍNIMA.",
      erroComum: "Trocar pena máxima por mínima ou os números 2 e 1.",
      comoBancaPensa: "Conceitos com números próximos (1 × 2 anos) são cruzados na assertiva."
    }
  },
  {
    id: "PP-021", disciplina: "Processo Penal", assunto: "Lei 9.099/1995", subassunto: "Composição civil dos danos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "Nos crimes de ação penal privada ou de ação penal pública condicionada à representação, a composição civil dos danos, homologada pelo juiz, acarreta a renúncia ao direito de queixa ou de representação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "renúncia ao direito de queixa ou representação",
    cognitivo: {
      motivo: "Cobrar o efeito da composição civil (art. 74, parágrafo único).",
      mede: "Lei 9.099/1995 — institutos despenalizadores.",
      pegadinhaDesc: "A banca costuma estender o efeito à ação penal pública incondicionada (onde não há renúncia).",
      ondeErra: "Aplica a renúncia a crimes de ação penal pública incondicionada.",
      palavraCritica: "ação privada ou pública condicionada",
      tecnica: "A renúncia só ocorre nos crimes que dependem da vítima (privada ou condicionada).",
      regraMental: "Composição civil homologada = renúncia à queixa/representação — só nos crimes que dependem da vítima."
    },
    comentario: {
      resolucao: "CERTO. Lei 9.099/1995, art. 74, parágrafo único: nos crimes de ação penal privada ou pública condicionada à representação, o acordo civil homologado acarreta a renúncia ao direito de queixa ou representação. Em ação penal pública incondicionada, o acordo não impede a denúncia.",
      fundamento: "Lei 9.099/1995, art. 74, parágrafo único.",
      macete: "Só renuncia quem depende da vítima: ação privada e condicionada.",
      erroComum: "Aplicar a renúncia à ação penal pública incondicionada.",
      comoBancaPensa: "A banca amplia indevidamente o efeito para toda ação penal."
    }
  },
  {
    id: "PP-022", disciplina: "Processo Penal", assunto: "Lei 9.099/1995", subassunto: "Transação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A transação penal, proposta pelo Ministério Público, consiste na aplicação imediata de pena restritiva de direitos ou multa, e a sua aceitação pelo autor do fato importa reconhecimento de culpa e gera reincidência.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "importa reconhecimento de culpa e gera reincidência",
    cognitivo: {
      motivo: "Cobrar a natureza da transação penal (art. 76) e seus efeitos.",
      mede: "Lei 9.099/1995 — transação penal.",
      pegadinhaDesc: "Afirma que a transação gera reincidência e reconhecimento de culpa — o oposto do correto.",
      ondeErra: "Trata a transação como condenação.",
      palavraCritica: "não gera reincidência nem culpa",
      tecnica: "Transação: não importa reincidência, não consta para maus antecedentes (salvo impedir novo benefício em 5 anos) e não gera efeitos civis.",
      regraMental: "Transação penal ≠ condenação: sem culpa, sem reincidência, sem efeito civil."
    },
    comentario: {
      resolucao: "ERRADO. A transação penal (art. 76) aplica pena restritiva de direitos ou multa por acordo, mas NÃO importa reconhecimento de culpa nem gera reincidência, não consta em certidão de antecedentes (exceto para impedir novo benefício em 5 anos) e não produz efeitos civis.",
      fundamento: "Lei 9.099/1995, art. 76, §§ 4º e 6º.",
      macete: "Transação: aceita a pena, mas não vira 'condenado' — sem culpa, sem reincidência.",
      erroComum: "Equiparar a transação a uma condenação.",
      comoBancaPensa: "Atribui à transação efeitos de sentença condenatória (falso)."
    }
  },
  {
    id: "PP-023", disciplina: "Processo Penal", assunto: "Lei 9.099/1995", subassunto: "Suspensão condicional do processo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.83,
    enunciado: "A suspensão condicional do processo pode ser proposta pelo Ministério Público nos crimes em que a pena mínima cominada seja igual ou inferior a um ano, submetendo o acusado a período de prova de dois a quatro anos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "pena mínima igual ou inferior a um ano",
    cognitivo: {
      motivo: "Cobrar os requisitos da suspensão condicional do processo (art. 89).",
      mede: "Lei 9.099/1995 — sursis processual.",
      pegadinhaDesc: "A banca costuma trocar 'mínima' por 'máxima' ou o período de prova (2-4 anos).",
      ondeErra: "Confunde o critério (pena mínima) com o da IMPO (pena máxima).",
      palavraCritica: "pena mínima ≤ 1 ano / prova 2 a 4 anos",
      tecnica: "Suspensão condicional do processo: pena MÍNIMA de até 1 ano; período de prova de 2 a 4 anos.",
      regraMental: "Sursis processual: MÍNIMA ≤ 1 ano. Não se limita a crimes de menor potencial (Súmula 723 STF)."
    },
    comentario: {
      resolucao: "CERTO. Lei 9.099/1995, art. 89: cabe suspensão condicional do processo nos crimes com pena mínima igual ou inferior a 1 ano, mediante proposta do MP, com período de prova de 2 a 4 anos e condições legais. Aplica-se mesmo a crimes fora da competência do JECRIM (Súmula 723/STF exclui quando a pena mínima, somada a causas de aumento, superar 1 ano).",
      fundamento: "Lei 9.099/1995, art. 89; Súmula 723/STF.",
      macete: "Sursis PROCESSUAL = mínima ≤ 1 ano. Prova de 2 a 4 anos.",
      erroComum: "Trocar pena mínima por máxima.",
      comoBancaPensa: "Números e o par mínima/máxima são o alvo da manipulação."
    }
  },
  {
    id: "PP-024", disciplina: "Processo Penal", assunto: "Lei 9.099/1995", subassunto: "Representação — lesão leve e culposa",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "Por força da Lei nº 9.099/1995, os crimes de lesão corporal leve e de lesão corporal culposa passaram a depender de representação do ofendido para a instauração da ação penal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dependem de representação",
    cognitivo: {
      motivo: "Cobrar a alteração da natureza da ação penal na lesão leve/culposa (art. 88).",
      mede: "Lei 9.099/1995 — ação penal.",
      pegadinhaDesc: "A banca costuma manter esses crimes como ação penal pública incondicionada.",
      ondeErra: "Ignora a exigência de representação introduzida pela Lei 9.099.",
      palavraCritica: "representação (condicionada)",
      tecnica: "Lesão leve e culposa: ação penal pública CONDICIONADA à representação (art. 88).",
      regraMental: "Lesão leve/culposa = precisa de representação. (Exceção relevante: violência doméstica — lesão é incondicionada, Súmula 542 STJ.)"
    },
    comentario: {
      resolucao: "CERTO. Lei 9.099/1995, art. 88: a ação penal relativa aos crimes de lesões corporais leves e culposas passou a depender de representação. Ressalva importante: na lesão corporal em contexto de violência doméstica contra a mulher, a ação é pública incondicionada (Súmula 542/STJ).",
      fundamento: "Lei 9.099/1995, art. 88; Súmula 542/STJ.",
      macete: "Lesão leve/culposa = representação. Violência doméstica = incondicionada.",
      erroComum: "Manter a lesão leve como incondicionada em regra.",
      comoBancaPensa: "Cobra a regra e testa a exceção da violência doméstica."
    }
  },

  /* ==================== ESTATUTO DO DESARMAMENTO ==================== */
  {
    id: "LE-025", disciplina: "Legislação Especial", assunto: "Estatuto do Desarmamento", subassunto: "Posse × porte",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.88,
    enunciado: "No Estatuto do Desarmamento, a conduta de manter arma de fogo de uso permitido no interior da própria residência, sem o devido registro, configura o crime de porte ilegal de arma de fogo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "no interior da própria residência / porte",
    cognitivo: {
      motivo: "Distinguir posse (art. 12) de porte (art. 14) de arma de fogo.",
      mede: "Legislação penal especial — Estatuto do Desarmamento (Dias 18-19 do plano).",
      pegadinhaDesc: "Rotula como 'porte' a conduta que é 'posse' (arma dentro de casa).",
      ondeErra: "Não distingue guardar em casa (posse) de trazer consigo fora (porte).",
      palavraCritica: "residência = posse (não porte)",
      tecnica: "Posse: dentro de casa/trabalho (art. 12). Porte: fora, trazendo consigo (art. 14).",
      regraMental: "Arma em casa = POSSE. Arma na rua com você = PORTE. O porte tem pena maior."
    },
    comentario: {
      resolucao: "ERRADO. Manter arma no interior da residência configura POSSE irregular de arma de fogo (art. 12 da Lei 10.826/2003), e não porte. O porte (art. 14) pressupõe trazer a arma consigo fora da residência ou local de trabalho. As penas e a gravidade são distintas.",
      fundamento: "Lei 10.826/2003, arts. 12 e 14.",
      macete: "Dentro de casa = posse (art. 12). Na rua = porte (art. 14).",
      erroComum: "Chamar de 'porte' a arma guardada em casa.",
      comoBancaPensa: "Posse × porte é o divisor clássico do Estatuto, cobrado pela localização da arma."
    }
  },
  {
    id: "LE-026", disciplina: "Legislação Especial", assunto: "Estatuto do Desarmamento", subassunto: "Arma de uso restrito",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "No Estatuto do Desarmamento, a posse ou o porte de arma de fogo, acessório ou munição de uso restrito é punido de forma mais severa do que as condutas equivalentes envolvendo arma de uso permitido.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "uso restrito mais severo",
    cognitivo: {
      motivo: "Cobrar a distinção de tratamento entre arma de uso permitido e restrito (art. 16).",
      mede: "Legislação penal especial — Estatuto do Desarmamento.",
      pegadinhaDesc: "Item correto; a banca costuma igualar as penas ou inverter a gravidade.",
      ondeErra: "Trata uso permitido e restrito com a mesma pena.",
      palavraCritica: "uso restrito = pena maior",
      tecnica: "Uso restrito (art. 16): reclusão de 3 a 6 anos — mais grave que posse/porte de uso permitido.",
      regraMental: "Uso restrito > uso permitido. E arma de uso PROIBIDO (art. 16, §2º) é hedionda."
    },
    comentario: {
      resolucao: "CERTO. As condutas do art. 16 (uso restrito) são apenadas com reclusão de 3 a 6 anos, mais severamente que a posse (art. 12, detenção 1-3) e o porte de uso permitido (art. 14, reclusão 2-4). A posse/porte de arma de uso PROIBIDO (art. 16, § 2º) é, ainda, crime hediondo (Lei 8.072/1990).",
      fundamento: "Lei 10.826/2003, arts. 12, 14 e 16; Lei 8.072/1990.",
      macete: "Permitido < Restrito < Proibido (hediondo). A gravidade sobe com a classe da arma.",
      erroComum: "Igualar penas de uso permitido e restrito.",
      comoBancaPensa: "Cobra a gradação de penas conforme a classificação da arma."
    }
  },
  {
    id: "LE-027", disciplina: "Legislação Especial", assunto: "Estatuto do Desarmamento", subassunto: "SINARM",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.7,
    enunciado: "O Sistema Nacional de Armas (SINARM), instituído no âmbito da Polícia Federal, tem circunscrição em todo o território nacional e destina-se, entre outras finalidades, ao registro e ao controle de armas de fogo de uso permitido.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "SINARM / Polícia Federal",
    cognitivo: {
      motivo: "Cobrar a competência e as finalidades do SINARM (art. 1º e 2º).",
      mede: "Legislação penal especial — Estatuto do Desarmamento.",
      pegadinhaDesc: "A banca costuma atribuir o SINARM ao Exército (que gere o SIGMA, de uso restrito).",
      ondeErra: "Confunde SINARM (PF, uso permitido) com SIGMA (Exército, uso restrito).",
      palavraCritica: "SINARM = Polícia Federal",
      tecnica: "SINARM: Polícia Federal, armas de uso permitido. SIGMA: Exército, armas de uso restrito.",
      regraMental: "SINARM = Polícia Federal (permitido). SIGMA = Exército (restrito)."
    },
    comentario: {
      resolucao: "CERTO. Lei 10.826/2003, arts. 1º e 2º: o SINARM funciona no âmbito da Polícia Federal, com abrangência nacional, destinando-se ao registro e controle das armas de uso permitido. As armas de uso restrito são controladas pelo SIGMA, do Comando do Exército.",
      fundamento: "Lei 10.826/2003, arts. 1º e 2º.",
      macete: "SINARM = PF (permitido). SIGMA = Exército (restrito).",
      erroComum: "Atribuir o SINARM ao Exército.",
      comoBancaPensa: "Troca de órgão (PF × Exército) é a pegadinha do tema."
    }
  },

  /* ==================== CRIMES CONTRA O SISTEMA FINANCEIRO (Lei 7.492/86) ==================== */
  {
    id: "LE-028", disciplina: "Legislação Especial", assunto: "Crimes contra o Sistema Financeiro", subassunto: "Gestão fraudulenta × temerária",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Na Lei nº 7.492/1986, a gestão fraudulenta de instituição financeira é punida mais gravemente do que a gestão temerária, sendo aquela caracterizada pelo emprego de ardil ou artifício na condução dos negócios da instituição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "gestão fraudulenta × temerária",
    cognitivo: {
      motivo: "Distinguir gestão fraudulenta (dolo/ardil) de gestão temerária (excesso de risco) — art. 4º.",
      mede: "Crimes contra o Sistema Financeiro Nacional (Dia 23 do plano; item do edital).",
      pegadinhaDesc: "A banca costuma inverter a gravidade ou as definições das duas modalidades.",
      ondeErra: "Confunde fraude (ardil) com temeridade (risco excessivo).",
      palavraCritica: "fraudulenta = ardil; temerária = risco excessivo",
      tecnica: "Fraudulenta (caput, 3-12 anos): há fraude/ardil. Temerária (parágrafo único, 2-8 anos): gestão arriscada, sem fraude.",
      regraMental: "Fraudulenta = enganou (mais grave). Temerária = arriscou demais (menos grave)."
    },
    comentario: {
      resolucao: "CERTO. Lei 7.492/1986, art. 4º: a gestão fraudulenta (caput) — com emprego de ardil/artifício — é punida com reclusão de 3 a 12 anos; a gestão temerária (parágrafo único) — administração com risco excessivo e imprudente — com reclusão de 2 a 8 anos. A competência é da Justiça Federal.",
      fundamento: "Lei 7.492/1986, art. 4º e art. 26.",
      macete: "Fraudulenta = fraude (mais grave). Temerária = temeridade/risco (menos grave).",
      erroComum: "Inverter a gravidade ou as definições.",
      comoBancaPensa: "Par de crimes com nomes parecidos é cobrado por inversão de definição/pena."
    }
  },
  {
    id: "LE-029", disciplina: "Legislação Especial", assunto: "Crimes contra o Sistema Financeiro", subassunto: "Evasão de divisas / competência",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.72,
    enunciado: "Os crimes contra o Sistema Financeiro Nacional, definidos na Lei nº 7.492/1986, incluindo a evasão de divisas, são de competência da Justiça Estadual do local da sede da instituição financeira.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "Justiça Estadual",
    cognitivo: {
      motivo: "Cobrar a competência da Justiça Federal para os crimes da Lei 7.492.",
      mede: "Crimes contra o Sistema Financeiro Nacional.",
      pegadinhaDesc: "Atribui à Justiça Estadual a competência que é da Justiça Federal.",
      ondeErra: "Ignora a regra expressa de competência federal (art. 26).",
      palavraCritica: "Justiça Estadual (deveria ser Federal)",
      tecnica: "Crimes contra o SFN: competência da Justiça FEDERAL (art. 26 da Lei 7.492).",
      regraMental: "Sistema Financeiro Nacional = interesse da União = Justiça Federal."
    },
    comentario: {
      resolucao: "ERRADO. Lei 7.492/1986, art. 26: a ação penal, nos crimes contra o Sistema Financeiro Nacional, é da competência da Justiça FEDERAL, promovida pelo Ministério Público Federal. A evasão de divisas (art. 22) enquadra-se nessa competência.",
      fundamento: "Lei 7.492/1986, arts. 22 e 26; CF, art. 109.",
      macete: "SFN = União = Justiça Federal. Evasão de divisas idem.",
      erroComum: "Fixar a competência na Justiça Estadual.",
      comoBancaPensa: "Troca de competência (Estadual × Federal) é pegadinha recorrente."
    }
  },

  /* ==================== LEI DE LICITAÇÕES (14.133/2021) ==================== */
  {
    id: "DA-010", disciplina: "Direito Administrativo", assunto: "Licitações", subassunto: "Dispensa × inexigibilidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "Na Lei nº 14.133/2021, a inexigibilidade de licitação ocorre nas hipóteses de inviabilidade de competição, ao passo que a dispensa se dá em situações em que, embora viável a competição, a lei faculta ou determina a contratação direta.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inviabilidade de competição",
    cognitivo: {
      motivo: "Distinguir inexigibilidade (art. 74) de dispensa (art. 75) de licitação.",
      mede: "Licitações — contratação direta (item 5.2 do edital de Adm; Dias 05/10/15 do plano).",
      pegadinhaDesc: "A banca costuma inverter — dizer que a dispensa decorre da inviabilidade de competição.",
      ondeErra: "Troca o fundamento de cada instituto.",
      palavraCritica: "inexigibilidade = inviável competir; dispensa = competição viável",
      tecnica: "Inexigível: competição INVIÁVEL (fornecedor exclusivo, notória especialização, artista consagrado). Dispensa: competição possível, mas a lei dispensa (rol taxativo).",
      regraMental: "Inexigível = impossível competir (rol exemplificativo). Dispensa = possível, mas liberada (rol taxativo)."
    },
    comentario: {
      resolucao: "CERTO. Lei 14.133/2021: a inexigibilidade (art. 74) pressupõe INVIABILIDADE de competição (rol exemplificativo); a dispensa (art. 75) ocorre quando a competição é viável, mas a lei autoriza a contratação direta em hipóteses taxativas (valor, emergência etc.).",
      fundamento: "Lei 14.133/2021, arts. 74 e 75.",
      macete: "Inexigível = 'não dá para competir'. Dispensa = 'dá, mas a lei dispensa'.",
      erroComum: "Inverter os fundamentos de dispensa e inexigibilidade.",
      comoBancaPensa: "Par espelhado (dispensa × inexigibilidade) invertido na assertiva."
    }
  },
  {
    id: "DA-011", disciplina: "Direito Administrativo", assunto: "Licitações", subassunto: "Crimes licitatórios no CP",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Com a Lei nº 14.133/2021, os crimes em licitações e contratos administrativos, antes previstos na Lei nº 8.666/1993, passaram a integrar o Código Penal, em capítulo próprio.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "passaram a integrar o Código Penal",
    cognitivo: {
      motivo: "Cobrar a migração dos crimes licitatórios para o CP (arts. 337-E a 337-P).",
      mede: "Licitações + crimes em licitações (Lei 14.133/2021, item do edital).",
      pegadinhaDesc: "A banca costuma manter os crimes na Lei 8.666 (revogada nesse ponto).",
      ondeErra: "Responde com a localização antiga dos crimes licitatórios.",
      palavraCritica: "Código Penal (arts. 337-E a 337-P)",
      tecnica: "A Lei 14.133 transferiu os crimes de licitação para o CP, no capítulo 'Dos Crimes em Licitações e Contratos Administrativos'.",
      regraMental: "Crimes de licitação hoje = Código Penal (337-E a 337-P), não mais na 8.666."
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.133/2021 revogou os tipos penais da Lei 8.666/1993 e inseriu os crimes em licitações e contratos no Código Penal (arts. 337-E a 337-P), no Título XI (crimes contra a Administração Pública).",
      fundamento: "CP, arts. 337-E a 337-P (Lei 14.133/2021); revogação dos arts. 89 a 108 da Lei 8.666/1993.",
      macete: "Crime de licitação 'mudou de endereço': foi da 8.666 para o CP.",
      erroComum: "Localizar os crimes ainda na Lei 8.666.",
      comoBancaPensa: "Alteração recente de localização normativa é cobrança típica."
    }
  },
  {
    id: "DA-012", disciplina: "Direito Administrativo", assunto: "Licitações", subassunto: "Princípios",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "A Lei nº 14.133/2021 consagra, entre os princípios da licitação, o do julgamento objetivo, que veda a utilização de critérios subjetivos ou não previstos no edital para a seleção da proposta vencedora.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "julgamento objetivo",
    cognitivo: {
      motivo: "Cobrar o princípio do julgamento objetivo (art. 5º).",
      mede: "Licitações — princípios (item 5.1 do edital).",
      pegadinhaDesc: "A banca costuma confundir julgamento objetivo com discricionariedade na escolha.",
      ondeErra: "Admite critérios subjetivos na seleção da proposta.",
      palavraCritica: "veda critérios subjetivos",
      tecnica: "Julgamento objetivo: a proposta vencedora sai de critérios do edital, mensuráveis e impessoais.",
      regraMental: "Licitação se julga pelo edital, não pelo gosto do administrador (objetividade)."
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.133/2021 (art. 5º) elenca o julgamento objetivo entre os princípios, exigindo que a seleção se baseie em critérios objetivos definidos no edital, afastando subjetivismos e favorecimentos. Conecta-se à vinculação ao instrumento convocatório.",
      fundamento: "Lei 14.133/2021, art. 5º.",
      macete: "Julgamento objetivo = 'ganha quem atende o edital', sem achismo.",
      erroComum: "Admitir critérios subjetivos na escolha.",
      comoBancaPensa: "Princípios da licitação são cobrados testando a objetividade da seleção."
    }
  },

  /* ==================== CF ART. 5º — INCISOS ==================== */
  {
    id: "DC-010", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Presunção de inocência",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.88,
    enunciado: "Ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória, garantia que consagra o princípio da presunção de inocência ou da não culpabilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "trânsito em julgado",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 5º, LVII, da CF.",
      mede: "Direitos e garantias fundamentais (Dia 01 do plano).",
      pegadinhaDesc: "A banca costuma trocar 'trânsito em julgado' por 'sentença de primeiro grau' ou 'condenação em segunda instância'.",
      ondeErra: "Antecipa a culpa para antes do trânsito em julgado.",
      palavraCritica: "até o trânsito em julgado",
      tecnica: "Presunção de inocência vale até o TRÂNSITO EM JULGADO — marco literal do inciso LVII.",
      regraMental: "Culpado só depois que 'não cabe mais recurso' (trânsito em julgado)."
    },
    comentario: {
      resolucao: "CERTO. CF, art. 5º, LVII: 'ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória'. É a presunção de inocência (não culpabilidade). O STF (ADCs 43, 44 e 54) reafirmou a impossibilidade de execução da pena antes do trânsito em julgado.",
      fundamento: "CF, art. 5º, LVII; STF, ADCs 43, 44 e 54.",
      macete: "Presunção de inocência = até 'não caber mais recurso'.",
      erroComum: "Antecipar a culpa para a condenação em 2ª instância.",
      comoBancaPensa: "Marco temporal do inciso LVII é o ponto manipulado."
    }
  },
  {
    id: "DC-011", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Comunicação da prisão",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "comunicados imediatamente",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 5º, LXII, da CF.",
      mede: "Direitos e garantias fundamentais.",
      pegadinhaDesc: "A banca costuma trocar 'imediatamente' por 'em 24 horas' ou omitir a família.",
      ondeErra: "Confunde a comunicação imediata (LXII) com o prazo de entrega do auto (LXIII/CPP).",
      palavraCritica: "imediatamente ao juiz e à família",
      tecnica: "Comunicação da prisão: IMEDIATA, ao juiz E à família/pessoa indicada.",
      regraMental: "Prendeu = comunica na hora ao juiz e à família. Não é 'em 24h'."
    },
    comentario: {
      resolucao: "CERTO. CF, art. 5º, LXII: a prisão e o local onde se encontre o preso serão comunicados imediatamente ao juiz competente e à família do preso ou a pessoa por ele indicada. Garantia de controle da legalidade da prisão.",
      fundamento: "CF, art. 5º, LXII.",
      macete: "Comunicação da prisão = imediata (juiz + família). Não confundir com prazos do CPP.",
      erroComum: "Trocar 'imediatamente' por prazo em horas.",
      comoBancaPensa: "Advérbio 'imediatamente' é trocado por prazo determinado."
    }
  },
  {
    id: "DC-012", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Prisão ilegal e liberdade provisória",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A prisão ilegal será imediatamente relaxada pela autoridade policial que a tenha efetuado, independentemente de manifestação judicial.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "autoridade policial",
    cognitivo: {
      motivo: "Cobrar a competência para o relaxamento da prisão ilegal (art. 5º, LXV).",
      mede: "Direitos e garantias fundamentais.",
      pegadinhaDesc: "Atribui à autoridade policial o relaxamento, que é reservado à autoridade judiciária.",
      ondeErra: "Confunde quem relaxa a prisão ilegal (juiz).",
      palavraCritica: "autoridade policial (deveria ser judiciária)",
      tecnica: "Relaxamento da prisão ilegal = ato do JUIZ (autoridade judiciária), art. 5º, LXV.",
      regraMental: "Prisão ilegal → RELAXA o juiz. Delegado não relaxa prisão."
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, LXV: 'a prisão ilegal será imediatamente relaxada pela autoridade JUDICIÁRIA'. O relaxamento é ato privativo do juiz, não da autoridade policial.",
      fundamento: "CF, art. 5º, LXV.",
      macete: "Relaxamento de prisão ilegal = juiz. Delegado lavra, o juiz relaxa.",
      erroComum: "Atribuir o relaxamento ao delegado.",
      comoBancaPensa: "Troca de sujeito (autoridade policial × judiciária) na garantia."
    }
  },
  {
    id: "DC-013", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Identificação criminal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "O civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses previstas em lei.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "salvo nas hipóteses previstas em lei",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 5º, LVIII, da CF (relevante para papiloscopista).",
      mede: "Direitos e garantias fundamentais.",
      pegadinhaDesc: "A banca costuma tornar a regra absoluta ('nunca será identificado') ou suprimir a ressalva legal.",
      ondeErra: "Ignora que a lei prevê exceções (Lei 12.037/2009).",
      palavraCritica: "salvo nas hipóteses previstas em lei",
      tecnica: "Regra: civilmente identificado não sofre identificação criminal — EXCETO nos casos legais.",
      regraMental: "Tem RG? Em regra não identifica criminalmente — salvo exceções da Lei 12.037/2009."
    },
    comentario: {
      resolucao: "CERTO. CF, art. 5º, LVIII: 'o civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses previstas em lei'. A Lei 12.037/2009 disciplina as exceções (ex.: documento com rasura, indícios de falsificação, essencialidade à investigação).",
      fundamento: "CF, art. 5º, LVIII; Lei 12.037/2009.",
      macete: "Regra: não identifica quem já tem identificação civil — salvo os casos da lei.",
      erroComum: "Tornar a garantia absoluta, sem a ressalva legal.",
      comoBancaPensa: "Suprimir a cláusula 'salvo em lei' transforma regra relativa em absoluta."
    }
  },

  /* ==================== PACTO DE SÃO JOSÉ (CADH) ==================== */
  {
    id: "DH-010", disciplina: "Direitos Humanos", assunto: "Convenção Americana", subassunto: "Integridade pessoal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "Segundo a Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), toda pessoa tem direito a que se respeite sua integridade física, psíquica e moral, sendo vedada a submissão a tortura ou a penas ou tratos cruéis, desumanos ou degradantes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "integridade física, psíquica e moral",
    cognitivo: {
      motivo: "Cobrar o direito à integridade pessoal (art. 5º da CADH).",
      mede: "Convenção Americana (Dias 03/08 do plano; item 6 do edital).",
      pegadinhaDesc: "Item correto; a banca costuma restringir a integridade apenas à dimensão física.",
      ondeErra: "Limita a proteção ao aspecto físico, esquecendo psíquico e moral.",
      palavraCritica: "física, psíquica e moral",
      tecnica: "Integridade pessoal na CADH abrange as três dimensões: física, psíquica e moral.",
      regraMental: "Pacto de São José: integridade é tripla (física + psíquica + moral) e veda tortura/tratos degradantes."
    },
    comentario: {
      resolucao: "CERTO. CADH (Decreto 678/1992), art. 5º: toda pessoa tem direito ao respeito de sua integridade física, psíquica e moral, sendo vedada a tortura e as penas ou tratos cruéis, desumanos ou degradantes. Dialoga com o art. 5º, III, da CF.",
      fundamento: "Decreto 678/1992 (CADH), art. 5º; CF, art. 5º, III.",
      macete: "Integridade do Pacto = física + psíquica + moral (as três).",
      erroComum: "Restringir a integridade ao aspecto físico.",
      comoBancaPensa: "Reduzir o alcance de um direito (só física) é isca comum."
    }
  },
  {
    id: "DH-011", disciplina: "Direitos Humanos", assunto: "Convenção Americana", subassunto: "Garantias judiciais",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "A Convenção Americana sobre Direitos Humanos assegura a toda pessoa acusada de delito o direito de ser julgada dentro de um prazo razoável e o direito de recorrer da sentença a juiz ou tribunal superior.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "prazo razoável / duplo grau",
    cognitivo: {
      motivo: "Cobrar as garantias judiciais da CADH (art. 8º).",
      mede: "Convenção Americana — garantias judiciais.",
      pegadinhaDesc: "Item correto; a banca costuma negar o duplo grau como garantia convencional ou omitir o prazo razoável.",
      ondeErra: "Desconhece que o duplo grau tem previsão convencional expressa.",
      palavraCritica: "prazo razoável + recurso a tribunal superior",
      tecnica: "Art. 8º da CADH: presunção de inocência, prazo razoável, ampla defesa e direito de recorrer (duplo grau).",
      regraMental: "Pacto de São José, art. 8º: julgamento em prazo razoável + duplo grau de jurisdição."
    },
    comentario: {
      resolucao: "CERTO. CADH, art. 8º (garantias judiciais): assegura o julgamento em prazo razoável por juiz competente, imparcial e independente, a presunção de inocência e o direito de recorrer da sentença a juiz ou tribunal superior (duplo grau de jurisdição).",
      fundamento: "Decreto 678/1992 (CADH), art. 8º.",
      macete: "Art. 8º da CADH = 'pacote de garantias': prazo razoável, inocência, defesa, duplo grau.",
      erroComum: "Negar o duplo grau como garantia convencional.",
      comoBancaPensa: "Testa o conhecimento do conteúdo do art. 8º da Convenção."
    }
  },
  {
    id: "DH-012", disciplina: "Direitos Humanos", assunto: "Convenção Americana", subassunto: "Direito à vida / pena de morte",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "Conforme a Convenção Americana sobre Direitos Humanos, não se pode restabelecer a pena de morte nos Estados que a hajam abolido, tampouco estendê-la a delitos aos quais não se aplique atualmente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não restabelecer a pena de morte",
    cognitivo: {
      motivo: "Cobrar a cláusula de vedação ao retrocesso quanto à pena de morte (art. 4º da CADH).",
      mede: "Convenção Americana — direito à vida.",
      pegadinhaDesc: "A banca costuma afirmar que a CADH proíbe a pena de morte em termos absolutos, para todos os países.",
      ondeErra: "Confunde vedação ao retrocesso com proibição absoluta universal.",
      palavraCritica: "não restabelecer nos que aboliram",
      tecnica: "CADH não proíbe a pena de morte em absoluto — veda seu restabelecimento e ampliação (efeito cliquet).",
      regraMental: "Pacto de São José: quem aboliu a pena de morte não pode trazê-la de volta (não retrocesso)."
    },
    comentario: {
      resolucao: "CERTO. CADH, art. 4º: nos Estados que aboliram a pena de morte, não se pode restabelecê-la, nem estendê-la a novos delitos. Trata-se de cláusula de proibição ao retrocesso (efeito cliquet), e não de proibição universal e absoluta da pena capital.",
      fundamento: "Decreto 678/1992 (CADH), art. 4º.",
      macete: "Aboliu a pena de morte? Não pode voltar atrás (não retrocesso).",
      erroComum: "Tratar a CADH como proibição absoluta da pena de morte.",
      comoBancaPensa: "Confunde vedação ao retrocesso com proibição universal."
    }
  },

  /* ==================== DIREITO PENAL — CRIMES CONTRA A ADMINISTRAÇÃO ==================== */
  {
    id: "DP-021", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Prevaricação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Comete prevaricação o funcionário público que retarda ou deixa de praticar, indevidamente, ato de ofício, ou o pratica contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "interesse ou sentimento pessoal",
    cognitivo: {
      motivo: "Cobrar o elemento subjetivo especial da prevaricação (art. 319).",
      mede: "Crimes contra a Administração Pública (Dia 17 do plano).",
      pegadinhaDesc: "A banca costuma trocar 'interesse ou sentimento pessoal' por 'vantagem indevida' (que caracteriza corrupção).",
      ondeErra: "Confunde prevaricação (sentimento pessoal) com corrupção (vantagem).",
      palavraCritica: "satisfazer interesse ou sentimento pessoal",
      tecnica: "Prevaricação: motivação PESSOAL (sem vantagem econômica). Corrupção: vantagem indevida.",
      regraMental: "Prevaricação = 'fez por preguiça/vingança/favor pessoal', sem grana. Corrupção = tem vantagem."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 319: prevaricar é retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal. O especial fim de agir (interesse/sentimento pessoal) é o que a distingue de outros crimes funcionais.",
      fundamento: "CP, art. 319.",
      macete: "Prevaricação: motivação pessoal, SEM vantagem econômica.",
      erroComum: "Confundir com corrupção passiva (que exige vantagem indevida).",
      comoBancaPensa: "Troca o elemento subjetivo (sentimento pessoal × vantagem) entre crimes funcionais."
    }
  },
  {
    id: "DP-022", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Corrupção ativa",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "A corrupção ativa, prevista no Código Penal, é crime praticado por particular contra a Administração em geral, consistindo em oferecer ou prometer vantagem indevida a funcionário público para determiná-lo a praticar, omitir ou retardar ato de ofício.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "particular / oferecer ou prometer",
    cognitivo: {
      motivo: "Cobrar a corrupção ativa (art. 333) e seu sujeito ativo (particular).",
      mede: "Crimes contra a Administração — praticados por particular.",
      pegadinhaDesc: "A banca costuma trocar 'oferecer/prometer' (ativa) por 'solicitar/receber' (passiva) ou o sujeito (funcionário).",
      ondeErra: "Confunde corrupção ativa (particular oferece) com passiva (funcionário solicita/recebe).",
      palavraCritica: "particular oferece/promete",
      tecnica: "Ativa: PARTICULAR oferece/promete (art. 333). Passiva: FUNCIONÁRIO solicita/recebe/aceita (art. 317).",
      regraMental: "Ativa = quem dá (particular). Passiva = quem recebe (funcionário). Não precisa uma para a outra existir."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 333: a corrupção ativa é praticada por particular que oferece ou promete vantagem indevida a funcionário público para determiná-lo a praticar, omitir ou retardar ato de ofício. É crime formal e independe da aceitação (a corrupção passiva, do art. 317, é autônoma).",
      fundamento: "CP, arts. 333 e 317.",
      macete: "Ativa = oferece (particular). Passiva = solicita/recebe (funcionário).",
      erroComum: "Trocar os verbos ou o sujeito ativo entre ativa e passiva.",
      comoBancaPensa: "Par ativa × passiva é cobrado invertendo verbo nuclear e sujeito."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE6);

/* Reforço de frequência de temas do lote 6 (Módulo 2) */
(function () {
  const add = (disc, temas) => {
    let d = FREQUENCIA_TEMAS.find(f => f.disciplina === disc);
    if (!d) { d = { disciplina: disc, temas: [] }; FREQUENCIA_TEMAS.push(d); }
    d.temas.push(...temas);
  };
  add("Processo Penal", [
    { tema: "Lei 9.099/1995 (transação e sursis processual)", freq: 88, tendencia: "alta", prob: 0.9 },
  ]);
  add("Legislação Especial", [
    { tema: "Estatuto do Desarmamento (posse × porte)", freq: 84, tendencia: "estavel", prob: 0.86 },
    { tema: "Crimes contra o Sistema Financeiro (Lei 7.492)", freq: 74, tendencia: "estavel", prob: 0.76 },
  ]);
  add("Direito Administrativo", [
    { tema: "Licitações — dispensa × inexigibilidade (14.133)", freq: 86, tendencia: "alta", prob: 0.88 },
  ]);
})();
