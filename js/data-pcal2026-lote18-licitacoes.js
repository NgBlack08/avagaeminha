/* =====================================================================
   CEBRASPE LAB — Lote 18: LEI DE LICITAÇÕES E CONTRATOS (Lei 14.133/2021)
   Nova Lei de Licitações — modalidades, critérios de julgamento, fases,
   contratação direta e agentes.
   14 itens INÉDITOS (C/E balanceados), estilo CEBRASPE.

   Fonte: material esquematizado (fornecido pelo usuário). Lei é texto
   público — itens 100% originais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE18 = [

  {
    id: "DA-024", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Modalidades (art. 28)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.88,
    enunciado: "São modalidades de licitação previstas na Lei 14.133/2021: concorrência, tomada de preços, convite, concurso, leilão e pregão.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "tomada de preços, convite",
    cognitivo: {
      motivo: "Cobrar as modalidades da nova Lei de Licitações (art. 28).",
      mede: "Licitações — modalidades.",
      pegadinhaDesc: "Mistura modalidades extintas (tomada de preços e convite) com as vigentes.",
      ondeErra: "Confunde o rol da Lei 8.666/93 com o da Lei 14.133/21.",
      palavraCritica: "tomada de preços, convite",
      tecnica: "Art. 28: pregão, concorrência, concurso, leilão e diálogo competitivo. A Lei 14.133/21 EXTINGUIU tomada de preços e convite e CRIOU o diálogo competitivo.",
      regraMental: "Nova lei: sem tomada de preços e sem convite. Entrou o diálogo competitivo."
    },
    comentario: {
      resolucao: "ERRADO. As modalidades da Lei 14.133/2021 (art. 28) são: pregão, concorrência, concurso, leilão e diálogo competitivo. A tomada de preços e o convite foram extintos; o diálogo competitivo foi criado. O item mistura modalidades da antiga Lei 8.666/1993.",
      fundamento: "Lei 14.133/2021, art. 28.",
      macete: "PC³D L: Pregão, Concorrência, Concurso, Diálogo competitivo, Leilão.",
      erroComum: "Manter tomada de preços e convite.",
      comoBancaPensa: "Emenda modalidades revogadas ao rol atual."
    }
  },
  {
    id: "DA-025", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Diálogo competitivo (art. 32)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O diálogo competitivo é modalidade de licitação introduzida pela Lei 14.133/2021, destinada à contratação de objetos que envolvam inovação tecnológica ou soluções não disponíveis de forma pronta no mercado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "diálogo competitivo",
    cognitivo: {
      motivo: "Cobrar o conceito do diálogo competitivo (art. 32).",
      mede: "Licitações — nova modalidade.",
      pegadinhaDesc: "A banca pode confundir diálogo competitivo com pregão.",
      ondeErra: "Não associa a modalidade a objetos complexos/inovadores.",
      palavraCritica: "inovação tecnológica",
      tecnica: "Art. 32: diálogo competitivo — para objetos que envolvam inovação, complexidade técnica ou impossibilidade de definição prévia; a Administração dialoga com licitantes selecionados.",
      regraMental: "Diálogo competitivo: objeto complexo/inovador que o mercado não tem pronto."
    },
    comentario: {
      resolucao: "CERTO. O art. 32 da Lei 14.133/2021 prevê o diálogo competitivo para contratação de objetos que envolvam inovação tecnológica ou técnica, impossibilidade de a Administração definir com precisão a solução, ou soluções não disponíveis prontamente no mercado. A Administração dialoga com licitantes previamente selecionados para desenvolver alternativas.",
      fundamento: "Lei 14.133/2021, art. 32.",
      macete: "Diálogo competitivo = objeto inovador/complexo.",
      erroComum: "Confundir com o pregão (bens e serviços comuns).",
      comoBancaPensa: "Testa a nova modalidade e sua finalidade."
    }
  },
  {
    id: "DA-026", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Pregão (art. 29)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "O pregão é a modalidade adequada e obrigatória para a contratação de bens e serviços especiais de engenharia.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "serviços especiais de engenharia",
    cognitivo: {
      motivo: "Cobrar o cabimento do pregão (art. 29).",
      mede: "Licitações — objeto do pregão.",
      pegadinhaDesc: "Estende o pregão a serviços especiais de engenharia.",
      ondeErra: "Confunde bens/serviços comuns com especiais.",
      palavraCritica: "serviços especiais de engenharia",
      tecnica: "Art. 29: o pregão é adotado para aquisição de bens e serviços COMUNS (inclusive comuns de engenharia). Não se aplica a serviços especiais de engenharia nem a bens/serviços que não sejam comuns.",
      regraMental: "Pregão = bens e serviços COMUNS. 'Especial de engenharia' não entra."
    },
    comentario: {
      resolucao: "ERRADO. O pregão destina-se à contratação de bens e serviços comuns, assim entendidos aqueles cujos padrões de desempenho e qualidade podem ser objetivamente definidos pelo edital (art. 29). Serviços especiais de engenharia não são objeto do pregão. A vedação alcança expressamente os serviços técnicos especializados de natureza predominantemente intelectual e as obras/serviços especiais de engenharia.",
      fundamento: "Lei 14.133/2021, art. 29 e parágrafo único.",
      macete: "Pregão: comum sim, especial não.",
      erroComum: "Aplicar pregão a serviço especial de engenharia.",
      comoBancaPensa: "Troca 'comum' por 'especial' no objeto do pregão."
    }
  },
  {
    id: "DA-027", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Critérios de julgamento (art. 33)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "São critérios de julgamento das propostas na Lei 14.133/2021, entre outros, o menor preço, o maior desconto, a melhor técnica ou conteúdo artístico, a técnica e preço, o maior lance e o maior retorno econômico.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "maior retorno econômico",
    cognitivo: {
      motivo: "Cobrar os critérios de julgamento (art. 33).",
      mede: "Licitações — critérios de julgamento.",
      pegadinhaDesc: "A banca pode inventar um critério (ex.: 'menor prazo') ou omitir o retorno econômico.",
      ondeErra: "Não memoriza o rol dos seis critérios.",
      palavraCritica: "maior retorno econômico",
      tecnica: "Art. 33: menor preço; maior desconto; melhor técnica ou conteúdo artístico; técnica e preço; maior lance (leilão); maior retorno econômico.",
      regraMental: "6 critérios: preço, desconto, técnica/arte, técnica+preço, lance, retorno econômico."
    },
    comentario: {
      resolucao: "CERTO. O art. 33 da Lei 14.133/2021 estabelece como critérios de julgamento: menor preço; maior desconto; melhor técnica ou conteúdo artístico; técnica e preço; maior lance (no leilão); e maior retorno econômico. O item reproduz corretamente esse rol.",
      fundamento: "Lei 14.133/2021, art. 33.",
      macete: "Preço, desconto, técnica/arte, técnica+preço, lance, retorno econômico.",
      erroComum: "Inventar critério inexistente (ex.: menor prazo).",
      comoBancaPensa: "Testa a memorização do rol de critérios."
    }
  },
  {
    id: "DA-028", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Fases (art. 17)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Na nova Lei de Licitações, em regra, a fase de habilitação antecede a fase de julgamento das propostas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "habilitação antecede o julgamento",
    cognitivo: {
      motivo: "Cobrar a inversão de fases como regra (art. 17).",
      mede: "Licitações — sequência das fases.",
      pegadinhaDesc: "Inverte a ordem: coloca a habilitação antes do julgamento.",
      ondeErra: "Aplica a lógica da Lei 8.666/93 (habilitação primeiro).",
      palavraCritica: "habilitação antecede o julgamento",
      tecnica: "Art. 17: a habilitação, em regra, sucede o julgamento (como no pregão). A inversão (habilitação antes) só é possível por ato motivado e previsão no edital.",
      regraMental: "Regra nova: julga primeiro, habilita depois."
    },
    comentario: {
      resolucao: "ERRADO. Na Lei 14.133/2021, em regra, a fase de habilitação sucede a de julgamento (art. 17, VI e VII), à semelhança do pregão. A inversão — habilitação antes do julgamento — é excepcional e depende de ato motivado, com expressa previsão no edital (art. 17, § 1º).",
      fundamento: "Lei 14.133/2021, art. 17, caput e § 1º.",
      macete: "Nova lei: julgamento antes, habilitação depois.",
      erroComum: "Reproduzir a ordem da Lei 8.666/93.",
      comoBancaPensa: "Inverte a ordem das fases."
    }
  },
  {
    id: "DA-029", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Inversão de fases (art. 17, § 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Segundo a Lei 14.133/2021, a fase de julgamento, em regra, antecede a de habilitação, admitindo-se a inversão dessa ordem mediante ato motivado e previsão expressa no edital.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ato motivado e previsão no edital",
    cognitivo: {
      motivo: "Cobrar a regra e a exceção quanto à ordem das fases.",
      mede: "Licitações — fases e inversão.",
      pegadinhaDesc: "A banca pode dizer que a inversão é livre, sem exigências.",
      ondeErra: "Não observa as condições da inversão (motivação + edital).",
      palavraCritica: "ato motivado e previsão no edital",
      tecnica: "Art. 17, § 1º: a inversão de fases (habilitação antes do julgamento) exige ato motivado e previsão expressa no edital.",
      regraMental: "Inverter fases: só com motivação + previsão editalícia."
    },
    comentario: {
      resolucao: "CERTO. Em regra, o julgamento antecede a habilitação na Lei 14.133/2021. A inversão dessa ordem é admitida excepcionalmente, desde que precedida de ato motivado e com previsão expressa no edital (art. 17, § 1º).",
      fundamento: "Lei 14.133/2021, art. 17, § 1º.",
      macete: "Inversão de fases: motivação + edital.",
      erroComum: "Achar que a inversão é livre.",
      comoBancaPensa: "Testa as condições da inversão."
    }
  },
  {
    id: "DA-030", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Contratação direta",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "A contratação direta compreende as hipóteses de inexigibilidade e de dispensa de licitação (esta abrangendo a licitação dispensável e a dispensada).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inexigibilidade e dispensa",
    cognitivo: {
      motivo: "Cobrar o conceito de contratação direta.",
      mede: "Licitações — contratação direta.",
      pegadinhaDesc: "A banca pode confundir dispensa com inexigibilidade.",
      ondeErra: "Trata a contratação direta como sinônimo apenas de dispensa.",
      palavraCritica: "inexigibilidade e dispensa",
      tecnica: "Contratação direta = inexigibilidade (inviabilidade de competição) + dispensa (dispensável e dispensada).",
      regraMental: "Direta: inexigível (não dá para competir) ou dispensa (a lei permite)."
    },
    comentario: {
      resolucao: "CERTO. A contratação direta engloba a inexigibilidade de licitação (quando inviável a competição) e a dispensa (que se subdivide em licitação dispensável e dispensada). São as hipóteses em que se contrata sem certame.",
      fundamento: "Lei 14.133/2021, arts. 72 a 75.",
      macete: "Direta = inexigibilidade + dispensa.",
      erroComum: "Reduzir a contratação direta à dispensa.",
      comoBancaPensa: "Testa a taxonomia da contratação direta."
    }
  },
  {
    id: "DA-031", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Inexigibilidade (art. 74)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "As hipóteses de inexigibilidade de licitação previstas na Lei 14.133/2021 constituem rol taxativo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "rol taxativo",
    cognitivo: {
      motivo: "Cobrar a natureza exemplificativa da inexigibilidade (art. 74).",
      mede: "Licitações — inexigibilidade × dispensa.",
      pegadinhaDesc: "Atribui à inexigibilidade a taxatividade que é própria da dispensa.",
      ondeErra: "Confunde o regime da inexigibilidade com o da dispensa.",
      palavraCritica: "taxativo",
      tecnica: "A inexigibilidade decorre da inviabilidade de competição — o rol do art. 74 é EXEMPLIFICATIVO ('em especial'). A dispensa (art. 75), essa sim, é taxativa.",
      regraMental: "Inexigibilidade = exemplificativa. Dispensa = taxativa."
    },
    comentario: {
      resolucao: "ERRADO. As hipóteses de inexigibilidade (art. 74) são exemplificativas, pois derivam do conceito geral de inviabilidade de competição — a lei usa a expressão 'em especial'. A taxatividade é característica das hipóteses de licitação dispensável (art. 75).",
      fundamento: "Lei 14.133/2021, arts. 74 e 75.",
      macete: "Inexigível = exemplificativo; dispensável = taxativo.",
      erroComum: "Tornar taxativo o rol da inexigibilidade.",
      comoBancaPensa: "Troca o regime entre inexigibilidade e dispensa."
    }
  },
  {
    id: "DA-032", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Dispensa (art. 75)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "As hipóteses de licitação dispensável previstas na Lei 14.133/2021 constituem rol taxativo, não admitindo ampliação por analogia.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "rol taxativo",
    cognitivo: {
      motivo: "Cobrar a taxatividade da dispensa (art. 75).",
      mede: "Licitações — licitação dispensável.",
      pegadinhaDesc: "A banca pode dizer que a dispensa é exemplificativa.",
      ondeErra: "Confunde dispensa (taxativa) com inexigibilidade (exemplificativa).",
      palavraCritica: "taxativo",
      tecnica: "Art. 75: as hipóteses de dispensa são taxativas — só se dispensa nos casos expressamente previstos em lei.",
      regraMental: "Dispensa = lista fechada (taxativa)."
    },
    comentario: {
      resolucao: "CERTO. As hipóteses de licitação dispensável do art. 75 da Lei 14.133/2021 são taxativas: a Administração só pode dispensar o certame nos casos expressamente previstos, sem ampliação por analogia.",
      fundamento: "Lei 14.133/2021, art. 75.",
      macete: "Dispensa: rol fechado e taxativo.",
      erroComum: "Torná-la exemplificativa.",
      comoBancaPensa: "Testa a taxatividade da dispensa."
    }
  },
  {
    id: "DA-033", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Dispensa por valor (art. 75, I e II)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "É dispensável a licitação para contratação de obras e serviços de engenharia de valor até R$ 50.000,00, mesmo patamar aplicável às demais compras e serviços.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "até R$ 50.000,00",
    cognitivo: {
      motivo: "Cobrar os patamares de dispensa por valor (art. 75, I e II).",
      mede: "Licitações — dispensa por valor.",
      pegadinhaDesc: "Iguala o teto de engenharia ao das demais compras e serviços.",
      ondeErra: "Não distingue os dois limites de dispensa por valor.",
      palavraCritica: "mesmo patamar",
      tecnica: "Art. 75, I e II: o limite para obras e serviços de engenharia é MAIOR (cerca de R$ 100 mil, atualizado por decreto) do que para as demais compras e serviços (cerca de R$ 50 mil). Os patamares são distintos.",
      regraMental: "Dispensa por valor: engenharia (teto maior) ≠ compras/serviços (teto menor)."
    },
    comentario: {
      resolucao: "ERRADO. Os limites de dispensa por valor são distintos: para obras e serviços de engenharia (e serviços de manutenção de veículos automotores) o teto é maior — em torno de R$ 100 mil, com atualização por decreto; para as demais compras e serviços, gira em torno de R$ 50 mil (art. 75, I e II). Logo, não se trata do 'mesmo patamar'.",
      fundamento: "Lei 14.133/2021, art. 75, I e II (valores atualizados por decreto).",
      macete: "Engenharia: teto maior. Demais: teto menor.",
      erroComum: "Igualar os dois limites de dispensa por valor.",
      comoBancaPensa: "Iguala patamares que a lei diferencia."
    }
  },
  {
    id: "DA-034", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Agente de contratação (art. 8º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "A Lei 14.133/2021 prevê a figura do agente de contratação, servidor designado pela autoridade competente para tomar decisões e conduzir o processo licitatório, auxiliado por equipe de apoio.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "agente de contratação",
    cognitivo: {
      motivo: "Cobrar a figura do agente de contratação (art. 8º).",
      mede: "Licitações — agentes públicos.",
      pegadinhaDesc: "A banca pode confundir agente de contratação com pregoeiro em todas as modalidades.",
      ondeErra: "Não distingue o agente de contratação (regra) do pregoeiro (no pregão).",
      palavraCritica: "agente de contratação",
      tecnica: "Art. 8º: o agente de contratação é servidor designado para conduzir a licitação, apoiado por equipe. No pregão, é denominado pregoeiro.",
      regraMental: "Agente de contratação conduz o certame (pregoeiro, no pregão)."
    },
    comentario: {
      resolucao: "CERTO. O art. 8º da Lei 14.133/2021 institui o agente de contratação, servidor designado pela autoridade competente para tomar decisões, acompanhar o trâmite, dar impulso ao procedimento e conduzir a licitação, auxiliado por equipe de apoio. No pregão, é designado como pregoeiro.",
      fundamento: "Lei 14.133/2021, art. 8º.",
      macete: "Agente de contratação = condutor do certame (pregoeiro no pregão).",
      erroComum: "Ignorar a nova figura ou confundir com a comissão da 8.666.",
      comoBancaPensa: "Testa a novidade dos agentes de contratação."
    }
  },
  {
    id: "DA-035", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Princípios (art. 5º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.74,
    enunciado: "A Lei 14.133/2021 relaciona, entre os princípios aplicáveis às licitações e contratos, além da legalidade, impessoalidade, moralidade, publicidade e eficiência, também o planejamento, a segregação de funções e a segurança jurídica.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "segregação de funções",
    cognitivo: {
      motivo: "Cobrar os princípios expressos da Lei 14.133/2021 (art. 5º).",
      mede: "Licitações — princípios.",
      pegadinhaDesc: "A banca pode inserir um 'princípio' inexistente ou negar a segregação de funções.",
      ondeErra: "Não reconhece os novos princípios expressos (planejamento, segregação de funções).",
      palavraCritica: "segregação de funções",
      tecnica: "Art. 5º: legalidade, impessoalidade, moralidade, publicidade, eficiência, interesse público, probidade, planejamento, transparência, segurança jurídica, segregação de funções, entre outros.",
      regraMental: "Nova lei trouxe planejamento e segregação de funções como princípios expressos."
    },
    comentario: {
      resolucao: "CERTO. O art. 5º da Lei 14.133/2021 arrola extenso conjunto de princípios, incluindo legalidade, impessoalidade, moralidade, publicidade, eficiência, além de planejamento, segurança jurídica, segregação de funções, motivação, entre outros. O item reproduz corretamente parte desse rol.",
      fundamento: "Lei 14.133/2021, art. 5º.",
      macete: "Novos destaques: planejamento e segregação de funções.",
      erroComum: "Negar a segregação de funções como princípio.",
      comoBancaPensa: "Testa os princípios expressos da nova lei."
    }
  },
  {
    id: "DA-036", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Modo de disputa (art. 56)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "Na Lei 14.133/2021, o modo de disputa deve ser sempre aberto, sendo vedada a utilização do modo fechado.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sempre aberto",
    cognitivo: {
      motivo: "Cobrar os modos de disputa (art. 56).",
      mede: "Licitações — modos de disputa.",
      pegadinhaDesc: "Usa termo absoluto para excluir o modo fechado.",
      ondeErra: "Desconhece que a lei admite os modos aberto, fechado e sua combinação.",
      palavraCritica: "sempre aberto",
      tecnica: "Art. 56: o modo de disputa pode ser aberto, fechado ou a combinação de ambos, conforme o objeto e o critério de julgamento.",
      regraMental: "Modos de disputa: aberto, fechado ou combinado."
    },
    comentario: {
      resolucao: "ERRADO. O art. 56 da Lei 14.133/2021 admite os modos de disputa aberto e fechado, isolados ou combinados. O modo fechado não é vedado — é cabível, por exemplo, quando a divulgação antecipada das propostas possa causar prejuízo à competição.",
      fundamento: "Lei 14.133/2021, art. 56.",
      macete: "Aberto, fechado ou combinado — não só aberto.",
      erroComum: "Vedar o modo fechado.",
      comoBancaPensa: "Termo absoluto para negar o modo fechado."
    }
  },
  {
    id: "DA-037", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Rito comum (concorrência e pregão)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "Na Lei 14.133/2021, a concorrência e o pregão seguem o mesmo rito procedimental comum, diferenciando-se essencialmente quanto ao objeto e aos critérios de julgamento aplicáveis.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mesmo rito procedimental comum",
    cognitivo: {
      motivo: "Cobrar a unificação do rito entre concorrência e pregão.",
      mede: "Licitações — procedimento.",
      pegadinhaDesc: "A banca pode afirmar que cada modalidade tem rito próprio e distinto.",
      ondeErra: "Desconhece a padronização procedimental da nova lei.",
      palavraCritica: "mesmo rito procedimental comum",
      tecnica: "Art. 28, § 1º c/c art. 29: concorrência e pregão adotam o rito procedimental comum do art. 17, diferenciando-se pelo objeto (comum × não comum) e pelos critérios de julgamento.",
      regraMental: "Concorrência e pregão: mesmo rito; muda o objeto e o critério."
    },
    comentario: {
      resolucao: "CERTO. Na Lei 14.133/2021, a concorrência e o pregão seguem o mesmo rito procedimental comum (art. 17). A distinção essencial está no objeto — o pregão destina-se a bens e serviços comuns — e nos critérios de julgamento admitidos em cada modalidade.",
      fundamento: "Lei 14.133/2021, arts. 17, 28, § 1º, e 29.",
      macete: "Concorrência e pregão: rito igual, objeto/critério diferentes.",
      erroComum: "Supor ritos totalmente distintos.",
      comoBancaPensa: "Testa a padronização do procedimento comum."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE18);

/* Frequência de temas — Lei de Licitações (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Direito Administrativo");
  if (!d) { d = { disciplina: "Direito Administrativo", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Licitações 14.133 — modalidades e diálogo competitivo", freq: 86, tendencia: "alta", prob: 0.88 },
    { tema: "Licitações 14.133 — fases e inversão", freq: 82, tendencia: "alta", prob: 0.84 },
    { tema: "Licitações 14.133 — dispensa e inexigibilidade", freq: 84, tendencia: "alta", prob: 0.86 },
  );
})();
