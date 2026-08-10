/* =====================================================================
   QUESTLAB — Lote 55: PSEUDO-LITERALIDADE

   A auditoria de 28/07/2026 mostrou que o padrão "literalidade" caía em
   CERTO em 95,9% dos 463 itens. Isso ensinava o reflexo errado: item que
   SOA como transcrição fiel da lei passou a valer CERTO por presunção.

   É exatamente o contrário do que a CEBRASPE faz. A assinatura da banca é
   o item que se lê como cópia do dispositivo e traz UMA alteração
   cirúrgica — um prazo, um número, um sujeito, um verbo, uma condição.
   Nada nele é logicamente incoerente: só se pega conhecendo o texto.

   Por isso estes 26 itens são "literalidade" com gabarito ERRADO. Não é
   desvio de taxonomia: o próprio gatilho do padrão no DNA_BANCA manda
   "comparar palavra por palavra nos pontos críticos: prazos, números,
   sujeitos, verbos". Faltavam os itens em que essa comparação falha.

   Distinção em relação a troca-numerica / troca-sujeito / troca-conceito:
   naqueles, a troca é detectável por raciocínio — o conceito não fecha,
   o sujeito é implausível. Aqui, não há incoerência interna alguma; a
   redação é plausível do início ao fim e só a memória do texto denuncia.

   Todos os dispositivos são de LEI FEDERAL. Itens 100% originais; nenhum
   texto de terceiros reproduzido. A "resolucao" de cada item registra a
   redação correta, para conferência.
   ===================================================================== */

