/* =====================================================================
   QUESTLAB — Lote 23: PADRÕES QUE FALTAVAM (verificação de banca)
   Fecha as duas lacunas apontadas ao cruzar o DNA do sistema com as
   análises públicas da CEBRASPE:
   - NEGAÇÃO DUPLA / embaralhamento ("não é incorreto…", "não se pode
     negar que… não…").
   - JURISPRUDÊNCIA / SÚMULA INVENTADA (número fictício ou enunciado
     inexistente), com um item de CONTROLE (súmula real corretamente
     citada) para treinar a verificação, não a rejeição reflexa.
   10 itens INÉDITOS.
   ===================================================================== */

const QUESTOES_PCAL_LOTE23 = [

  /* ================= NEGAÇÃO DUPLA ================= */
  {
    id: "DP-076", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Peculato-furto (negação dupla)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 312, § 1º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Não é incorreto afirmar que comete peculato o funcionário público que, valendo-se da facilidade proporcionada pela função, subtrai bem de que não tem a posse.",
    gabarito: "C", pegadinha: "negacao-dupla", palavraChave: "Não é incorreto",
    cognitivo: {
      motivo: "Treinar a leitura de negação dupla ('não é incorreto' = 'é correto').",
      palavraCritica: "não é incorreto (= é correto)",
    },
    comentario: {
      resolucao: "CERTO. Reescrita na forma afirmativa, a assertiva diz que 'é correto afirmar que comete peculato…', o que é verdadeiro: trata-se do peculato-furto (art. 312, § 1º, do CP), que dispensa a posse prévia do bem. O conteúdo é correto e a construção com negação dupla não o altera.",
      fundamento: "CP, art. 312, § 1º.",
      macete: "'Não é incorreto' = 'é correto'. Só então julgue o mérito.",
      erroComum: "Inverter o julgamento por causa da dupla negativa.",
      comoBancaPensa: "Embaralha a leitura com negação dupla sobre conteúdo verdadeiro."
    }
  },
  {
    id: "PP-053", disciplina: "Processo Penal", assunto: "Interrogatório", subassunto: "Direito ao silêncio (negação dupla)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LXIII; CPP, art. 186)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Não se pode negar que o silêncio do acusado, no interrogatório, não importa confissão.",
    gabarito: "C", pegadinha: "negacao-dupla", palavraChave: "Não se pode negar",
    cognitivo: {
      motivo: "Treinar leitura de duas negativas encadeadas.",
      palavraCritica: "não se pode negar que … não importa",
    },
    comentario: {
      resolucao: "CERTO. 'Não se pode negar que X' equivale a afirmar X. Aqui, X = 'o silêncio não importa confissão', que é verdadeiro (CF, art. 5º, LXIII; CPP, art. 186, parágrafo único). A assertiva, portanto, está correta.",
      fundamento: "CF, art. 5º, LXIII; CPP, art. 186.",
      macete: "'Não se pode negar que…' = afirmação. Julgue o núcleo.",
      erroComum: "Perder-se nas duas negativas e marcar E.",
      comoBancaPensa: "Encadeia negativas sobre conteúdo verdadeiro."
    }
  },
  {
    id: "DC-030", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Inviolabilidade do domicílio (negação dupla)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, XI)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "É inegável que a casa não constitui asilo inviolável do indivíduo, sendo lícito nela ingressar, a qualquer hora, sem o consentimento do morador.",
    gabarito: "E", pegadinha: "negacao-dupla", palavraChave: "inegável que a casa não constitui asilo",
    cognitivo: {
      motivo: "Treinar negação dupla sobre conteúdo FALSO.",
      palavraCritica: "não constitui asilo inviolável (falso)",
    },
    comentario: {
      resolucao: "ERRADO. O art. 5º, XI, da CF estabelece que a casa é asilo inviolável do indivíduo, nela não se podendo penetrar sem consentimento, salvo em flagrante delito, desastre, para prestar socorro ou, durante o dia, por determinação judicial. Afirmar que 'não constitui asilo inviolável' é falso — e a fórmula 'é inegável' não muda isso.",
      fundamento: "CF, art. 5º, XI.",
      macete: "Aparência de autoridade ('é inegável') não valida conteúdo falso.",
      erroComum: "Marcar C pela força retórica da frase.",
      comoBancaPensa: "Reveste conteúdo falso com fórmula de certeza."
    }
  },
  {
    id: "DA-045", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Ato vinculado (negação dupla)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (ato vinculado × discricionário)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Não é incorreto afirmar que o ato administrativo vinculado comporta juízo de conveniência e oportunidade quanto à sua prática.",
    gabarito: "E", pegadinha: "negacao-dupla", palavraChave: "Não é incorreto ... vinculado ... conveniência",
    cognitivo: {
      motivo: "Combinar negação dupla com troca de conceito.",
      palavraCritica: "vinculado ... conveniência e oportunidade",
    },
    comentario: {
      resolucao: "ERRADO. Reescrita afirmativamente ('é correto afirmar que…'), a assertiva sustenta que o ato vinculado comporta juízo de conveniência e oportunidade — o que é falso. No ato vinculado não há margem de valoração; o mérito administrativo (conveniência e oportunidade) é próprio do ato discricionário.",
      fundamento: "Doutrina — ato vinculado × discricionário; Lei 9.784/1999.",
      macete: "Vinculado = lei manda tudo. Discricionário = tem mérito.",
      erroComum: "Validar o núcleo falso após decifrar a negação dupla.",
      comoBancaPensa: "Soma negação dupla + troca de conceito."
    }
  },
  {
    id: "LE-117", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Vedação da 9.099/95 (negação dupla)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.340/2006, art. 41)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Não se pode deixar de reconhecer que, aos crimes praticados com violência doméstica e familiar contra a mulher, não se aplica a Lei 9.099/95.",
    gabarito: "C", pegadinha: "negacao-dupla", palavraChave: "Não se pode deixar de reconhecer ... não se aplica",
    cognitivo: {
      motivo: "Treinar tripla partícula negativa sobre conteúdo verdadeiro.",
      palavraCritica: "não se pode deixar de reconhecer (= é forçoso reconhecer)",
    },
    comentario: {
      resolucao: "CERTO. 'Não se pode deixar de reconhecer que X' equivale a afirmar X. X = 'não se aplica a Lei 9.099/95', o que é verdadeiro por força do art. 41 da Lei 11.340/2006 (constitucionalidade reconhecida na ADC 19). A assertiva está correta.",
      fundamento: "Lei 11.340/2006, art. 41; STF, ADC 19.",
      jurisprudencia: "STF, ADC 19.",
      macete: "Desdobre as negativas: sobra uma afirmação verdadeira.",
      erroComum: "Inverter o julgamento pela sobreposição de negativas.",
      comoBancaPensa: "Acumula negativas sobre regra verdadeira."
    }
  },

  /* ================= JURISPRUDÊNCIA / SÚMULA INVENTADA ================= */
  {
    id: "DP-077", disciplina: "Direito Penal", assunto: "Princípios penais", subassunto: "Súmula inventada (insignificância)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (súmula fictícia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Conforme a Súmula 912 do STJ, o furto de bem de pequeno valor é sempre atípico, por aplicação obrigatória e automática do princípio da insignificância.",
    gabarito: "E", pegadinha: "juris-inventada", palavraChave: "Súmula 912 do STJ",
    cognitivo: {
      motivo: "Treinar a desconfiança de número de súmula fictício.",
      palavraCritica: "Súmula 912 do STJ (inexistente) + 'sempre/automática'",
    },
    comentario: {
      resolucao: "ERRADO. Não existe a 'Súmula 912 do STJ' com esse teor, e o conteúdo é falso: a insignificância não é automática nem decorre do simples pequeno valor — exige os quatro vetores fixados pelo STF (mínima ofensividade, ausência de periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão). A banca reveste conteúdo falso com uma súmula inventada.",
      fundamento: "STF, HC 84.412 (vetores da insignificância).",
      jurisprudencia: "STF, HC 84.412.",
      macete: "Desconfie do número; confirme o conteúdo pela lógica.",
      erroComum: "Aceitar a 'súmula' pela aparência de autoridade.",
      comoBancaPensa: "Fabrica súmula para dar credibilidade a conteúdo falso."
    }
  },
  {
    id: "PP-054", disciplina: "Processo Penal", assunto: "Prisão", subassunto: "Súmula inventada (depositário infiel)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (súmula vinculante fictícia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "De acordo com a Súmula Vinculante 74 do STF, é lícita a prisão civil do depositário infiel, qualquer que seja a modalidade do depósito.",
    gabarito: "E", pegadinha: "juris-inventada", palavraChave: "Súmula Vinculante 74",
    cognitivo: {
      motivo: "Treinar a checagem de número de súmula vinculante e do conteúdo.",
      palavraCritica: "Súmula Vinculante 74 (inexistente) + 'é lícita'",
    },
    comentario: {
      resolucao: "ERRADO. A súmula pertinente é a Súmula Vinculante 25 do STF (não há 'SV 74' com esse teor), e ela afirma justamente o oposto: é ILÍCITA a prisão civil do depositário infiel, qualquer que seja a modalidade do depósito. Número inventado e conteúdo invertido.",
      fundamento: "STF, Súmula Vinculante 25; CADH, art. 7.7.",
      jurisprudencia: "STF, SV 25.",
      macete: "Confira o número E o sentido: SV 25 diz ILÍCITA.",
      erroComum: "Aceitar a 'SV 74' e a licitude.",
      comoBancaPensa: "Troca número e inverte o conteúdo de súmula real."
    }
  },
  {
    id: "DC-031", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Súmula inventada (MS)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (súmula fictícia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Segundo a Súmula 780 do STF, é cabível mandado de segurança contra lei em tese.",
    gabarito: "E", pegadinha: "juris-inventada", palavraChave: "Súmula 780 do STF",
    cognitivo: {
      motivo: "Treinar verificação de número e conteúdo (súmula real oposta).",
      palavraCritica: "Súmula 780 (inexistente) + 'cabível contra lei em tese'",
    },
    comentario: {
      resolucao: "ERRADO. A súmula aplicável é a Súmula 266 do STF, que dispõe o oposto: NÃO cabe mandado de segurança contra lei em tese. A 'Súmula 780' com esse teor não existe. Número fictício e conteúdo invertido.",
      fundamento: "STF, Súmula 266.",
      jurisprudencia: "STF, Súmula 266.",
      macete: "Lei em tese: sem MS (Súmula 266).",
      erroComum: "Aceitar o número inventado.",
      comoBancaPensa: "Infla o número e inverte o enunciado real."
    }
  },
  {
    id: "DA-046", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Súmula inventada (autotutela)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (súmula fictícia)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Nos termos da Súmula 1.200 do STF, a Administração Pública não pode anular seus próprios atos ilegais, dependendo sempre de prévia decisão do Poder Judiciário.",
    gabarito: "E", pegadinha: "juris-inventada", palavraChave: "Súmula 1.200 do STF",
    cognitivo: {
      motivo: "Treinar verificação de número (fora de faixa) e conteúdo.",
      palavraCritica: "Súmula 1.200 (inexistente) + 'não pode anular'",
    },
    comentario: {
      resolucao: "ERRADO. Pela Súmula 473 do STF (princípio da autotutela), a Administração PODE anular seus próprios atos quando ilegais, sem depender do Poder Judiciário, além de revogar os inconvenientes. Não existe 'Súmula 1.200 do STF', e o conteúdo é o oposto do correto.",
      fundamento: "STF, Súmula 473; Lei 9.784/1999.",
      jurisprudencia: "STF, Súmula 473.",
      macete: "Autotutela: a Administração se autocorrige (Súmula 473).",
      erroComum: "Aceitar a dependência do Judiciário.",
      comoBancaPensa: "Número fora de faixa + inversão da autotutela."
    }
  },
  {
    id: "DH-045", disciplina: "Direitos Humanos", assunto: "Uso de algemas", subassunto: "Súmula real (controle de verificação)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Súmula Vinculante 11 do STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Nos termos da Súmula Vinculante 11 do STF, o uso de algemas é medida excepcional, admitida apenas diante de resistência, fundado receio de fuga ou perigo à integridade, exigindo-se justificativa por escrito.",
    gabarito: "C", pegadinha: "juris-inventada", palavraChave: "Súmula Vinculante 11",
    cognitivo: {
      motivo: "Item de CONTROLE: súmula real corretamente citada — não rejeitar por reflexo.",
      palavraCritica: "Súmula Vinculante 11 (real e corretamente citada)",
    },
    comentario: {
      resolucao: "CERTO. A Súmula Vinculante 11 do STF de fato estabelece que o uso de algemas é excepcional, cabível apenas em caso de resistência, fundado receio de fuga ou perigo à integridade física própria ou alheia, exigindo justificativa por escrito, sob pena de responsabilidade. A citação está correta — e reconhecê-la é tão importante quanto rejeitar as súmulas inventadas.",
      fundamento: "STF, Súmula Vinculante 11.",
      jurisprudencia: "STF, SV 11.",
      macete: "Verifique a súmula; se é real e bate, marque C sem medo.",
      erroComum: "Rejeitar por desconfiança reflexa de qualquer número.",
      comoBancaPensa: "Após inventar súmulas, cobra uma verdadeira para pegar o candidato hipercauteloso."
    }
  },
  {
    id: "DP-078", disciplina: "Direito Penal", assunto: "Aplicação da pena", subassunto: "Súmula real (controle de verificação)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Súmula 231 do STJ)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "De acordo com a Súmula 231 do STJ, a incidência de circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal cominado ao crime.",
    gabarito: "C", pegadinha: "juris-inventada", palavraChave: "Súmula 231 do STJ",
    cognitivo: {
      motivo: "Item de CONTROLE: súmula real e corretamente citada, no mesmo padrão das súmulas inventadas.",
      palavraCritica: "Súmula 231 do STJ (real e corretamente citada)",
    },
    comentario: {
      resolucao: "CERTO. A Súmula 231 do STJ estabelece que a incidência de circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal. A citação é real e o conteúdo, fielmente reproduzido — reconhecer isso é tão importante quanto flagrar uma súmula inventada.",
      fundamento: "STJ, Súmula 231; CP, art. 65.",
      jurisprudencia: "STJ, Súmula 231.",
      macete: "Súmula 231 STJ: atenuante não fura o piso. Aqui, citação correta.",
      erroComum: "Rejeitar por desconfiança automática do número citado.",
      comoBancaPensa: "Mistura súmulas reais entre as inventadas para testar se o candidato verifica, em vez de só desconfiar."
    }
  },
  {
    id: "PP-055", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Súmula real (controle de verificação)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Súmula 145 do STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Conforme a Súmula 145 do STF, não há crime quando a preparação do flagrante pela autoridade policial torna impossível a sua consumação.",
    gabarito: "C", pegadinha: "juris-inventada", palavraChave: "Súmula 145 do STF",
    cognitivo: {
      motivo: "Item de CONTROLE: súmula real e corretamente citada, no mesmo padrão das súmulas inventadas.",
      palavraCritica: "Súmula 145 do STF (real e corretamente citada)",
    },
    comentario: {
      resolucao: "CERTO. A Súmula 145 do STF de fato estabelece que não há crime quando a preparação do flagrante pela autoridade torna impossível a sua consumação (flagrante preparado). A citação é real e fielmente reproduzida.",
      fundamento: "STF, Súmula 145; CP, art. 17.",
      jurisprudencia: "STF, Súmula 145.",
      macete: "Flagrante preparado = crime impossível (Súmula 145 STF, real).",
      erroComum: "Rejeitar a citação por desconfiança reflexa.",
      comoBancaPensa: "Intercala súmulas reais com inventadas para cobrar verificação genuína, não desconfiança automática."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE23);
