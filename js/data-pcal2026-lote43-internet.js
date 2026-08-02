/* =====================================================================
   QUESTLAB — Lote 43: INTERNET (navegação, nuvem, redes, buscadores)
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "A navegação em abas anônimas (ou privadas) evita que o navegador salve, no próprio dispositivo, o histórico de navegação, os cookies e o cache da sessão, mas não impede que sites visitados e o provedor de Internet identifiquem as atividades realizadas pelo usuário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não impede que sites ... e o provedor ... identifiquem",
    cognitivo: {
      motivo: "Cobrar que a navegação anônima só oferece privacidade local, sem ocultar a atividade perante sites e provedores.",
      palavraCritica: "não impede ... identifiquem",
    },
    comentario: {
      resolucao: "CERTO. O modo anônimo age em um lugar só — o seu dispositivo. Ele deixa de gravar histórico, cookies e cache da sessão localmente. Fora dali nada muda: o site visitado continua vendo seu IP, o provedor continua registrando as conexões, e o administrador da rede corporativa continua enxergando o tráfego. Não confundir com VPN ou Tor, que atuam sobre o CAMINHO da conexão, não sobre o registro local. Item que afirmasse que a aba anônima \"oculta o endereço IP\" ou \"impede o rastreamento pelos sites\" estaria ERRADO.",
      fundamento: "Doutrina de Informática — Internet (navegação anônima/privada).",
      macete: "Anônimo ≠ anonimato na Internet: só esconde do dispositivo, não da rede.",
      erroComum: "Achar que a aba anônima torna o usuário invisível para sites e provedores.",
      comoBancaPensa: "Item 'limpo' que corrige a crença popular equivocada sobre o alcance da navegação privada."
    }
  },
  {
    id: "TI-083", disciplina: "TI e Segurança Cibernética", assunto: "Internet e navegação", subassunto: "Navegação anônima/privada",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Ao navegar em abas anônimas (ou privadas), o usuário torna-se completamente irrastreável na Internet, uma vez que esse modo de navegação impede que sites visitados e o provedor de acesso identifiquem as atividades realizadas durante a sessão.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "completamente irrastreável ... impede que sites ... identifiquem",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a navegação anônima não impede o rastreamento por sites e provedores.",
      palavraCritica: "completamente irrastreável ... impede que sites ... identifiquem",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Em uma nuvem pública, embora a infraestrutura física seja compartilhada entre diferentes organizações (modelo multi-inquilino), os dados de cada cliente permanecem isolados, não podendo ser visualizados nem alterados por outras organizações que utilizam o mesmo provedor.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "infraestrutura ... compartilhada ... dados ... permanecem isolados",
    cognitivo: {
      motivo: "Cobrar que, apesar da infraestrutura compartilhada, os dados de cada organização permanecem isolados na nuvem pública.",
      palavraCritica: "não podendo ser visualizados nem alterados",
    },
    comentario: {
      resolucao: "CERTO. O item separa duas camadas que a banca vive embaralhando: o hardware é compartilhado, os dados não. O isolamento vem da virtualização somada ao controle de acesso — cada inquilino enxerga apenas sua fatia lógica, ainda que os bits vizinhos morem no mesmo disco físico. A inversão típica afirma que, por ser infraestrutura compartilhada, \"outras organizações podem acessar os dados\" ou que \"não existe isolamento em nuvem pública\". Compartilhamento físico não é acesso mútuo.",
      fundamento: "Doutrina de Informática — Computação em nuvem (nuvem pública, isolamento multi-inquilino).",
      macete: "'Pública' é a infraestrutura compartilhada; os dados de cada cliente são isolados.",
      erroComum: "Achar que 'nuvem pública' significa que os dados armazenados também são públicos ou visíveis a terceiros.",
      comoBancaPensa: "Item 'limpo' que esclarece a distinção entre infraestrutura compartilhada e isolamento lógico de dados."
    }
  },
  {
    id: "TI-085", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Nuvem pública — isolamento multi-inquilino",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "Os dados de uma organização armazenados em nuvem pública podem ser visualizados por outras organizações que utilizam o mesmo provedor, embora estas não possam alterá-los, uma vez que o caráter 'público' desse modelo de nuvem se estende também à visibilidade dos dados armazenados.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "podem ser visualizados ... caráter 'público' ... se estende ... aos dados",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o caráter público da nuvem se refere à infraestrutura, e não à visibilidade dos dados dos clientes.",
      palavraCritica: "se estende também à visibilidade dos dados",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "A computação em nuvem é um estilo de computação que permite acesso remoto a recursos compartilhados de forma dinâmica e escalável, geralmente via Internet, possibilitando ao usuário provisionar recursos sob demanda, sem a necessidade de investimento prévio em infraestrutura própria dimensionada para o pico de uso.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acesso remoto ... dinâmica e escalável ... sob demanda",
    cognitivo: {
      motivo: "Cobrar a definição correta e completa de computação em nuvem, incluindo o provisionamento sob demanda.",
      palavraCritica: "sem a necessidade de investimento prévio ... dimensionada para o pico de uso",
    },
    comentario: {
      resolucao: "CERTO. O núcleo do conceito está em \"sob demanda\" e \"sem investimento prévio dimensionado para o pico\": a nuvem troca CAPEX por OPEX. Em vez de comprar servidor para o dia de maior movimento e mantê-lo ocioso os outros 364, paga-se o que se consumir. As cinco características essenciais do modelo NIST são autosserviço sob demanda, amplo acesso pela rede, agrupamento de recursos, elasticidade rápida e serviço medido — o enunciado tangencia quase todas. O erro comum é reduzir nuvem a \"arquivo guardado na Internet\", que é apenas um dos serviços dela.",
      fundamento: "Doutrina de Informática — Computação em nuvem (conceito e características).",
      macete: "Nuvem: remoto + compartilhado + dinâmico + escalável + sob demanda.",
      erroComum: "Achar que a nuvem ainda exige infraestrutura própria dimensionada previamente.",
      comoBancaPensa: "Item 'limpo' que reúne as características centrais do conceito de computação em nuvem."
    }
  },
  {
    id: "TI-087", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Conceito e características",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "A computação em nuvem não permite o dimensionamento dinâmico e escalável de recursos, sendo necessário que o usuário contrate previamente uma quantidade fixa de capacidade computacional dimensionada para o pico de uso, de forma semelhante à infraestrutura local tradicional.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "não permite ... dimensionamento dinâmico ... quantidade fixa ... dimensionada para o pico",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a elasticidade/escalabilidade dinâmica é característica central da computação em nuvem.",
      palavraCritica: "não permite ... quantidade fixa ... semelhante à infraestrutura local",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A intranet utiliza os mesmos protocolos empregados na Internet, como o TCP/IP e o HTTP, mas constitui uma rede mais restrita, de acesso limitado aos usuários autorizados dentro de uma organização.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mesmos protocolos ... rede mais restrita",
    cognitivo: {
      motivo: "Cobrar que a intranet usa a mesma tecnologia da Internet, mas com acesso restrito à organização.",
      palavraCritica: "mesmos protocolos ... rede mais restrita",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.76,
    enunciado: "A intranet, por constituir uma rede restrita ao ambiente interno de uma organização, utiliza protocolos de comunicação proprietários e incompatíveis com os padrões empregados na Internet pública, como o TCP/IP.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "protocolos ... proprietários e incompatíveis",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a intranet usa os mesmos protocolos da Internet, e não protocolos proprietários.",
      palavraCritica: "protocolos ... proprietários e incompatíveis",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "No modelo de computação em nuvem denominado PaaS (plataforma como serviço), o provedor disponibiliza infraestrutura e ferramentas de desenvolvimento, permitindo que o cliente desenvolva e gerencie suas próprias aplicações, diferentemente do SaaS, no qual o cliente utiliza um software já pronto, disponibilizado pelo provedor.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "PaaS ... desenvolva e gerencie suas próprias aplicações ... SaaS ... software já pronto",
    cognitivo: {
      motivo: "Cobrar a distinção correta entre PaaS (plataforma para o cliente desenvolver aplicações) e SaaS (software pronto para uso).",
      palavraCritica: "PaaS ... desenvolva e gerencie ... SaaS ... software já pronto",
    },
    comentario: {
      resolucao: "CERTO. A diferença entre os modelos é O QUE já vem pronto do provedor. IaaS entrega a máquina — você instala sistema operacional, runtime e aplicação. PaaS entrega o ambiente de execução — você sobe só o código. SaaS entrega o software funcionando — você apenas usa. Em prova, o critério de desempate é sempre um: quem administra o sistema operacional? Em IaaS, o cliente; em PaaS e SaaS, o provedor. A confusão frequente é chamar de PaaS o serviço em que o usuário só consome a aplicação pronta — isso é SaaS.",
      fundamento: "Doutrina de Informática — Computação em nuvem (SaaS x PaaS x IaaS).",
      macete: "Cliente desenvolve apps = PaaS. Cliente só usa app pronto = SaaS.",
      erroComum: "Chamar de SaaS um modelo em que o cliente efetivamente desenvolve suas próprias aplicações.",
      comoBancaPensa: "Item 'limpo' que contrasta corretamente PaaS e SaaS, evitando a troca de rótulos entre os modelos."
    }
  },
  {
    id: "TI-091", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "SaaS x PaaS x IaaS",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "Na computação em nuvem do tipo software como serviço (SaaS), o provedor oferece infraestrutura e ferramentas de desenvolvimento, permitindo ao cliente desenvolver e gerenciar suas próprias aplicações a partir dessa base fornecida.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "software como serviço (SaaS) ... desenvolver e gerenciar suas próprias aplicações",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a descrição de 'infraestrutura e ferramentas para o cliente desenvolver aplicações' corresponde ao PaaS, e não ao SaaS.",
      palavraCritica: "software como serviço (SaaS) ... desenvolver e gerenciar suas próprias aplicações",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "O serviço de armazenamento em nuvem permite salvar arquivos, bancos de dados e outras informações em servidores remotos, oferecendo vantagens de acessibilidade e escalabilidade frente aos dispositivos de armazenamento local, ainda que sua disponibilidade dependa da conexão à Internet e da infraestrutura do provedor contratado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acessibilidade e escalabilidade ... depende da conexão à Internet",
    cognitivo: {
      motivo: "Cobrar as vantagens do armazenamento em nuvem e sua dependência de conexão à Internet e do provedor.",
      palavraCritica: "depende da conexão à Internet e da infraestrutura do provedor",
    },
    comentario: {
      resolucao: "CERTO. O que sustenta o item é a ressalva final, não a definição. A banca escreve essa mesma frase suprimindo a dependência — \"garante disponibilidade permanente\", \"dispensa conexão\" — e aí ela fica ERRADA. Nuvem não elimina o ponto único de falha: desloca-o do seu HD para o link de Internet e para o datacenter do provedor. Acessibilidade e escalabilidade são reais; disponibilidade absoluta, não. Nenhum provedor sério promete 100% — os contratos falam em 99,9% e derivados.",
      fundamento: "Doutrina de Informática — Computação em nuvem (armazenamento em nuvem).",
      macete: "Nuvem: acessibilidade + escalabilidade, mas sempre com dependência de Internet/provedor.",
      erroComum: "Tratar o armazenamento em nuvem como isento de qualquer dependência externa.",
      comoBancaPensa: "Item 'limpo' que soma as vantagens do cloud storage com sua limitação inerente (dependência de conexão)."
    }
  },
  {
    id: "TI-093", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Armazenamento em nuvem (cloud storage)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.74,
    enunciado: "O serviço de armazenamento em nuvem oferece acessibilidade e escalabilidade totalmente independentes de conexão à Internet, uma vez que os arquivos salvos em servidores remotos permanecem acessíveis ao usuário mesmo na ausência completa de conectividade de rede.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "totalmente independentes de conexão à Internet ... ausência completa de conectividade",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o armazenamento em nuvem depende de conexão à Internet para ser acessado.",
      palavraCritica: "totalmente independentes ... ausência completa de conectividade",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "No modelo de computação em nuvem SaaS (software as a service), o provedor detém o controle sobre a infraestrutura de rede, os servidores e o sistema operacional, sendo responsável pela instalação, configuração e manutenção das aplicações disponibilizadas ao consumidor.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "provedor detém o controle ... responsável pela instalação, configuração e manutenção",
    cognitivo: {
      motivo: "Cobrar que, no SaaS, é o provedor (e não o cliente) quem controla a infraestrutura e mantém as aplicações.",
      palavraCritica: "provedor detém o controle ... responsável pela instalação, configuração e manutenção",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "No modelo de computação em nuvem SaaS (software as a service), o consumidor tem controle sobre a infraestrutura de rede, os servidores e o sistema operacional, sendo responsável pela instalação, configuração e manutenção das aplicações fornecidas pelo provedor.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "consumidor tem controle ... responsável pela instalação, configuração e manutenção",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que é o provedor — e não o consumidor — quem controla a infraestrutura no modelo SaaS.",
      palavraCritica: "consumidor tem controle ... responsável pela instalação",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Ferramentas como o Microsoft Remote Desktop e o TeamViewer permitem o acesso remoto a computadores, possibilitando inclusive a transferência de arquivos entre as máquinas conectadas, ao passo que suítes como o Microsoft Office e o LibreOffice oferecem compatibilidade entre diversos formatos de documentos, planilhas e apresentações.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "transferência de arquivos ... compatibilidade entre diversos formatos",
    cognitivo: {
      motivo: "Cobrar que ferramentas de acesso remoto permitem transferência de arquivos e que as suítes de escritório oferecem compatibilidade entre formatos.",
      palavraCritica: "transferência de arquivos ... compatibilidade entre diversos formatos",
    },
    comentario: {
      resolucao: "CERTO. São duas afirmações independentes e ambas verdadeiras. Remote Desktop e TeamViewer não apenas espelham a tela: transferem arquivos entre as máquinas conectadas. Office e LibreOffice leem e gravam os formatos um do outro (.docx/.odt, .xlsx/.ods, .pptx/.odp). Repare no grau escolhido: \"compatibilidade\" não é fidelidade integral — macros VBA e formatação avançada podem se perder na conversão. Item que afirmasse compatibilidade \"total, sem qualquer perda\" estaria ERRADO.",
      fundamento: "Doutrina de Informática — Ferramentas de produtividade e acesso remoto.",
      macete: "Acesso remoto moderno sempre permite transferir arquivo; Office e LibreOffice são compatíveis entre si.",
      erroComum: "Achar que ferramentas de acesso remoto só permitem visualização, sem transferência de arquivos.",
      comoBancaPensa: "Item 'limpo' que combina dois fatos corretos sobre ferramentas de produtividade amplamente usadas."
    }
  },
  {
    id: "TI-097", disciplina: "TI e Segurança Cibernética", assunto: "Ferramentas de produtividade e acesso remoto", subassunto: "Acesso remoto e suítes de escritório",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.74,
    enunciado: "Ferramentas de acesso remoto como o Microsoft Remote Desktop e o TeamViewer permitem apenas a visualização da tela do computador remoto, não sendo possível, por meio delas, a transferência de arquivos entre as máquinas conectadas, ao contrário do que ocorre com suítes como o Microsoft Office e o LibreOffice, que são totalmente incompatíveis entre si.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "apenas a visualização ... não sendo possível ... transferência ... totalmente incompatíveis",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que ferramentas de acesso remoto permitem transferência de arquivos e que Office/LibreOffice mantêm compatibilidade entre formatos.",
      palavraCritica: "apenas a visualização ... totalmente incompatíveis",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Quando documentos são impressos em uma impressora conectada à rede, é possível, por meio dos registros do servidor de impressão (spooler), resgatar informações como o usuário que solicitou a impressão, a data da impressão, o nome do arquivo impresso e a quantidade de folhas impressas, dados úteis, inclusive, em investigações periciais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "resgatar informações ... usuário ... data ... nome do arquivo ... quantidade de folhas",
    cognitivo: {
      motivo: "Cobrar que a impressão em rede deixa registros recuperáveis, úteis em auditoria e perícia.",
      palavraCritica: "resgatar informações ... usuário ... data ... nome do arquivo ... quantidade de folhas",
    },
    comentario: {
      resolucao: "CERTO. O servidor de impressão registra cada trabalho que entra na fila, e é desse log que se reconstrói quem imprimiu, quando, qual arquivo e quantas páginas — daí impressão em rede deixar rastro aproveitável em perícia. O limite a guardar: o log preserva os METADADOS do trabalho, não necessariamente uma cópia do conteúdo impresso. Recuperar o teor do documento depende de o spool ter sido retido em disco, o que não é o comportamento padrão. Item que tratasse isso como certo exigiria bem mais cuidado.",
      fundamento: "Doutrina de Informática — Ferramentas de produtividade (impressão em rede, rastros digitais).",
      macete: "Impressora de rede = spooler registra tudo: quem, quando, o quê e quantas páginas.",
      erroComum: "Achar que não é possível recuperar nenhuma informação sobre uma impressão já realizada.",
      comoBancaPensa: "Item 'limpo' sobre um tema de interesse direto para carreiras policiais (rastros digitais e perícia)."
    }
  },
  {
    id: "TI-099", disciplina: "TI e Segurança Cibernética", assunto: "Ferramentas de produtividade e acesso remoto", subassunto: "Impressão em rede e rastros digitais",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.74,
    enunciado: "Documentos impressos em uma impressora conectada à rede não deixam qualquer tipo de registro recuperável após a conclusão da impressão, sendo impossível, em investigações periciais, identificar o usuário solicitante, a data, o nome do arquivo ou a quantidade de folhas impressas.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "não deixam qualquer tipo de registro ... impossível ... identificar",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a impressão em rede deixa registros recuperáveis pelo servidor de impressão.",
      palavraCritica: "não deixam qualquer tipo de registro ... impossível",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "A pesquisa do tipo aprimorada do Google pode apresentar resultados ricos que dependem de dados estruturados (marcações do tipo schema) presentes nas páginas indexadas, os quais ajudam o mecanismo de busca a organizar e exibir informações adicionais sobre o conteúdo encontrado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dados estruturados ... marcações ... ajudam ... exibir informações adicionais",
    cognitivo: {
      motivo: "Cobrar que a pesquisa aprimorada do Google pode depender de dados estruturados (schema) das páginas indexadas.",
      palavraCritica: "dados estruturados (marcações do tipo schema)",
    },
    comentario: {
      resolucao: "CERTO. Dados estruturados (vocabulário schema.org) são marcações embutidas no HTML que declaram ao buscador o QUE cada trecho significa: que aquele número é uma nota de avaliação, que aquela data é o início de um evento, que aquele bloco é uma receita. É isso que habilita o resultado rico — estrelas, preço, FAQ expansível. Ponto de atenção para prova: a marcação HABILITA a exibição, não a garante. O buscador decide se e como exibe. Item que dissesse que o schema \"assegura\" ou \"obriga\" o resultado rico estaria ERRADO.",
      fundamento: "Doutrina de Informática — Mecanismos de busca (pesquisa aprimorada, dados estruturados).",
      macete: "Resultados ricos = dados estruturados (schema) na página indexada.",
      erroComum: "Achar que os resultados de busca dependem apenas do texto puro, sem qualquer marcação estruturada.",
      comoBancaPensa: "Item 'limpo' sobre um recurso técnico de SEO/busca pouco conhecido, mas relevante."
    }
  },
  {
    id: "TI-101", disciplina: "TI e Segurança Cibernética", assunto: "Mecanismos de busca", subassunto: "Pesquisa aprimorada e dados estruturados",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "A pesquisa do tipo aprimorada do Google apresenta resultados que independem de qualquer marcação ou dado estruturado presente nas páginas indexadas, uma vez que o mecanismo de busca considera exclusivamente o texto simples do conteúdo para exibir seus resultados.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "independem de qualquer marcação ... exclusivamente o texto simples",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a pesquisa aprimorada do Google pode depender de dados estruturados (schema) da página.",
      palavraCritica: "independem de qualquer marcação ... exclusivamente o texto simples",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Ao se delimitar uma frase entre aspas duplas em mecanismos de busca como o Google, o resultado é restrito a páginas que contenham a sequência exata de palavras da frase pesquisada, ainda que o mecanismo geralmente ignore diferenças de capitalização (maiúsculas/minúsculas) e a maior parte da pontuação presente nos termos originais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sequência exata de palavras ... ignore ... capitalização ... pontuação",
    cognitivo: {
      motivo: "Cobrar que as aspas duplas restringem à sequência exata de palavras, mas o mecanismo ainda ignora pontuação e capitalização.",
      palavraCritica: "geralmente ignore ... capitalização ... pontuação",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Ao se usar aspas duplas para delimitar uma frase de pesquisa em motores de busca como o Google, o mecanismo restringe os resultados a páginas que contenham a sequência de palavras idêntica à da frase delimitada, incluindo-se a mesma pontuação e capitalização presentes nos termos de consulta originais.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "incluindo-se a mesma pontuação e capitalização",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o mecanismo de busca ignora pontuação e capitalização mesmo com o uso de aspas duplas.",
      palavraCritica: "incluindo-se a mesma pontuação e capitalização",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Em redes de computadores, o endereço IP constitui um endereço lógico que identifica um dispositivo na rede, sendo a conversão de nomes de domínio em endereços IP realizada pelo protocolo DNS, ao passo que a conversão de endereços IP em endereços físicos (MAC) é realizada pelo protocolo ARP.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "endereço lógico ... DNS ... nomes de domínio em IP ... ARP ... IP em endereço físico",
    cognitivo: {
      motivo: "Cobrar a distinção correta entre endereço IP (lógico), DNS (nome→IP) e ARP (IP→MAC).",
      palavraCritica: "endereço lógico ... DNS ... ARP",
    },
    comentario: {
      resolucao: "CERTO. São três camadas encadeadas, e a ordem importa. Nome de domínio para IP é o DNS. IP para MAC é o ARP — e ele só resolve dentro do MESMO segmento de rede local; quando o destino está fora dela, o ARP devolve o MAC do roteador, não o da máquina final. O IP é lógico e muda quando você troca de rede; o MAC é físico e vem gravado na placa. As inversões que a banca usa: dizer que o DNS converte IP em MAC, ou que o ARP traduz nomes de domínio.",
      fundamento: "Doutrina de Informática — Internet e Redes (endereço IP, DNS, ARP).",
      macete: "IP: lógico. DNS: nome→IP. ARP: IP→MAC. Três coisas diferentes, não confundir.",
      erroComum: "Atribuir ao endereço IP, em vez de ao DNS, a função de converter nomes de domínio.",
      comoBancaPensa: "Item 'limpo' que exige a distinção precisa entre três conceitos de redes frequentemente confundidos."
    }
  },
  {
    id: "TI-105", disciplina: "TI e Segurança Cibernética", assunto: "Internet e navegação", subassunto: "Endereço IP, DNS e ARP",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Internet)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "Em redes de computadores, o endereço IP é definido como o protocolo responsável pela conversão de nomes de domínio em endereços físicos de dispositivos, função que é desempenhada de forma independente dos protocolos DNS e ARP.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "endereço IP é definido como o protocolo responsável pela conversão",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o IP é um endereço lógico (não um protocolo conversor), e que essa conversão é feita por DNS e ARP.",
      palavraCritica: "endereço IP é definido como o protocolo responsável pela conversão",
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
