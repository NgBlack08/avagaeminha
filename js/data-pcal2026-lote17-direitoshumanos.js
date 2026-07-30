/* =====================================================================
   QUESTLAB — Lote 17: DIREITOS HUMANOS
   Convenção Americana de Direitos Humanos (Pacto de San José da Costa
   Rica — Decreto 678/1992) e Programa Nacional de Direitos Humanos
   (PNDH-3 — Decreto 7.037/2009).
   16 itens INÉDITOS (C/E balanceados), estilo CEBRASPE.

   Fonte: material esquematizado (fornecido pelo usuário). Tratados e
   atos normativos são texto público — itens 100% originais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE17 = [

  /* ===== CONVENÇÃO AMERICANA DE DIREITOS HUMANOS (Pacto de San José) ===== */
  {
    id: "DH-023", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Prisão civil por dívida (art. 7.7)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CADH/Decreto 678/1992, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.88,
    enunciado: "A Convenção Americana de Direitos Humanos veda a prisão civil por dívida, ressalvado o caso de inadimplemento de obrigação alimentar.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "obrigação alimentar",
    cognitivo: {
      motivo: "Cobrar a regra da prisão civil por dívida na CADH (art. 7.7).",
      palavraCritica: "obrigação alimentar",
    },
    comentario: {
      resolucao: "CERTO. O art. 7.7 da CADH veda a prisão civil por dívida, ressalvando unicamente o inadimplemento de obrigação alimentar. Foi com base nesse dispositivo que o STF afastou a prisão do depositário infiel.",
      fundamento: "CADH (Decreto 678/1992), art. 7.7.",
      macete: "Prisão civil: só por alimentos.",
      erroComum: "Incluir o depositário infiel entre as exceções.",
      comoBancaPensa: "Amplia as exceções à vedação da prisão por dívida."
    }
  },
  {
    id: "DH-024", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Depositário infiel (SV 25)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CADH c/c STF, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Segundo o entendimento do STF, é lícita a prisão civil do depositário infiel, por não haver incompatibilidade com a Convenção Americana de Direitos Humanos.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "lícita a prisão do depositário infiel",
    cognitivo: {
      motivo: "Cobrar a Súmula Vinculante 25 do STF.",
      palavraCritica: "lícita",
    },
    comentario: {
      resolucao: "ERRADO. Conforme a Súmula Vinculante 25 do STF, é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito. O caráter supralegal da CADH (art. 7.7) tornou inaplicável a legislação interna que autorizava essa prisão.",
      fundamento: "CADH, art. 7.7; STF, Súmula Vinculante 25; RE 466.343.",
      jurisprudencia: "STF, SV 25; RE 466.343.",
      macete: "Depositário infiel = prisão ilícita (SV 25).",
      erroComum: "Considerar lícita a prisão do depositário infiel.",
      comoBancaPensa: "Inverte o entendimento sumular vinculante."
    }
  },
  {
    id: "DH-025", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Status supralegal (RE 466.343)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CADH c/c STF, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Segundo o STF, os tratados internacionais de direitos humanos aprovados sem o rito das emendas constitucionais possuem status supralegal, situando-se acima da legislação ordinária e abaixo da Constituição.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "supralegal",
    cognitivo: {
      motivo: "Cobrar a teoria do status supralegal (RE 466.343).",
      palavraCritica: "supralegal",
    },
    comentario: {
      resolucao: "CERTO. No RE 466.343, o STF firmou que os tratados internacionais de direitos humanos aprovados sem o rito do art. 5º, § 3º, da CF possuem status supralegal — acima da legislação ordinária, mas abaixo da Constituição. Já os aprovados por aquele rito equivalem a emendas constitucionais.",
      fundamento: "CF, art. 5º, §§ 2º e 3º; STF, RE 466.343.",
      jurisprudencia: "STF, RE 466.343.",
      macete: "Supralegal (regra) × constitucional (rito do § 3º).",
      erroComum: "Dar a todos os tratados o mesmo status.",
      comoBancaPensa: "Confunde os dois níveis hierárquicos possíveis."
    }
  },
  {
    id: "DH-026", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Direito à vida (art. 4.1)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CADH/Decreto 678/1992, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Nos termos da Convenção Americana de Direitos Humanos, o direito à vida deve ser protegido pela lei e, em geral, desde o momento da concepção.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "desde o momento da concepção",
    cognitivo: {
      motivo: "Cobrar a literalidade do direito à vida (art. 4.1).",
      palavraCritica: "desde o momento da concepção",
    },
    comentario: {
      resolucao: "CERTO. O art. 4.1 da CADH dispõe que toda pessoa tem o direito de que se respeite sua vida, protegida pela lei e, em geral, desde o momento da concepção, não podendo ninguém ser privado da vida arbitrariamente.",
      fundamento: "CADH, art. 4.1.",
      macete: "Vida protegida, em geral, desde a concepção.",
      erroComum: "Trocar por 'desde o nascimento'.",
      comoBancaPensa: "Altera o marco temporal de proteção."
    }
  },
  {
    id: "DH-027", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Pena de morte (art. 4.3)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CADH/Decreto 678/1992, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "A Convenção Americana admite que os Estados que houverem abolido a pena de morte a restabeleçam, desde que por meio de lei.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "restabeleçam",
    cognitivo: {
      motivo: "Cobrar a vedação de restabelecer a pena de morte (art. 4.3).",
      palavraCritica: "restabeleçam",
    },
    comentario: {
      resolucao: "ERRADO. O art. 4.3 da CADH proíbe o restabelecimento da pena de morte nos Estados que a tenham abolido. A Convenção adota a lógica da abolição progressiva e da vedação ao retrocesso, não admitindo sua reinstituição, nem mesmo por lei.",
      fundamento: "CADH, art. 4.3.",
      macete: "Aboliu a pena de morte, não retorna.",
      erroComum: "Admitir o restabelecimento por lei.",
      comoBancaPensa: "Permite retrocesso vedado pela Convenção."
    }
  },
  {
    id: "DH-028", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Duplo grau (art. 8.2.h)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CADH/Decreto 678/1992, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "A Convenção Americana assegura ao acusado, entre as garantias judiciais, o direito de recorrer da sentença a juiz ou tribunal superior.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "recorrer a juiz ou tribunal superior",
    cognitivo: {
      motivo: "Cobrar o duplo grau de jurisdição como garantia convencional (art. 8.2.h).",
      palavraCritica: "recorrer a juiz ou tribunal superior",
    },
    comentario: {
      resolucao: "CERTO. O art. 8.2.h da CADH assegura, entre as garantias judiciais mínimas, o direito de recorrer da sentença a juiz ou tribunal superior, consagrando o duplo grau de jurisdição no plano convencional.",
      fundamento: "CADH, art. 8.2.h.",
      macete: "Duplo grau: garantia expressa da CADH.",
      erroComum: "Tratar o duplo grau como mero princípio implícito.",
      comoBancaPensa: "Nega a previsão convencional expressa."
    }
  },
  {
    id: "DH-029", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Jurisdição da Corte Interamericana (art. 62)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CADH/Decreto 678/1992, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "A simples ratificação da Convenção Americana submete o Estado, automaticamente, à jurisdição contenciosa da Corte Interamericana de Direitos Humanos, independentemente de declaração específica.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "automaticamente",
    cognitivo: {
      motivo: "Cobrar o reconhecimento da jurisdição contenciosa da Corte (art. 62).",
      palavraCritica: "automaticamente",
    },
    comentario: {
      resolucao: "ERRADO. Conforme o art. 62 da CADH, a submissão à jurisdição contenciosa da Corte Interamericana depende de declaração específica de reconhecimento pelo Estado, não decorrendo automaticamente da ratificação da Convenção. O Brasil reconheceu essa competência somente em 1998.",
      fundamento: "CADH, art. 62; Decreto Legislativo 89/1998.",
      macete: "Corte contenciosa: só com declaração expressa (Brasil, 1998).",
      erroComum: "Fazer a jurisdição decorrer da mera ratificação.",
      comoBancaPensa: "Confunde ratificação com aceitação da competência."
    }
  },
  {
    id: "DH-030", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Presunção de inocência (art. 8.2)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CADH/Decreto 678/1992, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "A Convenção Americana assegura que toda pessoa acusada de delito tem direito a que se presuma sua inocência enquanto não for legalmente comprovada sua culpa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "presuma sua inocência",
    cognitivo: {
      motivo: "Cobrar a presunção de inocência convencional (art. 8.2).",
      palavraCritica: "presuma sua inocência",
    },
    comentario: {
      resolucao: "CERTO. O art. 8.2 da CADH estabelece que toda pessoa acusada de um delito tem direito a que se presuma sua inocência enquanto não se comprove legalmente sua culpa, garantia reforçada no direito interno pelo art. 5º, LVII, da CF.",
      fundamento: "CADH, art. 8.2; CF, art. 5º, LVII.",
      macete: "Presunção de inocência: garantia da CADH e da CF.",
      erroComum: "Negar a previsão convencional.",
      comoBancaPensa: "Item de fixação (nível fácil)."
    }
  },
  {
    id: "DH-031", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Liberdade de pensamento e expressão (art. 13)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CADH/Decreto 678/1992, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "A Convenção Americana admite a censura prévia como meio ordinário de controle da liberdade de expressão.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "censura prévia como meio ordinário",
    cognitivo: {
      motivo: "Cobrar a vedação da censura prévia (art. 13).",
      palavraCritica: "meio ordinário",
    },
    comentario: {
      resolucao: "ERRADO. O art. 13 da CADH proíbe a censura prévia, admitindo apenas responsabilidades ulteriores fixadas em lei. A única ressalva é a classificação de espetáculos públicos para a proteção moral da infância e da adolescência (art. 13.4). Logo, a censura prévia não é meio ordinário de controle.",
      fundamento: "CADH, art. 13.",
      macete: "Sem censura prévia; controle é a posteriori.",
      erroComum: "Admitir censura prévia como regra.",
      comoBancaPensa: "Transforma exceção limitada em regra geral."
    }
  },
  {
    id: "DH-032", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Proteção da honra e da dignidade (art. 11)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CADH/Decreto 678/1992, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.7,
    enunciado: "A Convenção Americana assegura a toda pessoa o direito ao respeito de sua honra e ao reconhecimento de sua dignidade, sendo vedadas ingerências arbitrárias em sua vida privada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "honra e dignidade",
    cognitivo: {
      motivo: "Cobrar a proteção da honra e da vida privada (art. 11).",
      palavraCritica: "ingerências arbitrárias",
    },
    comentario: {
      resolucao: "CERTO. O art. 11 da CADH assegura o respeito à honra e o reconhecimento da dignidade, vedando ingerências arbitrárias ou abusivas na vida privada, na família, no domicílio e na correspondência.",
      fundamento: "CADH, art. 11.",
      macete: "Honra + dignidade + vida privada protegidas.",
      erroComum: "Restringir a proteção só à honra.",
      comoBancaPensa: "Item de fixação (nível fácil)."
    }
  },

  /* ===== PNDH-3 (Decreto 7.037/2009) ===== */
  {
    id: "DH-033", disciplina: "Direitos Humanos", assunto: "PNDH-3", subassunto: "Natureza e estrutura",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Decreto 7.037/2009, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "O Programa Nacional de Direitos Humanos (PNDH-3) foi instituído por decreto e estrutura-se em eixos orientadores, desdobrados em diretrizes e objetivos estratégicos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "eixos orientadores",
    cognitivo: {
      motivo: "Cobrar a natureza e a estrutura do PNDH-3.",
      palavraCritica: "eixos orientadores",
    },
    comentario: {
      resolucao: "CERTO. O PNDH-3 foi instituído pelo Decreto 7.037/2009 e organiza-se em eixos orientadores, que se desdobram em diretrizes e objetivos estratégicos, com ações programáticas atribuídas a diversos órgãos.",
      fundamento: "Decreto 7.037/2009.",
      macete: "PNDH-3: decreto, com eixos → diretrizes → objetivos.",
      erroComum: "Atribuir-lhe natureza de lei ou emenda.",
      comoBancaPensa: "Troca o instrumento normativo."
    }
  },
  {
    id: "DH-034", disciplina: "Direitos Humanos", assunto: "PNDH-3", subassunto: "Instrumento normativo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Decreto 7.037/2009, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "O PNDH-3 foi aprovado por emenda constitucional, ostentando status de norma constitucional.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "emenda constitucional",
    cognitivo: {
      motivo: "Reforçar a natureza infralegal do PNDH-3.",
      palavraCritica: "emenda constitucional",
    },
    comentario: {
      resolucao: "ERRADO. O PNDH-3 foi instituído por decreto (7.037/2009), ato normativo do Poder Executivo, e não por emenda constitucional. Não ostenta, portanto, status de norma constitucional: trata-se de instrumento de política pública em direitos humanos.",
      fundamento: "Decreto 7.037/2009.",
      macete: "Decreto ≠ emenda. PNDH-3 não é norma constitucional.",
      erroComum: "Elevar o programa ao nível constitucional.",
      comoBancaPensa: "Troca o instrumento normativo para inflar a hierarquia."
    }
  },
  {
    id: "DH-035", disciplina: "Direitos Humanos", assunto: "PNDH-3", subassunto: "Eixos orientadores",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Decreto 7.037/2009, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "Entre os eixos orientadores do PNDH-3 inclui-se o da segurança pública, acesso à justiça e combate à violência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "segurança pública, acesso à justiça",
    cognitivo: {
      motivo: "Cobrar os eixos orientadores do PNDH-3.",
      palavraCritica: "segurança pública, acesso à justiça e combate à violência",
    },
    comentario: {
      resolucao: "CERTO. O PNDH-3 contempla, entre seus eixos orientadores, o Eixo IV — Segurança Pública, Acesso à Justiça e Combate à Violência —, articulando a atuação policial com a proteção dos direitos humanos.",
      fundamento: "Decreto 7.037/2009, Eixo Orientador IV.",
      macete: "Eixo IV: segurança pública + acesso à justiça + combate à violência.",
      erroComum: "Negar a segurança pública como eixo do programa.",
      comoBancaPensa: "Testa o conhecimento dos eixos."
    }
  },
  {
    id: "DH-036", disciplina: "Direitos Humanos", assunto: "PNDH-3", subassunto: "Alcance e destinatários",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Decreto 7.037/2009, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.7,
    enunciado: "O PNDH-3 dirige-se exclusivamente aos órgãos do Poder Executivo federal, não envolvendo estados, municípios nem a participação da sociedade civil.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente",
    cognitivo: {
      motivo: "Cobrar o caráter articulado e participativo do PNDH-3.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. O PNDH-3 tem caráter articulado e participativo, envolvendo os entes federativos, os Poderes da República e a sociedade civil na sua implementação e monitoramento. Não se dirige exclusivamente ao Executivo federal.",
      fundamento: "Decreto 7.037/2009.",
      macete: "PNDH-3 = esforço articulado e participativo, não só federal.",
      erroComum: "Restringir o programa ao Executivo da União.",
      comoBancaPensa: "Reduz indevidamente o alcance do programa."
    }
  },
  {
    id: "DH-037", disciplina: "Direitos Humanos", assunto: "PNDH-3", subassunto: "Princípios (universalidade e indivisibilidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Decreto 7.037/2009, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "O PNDH-3 reafirma a universalidade, a indivisibilidade e a interdependência dos direitos humanos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "universalidade, indivisibilidade e interdependência",
    cognitivo: {
      motivo: "Cobrar os princípios estruturantes dos direitos humanos no PNDH-3.",
      palavraCritica: "indivisibilidade e interdependência",
    },
    comentario: {
      resolucao: "CERTO. O PNDH-3 reafirma os princípios da universalidade, da indivisibilidade e da interdependência dos direitos humanos, reconhecendo que direitos civis, políticos, econômicos, sociais, culturais e ambientais formam um todo integrado.",
      fundamento: "Decreto 7.037/2009.",
      macete: "DH: universais + indivisíveis + interdependentes.",
      erroComum: "Trocar 'indivisibilidade' por 'divisibilidade'.",
      comoBancaPensa: "Testa os atributos clássicos dos direitos humanos."
    }
  },
  {
    id: "DH-038", disciplina: "Direitos Humanos", assunto: "PNDH-3", subassunto: "Abrangência dos direitos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Decreto 7.037/2009, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.7,
    enunciado: "Na perspectiva do PNDH-3, os direitos humanos restringem-se aos direitos civis e políticos.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "restringem-se aos civis e políticos",
    cognitivo: {
      motivo: "Cobrar a abrangência ampla dos direitos humanos no PNDH-3.",
      palavraCritica: "restringem-se",
    },
    comentario: {
      resolucao: "ERRADO. Em razão da indivisibilidade e da interdependência, o PNDH-3 abrange não apenas os direitos civis e políticos, mas também os econômicos, sociais, culturais e ambientais. Restringi-los aos civis e políticos contraria a perspectiva do programa.",
      fundamento: "Decreto 7.037/2009.",
      macete: "DH abarca todas as dimensões, não só a civil/política.",
      erroComum: "Reduzir os direitos humanos aos civis e políticos.",
      comoBancaPensa: "Restringe indevidamente a abrangência dos direitos."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE17);

/* Frequência de temas — Direitos Humanos (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Direitos Humanos");
  if (!d) { d = { disciplina: "Direitos Humanos", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "CADH — prisão civil e status supralegal", freq: 88, tendencia: "alta", prob: 0.9 },
    { tema: "CADH — garantias judiciais (arts. 7º e 8º)", freq: 84, tendencia: "alta", prob: 0.86 },
    { tema: "PNDH-3 — eixos e segurança pública", freq: 78, tendencia: "estavel", prob: 0.8 },
  );
})();
