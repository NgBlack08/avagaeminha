/* =====================================================================
   QUESTLAB — Lote 107: LEGISLAÇÃO INSTITUCIONAL (AL), QAPs DO CURSO DSO
   (módulo 06 — Estatuto da PC-AL e Regime Jurídico Único, Lei 5.247/1991)

   ORIGEM E MÉTODO: os do lote 100. Comentários escritos do zero contra a
   Lei estadual 3.437/1975 (texto compilado), a Lei estadual 5.247/1991 e
   a Constituição Federal.

   ESTATUTO DA PC-AL. Os 40 itens do caderno são de autoria do curso. 22
   repetem ponto e gabarito de itens já no banco (LI-045 a LI-119) e
   entraram como anotação de origem desses itens. Os outros 18 foram
   reescritos com redação própria, mantidos o ponto e o gabarito.

   RJU (LEI 5.247/1991). 20 itens CEBRASPE; 2 já estavam no banco com o
   mesmo texto (LI-154 e LI-156). O caderno não identifica a prova.

   LEI 5.247/1991 — PARTES 3 E 4. 4 itens CESPE 2021 em C/E e 3 itens de
   múltipla escolha (FGV 2018, FGV 2021, FCC 2024) convertidos para C/E.
   Cada um diz na origem qual alternativa foi reescrita.

   OBSERVAÇÕES (o gabarito do QAP foi mantido em todos)
     - Estabilidade em três anos: prevalece a CF, art. 41, sobre o prazo
       do Estatuto de 1975.
     - Inspetor de Polícia: o texto compilado consultado traz só o caput
       do art. 15; o gabarito segue a anotação do material.
     - Ascensão (RJU, 1991): os itens cobram o texto legal; o comentário
       registra a Súmula Vinculante 43.
   ===================================================================== */

const BASE107 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Legislação Institucional (AL)",
};

