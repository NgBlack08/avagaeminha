/* =====================================================================
   QUESTLAB — Lote 53: ORGANIZAÇÃO ADMINISTRATIVA (expansão)
   10 itens INÉDITOS em estilo CEBRASPE, sobre descentralização,
   desconcentração, administração direta/indireta, autarquias,
   fundações públicas, empresas públicas, sociedades de economia mista,
   entidades paraestatais e subsidiárias — com base em doutrina
   (Mazza, Carvalho Filho, Alexandrino/Paulo) e legislação vigente
   (Decreto-Lei 200/67, CF art. 37), inspirados nos temas mais cobrados
   pela banca em concursos federais recentes (2025).
   ===================================================================== */

const QUESTOES_PCAL_LOTE53 = [

  {
    id: "DA-061", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Descentralização por delegação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Organização Administrativa — descentralização, doutrina de Mazza/Carvalho Filho)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "Ocorre descentralização administrativa por delegação quando o poder público transfere a execução de determinado serviço público a um particular, mediante contrato de concessão, permanecendo a titularidade do serviço com o ente político.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "permanecendo a titularidade",
    cognitivo: {
      motivo: "Cobrar a distinção entre outorga (transfere titularidade) e delegação (transfere só a execução), a base da descentralização administrativa.",
      palavraCritica: "titularidade",
    },
    comentario: {
      resolucao: "CERTO. Quando o Estado concede um serviço público a um particular mediante contrato de concessão, ocorre descentralização administrativa por delegação (ou por colaboração): a execução do serviço é transferida ao particular, mas a titularidade do serviço público permanece com o ente político, que disciplina a prestação por meio de contrato administrativo.",
      fundamento: "Doutrina — Mazza, Alexandre. Manual de Direito Administrativo; distinção clássica entre outorga e delegação na descentralização administrativa.",
      macete: "Delegação = execução muda; outorga = titularidade muda.",
      erroComum: "Achar que toda descentralização transfere também a titularidade do serviço.",
      comoBancaPensa: "Cobra a distinção clássica entre as duas espécies de descentralização administrativa."
    }
  },

  {
    id: "DA-062", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Administração direta",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Organização Administrativa — administração direta, doutrina de Carvalho Filho)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "A administração direta é composta pelos órgãos que integram a estrutura interna das pessoas políticas (União, estados, Distrito Federal e municípios), os quais não possuem personalidade jurídica própria, mas se organizam dentro de uma única personalidade jurídica.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "uma única personalidade jurídica",
    cognitivo: {
      motivo: "Cobrar o conceito de administração direta como conjunto de órgãos internos de um único ente político.",
      palavraCritica: "uma única personalidade jurídica",
    },
    comentario: {
      resolucao: "CERTO. A administração direta é composta pelos órgãos integrantes da estrutura interna das pessoas políticas (União, estados, Distrito Federal e municípios). Esses entes possuem uma única personalidade jurídica, dentro da qual se organizam diversos órgãos administrativos (ministérios, secretarias, departamentos etc.), sem personalidade jurídica própria.",
      fundamento: "Carvalho Filho, José dos Santos. Manual de Direito Administrativo.",
      macete: "Administração direta = 1 pessoa jurídica, vários órgãos sem personalidade própria.",
      erroComum: "Atribuir personalidade jurídica própria a órgãos da administração direta (ministérios, secretarias).",
      comoBancaPensa: "Cobra a estrutura básica da administração direta, distinguindo órgão de entidade."
    }
  },

  {
    id: "DA-063", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Administração indireta — delegação de competências",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Organização Administrativa — descentralização e administração indireta)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "As entidades da administração indireta são criadas justamente para receber, por outorga, a titularidade de determinados serviços públicos ou de interesse público, os quais, por definição, são indelegáveis a particulares.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "indelegáveis a particulares",
    cognitivo: {
      motivo: "Evitar a confusão entre a delegação de titularidade a uma entidade da administração indireta (outorga) e a possibilidade de delegação de execução a particulares (concessão/permissão).",
      palavraCritica: "indelegáveis",
    },
    comentario: {
      resolucao: "ERRADO. As entidades da administração indireta podem, de fato, receber por outorga a titularidade de determinados serviços públicos, mas isso não torna tais serviços 'indelegáveis a particulares' — pelo contrário, é comum que a execução desses serviços seja posteriormente delegada a particulares por meio de contratos de concessão ou permissão.",
      fundamento: "Doutrina — distinção entre outorga (titularidade) e delegação (execução) na descentralização administrativa.",
      macete: "Titularidade da entidade da administração indireta não impede delegação da execução a particulares.",
      erroComum: "Achar que, uma vez outorgado a uma entidade, um serviço público não pode mais ser delegado a terceiros.",
      comoBancaPensa: "Insere a palavra 'indelegáveis' para transformar uma afirmação plausível em uma restrição incorreta."
    }
  },

  {
    id: "DA-064", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Desconcentração",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Organização Administrativa — desconcentração, doutrina de Mazza)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.88,
    enunciado: "A distribuição de competências entre órgãos internos, sem personalidade jurídica própria, pertencentes a uma mesma pessoa jurídica, com manutenção da vinculação hierárquica entre eles, denomina-se desconcentração administrativa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vinculação hierárquica",
    cognitivo: {
      motivo: "Cobrar o conceito de desconcentração, sempre contraposto ao de descentralização em prova.",
      palavraCritica: "vinculação hierárquica",
    },
    comentario: {
      resolucao: "CERTO. Na desconcentração, as atribuições são repartidas entre órgãos públicos pertencentes a uma única pessoa jurídica, havendo especialização de funções dentro da administração pública, com manutenção da vinculação hierárquica entre esses órgãos. São exemplos os ministérios da União, as secretarias estaduais e municipais e as delegacias de polícia.",
      fundamento: "Mazza, Alexandre. Manual de Direito Administrativo.",
      macete: "Desconcentração = hierarquia dentro da mesma pessoa jurídica.",
      erroComum: "Confundir desconcentração com descentralização, invertendo os critérios de personalidade jurídica e hierarquia.",
      comoBancaPensa: "Cobra o critério distintivo clássico entre desconcentração e descentralização."
    }
  },

  {
    id: "DA-065", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Fundações públicas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Organização Administrativa — fundações públicas, Decreto-Lei 200/67 e doutrina de Alexandrino/Paulo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "As fundações públicas são criadas mediante autorização legislativa, podendo adquirir personalidade jurídica de direito público ou de direito privado, e destinam-se ao desenvolvimento de atividades de interesse público ou privado, desde que sem fins lucrativos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "interesse público ou privado",
    cognitivo: {
      motivo: "Fixar que as fundações públicas, por definição, sempre perseguem finalidade de interesse público/social — nunca interesse privado.",
      palavraCritica: "interesse público ou privado",
    },
    comentario: {
      resolucao: "ERRADO. As fundações públicas são, de fato, criadas mediante autorização legislativa e podem adquirir personalidade jurídica de direito público ou de direito privado, sem fins lucrativos — mas sua finalidade é sempre o desenvolvimento de atividade de interesse público/social, nunca de interesse privado, como incorretamente afirma o item.",
      fundamento: "Decreto-Lei nº 200/1967, art. 5º, IV; Alexandrino, Marcelo; Paulo, Vicente. Direito Administrativo Descomplicado.",
      macete: "Fundação pública pode ter personalidade privada, mas finalidade é sempre de interesse público/social.",
      erroComum: "Confundir o regime jurídico (que pode ser privado) com a finalidade institucional (sempre pública/social).",
      comoBancaPensa: "Acrescenta 'ou privado' à finalidade da fundação, testando se o candidato distingue regime jurídico de finalidade."
    }
  },

  {
    id: "DA-066", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Autarquias",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Organização Administrativa — autarquias, Decreto-Lei 200/67)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.88,
    enunciado: "A autarquia é entidade da administração pública indireta, dotada de personalidade jurídica de direito público, criada por lei específica para executar, de forma descentralizada, atividades típicas da administração pública.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "personalidade jurídica de direito público",
    cognitivo: {
      motivo: "Fixar o conceito legal de autarquia, base para questões sobre INSS, IBAMA, CADE etc.",
      palavraCritica: "direito público",
    },
    comentario: {
      resolucao: "CERTO. A autarquia é entidade descentralizada da administração pública indireta, dotada de personalidade jurídica de direito público, criada por lei específica com o objetivo de desempenhar, de forma descentralizada, funções típicas do Estado (fiscalização, regulação ou execução de políticas públicas), com autonomia administrativa e patrimônio próprio.",
      fundamento: "Decreto-Lei nº 200/1967, art. 5º, I.",
      macete: "Autarquia = direito público + lei específica cria diretamente (não apenas autoriza).",
      erroComum: "Atribuir personalidade jurídica de direito privado à autarquia, confundindo-a com empresa pública.",
      comoBancaPensa: "Cobra o conceito legal de autarquia de forma direta, sem grande armadilha."
    }
  },

  {
    id: "DA-067", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Empresas públicas x sociedades de economia mista",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Organização Administrativa — empresas estatais, Decreto-Lei 200/67 e doutrina de Mazza)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "As sociedades de economia mista e as empresas públicas são pessoas jurídicas de direito privado que desempenham atividade de natureza econômica, distinguindo-se, entre outros aspectos, pela forma societária adotada e pela composição do capital.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "composição do capital",
    cognitivo: {
      motivo: "Cobrar o critério distintivo central entre empresa pública e sociedade de economia mista.",
      palavraCritica: "composição do capital",
    },
    comentario: {
      resolucao: "CERTO. Tanto as sociedades de economia mista quanto as empresas públicas são pessoas jurídicas de direito privado, criadas por autorização legislativa, para o exercício de atividade econômica — mas se distinguem pela forma de organização (a sociedade de economia mista é obrigatoriamente uma sociedade anônima) e pela composição do capital (a empresa pública tem capital 100% público; a sociedade de economia mista, capital majoritariamente público, mas com participação privada).",
      fundamento: "Decreto-Lei nº 200/1967, art. 5º, II e III; Mazza, Alexandre. Manual de Direito Administrativo.",
      macete: "Capital 100% público + forma livre = empresa pública. Capital misto + sempre S.A. = sociedade de economia mista.",
      erroComum: "Achar que ambas têm capital exclusivamente público ou a mesma forma societária obrigatória.",
      comoBancaPensa: "Cobra o critério distintivo essencial entre as duas espécies de empresas estatais."
    }
  },

  {
    id: "DA-068", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Características comuns da administração indireta",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Organização Administrativa — características comuns da administração indireta)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "Autarquias, fundações públicas, empresas públicas e sociedades de economia mista são pessoas jurídicas integrantes da administração indireta, criadas ou autorizadas por lei específica, dotadas de personalidade jurídica própria, mas desprovidas de patrimônio próprio, que permanece sob a titularidade do ente político instituidor.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "desprovidas de patrimônio próprio",
    cognitivo: {
      motivo: "Fixar que patrimônio próprio é uma das características comuns e essenciais das entidades da administração indireta.",
      palavraCritica: "desprovidas de patrimônio próprio",
    },
    comentario: {
      resolucao: "ERRADO. Autarquias, fundações públicas, empresas públicas e sociedades de economia mista são, de fato, criadas ou autorizadas por lei específica e possuem personalidade jurídica própria — mas, precisamente por isso, também possuem patrimônio próprio e autonomia administrativa-organizacional, ao contrário do que afirma o item.",
      fundamento: "Doutrina — características comuns das entidades da administração indireta (personalidade jurídica, ausência de hierarquia/subordinação, finalidade específica, patrimônio próprio).",
      macete: "Personalidade jurídica própria SEMPRE vem acompanhada de patrimônio próprio, nas entidades da administração indireta.",
      erroComum: "Achar que o patrimônio de entidades da administração indireta continua sendo do ente político instituidor.",
      comoBancaPensa: "Nega, ao final do item, uma característica que é justamente a mais básica e consensual da administração indireta."
    }
  },

  {
    id: "DA-069", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Entidades paraestatais",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Organização Administrativa — entidades paraestatais, doutrina de Alexandrino/Paulo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "As entidades paraestatais — como os serviços sociais autônomos (SESI, SESC, SENAT) e as organizações da sociedade civil de interesse público (OSCIP) — são pessoas jurídicas de direito privado que colaboram com o Estado na prestação de atividades de interesse social sem fins lucrativos, razão pela qual passam a integrar formalmente a administração pública indireta.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "integrar formalmente a administração pública indireta",
    cognitivo: {
      motivo: "Fixar que as entidades paraestatais colaboram com o Estado SEM integrar a administração direta ou indireta.",
      palavraCritica: "integrar formalmente",
    },
    comentario: {
      resolucao: "ERRADO. As entidades paraestatais, como os serviços sociais autônomos (SESI, SESC, SENAT) e as OSCIP, são de fato pessoas jurídicas de direito privado sem fins lucrativos que colaboram com o Estado em atividades de interesse social — mas, precisamente por sua natureza paraestatal, elas NÃO integram formalmente nem a administração direta nem a administração indireta, ao contrário do que afirma o item.",
      fundamento: "Alexandrino, Marcelo; Paulo, Vicente. Direito Administrativo Descomplicado.",
      macete: "Paraestatal colabora 'ao lado' do Estado, mas não entra na estrutura formal da administração direta/indireta.",
      erroComum: "Achar que qualquer entidade que receba fomento estatal e preste atividade de interesse social integra a administração indireta.",
      comoBancaPensa: "Constrói o conceito corretamente e derruba a assertiva apenas na conclusão final, testando a leitura até o fim do período."
    }
  },

  {
    id: "DA-070", disciplina: "Direito Administrativo", assunto: "Organização administrativa", subassunto: "Criação de empresas subsidiárias",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Organização Administrativa — empresas subsidiárias, CF art. 37, XIX e XX)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Como a instituição de uma empresa pública já depende de autorização legislativa específica, a Constituição Federal dispensa a exigência de nova autorização legislativa para a criação de empresas subsidiárias dessa mesma empresa pública.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "dispensa a exigência de nova autorização",
    cognitivo: {
      motivo: "Fixar que a autorização legislativa para criar a empresa-mãe e a autorização para criar cada subsidiária são exigências constitucionais AUTÔNOMAS e distintas.",
      palavraCritica: "dispensa a exigência",
    },
    comentario: {
      resolucao: "ERRADO. A Constituição Federal, em seu art. 37, XX, exige autorização legislativa específica, em cada caso, para a criação de subsidiárias de empresas públicas, sociedades de economia mista, autarquias e fundações — trata-se de exigência autônoma, que não é dispensada pelo fato de a empresa-mãe já ter sido criada mediante autorização legislativa anterior (art. 37, XIX).",
      fundamento: "CF, art. 37, XIX e XX.",
      macete: "Cada subsidiária exige SUA PRÓPRIA autorização legislativa — a da empresa-mãe não basta.",
      erroComum: "Achar que, uma vez autorizada a criação da empresa pública, suas futuras subsidiárias ficam automaticamente autorizadas.",
      comoBancaPensa: "Funde duas exigências constitucionais distintas (art. 37, XIX e XX) em uma só, testando se o candidato as trata separadamente."
    }
  }

];

QUESTOES.push(...QUESTOES_PCAL_LOTE53);
