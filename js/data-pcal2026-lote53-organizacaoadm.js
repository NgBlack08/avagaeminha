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
      mede: "Direito Administrativo — organização administrativa (descentralização).",
      pegadinhaDesc: "Item literal e correto: concessão de serviço público a particular é descentralização por delegação/colaboração, e a titularidade do serviço nunca sai do poder público.",
      ondeErra: "Pode confundir concessão a particular com uma forma de outorga, imaginando que a titularidade também se transfere.",
      palavraCritica: "titularidade",
      tecnica: "Na delegação (por colaboração), apenas a execução da atividade é transferida — a titularidade do serviço público permanece com o ente político. Já na outorga (por serviço/funcional), há transferência da própria titularidade a uma entidade da administração indireta.",
      regraMental: "Concessão a particular = delegação = só execução muda de mãos; titularidade nunca sai do Estado."
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
      mede: "Direito Administrativo — organização administrativa (administração direta).",
      pegadinhaDesc: "Item literal e correto sobre a estrutura da administração direta.",
      ondeErra: "Pode achar que cada órgão (ministério, secretaria) tem personalidade jurídica própria, quando na verdade só o ente político (a pessoa política) a possui.",
      palavraCritica: "uma única personalidade jurídica",
      tecnica: "Segundo Carvalho Filho, a administração direta é o conjunto de órgãos que integram as pessoas federativas — a Administração Pública é, ao mesmo tempo, titular e executora do serviço, sem que os órgãos internos tenham personalidade jurídica própria.",
      regraMental: "Administração direta = órgãos sem personalidade jurídica própria, dentro da única personalidade da pessoa política."
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
      mede: "Direito Administrativo — organização administrativa (administração indireta).",
      pegadinhaDesc: "Afirma que os serviços das entidades da administração indireta são 'indelegáveis a particulares', quando na verdade muitos desses serviços PODEM ser delegados a particulares via concessão/permissão.",
      ondeErra: "Confunde a titularidade recebida por outorga (que a entidade da administração indireta detém) com uma suposta impossibilidade de delegação futura da execução a terceiros particulares.",
      palavraCritica: "indelegáveis",
      tecnica: "A administração indireta recebe, por outorga, a titularidade de determinados serviços — mas isso não impede que a execução desses mesmos serviços seja, em seguida, delegada a particulares mediante concessão ou permissão.",
      regraMental: "Titularidade nas mãos da entidade da administração indireta NÃO significa que o serviço seja indelegável a particulares."
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
      mede: "Direito Administrativo — organização administrativa (desconcentração).",
      pegadinhaDesc: "Item literal e correto, com o elemento-chave (mesma pessoa jurídica + hierarquia) que distingue desconcentração de descentralização.",
      ondeErra: "Pode confundir desconcentração (dentro da mesma pessoa jurídica, com hierarquia) com descentralização (entre pessoas jurídicas distintas, sem hierarquia, apenas vinculação).",
      palavraCritica: "vinculação hierárquica",
      tecnica: "Segundo Mazza, na desconcentração as atribuições são repartidas entre órgãos de uma mesma pessoa jurídica, mantendo a vinculação hierárquica — exemplos: ministérios, secretarias estaduais/municipais, delegacias de polícia.",
      regraMental: "Desconcentração = mesma pessoa jurídica + hierarquia. Descentralização = pessoas jurídicas diferentes + só vinculação (sem hierarquia)."
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
      mede: "Direito Administrativo — organização administrativa (fundações públicas).",
      pegadinhaDesc: "Insere 'ou privado' ao lado de 'interesse público', como se a fundação pública pudesse legitimamente perseguir interesse privado.",
      ondeErra: "Confunde a possibilidade de personalidade jurídica de direito PRIVADO (regime jurídico) com a finalidade da entidade, que é sempre de interesse público/social.",
      palavraCritica: "interesse público ou privado",
      tecnica: "O Decreto-Lei 200/67 (art. 5º, IV) e a doutrina (Alexandrino/Paulo) definem a fundação pública como patrimônio personificado, sem fins lucrativos, para o desenvolvimento de atividade de interesse SOCIAL — nunca de interesse privado, ainda que sua personalidade jurídica possa ser de direito privado.",
      regraMental: "Fundação pública: personalidade pode ser privada, mas a FINALIDADE é sempre pública/social — nunca privada."
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
      mede: "Direito Administrativo — organização administrativa (autarquias).",
      pegadinhaDesc: "Item literal e correto, reproduzindo o núcleo do conceito legal de autarquia.",
      ondeErra: "Pode confundir autarquia (sempre direito público) com empresa pública/sociedade de economia mista (sempre direito privado).",
      palavraCritica: "direito público",
      tecnica: "Art. 5º, I, do Decreto-Lei 200/67: autarquia é o serviço autônomo, criado por lei, com personalidade jurídica, patrimônio e receita próprios, para executar atividades típicas da administração pública de forma descentralizada.",
      regraMental: "Autarquia = SEMPRE personalidade jurídica de direito público, criada por lei específica (não apenas autorizada)."
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
      mede: "Direito Administrativo — organização administrativa (empresas estatais).",
      pegadinhaDesc: "Item literal e correto: ambas são de direito privado e atuam na economia, mas se distinguem pela forma societária e pela composição do capital.",
      ondeErra: "Pode achar que as duas entidades têm o mesmo regime de capital (ambas 100% público) ou a mesma forma societária obrigatória.",
      palavraCritica: "composição do capital",
      tecnica: "Empresa pública: capital 100% público, qualquer forma societária admitida em direito. Sociedade de economia mista: capital majoritariamente público (mas com participação privada), obrigatoriamente sob a forma de sociedade anônima.",
      regraMental: "Empresa pública = capital 100% público, forma livre. SEM = capital misto (maioria pública), sempre S.A."
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
      mede: "Direito Administrativo — organização administrativa (características comuns da administração indireta).",
      pegadinhaDesc: "Nega uma característica comum e essencial (patrimônio próprio) das entidades da administração indireta.",
      ondeErra: "Confunde a existência de controle/vinculação do ente político com a ausência de patrimônio próprio da entidade.",
      palavraCritica: "desprovidas de patrimônio próprio",
      tecnica: "A existência de personalidade jurídica própria é justamente o que garante às entidades da administração indireta patrimônio próprio e autonomia administrativa-organizacional — é isso que as distingue de um mero órgão público.",
      regraMental: "Entidade da administração indireta = personalidade jurídica própria + patrimônio próprio, sempre juntos."
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
      mede: "Direito Administrativo — organização administrativa (entidades paraestatais).",
      pegadinhaDesc: "Afirma corretamente o conceito de entidade paraestatal, mas conclui erroneamente que ela passa a integrar a administração indireta.",
      ondeErra: "Confunde 'colaborar com o Estado' com 'integrar formalmente a estrutura estatal' — são coisas distintas.",
      palavraCritica: "integrar formalmente",
      tecnica: "Segundo a doutrina, as entidades paraestatais são pessoas jurídicas privadas que, SEM integrarem a administração direta ou a administração indireta, colaboram com o Estado no desempenho de atividades de interesse social, recebendo dele variadas modalidades de fomento.",
      regraMental: "Paraestatal = colabora com o Estado, mas fica FORA da administração direta e indireta."
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
      mede: "Direito Administrativo — organização administrativa (empresas subsidiárias).",
      pegadinhaDesc: "Trata as duas autorizações legislativas (para a empresa pública e para cada subsidiária) como se fossem uma só, dispensando a segunda por já ter havido a primeira.",
      ondeErra: "Confunde a autorização legislativa do art. 37, XIX (para criar a entidade) com a autorização do art. 37, XX (para criar subsidiárias), tratando-as como uma única exigência já satisfeita.",
      palavraCritica: "dispensa a exigência",
      tecnica: "O art. 37, XX, da CF exige, EM CADA CASO, autorização legislativa específica para a criação de subsidiárias das entidades da administração indireta — trata-se de exigência autônoma, que não se confunde nem se esgota com a autorização legislativa que criou a empresa-mãe.",
      regraMental: "Autorização para criar a empresa-mãe ≠ autorização para criar cada subsidiária. São duas exigências distintas, ambas do art. 37 da CF."
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
