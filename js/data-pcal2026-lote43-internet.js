/* =====================================================================
   CEBRASPE LAB — Lote 43: INTERNET (navegação, nuvem, redes, buscadores)
   Baseado em material de terceiros contendo 12 questões REAIS de
   Certo/Errado de prova anterior da CEBRASPE sobre Internet (com
   gabarito oficial e dicas de revisão anexadas). Cada enunciado
   ORIGINAL foi redigido do zero, testando o mesmo tema e a mesma
   resposta correta identificada pela banca, com um PAR C/E adicional
   (versão espelhada) para reforçar cada conceito. Gabarito de cada
   item novo verificado de forma independente.
   24 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE43 = [

  /* ===== NAVEGAÇÃO ANÔNIMA/PRIVADA ===== */
  {
    id: "TI-082", disciplina: "TI e Segurança Cibernética", assunto: "Internet e navegação", subassunto: "Navegação anônima/privada",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "A navegação em abas anônimas (ou privadas) evita que o navegador salve, no próprio dispositivo, o histórico de navegação, os cookies e o cache da sessão, mas não impede que sites visitados e o provedor de Internet identifiquem as atividades realizadas pelo usuário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não impede que sites ... e o provedor ... identifiquem",
    cognitivo: {
      motivo: "Cobrar que a navegação anônima só oferece privacidade local, sem ocultar a atividade perante sites e provedores.",
      mede: "Informática — Internet (navegação anônima/privada).",
      pegadinhaDesc: "A banca pode afirmar que a aba anônima também esconde a atividade de sites e do provedor de Internet.",
      ondeErra: "Confunde 'não salvar histórico no dispositivo' com 'anonimato completo perante terceiros na rede'.",
      palavraCritica: "não impede ... identifiquem",
      tecnica: "A aba anônima/privada oferece privacidade apenas local: não grava histórico, cookies nem cache no aparelho usado. Ela não esconde a atividade do usuário de sites visitados, do provedor de Internet ou da rede — anônimo não é sinônimo de anonimato completo na Internet.",
      regraMental: "Aba anônima: privacidade só local. Sites e provedor continuam vendo tudo."
    },
    comentario: {
      resolucao: "CERTO. A navegação em abas anônimas/privadas evita apenas que o navegador salve, no dispositivo local, o histórico, os cookies e o cache da sessão — mas não impede que sites visitados e o provedor de Internet identifiquem as atividades do usuário.",
      fundamento: "Doutrina de Informática — Internet (navegação anônima/privada).",
      macete: "Anônimo ≠ anonimato na Internet: só esconde do dispositivo, não da rede.",
      erroComum: "Achar que a aba anônima torna o usuário invisível para sites e provedores.",
      comoBancaPensa: "Item 'limpo' que corrige a crença popular equivocada sobre o alcance da navegação privada."
    }
  },
  {
    id: "TI-083", disciplina: "TI e Segurança Cibernética", assunto: "Internet e navegação", subassunto: "Navegação anônima/privada",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Ao navegar em abas anônimas (ou privadas), o usuário torna-se completamente irrastreável na Internet, uma vez que esse modo de navegação impede que sites visitados e o provedor de acesso identifiquem as atividades realizadas durante a sessão.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "completamente irrastreável ... impede que sites ... identifiquem",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a navegação anônima não impede o rastreamento por sites e provedores.",
      mede: "Informática — Internet (navegação anônima/privada).",
      pegadinhaDesc: "A banca amplia o alcance da privacidade local para um suposto anonimato completo na rede.",
      ondeErra: "Acredita que a ausência de histórico local implica invisibilidade perante toda a Internet.",
      palavraCritica: "completamente irrastreável ... impede que sites ... identifiquem",
      tecnica: "A navegação anônima/privada apenas evita o registro local de histórico, cookies e cache. Sites visitados e o provedor de Internet continuam podendo identificar a atividade do usuário — o modo anônimo não garante anonimato completo na rede.",
      regraMental: "Privacidade local ≠ invisibilidade na rede. Sites e provedor sempre veem a atividade."
    },
    comentario: {
      resolucao: "ERRADO. A navegação em abas anônimas/privadas não torna o usuário irrastreável na Internet — ela apenas evita o registro local de histórico, cookies e cache. Sites visitados e o provedor de Internet continuam podendo identificar as atividades realizadas.",
      fundamento: "Doutrina de Informática — Internet (navegação anônima/privada).",
      macete: "Anônimo é só localmente — nunca é 'completo' perante sites e provedor.",
      erroComum: "Tratar a privacidade local da aba anônima como sinônimo de anonimato irrestrito.",
      comoBancaPensa: "Usa 'completamente irrastreável' para generalizar indevidamente uma proteção que é apenas local."
    }
  },

  /* ===== NUVEM PÚBLICA E ISOLAMENTO DE DADOS ===== */
  {
    id: "TI-084", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Nuvem pública — isolamento multi-inquilino",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Em uma nuvem pública, embora a infraestrutura física seja compartilhada entre diferentes organizações (modelo multi-inquilino), os dados de cada cliente permanecem isolados, não podendo ser visualizados nem alterados por outras organizações que utilizam o mesmo provedor.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "infraestrutura ... compartilhada ... dados ... permanecem isolados",
    cognitivo: {
      motivo: "Cobrar que, apesar da infraestrutura compartilhada, os dados de cada organização permanecem isolados na nuvem pública.",
      mede: "Informática — Internet e Computação em nuvem (nuvem pública, multi-inquilino).",
      pegadinhaDesc: "A banca pode afirmar que outras organizações conseguem visualizar (mesmo sem alterar) os dados de terceiros.",
      ondeErra: "Confunde 'infraestrutura pública/compartilhada' com 'dados visíveis a outros clientes'.",
      palavraCritica: "não podendo ser visualizados nem alterados",
      tecnica: "A nuvem pública utiliza um modelo multi-inquilino (multitenant): a infraestrutura física é compartilhada entre clientes, mas cada um é logicamente isolado dos demais — o termo 'pública' refere-se à infraestrutura compartilhada, e não à exposição dos dados armazenados.",
      regraMental: "Nuvem pública: infra compartilhada, dados isolados. 'Pública' é a infra, não os dados."
    },
    comentario: {
      resolucao: "CERTO. Na nuvem pública, apesar de a infraestrutura física ser compartilhada entre organizações (modelo multi-inquilino), os dados de cada cliente permanecem isolados, não podendo ser visualizados nem alterados por outras organizações que utilizam o mesmo provedor.",
      fundamento: "Doutrina de Informática — Computação em nuvem (nuvem pública, isolamento multi-inquilino).",
      macete: "'Pública' é a infraestrutura compartilhada; os dados de cada cliente são isolados.",
      erroComum: "Achar que 'nuvem pública' significa que os dados armazenados também são públicos ou visíveis a terceiros.",
      comoBancaPensa: "Item 'limpo' que esclarece a distinção entre infraestrutura compartilhada e isolamento lógico de dados."
    }
  },
  {
    id: "TI-085", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Nuvem pública — isolamento multi-inquilino",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "Os dados de uma organização armazenados em nuvem pública podem ser visualizados por outras organizações que utilizam o mesmo provedor, embora estas não possam alterá-los, uma vez que o caráter 'público' desse modelo de nuvem se estende também à visibilidade dos dados armazenados.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "podem ser visualizados ... caráter 'público' ... se estende ... aos dados",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o caráter público da nuvem se refere à infraestrutura, e não à visibilidade dos dados dos clientes.",
      mede: "Informática — Internet e Computação em nuvem (nuvem pública, multi-inquilino).",
      pegadinhaDesc: "A banca estende indevidamente o adjetivo 'pública' da infraestrutura para os dados armazenados.",
      ondeErra: "Assume que 'nuvem pública' implica dados acessíveis a qualquer organização que compartilhe o provedor.",
      palavraCritica: "se estende também à visibilidade dos dados",
      tecnica: "O termo 'nuvem pública' refere-se ao compartilhamento da infraestrutura física entre múltiplos clientes (modelo multi-inquilino), e não à exposição dos dados. Cada organização permanece isolada das demais, sem que outros clientes do mesmo provedor possam visualizar ou alterar seus dados.",
      regraMental: "'Público' descreve a infraestrutura, nunca os dados — que ficam isolados por cliente."
    },
    comentario: {
      resolucao: "ERRADO. Os dados de uma organização armazenados em nuvem pública NÃO podem ser visualizados por outras organizações que utilizam o mesmo provedor — o caráter 'público' refere-se à infraestrutura física compartilhada (modelo multi-inquilino), e não à visibilidade dos dados, que permanecem isolados por cliente.",
      fundamento: "Doutrina de Informática — Computação em nuvem (nuvem pública, isolamento multi-inquilino).",
      macete: "Nunca confundir 'infraestrutura pública' com 'dados públicos'.",
      erroComum: "Estender o adjetivo 'pública' da infraestrutura para a visibilidade dos dados armazenados.",
      comoBancaPensa: "Parte de uma premissa parcialmente correta (dados não alteráveis por terceiros) para inserir uma conclusão falsa (dados visíveis por terceiros)."
    }
  },

  /* ===== CONCEITO DE COMPUTAÇÃO EM NUVEM ===== */
  {
    id: "TI-086", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Conceito e características",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "A computação em nuvem é um estilo de computação que permite acesso remoto a recursos compartilhados de forma dinâmica e escalável, geralmente via Internet, possibilitando ao usuário provisionar recursos sob demanda, sem a necessidade de investimento prévio em infraestrutura própria dimensionada para o pico de uso.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acesso remoto ... dinâmica e escalável ... sob demanda",
    cognitivo: {
      motivo: "Cobrar a definição correta e completa de computação em nuvem, incluindo o provisionamento sob demanda.",
      mede: "Informática — Internet e Computação em nuvem (conceito).",
      pegadinhaDesc: "A banca pode negar a elasticidade/escalabilidade dinâmica do modelo de nuvem.",
      ondeErra: "Acha que a computação em nuvem ainda exige dimensionamento fixo e investimento prévio em infraestrutura própria.",
      palavraCritica: "sem a necessidade de investimento prévio ... dimensionada para o pico de uso",
      tecnica: "A computação em nuvem permite acesso remoto a recursos compartilhados (servidores, armazenamento, aplicações) de forma dinâmica e escalável, geralmente via Internet. O provisionamento sob demanda dispensa o investimento prévio em infraestrutura própria dimensionada para o pico de uso, sendo uma de suas principais vantagens econômicas.",
      regraMental: "Nuvem = acesso remoto, dinâmico, escalável, sob demanda — sem precisar comprar infra própria."
    },
    comentario: {
      resolucao: "CERTO. A computação em nuvem é um estilo de computação que permite acesso remoto a recursos compartilhados de forma dinâmica e escalável, geralmente via Internet, possibilitando o provisionamento sob demanda sem investimento prévio em infraestrutura própria dimensionada para o pico de uso.",
      fundamento: "Doutrina de Informática — Computação em nuvem (conceito e características).",
      macete: "Nuvem: remoto + compartilhado + dinâmico + escalável + sob demanda.",
      erroComum: "Achar que a nuvem ainda exige infraestrutura própria dimensionada previamente.",
      comoBancaPensa: "Item 'limpo' que reúne as características centrais do conceito de computação em nuvem."
    }
  },
  {
    id: "TI-087", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Conceito e características",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "A computação em nuvem não permite o dimensionamento dinâmico e escalável de recursos, sendo necessário que o usuário contrate previamente uma quantidade fixa de capacidade computacional dimensionada para o pico de uso, de forma semelhante à infraestrutura local tradicional.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "não permite ... dimensionamento dinâmico ... quantidade fixa ... dimensionada para o pico",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a elasticidade/escalabilidade dinâmica é característica central da computação em nuvem.",
      mede: "Informática — Internet e Computação em nuvem (conceito).",
      pegadinhaDesc: "A banca nega justamente a característica que diferencia a nuvem da infraestrutura local tradicional.",
      ondeErra: "Confunde o modelo de nuvem (elástico, sob demanda) com o modelo tradicional de infraestrutura própria (fixo, dimensionado previamente).",
      palavraCritica: "não permite ... quantidade fixa ... semelhante à infraestrutura local",
      tecnica: "Uma das principais características da computação em nuvem é justamente permitir o provisionamento dinâmico e escalável de recursos, sob demanda, dispensando a necessidade de dimensionamento fixo prévio — ao contrário da infraestrutura local tradicional, que de fato exige esse planejamento antecipado.",
      regraMental: "Nuvem é o oposto do dimensionamento fixo: ela é elástica e sob demanda."
    },
    comentario: {
      resolucao: "ERRADO. A computação em nuvem permite justamente o dimensionamento dinâmico e escalável de recursos sob demanda, dispensando a contratação prévia de uma capacidade fixa dimensionada para o pico de uso — essa é uma das principais vantagens da nuvem em relação à infraestrutura local tradicional.",
      fundamento: "Doutrina de Informática — Computação em nuvem (conceito e características).",
      macete: "Nuvem = elástica e sob demanda. Infraestrutura fixa é o modelo tradicional, não o de nuvem.",
      erroComum: "Inverter as características da nuvem com as da infraestrutura local tradicional.",
      comoBancaPensa: "Nega a elasticidade da nuvem, atribuindo-lhe as limitações do modelo tradicional de infraestrutura própria."
    }
  },

  /* ===== INTRANET ===== */
  {
    id: "TI-088", disciplina: "TI e Segurança Cibernética", assunto: "Internet e navegação", subassunto: "Intranet e extranet",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A intranet utiliza os mesmos protocolos empregados na Internet, como o TCP/IP e o HTTP, mas constitui uma rede mais restrita, de acesso limitado aos usuários autorizados dentro de uma organização.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mesmos protocolos ... rede mais restrita",
    cognitivo: {
      motivo: "Cobrar que a intranet usa a mesma tecnologia da Internet, mas com acesso restrito à organização.",
      mede: "Informática — Internet e navegação (intranet e extranet).",
      pegadinhaDesc: "A banca pode afirmar que a intranet usa protocolos proprietários, distintos dos da Internet.",
      ondeErra: "Acha que, por ser restrita, a intranet precisa de tecnologia/protocolos diferentes dos usados na Internet.",
      palavraCritica: "mesmos protocolos ... rede mais restrita",
      tecnica: "A intranet emprega os mesmos protocolos da Internet (TCP/IP, HTTP, entre outros), mas é uma rede restrita, de acesso limitado aos usuários de uma organização. Quando esse acesso é estendido a parceiros externos, de forma controlada, tem-se uma extranet.",
      regraMental: "Intranet: mesma tecnologia da Internet, mas de uso interno e restrito."
    },
    comentario: {
      resolucao: "CERTO. A intranet utiliza os mesmos protocolos empregados na Internet (como TCP/IP e HTTP), mas constitui uma rede mais restrita, de acesso limitado aos usuários autorizados dentro de uma organização.",
      fundamento: "Doutrina de Informática — Internet e navegação (intranet e extranet).",
      macete: "Intranet = mesma tecnologia da Internet, uso interno e restrito.",
      erroComum: "Achar que a intranet usa protocolos próprios, diferentes dos da Internet.",
      comoBancaPensa: "Item 'limpo' sobre a definição correta de intranet e sua relação tecnológica com a Internet."
    }
  },
  {
    id: "TI-089", disciplina: "TI e Segurança Cibernética", assunto: "Internet e navegação", subassunto: "Intranet e extranet",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.76,
    enunciado: "A intranet, por constituir uma rede restrita ao ambiente interno de uma organização, utiliza protocolos de comunicação proprietários e incompatíveis com os padrões empregados na Internet pública, como o TCP/IP.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "protocolos ... proprietários e incompatíveis",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a intranet usa os mesmos protocolos da Internet, e não protocolos proprietários.",
      mede: "Informática — Internet e navegação (intranet e extranet).",
      pegadinhaDesc: "A banca associa a restrição de acesso da intranet a uma suposta incompatibilidade tecnológica com a Internet.",
      ondeErra: "Confunde 'acesso restrito' com 'tecnologia proprietária e incompatível'.",
      palavraCritica: "protocolos ... proprietários e incompatíveis",
      tecnica: "A intranet utiliza exatamente os mesmos protocolos empregados na Internet, como TCP/IP e HTTP — a diferença está apenas no escopo de acesso, restrito aos usuários autorizados da organização, e não na tecnologia de rede utilizada.",
      regraMental: "Intranet nunca usa protocolo proprietário — a restrição é de acesso, não de tecnologia."
    },
    comentario: {
      resolucao: "ERRADO. A intranet utiliza os mesmos protocolos empregados na Internet, como TCP/IP e HTTP, e não protocolos proprietários ou incompatíveis. A restrição da intranet está no escopo de acesso (limitado à organização), e não na tecnologia de comunicação utilizada.",
      fundamento: "Doutrina de Informática — Internet e navegação (intranet e extranet).",
      macete: "Restrição de acesso ≠ tecnologia diferente. Intranet usa TCP/IP e HTTP, como a Internet.",
      erroComum: "Achar que uma rede restrita precisa, necessariamente, de protocolos próprios e incompatíveis.",
      comoBancaPensa: "Associa indevidamente a restrição de acesso da intranet a uma incompatibilidade tecnológica inexistente."
    }
  },

  /* ===== SAAS x PAAS ===== */
  {
    id: "TI-090", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "SaaS x PaaS x IaaS",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "No modelo de computação em nuvem denominado PaaS (plataforma como serviço), o provedor disponibiliza infraestrutura e ferramentas de desenvolvimento, permitindo que o cliente desenvolva e gerencie suas próprias aplicações, diferentemente do SaaS, no qual o cliente utiliza um software já pronto, disponibilizado pelo provedor.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "PaaS ... desenvolva e gerencie suas próprias aplicações ... SaaS ... software já pronto",
    cognitivo: {
      motivo: "Cobrar a distinção correta entre PaaS (plataforma para o cliente desenvolver aplicações) e SaaS (software pronto para uso).",
      mede: "Informática — Computação em nuvem (modelos de serviço: SaaS, PaaS, IaaS).",
      pegadinhaDesc: "A banca pode chamar de SaaS o modelo em que o cliente desenvolve suas próprias aplicações (que é, na verdade, PaaS).",
      ondeErra: "Confunde PaaS (plataforma de desenvolvimento) com SaaS (software pronto para uso final).",
      palavraCritica: "PaaS ... desenvolva e gerencie ... SaaS ... software já pronto",
      tecnica: "No PaaS (Platform as a Service), o provedor oferece infraestrutura e ferramentas de desenvolvimento, cabendo ao cliente criar e gerenciar suas próprias aplicações. Já no SaaS (Software as a Service), o cliente apenas utiliza um software já pronto, como Gmail ou Office 365, sem desenvolvê-lo.",
      regraMental: "PaaS: cliente desenvolve apps na plataforma fornecida. SaaS: cliente só usa o software pronto."
    },
    comentario: {
      resolucao: "CERTO. No PaaS (plataforma como serviço), o provedor disponibiliza infraestrutura e ferramentas de desenvolvimento para que o cliente desenvolva e gerencie suas próprias aplicações — diferentemente do SaaS, em que o cliente apenas utiliza um software já pronto fornecido pelo provedor.",
      fundamento: "Doutrina de Informática — Computação em nuvem (SaaS x PaaS x IaaS).",
      macete: "Cliente desenvolve apps = PaaS. Cliente só usa app pronto = SaaS.",
      erroComum: "Chamar de SaaS um modelo em que o cliente efetivamente desenvolve suas próprias aplicações.",
      comoBancaPensa: "Item 'limpo' que contrasta corretamente PaaS e SaaS, evitando a troca de rótulos entre os modelos."
    }
  },
  {
    id: "TI-091", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "SaaS x PaaS x IaaS",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "Na computação em nuvem do tipo software como serviço (SaaS), o provedor oferece infraestrutura e ferramentas de desenvolvimento, permitindo ao cliente desenvolver e gerenciar suas próprias aplicações a partir dessa base fornecida.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "software como serviço (SaaS) ... desenvolver e gerenciar suas próprias aplicações",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a descrição de 'infraestrutura e ferramentas para o cliente desenvolver aplicações' corresponde ao PaaS, e não ao SaaS.",
      mede: "Informática — Computação em nuvem (modelos de serviço: SaaS, PaaS, IaaS).",
      pegadinhaDesc: "A banca rotula como SaaS uma descrição que, na verdade, corresponde ao modelo PaaS.",
      ondeErra: "Não percebe que 'desenvolver e gerenciar suas próprias aplicações' é a marca do PaaS, e não do SaaS.",
      palavraCritica: "software como serviço (SaaS) ... desenvolver e gerenciar suas próprias aplicações",
      tecnica: "A descrição apresentada — infraestrutura e ferramentas de desenvolvimento para o cliente criar e gerenciar suas próprias aplicações — corresponde ao modelo PaaS (Platform as a Service), e não ao SaaS. No SaaS, o cliente apenas utiliza um software já pronto, sem desenvolvê-lo.",
      regraMental: "'Cliente desenvolve aplicação' nunca é SaaS — é sempre PaaS."
    },
    comentario: {
      resolucao: "ERRADO. A descrição apresentada — provedor oferece infraestrutura e ferramentas para o cliente desenvolver e gerenciar suas próprias aplicações — corresponde ao modelo PaaS (Platform as a Service), e não ao SaaS. No SaaS, o cliente apenas utiliza um software já pronto, fornecido pelo provedor.",
      fundamento: "Doutrina de Informática — Computação em nuvem (SaaS x PaaS x IaaS).",
      macete: "Desenvolver app = PaaS. Usar app pronto = SaaS. Nunca inverter.",
      erroComum: "Rotular como SaaS uma descrição que corresponde tecnicamente ao modelo PaaS.",
      comoBancaPensa: "Troca o rótulo do modelo de serviço (PaaS → SaaS), mantendo a descrição técnica correta do PaaS."
    }
  },

  /* ===== ARMAZENAMENTO EM NUVEM ===== */
  {
    id: "TI-092", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Armazenamento em nuvem (cloud storage)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "O serviço de armazenamento em nuvem permite salvar arquivos, bancos de dados e outras informações em servidores remotos, oferecendo vantagens de acessibilidade e escalabilidade frente aos dispositivos de armazenamento local, ainda que sua disponibilidade dependa da conexão à Internet e da infraestrutura do provedor contratado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acessibilidade e escalabilidade ... depende da conexão à Internet",
    cognitivo: {
      motivo: "Cobrar as vantagens do armazenamento em nuvem e sua dependência de conexão à Internet e do provedor.",
      mede: "Informática — Computação em nuvem (armazenamento em nuvem).",
      pegadinhaDesc: "A banca pode omitir a dependência de Internet/provedor, tratando a nuvem como sempre disponível.",
      ondeErra: "Ignora que o acesso ao armazenamento em nuvem depende de conexão à Internet e da disponibilidade do provedor.",
      palavraCritica: "depende da conexão à Internet e da infraestrutura do provedor",
      tecnica: "O armazenamento em nuvem (cloud storage) permite salvar arquivos, bancos de dados e outras informações em servidores remotos, com vantagens de acessibilidade (de qualquer lugar) e escalabilidade (aumento sob demanda) em relação ao armazenamento local — mas depende de conexão à Internet e da infraestrutura do provedor contratado.",
      regraMental: "Nuvem: acessível e escalável, mas sempre dependente de Internet e do provedor."
    },
    comentario: {
      resolucao: "CERTO. O armazenamento em nuvem permite salvar arquivos, bancos de dados e outras informações em servidores remotos, com vantagens de acessibilidade e escalabilidade frente ao armazenamento local — ainda que sua disponibilidade dependa da conexão à Internet e da infraestrutura do provedor contratado.",
      fundamento: "Doutrina de Informática — Computação em nuvem (armazenamento em nuvem).",
      macete: "Nuvem: acessibilidade + escalabilidade, mas sempre com dependência de Internet/provedor.",
      erroComum: "Tratar o armazenamento em nuvem como isento de qualquer dependência externa.",
      comoBancaPensa: "Item 'limpo' que soma as vantagens do cloud storage com sua limitação inerente (dependência de conexão)."
    }
  },
  {
    id: "TI-093", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Armazenamento em nuvem (cloud storage)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.74,
    enunciado: "O serviço de armazenamento em nuvem oferece acessibilidade e escalabilidade totalmente independentes de conexão à Internet, uma vez que os arquivos salvos em servidores remotos permanecem acessíveis ao usuário mesmo na ausência completa de conectividade de rede.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "totalmente independentes de conexão à Internet ... ausência completa de conectividade",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o armazenamento em nuvem depende de conexão à Internet para ser acessado.",
      mede: "Informática — Computação em nuvem (armazenamento em nuvem).",
      pegadinhaDesc: "A banca afirma que os arquivos na nuvem continuam acessíveis mesmo sem qualquer conectividade.",
      ondeErra: "Ignora que o acesso a arquivos armazenados em servidores remotos exige conexão à Internet.",
      palavraCritica: "totalmente independentes ... ausência completa de conectividade",
      tecnica: "O armazenamento em nuvem depende, por definição, de conexão à Internet para que o usuário acesse os arquivos salvos em servidores remotos. Na ausência completa de conectividade, o acesso a esses arquivos fica impossibilitado (salvo cópias sincronizadas localmente, quando disponíveis).",
      regraMental: "Nuvem sem Internet = sem acesso. Não existe cloud storage 'independente de conexão'."
    },
    comentario: {
      resolucao: "ERRADO. O armazenamento em nuvem depende de conexão à Internet para que os arquivos armazenados em servidores remotos sejam acessados — na ausência completa de conectividade, o acesso a esses arquivos fica impossibilitado, ao contrário do que afirma o item.",
      fundamento: "Doutrina de Informática — Computação em nuvem (armazenamento em nuvem).",
      macete: "Nuvem sempre depende de Internet — nunca é 'totalmente independente' de conexão.",
      erroComum: "Achar que arquivos em nuvem continuam acessíveis mesmo sem qualquer conectividade de rede.",
      comoBancaPensa: "Usa 'totalmente independentes' para transformar uma dependência real (conexão à Internet) em algo inexistente."
    }
  },

  /* ===== SAAS — RESPONSABILIDADE DO PROVEDOR ===== */
  {
    id: "TI-094", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "SaaS — responsabilidade do provedor",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "No modelo de computação em nuvem SaaS (software as a service), o provedor detém o controle sobre a infraestrutura de rede, os servidores e o sistema operacional, sendo responsável pela instalação, configuração e manutenção das aplicações disponibilizadas ao consumidor.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "provedor detém o controle ... responsável pela instalação, configuração e manutenção",
    cognitivo: {
      motivo: "Cobrar que, no SaaS, é o provedor (e não o cliente) quem controla a infraestrutura e mantém as aplicações.",
      mede: "Informática — Computação em nuvem (SaaS, responsabilidade do provedor).",
      pegadinhaDesc: "A banca pode inverter a responsabilidade, atribuindo ao cliente o controle da infraestrutura no SaaS.",
      ondeErra: "Confunde as responsabilidades do cliente e do provedor no modelo SaaS.",
      palavraCritica: "provedor detém o controle ... responsável pela instalação, configuração e manutenção",
      tecnica: "No SaaS, o provedor é responsável pela infraestrutura de rede, servidores, sistema operacional e pela instalação, configuração e manutenção das aplicações. O cliente apenas utiliza o software e seus dados, sem gerenciar nenhuma camada de infraestrutura subjacente.",
      regraMental: "SaaS: provedor cuida de tudo (infra + SO + app). Cliente só usa."
    },
    comentario: {
      resolucao: "CERTO. No modelo SaaS, o provedor detém o controle sobre a infraestrutura de rede, os servidores e o sistema operacional, sendo responsável pela instalação, configuração e manutenção das aplicações — cabendo ao cliente apenas utilizar o software disponibilizado.",
      fundamento: "Doutrina de Informática — Computação em nuvem (SaaS, responsabilidade do provedor).",
      macete: "SaaS: provedor controla infra/SO/app. Cliente só usa.",
      erroComum: "Atribuir ao cliente, e não ao provedor, o controle da infraestrutura no modelo SaaS.",
      comoBancaPensa: "Item 'limpo' que descreve corretamente a divisão de responsabilidades no modelo SaaS."
    }
  },
  {
    id: "TI-095", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "SaaS — responsabilidade do provedor",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "No modelo de computação em nuvem SaaS (software as a service), o consumidor tem controle sobre a infraestrutura de rede, os servidores e o sistema operacional, sendo responsável pela instalação, configuração e manutenção das aplicações fornecidas pelo provedor.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "consumidor tem controle ... responsável pela instalação, configuração e manutenção",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que é o provedor — e não o consumidor — quem controla a infraestrutura no modelo SaaS.",
      mede: "Informática — Computação em nuvem (SaaS, responsabilidade do provedor).",
      pegadinhaDesc: "A banca inverte o sujeito responsável pela infraestrutura, atribuindo ao consumidor uma tarefa do provedor.",
      ondeErra: "Troca as responsabilidades: acha que, no SaaS, é o cliente quem cuida de infraestrutura e manutenção.",
      palavraCritica: "consumidor tem controle ... responsável pela instalação",
      tecnica: "No SaaS, é o provedor — e não o consumidor — quem detém o controle sobre a infraestrutura de rede, os servidores e o sistema operacional, sendo responsável pela instalação, configuração e manutenção das aplicações. O consumidor apenas utiliza o software e seus dados.",
      regraMental: "No SaaS, quem cuida da infra é o provedor, nunca o consumidor."
    },
    comentario: {
      resolucao: "ERRADO. No modelo SaaS, é o provedor — e não o consumidor — quem detém o controle sobre a infraestrutura de rede, os servidores e o sistema operacional, sendo responsável pela instalação, configuração e manutenção das aplicações. O consumidor apenas utiliza o software fornecido.",
      fundamento: "Doutrina de Informática — Computação em nuvem (SaaS, responsabilidade do provedor).",
      macete: "SaaS: cliente nunca controla infra/SO — quem controla é sempre o provedor.",
      erroComum: "Inverter o sujeito responsável pela infraestrutura no modelo SaaS.",
      comoBancaPensa: "Troca o sujeito da assertiva (provedor → consumidor) mantendo a descrição técnica da infraestrutura."
    }
  },

  /* ===== ACESSO REMOTO E SUÍTES DE ESCRITÓRIO ===== */
  {
    id: "TI-096", disciplina: "TI e Segurança Cibernética", assunto: "Ferramentas de produtividade e acesso remoto", subassunto: "Acesso remoto e suítes de escritório",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Ferramentas como o Microsoft Remote Desktop e o TeamViewer permitem o acesso remoto a computadores, possibilitando inclusive a transferência de arquivos entre as máquinas conectadas, ao passo que suítes como o Microsoft Office e o LibreOffice oferecem compatibilidade entre diversos formatos de documentos, planilhas e apresentações.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "transferência de arquivos ... compatibilidade entre diversos formatos",
    cognitivo: {
      motivo: "Cobrar que ferramentas de acesso remoto permitem transferência de arquivos e que as suítes de escritório oferecem compatibilidade entre formatos.",
      mede: "Informática — Ferramentas de produtividade e acesso remoto.",
      pegadinhaDesc: "A banca pode negar a possibilidade de transferência de arquivos nesses aplicativos de acesso remoto, ou negar a compatibilidade entre formatos das suítes.",
      ondeErra: "Acha que ferramentas como TeamViewer só permitem visualizar a tela remota, sem transferir arquivos.",
      palavraCritica: "transferência de arquivos ... compatibilidade entre diversos formatos",
      tecnica: "O Microsoft Remote Desktop e o TeamViewer permitem tanto o controle remoto de um computador quanto a transferência de arquivos entre as máquinas conectadas. Já o Microsoft Office e o LibreOffice, por sua vez, oferecem compatibilidade entre diversos formatos de arquivo (por exemplo, .docx e .odt).",
      regraMental: "Remote Desktop/TeamViewer: controle remoto + transferir arquivo. Office/LibreOffice: compatíveis entre si."
    },
    comentario: {
      resolucao: "CERTO. O Microsoft Remote Desktop e o TeamViewer permitem acesso remoto a computadores, possibilitando a transferência de arquivos entre as máquinas conectadas, enquanto o Microsoft Office e o LibreOffice oferecem compatibilidade entre diversos formatos de documentos, planilhas e apresentações.",
      fundamento: "Doutrina de Informática — Ferramentas de produtividade e acesso remoto.",
      macete: "Acesso remoto moderno sempre permite transferir arquivo; Office e LibreOffice são compatíveis entre si.",
      erroComum: "Achar que ferramentas de acesso remoto só permitem visualização, sem transferência de arquivos.",
      comoBancaPensa: "Item 'limpo' que combina dois fatos corretos sobre ferramentas de produtividade amplamente usadas."
    }
  },
  {
    id: "TI-097", disciplina: "TI e Segurança Cibernética", assunto: "Ferramentas de produtividade e acesso remoto", subassunto: "Acesso remoto e suítes de escritório",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.74,
    enunciado: "Ferramentas de acesso remoto como o Microsoft Remote Desktop e o TeamViewer permitem apenas a visualização da tela do computador remoto, não sendo possível, por meio delas, a transferência de arquivos entre as máquinas conectadas, ao contrário do que ocorre com suítes como o Microsoft Office e o LibreOffice, que são totalmente incompatíveis entre si.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "apenas a visualização ... não sendo possível ... transferência ... totalmente incompatíveis",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que ferramentas de acesso remoto permitem transferência de arquivos e que Office/LibreOffice mantêm compatibilidade entre formatos.",
      mede: "Informática — Ferramentas de produtividade e acesso remoto.",
      pegadinhaDesc: "A banca nega dois fatos corretos simultaneamente: a transferência de arquivos e a compatibilidade entre suítes.",
      ondeErra: "Acha que ferramentas de acesso remoto se limitam à visualização de tela e que Office e LibreOffice não têm nenhuma compatibilidade.",
      palavraCritica: "apenas a visualização ... totalmente incompatíveis",
      tecnica: "O Microsoft Remote Desktop e o TeamViewer permitem, além da visualização, a transferência de arquivos entre as máquinas conectadas. Já o Microsoft Office e o LibreOffice mantêm compatibilidade entre diversos formatos de arquivo (como .docx e .odt), não sendo totalmente incompatíveis entre si.",
      regraMental: "Acesso remoto moderno sempre transfere arquivo; Office e LibreOffice sempre têm compatibilidade parcial/total entre formatos."
    },
    comentario: {
      resolucao: "ERRADO. Ferramentas como o Microsoft Remote Desktop e o TeamViewer permitem, sim, a transferência de arquivos entre as máquinas conectadas, além da visualização remota. E o Microsoft Office e o LibreOffice mantêm compatibilidade entre diversos formatos de arquivo, não sendo totalmente incompatíveis entre si.",
      fundamento: "Doutrina de Informática — Ferramentas de produtividade e acesso remoto.",
      macete: "Nunca negar transferência de arquivo em acesso remoto moderno, nem compatibilidade entre Office/LibreOffice.",
      erroComum: "Achar que ferramentas de acesso remoto só exibem a tela e que suítes de escritório distintas são sempre incompatíveis.",
      comoBancaPensa: "Combina duas negações absolutas ('apenas', 'totalmente incompatíveis') para criar um item duplamente falso."
    }
  },

  /* ===== IMPRESSÃO EM REDE ===== */
  {
    id: "TI-098", disciplina: "TI e Segurança Cibernética", assunto: "Ferramentas de produtividade e acesso remoto", subassunto: "Impressão em rede e rastros digitais",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Quando documentos são impressos em uma impressora conectada à rede, é possível, por meio dos registros do servidor de impressão (spooler), resgatar informações como o usuário que solicitou a impressão, a data da impressão, o nome do arquivo impresso e a quantidade de folhas impressas, dados úteis, inclusive, em investigações periciais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "resgatar informações ... usuário ... data ... nome do arquivo ... quantidade de folhas",
    cognitivo: {
      motivo: "Cobrar que a impressão em rede deixa registros recuperáveis, úteis em auditoria e perícia.",
      mede: "Informática — Ferramentas de produtividade (impressão em rede, rastros digitais).",
      pegadinhaDesc: "A banca pode negar a possibilidade de recuperação desses dados após a impressão.",
      ondeErra: "Acha que, uma vez impresso o documento, nenhuma informação sobre a impressão pode ser recuperada.",
      palavraCritica: "resgatar informações ... usuário ... data ... nome do arquivo ... quantidade de folhas",
      tecnica: "Ao imprimir documentos em uma impressora de rede, o servidor de impressão (spooler) registra informações como o usuário solicitante, a data e hora, o nome do arquivo impresso e a quantidade de folhas — dados que podem ser recuperados posteriormente e são úteis em auditorias e perícias forenses.",
      regraMental: "Impressão em rede deixa rastro: usuário, data, arquivo, nº de folhas — tudo fica registrado."
    },
    comentario: {
      resolucao: "CERTO. Quando documentos são impressos em uma impressora de rede, é possível, por meio dos registros do servidor de impressão (spooler), resgatar informações como o usuário solicitante, a data da impressão, o nome do arquivo e a quantidade de folhas impressas — dados úteis, inclusive, em investigações periciais.",
      fundamento: "Doutrina de Informática — Ferramentas de produtividade (impressão em rede, rastros digitais).",
      macete: "Impressora de rede = spooler registra tudo: quem, quando, o quê e quantas páginas.",
      erroComum: "Achar que não é possível recuperar nenhuma informação sobre uma impressão já realizada.",
      comoBancaPensa: "Item 'limpo' sobre um tema de interesse direto para carreiras policiais (rastros digitais e perícia)."
    }
  },
  {
    id: "TI-099", disciplina: "TI e Segurança Cibernética", assunto: "Ferramentas de produtividade e acesso remoto", subassunto: "Impressão em rede e rastros digitais",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.74,
    enunciado: "Documentos impressos em uma impressora conectada à rede não deixam qualquer tipo de registro recuperável após a conclusão da impressão, sendo impossível, em investigações periciais, identificar o usuário solicitante, a data, o nome do arquivo ou a quantidade de folhas impressas.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "não deixam qualquer tipo de registro ... impossível ... identificar",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a impressão em rede deixa registros recuperáveis pelo servidor de impressão.",
      mede: "Informática — Ferramentas de produtividade (impressão em rede, rastros digitais).",
      pegadinhaDesc: "A banca nega totalmente a existência de registros de impressão, o que é falso.",
      ondeErra: "Ignora que o servidor de impressão (spooler) registra usuário, data, arquivo e quantidade de páginas.",
      palavraCritica: "não deixam qualquer tipo de registro ... impossível",
      tecnica: "Os registros do servidor de impressão (spooler) armazenam informações como o usuário solicitante, a data, o nome do arquivo impresso e a quantidade de folhas — dados que podem, sim, ser recuperados após a impressão e utilizados em investigações periciais.",
      regraMental: "Impressão de rede sempre deixa rastro no spooler — nunca é 'impossível' recuperar."
    },
    comentario: {
      resolucao: "ERRADO. Documentos impressos em uma impressora de rede deixam, sim, registros recuperáveis no servidor de impressão (spooler) — incluindo usuário solicitante, data, nome do arquivo e quantidade de folhas —, dados que podem ser utilizados em investigações periciais.",
      fundamento: "Doutrina de Informática — Ferramentas de produtividade (impressão em rede, rastros digitais).",
      macete: "Nunca é 'impossível' recuperar dados de impressão em rede — o spooler sempre registra.",
      erroComum: "Achar que a impressão não deixa nenhum vestígio recuperável após sua conclusão.",
      comoBancaPensa: "Usa termos absolutos ('não deixam qualquer', 'impossível') para negar um fato tecnicamente verificável."
    }
  },

  /* ===== PESQUISA APRIMORADA / DADOS ESTRUTURADOS ===== */
  {
    id: "TI-100", disciplina: "TI e Segurança Cibernética", assunto: "Mecanismos de busca", subassunto: "Pesquisa aprimorada e dados estruturados",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "A pesquisa do tipo aprimorada do Google pode apresentar resultados ricos que dependem de dados estruturados (marcações do tipo schema) presentes nas páginas indexadas, os quais ajudam o mecanismo de busca a organizar e exibir informações adicionais sobre o conteúdo encontrado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dados estruturados ... marcações ... ajudam ... exibir informações adicionais",
    cognitivo: {
      motivo: "Cobrar que a pesquisa aprimorada do Google pode depender de dados estruturados (schema) das páginas indexadas.",
      mede: "Informática — Mecanismos de busca (pesquisa aprimorada, dados estruturados).",
      pegadinhaDesc: "A banca pode negar que resultados de busca dependam de dados estruturados/marcações da página.",
      ondeErra: "Acha que o resultado de busca depende exclusivamente do texto simples da página, ignorando marcações estruturadas.",
      palavraCritica: "dados estruturados (marcações do tipo schema)",
      tecnica: "A pesquisa aprimorada do Google pode apresentar resultados ricos (rich results) — como avaliações, preços ou eventos — que dependem de dados estruturados (marcações schema) presentes nas páginas indexadas, ajudando o mecanismo de busca a organizar e exibir informações adicionais sobre o conteúdo.",
      regraMental: "Resultados ricos do Google dependem de dados estruturados (schema) na página."
    },
    comentario: {
      resolucao: "CERTO. A pesquisa aprimorada do Google pode apresentar resultados ricos que dependem de dados estruturados (marcações do tipo schema) presentes nas páginas indexadas, os quais ajudam o mecanismo de busca a organizar e exibir informações adicionais sobre o conteúdo encontrado.",
      fundamento: "Doutrina de Informática — Mecanismos de busca (pesquisa aprimorada, dados estruturados).",
      macete: "Resultados ricos = dados estruturados (schema) na página indexada.",
      erroComum: "Achar que os resultados de busca dependem apenas do texto puro, sem qualquer marcação estruturada.",
      comoBancaPensa: "Item 'limpo' sobre um recurso técnico de SEO/busca pouco conhecido, mas relevante."
    }
  },
  {
    id: "TI-101", disciplina: "TI e Segurança Cibernética", assunto: "Mecanismos de busca", subassunto: "Pesquisa aprimorada e dados estruturados",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "A pesquisa do tipo aprimorada do Google apresenta resultados que independem de qualquer marcação ou dado estruturado presente nas páginas indexadas, uma vez que o mecanismo de busca considera exclusivamente o texto simples do conteúdo para exibir seus resultados.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "independem de qualquer marcação ... exclusivamente o texto simples",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a pesquisa aprimorada do Google pode depender de dados estruturados (schema) da página.",
      mede: "Informática — Mecanismos de busca (pesquisa aprimorada, dados estruturados).",
      pegadinhaDesc: "A banca nega totalmente o papel dos dados estruturados na exibição de resultados de busca.",
      ondeErra: "Ignora que marcações estruturadas (schema) influenciam a exibição de resultados ricos pelo Google.",
      palavraCritica: "independem de qualquer marcação ... exclusivamente o texto simples",
      tecnica: "A pesquisa aprimorada do Google pode apresentar resultados ricos que dependem justamente de dados estruturados (marcações schema) presentes nas páginas indexadas — o mecanismo de busca não se limita ao texto simples do conteúdo.",
      regraMental: "Google usa dados estruturados, sim — nunca é 'exclusivamente texto simples'."
    },
    comentario: {
      resolucao: "ERRADO. A pesquisa aprimorada do Google pode apresentar resultados ricos que dependem de dados estruturados (marcações do tipo schema) presentes nas páginas indexadas — o mecanismo de busca não considera exclusivamente o texto simples do conteúdo.",
      fundamento: "Doutrina de Informática — Mecanismos de busca (pesquisa aprimorada, dados estruturados).",
      macete: "Nunca é 'exclusivamente texto simples' — dados estruturados (schema) importam para o Google.",
      erroComum: "Achar que marcações estruturadas nas páginas não influenciam em nada os resultados de busca.",
      comoBancaPensa: "Nega totalmente um mecanismo técnico real (dados estruturados) para induzir o erro."
    }
  },

  /* ===== ASPAS DUPLAS NA BUSCA ===== */
  {
    id: "TI-102", disciplina: "TI e Segurança Cibernética", assunto: "Mecanismos de busca", subassunto: "Operadores de pesquisa (aspas duplas)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Ao se delimitar uma frase entre aspas duplas em mecanismos de busca como o Google, o resultado é restrito a páginas que contenham a sequência exata de palavras da frase pesquisada, ainda que o mecanismo geralmente ignore diferenças de capitalização (maiúsculas/minúsculas) e a maior parte da pontuação presente nos termos originais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sequência exata de palavras ... ignore ... capitalização ... pontuação",
    cognitivo: {
      motivo: "Cobrar que as aspas duplas restringem à sequência exata de palavras, mas o mecanismo ainda ignora pontuação e capitalização.",
      mede: "Informática — Mecanismos de busca (operadores de pesquisa, aspas duplas).",
      pegadinhaDesc: "A banca pode afirmar que as aspas exigem também a mesma pontuação e capitalização do termo original.",
      ondeErra: "Acha que 'sequência exata de palavras' implica exigir também a mesma pontuação e maiúsculas/minúsculas.",
      palavraCritica: "geralmente ignore ... capitalização ... pontuação",
      tecnica: "As aspas duplas em mecanismos de busca como o Google restringem os resultados a páginas com a sequência exata das palavras delimitadas, mas o mecanismo geralmente ignora diferenças de capitalização e a maior parte da pontuação presentes na consulta original — o operador não exige correspondência literal caractere a caractere.",
      regraMental: "Aspas = ordem exata das palavras. Mas maiúscula/minúscula e pontuação continuam sendo ignoradas."
    },
    comentario: {
      resolucao: "CERTO. Ao delimitar uma frase entre aspas duplas, o mecanismo de busca restringe os resultados à sequência exata de palavras, mas geralmente ignora diferenças de capitalização e a maior parte da pontuação presentes nos termos da consulta original.",
      fundamento: "Doutrina de Informática — Mecanismos de busca (operadores de pesquisa, aspas duplas).",
      macete: "Aspas = ordem exata das palavras, não exige mesma pontuação/capitalização.",
      erroComum: "Achar que aspas duplas exigem correspondência exata de pontuação e maiúsculas/minúsculas.",
      comoBancaPensa: "Item 'limpo' que separa corretamente o que as aspas garantem (ordem das palavras) do que elas não garantem (pontuação/capitalização)."
    }
  },
  {
    id: "TI-103", disciplina: "TI e Segurança Cibernética", assunto: "Mecanismos de busca", subassunto: "Operadores de pesquisa (aspas duplas)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Ao se usar aspas duplas para delimitar uma frase de pesquisa em motores de busca como o Google, o mecanismo restringe os resultados a páginas que contenham a sequência de palavras idêntica à da frase delimitada, incluindo-se a mesma pontuação e capitalização presentes nos termos de consulta originais.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "incluindo-se a mesma pontuação e capitalização",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o mecanismo de busca ignora pontuação e capitalização mesmo com o uso de aspas duplas.",
      mede: "Informática — Mecanismos de busca (operadores de pesquisa, aspas duplas).",
      pegadinhaDesc: "A banca estende indevidamente a exigência de 'sequência exata de palavras' também à pontuação e capitalização.",
      ondeErra: "Generaliza a precisão do operador de aspas para elementos (pontuação, maiúsculas/minúsculas) que o mecanismo efetivamente ignora.",
      palavraCritica: "incluindo-se a mesma pontuação e capitalização",
      tecnica: "As aspas duplas restringem a busca à sequência exata das palavras da frase, mas o mecanismo de busca geralmente ignora diferenças de pontuação e de capitalização (maiúsculas/minúsculas) presentes nos termos originais — a exigência de correspondência exata não se estende a esses dois elementos.",
      regraMental: "Aspas garantem a ordem das palavras — nunca a pontuação e a capitalização idênticas."
    },
    comentario: {
      resolucao: "ERRADO. As aspas duplas restringem os resultados à sequência exata das palavras da frase pesquisada, mas o mecanismo de busca geralmente ignora a pontuação e a capitalização (maiúsculas/minúsculas) dos termos originais — ao contrário do que afirma o item.",
      fundamento: "Doutrina de Informática — Mecanismos de busca (operadores de pesquisa, aspas duplas).",
      macete: "O erro está em exigir 'mesma pontuação e capitalização' — isso o operador de aspas não garante.",
      erroComum: "Estender a precisão das aspas duplas (ordem das palavras) também à pontuação e à capitalização.",
      comoBancaPensa: "Generaliza indevidamente a exatidão do operador de busca para aspectos que ele não abrange."
    }
  },

  /* ===== ENDEREÇO IP x DNS x ARP ===== */
  {
    id: "TI-104", disciplina: "TI e Segurança Cibernética", assunto: "Internet e navegação", subassunto: "Endereço IP, DNS e ARP",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Em redes de computadores, o endereço IP constitui um endereço lógico que identifica um dispositivo na rede, sendo a conversão de nomes de domínio em endereços IP realizada pelo protocolo DNS, ao passo que a conversão de endereços IP em endereços físicos (MAC) é realizada pelo protocolo ARP.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "endereço lógico ... DNS ... nomes de domínio em IP ... ARP ... IP em endereço físico",
    cognitivo: {
      motivo: "Cobrar a distinção correta entre endereço IP (lógico), DNS (nome→IP) e ARP (IP→MAC).",
      mede: "Informática — Internet e Redes (endereço IP, DNS, ARP).",
      pegadinhaDesc: "A banca pode atribuir ao próprio endereço IP a função de 'converter' nomes de domínio, confundindo-o com o DNS.",
      ondeErra: "Confunde o endereço IP (um identificador lógico) com o protocolo DNS (responsável pela conversão de nomes).",
      palavraCritica: "endereço lógico ... DNS ... ARP",
      tecnica: "O endereço IP é um endereço lógico que identifica um dispositivo em uma rede. A conversão de nomes de domínio (como 'exemplo.com') em endereços IP é função do protocolo DNS (Domain Name System). Já a conversão de um endereço IP em um endereço físico (MAC) da interface de rede é função do protocolo ARP (Address Resolution Protocol).",
      regraMental: "IP = endereço lógico. DNS = nome → IP. ARP = IP → MAC (endereço físico)."
    },
    comentario: {
      resolucao: "CERTO. O endereço IP é um endereço lógico que identifica um dispositivo na rede. A conversão de nomes de domínio em endereços IP é realizada pelo protocolo DNS, enquanto a conversão de endereços IP em endereços físicos (MAC) é realizada pelo protocolo ARP.",
      fundamento: "Doutrina de Informática — Internet e Redes (endereço IP, DNS, ARP).",
      macete: "IP: lógico. DNS: nome→IP. ARP: IP→MAC. Três coisas diferentes, não confundir.",
      erroComum: "Atribuir ao endereço IP, em vez de ao DNS, a função de converter nomes de domínio.",
      comoBancaPensa: "Item 'limpo' que exige a distinção precisa entre três conceitos de redes frequentemente confundidos."
    }
  },
  {
    id: "TI-105", disciplina: "TI e Segurança Cibernética", assunto: "Internet e navegação", subassunto: "Endereço IP, DNS e ARP",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "Em redes de computadores, o endereço IP é definido como o protocolo responsável pela conversão de nomes de domínio em endereços físicos de dispositivos, função que é desempenhada de forma independente dos protocolos DNS e ARP.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "endereço IP é definido como o protocolo responsável pela conversão",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o IP é um endereço lógico (não um protocolo conversor), e que essa conversão é feita por DNS e ARP.",
      mede: "Informática — Internet e Redes (endereço IP, DNS, ARP).",
      pegadinhaDesc: "A banca transforma o endereço IP em um 'protocolo conversor', função que na verdade pertence ao DNS e ao ARP.",
      ondeErra: "Confunde o endereço IP (identificador lógico) com os protocolos responsáveis pela conversão de nomes/endereços (DNS e ARP).",
      palavraCritica: "endereço IP é definido como o protocolo responsável pela conversão",
      tecnica: "O endereço IP não é um protocolo, mas um endereço lógico que identifica um dispositivo na rede. A conversão de nomes de domínio em endereços IP é função do DNS, e a conversão de endereços IP em endereços físicos (MAC) é função do ARP — não do próprio endereço IP.",
      regraMental: "IP não converte nada — é só um endereço. Quem converte é o DNS (nome) e o ARP (MAC)."
    },
    comentario: {
      resolucao: "ERRADO. O endereço IP não é um protocolo, mas um endereço lógico que identifica um dispositivo na rede. A conversão de nomes de domínio em endereços IP é função do DNS, e a conversão de endereços IP em endereços físicos (MAC) é função do ARP — e não do próprio endereço IP.",
      fundamento: "Doutrina de Informática — Internet e Redes (endereço IP, DNS, ARP).",
      macete: "IP não é protocolo de conversão — é só o endereço. DNS e ARP é que convertem.",
      erroComum: "Confundir o endereço IP com os protocolos DNS e ARP, atribuindo-lhe uma função que não é sua.",
      comoBancaPensa: "Redefine erroneamente o endereço IP como um 'protocolo', atribuindo-lhe funções de DNS e ARP."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE43);

/* Frequência de temas — TI e Segurança Cibernética (Módulo Internet) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "TI e Segurança Cibernética");
  if (!d) { d = { disciplina: "TI e Segurança Cibernética", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Computação em nuvem (SaaS x PaaS x IaaS, armazenamento, nuvem pública)", freq: 80, tendencia: "alta", prob: 0.8 },
    { tema: "Navegação anônima, intranet/extranet e ferramentas de acesso remoto", freq: 78, tendencia: "alta", prob: 0.78 },
    { tema: "Mecanismos de busca (pesquisa aprimorada, dados estruturados, aspas)", freq: 78, tendencia: "media", prob: 0.78 },
    { tema: "Redes de computadores — endereço IP, DNS e ARP", freq: 79, tendencia: "media", prob: 0.79 },
  );
})();
