/* =====================================================================
   QUESTLAB — Lote 68: FISIOTERAPIA EM SAÚDE DA MULHER (SESAU/AL)
   Maior lacuna do banco até aqui: a disciplina vale 70 dos 120 itens da
   prova da SESAU/AL — 58% do total — e não tinha uma única questão.

   Base normativa e técnica, toda de domínio público:
     • Resolução COFFITO nº 372/2009, que reconhece a Saúde da Mulher
       como especialidade própria e exclusiva do fisioterapeuta;
     • Resolução COFFITO nº 401/2011, que disciplina a especialidade —
       art. 3º (competências), art. 4º (áreas de conhecimento exigidas),
       art. 5º (campos de atuação: uroginecologia, coloproctologia,
       ginecologia, obstetrícia, disfunções sexuais femininas e
       mastologia) e art. 7º (ambientes de exercício profissional);
     • semiologia e propedêutica consagradas na literatura da área:
       escala de Oxford modificada, esquema PERFECT, POP-Q, diário
       miccional, pad test, terapia complexa descongestiva.

   O recorte segue o edital republicado: uroginecologia, coloproctologia,
   obstetrícia, mastologia e oncologia. Ortopedia, respiratória e
   neurofuncional ficaram de fora porque não caem nesta prova.

   Todos os itens são inéditos e redigidos do zero. Onde há divergência
   de escola, o item foi construído sobre o ponto pacífico, para não
   cobrar preferência de autor como se fosse regra.

   Sete contraexemplos deliberados (FSM-004, 013, 022, 031, 040, 049 e
   058): absolutos, exigências e restrições com cara de armadilha que
   são tecnicamente verdadeiros.

   60 itens: 36 CERTO / 24 ERRADO. Dificuldade 3 em 51, 2 em 9.
   O lote pende para CERTO mais do que o habitual (60%): a área tem muita
   conduta consagrada a fixar, e boa parte dos itens afirma corretamente
   protocolo, e não distorção. Os 60 itens ainda não cobrem os 70 da
   prova — faltam recortes a ampliar em lote seguinte.
   ===================================================================== */

