/* =====================================================================
   QUESTLAB — Expansão Edital PC-AL 2026 (Lote 6 — robustez)
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Consideram-se infrações penais de menor potencial ofensivo, para os fins da Lei nº 9.099/1995, as contravenções penais e os crimes a que a lei comine pena máxima não superior a dois anos, cumulada ou não com multa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "pena máxima não superior a dois anos",
    cognitivo: {
      motivo: "Cobrar o conceito legal de IMPO (art. 61 da Lei 9.099/1995).",
      palavraCritica: "pena máxima ≤ 2 anos",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "Nos crimes de ação penal privada ou de ação penal pública condicionada à representação, a composição civil dos danos, homologada pelo juiz, acarreta a renúncia ao direito de queixa ou de representação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "renúncia ao direito de queixa ou representação",
    cognitivo: {
      motivo: "Cobrar o efeito da composição civil (art. 74, parágrafo único).",
      palavraCritica: "ação privada ou pública condicionada",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A transação penal, proposta pelo Ministério Público, consiste na aplicação imediata de pena restritiva de direitos ou multa, e a sua aceitação pelo autor do fato importa reconhecimento de culpa e gera reincidência.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "importa reconhecimento de culpa e gera reincidência",
    cognitivo: {
      motivo: "Cobrar a natureza da transação penal (art. 76) e seus efeitos.",
      palavraCritica: "não gera reincidência nem culpa",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.83,
    enunciado: "A suspensão condicional do processo pode ser proposta pelo Ministério Público nos crimes em que a pena mínima cominada seja igual ou inferior a um ano, submetendo o acusado a período de prova de dois a quatro anos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "pena mínima igual ou inferior a um ano",
    cognitivo: {
      motivo: "Cobrar os requisitos da suspensão condicional do processo (art. 89).",
      palavraCritica: "pena mínima ≤ 1 ano / prova 2 a 4 anos",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "Por força da Lei nº 9.099/1995, os crimes de lesão corporal leve e de lesão corporal culposa passaram a depender de representação do ofendido para a instauração da ação penal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dependem de representação",
    cognitivo: {
      motivo: "Cobrar a alteração da natureza da ação penal na lesão leve/culposa (art. 88).",
      palavraCritica: "representação (condicionada)",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.88,
    enunciado: "No Estatuto do Desarmamento, a conduta de manter arma de fogo de uso permitido no interior da própria residência, sem o devido registro, configura o crime de porte ilegal de arma de fogo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "no interior da própria residência / porte",
    cognitivo: {
      motivo: "Distinguir posse (art. 12) de porte (art. 14) de arma de fogo.",
      palavraCritica: "residência = posse (não porte)",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "No Estatuto do Desarmamento, a posse ou o porte de arma de fogo, acessório ou munição de uso restrito é punido de forma mais severa do que as condutas equivalentes envolvendo arma de uso permitido.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "uso restrito mais severo",
    cognitivo: {
      motivo: "Cobrar a distinção de tratamento entre arma de uso permitido e restrito (art. 16).",
      palavraCritica: "uso restrito = pena maior",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.7,
    enunciado: "O Sistema Nacional de Armas (SINARM), instituído no âmbito da Polícia Federal, tem circunscrição em todo o território nacional e destina-se, entre outras finalidades, ao registro e ao controle de armas de fogo de uso permitido.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "SINARM / Polícia Federal",
    cognitivo: {
      motivo: "Cobrar a competência e as finalidades do SINARM (art. 1º e 2º).",
      palavraCritica: "SINARM = Polícia Federal",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Na Lei nº 7.492/1986, a gestão fraudulenta de instituição financeira é punida mais gravemente do que a gestão temerária, sendo aquela caracterizada pelo emprego de ardil ou artifício na condução dos negócios da instituição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "gestão fraudulenta × temerária",
    cognitivo: {
      motivo: "Distinguir gestão fraudulenta (dolo/ardil) de gestão temerária (excesso de risco) — art. 4º.",
      palavraCritica: "fraudulenta = ardil; temerária = risco excessivo",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.72,
    enunciado: "Os crimes contra o Sistema Financeiro Nacional, definidos na Lei nº 7.492/1986, incluindo a evasão de divisas, são de competência da Justiça Estadual do local da sede da instituição financeira.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "Justiça Estadual",
    cognitivo: {
      motivo: "Cobrar a competência da Justiça Federal para os crimes da Lei 7.492.",
      palavraCritica: "Justiça Estadual (deveria ser Federal)",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "Na Lei nº 14.133/2021, a inexigibilidade de licitação ocorre nas hipóteses de inviabilidade de competição, ao passo que a dispensa se dá em situações em que, embora viável a competição, a lei faculta ou determina a contratação direta.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inviabilidade de competição",
    cognitivo: {
      motivo: "Distinguir inexigibilidade (art. 74) de dispensa (art. 75) de licitação.",
      palavraCritica: "inexigibilidade = inviável competir; dispensa = competição viável",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Com a Lei nº 14.133/2021, os crimes em licitações e contratos administrativos, antes previstos na Lei nº 8.666/1993, passaram a integrar o Código Penal, em capítulo próprio.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "passaram a integrar o Código Penal",
    cognitivo: {
      motivo: "Cobrar a migração dos crimes licitatórios para o CP (arts. 337-E a 337-P).",
      palavraCritica: "Código Penal (arts. 337-E a 337-P)",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "A Lei nº 14.133/2021 consagra, entre os princípios da licitação, o do julgamento objetivo, que veda a utilização de critérios subjetivos ou não previstos no edital para a seleção da proposta vencedora.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "julgamento objetivo",
    cognitivo: {
      motivo: "Cobrar o princípio do julgamento objetivo (art. 5º).",
      palavraCritica: "veda critérios subjetivos",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.88,
    enunciado: "Ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória, garantia que consagra o princípio da presunção de inocência ou da não culpabilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "trânsito em julgado",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 5º, LVII, da CF.",
      palavraCritica: "até o trânsito em julgado",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "comunicados imediatamente",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 5º, LXII, da CF.",
      palavraCritica: "imediatamente ao juiz e à família",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A prisão ilegal será imediatamente relaxada pela autoridade policial que a tenha efetuado, independentemente de manifestação judicial.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "autoridade policial",
    cognitivo: {
      motivo: "Cobrar a competência para o relaxamento da prisão ilegal (art. 5º, LXV).",
      palavraCritica: "autoridade policial (deveria ser judiciária)",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "O civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses previstas em lei.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "salvo nas hipóteses previstas em lei",
    cognitivo: {
      motivo: "Cobrar a literalidade do art. 5º, LVIII, da CF (relevante para papiloscopista).",
      palavraCritica: "salvo nas hipóteses previstas em lei",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "Segundo a Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), toda pessoa tem direito a que se respeite sua integridade física, psíquica e moral, sendo vedada a submissão a tortura ou a penas ou tratos cruéis, desumanos ou degradantes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "integridade física, psíquica e moral",
    cognitivo: {
      motivo: "Cobrar o direito à integridade pessoal (art. 5º da CADH).",
      palavraCritica: "física, psíquica e moral",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "A Convenção Americana sobre Direitos Humanos assegura a toda pessoa acusada de delito o direito de ser julgada dentro de um prazo razoável e o direito de recorrer da sentença a juiz ou tribunal superior.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "prazo razoável / duplo grau",
    cognitivo: {
      motivo: "Cobrar as garantias judiciais da CADH (art. 8º).",
      palavraCritica: "prazo razoável + recurso a tribunal superior",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "Conforme a Convenção Americana sobre Direitos Humanos, não se pode restabelecer a pena de morte nos Estados que a hajam abolido, tampouco estendê-la a delitos aos quais não se aplique atualmente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não restabelecer a pena de morte",
    cognitivo: {
      motivo: "Cobrar a cláusula de vedação ao retrocesso quanto à pena de morte (art. 4º da CADH).",
      palavraCritica: "não restabelecer nos que aboliram",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Comete prevaricação o funcionário público que retarda ou deixa de praticar, indevidamente, ato de ofício, ou o pratica contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "interesse ou sentimento pessoal",
    cognitivo: {
      motivo: "Cobrar o elemento subjetivo especial da prevaricação (art. 319).",
      palavraCritica: "satisfazer interesse ou sentimento pessoal",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "A corrupção ativa, prevista no Código Penal, é crime praticado por particular contra a Administração em geral, consistindo em oferecer ou prometer vantagem indevida a funcionário público para determiná-lo a praticar, omitir ou retardar ato de ofício.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "particular / oferecer ou prometer",
    cognitivo: {
      motivo: "Cobrar a corrupção ativa (art. 333) e seu sujeito ativo (particular).",
      palavraCritica: "particular oferece/promete",
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