const QUESTOES_PCAL_LOTE107 = [

  /* ===== ESTATUTO DA PC-AL — CARGOS E REQUISITOS ===== */

  {
    ...BASE107,
    id: "LI-278", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Inspetor de Polícia — requisito de provimento",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Segundo o Estatuto da Polícia Civil de Alagoas, basta a conclusão do ensino médio para o provimento do cargo de Inspetor de Polícia, sendo a graduação em Direito apenas um diferencial, não uma exigência.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "apenas um diferencial",
    cognitivo: {
      motivo: "Lembrar que o Inspetor substitui o Delegado e por isso o cargo pede formação jurídica.",
      palavraCritica: "basta",
    },
    comentario: {
      resolucao: "ERRADO. O gabarito do material apoia-se no parágrafo único do art. 15 do Estatuto, que exige o curso de Direito para o Inspetor de Polícia. A lógica é a das atribuições do cargo: o Inspetor exerce as atribuições do Delegado em suas faltas e impedimentos (art. 15, caput). Observação: a versão compilada consultada traz só o caput do art. 15, na redação da Lei 4.330/1982. Além disso, o cargo está na Parte Suplementar (art. 14, I), cujos cargos se extinguem à medida que vagarem (art. 13, parágrafo único).",
      fundamento: "Lei estadual nº 3.437/1975, arts. 13, parágrafo único, 14, I, e 15.",
      macete: "Inspetor substitui o Delegado, logo pede Direito.",
      erroComum: "Tratar como opcional uma qualificação que o Estatuto exige.",
      comoBancaPensa: "Rebaixa um requisito obrigatório a mera preferência.",
    },
  },

  {
    ...BASE107,
    id: "LI-279", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Escrivão Auxiliar — diligência externa",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Determinado pelo Delegado que o Escrivão Auxiliar de Polícia acompanhe a equipe em diligência externa para lavrar os autos no próprio local, o servidor poderá legitimamente recusar a ordem, uma vez que o Estatuto da PC-AL restringe suas atribuições à escrituração interna do cartório.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "restringe suas atribuições à escrituração interna",
    cognitivo: {
      motivo: "Saber que o trabalho cartorário acompanha a investigação onde ela estiver.",
      palavraCritica: "restringe",
    },
    comentario: {
      resolucao: "ERRADO. O Estatuto não confina o Escrivão Auxiliar ao balcão do cartório. Suas atribuições (art. 17) são de apoio cartorário à atividade de polícia judiciária, o que inclui lavrar autos e termos onde a diligência exigir. A ordem é legal e se insere nas atribuições do cargo. A recusa ofende o dever de obediência e pode configurar falta disciplinar. O Estatuto ainda organiza os cargos por acumulação descendente: o Escrivão executa, quando necessário, as tarefas do Escrivão Auxiliar (art. 16), e não o contrário em sentido restritivo.",
      fundamento: "Lei estadual nº 3.437/1975, arts. 16 e 17.",
      macete: "O cartório vai até a diligência.",
      erroComum: "Ler o nome do cargo como limite geográfico da função.",
      comoBancaPensa: "Cria uma restrição que o Estatuto não prevê.",
    },
  },

  {
    ...BASE107,
    id: "LI-280", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Agente Auxiliar — intimações e busca de informações",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Agente Auxiliar de Polícia que cumpre intimações de testemunhas e realiza busca de informações em investigação extrapola suas atribuições, pois, sendo cargo de nível fundamental, tais tarefas são reservadas ao Agente de Polícia.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "extrapola suas atribuições",
    cognitivo: {
      motivo: "Reconhecer as tarefas típicas de apoio à investigação do Agente Auxiliar.",
      palavraCritica: "extrapola",
    },
    comentario: {
      resolucao: "ERRADO. Intimar testemunhas e levantar informações em investigação estão entre as atribuições básicas do Agente Auxiliar de Polícia (art. 19 do Estatuto). O nível de escolaridade exigido para o cargo não retira essas tarefas do seu rol. O Agente de Polícia (art. 18) pode executar, quando necessário, as atribuições do Agente Auxiliar, mas isso não as torna exclusivas do cargo superior.",
      fundamento: "Lei estadual nº 3.437/1975, arts. 18 e 19.",
      macete: "Intimação e diligência simples: rol do Agente Auxiliar.",
      erroComum: "Presumir que a escolaridade do cargo limita as diligências.",
      comoBancaPensa: "Usa o nível de escolaridade para sugerir uma vedação que não existe.",
    },
  },

  {
    ...BASE107,
    id: "LI-281", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Perito Criminal — curso de Direito e de Perícia",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Candidato ao cargo de Perito Criminal, bacharel em Química, não pode ser eliminado por falta de graduação em Direito, pois, sendo a perícia atividade de natureza científica, o Estatuto da PC-AL se satisfaz com formação técnica na área.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "se satisfaz com formação técnica",
    cognitivo: {
      motivo: "Conhecer o requisito peculiar do art. 21, parágrafo único.",
      palavraCritica: "se satisfaz",
    },
    comentario: {
      resolucao: "ERRADO. O parágrafo único do art. 21 do Estatuto é expresso: para o provimento do cargo de Perito Criminal 'se exige a conclusão do Curso de Direito e de curso em Perícia Criminal, em estabelecimento idôneo'. A formação em Química, sozinha, não atende à lei. O requisito surpreende quem pensa na perícia moderna, mas é o texto do Estatuto. Para o Perito Policial de Local (art. 22), basta o 2º grau mais o curso de Perícia.",
      fundamento: "Lei estadual nº 3.437/1975, arts. 21, parágrafo único, e 22, parágrafo único.",
      macete: "Perito Criminal no Estatuto: Direito + Perícia.",
      erroComum: "Aplicar a lógica das carreiras periciais atuais ao texto de 1975.",
      comoBancaPensa: "Apela ao senso comum científico contra a letra da lei.",
    },
  },

  {
    ...BASE107,
    id: "LI-282", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Guarda de Presídio — outras missões",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "O Guarda de Presídio pode recusar-se a escoltar preso até o hospital quando escalado para vigilância, porque o Estatuto da PC-AL limita suas atribuições às tarefas da escala de serviço.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "limita suas atribuições às tarefas da escala",
    cognitivo: {
      motivo: "Lembrar a cláusula aberta do art. 24.",
      palavraCritica: "limita",
    },
    comentario: {
      resolucao: "ERRADO. O art. 24 do Estatuto, depois de listar as tarefas de guarda e vigilância, atribui ao Guarda de Presídio também 'quando necessário, desempenhar outras missões'. A escolta de preso a hospital é missão compatível com o cargo. A recusa não encontra apoio na lei.",
      fundamento: "Lei estadual nº 3.437/1975, art. 24.",
      macete: "Guarda de Presídio: escala + outras missões quando necessário.",
      erroComum: "Tratar a escala como rol fechado de tarefas.",
      comoBancaPensa: "Ignora a cláusula de abertura do artigo.",
    },
  },

  {
    ...BASE107,
    id: "LI-283", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Dactiloscopista — 2º grau e curso",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "No concurso para Dactiloscopista, é indevida a exigência de graduação superior de candidato que comprovou o ensino médio e o curso oficial de dactiloscopia, porque o Estatuto da PC-AL não pede mais do que isso para o cargo.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "não pede mais do que isso",
    cognitivo: {
      motivo: "Conhecer o requisito do parágrafo único do art. 25.",
      palavraCritica: "indevida",
    },
    comentario: {
      resolucao: "CERTO. O parágrafo único do art. 25 do Estatuto exige, para o Dactiloscopista, a conclusão do ensino de 2º grau ou equivalente e de curso de dactiloscopia. A banca que acrescenta graduação superior cria requisito não previsto em lei. Requisito de acesso a cargo público depende de lei (CF, art. 37, I).",
      fundamento: "Lei estadual nº 3.437/1975, art. 25, parágrafo único; CF, art. 37, I.",
      macete: "Dactiloscopista: 2º grau + curso.",
      erroComum: "Supor que todo cargo policial exige nível superior pelo Estatuto.",
      comoBancaPensa: "Testa se o candidato reconhece um requisito criado fora da lei.",
    },
  },

  /* ===== ESTATUTO DA PC-AL — ESTABILIDADE, TRANSFERÊNCIA E REMOÇÃO ===== */

  {
    ...BASE107,
    id: "LI-284", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Estabilidade — prevalência da CF",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "O policial civil de Alagoas nomeado em virtude de concurso público adquire estabilidade após três anos de efetivo exercício, desde que aprovado no estágio probatório, em que se avaliam requisitos como idoneidade, assiduidade, disciplina e eficiência.",
    gabarito: "C",
    pegadinha: "juris-mais-lei",
    palavraChave: "após três anos",
    cognitivo: {
      motivo: "Saber que o prazo do Estatuto cede ao art. 41 da CF.",
      palavraCritica: "três anos",
    },
    comentario: {
      resolucao: "CERTO. O Estatuto de 1975 fala em prazo menor (art. 55), mas a EC 19/1998 deu ao art. 41 da Constituição a redação que exige três anos de efetivo exercício e avaliação especial de desempenho. A norma constitucional prevalece sobre o texto estadual anterior. Os requisitos avaliados no estágio (idoneidade, assiduidade, pontualidade, disciplina, eficiência) seguem os do Estatuto.",
      fundamento: "CF, art. 41, com a redação da EC 19/1998; Lei estadual nº 3.437/1975, art. 55.",
      macete: "Estabilidade: sempre três anos (CF).",
      erroComum: "Responder com o prazo do texto original do Estatuto.",
      comoBancaPensa: "Mistura a lei estadual antiga com a regra constitucional atual.",
    },
  },

  {
    ...BASE107,
    id: "LI-285", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Transferência — limite de faltas",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Policial civil que acumulou quinze faltas injustificadas, em dias alternados, nos últimos dois anos deve ter indeferido o pedido de transferência para outro cargo de igual vencimento, por expressa vedação do Estatuto da PC-AL.",
    gabarito: "E",
    pegadinha: "troca-numerica",
    palavraChave: "quinze faltas injustificadas, em dias alternados",
    cognitivo: {
      motivo: "Memorizar os números do art. 62: mais de 10 consecutivas ou 20 alternadas.",
      palavraCritica: "quinze",
    },
    comentario: {
      resolucao: "ERRADO. O art. 62 do Estatuto impede a transferência do funcionário que, nos dois anos anteriores, tenha mais de 10 faltas injustificadas consecutivas ou 20 alternadas, ou que tenha sofrido punição disciplinar. Quinze faltas alternadas ficam abaixo do limite de vinte. Por esse motivo, o pedido não precisa ser indeferido.",
      fundamento: "Lei estadual nº 3.437/1975, art. 62.",
      macete: "Transferência barrada: >10 seguidas ou 20 alternadas em 2 anos.",
      erroComum: "Confundir o limite das alternadas com o das consecutivas.",
      comoBancaPensa: "Fica entre os dois números da lei para testar a memória.",
    },
  },

  {
    ...BASE107,
    id: "LI-286", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Remoção a pedido de servidor já punido",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A punição disciplinar sofrida há um ano não impede que o policial civil seja removido, a pedido, para outro órgão da Secretaria de Segurança Pública, desde que atendida a conveniência do serviço.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "não impede que o policial civil seja removido",
    cognitivo: {
      motivo: "Separar remoção (art. 64) de transferência (art. 62).",
      palavraCritica: "removido",
    },
    comentario: {
      resolucao: "CERTO. A punição disciplinar é óbice à transferência (art. 62), não à remoção. A remoção ocorre de um para outro órgão da SSP (art. 63) e pode se dar a pedido do funcionário, atendida a conveniência do serviço (art. 64, II). O Estatuto não lista a punição anterior como impedimento para essa modalidade.",
      fundamento: "Lei estadual nº 3.437/1975, arts. 62, 63 e 64, II.",
      macete: "Punição barra transferência, não remoção.",
      erroComum: "Estender à remoção o impedimento da transferência.",
      comoBancaPensa: "Aposta na confusão entre os dois institutos.",
    },
  },

  {
    ...BASE107,
    id: "LI-287", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Remoção por conveniência da disciplina",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "O policial civil removido de ofício por conveniência da disciplina perde os direitos e vantagens próprios das outras modalidades de remoção, inclusive a gratificação de função policial, ainda que haja claro na lotação de destino.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "inclusive a gratificação de função policial",
    cognitivo: {
      motivo: "Conhecer o art. 65 e seu parágrafo único.",
      palavraCritica: "perde",
    },
    comentario: {
      resolucao: "CERTO. O art. 65 do Estatuto diz que a remoção por conveniência da disciplina acarreta a perda dos direitos e vantagens atribuídos às outras modalidades. O parágrafo único acrescenta a perda da gratificação de função policial. O claro na lotação não altera essa consequência. O art. 66 até dispensa a existência de claro justamente para essa modalidade.",
      fundamento: "Lei estadual nº 3.437/1975, arts. 64, III, 65 e 66.",
      macete: "Remoção disciplinar: perde vantagens e a gratificação.",
      erroComum: "Achar que a existência de vaga preserva as vantagens.",
      comoBancaPensa: "Inclui um dado irrelevante (claro na lotação) para confundir.",
    },
  },

  /* ===== ESTATUTO DA PC-AL — REGIME DISCIPLINAR ===== */

  {
    ...BASE107,
    id: "LI-288", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Dosimetria — reincidência e concurso de policiais",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Na aplicação da pena disciplinar a policial civil que praticou falta de natureza média em conluio com um colega, a Administração deve considerar a reincidência, e o fato de a falta ter sido cometida com o concurso de dois funcionários policiais constitui causa agravante.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "concurso de dois funcionários policiais",
    cognitivo: {
      motivo: "Lembrar os incisos e o parágrafo único do art. 92.",
      palavraCritica: "causa agravante",
    },
    comentario: {
      resolucao: "CERTO. O art. 92 manda considerar, entre outros fatores, os antecedentes e a reincidência (incisos IV e V). O parágrafo único é expresso: é causa agravante a falta cometida com o concurso de dois ou mais funcionários policiais. Dois já bastam.",
      fundamento: "Lei estadual nº 3.437/1975, art. 92, IV e V, e parágrafo único.",
      macete: "Dois policiais juntos: agravante.",
      erroComum: "Achar que a agravante exige três ou mais.",
      comoBancaPensa: "Cobra o número mínimo do parágrafo único.",
    },
  },

  {
    ...BASE107,
    id: "LI-289", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Detenção disciplinar — quem ordena",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "É válida a ordem escrita de Delegado de Polícia que impõe a subordinado detenção disciplinar de dez dias em sala especial da SSP, porquanto o Estatuto da PC-AL permite que qualquer autoridade de direção policial determine essa medida.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "qualquer autoridade de direção policial",
    cognitivo: {
      motivo: "Associar a conversão em detenção ao Secretário e ao Governador.",
      palavraCritica: "qualquer",
    },
    comentario: {
      resolucao: "ERRADO. A conversão da suspensão em detenção disciplinar depende de ordem escrita do Secretário de Segurança Pública ou do Governador (art. 96). Pelo art. 109, Chefe de Gabinete, Diretores de Departamento e Corregedor Geral só aplicam detenção até 5 dias (inciso III). Os Delegados, em geral, aplicam apenas repreensão e suspensão até 10 dias (inciso IV). O Delegado não tem competência para a detenção de dez dias.",
      fundamento: "Lei estadual nº 3.437/1975, arts. 96 e 109, III e IV.",
      macete: "Detenção: Secretário ou Governador; Diretores até 5 dias; Delegado nunca.",
      erroComum: "Supor que toda chefia policial pode deter.",
      comoBancaPensa: "Generaliza uma competência que a lei distribui por escalão.",
    },
  },

  {
    ...BASE107,
    id: "LI-290", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Diretor de Departamento — limite da suspensão",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "É nula, por incompetência, a suspensão de vinte e cinco dias aplicada por Diretor de Departamento a policial civil subordinado.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "vinte e cinco dias",
    cognitivo: {
      motivo: "Lembrar o teto de 20 dias do art. 109, III.",
      palavraCritica: "nula",
    },
    comentario: {
      resolucao: "CERTO. O art. 109, III, permite ao Chefe de Gabinete da SSP, aos Diretores de Departamento e ao Corregedor Geral aplicar repreensão, suspensão até 20 dias e detenção disciplinar até 5 dias. Vinte e cinco dias ultrapassam o limite da competência. Além disso, suspensão acima de 15 dias depende de processo disciplinar prévio (art. 115).",
      fundamento: "Lei estadual nº 3.437/1975, arts. 109, III, e 115.",
      macete: "Diretores: suspensão até 20; Delegados: até 10.",
      erroComum: "Esquecer que a competência do Diretor tem teto.",
      comoBancaPensa: "Põe o número logo acima do limite.",
    },
  },

  {
    ...BASE107,
    id: "LI-291", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Detenção disciplinar — sala especial e vencimentos",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Policial civil que cumpre detenção disciplinar de vinte dias, por ordem escrita do Secretário de Segurança Pública, recolhido em sala especial na sede da SSP, sem prejuízo de seus vencimentos, cumpre a medida em conformidade com o Estatuto da PC-AL.",
    gabarito: "C",
    pegadinha: "verdade-mais-falso",
    palavraChave: "sem prejuízo de seus vencimentos",
    cognitivo: {
      motivo: "Lembrar que a detenção não tira vencimentos.",
      palavraCritica: "sem prejuízo",
    },
    comentario: {
      resolucao: "CERTO. O Secretário de Segurança Pública é uma das autoridades que podem ordenar, por escrito, a conversão da suspensão em detenção (art. 96, caput). Detenção acima de quarenta e oito horas é cumprida em sala especial na sede da SSP ou em repartição designada (§ 2º, II). A detenção não acarreta perda de vencimentos (§ 2º). O prazo não pode exceder o limite do art. 94, e vinte dias estão dentro dele.",
      fundamento: "Lei estadual nº 3.437/1975, arts. 94 e 96, caput e § 2º.",
      macete: "Detenção: sem perda de vencimentos.",
      erroComum: "Achar que toda pena disciplinar corta a remuneração.",
      comoBancaPensa: "Testa a ressalva sobre os vencimentos, que contraria a intuição.",
    },
  },

  {
    ...BASE107,
    id: "LI-292", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Detenção de até 48 horas — residência",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Viola o Estatuto da PC-AL o cumprimento, na residência do policial, de detenção disciplinar de quarenta e oito horas, visto que toda detenção deve ser cumprida em repartição policial designada.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "toda detenção",
    cognitivo: {
      motivo: "Lembrar a regra das 48 horas do art. 96, § 2º, I.",
      palavraCritica: "toda",
    },
    comentario: {
      resolucao: "ERRADO. O art. 96, § 2º, I, manda cumprir a detenção na residência do funcionário quando ela não exceder de quarenta e oito horas. Apenas acima disso ela vai para sala especial na SSP ou repartição designada (inciso II). Quarenta e oito horas em casa é exatamente o que a lei prevê.",
      fundamento: "Lei estadual nº 3.437/1975, art. 96, § 2º, I e II.",
      macete: "Até 48 h: em casa.",
      erroComum: "Esquecer a modalidade domiciliar da detenção.",
      comoBancaPensa: "Usa 'toda' para apagar a exceção legal.",
    },
  },

  {
    ...BASE107,
    id: "LI-293", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Detenção preventiva — limite de 5 dias",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Configura insubordinação grave a recusa do policial civil em cumprir detenção disciplinar preventiva de sete dias determinada pelo Corregedor Geral de Polícia.",
    gabarito: "E",
    pegadinha: "troca-numerica",
    palavraChave: "sete dias",
    cognitivo: {
      motivo: "Conhecer o teto de 5 dias da detenção preventiva (art. 101).",
      palavraCritica: "sete dias",
    },
    comentario: {
      resolucao: "ERRADO. O art. 101 permite que Chefe de Gabinete, Corregedor e Diretores ordenem detenção preventiva por até 5 dias. A recusa a ordem legal de detenção é insubordinação grave (art. 102). Uma ordem de sete dias, porém, excede a competência do Corregedor, e o item trata como insubordinação grave a recusa de uma ordem fora do limite legal. O material marca ERRADO por esse motivo.",
      fundamento: "Lei estadual nº 3.437/1975, arts. 101 e 102.",
      macete: "Preventiva pelo Corregedor: até 5 dias.",
      erroComum: "Lembrar só da consequência da recusa e esquecer o teto.",
      comoBancaPensa: "Prende o candidato na regra da insubordinação e esconde o erro no número.",
    },
  },

  {
    ...BASE107,
    id: "LI-294", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Demissão — processo e competência",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "O Secretário de Segurança Pública pode aplicar diretamente a pena de demissão a policial civil acusado de abandono de cargo, dispensado o processo disciplinar, por ser autoridade competente para impor essa penalidade.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "dispensado o processo disciplinar",
    cognitivo: {
      motivo: "Lembrar o art. 115 e a competência privativa do Governador.",
      palavraCritica: "diretamente",
    },
    comentario: {
      resolucao: "ERRADO. Há dois erros. Primeiro, o processo disciplinar precede obrigatoriamente a demissão (art. 115). Segundo, a demissão é de competência privativa do Governador (art. 109, I). O Secretário pode aplicar penas em todos os casos, salvo demissão e cassação de aposentadoria ou disponibilidade (art. 109, II). A CF, art. 41, § 1º, também exige processo com ampla defesa para o servidor estável.",
      fundamento: "Lei estadual nº 3.437/1975, arts. 109, I e II, e 115; CF, art. 41, § 1º.",
      macete: "Demissão: processo prévio + Governador.",
      erroComum: "Achar que o Secretário pode demitir por ser a autoridade máxima da pasta.",
      comoBancaPensa: "Empilha dois erros numa só frase.",
    },
  },

  {
    ...BASE107,
    id: "LI-295", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Comissão de Disciplina — dedicação e destituição",
    origem: "Item inédito do QAP DSO (2026) — QAP DSO (Legislação), gabarito do material; item de autoria do curso, reescrito aqui com redação própria (mesmo ponto e mesmo gabarito)",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Os membros da Comissão de Disciplina dedicam-se exclusivamente aos trabalhos do colegiado, com dispensa de outras funções, e podem ser destituídos se agirem com desídia ou forem indiciados.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "desídia ou forem indiciados",
    cognitivo: {
      motivo: "Conhecer os arts. 121 e 122.",
      palavraCritica: "destituídos",
    },
    comentario: {
      resolucao: "CERTO. O art. 121 exige dos membros da comissão dedicação exclusiva aos trabalhos, com dispensa das demais atribuições. O art. 122 prevê a destituição do membro que agir com desídia ou vier a ser indiciado. O item reproduz os dois comandos.",
      fundamento: "Lei estadual nº 3.437/1975, arts. 121 e 122.",
      macete: "Comissão: dedicação exclusiva; desídia ou indiciamento = sai.",
      erroComum: "Achar que a dedicação é parcial.",
      comoBancaPensa: "Reproduz a lei para checar se o candidato desconfia sem motivo.",
    },
  },

  /* ===== RJU (LEI 5.247/1991) — PROVIMENTO E VACÂNCIA ===== */

  {
    ...BASE107,
    id: "LI-296", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Remoção — com ou sem mudança de sede",
    origem: "CEBRASPE - 2023 (prova não identificada no caderno) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Com base no Regime Jurídico Único dos Servidores Públicos Civis do Estado de Alagoas, caracteriza-se como remoção o ato de deslocar um servidor do estado de Alagoas para outra localidade de trabalho, no âmbito da unidade setorial em que seja especificamente lotado, sem mudança de sede.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "sem mudança de sede",
    cognitivo: {
      motivo: "Lembrar a definição: deslocamento no mesmo quadro, com ou sem mudança de sede.",
      palavraCritica: "sem mudança de sede",
    },
    comentario: {
      resolucao: "ERRADO. A remoção é o deslocamento do servidor, a pedido ou de ofício, no âmbito do mesmo quadro, com ou sem mudança de sede. O item restringe a remoção à hipótese sem mudança de sede e a limita à unidade setorial de lotação. As duas restrições não estão na definição legal.",
      fundamento: "Lei estadual nº 5.247/1991 (remoção).",
      macete: "Remoção: mesmo quadro, com ou sem mudança de sede.",
      erroComum: "Achar que a mudança de cidade descaracteriza a remoção.",
      comoBancaPensa: "Corta metade da definição legal.",
    },
  },

  {
    ...BASE107,
    id: "LI-297", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Licença por doença em pessoa da família — atividade remunerada",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "Com base na Lei n.º 5.247/1991, servidor público civil que estiver em gozo de licença por motivo de doença em pessoa da família não poderá exercer qualquer atividade remunerada, mas poderá exercê-la se a licença for por motivo de afastamento de cônjuge.",
    gabarito: "C",
    pegadinha: "verdade-mais-falso",
    palavraChave: "poderá exercê-la se a licença for por motivo de afastamento de cônjuge",
    cognitivo: {
      motivo: "Saber que a vedação de atividade remunerada é própria da licença por doença em família.",
      palavraCritica: "não poderá",
    },
    comentario: {
      resolucao: "CERTO. Na licença por motivo de doença em pessoa da família, o RJU veda o exercício de atividade remunerada durante o afastamento. A justificativa é que a licença existe para o servidor prestar assistência. Na licença por afastamento do cônjuge, que acompanha o deslocamento do companheiro, não há essa vedação. O servidor pode trabalhar no novo local.",
      fundamento: "Lei estadual nº 5.247/1991 (licenças por doença em pessoa da família e por afastamento do cônjuge).",
      macete: "Cuidar do doente: não trabalha fora. Acompanhar o cônjuge: pode trabalhar.",
      erroComum: "Estender a vedação a todas as licenças.",
      comoBancaPensa: "Compara duas licenças com regimes diferentes.",
    },
  },

  {
    ...BASE107,
    id: "LI-298", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Exoneração com débito — 60 dias e dívida ativa",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Servidor público civil que estiver em débito com o erário e requerer a exoneração do cargo que ocupa não poderá deixar de ser exonerado pelo seu débito; a ele será dado o prazo de sessenta dias para quitação do débito, sob pena de ser inscrito em dívida ativa.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "sessenta dias",
    cognitivo: {
      motivo: "Saber que o débito não impede a exoneração.",
      palavraCritica: "não poderá deixar de ser exonerado",
    },
    comentario: {
      resolucao: "CERTO. O débito com o erário não é obstáculo à exoneração. O RJU dá ao servidor exonerado (ou demitido) em débito o prazo de sessenta dias para quitá-lo; não pago, o débito é inscrito em dívida ativa. A cobrança segue pelas vias próprias, sem prender o servidor ao cargo.",
      fundamento: "Lei estadual nº 5.247/1991 (reposições e indenizações ao erário).",
      macete: "Deve ao erário? Sai do cargo e tem 60 dias para pagar.",
      erroComum: "Pensar que a Administração pode reter o servidor até a quitação.",
      comoBancaPensa: "Testa se o candidato aceita o débito como impedimento.",
    },
  },

  {
    ...BASE107,
    id: "LI-299", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Reprovação no estágio — recondução, não aproveitamento",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Se um servidor público civil não for aprovado em estágio probatório no cargo público em que tenha tomado posse, poderá ocorrer o seu aproveitamento, se anteriormente ele ocupava cargo efetivo.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "aproveitamento",
    cognitivo: {
      motivo: "Separar recondução (volta ao cargo anterior) de aproveitamento (retorno do servidor em disponibilidade).",
      palavraCritica: "aproveitamento",
    },
    comentario: {
      resolucao: "ERRADO. O servidor estável reprovado no estágio de outro cargo é reconduzido ao cargo anteriormente ocupado. Isso é recondução. Aproveitamento é o retorno à atividade do servidor posto em disponibilidade, em cargo de atribuições e vencimentos compatíveis. O item troca um instituto pelo outro.",
      fundamento: "Lei estadual nº 5.247/1991 (formas de provimento: recondução e aproveitamento).",
      macete: "Reprovou no estágio: RECONDUÇÃO. Estava em disponibilidade: APROVEITAMENTO.",
      erroComum: "Confundir as formas de provimento derivado.",
      comoBancaPensa: "Troca o nome do instituto e mantém a situação.",
    },
  },

  {
    ...BASE107,
    id: "LI-300", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Reversão — limite de 70 anos",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Suponha que determinado servidor público civil, ao completar 69 anos de idade, tenha sido aposentado por invalidez, e que, três anos depois, a junta médica oficial tenha declarado insubsistentes os motivos da aposentadoria. Nessa situação, deverá ocorrer a reversão do servidor no mesmo cargo.",
    gabarito: "E",
    pegadinha: "troca-numerica",
    palavraChave: "três anos depois",
    cognitivo: {
      motivo: "Fazer a conta: 69 + 3 = 72, acima do limite de 70.",
      palavraCritica: "deverá",
    },
    comentario: {
      resolucao: "ERRADO. A reversão é o retorno à atividade do aposentado por invalidez quando a junta médica declara insubsistentes os motivos da aposentadoria. O RJU, porém, não admite reversão do aposentado que já tenha completado setenta anos, idade da aposentadoria compulsória. Aos setenta e dois anos, a reversão não pode ocorrer.",
      fundamento: "Lei estadual nº 5.247/1991 (reversão); CF, art. 40, § 1º, II.",
      macete: "Reversão: só antes dos 70.",
      erroComum: "Ler o enunciado sem fazer a conta da idade.",
      comoBancaPensa: "Esconde o erro numa conta simples.",
    },
  },

  {
    ...BASE107,
    id: "LI-301", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Vantagens — o que se incorpora",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Servidor público civil que receba indenização, gratificação e adicionais terá somente essas duas últimas vantagens incorporadas ao seu vencimento.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "somente essas duas últimas",
    cognitivo: {
      motivo: "Lembrar que indenizações não se incorporam.",
      palavraCritica: "somente",
    },
    comentario: {
      resolucao: "CERTO. O RJU (art. 59) separa as vantagens: as indenizações não se incorporam ao vencimento ou provento para nenhum efeito, e as gratificações e os adicionais incorporam-se nos casos e condições indicados em lei. O item, portanto, está certo ao excluir a indenização. A incorporação de gratificações e adicionais depende da lei.",
      fundamento: "Lei estadual nº 5.247/1991, art. 59.",
      macete: "Indenização nunca incorpora.",
      erroComum: "Achar que nada se incorpora ou que tudo se incorpora.",
      comoBancaPensa: "Usa 'somente' para parecer restritivo, mas a restrição é correta.",
    },
  },

  {
    ...BASE107,
    id: "LI-302", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Demissão invalidada — reintegração",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Servidor público do estado de Alagoas que tiver sido demitido por decisão administrativa, mas que conseguir, judicialmente, tornar inválida a sua demissão, deverá ser reconduzido ao cargo que ocupava ou, caso este tenha sido extinto, a outro de mesmo nível hierárquico.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "reconduzido",
    cognitivo: {
      motivo: "Associar invalidação da demissão a reintegração.",
      palavraCritica: "reconduzido",
    },
    comentario: {
      resolucao: "ERRADO. Invalidada a demissão por decisão administrativa ou judicial, o servidor é reintegrado ao cargo anteriormente ocupado, com ressarcimento das vantagens. Se o cargo tiver sido extinto, ele fica em disponibilidade. Recondução é outra coisa: retorno ao cargo anterior por reprovação em estágio ou por reintegração do anterior ocupante.",
      fundamento: "Lei estadual nº 5.247/1991 (reintegração e recondução); CF, art. 41, § 2º.",
      macete: "Demissão anulada: REINTEGRAÇÃO.",
      erroComum: "Usar 'recondução' para o retorno após anulação.",
      comoBancaPensa: "Troca o instituto e o destino em caso de extinção.",
    },
  },

  {
    ...BASE107,
    id: "LI-303", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Estágio probatório — fatores",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "A capacidade de iniciativa é objeto de avaliação de desempenho do servidor público civil durante o estágio probatório.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "capacidade de iniciativa",
    cognitivo: {
      motivo: "Lembrar a lista: assiduidade, disciplina, capacidade de iniciativa, produtividade, responsabilidade.",
      palavraCritica: "capacidade de iniciativa",
    },
    comentario: {
      resolucao: "CERTO. Entre os fatores avaliados no estágio probatório estão assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade. A capacidade de iniciativa está expressamente na lista.",
      fundamento: "Lei estadual nº 5.247/1991 (estágio probatório).",
      macete: "Estágio: A-D-C-P-R (assiduidade, disciplina, capacidade de iniciativa, produtividade, responsabilidade).",
      erroComum: "Desconfiar de um fator por soar subjetivo.",
      comoBancaPensa: "Reproduz um dos fatores da lista.",
    },
  },

  {
    ...BASE107,
    id: "LI-304", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Estágio probatório — licenças admitidas",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Servidor público civil que estiver em estágio probatório não poderá entrar em licença para o trato de assuntos particulares, mas poderá gozar de licença para atividade política, caso se candidate a cargo eletivo.",
    gabarito: "C",
    pegadinha: "verdade-mais-falso",
    palavraChave: "poderá gozar de licença para atividade política",
    cognitivo: {
      motivo: "Saber que a licença para interesses particulares exige estabilidade.",
      palavraCritica: "não poderá",
    },
    comentario: {
      resolucao: "CERTO. A licença para tratar de interesses particulares só é concedida ao servidor estável (art. 94). Quem está em estágio probatório não a obtém. Já a licença para atividade política (art. 90) pode ser gozada durante o estágio, que fica suspenso no período.",
      fundamento: "Lei estadual nº 5.247/1991, arts. 90 e 94.",
      macete: "Interesse particular: só estável. Atividade política: cabe no estágio.",
      erroComum: "Achar que nenhuma licença cabe no estágio.",
      comoBancaPensa: "Contrapõe duas licenças com regras opostas.",
    },
  },

  {
    ...BASE107,
    id: "LI-305", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Posse — nomeação e ascensão",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "Para o provimento de cargos públicos no estado de Alagoas, a posse ocorre nos casos de nomeação e reintegração, mas não nos casos de ascensão.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "reintegração",
    cognitivo: {
      motivo: "Lembrar que a posse acompanha nomeação e ascensão, não a reintegração.",
      palavraCritica: "mas não nos casos de ascensão",
    },
    comentario: {
      resolucao: "ERRADO. Pelo art. 13 do RJU, só há posse nos casos de provimento por nomeação e por ascensão. A reintegração é retorno ao cargo já ocupado, sem nova posse. O item inverte as duas hipóteses. Observação: a ascensão consta do texto de 1991, mas o STF a considera inconstitucional (Súmula Vinculante 43).",
      fundamento: "Lei estadual nº 5.247/1991, art. 13; STF, Súmula Vinculante 43.",
      macete: "Posse: nomeação (e ascensão, no texto de 1991).",
      erroComum: "Associar posse a qualquer forma de provimento.",
      comoBancaPensa: "Troca a forma que tem posse pela que não tem.",
    },
  },

  {
    ...BASE107,
    id: "LI-306", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Exoneração de ofício",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A exoneração de cargo efetivo poderá ser efetivada de ofício pela administração.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "de ofício",
    cognitivo: {
      motivo: "Lembrar as hipóteses de exoneração de ofício (estágio, não entrada em exercício).",
      palavraCritica: "de ofício",
    },
    comentario: {
      resolucao: "CERTO. A exoneração de cargo efetivo dá-se a pedido do servidor ou de ofício. A de ofício ocorre, por exemplo, quando o servidor não satisfaz as condições do estágio probatório ou quando, tendo tomado posse, não entra em exercício no prazo. Exoneração não é penalidade, por isso cabe também por iniciativa da Administração.",
      fundamento: "Lei estadual nº 5.247/1991 (exoneração).",
      macete: "Exoneração: a pedido ou de ofício.",
      erroComum: "Confundir exoneração de ofício com demissão.",
      comoBancaPensa: "Testa se o candidato acha que só o servidor pede exoneração.",
    },
  },

  {
    ...BASE107,
    id: "LI-307", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Aposentado por invalidez — reversão",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Considera-se reintegrado o servidor que, aposentado por invalidez, houver tido os motivos de sua aposentadoria declarados insubsistentes por junta médica oficial.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "reintegrado",
    cognitivo: {
      motivo: "Associar o retorno do aposentado à reversão.",
      palavraCritica: "reintegrado",
    },
    comentario: {
      resolucao: "ERRADO. O retorno à atividade do aposentado por invalidez cujos motivos foram declarados insubsistentes é a reversão. Reintegração é o retorno do servidor cuja demissão foi invalidada.",
      fundamento: "Lei estadual nº 5.247/1991 (reversão e reintegração).",
      macete: "Aposentado que volta: REVERSÃO.",
      erroComum: "Trocar reversão por reintegração.",
      comoBancaPensa: "Troca o rótulo do instituto.",
    },
  },

  /* ===== RJU (LEI 5.247/1991) — VANTAGENS ===== */

  {
    ...BASE107,
    id: "LI-308", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Insalubridade e periculosidade — cessação",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Os adicionais de insalubridade e periculosidade incorporam-se à remuneração do servidor, ainda que cessadas as condições que os tenham ensejado.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "ainda que cessadas",
    cognitivo: {
      motivo: "Lembrar que são adicionais propter laborem.",
      palavraCritica: "incorporam-se",
    },
    comentario: {
      resolucao: "ERRADO. Os adicionais de insalubridade e periculosidade são pagos enquanto durar a exposição ao agente nocivo ou ao risco. Cessadas as condições que os ensejaram, cessa o pagamento. São vantagens propter laborem, ligadas à condição do trabalho, e não se incorporam. O banco já tem o mesmo ponto em redação afirmativa (LI-155).",
      fundamento: "Lei estadual nº 5.247/1991 (adicionais de insalubridade e periculosidade).",
      macete: "Acabou o risco, acabou o adicional.",
      erroComum: "Achar que todo adicional se incorpora.",
      comoBancaPensa: "Transforma vantagem condicional em definitiva.",
    },
  },

  /* ===== RJU (LEI 5.247/1991) — PROVIMENTO E VACÂNCIA ===== */

  {
    ...BASE107,
    id: "LI-309", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Nomeação — efetivo e em comissão",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A nomeação restringe-se aos cargos de provimento efetivo.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "restringe-se",
    cognitivo: {
      motivo: "Lembrar a nomeação em comissão.",
      palavraCritica: "restringe-se",
    },
    comentario: {
      resolucao: "ERRADO. O art. 9º do RJU prevê a nomeação em caráter efetivo, para cargo isolado ou de carreira, e em comissão, para cargo de confiança de livre nomeação e exoneração. Só a primeira exige concurso público.",
      fundamento: "Lei estadual nº 5.247/1991, art. 9º.",
      macete: "Nomeia-se para efetivo e para comissão.",
      erroComum: "Associar nomeação exclusivamente a concurso.",
      comoBancaPensa: "Restringe o alcance do instituto.",
    },
  },

  /* ===== RJU (LEI 5.247/1991) — VANTAGENS ===== */

  {
    ...BASE107,
    id: "LI-310", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Gratificação de função — magistério",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "A gratificação de função é devida aos ocupantes de cargo de magistério que exerçam função de direção de escola e aos que exerçam as funções próprias do cargo em condições especiais, como em escolas classificadas como de difícil lotação ou em classes especiais.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "difícil lotação",
    cognitivo: {
      motivo: "Conhecer a hipótese de gratificação de função do magistério estadual.",
      palavraCritica: "é devida",
    },
    comentario: {
      resolucao: "CERTO. O RJU de Alagoas (art. 66, I, conforme a anotação do material) prevê a gratificação de função para o magistério nas duas situações do item: quando o professor exerce a direção de escola e quando exerce as funções do cargo em condições especiais, como em escolas de difícil lotação ou em classes especiais. É regra específica do estatuto alagoano, sem correspondente na Lei 8.112/1990.",
      fundamento: "Lei estadual nº 5.247/1991, art. 66, I.",
      macete: "Magistério: direção de escola ou condição especial.",
      erroComum: "Descartar o item por não reconhecer a regra na Lei 8.112.",
      comoBancaPensa: "Cobra um detalhe próprio da lei estadual.",
    },
  },

  {
    ...BASE107,
    id: "LI-311", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Vencimento x remuneração",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Vencimento consiste na retribuição pecuniária pelo exercício do cargo público acrescida das vantagens pecuniárias permanentes estabelecidas em lei.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "acrescida das vantagens",
    cognitivo: {
      motivo: "Separar vencimento (base) de remuneração (base + vantagens).",
      palavraCritica: "acrescida",
    },
    comentario: {
      resolucao: "ERRADO. Vencimento é a retribuição pecuniária pelo exercício do cargo, com valor fixado em lei. Somado às vantagens pecuniárias permanentes, forma a remuneração. O item atribui ao vencimento a definição de remuneração.",
      fundamento: "Lei estadual nº 5.247/1991 (vencimento e remuneração).",
      macete: "Vencimento + vantagens = remuneração.",
      erroComum: "Usar os dois termos como sinônimos.",
      comoBancaPensa: "Troca a definição de um conceito pela do vizinho.",
    },
  },

  {
    ...BASE107,
    id: "LI-312", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Nomeação originária; promoção e ascensão derivadas",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "A nomeação é a forma originária de provimento dos cargos públicos, sendo formas derivadas a promoção e a ascensão.",
    gabarito: "C",
    pegadinha: "juris-mais-lei",
    palavraChave: "ascensão",
    cognitivo: {
      motivo: "Reconhecer a classificação do texto de 1991.",
      palavraCritica: "formas derivadas",
    },
    comentario: {
      resolucao: "CERTO. Pelo RJU, a nomeação é a forma originária de provimento; a promoção e a ascensão são formas derivadas, porque pressupõem vínculo anterior. Observação: o item reflete a redação de 1991. O STF considera inconstitucional a ascensão, por permitir ingresso em outra carreira sem concurso (Súmula Vinculante 43). A classificação legal, porém, é a cobrada.",
      fundamento: "Lei estadual nº 5.247/1991, arts. 7º e seguintes; STF, Súmula Vinculante 43.",
      macete: "Originária: nomeação. Derivadas: o resto.",
      erroComum: "Marcar errado só por lembrar da inconstitucionalidade da ascensão.",
      comoBancaPensa: "Cobra o texto legal, não a jurisprudência.",
    },
  },

  {
    ...BASE107,
    id: "LI-313", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Remoção de ofício — limite do quadro",
    origem: "CEBRASPE - 2021 (prova não identificada no caderno; mesmo bloco de LI-154 e LI-156) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A remoção de ofício poderá se dar entre órgãos distintos e de poderes diferentes.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "de poderes diferentes",
    cognitivo: {
      motivo: "Lembrar que a remoção ocorre no âmbito do mesmo quadro.",
      palavraCritica: "poderes diferentes",
    },
    comentario: {
      resolucao: "ERRADO. A remoção é deslocamento no âmbito do mesmo quadro. Não serve para levar o servidor a órgão de outro Poder, o que significaria mudar de quadro sem a forma de provimento adequada. A remoção de ofício atende ao interesse da Administração, mas dentro desse limite.",
      fundamento: "Lei estadual nº 5.247/1991 (remoção).",
      macete: "Remoção: dentro do mesmo quadro.",
      erroComum: "Confundir remoção com cessão ou redistribuição.",
      comoBancaPensa: "Expande o alcance do instituto.",
    },
  },

  /* ===== RJU (LEI 5.247/1991) — DEVERES E REGIME DISCIPLINAR ===== */

  {
    ...BASE107,
    id: "LI-314", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Deveres — legalidade e moralidade",
    origem: "CESPE - 2021 (prova não identificada no caderno) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O agente público deve observar as normas estaduais de natureza legal e regulamentar, e seu comportamento deve ser pautado pela moralidade administrativa e pelo elemento ético de conduta.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "elemento ético de conduta",
    cognitivo: {
      motivo: "Reconhecer os deveres básicos de legalidade e moralidade.",
      palavraCritica: "deve",
    },
    comentario: {
      resolucao: "CERTO. Observar as normas legais e regulamentares é dever expresso do servidor no RJU (art. 118). A moralidade administrativa é princípio constitucional (CF, art. 37, caput). O item junta o dever legal e o princípio sem distorção.",
      fundamento: "Lei estadual nº 5.247/1991, art. 118; CF, art. 37, caput.",
      macete: "Lei + moral: deveres do servidor.",
      erroComum: "Desconfiar de um item genérico e correto.",
      comoBancaPensa: "Reproduz um dever básico.",
    },
  },

  {
    ...BASE107,
    id: "LI-315", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Representação contra abuso de poder",
    origem: "CESPE - 2021 (prova não identificada no caderno) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Na hipótese de abuso de poder, o servidor deverá encaminhar representação a ser apreciada pela autoridade superior ao agente que praticou o ato abusivo e contra o qual foi elaborada a representação.",
    gabarito: "C",
    pegadinha: "troca-sujeito",
    palavraChave: "autoridade superior",
    cognitivo: {
      motivo: "Lembrar que a representação vai pela via hierárquica e é apreciada por quem está acima do representado.",
      palavraCritica: "autoridade superior",
    },
    comentario: {
      resolucao: "CERTO. É dever do servidor representar contra ilegalidade, omissão ou abuso de poder (art. 118, XII). Pelo parágrafo único, a representação é encaminhada pela via hierárquica e apreciada pela autoridade superior àquela contra a qual é formulada, assegurado o direito de defesa. Abuso de poder abrange excesso e desvio de poder.",
      fundamento: "Lei estadual nº 5.247/1991, art. 118, XII e parágrafo único.",
      macete: "Representação: julga quem está acima do representado.",
      erroComum: "Achar que a própria autoridade representada aprecia.",
      comoBancaPensa: "Testa quem é a autoridade competente.",
    },
  },

  {
    ...BASE107,
    id: "LI-316", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Vedação — alterar ou deturpar documentos",
    origem: "CESPE - 2021 (prova não identificada no caderno) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A alteração ou a deturpação do teor de documentos que deveriam ter determinado encaminhamento constituem práticas vedadas ao servidor público.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "deturpação do teor de documentos",
    cognitivo: {
      motivo: "Reconhecer a vedação clássica das normas de conduta.",
      palavraCritica: "vedadas",
    },
    comentario: {
      resolucao: "CERTO. Alterar ou deturpar o teor de documentos que deva encaminhar para providências é vedação expressa das normas de conduta do servidor. Está no Decreto federal 1.171/1994 (XV, 'h') e é reproduzida pelos códigos e estatutos estaduais. Além de falta disciplinar, a conduta pode configurar crime de falsidade.",
      fundamento: "Normas de conduta do servidor público; Decreto 1.171/1994, XV, 'h'.",
      macete: "Mexer no conteúdo do documento: vedado.",
      erroComum: "Achar que só o extravio é vedado.",
      comoBancaPensa: "Reproduz a vedação.",
    },
  },

  {
    ...BASE107,
    id: "LI-317", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Deveres x vedações — procrastinação",
    origem: "CESPE - 2021 (prova não identificada no caderno) — QAP DSO (Legislação), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Entre o conjunto de deveres fundamentais do servidor público incluem-se o tratamento cuidadoso dos usuários dos serviços públicos estaduais e a procrastinação do exercício regular de direito por qualquer pessoa.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "procrastinação",
    cognitivo: {
      motivo: "Reconhecer a vedação infiltrada na lista de deveres.",
      palavraCritica: "procrastinação",
    },
    comentario: {
      resolucao: "ERRADO. Tratar com cuidado os usuários é dever do servidor. Procrastinar ou dificultar o exercício regular de direito por qualquer pessoa é o oposto: é conduta vedada, que causa dano moral ao usuário. O item põe uma proibição dentro da lista de deveres.",
      fundamento: "Normas de conduta do servidor público; Decreto 1.171/1994, XV, 'd'.",
      macete: "Procrastinar direito alheio: proibido.",
      erroComum: "Ler só a primeira metade do item.",
      comoBancaPensa: "Primeira parte verdadeira, segunda falsa.",
    },
  },

  {
    ...BASE107,
    id: "LI-318", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Sindicância — resultados possíveis",
    origem: "FGV - 2018 (prova não identificada no caderno) — QAP DSO (Legislação), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'A'",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "De acordo com a Lei estadual n.º 5.247/1991, da sindicância administrativa pode resultar o arquivamento do processo, a aplicação de penalidade de advertência ou de suspensão de até trinta dias, ou a instauração de processo disciplinar.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "até trinta dias",
    cognitivo: {
      motivo: "Lembrar os três desfechos da sindicância.",
      palavraCritica: "trinta dias",
    },
    comentario: {
      resolucao: "CERTO. Pelo art. 157 do RJU, da sindicância pode resultar arquivamento, aplicação de advertência ou suspensão de até trinta dias, ou instauração de processo disciplinar. Penas mais graves exigem o PAD. É a alternativa correta da questão original.",
      fundamento: "Lei estadual nº 5.247/1991, art. 157.",
      macete: "Sindicância: arquiva, pune até 30 dias ou abre PAD.",
      erroComum: "Pensar que a sindicância pode levar à demissão.",
      comoBancaPensa: "Nas alternativas erradas, aumenta o teto ou inclui demissão.",
    },
  },

  {
    ...BASE107,
    id: "LI-319", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Resistência injustificada — advertência",
    origem: "FGV - 2021 (prova não identificada no caderno) — QAP DSO (Legislação), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'D'",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Servidora estadual de Alagoas sem antecedentes disciplinares que opõe resistência injustificada ao andamento de processo sob sua responsabilidade está sujeita, após regular processo, à pena de suspensão, que não pode exceder noventa dias, nos termos da Lei estadual n.º 5.247/1991.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "pena de suspensão",
    cognitivo: {
      motivo: "Associar violação de proibição, sem reincidência, à advertência.",
      palavraCritica: "suspensão",
    },
    comentario: {
      resolucao: "ERRADO. Opor resistência injustificada ao andamento de documento ou processo é proibição do RJU. A violação dessa proibição, sem reincidência, é punida com advertência, aplicada por escrito. A suspensão, que de fato não excede noventa dias, é reservada à reincidência das faltas punidas com advertência e a infrações mais graves. O gabarito da questão original é a advertência por escrito.",
      fundamento: "Lei estadual nº 5.247/1991 (proibições e penalidades: advertência e suspensão).",
      macete: "Primeira falta leve: advertência por escrito.",
      erroComum: "Ser atraído pelo dado verdadeiro do teto de 90 dias.",
      comoBancaPensa: "Coloca uma informação correta sobre a pena errada.",
    },
  },

  {
    ...BASE107,
    id: "LI-320", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Recusa a inspeção médica e reincidência",
    origem: "FCC - 2024 (prova não identificada no caderno) — QAP DSO (Legislação), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'D'",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Considere que Rafael, servidor estável regido pela Lei estadual n.º 5.247/1991, tenha se recusado a submeter-se a inspeção médica determinada pela autoridade competente, e que Tiago, já punido com advertência, tenha voltado a se ausentar do serviço durante o expediente sem autorização da chefia. Nessa situação, Rafael será punido com demissão, e Tiago receberá nova advertência.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "Rafael será punido com demissão",
    cognitivo: {
      motivo: "Lembrar a suspensão de até 15 dias pela recusa à inspeção médica e a suspensão na reincidência.",
      palavraCritica: "demissão",
    },
    comentario: {
      resolucao: "ERRADO. A recusa injustificada à inspeção médica é punida com suspensão de até quinze dias, que cessa quando cumprida a determinação. A reincidência em falta já punida com advertência leva à suspensão, não a nova advertência. O correto é suspensão para os dois, como na alternativa correta da questão original.",
      fundamento: "Lei estadual nº 5.247/1991 (penalidade de suspensão).",
      macete: "Recusou inspeção médica: suspensão até 15 dias. Reincidiu: suspensão.",
      erroComum: "Superestimar a falta de Rafael e subestimar a de Tiago.",
      comoBancaPensa: "Inverte a gravidade das duas condutas.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE107);
