/* =====================================================================
   QUESTLAB — Expansão Edital PC-AL 2026 (Lote 7 — robustez)
   Foco: Contabilidade e Análise Financeira, Direito Administrativo
   (organização, responsabilidade do Estado, poderes), Legislação
   Penal Especial (crime organizado, hediondos), Direitos Humanos,
   Estatística, e reforço de Direito Penal e TI.
   Questões INÉDITAS no estilo CEBRASPE, fundamentadas na legislação
   vigente e jurisprudência consolidada. Não reproduzem questões
   oficiais — usam apenas os padrões e temas da banca.
   ===================================================================== */

const QUESTOES_PCAL_LOTE7 = [

  /* ==================== CONTABILIDADE E ANÁLISE FINANCEIRA ==================== */
  {
    id: "CT-008", disciplina: "Contabilidade e Análise Financeira", assunto: "Balanço patrimonial", subassunto: "Estrutura",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "No balanço patrimonial, o ativo representa bens e direitos, o passivo representa obrigações com terceiros, e o patrimônio líquido corresponde à diferença entre o ativo e o passivo, expressando a situação líquida da entidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "diferença entre ativo e passivo",
    cognitivo: {
      motivo: "Cobrar a estrutura do balanço e a equação patrimonial.",
      palavraCritica: "PL = Ativo − Passivo",
    },
    comentario: {
      resolucao: "CERTO. O balanço patrimonial reflete a equação fundamental: Ativo = Passivo + Patrimônio Líquido. O ativo (bens e direitos) fica à esquerda; o passivo (obrigações) e o PL (situação líquida = A − P) à direita. O PL é a riqueza própria da entidade.",
      fundamento: "Contabilidade geral — balanço patrimonial e equação patrimonial.",
      macete: "A = P + PL. Se A > P, situação líquida positiva (PL positivo).",
      erroComum: "Trocar a natureza de passivo (obrigação) por bens/direitos.",
      comoBancaPensa: "A composição do balanço é cobrada invertendo o que é ativo/passivo/PL."
    }
  },
  {
    id: "CT-009", disciplina: "Contabilidade e Análise Financeira", assunto: "Demonstração do Resultado", subassunto: "Finalidade da DRE",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "A Demonstração do Resultado do Exercício (DRE) evidencia a posição patrimonial e financeira estática da entidade em determinada data, relacionando o total de bens, direitos e obrigações.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "posição patrimonial estática",
    cognitivo: {
      motivo: "Distinguir a DRE (dinâmica, resultado) do balanço (estático, posição).",
      palavraCritica: "posição estática = balanço (não DRE)",
    },
    comentario: {
      resolucao: "ERRADO. A descrição corresponde ao BALANÇO PATRIMONIAL (posição estática numa data). A DRE é dinâmica: confronta receitas e despesas do período para apurar o resultado (lucro ou prejuízo) do exercício.",
      fundamento: "Contabilidade geral — DRE × balanço patrimonial.",
      macete: "DRE = resultado do período (filme). Balanço = posição na data (foto).",
      erroComum: "Trocar a função da DRE pela do balanço.",
      comoBancaPensa: "Par espelhado (DRE × balanço) invertido na assertiva."
    }
  },
  {
    id: "CT-010", disciplina: "Contabilidade e Análise Financeira", assunto: "Plano de contas", subassunto: "Contas patrimoniais × de resultado",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.72,
    enunciado: "As contas de receita e de despesa são classificadas como contas patrimoniais, integrando diretamente o balanço patrimonial ao final do exercício.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "receita e despesa / patrimoniais",
    cognitivo: {
      motivo: "Distinguir contas patrimoniais das contas de resultado.",
      palavraCritica: "receita e despesa = contas de resultado",
    },
    comentario: {
      resolucao: "ERRADO. Receitas e despesas são contas de RESULTADO, que compõem a DRE e, após a apuração, transferem o resultado ao patrimônio líquido. As contas patrimoniais são as de ativo, passivo e PL, que integram o balanço.",
      fundamento: "Contabilidade geral — plano de contas.",
      macete: "Receita/despesa = resultado (DRE). Ativo/passivo/PL = patrimonial (balanço).",
      erroComum: "Classificar receita e despesa como patrimoniais.",
      comoBancaPensa: "Classificação de contas é cobrada trocando patrimonial × resultado."
    }
  },
  {
    id: "CT-011", disciplina: "Contabilidade e Análise Financeira", assunto: "Análise financeira", subassunto: "Índice de liquidez corrente",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "O índice de liquidez corrente, obtido pela divisão do ativo circulante pelo passivo circulante, indica, quando superior a 1, que a entidade possui recursos de curto prazo suficientes para honrar suas obrigações de curto prazo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ativo circulante ÷ passivo circulante",
    cognitivo: {
      motivo: "Cobrar o cálculo e a interpretação da liquidez corrente.",
      palavraCritica: "AC ÷ PC > 1 = boa liquidez de curto prazo",
    },
    comentario: {
      resolucao: "CERTO. Liquidez Corrente = Ativo Circulante ÷ Passivo Circulante. Índice maior que 1 indica que, para cada unidade de obrigação de curto prazo, há mais de uma unidade de recursos de curto prazo — capacidade de honrar dívidas de curto prazo.",
      fundamento: "Análise das demonstrações contábeis — índices de liquidez.",
      macete: "LC = AC/PC. > 1 bom, = 1 no limite, < 1 aperto de caixa.",
      erroComum: "Inverter a fórmula (PC/AC) ou a leitura do resultado.",
      comoBancaPensa: "Fórmula de índice financeiro é cobrada invertendo numerador/denominador."
    }
  },

  /* ==================== DIREITO ADMINISTRATIVO ==================== */
  {
    id: "DA-013", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Descentralização × desconcentração",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "A desconcentração administrativa pressupõe a distribuição interna de competências entre órgãos de uma mesma pessoa jurídica, ao passo que a descentralização implica a transferência de atribuições para pessoa jurídica distinta.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mesma pessoa jurídica × pessoa distinta",
    cognitivo: {
      motivo: "Distinguir descentralização de desconcentração.",
      palavraCritica: "desconcentração = interna; descentralização = nova PJ",
    },
    comentario: {
      resolucao: "CERTO. A desconcentração distribui competências internamente, entre órgãos de uma mesma pessoa jurídica (com hierarquia). A descentralização transfere atribuições a pessoa jurídica distinta (Administração indireta ou particular), sem hierarquia, mas com vinculação/controle finalístico.",
      fundamento: "Doutrina administrativista; Decreto-Lei 200/1967.",
      macete: "Desconcentração = órgãos (mesma PJ). Descentralização = outra PJ.",
      erroComum: "Inverter qual fenômeno cria nova pessoa jurídica.",
      comoBancaPensa: "Par conceitual espelhado invertido — clássico de organização administrativa."
    }
  },
  {
    id: "DA-014", disciplina: "Direito Administrativo", assunto: "Responsabilidade civil do Estado", subassunto: "Conduta omissiva",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Tratando-se de dano decorrente de conduta omissiva do Estado, parcela relevante da doutrina e da jurisprudência exige a demonstração da falta do serviço (culpa administrativa), não bastando a mera ocorrência do dano para gerar o dever de indenizar.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "falta do serviço / culpa administrativa",
    cognitivo: {
      motivo: "Cobrar o tratamento da responsabilidade por omissão (subjetiva/faute du service).",
      palavraCritica: "falta do serviço (culpa)",
    },
    comentario: {
      resolucao: "CERTO. Para os atos comissivos, aplica-se a responsabilidade objetiva (art. 37, § 6º, CF). Já na omissão (genérica), predomina o entendimento de responsabilidade subjetiva, exigindo-se a demonstração da falta do serviço (faute du service), sem a qual não há dever de indenizar. Na omissão específica, o STF tem admitido a responsabilidade objetiva.",
      fundamento: "CF, art. 37, § 6º; doutrina (faute du service); jurisprudência do STF.",
      macete: "Comissão = objetiva. Omissão genérica = subjetiva (prova a falha do serviço).",
      erroComum: "Aplicar objetiva pura a toda omissão.",
      comoBancaPensa: "A distinção comissão × omissão é o ponto sensível do tema."
    }
  },
  {
    id: "DA-015", disciplina: "Direito Administrativo", assunto: "Poderes administrativos", subassunto: "Poder hierárquico × disciplinar",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "O poder disciplinar autoriza a Administração a apurar infrações e aplicar sanções aos servidores e demais pessoas sujeitas à disciplina administrativa, ao passo que o poder hierárquico permite ordenar, coordenar, controlar e rever a atuação de agentes subordinados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "disciplinar × hierárquico",
    cognitivo: {
      motivo: "Distinguir poder disciplinar de poder hierárquico.",
      palavraCritica: "disciplinar = sancionar; hierárquico = ordenar/controlar",
    },
    comentario: {
      resolucao: "CERTO. O poder disciplinar permite apurar e punir infrações de servidores e de particulares com vínculo especial com a Administração. O poder hierárquico estrutura a atuação interna (ordenar, coordenar, controlar, delegar, avocar e rever atos dos subordinados). São poderes distintos e correlatos.",
      fundamento: "Doutrina administrativista — poderes da Administração.",
      macete: "Hierárquico = organiza. Disciplinar = pune.",
      erroComum: "Inverter as funções ou restringir o disciplinar só a servidores.",
      comoBancaPensa: "Par de poderes correlatos é cobrado trocando as funções."
    }
  },
  {
    id: "DA-016", disciplina: "Direito Administrativo", assunto: "Controle da Administração", subassunto: "Controle externo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "O controle externo da Administração Pública é exercido pelo Poder Legislativo, com o auxílio do Tribunal de Contas, abrangendo a fiscalização contábil, financeira, orçamentária, operacional e patrimonial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Legislativo com auxílio do Tribunal de Contas",
    cognitivo: {
      motivo: "Cobrar a titularidade e o alcance do controle externo (CF, arts. 70 e 71).",
      palavraCritica: "Legislativo + auxílio do Tribunal de Contas",
    },
    comentario: {
      resolucao: "CERTO. CF, arts. 70 e 71: o controle externo é exercido pelo Congresso Nacional (Legislativo), com o auxílio do Tribunal de Contas, abrangendo a fiscalização contábil, financeira, orçamentária, operacional e patrimonial quanto à legalidade, legitimidade e economicidade.",
      fundamento: "CF, arts. 70 e 71.",
      macete: "Controle externo = Legislativo + TC (o TC é auxiliar, não Judiciário).",
      erroComum: "Alocar o Tribunal de Contas no Judiciário.",
      comoBancaPensa: "A natureza do Tribunal de Contas (auxiliar do Legislativo) é o ponto cobrado."
    }
  },

  /* ==================== LEGISLAÇÃO PENAL ESPECIAL ==================== */
  {
    id: "LE-030", disciplina: "Legislação Especial", assunto: "Organização Criminosa", subassunto: "Colaboração premiada",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "Na Lei nº 12.850/2013, a colaboração premiada é meio de obtenção de prova, e, segundo a lei, nenhuma sentença condenatória poderá ser proferida com fundamento apenas nas declarações do colaborador.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não apenas nas declarações do colaborador",
    cognitivo: {
      motivo: "Cobrar a natureza e o valor probatório da colaboração premiada.",
      palavraCritica: "não apenas nas declarações do colaborador",
    },
    comentario: {
      resolucao: "CERTO. Lei 12.850/2013, art. 4º, § 16: nenhuma sentença condenatória será proferida com fundamento apenas nas declarações do colaborador. A colaboração premiada é meio de obtenção de prova e demanda corroboração por outros elementos.",
      fundamento: "Lei 12.850/2013, art. 3º, I, e art. 4º, § 16.",
      macete: "Delação premiada = pista, não veredito. Sozinha, não condena.",
      erroComum: "Tratar a colaboração como prova suficiente para condenar.",
      comoBancaPensa: "Valor probatório da colaboração premiada é ponto recorrente."
    }
  },
  {
    id: "LE-031", disciplina: "Legislação Especial", assunto: "Organização Criminosa", subassunto: "Conceito legal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Considera-se organização criminosa a associação de três ou mais pessoas, estruturalmente ordenada e caracterizada pela divisão de tarefas, para a prática de infrações cujas penas máximas sejam superiores a quatro anos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "três ou mais pessoas",
    cognitivo: {
      motivo: "Cobrar o número mínimo de integrantes da organização criminosa (art. 1º, § 1º).",
      palavraCritica: "três (o correto é quatro)",
    },
    comentario: {
      resolucao: "ERRADO. Lei 12.850/2013, art. 1º, § 1º: exige-se associação de 4 (QUATRO) ou mais pessoas. Três ou mais é o número da associação criminosa (CP, art. 288). O restante do conceito (estrutura, divisão de tarefas, penas máximas > 4 anos ou caráter transnacional) está correto.",
      fundamento: "Lei 12.850/2013, art. 1º, § 1º; CP, art. 288.",
      macete: "ORCRIM = 4 e 4 (4+ pessoas; penas máx. > 4 anos). Associação criminosa = 3.",
      erroComum: "Usar o número da associação criminosa (3) para a organização.",
      comoBancaPensa: "Números de institutos parecidos são cruzados na assertiva."
    }
  },
  {
    id: "LE-032", disciplina: "Legislação Especial", assunto: "Crimes hediondos", subassunto: "Vedações constitucionais",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Os crimes hediondos e os a eles equiparados (tráfico, tortura e terrorismo) são insuscetíveis de anistia, graça e indulto, bem como de fiança.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "anistia, graça e indulto / fiança",
    cognitivo: {
      motivo: "Cobrar as vedações constitucionais e legais aos crimes hediondos (CF, art. 5º, XLIII; Lei 8.072).",
      palavraCritica: "anistia, graça, indulto e fiança",
    },
    comentario: {
      resolucao: "CERTO. CF, art. 5º, XLIII, e Lei 8.072/1990: os crimes hediondos e equiparados (tráfico, tortura, terrorismo) são insuscetíveis de anistia, graça, indulto e fiança. Não são imprescritíveis — a imprescritibilidade alcança apenas o racismo e a ação de grupos armados contra a ordem constitucional.",
      fundamento: "CF, art. 5º, XLII, XLIII e XLIV; Lei 8.072/1990.",
      macete: "Hediondo: sem A-G-I e sem fiança. Imprescritível só racismo e grupos armados.",
      erroComum: "Atribuir imprescritibilidade aos hediondos.",
      comoBancaPensa: "Mistura as vedações dos hediondos com as do racismo."
    }
  },
  {
    id: "LE-033", disciplina: "Legislação Especial", assunto: "Lei de Drogas", subassunto: "Porte para consumo — natureza",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "O porte de droga para consumo pessoal, previsto no art. 28 da Lei nº 11.343/2006, embora não comporte pena privativa de liberdade, continua a ser tratado pela legislação como conduta típica.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "conduta típica sem prisão",
    cognitivo: {
      motivo: "Cobrar a natureza do porte para consumo (despenalização, não descriminalização plena).",
      palavraCritica: "conduta típica (sem prisão)",
    },
    comentario: {
      resolucao: "CERTO. O art. 28 sofreu despenalização (não há pena privativa de liberdade), mas a conduta permanece típica, sujeitando o agente a advertência, prestação de serviços à comunidade e medida educativa. O STF (Tema 506, RE 635.659) fixou parâmetro objetivo de 40g de maconha / 6 plantas fêmeas para diferenciar usuário de traficante.",
      fundamento: "Lei 11.343/2006, art. 28; STF, RE 635.659 (Tema 506); RE 430.105.",
      macete: "Consumo = crime sem prisão (despenalizado, não atípico).",
      erroComum: "Afirmar a descriminalização total do art. 28.",
      comoBancaPensa: "Diferença despenalização × descriminalização é o ponto cobrado."
    }
  },

  /* ==================== DIREITOS HUMANOS ==================== */
  {
    id: "DH-013", disciplina: "Direitos Humanos", assunto: "Afirmação histórica", subassunto: "Marcos históricos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "A Declaração Universal dos Direitos Humanos, adotada pela Assembleia Geral das Nações Unidas em 1948, é considerada um marco na internacionalização e na afirmação histórica dos direitos humanos no plano global.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "1948 / ONU",
    cognitivo: {
      motivo: "Cobrar o marco da Declaração Universal de 1948.",
      palavraCritica: "1948 / Assembleia Geral da ONU",
    },
    comentario: {
      resolucao: "CERTO. A Declaração Universal dos Direitos Humanos (DUDH) foi adotada pela Assembleia Geral da ONU em 10/12/1948, tornando-se o marco da internacionalização e da afirmação histórica dos direitos humanos, base do sistema global de proteção.",
      fundamento: "História dos direitos humanos — DUDH (1948).",
      macete: "1945 Carta da ONU → 1948 DUDH → 1966 Pactos. Ordem cronológica.",
      erroComum: "Trocar a data ou confundir DUDH com a Carta da ONU.",
      comoBancaPensa: "Datas e marcos históricos são cobrados por troca de ano/documento."
    }
  },
  {
    id: "DH-014", disciplina: "Direitos Humanos", assunto: "Teoria geral", subassunto: "Universalidade × relativismo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "A universalidade dos direitos humanos, como característica, significa que tais direitos são reconhecidos a todas as pessoas, independentemente de nacionalidade, etnia, sexo, religião ou qualquer outra condição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "todas as pessoas",
    cognitivo: {
      motivo: "Cobrar o conceito de universalidade dos DH.",
      palavraCritica: "independentemente de qualquer condição",
    },
    comentario: {
      resolucao: "CERTO. A universalidade indica que os direitos humanos pertencem a todas as pessoas, pela sua simples condição humana, sem discriminação. Não se confunde com a indivisibilidade (os direitos formam um conjunto integrado).",
      fundamento: "Teoria geral dos direitos humanos — características.",
      macete: "Universalidade = 'de todos'. Indivisibilidade = 'em bloco'.",
      erroComum: "Restringir a titularidade dos DH ou confundir com indivisibilidade.",
      comoBancaPensa: "Conceitua uma característica trocando-a por outra."
    }
  },
  {
    id: "DH-015", disciplina: "Direitos Humanos", assunto: "Direitos humanos na Constituição", subassunto: "Tratados de direitos humanos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Os tratados e convenções internacionais sobre direitos humanos aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, são equivalentes às emendas constitucionais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "três quintos / dois turnos",
    cognitivo: {
      motivo: "Cobrar o § 3º do art. 5º da CF (rito de equivalência a emenda).",
      palavraCritica: "3/5, dois turnos, cada Casa",
    },
    comentario: {
      resolucao: "CERTO. CF, art. 5º, § 3º (EC 45/2004): tratados e convenções sobre direitos humanos aprovados em cada Casa do Congresso, em dois turnos, por três quintos dos votos, equivalem a emendas constitucionais. Sem esse rito, os tratados de DH têm status supralegal (STF, RE 466.343).",
      fundamento: "CF, art. 5º, § 3º; STF, RE 466.343.",
      macete: "3/5 + 2 turnos = status constitucional. Rito comum = supralegal.",
      erroComum: "Trocar o quórum (3/5) por maioria absoluta.",
      comoBancaPensa: "Números do rito (3/5, 2 turnos) são o alvo da manipulação."
    }
  },

  /* ==================== ESTATÍSTICA E ANÁLISE DE DADOS ==================== */
  {
    id: "ES-012", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Supervisionado × não supervisionado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "A análise de agrupamentos (clusterização) é uma técnica de aprendizado não supervisionado, pois busca identificar estruturas ou grupos em dados que não possuem rótulos previamente definidos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não supervisionado / sem rótulos",
    cognitivo: {
      motivo: "Distinguir aprendizado supervisionado de não supervisionado.",
      palavraCritica: "clusterização = não supervisionado",
    },
    comentario: {
      resolucao: "CERTO. A clusterização (análise de agrupamentos) é aprendizado NÃO supervisionado: agrupa observações semelhantes sem rótulos prévios. Já a classificação e a regressão são supervisionadas (usam dados rotulados/variável-alvo conhecida).",
      fundamento: "Fundamentos de machine learning — paradigmas de aprendizado.",
      macete: "Cluster = descobre grupos (sem rótulo). Classificação = prevê rótulo (supervisionado).",
      erroComum: "Trocar clusterização (não supervisionado) por classificação (supervisionado).",
      comoBancaPensa: "Paradigmas de aprendizado são cobrados trocando as técnicas."
    }
  },
  {
    id: "ES-013", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Overfitting e regularização",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "O overfitting (sobreajuste) ocorre quando o modelo se ajusta excessivamente aos dados de treinamento, capturando inclusive o ruído, o que prejudica sua capacidade de generalização para dados novos; técnicas de regularização ajudam a mitigar esse problema.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ajusta excessivamente / generalização",
    cognitivo: {
      motivo: "Cobrar o conceito de overfitting e o papel da regularização.",
      palavraCritica: "ajuste excessivo ao treino / piora a generalização",
    },
    comentario: {
      resolucao: "CERTO. No overfitting, o modelo memoriza o ruído dos dados de treino e generaliza mal em dados novos (bom no treino, ruim no teste). A regularização (ex.: L1/L2), a validação cruzada e mais dados ajudam a mitigar. O oposto é o underfitting (modelo simples demais).",
      fundamento: "Machine learning — viés/variância, overfitting, regularização.",
      macete: "Overfitting = decorou; underfitting = não aprendeu. Regularização controla a complexidade.",
      erroComum: "Inverter overfitting com underfitting.",
      comoBancaPensa: "Par overfitting × underfitting é cobrado por inversão."
    }
  },
  {
    id: "ES-014", disciplina: "Estatística", assunto: "Análise de dados", subassunto: "CRISP-DM",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "No modelo CRISP-DM de mineração de dados, a fase de entendimento do negócio antecede a de preparação dos dados, sendo esta última normalmente a que mais consome tempo no processo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "entendimento do negócio antes da preparação",
    cognitivo: {
      motivo: "Cobrar a sequência de fases do CRISP-DM.",
      palavraCritica: "preparação de dados = fase mais custosa",
    },
    comentario: {
      resolucao: "CERTO. O CRISP-DM tem seis fases: entendimento do negócio, entendimento dos dados, preparação dos dados, modelagem, avaliação e implantação. O entendimento do negócio antecede a preparação, e esta costuma ser a etapa mais demorada do processo.",
      fundamento: "Metodologia CRISP-DM (mineração de dados).",
      macete: "Ordem: Negócio → Dados → Preparação → Modelagem → Avaliação → Implantação.",
      erroComum: "Inverter a ordem das fases.",
      comoBancaPensa: "Sequência de fases é cobrada por troca de ordem."
    }
  },

  /* ==================== DIREITO PENAL (reforço) ==================== */
  {
    id: "DP-023", disciplina: "Direito Penal", assunto: "Concurso de pessoas", subassunto: "Teoria monista",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "O Código Penal adotou, como regra, a teoria monista (unitária) no concurso de pessoas, de modo que todos os que concorrem para o crime respondem pelo mesmo delito, na medida de sua culpabilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "teoria monista",
    cognitivo: {
      motivo: "Cobrar a teoria adotada no concurso de pessoas (art. 29).",
      palavraCritica: "mesmo delito, na medida da culpabilidade",
    },
    comentario: {
      resolucao: "CERTO. CP, art. 29: 'Quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade' — teoria monista/unitária. Todos respondem pelo mesmo crime, com individualização das penas. Há exceções pluralistas (ex.: aborto consentido — gestante e terceiro em tipos distintos).",
      fundamento: "CP, art. 29.",
      macete: "Monista = um crime para todos. Cada um responde 'na medida da culpabilidade'.",
      erroComum: "Afirmar que o CP adotou a teoria pluralista como regra.",
      comoBancaPensa: "Teoria monista × pluralista é cobrada por troca."
    }
  },
  {
    id: "DP-024", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Extorsão mediante sequestro",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "A extorsão mediante sequestro é crime de natureza hedionda e consuma-se com a privação da liberdade da vítima, com o fim de obter, para si ou para outrem, qualquer vantagem como condição ou preço do resgate.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "privação da liberdade / condição ou preço do resgate",
    cognitivo: {
      motivo: "Cobrar a natureza hedionda e o momento consumativo da extorsão mediante sequestro (art. 159).",
      palavraCritica: "consuma com a privação da liberdade",
    },
    comentario: {
      resolucao: "CERTO. CP, art. 159: a extorsão mediante sequestro consuma-se com a privação da liberdade da vítima, visada a vantagem como condição ou preço do resgate — crime formal (independe do efetivo pagamento). É crime hediondo (Lei 8.072/1990, art. 1º, IV).",
      fundamento: "CP, art. 159; Lei 8.072/1990, art. 1º, IV.",
      macete: "Sequestrou pedindo resgate = consumou (não espera o pagamento). Hediondo.",
      erroComum: "Exigir o pagamento do resgate para a consumação.",
      comoBancaPensa: "Momento consumativo de crime formal é a pegadinha, agora com a hediondez."
    }
  },

  /* ==================== TI E SEGURANÇA CIBERNÉTICA (reforço) ==================== */
  {
    id: "TI-011", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — permissões",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "No sistema operacional Linux, as permissões de arquivos são definidas para três categorias — dono (proprietário), grupo e outros —, podendo cada uma receber permissões de leitura, escrita e execução.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dono, grupo e outros",
    cognitivo: {
      motivo: "Cobrar o modelo de permissões do Linux.",
      palavraCritica: "dono, grupo, outros / rwx",
    },
    comentario: {
      resolucao: "CERTO. No Linux, cada arquivo/diretório tem permissões para três categorias: dono (user), grupo (group) e outros (others). Cada categoria pode ter leitura (r), escrita (w) e execução (x). Ex.: chmod 755 define rwx para o dono e r-x para grupo e outros.",
      fundamento: "Sistemas operacionais — Linux (modelo de permissões).",
      macete: "u/g/o × r/w/x. 'chmod 755' = dono total, grupo e outros só leem e executam.",
      erroComum: "Trocar as categorias (dono/grupo/outros).",
      comoBancaPensa: "Modelo de permissões do Linux é cobrado alterando categorias ou tipos."
    }
  },
  {
    id: "TI-012", disciplina: "TI e Segurança Cibernética", assunto: "Edição de planilhas", subassunto: "Referência absoluta",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "Em uma planilha eletrônica, o uso do cifrão nas coordenadas de uma célula, como em $A$1, cria uma referência absoluta, que não se altera quando a fórmula é copiada para outras células.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "$A$1 / referência absoluta",
    cognitivo: {
      motivo: "Cobrar o conceito de referência absoluta × relativa em planilhas.",
      palavraCritica: "$ fixa a referência",
    },
    comentario: {
      resolucao: "CERTO. O cifrão ($) fixa a referência: $A$1 é absoluta e não se altera ao copiar a fórmula. Sem cifrão (A1), a referência é relativa e se ajusta. $A1 e A$1 são mistas (travam, respectivamente, a coluna e a linha). Vale para Excel e Calc.",
      fundamento: "Edição de planilhas (Microsoft Excel / LibreOffice Calc).",
      macete: "$ trava. $A$1 = fixo total; A$1 = trava linha; $A1 = trava coluna.",
      erroComum: "Tratar $A$1 como referência relativa.",
      comoBancaPensa: "Referência absoluta × relativa é o tema clássico de planilhas."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE7);

/* Reforço de frequência de temas do lote 7 (Módulo 2) */
(function () {
  const add = (disc, temas) => {
    let d = FREQUENCIA_TEMAS.find(f => f.disciplina === disc);
    if (!d) { d = { disciplina: disc, temas: [] }; FREQUENCIA_TEMAS.push(d); }
    d.temas.push(...temas);
  };
  add("Contabilidade e Análise Financeira", [
    { tema: "Balanço patrimonial e DRE", freq: 84, tendencia: "alta", prob: 0.86 },
    { tema: "Índices de liquidez", freq: 76, tendencia: "estavel", prob: 0.78 },
  ]);
  add("Direito Administrativo", [
    { tema: "Descentralização × desconcentração", freq: 85, tendencia: "estavel", prob: 0.87 },
    { tema: "Responsabilidade do Estado por omissão", freq: 82, tendencia: "estavel", prob: 0.84 },
  ]);
  add("Estatística", [
    { tema: "Aprendizado supervisionado × não supervisionado", freq: 84, tendencia: "alta", prob: 0.86 },
    { tema: "CRISP-DM", freq: 74, tendencia: "alta", prob: 0.77 },
  ]);
})();