const QUESTOES_PCAL_LOTE55 = [

  /* ===================== CRIMES CIBERNÉTICOS ===================== */
  {
    id: "CC-022", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Marco Civil da Internet", subassunto: "Guarda de registros",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "Nos termos do Marco Civil da Internet, o provedor de aplicações de internet constituído na forma de pessoa jurídica, que exerça essa atividade de forma organizada, profissionalmente e com fins econômicos, deverá manter os respectivos registros de acesso a aplicações de internet, sob sigilo, em ambiente controlado e de segurança, pelo prazo de um ano.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "registros de acesso a aplicações ... pelo prazo de um ano",
    cognitivo: {
      motivo: "Separar os dois prazos de guarda do Marco Civil, que a banca embaralha com frequência.",
      palavraCritica: "pelo prazo de um ano",
    },
    comentario: {
      resolucao: "ERRADO. O prazo do art. 15 da Lei 12.965/2014 é de 6 (seis) meses, e não de um ano. O restante do enunciado reproduz o dispositivo com fidelidade — o que torna a alteração difícil de perceber. O prazo de 1 (um) ano é o do art. 13, aplicável ao administrador de sistema autônomo quanto aos registros de CONEXÃO.",
      fundamento: "Lei 12.965/2014 (Marco Civil da Internet), art. 15 (6 meses, registros de acesso a aplicações) e art. 13 (1 ano, registros de conexão).",
      macete: "Dois sujeitos, dois prazos: conexão 1 ano, aplicação 6 meses.",
      erroComum: "Tratar 'um ano' como prazo único de guarda no Marco Civil.",
      comoBancaPensa: "Copia o dispositivo inteiro e troca só o prazo pelo do artigo vizinho — o candidato reconhece o texto e valida por familiaridade."
    }
  },
  {
    id: "CC-023", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Invasão de dispositivo informático", subassunto: "Art. 154-A do CP — pena",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "Configura o crime de invasão de dispositivo informático a conduta de invadir dispositivo informático alheio, conectado ou não à rede de computadores, com o fim de obter, adulterar ou destruir dados ou informações sem autorização expressa ou tácita do usuário do dispositivo, ou de instalar vulnerabilidades para obter vantagem ilícita, sujeitando o agente à pena de detenção, de três meses a um ano, e multa.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "detenção, de três meses a um ano",
    cognitivo: {
      motivo: "Cobrar a pena vigente do art. 154-A após a Lei 14.155/2021.",
      palavraCritica: "detenção, de três meses a um ano",
    },
    comentario: {
      resolucao: "ERRADO. A descrição típica está correta, mas a pena foi alterada pela Lei 14.155/2021: hoje é reclusão, de 1 (um) a 4 (quatro) anos, e multa. A pena de detenção, de 3 meses a 1 ano, correspondia à redação original dada pela Lei 12.737/2012 (Lei Carolina Dieckmann), já revogada.",
      fundamento: "CP, art. 154-A, caput, com a redação da Lei 14.155/2021.",
      macete: "Lei 14.155/2021 elevou o 154-A de detenção para reclusão de 1 a 4 anos.",
      erroComum: "Reproduzir a pena da redação de 2012.",
      comoBancaPensa: "Mantém o tipo penal integralmente correto e desatualiza apenas a pena — quem decorou a conduta valida o item inteiro."
    }
  },
  {
    id: "CC-024", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Fraude eletrônica", subassunto: "Art. 171, §2º-A, do CP",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "A fraude eletrônica, consistente em obter vantagem ilícita, em prejuízo alheio, mediante informações fornecidas pela vítima ou por terceiro induzido a erro por meio de redes sociais, contatos telefônicos ou envio de correio eletrônico fraudulento, ou por qualquer outro meio fraudulento análogo, é punida com reclusão, de um a cinco anos, e multa.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "reclusão, de um a cinco anos",
    cognitivo: {
      motivo: "Fixar a pena da fraude eletrônica, mais grave que a do estelionato simples.",
      palavraCritica: "de um a cinco anos",
    },
    comentario: {
      resolucao: "ERRADO. A pena da fraude eletrônica é de reclusão, de 4 (quatro) a 8 (oito) anos, e multa. A pena de 1 a 5 anos é a do estelionato em sua forma simples (art. 171, caput). O enunciado descreve corretamente a conduta do §2º-A e substitui apenas o preceito secundário.",
      fundamento: "CP, art. 171, §2º-A, incluído pela Lei 14.155/2021; art. 171, caput.",
      macete: "Fraude eletrônica é forma qualificada: 4 a 8 anos.",
      erroComum: "Aplicar a pena do caput à modalidade eletrônica.",
      comoBancaPensa: "Descreve a figura qualificada e cola nela a pena da figura simples."
    }
  },
  {
    id: "CC-025", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "LGPD", subassunto: "Dado pessoal sensível",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "Para os fins da Lei Geral de Proteção de Dados Pessoais, considera-se dado pessoal sensível o dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico e dado financeiro ou patrimonial, quando vinculado a uma pessoa natural.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "e dado financeiro ou patrimonial",
    cognitivo: {
      motivo: "Delimitar o rol de dados sensíveis, que é taxativo.",
      palavraCritica: "dado financeiro ou patrimonial",
    },
    comentario: {
      resolucao: "ERRADO. O rol legal de dados pessoais sensíveis é taxativo e não inclui dado financeiro ou patrimonial. Dados bancários são dados pessoais comuns — protegidos pela LGPD, mas sem o regime reforçado dos sensíveis. Todo o restante da enumeração está correto.",
      fundamento: "Lei 13.709/2018 (LGPD), art. 5º, II.",
      macete: "Sensível = potencial discriminatório. Dado financeiro é comum.",
      erroComum: "Confundir dado sigiloso com dado sensível.",
      comoBancaPensa: "Reproduz a lista legal completa e acrescenta um item plausível ao final, onde a atenção já caiu."
    }
  },
  {
    id: "CC-026", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Invasão de dispositivo informático", subassunto: "Figura equiparada",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.75,
    enunciado: "Incorre na mesma pena do crime de invasão de dispositivo informático quem produz, oferece, distribui, vende ou difunde dispositivo ou programa de computador com o intuito de permitir a prática da conduta, desde que o faça com finalidade lucrativa.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "desde que o faça com finalidade lucrativa",
    cognitivo: {
      motivo: "Impedir a leitura de elementar inexistente na figura equiparada.",
      palavraCritica: "desde que o faça com finalidade lucrativa",
    },
    comentario: {
      resolucao: "ERRADO. A figura equiparada não exige finalidade lucrativa. Basta produzir, oferecer, distribuir, vender ou difundir o dispositivo ou programa com o intuito de permitir a prática da invasão — quem distribui gratuitamente responde igualmente.",
      fundamento: "CP, art. 154-A, §1º.",
      macete: "O intuito exigido é permitir a invasão, não lucrar com ela.",
      erroComum: "Importar finalidade lucrativa para tipos que não a exigem.",
      comoBancaPensa: "Copia o rol correto e enxerta uma condição plausível que a lei não traz."
    }
  },
  {
    id: "CC-027", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Invasão de dispositivo informático", subassunto: "Ação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.7,
    enunciado: "Nos crimes de invasão de dispositivo informático, procede-se mediante ação penal pública incondicionada, independentemente da qualidade da vítima.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "incondicionada, independentemente da qualidade da vítima",
    cognitivo: {
      motivo: "Cobrar a regra e a exceção da ação penal no art. 154-B.",
      palavraCritica: "independentemente da qualidade da vítima",
    },
    comentario: {
      resolucao: "ERRADO. A regra é a ação penal pública CONDICIONADA à representação. Ela só é incondicionada quando o crime é cometido contra a administração pública direta ou indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal ou dos Municípios, ou contra empresas concessionárias de serviços públicos.",
      fundamento: "CP, art. 154-B.",
      macete: "Vítima particular pede representação; vítima estatal, não.",
      erroComum: "Presumir incondicionalidade em crime cibernético.",
      comoBancaPensa: "Afirma a exceção como se fosse a regra, em frase curta e assertiva."
    }
  },

  /* ===================== DIREITO PENAL ===================== */
  {
    id: "DP-097", disciplina: "Direito Penal", assunto: "Crimes contra a vida", subassunto: "Homicídio qualificado — pena",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "O homicídio praticado mediante paga ou promessa de recompensa, por motivo torpe, com emprego de veneno, fogo, explosivo, asfixia, tortura ou outro meio insidioso ou cruel, ou à traição, de emboscada, ou mediante dissimulação, é punido com reclusão, de doze a vinte e cinco anos.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "de doze a vinte e cinco anos",
    cognitivo: {
      motivo: "Fixar o preceito secundário do homicídio qualificado.",
      palavraCritica: "vinte e cinco anos",
    },
    comentario: {
      resolucao: "ERRADO. A pena do homicídio qualificado é de reclusão, de 12 (doze) a 30 (trinta) anos. As qualificadoras descritas no enunciado estão corretas; apenas o limite máximo foi alterado.",
      fundamento: "CP, art. 121, §2º.",
      macete: "12 a 30 no qualificado; 6 a 20 no simples.",
      erroComum: "Reduzir o teto para 25 anos.",
      comoBancaPensa: "Gasta a atenção do candidato num rol longo e correto, e altera o número no fim."
    }
  },
  {
    id: "DP-098", disciplina: "Direito Penal", assunto: "Tentativa", subassunto: "Causa de diminuição",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Salvo disposição em contrário, pune-se a tentativa com a pena correspondente ao crime consumado, diminuída de um sexto a um terço.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "de um sexto a um terço",
    cognitivo: {
      motivo: "Fixar a fração de diminuição da tentativa.",
      palavraCritica: "um sexto a um terço",
    },
    comentario: {
      resolucao: "ERRADO. A tentativa é punida com a pena do crime consumado diminuída de 1 (um) a 2 (dois) terços — e não de um sexto a um terço. O quantum varia conforme a distância percorrida no iter criminis.",
      fundamento: "CP, art. 14, parágrafo único.",
      macete: "Tentativa: 1/3 a 2/3.",
      erroComum: "Aplicar à tentativa fração de outra causa de diminuição.",
      comoBancaPensa: "Mantém a redação legal integral e troca só a fração."
    }
  },
  {
    id: "DP-099", disciplina: "Direito Penal", assunto: "Arrependimento posterior", subassunto: "Marco temporal",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Nos crimes cometidos sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa, por ato voluntário do agente, até a prolação da sentença de primeiro grau, a pena será reduzida de um a dois terços.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "até a prolação da sentença de primeiro grau",
    cognitivo: {
      motivo: "Fixar o marco temporal do arrependimento posterior.",
      palavraCritica: "até a prolação da sentença",
    },
    comentario: {
      resolucao: "ERRADO. O marco é o RECEBIMENTO da denúncia ou da queixa, não a sentença. Reparado o dano após esse momento, o fato deixa de configurar arrependimento posterior e passa a ser considerado apenas como circunstância atenuante genérica.",
      fundamento: "CP, art. 16; art. 65, III, 'b'.",
      macete: "Arrependimento posterior morre no recebimento da denúncia.",
      erroComum: "Estender o prazo até a sentença.",
      comoBancaPensa: "Acerta requisitos e fração e desloca só o marco temporal, que é o elemento menos memorizado."
    }
  },
  {
    id: "DP-100", disciplina: "Direito Penal", assunto: "Roubo", subassunto: "Majorante do emprego de arma de fogo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "No crime de roubo, a pena é aumentada de um terço até metade se a violência ou ameaça é exercida com emprego de arma de fogo.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "de um terço até metade",
    cognitivo: {
      motivo: "Distinguir a majorante da arma de fogo das demais majorantes do roubo.",
      palavraCritica: "de um terço até metade",
    },
    comentario: {
      resolucao: "ERRADO. O emprego de arma de fogo majora a pena em 2/3 (dois terços), por força do art. 157, §2º-A, I. A fração de 1/3 até metade aplica-se às majorantes do §2º, como o concurso de duas ou mais pessoas.",
      fundamento: "CP, art. 157, §2º-A, I; art. 157, §2º.",
      macete: "Arma de fogo no roubo: 2/3, fração fixa.",
      erroComum: "Usar a fração variável do §2º para arma de fogo.",
      comoBancaPensa: "Troca a fração entre parágrafos vizinhos do mesmo artigo."
    }
  },
  {
    id: "DP-101", disciplina: "Direito Penal", assunto: "Aplicação da pena", subassunto: "Regime inicial de cumprimento",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O condenado não reincidente cuja pena privativa de liberdade seja superior a seis anos deverá iniciar seu cumprimento em regime fechado.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "superior a seis anos",
    cognitivo: {
      motivo: "Fixar os patamares de fixação do regime inicial.",
      palavraCritica: "superior a seis anos",
    },
    comentario: {
      resolucao: "ERRADO. O regime inicial fechado é obrigatório para o condenado cuja pena seja superior a 8 (oito) anos. Penas superiores a 4 e não excedentes a 8 anos comportam regime semiaberto ao não reincidente; penas iguais ou inferiores a 4 anos, regime aberto.",
      fundamento: "CP, art. 33, §2º, alíneas 'a', 'b' e 'c'.",
      macete: "Degraus do regime: 4 e 8 anos.",
      erroComum: "Adotar 6 anos como marco do regime fechado.",
      comoBancaPensa: "Insere um número intermediário plausível entre os dois degraus verdadeiros."
    }
  },

  /* ===================== PROCESSO PENAL ===================== */
  {
    id: "PP-082", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Comunicação ao juiz",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Em até quarenta e oito horas após a realização da prisão em flagrante, será encaminhado ao juiz competente o auto de prisão em flagrante e, caso o autuado não informe o nome de seu advogado, cópia integral para a Defensoria Pública.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "em até quarenta e oito horas",
    cognitivo: {
      motivo: "Fixar o prazo de remessa do auto de prisão em flagrante.",
      palavraCritica: "quarenta e oito horas",
    },
    comentario: {
      resolucao: "ERRADO. O prazo é de até 24 (vinte e quatro) horas após a realização da prisão. A parte final do enunciado, sobre a remessa de cópia integral à Defensoria Pública quando o autuado não informa o nome de advogado, está correta.",
      fundamento: "CPP, art. 306, §1º.",
      macete: "24 horas: auto ao juiz, nota de culpa ao preso.",
      erroComum: "Dobrar o prazo para 48 horas.",
      comoBancaPensa: "Mantém correto o trecho menos conhecido e altera o prazo, que é o mais conhecido — invertendo onde o candidato investe atenção."
    }
  },
  {
    id: "PP-083", disciplina: "Processo Penal", assunto: "Audiência de custódia", subassunto: "Prazo de realização",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Recebido o auto de prisão em flagrante, o juiz deverá promover audiência de custódia com a presença do acusado, seu advogado constituído ou defensor público e o membro do Ministério Público, no prazo máximo de setenta e duas horas contadas da realização da prisão.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "setenta e duas horas",
    cognitivo: {
      motivo: "Fixar o prazo da audiência de custódia.",
      palavraCritica: "setenta e duas horas",
    },
    comentario: {
      resolucao: "ERRADO. O prazo máximo é de 24 (vinte e quatro) horas contadas da realização da prisão. A composição da audiência descrita no enunciado — acusado, advogado ou defensor público e membro do Ministério Público — está correta.",
      fundamento: "CPP, art. 310, caput.",
      macete: "Custódia em 24 horas, contadas da prisão.",
      erroComum: "Adotar 72 horas.",
      comoBancaPensa: "Acerta a composição do ato e altera só o prazo."
    }
  },
  {
    id: "PP-084", disciplina: "Processo Penal", assunto: "Fiança", subassunto: "Fiança concedida pelo delegado",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "A autoridade policial somente poderá conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a dois anos.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "não seja superior a dois anos",
    cognitivo: {
      motivo: "Delimitar a competência do delegado para arbitrar fiança.",
      palavraCritica: "não seja superior a dois anos",
    },
    comentario: {
      resolucao: "ERRADO. A autoridade policial pode conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 (quatro) anos. Nos demais casos, a fiança será requerida ao juiz.",
      fundamento: "CPP, art. 322, caput e parágrafo único.",
      macete: "Fiança pelo delegado: teto de 4 anos.",
      erroComum: "Usar o patamar de 2 anos, do juizado especial.",
      comoBancaPensa: "Troca um patamar legal por outro igualmente existente no sistema, o que impede a detecção por implausibilidade."
    }
  },
  {
    id: "PP-085", disciplina: "Processo Penal", assunto: "Inquérito policial", subassunto: "Prazo de conclusão",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "O inquérito policial deverá terminar no prazo de quinze dias, se o indiciado tiver sido preso em flagrante ou estiver preso preventivamente, contado o prazo, nessa hipótese, a partir do dia em que se executar a ordem de prisão.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "no prazo de quinze dias",
    cognitivo: {
      motivo: "Fixar o prazo de conclusão do inquérito com indiciado preso.",
      palavraCritica: "quinze dias",
    },
    comentario: {
      resolucao: "ERRADO. O prazo é de 10 (dez) dias quando o indiciado estiver preso. Solto, o prazo é de 30 (trinta) dias. A regra de contagem descrita no enunciado está correta.",
      fundamento: "CPP, art. 10, caput.",
      macete: "10 preso, 30 solto.",
      erroComum: "Adotar 15 dias por analogia com prazos de leis especiais.",
      comoBancaPensa: "Mantém a regra de contagem intacta e altera o numeral."
    }
  },
  {
    id: "PP-086", disciplina: "Processo Penal", assunto: "Prisão preventiva", subassunto: "Revisão periódica",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "O órgão emissor da decisão que decretar a prisão preventiva deverá revisar a necessidade de sua manutenção a cada sessenta dias, mediante decisão fundamentada, de ofício, sob pena de tornar a prisão ilegal.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "a cada sessenta dias",
    cognitivo: {
      motivo: "Fixar o intervalo de revisão obrigatória da preventiva.",
      palavraCritica: "a cada sessenta dias",
    },
    comentario: {
      resolucao: "ERRADO. A revisão da necessidade de manutenção da prisão preventiva deve ocorrer a cada 90 (noventa) dias. O dever de decidir de ofício e fundamentadamente, bem como a consequência da ilegalidade da prisão, estão corretamente descritos.",
      fundamento: "CPP, art. 316, parágrafo único.",
      macete: "Revisão da preventiva: 90 dias.",
      erroComum: "Reduzir o intervalo para 60 dias.",
      comoBancaPensa: "Acerta o regime jurídico inteiro e altera apenas a periodicidade."
    }
  },

  /* ===================== DIREITO CONSTITUCIONAL ===================== */
  {
    id: "DC-103", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Inviolabilidade domiciliar",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.9,
    enunciado: "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, a qualquer hora, por determinação judicial.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "a qualquer hora, por determinação judicial",
    cognitivo: {
      motivo: "Fixar a limitação temporal do cumprimento de mandado judicial em domicílio.",
      palavraCritica: "a qualquer hora",
    },
    comentario: {
      resolucao: "ERRADO. A determinação judicial autoriza o ingresso apenas DURANTE O DIA. Flagrante delito, desastre e prestação de socorro autorizam o ingresso a qualquer hora — mas não a ordem judicial, cuja execução é limitada ao período diurno.",
      fundamento: "CF, art. 5º, XI.",
      macete: "Ordem judicial: só de dia.",
      erroComum: "Suprimir a limitação temporal do mandado.",
      comoBancaPensa: "Reproduz o inciso quase integralmente e remove três palavras decisivas."
    }
  },
  {
    id: "DC-104", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Prisão — autoridade competente",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.9,
    enunciado: "Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade policial ou judiciária competente, salvo nos casos de transgressão militar ou crime propriamente militar, definidos em lei.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "autoridade policial ou judiciária competente",
    cognitivo: {
      motivo: "Reforçar a reserva de jurisdição para a decretação de prisões.",
      palavraCritica: "autoridade policial ou",
    },
    comentario: {
      resolucao: "ERRADO. A ordem escrita e fundamentada de prisão é privativa de autoridade JUDICIÁRIA competente. A autoridade policial não pode determinar prisão por ordem escrita — atua no flagrante, que é hipótese autônoma prevista no mesmo inciso.",
      fundamento: "CF, art. 5º, LXI.",
      macete: "Ordem de prisão: reserva de jurisdição.",
      erroComum: "Equiparar delegado a juiz para fins de decretação de prisão.",
      comoBancaPensa: "Acrescenta um sujeito plausível à cláusula, aproveitando a proximidade funcional entre delegado e prisão."
    }
  },
  {
    id: "DC-105", disciplina: "Direito Constitucional", assunto: "Segurança pública", subassunto: "Atribuições da polícia civil",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.9,
    enunciado: "Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares e as de competência da Justiça Eleitoral.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "e as de competência da Justiça Eleitoral",
    cognitivo: {
      motivo: "Delimitar exatamente a exceção constitucional à atribuição da polícia civil.",
      palavraCritica: "e as de competência da Justiça Eleitoral",
    },
    comentario: {
      resolucao: "ERRADO. A única exceção prevista é a das infrações penais militares. Crimes eleitorais, embora processados e julgados perante a Justiça Eleitoral, são apurados pela polícia judiciária comum — não há exclusão constitucional dessa atribuição.",
      fundamento: "CF, art. 144, §4º.",
      macete: "A ressalva é só 'exceto as militares'.",
      erroComum: "Acrescentar exceções ao rol constitucional.",
      comoBancaPensa: "Copia o dispositivo inteiro e amplia a exceção com hipótese que soa institucionalmente coerente."
    }
  },
  {
    id: "DC-106", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Identificação criminal",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "O civilmente identificado não será submetido a identificação criminal em nenhuma hipótese.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "em nenhuma hipótese",
    cognitivo: {
      motivo: "Preservar a cláusula de reserva legal do inciso.",
      palavraCritica: "em nenhuma hipótese",
    },
    comentario: {
      resolucao: "ERRADO. O texto constitucional ressalva expressamente 'salvo nas hipóteses previstas em lei'. A Lei 12.037/2009 disciplina os casos em que a identificação criminal é admitida mesmo havendo identificação civil, como quando o documento apresentado apresenta indício de falsificação.",
      fundamento: "CF, art. 5º, LVIII; Lei 12.037/2009.",
      macete: "Garantia relativa: cede diante de lei.",
      erroComum: "Ler a garantia como absoluta.",
      comoBancaPensa: "Corta a ressalva final e converte o inciso em vedação total."
    }
  },

  /* ===================== LEGISLAÇÃO ESPECIAL ===================== */
  {
    id: "LE-167", disciplina: "Legislação Especial", assunto: "Organizações criminosas", subassunto: "Conceito legal",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "Considera-se organização criminosa a associação de quatro ou mais pessoas, estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter, direta ou indiretamente, vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a quatro anos, ou que sejam de caráter transnacional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "quatro ou mais pessoas",
    cognitivo: {
      motivo: "Fixar o conceito legal íntegro, para servir de referência ao par espelhado que troca o numeral.",
      palavraCritica: "quatro ou mais pessoas",
    },
    comentario: {
      resolucao: "CERTO. É a definição do art. 1º, § 1º, da Lei 12.850/2013, reproduzida sem alteração: quatro ou mais pessoas, estrutura ordenada, divisão de tarefas ainda que informal, vantagem de qualquer natureza e infrações com pena máxima superior a quatro anos OU de caráter transnacional. Note que os dois requisitos finais são alternativos, não cumulativos.",
      fundamento: "Lei 12.850/2013, art. 1º, § 1º.",
      macete: "Organização criminosa: 4 pessoas e pena acima de 4 anos. Associação criminosa (CP, art. 288): 3 pessoas.",
      erroComum: "Baixar o mínimo para três, que é o número da associação criminosa do art. 288 do CP.",
      comoBancaPensa: "O par deste item é o LE-007, que altera exatamente o primeiro numeral — treinar os dois juntos ensina onde olhar."
    }
  },
  {
    id: "LE-168", disciplina: "Legislação Especial", assunto: "Violência doméstica", subassunto: "Afastamento imediato do agressor",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "Verificada a existência de risco atual ou iminente à vida ou à integridade física ou psicológica da mulher em situação de violência doméstica e familiar, o agressor será imediatamente afastado do lar, domicílio ou local de convivência com a ofendida pelo delegado de polícia, independentemente de o município ser sede de comarca.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "independentemente de o município ser sede de comarca",
    cognitivo: {
      motivo: "Fixar a competência subsidiária e escalonada para o afastamento do agressor.",
      palavraCritica: "independentemente de o município ser sede de comarca",
    },
    comentario: {
      resolucao: "ERRADO. O delegado de polícia só pode determinar o afastamento imediato quando o município NÃO for sede de comarca. Havendo comarca, a medida cabe à autoridade judicial. O policial só atua quando o município não é sede de comarca e não há delegado disponível no momento da denúncia.",
      fundamento: "Lei 11.340/2006 (Maria da Penha), art. 12-C, incisos I a III.",
      macete: "Juiz sempre; delegado sem comarca; policial sem comarca e sem delegado.",
      erroComum: "Generalizar a competência do delegado.",
      comoBancaPensa: "Suprime a condição de competência e converte atribuição subsidiária em atribuição plena."
    }
  },
  {
    id: "LE-169", disciplina: "Legislação Especial", assunto: "Tortura", subassunto: "Causa de aumento",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Na Lei de Tortura, a pena é aumentada de um terço até metade se o crime é cometido por agente público.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "de um terço até metade",
    cognitivo: {
      motivo: "Fixar a fração da majorante aplicável ao agente público na Lei de Tortura.",
      palavraCritica: "de um terço até metade",
    },
    comentario: {
      resolucao: "ERRADO. O aumento é de 1/6 (um sexto) até 1/3 (um terço) quando o crime é cometido por agente público. A mesma fração se aplica às demais hipóteses do §4º, como o crime cometido contra criança, gestante, pessoa com deficiência, adolescente ou maior de 60 anos.",
      fundamento: "Lei 9.455/1997, art. 1º, §4º, I e II.",
      macete: "Tortura: majorantes de 1/6 a 1/3.",
      erroComum: "Elevar a fração por intuição de gravidade.",
      comoBancaPensa: "Substitui a fração legal por outra fração real do sistema, impedindo detecção por estranheza."
    }
  },
  {
    id: "LE-170", disciplina: "Legislação Especial", assunto: "Abuso de autoridade", subassunto: "Elemento subjetivo especial",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "As condutas descritas na Lei de Abuso de Autoridade constituem crime quando praticadas pelo agente, ainda que a título de culpa, com a finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "ainda que a título de culpa",
    cognitivo: {
      motivo: "Fixar a exigência de dolo com finalidade específica no abuso de autoridade.",
      palavraCritica: "ainda que a título de culpa",
    },
    comentario: {
      resolucao: "ERRADO. A Lei 13.869/2019 exige dolo acompanhado de finalidade específica — não admite modalidade culposa. Além disso, a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade. As três finalidades descritas no enunciado estão corretas.",
      fundamento: "Lei 13.869/2019, art. 1º, §1º e §2º.",
      macete: "Sem dolo específico, não há abuso de autoridade.",
      erroComum: "Admitir a forma culposa.",
      comoBancaPensa: "Insere elemento subjetivo incompatível no meio de uma enumeração correta."
    }
  },

  /* ===================== CONTABILIDADE ===================== */
  {
    id: "CT-029", disciplina: "Contabilidade e Análise Financeira", assunto: "Lei 4.320/1964", subassunto: "Regime contábil",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Pertencem ao exercício financeiro as receitas nele arrecadadas e as despesas nele efetivamente pagas.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "as despesas nele efetivamente pagas",
    cognitivo: {
      motivo: "Fixar o regime contábil misto adotado pela Lei 4.320.",
      palavraCritica: "efetivamente pagas",
    },
    comentario: {
      resolucao: "ERRADO. Pertencem ao exercício financeiro as receitas nele arrecadadas e as despesas nele LEGALMENTE EMPENHADAS. É o chamado regime misto: caixa para as receitas e competência para as despesas. Despesa empenhada e não paga ao fim do exercício é inscrita em restos a pagar.",
      fundamento: "Lei 4.320/1964, art. 35, I e II.",
      macete: "Arrecadadas e empenhadas — regime misto.",
      erroComum: "Vincular a despesa ao exercício pelo pagamento.",
      comoBancaPensa: "Acerta o inciso I e altera o inciso II, aproveitando a simetria da frase para induzir leitura apressada."
    }
  },
  {
    id: "CT-030", disciplina: "Contabilidade e Análise Financeira", assunto: "Despesa pública", subassunto: "Estágios da despesa",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.75,
    enunciado: "O empenho da despesa consiste na verificação do direito adquirido pelo credor, tendo por base os títulos e documentos comprobatórios do respectivo crédito, com o fim de apurar a origem e o objeto do que se deve pagar e a quem se deve pagar.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "O empenho da despesa consiste na verificação do direito adquirido",
    cognitivo: {
      motivo: "Distinguir empenho de liquidação nos estágios da despesa pública.",
      palavraCritica: "O empenho ... verificação do direito adquirido",
    },
    comentario: {
      resolucao: "ERRADO. A definição apresentada é a de LIQUIDAÇÃO da despesa. O empenho é o ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição, e antecede a liquidação na ordem dos estágios.",
      fundamento: "Lei 4.320/1964, art. 58 (empenho) e art. 63 (liquidação).",
      macete: "Empenho cria a obrigação; liquidação verifica o direito.",
      erroComum: "Trocar as definições de empenho e liquidação.",
      comoBancaPensa: "Transcreve com fidelidade a definição de um instituto e a atribui ao instituto vizinho."
    }
  },
  /* ===== SEGUNDA TRANCHE — concentrada nas disciplinas de maior déficit
     de cobertura apontado por scripts/validar.js ===== */
  {
    id: "CC-028", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Marco Civil da Internet", subassunto: "Acesso a registros",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.9,
    enunciado: "Os registros de conexão e de acesso a aplicações de internet, bem como os dados pessoais e o conteúdo de comunicações privadas, poderão ser disponibilizados mediante requisição fundamentada da autoridade policial, no curso de inquérito que apure infração penal.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "mediante requisição fundamentada da autoridade policial",
    cognitivo: {
      motivo: "Fixar a reserva de jurisdição para acesso a registros e conteúdo no Marco Civil.",
      palavraCritica: "requisição fundamentada da autoridade policial",
    },
    comentario: {
      resolucao: "ERRADO. A disponibilização de registros de conexão, de registros de acesso a aplicações e, sobretudo, do conteúdo de comunicações privadas depende de ORDEM JUDICIAL. A requisição direta pela autoridade policial alcança apenas dados cadastrais que informem qualificação pessoal, filiação e endereço.",
      fundamento: "Lei 12.965/2014, art. 10, §§1º e 2º, e art. 7º, III.",
      macete: "Cadastral: requisição. Registro e conteúdo: ordem judicial.",
      erroComum: "Estender a requisição de dados cadastrais ao conteúdo.",
      comoBancaPensa: "Descreve cenário investigativo legítimo e substitui a autoridade competente."
    }
  },
  {
    id: "CC-029", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Marco Civil da Internet", subassunto: "Responsabilidade do provedor",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "Com o intuito de assegurar a liberdade de expressão e impedir a censura, o provedor de aplicações de internet somente poderá ser responsabilizado civilmente por danos decorrentes de conteúdo gerado por terceiros se, após notificação extrajudicial do ofendido, não tomar as providências para tornar indisponível o conteúdo apontado como infringente.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "após notificação extrajudicial do ofendido",
    cognitivo: {
      motivo: "Fixar a regra geral de responsabilidade subsidiária do provedor de aplicações.",
      palavraCritica: "notificação extrajudicial",
    },
    comentario: {
      resolucao: "ERRADO. A regra do art. 19 exige ORDEM JUDICIAL ESPECÍFICA, e não notificação extrajudicial. A notificação extrajudicial basta apenas na hipótese do art. 21, relativa à divulgação não autorizada de imagens de nudez ou de atos sexuais de caráter privado.",
      fundamento: "Lei 12.965/2014, arts. 19 e 21.",
      macete: "Art. 19 pede juiz; art. 21 aceita notificação.",
      erroComum: "Aplicar a exceção do art. 21 como se fosse a regra.",
      comoBancaPensa: "Copia o preâmbulo do artigo com exatidão e troca o requisito operacional."
    }
  },
  {
    id: "CC-030", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Invasão de dispositivo informático", subassunto: "Forma qualificada",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.75,
    enunciado: "Se da invasão de dispositivo informático resultar a obtenção de conteúdo de comunicações eletrônicas privadas, segredos comerciais ou industriais, informações sigilosas assim definidas em lei, ou o controle remoto não autorizado do dispositivo invadido, a pena é de reclusão, de um a quatro anos, e multa.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "reclusão, de um a quatro anos",
    cognitivo: {
      motivo: "Distinguir a pena da forma qualificada da pena do caput.",
      palavraCritica: "de um a quatro anos",
    },
    comentario: {
      resolucao: "ERRADO. Na hipótese do §3º a pena é de reclusão, de 2 (dois) a 5 (cinco) anos, e multa. A pena de 1 a 4 anos é a do caput do art. 154-A. A descrição dos resultados qualificadores está correta.",
      fundamento: "CP, art. 154-A, §3º, com a redação da Lei 14.155/2021.",
      macete: "Caput 1 a 4; qualificada 2 a 5.",
      erroComum: "Repetir a pena do caput na forma qualificada.",
      comoBancaPensa: "Aproveita que o candidato confere o resultado e não a pena."
    }
  },
  {
    id: "CC-031", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "LGPD", subassunto: "Sanções administrativas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.75,
    enunciado: "Entre as sanções administrativas aplicáveis pela autoridade nacional aos agentes de tratamento de dados está a multa simples de até dez por cento do faturamento da pessoa jurídica de direito privado, grupo ou conglomerado no Brasil no seu último exercício, excluídos os tributos, limitada, no total, a cinquenta milhões de reais por infração.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "até dez por cento do faturamento",
    cognitivo: {
      motivo: "Fixar o percentual da multa simples da LGPD.",
      palavraCritica: "dez por cento",
    },
    comentario: {
      resolucao: "ERRADO. A multa simples é de até 2% (dois por cento) do faturamento, excluídos os tributos, limitada no total a R$ 50.000.000,00 por infração. O teto absoluto e a exclusão dos tributos, mencionados no enunciado, estão corretos.",
      fundamento: "Lei 13.709/2018 (LGPD), art. 52, II.",
      macete: "2% do faturamento, teto de R$ 50 milhões.",
      erroComum: "Elevar o percentual por associação com outras leis.",
      comoBancaPensa: "Mantém corretos os elementos verificáveis e altera o percentual."
    }
  },
  {
    id: "CT-031", disciplina: "Contabilidade e Análise Financeira", assunto: "Receita pública", subassunto: "Classificação econômica",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.75,
    enunciado: "São classificadas como receitas correntes as receitas tributárias, de contribuições, patrimonial, agropecuária, industrial, de serviços e, ainda, as provenientes de operações de crédito.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "as provenientes de operações de crédito",
    cognitivo: {
      motivo: "Delimitar a classificação econômica da receita orçamentária.",
      palavraCritica: "operações de crédito",
    },
    comentario: {
      resolucao: "ERRADO. As receitas provenientes de operações de crédito são receitas de CAPITAL, por resultarem da constituição de dívidas. As demais categorias listadas — tributária, de contribuições, patrimonial, agropecuária, industrial e de serviços — são efetivamente receitas correntes.",
      fundamento: "Lei 4.320/1964, art. 11, §§1º e 2º.",
      macete: "Constituiu dívida, é receita de capital.",
      erroComum: "Classificar empréstimo como receita corrente por ingressar no caixa.",
      comoBancaPensa: "Reproduz o rol legal e anexa um item da categoria vizinha."
    }
  },
  {
    id: "CT-032", disciplina: "Contabilidade e Análise Financeira", assunto: "Despesa pública", subassunto: "Vedação legal",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "É vedada a realização de despesa sem prévia liquidação.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "sem prévia liquidação",
    cognitivo: {
      motivo: "Fixar qual estágio da despesa é pressuposto de sua realização.",
      palavraCritica: "liquidação",
    },
    comentario: {
      resolucao: "ERRADO. A vedação legal é à realização de despesa sem prévio EMPENHO. A liquidação é estágio posterior ao empenho, de modo que exigi-la previamente inverteria a sequência legal dos estágios da despesa pública.",
      fundamento: "Lei 4.320/1964, art. 60.",
      macete: "Sem empenho prévio não há despesa.",
      erroComum: "Trocar empenho por liquidação.",
      comoBancaPensa: "Em frase curta, a troca de uma única palavra é mais difícil de perceber do que em texto longo."
    }
  },
  {
    id: "DA-071", disciplina: "Direito Administrativo", assunto: "Licitações", subassunto: "Modalidades da Lei 14.133/2021",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.9,
    enunciado: "São modalidades de licitação previstas na Lei 14.133/2021 o pregão, a concorrência, a tomada de preços, o convite, o concurso, o leilão e o diálogo competitivo.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "a tomada de preços, o convite",
    cognitivo: {
      motivo: "Fixar o rol taxativo de modalidades da nova Lei de Licitações.",
      palavraCritica: "tomada de preços ... convite",
    },
    comentario: {
      resolucao: "ERRADO. A Lei 14.133/2021 prevê cinco modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo. Tomada de preços e convite eram modalidades da Lei 8.666/1993 e não foram mantidas.",
      fundamento: "Lei 14.133/2021, art. 28.",
      macete: "Cinco modalidades; tomada de preços e convite morreram com a 8.666.",
      erroComum: "Somar modalidades das duas leis.",
      comoBancaPensa: "Mistura rol novo e rol revogado, apostando em quem estudou pela lei antiga."
    }
  },
  {
    id: "DA-072", disciplina: "Direito Administrativo", assunto: "Licitações", subassunto: "Sequência das fases",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (pseudo-literalidade)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "O processo de licitação regido pela Lei 14.133/2021 observará, em sequência, as fases preparatória, de divulgação do edital de licitação, de apresentação de propostas e lances, de habilitação, de julgamento, recursal e de homologação.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "de habilitação, de julgamento",
    cognitivo: {
      motivo: "Fixar a inversão de fases consagrada pela nova Lei de Licitações.",
      palavraCritica: "habilitação ... julgamento",
    },
    comentario: {
      resolucao: "ERRADO. A ordem legal coloca o JULGAMENTO antes da HABILITAÇÃO: preparatória, divulgação do edital, apresentação de propostas e lances, julgamento, habilitação, recursal e homologação. A inversão de fases, antes restrita ao pregão, tornou-se a regra geral.",
      fundamento: "Lei 14.133/2021, art. 17, incisos I a VII.",
      macete: "Julga, depois habilita.",
      erroComum: "Manter a ordem da Lei 8.666/1993.",
      comoBancaPensa: "Preserva todos os elementos do rol e troca a posição de dois deles — o candidato confere presença, não sequência."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE55);