const QUESTOES_SESAUAL_LOTE68 = [

  /* ===== COMPETÊNCIA PROFISSIONAL E MARCO REGULATÓRIO ===== */
  {
    id: "FSM-001", disciplina: "Fisioterapia", assunto: "Marco regulatório da especialidade", subassunto: "Resolução COFFITO 401/2011 — campos de atuação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "A atuação do fisioterapeuta especialista em Saúde da Mulher abrange, entre outros campos, a uroginecologia, a coloproctologia, a obstetrícia, a mastologia e as disfunções sexuais femininas.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "uroginecologia, coloproctologia, obstetrícia, mastologia e disfunções sexuais femininas",
    cognitivo: {
      motivo: "Cobrar a delimitação oficial dos campos de atuação da especialidade.",
      palavraCritica: "coloproctologia",
    },
    comentario: {
      resolucao: "CERTO. A Resolução COFFITO nº 401/2011 relaciona esses campos ao disciplinar a especialidade reconhecida pela Resolução nº 372/2009. A coloproctologia costuma surpreender quem associa a área apenas ao trato urinário e à gestação, mas a musculatura do assoalho pélvico é comum aos três sistemas — urinário, genital e anorretal —, o que explica a competência sobre incontinência anal e constipação.",
      fundamento: "Resoluções COFFITO nº 372/2009 e nº 401/2011, art. 5º.",
      macete: "O assoalho pélvico é um só: urina, fezes, sexo e parto entram todos na especialidade.",
      erroComum: "Restringir a especialidade à uroginecologia e à obstetrícia.",
      comoBancaPensa: "Item de definição que abre o bloco e fixa o alcance da atuação."
    }
  },
  {
    id: "FSM-002", disciplina: "Fisioterapia", assunto: "Marco regulatório da especialidade", subassunto: "Competências do especialista",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.7,
    enunciado: "Compete ao fisioterapeuta especialista em Saúde da Mulher aplicar as condutas prescritas por outro profissional, sendo-lhe vedado formular diagnóstico próprio ou emitir laudo referente à função avaliada.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "vedado formular diagnóstico próprio ou emitir laudo",
    cognitivo: {
      motivo: "Cobrar a autonomia profissional do fisioterapeuta, negada pelo item.",
      palavraCritica: "vedado formular diagnóstico próprio",
    },
    comentario: {
      resolucao: "ERRADO. O fisioterapeuta realiza consulta, formula o DIAGNÓSTICO FISIOTERAPÊUTICO (que é cinético-funcional, e não médico), prescreve a conduta, determina alta e emite laudos, pareceres e relatórios. A Resolução COFFITO nº 401/2011 arrola expressamente essas competências, e a autonomia é a regra desde a regulamentação da profissão.",
      fundamento: "Resolução COFFITO nº 401/2011, art. 3º; Decreto-Lei nº 938/1969.",
      macete: "Diagnóstico fisioterapêutico é cinético-funcional — existe e é do fisioterapeuta.",
      erroComum: "Confundir autonomia profissional com diagnóstico médico.",
      comoBancaPensa: "Rebaixa o profissional a executor de ordens, negando competência que a norma assegura."
    }
  },
  {
    id: "FSM-003", disciplina: "Fisioterapia", assunto: "Anatomia funcional do assoalho pélvico", subassunto: "Músculo levantador do ânus",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.86,
    enunciado: "O músculo levantador do ânus é formado pelos feixes pubococcígeo, puborretal e iliococcígeo, os quais, em conjunto com o músculo coccígeo, compõem o diafragma pélvico.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "pubococcígeo, puborretal e iliococcígeo ... coccígeo ... diafragma pélvico",
    cognitivo: {
      motivo: "Contraexemplo: composição anatômica correta de uma estrutura que a banca costuma embaralhar.",
      palavraCritica: "diafragma pélvico",
    },
    comentario: {
      resolucao: "CERTO. O diafragma pélvico é formado pelo levantador do ânus — com seus três feixes — e pelo coccígeo (isquiococcígeo). Não confundir com o diafragma urogenital, mais superficial, nem com os músculos superficiais do períneo (bulboesponjoso, isquiocavernoso e transverso superficial). O feixe puborretal forma a alça que mantém o ângulo anorretal, decisivo na continência fecal.",
      fundamento: "Anatomia do assoalho pélvico feminino — diafragma pélvico.",
      macete: "Levantador do ânus (3 feixes) + coccígeo = diafragma pélvico.",
      erroComum: "Incluir os músculos superficiais do períneo no diafragma pélvico.",
      comoBancaPensa: "Descreve corretamente a estrutura que costuma inverter, punindo quem responde por desconfiança."
    }
  },
  {
    id: "FSM-004", disciplina: "Fisioterapia", assunto: "Anatomia funcional do assoalho pélvico", subassunto: "Inervação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.74,
    enunciado: "O nervo pudendo, originado das raízes sacrais S2, S3 e S4, é o principal responsável pela inervação somática do assoalho pélvico, razão pela qual sua lesão durante o parto vaginal pode comprometer a continência.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "S2, S3 e S4 ... principal responsável ... inervação somática",
    cognitivo: {
      motivo: "Contraexemplo: origem radicular exata e nexo com o parto, ambos verdadeiros.",
      palavraCritica: "principal responsável",
    },
    comentario: {
      resolucao: "CERTO. O pudendo nasce do plexo sacral (S2-S4) e inerva o esfíncter uretral externo, o esfíncter anal externo e a musculatura perineal. O estiramento durante o segundo período do parto — sobretudo em período expulsivo prolongado, macrossomia ou parto instrumental — é causa reconhecida de neuropatia pudenda e de incontinência subsequente. Daí o mnemônico clássico: S2, S3 e S4 mantêm a pelve no chão.",
      fundamento: "Neuroanatomia do plexo sacral e lesão pudenda obstétrica.",
      macete: "S2-S3-S4 mantêm a pelve no chão. Pudendo é o nervo da continência.",
      erroComum: "Marcar ERRADO por reflexo diante de 'principal responsável'.",
      comoBancaPensa: "Combina dado numérico exato e superlativo verdadeiro, punindo a resposta por formato."
    }
  },

  /* ===== AVALIAÇÃO FUNCIONAL ===== */
  {
    id: "FSM-005", disciplina: "Fisioterapia", assunto: "Avaliação do assoalho pélvico", subassunto: "Escala de Oxford modificada",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.88,
    enunciado: "A escala de Oxford modificada gradua a força da musculatura do assoalho pélvico à palpação bidigital em seis níveis, de 0 a 5, em que o grau 0 indica ausência de contração e o grau 5, contração forte com resistência mantida.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "seis níveis, de 0 a 5 ... grau 0 ... ausência ... grau 5 ... forte",
    cognitivo: {
      motivo: "Cobrar a amplitude e os extremos da escala de graduação mais usada na área.",
      palavraCritica: "de 0 a 5",
    },
    comentario: {
      resolucao: "CERTO. A escala vai de 0 a 5 — portanto seis níveis: 0 ausente, 1 esboço/tremor, 2 fraca, 3 moderada (com elevação da parede vaginal), 4 boa (com resistência) e 5 forte. É avaliação subjetiva e examinador-dependente, o que justifica complementá-la com manometria ou eletromiografia quando se busca medida objetiva.",
      fundamento: "Escala de Oxford modificada para graduação da força do assoalho pélvico.",
      macete: "0 a 5 são seis graus. Zero é nada; cinco é forte contra resistência.",
      erroComum: "Contar cinco níveis por esquecer o grau 0.",
      comoBancaPensa: "Item numérico correto, que o candidato inseguro tende a marcar ERRADO."
    }
  },
  {
    id: "FSM-006", disciplina: "Fisioterapia", assunto: "Avaliação do assoalho pélvico", subassunto: "Esquema PERFECT",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.79,
    enunciado: "No esquema PERFECT, a letra E corresponde à força máxima da contração e a letra P, ao tempo de sustentação, avaliando-se ambas por meio de eletromiografia de superfície.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "E ... força máxima ... P ... tempo de sustentação ... eletromiografia",
    cognitivo: {
      motivo: "Cobrar o significado de cada letra do esquema e o método de aplicação.",
      palavraCritica: "E ... força máxima",
    },
    comentario: {
      resolucao: "ERRADO. Estão trocadas: P é power (força), e E é endurance (tempo de sustentação, em segundos). Seguem R de repetitions (repetições sustentadas), F de fast (contrações rápidas) e ECT de every contraction timed. Além disso, o PERFECT é aplicado por PALPAÇÃO digital, não por eletromiografia.",
      fundamento: "Esquema PERFECT (Laycock) para avaliação funcional do assoalho pélvico.",
      macete: "P de power (força), E de endurance (aguenta quanto tempo).",
      erroComum: "Trocar P e E, ou supor que o esquema exige equipamento.",
      comoBancaPensa: "Inverte duas letras do acrônimo e ainda troca o método, somando dois erros."
    }
  },
  {
    id: "FSM-007", disciplina: "Fisioterapia", assunto: "Avaliação do assoalho pélvico", subassunto: "Diário miccional",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.81,
    enunciado: "O diário miccional registra, por período determinado, a ingestão hídrica, a frequência e o volume das micções e os episódios de perda urinária e de urgência, fornecendo dados sobre o hábito miccional que a anamnese isolada não capta com precisão.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ingestão hídrica, frequência e volume das micções ... episódios de perda ... urgência",
    cognitivo: {
      motivo: "Cobrar o conteúdo e a utilidade do instrumento de avaliação mais simples da uroginecologia.",
      palavraCritica: "a anamnese isolada não capta com precisão",
    },
    comentario: {
      resolucao: "CERTO. Preenchido em geral por três dias, o diário revela poliúria, ingestão excessiva ou insuficiente, frequência aumentada e o padrão dos episódios de perda — dados que a paciente costuma relatar de modo impreciso de memória. Serve ainda como linha de base para medir resultado e como ferramenta terapêutica no treinamento vesical.",
      fundamento: "Propedêutica uroginecológica — diário miccional.",
      macete: "O diário mostra o que a paciente não lembra: quanto bebe, quantas vezes vai e quando perde.",
      erroComum: "Tratá-lo como formalidade, sem valor diagnóstico.",
      comoBancaPensa: "Item correto que cobra a razão de ser do instrumento, não só sua existência."
    }
  },
  {
    id: "FSM-008", disciplina: "Fisioterapia", assunto: "Avaliação do assoalho pélvico", subassunto: "Pad test",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.68,
    enunciado: "O teste do absorvente (pad test) destina-se a graduar a força de contração do assoalho pélvico, sendo o ganho de peso do absorvente diretamente proporcional à potência muscular aferida.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "graduar a força de contração ... ganho de peso ... proporcional à potência muscular",
    cognitivo: {
      motivo: "Cobrar o que o pad test efetivamente mede.",
      palavraCritica: "graduar a força de contração",
    },
    comentario: {
      resolucao: "ERRADO. O pad test quantifica a PERDA URINÁRIA, não a força: pesa-se o absorvente antes e depois de um protocolo padronizado de esforços, e a diferença de peso corresponde ao volume perdido. A relação é inversa à sugerida — quanto maior o ganho de peso, maior a perda, portanto pior o quadro. Força se avalia por palpação, manometria ou eletromiografia.",
      fundamento: "Propedêutica uroginecológica — pad test (teste do absorvente).",
      macete: "Pad test pesa a perda, não mede força. Mais peso, mais urina perdida.",
      erroComum: "Confundir instrumentos de quantificação de perda com os de avaliação muscular.",
      comoBancaPensa: "Troca a grandeza medida e ainda inverte o sentido da correlação."
    }
  },
  {
    id: "FSM-009", disciplina: "Fisioterapia", assunto: "Avaliação do assoalho pélvico", subassunto: "Biofeedback",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.77,
    enunciado: "O biofeedback promove a contração muscular por meio de corrente elétrica aplicada à musculatura perineal, sendo indicado justamente para as pacientes incapazes de contrair voluntariamente o assoalho pélvico.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "promove a contração ... por meio de corrente elétrica",
    cognitivo: {
      motivo: "Cobrar a diferença entre biofeedback e eletroestimulação.",
      palavraCritica: "por meio de corrente elétrica",
    },
    comentario: {
      resolucao: "ERRADO. O biofeedback não gera contração: ele CAPTA a atividade muscular — por eletromiografia ou manometria — e a devolve à paciente como sinal visual ou sonoro, tornando consciente um comando que ela não percebia. Justamente por depender de contração voluntária, exige que a paciente consiga contrair. Quem produz contração por corrente é a eletroestimulação, essa sim útil quando não há contração voluntária.",
      fundamento: "Recursos fisioterapêuticos — biofeedback x eletroestimulação funcional.",
      macete: "Biofeedback mostra o que você faz. Eletroestimulação faz por você.",
      erroComum: "Tratar os dois recursos como sinônimos por ambos usarem eletrodos.",
      comoBancaPensa: "Atribui ao biofeedback o mecanismo e a indicação da eletroestimulação."
    }
  },
  {
    id: "FSM-010", disciplina: "Fisioterapia", assunto: "Avaliação do assoalho pélvico", subassunto: "Classificação POP-Q",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.72,
    enunciado: "Na classificação POP-Q, o prolapso é estadiado de 0 a IV, tomando-se o hímen como ponto de referência zero, de modo que o estádio IV corresponde à eversão completa do órgão prolapsado.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "de 0 a IV ... hímen como ponto de referência zero ... eversão completa",
    cognitivo: {
      motivo: "Cobrar a amplitude do estadiamento e o referencial anatômico.",
      palavraCritica: "hímen como ponto de referência zero",
    },
    comentario: {
      resolucao: "CERTO. O POP-Q (Pelvic Organ Prolapse Quantification) mede pontos anatômicos em centímetros em relação ao plano himenal — valores negativos acima dele, positivos abaixo. O estadiamento vai de 0 (sem prolapso) a IV (eversão completa, procidência total). É o sistema recomendado por padronizar a descrição, superando classificações antigas por graus imprecisos.",
      fundamento: "Sistema POP-Q de quantificação do prolapso de órgãos pélvicos.",
      macete: "O hímen é o zero. Acima é negativo, abaixo é positivo. Estádios 0 a IV.",
      erroComum: "Tomar o intróito vaginal ou o colo uterino como referência.",
      comoBancaPensa: "Item correto e detalhado, que exige conhecer o referencial, não só a sigla."
    }
  },

  /* ===== INCONTINÊNCIA URINÁRIA ===== */
  {
    id: "FSM-011", disciplina: "Fisioterapia", assunto: "Incontinência urinária", subassunto: "Tipos de incontinência",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "A incontinência urinária de esforço caracteriza-se pela perda involuntária de urina precedida de desejo miccional súbito e incontrolável, ao passo que a incontinência de urgência decorre do aumento da pressão intra-abdominal durante atividades como tossir e espirrar.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "esforço ... desejo miccional súbito ... urgência ... pressão intra-abdominal",
    cognitivo: {
      motivo: "Cobrar a definição dos dois tipos pela inversão completa.",
      palavraCritica: "esforço ... desejo miccional súbito",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. Na incontinência de ESFORÇO a perda ocorre por aumento da pressão intra-abdominal — tosse, espirro, riso, salto — sem desejo miccional prévio. Na de URGÊNCIA há desejo súbito e incontrolável que antecede a perda, ligado à hiperatividade detrusora. A associação das duas configura a incontinência mista.",
      fundamento: "Terminologia da International Continence Society — tipos de incontinência urinária.",
      macete: "Esforço: tossiu, perdeu, sem vontade. Urgência: deu vontade e não deu tempo.",
      erroComum: "Trocar os dois quadros, que têm tratamento de primeira linha distinto.",
      comoBancaPensa: "Permuta duas definições que o candidato reconhece isoladamente."
    }
  },
  {
    id: "FSM-012", disciplina: "Fisioterapia", assunto: "Incontinência urinária", subassunto: "Tratamento de primeira linha",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.87,
    enunciado: "O treinamento da musculatura do assoalho pélvico é conduta conservadora de primeira linha no manejo da incontinência urinária de esforço feminina, devendo preceder a indicação cirúrgica.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "primeira linha ... preceder a indicação cirúrgica",
    cognitivo: {
      motivo: "Cobrar a posição da fisioterapia na linha de cuidado, ponto de alta recorrência.",
      palavraCritica: "preceder a indicação cirúrgica",
    },
    comentario: {
      resolucao: "CERTO. Há consenso internacional de que o treinamento supervisionado do assoalho pélvico é a primeira escolha na incontinência de esforço, por ser eficaz, de baixo custo e sem os riscos do procedimento cirúrgico. A cirurgia — sling, por exemplo — fica reservada à falha do tratamento conservador bem conduzido.",
      fundamento: "Diretrizes internacionais de manejo da incontinência urinária feminina.",
      macete: "Conservador primeiro, sempre. Cirurgia é para quem não respondeu.",
      erroComum: "Ver a fisioterapia apenas como reabilitação pós-operatória.",
      comoBancaPensa: "Item correto que posiciona a profissão na linha de cuidado."
    }
  },
  {
    id: "FSM-013", disciplina: "Fisioterapia", assunto: "Incontinência urinária", subassunto: "Manobra de Valsalva no treino",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.75,
    enunciado: "No treinamento da musculatura do assoalho pélvico, é indispensável orientar a paciente a evitar a manobra de Valsalva durante a contração, uma vez que o aumento da pressão intra-abdominal empurra as estruturas pélvicas para baixo, opondo-se ao objetivo terapêutico.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "indispensável ... evitar a manobra de Valsalva ... empurra as estruturas pélvicas para baixo",
    cognitivo: {
      motivo: "Contraexemplo: uma exigência categórica que é orientação técnica correta.",
      palavraCritica: "indispensável",
    },
    comentario: {
      resolucao: "CERTO. A exigência procede. Valsalva — apneia com esforço expiratório contra a glote fechada — eleva a pressão intra-abdominal e desloca o assoalho pélvico caudalmente, exatamente o oposto da elevação que se busca. Erro frequente da paciente iniciante, corrigido orientando-a a manter a respiração fluente e a contrair sem contrair glúteos, adutores e abdominais.",
      fundamento: "Princípios do treinamento da musculatura do assoalho pélvico.",
      macete: "Contrair sem prender a respiração e sem fazer força para baixo.",
      erroComum: "Marcar ERRADO por reflexo diante de 'indispensável'.",
      comoBancaPensa: "Usa vocabulário de exigência absoluta em orientação clínica correta."
    }
  },
  {
    id: "FSM-014", disciplina: "Fisioterapia", assunto: "Incontinência urinária", subassunto: "Eletroestimulação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.7,
    enunciado: "No tratamento da bexiga hiperativa por eletroestimulação, empregam-se preferencialmente frequências elevadas, da ordem de 50 Hz, ao passo que a incontinência de esforço responde melhor a frequências baixas, próximas de 10 Hz.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "bexiga hiperativa ... 50 Hz ... esforço ... 10 Hz",
    cognitivo: {
      motivo: "Cobrar a correspondência entre faixa de frequência e objetivo terapêutico.",
      palavraCritica: "bexiga hiperativa ... frequências elevadas",
    },
    comentario: {
      resolucao: "ERRADO. Os parâmetros estão trocados. Frequências BAIXAS (em torno de 10 Hz) são usadas na bexiga hiperativa, por promoverem inibição reflexa do detrusor. Frequências mais ALTAS (em torno de 50 Hz) recrutam fibras rápidas do assoalho pélvico e servem ao ganho de força na incontinência de esforço. A lógica é fisiológica: inibir detrusor pede estímulo lento; fortalecer músculo estriado pede estímulo rápido.",
      fundamento: "Parâmetros de eletroestimulação em disfunções do trato urinário inferior.",
      macete: "Bexiga agitada acalma com frequência baixa. Músculo fraco fortalece com frequência alta.",
      erroComum: "Decorar os números sem associá-los ao objetivo.",
      comoBancaPensa: "Inverte dois parâmetros numéricos plausíveis, ambos reais na prática."
    }
  },
  {
    id: "FSM-015", disciplina: "Fisioterapia", assunto: "Incontinência urinária", subassunto: "Treinamento vesical",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.73,
    enunciado: "O treinamento vesical consiste em estabelecer intervalos miccionais progressivamente maiores, associando-se técnicas de inibição da urgência, e constitui conduta de escolha na bexiga hiperativa.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "intervalos miccionais progressivamente maiores ... inibição da urgência",
    cognitivo: {
      motivo: "Cobrar a conduta específica da bexiga hiperativa, distinta do treino de força.",
      palavraCritica: "progressivamente maiores",
    },
    comentario: {
      resolucao: "CERTO. Diferente do treino de força, o treinamento vesical reeduca o comportamento miccional: fixa-se um intervalo inicial tolerado e amplia-se aos poucos, enquanto a paciente aprende a controlar a urgência com contrações rápidas do assoalho pélvico, distração e controle respiratório. Some-se a orientação de ir ao banheiro por horário, e não por impulso, evitando a micção preventiva que reduz a capacidade vesical funcional.",
      fundamento: "Manejo conservador da bexiga hiperativa — treinamento vesical.",
      macete: "Urgência não se fortalece: se reeduca. Aumente o intervalo, não a força.",
      erroComum: "Aplicar só exercícios de fortalecimento em quadro de urgência.",
      comoBancaPensa: "Item correto que separa as duas condutas conservadoras da uroginecologia."
    }
  },
  {
    id: "FSM-016", disciplina: "Fisioterapia", assunto: "Incontinência urinária", subassunto: "Cones vaginais",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.62,
    enunciado: "Os cones vaginais atuam por meio de resistência progressiva, sendo seu uso recomendado indistintamente a todas as mulheres com queixa urinária, inclusive nos casos de prolapso genital acentuado e de infecção vaginal ativa.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "indistintamente a todas as mulheres ... prolapso genital acentuado e ... infecção vaginal ativa",
    cognitivo: {
      motivo: "Cobrar as contraindicações do recurso, negadas pela generalização.",
      palavraCritica: "indistintamente ... inclusive",
    },
    comentario: {
      resolucao: "ERRADO. A primeira parte procede — o cone impõe carga crescente, e a paciente contrai para retê-lo. Mas o uso tem contraindicações claras: infecção vaginal ou urinária ativa, prolapso acentuado (o cone não se sustenta e pode agravar o quadro), sangramento, gestação e pós-parto imediato. Também não se indica a quem não consegue contração voluntária, pois não haveria como reter o dispositivo.",
      fundamento: "Indicações e contraindicações do uso de cones vaginais.",
      macete: "Cone precisa de músculo que segure e de canal saudável. Sem isso, não serve.",
      erroComum: "Tratar recurso conservador como isento de contraindicação.",
      comoBancaPensa: "Abre com mecanismo correto e amplia a indicação até incluir o que é contraindicado."
    }
  },

  /* ===== PROLAPSO E CLIMATÉRIO ===== */
  {
    id: "FSM-017", disciplina: "Fisioterapia", assunto: "Prolapso de órgãos pélvicos", subassunto: "Tipos de prolapso",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.76,
    enunciado: "Denomina-se cistocele o prolapso da parede vaginal posterior, com deslocamento do reto, e retocele o prolapso da parede anterior, com deslocamento da bexiga.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "cistocele ... parede vaginal posterior ... retocele ... parede anterior",
    cognitivo: {
      motivo: "Cobrar a correspondência entre nome do prolapso, parede acometida e órgão envolvido.",
      palavraCritica: "cistocele ... posterior",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. Cistocele é o prolapso da parede vaginal ANTERIOR, com descida da bexiga — o próprio radical 'cisto' remete a bexiga. Retocele é o da parede POSTERIOR, com protrusão do reto. Completam o quadro a uterina (descida do útero), a enterocele (alças intestinais) e a cúpula vaginal em histerectomizadas.",
      fundamento: "Classificação anatômica dos prolapsos de órgãos pélvicos.",
      macete: "Cisto = bexiga = anterior. Reto = posterior. O radical entrega.",
      erroComum: "Trocar as paredes por não associar o radical ao órgão.",
      comoBancaPensa: "Inverte dois termos cuja etimologia já daria a resposta."
    }
  },
  {
    id: "FSM-018", disciplina: "Fisioterapia", assunto: "Prolapso de órgãos pélvicos", subassunto: "Fatores de risco",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.71,
    enunciado: "Multiparidade, parto vaginal, obesidade, constipação crônica, tosse persistente e hipoestrogenismo do climatério figuram entre os fatores de risco para o prolapso de órgãos pélvicos.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "Multiparidade, parto vaginal, obesidade, constipação crônica, tosse persistente e hipoestrogenismo",
    cognitivo: {
      motivo: "Cobrar o conjunto de fatores que aumentam pressão abdominal ou fragilizam o suporte.",
      palavraCritica: "constipação crônica, tosse persistente",
    },
    comentario: {
      resolucao: "CERTO. A lógica é única: tudo que eleva cronicamente a pressão intra-abdominal (obesidade, constipação com esforço evacuatório, tosse crônica, esforço ocupacional) ou que lesa e enfraquece o suporte (partos vaginais, sobretudo instrumentais; envelhecimento; queda estrogênica do climatério; doenças do colágeno) favorece o prolapso. Por isso a conduta inclui tratar constipação e orientar controle de peso, não apenas fortalecer.",
      fundamento: "Epidemiologia e fatores de risco do prolapso de órgãos pélvicos.",
      macete: "Pressão que empurra de cima ou suporte que fraqueja embaixo: os dois causam prolapso.",
      erroComum: "Ignorar constipação e tosse como fatores modificáveis.",
      comoBancaPensa: "Enumeração ampla e correta, que o candidato tende a achar exagerada."
    }
  },
  {
    id: "FSM-019", disciplina: "Fisioterapia", assunto: "Climatério e menopausa", subassunto: "Repercussões do hipoestrogenismo",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.69,
    enunciado: "Define-se menopausa como o período de transição que antecede a última menstruação, ao passo que climatério designa a data da última menstruação, confirmada retrospectivamente após doze meses de amenorreia.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "menopausa ... período de transição ... climatério ... data da última menstruação",
    cognitivo: {
      motivo: "Cobrar a distinção entre os dois termos, sistematicamente confundidos.",
      palavraCritica: "menopausa ... período de transição",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. MENOPAUSA é o evento — a última menstruação, reconhecida após doze meses consecutivos de amenorreia. CLIMATÉRIO é a fase de transição do período reprodutivo para o não reprodutivo, que engloba a menopausa e se estende por anos ao seu redor. Um é ponto no tempo; o outro, período.",
      fundamento: "Terminologia em ginecologia — climatério e menopausa.",
      macete: "Menopausa é a data. Climatério é a temporada inteira.",
      erroComum: "Usar os dois termos como sinônimos.",
      comoBancaPensa: "Permuta evento e período, apostando no uso coloquial impreciso."
    }
  },
  {
    id: "FSM-020", disciplina: "Fisioterapia", assunto: "Climatério e menopausa", subassunto: "Conduta fisioterapêutica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.6,
    enunciado: "Diante da atrofia geniturinária do climatério, cabe ao fisioterapeuta suspender o treinamento do assoalho pélvico até que a terapia hormonal restabeleça o trofismo tecidual, dada a ineficácia do exercício em ambiente hipoestrogênico.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "suspender o treinamento ... até que a terapia hormonal ... ineficácia do exercício",
    cognitivo: {
      motivo: "Cobrar que o treinamento mantém eficácia no climatério, sem depender de hormonioterapia prévia.",
      palavraCritica: "ineficácia do exercício em ambiente hipoestrogênico",
    },
    comentario: {
      resolucao: "ERRADO. O treinamento do assoalho pélvico permanece eficaz na pós-menopausa e não depende de terapia hormonal para ser iniciado — a musculatura responde ao estímulo em qualquer faixa etária. As duas condutas somam-se quando a hormonioterapia está indicada, mas subordinar a fisioterapia a ela apenas retarda o tratamento de uma população que é, justamente, a de maior prevalência de incontinência e prolapso.",
      fundamento: "Manejo conservador das disfunções do assoalho pélvico no climatério.",
      macete: "Músculo responde a treino em qualquer idade. Não se espera hormônio para começar.",
      erroComum: "Supor que sem estrogênio o exercício não produz efeito.",
      comoBancaPensa: "Cria uma dependência terapêutica que atrasaria a conduta de primeira linha."
    }
  },

  /* ===== OBSTETRÍCIA ===== */
  {
    id: "FSM-021", disciplina: "Fisioterapia", assunto: "Fisioterapia na gestação", subassunto: "Alterações posturais",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.84,
    enunciado: "O crescimento uterino desloca o centro de gravidade anteriormente e tende a acentuar a lordose lombar, com anteversão pélvica compensatória, o que ajuda a explicar a alta prevalência de lombalgia gestacional.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "centro de gravidade anteriormente ... acentuar a lordose lombar ... anteversão pélvica",
    cognitivo: {
      motivo: "Contraexemplo: cadeia biomecânica descrita corretamente, sem a inversão habitual.",
      palavraCritica: "anteversão pélvica compensatória",
    },
    comentario: {
      resolucao: "CERTO. O peso uterino anterioriza o centro de massa; para manter o equilíbrio, a gestante aumenta a lordose lombar e anteverte a pelve, com sobrecarga das articulações posteriores e da musculatura paravertebral. Somam-se a frouxidão ligamentar induzida pela relaxina e a alteração da marcha, com base alargada. Não confundir com retroversão, que seria o movimento oposto.",
      fundamento: "Adaptações musculoesqueléticas da gestação.",
      macete: "Barriga para frente puxa a lombar: mais lordose e pelve anterovertida.",
      erroComum: "Trocar anteversão por retroversão pélvica.",
      comoBancaPensa: "Apresenta corretamente a cadeia que costuma inverter num dos elos."
    }
  },
  {
    id: "FSM-022", disciplina: "Fisioterapia", assunto: "Fisioterapia na gestação", subassunto: "Contraindicações ao exercício",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.8,
    enunciado: "Constituem contraindicações absolutas ao exercício físico na gestação, entre outras, a ruptura de membranas, o trabalho de parto prematuro, a placenta prévia após a 26ª semana, a pré-eclâmpsia e a incompetência istmocervical.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "ruptura de membranas, trabalho de parto prematuro, placenta prévia após a 26ª semana, pré-eclâmpsia e incompetência istmocervical",
    cognitivo: {
      motivo: "Contraexemplo: lista restritiva extensa que corresponde às diretrizes.",
      palavraCritica: "contraindicações absolutas",
    },
    comentario: {
      resolucao: "CERTO. A relação corresponde às contraindicações absolutas consagradas nas diretrizes obstétricas, que incluem ainda doença cardíaca hemodinamicamente significativa, doença pulmonar restritiva, sangramento persistente no segundo e terceiro trimestres, gestação múltipla com risco de prematuridade e anemia grave. São situações em que o esforço pode precipitar desfecho materno-fetal grave — distintas das contraindicações relativas, que apenas exigem cautela e liberação individualizada.",
      fundamento: "Diretrizes de prescrição de exercício na gestação — contraindicações absolutas.",
      macete: "Sangramento, membrana rota, trabalho de parto e pré-eclâmpsia: para tudo.",
      erroComum: "Marcar ERRADO por achar a lista longa demais, ou confundir com contraindicações relativas.",
      comoBancaPensa: "Enumera restrições reais em bloco, contando com a desconfiança do candidato."
    }
  },
  {
    id: "FSM-023", disciplina: "Fisioterapia", assunto: "Fisioterapia na gestação", subassunto: "Diástase do reto abdominal",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.78,
    enunciado: "A diástase do reto abdominal consiste na ruptura das fibras do músculo reto do abdome em sua porção média, com solução de continuidade muscular que exige correção cirúrgica imediata.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "ruptura das fibras ... solução de continuidade muscular ... correção cirúrgica imediata",
    cognitivo: {
      motivo: "Cobrar a natureza da diástase, que é afastamento e não ruptura.",
      palavraCritica: "ruptura das fibras",
    },
    comentario: {
      resolucao: "ERRADO. A diástase é o AFASTAMENTO dos ventres do reto abdominal por distensão da linha alba, sem ruptura muscular — o tecido conjuntivo se alarga e afina, mas permanece íntegro. Considera-se alterada a separação acima de cerca de 2,5 cm (ou duas polpas digitais). A conduta inicial é conservadora, com reeducação da parede abdominal e do assoalho pélvico e controle da pressão intra-abdominal; a cirurgia é exceção, para casos refratários ou com hérnia associada.",
      fundamento: "Avaliação e manejo da diástase do reto abdominal no ciclo grávido-puerperal.",
      macete: "Diástase afasta, não rompe. Quem rompe é hérnia.",
      erroComum: "Tratar a diástase como lesão que impede exercício abdominal.",
      comoBancaPensa: "Transforma um afastamento fisiológico e reversível em lesão de indicação cirúrgica."
    }
  },
  {
    id: "FSM-024", disciplina: "Fisioterapia", assunto: "Fisioterapia na gestação", subassunto: "Dor lombopélvica gestacional",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "A relaxina contribui para a frouxidão das articulações sacroilíacas e da sínfise púbica durante a gestação, o que favorece o surgimento de dor pélvica posterior e de disfunção da sínfise.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "relaxina ... frouxidão das articulações sacroilíacas e da sínfise púbica",
    cognitivo: {
      motivo: "Cobrar o mecanismo hormonal por trás da dor pélvica gestacional.",
      palavraCritica: "disfunção da sínfise",
    },
    comentario: {
      resolucao: "CERTO. A relaxina, com a progesterona, aumenta a complacência ligamentar para permitir a adaptação do canal de parto. O efeito colateral é a instabilidade das articulações pélvicas, com dor sacroilíaca e, em alguns casos, disfunção dolorosa da sínfise púbica. O manejo inclui estabilização com exercícios para transverso do abdome e glúteos, orientação de atividades assimétricas e, quando indicado, cinta pélvica.",
      fundamento: "Fisiopatologia da dor lombopélvica na gestação.",
      macete: "Relaxina afrouxa para o parto — e é isso que instabiliza a pelve antes dele.",
      erroComum: "Atribuir toda dor gestacional apenas ao peso do útero.",
      comoBancaPensa: "Item correto que cobra mecanismo, e não só o sintoma."
    }
  },
  {
    id: "FSM-025", disciplina: "Fisioterapia", assunto: "Fisioterapia no parto", subassunto: "Recursos não farmacológicos",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.79,
    enunciado: "A deambulação, o uso da bola suíça, a hidroterapia, a massagem lombossacral e as técnicas respiratórias integram os recursos não farmacológicos de alívio da dor no trabalho de parto, alinhados às boas práticas de assistência ao parto.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "deambulação, bola suíça, hidroterapia, massagem lombossacral e técnicas respiratórias",
    cognitivo: {
      motivo: "Cobrar o repertório de recursos e sua chancela nas boas práticas.",
      palavraCritica: "recursos não farmacológicos",
    },
    comentario: {
      resolucao: "CERTO. As boas práticas de assistência ao parto recomendam liberdade de posição e movimento, métodos não farmacológicos de alívio da dor e presença de acompanhante. A verticalização e a mobilidade pélvica favorecem a descida fetal e reduzem a percepção dolorosa; a imersão em água morna promove relaxamento. São condutas de baixo custo, com boa evidência e sem os efeitos adversos da analgesia farmacológica.",
      fundamento: "Boas práticas de atenção ao parto e nascimento — métodos não farmacológicos.",
      macete: "Mover, respirar, aquecer e apoiar: o arsenal não farmacológico.",
      erroComum: "Restringir a atuação da fisioterapia ao pré-natal e ao puerpério.",
      comoBancaPensa: "Item correto e amplo, sobre o papel do fisioterapeuta no centro obstétrico."
    }
  },
  {
    id: "FSM-026", disciplina: "Fisioterapia", assunto: "Fisioterapia no parto", subassunto: "Períodos clínicos do parto",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.67,
    enunciado: "O segundo período clínico do parto corresponde à dequitação, isto é, ao desprendimento e à expulsão da placenta, ao passo que o terceiro período compreende a dilatação cervical completa até o nascimento.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "segundo período ... dequitação ... terceiro período ... dilatação",
    cognitivo: {
      motivo: "Cobrar a ordem dos períodos clínicos do parto.",
      palavraCritica: "segundo período ... dequitação",
    },
    comentario: {
      resolucao: "ERRADO. A ordem está trocada. O primeiro período é o de dilatação; o SEGUNDO é o expulsivo, da dilatação total ao nascimento; o TERCEIRO é a dequitação, com saída da placenta; e o quarto é a primeira hora após a dequitação (período de Greenberg), de vigilância hemorrágica. A sequência acompanha a lógica do processo: dilatar, expulsar o feto, expulsar a placenta, observar.",
      fundamento: "Períodos clínicos do parto.",
      macete: "1 dilata, 2 nasce, 3 sai a placenta, 4 observa.",
      erroComum: "Inverter dequitação e expulsivo.",
      comoBancaPensa: "Permuta a numeração de duas fases sequenciais, mantendo as descrições corretas."
    }
  },
  {
    id: "FSM-027", disciplina: "Fisioterapia", assunto: "Puerpério", subassunto: "Conduta no pós-parto imediato",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "No puerpério imediato, a mobilização precoce é conduta recomendada, entre outras razões, por reduzir o risco de fenômenos tromboembólicos, favorecidos pelo estado de hipercoagulabilidade próprio do ciclo grávido-puerperal.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "mobilização precoce ... fenômenos tromboembólicos ... hipercoagulabilidade",
    cognitivo: {
      motivo: "Cobrar a justificativa fisiológica da deambulação precoce, além do conforto.",
      palavraCritica: "hipercoagulabilidade própria do ciclo grávido-puerperal",
    },
    comentario: {
      resolucao: "CERTO. A gestação e o puerpério cursam com aumento de fatores de coagulação e estase venosa — adaptação que protege contra hemorragia no parto, mas eleva o risco de trombose venosa profunda e tromboembolismo pulmonar, causa importante de morbimortalidade materna. Mobilização precoce, exercícios metabólicos de tornozelo e hidratação compõem a prevenção, ao lado da profilaxia medicamentosa quando indicada.",
      fundamento: "Alterações hematológicas do ciclo grávido-puerperal e prevenção de tromboembolismo.",
      macete: "Sangue mais espesso no puerpério: tirar da cama cedo é prevenção.",
      erroComum: "Ver a mobilização precoce apenas como medida de conforto.",
      comoBancaPensa: "Item correto que exige o porquê fisiológico, não só a recomendação."
    }
  },
  {
    id: "FSM-028", disciplina: "Fisioterapia", assunto: "Puerpério", subassunto: "Amamentação e mastite",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.68,
    enunciado: "Diagnosticada a mastite puerperal, impõe-se a suspensão imediata do aleitamento na mama acometida até a resolução completa do quadro infeccioso.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "suspensão imediata do aleitamento ... até a resolução completa",
    cognitivo: {
      motivo: "Cobrar a conduta na mastite, que é justamente manter o esvaziamento.",
      palavraCritica: "suspensão imediata do aleitamento",
    },
    comentario: {
      resolucao: "ERRADO. A recomendação é manter a amamentação e garantir o esvaziamento eficaz da mama acometida — a estase láctea é o que perpetua e agrava a mastite. Suspender a mamada piora o quadro e favorece a evolução para abscesso. A conduta associa pega correta, ordenha quando necessário, analgesia e antibiótico conforme indicação médica.",
      fundamento: "Manejo clínico da mastite puerperal e proteção ao aleitamento materno.",
      macete: "Mastite se trata esvaziando a mama, não parando de amamentar.",
      erroComum: "Presumir que infecção mamária contraindica o aleitamento.",
      comoBancaPensa: "Inventa uma suspensão terapêutica que contraria a conduta e soa prudente."
    }
  },

  /* ===== MASTOLOGIA E ONCOLOGIA ===== */
  {
    id: "FSM-029", disciplina: "Fisioterapia", assunto: "Mastologia e oncologia", subassunto: "Linfedema — terapia complexa descongestiva",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.89,
    enunciado: "A terapia complexa descongestiva compõe-se de drenagem linfática manual, terapia compressiva, exercícios miolinfocinéticos e cuidados com a pele, sendo desenvolvida em duas fases: uma intensiva, de redução do volume, e outra de manutenção.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "drenagem linfática manual, terapia compressiva, exercícios ... cuidados com a pele ... duas fases",
    cognitivo: {
      motivo: "Cobrar os quatro componentes e as duas fases do tratamento padrão-ouro do linfedema.",
      palavraCritica: "duas fases",
    },
    comentario: {
      resolucao: "CERTO. A TCD é o tratamento de referência do linfedema. Na fase intensiva, busca-se reduzir o volume, com drenagem manual e bandagem inelástica multicamadas; na fase de manutenção, conserva-se o resultado com malha compressiva sob medida, exercícios e autocuidado. Os cuidados com a pele não são detalhe: o membro linfedematoso tem barreira cutânea fragilizada e risco elevado de erisipela, que por sua vez agrava o linfedema.",
      fundamento: "Terapia complexa descongestiva no tratamento do linfedema.",
      macete: "Quatro componentes, duas fases: reduzir e depois manter.",
      erroComum: "Reduzir a TCD à drenagem linfática manual isolada.",
      comoBancaPensa: "Item correto e completo — a armadilha está em desconfiar da enumeração."
    }
  },
  {
    id: "FSM-030", disciplina: "Fisioterapia", assunto: "Mastologia e oncologia", subassunto: "Drenagem linfática manual — contraindicações",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.81,
    enunciado: "Por ser técnica manual suave e de baixa pressão, a drenagem linfática manual não apresenta contraindicações, podendo ser aplicada inclusive em vigência de erisipela e de trombose venosa profunda.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "não apresenta contraindicações ... inclusive em vigência de erisipela e de trombose venosa profunda",
    cognitivo: {
      motivo: "Cobrar as contraindicações da técnica, negadas pelo argumento da suavidade.",
      palavraCritica: "não apresenta contraindicações",
    },
    comentario: {
      resolucao: "ERRADO. A drenagem tem contraindicações claras: infecção aguda — erisipela e celulite, em que pode disseminar o processo —, trombose venosa profunda em fase aguda, pelo risco de embolia, insuficiência cardíaca descompensada, por aumentar o retorno venoso e sobrecarregar o coração, e insuficiência renal grave. A suavidade da técnica não neutraliza esses riscos.",
      fundamento: "Indicações e contraindicações da drenagem linfática manual.",
      macete: "Infecção aguda e trombose: não drena. O suave também tem limite.",
      erroComum: "Concluir de 'técnica suave' que é isenta de risco.",
      comoBancaPensa: "Usa uma característica verdadeira da técnica para negar suas contraindicações."
    }
  },
  {
    id: "FSM-031", disciplina: "Fisioterapia", assunto: "Mastologia e oncologia", subassunto: "Complicações da linfadenectomia axilar",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.83,
    enunciado: "A lesão do nervo torácico longo em cirurgia mamária com abordagem axilar acarreta paralisia do músculo serrátil anterior, cuja manifestação característica é a escápula alada.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "nervo torácico longo ... serrátil anterior ... escápula alada",
    cognitivo: {
      motivo: "Contraexemplo: correspondência exata entre nervo, músculo e sinal clínico.",
      palavraCritica: "manifestação característica",
    },
    comentario: {
      resolucao: "CERTO. O torácico longo inerva o serrátil anterior, estabilizador da escápula contra a caixa torácica. Sua lesão produz a escápula alada, evidente à elevação do braço ou ao empurrar contra a parede. Compõem o quadro de complicações da abordagem axilar a lesão do toracodorsal (latíssimo do dorso) e a do intercostobraquial, com alteração de sensibilidade na face medial do braço — esta a mais frequente.",
      fundamento: "Complicações neurológicas da linfadenectomia axilar.",
      macete: "Torácico longo → serrátil → escápula alada. Trio fixo.",
      erroComum: "Atribuir a escápula alada à lesão do nervo toracodorsal.",
      comoBancaPensa: "Item correto e específico, que separa quem estudou a inervação axilar."
    }
  },
  {
    id: "FSM-032", disciplina: "Fisioterapia", assunto: "Mastologia e oncologia", subassunto: "Síndrome da rede axilar",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.66,
    enunciado: "A síndrome da rede axilar consiste na formação de cordões fibrosos palpáveis na axila, com extensão para o braço, que limitam a abdução do ombro e decorrem de trombose de vasos linfáticos superficiais após a abordagem axilar.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "cordões fibrosos palpáveis ... limitam a abdução ... trombose de vasos linfáticos superficiais",
    cognitivo: {
      motivo: "Cobrar uma complicação específica, distinguindo-a do linfedema.",
      palavraCritica: "trombose de vasos linfáticos superficiais",
    },
    comentario: {
      resolucao: "CERTO. Conhecida como axillary web syndrome ou 'síndrome das cordas', costuma surgir nas primeiras semanas de pós-operatório, com cordões visíveis e dolorosos que restringem a abdução. Não se confunde com linfedema — não há aumento volumétrico do membro — e responde bem a alongamento progressivo, mobilização tecidual e cinesioterapia, em geral com resolução em semanas.",
      fundamento: "Complicações pós-operatórias em cirurgia mamária — síndrome da rede axilar.",
      macete: "Cordas na axila que travam a abdução: rede axilar, não linfedema.",
      erroComum: "Rotular qualquer limitação de ombro pós-mastectomia como linfedema.",
      comoBancaPensa: "Descreve corretamente entidade que costuma ser confundida com outra complicação."
    }
  },
  {
    id: "FSM-033", disciplina: "Fisioterapia", assunto: "Mastologia e oncologia", subassunto: "Reabilitação pós-mastectomia",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.74,
    enunciado: "No pós-operatório imediato de cirurgia mamária com esvaziamento axilar, recomenda-se limitar a elevação do ombro a cerca de 90 graus enquanto houver drenos, ampliando-se a amplitude progressivamente após sua retirada.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "limitar a elevação do ombro a cerca de 90 graus enquanto houver drenos",
    cognitivo: {
      motivo: "Cobrar a conduta de progressão de amplitude no pós-operatório, com o limite usual.",
      palavraCritica: "enquanto houver drenos",
    },
    comentario: {
      resolucao: "CERTO. A restrição temporária a cerca de 90 graus busca proteger a cicatrização e reduzir a formação de seroma, complicação frequente do esvaziamento axilar. Retirado o dreno, a amplitude é ampliada progressivamente até a recuperação funcional completa. O equilíbrio é o ponto: imobilizar demais leva a aderências e a ombro congelado; forçar cedo aumenta seroma e deiscência.",
      fundamento: "Protocolos de reabilitação pós-operatória em cirurgia mamária.",
      macete: "Com dreno, até 90 graus. Sem dreno, libera progressivamente.",
      erroComum: "Manter o membro imobilizado por semanas, gerando rigidez.",
      comoBancaPensa: "Número específico e correto, que o candidato tende a rejeitar por insegurança."
    }
  },
  {
    id: "FSM-034", disciplina: "Fisioterapia", assunto: "Mastologia e oncologia", subassunto: "Linfedema — medidas de prevenção",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.76,
    enunciado: "Entre as orientações de prevenção do linfedema após esvaziamento axilar, incluem-se evitar traumas e infecções no membro homolateral e cuidar da integridade da pele; por outro lado, o exercício resistido é formalmente contraindicado, por sobrecarregar o sistema linfático residual.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "exercício resistido é formalmente contraindicado",
    cognitivo: {
      motivo: "Cobrar a atualização sobre exercício resistido no membro em risco, após premissas verdadeiras.",
      palavraCritica: "formalmente contraindicado",
    },
    comentario: {
      resolucao: "ERRADO. A primeira parte está correta. A segunda não: a evidência atual mostra que o exercício resistido progressivo e supervisionado é SEGURO e benéfico para mulheres com ou em risco de linfedema, não aumentando a incidência nem agravando o quadro. A orientação antiga de evitar carga foi superada — o que se recomenda é progressão gradual e supervisão, não proibição.",
      fundamento: "Evidências atuais sobre exercício resistido em mulheres com risco de linfedema.",
      macete: "Carga progressiva e supervisionada não causa linfedema. A proibição é antiga.",
      erroComum: "Repetir a orientação superada de não usar peso com o braço operado.",
      comoBancaPensa: "Abre com orientações corretas e fecha com uma recomendação desatualizada, que soa prudente."
    }
  },

  /* ===== COLOPROCTOLOGIA ===== */
  {
    id: "FSM-035", disciplina: "Fisioterapia", assunto: "Coloproctologia", subassunto: "Continência fecal",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.71,
    enunciado: "O esfíncter anal interno é constituído por musculatura estriada de controle voluntário, responsável pela contração de urgência, ao passo que o esfíncter anal externo, de musculatura lisa, mantém o tônus de repouso.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "interno ... estriada ... voluntário ... externo ... lisa ... tônus de repouso",
    cognitivo: {
      motivo: "Cobrar a natureza e a função de cada esfíncter anal pela inversão.",
      palavraCritica: "interno ... estriada de controle voluntário",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O esfíncter anal INTERNO é liso, involuntário, e responde pela maior parte do tônus de repouso. O EXTERNO é estriado, voluntário, inervado pelo pudendo, e permite a contração de urgência que adia a evacuação. Soma-se o puborretal, que mantém o ângulo anorretal — elemento decisivo da continência, sobretudo para fezes sólidas.",
      fundamento: "Fisiologia da continência anal — esfíncteres interno e externo.",
      macete: "Interno é liso e automático (repouso). Externo é estriado e voluntário (segura).",
      erroComum: "Trocar liso e estriado entre os dois esfíncteres.",
      comoBancaPensa: "Permuta duas estruturas vizinhas com funções complementares."
    }
  },
  {
    id: "FSM-036", disciplina: "Fisioterapia", assunto: "Coloproctologia", subassunto: "Incontinência anal — fatores obstétricos",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "A laceração perineal de terceiro ou quarto grau, por comprometer o complexo esfincteriano anal, constitui fator de risco relevante para incontinência anal em mulheres com antecedente de parto vaginal.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "laceração perineal de terceiro ou quarto grau ... complexo esfincteriano anal",
    cognitivo: {
      motivo: "Cobrar a classificação das lacerações e sua repercussão funcional.",
      palavraCritica: "terceiro ou quarto grau",
    },
    comentario: {
      resolucao: "CERTO. As lacerações de primeiro grau atingem pele e mucosa; as de segundo, a musculatura perineal, poupando o esfíncter anal; as de TERCEIRO grau comprometem o complexo esfincteriano anal; e as de QUARTO atingem também a mucosa retal. As duas últimas são as que se associam à incontinência anal, motivo pelo qual a identificação e o reparo adequados no parto são determinantes do prognóstico.",
      fundamento: "Classificação das lacerações perineais e trauma esfincteriano obstétrico.",
      macete: "Terceiro grau já pegou esfíncter. Quarto chegou à mucosa retal.",
      erroComum: "Supor que só a episiotomia, e não a laceração espontânea, gera risco.",
      comoBancaPensa: "Item correto que exige conhecer a graduação, não apenas o conceito."
    }
  },
  {
    id: "FSM-037", disciplina: "Fisioterapia", assunto: "Coloproctologia", subassunto: "Dissinergia do assoalho pélvico",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.64,
    enunciado: "Na constipação por dissinergia do assoalho pélvico, observa-se contração paradoxal ou relaxamento insuficiente da musculatura perineal durante o esforço evacuatório, quadro em que o biofeedback figura como conduta de escolha.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "contração paradoxal ou relaxamento insuficiente ... biofeedback ... conduta de escolha",
    cognitivo: {
      motivo: "Cobrar o mecanismo da constipação dissinérgica e sua conduta específica.",
      palavraCritica: "contração paradoxal",
    },
    comentario: {
      resolucao: "CERTO. Na evacuação normal, o assoalho pélvico relaxa enquanto a pressão abdominal aumenta. Na dissinergia — também chamada anismus —, a musculatura contrai quando deveria relaxar, obstruindo a saída. Como o problema é de coordenação, e não de força, o tratamento de escolha é o biofeedback, que torna visível à paciente o padrão errado e permite reeducá-lo. Fortalecer, aqui, seria contraproducente.",
      fundamento: "Constipação por defecação dissinérgica — diagnóstico e tratamento.",
      macete: "Dissinergia é erro de coordenação: trate com biofeedback, não com força.",
      erroComum: "Prescrever fortalecimento para quem já contrai na hora errada.",
      comoBancaPensa: "Item correto que exige distinguir déficit de força de déficit de coordenação."
    }
  },
  {
    id: "FSM-038", disciplina: "Fisioterapia", assunto: "Coloproctologia", subassunto: "Orientações no manejo da constipação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.62,
    enunciado: "Entre as orientações para o manejo da constipação, inclui-se a adoção de posição com elevação dos pés durante a evacuação, o que amplia o ângulo anorretal e facilita a saída do bolo fecal.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "elevação dos pés ... amplia o ângulo anorretal",
    cognitivo: {
      motivo: "Cobrar a orientação postural e sua justificativa anatômica.",
      palavraCritica: "amplia o ângulo anorretal",
    },
    comentario: {
      resolucao: "CERTO. Elevar os pés em banquinho aproxima a posição de cócoras, o que relaxa o puborretal e retifica o ângulo anorretal, reduzindo o esforço necessário. É medida simples e relevante, porque o esforço evacuatório repetido é fator de risco tanto para prolapso quanto para incontinência. Compõem o pacote de orientações a hidratação, as fibras, a atividade física e o atendimento ao reflexo gastrocólico.",
      fundamento: "Orientações posturais e comportamentais no manejo da constipação.",
      macete: "Pés no banquinho: retifica o canal e poupa o assoalho pélvico.",
      erroComum: "Tratar a orientação postural como irrelevante frente à dieta.",
      comoBancaPensa: "Item correto que cobra o mecanismo por trás de uma orientação simples."
    }
  },

  /* ===== DISFUNÇÕES SEXUAIS ===== */
  {
    id: "FSM-039", disciplina: "Fisioterapia", assunto: "Disfunções sexuais femininas", subassunto: "Vaginismo e dispareunia",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "Define-se vaginismo como a dor genital persistente durante a relação sexual, ao passo que dispareunia designa a contração involuntária e reflexa da musculatura perivaginal que impede ou dificulta a penetração.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "vaginismo ... dor genital persistente ... dispareunia ... contração involuntária",
    cognitivo: {
      motivo: "Cobrar a definição das duas disfunções pela inversão.",
      palavraCritica: "vaginismo ... dor genital persistente",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. VAGINISMO é a contração involuntária e reflexa da musculatura perivaginal, que dificulta ou impede a penetração. DISPAREUNIA é a dor genital persistente ou recorrente associada à relação sexual. Os quadros frequentemente coexistem e se retroalimentam — a dor gera contração protetora, que por sua vez aumenta a dor —, o que justifica a abordagem conjunta com dessensibilização, relaxamento e terapia manual.",
      fundamento: "Classificação das disfunções sexuais femininas.",
      macete: "Vaginismo é músculo que fecha. Dispareunia é dor que aparece.",
      erroComum: "Usar os dois termos indistintamente por ambos envolverem dor na relação.",
      comoBancaPensa: "Permuta duas definições que costumam vir juntas no mesmo enunciado."
    }
  },
  {
    id: "FSM-040", disciplina: "Fisioterapia", assunto: "Disfunções sexuais femininas", subassunto: "Hipertonia do assoalho pélvico",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.77,
    enunciado: "Diante de assoalho pélvico hipertônico, o fortalecimento muscular não constitui conduta adequada, devendo-se priorizar técnicas de relaxamento, alongamento e dessensibilização.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "fortalecimento ... não constitui conduta adequada ... relaxamento, alongamento e dessensibilização",
    cognitivo: {
      motivo: "Contraexemplo: uma vedação terapêutica que é clinicamente correta.",
      palavraCritica: "não constitui conduta adequada",
    },
    comentario: {
      resolucao: "CERTO. Nem toda disfunção do assoalho pélvico decorre de fraqueza. Na hipertonia — presente no vaginismo, na dor pélvica crônica e em parte das dispareunias —, prescrever fortalecimento agrava o quadro, porque o músculo já está em contração excessiva e não relaxa. A conduta é a oposta: consciência corporal, relaxamento, alongamento, liberação miofascial, terapia manual e dessensibilização progressiva.",
      fundamento: "Manejo da hipertonia do assoalho pélvico e dor pélvica crônica.",
      macete: "Nem toda queixa pélvica é fraqueza. Músculo travado precisa soltar, não apertar.",
      erroComum: "Marcar ERRADO por associar fisioterapia pélvica sempre a fortalecimento.",
      comoBancaPensa: "Nega uma conduta emblemática da área justamente onde a negativa procede."
    }
  },

  /* ===== SAÚDE COLETIVA APLICADA ===== */
  {
    id: "FSM-041", disciplina: "Fisioterapia", assunto: "Saúde da mulher no SUS", subassunto: "Rastreamento do câncer de colo do útero",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.75,
    enunciado: "O rastreamento do câncer do colo do útero no Brasil é recomendado para mulheres de 25 a 64 anos que já tenham iniciado atividade sexual, com dois exames citopatológicos anuais consecutivos e, sendo ambos normais, repetição a cada três anos.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "25 a 64 anos ... dois exames ... anuais ... a cada três anos",
    cognitivo: {
      motivo: "Cobrar a faixa etária e o intervalo do rastreamento, cobrados junto com a atuação em saúde da mulher.",
      palavraCritica: "a cada três anos",
    },
    comentario: {
      resolucao: "CERTO. É a recomendação consolidada no país: início aos 25 anos para quem já teve atividade sexual, dois exames com intervalo de um ano e, se ambos normais, trienal até os 64 anos. Não se rastreia antes dos 25 porque as lesões nessa faixa costumam regredir espontaneamente, e o rastreio precoce gera intervenção desnecessária.",
      fundamento: "Diretrizes brasileiras para o rastreamento do câncer do colo do útero.",
      macete: "25 a 64. Dois anuais normais e depois de três em três.",
      erroComum: "Afirmar rastreamento anual por toda a vida.",
      comoBancaPensa: "Item numérico correto em tema de saúde coletiva, cobrado junto com a área técnica."
    }
  },
  {
    id: "FSM-042", disciplina: "Fisioterapia", assunto: "Saúde da mulher no SUS", subassunto: "Níveis de atenção e prevenção",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.68,
    enunciado: "A orientação a gestantes sobre o assoalho pélvico em grupo de pré-natal na atenção básica constitui exemplo de prevenção terciária, ao passo que a reabilitação do linfedema após mastectomia caracteriza prevenção primária.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "grupo de pré-natal ... prevenção terciária ... reabilitação do linfedema ... prevenção primária",
    cognitivo: {
      motivo: "Cobrar os níveis de prevenção aplicados à atuação do fisioterapeuta.",
      palavraCritica: "prevenção terciária ... prevenção primária",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. Orientar gestantes antes que a disfunção se instale é prevenção PRIMÁRIA — atua sobre o risco, não sobre a doença. Reabilitar linfedema já instalado, limitando incapacidade e sequela, é prevenção TERCIÁRIA. Entre as duas está a secundária, voltada ao diagnóstico precoce, como o rastreamento do câncer de mama e de colo do útero.",
      fundamento: "Níveis de prevenção em saúde aplicados à fisioterapia.",
      macete: "Primária evita, secundária detecta cedo, terciária reabilita.",
      erroComum: "Associar prevenção primária apenas a vacinação.",
      comoBancaPensa: "Inverte dois níveis, apostando que o candidato decorou os nomes sem os exemplos."
    }
  },
  {
    id: "FSM-043", disciplina: "Fisioterapia", assunto: "Saúde da mulher no SUS", subassunto: "Rastreamento do câncer de mama",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "A mamografia é o exame de escolha para o rastreamento populacional do câncer de mama, cabendo ao fisioterapeuta, no âmbito de sua atuação, encaminhar e orientar a mulher quanto à importância do exame, sem substituí-lo por exame físico das mamas.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "mamografia ... rastreamento populacional ... sem substituí-lo por exame físico",
    cognitivo: {
      motivo: "Cobrar o papel do fisioterapeuta na linha de cuidado oncológica, sem extrapolar competência.",
      palavraCritica: "sem substituí-lo por exame físico das mamas",
    },
    comentario: {
      resolucao: "CERTO. A mamografia é o método de rastreamento com evidência de redução de mortalidade; o exame clínico das mamas não a substitui como estratégia populacional. O fisioterapeuta que atende saúde da mulher está em posição privilegiada para identificar mulheres fora do rastreamento e encaminhá-las — atuação intersetorial que integra sua competência sem invadir a de outro profissional.",
      fundamento: "Diretrizes de rastreamento do câncer de mama e atuação multiprofissional.",
      macete: "Rastreamento populacional é mamografia. Exame físico não substitui.",
      erroComum: "Supor que o autoexame ou o exame clínico bastam como rastreamento.",
      comoBancaPensa: "Item correto que delimita competência e reforça a atuação em rede."
    }
  },

  /* ===== APROFUNDAMENTO ===== */
  {
    id: "FSM-044", disciplina: "Fisioterapia", assunto: "Incontinência urinária", subassunto: "Knack",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.66,
    enunciado: "A manobra conhecida como knack consiste na contração voluntária do assoalho pélvico imediatamente antes e durante o esforço, como ao tossir, com o objetivo de prevenir a perda urinária nesse momento.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "contração voluntária ... imediatamente antes e durante o esforço",
    cognitivo: {
      motivo: "Cobrar a técnica de contração pré-esforço, frequentemente confundida com exercício de força.",
      palavraCritica: "imediatamente antes e durante o esforço",
    },
    comentario: {
      resolucao: "CERTO. O knack — também chamado de contração perineal pré-esforço — é habilidade de coordenação, não de força: a paciente aprende a antecipar a contração ao gatilho (tosse, espirro, levantar peso), reproduzindo o mecanismo automático de continência que se perdeu. Costuma trazer resultado clínico rápido e é ensinado desde as primeiras sessões, em paralelo ao ganho de força.",
      fundamento: "Técnicas de reeducação funcional na incontinência urinária de esforço.",
      macete: "Vai tossir? Contrai antes. Isso é o knack.",
      erroComum: "Tratá-lo como mais um exercício de fortalecimento.",
      comoBancaPensa: "Cobra nomenclatura técnica específica, que distingue quem estudou a área."
    }
  },
  {
    id: "FSM-045", disciplina: "Fisioterapia", assunto: "Avaliação do assoalho pélvico", subassunto: "Manometria e eletromiografia",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.65,
    enunciado: "A manometria vaginal quantifica a pressão gerada pela contração muscular, enquanto a eletromiografia de superfície registra a atividade elétrica associada ao recrutamento das fibras, de modo que os dois métodos medem grandezas distintas.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "manometria ... pressão ... eletromiografia ... atividade elétrica ... grandezas distintas",
    cognitivo: {
      motivo: "Contraexemplo: dois métodos frequentemente permutados, aqui descritos corretamente.",
      palavraCritica: "grandezas distintas",
    },
    comentario: {
      resolucao: "CERTO. São instrumentos complementares e não intercambiáveis: a manometria mede pressão, em cmH₂O ou mmHg; a eletromiografia capta o sinal elétrico da despolarização muscular, em microvolts. Atividade elétrica elevada não significa, por si, pressão elevada — e é por isso que um exame não substitui o outro na avaliação funcional.",
      fundamento: "Métodos objetivos de avaliação da musculatura do assoalho pélvico.",
      macete: "Manometria mede aperto (pressão). Eletromiografia mede sinal elétrico.",
      erroComum: "Tomar os dois como formas equivalentes de medir força.",
      comoBancaPensa: "Apresenta corretamente o par que costuma inverter, checando compreensão do que se mede."
    }
  },
  {
    id: "FSM-046", disciplina: "Fisioterapia", assunto: "Fisioterapia na gestação", subassunto: "Decúbito e síndrome hipotensiva",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.79,
    enunciado: "A partir do segundo trimestre, o decúbito dorsal prolongado deve ser evitado na gestante, pois a compressão da veia cava inferior pelo útero gravídico reduz o retorno venoso e pode desencadear hipotensão supina, sendo o decúbito lateral esquerdo a posição preferencial.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "compressão da veia cava inferior ... hipotensão supina ... decúbito lateral esquerdo",
    cognitivo: {
      motivo: "Cobrar o posicionamento seguro da gestante e sua justificativa hemodinâmica.",
      palavraCritica: "decúbito lateral esquerdo",
    },
    comentario: {
      resolucao: "CERTO. Com o crescimento uterino, o decúbito dorsal comprime a cava inferior contra a coluna, reduzindo retorno venoso, débito cardíaco e perfusão placentária — quadro conhecido como síndrome da hipotensão supina, com tontura, náusea, palidez e sudorese. O lado esquerdo é o preferencial porque a cava corre à direita da coluna, de modo que essa posição a desobstrui. É cuidado obrigatório ao posicionar a gestante para qualquer atendimento.",
      fundamento: "Adaptações cardiovasculares da gestação e síndrome da hipotensão supina.",
      macete: "Cava fica à direita: deite a gestante do lado esquerdo.",
      erroComum: "Posicionar a gestante em supino prolongado para atendimento.",
      comoBancaPensa: "Item correto de segurança assistencial, com a justificativa anatômica exigida."
    }
  },
  {
    id: "FSM-047", disciplina: "Fisioterapia", assunto: "Fisioterapia na gestação", subassunto: "Massagem perineal",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.73,
    enunciado: "A massagem perineal realizada no terceiro trimestre associa-se à redução da ocorrência de trauma perineal que demande sutura e da necessidade de episiotomia, sobretudo em primíparas.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "terceiro trimestre ... redução ... trauma perineal ... episiotomia ... primíparas",
    cognitivo: {
      motivo: "Cobrar uma conduta preventiva com evidência consolidada e sua população-alvo.",
      palavraCritica: "sobretudo em primíparas",
    },
    comentario: {
      resolucao: "CERTO. A massagem perineal a partir de cerca de 34 semanas, realizada pela própria gestante ou parceiro, aumenta a extensibilidade dos tecidos e reduz trauma perineal com necessidade de sutura, com benefício mais evidente entre primíparas — que são as de maior risco de laceração. É intervenção de baixo custo, sem efeitos adversos relevantes, e integra a orientação de pré-natal.",
      fundamento: "Evidências sobre massagem perineal no pré-natal e prevenção de trauma perineal.",
      macete: "A partir de 34 semanas, massagem perineal — e quem mais ganha é a primeira gestação.",
      erroComum: "Considerar a técnica sem respaldo por ser simples.",
      comoBancaPensa: "Item correto que cobra a população em que o efeito é maior, não só a existência da conduta."
    }
  },
  {
    id: "FSM-048", disciplina: "Fisioterapia", assunto: "Mastologia e oncologia", subassunto: "Linfedema — estadiamento",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.69,
    enunciado: "No estádio I do linfedema, o edema é reversível com a elevação do membro e apresenta cacifo à digitopressão, ao passo que, nos estádios mais avançados, instalam-se fibrose e alterações cutâneas que tornam o edema pouco responsivo à elevação.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "estádio I ... reversível com a elevação ... cacifo ... fibrose ... pouco responsivo",
    cognitivo: {
      motivo: "Cobrar a progressão clínica do linfedema, que orienta a expectativa terapêutica.",
      palavraCritica: "pouco responsivo à elevação",
    },
    comentario: {
      resolucao: "CERTO. A evolução é bem descrita: no estádio 0 (latente) há alteração do transporte linfático sem edema visível; no I, o edema é mole, deixa cacifo e reduz com elevação; no II, a fibrose se instala e o cacifo vai desaparecendo, com resposta menor à elevação; no III, tem-se a elefantíase, com alterações cutâneas exuberantes. Daí a importância do diagnóstico precoce — quanto mais fibrose, menor a reversibilidade.",
      fundamento: "Estadiamento do linfedema segundo a Sociedade Internacional de Linfologia.",
      macete: "Começa mole e reversível; termina fibrosado e duro. Trate cedo.",
      erroComum: "Supor que todo linfedema responde igualmente ao tratamento.",
      comoBancaPensa: "Item correto que liga o estádio ao prognóstico, e não apenas descreve."
    }
  },
  {
    id: "FSM-049", disciplina: "Fisioterapia", assunto: "Mastologia e oncologia", subassunto: "Aferição do linfedema",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.63,
    enunciado: "Para o acompanhamento do linfedema por perimetria, é indispensável que as medidas sejam tomadas sempre nos mesmos pontos de referência anatômicos e comparadas ao membro contralateral, sem o que a evolução não pode ser aferida com segurança.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "indispensável ... mesmos pontos de referência ... comparadas ao membro contralateral",
    cognitivo: {
      motivo: "Contraexemplo: uma exigência metodológica categórica e correta.",
      palavraCritica: "indispensável ... sem o que",
    },
    comentario: {
      resolucao: "CERTO. A perimetria só tem valor se for reprodutível: medem-se circunferências em pontos fixos, a distâncias padronizadas de um referencial ósseo, e compara-se ao membro contralateral, que serve de controle. Sem padronizar, a variação medida pode ser apenas erro de posicionamento da fita. Uma ressalva prática: em pacientes com dominância marcada, há diferença fisiológica entre os membros, que precisa ser considerada.",
      fundamento: "Métodos de aferição volumétrica do linfedema — perimetria.",
      macete: "Mesmos pontos, sempre, e sempre comparando com o outro braço.",
      erroComum: "Marcar ERRADO por reflexo diante de 'indispensável'.",
      comoBancaPensa: "Veste de exigência absoluta um requisito metodológico que de fato não admite flexibilização."
    }
  },
  {
    id: "FSM-050", disciplina: "Fisioterapia", assunto: "Incontinência urinária", subassunto: "Incontinência mista",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.7,
    enunciado: "A incontinência urinária mista associa perda aos esforços e perda precedida de urgência; por isso, seu tratamento fisioterapêutico deve limitar-se ao fortalecimento do assoalho pélvico, dispensando o componente comportamental.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "limitar-se ao fortalecimento ... dispensando o componente comportamental",
    cognitivo: {
      motivo: "Cobrar a abordagem combinada exigida pela incontinência mista, após definição correta.",
      palavraCritica: "dispensando o componente comportamental",
    },
    comentario: {
      resolucao: "ERRADO. A definição está correta, mas a conduta não. Justamente por reunir dois mecanismos, a incontinência mista exige abordagem combinada: treinamento do assoalho pélvico para o componente de esforço e medidas comportamentais — treinamento vesical, técnicas de inibição da urgência, ajuste de ingestão hídrica e de irritantes vesicais — para o componente de urgência. Tratar só a força deixa metade do problema sem manejo.",
      fundamento: "Manejo conservador da incontinência urinária mista.",
      macete: "Mista tem dois problemas: precisa de força e de reeducação comportamental.",
      erroComum: "Validar o item pela definição correta que o abre.",
      comoBancaPensa: "Abre com conceito exato e fecha restringindo a conduta ao que o candidato mais associa à área."
    }
  },
  {
    id: "FSM-051", disciplina: "Fisioterapia", assunto: "Fisioterapia na gestação", subassunto: "Incontinência urinária gestacional",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.74,
    enunciado: "A perda urinária durante a gestação deve ser considerada fenômeno fisiológico e transitório, não cabendo intervenção fisioterapêutica antes do término do puerpério.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "fenômeno fisiológico e transitório ... não cabendo intervenção ... antes do término do puerpério",
    cognitivo: {
      motivo: "Cobrar a indicação de tratamento durante a própria gestação.",
      palavraCritica: "não cabendo intervenção",
    },
    comentario: {
      resolucao: "ERRADO. A incontinência é frequente na gestação, mas frequência não é sinônimo de normalidade — e a perda urinária gestacional é preditor de incontinência persistente após o parto. O treinamento do assoalho pélvico durante a gestação tem efeito preventivo e terapêutico reconhecido, de modo que adiar a intervenção desperdiça a janela mais favorável.",
      fundamento: "Evidências sobre treinamento do assoalho pélvico no pré-natal.",
      macete: "Comum não é normal. Perda na gestação se trata na gestação.",
      erroComum: "Naturalizar a queixa e postergar a conduta.",
      comoBancaPensa: "Converte alta prevalência em normalidade fisiológica, para justificar a inércia terapêutica."
    }
  },
  {
    id: "FSM-052", disciplina: "Fisioterapia", assunto: "Anatomia funcional do assoalho pélvico", subassunto: "Períneo superficial",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.61,
    enunciado: "Integram o plano superficial do períneo os músculos isquiocavernoso, bulboesponjoso e transverso superficial do períneo, que convergem para o centro tendíneo do períneo.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "isquiocavernoso, bulboesponjoso e transverso superficial ... centro tendíneo",
    cognitivo: {
      motivo: "Cobrar a composição do plano superficial, distinguindo-o do diafragma pélvico.",
      palavraCritica: "centro tendíneo do períneo",
    },
    comentario: {
      resolucao: "CERTO. Esses três músculos formam o plano superficial e convergem para o centro tendíneo (corpo perineal), estrutura fibromuscular entre a vagina e o ânus. É exatamente esse ponto de convergência que a episiotomia e as lacerações de segundo grau comprometem — daí sua importância funcional para a estabilidade do assoalho pélvico e para a continência.",
      fundamento: "Anatomia do períneo feminino — plano superficial e centro tendíneo.",
      macete: "Três superficiais convergem no corpo perineal, o ponto que o parto mais castiga.",
      erroComum: "Confundir o plano superficial com o diafragma pélvico.",
      comoBancaPensa: "Descreve corretamente o plano que costuma ser embaralhado com o profundo."
    }
  },
  {
    id: "FSM-053", disciplina: "Fisioterapia", assunto: "Marco regulatório da especialidade", subassunto: "Ambientes de atuação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.64,
    enunciado: "A atuação do fisioterapeuta especialista em Saúde da Mulher restringe-se ao ambiente ambulatorial, sendo vedado o exercício da especialidade em âmbito hospitalar ou domiciliar.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "restringe-se ao ambiente ambulatorial ... vedado ... hospitalar ou domiciliar",
    cognitivo: {
      motivo: "Cobrar a amplitude dos ambientes de exercício profissional previstos na norma.",
      palavraCritica: "vedado ... hospitalar ou domiciliar",
    },
    comentario: {
      resolucao: "ERRADO. A Resolução COFFITO nº 401/2011 prevê atuação em ambiente hospitalar, ambulatorial e domiciliar, em instituições públicas, privadas, filantrópicas e militares. A prática desmente a restrição: o fisioterapeuta atua no centro obstétrico durante o trabalho de parto, na enfermaria em pós-operatório de cirurgia mamária e no domicílio em assistência puerperal.",
      fundamento: "Resolução COFFITO nº 401/2011, art. 7º.",
      macete: "Hospital, ambulatório e domicílio — a especialidade cabe nos três.",
      erroComum: "Associar a área exclusivamente ao consultório.",
      comoBancaPensa: "Restringe o campo de exercício a um só ambiente, negando os demais."
    }
  },
  {
    id: "FSM-054", disciplina: "Fisioterapia", assunto: "Coloproctologia", subassunto: "Ângulo anorretal",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.62,
    enunciado: "A contração do músculo puborretal acentua o ângulo anorretal, contribuindo para a continência, ao passo que seu relaxamento retifica esse ângulo e facilita a evacuação.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "contração ... acentua o ângulo anorretal ... relaxamento ... retifica",
    cognitivo: {
      motivo: "Contraexemplo: mecanismo do ângulo anorretal descrito no sentido correto.",
      palavraCritica: "relaxamento ... retifica esse ângulo",
    },
    comentario: {
      resolucao: "CERTO. O puborretal envolve a junção anorretal como uma alça: contraído, puxa-a anteriormente e fecha o ângulo, criando barreira mecânica que segura o conteúdo; relaxado, o ângulo se abre e o canal se alinha, permitindo a saída. É esse mecanismo que a posição de cócoras favorece — e cuja falha, na dissinergia, produz constipação obstrutiva.",
      fundamento: "Fisiologia da defecação — papel do músculo puborretal.",
      macete: "Contraiu, dobrou o cano e segurou. Relaxou, endireitou e saiu.",
      erroComum: "Inverter o efeito da contração e do relaxamento sobre o ângulo.",
      comoBancaPensa: "Apresenta corretamente um mecanismo cuja inversão é a armadilha usual."
    }
  },
  {
    id: "FSM-055", disciplina: "Fisioterapia", assunto: "Puerpério", subassunto: "Reabilitação do assoalho pélvico pós-parto",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "Por não haver passagem do feto pelo canal vaginal, a cesariana isenta a mulher de disfunções do assoalho pélvico, o que dispensa a avaliação perineal no puerpério dessas pacientes.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "cesariana isenta ... dispensa a avaliação perineal",
    cognitivo: {
      motivo: "Cobrar que a gestação, por si, já sobrecarrega o assoalho pélvico.",
      palavraCritica: "isenta ... dispensa",
    },
    comentario: {
      resolucao: "ERRADO. A sobrecarga do assoalho pélvico começa na gestação — pelo peso uterino, pelas alterações hormonais e posturais —, e não apenas no parto. Mulheres submetidas a cesariana também apresentam disfunções, ainda que com menor frequência de trauma esfincteriano. Além disso, a cesariana acrescenta suas próprias questões: cicatriz, aderências e repercussão sobre a parede abdominal. A avaliação puerperal é indicada em qualquer via de parto.",
      fundamento: "Repercussões do ciclo grávido-puerperal sobre o assoalho pélvico.",
      macete: "Nove meses de gestação já pesam. Cesariana não é passe livre.",
      erroComum: "Atribuir toda disfunção pélvica exclusivamente ao parto vaginal.",
      comoBancaPensa: "Parte de uma diferença real de risco para concluir isenção e dispensa de avaliação."
    }
  },
  {
    id: "FSM-056", disciplina: "Fisioterapia", assunto: "Disfunções sexuais femininas", subassunto: "Abordagem da dor pélvica crônica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.67,
    enunciado: "A dor pélvica crônica costuma envolver componentes musculoesqueléticos, viscerais e de sensibilização central, o que recomenda abordagem multiprofissional e afasta a expectativa de resolução por meio de recurso isolado.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "musculoesqueléticos, viscerais e de sensibilização central ... abordagem multiprofissional",
    cognitivo: {
      motivo: "Cobrar a natureza multifatorial da dor pélvica crônica e sua consequência prática.",
      palavraCritica: "sensibilização central",
    },
    comentario: {
      resolucao: "CERTO. A dor pélvica crônica raramente tem causa única: somam-se disfunção muscular (com frequência hipertonia), alterações viscerais, fatores hormonais e neuroplasticidade maladaptativa, com amplificação central do estímulo doloroso. Por isso a abordagem combina fisioterapia, manejo médico, apoio psicológico e educação em dor — e prometer resolução com um recurso isolado é irrealista.",
      fundamento: "Modelo biopsicossocial e sensibilização central na dor pélvica crônica.",
      macete: "Dor crônica não tem causa única nem tratamento único.",
      erroComum: "Buscar uma causa periférica única e insistir em recurso isolado.",
      comoBancaPensa: "Item correto e conceitualmente denso, que exige compreensão do modelo de dor crônica."
    }
  },
  {
    id: "FSM-057", disciplina: "Fisioterapia", assunto: "Avaliação do assoalho pélvico", subassunto: "Recrutamento de músculos acessórios",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.71,
    enunciado: "Durante a avaliação da contração do assoalho pélvico, o recrutamento acentuado de glúteos, adutores e abdominais deve ser interpretado como sinal de contração eficiente, por indicar integração da cadeia muscular do tronco.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "recrutamento acentuado de glúteos, adutores e abdominais ... contração eficiente",
    cognitivo: {
      motivo: "Cobrar o significado do recrutamento acessório na avaliação inicial.",
      palavraCritica: "sinal de contração eficiente",
    },
    comentario: {
      resolucao: "ERRADO. O recrutamento acentuado de músculos acessórios em geral indica substituição — a paciente compensa a incapacidade de isolar o assoalho pélvico. Na avaliação, busca-se contração seletiva, e o excesso de coativação é sinal de má dissociação, a ser corrigido com consciência corporal. É verdade que existe sinergia fisiológica com o transverso do abdome, mas isso não converte a compensação evidente em eficiência.",
      fundamento: "Avaliação funcional do assoalho pélvico — contração seletiva e compensações.",
      macete: "Se apertou tudo, provavelmente não apertou o que importa.",
      erroComum: "Ler qualquer coativação como sinergia desejável.",
      comoBancaPensa: "Usa um conceito verdadeiro (sinergia de cadeia) para legitimar um sinal de compensação."
    }
  },
  {
    id: "FSM-058", disciplina: "Fisioterapia", assunto: "Mastologia e oncologia", subassunto: "Compressão no linfedema",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.68,
    enunciado: "Na fase intensiva do tratamento do linfedema, emprega-se preferencialmente a bandagem inelástica multicamadas, e somente após a estabilização do volume se indica a malha compressiva sob medida, própria da fase de manutenção.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "bandagem inelástica multicamadas ... somente após a estabilização do volume ... malha compressiva",
    cognitivo: {
      motivo: "Contraexemplo: sequência terapêutica com 'somente' que corresponde ao protocolo.",
      palavraCritica: "somente após a estabilização do volume",
    },
    comentario: {
      resolucao: "CERTO. A ordem tem razão técnica. Na fase intensiva o volume muda todos os dias, e a bandagem inelástica acompanha essa redução, além de oferecer alta pressão de trabalho com baixa pressão de repouso. A malha sob medida só faz sentido depois que o volume estabiliza — confeccioná-la antes resultaria em peça folgada em poucos dias, com desperdício e perda de eficácia.",
      fundamento: "Terapia complexa descongestiva — fases e recursos de compressão.",
      macete: "Primeiro bandagem, que acompanha a redução. Malha só quando o volume parar de cair.",
      erroComum: "Marcar ERRADO por causa do 'somente', ou indicar malha desde o início.",
      comoBancaPensa: "Usa advérbio de exclusão em sequência terapêutica que realmente não se inverte."
    }
  },
  {
    id: "FSM-059", disciplina: "Fisioterapia", assunto: "Saúde da mulher no SUS", subassunto: "Rede de atenção e acolhimento",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.66,
    enunciado: "Identificada, no atendimento fisioterapêutico, situação sugestiva de violência contra a mulher, cabe ao profissional acolher, registrar em prontuário e acionar a rede de proteção e os fluxos de notificação, e não limitar-se à conduta técnica da queixa apresentada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acolher, registrar em prontuário e acionar a rede de proteção ... fluxos de notificação",
    cognitivo: {
      motivo: "Cobrar o dever assistencial diante de violência, que transcende a queixa técnica.",
      palavraCritica: "e não limitar-se à conduta técnica da queixa apresentada",
    },
    comentario: {
      resolucao: "CERTO. A violência contra a mulher é agravo de notificação compulsória, e todo profissional de saúde integra a rede de proteção. O fisioterapeuta que atende saúde da mulher está em posição sensível — o atendimento é individual, prolongado e envolve exposição corporal, o que favorece o relato. Acolher sem julgamento, registrar objetivamente e acionar os fluxos é conduta profissional, não escolha pessoal.",
      fundamento: "Notificação compulsória de violência interpessoal e rede de atenção à mulher.",
      macete: "Suspeitou de violência: acolhe, registra e notifica. Não é opcional.",
      erroComum: "Entender o tema como alheio à atuação do fisioterapeuta.",
      comoBancaPensa: "Item correto que cobra responsabilidade assistencial além da técnica."
    }
  },
  {
    id: "FSM-060", disciplina: "Fisioterapia", assunto: "Marco regulatório da especialidade", subassunto: "Registro e obtenção do título",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.58,
    enunciado: "A conclusão de curso de pós-graduação em Saúde da Mulher confere automaticamente ao fisioterapeuta o título de especialista, dispensando registro perante o conselho profissional para o uso da denominação.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "automaticamente ... dispensando registro perante o conselho profissional",
    cognitivo: {
      motivo: "Cobrar a distinção entre concluir curso e obter título registrado de especialista.",
      palavraCritica: "automaticamente ... dispensando registro",
    },
    comentario: {
      resolucao: "ERRADO. Concluir a pós-graduação é requisito, não é o título. A condição de especialista depende de reconhecimento e REGISTRO no sistema COFFITO/CREFITO, na forma das resoluções que disciplinam a matéria — pelas vias admitidas, como titulação por prova, por título ou por residência. Anunciar-se especialista sem esse registro configura irregularidade ética, ainda que o curso tenha sido concluído.",
      fundamento: "Resoluções COFFITO sobre reconhecimento e registro de especialidade profissional.",
      macete: "Curso concluído não é título. Especialista é quem tem registro no conselho.",
      erroComum: "Igualar certificado de pós-graduação a título de especialista.",
      comoBancaPensa: "Converte um requisito em consequência automática e suprime a formalidade que a norma exige."
    }
  },

];

QUESTOES.push(...QUESTOES_SESAUAL_LOTE68);
